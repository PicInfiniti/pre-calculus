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
  ${renderLessonHeader("2.2")}
  <main>
    <section class="lesson-hero lesson-hero--graphs">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 2.2</span> Graphs of functions</p>
        <h1>Read the curve.<br><em>Recover the rule.</em></h1>
        <p class="lesson-hero__lede">
          A graph stores inputs, outputs, restrictions, and change in one picture.
          Learn the familiar shapes and then read every endpoint with intention.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#family-library">Open the graph library</a>
          <span>About 40 minutes · interactive</span>
        </div>
      </div>
      <div class="graph-language-art" aria-hidden="true" data-reveal>
        <div class="graph-language-art__grid"></div>
        <svg viewBox="0 0 560 460">
          <path class="graph-language-art__axis" d="M45 230H520M280 35V425" />
          <path class="graph-language-art__curve graph-language-art__curve--parabola" d="M120 75Q280 390 440 75" />
          <path class="graph-language-art__curve graph-language-art__curve--absolute" d="M95 120L280 330L470 110" />
          <path class="graph-language-art__scan" d="M385 55V405" />
          <circle cx="385" cy="137" r="8" />
        </svg>
        <span class="graph-language-art__label graph-language-art__label--domain">domain →</span>
        <span class="graph-language-art__label graph-language-art__label--range">↑ range</span>
        <span class="graph-language-art__label graph-language-art__label--test">vertical-line test</span>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Recognize common parent-function shapes</li>
        <li><span>02</span>Apply the vertical-line test</li>
        <li><span>03</span>Read formulas, domain, range, and net change</li>
        <li><span>04</span>Select a circle branch that is a function</li>
      </ol>
    </section>

    <section class="lesson-section" id="family-library">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>01</span> Build visual memory</p>
        <h2>Every family has<br>a recognizable silhouette.</h2>
        <p>Focus on direction, symmetry, endpoints, and breaks. Those features identify a graph faster than plotting a long table of points.</p>
      </div>

      <div class="family-library" data-reveal>
        <div class="family-library__tabs" role="tablist" aria-label="Parent function families">
          <button type="button" class="is-active" data-family="constant">Constant</button>
          <button type="button" data-family="identity">Identity</button>
          <button type="button" data-family="absolute">Absolute value</button>
          <button type="button" data-family="quadratic">Quadratic</button>
          <button type="button" data-family="cubic">Cubic</button>
          <button type="button" data-family="square-root">Square root</button>
          <button type="button" data-family="cube-root">Cube root</button>
          <button type="button" data-family="reciprocal">Reciprocal</button>
          <button type="button" data-family="reciprocal-square">Reciprocal squared</button>
        </div>
        <div class="family-library__stage">
          <svg id="family-chart" viewBox="0 0 620 420" role="img" aria-label="Graph of the selected parent function"></svg>
          <div class="family-library__copy" aria-live="polite">
            <p class="tool-label" id="family-name">Constant function</p>
            <h3 id="family-formula">f(x) = 2</h3>
            <dl>
              <div><dt>Domain</dt><dd id="family-domain">(−∞, ∞)</dd></div>
              <div><dt>Range</dt><dd id="family-range">{2}</dd></div>
            </dl>
            <p id="family-clue">A horizontal line: every input returns the same output.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="vertical-line-test">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Test the promise</p>
        <h2>One x cannot point<br>to two y-values.</h2>
        <p>Slide a vertical line across each curve. A single line with two intersections is enough to prove the relation is not a function of x.</p>
      </div>

      <div class="vertical-test-lab" data-reveal>
        <div class="vertical-test-lab__graph">
          <svg id="vertical-test-chart" viewBox="0 0 500 500" role="img" aria-label="A movable vertical line testing a selected curve"></svg>
        </div>
        <div class="vertical-test-lab__controls">
          <p class="tool-label">Vertical-line scanner</p>
          <div class="vertical-test-options">
            <button type="button" data-test-curve="line">Line</button>
            <button type="button" data-test-curve="parabola">Parabola</button>
            <button type="button" class="is-active" data-test-curve="circle">Circle</button>
            <button type="button" data-test-curve="sideways">Sideways parabola</button>
          </div>
          <label for="vertical-x">Move the line to x = <output id="vertical-x-output">1</output></label>
          <input id="vertical-x" type="range" min="-5" max="5" step="0.25" value="1" />
          <div class="vertical-test-result" aria-live="polite">
            <span id="vertical-count">2 intersections here · this line fails</span>
            <strong id="vertical-verdict">The circle is not a function of x</strong>
            <p id="vertical-reason">The circle fails because some vertical lines meet it twice.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="read-a-graph">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Read every endpoint</p>
        <h2>A graph is a formula<br>written spatially.</h2>
        <p>A filled point includes its coordinate; an open point excludes it. Read left to right for domain and bottom to top for range.</p>
      </div>

      <div class="graph-reader" data-reveal>
        <div class="graph-reader__stage">
          <svg id="reader-chart" viewBox="0 0 620 440" role="img" aria-label="Three-piece function with open and closed endpoints"></svg>
        </div>
        <div class="graph-reader__copy">
          <p class="tool-label">Branch inspector</p>
          <h3>Trace one piece at a time.</h3>
          <div class="reader-branches">
            <button type="button" class="is-active" data-reader-branch="one"><strong>−2</strong><span>−3 ≤ x ≤ −1</span></button>
            <button type="button" data-reader-branch="two"><strong>2x + 2</strong><span>−1 &lt; x ≤ 0</span></button>
            <button type="button" data-reader-branch="three"><strong>x/2 + 2</strong><span>0 &lt; x ≤ 2</span></button>
          </div>
          <div class="reader-facts">
            <article><span>Domain</span><strong>[−3, 2]</strong></article>
            <article><span>Range</span><strong>{−2} ∪ (0, 3]</strong></article>
          </div>
          <div class="reader-net-change">
            <span>Net change from x = 0 to x = 2</span>
            <strong>f(2) − f(0) = 3 − 2 = 1</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="circle-branches">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Select one branch</p>
        <h2>A circle becomes a function<br>when you choose a piece.</h2>
        <p>Solving x² + y² = 36 for y gives two signs. Geometry chooses the sign; the requested left or right side restricts the domain.</p>
      </div>

      <div class="circle-branch-lab" data-reveal>
        <div class="circle-branch-lab__stage">
          <svg id="circle-branch-chart" viewBox="0 0 500 500" role="img" aria-label="Circle with one selected quarter highlighted"></svg>
        </div>
        <div class="circle-branch-lab__controls">
          <p class="tool-label">Quarter-circle selector</p>
          <div class="quarter-options">
            <button type="button" data-quarter="upper-left">Upper left</button>
            <button type="button" data-quarter="upper-right">Upper right</button>
            <button type="button" class="is-active" data-quarter="lower-left">Lower left</button>
            <button type="button" data-quarter="lower-right">Lower right</button>
          </div>
          <div class="circle-branch-result" aria-live="polite">
            <span id="quarter-direction">Lower selects − · left restricts x ≤ 0</span>
            <strong id="quarter-formula">f(x) = −√(36 − x²)</strong>
            <p id="quarter-domain">Domain: [−6, 0] · Range: [−6, 0]</p>
          </div>
          <ol>
            <li><span>1</span><p>Isolate y²: y² = 36 − x².</p></li>
            <li><span>2</span><p>Take both branches: y = ±√(36 − x²).</p></li>
            <li><span>3</span><p>Use the picture to select a sign and domain.</p></li>
          </ol>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="reconstruction-studio">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>05</span> Reconstruct the graph</p>
        <h2>Match each visible piece<br>to an algebraic rule.</h2>
        <p>Use slope for lines, radius for circular arcs, and endpoint style for the inequalities. Then combine the pieces into one function.</p>
      </div>

      <div class="reconstruction-studio" data-reveal>
        <div class="reconstruction-tabs" role="tablist" aria-label="Graph reconstruction examples">
          <button type="button" class="is-active" data-reconstruction-tab="a">Reconstruction A</button>
          <button type="button" data-reconstruction-tab="b">Reconstruction B</button>
        </div>
        <section data-reconstruction-panel="a">
          <div class="reconstruction-graph">
            <svg id="reconstruction-a-chart" viewBox="0 0 680 470" role="img" aria-label="Piecewise graph with a constant segment, upper semicircle, and descending ray"></svg>
          </div>
          <div class="reconstruction-copy">
            <p class="tool-label">Constant · semicircle · ray</p>
            <h3>p(x) =</h3>
            <div class="reconstruction-rules">
              <span><strong>−2</strong><i>if −7 ≤ x ≤ −4</i></span>
              <span><strong>√(16 − x²)</strong><i>if −4 &lt; x ≤ 4</i></span>
              <span><strong>1 − x/2</strong><i>if x &gt; 4</i></span>
            </div>
            <label for="reconstruction-a-x">Inspect x <output id="reconstruction-a-x-output">−4</output></label>
            <input id="reconstruction-a-x" type="range" min="-7" max="8" step="1" value="-4" />
            <div class="reconstruction-output" id="reconstruction-a-output" aria-live="polite">p(−4) = −2 · constant piece</div>
            <dl>
              <div><dt>Domain</dt><dd>[−7, ∞)</dd></div>
              <div><dt>Range</dt><dd>(−∞, −1) ∪ [0, 4]</dd></div>
              <div><dt>Net change, −4 → 4</dt><dd>2</dd></div>
            </dl>
          </div>
        </section>
        <section data-reconstruction-panel="b" hidden>
          <div class="reconstruction-graph">
            <svg id="reconstruction-b-chart" viewBox="0 0 680 470" role="img" aria-label="Piecewise graph with two horizontal segments and a rising line"></svg>
          </div>
          <div class="reconstruction-copy">
            <p class="tool-label">Open points change everything</p>
            <h3>g(x) =</h3>
            <div class="reconstruction-rules">
              <span><strong>3</strong><i>if −5 &lt; x &lt; −2</i></span>
              <span><strong>3x/2 − 1</strong><i>if −2 ≤ x &lt; 4</i></span>
              <span><strong>−5</strong><i>if 4 &lt; x ≤ 8</i></span>
            </div>
            <label for="reconstruction-b-x">Inspect x <output id="reconstruction-b-x-output">4</output></label>
            <input id="reconstruction-b-x" type="range" min="-5" max="8" step="1" value="4" />
            <div class="reconstruction-output" id="reconstruction-b-output" aria-live="polite">g(4) is undefined · both points are open</div>
            <dl>
              <div><dt>Domain</dt><dd>(−5, 4) ∪ (4, 8]</dd></div>
              <div><dt>Range</dt><dd>{−5} ∪ [−4, 5)</dd></div>
              <div><dt>Net change, −4 → 0</dt><dd>−4</dd></div>
            </dl>
          </div>
        </section>
      </div>
    </section>

    <section class="lesson-section readiness readiness--graphs" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>06</span> Final readiness</p>
        <h2>Can you turn a graph<br>back into information?</h2>
        <p>Use endpoint logic, shape recognition, and final-minus-initial order. Every answer can be read from the visual evidence above.</p>
      </div>
      <div class="graph-check-grid">
        <article class="check-card" data-reveal>
          <span>Functions and branches</span>
          <h3>Choose the valid interpretation.</h3>
          <label>Is x² + y² = 9 a function of x?
            <select id="check-vlt"><option value="">Choose…</option><option value="yes">Yes</option><option value="correct">No</option></select>
          </label>
          <label>Lower-left quarter of x²+y²=36
            <select id="check-quarter"><option value="">Choose…</option><option value="wrong-a">√(36−x²), 0≤x≤6</option><option value="correct">−√(36−x²), −6≤x≤0</option><option value="wrong-b">−√(36−x²), 0≤x≤6</option></select>
          </label>
          <button type="button" id="check-functions">Check choices</button>
          <p id="feedback-functions" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="check-card" data-reveal>
          <span>Reconstruction A</span>
          <h3>Read the constant, arc, and ray.</h3>
          <label>Domain
            <select id="check-a-domain"><option value="">Choose…</option><option value="correct">[−7, ∞)</option><option value="wrong-a">[−7, 8]</option><option value="wrong-b">(−7, ∞)</option></select>
          </label>
          <label>Range
            <select id="check-a-range"><option value="">Choose…</option><option value="wrong-a">[−2, 4]</option><option value="correct">(−∞, −1) ∪ [0, 4]</option><option value="wrong-b">(−∞, 4]</option></select>
          </label>
          <label>Net change, −4 → 4 <input id="check-a-change" type="number" /></label>
          <button type="button" id="check-a">Check graph A</button>
          <p id="feedback-a-graph" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="check-card" data-reveal>
          <span>Reconstruction B values</span>
          <h3>Open and filled points decide.</h3>
          <label>g(−2) <input id="check-b-negative-two" type="number" /></label>
          <label>g(4)
            <select id="check-b-four"><option value="">Choose…</option><option value="wrong-a">5</option><option value="wrong-b">−5</option><option value="correct">Undefined</option></select>
          </label>
          <label>Net change, −4 → 0 <input id="check-b-change" type="number" /></label>
          <button type="button" id="check-b-values">Check values</button>
          <p id="feedback-b-values" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="check-card" data-reveal>
          <span>Reconstruction B sets</span>
          <h3>Project the graph onto both axes.</h3>
          <label>Domain
            <select id="check-b-domain"><option value="">Choose…</option><option value="wrong-a">(−5, 8]</option><option value="correct">(−5, 4) ∪ (4, 8]</option><option value="wrong-b">[−5, 4) ∪ (4, 8]</option></select>
          </label>
          <label>Range
            <select id="check-b-range"><option value="">Choose…</option><option value="correct">{−5} ∪ [−4, 5)</option><option value="wrong-a">[−5, 5]</option><option value="wrong-b">[−4, 5)</option></select>
          </label>
          <label>Middle rule
            <select id="check-b-rule"><option value="">Choose…</option><option value="wrong-a">3x/2 + 1</option><option value="correct">3x/2 − 1</option><option value="wrong-b">2x/3 − 1</option></select>
          </label>
          <button type="button" id="check-b-sets">Check sets</button>
          <p id="feedback-b-sets" class="answer-feedback" aria-live="polite"></p>
        </article>
      </div>
      <aside class="ready-banner ready-banner--graphs" data-reveal>
        <span>You are ready when</span>
        <p>You can recognize the family, count vertical intersections, honor every endpoint, and recover formulas from geometric pieces.</p>
        <a href="#family-library">Restart the graph library <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${renderLessonFooter({
    previous: { href: "pages/sections/2-1.html", label: "Section 2.1 · Functions" },
    next: null,
  })}
`;

function signedNumber(value) {
  const result = formatNumber(value);
  return result.startsWith("-") ? `−${result.slice(1)}` : result;
}

function createMapper({ width = 620, height = 420, padding = 44, xMin = -5, xMax = 5, yMin = -5, yMax = 5 }) {
  return {
    width,
    height,
    padding,
    xMin,
    xMax,
    yMin,
    yMax,
    x: (value) => padding + ((value - xMin) / (xMax - xMin)) * (width - 2 * padding),
    y: (value) => height - padding - ((value - yMin) / (yMax - yMin)) * (height - 2 * padding),
  };
}

function gridMarkup(mapper, { labels = true } = {}) {
  const lines = [];
  for (let x = Math.ceil(mapper.xMin); x <= Math.floor(mapper.xMax); x += 1) {
    lines.push(`<line x1="${mapper.x(x)}" y1="${mapper.padding}" x2="${mapper.x(x)}" y2="${mapper.height - mapper.padding}" class="graph-grid-line" />`);
    if (labels && x !== 0 && x % 2 === 0) lines.push(`<text x="${mapper.x(x)}" y="${mapper.y(0) + 20}" text-anchor="middle" class="graph-grid-label">${signedNumber(x)}</text>`);
  }
  for (let y = Math.ceil(mapper.yMin); y <= Math.floor(mapper.yMax); y += 1) {
    lines.push(`<line x1="${mapper.padding}" y1="${mapper.y(y)}" x2="${mapper.width - mapper.padding}" y2="${mapper.y(y)}" class="graph-grid-line" />`);
    if (labels && y !== 0 && y % 2 === 0) lines.push(`<text x="${mapper.x(0) + 9}" y="${mapper.y(y) - 6}" class="graph-grid-label">${signedNumber(y)}</text>`);
  }
  lines.push(`<line x1="${mapper.padding}" y1="${mapper.y(0)}" x2="${mapper.width - mapper.padding}" y2="${mapper.y(0)}" class="graph-axis-line" />`);
  lines.push(`<line x1="${mapper.x(0)}" y1="${mapper.padding}" x2="${mapper.x(0)}" y2="${mapper.height - mapper.padding}" class="graph-axis-line" />`);
  return lines.join("");
}

function pathFromPoints(points, mapper) {
  return points.map(([x, y], index) => `${index === 0 ? "M" : "L"}${mapper.x(x)} ${mapper.y(y)}`).join(" ");
}

function sampledPoints(start, end, evaluate, step = 0.08) {
  const points = [];
  for (let x = start; x <= end + step / 2; x += step) points.push([x, evaluate(x)]);
  return points;
}

function endpointMarkup(mapper, x, y, closed = true, className = "") {
  return `<circle cx="${mapper.x(x)}" cy="${mapper.y(y)}" r="8" class="graph-endpoint ${closed ? "is-closed" : "is-open"} ${className}" />`;
}

const familyMapper = createMapper({ width: 620, height: 420, padding: 48 });
const familyCases = {
  constant: { name: "Constant function", formula: "f(x) = 2", domain: "(−∞, ∞)", range: "{2}", clue: "A horizontal line: every input returns the same output.", segments: [[[-5, 2], [5, 2]]] },
  identity: { name: "Identity function", formula: "f(x) = x", domain: "(−∞, ∞)", range: "(−∞, ∞)", clue: "A line through the origin with slope 1: output equals input.", segments: [sampledPoints(-5, 5, (x) => x)] },
  absolute: { name: "Absolute-value function", formula: "f(x) = |x|", domain: "(−∞, ∞)", range: "[0, ∞)", clue: "A V-shape with its vertex at the origin and y-axis symmetry.", segments: [sampledPoints(-5, 5, (x) => Math.abs(x))] },
  quadratic: { name: "Quadratic function", formula: "f(x) = x²", domain: "(−∞, ∞)", range: "[0, ∞)", clue: "A U-shaped parabola with a minimum at the origin.", segments: [sampledPoints(-Math.sqrt(5), Math.sqrt(5), (x) => x ** 2)] },
  cubic: { name: "Cubic function", formula: "f(x) = x³", domain: "(−∞, ∞)", range: "(−∞, ∞)", clue: "An increasing S-curve with origin symmetry.", segments: [sampledPoints(-Math.cbrt(5), Math.cbrt(5), (x) => x ** 3)] },
  "square-root": { name: "Square-root function", formula: "f(x) = √x", domain: "[0, ∞)", range: "[0, ∞)", clue: "Begins at the origin and moves right only, rising more slowly.", segments: [sampledPoints(0, 5, (x) => Math.sqrt(x))] },
  "cube-root": { name: "Cube-root function", formula: "f(x) = ³√x", domain: "(−∞, ∞)", range: "(−∞, ∞)", clue: "A sideways S-curve that passes through the origin.", segments: [sampledPoints(-5, 5, (x) => Math.cbrt(x))] },
  reciprocal: { name: "Reciprocal function", formula: "f(x) = 1/x", domain: "(−∞, 0) ∪ (0, ∞)", range: "(−∞, 0) ∪ (0, ∞)", clue: "Two branches in opposite quadrants; both axes are asymptotes.", segments: [sampledPoints(-5, -0.2, (x) => 1 / x), sampledPoints(0.2, 5, (x) => 1 / x)] },
  "reciprocal-square": { name: "Reciprocal-squared function", formula: "f(x) = 1/x²", domain: "(−∞, 0) ∪ (0, ∞)", range: "(0, ∞)", clue: "Two positive branches mirrored across the y-axis.", segments: [sampledPoints(-5, -Math.sqrt(0.2), (x) => 1 / x ** 2), sampledPoints(Math.sqrt(0.2), 5, (x) => 1 / x ** 2)] },
};

function renderFamily(name) {
  const selected = familyCases[name];
  document.querySelectorAll("[data-family]").forEach((button) => button.classList.toggle("is-active", button.dataset.family === name));
  document.querySelector("#family-chart").innerHTML = `
    ${gridMarkup(familyMapper)}
    ${selected.segments.map((segment) => `<path d="${pathFromPoints(segment, familyMapper)}" class="family-curve" />`).join("")}
  `;
  document.querySelector("#family-name").textContent = selected.name;
  document.querySelector("#family-formula").textContent = selected.formula;
  document.querySelector("#family-domain").textContent = selected.domain;
  document.querySelector("#family-range").textContent = selected.range;
  document.querySelector("#family-clue").textContent = selected.clue;
}
document.querySelectorAll("[data-family]").forEach((button) => button.addEventListener("click", () => renderFamily(button.dataset.family)));
renderFamily("constant");

const verticalMapper = createMapper({ width: 500, height: 500, padding: 50 });
const verticalInput = document.querySelector("#vertical-x");
let verticalCurve = "circle";
const verticalCurveSettings = {
  line: { min: -5, max: 5, value: 1 },
  parabola: { min: -2, max: 2, value: 1 },
  circle: { min: -5, max: 5, value: 1 },
  sideways: { min: -1, max: 5, value: 1 },
};

function verticalCurveMarkup(type) {
  if (type === "line") return `<path d="${pathFromPoints([[-5, -3.5], [5, 3.5]], verticalMapper)}" class="vertical-test-curve" />`;
  if (type === "parabola") return `<path d="${pathFromPoints(sampledPoints(-Math.sqrt(5), Math.sqrt(5), (x) => x ** 2), verticalMapper)}" class="vertical-test-curve" />`;
  if (type === "circle") return `<circle cx="${verticalMapper.x(0)}" cy="${verticalMapper.y(0)}" r="${verticalMapper.x(3) - verticalMapper.x(0)}" class="vertical-test-curve" />`;
  return `<path d="${pathFromPoints(sampledPoints(-Math.sqrt(5), Math.sqrt(5), (y) => y ** 2).map(([y, x]) => [x, y]), verticalMapper)}" class="vertical-test-curve" />`;
}

function renderVerticalTest() {
  const x = Number(verticalInput.value);
  let ys = [];
  let isFunction = false;
  let reason = "";
  if (verticalCurve === "line") {
    ys = [0.7 * x];
    isFunction = true;
    reason = "Every vertical line meets a nonvertical line at most once.";
  } else if (verticalCurve === "parabola") {
    ys = [x ** 2];
    isFunction = true;
    reason = "Every x-value selects exactly one point on the parabola.";
  } else if (verticalCurve === "circle") {
    const radicand = 9 - x ** 2;
    ys = nearlyEqual(radicand, 0) ? [0] : radicand > 0 ? [Math.sqrt(radicand), -Math.sqrt(radicand)] : [];
    reason = ys.length === 2
      ? "This line proves the circle fails: one input reaches two outputs."
      : ys.length === 1
        ? "This tangent line passes, but lines between −3 and 3 meet the circle twice."
        : "This line misses the circle, but lines between −3 and 3 meet it twice.";
  } else {
    ys = nearlyEqual(x, 0) ? [0] : x > 0 ? [Math.sqrt(x), -Math.sqrt(x)] : [];
    reason = ys.length === 2
      ? "This line proves the sideways parabola fails: one input reaches two outputs."
      : "This line passes, but every x > 0 produces two intersections.";
  }
  document.querySelector("#vertical-test-chart").innerHTML = `
    ${gridMarkup(verticalMapper)}
    ${verticalCurveMarkup(verticalCurve)}
    <line x1="${verticalMapper.x(x)}" y1="${verticalMapper.padding}" x2="${verticalMapper.x(x)}" y2="${verticalMapper.height - verticalMapper.padding}" class="vertical-scan-line" />
    ${ys.filter((y) => y >= verticalMapper.yMin && y <= verticalMapper.yMax).map((y) => `<circle cx="${verticalMapper.x(x)}" cy="${verticalMapper.y(y)}" r="9" class="vertical-intersection" />`).join("")}
  `;
  document.querySelector("#vertical-x-output").textContent = signedNumber(x);
  const currentLinePasses = ys.length <= 1;
  document.querySelector("#vertical-count").textContent = `${ys.length} intersection${ys.length === 1 ? "" : "s"} here · this line ${currentLinePasses ? "passes" : "fails"}`;
  const curveName = verticalCurve === "sideways" ? "The sideways parabola" : `The ${verticalCurve}`;
  document.querySelector("#vertical-verdict").textContent = isFunction ? `${curveName} is a function of x` : `${curveName} is not a function of x`;
  document.querySelector("#vertical-reason").textContent = reason;
}
document.querySelectorAll("[data-test-curve]").forEach((button) => button.addEventListener("click", () => {
  verticalCurve = button.dataset.testCurve;
  const settings = verticalCurveSettings[verticalCurve];
  verticalInput.min = settings.min;
  verticalInput.max = settings.max;
  verticalInput.value = settings.value;
  document.querySelectorAll("[data-test-curve]").forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
  renderVerticalTest();
}));
verticalInput.addEventListener("input", renderVerticalTest);
renderVerticalTest();

const readerMapper = createMapper({ width: 620, height: 440, padding: 50, xMin: -4, xMax: 3, yMin: -3, yMax: 4 });
let readerBranch = "one";
function renderReaderGraph() {
  const branchClass = (name) => `reader-curve ${readerBranch === name ? "is-highlight" : ""}`;
  document.querySelector("#reader-chart").innerHTML = `
    ${gridMarkup(readerMapper)}
    <path d="${pathFromPoints([[-3, -2], [-1, -2]], readerMapper)}" class="${branchClass("one")}" />
    <path d="${pathFromPoints([[-1, 0], [0, 2]], readerMapper)}" class="${branchClass("two")}" />
    <path d="${pathFromPoints([[0, 2], [2, 3]], readerMapper)}" class="${branchClass("three")}" />
    ${endpointMarkup(readerMapper, -3, -2, true)}
    ${endpointMarkup(readerMapper, -1, -2, true)}
    ${endpointMarkup(readerMapper, -1, 0, false)}
    ${endpointMarkup(readerMapper, 0, 2, true)}
    ${endpointMarkup(readerMapper, 2, 3, true)}
  `;
}
document.querySelectorAll("[data-reader-branch]").forEach((button) => button.addEventListener("click", () => {
  readerBranch = button.dataset.readerBranch;
  document.querySelectorAll("[data-reader-branch]").forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
  renderReaderGraph();
}));
renderReaderGraph();

const quarterMapper = createMapper({ width: 500, height: 500, padding: 55, xMin: -7, xMax: 7, yMin: -7, yMax: 7 });
let selectedQuarter = "lower-left";
const quarterCases = {
  "upper-left": { sign: 1, start: -6, end: 0, direction: "Upper selects + · left restricts x ≤ 0", formula: "f(x) = √(36 − x²)", domain: "Domain: [−6, 0] · Range: [0, 6]" },
  "upper-right": { sign: 1, start: 0, end: 6, direction: "Upper selects + · right restricts x ≥ 0", formula: "f(x) = √(36 − x²)", domain: "Domain: [0, 6] · Range: [0, 6]" },
  "lower-left": { sign: -1, start: -6, end: 0, direction: "Lower selects − · left restricts x ≤ 0", formula: "f(x) = −√(36 − x²)", domain: "Domain: [−6, 0] · Range: [−6, 0]" },
  "lower-right": { sign: -1, start: 0, end: 6, direction: "Lower selects − · right restricts x ≥ 0", formula: "f(x) = −√(36 − x²)", domain: "Domain: [0, 6] · Range: [−6, 0]" },
};

function renderQuarterCircle() {
  const selected = quarterCases[selectedQuarter];
  const points = sampledPoints(selected.start, selected.end, (x) => selected.sign * Math.sqrt(Math.max(0, 36 - x ** 2)), 0.06);
  document.querySelector("#circle-branch-chart").innerHTML = `
    ${gridMarkup(quarterMapper)}
    <circle cx="${quarterMapper.x(0)}" cy="${quarterMapper.y(0)}" r="${quarterMapper.x(6) - quarterMapper.x(0)}" class="quarter-circle-guide" />
    <path d="${pathFromPoints(points, quarterMapper)}" class="quarter-circle-selected" />
    ${endpointMarkup(quarterMapper, selected.start, selected.sign * Math.sqrt(Math.max(0, 36 - selected.start ** 2)), true)}
    ${endpointMarkup(quarterMapper, selected.end, selected.sign * Math.sqrt(Math.max(0, 36 - selected.end ** 2)), true)}
  `;
  document.querySelectorAll("[data-quarter]").forEach((button) => button.classList.toggle("is-active", button.dataset.quarter === selectedQuarter));
  document.querySelector("#quarter-direction").textContent = selected.direction;
  document.querySelector("#quarter-formula").textContent = selected.formula;
  document.querySelector("#quarter-domain").textContent = selected.domain;
}
document.querySelectorAll("[data-quarter]").forEach((button) => button.addEventListener("click", () => {
  selectedQuarter = button.dataset.quarter;
  renderQuarterCircle();
}));
renderQuarterCircle();

const reconstructionMapper = createMapper({ width: 680, height: 470, padding: 50, xMin: -8, xMax: 9, yMin: -6, yMax: 6 });
const reconstructionAChart = document.querySelector("#reconstruction-a-chart");
const reconstructionBChart = document.querySelector("#reconstruction-b-chart");

function renderReconstructionGraphs() {
  const arc = sampledPoints(-4, 4, (x) => Math.sqrt(Math.max(0, 16 - x ** 2)), 0.05);
  const ray = sampledPoints(4, 9, (x) => 1 - x / 2, 0.08);
  reconstructionAChart.innerHTML = `
    ${gridMarkup(reconstructionMapper)}
    <path d="${pathFromPoints([[-7, -2], [-4, -2]], reconstructionMapper)}" class="reconstruction-curve reconstruction-curve--one" />
    <path d="${pathFromPoints(arc, reconstructionMapper)}" class="reconstruction-curve reconstruction-curve--two" />
    <path d="${pathFromPoints(ray, reconstructionMapper)}" class="reconstruction-curve reconstruction-curve--three" />
    ${endpointMarkup(reconstructionMapper, -7, -2, true)}
    ${endpointMarkup(reconstructionMapper, -4, -2, true)}
    ${endpointMarkup(reconstructionMapper, -4, 0, false)}
    ${endpointMarkup(reconstructionMapper, 4, 0, true)}
    ${endpointMarkup(reconstructionMapper, 4, -1, false)}
    ${endpointMarkup(reconstructionMapper, 6, -2, true)}
  `;
  reconstructionBChart.innerHTML = `
    ${gridMarkup(reconstructionMapper)}
    <path d="${pathFromPoints([[-5, 3], [-2, 3]], reconstructionMapper)}" class="reconstruction-curve reconstruction-curve--one" />
    <path d="${pathFromPoints([[-2, -4], [4, 5]], reconstructionMapper)}" class="reconstruction-curve reconstruction-curve--two" />
    <path d="${pathFromPoints([[4, -5], [8, -5]], reconstructionMapper)}" class="reconstruction-curve reconstruction-curve--three" />
    ${endpointMarkup(reconstructionMapper, -5, 3, false)}
    ${endpointMarkup(reconstructionMapper, -2, 3, false)}
    ${endpointMarkup(reconstructionMapper, -2, -4, true)}
    ${endpointMarkup(reconstructionMapper, 4, 5, false)}
    ${endpointMarkup(reconstructionMapper, 4, -5, false)}
    ${endpointMarkup(reconstructionMapper, 8, -5, true)}
  `;
}
renderReconstructionGraphs();

document.querySelectorAll("[data-reconstruction-tab]").forEach((button) => button.addEventListener("click", () => {
  const selected = button.dataset.reconstructionTab;
  document.querySelectorAll("[data-reconstruction-tab]").forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
  document.querySelectorAll("[data-reconstruction-panel]").forEach((panel) => { panel.hidden = panel.dataset.reconstructionPanel !== selected; });
}));

const reconstructionAInput = document.querySelector("#reconstruction-a-x");
function renderReconstructionAOutput() {
  const x = Number(reconstructionAInput.value);
  let value;
  let branch;
  if (x >= -7 && x <= -4) {
    value = -2;
    branch = "constant piece";
  } else if (x > -4 && x <= 4) {
    value = Math.sqrt(16 - x ** 2);
    branch = "upper semicircle";
  } else {
    value = 1 - x / 2;
    branch = "descending ray";
  }
  document.querySelector("#reconstruction-a-x-output").textContent = signedNumber(x);
  document.querySelector("#reconstruction-a-output").textContent = `p(${signedNumber(x)}) = ${signedNumber(value)} · ${branch}`;
}
reconstructionAInput.addEventListener("input", renderReconstructionAOutput);
renderReconstructionAOutput();

const reconstructionBInput = document.querySelector("#reconstruction-b-x");
function renderReconstructionBOutput() {
  const x = Number(reconstructionBInput.value);
  let message = `g(${signedNumber(x)}) is undefined · no filled point`;
  if (x > -5 && x < -2) message = `g(${signedNumber(x)}) = 3 · upper constant piece`;
  else if (x >= -2 && x < 4) message = `g(${signedNumber(x)}) = ${signedNumber(1.5 * x - 1)} · rising line`;
  else if (x > 4 && x <= 8) message = `g(${signedNumber(x)}) = −5 · lower constant piece`;
  document.querySelector("#reconstruction-b-x-output").textContent = signedNumber(x);
  document.querySelector("#reconstruction-b-output").textContent = message;
}
reconstructionBInput.addEventListener("input", renderReconstructionBOutput);
renderReconstructionBOutput();

document.querySelector("#check-functions").addEventListener("click", () => {
  const correct = document.querySelector("#check-vlt").value === "correct" && document.querySelector("#check-quarter").value === "correct";
  setFeedback(document.querySelector("#feedback-functions"), correct, correct ? "Correct. A full circle fails the vertical-line test; the lower-left quarter uses the negative branch on −6 ≤ x ≤ 0." : "A full circle gives two y-values for many x-values. Lower means the negative square root, and left means x ≤ 0.");
});

document.querySelector("#check-a").addEventListener("click", () => {
  const correct = document.querySelector("#check-a-domain").value === "correct" && document.querySelector("#check-a-range").value === "correct" && nearlyEqual(Number(document.querySelector("#check-a-change").value), 2);
  setFeedback(document.querySelector("#feedback-a-graph"), correct, correct ? "Correct. The ray continues right forever, its outputs fall below −1, and p(4) − p(−4) = 0 − (−2) = 2." : "Use the ray’s arrow for infinity, preserve the gap between −1 and 0 in the range, and compute final output minus initial output.");
});

document.querySelector("#check-b-values").addEventListener("click", () => {
  const correct = nearlyEqual(Number(document.querySelector("#check-b-negative-two").value), -4) && document.querySelector("#check-b-four").value === "correct" && nearlyEqual(Number(document.querySelector("#check-b-change").value), -4);
  setFeedback(document.querySelector("#feedback-b-values"), correct, correct ? "Correct. The filled point gives g(−2) = −4, both x = 4 points are open, and g(0) − g(−4) = −1 − 3 = −4." : "At a shared x-value, use the filled point. At x = 4 both visible points are open. Net change is g(0) − g(−4).");
});

document.querySelector("#check-b-sets").addEventListener("click", () => {
  const correct = ["#check-b-domain", "#check-b-range", "#check-b-rule"].every((selector) => document.querySelector(selector).value === "correct");
  setFeedback(document.querySelector("#feedback-b-sets"), correct, correct ? "Correct. The domain excludes −5 and 4, includes 8, and the rising segment has slope 3/2 with y-intercept −1." : "Project onto the x-axis for domain and y-axis for range. For the middle line, slope = (5−(−4))/(4−(−2)) = 3/2.");
});

initLessonChrome();
