import{i as e,n as t,r as n}from"./magnifier-DbmAZ0E0.js";import{a as r,i,n as a,o,r as s,s as c}from"./shared-D45aE3CK.js";var l=document.querySelector(`#app`);l.innerHTML=`
  ${o(`2.3`)}
  <main>
    <section class="lesson-hero lesson-hero--information">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 2.3</span> Getting information from graphs</p>
        <h1>Ask the graph.<br><em>Read its evidence.</em></h1>
        <p class="lesson-hero__lede">
          A curve can answer questions about allowed inputs, possible outputs, solutions,
          change, and direction—if you know where to look.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#projection-lab">Interrogate the curve</a>
          <span>About 40 minutes · interactive</span>
        </div>
      </div>
      <div class="information-hero-art" aria-hidden="true" data-reveal>
        <div class="information-hero-art__paper"></div>
        <svg viewBox="0 0 600 470">
          <path class="information-hero-art__axis" d="M55 240H545M295 55V420" />
          <path class="information-hero-art__curve" d="M80 355C125 65 195 95 215 235S330 330 360 170S465 105 520 300" />
          <path class="information-hero-art__laser" d="M65 170H535" />
          <path class="information-hero-art__projection" d="M360 55V405" />
          <circle cx="360" cy="170" r="9" />
        </svg>
        <span class="information-hero-art__tag information-hero-art__tag--solve">${t(String.raw`f(x)=k`)}</span>
        <span class="information-hero-art__tag information-hero-art__tag--turn">local maximum</span>
        <span class="information-hero-art__tag information-hero-art__tag--interval">increasing →</span>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Project a graph onto its domain and range</li>
        <li><span>02</span>Solve equations and inequalities visually</li>
        <li><span>03</span>Locate extrema and classify direction</li>
        <li><span>04</span>Interpret net change and tangent slope</li>
      </ol>
    </section>

    <section class="lesson-section" id="projection-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>01</span> Read by projection</p>
        <h2>Inputs live below.<br>Outputs live beside.</h2>
        <p>Domain is the graph’s shadow on the x-axis. Range is its shadow on the y-axis. A moving input then connects one x-value to its output.</p>
      </div>

      <div class="projection-lab" data-reveal>
        <div class="information-graph information-graph--paper">
          <svg id="projection-chart" viewBox="0 0 680 500" role="img" aria-label="Function graph with domain, range, and input projections"></svg>
        </div>
        <div class="projection-lab__controls">
          <p class="tool-label">Projection reader</p>
          <div class="information-tabs" role="tablist" aria-label="Graph projection modes">
            <button type="button" class="is-active" data-projection-mode="input">Trace an input</button>
            <button type="button" data-projection-mode="domain">Show domain</button>
            <button type="button" data-projection-mode="range">Show range</button>
          </div>
          <label for="projection-x">Move x to <output id="projection-x-output">1</output></label>
          <input id="projection-x" type="range" min="-5" max="5" step="0.1" value="1" />
          <div class="projection-result" aria-live="polite">
            <span id="projection-result-label">At this input</span>
            <strong id="projection-result-main"></strong>
            <p id="projection-result-copy">Read vertically from x = 1 until you meet the curve.</p>
          </div>
          <div class="projection-facts">
            <article><span>Domain</span><strong>${t(String.raw`[-5,5]`)}</strong></article>
            <article><span>Range</span><strong>${t(String.raw`[-3,4]`)}</strong></article>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="level-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Sweep a horizontal level</p>
        <h2>Equations are crossings.<br>Inequalities are regions.</h2>
        <p>The equation ${t(String.raw`f(x)=k`)} asks where the curve meets ${t(String.raw`y=k`)}. For ${t(String.raw`f(x)>k`)}, keep the curve above the laser; for ${t(String.raw`f(x)<k`)}, keep the curve below it.</p>
      </div>

      <div class="level-lab" data-reveal>
        <div class="information-graph information-graph--light">
          <svg id="level-chart" viewBox="0 0 680 500" role="img" aria-label="Function graph with a movable horizontal level"></svg>
        </div>
        <div class="level-lab__controls">
          <p class="tool-label">Horizontal laser</p>
          <div class="information-tabs information-tabs--dark" role="tablist" aria-label="Equation and inequality modes">
            <button type="button" class="is-active" data-level-relation="equal">${t(String.raw`f(x)=k`)}</button>
            <button type="button" data-level-relation="above">${t(String.raw`f(x)>k`)}</button>
            <button type="button" data-level-relation="below">${t(String.raw`f(x)<k`)}</button>
          </div>
          <label for="level-y">Move k to <output id="level-y-output">1</output></label>
          <input id="level-y" type="range" min="-2" max="3" step="0.5" value="1" />
          <div class="level-result" aria-live="polite">
            <span id="level-result-label">4 crossings</span>
            <strong id="level-result-main">Read the highlighted x-values.</strong>
            <p id="level-result-copy"></p>
          </div>
          <p class="information-tip"><strong>Do not report y.</strong> The equation asks for the input values where the requested height occurs.</p>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="direction-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Follow left to right</p>
        <h2>Direction belongs<br>to an interval.</h2>
        <p>As x increases, watch whether the curve climbs, falls, or stays level. Local extrema are the turning points between those behaviors.</p>
      </div>

      <div class="direction-lab" data-reveal>
        <div class="information-graph information-graph--navy">
          <svg id="direction-chart" viewBox="0 0 680 500" role="img" aria-label="Function graph with a movable point and tangent line"></svg>
        </div>
        <div class="direction-lab__controls">
          <p class="tool-label">Direction and tangent studio</p>
          <label for="direction-x">Inspect x = <output id="direction-x-output">−4</output></label>
          <input id="direction-x" type="range" min="-5" max="5" step="0.1" value="-4" />
          <div class="direction-status" aria-live="polite">
            <span id="direction-sign">Positive tangent slope</span>
            <strong id="direction-state">The function is increasing.</strong>
            <p id="direction-detail">Nearby outputs rise as you read from left to right.</p>
          </div>
          <div class="direction-timeline" aria-label="Behavior intervals">
            <button type="button" data-direction-x="-4"><span>↑</span>${t(String.raw`(-5,-3)`)}</button>
            <button type="button" data-direction-x="-2"><span>↓</span>${t(String.raw`(-3,-1)`)}</button>
            <button type="button" data-direction-x="0"><span>↑</span>${t(String.raw`(-1,1.5)`)}</button>
            <button type="button" data-direction-x="2.2"><span>↓</span>${t(String.raw`(1.5,3)`)}</button>
            <button type="button" data-direction-x="4"><span>↑</span>${t(String.raw`(3,5)`)}</button>
          </div>
        </div>
      </div>

      <div class="turning-point-compare" data-reveal>
        <article>
          <div class="turning-mini-graph" aria-hidden="true">
            <svg viewBox="0 0 150 110"><path d="M10 88C35 34 55 22 75 22S115 34 140 88" /><line x1="43" y1="22" x2="107" y2="22" /><circle cx="75" cy="22" r="5" /></svg>
          </div>
          <div><span>Smooth turning point</span><strong>Horizontal tangent · slope 0</strong><p>The direction changes and the derivative exists.</p></div>
        </article>
        <article>
          <div class="turning-mini-graph turning-mini-graph--cusp" aria-hidden="true">
            <svg viewBox="0 0 150 110"><path d="M10 88L75 22L140 88" /><circle cx="75" cy="22" r="5" /></svg>
          </div>
          <div><span>Sharp turning point</span><strong>Cusp · slope undefined</strong><p>A local extremum does not guarantee a horizontal tangent.</p></div>
        </article>
        <article>
          <div class="turning-mini-graph" aria-hidden="true">
            <svg viewBox="0 0 150 110"><path d="M10 88C42 88 45 57 75 55S105 22 140 22" /><line x1="43" y1="55" x2="107" y2="55" /><circle cx="75" cy="55" r="5" /></svg>
          </div>
          <div><span>Flat without turning</span><strong>Slope 0 · still increasing</strong><p>A horizontal tangent alone does not prove a local extremum.</p></div>
        </article>
        <article>
          <div class="turning-mini-graph" aria-hidden="true">
            <svg viewBox="0 0 150 110"><path d="M10 55H140" /><circle cx="75" cy="55" r="5" /></svg>
          </div>
          <div><span>Constant interval</span><strong>Every tangent has slope 0</strong><p>Outputs remain unchanged throughout an interval, not just at one point.</p></div>
        </article>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="context-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Read change in context</p>
        <h2>A graph shows what changed.<br>Context explains why.</h2>
        <p>Increasing and decreasing describe the direction of a quantity. Net change compares only two endpoints: final value minus initial value.</p>
      </div>

      <div class="context-lab" data-reveal>
        <div class="information-graph information-graph--paper">
          <svg id="context-chart" viewBox="0 0 720 470" role="img" aria-label="Body weight changing with age"></svg>
        </div>
        <div class="context-lab__controls">
          <p class="tool-label">Change-over-time explorer</p>
          <label for="context-age">Inspect age <output id="context-age-output">30</output></label>
          <input id="context-age" type="range" min="0" max="70" step="1" value="30" />
          <div class="context-current" aria-live="polite">
            <span id="context-trend">Local minimum</span>
            <strong id="context-weight"></strong>
            <p id="context-story">The graph records a sudden dip and recovery. It does not identify the cause by itself.</p>
          </div>
          <div class="net-change-builder">
            <p>Build a net change</p>
            <label>From age <input id="context-start" type="number" min="0" max="70" step="1" value="10" /></label>
            <label>to age <input id="context-end" type="number" min="0" max="70" step="1" value="20" /></label>
            <div id="context-net-change" aria-live="polite"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="radical-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>05</span> Predict before graphing</p>
        <h2>The formula sets<br>the graph’s boundaries.</h2>
        <p>For a real square root, the radicand cannot be negative. The sign outside the radical then controls which output side appears.</p>
      </div>

      <div class="radical-lab" data-reveal>
        <div class="information-graph information-graph--navy">
          <svg id="radical-chart" viewBox="0 0 520 520" role="img" aria-label="Graph of the selected radical function"></svg>
        </div>
        <div class="radical-lab__controls">
          <p class="tool-label">Radicand gate</p>
          <div class="information-tabs" role="tablist" aria-label="Radical examples">
            <button type="button" class="is-active" data-radical="shifted">${t(String.raw`\sqrt{x+2}`)}</button>
            <button type="button" data-radical="semicircle">${t(String.raw`-\sqrt{25-x^2}`)}</button>
          </div>
          <div class="radical-rule" aria-live="polite">
            <span id="radical-formula"></span>
            <strong id="radical-constraint"></strong>
          </div>
          <label for="radical-x">Test x = <output id="radical-x-output">−2</output></label>
          <input id="radical-x" type="range" min="-6" max="6" step="0.5" value="-2" />
          <div class="radical-test" id="radical-test" aria-live="polite"></div>
          <dl class="radical-facts">
            <div><dt>Domain</dt><dd id="radical-domain"></dd></div>
            <div><dt>Range</dt><dd id="radical-range"></dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="lesson-section readiness readiness--information" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>06</span> Final readiness</p>
        <h2>Can you translate<br>shape into statements?</h2>
        <p>Project, scan, follow left to right, and finish with final minus initial. Use the graph—not a guess—as evidence.</p>
      </div>
      <div class="information-check-grid">
        <article class="information-check" data-reveal>
          <span>Projection</span>
          <h3>Read the main curve.</h3>
          <label>Domain
            <select id="check-domain"><option value="">Choose…</option><option value="correct">[−5, 5]</option><option value="a">(−5, 5)</option><option value="b">[−3, 4]</option></select>
          </label>
          <label>Range
            <select id="check-range"><option value="">Choose…</option><option value="a">[−5, 5]</option><option value="correct">[−3, 4]</option><option value="b">(−3, 4)</option></select>
          </label>
          <button type="button" id="check-projection">Check projections</button>
          <p id="feedback-projection" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="information-check" data-reveal>
          <span>Behavior</span>
          <h3>Find turns and intervals.</h3>
          <label>Number of local minima <input id="check-minima" type="number" min="0" /></label>
          <label>Increasing intervals
            <select id="check-increasing"><option value="">Choose…</option><option value="a">(−3,−1) ∪ (1.5,3)</option><option value="correct">(−5,−3) ∪ (−1,1.5) ∪ (3,5)</option><option value="b">(−5,5)</option></select>
          </label>
          <button type="button" id="check-behavior">Check behavior</button>
          <p id="feedback-behavior" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="information-check" data-reveal>
          <span>Radicals</span>
          <h3>Let the radicand decide.</h3>
          <label><span class="information-check__prompt">Domain of ${t(String.raw`\sqrt{x+2}`)}</span>
            <select id="check-radical-domain"><option value="">Choose…</option><option value="a">(−2, ∞)</option><option value="correct">[−2, ∞)</option><option value="b">[0, ∞)</option></select>
          </label>
          <label><span class="information-check__prompt">Range of ${t(String.raw`-\sqrt{25-x^2}`)}</span>
            <select id="check-radical-range"><option value="">Choose…</option><option value="a">[−5, 5]</option><option value="correct">[−5, 0]</option><option value="b">[0, 5]</option></select>
          </label>
          <button type="button" id="check-radicals">Check radicals</button>
          <p id="feedback-radicals" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="information-check" data-reveal>
          <span>Change and slope</span>
          <h3>Use endpoints and direction.</h3>
          <label>Net change from age 10 to 20 <input id="check-net-change" type="number" /></label>
          <label>Slope at a smooth local maximum
            <select id="check-turn-slope"><option value="">Choose…</option><option value="a">Positive</option><option value="b">Negative</option><option value="correct">Zero</option></select>
          </label>
          <button type="button" id="check-change">Check both</button>
          <p id="feedback-change" class="answer-feedback" aria-live="polite"></p>
        </article>
      </div>
      <aside class="ready-banner ready-banner--information" data-reveal>
        <span>You are graph-ready when</span>
        <p>You can turn crossings, projections, turns, and endpoints into precise algebraic statements.</p>
        <a href="#projection-lab">Interrogate the curve again <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${r({previous:{href:`pages/sections/2-2.html`,label:`Section 2.2 · Graphs of functions`},next:{href:`pages/sections/2-6.html`,label:`Section 2.6 · Transformations`}})}
`,e(l);function u(e,t=2){let n=Number(e.toFixed(t)),r=a(n);return r.startsWith(`-`)?`−${r.slice(1)}`:r}function d(e,t=2){return u(e,t).replace(`−`,`-`)}function f({width:e,height:t,padding:n=48,xMin:r,xMax:i,yMin:a,yMax:o,equalScale:s=!1}){let c=(e-2*n)/(i-r),l=(t-2*n)/(o-a);s&&(c=l=Math.min(c,l));let u=(i-r)*c,d=(o-a)*l,f=(e-u)/2,p=(t-d)/2;return{width:e,height:t,xMin:r,xMax:i,yMin:a,yMax:o,left:f,right:f+u,top:p,bottom:p+d,x:e=>f+(e-r)*c,y:e=>p+(o-e)*l}}function p(e,{xStep:t=1,yStep:n=1,labelStep:r=2,light:i=!1}={}){let a=[];for(let n=Math.ceil(e.xMin/t)*t;n<=e.xMax+1e-8;n+=t)a.push(`<line x1="${e.x(n)}" y1="${e.top}" x2="${e.x(n)}" y2="${e.bottom}" class="info-grid-line ${i?`is-light`:``}" />`),n!==0&&Number.isInteger(n/r)&&a.push(`<text x="${e.x(n)}" y="${e.y(0)+20}" text-anchor="middle" class="info-grid-label ${i?`is-light`:``}">${u(n)}</text>`);for(let t=Math.ceil(e.yMin/n)*n;t<=e.yMax+1e-8;t+=n)a.push(`<line x1="${e.left}" y1="${e.y(t)}" x2="${e.right}" y2="${e.y(t)}" class="info-grid-line ${i?`is-light`:``}" />`),t!==0&&Number.isInteger(t/r)&&a.push(`<text x="${e.x(0)+10}" y="${e.y(t)-7}" class="info-grid-label ${i?`is-light`:``}">${u(t)}</text>`);return e.yMin<=0&&e.yMax>=0&&a.push(`<line x1="${e.left}" y1="${e.y(0)}" x2="${e.right}" y2="${e.y(0)}" class="info-axis-line ${i?`is-light`:``}" />`),e.xMin<=0&&e.xMax>=0&&a.push(`<line x1="${e.x(0)}" y1="${e.top}" x2="${e.x(0)}" y2="${e.bottom}" class="info-axis-line ${i?`is-light`:``}" />`),a.join(``)}function m(e,t){return e.map(([e,n],r)=>`${r?`L`:`M`}${t.x(e)} ${t.y(n)}`).join(` `)}function h(e,t,n,r=.04){let i=[];for(let a=e;a<t;a+=r)i.push([a,n(a)]);return i.push([t,n(t)]),i}var g=[{x:-5,y:-3},{x:-3,y:3,kind:`local maximum`},{x:-1,y:0,kind:`local minimum`},{x:1.5,y:2,kind:`local maximum`},{x:3,y:-1,kind:`local minimum`},{x:5,y:4}];function _(e){for(let t=0;t<g.length-1;t+=1)if(e<=g[t+1].x+1e-9)return t;return g.length-2}function v(e){let t=_(Math.max(-5,Math.min(5,e))),n=g[t],r=g[t+1],i=(e-n.x)/(r.x-n.x),a=i*i*(3-2*i);return n.y+(r.y-n.y)*a}function y(e){if(g.find(t=>i(e,t.x,.001)))return 0;let t=_(e),n=g[t],r=g[t+1],a=(e-n.x)/(r.x-n.x);return(r.y-n.y)*6*a*(1-a)/(r.x-n.x)}var b=h(-5,5,v,.025),x=f({width:680,height:500,padding:27.5,xMin:-6,xMax:6,yMin:-4,yMax:5});function S({light:e=!1}={}){return`
    ${p(x,{light:e})}
    <path d="${m(b,x)}" class="info-main-curve ${e?`is-light`:``}" />
    <circle cx="${x.x(-5)}" cy="${x.y(-3)}" r="7" class="info-endpoint ${e?`is-light`:``}" />
    <circle cx="${x.x(5)}" cy="${x.y(4)}" r="7" class="info-endpoint ${e?`is-light`:``}" />
  `}var C=document.querySelector(`#projection-chart`),w=document.querySelector(`#projection-x`),T=`input`;function E(){let e=Number(w.value),t=v(e),r=`
    <line x1="${x.x(e)}" y1="${x.y(0)}" x2="${x.x(e)}" y2="${x.y(t)}" class="projection-line" />
    <line x1="${x.x(0)}" y1="${x.y(t)}" x2="${x.x(e)}" y2="${x.y(t)}" class="projection-line projection-line--soft" />
    <circle cx="${x.x(e)}" cy="${x.y(t)}" r="9" class="info-focus-point" />
  `,i=`At this input`,a=String.raw`f(${d(e,1)})\approx ${d(t,1)}`,o=`Read vertically from x = ${u(e,1)} until you meet the curve.`;T===`domain`?(r=`<line x1="${x.x(-5)}" y1="${x.y(0)}" x2="${x.x(5)}" y2="${x.y(0)}" class="projection-shadow projection-shadow--domain" />`,i=`Horizontal shadow`,a=String.raw`D_f=[-5,5]`,o=`Both endpoints are filled, so −5 and 5 are included.`):T===`range`&&(r=`<line x1="${x.x(0)}" y1="${x.y(-3)}" x2="${x.x(0)}" y2="${x.y(4)}" class="projection-shadow projection-shadow--range" />`,i=`Vertical shadow`,a=String.raw`R_f=[-3,4]`,o=`The curve reaches every height from its lowest to its highest output.`),C.innerHTML=`${S()}${r}`,document.querySelector(`#projection-x-output`).textContent=u(e,1),document.querySelector(`#projection-result-label`).textContent=i,n(document.querySelector(`#projection-result-main`),a),document.querySelector(`#projection-result-copy`).textContent=o,w.disabled=T!==`input`}document.querySelectorAll(`[data-projection-mode]`).forEach(e=>e.addEventListener(`click`,()=>{T=e.dataset.projectionMode,document.querySelectorAll(`[data-projection-mode]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),E()})),w.addEventListener(`input`,E),E();var D=document.querySelector(`#level-chart`),O=document.querySelector(`#level-y`),k=`equal`;function A(e){let t=[];for(let n=0;n<g.length-1;n+=1){let r=g[n],a=g[n+1];if(e<Math.min(r.y,a.y)-1e-8||e>Math.max(r.y,a.y)+1e-8||(i(e,r.y)&&!t.some(e=>i(e,r.x))&&t.push(r.x),i(e,a.y)&&!t.some(e=>i(e,a.x))&&t.push(a.x),i(r.y,a.y)||i(e,r.y)||i(e,a.y)))continue;let o=r.x,s=a.x;for(let t=0;t<40;t+=1){let t=(o+s)/2;(v(o)-e)*(v(t)-e)<=0?s=t:o=t}let c=(o+s)/2;t.some(e=>i(e,c,.01))||t.push(c)}return t.sort((e,t)=>e-t)}function j(e,t){let n=h(-5,5,v,.025),r=[],i=[];return n.forEach(n=>{(t===`above`?n[1]>e:n[1]<e)?i.push(n):i.length&&(r.push(i),i=[])}),i.length&&r.push(i),r}function M(e,t){let n=[-5,...A(e),5],r=[];for(let a=0;a<n.length-1;a+=1){let o=n[a],s=n[a+1],c=(o+s)/2;if((t===`above`?v(c)>e:v(c)<e)&&s-o>.01){let n=i(o,-5)&&(t===`above`?v(-5)>e:v(-5)<e)?`[`:`(`,a=i(s,5)&&(t===`above`?v(5)>e:v(5)<e)?`]`:`)`;r.push(`${n}${u(o,1)}, ${u(s,1)}${a}`)}}return r.join(` ∪ `)||`no x-values`}function N(){let e=Number(O.value),t=A(e),r=k===`equal`?``:j(e,k).map(e=>`<path d="${m(e,x)}" class="level-highlight" />`).join(``);if(D.innerHTML=`
    ${S()}
    <line x1="${x.left}" y1="${x.y(e)}" x2="${x.right}" y2="${x.y(e)}" class="level-laser" />
    ${r}
    ${t.map(t=>`<circle cx="${x.x(t)}" cy="${x.y(e)}" r="8" class="level-crossing" />`).join(``)}
  `,document.querySelector(`#level-y-output`).textContent=u(e,1),k===`equal`){document.querySelector(`#level-result-label`).textContent=`${t.length} crossing${t.length===1?``:`s`}`;let e=document.querySelector(`#level-result-main`);t.length?n(e,String.raw`x\approx ${t.map(e=>d(e,1)).join(`, `)}`):e.textContent=`No solution at this level`,document.querySelector(`#level-result-copy`).textContent=`Each crossing contributes one solution to f(x) = k.`}else{let t=k===`above`?`>`:`<`;document.querySelector(`#level-result-label`).textContent=k===`above`?`Curve above the laser`:`Curve below the laser`,n(document.querySelector(`#level-result-main`),String.raw`f(x)${t}${d(e,1)}`),document.querySelector(`#level-result-copy`).textContent=`Approximately ${M(e,k)}`}}document.querySelectorAll(`[data-level-relation]`).forEach(e=>e.addEventListener(`click`,()=>{k=e.dataset.levelRelation,document.querySelectorAll(`[data-level-relation]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),N()})),O.addEventListener(`input`,N),N();var P=document.querySelector(`#direction-chart`),F=document.querySelector(`#direction-x`);function I(){let e=Number(F.value),t=v(e),n=y(e),r=g.slice(1,-1).find(t=>i(e,t.x,.045)),a=1.05,o=[[e-a,t-n*a],[e+a,t+n*a]];P.innerHTML=`
    ${S({light:!0})}
    <path d="${m(o,x)}" class="tangent-line" />
    <line x1="${x.x(e)}" y1="${x.y(0)}" x2="${x.x(e)}" y2="${x.y(t)}" class="direction-guide" />
    <circle cx="${x.x(e)}" cy="${x.y(t)}" r="10" class="direction-point" />
    ${g.slice(1,-1).map(e=>`<circle cx="${x.x(e.x)}" cy="${x.y(e.y)}" r="5" class="turn-marker" />`).join(``)}
  `;let s=n>.03?`Positive tangent slope`:n<-.03?`Negative tangent slope`:`Horizontal tangent · slope 0`,c=n>.03?`The function is increasing.`:n<-.03?`The function is decreasing.`:`The curve is momentarily level.`,l=n>.03?`Nearby outputs rise as you read from left to right.`:n<-.03?`Nearby outputs fall as you read from left to right.`:`Check both sides to decide whether this is a maximum, minimum, or neither.`;r&&(s=`Horizontal tangent · slope 0`,c=`This is a ${r.kind}.`,l=r.kind.includes(`maximum`)?`The curve changes from increasing to decreasing.`:`The curve changes from decreasing to increasing.`),document.querySelector(`#direction-x-output`).textContent=u(e,1),document.querySelector(`#direction-sign`).textContent=s,document.querySelector(`#direction-state`).textContent=c,document.querySelector(`#direction-detail`).textContent=l}F.addEventListener(`input`,I),document.querySelectorAll(`[data-direction-x]`).forEach(e=>e.addEventListener(`click`,()=>{F.value=e.dataset.directionX,I()})),I();var L=[{x:0,y:10},{x:10,y:50},{x:20,y:150},{x:28,y:160},{x:30,y:125},{x:35,y:170},{x:70,y:200}];function R(e){let t=Math.max(0,Math.min(70,e)),n=L.length-2;for(let e=0;e<L.length-1;e+=1)if(t<=L[e+1].x){n=e;break}let r=L[n],i=L[n+1],a=(t-r.x)/(i.x-r.x),o=a*a*(3-2*a);return r.y+(i.y-r.y)*o}var z=f({width:720,height:470,padding:29,xMin:0,xMax:70,yMin:0,yMax:220}),B=document.querySelector(`#context-chart`),V=document.querySelector(`#context-age`),H=document.querySelector(`#context-start`),U=document.querySelector(`#context-end`);function W(){let e=[];for(let t=0;t<=70;t+=10)e.push(`<line x1="${z.x(t)}" y1="${z.top}" x2="${z.x(t)}" y2="${z.bottom}" class="info-grid-line" />`),e.push(`<text x="${z.x(t)}" y="${z.bottom+16}" text-anchor="middle" class="info-grid-label">${t}</text>`);for(let t=0;t<=200;t+=50)e.push(`<line x1="${z.left}" y1="${z.y(t)}" x2="${z.right}" y2="${z.y(t)}" class="info-grid-line" />`),e.push(`<text x="${z.left-12}" y="${z.y(t)+4}" text-anchor="end" class="info-grid-label">${t}</text>`);return e.push(`<text x="${z.right}" y="${z.bottom+23}" text-anchor="end" class="context-axis-title">age x (years)</text>`),e.push(`<text x="${z.left}" y="${z.top-18}" class="context-axis-title">W (lb)</text>`),e.join(``)}function G(){let e=Number(V.value),t=R(e),r=h(0,70,R,.2),a=`${m([[0,0],...r,[70,0]],z)} Z`;B.innerHTML=`
    ${W()}
    <path d="${a}" class="context-area" />
    <path d="${m(r,z)}" class="context-curve" />
    <line x1="${z.x(e)}" y1="${z.bottom}" x2="${z.x(e)}" y2="${z.y(t)}" class="context-guide" />
    <circle cx="${z.x(e)}" cy="${z.y(t)}" r="10" class="context-point" />
  `;let o=`Increasing`,s=`The quantity is rising as age increases.`;e>28&&e<30?(o=`Decreasing`,s=`The graph records a rapid decrease over this short interval.`):i(e,30)?(o=`Local minimum`,s=`The graph records a sudden dip and recovery. It does not identify the cause by itself.`):e===28&&(o=`Local maximum`,s=`Increasing changes to decreasing here.`),document.querySelector(`#context-age-output`).textContent=u(e,0),document.querySelector(`#context-trend`).textContent=o,n(document.querySelector(`#context-weight`),String.raw`W(${d(e,0)})\approx ${d(t,0)}\,\mathrm{lb}`),document.querySelector(`#context-story`).textContent=s}function K(){let e=Math.max(0,Math.min(70,Number(H.value))),t=Math.max(0,Math.min(70,Number(U.value))),r=R(e),i=R(t),a=i-r;n(document.querySelector(`#context-net-change`),String.raw`W(${d(t,0)})-W(${d(e,0)})=${d(i,0)}-${d(r,0)}=${d(a,0)}\,\mathrm{lb}`)}V.addEventListener(`input`,G),H.addEventListener(`input`,K),U.addEventListener(`input`,K),G(),K();var q=f({width:520,height:520,padding:27.5,xMin:-6,xMax:6,yMin:-6,yMax:6,equalScale:!0}),J=document.querySelector(`#radical-chart`),Y=document.querySelector(`#radical-x`),X=`shifted`,Z={shifted:{formulaTex:String.raw`f(x)=\sqrt{x+2}`,constraintTex:String.raw`x+2\ge0\Longrightarrow x\ge-2`,domainTex:String.raw`[-2,\infty)`,rangeTex:String.raw`[0,\infty)`,evaluate:e=>e>=-2?Math.sqrt(e+2):null,points:()=>h(-2,6,e=>Math.sqrt(e+2),.04)},semicircle:{formulaTex:String.raw`f(x)=-\sqrt{25-x^2}`,constraintTex:String.raw`25-x^2\ge0\Longrightarrow -5\le x\le5`,domainTex:String.raw`[-5,5]`,rangeTex:String.raw`[-5,0]`,evaluate:e=>Math.abs(e)<=5?-Math.sqrt(Math.max(0,25-e**2)):null,points:()=>h(-5,5,e=>-Math.sqrt(Math.max(0,25-e**2)),.03)}};function Q(){let r=Z[X],i=Number(Y.value),a=r.evaluate(i);J.innerHTML=`
    ${p(q,{light:!0})}
    ${X===`semicircle`?`<circle cx="${q.x(0)}" cy="${q.y(0)}" r="${q.x(5)-q.x(0)}" class="radical-circle-guide" />`:``}
    <path d="${m(r.points(),q)}" class="radical-curve" />
    ${a===null?``:`<circle cx="${q.x(i)}" cy="${q.y(a)}" r="9" class="radical-point" />`}
  `,n(document.querySelector(`#radical-formula`),r.formulaTex),n(document.querySelector(`#radical-constraint`),r.constraintTex),n(document.querySelector(`#radical-domain`),r.domainTex),n(document.querySelector(`#radical-range`),r.rangeTex),document.querySelector(`#radical-x-output`).textContent=u(i,1);let o=document.querySelector(`#radical-test`);o.classList.toggle(`is-blocked`,a===null),o.innerHTML=a===null?`<span>Blocked</span><strong>The radicand is negative, so there is no real output.</strong>`:`<span>Allowed</span><strong>${t(String.raw`f(${d(i,1)})=${d(a,2)}`)}</strong>`,e(o)}document.querySelectorAll(`[data-radical]`).forEach(e=>e.addEventListener(`click`,()=>{X=e.dataset.radical,Y.value=X===`shifted`?-2:0,document.querySelectorAll(`[data-radical]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),Q()})),Y.addEventListener(`input`,Q),Q(),document.querySelector(`#check-projection`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-domain`).value===`correct`&&document.querySelector(`#check-range`).value===`correct`;c(document.querySelector(`#feedback-projection`),e,e?`Correct. Project left-to-right for [−5, 5] and bottom-to-top for [−3, 4].`:`Use the x-axis shadow for domain and the y-axis shadow for range. Filled endpoints are included.`)}),document.querySelector(`#check-behavior`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#check-minima`).value)===2&&document.querySelector(`#check-increasing`).value===`correct`;c(document.querySelector(`#feedback-behavior`),e,e?`Correct. The curve has local minima at x = −1 and x = 3 and rises on three separate intervals.`:`A local minimum occurs where decreasing changes to increasing. List intervals using x-values, not y-values.`)}),document.querySelector(`#check-radicals`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-radical-domain`).value===`correct`&&document.querySelector(`#check-radical-range`).value===`correct`;c(document.querySelector(`#feedback-radicals`),e,e?`Correct. Include zero radicands; the negative sign places the semicircle at or below the x-axis.`:`Set each radicand greater than or equal to zero. Then use the outside negative sign to determine the output side.`)}),document.querySelector(`#check-change`).addEventListener(`click`,()=>{let e=i(Number(document.querySelector(`#check-net-change`).value),100)&&document.querySelector(`#check-turn-slope`).value===`correct`;c(document.querySelector(`#feedback-change`),e,e?`Correct. W(20) − W(10) = 150 − 50 = 100, and a smooth local maximum has a horizontal tangent.`:`Net change is final minus initial. At a smooth turning point, the tangent is horizontal.`)}),s();