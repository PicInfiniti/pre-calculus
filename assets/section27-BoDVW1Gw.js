import{i as e,n as t,r as n}from"./magnifier-DbmAZ0E0.js";import{a as r,i,o as a,r as o,s}from"./shared-D45aE3CK.js";var c=document.querySelector(`#app`);function l(t,n,r){s(t,n,``),t.innerHTML=r,e(t)}c.innerHTML=`
  ${a(`2.7`)}
  <main>
    <section class="lesson-hero lesson-hero--combinations">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 2.7</span> Combining functions</p>
        <h1>Build a function.<br><em>Track every gate.</em></h1>
        <p class="lesson-hero__lede">
          Functions can work side by side or one inside another. The formula tells you what happens;
          the domain tells you which inputs survive the journey.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#domain-gates">Open the function lab</a>
          <span>About 45 minutes · interactive</span>
        </div>
      </div>
      <div class="combination-hero-art" aria-hidden="true" data-reveal>
        <div class="combination-hero-art__orbit"></div>
        <div class="hero-machine hero-machine--g"><span>inner</span><strong>g</strong><small>changes x first</small></div>
        <div class="hero-machine hero-machine--f"><span>outer</span><strong>f</strong><small>receives ${t(String.raw`g(x)`)}</small></div>
        <div class="hero-machine__path hero-machine__path--one"><i>${t(String.raw`x`)}</i></div>
        <div class="hero-machine__path hero-machine__path--two"><i>${t(String.raw`g(x)`)}</i></div>
        <div class="hero-machine__path hero-machine__path--three"><i>${t(String.raw`f(g(x))`)}</i></div>
        <div class="hero-operation-card">${t(String.raw`(f+g)(x)`)}</div>
        <div class="hero-composition-card">${t(String.raw`f\circ g`)} <span class="hero-composition-card__direction">right to left</span></div>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Combine formulas and restrict domains</li>
        <li><span>02</span>Evaluate compositions in the correct order</li>
        <li><span>03</span>Peel a formula into simpler functions</li>
        <li><span>04</span>Build composition models from context</li>
      </ol>
    </section>

    <section class="lesson-section" id="domain-gates">
      <div class="combination-section-lead">
        <div class="lesson-section__intro" data-reveal>
          <p class="lesson-kicker"><span>01</span> Domain gates</p>
          <h2>An input must pass<br>every restriction.</h2>
          <p>For addition, subtraction, and multiplication, intersect the original domains. Division adds one more rule: the denominator cannot be zero. Composition follows a different path—the inner output must belong to the outer domain.</p>
        </div>
        <div class="domain-rule-stack" data-reveal>
          <article><span>Side by side</span><strong>${t(String.raw`D_{f\pm g}=D_f\cap D_g`)}</strong></article>
          <article><span>Quotient</span><strong>${t(String.raw`D_{f/g}=D_f\cap D_g,\quad g(x)\ne 0`)}</strong></article>
          <article><span>Composition</span><strong>${t(String.raw`x\in D_g\quad\text{and}\quad g(x)\in D_f`)}</strong></article>
        </div>
      </div>

      <div class="domain-gate-lab" data-reveal>
        <div class="domain-gate-lab__stage">
          <div class="domain-function-pair" aria-label="Functions used in the domain explorer">
            <span><i>f</i><b>${t(String.raw`f(x)=\sqrt{x+2}`)}<small>${t(String.raw`D_f=[-2,\infty)`)}</small></b></span>
            <span><i>g</i><b>${t(String.raw`g(x)=\sqrt{1-x}`)}<small>${t(String.raw`D_g=(-\infty,1]`)}</small></b></span>
          </div>
          <svg id="domain-number-line" viewBox="0 0 760 260" role="img" aria-label="Number line showing the domains of f and g, the selected combined function's domain, and the current test input"></svg>
          <div class="domain-gates" aria-live="polite">
            <article id="domain-gate-one"><span>Gate 1</span><strong>Checking…</strong><small></small></article>
            <i aria-hidden="true">→</i>
            <article id="domain-gate-two"><span>Gate 2</span><strong>Checking…</strong><small></small></article>
            <i aria-hidden="true">→</i>
            <article id="domain-gate-three"><span>Result</span><strong>Checking…</strong><small></small></article>
          </div>
        </div>
        <div class="domain-gate-lab__controls">
          <p class="tool-label">Choose a combination</p>
          <div class="domain-operation-tabs" role="tablist" aria-label="Function combinations">
            <button class="is-active" type="button" data-domain-operation="sum" role="tab" aria-selected="true">${t(String.raw`f+g`)}</button>
            <button type="button" data-domain-operation="quotient" role="tab" aria-selected="false">${t(String.raw`f/g`)}</button>
            <button type="button" data-domain-operation="composition" role="tab" aria-selected="false">${t(String.raw`g\circ f`)}</button>
          </div>
          <div class="domain-live-formula" id="domain-formula"></div>
          <dl class="domain-summary">
            <div><dt>Domain</dt><dd id="domain-answer"></dd></div>
            <div><dt>Reason</dt><dd id="domain-reason">Both radicals must be real.</dd></div>
          </dl>
          <label class="domain-input-label" for="domain-x">Test x = <output id="domain-x-output">0</output></label>
          <input id="domain-x" type="range" min="-4" max="3" step="0.1" value="0" />
          <div class="domain-verdict" id="domain-verdict" aria-live="polite"></div>
        </div>
      </div>

      <div class="domain-method" data-reveal>
        <article><span>1</span><div><strong>Write each restriction</strong><p>A square root needs a nonnegative radicand; a denominator cannot be zero.</p></div></article>
        <article><span>2</span><div><strong>Connect the restrictions</strong><p>Use an intersection for side-by-side operations. For composition, test the inner output against the outer rule.</p></div></article>
        <article><span>3</span><div><strong>State the surviving inputs</strong><p>Use interval notation and make open or closed endpoints intentional.</p></div></article>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="composition-order">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Composition order</p>
        <h2>Read the circles<br>from right to left.</h2>
        <p>In ${t(String.raw`(f\circ g)(x)=f(g(x))`)}, ${t(String.raw`g`)} acts first. Its output becomes the input of ${t(String.raw`f`)}. Reversing the order can produce a different function and a different answer.</p>
      </div>

      <div class="order-lab" data-reveal>
        <div class="order-lab__controls">
          <p class="tool-label">Two price-changing functions</p>
          <div class="order-function-definitions">
            <article><span>f</span><div><strong>10% discount</strong><small>${t(String.raw`f(x)=0.90x`)}</small></div></article>
            <article><span>g</span><div><strong>$100 rebate</strong><small>${t(String.raw`g(x)=x-100`)}</small></div></article>
          </div>
          <label for="order-price">Sticker price <output id="order-price-output">$800</output></label>
          <input id="order-price" type="range" min="200" max="2000" step="25" value="800" />
          <div class="order-choice" role="tablist" aria-label="Composition order">
            <button class="is-active" type="button" data-order="fg" role="tab" aria-selected="true"><span>${t(String.raw`f\circ g`)}</span>rebate, then discount</button>
            <button type="button" data-order="gf" role="tab" aria-selected="false"><span>${t(String.raw`g\circ f`)}</span>discount, then rebate</button>
          </div>
        </div>
        <div class="order-machine" aria-live="polite">
          <div class="order-machine__formula" id="order-formula"></div>
          <div class="order-machine__track">
            <article><span>input</span><strong id="order-step-input">$800</strong></article>
            <i>→</i>
            <article class="order-machine__inner"><span id="order-inner-label">g acts first</span><strong id="order-step-middle">$700</strong></article>
            <i>→</i>
            <article class="order-machine__outer"><span id="order-outer-label">f acts second</span><strong id="order-step-final">$630</strong></article>
          </div>
          <div class="order-comparison">
            <div><span>${t(String.raw`f\circ g`)}</span><b id="order-fg-total">$630</b><i id="order-fg-bar"></i></div>
            <div><span>${t(String.raw`g\circ f`)}</span><b id="order-gf-total">$620</b><i id="order-gf-bar"></i></div>
          </div>
          <p id="order-insight">Discounting first and subtracting the rebate second saves $10 more.</p>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="decomposition-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Decompose a formula</p>
        <h2>Peel from the outside.<br>Rebuild from the inside.</h2>
        <p>A complicated formula can be a chain of simple machines. Identify the last operation performed—that becomes the outer function—then continue inward.</p>
      </div>

      <div class="peel-lab" data-reveal>
        <div class="peel-lab__menu" role="tablist" aria-label="Expressions to decompose">
          <button class="is-active" type="button" data-peel="power" role="tab" aria-selected="true"><span>A</span><b>${t(String.raw`(5-\sqrt[3]{x})^7`)}</b></button>
          <button type="button" data-peel="rational" role="tab" aria-selected="false"><span>B</span><b>${t(String.raw`\frac{t^2}{t^2+4}`)}</b></button>
          <button type="button" data-peel="radical" role="tab" aria-selected="false"><span>C</span><b>${t(String.raw`\sqrt{s^3+4s}`)}</b></button>
          <button type="button" data-peel="triple" role="tab" aria-selected="false"><span>D</span><b>${t(String.raw`3-\sqrt[4]{5x}`)}</b></button>
        </div>
        <div class="peel-lab__workspace">
          <div class="peel-expression">
            <span>Target expression</span>
            <strong id="peel-target"></strong>
            <p id="peel-prompt">The seventh power happens last, so keep the entire “5 minus” expression in the outer function.</p>
          </div>
          <div class="peel-pipeline" id="peel-pipeline" aria-live="polite"></div>
          <div class="peel-actions">
            <button id="peel-next" type="button">Peel the next layer</button>
            <button id="peel-reset" type="button">Reset</button>
          </div>
          <p class="peel-equivalence" id="peel-equivalence" aria-live="polite"></p>
        </div>
      </div>

      <aside class="composition-reading" data-reveal>
        <span>Say it aloud</span>
        <p><strong>${t(String.raw`f\circ g\circ h`)}</strong> means “h first, then g, then f.” Evaluation always begins beside the input.</p>
      </aside>
    </section>

    <section class="lesson-section" id="model-chain">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Compose a model</p>
        <h2>Let one quantity<br>feed the next.</h2>
        <p>Composition is natural when quantities depend on each other. Time determines radius; radius determines volume. Following the units reveals the order.</p>
      </div>

      <div class="balloon-lab" data-reveal>
        <div class="balloon-stage">
          <svg id="balloon-svg" viewBox="0 0 620 540" role="img" aria-label="A balloon growing as time increases">
            <defs>
              <radialGradient id="balloon-fill" cx="36%" cy="28%" r="72%">
                <stop offset="0" class="balloon-fill__light" />
                <stop offset=".42" class="balloon-fill__middle" />
                <stop offset="1" class="balloon-fill__deep" />
              </radialGradient>
            </defs>
            <circle id="balloon-circle" cx="310" cy="245" r="90" fill="url(#balloon-fill)" />
            <ellipse id="balloon-highlight" cx="280" cy="205" rx="18" ry="34" fill="rgba(255,255,255,.5)" />
            <path id="balloon-knot" d="M298 335L322 335L310 355Z" class="balloon-knot" />
            <path id="balloon-string" d="M310 354C292 395 335 421 310 490" class="balloon-string" />
            <line id="balloon-radius-line" x1="310" y1="245" x2="400" y2="245" class="balloon-radius-line" />
            <text id="balloon-radius-label" x="350" y="232" class="balloon-radius-label">r = 30 cm</text>
            <g class="balloon-burst" aria-hidden="true">
              <path class="balloon-burst__ray" d="M310 62V18M443 113l31-31M498 246h44M443 379l31 31M310 434v44M177 379l-31 31M122 246H78M177 113l-31-31" />
              <path class="balloon-burst__fragment balloon-burst__fragment--one" d="M236 91l-23-27 36 10Z" />
              <path class="balloon-burst__fragment balloon-burst__fragment--two" d="M431 105l33-14-17 34Z" />
              <path class="balloon-burst__fragment balloon-burst__fragment--three" d="M470 320l31 20-37 5Z" />
              <path class="balloon-burst__fragment balloon-burst__fragment--four" d="M226 405l-34 9 19-31Z" />
              <path class="balloon-burst__fragment balloon-burst__fragment--five" d="M137 174l-29-18 35-7Z" />
              <text x="310" y="262" class="balloon-burst__label">POP!</text>
            </g>
          </svg>
          <div class="balloon-stage__pulse" aria-hidden="true"></div>
          <div class="balloon-pressure is-safe" id="balloon-pressure" aria-live="polite">
            <i aria-hidden="true"></i>
            <strong>Stable</strong>
          </div>
        </div>
        <div class="balloon-controls">
          <p class="tool-label">Inflation model</p>
          <h3>A spherical balloon’s radius grows at 5 cm/s.</h3>
          <label for="balloon-time">Time t <output id="balloon-time-output">6 s</output></label>
          <input id="balloon-time" type="range" min="0" max="12" step="0.5" value="6" />
          <div class="model-pipeline">
            <article><span>time → radius</span><strong>${t(String.raw`r=f(t)=5t`)}</strong><small id="balloon-radius-readout"></small></article>
            <i>→</i>
            <article><span>radius → volume</span><strong>${t(String.raw`V=g(r)=\frac{4}{3}\pi r^3`)}</strong><small id="balloon-volume-readout"></small></article>
          </div>
          <div class="model-composite">
            <span>Direct time-to-volume model</span>
            <strong>${t(String.raw`(g\circ f)(t)=\frac{4}{3}\pi(5t)^3=\frac{500}{3}\pi t^3`,!0)}</strong>
            <p id="balloon-meaning">At 6 seconds, the composite returns the balloon’s volume directly from time.</p>
          </div>
        </div>
      </div>

      <div class="domain-blueprint" data-reveal>
        <div>
          <p class="tool-label">Domain design challenge</p>
          <h3>Can a composition create a split domain?</h3>
          <p>Build non-identity functions whose composite has domain [−2, 0) ∪ (0, 2].</p>
        </div>
        <button id="blueprint-reveal" type="button" aria-expanded="false">Reveal one construction</button>
        <div class="domain-blueprint__answer" id="blueprint-answer" hidden>
          <span>Inner</span><strong>${t(String.raw`g(x)=x^2`)}</strong>
          <i>→</i>
          <span>Outer</span><strong>${t(String.raw`f(u)=\sqrt{\frac{4-u}{u}}`)}</strong>
          <p>The outer domain is ${t(String.raw`(0,4]`)}. Requiring ${t(String.raw`x^2\in(0,4]`)} gives ${t(String.raw`0<x^2\le 4`)}, so ${t(String.raw`-2\le x<0`)} or ${t(String.raw`0<x\le 2`)}.</p>
        </div>
      </div>
    </section>

    <section class="lesson-section readiness readiness--combinations" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>05</span> Final readiness</p>
        <h2>Can every input<br>finish the journey?</h2>
        <p>Track restrictions, work from the inside out, and let units determine which model must act first.</p>
      </div>
      <div class="combination-check-grid">
        <article class="combination-check" data-reveal>
          <span>Quotient domain</span>
          <h3>Find the domain of ${t(String.raw`\frac{\sqrt{x-3}}{x-5}`)}.</h3>
          <label>Domain <select id="check-domain"><option value="">Choose…</option><option value="a">[3, ∞)</option><option value="correct">[3, 5) ∪ (5, ∞)</option><option value="b">(3, 5) ∪ (5, ∞)</option></select></label>
          <button id="check-domain-button" type="button">Check domain</button>
          <p class="answer-feedback" id="feedback-domain" aria-live="polite"></p>
        </article>
        <article class="combination-check" data-reveal>
          <span>Evaluate a composite</span>
          <h3>If ${t(String.raw`f(x)=2x+1`)} and ${t(String.raw`g(x)=x^2`)}, find ${t(String.raw`(f\circ g)(3)`)}.</h3>
          <label>Value <input id="check-composite" type="number" inputmode="decimal" /></label>
          <button id="check-composite-button" type="button">Check value</button>
          <p class="answer-feedback" id="feedback-composite" aria-live="polite"></p>
        </article>
        <article class="combination-check" data-reveal>
          <span>Decompose</span>
          <h3>Write ${t(String.raw`\sqrt{x^3+4x}`)} as ${t(String.raw`f\circ g`)}.</h3>
          <label>Pair <select id="check-decompose"><option value="">Choose…</option><option value="correct">g(x) = x³ + 4x; f(u) = √u</option><option value="a">g(x) = √x; f(u) = u³ + 4u</option><option value="b">g(x) = x³; f(u) = √u + 4u</option></select></label>
          <button id="check-decompose-button" type="button">Check pair</button>
          <p class="answer-feedback" id="feedback-decompose" aria-live="polite"></p>
        </article>
        <article class="combination-check" data-reveal>
          <span>Order in context</span>
          <h3>For an $800 item, which order produces the lower final price?</h3>
          <label>Order <select id="check-order"><option value="">Choose…</option><option value="a">$100 rebate, then 10% discount</option><option value="correct">10% discount, then $100 rebate</option><option value="b">The orders are equivalent</option></select></label>
          <button id="check-order-button" type="button">Check order</button>
          <p class="answer-feedback" id="feedback-order" aria-live="polite"></p>
        </article>
      </div>
      <aside class="ready-banner ready-banner--combinations" data-reveal>
        <span>You are composition-ready when</span>
        <p>You can name the first function, follow its output, and explain every excluded input.</p>
        <a href="#domain-gates">Test another input <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${r({previous:{href:`pages/sections/2-6.html`,label:`Section 2.6 · Transformations of functions`},next:{href:`pages/sections/2-8.html`,label:`Section 2.8 · One-to-one functions and inverses`}})}
`,e(c);function u(e,t=2){if(!Number.isFinite(e))return`undefined`;let n=Number(e.toFixed(t));return String(n).replace(`-`,`−`)}function d(e){return new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0}).format(e)}function f(e){return new Intl.NumberFormat(`en-US`,{maximumFractionDigits:1}).format(e)}function p(e,t=2){let n=Number(e.toFixed(t));return String(n)}var m={sum:{domain:`[−2, 1]`,formulaTex:String.raw`(f+g)(x)=\sqrt{x+2}+\sqrt{1-x}`,domainTex:String.raw`[-2,1]`,reason:`Both radicals must be real.`,interval:[-2,1],closed:[!0,!0],gates(e){let n=e>=-2,r=e<=1;return[{pass:n,titleMarkup:`${t(String.raw`f(x)`)} is ${n?`real`:`not real`}`,detailTex:String.raw`x+2${n?String.raw`\ge`:`<`}0`},{pass:r,titleMarkup:`${t(String.raw`g(x)`)} is ${r?`real`:`not real`}`,detailTex:String.raw`1-x${r?String.raw`\ge`:`<`}0`},{pass:n&&r,title:n&&r?`Input accepted`:`Input blocked`,detailTex:n&&r?String.raw`\text{Value}\approx ${p(Math.sqrt(e+2)+Math.sqrt(1-e))}`:null,detail:`Both gates must pass`}]}},quotient:{domain:`[−2, 1)`,formulaTex:String.raw`\left(\frac{f}{g}\right)(x)=\frac{\sqrt{x+2}}{\sqrt{1-x}}`,domainTex:String.raw`[-2,1)`,reason:`Both radicals must be real, and ${t(String.raw`g(x)\ne0`)}.`,interval:[-2,1],closed:[!0,!1],gates(e){let t=e>=-2&&e<=1,n=e<1;return[{pass:t,title:t?`Radicals are real`:`A radical fails`,detailTex:String.raw`-2\le x\le 1`},{pass:n,title:n?`Denominator is nonzero`:`Division by zero`,detailTex:String.raw`g(x)${n?String.raw`\ne`:`=`}0`},{pass:t&&n,title:t&&n?`Input accepted`:`Input blocked`,detailTex:t&&n?String.raw`\text{Value}\approx ${p(Math.sqrt(e+2)/Math.sqrt(1-e))}`:null,detail:`Every restriction must pass`}]}},composition:{domain:`[−2, −1]`,formulaTex:String.raw`(g\circ f)(x)=\sqrt{1-\sqrt{x+2}}`,domainTex:String.raw`[-2,-1]`,reason:`The inner radical must be real and its output must satisfy ${t(String.raw`f(x)\le1`)}.`,interval:[-2,-1],closed:[!0,!0],gates(e){let t=e>=-2,n=t?Math.sqrt(e+2):NaN,r=t&&n<=1;return[{pass:t,title:t?`Inner f works`:`Inner f is blocked`,detailTex:t?String.raw`f(x)\approx ${p(n)}`:String.raw`x+2<0`},{pass:r,title:r?`Output fits g`:`Output does not fit g`,detailTex:t?String.raw`f(x)${r?String.raw`\le`:`>`}1`:null,detail:`No inner output to test`},{pass:t&&r,title:t&&r?`Input accepted`:`Input blocked`,detailTex:t&&r?String.raw`\text{Value}\approx ${p(Math.sqrt(1-n))}`:null,detail:`The output handoff fails`}]}}},h=`sum`,g=document.querySelector(`#domain-x`);function _(e,t){let n=document.querySelector(`#domain-number-line`),r=e=>64+(e- -4)/7*632,[i,a]=e.interval,o=e.gates(t)[2].pass,s=[];for(let e=-4;e<=3;e+=1)s.push(`
      <line x1="${r(e)}" y1="122" x2="${r(e)}" y2="142" class="domain-line__tick" />
      <text x="${r(e)}" y="167" text-anchor="middle" class="domain-line__label">${String(e).replace(`-`,`−`)}</text>
    `);n.innerHTML=`
    <text x="64" y="54" class="domain-line__title">Surviving inputs: ${e.domain}</text>
    <line x1="64" y1="132" x2="696" y2="132" class="domain-line__base" />
    <path d="M64 132l12 -7v14zM696 132l-12 -7v14z" class="domain-line__arrow" />
    ${s.join(``)}
    <line x1="${r(i)}" y1="132" x2="${r(a)}" y2="132" class="domain-line__interval" />
    <circle cx="${r(i)}" cy="132" r="10" class="domain-line__endpoint ${e.closed[0]?`is-closed`:`is-open`}" />
    <circle cx="${r(a)}" cy="132" r="10" class="domain-line__endpoint ${e.closed[1]?`is-closed`:`is-open`}" />
    <line x1="${r(t)}" y1="74" x2="${r(t)}" y2="114" class="domain-line__marker-stem ${o?`is-accepted`:`is-blocked`}" />
    <circle cx="${r(t)}" cy="68" r="15" class="domain-line__marker ${o?`is-accepted`:`is-blocked`}" />
    <text x="${r(t)}" y="73" text-anchor="middle" class="domain-line__marker-label">x</text>
    <g class="domain-source domain-source--f">
      <text x="${r(-2)+14}" y="193" class="domain-source__label">D<tspan baseline-shift="sub" font-size="10">f</tspan> = [−2, ∞)</text>
      <line x1="${r(-2)}" y1="202" x2="685" y2="202" class="domain-source__line" />
      <circle cx="${r(-2)}" cy="202" r="7" class="domain-source__endpoint" />
      <path d="M696 202l-12 -7v14z" class="domain-source__arrow" />
    </g>
    <g class="domain-source domain-source--g">
      <text x="78" y="230" class="domain-source__label">D<tspan baseline-shift="sub" font-size="10">g</tspan> = (−∞, 1]</text>
      <line x1="75" y1="239" x2="${r(1)}" y2="239" class="domain-source__line" />
      <path d="M64 239l12 -7v14z" class="domain-source__arrow" />
      <circle cx="${r(1)}" cy="239" r="7" class="domain-source__endpoint" />
    </g>
  `}function v(){let t=m[h],r=Number(g.value),i=t.gates(r);n(document.querySelector(`#domain-formula`),t.formulaTex,!0),n(document.querySelector(`#domain-answer`),t.domainTex);let a=document.querySelector(`#domain-reason`);a.innerHTML=t.reason,e(a),document.querySelector(`#domain-x-output`).textContent=u(r,1),[`one`,`two`,`three`].forEach((t,r)=>{let a=document.querySelector(`#domain-gate-${t}`);a.classList.toggle(`is-pass`,i[r].pass),a.classList.toggle(`is-blocked`,!i[r].pass);let o=a.querySelector(`strong`);i[r].titleMarkup?(o.innerHTML=i[r].titleMarkup,e(o)):o.textContent=i[r].title;let s=a.querySelector(`small`);i[r].detailTex?n(s,i[r].detailTex):s.textContent=i[r].detail});let o=i[2].pass,s=document.querySelector(`#domain-verdict`);s.className=`domain-verdict ${o?`is-pass`:`is-blocked`}`,s.innerHTML=`<strong>${o?`${u(r,1)} is in the domain.`:`${u(r,1)} is not in the domain.`}</strong><span>${o?`Every required gate is open.`:`At least one required gate is closed.`}</span>`,_(t,r)}document.querySelectorAll(`[data-domain-operation]`).forEach(e=>{e.addEventListener(`click`,()=>{h=e.dataset.domainOperation,document.querySelectorAll(`[data-domain-operation]`).forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),v()})}),g.addEventListener(`input`,v),v();var y=`fg`,b=document.querySelector(`#order-price`);function x(){let e=Number(b.value),t=e-100,r=t*.9,i=e*.9,a=i-100,o=y===`fg`;document.querySelector(`#order-price-output`).textContent=d(e),n(document.querySelector(`#order-formula`),o?String.raw`(f\circ g)(x)=0.90(x-100)`:String.raw`(g\circ f)(x)=0.90x-100`,!0),document.querySelector(`#order-step-input`).textContent=d(e),document.querySelector(`#order-inner-label`).textContent=o?`g acts first`:`f acts first`,document.querySelector(`#order-step-middle`).textContent=d(o?t:i),document.querySelector(`#order-outer-label`).textContent=o?`f acts second`:`g acts second`,document.querySelector(`#order-step-final`).textContent=d(o?r:a),document.querySelector(`#order-fg-total`).textContent=d(r),document.querySelector(`#order-gf-total`).textContent=d(a),document.querySelector(`#order-fg-bar`).style.width=`${Math.max(8,r/e*100)}%`,document.querySelector(`#order-gf-bar`).style.width=`${Math.max(8,a/e*100)}%`,document.querySelector(`#order-insight`).textContent=`Discounting first and subtracting the rebate second saves ${d(r-a)} more. The rebate stays a full $100.`}document.querySelectorAll(`[data-order]`).forEach(e=>{e.addEventListener(`click`,()=>{y=e.dataset.order,document.querySelectorAll(`[data-order]`).forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),x()})}),b.addEventListener(`input`,x),x();var S={power:{targetTex:String.raw`F(x)=(5-\sqrt[3]{x})^7`,prompt:`The seventh power happens last, so keep the entire “5 minus” expression in the outer function.`,layers:[{label:`input`,formulaTex:String.raw`x`},{label:`inner g`,formulaTex:String.raw`g(x)=\sqrt[3]{x}`},{label:`outer f`,formulaTex:String.raw`f(u)=(5-u)^7`}],resultTex:String.raw`F=f\circ g,\qquad \text{because}\qquad f(g(x))=(5-\sqrt[3]{x})^7`},rational:{targetTex:String.raw`G(t)=\frac{t^2}{t^2+4}`,prompt:`The same ${t(String.raw`t^2`)} appears twice. Treat that repeated expression as one inner output.`,layers:[{label:`input`,formulaTex:String.raw`t`},{label:`inner g`,formulaTex:String.raw`g(t)=t^2`},{label:`outer f`,formulaTex:String.raw`f(u)=\frac{u}{u+4}`}],resultTex:String.raw`G=f\circ g,\qquad \text{because}\qquad f(g(t))=\frac{t^2}{t^2+4}`},radical:{targetTex:String.raw`H(s)=\sqrt{s^3+4s}`,prompt:`The square root happens last. Everything beneath it belongs to the inner function.`,layers:[{label:`input`,formulaTex:String.raw`s`},{label:`inner g`,formulaTex:String.raw`g(s)=s^3+4s`},{label:`outer f`,formulaTex:String.raw`f(u)=\sqrt{u}`}],resultTex:String.raw`H=f\circ g,\qquad \text{because}\qquad f(g(s))=\sqrt{s^3+4s}`},triple:{targetTex:String.raw`G(x)=3-\sqrt[4]{5x}`,prompt:`Follow the construction: multiply by 5, take a fourth root, then subtract from 3.`,layers:[{label:`input`,formulaTex:String.raw`x`},{label:`inner h`,formulaTex:String.raw`h(x)=5x`},{label:`middle g`,formulaTex:String.raw`g(u)=\sqrt[4]{u}`},{label:`outer f`,formulaTex:String.raw`f(v)=3-v`}],resultTex:String.raw`G=f\circ g\circ h,\qquad \text{read from right to left}`}},C=`power`,w=1;function T(){let r=S[C];n(document.querySelector(`#peel-target`),r.targetTex);let i=document.querySelector(`#peel-prompt`);i.innerHTML=r.prompt,e(i);let a=document.querySelector(`#peel-pipeline`);a.innerHTML=r.layers.map((e,n)=>`
      ${n?`<i class="peel-arrow ${n<w?`is-visible`:``}" aria-hidden="true">→</i>`:``}
      <article class="peel-layer ${n<w?`is-visible`:``}">
        <span>${n<w?e.label:`hidden layer`}</span>
        <strong>${n<w?t(e.formulaTex):`?`}</strong>
      </article>
    `).join(``),e(a);let o=w>=r.layers.length,s=document.querySelector(`#peel-next`);s.disabled=o,s.textContent=o?`All layers revealed`:`Peel the next layer`;let c=document.querySelector(`#peel-equivalence`);o?n(c,r.resultTex):c.textContent=``}document.querySelectorAll(`[data-peel]`).forEach(e=>{e.addEventListener(`click`,()=>{C=e.dataset.peel,w=1,document.querySelectorAll(`[data-peel]`).forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),T()})}),document.querySelector(`#peel-next`).addEventListener(`click`,()=>{w=Math.min(S[C].layers.length,w+1),T()}),document.querySelector(`#peel-reset`).addEventListener(`click`,()=>{w=1,T()}),T();var E=document.querySelector(`#balloon-time`);function D(){let e=Number(E.value),t=e>=12,r=document.querySelector(`.balloon-lab`),i=e/12,a=Math.round(46+i*50),o=Math.round(92-i*6),s=Math.round(78-i*14),c=Math.round(68-i*20),l=3.4-i*2.55;r.style.setProperty(`--balloon-saturation`,`${a}%`),r.style.setProperty(`--balloon-light`,`${o}%`),r.style.setProperty(`--balloon-middle`,`${s}%`),r.style.setProperty(`--balloon-deep`,`${c}%`),r.style.setProperty(`--balloon-pulse-duration`,`${l.toFixed(2)}s`),E.style.accentColor=`hsl(11, ${a}%, ${c}%)`;let d=e*5,p=4*d**3/3,m=34+e/12*154;document.querySelector(`#balloon-circle`).setAttribute(`r`,m);let h=document.querySelector(`#balloon-highlight`);h.setAttribute(`cx`,310-m*.32),h.setAttribute(`cy`,246-m*.34),h.setAttribute(`rx`,Math.max(7,m*.12)),h.setAttribute(`ry`,Math.max(12,m*.2));let g=246+m;document.querySelector(`#balloon-knot`).setAttribute(`d`,`M298 ${g-2}L322 ${g-2}L310 ${g+19}Z`),document.querySelector(`#balloon-string`).setAttribute(`d`,`M310 ${g+18}C292 ${g+58} 335 ${g+84} 310 505`),document.querySelector(`#balloon-radius-line`).setAttribute(`x2`,310+m);let _=document.querySelector(`#balloon-radius-label`);_.setAttribute(`x`,310+m/2),_.textContent=`r = ${u(d,1)} cm`,document.querySelector(`#balloon-time-output`).textContent=`${u(e,1)} s`,document.querySelector(`.balloon-stage`).classList.toggle(`is-popped`,t),document.querySelector(`#balloon-svg`).setAttribute(`aria-label`,t?`A balloon popping after reaching the maximum inflation time`:`A balloon growing as time increases`);let v=document.querySelector(`#balloon-pressure`),y=t?`popped`:e>=10?`danger`:e>=7?`caution`:`safe`,b={safe:`Stable`,caution:`Pressure rising`,danger:`Near its limit`,popped:`Surprise!`}[y];v.className=`balloon-pressure is-${y}`,v.querySelector(`strong`).textContent=b,n(document.querySelector(`#balloon-radius-readout`),String.raw`r=${u(d,1)}\,\mathrm{cm}`),n(document.querySelector(`#balloon-volume-readout`),String.raw`V=${f(p).replaceAll(`,`,`{,}`)}\pi\,\mathrm{cm}^3`),document.querySelector(`#balloon-meaning`).textContent=t?`At 12 seconds, the model reaches the demo’s inflation limit—the calculated radius is 60 cm, and the balloon pops.`:`At ${u(e,1)} seconds, the composite returns the balloon’s volume directly from time.`}E.addEventListener(`input`,D),D(),document.querySelector(`#blueprint-reveal`).addEventListener(`click`,e=>{let t=document.querySelector(`#blueprint-answer`),n=t.hidden;t.hidden=!n,e.currentTarget.setAttribute(`aria-expanded`,String(n)),e.currentTarget.textContent=n?`Hide construction`:`Reveal one construction`}),document.querySelector(`#check-domain-button`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-domain`).value===`correct`;l(document.querySelector(`#feedback-domain`),e,e?`Correct. ${t(String.raw`x=3`)} is allowed by the radical, but ${t(String.raw`x=5`)} makes the denominator zero.`:`Require ${t(String.raw`x-3\ge 0`)}, then remove the value that makes ${t(String.raw`x-5`)} equal zero.`)}),document.querySelector(`#check-composite-button`).addEventListener(`click`,()=>{let e=i(Number(document.querySelector(`#check-composite`).value),19);l(document.querySelector(`#feedback-composite`),e,e?`Correct. ${t(String.raw`g(3)=9`)} first, and ${t(String.raw`f(9)=2(9)+1=19`)}.`:`Start with the inner function: find ${t(String.raw`g(3)`)}, then use that result as ${t(String.raw`f`)}’s input.`)}),document.querySelector(`#check-decompose-button`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-decompose`).value===`correct`;l(document.querySelector(`#feedback-decompose`),e,e?`Correct. Build ${t(String.raw`x^3+4x`)} first, then take the square root of that entire output.`:`Ask which operation happens last. The square root is the outer function.`)}),document.querySelector(`#check-order-button`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-order`).value===`correct`;l(document.querySelector(`#feedback-order`),e,e?`Correct. ${t(String.raw`0.90(800)-100=\$620`)}, which is $10 less than ${t(String.raw`0.90(800-100)=\$630`)}.`:`Compare ${t(String.raw`0.90(800-100)`)} with ${t(String.raw`0.90(800)-100`)}. The order changes whether the rebate is discounted too.`)}),o();