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
  ${renderLessonHeader("2.3")}
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
  ${renderLessonFooter({
    previous: { href: "pages/sections/2-2.html", label: "Section 2.2 · Graphs of functions" },
    next: { href: "pages/sections/2-6.html", label: "Section 2.6 · Transformations" },
  })}
`;

function signed(value, digits = 2) {
  const rounded = Number(value.toFixed(digits));
  const result = formatNumber(rounded);
  return result.startsWith("-") ? `−${result.slice(1)}` : result;
}

function createMapper({ width, height, padding = 48, xMin, xMax, yMin, yMax, equalScale = false }) {
  let xScale = (width - 2 * padding) / (xMax - xMin);
  let yScale = (height - 2 * padding) / (yMax - yMin);
  if (equalScale) xScale = yScale = Math.min(xScale, yScale);
  const plotWidth = (xMax - xMin) * xScale;
  const plotHeight = (yMax - yMin) * yScale;
  const left = (width - plotWidth) / 2;
  const top = (height - plotHeight) / 2;
  return {
    width, height, xMin, xMax, yMin, yMax,
    left, right: left + plotWidth, top, bottom: top + plotHeight,
    x: (value) => left + (value - xMin) * xScale,
    y: (value) => top + (yMax - value) * yScale,
  };
}

function gridMarkup(mapper, { xStep = 1, yStep = 1, labelStep = 2, light = false } = {}) {
  const lines = [];
  for (let x = Math.ceil(mapper.xMin / xStep) * xStep; x <= mapper.xMax + 1e-8; x += xStep) {
    lines.push(`<line x1="${mapper.x(x)}" y1="${mapper.top}" x2="${mapper.x(x)}" y2="${mapper.bottom}" class="info-grid-line ${light ? "is-light" : ""}" />`);
    if (x !== 0 && Number.isInteger(x / labelStep)) lines.push(`<text x="${mapper.x(x)}" y="${mapper.y(0) + 20}" text-anchor="middle" class="info-grid-label ${light ? "is-light" : ""}">${signed(x)}</text>`);
  }
  for (let y = Math.ceil(mapper.yMin / yStep) * yStep; y <= mapper.yMax + 1e-8; y += yStep) {
    lines.push(`<line x1="${mapper.left}" y1="${mapper.y(y)}" x2="${mapper.right}" y2="${mapper.y(y)}" class="info-grid-line ${light ? "is-light" : ""}" />`);
    if (y !== 0 && Number.isInteger(y / labelStep)) lines.push(`<text x="${mapper.x(0) + 10}" y="${mapper.y(y) - 7}" class="info-grid-label ${light ? "is-light" : ""}">${signed(y)}</text>`);
  }
  if (mapper.yMin <= 0 && mapper.yMax >= 0) lines.push(`<line x1="${mapper.left}" y1="${mapper.y(0)}" x2="${mapper.right}" y2="${mapper.y(0)}" class="info-axis-line ${light ? "is-light" : ""}" />`);
  if (mapper.xMin <= 0 && mapper.xMax >= 0) lines.push(`<line x1="${mapper.x(0)}" y1="${mapper.top}" x2="${mapper.x(0)}" y2="${mapper.bottom}" class="info-axis-line ${light ? "is-light" : ""}" />`);
  return lines.join("");
}

function pathFromPoints(points, mapper) {
  return points.map(([x, y], index) => `${index ? "L" : "M"}${mapper.x(x)} ${mapper.y(y)}`).join(" ");
}

function sample(start, end, evaluate, step = 0.04) {
  const points = [];
  for (let x = start; x < end; x += step) points.push([x, evaluate(x)]);
  points.push([end, evaluate(end)]);
  return points;
}

const curveStops = [
  { x: -5, y: -3 },
  { x: -3, y: 3, kind: "local maximum" },
  { x: -1, y: 0, kind: "local minimum" },
  { x: 1.5, y: 2, kind: "local maximum" },
  { x: 3, y: -1, kind: "local minimum" },
  { x: 5, y: 4 },
];

function curveSegment(x) {
  for (let index = 0; index < curveStops.length - 1; index += 1) {
    if (x <= curveStops[index + 1].x + 1e-9) return index;
  }
  return curveStops.length - 2;
}

function curveValue(x) {
  const index = curveSegment(Math.max(-5, Math.min(5, x)));
  const start = curveStops[index];
  const end = curveStops[index + 1];
  const t = (x - start.x) / (end.x - start.x);
  const eased = t * t * (3 - 2 * t);
  return start.y + (end.y - start.y) * eased;
}

function curveSlope(x) {
  const stop = curveStops.find((point) => nearlyEqual(x, point.x, 0.001));
  if (stop) return 0;
  const index = curveSegment(x);
  const start = curveStops[index];
  const end = curveStops[index + 1];
  const t = (x - start.x) / (end.x - start.x);
  return ((end.y - start.y) * 6 * t * (1 - t)) / (end.x - start.x);
}

const curvePoints = sample(-5, 5, curveValue, 0.025);
const mainMapper = createMapper({ width: 680, height: 500, padding: 55, xMin: -6, xMax: 6, yMin: -4, yMax: 5 });

function baseCurveMarkup({ light = false } = {}) {
  return `
    ${gridMarkup(mainMapper, { light })}
    <path d="${pathFromPoints(curvePoints, mainMapper)}" class="info-main-curve ${light ? "is-light" : ""}" />
    <circle cx="${mainMapper.x(-5)}" cy="${mainMapper.y(-3)}" r="7" class="info-endpoint ${light ? "is-light" : ""}" />
    <circle cx="${mainMapper.x(5)}" cy="${mainMapper.y(4)}" r="7" class="info-endpoint ${light ? "is-light" : ""}" />
  `;
}

const projectionChart = document.querySelector("#projection-chart");
const projectionInput = document.querySelector("#projection-x");
let projectionMode = "input";

function renderProjection() {
  const x = Number(projectionInput.value);
  const y = curveValue(x);
  let overlay = `
    <line x1="${mainMapper.x(x)}" y1="${mainMapper.y(0)}" x2="${mainMapper.x(x)}" y2="${mainMapper.y(y)}" class="projection-line" />
    <line x1="${mainMapper.x(0)}" y1="${mainMapper.y(y)}" x2="${mainMapper.x(x)}" y2="${mainMapper.y(y)}" class="projection-line projection-line--soft" />
    <circle cx="${mainMapper.x(x)}" cy="${mainMapper.y(y)}" r="9" class="info-focus-point" />
  `;
  let label = "At this input";
  let main = `f(${signed(x, 1)}) ≈ ${signed(y, 1)}`;
  let copy = `Read vertically from x = ${signed(x, 1)} until you meet the curve.`;
  if (projectionMode === "domain") {
    overlay = `<line x1="${mainMapper.x(-5)}" y1="${mainMapper.y(0)}" x2="${mainMapper.x(5)}" y2="${mainMapper.y(0)}" class="projection-shadow projection-shadow--domain" />`;
    label = "Horizontal shadow";
    main = "Domain = [−5, 5]";
    copy = "Both endpoints are filled, so −5 and 5 are included.";
  } else if (projectionMode === "range") {
    overlay = `<line x1="${mainMapper.x(0)}" y1="${mainMapper.y(-3)}" x2="${mainMapper.x(0)}" y2="${mainMapper.y(4)}" class="projection-shadow projection-shadow--range" />`;
    label = "Vertical shadow";
    main = "Range = [−3, 4]";
    copy = "The curve reaches every height from its lowest to its highest output.";
  }
  projectionChart.innerHTML = `${baseCurveMarkup()}${overlay}`;
  document.querySelector("#projection-x-output").textContent = signed(x, 1);
  document.querySelector("#projection-result-label").textContent = label;
  document.querySelector("#projection-result-main").textContent = main;
  document.querySelector("#projection-result-copy").textContent = copy;
  projectionInput.disabled = projectionMode !== "input";
}

document.querySelectorAll("[data-projection-mode]").forEach((button) => button.addEventListener("click", () => {
  projectionMode = button.dataset.projectionMode;
  document.querySelectorAll("[data-projection-mode]").forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
  renderProjection();
}));
projectionInput.addEventListener("input", renderProjection);
renderProjection();

const levelChart = document.querySelector("#level-chart");
const levelInput = document.querySelector("#level-y");
let levelRelation = "equal";

function rootsAtLevel(level) {
  const roots = [];
  for (let index = 0; index < curveStops.length - 1; index += 1) {
    const left = curveStops[index];
    const right = curveStops[index + 1];
    if (level < Math.min(left.y, right.y) - 1e-8 || level > Math.max(left.y, right.y) + 1e-8) continue;
    if (nearlyEqual(level, left.y) && !roots.some((root) => nearlyEqual(root, left.x))) roots.push(left.x);
    if (nearlyEqual(level, right.y) && !roots.some((root) => nearlyEqual(root, right.x))) roots.push(right.x);
    if (nearlyEqual(left.y, right.y) || nearlyEqual(level, left.y) || nearlyEqual(level, right.y)) continue;
    let low = left.x;
    let high = right.x;
    for (let iteration = 0; iteration < 40; iteration += 1) {
      const middle = (low + high) / 2;
      if ((curveValue(low) - level) * (curveValue(middle) - level) <= 0) high = middle;
      else low = middle;
    }
    const rootValue = (low + high) / 2;
    if (!roots.some((root) => nearlyEqual(root, rootValue, 0.01))) roots.push(rootValue);
  }
  return roots.sort((a, b) => a - b);
}

function relationSegments(level, relation) {
  const points = sample(-5, 5, curveValue, 0.025);
  const groups = [];
  let group = [];
  points.forEach((point) => {
    const matches = relation === "above" ? point[1] > level : point[1] < level;
    if (matches) group.push(point);
    else if (group.length) {
      groups.push(group);
      group = [];
    }
  });
  if (group.length) groups.push(group);
  return groups;
}

function intervalSummary(level, relation) {
  const roots = rootsAtLevel(level);
  const boundaries = [-5, ...roots, 5];
  const intervals = [];
  for (let index = 0; index < boundaries.length - 1; index += 1) {
    const left = boundaries[index];
    const right = boundaries[index + 1];
    const middle = (left + right) / 2;
    const matches = relation === "above" ? curveValue(middle) > level : curveValue(middle) < level;
    if (matches && right - left > 0.01) {
      const leftBracket = nearlyEqual(left, -5) && (relation === "above" ? curveValue(-5) > level : curveValue(-5) < level) ? "[" : "(";
      const rightBracket = nearlyEqual(right, 5) && (relation === "above" ? curveValue(5) > level : curveValue(5) < level) ? "]" : ")";
      intervals.push(`${leftBracket}${signed(left, 1)}, ${signed(right, 1)}${rightBracket}`);
    }
  }
  return intervals.join(" ∪ ") || "no x-values";
}

function renderLevelLab() {
  const level = Number(levelInput.value);
  const roots = rootsAtLevel(level);
  const highlights = levelRelation === "equal" ? "" : relationSegments(level, levelRelation)
    .map((points) => `<path d="${pathFromPoints(points, mainMapper)}" class="level-highlight" />`).join("");
  levelChart.innerHTML = `
    ${baseCurveMarkup()}
    <line x1="${mainMapper.left}" y1="${mainMapper.y(level)}" x2="${mainMapper.right}" y2="${mainMapper.y(level)}" class="level-laser" />
    ${highlights}
    ${roots.map((x) => `<circle cx="${mainMapper.x(x)}" cy="${mainMapper.y(level)}" r="8" class="level-crossing" />`).join("")}
  `;
  document.querySelector("#level-y-output").textContent = signed(level, 1);
  if (levelRelation === "equal") {
    document.querySelector("#level-result-label").textContent = `${roots.length} crossing${roots.length === 1 ? "" : "s"}`;
    document.querySelector("#level-result-main").textContent = roots.length ? `x ≈ ${roots.map((x) => signed(x, 1)).join(", ")}` : "No solution at this level";
    document.querySelector("#level-result-copy").textContent = "Each crossing contributes one solution to f(x) = k.";
  } else {
    const symbol = levelRelation === "above" ? ">" : "<";
    document.querySelector("#level-result-label").textContent = levelRelation === "above" ? "Curve above the laser" : "Curve below the laser";
    document.querySelector("#level-result-main").textContent = `f(x) ${symbol} ${signed(level, 1)}`;
    document.querySelector("#level-result-copy").textContent = `Approximately ${intervalSummary(level, levelRelation)}`;
  }
}

document.querySelectorAll("[data-level-relation]").forEach((button) => button.addEventListener("click", () => {
  levelRelation = button.dataset.levelRelation;
  document.querySelectorAll("[data-level-relation]").forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
  renderLevelLab();
}));
levelInput.addEventListener("input", renderLevelLab);
renderLevelLab();

const directionChart = document.querySelector("#direction-chart");
const directionInput = document.querySelector("#direction-x");

function renderDirection() {
  const x = Number(directionInput.value);
  const y = curveValue(x);
  const slope = curveSlope(x);
  const stop = curveStops.slice(1, -1).find((point) => nearlyEqual(x, point.x, 0.045));
  const halfWidth = 1.05;
  const tangent = [[x - halfWidth, y - slope * halfWidth], [x + halfWidth, y + slope * halfWidth]];
  directionChart.innerHTML = `
    ${baseCurveMarkup({ light: true })}
    <path d="${pathFromPoints(tangent, mainMapper)}" class="tangent-line" />
    <line x1="${mainMapper.x(x)}" y1="${mainMapper.y(0)}" x2="${mainMapper.x(x)}" y2="${mainMapper.y(y)}" class="direction-guide" />
    <circle cx="${mainMapper.x(x)}" cy="${mainMapper.y(y)}" r="10" class="direction-point" />
    ${curveStops.slice(1, -1).map((point) => `<circle cx="${mainMapper.x(point.x)}" cy="${mainMapper.y(point.y)}" r="5" class="turn-marker" />`).join("")}
  `;
  let sign = slope > 0.03 ? "Positive tangent slope" : slope < -0.03 ? "Negative tangent slope" : "Horizontal tangent · slope 0";
  let state = slope > 0.03 ? "The function is increasing." : slope < -0.03 ? "The function is decreasing." : "The curve is momentarily level.";
  let detail = slope > 0.03 ? "Nearby outputs rise as you read from left to right." : slope < -0.03 ? "Nearby outputs fall as you read from left to right." : "Check both sides to decide whether this is a maximum, minimum, or neither.";
  if (stop) {
    sign = "Horizontal tangent · slope 0";
    state = `This is a ${stop.kind}.`;
    detail = stop.kind.includes("maximum") ? "The curve changes from increasing to decreasing." : "The curve changes from decreasing to increasing.";
  }
  document.querySelector("#direction-x-output").textContent = signed(x, 1);
  document.querySelector("#direction-sign").textContent = sign;
  document.querySelector("#direction-state").textContent = state;
  document.querySelector("#direction-detail").textContent = detail;
}

directionInput.addEventListener("input", renderDirection);
document.querySelectorAll("[data-direction-x]").forEach((button) => button.addEventListener("click", () => {
  directionInput.value = button.dataset.directionX;
  renderDirection();
}));
renderDirection();

const contextStops = [
  { x: 0, y: 10 }, { x: 10, y: 50 }, { x: 20, y: 150 },
  { x: 28, y: 160 }, { x: 30, y: 125 }, { x: 35, y: 170 }, { x: 70, y: 200 },
];

function contextValue(age) {
  const x = Math.max(0, Math.min(70, age));
  let index = contextStops.length - 2;
  for (let cursor = 0; cursor < contextStops.length - 1; cursor += 1) {
    if (x <= contextStops[cursor + 1].x) { index = cursor; break; }
  }
  const start = contextStops[index];
  const end = contextStops[index + 1];
  const t = (x - start.x) / (end.x - start.x);
  const eased = t * t * (3 - 2 * t);
  return start.y + (end.y - start.y) * eased;
}

const contextMapper = createMapper({ width: 720, height: 470, padding: 58, xMin: 0, xMax: 70, yMin: 0, yMax: 220 });
const contextChart = document.querySelector("#context-chart");
const contextAge = document.querySelector("#context-age");
const contextStart = document.querySelector("#context-start");
const contextEnd = document.querySelector("#context-end");

function contextGrid() {
  const lines = [];
  for (let x = 0; x <= 70; x += 10) {
    lines.push(`<line x1="${contextMapper.x(x)}" y1="${contextMapper.top}" x2="${contextMapper.x(x)}" y2="${contextMapper.bottom}" class="info-grid-line" />`);
    lines.push(`<text x="${contextMapper.x(x)}" y="${contextMapper.bottom + 25}" text-anchor="middle" class="info-grid-label">${x}</text>`);
  }
  for (let y = 0; y <= 200; y += 50) {
    lines.push(`<line x1="${contextMapper.left}" y1="${contextMapper.y(y)}" x2="${contextMapper.right}" y2="${contextMapper.y(y)}" class="info-grid-line" />`);
    lines.push(`<text x="${contextMapper.left - 12}" y="${contextMapper.y(y) + 4}" text-anchor="end" class="info-grid-label">${y}</text>`);
  }
  lines.push(`<text x="${contextMapper.right}" y="${contextMapper.bottom + 47}" text-anchor="end" class="context-axis-title">age x (years)</text>`);
  lines.push(`<text x="${contextMapper.left}" y="${contextMapper.top - 18}" class="context-axis-title">W (lb)</text>`);
  return lines.join("");
}

function renderContext() {
  const age = Number(contextAge.value);
  const weight = contextValue(age);
  const curve = sample(0, 70, contextValue, 0.2);
  const area = `${pathFromPoints([[0, 0], ...curve, [70, 0]], contextMapper)} Z`;
  contextChart.innerHTML = `
    ${contextGrid()}
    <path d="${area}" class="context-area" />
    <path d="${pathFromPoints(curve, contextMapper)}" class="context-curve" />
    <line x1="${contextMapper.x(age)}" y1="${contextMapper.bottom}" x2="${contextMapper.x(age)}" y2="${contextMapper.y(weight)}" class="context-guide" />
    <circle cx="${contextMapper.x(age)}" cy="${contextMapper.y(weight)}" r="10" class="context-point" />
  `;
  let trend = "Increasing";
  let story = "The quantity is rising as age increases.";
  if (age > 28 && age < 30) { trend = "Decreasing"; story = "The graph records a rapid decrease over this short interval."; }
  else if (nearlyEqual(age, 30)) { trend = "Local minimum"; story = "The graph records a sudden dip and recovery. It does not identify the cause by itself."; }
  else if (age === 28) { trend = "Local maximum"; story = "Increasing changes to decreasing here."; }
  document.querySelector("#context-age-output").textContent = signed(age, 0);
  document.querySelector("#context-trend").textContent = trend;
  document.querySelector("#context-weight").textContent = `W(${signed(age, 0)}) ≈ ${signed(weight, 0)} lb`;
  document.querySelector("#context-story").textContent = story;
}

function renderNetChange() {
  const start = Math.max(0, Math.min(70, Number(contextStart.value)));
  const end = Math.max(0, Math.min(70, Number(contextEnd.value)));
  const initial = contextValue(start);
  const final = contextValue(end);
  const change = final - initial;
  document.querySelector("#context-net-change").innerHTML = `W(${signed(end, 0)}) − W(${signed(start, 0)}) = ${signed(final, 0)} − ${signed(initial, 0)} = <strong>${signed(change, 0)} lb</strong>`;
}

contextAge.addEventListener("input", renderContext);
contextStart.addEventListener("input", renderNetChange);
contextEnd.addEventListener("input", renderNetChange);
renderContext();
renderNetChange();

const radicalMapper = createMapper({ width: 520, height: 520, padding: 55, xMin: -6, xMax: 6, yMin: -6, yMax: 6, equalScale: true });
const radicalChart = document.querySelector("#radical-chart");
const radicalInput = document.querySelector("#radical-x");
let radicalCase = "shifted";
const radicalCases = {
  shifted: {
    formula: "f(x) = √(x + 2)", constraint: "x + 2 ≥ 0  ⟹  x ≥ −2", domain: "[−2, ∞)", range: "[0, ∞)",
    evaluate: (x) => x >= -2 ? Math.sqrt(x + 2) : null,
    points: () => sample(-2, 6, (x) => Math.sqrt(x + 2), 0.04),
  },
  semicircle: {
    formula: "f(x) = −√(25 − x²)", constraint: "25 − x² ≥ 0  ⟹  −5 ≤ x ≤ 5", domain: "[−5, 5]", range: "[−5, 0]",
    evaluate: (x) => Math.abs(x) <= 5 ? -Math.sqrt(Math.max(0, 25 - x ** 2)) : null,
    points: () => sample(-5, 5, (x) => -Math.sqrt(Math.max(0, 25 - x ** 2)), 0.03),
  },
};

function renderRadical() {
  const selected = radicalCases[radicalCase];
  const x = Number(radicalInput.value);
  const value = selected.evaluate(x);
  radicalChart.innerHTML = `
    ${gridMarkup(radicalMapper, { light: true })}
    ${radicalCase === "semicircle" ? `<circle cx="${radicalMapper.x(0)}" cy="${radicalMapper.y(0)}" r="${radicalMapper.x(5) - radicalMapper.x(0)}" class="radical-circle-guide" />` : ""}
    <path d="${pathFromPoints(selected.points(), radicalMapper)}" class="radical-curve" />
    ${value === null ? "" : `<circle cx="${radicalMapper.x(x)}" cy="${radicalMapper.y(value)}" r="9" class="radical-point" />`}
  `;
  document.querySelector("#radical-formula").textContent = selected.formula;
  document.querySelector("#radical-constraint").textContent = selected.constraint;
  document.querySelector("#radical-domain").textContent = selected.domain;
  document.querySelector("#radical-range").textContent = selected.range;
  document.querySelector("#radical-x-output").textContent = signed(x, 1);
  const result = document.querySelector("#radical-test");
  result.classList.toggle("is-blocked", value === null);
  result.innerHTML = value === null
    ? `<span>Blocked</span><strong>The radicand is negative, so there is no real output.</strong>`
    : `<span>Allowed</span><strong>f(${signed(x, 1)}) = ${signed(value, 2)}</strong>`;
}

document.querySelectorAll("[data-radical]").forEach((button) => button.addEventListener("click", () => {
  radicalCase = button.dataset.radical;
  radicalInput.value = radicalCase === "shifted" ? -2 : 0;
  document.querySelectorAll("[data-radical]").forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
  renderRadical();
}));
radicalInput.addEventListener("input", renderRadical);
renderRadical();

document.querySelector("#check-projection").addEventListener("click", () => {
  const correct = document.querySelector("#check-domain").value === "correct" && document.querySelector("#check-range").value === "correct";
  setFeedback(document.querySelector("#feedback-projection"), correct, correct ? "Correct. Project left-to-right for [−5, 5] and bottom-to-top for [−3, 4]." : "Use the x-axis shadow for domain and the y-axis shadow for range. Filled endpoints are included.");
});

document.querySelector("#check-behavior").addEventListener("click", () => {
  const correct = Number(document.querySelector("#check-minima").value) === 2 && document.querySelector("#check-increasing").value === "correct";
  setFeedback(document.querySelector("#feedback-behavior"), correct, correct ? "Correct. The curve has local minima at x = −1 and x = 3 and rises on three separate intervals." : "A local minimum occurs where decreasing changes to increasing. List intervals using x-values, not y-values.");
});

document.querySelector("#check-radicals").addEventListener("click", () => {
  const correct = document.querySelector("#check-radical-domain").value === "correct" && document.querySelector("#check-radical-range").value === "correct";
  setFeedback(document.querySelector("#feedback-radicals"), correct, correct ? "Correct. Include zero radicands; the negative sign places the semicircle at or below the x-axis." : "Set each radicand greater than or equal to zero. Then use the outside negative sign to determine the output side.");
});

document.querySelector("#check-change").addEventListener("click", () => {
  const correct = nearlyEqual(Number(document.querySelector("#check-net-change").value), 100) && document.querySelector("#check-turn-slope").value === "correct";
  setFeedback(document.querySelector("#feedback-change"), correct, correct ? "Correct. W(20) − W(10) = 150 − 50 = 100, and a smooth local maximum has a horizontal tangent." : "Net change is final minus initial. At a smooth turning point, the tangent is horizontal.");
});

initLessonChrome();
