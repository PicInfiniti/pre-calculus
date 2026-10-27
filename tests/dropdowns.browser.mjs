// Run against a fresh production build. Requires Chrome and Node 22+.
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import {readFile, readdir, mkdtemp, rm, writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join, extname, resolve} from 'node:path';

const root = resolve('dist'), profile = await mkdtemp(join(tmpdir(), 'precalc-dropdown-'));
const types = {'.html':'text/html', '.js':'application/javascript', '.css':'text/css', '.woff2':'font/woff2', '.png':'image/png', '.svg':'image/svg+xml'};
const server = createServer(async (request, response) => {
  try {
    let path = request.url.split('?')[0].replace(/^\/pre-calculus\//, '');
    if (!path) path = 'index.html';
    const file = resolve(root, path);
    if (!file.startsWith(root + '/')) throw Error('Outside build');
    response.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream');
    response.end(await readFile(file));
  } catch { response.writeHead(404).end(); }
});
server.listen(0, '127.0.0.1');
await once(server, 'listening');
const base = `http://127.0.0.1:${server.address().port}/pre-calculus/`;
const chrome = spawn(process.env.CHROME_BIN || 'google-chrome', ['--headless', '--no-sandbox', '--disable-gpu', '--remote-debugging-port=0', '--remote-allow-origins=*', `--user-data-dir=${profile}`, 'about:blank']);
let socket, currentErrors = [], count = 0;
const failures = [];
try {
  const endpoint = await new Promise((resolve, reject) => {
    let output = '';
    chrome.stderr.on('data', data => { output += data; const match = output.match(/DevTools listening on (ws:\/\/\S+)/); if (match) resolve(match[1]); });
    chrome.on('error', reject);
    chrome.on('exit', () => reject(Error('Chrome exited before connecting')));
  });
  socket = new WebSocket(endpoint);
  await once(socket, 'open');
  const pending = new Map(); let sequence = 0;
  socket.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    if (message.id) {
      const task = pending.get(message.id);
      if (!task) return;
      pending.delete(message.id); clearTimeout(task.timer);
      message.error ? task.reject(Error(message.error.message)) : task.resolve(message.result);
    } else if (message.method === 'Runtime.exceptionThrown') currentErrors.push(message.params.exceptionDetails.exception?.description || message.params.exceptionDetails.text);
  });
  const call = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
    const id = ++sequence;
    const timer = setTimeout(() => { pending.delete(id); reject(Error(`Timed out: ${method}`)); }, 20000);
    pending.set(id, {resolve, reject, timer});
    socket.send(JSON.stringify({id, method, params, sessionId}));
  });
  const {targetId} = await call('Target.createTarget', {url:'about:blank'});
  const {sessionId} = await call('Target.attachToTarget', {targetId, flatten:true});
  const evaluate = async expression => {
    const result = await call('Runtime.evaluate', {expression, returnByValue:true, awaitPromise:true}, sessionId);
    if (result.exceptionDetails) throw Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
    return result.result.value;
  };
  await call('Page.enable', {}, sessionId);
  await call('Runtime.enable', {}, sessionId);
  const check = (name, ok) => { count++; if (!ok) failures.push(name); };
  async function load(page, width) {
    currentErrors = [];
    await call('Emulation.setDeviceMetricsOverride', {width, height:1000, deviceScaleFactor:1, mobile:false}, sessionId);
    await call('Page.navigate', {url:base + 'pages/sections/' + page}, sessionId);
    await evaluate(`new Promise((resolve,reject)=>{const poll=setInterval(()=>{if(document.querySelector('#app main')&&document.querySelector('[data-reading-magnifier]')){clearInterval(poll);resolve()}},25);setTimeout(()=>{clearInterval(poll);reject(Error('Lesson did not initialize'))},8000)})`);
    await evaluate(`document.fonts.ready.then(()=>{const style=document.createElement('style');style.textContent='html{scroll-behavior:auto!important} *{animation:none!important;transition:none!important} [data-reveal]{opacity:1!important;transform:none!important}';document.head.append(style)})`);
  }
  const pages = (await readdir(join(root, 'pages/sections'))).filter(file => file.endsWith('.html')).sort();
  let styleReference;
  for (const width of [1440, 390, 320]) {
    for (const page of pages) {
      await load(page, width);
      const result = await evaluate(`(async()=>{
        const app=document.querySelector('#app'), selects=[...app.querySelectorAll('select')], triggers=[...app.querySelectorAll('.log-expression-trigger')];
        const styles=triggers.map(trigger=>{const s=getComputedStyle(trigger);return [s.backgroundColor,s.color,s.borderRadius,s.paddingTop,s.paddingRight,s.fontSize,s.fontWeight].join('|')});
        const allEnhanced=selects.every(select=>select.classList.contains('lesson-native-select')&&getComputedStyle(select).display==='none'&&select.nextElementSibling?.classList.contains('lesson-select'));
        const changes=[];
        if(${width}===1440)for(const initial of selects){
          const select=initial.id?app.querySelector('#'+CSS.escape(initial.id)):initial;if(!select?.isConnected)continue;
          const original=select.value;
          for(const option of [...select.options].filter(option=>option.value&&!option.disabled&&!(option.parentElement.tagName==='OPTGROUP'&&option.parentElement.disabled))){
            const picker=select.nextElementSibling, trigger=picker.querySelector('[role=combobox]');
            trigger.scrollIntoView({block:'center',behavior:'instant'});trigger.click();
            const menu=document.getElementById(trigger.getAttribute('aria-controls'));
            const enabled=[...select.options].filter(option=>option.value!=='');
            menu.querySelector('[data-math-option="'+enabled.indexOf(option)+'"]').click();
            await new Promise(resolve=>setTimeout(resolve,0));
            changes.push({id:select.id,value:option.value,ok:select.value===option.value&&select.nextElementSibling.querySelector('[role=combobox]').getAttribute('aria-expanded')==='false'});
          }
          select.value=original;select.dispatchEvent(new Event('change',{bubbles:true}));await new Promise(resolve=>setTimeout(resolve,0));
        }
        if(${width}===1440)for(const picker of [...app.querySelectorAll('.log-expression-picker:not(.lesson-select)')]){
          if(!picker.isConnected)continue;const id=picker.id,original=picker.dataset.value;
          const indices=[...picker.querySelectorAll('[data-math-option]')].filter(option=>option.getAttribute('aria-disabled')!=='true').map(option=>option.dataset.mathOption);
          for(const index of indices){const trigger=picker.querySelector('[role=combobox]');trigger.scrollIntoView({block:'center',behavior:'instant'});trigger.click();document.getElementById(id+'-option-'+index).click();await new Promise(resolve=>setTimeout(resolve,0));changes.push({id,value:index,ok:picker.dataset.value===index&&trigger.getAttribute('aria-expanded')==='false'});}
          if(original!==''){const trigger=picker.querySelector('[role=combobox]');trigger.click();document.getElementById(id+'-option-'+original).click();await new Promise(resolve=>setTimeout(resolve,0));}
        }
        return {allEnhanced,styles,changes,overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth,mathErrors:!!app.querySelector('.katex-error'),selects:selects.length};
      })()`);
      if (!styleReference && result.styles.length) styleReference = result.styles[0];
      check(`${page}/${width}: all native selects use shared dropdowns`, result.allEnhanced);
      check(`${page}/${width}: common control styles`, result.styles.every(style => style === styleReference));
      check(`${page}/${width}: no horizontal page overflow`, !result.overflow);
      check(`${page}/${width}: no math rendering errors`, !result.mathErrors);
      check(`${page}/${width}: no runtime errors`, !currentErrors.length);
      result.changes.forEach(change => check(`${page}: ${change.id} selects ${change.value}`, change.ok));
      console.log(page, width, result.selects, 'selects', result.changes.length, 'choices');
    }
  }

  for (const width of [1440, 390, 320]) {
    await load('2-1.html', width);
    const behaviors = await evaluate(`(async()=>{
      const checks=[],check=(name,ok)=>checks.push({name,ok:!!ok}),app=document.querySelector('#app'),$=id=>app.querySelector('#'+id),tick=()=>new Promise(resolve=>setTimeout(resolve,0));
      const key=(trigger,key)=>trigger.dispatchEvent(new KeyboardEvent('keydown',{key,bubbles:true,cancelable:true}));
      const choose=(id,index)=>{const trigger=$(id).nextElementSibling.querySelector('[role=combobox]');trigger.scrollIntoView({block:'center',behavior:'instant'});trigger.click();document.getElementById(trigger.getAttribute('aria-controls')).querySelector('[data-math-option="'+index+'"]').click()};
      ['check-domain-one','check-domain-two','check-domain-three'].forEach(id=>{const select=$(id);choose(id,[...select.options].filter(option=>option.value!=='').findIndex(option=>option.value==='correct'))});
      $('check-domains').click();check('domain answers keep original grading',$('feedback-domains').classList.contains('is-correct'));
      choose('check-quotient',0);$('check-quotient-button').click();check('quotient answer keeps original grading',$('feedback-quotient').classList.contains('is-correct'));
      check('domain math is typeset',$('check-domain-one').nextElementSibling.querySelector('.katex'));
      const form=document.createElement('form');form.style='width:250px;overflow:hidden';form.innerHTML='<label for="dropdown-probe">Probe choice</label><select id="dropdown-probe"><option value="">Choose…</option><option value="a">Alpha</option><option value="b" disabled>Beta</option><option value="g">Gamma</option></select><button type="button" id="probe-next">Next</button>';app.append(form);await tick();
      const native=$('dropdown-probe'),picker=()=>native.nextElementSibling,trigger=()=>picker().querySelector('[role=combobox]'),menu=()=>document.getElementById(trigger().getAttribute('aria-controls'));
      check('dynamic controls enhanced',picker().classList.contains('lesson-select'));
      const changes=[];native.addEventListener('input',()=>changes.push('input'));native.addEventListener('change',()=>changes.push('change'));
      trigger().scrollIntoView({block:'center',behavior:'instant'});trigger().focus();key(trigger(),'End');
      const rect=menu().getBoundingClientRect();check('menu fits viewport',rect.left>=0&&rect.right<=document.documentElement.clientWidth+1&&rect.top>=0&&rect.bottom<=innerHeight+1);
      check('menu escapes clipped card',menu().parentElement===document.body);
      check('keyboard focus stays on trigger',document.activeElement===trigger());
      check('end highlights last option',trigger().getAttribute('aria-activedescendant').endsWith('option-2'));
      key(trigger(),'Enter');await tick();check('enter selects value and emits native events',native.value==='g'&&changes.join(',')==='input,change');
      key(trigger(),'ArrowUp');key(trigger(),'ArrowUp');key(trigger(),'Enter');await tick();check('keyboard skips disabled option',native.value==='a');
      key(trigger(),'End');key(trigger(),'Escape');check('escape preserves selection',native.value==='a'&&trigger().getAttribute('aria-expanded')==='false');
      key(trigger(),'g');key(trigger(),'Enter');await tick();check('typeahead finds label',native.value==='g');
      key(trigger(),'Home');key(trigger(),'Tab');await tick();check('tab commits active option',native.value==='a'&&trigger().getAttribute('aria-expanded')==='false');
      native.disabled=true;await tick();check('disabled state synchronized',trigger().disabled);native.disabled=false;await tick();
      native.options[1].textContent='Alphabet';await tick();check('updated labels synchronized',trigger().textContent.includes('Alphabet'));
      native.value='g';native.dispatchEvent(new Event('change',{bubbles:true}));await tick();check('programmatic change synchronized',trigger().textContent.includes('Gamma'));
      form.reset();await tick();check('form reset restores placeholder',native.value===''&&trigger().textContent.includes('Select an answer'));
      form.querySelector('label').click();check('label focuses visible control',document.activeElement===trigger());
      trigger().click();document.body.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true}));check('outside click dismisses menu',trigger().getAttribute('aria-expanded')==='false');
      trigger().click();window.dispatchEvent(new Event('resize'));check('resize dismisses menu',trigger().getAttribute('aria-expanded')==='false');
      form.remove();await tick();check('removed controls clean up portals',!document.getElementById('dropdown-probe-dropdown-options'));
      return checks;
    })()`);
    behaviors.forEach(result => check(`${width}: ${result.name}`, result.ok));
    await load('4-3.html', width);
    const reset = await evaluate(`(async()=>{
      const app=document.querySelector('#app'),$=id=>app.querySelector('#'+id),select=$('graph-base'),trigger=select.nextElementSibling.querySelector('button');
      select.value='2';select.dispatchEvent(new Event('change',{bubbles:true}));await new Promise(r=>setTimeout(r,0));$('graph-reset').click();await new Promise(r=>setTimeout(r,0));
      const evalTrigger=$('eval-case-trigger');evalTrigger.scrollIntoView({block:'center',behavior:'instant'});evalTrigger.click();document.getElementById('eval-case-option-2').click();$('eval-reveal').click();const shown=!$('eval-answer').hidden;evalTrigger.click();document.getElementById('eval-case-option-3').click();
      return {reset:select.value==='e'&&trigger.textContent.includes('e · natural log'),evaluation:shown&&$('eval-answer').hidden};
    })()`);
    check(`${width}: preset assignment updates visible dropdown`, reset.reset);
    check(`${width}: migrated exact-value picker resets reasoning`, reset.evaluation);
    await load('5-1.html', width);
    const labels = await evaluate(`(async()=>{
      const app=document.querySelector('#app'),$=id=>app.querySelector('#'+id),select=$('unit-known'),trigger=select.nextElementSibling.querySelector('button');trigger.scrollIntoView({block:'center',behavior:'instant'});trigger.click();document.getElementById('unit-known-dropdown-option-1').click();await new Promise(r=>setTimeout(r,0));return $('unit-side').nextElementSibling.textContent.includes('Right of the y-axis');
    })()`);
    check(`${width}: dependent option labels update`, labels);
    await load('7-1.html', width);
    const dynamic = await evaluate(`(async()=>{
      const app=document.querySelector('#app'),old=app.querySelector('#id-builder-rule');app.querySelector('#id-builder-reset').click();await new Promise(r=>setTimeout(r,0));const fresh=app.querySelector('#id-builder-rule');return fresh!==old&&fresh.nextElementSibling.classList.contains('lesson-select')&&fresh.nextElementSibling.querySelector('[role=combobox]');
    })()`);
    check(`${width}: rebuilt proof controls enhanced`, dynamic);
    const mirror = await evaluate(`(async()=>{
      const app=document.querySelector('#app'),radio=app.querySelector('input[type=radio]');radio.click();const before=[...app.querySelectorAll('input[type=radio]')].map(n=>n.checked).join();document.querySelector('.reading-magnifier__button').click();await new Promise(r=>setTimeout(r,100));const ok=document.querySelector('.reading-lens').inert&&[...document.querySelectorAll('.reading-lens input[type=radio]')].every(n=>!n.name)&&before===[...app.querySelectorAll('input[type=radio]')].map(n=>n.checked).join();document.querySelector('.reading-magnifier__button').click();return ok;
    })()`);
    check(`${width}: magnifier preserves radio isolation`, mirror);
  }

  // Exercise real touch events as well as narrow desktop layouts.
  await load('2-1.html', 390);
  await call('Emulation.setDeviceMetricsOverride', {width:390, height:1000, deviceScaleFactor:1, mobile:true}, sessionId);
  await call('Emulation.setTouchEmulationEnabled', {enabled:true, maxTouchPoints:1}, sessionId);
  const tap = async rect => {
    const point = {x:rect.x, y:rect.y};
    await call('Input.dispatchTouchEvent', {type:'touchStart', touchPoints:[point]}, sessionId);
    await call('Input.dispatchTouchEvent', {type:'touchEnd', touchPoints:[]}, sessionId);
    await evaluate('new Promise(resolve=>setTimeout(resolve,100))');
  };
  const touchTrigger = await evaluate(`(async()=>{const trigger=document.querySelector('#check-domain-three').nextElementSibling.querySelector('button');trigger.scrollIntoView({block:'center',behavior:'instant'});await new Promise(r=>setTimeout(r,100));const rect=trigger.getBoundingClientRect();return {x:rect.x+rect.width/2,y:rect.y+rect.height/2}})()`);
  await tap(touchTrigger);
  check('touch opens a formerly native dropdown', await evaluate(`document.querySelector('#check-domain-three-dropdown-trigger').getAttribute('aria-expanded')==='true'`));
  const touchOption = await evaluate(`(()=>{const rect=document.getElementById('check-domain-three-dropdown-option-1').getBoundingClientRect();return {x:rect.x+rect.width/2,y:rect.y+rect.height/2}})()`);
  await tap(touchOption);
  check('touch selects the original answer value', await evaluate(`document.querySelector('#check-domain-three').value==='correct'`));
  await call('Emulation.setTouchEmulationEnabled', {enabled:false}, sessionId);

  if (process.env.DROPDOWN_SCREENSHOTS) {
    const {mkdir} = await import('node:fs/promises');
    const directory = resolve(process.env.DROPDOWN_SCREENSHOTS);
    await mkdir(directory, {recursive:true});
    for (const width of [1440, 390, 320]) for (const [page, nativeId, customId] of [['2-1.html','check-domain-three',null],['6-3.html',null,'general-practice-9'],['4-3.html',null,'eval-case']]) {
      await load(page, width);
      const opened = await evaluate(`(async()=>{const app=document.querySelector('#app');const root=${nativeId ? `app.querySelector('#${nativeId}').nextElementSibling` : `app.querySelector('#${customId}') || app.querySelector('.log-expression-picker')`};const trigger=root.querySelector('[role=combobox]');trigger.scrollIntoView({block:'center',behavior:'instant'});await new Promise(r=>setTimeout(r,100));trigger.click();await new Promise(r=>setTimeout(r,100));return trigger.getAttribute('aria-expanded')==='true'})()`);
      assert.ok(opened);
      const shot = await call('Page.captureScreenshot', {format:'png'}, sessionId);
      await writeFile(join(directory, `${page.replace('.html','')}-${width}.png`), Buffer.from(shot.data,'base64'));
    }
  }
  console.log(`${count - failures.length}/${count} dropdown checks passed`);
  assert.deepEqual(failures, [], failures.join('\n'));
} finally {
  socket?.close();
  if (chrome.exitCode === null) { chrome.kill(); await once(chrome, 'exit'); }
  server.closeAllConnections();
  await new Promise(resolve => server.close(resolve));
  await rm(profile, {recursive:true, force:true, maxRetries:3, retryDelay:100});
}
