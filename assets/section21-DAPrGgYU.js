import{i as e,n as t,r as n}from"./magnifier-DbmAZ0E0.js";import{a as r,i,n as a,o,r as s,s as c}from"./shared-BEyMclnh.js";var l=document.querySelector(`#app`);l.innerHTML=`
  ${o(`2.1`)}
  <main>
    <section class="lesson-hero lesson-hero--functions">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 2.1</span> Functions and their language</p>
        <h1>One input.<br><em>One clear output.</em></h1>
        <p class="lesson-hero__lede">
          A function is a rule with a promise: each allowed input produces exactly one output.
          Learn to choose the rule, evaluate it, and recognize where it is allowed to work.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#notation-lab">Send an input through</a>
          <span>About 40 minutes · interactive</span>
        </div>
      </div>
      <div class="function-hero-art" aria-hidden="true" data-reveal>
        <span class="function-hero-art__input">${t(String.raw`x`)}</span>
        <div class="function-hero-art__machine">
          <span>FUNCTION</span>
          <strong>f</strong>
          <p>choose · calculate · return</p>
        </div>
        <span class="function-hero-art__output">${t(String.raw`f(x)`)}</span>
        <div class="function-hero-art__rule function-hero-art__rule--one">${t(String.raw`x<0`)}</div>
        <div class="function-hero-art__rule function-hero-art__rule--two">${t(String.raw`0\le x\le2`)}</div>
        <div class="function-hero-art__rule function-hero-art__rule--three">${t(String.raw`x>2`)}</div>
        <svg viewBox="0 0 620 430">
          <path d="M72 215H215M405 215H550" />
          <circle cx="72" cy="215" r="8" />
          <circle cx="550" cy="215" r="8" />
        </svg>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Evaluate functions and read function notation</li>
        <li><span>02</span>Choose and model piecewise rules</li>
        <li><span>03</span>Find net change and a difference quotient</li>
        <li><span>04</span>Build domains from restrictions</li>
      </ol>
    </section>

    <section class="lesson-section" id="notation-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>01</span> Read the instruction</p>
        <h2>Inside and outside<br>mean different moves.</h2>
        <p>Changing the input happens before the function rule. Multiplying the output happens after it. Parentheses keep those instructions visible.</p>
      </div>

      <div class="notation-lab" data-reveal>
        <div class="notation-lab__control">
          <p class="tool-label">Input laboratory</p>
          <h3>Let ${t(String.raw`f(x)=3x-1`)}</h3>
          <label for="notation-x">Choose x <output id="notation-x-output">2</output></label>
          <input id="notation-x" type="range" min="-4" max="4" step="0.5" value="2" />
          <div class="function-pipeline" aria-live="polite">
            <span id="pipeline-input">2</span><i>× 3</i><i>− 1</i><strong id="pipeline-output">5</strong>
          </div>
          <p class="notation-readout" id="notation-readout"></p>
        </div>
        <div class="notation-lab__compare">
          <article>
            <span>Change the input</span>
            <h3>${t(String.raw`f(2x)=6x-1`)}</h3>
            <p>Replace every x in the rule with 2x.</p>
            <strong id="inside-value">At x = 2: f(4) = 11</strong>
          </article>
          <article>
            <span>Scale the output</span>
            <h3>${t(String.raw`2f(x)=6x-2`)}</h3>
            <p>Evaluate f(x), then multiply the result by 2.</p>
            <strong id="outside-value">At x = 2: 2f(2) = 10</strong>
          </article>
          <aside><strong>One symbol changes the constant.</strong> In general, f(2x) and 2f(x) are not the same function.</aside>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="piecewise-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Choose before calculating</p>
        <h2>A piecewise function<br>is a decision tree.</h2>
        <p>Test the input against the conditions first. Use exactly one matching rule, then ignore the others.</p>
      </div>

      <div class="piecewise-studio" data-reveal>
        <div class="piecewise-studio__rules">
          <p class="tool-label">Three rules · one output</p>
          <h3>${t(String.raw`f(x)=`)}</h3>
          <article data-piecewise-branch="negative"><strong>${t(String.raw`3x`)}</strong><span>if ${t(String.raw`x<0`)}</span></article>
          <article data-piecewise-branch="middle"><strong>${t(String.raw`x+1`)}</strong><span>if ${t(String.raw`0\le x\le2`)}</span></article>
          <article data-piecewise-branch="positive"><strong>${t(String.raw`(x-2)^2`)}</strong><span>if ${t(String.raw`x>2`)}</span></article>
        </div>
        <div class="piecewise-studio__explorer">
          <div class="piecewise-number-line" aria-hidden="true">
            <span class="piecewise-number-line__negative">x &lt; 0</span>
            <span class="piecewise-number-line__middle">0 ≤ x ≤ 2</span>
            <span class="piecewise-number-line__positive">x &gt; 2</span>
            <i class="piecewise-marker" id="piecewise-marker"></i>
          </div>
          <label for="piecewise-x">Move x <output id="piecewise-x-output">2</output></label>
          <input id="piecewise-x" type="range" min="-4" max="5" step="0.5" value="2" />
          <div class="preset-row preset-row--light">
            <button type="button" data-piecewise-preset="2">x = 2</button>
            <button type="button" data-piecewise-preset="3.5">x = 3.5</button>
            <button type="button" data-piecewise-preset="pi">x = −π</button>
          </div>
          <div class="piecewise-result" aria-live="polite">
            <span id="piecewise-decision">2 belongs to 0 ≤ x ≤ 2</span>
            <strong id="piecewise-result"></strong>
            <p id="piecewise-explanation">The endpoint 2 is included because the condition uses ≤.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="modeling-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Model and compare</p>
        <h2>Functions measure<br>change in context.</h2>
        <p>A model turns conditions into rules. Net change compares the final output to the initial output—in that order.</p>
      </div>

      <div class="function-model-grid">
        <article class="fine-lab" data-reveal>
          <p class="tool-label">Speed-limit model</p>
          <h3>What fine belongs to this speed?</h3>
          <div class="fine-rules">
            <span>${t(String.raw`15(40-x)`)} <i>if ${t(String.raw`0<x<40`)}</i></span>
            <span>${t(String.raw`0`)} <i>if ${t(String.raw`40\le x\le65`)}</i></span>
            <span>${t(String.raw`15(x-65)`)} <i>if ${t(String.raw`x>65`)}</i></span>
          </div>
          <div class="speed-road" aria-hidden="true">
            <span>below 40</span><span>legal 40–65</span><span>above 65</span>
            <i id="speed-car">◆</i>
          </div>
          <label for="speed-x">Vehicle speed <output id="speed-output">30 mi/h</output></label>
          <input id="speed-x" type="range" min="1" max="100" step="1" value="30" />
          <div class="preset-row">
            <button type="button" data-speed-preset="30">30 mi/h</button>
            <button type="button" data-speed-preset="85">85 mi/h</button>
          </div>
          <div class="fine-result" aria-live="polite"><span id="fine-rule">Below the minimum</span><strong id="fine-output"></strong><p id="fine-meaning">The driver is 10 mi/h below the minimum.</p></div>
        </article>

        <article class="net-change-lab" data-reveal>
          <p class="tool-label">Net-change explorer</p>
          <h3>Final output minus initial output.</h3>
          <p class="function-definition">${t(String.raw`R(x)=\frac{13+7x^{0.4}}{1+4x^{0.4}}`,!0)}</p>
          <svg id="net-change-chart" viewBox="0 0 640 300" role="img" aria-label="Graph of pupil radius as brightness increases"></svg>
          <div class="net-change-inputs">
            <label for="net-a">Start a <output id="net-a-output">10</output><input id="net-a" type="range" min="1" max="120" step="1" value="10" /></label>
            <label for="net-b">End b <output id="net-b-output">100</output><input id="net-b" type="range" min="2" max="150" step="1" value="100" /></label>
          </div>
          <div class="net-change-result" aria-live="polite">
            <span id="net-values">R(100) − R(10)</span>
            <strong id="net-result">2.179 − 2.768 = −0.590 mm</strong>
            <p id="net-meaning">The pupil radius decreases by about 0.590 mm.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="difference-quotient">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Compare two outputs</p>
        <h2>The difference quotient<br>is structured cancellation.</h2>
        <p>Evaluate first, subtract with parentheses, combine like terms, and divide only after every term contains h.</p>
      </div>

      <div class="quotient-studio" data-reveal>
        <div class="quotient-steps">
          <p class="tool-label">For ${t(String.raw`f(x)=3x^2-4x`)}</p>
          <h3>${t(String.raw`\frac{f(a+h)-f(a)}{h}`,!0)}</h3>
          <ol>
            <li><span>1</span><p>${t(String.raw`f(a)=3a^2-4a`)}</p></li>
            <li><span>2</span><p>${t(String.raw`f(a+h)=3(a+h)^2-4(a+h)`)}</p></li>
            <li><span>3</span><p>Subtract: ${t(String.raw`6ah+3h^2-4h`)}</p></li>
            <li><span>4</span><p>Factor ${t(String.raw`h`)} and divide: <strong>${t(String.raw`6a+3h-4`)}</strong>, ${t(String.raw`h\ne0`)}</p></li>
          </ol>
          <aside><strong>Why h ≠ 0?</strong> The original quotient divides by h. Cancellation simplifies it, but it does not make h = 0 legal.</aside>
        </div>
        <div class="secant-lab">
          <p class="tool-label">Secant explorer</p>
          <svg id="secant-chart" viewBox="0 0 620 360" role="img" aria-label="Parabola with two points and a secant line"></svg>
          <div class="secant-controls">
            <label for="secant-a">a <output id="secant-a-output">1</output><input id="secant-a" type="range" min="-2" max="2" step="0.25" value="1" /></label>
            <label for="secant-h">h <output id="secant-h-output">2</output><input id="secant-h" type="range" min="0.25" max="3" step="0.25" value="2" /></label>
          </div>
          <div class="secant-readout" aria-live="polite"><span id="secant-points">Compare f(1) and f(3)</span><strong id="secant-slope">Difference quotient = 8</strong><p id="secant-formula">6(1) + 3(2) − 4 = 8</p></div>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="domain-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>05</span> Protect the rule</p>
        <h2>The domain is every input<br>the formula can accept.</h2>
        <p>Start with all real numbers, then remove inputs that create an even root of a negative number or division by zero.</p>
      </div>

      <div class="domain-studio" data-reveal>
        <div class="domain-tabs" role="tablist" aria-label="Domain examples">
          <button type="button" class="is-active" data-domain-case="radical">Square root</button>
          <button type="button" data-domain-case="rational">Rational</button>
          <button type="button" data-domain-case="root-denominator">Root in denominator</button>
        </div>
        <div class="domain-stage">
          <div class="domain-stage__copy">
            <span id="domain-type">Even root</span>
            <h3 id="domain-function"></h3>
            <p id="domain-restriction">Require 7 − 3x ≥ 0, so x ≤ 7/3.</p>
            <strong id="domain-interval"></strong>
          </div>
          <div class="domain-visual" id="domain-visual" aria-label="Number line showing the allowed domain"></div>
        </div>
        <div class="domain-rule-grid">
          <article><span>Even root</span><strong>Radicand ≥ 0</strong><p>Zero is allowed when the root is not a denominator.</p></article>
          <article><span>Denominator</span><strong>Denominator ≠ 0</strong><p>Factor first so every excluded input is visible.</p></article>
          <article><span>Even root below a fraction</span><strong>Radicand &gt; 0</strong><p>The root must exist and the denominator must stay nonzero.</p></article>
        </div>
      </div>
    </section>

    <section class="lesson-section readiness readiness--functions" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>06</span> Final readiness</p>
        <h2>Can you choose the rule<br>before calculating?</h2>
        <p>Check the core decisions from the entire section. Exact answers matter unless a decimal is requested.</p>
      </div>
      <div class="function-check-grid">
        <article class="check-card" data-reveal>
          <span>Piecewise values</span>
          <h3>Use the three-rule function above.</h3>
          <label>f(2) <input id="check-piecewise-two" type="number" step="0.01" /></label>
          <label>f(3.5) <input id="check-piecewise-three" type="number" step="0.01" /></label>
          <label><span>f(−π) =</span><span class="check-answer-with-suffix"><input id="check-piecewise-pi" type="number" step="0.01" /><span>π</span></span></label>
          <button type="button" id="check-piecewise">Check values</button>
          <p id="feedback-piecewise" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="check-card" data-reveal>
          <span>Models and change</span>
          <h3>Interpret outputs, not just arithmetic.</h3>
          <label>F(30) = $ <input id="check-fine-thirty" type="number" /></label>
          <label>F(85) = $ <input id="check-fine-eightyfive" type="number" /></label>
          <label>Net change, 10 → 100 <input id="check-net-change" type="number" step="0.001" /></label>
          <button type="button" id="check-models">Check models</button>
          <p id="feedback-models" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="check-card" data-reveal>
          <span>Difference quotient</span>
          <h3>For ${t(String.raw`f(x)=3x^2-4x`)}</h3>
          <label for="check-quotient">${t(String.raw`\frac{f(a+h)-f(a)}h=`)}</label>
          <select id="check-quotient">
            <option value="">Choose…</option>
            <option value="correct">6a + 3h − 4</option>
            <option value="missing">6a + 3h</option>
            <option value="uncancelled">6ah + 3h² − 4h</option>
          </select>
          <button type="button" id="check-quotient-button">Check expression</button>
          <p id="feedback-quotient" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="check-card" data-reveal>
          <span>Domain restrictions</span>
          <h3>Match each function to its domain.</h3>
          <label>${t(String.raw`\sqrt{7-3x}`)}
            <select id="check-domain-one"><option value="">Choose…</option><option value="correct">(−∞, 7/3]</option><option value="wrong-a">[7/3, ∞)</option><option value="wrong-b">(−∞, 7/3)</option></select>
          </label>
          <label>${t(String.raw`\frac{x}{2x^2+x-1}`)}
            <select id="check-domain-two"><option value="">Choose…</option><option value="wrong-a">(−1, 1/2)</option><option value="correct">All reals except −1 and 1/2</option><option value="wrong-b">All real numbers</option></select>
          </label>
          <label>${t(String.raw`\frac{x}{\sqrt[4]{9-x^2}}`)}
            <select id="check-domain-three"><option value="">Choose…</option><option value="wrong-a">[−3, 3]</option><option value="correct">(−3, 3)</option><option value="wrong-b">(−∞, −3) ∪ (3, ∞)</option></select>
          </label>
          <button type="button" id="check-domains">Check domains</button>
          <p id="feedback-domains" class="answer-feedback" aria-live="polite"></p>
        </article>
      </div>
      <aside class="ready-banner ready-banner--functions" data-reveal>
        <span>You are ready when</span>
        <p>You can identify the instruction, choose the valid rule, preserve parentheses, and state every domain restriction.</p>
        <a href="#notation-lab">Restart the function lab <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${r({previous:{href:`pages/sections/1-9.html`,label:`Section 1.9 · Coordinate plane`},next:{href:`pages/sections/2-2.html`,label:`Section 2.2 · Graphs of functions`}})}
`,e(l);var u=e=>3*e-1;function d(e){let t=a(e);return t.startsWith(`-`)?`−${t.slice(1)}`:t}function f(e){return d(e).replace(`−`,`-`)}var p=document.querySelector(`#notation-x`);function m(){let r=Number(p.value),i=u(r);document.querySelector(`#notation-x-output`).textContent=d(r),document.querySelector(`#pipeline-input`).textContent=d(r),document.querySelector(`#pipeline-output`).textContent=d(i),n(document.querySelector(`#notation-readout`),String.raw`f(${f(r)})=3(${f(r)})-1=${f(i)}`);let a=document.querySelector(`#inside-value`);a.innerHTML=`At ${t(String.raw`x=${f(r)}:\quad f(${f(2*r)})=${f(u(2*r))}`)}`,e(a);let o=document.querySelector(`#outside-value`);o.innerHTML=`At ${t(String.raw`x=${f(r)}:\quad 2f(${f(r)})=${f(2*i)}`)}`,e(o)}p.addEventListener(`input`,m),m();var h=document.querySelector(`#piecewise-x`),g=!1;function _(){let r=g?-Math.PI:Number(h.value),i=r<0?`negative`:r<=2?`middle`:`positive`,a=i===`negative`?3*r:i===`middle`?r+1:(r-2)**2,o=g?`−π`:d(r),s=i===`negative`?`x < 0`:i===`middle`?`0 ≤ x ≤ 2`:`x > 2`;document.querySelectorAll(`[data-piecewise-branch]`).forEach(e=>e.classList.toggle(`is-active`,e.dataset.piecewiseBranch===i)),document.querySelector(`#piecewise-x-output`).textContent=o,document.querySelector(`#piecewise-marker`).style.left=`${(r+4)/9*100}%`;let c=document.querySelector(`#piecewise-decision`);c.innerHTML=`${t(g?String.raw`-\pi`:f(r))} belongs to ${t(s.replaceAll(`≤`,String.raw`\le`))}`,e(c),g?(n(document.querySelector(`#piecewise-result`),String.raw`f(-\pi)=3(-\pi)=-3\pi`),document.querySelector(`#piecewise-explanation`).textContent=`Exactly −3π; approximately ${d(a)}.`):i===`negative`?(n(document.querySelector(`#piecewise-result`),String.raw`f(${f(r)})=3(${f(r)})=${f(a)}`),document.querySelector(`#piecewise-explanation`).textContent=`Negative inputs use the first rule.`):i===`middle`?(n(document.querySelector(`#piecewise-result`),String.raw`f(${f(r)})=${f(r)}+1=${f(a)}`),document.querySelector(`#piecewise-explanation`).textContent=r===2?`The endpoint 2 is included because the condition uses ≤.`:`This input lies in the closed middle interval.`):(n(document.querySelector(`#piecewise-result`),String.raw`f(${f(r)})=(${f(r)}-2)^2=${f(a)}`),document.querySelector(`#piecewise-explanation`).textContent=`Inputs above 2 use the squared rule.`)}h.addEventListener(`input`,()=>{g=!1,_()}),document.querySelectorAll(`[data-piecewise-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{g=e.dataset.piecewisePreset===`pi`,h.value=g?String(-Math.PI):e.dataset.piecewisePreset,_()})}),_();var v=document.querySelector(`#speed-x`);function y(){let e=Number(v.value),t=0,r=`Within the legal range`,i=`No fine: the speed is between 40 and 65 mi/h.`;e<40?(t=15*(40-e),r=`Below the minimum`,i=`The driver is ${40-e} mi/h below the minimum.`):e>65&&(t=15*(e-65),r=`Above the maximum`,i=`The driver is ${e-65} mi/h above the maximum.`),document.querySelector(`#speed-output`).textContent=`${e} mi/h`,document.querySelector(`#speed-car`).style.left=`${e}%`,document.querySelector(`#fine-rule`).textContent=r,n(document.querySelector(`#fine-output`),String.raw`F(${e})=\$${t}`),document.querySelector(`#fine-meaning`).textContent=i}v.addEventListener(`input`,y),document.querySelectorAll(`[data-speed-preset]`).forEach(e=>e.addEventListener(`click`,()=>{v.value=e.dataset.speedPreset,y()})),y();var b=e=>(13+7*e**.4)/(1+4*e**.4),x=document.querySelector(`#net-a`),S=document.querySelector(`#net-b`),C=document.querySelector(`#net-change-chart`);function w(){let e=Number(x.value),t=Number(S.value);e>t&&(t=e,S.value=String(t));let r=b(e),i=b(t),a=i-r,o=e=>45+(e-1)/149*560,s=e=>260-(e-2)/2.1*210,c=[];for(let e=1;e<=150;e+=2)c.push(`${o(e)},${s(b(e))}`);C.innerHTML=`
    <path d="M45 30V260H610" class="function-chart-axis" />
    <path d="M${c.join(` L`)}" class="net-change-curve" />
    <line x1="${o(e)}" y1="${s(r)}" x2="${o(t)}" y2="${s(i)}" class="net-change-line" />
    <circle cx="${o(e)}" cy="${s(r)}" r="8" class="function-chart-point function-chart-point--start" />
    <circle cx="${o(t)}" cy="${s(i)}" r="8" class="function-chart-point function-chart-point--end" />
    <text x="${o(e)+10}" y="${s(r)-12}">R(${e})</text>
    <text x="${o(t)-12}" y="${s(i)+26}" text-anchor="end">R(${t})</text>
    <text x="46" y="286">brightness x</text>
    <text x="16" y="40">R</text>
  `,document.querySelector(`#net-a-output`).textContent=e,document.querySelector(`#net-b-output`).textContent=t,n(document.querySelector(`#net-values`),String.raw`R(${t})-R(${e})`);let l=a<0?`−${Math.abs(a).toFixed(3)}`:a.toFixed(3);n(document.querySelector(`#net-result`),String.raw`${i.toFixed(3)}-${r.toFixed(3)}=${l.replace(`−`,`-`)}\,\mathrm{mm}`),document.querySelector(`#net-meaning`).textContent=a<0?`The pupil radius decreases by about ${Math.abs(a).toFixed(3)} mm.`:`The pupil radius increases by about ${a.toFixed(3)} mm.`}x.addEventListener(`input`,w),S.addEventListener(`input`,()=>{Number(S.value)<Number(x.value)&&(x.value=S.value),w()}),w();var T=document.querySelector(`#secant-a`),E=document.querySelector(`#secant-h`),D=document.querySelector(`#secant-chart`),O=e=>3*e**2-4*e;function k(){let r=Number(T.value),i=Number(E.value),o=r+i,s=(O(o)-O(r))/i,c=e=>45+(e+3)/8*535,l=e=>320-(e+5)/65*280,u=[];for(let e=-3;e<=5;e+=.08)u.push(`${c(e)},${l(O(e))}`);D.innerHTML=`
    <path d="M45 40V320H585" class="function-chart-axis" />
    <path d="M${u.join(` L`)}" class="secant-curve" />
    <line x1="${c(r)}" y1="${l(O(r))}" x2="${c(o)}" y2="${l(O(o))}" class="secant-line" />
    <circle cx="${c(r)}" cy="${l(O(r))}" r="8" class="function-chart-point function-chart-point--start" />
    <circle cx="${c(o)}" cy="${l(O(o))}" r="8" class="function-chart-point function-chart-point--end" />
    <text x="${c(r)+10}" y="${l(O(r))-12}">a</text>
    <text x="${c(o)+10}" y="${l(O(o))-12}">a+h</text>
  `,document.querySelector(`#secant-a-output`).textContent=d(r),document.querySelector(`#secant-h-output`).textContent=a(i);let p=document.querySelector(`#secant-points`);p.innerHTML=`Compare ${t(String.raw`f(${f(r)})`)} and ${t(String.raw`f(${f(o)})`)}`,e(p);let m=document.querySelector(`#secant-slope`);m.innerHTML=`Difference quotient ${t(String.raw`=${f(s)}`)}`,e(m),n(document.querySelector(`#secant-formula`),String.raw`6(${f(r)})+3(${a(i)})-4=${f(s)}`)}T.addEventListener(`input`,k),E.addEventListener(`input`,k),k();var A={radical:{type:`Even root`,formulaTex:String.raw`g(x)=\sqrt{7-3x}`,restriction:`Require ${t(String.raw`7-3x\ge0`)}, so ${t(String.raw`x\le\frac73`)}.`,interval:`Domain: ${t(String.raw`(-\infty,\frac73]`)}`,segments:[{start:0,width:73.33}],markers:[{position:73.33,label:`7/3`,closed:!0}]},rational:{type:`Denominator`,formulaTex:String.raw`g(x)=\frac{x}{2x^2+x-1}`,restriction:`Factor ${t(String.raw`(2x-1)(x+1)`)}. Exclude ${t(String.raw`x=\frac12`)} and ${t(String.raw`x=-1`)}.`,interval:`Domain: ${t(String.raw`(-\infty,-1)\cup(-1,\frac12)\cup(\frac12,\infty)`)}`,segments:[{start:0,width:40},{start:40,width:15},{start:55,width:45}],markers:[{position:40,label:`−1`,closed:!1},{position:55,label:`1/2`,closed:!1}]},"root-denominator":{type:`Fourth root in a denominator`,formulaTex:String.raw`f(x)=\frac{x}{\sqrt[4]{9-x^2}}`,restriction:`Require ${t(String.raw`9-x^2>0`)}. The strict inequality keeps the denominator nonzero.`,interval:`Domain: ${t(String.raw`(-3,3)`)}`,segments:[{start:20,width:60}],markers:[{position:20,label:`−3`,closed:!1},{position:80,label:`3`,closed:!1}]}};function j(t){let r=A[t];document.querySelectorAll(`[data-domain-case]`).forEach(e=>e.classList.toggle(`is-active`,e.dataset.domainCase===t)),document.querySelector(`#domain-type`).textContent=r.type,n(document.querySelector(`#domain-function`),r.formulaTex),document.querySelector(`#domain-restriction`).innerHTML=r.restriction,document.querySelector(`#domain-interval`).innerHTML=r.interval,e(document.querySelector(`.domain-stage`)),document.querySelector(`#domain-visual`).innerHTML=`
    <div class="domain-axis"></div>
    ${r.segments.map(e=>`<i class="domain-segment" style="left:${e.start}%;width:${e.width}%"></i>`).join(``)}
    ${r.markers.map(e=>`<span class="domain-marker ${e.closed?`is-closed`:``}" style="left:${e.position}%"><i></i><strong>${e.label}</strong></span>`).join(``)}
    <span class="domain-infinity domain-infinity--left">−∞</span><span class="domain-infinity domain-infinity--right">∞</span>
  `}document.querySelectorAll(`[data-domain-case]`).forEach(e=>e.addEventListener(`click`,()=>j(e.dataset.domainCase))),j(`radical`),document.querySelector(`#check-piecewise`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#check-piecewise-two`).value),t=Number(document.querySelector(`#check-piecewise-three`).value),n=Number(document.querySelector(`#check-piecewise-pi`).value),r=i(e,3)&&i(t,2.25)&&i(n,-3);c(document.querySelector(`#feedback-piecewise`),r,r?`Correct. The conditions select the middle, upper, and lower rules respectively.`:`Check the condition first: 2 uses x+1, 3.5 uses (x−2)², and −π uses 3x.`)}),document.querySelector(`#check-models`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#check-fine-thirty`).value),t=Number(document.querySelector(`#check-fine-eightyfive`).value),n=Number(document.querySelector(`#check-net-change`).value),r=i(e,150)&&i(t,300)&&i(n,-.59,.001);c(document.querySelector(`#feedback-models`),r,r?`Correct. The fines are $150 and $300, and the pupil radius changes by approximately −0.590 mm.`:`For fines, count miles outside the legal interval and multiply by 15. Net change is R(100) − R(10), including its sign.`)}),document.querySelector(`#check-quotient-button`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-quotient`).value===`correct`;c(document.querySelector(`#feedback-quotient`),e,e?`Correct. Every numerator term contains h, so dividing gives 6a + 3h − 4.`:`Expand f(a+h), subtract all of f(a), then factor h from the entire numerator.`)}),document.querySelector(`#check-domains`).addEventListener(`click`,()=>{let e=[`#check-domain-one`,`#check-domain-two`,`#check-domain-three`].every(e=>document.querySelector(e).value===`correct`);c(document.querySelector(`#feedback-domains`),e,e?`Correct. You distinguished ≥ 0, ≠ 0, and the stricter > 0 condition.`:`Ask what can fail: an even root needs a nonnegative radicand; a denominator cannot be zero; combining both makes the radicand strictly positive.`)}),s();