import{i as e,n as t,r as n}from"./magnifier-DbmAZ0E0.js";import{a as r,i,n as a,o,r as s,s as c}from"./shared-D45aE3CK.js";var l=document.querySelector(`#app`);l.innerHTML=`
  ${o(`1.9`)}
  <main>
    <section class="lesson-hero lesson-hero--gold">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 1.9</span> The coordinate plane and circles</p>
        <h1>Turn coordinates<br><em>into geometry.</em></h1>
        <p class="lesson-hero__lede">
          Ordered pairs do more than locate points. They measure lengths, reveal midpoints,
          and turn every circle into an equation you can read and build.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#coordinate-lab">Enter the coordinate lab</a>
          <span>About 35 minutes · interactive</span>
        </div>
      </div>
      <div class="coordinate-hero-art" aria-hidden="true" data-reveal>
        <svg viewBox="0 0 520 520">
          <defs>
            <pattern id="hero-coordinate-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="currentColor" stroke-width="1" />
            </pattern>
          </defs>
          <rect x="20" y="20" width="480" height="480" rx="240" class="coordinate-hero__paper" />
          <rect x="50" y="50" width="420" height="420" fill="url(#hero-coordinate-grid)" class="coordinate-hero__grid" />
          <path d="M50 260H470M260 50V470" class="coordinate-hero__axis" />
          <circle cx="220" cy="180" r="112" class="coordinate-hero__circle" />
          <path d="M140 340L380 140" class="coordinate-hero__segment" />
          <circle cx="140" cy="340" r="10" class="coordinate-hero__point coordinate-hero__point--a" />
          <circle cx="380" cy="140" r="10" class="coordinate-hero__point coordinate-hero__point--b" />
          <circle cx="260" cy="240" r="8" class="coordinate-hero__midpoint" />
        </svg>
        <span class="coordinate-hero__formula coordinate-hero__formula--distance">${t(String.raw`d=\sqrt{(\Delta x)^2+(\Delta y)^2}`)}</span>
        <span class="coordinate-hero__formula coordinate-hero__formula--circle">${t(String.raw`(x-h)^2+(y-k)^2=r^2`)}</span>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Find distance, midpoint, and a missing endpoint</li>
        <li><span>02</span>Measure a triangle median exactly</li>
        <li><span>03</span>Build a circle from geometric information</li>
        <li><span>04</span>Read intercepts and complete the square</li>
      </ol>
    </section>

    <section class="lesson-section" id="coordinate-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>01</span> Measure the plane</p>
        <h2>Two points contain<br>three useful stories.</h2>
        <p>
          The horizontal and vertical changes form a right triangle. Average the coordinates
          for the midpoint; use the Pythagorean theorem for the distance.
        </p>
      </div>

      <div class="formula-ribbon" data-reveal>
        <div><span>Horizontal change</span><strong>${t(String.raw`\Delta x=x_2-x_1`)}</strong></div>
        <div><span>Vertical change</span><strong>${t(String.raw`\Delta y=y_2-y_1`)}</strong></div>
        <div><span>Midpoint</span><strong>${t(String.raw`M=\frac{A+B}{2}`)}</strong></div>
        <div><span>Distance</span><strong>${t(String.raw`d=\sqrt{(\Delta x)^2+(\Delta y)^2}`)}</strong></div>
      </div>

      <div class="interactive-shell coordinate-lab" data-reveal>
        <div class="interactive-shell__header">
          <div><span class="live-dot"></span><p>Draggable coordinate lab</p></div>
          <span>Drag A, B, or M · endpoints snap to integers</span>
        </div>
        <div class="coordinate-lab__body">
          <div class="coordinate-stage">
            <svg id="coordinate-svg" viewBox="0 0 560 560" role="img" aria-label="Coordinate plane with two draggable endpoints and their midpoint"></svg>
          </div>
          <div class="coordinate-controls">
            <div class="tool-label">Choose the endpoints</div>
            <div class="coordinate-input-grid">
              <fieldset>
                <legend>Point A</legend>
                <label>x₁ <input id="coord-ax" type="number" min="-10" max="10" step="1" value="-2" /></label>
                <label>y₁ <input id="coord-ay" type="number" min="-10" max="10" step="1" value="1" /></label>
              </fieldset>
              <fieldset>
                <legend>Point B</legend>
                <label>x₂ <input id="coord-bx" type="number" min="-10" max="10" step="1" value="-6" /></label>
                <label>y₂ <input id="coord-by" type="number" min="-10" max="10" step="1" value="-3" /></label>
              </fieldset>
            </div>
            <div class="preset-row">
              <button type="button" class="is-active" data-coordinate-preset="endpoint">Guided setup</button>
              <button type="button" data-coordinate-preset="free">New segment</button>
            </div>
            <div class="coordinate-metrics" aria-live="polite">
              <article><span>Change</span><strong id="coordinate-change"></strong></article>
              <article><span>Midpoint</span><strong id="coordinate-midpoint"></strong></article>
              <article><span>Distance</span><strong id="coordinate-distance"></strong><small id="coordinate-distance-decimal"></small></article>
            </div>
          </div>
        </div>
      </div>

      <div class="reverse-midpoint" data-reveal>
        <div>
          <p class="tool-label">Reverse the midpoint formula</p>
          <h3>Midpoint ${t(String.raw`M=(-4,-1)`)}. One endpoint is ${t(String.raw`A=(-2,1)`)}. Where is ${t(String.raw`B`)}?</h3>
          <p>If ${t(String.raw`M_x=\frac{A_x+B_x}{2}`)}, then ${t(String.raw`B_x=2M_x-A_x`)}. Use the same move for ${t(String.raw`y`)}.</p>
        </div>
        <div class="compact-answer">
          <label>B = ( <input id="missing-bx" type="number" aria-label="Missing endpoint x-coordinate" />, <input id="missing-by" type="number" aria-label="Missing endpoint y-coordinate" /> )</label>
          <button type="button" id="check-missing-endpoint">Check endpoint</button>
          <p id="feedback-missing-endpoint" class="answer-feedback" aria-live="polite"></p>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="median-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Midpoint, then distance</p>
        <h2>A median is<br>a two-formula problem.</h2>
        <p>First locate the midpoint of the opposite side. Then measure from the remaining vertex to that midpoint.</p>
      </div>

      <div class="median-workbench" data-reveal>
        <div class="median-graph">
            <svg id="median-svg" viewBox="0 0 560 560" role="img" aria-label="Triangle with vertices A, B, C and median from B to midpoint M. Drag M to move the whole triangle."></svg>
        </div>
        <div class="median-solution">
          <p class="tool-label">Median practice</p>
          <h3 id="median-coordinates">A(1, −1), B(4, 5), C(−9, 3)</h3>
          <p class="drag-hint">Drag the green M point to move the whole triangle.</p>
          <ol>
            <li><span>1</span><div><strong>Find midpoint M of AC.</strong><p>Average A and C—not A and B.</p></div></li>
            <li><span>2</span><div><strong>Measure BM.</strong><p>Use B and the midpoint you just found.</p></div></li>
            <li><span>3</span><div><strong>Simplify the radical.</strong><p>${t(String.raw`\sqrt{80}=\sqrt{16\cdot5}=4\sqrt5`)}.</p></div></li>
          </ol>
          <div class="median-answer-grid">
            <label class="coordinate-answer">M = ( <input id="median-mx" type="number" aria-label="Midpoint x-coordinate" />, <input id="median-my" type="number" aria-label="Midpoint y-coordinate" /> )</label>
            <label class="radical-answer">BM = <input id="median-coefficient" type="number" aria-label="Coefficient outside the radical" />√<input id="median-radicand" type="number" aria-label="Number inside the radical" /></label>
          </div>
          <button class="lesson-control-button" type="button" id="check-median">Check the median</button>
          <p id="feedback-median" class="answer-feedback answer-feedback--dark" aria-live="polite"></p>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="diameter-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Build a circle</p>
        <h2>A diameter gives you<br>the whole equation.</h2>
        <p>The center is the midpoint of the diameter. The radius is half its length—or use one endpoint to find ${t(String.raw`r^2`)} directly.</p>
      </div>

      <div class="interactive-shell diameter-lab" data-reveal>
        <div class="interactive-shell__header">
          <div><span class="live-dot"></span><p>Circle-from-diameter studio</p></div>
          <span>Drag P, Q, or center C</span>
        </div>
        <div class="diameter-lab__body">
          <div class="coordinate-stage coordinate-stage--light">
            <svg id="diameter-svg" viewBox="0 0 560 560" role="img" aria-label="Circle determined by two draggable diameter endpoints"></svg>
          </div>
          <div class="diameter-controls">
            <div class="coordinate-input-grid">
              <fieldset>
                <legend>Endpoint P</legend>
                <label>x <input id="diameter-px" type="number" min="-10" max="10" value="-5" /></label>
                <label>y <input id="diameter-py" type="number" min="-10" max="10" value="6" /></label>
              </fieldset>
              <fieldset>
                <legend>Endpoint Q</legend>
                <label>x <input id="diameter-qx" type="number" min="-10" max="10" value="3" /></label>
                <label>y <input id="diameter-qy" type="number" min="-10" max="10" value="2" /></label>
              </fieldset>
            </div>
            <div class="diameter-derivation" aria-live="polite">
              <div><span>Center = midpoint</span><strong id="diameter-center">(−1, 4)</strong></div>
              <div><span>Radius squared</span><strong id="diameter-radius-squared"></strong></div>
              <div class="diameter-equation"><span>Circle equation</span><strong id="diameter-equation"></strong></div>
            </div>
            <p class="concept-callout"><strong>Fast route:</strong> after finding the center, compute r² with the squared changes. You do not need to simplify r first.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="circle-analyzer">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Read a circle</p>
        <h2>The signs hide the center.<br>The radius controls the reach.</h2>
        <p>Inside each square, the center uses the opposite sign. Intercepts appear only when the circle reaches an axis.</p>
      </div>

      <div class="equation-bridge" data-reveal>
        <article><span>Graph</span><strong>Every plotted point makes the equation true.</strong><p>A graph is the complete set of solution pairs (x, y).</p></article>
        <article><span>Intercepts</span><strong>On an axis, one coordinate is zero.</strong><p>Set y = 0 for x-intercepts; set x = 0 for y-intercepts.</p></article>
        <article><span>Symmetry test</span><strong>Replace a coordinate and compare.</strong><p>Use y → −y for the x-axis, x → −x for the y-axis, or both for the origin.</p></article>
      </div>

      <div class="circle-analyzer" data-reveal>
        <div class="circle-analyzer__stage">
          <svg id="circle-analyzer-svg" viewBox="0 0 560 560" role="img" aria-label="Adjustable circle on a coordinate plane"></svg>
        </div>
        <div class="circle-analyzer__controls">
          <p class="tool-label">Adjust the standard form</p>
          <div class="circle-equation-display" id="circle-equation-display"></div>
          <label for="circle-h">Center h <output id="circle-h-output">3</output></label>
          <input id="circle-h" type="range" min="-5" max="5" step="1" value="3" />
          <label for="circle-k">Center k <output id="circle-k-output">−1</output></label>
          <input id="circle-k" type="range" min="-5" max="5" step="1" value="-1" />
          <label for="circle-r2">Radius squared r² <output id="circle-r2-output">14</output></label>
          <input id="circle-r2" type="range" min="1" max="36" step="1" value="14" />
          <div class="circle-facts" aria-live="polite">
            <article><span>Diameter</span><strong id="circle-diameter"></strong></article>
            <article><span>Center location</span><strong id="circle-quadrant">Quadrant IV</strong></article>
            <article><span>Center to origin</span><strong id="circle-origin-distance"></strong></article>
            <article><span>x-intercepts</span><strong id="circle-x-intercepts"></strong></article>
            <article><span>y-intercepts</span><strong id="circle-y-intercepts"></strong></article>
          </div>
        </div>
      </div>
      <p class="intercept-rule" data-reveal>
        <strong>To find intercepts:</strong>
        set <em>y = 0</em> for x-intercepts and set <em>x = 0</em> for y-intercepts. Keep the answers exact.
      </p>
    </section>

    <section class="lesson-section lesson-section--ink" id="complete-square">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>05</span> Reveal the standard form</p>
        <h2>Complete two squares.<br>Protect the balance.</h2>
        <p>Group the x-terms and y-terms, add the needed square to both sides, then read the center and radius.</p>
      </div>

      <div class="square-studio" data-reveal>
        <div class="square-studio__steps">
          <p class="tool-label">Convert the general-form equation</p>
          <h3>${t(String.raw`x^2+y^2-10x+12y+54=0`)}</h3>
          <ol>
            <li class="is-visible"><span>1</span><p>${t(String.raw`(x^2-10x)+(y^2+12y)=-54`)}</p></li>
            <li><span>2</span><p>Add 25 and 36 to both sides.</p></li>
            <li><span>3</span><p>${t(String.raw`(x-5)^2+(y+6)^2=7`)}</p></li>
          </ol>
          <button type="button" id="next-square-step">Reveal next step <span aria-hidden="true">→</span></button>
        </div>
        <div class="square-studio__answer">
          <p class="tool-label">Read the finished circle</p>
          <div class="square-answer-fields">
            <label>Center h <input id="complete-h" type="number" /></label>
            <label>Center k <input id="complete-k" type="number" /></label>
            <label>Radius √<input id="complete-radicand" type="number" aria-label="Radius radicand" /></label>
          </div>
          <button class="lesson-control-button" type="button" id="check-complete-square">Check center and radius</button>
          <p id="feedback-complete-square" class="answer-feedback answer-feedback--dark" aria-live="polite"></p>
          <div class="completion-rule">
            <span>Half, then square</span>
            <p>${t(String.raw`x^2+bx`)} becomes ${t(String.raw`(x+\frac b2)^2`)} after adding ${t(String.raw`(\frac b2)^2`)}.</p>
          </div>
        </div>
      </div>

      <div class="tangent-card" data-reveal>
        <div>
          <p class="tool-label">Tangent-circle checkpoint</p>
          <h3>A circle centered at (−5, 3) is tangent to the y-axis.</h3>
          <p>The radius is the horizontal distance from the center to x = 0.</p>
        </div>
        <div class="tangent-card__answer">
          <label>Radius <input id="tangent-radius" type="number" /></label>
          <label for="tangent-equation">Choose the equation</label>
          <select id="tangent-equation">
            <option value="">Choose…</option>
            <option value="correct">(x + 5)² + (y − 3)² = 25</option>
            <option value="signs">(x − 5)² + (y + 3)² = 25</option>
            <option value="radius">(x + 5)² + (y − 3)² = 5</option>
          </select>
          <button type="button" id="check-tangent">Check tangent circle</button>
          <p id="feedback-tangent" class="answer-feedback answer-feedback--dark" aria-live="polite"></p>
        </div>
      </div>
    </section>

    <section class="lesson-section readiness readiness--gold">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>06</span> Section readiness</p>
        <h2>Know the first move<br>before doing arithmetic.</h2>
      </div>
      <div class="first-move-grid" data-reveal>
        <article><span>Missing endpoint</span><strong>Double the midpoint, then subtract the known endpoint.</strong></article>
        <article><span>Triangle median</span><strong>Midpoint of the opposite side, then distance.</strong></article>
        <article><span>Diameter endpoints</span><strong>Midpoint gives center; half-distance gives radius.</strong></article>
        <article><span>General circle equation</span><strong>Group terms and complete both squares.</strong></article>
        <article><span>Tangent to y-axis</span><strong>Radius is the center’s horizontal distance to x = 0.</strong></article>
      </div>
      <aside class="ready-banner ready-banner--gold" data-reveal>
        <span>You are Section 1.9-ready when</span>
        <p>You can move between a picture, an exact measurement, and a circle equation—and explain why each formula fits.</p>
        <a href="#coordinate-lab">Revisit the coordinate lab <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${r({})}
`,e(l);var u=560,d=10,f=u/20,p=e=>(e+d)*f,m=e=>(d-e)*f;function h(e){return Math.max(-10,Math.min(d,Math.round(e)))}function g(e){let t=a(e);return t.startsWith(`-`)?`−${t.slice(1)}`:t}function _(e){return e.replaceAll(`−`,`-`).replaceAll(`±`,String.raw`\pm`).replace(/√([\d.]+)/g,String.raw`\sqrt{$1}`)}function v({x:e,y:t}){return`(${g(e)}, ${g(t)})`}function y(e,t=1){if(!Number.isFinite(e)||e<0)return`not real`;if(i(e,0))return`0`;if(!Number.isInteger(e))return`√${a(e)}`;let n=t,r=e;for(let t=Math.floor(Math.sqrt(e));t>=2;--t)if(e%(t*t)===0){n*=t,r=e/(t*t);break}return r===1?String(n):`${n===1?``:n}√${r}`}function b({quadrants:e=!0}={}){let t=[];for(let e=-10;e<=d;e+=1){let n=p(e),r=e===0?`coordinate-axis`:e%5==0?`coordinate-grid-major`:`coordinate-grid-line`;t.push(`<line x1="${n}" y1="0" x2="${n}" y2="${u}" class="${r}" />`),t.push(`<line x1="0" y1="${n}" x2="${u}" y2="${n}" class="${r}" />`)}let n=[];for(let e=-8;e<=8;e+=2)e!==0&&(n.push(`<text x="${p(e)+5}" y="${m(0)-7}" class="coordinate-number">${g(e)}</text>`),n.push(`<text x="${p(0)+7}" y="${m(e)-5}" class="coordinate-number">${g(e)}</text>`));let r=e?`<text x="412" y="86" class="quadrant-label">I</text><text x="130" y="86" class="quadrant-label">II</text><text x="122" y="475" class="quadrant-label">III</text><text x="408" y="475" class="quadrant-label">IV</text>`:``;return`${t.join(``)}${n.join(``)}${r}`}function x(e,t,n,r=!1){return`
    <g class="coordinate-point ${n}" ${r?`data-drag-point="${e}"`:``} tabindex="${r?`0`:`-1`}" aria-label="Point ${e} ${v(t)}">
      <circle cx="${p(t.x)}" cy="${m(t.y)}" r="10" />
      <text x="${p(t.x)+14}" y="${m(t.y)-13}">${e}${v(t)}</text>
    </g>
  `}function S(e,t,n,r={}){let i=null,a=null;function o(t){let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width*u,i=(t.clientY-n.top)/n.height*u;return{x:r/f-d,y:d-i/f}}e.addEventListener(`pointerdown`,n=>{let s=n.target.closest(`[data-drag-point]`);if(!s)return;n.preventDefault(),i=s.dataset.dragPoint;let c=r[i];c&&(a={pointer:o(n),points:Object.fromEntries(c.map(e=>[e,{...t[e]}]))}),e.setPointerCapture(n.pointerId)}),e.addEventListener(`pointermove`,e=>{if(!i)return;let s=o(e),c=r[i];if(c&&a){let e=Math.round(s.x-a.pointer.x),n=Math.round(s.y-a.pointer.y),r=Math.max(...c.map(e=>-10-a.points[e].x)),i=Math.min(...c.map(e=>d-a.points[e].x)),o=Math.max(...c.map(e=>-10-a.points[e].y)),l=Math.min(...c.map(e=>d-a.points[e].y)),u=Math.max(r,Math.min(i,e)),f=Math.max(o,Math.min(l,n));c.forEach(e=>{t[e]={x:a.points[e].x+u,y:a.points[e].y+f}})}else t[i]={x:h(s.x),y:h(s.y)};n()});let s=()=>{i=null,a=null};e.addEventListener(`pointerup`,s),e.addEventListener(`pointercancel`,s)}var C={A:{x:-2,y:1},B:{x:-6,y:-3}},w=document.querySelector(`#coordinate-svg`),T={A:{x:document.querySelector(`#coord-ax`),y:document.querySelector(`#coord-ay`)},B:{x:document.querySelector(`#coord-bx`),y:document.querySelector(`#coord-by`)}};function E(){let{A:e,B:t}=C,r={x:(e.x+t.x)/2,y:(e.y+t.y)/2},i=t.x-e.x,o=t.y-e.y,s=i*i+o*o;w.innerHTML=`
    ${b()}
    <path d="M${p(e.x)} ${m(e.y)}H${p(t.x)}V${m(t.y)}" class="coordinate-change-path" />
    <line x1="${p(e.x)}" y1="${m(e.y)}" x2="${p(t.x)}" y2="${m(t.y)}" class="coordinate-segment" />
    ${x(`A`,e,`coordinate-point--a`,!0)}
    ${x(`B`,t,`coordinate-point--b`,!0)}
    ${x(`M`,r,`coordinate-point--midpoint`,!0)}
  `,Object.entries(T).forEach(([e,t])=>{t.x.value=C[e].x,t.y.value=C[e].y}),n(document.querySelector(`#coordinate-change`),String.raw`\Delta x=${_(g(i))},\quad \Delta y=${_(g(o))}`),n(document.querySelector(`#coordinate-midpoint`),_(v(r))),n(document.querySelector(`#coordinate-distance`),_(y(s))),n(document.querySelector(`#coordinate-distance-decimal`),String.raw`\approx ${a(Math.sqrt(s))}`)}Object.entries(T).forEach(([e,t])=>{Object.entries(t).forEach(([t,n])=>{n.addEventListener(`input`,()=>{C[e][t]=h(Number(n.value)),E()})})}),document.querySelectorAll(`[data-coordinate-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.coordinatePreset;C.A=t===`endpoint`?{x:-2,y:1}:{x:-7,y:5},C.B=t===`endpoint`?{x:-6,y:-3}:{x:5,y:-4},document.querySelectorAll(`[data-coordinate-preset]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),E()})}),S(w,C,E,{M:[`A`,`B`]}),E(),document.querySelector(`#check-missing-endpoint`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#missing-bx`).value),t=Number(document.querySelector(`#missing-by`).value);c(document.querySelector(`#feedback-missing-endpoint`),i(e,-6)&&i(t,-3),i(e,-6)&&i(t,-3)?`Exactly. B = (−6, −3), and averaging A and B returns M = (−4, −1).`:`Use B = 2M − A coordinate by coordinate: 2(−4) − (−2), then 2(−1) − 1.`)});var D=document.querySelector(`#median-svg`),O={A:{x:1,y:-1},B:{x:4,y:5},C:{x:-9,y:3},M:{x:-4,y:1}};function k(){let{A:e,B:t,C:r,M:i}=O;D.innerHTML=`
    ${b({quadrants:!1})}
    <polygon points="${p(e.x)},${m(e.y)} ${p(t.x)},${m(t.y)} ${p(r.x)},${m(r.y)}" class="median-triangle" />
    <line x1="${p(t.x)}" y1="${m(t.y)}" x2="${p(i.x)}" y2="${m(i.y)}" class="median-line" />
    ${x(`A`,e,`coordinate-point--a`)}
    ${x(`B`,t,`coordinate-point--b`)}
    ${x(`C`,r,`coordinate-point--c`)}
    ${x(`M`,i,`coordinate-point--midpoint`,!0)}
  `,n(document.querySelector(`#median-coordinates`),_(String.raw`A${v(e)},\quad B${v(t)},\quad C${v(r)}`))}S(D,O,k,{M:[`A`,`B`,`C`,`M`]}),k(),document.querySelector(`#check-median`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#median-mx`).value),t=Number(document.querySelector(`#median-my`).value),n=Number(document.querySelector(`#median-coefficient`).value),r=Number(document.querySelector(`#median-radicand`).value),a=i(e,O.M.x)&&i(t,O.M.y)&&i(n,4)&&i(r,5);c(document.querySelector(`#feedback-median`),a,a?`Correct: M = ${v(O.M)}, so BM = √[(−8)² + (−4)²] = √80 = 4√5.`:`First average A and C to get M. Then use B${v(O.B)} and M in the distance formula.`)});function A(e,t){return i(t,0)?e:`(${e} ${t>0?`−`:`+`} ${a(Math.abs(t))})`}var j={P:{x:-5,y:6},Q:{x:3,y:2}},M=document.querySelector(`#diameter-svg`),N={P:{x:document.querySelector(`#diameter-px`),y:document.querySelector(`#diameter-py`)},Q:{x:document.querySelector(`#diameter-qx`),y:document.querySelector(`#diameter-qy`)}};function P(){let{P:e,Q:t}=j,r={x:(e.x+t.x)/2,y:(e.y+t.y)/2},i=((e.x-t.x)**2+(e.y-t.y)**2)/4,o=Math.sqrt(i)*f;M.innerHTML=`
    ${b()}
    <circle cx="${p(r.x)}" cy="${m(r.y)}" r="${o}" class="diameter-circle" />
    <line x1="${p(e.x)}" y1="${m(e.y)}" x2="${p(t.x)}" y2="${m(t.y)}" class="diameter-segment" />
    ${x(`P`,e,`coordinate-point--a`,!0)}
    ${x(`Q`,t,`coordinate-point--b`,!0)}
    ${x(`C`,r,`coordinate-point--midpoint`,!0)}
  `,Object.entries(N).forEach(([e,t])=>{t.x.value=j[e].x,t.y.value=j[e].y}),n(document.querySelector(`#diameter-center`),_(v(r))),n(document.querySelector(`#diameter-radius-squared`),String.raw`r^2=${a(i)}`),n(document.querySelector(`#diameter-equation`),_(`${A(`x`,r.x)}^2+${A(`y`,r.y)}^2=${a(i)}`))}Object.entries(N).forEach(([e,t])=>{Object.entries(t).forEach(([t,n])=>{n.addEventListener(`input`,()=>{j[e][t]=h(Number(n.value)),P()})})}),S(M,j,P,{C:[`P`,`Q`]}),P();var F={h:3,k:-1,r2:14},I=document.querySelector(`#circle-analyzer-svg`);function L(e,t){return e===0&&t===0?`At the origin`:e===0?`On the y-axis`:t===0?`On the x-axis`:e>0&&t>0?`Quadrant I`:e<0&&t>0?`Quadrant II`:e<0&&t<0?`Quadrant III`:`Quadrant IV`}function R(e,t){if(t<0)return`None`;if(t===0)return g(e);let n=y(t);return e===0?`±${n}`:`${g(e)} ± ${n}`}function z(){let{h:e,k:t,r2:r}=F,i=Math.sqrt(r);I.innerHTML=`
    ${b()}
    <circle cx="${p(e)}" cy="${m(t)}" r="${i*f}" class="analyzer-circle" />
    <line x1="${p(e)}" y1="${m(t)}" x2="${p(e+i)}" y2="${m(t)}" class="analyzer-radius" />
    ${x(`C`,{x:e,y:t},`coordinate-point--midpoint`)}
  `,n(document.querySelector(`#circle-equation-display`),_(`${A(`x`,e)}^2+${A(`y`,t)}^2=${r}`)),document.querySelector(`#circle-h-output`).textContent=g(e),document.querySelector(`#circle-k-output`).textContent=g(t),document.querySelector(`#circle-r2-output`).textContent=r,n(document.querySelector(`#circle-diameter`),_(y(r,2))),document.querySelector(`#circle-quadrant`).textContent=L(e,t),n(document.querySelector(`#circle-origin-distance`),_(y(e*e+t*t)));let a=R(e,r-t*t),o=R(t,r-e*e);a===`None`?document.querySelector(`#circle-x-intercepts`).textContent=a:n(document.querySelector(`#circle-x-intercepts`),_(a)),o===`None`?document.querySelector(`#circle-y-intercepts`).textContent=o:n(document.querySelector(`#circle-y-intercepts`),_(o))}[[`circle-h`,`h`],[`circle-k`,`k`],[`circle-r2`,`r2`]].forEach(([e,t])=>{document.querySelector(`#${e}`).addEventListener(`input`,e=>{F[t]=Number(e.target.value),z()})}),z();var B=[...document.querySelectorAll(`.square-studio__steps li`)];document.querySelector(`#next-square-step`).addEventListener(`click`,e=>{let t=B.find(e=>!e.classList.contains(`is-visible`));t&&t.classList.add(`is-visible`),B.some(e=>!e.classList.contains(`is-visible`))||(e.currentTarget.textContent=`All steps revealed`,e.currentTarget.disabled=!0)}),document.querySelector(`#check-complete-square`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#complete-h`).value),t=Number(document.querySelector(`#complete-k`).value),n=Number(document.querySelector(`#complete-radicand`).value),r=i(e,5)&&i(t,-6)&&i(n,7);c(document.querySelector(`#feedback-complete-square`),r,r?`Correct. The circle has center (5, −6) and radius √7.`:`Half −10 to get −5, and half 12 to get 6. Then read the signs inside the squared factors carefully.`)}),document.querySelector(`#check-tangent`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#tangent-radius`).value),t=document.querySelector(`#tangent-equation`).value,n=i(e,5)&&t===`correct`;c(document.querySelector(`#feedback-tangent`),n,n?`Exactly. The center is 5 units from the y-axis, so r = 5 and r² = 25.`:`The y-axis is x = 0. Measure horizontally from x = −5, then remember that the equation uses r².`)}),s();