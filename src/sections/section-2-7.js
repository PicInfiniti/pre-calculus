import "../assets/sass/lesson.sass";
import { mathMarkup, setMath, typesetMath } from "./math";
import {
  initLessonChrome,
  nearlyEqual,
  renderLessonFooter,
  renderLessonHeader,
  setFeedback,
} from "./shared";

const root = document.querySelector("#app");

function setMathFeedback(element, correct, markup) {
  setFeedback(element, correct, "");
  element.innerHTML = markup;
  typesetMath(element);
}

root.innerHTML = `
  ${renderLessonHeader("2.7")}
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
        <div class="hero-machine hero-machine--f"><span>outer</span><strong>f</strong><small>receives ${mathMarkup(String.raw`g(x)`)}</small></div>
        <div class="hero-machine__path hero-machine__path--one"><i>${mathMarkup(String.raw`x`)}</i></div>
        <div class="hero-machine__path hero-machine__path--two"><i>${mathMarkup(String.raw`g(x)`)}</i></div>
        <div class="hero-machine__path hero-machine__path--three"><i>${mathMarkup(String.raw`f(g(x))`)}</i></div>
        <div class="hero-operation-card">${mathMarkup(String.raw`(f+g)(x)`)}</div>
        <div class="hero-composition-card">${mathMarkup(String.raw`f\circ g`)} <span class="hero-composition-card__direction">right to left</span></div>
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
          <article><span>Side by side</span><strong>${mathMarkup(String.raw`D_{f\pm g}=D_f\cap D_g`)}</strong></article>
          <article><span>Quotient</span><strong>${mathMarkup(String.raw`D_{f/g}=D_f\cap D_g,\quad g(x)\ne 0`)}</strong></article>
          <article><span>Composition</span><strong>${mathMarkup(String.raw`x\in D_g\quad\text{and}\quad g(x)\in D_f`)}</strong></article>
        </div>
      </div>

      <div class="domain-gate-lab" data-reveal>
        <div class="domain-gate-lab__stage">
          <div class="domain-function-pair" aria-label="Functions used in the domain explorer">
            <span><i>f</i><b>${mathMarkup(String.raw`f(x)=\sqrt{x+2}`)}<small>${mathMarkup(String.raw`D_f=[-2,\infty)`)}</small></b></span>
            <span><i>g</i><b>${mathMarkup(String.raw`g(x)=\sqrt{1-x}`)}<small>${mathMarkup(String.raw`D_g=(-\infty,1]`)}</small></b></span>
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
            <button class="is-active" type="button" data-domain-operation="sum" role="tab" aria-selected="true">${mathMarkup(String.raw`f+g`)}</button>
            <button type="button" data-domain-operation="quotient" role="tab" aria-selected="false">${mathMarkup(String.raw`f/g`)}</button>
            <button type="button" data-domain-operation="composition" role="tab" aria-selected="false">${mathMarkup(String.raw`g\circ f`)}</button>
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
        <p>In ${mathMarkup(String.raw`(f\circ g)(x)=f(g(x))`)}, ${mathMarkup(String.raw`g`)} acts first. Its output becomes the input of ${mathMarkup(String.raw`f`)}. Reversing the order can produce a different function and a different answer.</p>
      </div>

      <div class="order-lab" data-reveal>
        <div class="order-lab__controls">
          <p class="tool-label">Two price-changing functions</p>
          <div class="order-function-definitions">
            <article><span>f</span><div><strong>10% discount</strong><small>${mathMarkup(String.raw`f(x)=0.90x`)}</small></div></article>
            <article><span>g</span><div><strong>$100 rebate</strong><small>${mathMarkup(String.raw`g(x)=x-100`)}</small></div></article>
          </div>
          <label for="order-price">Sticker price <output id="order-price-output">$800</output></label>
          <input id="order-price" type="range" min="200" max="2000" step="25" value="800" />
          <div class="order-choice" role="tablist" aria-label="Composition order">
            <button class="is-active" type="button" data-order="fg" role="tab" aria-selected="true"><span>${mathMarkup(String.raw`f\circ g`)}</span>rebate, then discount</button>
            <button type="button" data-order="gf" role="tab" aria-selected="false"><span>${mathMarkup(String.raw`g\circ f`)}</span>discount, then rebate</button>
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
            <div><span>${mathMarkup(String.raw`f\circ g`)}</span><b id="order-fg-total">$630</b><i id="order-fg-bar"></i></div>
            <div><span>${mathMarkup(String.raw`g\circ f`)}</span><b id="order-gf-total">$620</b><i id="order-gf-bar"></i></div>
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
          <button class="is-active" type="button" data-peel="power" role="tab" aria-selected="true"><span>A</span><b>${mathMarkup(String.raw`(5-\sqrt[3]{x})^7`)}</b></button>
          <button type="button" data-peel="rational" role="tab" aria-selected="false"><span>B</span><b>${mathMarkup(String.raw`\frac{t^2}{t^2+4}`)}</b></button>
          <button type="button" data-peel="radical" role="tab" aria-selected="false"><span>C</span><b>${mathMarkup(String.raw`\sqrt{s^3+4s}`)}</b></button>
          <button type="button" data-peel="triple" role="tab" aria-selected="false"><span>D</span><b>${mathMarkup(String.raw`3-\sqrt[4]{5x}`)}</b></button>
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
        <p><strong>${mathMarkup(String.raw`f\circ g\circ h`)}</strong> means “h first, then g, then f.” Evaluation always begins beside the input.</p>
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
            <article><span>time → radius</span><strong>${mathMarkup(String.raw`r=f(t)=5t`)}</strong><small id="balloon-radius-readout"></small></article>
            <i>→</i>
            <article><span>radius → volume</span><strong>${mathMarkup(String.raw`V=g(r)=\frac{4}{3}\pi r^3`)}</strong><small id="balloon-volume-readout"></small></article>
          </div>
          <div class="model-composite">
            <span>Direct time-to-volume model</span>
            <strong>${mathMarkup(String.raw`(g\circ f)(t)=\frac{4}{3}\pi(5t)^3=\frac{500}{3}\pi t^3`, true)}</strong>
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
          <span>Inner</span><strong>${mathMarkup(String.raw`g(x)=x^2`)}</strong>
          <i>→</i>
          <span>Outer</span><strong>${mathMarkup(String.raw`f(u)=\sqrt{\frac{4-u}{u}}`)}</strong>
          <p>The outer domain is ${mathMarkup(String.raw`(0,4]`)}. Requiring ${mathMarkup(String.raw`x^2\in(0,4]`)} gives ${mathMarkup(String.raw`0<x^2\le 4`)}, so ${mathMarkup(String.raw`-2\le x<0`)} or ${mathMarkup(String.raw`0<x\le 2`)}.</p>
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
          <h3>Find the domain of ${mathMarkup(String.raw`\frac{\sqrt{x-3}}{x-5}`)}.</h3>
          <label>Domain <select id="check-domain"><option value="">Choose…</option><option value="a">[3, ∞)</option><option value="correct">[3, 5) ∪ (5, ∞)</option><option value="b">(3, 5) ∪ (5, ∞)</option></select></label>
          <button id="check-domain-button" type="button">Check domain</button>
          <p class="answer-feedback" id="feedback-domain" aria-live="polite"></p>
        </article>
        <article class="combination-check" data-reveal>
          <span>Evaluate a composite</span>
          <h3>If ${mathMarkup(String.raw`f(x)=2x+1`)} and ${mathMarkup(String.raw`g(x)=x^2`)}, find ${mathMarkup(String.raw`(f\circ g)(3)`)}.</h3>
          <label>Value <input id="check-composite" type="number" inputmode="decimal" /></label>
          <button id="check-composite-button" type="button">Check value</button>
          <p class="answer-feedback" id="feedback-composite" aria-live="polite"></p>
        </article>
        <article class="combination-check" data-reveal>
          <span>Decompose</span>
          <h3>Write ${mathMarkup(String.raw`\sqrt{x^3+4x}`)} as ${mathMarkup(String.raw`f\circ g`)}.</h3>
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
  ${renderLessonFooter({
    previous: { href: "pages/sections/2-6.html", label: "Section 2.6 · Transformations of functions" },
    next: { href: "pages/sections/2-8.html", label: "Section 2.8 · One-to-one functions and inverses" },
  })}
`;

typesetMath(root);

function formatValue(value, digits = 2) {
  if (!Number.isFinite(value)) return "undefined";
  const rounded = Number(value.toFixed(digits));
  const text = Number.isInteger(rounded) ? String(rounded) : String(rounded);
  return text.replace("-", "−");
}

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPlainNumber(value) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value);
}

function formatTexValue(value, digits = 2) {
  const rounded = Number(value.toFixed(digits));
  return String(rounded);
}

const domainCases = {
  sum: {
    domain: "[−2, 1]",
    formulaTex: String.raw`(f+g)(x)=\sqrt{x+2}+\sqrt{1-x}`,
    domainTex: String.raw`[-2,1]`,
    reason: "Both radicals must be real.",
    interval: [-2, 1],
    closed: [true, true],
    gates(x) {
      const first = x >= -2;
      const second = x <= 1;
      return [
        { pass: first, titleMarkup: `${mathMarkup(String.raw`f(x)`)} is ${first ? "real" : "not real"}`, detailTex: String.raw`x+2${first ? String.raw`\ge` : "<"}0` },
        { pass: second, titleMarkup: `${mathMarkup(String.raw`g(x)`)} is ${second ? "real" : "not real"}`, detailTex: String.raw`1-x${second ? String.raw`\ge` : "<"}0` },
        { pass: first && second, title: first && second ? "Input accepted" : "Input blocked", detailTex: first && second ? String.raw`\text{Value}\approx ${formatTexValue(Math.sqrt(x + 2) + Math.sqrt(1 - x))}` : null, detail: "Both gates must pass" },
      ];
    },
  },
  quotient: {
    domain: "[−2, 1)",
    formulaTex: String.raw`\left(\frac{f}{g}\right)(x)=\frac{\sqrt{x+2}}{\sqrt{1-x}}`,
    domainTex: String.raw`[-2,1)`,
    reason: `Both radicals must be real, and ${mathMarkup(String.raw`g(x)\ne0`)}.`,
    interval: [-2, 1],
    closed: [true, false],
    gates(x) {
      const radicals = x >= -2 && x <= 1;
      const denominator = x < 1;
      return [
        { pass: radicals, title: radicals ? "Radicals are real" : "A radical fails", detailTex: String.raw`-2\le x\le 1` },
        { pass: denominator, title: denominator ? "Denominator is nonzero" : "Division by zero", detailTex: String.raw`g(x)${denominator ? String.raw`\ne` : "="}0` },
        { pass: radicals && denominator, title: radicals && denominator ? "Input accepted" : "Input blocked", detailTex: radicals && denominator ? String.raw`\text{Value}\approx ${formatTexValue(Math.sqrt(x + 2) / Math.sqrt(1 - x))}` : null, detail: "Every restriction must pass" },
      ];
    },
  },
  composition: {
    domain: "[−2, −1]",
    formulaTex: String.raw`(g\circ f)(x)=\sqrt{1-\sqrt{x+2}}`,
    domainTex: String.raw`[-2,-1]`,
    reason: `The inner radical must be real and its output must satisfy ${mathMarkup(String.raw`f(x)\le1`)}.`,
    interval: [-2, -1],
    closed: [true, true],
    gates(x) {
      const inner = x >= -2;
      const innerValue = inner ? Math.sqrt(x + 2) : NaN;
      const outer = inner && innerValue <= 1;
      return [
        { pass: inner, title: inner ? "Inner f works" : "Inner f is blocked", detailTex: inner ? String.raw`f(x)\approx ${formatTexValue(innerValue)}` : String.raw`x+2<0` },
        { pass: outer, title: outer ? "Output fits g" : "Output does not fit g", detailTex: inner ? String.raw`f(x)${outer ? String.raw`\le` : ">"}1` : null, detail: "No inner output to test" },
        { pass: inner && outer, title: inner && outer ? "Input accepted" : "Input blocked", detailTex: inner && outer ? String.raw`\text{Value}\approx ${formatTexValue(Math.sqrt(1 - innerValue))}` : null, detail: "The output handoff fails" },
      ];
    },
  },
};

let activeDomainCase = "sum";
const domainInput = document.querySelector("#domain-x");

function renderDomainLine(selected, x) {
  const svg = document.querySelector("#domain-number-line");
  const xMin = -4;
  const xMax = 3;
  const left = 64;
  const right = 696;
  const y = 132;
  const fDomainY = 202;
  const gDomainY = 239;
  const map = (value) => left + ((value - xMin) / (xMax - xMin)) * (right - left);
  const [start, end] = selected.interval;
  const accepted = selected.gates(x)[2].pass;
  const ticks = [];
  for (let value = xMin; value <= xMax; value += 1) {
    ticks.push(`
      <line x1="${map(value)}" y1="${y - 10}" x2="${map(value)}" y2="${y + 10}" class="domain-line__tick" />
      <text x="${map(value)}" y="${y + 35}" text-anchor="middle" class="domain-line__label">${String(value).replace("-", "−")}</text>
    `);
  }
  svg.innerHTML = `
    <text x="64" y="54" class="domain-line__title">Surviving inputs: ${selected.domain}</text>
    <line x1="${left}" y1="${y}" x2="${right}" y2="${y}" class="domain-line__base" />
    <path d="M${left} ${y}l12 -7v14zM${right} ${y}l-12 -7v14z" class="domain-line__arrow" />
    ${ticks.join("")}
    <line x1="${map(start)}" y1="${y}" x2="${map(end)}" y2="${y}" class="domain-line__interval" />
    <circle cx="${map(start)}" cy="${y}" r="10" class="domain-line__endpoint ${selected.closed[0] ? "is-closed" : "is-open"}" />
    <circle cx="${map(end)}" cy="${y}" r="10" class="domain-line__endpoint ${selected.closed[1] ? "is-closed" : "is-open"}" />
    <line x1="${map(x)}" y1="${y - 58}" x2="${map(x)}" y2="${y - 18}" class="domain-line__marker-stem ${accepted ? "is-accepted" : "is-blocked"}" />
    <circle cx="${map(x)}" cy="${y - 64}" r="15" class="domain-line__marker ${accepted ? "is-accepted" : "is-blocked"}" />
    <text x="${map(x)}" y="${y - 59}" text-anchor="middle" class="domain-line__marker-label">x</text>
    <g class="domain-source domain-source--f">
      <text x="${map(-2) + 14}" y="${fDomainY - 9}" class="domain-source__label">D<tspan baseline-shift="sub" font-size="10">f</tspan> = [−2, ∞)</text>
      <line x1="${map(-2)}" y1="${fDomainY}" x2="${right - 11}" y2="${fDomainY}" class="domain-source__line" />
      <circle cx="${map(-2)}" cy="${fDomainY}" r="7" class="domain-source__endpoint" />
      <path d="M${right} ${fDomainY}l-12 -7v14z" class="domain-source__arrow" />
    </g>
    <g class="domain-source domain-source--g">
      <text x="${left + 14}" y="${gDomainY - 9}" class="domain-source__label">D<tspan baseline-shift="sub" font-size="10">g</tspan> = (−∞, 1]</text>
      <line x1="${left + 11}" y1="${gDomainY}" x2="${map(1)}" y2="${gDomainY}" class="domain-source__line" />
      <path d="M${left} ${gDomainY}l12 -7v14z" class="domain-source__arrow" />
      <circle cx="${map(1)}" cy="${gDomainY}" r="7" class="domain-source__endpoint" />
    </g>
  `;
}

function renderDomainLab() {
  const selected = domainCases[activeDomainCase];
  const x = Number(domainInput.value);
  const gates = selected.gates(x);
  setMath(document.querySelector("#domain-formula"), selected.formulaTex, true);
  setMath(document.querySelector("#domain-answer"), selected.domainTex);
  const reason = document.querySelector("#domain-reason");
  reason.innerHTML = selected.reason;
  typesetMath(reason);
  document.querySelector("#domain-x-output").textContent = formatValue(x, 1);
  ["one", "two", "three"].forEach((name, index) => {
    const element = document.querySelector(`#domain-gate-${name}`);
    element.classList.toggle("is-pass", gates[index].pass);
    element.classList.toggle("is-blocked", !gates[index].pass);
    const title = element.querySelector("strong");
    if (gates[index].titleMarkup) {
      title.innerHTML = gates[index].titleMarkup;
      typesetMath(title);
    } else {
      title.textContent = gates[index].title;
    }
    const detail = element.querySelector("small");
    if (gates[index].detailTex) {
      setMath(detail, gates[index].detailTex);
    } else {
      detail.textContent = gates[index].detail;
    }
  });
  const accepted = gates[2].pass;
  const verdict = document.querySelector("#domain-verdict");
  verdict.className = `domain-verdict ${accepted ? "is-pass" : "is-blocked"}`;
  verdict.innerHTML = `<strong>${accepted ? `${formatValue(x, 1)} is in the domain.` : `${formatValue(x, 1)} is not in the domain.`}</strong><span>${accepted ? "Every required gate is open." : "At least one required gate is closed."}</span>`;
  renderDomainLine(selected, x);
}

document.querySelectorAll("[data-domain-operation]").forEach((button) => {
  button.addEventListener("click", () => {
    activeDomainCase = button.dataset.domainOperation;
    document.querySelectorAll("[data-domain-operation]").forEach((candidate) => {
      const selected = candidate === button;
      candidate.classList.toggle("is-active", selected);
      candidate.setAttribute("aria-selected", String(selected));
    });
    renderDomainLab();
  });
});
domainInput.addEventListener("input", renderDomainLab);
renderDomainLab();

let activeOrder = "fg";
const orderPrice = document.querySelector("#order-price");

function renderOrderLab() {
  const price = Number(orderPrice.value);
  const fgMiddle = price - 100;
  const fgFinal = fgMiddle * 0.9;
  const gfMiddle = price * 0.9;
  const gfFinal = gfMiddle - 100;
  const fg = activeOrder === "fg";
  document.querySelector("#order-price-output").textContent = formatMoney(price);
  setMath(
    document.querySelector("#order-formula"),
    fg ? String.raw`(f\circ g)(x)=0.90(x-100)` : String.raw`(g\circ f)(x)=0.90x-100`,
    true,
  );
  document.querySelector("#order-step-input").textContent = formatMoney(price);
  document.querySelector("#order-inner-label").textContent = fg ? "g acts first" : "f acts first";
  document.querySelector("#order-step-middle").textContent = formatMoney(fg ? fgMiddle : gfMiddle);
  document.querySelector("#order-outer-label").textContent = fg ? "f acts second" : "g acts second";
  document.querySelector("#order-step-final").textContent = formatMoney(fg ? fgFinal : gfFinal);
  document.querySelector("#order-fg-total").textContent = formatMoney(fgFinal);
  document.querySelector("#order-gf-total").textContent = formatMoney(gfFinal);
  document.querySelector("#order-fg-bar").style.width = `${Math.max(8, (fgFinal / price) * 100)}%`;
  document.querySelector("#order-gf-bar").style.width = `${Math.max(8, (gfFinal / price) * 100)}%`;
  document.querySelector("#order-insight").textContent = `Discounting first and subtracting the rebate second saves ${formatMoney(fgFinal - gfFinal)} more. The rebate stays a full $100.`;
}

document.querySelectorAll("[data-order]").forEach((button) => {
  button.addEventListener("click", () => {
    activeOrder = button.dataset.order;
    document.querySelectorAll("[data-order]").forEach((candidate) => {
      const selected = candidate === button;
      candidate.classList.toggle("is-active", selected);
      candidate.setAttribute("aria-selected", String(selected));
    });
    renderOrderLab();
  });
});
orderPrice.addEventListener("input", renderOrderLab);
renderOrderLab();

const peelCases = {
  power: {
    targetTex: String.raw`F(x)=(5-\sqrt[3]{x})^7`,
    prompt: "The seventh power happens last, so keep the entire “5 minus” expression in the outer function.",
    layers: [
      { label: "input", formulaTex: String.raw`x` },
      { label: "inner g", formulaTex: String.raw`g(x)=\sqrt[3]{x}` },
      { label: "outer f", formulaTex: String.raw`f(u)=(5-u)^7` },
    ],
    resultTex: String.raw`F=f\circ g,\qquad \text{because}\qquad f(g(x))=(5-\sqrt[3]{x})^7`,
  },
  rational: {
    targetTex: String.raw`G(t)=\frac{t^2}{t^2+4}`,
    prompt: `The same ${mathMarkup(String.raw`t^2`)} appears twice. Treat that repeated expression as one inner output.`,
    layers: [
      { label: "input", formulaTex: String.raw`t` },
      { label: "inner g", formulaTex: String.raw`g(t)=t^2` },
      { label: "outer f", formulaTex: String.raw`f(u)=\frac{u}{u+4}` },
    ],
    resultTex: String.raw`G=f\circ g,\qquad \text{because}\qquad f(g(t))=\frac{t^2}{t^2+4}`,
  },
  radical: {
    targetTex: String.raw`H(s)=\sqrt{s^3+4s}`,
    prompt: "The square root happens last. Everything beneath it belongs to the inner function.",
    layers: [
      { label: "input", formulaTex: String.raw`s` },
      { label: "inner g", formulaTex: String.raw`g(s)=s^3+4s` },
      { label: "outer f", formulaTex: String.raw`f(u)=\sqrt{u}` },
    ],
    resultTex: String.raw`H=f\circ g,\qquad \text{because}\qquad f(g(s))=\sqrt{s^3+4s}`,
  },
  triple: {
    targetTex: String.raw`G(x)=3-\sqrt[4]{5x}`,
    prompt: "Follow the construction: multiply by 5, take a fourth root, then subtract from 3.",
    layers: [
      { label: "input", formulaTex: String.raw`x` },
      { label: "inner h", formulaTex: String.raw`h(x)=5x` },
      { label: "middle g", formulaTex: String.raw`g(u)=\sqrt[4]{u}` },
      { label: "outer f", formulaTex: String.raw`f(v)=3-v` },
    ],
    resultTex: String.raw`G=f\circ g\circ h,\qquad \text{read from right to left}`,
  },
};

let activePeel = "power";
let revealedLayers = 1;

function renderPeelLab() {
  const selected = peelCases[activePeel];
  setMath(document.querySelector("#peel-target"), selected.targetTex);
  const prompt = document.querySelector("#peel-prompt");
  prompt.innerHTML = selected.prompt;
  typesetMath(prompt);
  const pipeline = document.querySelector("#peel-pipeline");
  pipeline.innerHTML = selected.layers
    .map((layer, index) => `
      ${index ? `<i class="peel-arrow ${index < revealedLayers ? "is-visible" : ""}" aria-hidden="true">→</i>` : ""}
      <article class="peel-layer ${index < revealedLayers ? "is-visible" : ""}">
        <span>${index < revealedLayers ? layer.label : "hidden layer"}</span>
        <strong>${index < revealedLayers ? mathMarkup(layer.formulaTex) : "?"}</strong>
      </article>
    `)
    .join("");
  typesetMath(pipeline);
  const complete = revealedLayers >= selected.layers.length;
  const nextButton = document.querySelector("#peel-next");
  nextButton.disabled = complete;
  nextButton.textContent = complete ? "All layers revealed" : "Peel the next layer";
  const equivalence = document.querySelector("#peel-equivalence");
  if (complete) setMath(equivalence, selected.resultTex);
  else equivalence.textContent = "";
}

document.querySelectorAll("[data-peel]").forEach((button) => {
  button.addEventListener("click", () => {
    activePeel = button.dataset.peel;
    revealedLayers = 1;
    document.querySelectorAll("[data-peel]").forEach((candidate) => {
      const selected = candidate === button;
      candidate.classList.toggle("is-active", selected);
      candidate.setAttribute("aria-selected", String(selected));
    });
    renderPeelLab();
  });
});
document.querySelector("#peel-next").addEventListener("click", () => {
  revealedLayers = Math.min(peelCases[activePeel].layers.length, revealedLayers + 1);
  renderPeelLab();
});
document.querySelector("#peel-reset").addEventListener("click", () => {
  revealedLayers = 1;
  renderPeelLab();
});
renderPeelLab();

const balloonTime = document.querySelector("#balloon-time");

function renderBalloon() {
  const time = Number(balloonTime.value);
  const popped = time >= 12;
  const balloonLab = document.querySelector(".balloon-lab");
  const pressureRatio = time / 12;
  const balloonSaturation = Math.round(46 + pressureRatio * 50);
  const balloonLight = Math.round(92 - pressureRatio * 6);
  const balloonMiddle = Math.round(78 - pressureRatio * 14);
  const balloonDeep = Math.round(68 - pressureRatio * 20);
  const pulseDuration = 3.4 - pressureRatio * 2.55;
  balloonLab.style.setProperty("--balloon-saturation", `${balloonSaturation}%`);
  balloonLab.style.setProperty("--balloon-light", `${balloonLight}%`);
  balloonLab.style.setProperty("--balloon-middle", `${balloonMiddle}%`);
  balloonLab.style.setProperty("--balloon-deep", `${balloonDeep}%`);
  balloonLab.style.setProperty("--balloon-pulse-duration", `${pulseDuration.toFixed(2)}s`);
  balloonTime.style.accentColor = `hsl(11, ${balloonSaturation}%, ${balloonDeep}%)`;
  const radius = time * 5;
  const volumeCoefficient = (4 * radius ** 3) / 3;
  const visualRadius = 34 + (time / 12) * 154;
  const centerY = 246;
  const circle = document.querySelector("#balloon-circle");
  circle.setAttribute("r", visualRadius);
  const highlight = document.querySelector("#balloon-highlight");
  highlight.setAttribute("cx", 310 - visualRadius * 0.32);
  highlight.setAttribute("cy", centerY - visualRadius * 0.34);
  highlight.setAttribute("rx", Math.max(7, visualRadius * 0.12));
  highlight.setAttribute("ry", Math.max(12, visualRadius * 0.2));
  const bottom = centerY + visualRadius;
  document.querySelector("#balloon-knot").setAttribute("d", `M298 ${bottom - 2}L322 ${bottom - 2}L310 ${bottom + 19}Z`);
  document.querySelector("#balloon-string").setAttribute("d", `M310 ${bottom + 18}C292 ${bottom + 58} 335 ${bottom + 84} 310 505`);
  document.querySelector("#balloon-radius-line").setAttribute("x2", 310 + visualRadius);
  const radiusLabel = document.querySelector("#balloon-radius-label");
  radiusLabel.setAttribute("x", 310 + visualRadius / 2);
  radiusLabel.textContent = `r = ${formatValue(radius, 1)} cm`;
  document.querySelector("#balloon-time-output").textContent = `${formatValue(time, 1)} s`;
  document.querySelector(".balloon-stage").classList.toggle("is-popped", popped);
  document.querySelector("#balloon-svg").setAttribute("aria-label", popped ? "A balloon popping after reaching the maximum inflation time" : "A balloon growing as time increases");
  const pressure = document.querySelector("#balloon-pressure");
  const pressureState = popped ? "popped" : time >= 10 ? "danger" : time >= 7 ? "caution" : "safe";
  const pressureCopy = {
    safe: "Stable",
    caution: "Pressure rising",
    danger: "Near its limit",
    popped: "Limit reached",
  }[pressureState];
  pressure.className = `balloon-pressure is-${pressureState}`;
  pressure.querySelector("strong").textContent = pressureCopy;
  setMath(
    document.querySelector("#balloon-radius-readout"),
    String.raw`r=${formatValue(radius, 1)}\,\mathrm{cm}`,
  );
  setMath(
    document.querySelector("#balloon-volume-readout"),
    String.raw`V=${formatPlainNumber(volumeCoefficient).replaceAll(",", "{,}")}\pi\,\mathrm{cm}^3`,
  );
  document.querySelector("#balloon-meaning").textContent = popped
    ? "At 12 seconds, the model reaches the demo’s inflation limit—the calculated radius is 60 cm, and the balloon pops."
    : `At ${formatValue(time, 1)} seconds, the composite returns the balloon’s volume directly from time.`;
}

balloonTime.addEventListener("input", renderBalloon);
renderBalloon();

document.querySelector("#blueprint-reveal").addEventListener("click", (event) => {
  const answer = document.querySelector("#blueprint-answer");
  const willOpen = answer.hidden;
  answer.hidden = !willOpen;
  event.currentTarget.setAttribute("aria-expanded", String(willOpen));
  event.currentTarget.textContent = willOpen ? "Hide construction" : "Reveal one construction";
});

document.querySelector("#check-domain-button").addEventListener("click", () => {
  const correct = document.querySelector("#check-domain").value === "correct";
  setMathFeedback(
    document.querySelector("#feedback-domain"),
    correct,
    correct
      ? `Correct. ${mathMarkup(String.raw`x=3`)} is allowed by the radical, but ${mathMarkup(String.raw`x=5`)} makes the denominator zero.`
      : `Require ${mathMarkup(String.raw`x-3\ge 0`)}, then remove the value that makes ${mathMarkup(String.raw`x-5`)} equal zero.`,
  );
});

document.querySelector("#check-composite-button").addEventListener("click", () => {
  const correct = nearlyEqual(Number(document.querySelector("#check-composite").value), 19);
  setMathFeedback(
    document.querySelector("#feedback-composite"),
    correct,
    correct
      ? `Correct. ${mathMarkup(String.raw`g(3)=9`)} first, and ${mathMarkup(String.raw`f(9)=2(9)+1=19`)}.`
      : `Start with the inner function: find ${mathMarkup(String.raw`g(3)`)}, then use that result as ${mathMarkup(String.raw`f`)}’s input.`,
  );
});

document.querySelector("#check-decompose-button").addEventListener("click", () => {
  const correct = document.querySelector("#check-decompose").value === "correct";
  setMathFeedback(
    document.querySelector("#feedback-decompose"),
    correct,
    correct
      ? `Correct. Build ${mathMarkup(String.raw`x^3+4x`)} first, then take the square root of that entire output.`
      : "Ask which operation happens last. The square root is the outer function.",
  );
});

document.querySelector("#check-order-button").addEventListener("click", () => {
  const correct = document.querySelector("#check-order").value === "correct";
  setMathFeedback(
    document.querySelector("#feedback-order"),
    correct,
    correct
      ? `Correct. ${mathMarkup(String.raw`0.90(800)-100=\$620`)}, which is $10 less than ${mathMarkup(String.raw`0.90(800-100)=\$630`)}.`
      : `Compare ${mathMarkup(String.raw`0.90(800-100)`)} with ${mathMarkup(String.raw`0.90(800)-100`)}. The order changes whether the rebate is discounted too.`,
  );
});

initLessonChrome();
