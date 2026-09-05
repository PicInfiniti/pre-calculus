import"./modulepreload-polyfill-P2Xu9kJm.js";import{a as e,i as t,n,o as r,r as i,s as a}from"./shared-BTOEHt36.js";var o=document.querySelector(`#app`);o.innerHTML=`
  ${r(`2.3`)}
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
        <span class="information-hero-art__tag information-hero-art__tag--solve">f(x) = k</span>
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
            <strong id="projection-result-main">f(1) ≈ 1.7</strong>
            <p id="projection-result-copy">Read vertically from x = 1 until you meet the curve.</p>
          </div>
          <div class="projection-facts">
            <article><span>Domain</span><strong>[−5, 5]</strong></article>
            <article><span>Range</span><strong>[−3, 4]</strong></article>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="level-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Sweep a horizontal level</p>
        <h2>Equations are crossings.<br>Inequalities are regions.</h2>
        <p>The equation f(x) = k asks where the curve meets y = k. For f(x) &gt; k, keep the curve above the laser; for f(x) &lt; k, keep the curve below it.</p>
      </div>

      <div class="level-lab" data-reveal>
        <div class="information-graph information-graph--light">
          <svg id="level-chart" viewBox="0 0 680 500" role="img" aria-label="Function graph with a movable horizontal level"></svg>
        </div>
        <div class="level-lab__controls">
          <p class="tool-label">Horizontal laser</p>
          <div class="information-tabs information-tabs--dark" role="tablist" aria-label="Equation and inequality modes">
            <button type="button" class="is-active" data-level-relation="equal">f(x) = k</button>
            <button type="button" data-level-relation="above">f(x) &gt; k</button>
            <button type="button" data-level-relation="below">f(x) &lt; k</button>
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
            <button type="button" data-direction-x="-4"><span>↑</span>(−5, −3)</button>
            <button type="button" data-direction-x="-2"><span>↓</span>(−3, −1)</button>
            <button type="button" data-direction-x="0"><span>↑</span>(−1, 1.5)</button>
            <button type="button" data-direction-x="2.2"><span>↓</span>(1.5, 3)</button>
            <button type="button" data-direction-x="4"><span>↑</span>(3, 5)</button>
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
            <strong id="context-weight">W(30) = 125 lb</strong>
            <p id="context-story">The graph records a sudden dip and recovery. It does not identify the cause by itself.</p>
          </div>
          <div class="net-change-builder">
            <p>Build a net change</p>
            <label>From age <input id="context-start" type="number" min="0" max="70" step="1" value="10" /></label>
            <label>to age <input id="context-end" type="number" min="0" max="70" step="1" value="20" /></label>
            <div id="context-net-change" aria-live="polite">W(20) − W(10) = 150 − 50 = <strong>100 lb</strong></div>
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
            <button type="button" class="is-active" data-radical="shifted">√(x + 2)</button>
            <button type="button" data-radical="semicircle">−√(25 − x²)</button>
          </div>
          <div class="radical-rule" aria-live="polite">
            <span id="radical-formula">f(x) = √(x + 2)</span>
            <strong id="radical-constraint">x + 2 ≥ 0  ⟹  x ≥ −2</strong>
          </div>
          <label for="radical-x">Test x = <output id="radical-x-output">−2</output></label>
          <input id="radical-x" type="range" min="-6" max="6" step="0.5" value="-2" />
          <div class="radical-test" id="radical-test" aria-live="polite"></div>
          <dl class="radical-facts">
            <div><dt>Domain</dt><dd id="radical-domain">[−2, ∞)</dd></div>
            <div><dt>Range</dt><dd id="radical-range">[0, ∞)</dd></div>
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
          <label>Domain of √(x + 2)
            <select id="check-radical-domain"><option value="">Choose…</option><option value="a">(−2, ∞)</option><option value="correct">[−2, ∞)</option><option value="b">[0, ∞)</option></select>
          </label>
          <label>Range of −√(25 − x²)
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
  ${e({previous:{href:`pages/sections/2-2.html`,label:`Section 2.2 · Graphs of functions`},next:{href:`pages/sections/2-6.html`,label:`Section 2.6 · Transformations`}})}
`;function s(e,t=2){let r=Number(e.toFixed(t)),i=n(r);return i.startsWith(`-`)?`−${i.slice(1)}`:i}function c({width:e,height:t,padding:n=48,xMin:r,xMax:i,yMin:a,yMax:o,equalScale:s=!1}){let c=(e-2*n)/(i-r),l=(t-2*n)/(o-a);s&&(c=l=Math.min(c,l));let u=(i-r)*c,d=(o-a)*l,f=(e-u)/2,p=(t-d)/2;return{width:e,height:t,xMin:r,xMax:i,yMin:a,yMax:o,left:f,right:f+u,top:p,bottom:p+d,x:e=>f+(e-r)*c,y:e=>p+(o-e)*l}}function l(e,{xStep:t=1,yStep:n=1,labelStep:r=2,light:i=!1}={}){let a=[];for(let n=Math.ceil(e.xMin/t)*t;n<=e.xMax+1e-8;n+=t)a.push(`<line x1="${e.x(n)}" y1="${e.top}" x2="${e.x(n)}" y2="${e.bottom}" class="info-grid-line ${i?`is-light`:``}" />`),n!==0&&Number.isInteger(n/r)&&a.push(`<text x="${e.x(n)}" y="${e.y(0)+20}" text-anchor="middle" class="info-grid-label ${i?`is-light`:``}">${s(n)}</text>`);for(let t=Math.ceil(e.yMin/n)*n;t<=e.yMax+1e-8;t+=n)a.push(`<line x1="${e.left}" y1="${e.y(t)}" x2="${e.right}" y2="${e.y(t)}" class="info-grid-line ${i?`is-light`:``}" />`),t!==0&&Number.isInteger(t/r)&&a.push(`<text x="${e.x(0)+10}" y="${e.y(t)-7}" class="info-grid-label ${i?`is-light`:``}">${s(t)}</text>`);return e.yMin<=0&&e.yMax>=0&&a.push(`<line x1="${e.left}" y1="${e.y(0)}" x2="${e.right}" y2="${e.y(0)}" class="info-axis-line ${i?`is-light`:``}" />`),e.xMin<=0&&e.xMax>=0&&a.push(`<line x1="${e.x(0)}" y1="${e.top}" x2="${e.x(0)}" y2="${e.bottom}" class="info-axis-line ${i?`is-light`:``}" />`),a.join(``)}function u(e,t){return e.map(([e,n],r)=>`${r?`L`:`M`}${t.x(e)} ${t.y(n)}`).join(` `)}function d(e,t,n,r=.04){let i=[];for(let a=e;a<t;a+=r)i.push([a,n(a)]);return i.push([t,n(t)]),i}var f=[{x:-5,y:-3},{x:-3,y:3,kind:`local maximum`},{x:-1,y:0,kind:`local minimum`},{x:1.5,y:2,kind:`local maximum`},{x:3,y:-1,kind:`local minimum`},{x:5,y:4}];function p(e){for(let t=0;t<f.length-1;t+=1)if(e<=f[t+1].x+1e-9)return t;return f.length-2}function m(e){let t=p(Math.max(-5,Math.min(5,e))),n=f[t],r=f[t+1],i=(e-n.x)/(r.x-n.x),a=i*i*(3-2*i);return n.y+(r.y-n.y)*a}function h(e){if(f.find(n=>t(e,n.x,.001)))return 0;let n=p(e),r=f[n],i=f[n+1],a=(e-r.x)/(i.x-r.x);return(i.y-r.y)*6*a*(1-a)/(i.x-r.x)}var g=d(-5,5,m,.025),_=c({width:680,height:500,padding:27.5,xMin:-6,xMax:6,yMin:-4,yMax:5});function v({light:e=!1}={}){return`
    ${l(_,{light:e})}
    <path d="${u(g,_)}" class="info-main-curve ${e?`is-light`:``}" />
    <circle cx="${_.x(-5)}" cy="${_.y(-3)}" r="7" class="info-endpoint ${e?`is-light`:``}" />
    <circle cx="${_.x(5)}" cy="${_.y(4)}" r="7" class="info-endpoint ${e?`is-light`:``}" />
  `}var y=document.querySelector(`#projection-chart`),b=document.querySelector(`#projection-x`),x=`input`;function S(){let e=Number(b.value),t=m(e),n=`
    <line x1="${_.x(e)}" y1="${_.y(0)}" x2="${_.x(e)}" y2="${_.y(t)}" class="projection-line" />
    <line x1="${_.x(0)}" y1="${_.y(t)}" x2="${_.x(e)}" y2="${_.y(t)}" class="projection-line projection-line--soft" />
    <circle cx="${_.x(e)}" cy="${_.y(t)}" r="9" class="info-focus-point" />
  `,r=`At this input`,i=`f(${s(e,1)}) ≈ ${s(t,1)}`,a=`Read vertically from x = ${s(e,1)} until you meet the curve.`;x===`domain`?(n=`<line x1="${_.x(-5)}" y1="${_.y(0)}" x2="${_.x(5)}" y2="${_.y(0)}" class="projection-shadow projection-shadow--domain" />`,r=`Horizontal shadow`,i=`Domain = [−5, 5]`,a=`Both endpoints are filled, so −5 and 5 are included.`):x===`range`&&(n=`<line x1="${_.x(0)}" y1="${_.y(-3)}" x2="${_.x(0)}" y2="${_.y(4)}" class="projection-shadow projection-shadow--range" />`,r=`Vertical shadow`,i=`Range = [−3, 4]`,a=`The curve reaches every height from its lowest to its highest output.`),y.innerHTML=`${v()}${n}`,document.querySelector(`#projection-x-output`).textContent=s(e,1),document.querySelector(`#projection-result-label`).textContent=r,document.querySelector(`#projection-result-main`).textContent=i,document.querySelector(`#projection-result-copy`).textContent=a,b.disabled=x!==`input`}document.querySelectorAll(`[data-projection-mode]`).forEach(e=>e.addEventListener(`click`,()=>{x=e.dataset.projectionMode,document.querySelectorAll(`[data-projection-mode]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),S()})),b.addEventListener(`input`,S),S();var C=document.querySelector(`#level-chart`),w=document.querySelector(`#level-y`),T=`equal`;function E(e){let n=[];for(let r=0;r<f.length-1;r+=1){let i=f[r],a=f[r+1];if(e<Math.min(i.y,a.y)-1e-8||e>Math.max(i.y,a.y)+1e-8||(t(e,i.y)&&!n.some(e=>t(e,i.x))&&n.push(i.x),t(e,a.y)&&!n.some(e=>t(e,a.x))&&n.push(a.x),t(i.y,a.y)||t(e,i.y)||t(e,a.y)))continue;let o=i.x,s=a.x;for(let t=0;t<40;t+=1){let t=(o+s)/2;(m(o)-e)*(m(t)-e)<=0?s=t:o=t}let c=(o+s)/2;n.some(e=>t(e,c,.01))||n.push(c)}return n.sort((e,t)=>e-t)}function D(e,t){let n=d(-5,5,m,.025),r=[],i=[];return n.forEach(n=>{(t===`above`?n[1]>e:n[1]<e)?i.push(n):i.length&&(r.push(i),i=[])}),i.length&&r.push(i),r}function O(e,n){let r=[-5,...E(e),5],i=[];for(let a=0;a<r.length-1;a+=1){let o=r[a],c=r[a+1],l=(o+c)/2;if((n===`above`?m(l)>e:m(l)<e)&&c-o>.01){let r=t(o,-5)&&(n===`above`?m(-5)>e:m(-5)<e)?`[`:`(`,a=t(c,5)&&(n===`above`?m(5)>e:m(5)<e)?`]`:`)`;i.push(`${r}${s(o,1)}, ${s(c,1)}${a}`)}}return i.join(` ∪ `)||`no x-values`}function k(){let e=Number(w.value),t=E(e),n=T===`equal`?``:D(e,T).map(e=>`<path d="${u(e,_)}" class="level-highlight" />`).join(``);if(C.innerHTML=`
    ${v()}
    <line x1="${_.left}" y1="${_.y(e)}" x2="${_.right}" y2="${_.y(e)}" class="level-laser" />
    ${n}
    ${t.map(t=>`<circle cx="${_.x(t)}" cy="${_.y(e)}" r="8" class="level-crossing" />`).join(``)}
  `,document.querySelector(`#level-y-output`).textContent=s(e,1),T===`equal`)document.querySelector(`#level-result-label`).textContent=`${t.length} crossing${t.length===1?``:`s`}`,document.querySelector(`#level-result-main`).textContent=t.length?`x ≈ ${t.map(e=>s(e,1)).join(`, `)}`:`No solution at this level`,document.querySelector(`#level-result-copy`).textContent=`Each crossing contributes one solution to f(x) = k.`;else{let t=T===`above`?`>`:`<`;document.querySelector(`#level-result-label`).textContent=T===`above`?`Curve above the laser`:`Curve below the laser`,document.querySelector(`#level-result-main`).textContent=`f(x) ${t} ${s(e,1)}`,document.querySelector(`#level-result-copy`).textContent=`Approximately ${O(e,T)}`}}document.querySelectorAll(`[data-level-relation]`).forEach(e=>e.addEventListener(`click`,()=>{T=e.dataset.levelRelation,document.querySelectorAll(`[data-level-relation]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),k()})),w.addEventListener(`input`,k),k();var A=document.querySelector(`#direction-chart`),j=document.querySelector(`#direction-x`);function M(){let e=Number(j.value),n=m(e),r=h(e),i=f.slice(1,-1).find(n=>t(e,n.x,.045)),a=1.05,o=[[e-a,n-r*a],[e+a,n+r*a]];A.innerHTML=`
    ${v({light:!0})}
    <path d="${u(o,_)}" class="tangent-line" />
    <line x1="${_.x(e)}" y1="${_.y(0)}" x2="${_.x(e)}" y2="${_.y(n)}" class="direction-guide" />
    <circle cx="${_.x(e)}" cy="${_.y(n)}" r="10" class="direction-point" />
    ${f.slice(1,-1).map(e=>`<circle cx="${_.x(e.x)}" cy="${_.y(e.y)}" r="5" class="turn-marker" />`).join(``)}
  `;let c=r>.03?`Positive tangent slope`:r<-.03?`Negative tangent slope`:`Horizontal tangent · slope 0`,l=r>.03?`The function is increasing.`:r<-.03?`The function is decreasing.`:`The curve is momentarily level.`,d=r>.03?`Nearby outputs rise as you read from left to right.`:r<-.03?`Nearby outputs fall as you read from left to right.`:`Check both sides to decide whether this is a maximum, minimum, or neither.`;i&&(c=`Horizontal tangent · slope 0`,l=`This is a ${i.kind}.`,d=i.kind.includes(`maximum`)?`The curve changes from increasing to decreasing.`:`The curve changes from decreasing to increasing.`),document.querySelector(`#direction-x-output`).textContent=s(e,1),document.querySelector(`#direction-sign`).textContent=c,document.querySelector(`#direction-state`).textContent=l,document.querySelector(`#direction-detail`).textContent=d}j.addEventListener(`input`,M),document.querySelectorAll(`[data-direction-x]`).forEach(e=>e.addEventListener(`click`,()=>{j.value=e.dataset.directionX,M()})),M();var N=[{x:0,y:10},{x:10,y:50},{x:20,y:150},{x:28,y:160},{x:30,y:125},{x:35,y:170},{x:70,y:200}];function P(e){let t=Math.max(0,Math.min(70,e)),n=N.length-2;for(let e=0;e<N.length-1;e+=1)if(t<=N[e+1].x){n=e;break}let r=N[n],i=N[n+1],a=(t-r.x)/(i.x-r.x),o=a*a*(3-2*a);return r.y+(i.y-r.y)*o}var F=c({width:720,height:470,padding:29,xMin:0,xMax:70,yMin:0,yMax:220}),I=document.querySelector(`#context-chart`),L=document.querySelector(`#context-age`),R=document.querySelector(`#context-start`),z=document.querySelector(`#context-end`);function B(){let e=[];for(let t=0;t<=70;t+=10)e.push(`<line x1="${F.x(t)}" y1="${F.top}" x2="${F.x(t)}" y2="${F.bottom}" class="info-grid-line" />`),e.push(`<text x="${F.x(t)}" y="${F.bottom+16}" text-anchor="middle" class="info-grid-label">${t}</text>`);for(let t=0;t<=200;t+=50)e.push(`<line x1="${F.left}" y1="${F.y(t)}" x2="${F.right}" y2="${F.y(t)}" class="info-grid-line" />`),e.push(`<text x="${F.left-12}" y="${F.y(t)+4}" text-anchor="end" class="info-grid-label">${t}</text>`);return e.push(`<text x="${F.right}" y="${F.bottom+23}" text-anchor="end" class="context-axis-title">age x (years)</text>`),e.push(`<text x="${F.left}" y="${F.top-18}" class="context-axis-title">W (lb)</text>`),e.join(``)}function V(){let e=Number(L.value),n=P(e),r=d(0,70,P,.2),i=`${u([[0,0],...r,[70,0]],F)} Z`;I.innerHTML=`
    ${B()}
    <path d="${i}" class="context-area" />
    <path d="${u(r,F)}" class="context-curve" />
    <line x1="${F.x(e)}" y1="${F.bottom}" x2="${F.x(e)}" y2="${F.y(n)}" class="context-guide" />
    <circle cx="${F.x(e)}" cy="${F.y(n)}" r="10" class="context-point" />
  `;let a=`Increasing`,o=`The quantity is rising as age increases.`;e>28&&e<30?(a=`Decreasing`,o=`The graph records a rapid decrease over this short interval.`):t(e,30)?(a=`Local minimum`,o=`The graph records a sudden dip and recovery. It does not identify the cause by itself.`):e===28&&(a=`Local maximum`,o=`Increasing changes to decreasing here.`),document.querySelector(`#context-age-output`).textContent=s(e,0),document.querySelector(`#context-trend`).textContent=a,document.querySelector(`#context-weight`).textContent=`W(${s(e,0)}) ≈ ${s(n,0)} lb`,document.querySelector(`#context-story`).textContent=o}function H(){let e=Math.max(0,Math.min(70,Number(R.value))),t=Math.max(0,Math.min(70,Number(z.value))),n=P(e),r=P(t),i=r-n;document.querySelector(`#context-net-change`).innerHTML=`W(${s(t,0)}) − W(${s(e,0)}) = ${s(r,0)} − ${s(n,0)} = <strong>${s(i,0)} lb</strong>`}L.addEventListener(`input`,V),R.addEventListener(`input`,H),z.addEventListener(`input`,H),V(),H();var U=c({width:520,height:520,padding:27.5,xMin:-6,xMax:6,yMin:-6,yMax:6,equalScale:!0}),W=document.querySelector(`#radical-chart`),G=document.querySelector(`#radical-x`),K=`shifted`,q={shifted:{formula:`f(x) = √(x + 2)`,constraint:`x + 2 ≥ 0  ⟹  x ≥ −2`,domain:`[−2, ∞)`,range:`[0, ∞)`,evaluate:e=>e>=-2?Math.sqrt(e+2):null,points:()=>d(-2,6,e=>Math.sqrt(e+2),.04)},semicircle:{formula:`f(x) = −√(25 − x²)`,constraint:`25 − x² ≥ 0  ⟹  −5 ≤ x ≤ 5`,domain:`[−5, 5]`,range:`[−5, 0]`,evaluate:e=>Math.abs(e)<=5?-Math.sqrt(Math.max(0,25-e**2)):null,points:()=>d(-5,5,e=>-Math.sqrt(Math.max(0,25-e**2)),.03)}};function J(){let e=q[K],t=Number(G.value),n=e.evaluate(t);W.innerHTML=`
    ${l(U,{light:!0})}
    ${K===`semicircle`?`<circle cx="${U.x(0)}" cy="${U.y(0)}" r="${U.x(5)-U.x(0)}" class="radical-circle-guide" />`:``}
    <path d="${u(e.points(),U)}" class="radical-curve" />
    ${n===null?``:`<circle cx="${U.x(t)}" cy="${U.y(n)}" r="9" class="radical-point" />`}
  `,document.querySelector(`#radical-formula`).textContent=e.formula,document.querySelector(`#radical-constraint`).textContent=e.constraint,document.querySelector(`#radical-domain`).textContent=e.domain,document.querySelector(`#radical-range`).textContent=e.range,document.querySelector(`#radical-x-output`).textContent=s(t,1);let r=document.querySelector(`#radical-test`);r.classList.toggle(`is-blocked`,n===null),r.innerHTML=n===null?`<span>Blocked</span><strong>The radicand is negative, so there is no real output.</strong>`:`<span>Allowed</span><strong>f(${s(t,1)}) = ${s(n,2)}</strong>`}document.querySelectorAll(`[data-radical]`).forEach(e=>e.addEventListener(`click`,()=>{K=e.dataset.radical,G.value=K===`shifted`?-2:0,document.querySelectorAll(`[data-radical]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),J()})),G.addEventListener(`input`,J),J(),document.querySelector(`#check-projection`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-domain`).value===`correct`&&document.querySelector(`#check-range`).value===`correct`;a(document.querySelector(`#feedback-projection`),e,e?`Correct. Project left-to-right for [−5, 5] and bottom-to-top for [−3, 4].`:`Use the x-axis shadow for domain and the y-axis shadow for range. Filled endpoints are included.`)}),document.querySelector(`#check-behavior`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#check-minima`).value)===2&&document.querySelector(`#check-increasing`).value===`correct`;a(document.querySelector(`#feedback-behavior`),e,e?`Correct. The curve has local minima at x = −1 and x = 3 and rises on three separate intervals.`:`A local minimum occurs where decreasing changes to increasing. List intervals using x-values, not y-values.`)}),document.querySelector(`#check-radicals`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-radical-domain`).value===`correct`&&document.querySelector(`#check-radical-range`).value===`correct`;a(document.querySelector(`#feedback-radicals`),e,e?`Correct. Include zero radicands; the negative sign places the semicircle at or below the x-axis.`:`Set each radicand greater than or equal to zero. Then use the outside negative sign to determine the output side.`)}),document.querySelector(`#check-change`).addEventListener(`click`,()=>{let e=t(Number(document.querySelector(`#check-net-change`).value),100)&&document.querySelector(`#check-turn-slope`).value===`correct`;a(document.querySelector(`#feedback-change`),e,e?`Correct. W(20) − W(10) = 150 − 50 = 100, and a smooth local maximum has a horizontal tangent.`:`Net change is final minus initial. At a smooth turning point, the tangent is horizontal.`)}),i();