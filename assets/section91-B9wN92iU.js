import"./modulepreload-polyfill-P2Xu9kJm.js";import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./shared-CBs3uHAQ.js";var c=document.querySelector(`#app`);c.innerHTML=`
  ${i(`9.1`)}
  <main>
    <section class="lesson-hero lesson-hero--coral">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 9.1</span> Systems in two variables</p>
        <h1>Where two lines<br><em>tell one story.</em></h1>
        <p class="lesson-hero__lede">
          A system asks for values that make two equations true at the same time.
          Learn to see the answer geometrically, then find it reliably with algebra.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#intersection-lab">Open the line lab</a>
          <span>About 25 minutes · interactive</span>
        </div>
      </div>
      <div class="hero-equations" aria-hidden="true" data-reveal>
        <div class="hero-equations__plane">
          <span class="hero-equations__line hero-equations__line--a"></span>
          <span class="hero-equations__line hero-equations__line--b"></span>
          <span class="hero-equations__point"></span>
          <span class="hero-equations__x">x</span>
          <span class="hero-equations__y">y</span>
        </div>
        <div class="equation-card equation-card--a">3x + 2y = 4</div>
        <div class="equation-card equation-card--b">−x + 3y = −5</div>
        <div class="equation-card equation-card--answer">(2, −1)</div>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Classify a system before solving it</li>
        <li><span>02</span>Choose substitution or elimination</li>
        <li><span>03</span>Build and solve a two-variable model</li>
        <li><span>04</span>Handle a parameter and its special value</li>
      </ol>
    </section>

    <section class="lesson-section" id="intersection-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>01</span> See the solution</p>
        <h2>One picture.<br>Three outcomes.</h2>
        <p>
          Each equation draws a line. The solution set is whatever the two lines share:
          one point, every point on the same line, or no point at all.
        </p>
      </div>

      <div class="outcome-strip" data-reveal>
        <article><span class="outcome-icon outcome-icon--cross"></span><strong>One solution</strong><p>Different slopes. The lines meet once.</p></article>
        <article><span class="outcome-icon outcome-icon--same"></span><strong>Infinitely many</strong><p>Same line. One equation is a multiple of the other.</p></article>
        <article><span class="outcome-icon outcome-icon--parallel"></span><strong>No solution</strong><p>Same slope, different intercepts.</p></article>
      </div>

      <div class="interactive-shell line-lab" data-reveal>
        <div class="interactive-shell__header">
          <div><span class="live-dot"></span><p>Interactive line lab</p></div>
          <span>ax + by = c</span>
        </div>
        <div class="line-lab__body">
          <div class="line-controls">
            <fieldset>
              <legend>Equation 1</legend>
              <div class="coefficient-row">
                <label><span class="sr-only">x coefficient</span><input id="a1" type="number" step="1" value="3" />x</label>
                <span>+</span>
                <label><span class="sr-only">y coefficient</span><input id="b1" type="number" step="1" value="-4" />y</label>
                <span>=</span>
                <label><span class="sr-only">constant</span><input id="c1" type="number" step="1" value="16" /></label>
              </div>
            </fieldset>
            <fieldset>
              <legend>Equation 2</legend>
              <div class="coefficient-row">
                <label><span class="sr-only">x coefficient</span><input id="a2" type="number" step="1" value="-9" />x</label>
                <span>+</span>
                <label><span class="sr-only">y coefficient</span><input id="b2" type="number" step="1" value="12" />y</label>
                <span>=</span>
                <label><span class="sr-only">constant</span><input id="c2" type="number" step="1" value="-48" /></label>
              </div>
            </fieldset>
            <div class="preset-row" aria-label="System presets">
              <button type="button" data-preset="unique">One solution</button>
              <button type="button" data-preset="infinite" class="is-active">Same line</button>
              <button type="button" data-preset="none">Parallel</button>
            </div>
            <div class="line-result" aria-live="polite">
              <span id="result-badge">Infinitely many</span>
              <strong id="result-title">The equations describe the same line.</strong>
              <p id="result-detail">Equation 2 is −3 times Equation 1, including the constant.</p>
            </div>
            <details class="concept-note">
              <summary>Why the determinant decides</summary>
              <p>For <strong>a₁x + b₁y = c₁</strong> and <strong>a₂x + b₂y = c₂</strong>, compute D = a₁b₂ − a₂b₁. If D ≠ 0, the slopes differ and there is one solution.</p>
            </details>
          </div>
          <div class="line-graph-wrap">
            <svg id="line-graph" viewBox="0 0 560 400" role="img" aria-label="Graph of the two equations"></svg>
            <div class="graph-legend"><span><i class="legend-a"></i>Equation 1</span><span><i class="legend-b"></i>Equation 2</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="methods">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Solve with purpose</p>
        <h2>Choose the move<br>that removes friction.</h2>
        <p>Both methods are valid. The best method is the one that makes the next line of algebra simplest.</p>
      </div>

      <div class="method-lab" data-reveal>
        <div class="tab-list" role="tablist" aria-label="Solution method">
          <button class="is-active" type="button" role="tab" aria-selected="true" data-tab="substitution">Substitution</button>
          <button type="button" role="tab" aria-selected="false" data-tab="elimination">Elimination</button>
        </div>

        <article class="method-panel" data-tab-panel="substitution">
          <div class="method-panel__summary">
            <span>Use it when</span>
            <h3>A variable is already isolated—or almost isolated.</h3>
            <div class="system-brace"><span>3x + 2y = 4</span><span>−x + 3y = −5</span></div>
          </div>
          <div class="stepper" data-stepper>
            <ol>
              <li class="is-visible"><span>1</span><div><strong>Isolate x in the second equation.</strong><p>x = 3y + 5</p></div></li>
              <li><span>2</span><div><strong>Substitute into the first equation.</strong><p>3(3y + 5) + 2y = 4</p></div></li>
              <li><span>3</span><div><strong>Solve the one-variable equation.</strong><p>11y + 15 = 4 → y = −1</p></div></li>
              <li><span>4</span><div><strong>Back-substitute and verify.</strong><p>x = 3(−1) + 5 = 2, so the solution is (2, −1).</p></div></li>
            </ol>
            <button class="stepper__next" type="button">Show next step <span>→</span></button>
          </div>
        </article>

        <article class="method-panel" data-tab-panel="elimination" hidden>
          <div class="method-panel__summary">
            <span>Use it when</span>
            <h3>Coefficients already match, or can match with small multipliers.</h3>
            <div class="system-brace"><span>3x + 2y = −8</span><span>−5x − 3y = 11</span></div>
          </div>
          <div class="stepper" data-stepper>
            <ol>
              <li class="is-visible"><span>1</span><div><strong>Target y and find the LCM.</strong><p>LCM(2, 3) = 6.</p></div></li>
              <li><span>2</span><div><strong>Multiply the equations.</strong><p>3(E₁): 9x + 6y = −24<br>2(E₂): −10x − 6y = 22</p></div></li>
              <li><span>3</span><div><strong>Add to eliminate y.</strong><p>−x = −2 → x = 2</p></div></li>
              <li><span>4</span><div><strong>Back-substitute.</strong><p>3(2) + 2y = −8 → y = −7, so (2, −7).</p></div></li>
            </ol>
            <button class="stepper__next" type="button">Show next step <span>→</span></button>
          </div>
        </article>
      </div>
    </section>

    <section class="lesson-section" id="modeling">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Model a situation</p>
        <h2>Turn words into<br>two equations.</h2>
        <p>Define variables with units first. Then translate one fact at a time.</p>
      </div>

      <div class="model-grid">
        <article class="coin-lab" data-reveal>
          <div class="tool-label">Coin model</div>
          <h3>46 coins · dimes and quarters · $6.70 total</h3>
          <div class="coin-equations"><span>d + q = 46</span><span>0.10d + 0.25q = 6.70</span></div>
          <label class="range-label" for="quarters-range"><span>Adjust the number of quarters</span><output id="quarters-output">10</output></label>
          <input id="quarters-range" type="range" min="0" max="46" value="10" />
          <div class="coin-totals">
            <div><span id="dime-count">36</span><small>dimes</small></div>
            <div><span id="quarter-count">10</span><small>quarters</small></div>
            <div><span id="coin-value">$6.10</span><small>total value</small></div>
          </div>
          <p id="coin-feedback" class="tool-feedback" aria-live="polite">Keep the coin count fixed at 46. Adjust the mix until the value is $6.70.</p>
        </article>

        <article class="parameter-lab" data-reveal>
          <div class="tool-label">Parameter explorer</div>
          <h3>What changes when a changes?</h3>
          <div class="system-brace system-brace--light"><span>x + y = 0</span><span>x + ay = 4</span></div>
          <label for="parameter-a">Choose a <input id="parameter-a" type="number" step="1" value="2" /></label>
          <div class="parameter-result" id="parameter-result" aria-live="polite"></div>
          <p class="parameter-rule">Subtracting the equations gives <strong>(a − 1)y = 4</strong>. Always inspect the value that makes the coefficient zero.</p>
        </article>
      </div>
    </section>

    <section class="lesson-section readiness" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Final readiness</p>
        <h2>Prove you can<br>make the decisions.</h2>
        <p>Use these checks to connect classification, algebra, modeling, and parameter reasoning.</p>
      </div>
      <div class="readiness-grid">
        <article class="check-card" data-reveal>
          <span>A · classify</span>
          <h3>3x − 4y = 16<br>−9x + 12y = −48</h3>
          <label for="check-a">Number of solutions</label>
          <select id="check-a"><option value="">Choose…</option><option value="one">One</option><option value="none">None</option><option value="infinite">Infinitely many</option></select>
          <button type="button" data-check="a">Check reasoning</button>
          <p id="feedback-a" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="check-card" data-reveal>
          <span>B · force parallel</span>
          <h3>6x + 2y = 8<br>kx − y = 5</h3>
          <label for="check-b">The system has no solution when k =</label>
          <input id="check-b" type="number" step="1" />
          <button type="button" data-check="b">Check value</button>
          <p id="feedback-b" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="check-card" data-reveal>
          <span>F · inspect the parameter</span>
          <h3>x + y = 0<br>x + ay = 4</h3>
          <label for="check-f">Which a-value creates the special case?</label>
          <input id="check-f" type="number" step="1" />
          <button type="button" data-check="f">Check value</button>
          <p id="feedback-f" class="answer-feedback" aria-live="polite"></p>
        </article>
      </div>
      <aside class="ready-banner" data-reveal>
        <span>Before moving on</span>
        <p>I can explain <strong>why</strong> a system has one, zero, or infinitely many solutions—not just name the outcome.</p>
        <a href="${t(`pages/sections/9-2.html`)}">Continue to three variables <span aria-hidden="true">→</span></a>
      </aside>
    </section>
  </main>
  ${e({next:{href:`pages/sections/9-2.html`,label:`Section 9.2 · Three variables`}})}
`;function l(){return[`a1`,`b1`,`c1`,`a2`,`b2`,`c2`].map(e=>Number(document.querySelector(`#${e}`).value))}function u([e,t,r,i,a,o]){if(n(e,0)&&n(t,0)||n(i,0)&&n(a,0))return{type:`invalid`};let s=e*a-i*t;return Math.abs(s)>1e-9?{type:`unique`,x:(r*a-o*t)/s,y:(e*o-i*r)/s}:{type:Math.abs(e*o-i*r)<1e-9&&Math.abs(t*o-a*r)<1e-9?`infinite`:`none`}}function d(e,t,r,i=10){let a=[],o=(e,t)=>{Number.isFinite(e)&&Number.isFinite(t)&&Math.abs(e)<=i+1e-7&&Math.abs(t)<=i+1e-7&&(a.some(r=>n(r.x,e)&&n(r.y,t))||a.push({x:e,y:t}))};return Math.abs(t)>1e-9&&(o(-i,(r+e*i)/t),o(i,(r-e*i)/t)),Math.abs(e)>1e-9&&(o((r+t*i)/e,-i),o((r-t*i)/e,i)),a.slice(0,2)}function f(){let e=l(),[t,n,i,a,o,s]=e,c=u(e),f=document.querySelector(`#line-graph`),p=e=>(e+10)/20*560,m=e=>400-(e+10)/20*400,h=[];for(let e=-10;e<=10;e+=2){let t=p(e),n=m(e);h.push(`<line x1="${t}" y1="0" x2="${t}" y2="400" class="graph-minor" />`),h.push(`<line x1="0" y1="${n}" x2="560" y2="${n}" class="graph-minor" />`),e!==0&&(h.push(`<text x="${t+4}" y="${m(0)-7}" class="graph-number">${e}</text>`),h.push(`<text x="${p(0)+7}" y="${n-4}" class="graph-number">${e}</text>`))}let g=(e,t,n,r)=>{let i=d(e,t,n,10);return i.length<2?``:`<line x1="${p(i[0].x)}" y1="${m(i[0].y)}" x2="${p(i[1].x)}" y2="${m(i[1].y)}" class="${r}" />`},_=c.type===`unique`&&Math.abs(c.x)<=10&&Math.abs(c.y)<=10?`<circle cx="${p(c.x)}" cy="${m(c.y)}" r="8" class="intersection-point"><title>Intersection (${r(c.x)}, ${r(c.y)})</title></circle>`:``;f.innerHTML=`
    <rect width="560" height="400" rx="12" class="graph-background" />
    ${h.join(``)}
    <line x1="${p(0)}" y1="0" x2="${p(0)}" y2="400" class="graph-major" />
    <line x1="0" y1="${m(0)}" x2="560" y2="${m(0)}" class="graph-major" />
    ${g(t,n,i,`plotted-line plotted-line--a`)}
    ${g(a,o,s,`plotted-line plotted-line--b`)}
    ${_}
  `;let v=document.querySelector(`#result-badge`),y=document.querySelector(`#result-title`),b=document.querySelector(`#result-detail`);v.className=`result-badge--${c.type}`,c.type===`invalid`?(v.textContent=`Check coefficients`,y.textContent=`Each equation needs an x- or y-term.`,b.textContent=`The coefficients a and b cannot both be zero in a linear equation.`):c.type===`unique`?(v.textContent=`One solution`,y.textContent=`The lines meet at (${r(c.x)}, ${r(c.y)}).`,b.textContent=`The determinant is nonzero, so the equations have different slopes.`):c.type===`infinite`?(v.textContent=`Infinitely many`,y.textContent=`The equations describe the same line.`,b.textContent=`All corresponding coefficients, including the constant, are proportional.`):(v.textContent=`No solution`,y.textContent=`The lines are parallel and never meet.`,b.textContent=`The x- and y-coefficients are proportional, but the constants are not.`)}var p={unique:[3,1,6,-1,2,2],infinite:[3,-4,16,-9,12,-48],none:[2,-4,-12,-1,2,4]};document.querySelectorAll(`.coefficient-row input`).forEach(e=>e.addEventListener(`input`,f)),document.querySelectorAll(`[data-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{[`a1`,`b1`,`c1`,`a2`,`b2`,`c2`].forEach((t,n)=>{document.querySelector(`#${t}`).value=p[e.dataset.preset][n]}),document.querySelectorAll(`[data-preset]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),f()})});function m(){document.querySelectorAll(`[data-stepper]`).forEach(e=>{let t=[...e.querySelectorAll(`li`)],n=e.querySelector(`.stepper__next`),r=1;n.addEventListener(`click`,()=>{r<t.length&&(t[r].classList.add(`is-visible`),r+=1),r===t.length&&(n.textContent=`All steps revealed ✓`,n.disabled=!0)})})}var h=document.querySelector(`#quarters-range`);function g(){let e=Number(h.value),t=46-e,r=t*.1+e*.25;document.querySelector(`#quarters-output`).value=e,document.querySelector(`#dime-count`).textContent=t,document.querySelector(`#quarter-count`).textContent=e,document.querySelector(`#coin-value`).textContent=`$${r.toFixed(2)}`;let i=document.querySelector(`#coin-feedback`);n(r,6.7)?(i.className=`tool-feedback is-success`,i.textContent=`Balanced! Now reproduce this result algebraically in your own solution.`):(i.className=`tool-feedback`,i.textContent=r<6.7?`The value is too low—replace a dime with a quarter.`:`The value is too high—replace a quarter with a dime.`)}h.addEventListener(`input`,g);var _=document.querySelector(`#parameter-a`);function v(){let e=Number(_.value),t=document.querySelector(`#parameter-result`);if(n(e,1)){t.innerHTML=`<span class="parameter-result__status">No solution</span><strong>0 = 4 is a contradiction.</strong><p>When a = 1, both equations have the same left side but different constants.</p>`;return}let i=4/(e-1),a=-i;t.innerHTML=`<span class="parameter-result__status">One solution</span><strong>(x, y) = (${r(a)}, ${r(i)})</strong><p>In symbols: x = 4/(1 − a), y = 4/(a − 1), with a ≠ 1.</p>`}_.addEventListener(`input`,v),document.querySelector(`[data-check='a']`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-a`).value;o(document.querySelector(`#feedback-a`),e===`infinite`,e===`infinite`?`Correct. Equation 2 is −3 times Equation 1.`:`Compare every coefficient—including the constant—using the same multiplier.`)}),document.querySelector(`[data-check='b']`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#check-b`).value);o(document.querySelector(`#feedback-b`),n(e,-3),n(e,-3)?`Correct. Both slopes become −3, while the intercepts remain different.`:`Rewrite both equations as y = mx + b and make the slopes equal.`)}),document.querySelector(`[data-check='f']`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#check-f`).value);o(document.querySelector(`#feedback-f`),n(e,1),n(e,1)?`Correct. Then (a − 1)y becomes 0y, producing 0 = 4.`:`Set the coefficient a − 1 equal to zero.`)}),s(document.querySelector(`.method-lab`)),m(),f(),g(),v(),a();