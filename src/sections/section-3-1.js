import "../assets/sass/lesson.sass";
import {
  initLessonChrome,
  nearlyEqual,
  renderLessonFooter,
  renderLessonHeader,
  setFeedback,
} from "./shared";

const root = document.querySelector("#app");

const math = (content, display = false) =>
  `<span class="native-math${display ? " native-math--display" : ""}">${content}</span>`;

root.innerHTML = `
  ${renderLessonHeader("3.1")}
  <main>
    <section class="lesson-hero lesson-hero--quadratics">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 3.1</span> Quadratic functions and models</p>
        <h1>Find the turn.<br><em>Read the whole curve.</em></h1>
        <p class="lesson-hero__lede">
          A quadratic rises or falls, changes direction exactly once, and carries its most important
          information at the vertex. Learn to move between its equation, graph, and meaning.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#shape-lab">Open the drafting studio</a>
          <span>About 50 minutes · interactive</span>
        </div>
      </div>
      <div class="quadratic-hero-art" aria-hidden="true" data-reveal>
        <svg viewBox="0 0 620 500">
          <defs>
            <pattern id="quadratic-hero-grid" width="38" height="38" patternUnits="userSpaceOnUse">
              <path d="M38 0H0V38" fill="none" stroke="currentColor" stroke-width="1" />
            </pattern>
            <linearGradient id="quadratic-hero-curve" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stop-color="#ff6b48" />
              <stop offset="1" stop-color="#ffd166" />
            </linearGradient>
          </defs>
          <rect x="38" y="35" width="544" height="408" rx="20" class="quadratic-hero-art__paper" />
          <rect x="58" y="55" width="504" height="368" fill="url(#quadratic-hero-grid)" class="quadratic-hero-art__grid" />
          <path d="M310 62V420M60 330H560" class="quadratic-hero-art__axis" />
          <path id="quadratic-hero-path" d="M95 92Q310 688 525 92" class="quadratic-hero-art__curve" />
          <line x1="310" y1="80" x2="310" y2="420" class="quadratic-hero-art__symmetry" />
          <circle id="quadratic-hero-point" cx="310" cy="390" r="10" class="quadratic-hero-art__point" />
          <circle cx="310" cy="390" r="5" class="quadratic-hero-art__vertex" />
        </svg>
        <span class="quadratic-hero-art__label quadratic-hero-art__label--vertex">vertex</span>
        <span class="quadratic-hero-art__label quadratic-hero-art__label--axis">axis of symmetry</span>
        <div class="quadratic-hero-art__formula">${math("<var>f</var>(<var>x</var>) = <var>a</var>(<var>x</var> − <var>h</var>)<sup>2</sup> + <var>k</var>")}</div>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Read a parabola from either form</li>
        <li><span>02</span>Complete the square</li>
        <li><span>03</span>Find intercepts, domain, and range</li>
        <li><span>04</span>Build and optimize quadratic models</li>
      </ol>
    </section>

    <section class="lesson-section" id="shape-lab">
      <div class="quadratic-section-lead">
        <div class="lesson-section__intro" data-reveal>
          <p class="lesson-kicker"><span>01</span> Read the architecture</p>
          <h2>Three numbers<br>shape the parabola.</h2>
          <p>Vertex form exposes the turning point immediately. The sign and size of ${math("<var>a</var>")} control direction and width; ${math("<var>h</var>")} and ${math("<var>k</var>")} place the vertex.</p>
        </div>
        <div class="quadratic-definition" data-reveal>
          <span>Quadratic function</span>
          <strong>${math("<var>f</var>(<var>x</var>) = <var>ax</var><sup>2</sup> + <var>bx</var> + <var>c</var>", true)}</strong>
          <p>${math("<var>a</var> ≠ 0")} ensures the graph bends. Every quadratic has domain ${math("(−∞, ∞)")} and exactly one vertex.</p>
        </div>
      </div>

      <div class="quadratic-shape-lab" data-reveal>
        <div class="quadratic-shape-lab__stage">
          <svg id="shape-chart" viewBox="0 0 660 540" role="img" aria-label="An adjustable parabola on a coordinate plane"></svg>
        </div>
        <div class="quadratic-shape-lab__controls">
          <p class="tool-label">Vertex-form drafting table</p>
          <div class="shape-equation" id="shape-equation"></div>
          <label for="shape-a"><span>Opening and width · ${math("<var>a</var>")}</span><output id="shape-a-output"></output></label>
          <input id="shape-a" type="range" min="-3" max="3" step="0.1" value="1" />
          <label for="shape-h"><span>Horizontal position · ${math("<var>h</var>")}</span><output id="shape-h-output"></output></label>
          <input id="shape-h" type="range" min="-4" max="4" step="0.1" value="-1" />
          <label for="shape-k"><span>Vertical position · ${math("<var>k</var>")}</span><output id="shape-k-output"></output></label>
          <input id="shape-k" type="range" min="-4" max="4" step="0.1" value="2" />
          <div class="shape-presets" aria-label="Parabola presets">
            <button type="button" data-shape-preset="minimum">Minimum</button>
            <button type="button" data-shape-preset="maximum">Maximum</button>
            <button type="button" data-shape-preset="wide">Wide</button>
          </div>
          <dl class="shape-readout">
            <div><dt>Vertex</dt><dd id="shape-vertex"></dd></div>
            <div><dt>Axis</dt><dd id="shape-axis"></dd></div>
            <div><dt>Extremum</dt><dd id="shape-extremum"></dd></div>
            <div><dt>Range</dt><dd id="shape-range"></dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="complete-square">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Reveal the vertex</p>
        <h2>Complete the square.<br>Expose the turn.</h2>
        <p>General form is useful for the vertical intercept. Vertex form is useful for the graph. Completing the square connects them without changing the function.</p>
      </div>

      <div class="square-lab" data-reveal>
        <div class="square-lab__menu">
          <p class="tool-label">Choose an equation</p>
          <div class="square-options" role="tablist" aria-label="Completing-the-square examples">
            <button class="is-active" type="button" data-square-case="monic" role="tab" aria-selected="true">Leading 1</button>
            <button type="button" data-square-case="negative" role="tab" aria-selected="false">Negative leading term</button>
            <button type="button" data-square-case="scaled" role="tab" aria-selected="false">Leading 5</button>
          </div>
          <div class="square-source"><span>Start in general form</span><strong id="square-source"></strong></div>
          <div class="square-recipe">
            <span>Core move</span>
            <p>Factor the leading coefficient from the ${math("<var>x</var>")}-terms. Then add and subtract ${math("(<var>b</var>/2)<sup>2</sup>")} inside the group.</p>
          </div>
        </div>
        <div class="square-lab__workspace">
          <ol class="square-steps" id="square-steps" aria-live="polite"></ol>
          <div class="square-actions">
            <button id="square-next" type="button">Reveal next step</button>
            <button id="square-reset" type="button">Reset</button>
          </div>
          <div class="square-result" id="square-result"></div>
        </div>
      </div>

      <aside class="vertex-shortcut" data-reveal>
        <div><span>Vertex shortcut</span><strong>${math("<var>h</var> = −<span class=\"native-frac\"><span><var>b</var></span><span>2<var>a</var></span></span>")}</strong></div>
        <p>Once ${math("<var>h</var>")} is known, substitute it into the original rule: ${math("<var>k</var> = <var>f</var>(<var>h</var>)")}. This locates the same vertex as completing the square.</p>
      </aside>
    </section>

    <section class="lesson-section lesson-section--soft" id="graph-passport">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Build the graph passport</p>
        <h2>Five facts are enough<br>to sketch with confidence.</h2>
        <p>Use the vertex, axis of symmetry, opening, vertical intercept, and real zeros. Then state the domain and range from the graph’s behavior.</p>
      </div>

      <div class="passport-lab" data-reveal>
        <div class="passport-lab__stage">
          <svg id="passport-chart" viewBox="0 0 660 540" role="img" aria-label="A quadratic graph with its vertex and intercepts marked"></svg>
        </div>
        <div class="passport-lab__controls">
          <p class="tool-label">Graph passport</p>
          <div class="passport-options" role="tablist" aria-label="Quadratics to inspect">
            <button class="is-active" type="button" data-passport="first" role="tab" aria-selected="true">${math("<var>x</var><sup>2</sup> + 8<var>x</var>")}</button>
            <button type="button" data-passport="second" role="tab" aria-selected="false">${math("−3<var>x</var><sup>2</sup> + 6<var>x</var> − 2")}</button>
            <button type="button" data-passport="third" role="tab" aria-selected="false">${math("5<var>x</var><sup>2</sup> + 30<var>x</var> + 4")}</button>
          </div>
          <div class="passport-equation" id="passport-equation"></div>
          <dl class="passport-facts" id="passport-facts"></dl>
          <p class="passport-note" id="passport-note"></p>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="fit-parabola">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Fit the missing coefficient</p>
        <h2>Vertex plus one point<br>determines the parabola.</h2>
        <p>Place the known vertex into vertex form. Then substitute the second point and solve the one remaining equation for ${math("<var>a</var>")}.</p>
      </div>

      <div class="fit-lab" data-reveal>
        <div class="fit-lab__controls">
          <p class="tool-label">Parabola fitter</p>
          <div class="fit-vertex"><span>Fixed vertex</span><strong>${math("(−1, 5)")}</strong></div>
          <label for="fit-x"><span>Point’s ${math("<var>x</var>")}-coordinate</span><output id="fit-x-output">−3</output></label>
          <input id="fit-x" type="range" min="-5" max="3" step="0.1" value="-3" />
          <label for="fit-y"><span>Point’s ${math("<var>y</var>")}-coordinate</span><output id="fit-y-output">−7</output></label>
          <input id="fit-y" type="range" min="-12" max="14" step="0.1" value="-7" />
          <div class="fit-derivation" id="fit-derivation" aria-live="polite"></div>
          <p class="fit-warning" id="fit-warning"></p>
        </div>
        <div class="fit-lab__stage">
          <svg id="fit-chart" viewBox="0 0 660 540" role="img" aria-label="A parabola fitted through a vertex and a second point"></svg>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="models">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>05</span> Optimize the model</p>
        <h2>The vertex answers<br>“how much?” and “when?”</h2>
        <p>When a model opens downward, its vertex is the maximum. Interpret both coordinates: the input that creates the best outcome and the value of that outcome.</p>
      </div>

      <div class="model-tabs" role="tablist" aria-label="Quadratic models" data-reveal>
        <button class="is-active" type="button" data-model="profit" role="tab" aria-selected="true">Daily profit</button>
        <button type="button" data-model="launch" role="tab" aria-selected="false">Vertical launch</button>
      </div>
      <div class="model-lab" data-reveal>
        <div class="model-lab__stage">
          <svg id="model-chart" viewBox="0 0 720 500" role="img" aria-label="A quadratic model graph with a movable point"></svg>
        </div>
        <div class="model-lab__controls">
          <p class="tool-label" id="model-label"></p>
          <div class="model-equation" id="model-equation"></div>
          <p id="model-copy"></p>
          <label for="model-input"><span id="model-input-label"></span><output id="model-input-output"></output></label>
          <input id="model-input" type="range" />
          <div class="model-current" id="model-current"></div>
          <div class="model-maximum" id="model-maximum"></div>
        </div>
      </div>
    </section>

    <section class="lesson-section readiness readiness--quadratics" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>06</span> Final readiness</p>
        <h2>Can you find<br>the turning point?</h2>
        <p>Check the full workflow: rewrite, read, construct, and optimize.</p>
      </div>
      <div class="quadratic-check-grid">
        <article class="quadratic-check" data-reveal>
          <span>Rewrite</span>
          <h3>Choose the vertex form of ${math("<var>f</var>(<var>x</var>) = <var>x</var><sup>2</sup> + 8<var>x</var>")}.</h3>
          <label>Vertex form
            <select id="check-vertex-form"><option value="">Choose…</option><option value="a">(<var>x</var> + 4)<sup>2</sup> + 16</option><option value="correct">(<var>x</var> + 4)<sup>2</sup> − 16</option><option value="b">(<var>x</var> − 4)<sup>2</sup> − 16</option></select>
          </label>
          <button id="check-vertex-form-button" type="button">Check form</button>
          <p class="answer-feedback" id="feedback-vertex-form" aria-live="polite"></p>
        </article>
        <article class="quadratic-check" data-reveal>
          <span>Read the graph</span>
          <h3>For ${math("<var>f</var>(<var>x</var>) = −3<var>x</var><sup>2</sup> + 6<var>x</var> − 2")}, enter the vertex and extreme value.</h3>
          <div class="quadratic-coordinate-answer"><label>${math("<var>h</var>")} <input id="check-vertex-h" type="number" /></label><label>${math("<var>k</var>")} <input id="check-vertex-k" type="number" /></label></div>
          <label>Extreme type <select id="check-extreme"><option value="">Choose…</option><option value="correct">Maximum</option><option value="a">Minimum</option></select></label>
          <button id="check-graph-button" type="button">Check graph facts</button>
          <p class="answer-feedback" id="feedback-graph" aria-live="polite"></p>
        </article>
        <article class="quadratic-check" data-reveal>
          <span>Construct</span>
          <h3>A parabola has vertex ${math("(−1, 5)")} and passes through ${math("(−3, −7)")}. Find ${math("<var>a</var>")}.</h3>
          <label>${math("<var>a</var> =")} <input id="check-fit-a" type="number" step="any" /></label>
          <button id="check-fit-button" type="button">Check coefficient</button>
          <p class="answer-feedback" id="feedback-fit" aria-live="polite"></p>
        </article>
        <article class="quadratic-check" data-reveal>
          <span>Optimize</span>
          <h3>For ${math("<var>P</var>(<var>x</var>) = −0.001<var>x</var><sup>2</sup> + 3<var>x</var> − 1800")}, find the maximizing input and profit.</h3>
          <div class="quadratic-coordinate-answer"><label>Cans <input id="check-profit-x" type="number" /></label><label>Profit $ <input id="check-profit-y" type="number" /></label></div>
          <button id="check-profit-button" type="button">Check maximum</button>
          <p class="answer-feedback" id="feedback-profit" aria-live="polite"></p>
        </article>
      </div>
      <aside class="ready-banner ready-banner--quadratics" data-reveal>
        <span>You are quadratic-ready when</span>
        <p>You can locate the vertex from either form, sketch with intercepts and symmetry, fit a rule to given data, and interpret a model’s maximum or minimum.</p>
        <a href="#shape-lab">Draft another parabola <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${renderLessonFooter({
    previous: { href: "pages/sections/2-8.html", label: "Section 2.8 · Inverse functions" },
    next: { href: "pages/sections/3-2.html", label: "Section 3.2 · Polynomial functions" },
  })}
`;

function formatNumber(value, digits = 2) {
  if (!Number.isFinite(value)) return "undefined";
  if (Math.abs(value) < 1e-10) return "0";
  const rounded = Number(value.toFixed(digits));
  return String(rounded).replace("-", "−");
}

function vertexExpression(a, h, k) {
  const coefficient = a === 1 ? "" : a === -1 ? "−" : formatNumber(a);
  const inside = h === 0 ? "<var>x</var>" : `<var>x</var> ${h > 0 ? "−" : "+"} ${formatNumber(Math.abs(h))}`;
  const constant = k === 0 ? "" : ` ${k > 0 ? "+" : "−"} ${formatNumber(Math.abs(k))}`;
  return `<var>f</var>(<var>x</var>) = ${coefficient}(${inside})<sup>2</sup>${constant}`;
}

function makeMapper({ width, height, padding, xMin, xMax, yMin, yMax, xStep = 1, yStep = 1 }) {
  const insetBoundary = (value, step, direction) => (
    nearlyEqual(value / step, Math.round(value / step))
      ? value + direction * step * 0.5
      : value
  );
  const plotXMin = insetBoundary(xMin, xStep, -1);
  const plotXMax = insetBoundary(xMax, xStep, 1);
  const plotYMin = insetBoundary(yMin, yStep, -1);
  const plotYMax = insetBoundary(yMax, yStep, 1);
  const horizontalIntervals = (plotXMax - plotXMin) / xStep;
  const verticalIntervals = (plotYMax - plotYMin) / yStep;
  const gridSize = Math.min(
    (width - padding * 2) / horizontalIntervals,
    (height - padding * 2) / verticalIntervals,
  );
  const plotWidth = horizontalIntervals * gridSize;
  const plotHeight = verticalIntervals * gridSize;
  const plotLeft = (width - plotWidth) / 2;
  const plotTop = (height - plotHeight) / 2;
  const plotRight = plotLeft + plotWidth;
  const plotBottom = plotTop + plotHeight;

  return {
    x: (value) => plotLeft + ((value - plotXMin) / xStep) * gridSize,
    y: (value) => plotBottom - ((value - plotYMin) / yStep) * gridSize,
    width,
    height,
    padding,
    plotLeft,
    plotTop,
    plotRight,
    plotBottom,
    plotWidth,
    plotHeight,
    gridSize,
    xStep,
    yStep,
    xMin: plotXMin,
    xMax: plotXMax,
    yMin: plotYMin,
    yMax: plotYMax,
  };
}

function graphScaffold(mapper, {
  xStep = mapper.xStep,
  yStep = mapper.yStep,
  xLabel = "x",
  yLabel = "y",
  clipId,
} = {}) {
  const vertical = [];
  const horizontal = [];
  const labels = [];
  const firstX = Math.ceil(mapper.xMin / xStep) * xStep;
  const firstY = Math.ceil(mapper.yMin / yStep) * yStep;
  for (let x = firstX; x <= mapper.xMax + 1e-8; x += xStep) {
    const major = Math.abs(x) < 1e-8;
    const boundary = nearlyEqual(x, mapper.xMin) || nearlyEqual(x, mapper.xMax);
    if (!boundary || major) vertical.push(`<line x1="${mapper.x(x)}" y1="${mapper.plotTop}" x2="${mapper.x(x)}" y2="${mapper.plotBottom}" class="quadratic-grid${major ? " quadratic-grid--axis" : ""}"/>`);
    if (!major && Math.abs(x / xStep) % 2 === 0) labels.push(`<text x="${mapper.x(x)}" y="${mapper.y(0) + 20}" class="quadratic-grid-label" text-anchor="middle">${formatNumber(x)}</text>`);
  }
  for (let y = firstY; y <= mapper.yMax + 1e-8; y += yStep) {
    const major = Math.abs(y) < 1e-8;
    const boundary = nearlyEqual(y, mapper.yMin) || nearlyEqual(y, mapper.yMax);
    if (!boundary || major) horizontal.push(`<line x1="${mapper.plotLeft}" y1="${mapper.y(y)}" x2="${mapper.plotRight}" y2="${mapper.y(y)}" class="quadratic-grid${major ? " quadratic-grid--axis" : ""}"/>`);
    if (!major && Math.abs(y / yStep) % 2 === 0) labels.push(`<text x="${mapper.x(0) - 10}" y="${mapper.y(y) + 4}" class="quadratic-grid-label" text-anchor="end">${formatNumber(y)}</text>`);
  }
  labels.push(`<text x="${mapper.plotRight + 10}" y="${mapper.y(0) + 5}" class="quadratic-axis-label">${xLabel}</text>`);
  labels.push(`<text x="${mapper.x(0)}" y="${mapper.plotTop - 12}" class="quadratic-axis-label" text-anchor="middle">${yLabel}</text>`);
  const curveOverflow = 18;
  const clipPath = clipId
    ? `<defs><clipPath id="${clipId}"><rect x="${mapper.plotLeft - curveOverflow}" y="${mapper.plotTop - curveOverflow}" width="${mapper.plotWidth + curveOverflow * 2}" height="${mapper.plotHeight + curveOverflow * 2}"/></clipPath></defs>`
    : "";
  return `${clipPath}<rect x="${mapper.plotLeft}" y="${mapper.plotTop}" width="${mapper.plotWidth}" height="${mapper.plotHeight}" class="quadratic-plot-bg"/>${vertical.join("")}${horizontal.join("")}${labels.join("")}`;
}

function frameChart(chart, mapper, margin = 30) {
  chart.setAttribute(
    "viewBox",
    `${mapper.plotLeft - margin} ${mapper.plotTop - margin} ${mapper.plotWidth + margin * 2} ${mapper.plotHeight + margin * 2}`,
  );
}

function quadraticPath(mapper, fn, samples = 240, xMin = mapper.xMin, xMax = mapper.xMax) {
  let path = "";
  let drawing = false;
  const margin = (10 / mapper.gridSize) * mapper.yStep;
  for (let index = 0; index <= samples; index += 1) {
    const x = xMin + ((xMax - xMin) * index) / samples;
    const y = fn(x);
    const visible = y >= mapper.yMin - margin && y <= mapper.yMax + margin;
    if (visible) {
      path += `${drawing ? "L" : "M"}${mapper.x(x).toFixed(2)} ${mapper.y(y).toFixed(2)}`;
      drawing = true;
    } else {
      drawing = false;
    }
  }
  return path;
}

const heroPath = document.querySelector("#quadratic-hero-path");
const heroPoint = document.querySelector("#quadratic-hero-point");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const heroLength = heroPath.getTotalLength();
let heroFrame = 0;
let heroStart = 0;

function animateHero(timestamp) {
  const ratio = 0.5 + Math.sin(((timestamp - heroStart) / 9000) * Math.PI * 2) * 0.46;
  const point = heroPath.getPointAtLength(heroLength * ratio);
  heroPoint.setAttribute("cx", point.x);
  heroPoint.setAttribute("cy", point.y);
  heroFrame = requestAnimationFrame(animateHero);
}

function syncHeroMotion() {
  cancelAnimationFrame(heroFrame);
  const point = heroPath.getPointAtLength(heroLength / 2);
  heroPoint.setAttribute("cx", point.x);
  heroPoint.setAttribute("cy", point.y);
  if (reduceMotion.matches) return;
  heroStart = performance.now();
  heroFrame = requestAnimationFrame(animateHero);
}

reduceMotion.addEventListener("change", syncHeroMotion);
syncHeroMotion();

const shapeInputs = {
  a: document.querySelector("#shape-a"),
  h: document.querySelector("#shape-h"),
  k: document.querySelector("#shape-k"),
};

function renderShapeLab() {
  let a = Number(shapeInputs.a.value);
  if (Math.abs(a) < 0.01) {
    a = a < 0 ? -0.25 : 0.25;
    shapeInputs.a.value = String(a);
  }
  const h = Number(shapeInputs.h.value);
  const k = Number(shapeInputs.k.value);
  const mapper = makeMapper({ width: 660, height: 540, padding: 48, xMin: -7, xMax: 7, yMin: -7, yMax: 7 });
  const fn = (x) => a * (x - h) ** 2 + k;
  const chart = document.querySelector("#shape-chart");
  frameChart(chart, mapper, 24);
  chart.innerHTML = `
    ${graphScaffold(mapper, { clipId: "shape-plot-clip" })}
    <line x1="${mapper.x(h)}" y1="${mapper.plotTop}" x2="${mapper.x(h)}" y2="${mapper.plotBottom}" class="quadratic-symmetry"/>
    <path d="${quadraticPath(mapper, fn)}" class="quadratic-curve" clip-path="url(#shape-plot-clip)"/>
    <circle cx="${mapper.x(h)}" cy="${mapper.y(k)}" r="6" class="quadratic-vertex quadratic-vertex--compact"/>
    <text x="${mapper.x(h) + 14}" y="${mapper.y(k) - 14}" class="quadratic-point-label">(${formatNumber(h)}, ${formatNumber(k)})</text>
  `;
  document.querySelector("#shape-equation").innerHTML = math(vertexExpression(a, h, k), true);
  document.querySelector("#shape-a-output").textContent = formatNumber(a);
  document.querySelector("#shape-h-output").textContent = formatNumber(h);
  document.querySelector("#shape-k-output").textContent = formatNumber(k);
  document.querySelector("#shape-vertex").innerHTML = math(`(${formatNumber(h)}, ${formatNumber(k)})`);
  document.querySelector("#shape-axis").innerHTML = math(`<var>x</var> = ${formatNumber(h)}`);
  document.querySelector("#shape-extremum").textContent = `${a > 0 ? "minimum" : "maximum"} ${formatNumber(k)}`;
  document.querySelector("#shape-range").innerHTML = math(a > 0 ? `[${formatNumber(k)}, ∞)` : `(−∞, ${formatNumber(k)}]`);
}

Object.values(shapeInputs).forEach((input) => input.addEventListener("input", renderShapeLab));
const shapePresets = {
  minimum: [1, -1, 2],
  maximum: [-1, 2, 3],
  wide: [0.3, -2, -1],
};
document.querySelectorAll("[data-shape-preset]").forEach((button) => {
  button.addEventListener("click", () => {
    const [a, h, k] = shapePresets[button.dataset.shapePreset];
    shapeInputs.a.value = String(a);
    shapeInputs.h.value = String(h);
    shapeInputs.k.value = String(k);
    renderShapeLab();
  });
});
renderShapeLab();

const squareCases = {
  monic: {
    source: "<var>f</var>(<var>x</var>) = <var>x</var><sup>2</sup> + 8<var>x</var>",
    steps: [
      ["Make room for the square", "<var>f</var>(<var>x</var>) = (<var>x</var><sup>2</sup> + 8<var>x</var> + 16) − 16"],
      ["Factor the perfect square", "<var>f</var>(<var>x</var>) = (<var>x</var> + 4)<sup>2</sup> − 16"],
      ["Read the graph", "vertex (−4, −16) · minimum −16 · axis <var>x</var> = −4"],
    ],
    result: "The added 16 and subtracted 16 cancel, so the function never changed.",
  },
  negative: {
    source: "<var>f</var>(<var>x</var>) = −3<var>x</var><sup>2</sup> + 6<var>x</var> − 2",
    steps: [
      ["Factor from the x-terms", "<var>f</var>(<var>x</var>) = −3(<var>x</var><sup>2</sup> − 2<var>x</var>) − 2"],
      ["Complete inside the group", "<var>f</var>(<var>x</var>) = −3[(<var>x</var> − 1)<sup>2</sup> − 1] − 2"],
      ["Distribute and simplify", "<var>f</var>(<var>x</var>) = −3(<var>x</var> − 1)<sup>2</sup> + 1"],
      ["Read the graph", "vertex (1, 1) · maximum 1 · axis <var>x</var> = 1"],
    ],
    result: "The negative multiplier flips the graph downward and also multiplies the correction term.",
  },
  scaled: {
    source: "<var>f</var>(<var>x</var>) = 5<var>x</var><sup>2</sup> + 30<var>x</var> + 4",
    steps: [
      ["Factor from the x-terms", "<var>f</var>(<var>x</var>) = 5(<var>x</var><sup>2</sup> + 6<var>x</var>) + 4"],
      ["Complete inside the group", "<var>f</var>(<var>x</var>) = 5[(<var>x</var> + 3)<sup>2</sup> − 9] + 4"],
      ["Distribute and simplify", "<var>f</var>(<var>x</var>) = 5(<var>x</var> + 3)<sup>2</sup> − 41"],
      ["Read the graph", "vertex (−3, −41) · minimum −41 · axis <var>x</var> = −3"],
    ],
    result: "Because 5 was factored out, the inside correction contributes 5(−9) = −45.",
  },
};

let squareCase = "monic";
let squareStep = 1;

function renderSquareLab() {
  const selected = squareCases[squareCase];
  document.querySelector("#square-source").innerHTML = math(selected.source);
  document.querySelector("#square-steps").innerHTML = selected.steps.map(([label, equation], index) => `
    <li class="${index < squareStep ? "is-visible" : ""}">
      <span>${index + 1}</span>
      <div><small>${index < squareStep ? label : "Hidden step"}</small><strong>${index < squareStep ? math(equation) : "?"}</strong></div>
    </li>
  `).join("");
  const complete = squareStep === selected.steps.length;
  const next = document.querySelector("#square-next");
  next.disabled = complete;
  next.textContent = complete ? "Vertex revealed" : "Reveal next step";
  document.querySelector("#square-result").textContent = complete ? selected.result : "Keep the equation balanced at every step.";
}

document.querySelectorAll("[data-square-case]").forEach((button) => {
  button.addEventListener("click", () => {
    squareCase = button.dataset.squareCase;
    squareStep = 1;
    document.querySelectorAll("[data-square-case]").forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-selected", String(active));
    });
    renderSquareLab();
  });
});
document.querySelector("#square-next").addEventListener("click", () => {
  squareStep = Math.min(squareCases[squareCase].steps.length, squareStep + 1);
  renderSquareLab();
});
document.querySelector("#square-reset").addEventListener("click", () => {
  squareStep = 1;
  renderSquareLab();
});
renderSquareLab();

const passportCases = {
  first: {
    equation: "<var>f</var>(<var>x</var>) = <var>x</var><sup>2</sup> + 8<var>x</var> = (<var>x</var> + 4)<sup>2</sup> − 16",
    a: 1, h: -4, k: -16, c: 0, roots: [-8, 0],
    bounds: { xMin: -10, xMax: 3, yMin: -20, yMax: 16, yStep: 4 },
    note: "The zeros sit equally far from the symmetry line x = −4.",
  },
  second: {
    equation: "<var>f</var>(<var>x</var>) = −3<var>x</var><sup>2</sup> + 6<var>x</var> − 2 = −3(<var>x</var> − 1)<sup>2</sup> + 1",
    a: -3, h: 1, k: 1, c: -2, roots: [1 - Math.sqrt(3) / 3, 1 + Math.sqrt(3) / 3],
    bounds: { xMin: -3, xMax: 5, yMin: -12, yMax: 5, yStep: 2 },
    note: `The exact zeros are ${math(`1 − <span class="native-frac"><span><span class="native-radical"><span>3</span></span></span><span>3</span></span> and 1 + <span class="native-frac"><span><span class="native-radical"><span>3</span></span></span><span>3</span></span>`)}`,
  },
  third: {
    equation: "<var>f</var>(<var>x</var>) = 5<var>x</var><sup>2</sup> + 30<var>x</var> + 4 = 5(<var>x</var> + 3)<sup>2</sup> − 41",
    a: 5, h: -3, k: -41, c: 4, roots: [(-15 - Math.sqrt(205)) / 5, (-15 + Math.sqrt(205)) / 5],
    bounds: { xMin: -7, xMax: 1, yMin: -48, yMax: 12, yStep: 10 },
    note: `The exact zeros are ${math(`<span class="native-frac"><span>−15 − <span class="native-radical"><span>205</span></span></span><span>5</span></span> and <span class="native-frac"><span>−15 + <span class="native-radical"><span>205</span></span></span><span>5</span></span>`)}`,
  },
};

let passportCase = "first";

function renderPassport() {
  const selected = passportCases[passportCase];
  const { xMin, xMax, yMin, yMax, yStep } = selected.bounds;
  const mapper = makeMapper({ width: 660, height: 540, padding: 52, xMin, xMax, yMin, yMax, xStep: 1, yStep });
  const fn = (x) => selected.a * (x - selected.h) ** 2 + selected.k;
  const chart = document.querySelector("#passport-chart");
  frameChart(chart, mapper, 24);
  chart.innerHTML = `
    ${graphScaffold(mapper, { xStep: 1, yStep, clipId: "passport-plot-clip" })}
    <line x1="${mapper.x(selected.h)}" y1="${mapper.plotTop}" x2="${mapper.x(selected.h)}" y2="${mapper.plotBottom}" class="quadratic-symmetry"/>
    <path d="${quadraticPath(mapper, fn)}" class="quadratic-curve" clip-path="url(#passport-plot-clip)"/>
    <circle cx="${mapper.x(selected.h)}" cy="${mapper.y(selected.k)}" r="9" class="quadratic-vertex"/>
    <circle cx="${mapper.x(0)}" cy="${mapper.y(selected.c)}" r="7" class="quadratic-intercept quadratic-intercept--y"/>
    ${selected.roots.map((rootValue) => `<circle cx="${mapper.x(rootValue)}" cy="${mapper.y(0)}" r="7" class="quadratic-intercept"/>`).join("")}
  `;
  document.querySelector("#passport-equation").innerHTML = math(selected.equation, true);
  document.querySelector("#passport-facts").innerHTML = `
    <div><dt>Vertex</dt><dd>${math(`(${formatNumber(selected.h)}, ${formatNumber(selected.k)})`)}</dd></div>
    <div><dt>Axis</dt><dd>${math(`<var>x</var> = ${formatNumber(selected.h)}`)}</dd></div>
    <div><dt>Opening</dt><dd>${selected.a > 0 ? "upward" : "downward"}</dd></div>
    <div><dt>${math("<var>y</var>")}-intercept</dt><dd>${math(`(0, ${formatNumber(selected.c)})`)}</dd></div>
    <div><dt>${math("<var>x</var>")}-intercepts</dt><dd>${selected.roots.map((value) => formatNumber(value, 3)).join(", ")}</dd></div>
    <div><dt>Domain</dt><dd>${math("(−∞, ∞)")}</dd></div>
    <div><dt>Range</dt><dd>${math(selected.a > 0 ? `[${formatNumber(selected.k)}, ∞)` : `(−∞, ${formatNumber(selected.k)}]`)}</dd></div>
  `;
  document.querySelector("#passport-note").innerHTML = selected.note;
}

document.querySelectorAll("[data-passport]").forEach((button) => {
  button.addEventListener("click", () => {
    passportCase = button.dataset.passport;
    document.querySelectorAll("[data-passport]").forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-selected", String(active));
    });
    renderPassport();
  });
});
renderPassport();

const fitX = document.querySelector("#fit-x");
const fitY = document.querySelector("#fit-y");

function renderFitLab() {
  const x = Number(fitX.value);
  const y = Number(fitY.value);
  const h = -1;
  const k = 5;
  const denominator = (x - h) ** 2;
  const valid = denominator > 0 && !nearlyEqual(y, k);
  const a = denominator > 0 ? (y - k) / denominator : Number.NaN;
  document.querySelector("#fit-x-output").textContent = formatNumber(x);
  document.querySelector("#fit-y-output").textContent = formatNumber(y);
  const derivation = document.querySelector("#fit-derivation");
  const warning = document.querySelector("#fit-warning");
  if (!Number.isFinite(a)) {
    derivation.innerHTML = math("5 = <var>a</var>(−1 + 1)<sup>2</sup> + 5", true);
    warning.textContent = "Choose a point with a different x-coordinate. The vertex itself does not determine the width.";
  } else {
    derivation.innerHTML = `
      <span>${math(`${formatNumber(y)} = <var>a</var>(${formatNumber(x)} + 1)<sup>2</sup> + 5`)}</span>
      <span>${math(`<var>a</var> = <span class=\"native-frac\"><span>${formatNumber(y)} − 5</span><span>(${formatNumber(x)} + 1)<sup>2</sup></span></span> = ${formatNumber(a, 3)}`)}</span>
      <strong>${math(vertexExpression(a, h, k))}</strong>
    `;
    warning.textContent = valid ? "The vertex and selected point now lie on the same quadratic." : "When a = 0, the result is a horizontal line—not a quadratic. Move the point above or below the vertex.";
  }
  const mapper = makeMapper({ width: 660, height: 540, padding: 48, xMin: -6, xMax: 4, yMin: -15, yMax: 16, xStep: 1, yStep: 5 });
  const fn = (value) => a * (value - h) ** 2 + k;
  const chart = document.querySelector("#fit-chart");
  frameChart(chart, mapper, 24);
  chart.innerHTML = `
    ${graphScaffold(mapper, { xStep: 1, yStep: 5, clipId: "fit-plot-clip" })}
    <line x1="${mapper.x(h)}" y1="${mapper.plotTop}" x2="${mapper.x(h)}" y2="${mapper.plotBottom}" class="quadratic-symmetry"/>
    ${Number.isFinite(a) ? `<path d="${quadraticPath(mapper, fn)}" class="quadratic-curve${valid ? "" : " is-invalid"}" clip-path="url(#fit-plot-clip)"/>` : ""}
    <circle cx="${mapper.x(h)}" cy="${mapper.y(k)}" r="10" class="quadratic-vertex"/>
    <circle cx="${mapper.x(x)}" cy="${mapper.y(y)}" r="9" class="quadratic-fit-point"/>
    <text x="${mapper.x(h) + 12}" y="${mapper.y(k) - 14}" class="quadratic-point-label">vertex</text>
    <text x="${mapper.x(x) + 12}" y="${mapper.y(y) - 14}" class="quadratic-point-label">point</text>
  `;
}

fitX.addEventListener("input", renderFitLab);
fitY.addEventListener("input", renderFitLab);
renderFitLab();

const modelCases = {
  profit: {
    label: "Profit optimizer",
    equation: "<var>P</var>(<var>x</var>) = −0.001<var>x</var><sup>2</sup> + 3<var>x</var> − 1800",
    copy: "Move through possible daily sales. The graph peaks where the increasing revenue is exactly balanced by the quadratic cost pressure.",
    inputLabel: "Cans sold",
    min: 0, max: 3000, step: 25, initial: 800,
    inputUnit: " cans",
    xMin: 0, xMax: 3000, yMin: -1800, yMax: 600,
    xStep: 500, yStep: 300,
    fn: (x) => -0.001 * x ** 2 + 3 * x - 1800,
    vertexX: 1500, vertexY: 450,
    current: (x, y) => `At ${formatNumber(x, 0)} cans, profit is $${formatNumber(y, 0)}.`,
    maximum: "Maximum profit: $450 when 1,500 cans are sold.",
    xLabel: "cans", yLabel: "$",
  },
  launch: {
    label: "Vertical-motion model",
    equation: "<var>h</var>(<var>t</var>) = −16<var>t</var><sup>2</sup> + 80<var>t</var> + 6",
    copy: "An object starts 6 feet above the ground and rises at 80 feet per second. The model ignores air resistance.",
    inputLabel: "Time after launch",
    min: 0, max: 5.07, step: 0.01, initial: 1,
    inputUnit: " s",
    xMin: 0, xMax: 5.1, yMin: 0, yMax: 120,
    xStep: 1, yStep: 20,
    fn: (x) => -16 * x ** 2 + 80 * x + 6,
    vertexX: 2.5, vertexY: 106,
    current: (x, y) => `At ${formatNumber(x, 1)} seconds, the height is ${formatNumber(y, 1)} feet.`,
    maximum: "Maximum height: 106 feet after 2.5 seconds.",
    xLabel: "time", yLabel: "feet",
  },
};

let modelCase = "profit";
const modelInput = document.querySelector("#model-input");

function configureModel() {
  const selected = modelCases[modelCase];
  modelInput.min = selected.min;
  modelInput.max = selected.max;
  modelInput.step = selected.step;
  modelInput.value = selected.initial;
  document.querySelector("#model-label").textContent = selected.label;
  document.querySelector("#model-equation").innerHTML = math(selected.equation, true);
  document.querySelector("#model-copy").textContent = selected.copy;
  document.querySelector("#model-input-label").textContent = selected.inputLabel;
  document.querySelector("#model-maximum").textContent = selected.maximum;
  renderModel();
}

function renderModel() {
  const selected = modelCases[modelCase];
  const x = Number(modelInput.value);
  const y = selected.fn(x);
  const mapper = makeMapper({
    width: 720,
    height: 500,
    padding: 58,
    xMin: selected.xMin,
    xMax: selected.xMax,
    yMin: selected.yMin,
    yMax: selected.yMax,
    xStep: selected.xStep,
    yStep: selected.yStep,
  });
  const chart = document.querySelector("#model-chart");
  frameChart(chart, mapper);
  chart.innerHTML = `
    ${graphScaffold(mapper, { xStep: selected.xStep, yStep: selected.yStep, xLabel: selected.xLabel, yLabel: selected.yLabel, clipId: "model-plot-clip" })}
    <path d="${quadraticPath(mapper, selected.fn, 240, selected.xMin, selected.xMax)}" class="quadratic-model-curve" clip-path="url(#model-plot-clip)"/>
    <line x1="${mapper.x(selected.vertexX)}" y1="${mapper.y(selected.vertexY)}" x2="${mapper.x(selected.vertexX)}" y2="${mapper.y(selected.yMin)}" class="quadratic-model-guide"/>
    <circle cx="${mapper.x(selected.vertexX)}" cy="${mapper.y(selected.vertexY)}" r="10" class="quadratic-model-maximum"/>
    <circle cx="${mapper.x(x)}" cy="${mapper.y(y)}" r="9" class="quadratic-model-point"/>
  `;
  document.querySelector("#model-input-output").textContent = `${formatNumber(x, modelCase === "profit" ? 0 : 2)}${selected.inputUnit}`;
  document.querySelector("#model-current").textContent = selected.current(x, y);
}

document.querySelectorAll("[data-model]").forEach((button) => {
  button.addEventListener("click", () => {
    modelCase = button.dataset.model;
    document.querySelectorAll("[data-model]").forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-selected", String(active));
    });
    configureModel();
  });
});
modelInput.addEventListener("input", renderModel);
configureModel();

document.querySelector("#check-vertex-form-button").addEventListener("click", () => {
  const correct = document.querySelector("#check-vertex-form").value === "correct";
  setFeedback(document.querySelector("#feedback-vertex-form"), correct, correct
    ? "Correct. Half of 8 is 4, and adding then subtracting 16 gives a vertex at (−4, −16)."
    : "Half the x-coefficient, square it, and remember to subtract the same amount outside the square.");
});

document.querySelector("#check-graph-button").addEventListener("click", () => {
  const correct = nearlyEqual(Number(document.querySelector("#check-vertex-h").value), 1)
    && nearlyEqual(Number(document.querySelector("#check-vertex-k").value), 1)
    && document.querySelector("#check-extreme").value === "correct";
  setFeedback(document.querySelector("#feedback-graph"), correct, correct
    ? "Correct. The vertex is (1, 1), and the negative leading coefficient makes 1 the maximum value."
    : "Use h = −b/(2a), then evaluate f(h). A negative leading coefficient means the graph opens downward.");
});

document.querySelector("#check-fit-button").addEventListener("click", () => {
  const correct = nearlyEqual(Number(document.querySelector("#check-fit-a").value), -3);
  setFeedback(document.querySelector("#feedback-fit"), correct, correct
    ? "Correct. −7 = a(−3 + 1)² + 5 gives −12 = 4a, so a = −3."
    : "Start with y = a(x + 1)² + 5 and substitute the point (−3, −7). Then solve for a.");
});

document.querySelector("#check-profit-button").addEventListener("click", () => {
  const correct = nearlyEqual(Number(document.querySelector("#check-profit-x").value), 1500)
    && nearlyEqual(Number(document.querySelector("#check-profit-y").value), 450);
  setFeedback(document.querySelector("#feedback-profit"), correct, correct
    ? "Correct. The vertex is (1,500, 450): selling 1,500 cans produces a maximum daily profit of $450."
    : "First compute x = −b/(2a). Then substitute that x-value into P to find the maximum profit.");
});

initLessonChrome();
