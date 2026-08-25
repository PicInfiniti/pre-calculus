import "../assets/sass/lesson.sass";
import {
  formatNumber,
  initLessonChrome,
  nearlyEqual,
  renderLessonFooter,
  renderLessonHeader,
  setFeedback,
} from "./shared";

const root = document.querySelector("#app");

root.innerHTML = `
  ${renderLessonHeader("2.1")}
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
        <span class="function-hero-art__input">x</span>
        <div class="function-hero-art__machine">
          <span>FUNCTION</span>
          <strong>f</strong>
          <p>choose · calculate · return</p>
        </div>
        <span class="function-hero-art__output">f(x)</span>
        <div class="function-hero-art__rule function-hero-art__rule--one">x &lt; 0</div>
        <div class="function-hero-art__rule function-hero-art__rule--two">0 ≤ x ≤ 2</div>
        <div class="function-hero-art__rule function-hero-art__rule--three">x &gt; 2</div>
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
          <h3>Let f(x) = 3x − 1</h3>
          <label for="notation-x">Choose x <output id="notation-x-output">2</output></label>
          <input id="notation-x" type="range" min="-4" max="4" step="0.5" value="2" />
          <div class="function-pipeline" aria-live="polite">
            <span id="pipeline-input">2</span><i>× 3</i><i>− 1</i><strong id="pipeline-output">5</strong>
          </div>
          <p class="notation-readout" id="notation-readout">f(2) = 3(2) − 1 = 5</p>
        </div>
        <div class="notation-lab__compare">
          <article>
            <span>Change the input</span>
            <h3>f(2x) = 6x − 1</h3>
            <p>Replace every x in the rule with 2x.</p>
            <strong id="inside-value">At x = 2: f(4) = 11</strong>
          </article>
          <article>
            <span>Scale the output</span>
            <h3>2f(x) = 6x − 2</h3>
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
          <h3>f(x) =</h3>
          <article data-piecewise-branch="negative"><strong>3x</strong><span>if x &lt; 0</span></article>
          <article data-piecewise-branch="middle"><strong>x + 1</strong><span>if 0 ≤ x ≤ 2</span></article>
          <article data-piecewise-branch="positive"><strong>(x − 2)²</strong><span>if x &gt; 2</span></article>
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
            <strong id="piecewise-result">f(2) = 2 + 1 = 3</strong>
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
            <span>15(40 − x) <i>if 0 &lt; x &lt; 40</i></span>
            <span>0 <i>if 40 ≤ x ≤ 65</i></span>
            <span>15(x − 65) <i>if x &gt; 65</i></span>
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
          <div class="fine-result" aria-live="polite"><span id="fine-rule">Below the minimum</span><strong id="fine-output">F(30) = $150</strong><p id="fine-meaning">The driver is 10 mi/h below the minimum.</p></div>
        </article>

        <article class="net-change-lab" data-reveal>
          <p class="tool-label">Net-change explorer</p>
          <h3>Final output minus initial output.</h3>
          <p class="function-definition">R(x) = (13 + 7x⁰·⁴)/(1 + 4x⁰·⁴)</p>
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
          <p class="tool-label">For f(x) = 3x² − 4x</p>
          <h3>[f(a + h) − f(a)] / h</h3>
          <ol>
            <li><span>1</span><p>f(a) = 3a² − 4a</p></li>
            <li><span>2</span><p>f(a + h) = 3(a + h)² − 4(a + h)</p></li>
            <li><span>3</span><p>Subtract: 6ah + 3h² − 4h</p></li>
            <li><span>4</span><p>Factor h and divide: <strong>6a + 3h − 4</strong>, h ≠ 0</p></li>
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
            <h3 id="domain-function">g(x) = √(7 − 3x)</h3>
            <p id="domain-restriction">Require 7 − 3x ≥ 0, so x ≤ 7/3.</p>
            <strong id="domain-interval">Domain: (−∞, 7/3]</strong>
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
          <label>f(−π) = <input id="check-piecewise-pi" type="number" step="0.01" />π</label>
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
          <h3>For f(x) = 3x² − 4x</h3>
          <label for="check-quotient">[f(a+h) − f(a)]/h =</label>
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
          <label>√(7 − 3x)
            <select id="check-domain-one"><option value="">Choose…</option><option value="correct">(−∞, 7/3]</option><option value="wrong-a">[7/3, ∞)</option><option value="wrong-b">(−∞, 7/3)</option></select>
          </label>
          <label>x/(2x²+x−1)
            <select id="check-domain-two"><option value="">Choose…</option><option value="wrong-a">(−1, 1/2)</option><option value="correct">All reals except −1 and 1/2</option><option value="wrong-b">All real numbers</option></select>
          </label>
          <label>x/⁴√(9−x²)
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
  ${renderLessonFooter({
    previous: { href: "pages/sections/1-9.html", label: "Section 1.9 · Coordinate plane" },
    next: null,
  })}
`;

const linearFunction = (x) => 3 * x - 1;

function signedNumber(value) {
  const result = formatNumber(value);
  return result.startsWith("-") ? `−${result.slice(1)}` : result;
}

const notationInput = document.querySelector("#notation-x");
function renderNotationLab() {
  const x = Number(notationInput.value);
  const output = linearFunction(x);
  document.querySelector("#notation-x-output").textContent = signedNumber(x);
  document.querySelector("#pipeline-input").textContent = signedNumber(x);
  document.querySelector("#pipeline-output").textContent = signedNumber(output);
  document.querySelector("#notation-readout").textContent = `f(${signedNumber(x)}) = 3(${signedNumber(x)}) − 1 = ${signedNumber(output)}`;
  document.querySelector("#inside-value").textContent = `At x = ${signedNumber(x)}: f(${signedNumber(2 * x)}) = ${signedNumber(linearFunction(2 * x))}`;
  document.querySelector("#outside-value").textContent = `At x = ${signedNumber(x)}: 2f(${signedNumber(x)}) = ${signedNumber(2 * output)}`;
}
notationInput.addEventListener("input", renderNotationLab);
renderNotationLab();

const piecewiseInput = document.querySelector("#piecewise-x");
let piecewiseSymbolicPi = false;

function renderPiecewiseLab() {
  const x = piecewiseSymbolicPi ? -Math.PI : Number(piecewiseInput.value);
  const branch = x < 0 ? "negative" : x <= 2 ? "middle" : "positive";
  const value = branch === "negative" ? 3 * x : branch === "middle" ? x + 1 : (x - 2) ** 2;
  const xLabel = piecewiseSymbolicPi ? "−π" : signedNumber(x);
  const condition = branch === "negative" ? "x < 0" : branch === "middle" ? "0 ≤ x ≤ 2" : "x > 2";

  document.querySelectorAll("[data-piecewise-branch]").forEach((card) => card.classList.toggle("is-active", card.dataset.piecewiseBranch === branch));
  document.querySelector("#piecewise-x-output").textContent = xLabel;
  document.querySelector("#piecewise-marker").style.left = `${((x + 4) / 9) * 100}%`;
  document.querySelector("#piecewise-decision").textContent = `${xLabel} belongs to ${condition}`;

  if (piecewiseSymbolicPi) {
    document.querySelector("#piecewise-result").textContent = "f(−π) = 3(−π) = −3π";
    document.querySelector("#piecewise-explanation").textContent = `Exactly −3π; approximately ${signedNumber(value)}.`;
  } else if (branch === "negative") {
    document.querySelector("#piecewise-result").textContent = `f(${xLabel}) = 3(${xLabel}) = ${signedNumber(value)}`;
    document.querySelector("#piecewise-explanation").textContent = "Negative inputs use the first rule.";
  } else if (branch === "middle") {
    document.querySelector("#piecewise-result").textContent = `f(${xLabel}) = ${xLabel} + 1 = ${signedNumber(value)}`;
    document.querySelector("#piecewise-explanation").textContent = x === 2 ? "The endpoint 2 is included because the condition uses ≤." : "This input lies in the closed middle interval.";
  } else {
    document.querySelector("#piecewise-result").textContent = `f(${xLabel}) = (${xLabel} − 2)² = ${signedNumber(value)}`;
    document.querySelector("#piecewise-explanation").textContent = "Inputs above 2 use the squared rule.";
  }
}

piecewiseInput.addEventListener("input", () => {
  piecewiseSymbolicPi = false;
  renderPiecewiseLab();
});
document.querySelectorAll("[data-piecewise-preset]").forEach((button) => {
  button.addEventListener("click", () => {
    piecewiseSymbolicPi = button.dataset.piecewisePreset === "pi";
    piecewiseInput.value = piecewiseSymbolicPi ? String(-Math.PI) : button.dataset.piecewisePreset;
    renderPiecewiseLab();
  });
});
renderPiecewiseLab();

const speedInput = document.querySelector("#speed-x");
function renderFineLab() {
  const speed = Number(speedInput.value);
  let fine = 0;
  let label = "Within the legal range";
  let meaning = "No fine: the speed is between 40 and 65 mi/h.";
  if (speed < 40) {
    fine = 15 * (40 - speed);
    label = "Below the minimum";
    meaning = `The driver is ${40 - speed} mi/h below the minimum.`;
  } else if (speed > 65) {
    fine = 15 * (speed - 65);
    label = "Above the maximum";
    meaning = `The driver is ${speed - 65} mi/h above the maximum.`;
  }
  document.querySelector("#speed-output").textContent = `${speed} mi/h`;
  document.querySelector("#speed-car").style.left = `${speed}%`;
  document.querySelector("#fine-rule").textContent = label;
  document.querySelector("#fine-output").textContent = `F(${speed}) = $${fine}`;
  document.querySelector("#fine-meaning").textContent = meaning;
}
speedInput.addEventListener("input", renderFineLab);
document.querySelectorAll("[data-speed-preset]").forEach((button) => button.addEventListener("click", () => {
  speedInput.value = button.dataset.speedPreset;
  renderFineLab();
}));
renderFineLab();

const pupilRadius = (x) => (13 + 7 * x ** 0.4) / (1 + 4 * x ** 0.4);
const netA = document.querySelector("#net-a");
const netB = document.querySelector("#net-b");
const netChart = document.querySelector("#net-change-chart");

function renderNetChange() {
  let a = Number(netA.value);
  let b = Number(netB.value);
  if (a > b) {
    b = a;
    netB.value = String(b);
  }
  const start = pupilRadius(a);
  const end = pupilRadius(b);
  const change = end - start;
  const mapX = (x) => 45 + ((x - 1) / 149) * 560;
  const mapY = (y) => 260 - ((y - 2) / 2.1) * 210;
  const points = [];
  for (let x = 1; x <= 150; x += 2) points.push(`${mapX(x)},${mapY(pupilRadius(x))}`);
  netChart.innerHTML = `
    <path d="M45 30V260H610" class="function-chart-axis" />
    <path d="M${points.join(" L")}" class="net-change-curve" />
    <line x1="${mapX(a)}" y1="${mapY(start)}" x2="${mapX(b)}" y2="${mapY(end)}" class="net-change-line" />
    <circle cx="${mapX(a)}" cy="${mapY(start)}" r="8" class="function-chart-point function-chart-point--start" />
    <circle cx="${mapX(b)}" cy="${mapY(end)}" r="8" class="function-chart-point function-chart-point--end" />
    <text x="${mapX(a) + 10}" y="${mapY(start) - 12}">R(${a})</text>
    <text x="${mapX(b) - 12}" y="${mapY(end) + 26}" text-anchor="end">R(${b})</text>
    <text x="46" y="286">brightness x</text>
    <text x="16" y="40">R</text>
  `;
  document.querySelector("#net-a-output").textContent = a;
  document.querySelector("#net-b-output").textContent = b;
  document.querySelector("#net-values").textContent = `R(${b}) − R(${a})`;
  const formattedChange = change < 0 ? `−${Math.abs(change).toFixed(3)}` : change.toFixed(3);
  document.querySelector("#net-result").textContent = `${end.toFixed(3)} − ${start.toFixed(3)} = ${formattedChange} mm`;
  document.querySelector("#net-meaning").textContent = change < 0
    ? `The pupil radius decreases by about ${Math.abs(change).toFixed(3)} mm.`
    : `The pupil radius increases by about ${change.toFixed(3)} mm.`;
}
netA.addEventListener("input", renderNetChange);
netB.addEventListener("input", () => {
  if (Number(netB.value) < Number(netA.value)) netA.value = netB.value;
  renderNetChange();
});
renderNetChange();

const secantA = document.querySelector("#secant-a");
const secantH = document.querySelector("#secant-h");
const secantChart = document.querySelector("#secant-chart");
const quadratic = (x) => 3 * x ** 2 - 4 * x;

function renderSecantLab() {
  const a = Number(secantA.value);
  const h = Number(secantH.value);
  const b = a + h;
  const slope = (quadratic(b) - quadratic(a)) / h;
  const mapX = (x) => 45 + ((x + 3) / 8) * 535;
  const mapY = (y) => 320 - ((y + 5) / 65) * 280;
  const curve = [];
  for (let x = -3; x <= 5; x += 0.08) curve.push(`${mapX(x)},${mapY(quadratic(x))}`);
  secantChart.innerHTML = `
    <path d="M45 40V320H585" class="function-chart-axis" />
    <path d="M${curve.join(" L")}" class="secant-curve" />
    <line x1="${mapX(a)}" y1="${mapY(quadratic(a))}" x2="${mapX(b)}" y2="${mapY(quadratic(b))}" class="secant-line" />
    <circle cx="${mapX(a)}" cy="${mapY(quadratic(a))}" r="8" class="function-chart-point function-chart-point--start" />
    <circle cx="${mapX(b)}" cy="${mapY(quadratic(b))}" r="8" class="function-chart-point function-chart-point--end" />
    <text x="${mapX(a) + 10}" y="${mapY(quadratic(a)) - 12}">a</text>
    <text x="${mapX(b) + 10}" y="${mapY(quadratic(b)) - 12}">a+h</text>
  `;
  document.querySelector("#secant-a-output").textContent = signedNumber(a);
  document.querySelector("#secant-h-output").textContent = formatNumber(h);
  document.querySelector("#secant-points").textContent = `Compare f(${signedNumber(a)}) and f(${signedNumber(b)})`;
  document.querySelector("#secant-slope").textContent = `Difference quotient = ${signedNumber(slope)}`;
  document.querySelector("#secant-formula").textContent = `6(${signedNumber(a)}) + 3(${formatNumber(h)}) − 4 = ${signedNumber(slope)}`;
}
secantA.addEventListener("input", renderSecantLab);
secantH.addEventListener("input", renderSecantLab);
renderSecantLab();

const domainCases = {
  radical: {
    type: "Even root",
    formula: "g(x) = √(7 − 3x)",
    restriction: "Require 7 − 3x ≥ 0, so x ≤ 7/3.",
    interval: "Domain: (−∞, 7/3]",
    segments: [{ start: 0, width: 73.33 }],
    markers: [{ position: 73.33, label: "7/3", closed: true }],
  },
  rational: {
    type: "Denominator",
    formula: "g(x) = x/(2x² + x − 1)",
    restriction: "Factor (2x − 1)(x + 1). Exclude x = 1/2 and x = −1.",
    interval: "Domain: (−∞, −1) ∪ (−1, 1/2) ∪ (1/2, ∞)",
    segments: [{ start: 0, width: 40 }, { start: 40, width: 15 }, { start: 55, width: 45 }],
    markers: [{ position: 40, label: "−1", closed: false }, { position: 55, label: "1/2", closed: false }],
  },
  "root-denominator": {
    type: "Fourth root in a denominator",
    formula: "f(x) = x/⁴√(9 − x²)",
    restriction: "Require 9 − x² > 0. The strict inequality keeps the denominator nonzero.",
    interval: "Domain: (−3, 3)",
    segments: [{ start: 20, width: 60 }],
    markers: [{ position: 20, label: "−3", closed: false }, { position: 80, label: "3", closed: false }],
  },
};

function renderDomainCase(name) {
  const selected = domainCases[name];
  document.querySelectorAll("[data-domain-case]").forEach((button) => button.classList.toggle("is-active", button.dataset.domainCase === name));
  document.querySelector("#domain-type").textContent = selected.type;
  document.querySelector("#domain-function").textContent = selected.formula;
  document.querySelector("#domain-restriction").textContent = selected.restriction;
  document.querySelector("#domain-interval").textContent = selected.interval;
  document.querySelector("#domain-visual").innerHTML = `
    <div class="domain-axis"></div>
    ${selected.segments.map((segment) => `<i class="domain-segment" style="left:${segment.start}%;width:${segment.width}%"></i>`).join("")}
    ${selected.markers.map((marker) => `<span class="domain-marker ${marker.closed ? "is-closed" : ""}" style="left:${marker.position}%"><i></i><strong>${marker.label}</strong></span>`).join("")}
    <span class="domain-infinity domain-infinity--left">−∞</span><span class="domain-infinity domain-infinity--right">∞</span>
  `;
}
document.querySelectorAll("[data-domain-case]").forEach((button) => button.addEventListener("click", () => renderDomainCase(button.dataset.domainCase)));
renderDomainCase("radical");

document.querySelector("#check-piecewise").addEventListener("click", () => {
  const two = Number(document.querySelector("#check-piecewise-two").value);
  const three = Number(document.querySelector("#check-piecewise-three").value);
  const piCoefficient = Number(document.querySelector("#check-piecewise-pi").value);
  const correct = nearlyEqual(two, 3) && nearlyEqual(three, 2.25) && nearlyEqual(piCoefficient, -3);
  setFeedback(document.querySelector("#feedback-piecewise"), correct, correct ? "Correct. The conditions select the middle, upper, and lower rules respectively." : "Check the condition first: 2 uses x+1, 3.5 uses (x−2)², and −π uses 3x.");
});

document.querySelector("#check-models").addEventListener("click", () => {
  const thirty = Number(document.querySelector("#check-fine-thirty").value);
  const eightyFive = Number(document.querySelector("#check-fine-eightyfive").value);
  const change = Number(document.querySelector("#check-net-change").value);
  const correct = nearlyEqual(thirty, 150) && nearlyEqual(eightyFive, 300) && nearlyEqual(change, -0.59, 0.001);
  setFeedback(document.querySelector("#feedback-models"), correct, correct ? "Correct. The fines are $150 and $300, and the pupil radius changes by approximately −0.590 mm." : "For fines, count miles outside the legal interval and multiply by 15. Net change is R(100) − R(10), including its sign.");
});

document.querySelector("#check-quotient-button").addEventListener("click", () => {
  const correct = document.querySelector("#check-quotient").value === "correct";
  setFeedback(document.querySelector("#feedback-quotient"), correct, correct ? "Correct. Every numerator term contains h, so dividing gives 6a + 3h − 4." : "Expand f(a+h), subtract all of f(a), then factor h from the entire numerator.");
});

document.querySelector("#check-domains").addEventListener("click", () => {
  const correct = ["#check-domain-one", "#check-domain-two", "#check-domain-three"].every((selector) => document.querySelector(selector).value === "correct");
  setFeedback(document.querySelector("#feedback-domains"), correct, correct ? "Correct. You distinguished ≥ 0, ≠ 0, and the stricter > 0 condition." : "Ask what can fail: an even root needs a nonnegative radicand; a denominator cannot be zero; combining both makes the radicand strictly positive.");
});

initLessonChrome();
