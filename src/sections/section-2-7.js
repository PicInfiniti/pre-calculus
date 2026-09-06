import "../assets/sass/lesson.sass";
import {
  initLessonChrome,
  nearlyEqual,
  renderLessonFooter,
  renderLessonHeader,
  setFeedback,
} from "./shared";

const root = document.querySelector("#app");

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
        <div class="hero-machine hero-machine--f"><span>outer</span><strong>f</strong><small>receives g(x)</small></div>
        <div class="hero-machine__path hero-machine__path--one"><i>x</i></div>
        <div class="hero-machine__path hero-machine__path--two"><i>g(x)</i></div>
        <div class="hero-machine__path hero-machine__path--three"><i>f(g(x))</i></div>
        <div class="hero-operation-card">(f + g)(x)</div>
        <div class="hero-composition-card">f ∘ g <span>right to left</span></div>
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
          <article><span>Side by side</span><strong>D<sub>f ± g</sub> = D<sub>f</sub> ∩ D<sub>g</sub></strong></article>
          <article><span>Quotient</span><strong>D<sub>f/g</sub> = D<sub>f</sub> ∩ D<sub>g</sub>, g(x) ≠ 0</strong></article>
          <article><span>Composition</span><strong>x ∈ D<sub>g</sub> and g(x) ∈ D<sub>f</sub></strong></article>
        </div>
      </div>

      <div class="domain-gate-lab" data-reveal>
        <div class="domain-gate-lab__stage">
          <div class="domain-function-pair" aria-label="Functions used in the domain explorer">
            <span><i>f</i><b>f(x) = √(x + 2)<small>Domain [−2, ∞)</small></b></span>
            <span><i>g</i><b>g(x) = √(1 − x)<small>Domain (−∞, 1]</small></b></span>
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
            <button class="is-active" type="button" data-domain-operation="sum" role="tab" aria-selected="true">f + g</button>
            <button type="button" data-domain-operation="quotient" role="tab" aria-selected="false">f / g</button>
            <button type="button" data-domain-operation="composition" role="tab" aria-selected="false">g ∘ f</button>
          </div>
          <div class="domain-live-formula" id="domain-formula">(f + g)(x) = √(x + 2) + √(1 − x)</div>
          <dl class="domain-summary">
            <div><dt>Domain</dt><dd id="domain-answer">[−2, 1]</dd></div>
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
        <p>In (f ∘ g)(x) = f(g(x)), g acts first. Its output becomes the input of f. Reversing the order can produce a different function and a different answer.</p>
      </div>

      <div class="order-lab" data-reveal>
        <div class="order-lab__controls">
          <p class="tool-label">Two price-changing functions</p>
          <div class="order-function-definitions">
            <article><span>f</span><div><strong>10% discount</strong><small>f(x) = 0.90x</small></div></article>
            <article><span>g</span><div><strong>$100 rebate</strong><small>g(x) = x − 100</small></div></article>
          </div>
          <label for="order-price">Sticker price <output id="order-price-output">$800</output></label>
          <input id="order-price" type="range" min="200" max="2000" step="25" value="800" />
          <div class="order-choice" role="tablist" aria-label="Composition order">
            <button class="is-active" type="button" data-order="fg" role="tab" aria-selected="true"><span>f ∘ g</span>rebate, then discount</button>
            <button type="button" data-order="gf" role="tab" aria-selected="false"><span>g ∘ f</span>discount, then rebate</button>
          </div>
        </div>
        <div class="order-machine" aria-live="polite">
          <div class="order-machine__formula" id="order-formula">(f ∘ g)(x) = 0.90(x − 100)</div>
          <div class="order-machine__track">
            <article><span>input</span><strong id="order-step-input">$800</strong></article>
            <i>→</i>
            <article class="order-machine__inner"><span id="order-inner-label">g acts first</span><strong id="order-step-middle">$700</strong></article>
            <i>→</i>
            <article class="order-machine__outer"><span id="order-outer-label">f acts second</span><strong id="order-step-final">$630</strong></article>
          </div>
          <div class="order-comparison">
            <div><span>f ∘ g</span><b id="order-fg-total">$630</b><i id="order-fg-bar"></i></div>
            <div><span>g ∘ f</span><b id="order-gf-total">$620</b><i id="order-gf-bar"></i></div>
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
          <button class="is-active" type="button" data-peel="power" role="tab" aria-selected="true"><span>A</span><b>(5 − ∛x)<sup>7</sup></b></button>
          <button type="button" data-peel="rational" role="tab" aria-selected="false"><span>B</span><b>t²/(t² + 4)</b></button>
          <button type="button" data-peel="radical" role="tab" aria-selected="false"><span>C</span><b>√(s³ + 4s)</b></button>
          <button type="button" data-peel="triple" role="tab" aria-selected="false"><span>D</span><b>3 − ⁴√(5x)</b></button>
        </div>
        <div class="peel-lab__workspace">
          <div class="peel-expression">
            <span>Target expression</span>
            <strong id="peel-target">F(x) = (5 − ∛x)⁷</strong>
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
        <p><strong>f ∘ g ∘ h</strong> means “h first, then g, then f.” Evaluation always begins beside the input.</p>
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
                <stop offset="0" stop-color="#ffd8ce" />
                <stop offset=".42" stop-color="#ff8a6c" />
                <stop offset="1" stop-color="#ff6b48" />
              </radialGradient>
            </defs>
            <circle id="balloon-circle" cx="310" cy="245" r="90" fill="url(#balloon-fill)" />
            <ellipse id="balloon-highlight" cx="280" cy="205" rx="18" ry="34" fill="rgba(255,255,255,.5)" />
            <path id="balloon-knot" d="M298 335L322 335L310 355Z" class="balloon-knot" />
            <path id="balloon-string" d="M310 354C292 395 335 421 310 490" class="balloon-string" />
            <line id="balloon-radius-line" x1="310" y1="245" x2="400" y2="245" class="balloon-radius-line" />
            <text id="balloon-radius-label" x="350" y="232" class="balloon-radius-label">r = 30 cm</text>
          </svg>
          <div class="balloon-stage__pulse" aria-hidden="true"></div>
        </div>
        <div class="balloon-controls">
          <p class="tool-label">Inflation model</p>
          <h3>A spherical balloon’s radius grows at 5 cm/s.</h3>
          <label for="balloon-time">Time t <output id="balloon-time-output">6 s</output></label>
          <input id="balloon-time" type="range" min="0" max="12" step="0.5" value="6" />
          <div class="model-pipeline">
            <article><span>time → radius</span><strong>r = f(t) = 5t</strong><small id="balloon-radius-readout">r = 30 cm</small></article>
            <i>→</i>
            <article><span>radius → volume</span><strong>V = g(r) = 4πr³/3</strong><small id="balloon-volume-readout">V = 36,000π cm³</small></article>
          </div>
          <div class="model-composite">
            <span>Direct time-to-volume model</span>
            <strong>(g ∘ f)(t) = 4π(5t)³/3 = 500πt³/3</strong>
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
          <span>Inner</span><strong>g(x) = x²</strong>
          <i>→</i>
          <span>Outer</span><strong>f(u) = √((4 − u)/u)</strong>
          <p>The outer domain is (0, 4]. Requiring x² ∈ (0, 4] gives 0 &lt; x² ≤ 4, so −2 ≤ x &lt; 0 or 0 &lt; x ≤ 2.</p>
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
          <h3>Find the domain of √(x − 3)/(x − 5).</h3>
          <label>Domain <select id="check-domain"><option value="">Choose…</option><option value="a">[3, ∞)</option><option value="correct">[3, 5) ∪ (5, ∞)</option><option value="b">(3, 5) ∪ (5, ∞)</option></select></label>
          <button id="check-domain-button" type="button">Check domain</button>
          <p class="answer-feedback" id="feedback-domain" aria-live="polite"></p>
        </article>
        <article class="combination-check" data-reveal>
          <span>Evaluate a composite</span>
          <h3>If f(x) = 2x + 1 and g(x) = x², find (f ∘ g)(3).</h3>
          <label>Value <input id="check-composite" type="number" inputmode="decimal" /></label>
          <button id="check-composite-button" type="button">Check value</button>
          <p class="answer-feedback" id="feedback-composite" aria-live="polite"></p>
        </article>
        <article class="combination-check" data-reveal>
          <span>Decompose</span>
          <h3>Write √(x³ + 4x) as f ∘ g.</h3>
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
    next: null,
  })}
`;

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

const domainCases = {
  sum: {
    formula: "(f + g)(x) = √(x + 2) + √(1 − x)",
    domain: "[−2, 1]",
    reason: "Both radicals must be real.",
    interval: [-2, 1],
    closed: [true, true],
    gates(x) {
      const first = x >= -2;
      const second = x <= 1;
      return [
        { pass: first, title: first ? "f(x) is real" : "f(x) is not real", detail: `x + 2 ${first ? "≥" : "<"} 0` },
        { pass: second, title: second ? "g(x) is real" : "g(x) is not real", detail: `1 − x ${second ? "≥" : "<"} 0` },
        { pass: first && second, title: first && second ? "Input accepted" : "Input blocked", detail: first && second ? `Value ≈ ${formatValue(Math.sqrt(x + 2) + Math.sqrt(1 - x))}` : "Both gates must pass" },
      ];
    },
  },
  quotient: {
    formula: "(f / g)(x) = √(x + 2) / √(1 − x)",
    domain: "[−2, 1)",
    reason: "Both radicals must be real, and g(x) cannot equal zero.",
    interval: [-2, 1],
    closed: [true, false],
    gates(x) {
      const radicals = x >= -2 && x <= 1;
      const denominator = x < 1;
      return [
        { pass: radicals, title: radicals ? "Radicals are real" : "A radical fails", detail: "−2 ≤ x ≤ 1" },
        { pass: denominator, title: denominator ? "Denominator is nonzero" : "Division by zero", detail: `g(x) ${denominator ? "≠" : "="} 0` },
        { pass: radicals && denominator, title: radicals && denominator ? "Input accepted" : "Input blocked", detail: radicals && denominator ? `Value ≈ ${formatValue(Math.sqrt(x + 2) / Math.sqrt(1 - x))}` : "Every restriction must pass" },
      ];
    },
  },
  composition: {
    formula: "(g ∘ f)(x) = √(1 − √(x + 2))",
    domain: "[−2, −1]",
    reason: "The inner radical must be real and its output cannot exceed 1.",
    interval: [-2, -1],
    closed: [true, true],
    gates(x) {
      const inner = x >= -2;
      const innerValue = inner ? Math.sqrt(x + 2) : NaN;
      const outer = inner && innerValue <= 1;
      return [
        { pass: inner, title: inner ? "Inner f works" : "Inner f is blocked", detail: inner ? `f(x) ≈ ${formatValue(innerValue)}` : "x + 2 < 0" },
        { pass: outer, title: outer ? "Output fits g" : "Output does not fit g", detail: inner ? `f(x) ${outer ? "≤" : ">"} 1` : "No inner output to test" },
        { pass: inner && outer, title: inner && outer ? "Input accepted" : "Input blocked", detail: inner && outer ? `Value ≈ ${formatValue(Math.sqrt(1 - innerValue))}` : "The output handoff fails" },
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
  document.querySelector("#domain-formula").textContent = selected.formula;
  document.querySelector("#domain-answer").textContent = selected.domain;
  document.querySelector("#domain-reason").textContent = selected.reason;
  document.querySelector("#domain-x-output").textContent = formatValue(x, 1);
  ["one", "two", "three"].forEach((name, index) => {
    const element = document.querySelector(`#domain-gate-${name}`);
    element.classList.toggle("is-pass", gates[index].pass);
    element.classList.toggle("is-blocked", !gates[index].pass);
    element.querySelector("strong").textContent = gates[index].title;
    element.querySelector("small").textContent = gates[index].detail;
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
  document.querySelector("#order-formula").textContent = fg ? "(f ∘ g)(x) = 0.90(x − 100)" : "(g ∘ f)(x) = 0.90x − 100";
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
    target: "F(x) = (5 − ∛x)⁷",
    prompt: "The seventh power happens last, so keep the entire “5 minus” expression in the outer function.",
    layers: [
      { label: "input", formula: "x" },
      { label: "inner g", formula: "g(x) = ∛x" },
      { label: "outer f", formula: "f(u) = (5 − u)⁷" },
    ],
    result: "F = f ∘ g, because f(g(x)) = (5 − ∛x)⁷.",
  },
  rational: {
    target: "G(t) = t²/(t² + 4)",
    prompt: "The same t² appears twice. Treat that repeated expression as one inner output.",
    layers: [
      { label: "input", formula: "t" },
      { label: "inner g", formula: "g(t) = t²" },
      { label: "outer f", formula: "f(u) = u/(u + 4)" },
    ],
    result: "G = f ∘ g, because f(g(t)) = t²/(t² + 4).",
  },
  radical: {
    target: "H(s) = √(s³ + 4s)",
    prompt: "The square root happens last. Everything beneath it belongs to the inner function.",
    layers: [
      { label: "input", formula: "s" },
      { label: "inner g", formula: "g(s) = s³ + 4s" },
      { label: "outer f", formula: "f(u) = √u" },
    ],
    result: "H = f ∘ g, because f(g(s)) = √(s³ + 4s).",
  },
  triple: {
    target: "G(x) = 3 − ⁴√(5x)",
    prompt: "Follow the construction: multiply by 5, take a fourth root, then subtract from 3.",
    layers: [
      { label: "input", formula: "x" },
      { label: "inner h", formula: "h(x) = 5x" },
      { label: "middle g", formula: "g(u) = ⁴√u" },
      { label: "outer f", formula: "f(v) = 3 − v" },
    ],
    result: "G = f ∘ g ∘ h. Reading right to left reproduces all three operations.",
  },
};

let activePeel = "power";
let revealedLayers = 1;

function renderPeelLab() {
  const selected = peelCases[activePeel];
  document.querySelector("#peel-target").textContent = selected.target;
  document.querySelector("#peel-prompt").textContent = selected.prompt;
  document.querySelector("#peel-pipeline").innerHTML = selected.layers
    .map((layer, index) => `
      ${index ? `<i class="peel-arrow ${index < revealedLayers ? "is-visible" : ""}" aria-hidden="true">→</i>` : ""}
      <article class="peel-layer ${index < revealedLayers ? "is-visible" : ""}">
        <span>${index < revealedLayers ? layer.label : "hidden layer"}</span>
        <strong>${index < revealedLayers ? layer.formula : "?"}</strong>
      </article>
    `)
    .join("");
  const complete = revealedLayers >= selected.layers.length;
  const nextButton = document.querySelector("#peel-next");
  nextButton.disabled = complete;
  nextButton.textContent = complete ? "All layers revealed" : "Peel the next layer";
  document.querySelector("#peel-equivalence").textContent = complete ? selected.result : "";
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
  document.querySelector("#balloon-radius-readout").textContent = `r = ${formatValue(radius, 1)} cm`;
  document.querySelector("#balloon-volume-readout").textContent = `V = ${formatPlainNumber(volumeCoefficient)}π cm³`;
  document.querySelector("#balloon-meaning").textContent = `At ${formatValue(time, 1)} seconds, the composite returns the balloon’s volume directly from time.`;
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
  setFeedback(document.querySelector("#feedback-domain"), correct, correct ? "Correct. x = 3 is allowed by the radical, but x = 5 makes the denominator zero." : "Require x − 3 ≥ 0, then remove the value that makes x − 5 equal zero.");
});

document.querySelector("#check-composite-button").addEventListener("click", () => {
  const correct = nearlyEqual(Number(document.querySelector("#check-composite").value), 19);
  setFeedback(document.querySelector("#feedback-composite"), correct, correct ? "Correct. g(3) = 9 first, and f(9) = 2(9) + 1 = 19." : "Start with the inner function: find g(3), then use that result as f’s input.");
});

document.querySelector("#check-decompose-button").addEventListener("click", () => {
  const correct = document.querySelector("#check-decompose").value === "correct";
  setFeedback(document.querySelector("#feedback-decompose"), correct, correct ? "Correct. Build x³ + 4x first, then take the square root of that entire output." : "Ask which operation happens last. The square root is the outer function.");
});

document.querySelector("#check-order-button").addEventListener("click", () => {
  const correct = document.querySelector("#check-order").value === "correct";
  setFeedback(document.querySelector("#feedback-order"), correct, correct ? "Correct. 0.90(800) − 100 = $620, which is $10 less than 0.90(800 − 100) = $630." : "Compare 0.90(800 − 100) with 0.90(800) − 100. The order changes whether the rebate is discounted too.");
});

initLessonChrome();
