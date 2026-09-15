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
const fraction = (top, bottom) =>
  `<span class="native-frac"><span>${top}</span><span>${bottom}</span></span>`;

root.innerHTML = `
  ${renderLessonHeader("3.6")}
  <main>
    <section class="lesson-hero lesson-hero--rational">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 3.6</span> Rational functions</p>
        <h1>Map the gaps.<br><em>Follow the approach.</em></h1>
        <p class="lesson-hero__lede">
          A rational graph is shaped by the inputs it cannot use. Some forbidden addresses become
          infinite walls; others leave a single removable hole. Factoring tells you which is which.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#domain-gate">Open the asymptote radar</a>
          <span>About 50 minutes · interactive</span>
        </div>
      </div>
      <div class="rational-hero-art" aria-hidden="true" data-reveal>
        <svg viewBox="0 0 660 510">
          <defs>
            <pattern id="rational-hero-grid" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M36 0H0V36" fill="none" stroke="currentColor" stroke-width="1" />
            </pattern>
            <linearGradient id="rational-hero-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#42b8d5" />
              <stop offset="1" stop-color="#ff6b48" />
            </linearGradient>
          </defs>
          <rect x="42" y="38" width="576" height="420" rx="20" class="rational-hero-art__paper" />
          <rect x="62" y="58" width="536" height="380" fill="url(#rational-hero-grid)" class="rational-hero-art__grid" />
          <path d="M70 275H592M330 64V432" class="rational-hero-art__axis" />
          <line x1="205" y1="65" x2="205" y2="430" class="rational-hero-art__asymptote" />
          <line x1="455" y1="65" x2="455" y2="430" class="rational-hero-art__asymptote" />
          <path d="M72 290C132 302 180 330 199 423M211 66C228 143 265 250 326 274C372 292 417 329 448 424M462 66C478 153 520 242 590 258" class="rational-hero-art__curve" />
          <circle cx="330" cy="274" r="8" class="rational-hero-art__zero" />
          <circle id="rational-hero-point" cx="462" cy="66" r="10" class="rational-hero-art__point" />
        </svg>
        <span class="rational-hero-art__tag rational-hero-art__tag--wall">vertical asymptote</span>
        <span class="rational-hero-art__tag rational-hero-art__tag--end">horizontal approach</span>
        <div class="rational-hero-art__formula">${math(`<var>f</var>(<var>x</var>) = ${fraction("<var>P</var>(<var>x</var>)", "<var>Q</var>(<var>x</var>)")}`)}</div>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Find the domain of a rational function</li>
        <li><span>02</span>Read one-sided asymptotic behavior</li>
        <li><span>03</span>Distinguish holes from vertical walls</li>
        <li><span>04</span>Analyze and sketch a complete graph</li>
      </ol>
    </section>

    <section class="lesson-section" id="domain-gate">
      <div class="rational-section-lead">
        <div class="lesson-section__intro" data-reveal>
          <p class="lesson-kicker"><span>01</span> Guard the denominator</p>
          <h2>The denominator<br>must never be zero.</h2>
          <p>A rational function is a ratio of polynomials. Its domain contains every real input except the zeros of the original denominator—even if a common factor later cancels.</p>
        </div>
        <div class="rational-definition" data-reveal>
          <span>Rational function</span>
          <strong>${math(`<var>f</var>(<var>x</var>) = ${fraction("<var>P</var>(<var>x</var>)", "<var>Q</var>(<var>x</var>)")}, &nbsp;<var>Q</var>(<var>x</var>) ≠ 0`, true)}</strong>
          <p>The numerator may equal zero—that creates an intercept. A zero denominator creates a missing input.</p>
        </div>
      </div>

      <div class="domain-lab" data-reveal>
        <div class="domain-lab__cases" role="tablist" aria-label="Rational functions to test">
          <button class="is-active" type="button" data-domain-case="single" role="tab" aria-selected="true">${math(`${fraction("4", "<var>x</var> + 2")}`)}</button>
          <button type="button" data-domain-case="hole" role="tab" aria-selected="false">${math(`${fraction("<var>x</var><sup>2</sup> − 4", "<var>x</var> − 2")}`)}</button>
          <button type="button" data-domain-case="all" role="tab" aria-selected="false">${math(`${fraction("<var>x</var> + 1", "<var>x</var><sup>2</sup> + 1")}`)}</button>
        </div>
        <div class="domain-lab__gate">
          <p class="tool-label">Domain gate</p>
          <div class="domain-equation" id="domain-equation"></div>
          <label for="domain-input"><span>Test ${math("<var>x</var> =")}</span><output id="domain-input-output"></output></label>
          <input id="domain-input" type="range" min="-5" max="5" step="0.25" value="0" />
          <div class="domain-denominator" id="domain-denominator"></div>
          <div class="domain-verdict" id="domain-verdict" aria-live="polite"></div>
          <p class="domain-rule" id="domain-rule"></p>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="approach">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Approach from one side</p>
        <h2>Near a vertical wall,<br>direction matters.</h2>
        <p>${math("<var>x</var> → <var>a</var><sup>−</sup>")} means approach ${math("<var>a</var>")} from smaller values; ${math("<var>x</var> → <var>a</var><sup>+</sup>")} means approach from larger values. The two sides can head toward opposite infinities.</p>
      </div>

      <div class="approach-lab" data-reveal>
        <div class="approach-lab__stage">
          <svg id="approach-chart" viewBox="0 0 720 540" role="img" aria-label="A rational graph with two vertical asymptotes and a movable approach point"></svg>
        </div>
        <div class="approach-lab__controls">
          <p class="tool-label">One-sided approach microscope</p>
          <div class="approach-equation">${math(`<var>g</var>(<var>x</var>) = ${fraction("<var>x</var>", "(<var>x</var> + 3)(<var>x</var> − 1)")}`, true)}</div>
          <fieldset><legend>Vertical asymptote</legend><div class="approach-choice" role="radiogroup" aria-label="Vertical asymptote"><button class="is-active" type="button" data-approach-wall="-3" role="radio" aria-checked="true">${math("<var>x</var> = −3")}</button><button type="button" data-approach-wall="1" role="radio" aria-checked="false">${math("<var>x</var> = 1")}</button></div></fieldset>
          <fieldset><legend>Approach side</legend><div class="approach-choice" role="radiogroup" aria-label="Approach side"><button class="is-active" type="button" data-approach-side="left" role="radio" aria-checked="true">From the left · ${math("−")}</button><button type="button" data-approach-side="right" role="radio" aria-checked="false">From the right · ${math("+")}</button></div></fieldset>
          <label for="approach-distance"><span>Distance from the wall</span><output id="approach-distance-output"></output></label>
          <input id="approach-distance" type="range" min="0" max="100" step="1" value="35" />
          <div class="approach-reading" id="approach-reading"></div>
          <div class="approach-limit" id="approach-limit" aria-live="polite"></div>
        </div>
      </div>

      <div class="asymptote-facts" data-reveal>
        <article><span>Vertical asymptote</span><strong>${math("<var>x</var> = <var>a</var>")}</strong><p>The graph grows without bound near a missing input. The dashed line is not part of the graph.</p></article>
        <article><span>Horizontal asymptote</span><strong>${math("<var>y</var> = <var>L</var>")}</strong><p>A rational graph has at most one. It approaches that height as ${math("<var>x</var> → ±∞")} but may cross it at finite inputs.</p></article>
        <article><span>End behavior here</span><strong>${math("<var>y</var> → 0")}</strong><p>For ${math("<var>g</var>")}, the denominator’s degree is larger, so both distant ends approach the x-axis.</p></article>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="holes-walls">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Factor before deciding</p>
        <h2>A canceled factor<br>leaves a hole, not a wall.</h2>
        <p>Factor the numerator and denominator completely. A denominator factor that remains creates a vertical asymptote; a common factor that cancels creates a removable hole at the same forbidden input.</p>
      </div>

      <div class="discontinuity-lab" data-reveal>
        <div class="discontinuity-lab__menu">
          <p class="tool-label">Hole-or-wall analyzer</p>
          <div class="discontinuity-options" role="tablist" aria-label="Rational functions to analyze">
            <button class="is-active" type="button" data-discontinuity="two-walls" role="tab" aria-selected="true">Two walls</button>
            <button type="button" data-discontinuity="hole-line" role="tab" aria-selected="false">Canceled line</button>
            <button type="button" data-discontinuity="shifted" role="tab" aria-selected="false">Shifted reciprocal</button>
          </div>
          <div class="discontinuity-source" id="discontinuity-source"></div>
          <div class="discontinuity-factor" id="discontinuity-factor"></div>
          <dl class="discontinuity-results" id="discontinuity-results"></dl>
          <p class="discontinuity-note" id="discontinuity-note"></p>
        </div>
        <div class="discontinuity-lab__stage">
          <svg id="discontinuity-chart" viewBox="0 0 700 540" role="img" aria-label="Selected rational function with asymptotes or holes marked"></svg>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="horizontal-rule">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Compare degrees</p>
        <h2>At the horizon,<br>only leading terms survive.</h2>
        <p>Let ${math("<var>n</var>")} be the numerator degree and ${math("<var>m</var>")} the denominator degree. Their comparison determines whether a horizontal asymptote exists.</p>
      </div>

      <div class="horizon-lab" data-reveal>
        <div class="horizon-lab__controls">
          <p class="tool-label">Horizontal-asymptote engine</p>
          <label for="horizon-n"><span>Numerator degree ${math("<var>n</var>")}</span><output id="horizon-n-output">1</output></label>
          <input id="horizon-n" type="range" min="0" max="5" step="1" value="1" />
          <label for="horizon-m"><span>Denominator degree ${math("<var>m</var>")}</span><output id="horizon-m-output">2</output></label>
          <input id="horizon-m" type="range" min="0" max="5" step="1" value="2" />
          <div class="horizon-coefficients" id="horizon-coefficients">
            <label>Leading numerator coefficient <input id="horizon-a" type="number" value="2" step="any" /></label>
            <label>Leading denominator coefficient <input id="horizon-b" type="number" value="1" step="any" /></label>
          </div>
        </div>
        <div class="horizon-lab__result" id="horizon-result" aria-live="polite"></div>
      </div>

      <div class="horizon-rules" data-reveal>
        <article><span>${math("<var>n</var> < <var>m</var>")}</span><strong>${math("<var>y</var> = 0")}</strong><p>The denominator grows faster.</p></article>
        <article><span>${math("<var>n</var> = <var>m</var>")}</span><strong>${math(`<var>y</var> = ${fraction("<var>a</var><sub><var>n</var></sub>", "<var>b</var><sub><var>m</var></sub>")}`)}</strong><p>Use the ratio of leading coefficients.</p></article>
        <article><span>${math("<var>n</var> > <var>m</var>")}</span><strong>No horizontal asymptote</strong><p>The numerator grows at least one power faster.</p></article>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="full-analysis">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>05</span> Run the full analysis</p>
        <h2>Factor, classify,<br>then sketch.</h2>
        <p>A complete graph comes from one ordered workflow: restrictions, cancellation, discontinuities, intercepts, end behavior, and one-sided behavior.</p>
      </div>

      <div class="analysis-lab" data-reveal>
        <div class="analysis-lab__stage">
          <svg id="analysis-chart" viewBox="0 0 720 560" role="img" aria-label="Graph of a rational function with a vertical asymptote and a removable hole"></svg>
          <div class="analysis-legend"><span><i></i>vertical asymptote</span><span><i></i>horizontal asymptote</span><span><i></i>hole</span></div>
        </div>
        <div class="analysis-lab__workspace">
          <p class="tool-label">Complete graph dossier</p>
          <div class="analysis-equation">${math(`<var>f</var>(<var>x</var>) = ${fraction("<var>x</var> − 1", "<var>x</var><sup>2</sup> + 2<var>x</var> − 3")}`, true)}</div>
          <ol class="analysis-steps" id="analysis-steps"></ol>
          <div class="analysis-actions"><button id="analysis-next" type="button">Reveal next step</button><button id="analysis-reset" type="button">Reset</button></div>
          <div class="analysis-summary" id="analysis-summary"></div>
        </div>
      </div>
    </section>

    <section class="lesson-section readiness readiness--rational" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>06</span> Final readiness</p>
        <h2>Can you map<br>every missing input?</h2>
        <p>Check the decisions that determine a rational graph: walls, holes, horizons, and approach directions.</p>
      </div>
      <div class="rational-check-grid">
        <article class="rational-check" data-reveal>
          <span>Two vertical walls</span>
          <h3>Analyze ${math(`<var>f</var>(<var>x</var>) = ${fraction("<var>x</var>", "<var>x</var><sup>2</sup> − 9")}`)}.</h3>
          <label>Vertical asymptotes <select id="check-two-walls"><option value="">Choose…</option><option value="correct">x = −3 and x = 3</option><option value="a">x = 0</option><option value="b">x = 3 only</option></select></label>
          <label>Horizontal asymptote <select id="check-two-walls-horizontal"><option value="">Choose…</option><option value="correct">y = 0</option><option value="a">y = 1</option><option value="b">None</option></select></label>
          <button id="check-two-walls-button" type="button">Check asymptotes</button>
          <p class="answer-feedback" id="feedback-two-walls" aria-live="polite"></p>
        </article>
        <article class="rational-check" data-reveal>
          <span>Removable hole</span>
          <h3>For ${math(`${fraction("<var>x</var><sup>2</sup> − 4", "<var>x</var> − 2")}`)}, locate the missing point.</h3>
          <div class="rational-coordinate-answer"><label>${math("<var>x</var>")} <input id="check-hole-x" type="number" /></label><label>${math("<var>y</var>")} <input id="check-hole-y" type="number" /></label></div>
          <button id="check-hole-button" type="button">Check hole</button>
          <p class="answer-feedback" id="feedback-hole" aria-live="polite"></p>
        </article>
        <article class="rational-check" data-reveal>
          <span>Horizontal rule</span>
          <h3>Find the horizontal asymptote of ${math(`${fraction("5<var>x</var><sup>2</sup> − 1", "2<var>x</var><sup>2</sup> + 7")}`)}.</h3>
          <label>${math("<var>y</var> =")} <input id="check-horizontal-value" type="number" step="any" /></label>
          <button id="check-horizontal-button" type="button">Check height</button>
          <p class="answer-feedback" id="feedback-horizontal" aria-live="polite"></p>
        </article>
        <article class="rational-check" data-reveal>
          <span>Full analysis</span>
          <h3>For ${math(`${fraction("<var>x</var> − 1", "(<var>x</var> + 3)(<var>x</var> − 1)")}`)}, classify both excluded inputs.</h3>
          <label>${math("<var>x</var> = −3")} <select id="check-negative-three"><option value="">Choose…</option><option value="correct">Vertical asymptote</option><option value="a">Hole</option></select></label>
          <label>${math("<var>x</var> = 1")} <select id="check-one"><option value="">Choose…</option><option value="a">Vertical asymptote</option><option value="correct">Hole at y = 1/4</option></select></label>
          <button id="check-full-button" type="button">Check classifications</button>
          <p class="answer-feedback" id="feedback-full" aria-live="polite"></p>
        </article>
      </div>
      <aside class="ready-banner ready-banner--rational" data-reveal>
        <span>You are rational-ready when</span>
        <p>You preserve every original restriction, use cancellation to separate holes from walls, compare degrees for the horizon, and describe each vertical approach from the correct side.</p>
        <a href="#approach">Approach another wall <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${renderLessonFooter({
    previous: { href: "pages/sections/3-2.html", label: "Section 3.2 · Polynomial functions" },
    next: { href: "pages/sections/3-7.html", label: "Section 3.7 · Polynomial and rational inequalities" },
  })}
`;

function formatNumber(value, digits = 3) {
  if (!Number.isFinite(value)) return value > 0 ? "∞" : value < 0 ? "−∞" : "undefined";
  if (Math.abs(value) < 1e-10) return "0";
  return String(Number(value.toFixed(digits))).replace("-", "−");
}

function makeMapper({ width, height, padding, xMin, xMax, yMin, yMax, xStep = 1, yStep = 1 }) {
  const horizontalIntervals = (xMax - xMin) / xStep;
  const verticalIntervals = (yMax - yMin) / yStep;
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
    x: (value) => plotLeft + ((value - xMin) / xStep) * gridSize,
    y: (value) => plotBottom - ((value - yMin) / yStep) * gridSize,
    width, height, padding, plotLeft, plotTop, plotRight, plotBottom, plotWidth, plotHeight,
    gridSize, xStep, yStep, xMin, xMax, yMin, yMax,
  };
}

function graphScaffold(mapper, {
  xStep = mapper.xStep,
  yStep = mapper.yStep,
  labels = true,
  clipId,
} = {}) {
  const lines = [];
  const text = [];
  for (let x = Math.ceil(mapper.xMin / xStep) * xStep; x <= mapper.xMax + 1e-8; x += xStep) {
    const axis = Math.abs(x) < 1e-8;
    const boundary = nearlyEqual(x, mapper.xMin) || nearlyEqual(x, mapper.xMax);
    if (!boundary || axis) lines.push(`<line x1="${mapper.x(x)}" y1="${mapper.plotTop}" x2="${mapper.x(x)}" y2="${mapper.plotBottom}" class="rational-grid${axis ? " rational-grid--axis" : ""}"/>`);
    if (labels && !axis && Math.abs(x / xStep) % 2 === 0) text.push(`<text x="${mapper.x(x)}" y="${mapper.y(0) + 20}" text-anchor="middle" class="rational-grid-label">${formatNumber(x)}</text>`);
  }
  for (let y = Math.ceil(mapper.yMin / yStep) * yStep; y <= mapper.yMax + 1e-8; y += yStep) {
    const axis = Math.abs(y) < 1e-8;
    const boundary = nearlyEqual(y, mapper.yMin) || nearlyEqual(y, mapper.yMax);
    if (!boundary || axis) lines.push(`<line x1="${mapper.plotLeft}" y1="${mapper.y(y)}" x2="${mapper.plotRight}" y2="${mapper.y(y)}" class="rational-grid${axis ? " rational-grid--axis" : ""}"/>`);
    if (labels && !axis && Math.abs(y / yStep) % 2 === 0) text.push(`<text x="${mapper.x(0) - 10}" y="${mapper.y(y) + 4}" text-anchor="end" class="rational-grid-label">${formatNumber(y)}</text>`);
  }
  if (labels) {
    text.push(`<text x="${mapper.plotRight + 10}" y="${mapper.y(0) + 5}" class="rational-axis-label">x</text>`);
    text.push(`<text x="${mapper.x(0)}" y="${mapper.plotTop - 12}" text-anchor="middle" class="rational-axis-label">y</text>`);
  }
  const curveOverflow = 18;
  const clipPath = clipId
    ? `<defs><clipPath id="${clipId}"><rect x="${mapper.plotLeft - curveOverflow}" y="${mapper.plotTop - curveOverflow}" width="${mapper.plotWidth + curveOverflow * 2}" height="${mapper.plotHeight + curveOverflow * 2}"/></clipPath></defs>`
    : "";
  return `${clipPath}<rect x="${mapper.plotLeft}" y="${mapper.plotTop}" width="${mapper.plotWidth}" height="${mapper.plotHeight}" class="rational-plot-bg"/>${lines.join("")}${text.join("")}`;
}

function frameChart(chart, mapper, margin = 24) {
  chart.setAttribute("viewBox", `${mapper.plotLeft - margin} ${mapper.plotTop - margin} ${mapper.plotWidth + margin * 2} ${mapper.plotHeight + margin * 2}`);
}

function rationalPath(mapper, fn, poles = [], samples = 520) {
  let path = "";
  let drawing = false;
  let previousY = null;
  const ySpan = mapper.yMax - mapper.yMin;
  const overflow = (10 / mapper.gridSize) * mapper.yStep;
  for (let index = 0; index <= samples; index += 1) {
    const x = mapper.xMin + ((mapper.xMax - mapper.xMin) * index) / samples;
    const y = fn(x);
    const nearPole = poles.some((pole) => Math.abs(x - pole) < (mapper.xMax - mapper.xMin) / samples * 1.5);
    const visible = Number.isFinite(y) && y >= mapper.yMin - overflow && y <= mapper.yMax + overflow && !nearPole;
    const jumped = previousY !== null && Math.abs(y - previousY) > ySpan * .65;
    if (visible) {
      path += `${drawing && !jumped ? "L" : "M"}${mapper.x(x).toFixed(2)} ${mapper.y(y).toFixed(2)}`;
      drawing = true;
    } else {
      drawing = false;
    }
    previousY = visible ? y : null;
  }
  return path;
}

function asymptoteLines(mapper, vertical = [], horizontal = []) {
  return `${vertical.map((x) => `<line x1="${mapper.x(x)}" y1="${mapper.plotTop}" x2="${mapper.x(x)}" y2="${mapper.plotBottom}" class="rational-asymptote rational-asymptote--vertical"/>`).join("")}${horizontal.map((y) => `<line x1="${mapper.plotLeft}" y1="${mapper.y(y)}" x2="${mapper.plotRight}" y2="${mapper.y(y)}" class="rational-asymptote rational-asymptote--horizontal"/>`).join("")}`;
}

const heroPoint = document.querySelector("#rational-hero-point");
const heroPath = document.querySelector(".rational-hero-art__curve");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const heroLength = heroPath.getTotalLength();
let heroFrame = 0;
let heroStart = 0;

function animateHero(timestamp) {
  const ratio = ((timestamp - heroStart) % 9000) / 9000;
  const point = heroPath.getPointAtLength(heroLength * ratio);
  heroPoint.setAttribute("cx", point.x);
  heroPoint.setAttribute("cy", point.y);
  heroFrame = requestAnimationFrame(animateHero);
}

function syncHeroMotion() {
  cancelAnimationFrame(heroFrame);
  const point = heroPath.getPointAtLength(heroLength * .65);
  heroPoint.setAttribute("cx", point.x);
  heroPoint.setAttribute("cy", point.y);
  if (reducedMotion.matches) return;
  heroStart = performance.now();
  heroFrame = requestAnimationFrame(animateHero);
}

reducedMotion.addEventListener("change", syncHeroMotion);
syncHeroMotion();

const domainCases = {
  single: {
    equation: fraction("4", "<var>x</var> + 2"),
    denominator: (x) => x + 2,
    denominatorMarkup: (x) => `${formatNumber(x)} + 2 = ${formatNumber(x + 2)}`,
    rule: "Domain: all real numbers except x = −2.",
  },
  hole: {
    equation: fraction("<var>x</var><sup>2</sup> − 4", "<var>x</var> − 2"),
    denominator: (x) => x - 2,
    denominatorMarkup: (x) => `${formatNumber(x)} − 2 = ${formatNumber(x - 2)}`,
    rule: "Domain: all real numbers except x = 2. Canceling later does not restore the missing input.",
  },
  all: {
    equation: fraction("<var>x</var> + 1", "<var>x</var><sup>2</sup> + 1"),
    denominator: (x) => x ** 2 + 1,
    denominatorMarkup: (x) => `(${formatNumber(x)})<sup>2</sup> + 1 = ${formatNumber(x ** 2 + 1)}`,
    rule: "Domain: all real numbers. Since x² ≥ 0, the denominator x² + 1 is always positive.",
  },
};
let domainCase = "single";
const domainInput = document.querySelector("#domain-input");

function renderDomain() {
  const selected = domainCases[domainCase];
  const x = Number(domainInput.value);
  const denominator = selected.denominator(x);
  const allowed = !nearlyEqual(denominator, 0, 1e-10);
  document.querySelector("#domain-equation").innerHTML = math(`<var>f</var>(<var>x</var>) = ${selected.equation}`, true);
  document.querySelector("#domain-input-output").textContent = formatNumber(x, 2);
  document.querySelector("#domain-denominator").innerHTML = `<span>Denominator check</span>${math(selected.denominatorMarkup(x), true)}`;
  const verdict = document.querySelector("#domain-verdict");
  verdict.className = `domain-verdict ${allowed ? "is-open" : "is-blocked"}`;
  verdict.innerHTML = `<strong>${allowed ? "Gate open" : "Input blocked"}</strong><p>${allowed ? "The denominator is nonzero, so this input belongs to the domain." : "Division by zero is undefined, so this input is excluded from the domain."}</p>`;
  document.querySelector("#domain-rule").textContent = selected.rule;
}

document.querySelectorAll("[data-domain-case]").forEach((button) => {
  button.addEventListener("click", () => {
    domainCase = button.dataset.domainCase;
    domainInput.value = domainCase === "single" ? "-2" : domainCase === "hole" ? "2" : "0";
    document.querySelectorAll("[data-domain-case]").forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-selected", String(active));
    });
    renderDomain();
  });
});
domainInput.addEventListener("input", renderDomain);
renderDomain();

let approachWall = -3;
let approachSide = "left";
const approachDistance = document.querySelector("#approach-distance");
const approachFn = (x) => x / ((x + 3) * (x - 1));
const approachMapper = makeMapper({ width: 720, height: 540, padding: 54, xMin: -6, xMax: 5, yMin: -7, yMax: 7, xStep: 1, yStep: 2 });

function renderApproach() {
  const distance = 10 ** (-Number(approachDistance.value) / 50);
  const direction = approachSide === "left" ? -1 : 1;
  const x = approachWall + direction * distance;
  const y = approachFn(x);
  const trend = y > 0 ? "∞" : "−∞";
  const visibleY = Math.max(approachMapper.yMin, Math.min(approachMapper.yMax, y));
  const chart = document.querySelector("#approach-chart");
  frameChart(chart, approachMapper);
  chart.innerHTML = `
    ${graphScaffold(approachMapper, { clipId: "rational-approach-clip" })}
    ${asymptoteLines(approachMapper, [-3, 1], [0])}
    <path d="${rationalPath(approachMapper, approachFn, [-3, 1])}" class="rational-curve" clip-path="url(#rational-approach-clip)"/>
    <line x1="${approachMapper.x(x)}" y1="${approachMapper.y(0)}" x2="${approachMapper.x(x)}" y2="${approachMapper.y(visibleY)}" class="approach-guide"/>
    <circle cx="${approachMapper.x(x)}" cy="${approachMapper.y(visibleY)}" r="10" class="approach-point"/>
  `;
  document.querySelector("#approach-distance-output").textContent = formatNumber(distance, 3);
  document.querySelector("#approach-reading").innerHTML = `<span>Current sample</span><strong>${math(`<var>x</var> = ${formatNumber(x, 4)}, &nbsp;<var>g</var>(<var>x</var>) = ${formatNumber(y, 3)}`)}</strong>`;
  document.querySelector("#approach-limit").innerHTML = `<span>Arrow statement</span><strong>${math(`<var>g</var>(<var>x</var>) → ${trend} &nbsp;as&nbsp; <var>x</var> → ${formatNumber(approachWall)}<sup>${approachSide === "left" ? "−" : "+"}</sup>`, true)}</strong><p>Move closer to watch the output’s magnitude grow.</p>`;
}

function bindChoice(attribute, update) {
  document.querySelectorAll(`[data-${attribute}]`).forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute(`data-${attribute}`);
      if (value === null) return;
      update(value);
      document.querySelectorAll(`[data-${attribute}]`).forEach((candidate) => {
        const active = candidate === button;
        candidate.classList.toggle("is-active", active);
        candidate.setAttribute("aria-checked", String(active));
      });
      renderApproach();
    });
  });
}

bindChoice("approach-wall", (value) => { approachWall = Number(value); });
bindChoice("approach-side", (value) => { approachSide = value; });
approachDistance.addEventListener("input", renderApproach);
renderApproach();

const discontinuityCases = {
  "two-walls": {
    source: fraction("<var>x</var>", "<var>x</var><sup>2</sup> − 9"),
    factor: fraction("<var>x</var>", "(<var>x</var> − 3)(<var>x</var> + 3)"),
    fn: (x) => x / (x ** 2 - 9),
    poles: [-3, 3], holes: [], horizontal: [0],
    bounds: { xMin: -6, xMax: 6, yMin: -6, yMax: 6 },
    results: [["Vertical asymptotes", "x = −3, x = 3"], ["Holes", "none"], ["Horizontal asymptote", "y = 0"], ["Intercept", "(0, 0)"]],
    note: "No factor cancels. Both denominator zeros remain infinite walls.",
  },
  "hole-line": {
    source: fraction("<var>x</var><sup>2</sup> − 4", "<var>x</var> − 2"),
    factor: `${fraction("(<var>x</var> − 2)(<var>x</var> + 2)", "<var>x</var> − 2")} = <var>x</var> + 2, &nbsp;<var>x</var> ≠ 2`,
    fn: (x) => x + 2,
    poles: [], holes: [[2, 4]], horizontal: [],
    bounds: { xMin: -6, xMax: 6, yMin: -5, yMax: 8 },
    results: [["Vertical asymptotes", "none"], ["Hole", "(2, 4)"], ["Horizontal asymptote", "none"], ["Simplified graph", "y = x + 2"]],
    note: "The common factor cancels algebraically, but x = 2 remains excluded from the original domain.",
  },
  shifted: {
    source: fraction("2<var>x</var> − 1", "<var>x</var> − 1"),
    factor: `2 + ${fraction("1", "<var>x</var> − 1")}`,
    fn: (x) => (2 * x - 1) / (x - 1),
    poles: [1], holes: [], horizontal: [2],
    bounds: { xMin: -5, xMax: 6, yMin: -6, yMax: 8 },
    results: [["Vertical asymptote", "x = 1"], ["Hole", "none"], ["Horizontal asymptote", "y = 2"], ["Intercepts", "(1/2, 0), (0, 1)"]],
    note: "Equal degrees give the leading-coefficient ratio 2/1 = 2 for the horizontal asymptote.",
  },
};
let discontinuityCase = "two-walls";

function renderDiscontinuity() {
  const selected = discontinuityCases[discontinuityCase];
  const mapper = makeMapper({ width: 700, height: 540, padding: 54, ...selected.bounds, xStep: 1, yStep: 2 });
  document.querySelector("#discontinuity-source").innerHTML = `<span>Original rule</span>${math(`<var>f</var>(<var>x</var>) = ${selected.source}`, true)}`;
  document.querySelector("#discontinuity-factor").innerHTML = `<span>Factor or divide</span>${math(selected.factor, true)}`;
  document.querySelector("#discontinuity-results").innerHTML = selected.results.map(([label, value]) => `<div><dt>${label}</dt><dd>${math(value)}</dd></div>`).join("");
  document.querySelector("#discontinuity-note").textContent = selected.note;
  const chart = document.querySelector("#discontinuity-chart");
  frameChart(chart, mapper);
  chart.innerHTML = `
    ${graphScaffold(mapper, { clipId: "rational-discontinuity-clip" })}
    ${asymptoteLines(mapper, selected.poles, selected.horizontal)}
    <path d="${rationalPath(mapper, selected.fn, selected.poles)}" class="rational-curve" clip-path="url(#rational-discontinuity-clip)"/>
    ${selected.holes.map(([x, y]) => `<circle cx="${mapper.x(x)}" cy="${mapper.y(y)}" r="10" class="rational-hole"/>`).join("")}
  `;
}

document.querySelectorAll("[data-discontinuity]").forEach((button) => {
  button.addEventListener("click", () => {
    discontinuityCase = button.dataset.discontinuity;
    document.querySelectorAll("[data-discontinuity]").forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-selected", String(active));
    });
    renderDiscontinuity();
  });
});
renderDiscontinuity();

const horizonN = document.querySelector("#horizon-n");
const horizonM = document.querySelector("#horizon-m");
const horizonA = document.querySelector("#horizon-a");
const horizonB = document.querySelector("#horizon-b");

function renderHorizon() {
  const n = Number(horizonN.value);
  const m = Number(horizonM.value);
  const a = Number(horizonA.value);
  const b = Number(horizonB.value);
  const equal = n === m;
  document.querySelector("#horizon-n-output").textContent = String(n);
  document.querySelector("#horizon-m-output").textContent = String(m);
  document.querySelector("#horizon-coefficients").classList.toggle("is-relevant", equal);
  let relation;
  let result;
  let explanation;
  if (n < m) {
    relation = `${n} < ${m}`;
    result = "<var>y</var> = 0";
    explanation = "The denominator grows faster, so the quotient shrinks toward zero at both ends.";
  } else if (equal) {
    relation = `${n} = ${m}`;
    result = b === 0 ? "denominator leading coefficient cannot be 0" : `<var>y</var> = ${formatNumber(a / b, 3)}`;
    explanation = b === 0 ? "A leading coefficient must be nonzero." : `The highest-power terms dominate, so their coefficient ratio is ${formatNumber(a, 3)}/${formatNumber(b, 3)}.`;
  } else {
    relation = `${n} > ${m}`;
    result = "no horizontal asymptote";
    explanation = "The numerator grows faster. A slant or polynomial asymptote may exist, but there is no horizontal one.";
  }
  document.querySelector("#horizon-result").innerHTML = `<span>Degree comparison</span><strong>${math(relation)}</strong><i></i><span>Conclusion</span><strong>${math(result, true)}</strong><p>${explanation}</p>`;
}

[horizonN, horizonM, horizonA, horizonB].forEach((control) => control.addEventListener("input", renderHorizon));
renderHorizon();

const analysisSteps = [
  ["Factor the denominator", `${fraction("<var>x</var> − 1", "(<var>x</var> + 3)(<var>x</var> − 1)")}`],
  ["Preserve original restrictions", "<var>x</var> ≠ −3 and <var>x</var> ≠ 1"],
  ["Cancel the common factor", `${fraction("1", "<var>x</var> + 3")}, &nbsp;<var>x</var> ≠ −3, 1`],
  ["Classify the gaps", "vertical asymptote <var>x</var> = −3 · hole at (1, 1/4)"],
  ["Find intercepts", `<var>y</var>-intercept ${fraction("1", "3")} · no <var>x</var>-intercept`],
  ["Finish the behavior", "horizontal asymptote <var>y</var> = 0 · left of −3 falls · right of −3 rises"],
];
let analysisStep = 1;
const analysisFn = (x) => 1 / (x + 3);
const analysisMapper = makeMapper({ width: 720, height: 560, padding: 58, xMin: -8, xMax: 6, yMin: -6, yMax: 6, xStep: 1, yStep: 2 });

function renderAnalysis() {
  const chart = document.querySelector("#analysis-chart");
  frameChart(chart, analysisMapper);
  chart.innerHTML = `
    ${graphScaffold(analysisMapper, { clipId: "rational-analysis-clip" })}
    ${asymptoteLines(analysisMapper, [-3], [0])}
    <path d="${rationalPath(analysisMapper, analysisFn, [-3])}" class="analysis-curve" clip-path="url(#rational-analysis-clip)"/>
    <circle cx="${analysisMapper.x(1)}" cy="${analysisMapper.y(.25)}" r="10" class="rational-hole"/>
    <circle cx="${analysisMapper.x(0)}" cy="${analysisMapper.y(1 / 3)}" r="7" class="analysis-intercept"/>
  `;
  document.querySelector("#analysis-steps").innerHTML = analysisSteps.map(([label, value], index) => `<li class="${index < analysisStep ? "is-visible" : ""}"><span>${index + 1}</span><div><small>${index < analysisStep ? label : "Hidden step"}</small><strong>${index < analysisStep ? math(value) : "?"}</strong></div></li>`).join("");
  const complete = analysisStep === analysisSteps.length;
  const next = document.querySelector("#analysis-next");
  next.disabled = complete;
  next.textContent = complete ? "Analysis complete" : "Reveal next step";
  document.querySelector("#analysis-summary").innerHTML = complete
    ? `<span>Graph fingerprint</span><p>Domain excludes −3 and 1. Range excludes 0 and 1/4. The canceled input remains a hole.</p>`
    : "Reveal the dossier in order; each conclusion depends on the previous factor work.";
}

document.querySelector("#analysis-next").addEventListener("click", () => {
  analysisStep = Math.min(analysisSteps.length, analysisStep + 1);
  renderAnalysis();
});
document.querySelector("#analysis-reset").addEventListener("click", () => {
  analysisStep = 1;
  renderAnalysis();
});
renderAnalysis();

document.querySelector("#check-two-walls-button").addEventListener("click", () => {
  const correct = document.querySelector("#check-two-walls").value === "correct"
    && document.querySelector("#check-two-walls-horizontal").value === "correct";
  setFeedback(document.querySelector("#feedback-two-walls"), correct, correct
    ? "Correct. The denominator factors as (x − 3)(x + 3), and its higher degree makes y = 0 the horizontal asymptote."
    : "Factor x² − 9. Both denominator factors remain, and the numerator degree is smaller than the denominator degree.");
});

document.querySelector("#check-hole-button").addEventListener("click", () => {
  const correct = nearlyEqual(Number(document.querySelector("#check-hole-x").value), 2)
    && nearlyEqual(Number(document.querySelector("#check-hole-y").value), 4);
  setFeedback(document.querySelector("#feedback-hole"), correct, correct
    ? "Correct. Canceling x − 2 leaves y = x + 2, and substituting the excluded input gives the missing point (2, 4)."
    : "Factor the numerator, cancel x − 2, then evaluate the simplified rule at the excluded input x = 2.");
});

document.querySelector("#check-horizontal-button").addEventListener("click", () => {
  const correct = nearlyEqual(Number(document.querySelector("#check-horizontal-value").value), 2.5);
  setFeedback(document.querySelector("#feedback-horizontal"), correct, correct
    ? "Correct. Equal degrees use the ratio of leading coefficients: 5/2."
    : "Both polynomials have degree 2, so divide the numerator’s leading coefficient by the denominator’s.");
});

document.querySelector("#check-full-button").addEventListener("click", () => {
  const correct = document.querySelector("#check-negative-three").value === "correct"
    && document.querySelector("#check-one").value === "correct";
  setFeedback(document.querySelector("#feedback-full"), correct, correct
    ? "Correct. The x + 3 factor remains and creates a wall; x − 1 cancels and leaves the hole (1, 1/4)."
    : "Cancel only common factors. A denominator factor that remains creates a vertical asymptote; a canceled one creates a hole.");
});

initLessonChrome();
