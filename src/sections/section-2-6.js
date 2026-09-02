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
  ${renderLessonHeader("2.6")}
  <main>
    <section class="lesson-hero lesson-hero--transformations">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 2.6</span> Transformations of functions</p>
        <h1>Move the input.<br><em>Move the picture.</em></h1>
        <p class="lesson-hero__lede">
          A few changes inside and outside a function can shift, stretch, compress, or reflect its entire graph.
          Learn to predict the motion before you plot a single point.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#transformation-studio">Transform a graph</a>
          <span>About 45 minutes · interactive</span>
        </div>
      </div>
      <div class="transformation-hero-art" aria-hidden="true" data-reveal>
        <div class="transformation-hero-art__paper"></div>
        <svg viewBox="0 0 620 480">
          <path class="transformation-hero-art__axis" d="M55 248H565M310 55V425" />
          <path class="transformation-hero-art__base" d="M92 334C145 310 174 112 250 177S347 365 405 268S478 105 536 143" />
          <path class="transformation-hero-art__moved" d="M115 279C168 255 197 57 273 122S370 310 428 213S501 50 559 88" />
          <path class="transformation-hero-art__arrow" d="M233 323L277 269M277 269l-5 24M277 269l-24 4" />
        </svg>
        <span class="transformation-hero-art__tag transformation-hero-art__tag--inside">inside → horizontal</span>
        <span class="transformation-hero-art__tag transformation-hero-art__tag--outside">outside → vertical</span>
        <span class="transformation-hero-art__formula">g(x) = a f(b(x − h)) + k</span>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Predict shifts, scales, and reflections</li>
        <li><span>02</span>Map points through a transformation</li>
        <li><span>03</span>Recover a formula from a moved graph</li>
        <li><span>04</span>Prove and use even or odd symmetry</li>
      </ol>
    </section>

    <section class="lesson-section" id="transformation-studio">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>01</span> The transformation studio</p>
        <h2>Outside changes outputs.<br>Inside changes inputs.</h2>
        <p>Use <strong>g(x) = a f(b(x − h)) + k</strong> as a map. The outside numbers a and k control vertical motion; the inside numbers b and h control horizontal motion.</p>
      </div>

      <div class="transformation-studio" data-reveal>
        <div class="transformation-stage">
          <svg id="transformation-chart" viewBox="0 0 720 630" role="img" aria-label="Base function and transformed function on a coordinate grid"></svg>
          <div class="transformation-stage__legend" aria-hidden="true"><span><i></i>f(x)</span><span><i></i>g(x)</span></div>
        </div>
        <div class="transformation-controls">
          <p class="tool-label">Four-control graph machine</p>
          <div class="transformation-formula" id="transformation-formula" aria-live="polite">g(x) = f(x)</div>
          <div class="transformation-control-grid">
            <label for="transform-a"><span><strong>a</strong> Vertical scale</span><output id="transform-a-output">1</output><input id="transform-a" type="range" min="-2" max="2" step="0.1" value="1" /></label>
            <label for="transform-b"><span><strong>b</strong> Horizontal scale</span><output id="transform-b-output">1</output><input id="transform-b" type="range" min="-2" max="2" step="0.1" value="1" /></label>
            <label for="transform-h"><span><strong>h</strong> Left / right</span><output id="transform-h-output">0</output><input id="transform-h" type="range" min="-4" max="4" step="0.1" value="0" /></label>
            <label for="transform-k"><span><strong>k</strong> Down / up</span><output id="transform-k-output">0</output><input id="transform-k" type="range" min="-4" max="4" step="0.1" value="0" /></label>
          </div>
          <div class="transformation-readout" aria-live="polite">
            <article><span>Vertical story</span><strong id="vertical-story">No vertical change</strong><p id="vertical-detail">Outputs stay unchanged.</p></article>
            <article><span>Horizontal story</span><strong id="horizontal-story">No horizontal change</strong><p id="horizontal-detail">Inputs stay unchanged.</p></article>
          </div>
          <button class="transformation-reset" id="transformation-reset" type="button">Reset all controls</button>
        </div>
      </div>

      <div class="point-witness" data-reveal>
        <div>
          <p class="tool-label">Follow one point</p>
          <h3>A point carries the whole rule.</h3>
          <p>If <strong>(u, f(u))</strong> lies on the original graph, then the transformed point is</p>
          <div class="point-witness__rule">(u, f(u)) <span>→</span> (h + u/b, k + a·f(u))</div>
        </div>
        <div class="point-witness__live">
          <label for="witness-u">Choose u <output id="witness-u-output">1</output></label>
          <input id="witness-u" type="range" min="-4" max="4" step="0.1" value="1" />
          <p id="point-witness-result" aria-live="polite">(1, f(1)) → (1, f(1))</p>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="rule-map">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Decode the rule</p>
        <h2>Horizontal instructions<br>run backward.</h2>
        <p>To make the inside equal the old input, solve for the new x. That is why f(x + c) moves left and f(kx) divides every x-coordinate by k.</p>
      </div>

      <div class="rule-map" data-reveal>
        <div class="rule-map__choices" role="tablist" aria-label="Transformation rules">
          <button type="button" class="is-active" data-rule="up"><span>f(x) + c</span><strong>up c</strong></button>
          <button type="button" data-rule="left"><span>f(x + c)</span><strong>left c</strong></button>
          <button type="button" data-rule="vscale"><span>k f(x)</span><strong>vertical × k</strong></button>
          <button type="button" data-rule="hscale"><span>f(kx)</span><strong>horizontal ÷ k</strong></button>
          <button type="button" data-rule="xreflect"><span>−f(x)</span><strong>x-axis reflection</strong></button>
          <button type="button" data-rule="yreflect"><span>f(−x)</span><strong>y-axis reflection</strong></button>
        </div>
        <div class="rule-map__display">
          <div class="rule-map__visual">
            <svg id="rule-map-chart" viewBox="0 0 620 537" role="img" aria-label="A draggable point moving according to the selected transformation rule"></svg>
          </div>
          <div class="rule-map__explanation" aria-live="polite">
            <span id="rule-map-label">Outside addition</span>
            <strong id="rule-map-mapping">(x, y) → (x, y + c)</strong>
            <p id="rule-map-copy">The input is untouched. Add c directly to every output.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="formula-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Work backward from the graph</p>
        <h2>Find the landmark.<br>Then read the shape.</h2>
        <p>The target curve below came from f(x) = x². Match its vertex, opening direction, and width to reconstruct g(x) = a(x − h)² + k.</p>
      </div>

      <div class="formula-lab" data-reveal>
        <div class="formula-lab__stage">
          <svg id="formula-chart" viewBox="0 0 680 680" role="img" aria-label="Target parabola and adjustable guess on a coordinate grid"></svg>
          <div class="formula-lab__legend" aria-hidden="true"><span><i></i>target g</span><span><i></i>your formula</span></div>
        </div>
        <div class="formula-lab__controls">
          <p class="tool-label">Formula builder</p>
          <div class="formula-lab__formula" id="formula-guess">g(x) = (x)²</div>
          <label for="formula-a"><span>Opening and width a</span><output id="formula-a-output">1</output><input id="formula-a" type="range" min="-2" max="2" step="0.1" value="1" /></label>
          <label for="formula-h"><span>Vertex x-coordinate h</span><output id="formula-h-output">0</output><input id="formula-h" type="range" min="-4" max="4" step="0.1" value="0" /></label>
          <label for="formula-k"><span>Vertex y-coordinate k</span><output id="formula-k-output">0</output><input id="formula-k" type="range" min="-4" max="4" step="0.1" value="0" /></label>
          <div class="formula-clues">
            <article><span>01</span><p>The vertex reveals <strong>(h, k)</strong>.</p></article>
            <article><span>02</span><p>Opening down means <strong>a &lt; 0</strong>.</p></article>
            <article><span>03</span><p>A wider graph has <strong>0 &lt; |a| &lt; 1</strong>.</p></article>
          </div>
          <button id="formula-check" type="button">Check my formula</button>
          <p class="answer-feedback" id="formula-feedback" aria-live="polite"></p>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="symmetry-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Even and odd functions</p>
        <h2>Mirror across an axis.<br>Turn through the origin.</h2>
        <p>An even function satisfies f(−x) = f(x) and has y-axis symmetry. An odd function satisfies f(−x) = −f(x) and has origin symmetry.</p>
      </div>

      <div class="symmetry-test-strip" data-reveal>
        <article><span>Even test</span><strong>f(−x) = f(x)</strong><p>(x, y) requires (−x, y)</p></article>
        <article><span>Odd test</span><strong>f(−x) = −f(x)</strong><p>(x, y) requires (−x, −y)</p></article>
        <article><span>Neither</span><strong>Both tests fail</strong><p>No required mirror partner</p></article>
      </div>

      <div class="symmetry-lab" data-reveal>
        <div class="symmetry-lab__stage">
          <svg id="symmetry-chart" viewBox="0 0 680 540" role="img" aria-label="Graph completed using even or odd symmetry"></svg>
          <button id="symmetry-reveal" type="button" aria-pressed="true">Hide mirrored half</button>
        </div>
        <div class="symmetry-lab__controls">
          <p class="tool-label">Symmetry mirror</p>
          <div class="symmetry-options" role="tablist" aria-label="Functions to test">
            <button type="button" class="is-active" data-symmetry="quartic"><span>x⁴ − 4x²</span><strong>Even candidate</strong></button>
            <button type="button" data-symmetry="reciprocal"><span>x + 1/x</span><strong>Odd candidate</strong></button>
            <button type="button" data-symmetry="rational"><span>x/(1 + x²)</span><strong>Classify it</strong></button>
            <button type="button" data-symmetry="shifted"><span>(x − 1)²</span><strong>Neither candidate</strong></button>
          </div>
          <div class="symmetry-proof" aria-live="polite">
            <span id="symmetry-substitution">f(−x) = (−x)⁴ − 4(−x)²</span>
            <strong id="symmetry-simplified">f(−x) = x⁴ − 4x² = f(x)</strong>
            <p id="symmetry-verdict">Even · reflect the known half across the y-axis.</p>
          </div>
          <label for="symmetry-x">Track the point at x = <output id="symmetry-x-output">1.5</output></label>
          <input id="symmetry-x" type="range" min="0.2" max="2.3" step="0.1" value="1.5" />
          <div class="symmetry-point-pair" id="symmetry-point-pair">(1.5, −2.44) pairs with (−1.5, −2.44)</div>
        </div>
      </div>
    </section>

    <section class="lesson-section readiness readiness--transformations" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>05</span> Final readiness</p>
        <h2>Can you predict<br>the whole graph?</h2>
        <p>Read inside and outside separately, then use the correct symmetry partner. Each answer should follow from a rule—not from visual guessing.</p>
      </div>
      <div class="transformation-check-grid">
        <article class="transformation-check" data-reveal>
          <span>Point symmetry</span>
          <h3>An even graph contains (−2, −3).</h3>
          <label>Required partner <select id="check-even-point"><option value="">Choose…</option><option value="a">(2, 3)</option><option value="correct">(2, −3)</option><option value="b">(−2, 3)</option></select></label>
          <button id="check-even" type="button">Check point</button>
          <p class="answer-feedback" id="feedback-even" aria-live="polite"></p>
        </article>
        <article class="transformation-check" data-reveal>
          <span>Odd outputs</span>
          <h3>If f(−2) = 7 and f is odd…</h3>
          <label>f(2) = <input id="check-odd-value" type="number" /></label>
          <button id="check-odd" type="button">Check value</button>
          <p class="answer-feedback" id="feedback-odd" aria-live="polite"></p>
        </article>
        <article class="transformation-check" data-reveal>
          <span>Algebraic test</span>
          <h3>Classify f(x) = x/(1 + x²).</h3>
          <label>Symmetry <select id="check-rational"><option value="">Choose…</option><option value="a">Even</option><option value="correct">Odd</option><option value="b">Neither</option></select></label>
          <button id="check-classification" type="button">Check classification</button>
          <p class="answer-feedback" id="feedback-classification" aria-live="polite"></p>
        </article>
        <article class="transformation-check" data-reveal>
          <span>Transformation language</span>
          <h3>Right 3 units, then up 2 units.</h3>
          <label>Formula <select id="check-transform"><option value="">Choose…</option><option value="a">f(x + 3) + 2</option><option value="correct">f(x − 3) + 2</option><option value="b">f(x − 2) + 3</option></select></label>
          <button id="check-transformation" type="button">Check formula</button>
          <p class="answer-feedback" id="feedback-transformation" aria-live="polite"></p>
        </article>
      </div>
      <aside class="ready-banner ready-banner--transformations" data-reveal>
        <span>You are transformation-ready when</span>
        <p>You can separate horizontal from vertical changes, map a landmark, and prove symmetry with f(−x).</p>
        <a href="#transformation-studio">Run the graph machine again <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${renderLessonFooter({
    previous: { href: "pages/sections/2-3.html", label: "Section 2.3 · Information from graphs" },
    next: null,
  })}
`;

function signed(value, digits = 2) {
  const rounded = Number(value.toFixed(digits));
  if (Math.abs(rounded) < 1e-10) return "0";
  const text = Number.isInteger(rounded) ? String(rounded) : String(rounded);
  return text.startsWith("-") ? `−${text.slice(1)}` : text;
}

function createMapper({ width, height, xMin, xMax, yMin, yMax, padding = 46, equalUnits = true }) {
  const availableWidth = width - padding * 2;
  const availableHeight = height - padding * 2;
  let xScale = availableWidth / (xMax - xMin);
  let yScale = availableHeight / (yMax - yMin);
  let left = padding;
  let top = padding;

  if (equalUnits) {
    const unitScale = Math.min(xScale, yScale);
    xScale = unitScale;
    yScale = unitScale;
    left = (width - (xMax - xMin) * unitScale) / 2;
    top = (height - (yMax - yMin) * unitScale) / 2;
  }

  return {
    width, height, xMin, xMax, yMin, yMax,
    left, right: left + (xMax - xMin) * xScale,
    top, bottom: top + (yMax - yMin) * yScale,
    x: (x) => left + (x - xMin) * xScale,
    y: (y) => top + (yMax - y) * yScale,
  };
}

function expandBoundsToFit({ width, height, xMin, xMax, yMin, yMax, padding }) {
  const frameAspect = (width - padding * 2) / (height - padding * 2);
  const xSpan = xMax - xMin;
  const ySpan = yMax - yMin;
  const dataAspect = xSpan / ySpan;

  if (dataAspect < frameAspect) {
    const expandedSpan = ySpan * frameAspect;
    const center = (xMin + xMax) / 2;
    return { xMin: center - expandedSpan / 2, xMax: center + expandedSpan / 2, yMin, yMax };
  }

  const expandedSpan = xSpan / frameAspect;
  const center = (yMin + yMax) / 2;
  return { xMin, xMax, yMin: center - expandedSpan / 2, yMax: center + expandedSpan / 2 };
}

function gridMarkup(mapper, classPrefix = "transform") {
  const items = [];
  for (let x = Math.ceil(mapper.xMin); x <= mapper.xMax; x += 1) {
    items.push(`<line x1="${mapper.x(x)}" y1="${mapper.top}" x2="${mapper.x(x)}" y2="${mapper.bottom}" class="${classPrefix}-grid-line" />`);
    if (x !== 0 && x % 2 === 0) items.push(`<text x="${mapper.x(x)}" y="${mapper.y(0) + 20}" text-anchor="middle" class="${classPrefix}-grid-label">${signed(x)}</text>`);
  }
  for (let y = Math.ceil(mapper.yMin); y <= mapper.yMax; y += 1) {
    items.push(`<line x1="${mapper.left}" y1="${mapper.y(y)}" x2="${mapper.right}" y2="${mapper.y(y)}" class="${classPrefix}-grid-line" />`);
    if (y !== 0 && y % 2 === 0) items.push(`<text x="${mapper.x(0) + 10}" y="${mapper.y(y) - 7}" class="${classPrefix}-grid-label">${signed(y)}</text>`);
  }
  if (mapper.yMin <= 0 && mapper.yMax >= 0) items.push(`<line x1="${mapper.left}" y1="${mapper.y(0)}" x2="${mapper.right}" y2="${mapper.y(0)}" class="${classPrefix}-axis" />`);
  if (mapper.xMin <= 0 && mapper.xMax >= 0) items.push(`<line x1="${mapper.x(0)}" y1="${mapper.top}" x2="${mapper.x(0)}" y2="${mapper.bottom}" class="${classPrefix}-axis" />`);
  return items.join("");
}

function pointsToPath(points, mapper, overflow = 1) {
  let path = "";
  let drawing = false;
  points.forEach((point) => {
    if (!point || !Number.isFinite(point[1]) || point[1] < mapper.yMin - overflow || point[1] > mapper.yMax + overflow) {
      drawing = false;
      return;
    }
    path += `${drawing ? "L" : "M"}${mapper.x(point[0]).toFixed(2)} ${mapper.y(point[1]).toFixed(2)} `;
    drawing = true;
  });
  return path.trim();
}

function sample(start, end, fn, step = 0.04) {
  const points = [];
  for (let x = start; x <= end + step / 2; x += step) points.push([x, fn(x)]);
  return points;
}

function baseFunction(x) {
  return 0.075 * (x + 3) * x * (x - 2);
}

const transformMapper = createMapper({ width: 720, height: 630, xMin: -7, xMax: 7, yMin: -6, yMax: 6, padding: 50 });
const transformChart = document.querySelector("#transformation-chart");
const aInput = document.querySelector("#transform-a");
const bInput = document.querySelector("#transform-b");
const hInput = document.querySelector("#transform-h");
const kInput = document.querySelector("#transform-k");
const witnessInput = document.querySelector("#witness-u");

function transformState() {
  return {
    a: Number(aInput.value),
    b: Number(bInput.value),
    h: Number(hInput.value),
    k: Number(kInput.value),
  };
}

function coefficient(value, content) {
  if (value === 1) return content;
  if (value === -1) return `−${content}`;
  return `${signed(value)}${content}`;
}

function insideFormula(b, h) {
  const shifted = h === 0 ? "x" : `x ${h > 0 ? "−" : "+"} ${Math.abs(h)}`;
  if (b === 1) return shifted;
  if (b === -1) return `−(${shifted})`;
  return `${signed(b)}(${shifted})`;
}

function transformedFormula({ a, b, h, k }) {
  const core = coefficient(a, `f(${insideFormula(b, h)})`);
  return `g(x) = ${core}${k === 0 ? "" : ` ${k > 0 ? "+" : "−"} ${Math.abs(k)}`}`;
}

function verticalDescription(a, k) {
  const parts = [];
  if (a === 0) parts.push("collapse every output to one level");
  if (a < 0) parts.push("reflect across the x-axis");
  if (Math.abs(a) > 1) parts.push(`stretch by ${signed(Math.abs(a))}`);
  if (Math.abs(a) < 1 && a !== 0) parts.push(`compress by ${signed(Math.abs(a))}`);
  if (k !== 0) parts.push(`shift ${k > 0 ? "up" : "down"} ${Math.abs(k)}`);
  return parts;
}

function horizontalDescription(b, h) {
  const parts = [];
  if (b === 0) parts.push("freeze the function input at 0");
  if (b < 0) parts.push("reflect across the y-axis");
  if (Math.abs(b) > 1) parts.push(`compress by 1/${signed(Math.abs(b))}`);
  if (Math.abs(b) < 1 && b !== 0) parts.push(`stretch by ${signed(1 / Math.abs(b))}`);
  if (h !== 0) parts.push(`shift ${h > 0 ? "right" : "left"} ${Math.abs(h)}`);
  return parts;
}

function renderTransformation() {
  const state = transformState();
  const original = sample(-6, 6, baseFunction);
  const moved = sample(-7, 7, (x) => state.a * baseFunction(state.b * (x - state.h)) + state.k, 0.025);
  const u = Number(witnessInput.value);
  const originalY = baseFunction(u);
  const canMapPoint = state.b !== 0;
  const movedX = canMapPoint ? state.h + u / state.b : null;
  const movedY = state.k + state.a * originalY;
  transformChart.innerHTML = `
    ${gridMarkup(transformMapper)}
    <path d="${pointsToPath(original, transformMapper)}" class="transform-curve transform-curve--base" />
    <path d="${pointsToPath(moved, transformMapper)}" class="transform-curve transform-curve--moved" />
    ${canMapPoint ? `<line x1="${transformMapper.x(u)}" y1="${transformMapper.y(originalY)}" x2="${transformMapper.x(movedX)}" y2="${transformMapper.y(movedY)}" class="transform-point-link" />` : ""}
    <circle cx="${transformMapper.x(u)}" cy="${transformMapper.y(originalY)}" r="7" class="transform-point transform-point--base" />
    ${canMapPoint ? `<circle cx="${transformMapper.x(movedX)}" cy="${transformMapper.y(movedY)}" r="8" class="transform-point transform-point--moved" />` : ""}
  `;
  document.querySelector("#transformation-formula").textContent = transformedFormula(state);
  document.querySelector("#transform-a-output").textContent = signed(state.a);
  document.querySelector("#transform-b-output").textContent = signed(state.b);
  document.querySelector("#transform-h-output").textContent = signed(state.h);
  document.querySelector("#transform-k-output").textContent = signed(state.k);
  const vertical = verticalDescription(state.a, state.k);
  const horizontal = horizontalDescription(state.b, state.h);
  document.querySelector("#vertical-story").textContent = vertical.length ? vertical.join(" · ") : "No vertical change";
  document.querySelector("#vertical-detail").textContent = `y becomes ${signed(state.a)}y ${state.k >= 0 ? "+" : "−"} ${Math.abs(state.k)}.`;
  document.querySelector("#horizontal-story").textContent = horizontal.length ? horizontal.join(" · ") : "No horizontal change";
  document.querySelector("#horizontal-detail").textContent = canMapPoint ? `x becomes h + u/b = ${signed(state.h)} + u/${signed(state.b)}.` : "With b = 0, every x sends the same input 0 into f.";
  document.querySelector("#witness-u-output").textContent = signed(u);
  document.querySelector("#point-witness-result").textContent = canMapPoint ? `(${signed(u)}, ${signed(originalY)}) → (${signed(movedX)}, ${signed(movedY)})` : "b = 0 freezes the input, so this point map is not one-to-one.";
}

[aInput, bInput, hInput, kInput, witnessInput].forEach((input) => input.addEventListener("input", renderTransformation));
document.querySelector("#transformation-reset").addEventListener("click", () => {
  aInput.value = "1";
  bInput.value = "1";
  hInput.value = "0";
  kInput.value = "0";
  witnessInput.value = "1";
  renderTransformation();
});
renderTransformation();

const ruleMapper = createMapper({ width: 620, height: 537, xMin: -7, xMax: 7, yMin: -6, yMax: 6, padding: 21 });
const ruleChart = document.querySelector("#rule-map-chart");
let ruleOrigin = [2, 1];
let activeRuleName = "up";
let isRuleDragging = false;
const ruleCases = {
  up: { label: "Outside addition", mapping: "(x, y) → (x, y + c)", copy: "The input is untouched. Add c directly to every output.", apply: ([x, y]) => [x, y + 2] },
  left: { label: "Inside addition", mapping: "(x, y) → (x − c, y)", copy: "Solve x + c = old input. The new x is c units smaller, so the graph moves left.", apply: ([x, y]) => [x - 2, y] },
  vscale: { label: "Outside multiplication", mapping: "(x, y) → (x, ky)", copy: "Keep x. Multiply the height by k; negative k also reflects across the x-axis.", apply: ([x, y]) => [x, 3 * y] },
  hscale: { label: "Inside multiplication", mapping: "(x, y) → (x/k, y)", copy: "Solve kx = old input. Divide x by k; negative k also reflects across the y-axis.", apply: ([x, y]) => [x / 2, y] },
  xreflect: { label: "Negative outside", mapping: "(x, y) → (x, −y)", copy: "Every output changes sign, producing a reflection across the x-axis.", apply: ([x, y]) => [x, -y] },
  yreflect: { label: "Negative inside", mapping: "(x, y) → (−x, y)", copy: "Every input changes sign, producing a reflection across the y-axis.", apply: ([x, y]) => [-x, y] },
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function constrainRuleOrigin(ruleName, x, y) {
  const snap = (value) => Math.round(value * 10) / 10;
  return [
    snap(clamp(x, -3, 3)),
    snap(clamp(y, -3, 3)),
  ];
}

function ruleCoordinatesFromPointer(event) {
  const svgPoint = ruleChart.createSVGPoint();
  svgPoint.x = event.clientX;
  svgPoint.y = event.clientY;
  const localPoint = svgPoint.matrixTransform(ruleChart.getScreenCTM().inverse());
  const x = ruleMapper.xMin + ((localPoint.x - ruleMapper.left) / (ruleMapper.right - ruleMapper.left)) * (ruleMapper.xMax - ruleMapper.xMin);
  const y = ruleMapper.yMax - ((localPoint.y - ruleMapper.top) / (ruleMapper.bottom - ruleMapper.top)) * (ruleMapper.yMax - ruleMapper.yMin);
  return constrainRuleOrigin(activeRuleName, x, y);
}

function renderRule(ruleName) {
  activeRuleName = ruleName;
  ruleOrigin = constrainRuleOrigin(ruleName, ...ruleOrigin);
  const rule = ruleCases[ruleName];
  const [x1, y1] = ruleOrigin;
  const [x2, y2] = rule.apply(ruleOrigin);
  ruleChart.innerHTML = `
    ${gridMarkup(ruleMapper, "rule")}
    <line x1="${ruleMapper.x(x1)}" y1="${ruleMapper.y(y1)}" x2="${ruleMapper.x(x2)}" y2="${ruleMapper.y(y2)}" class="rule-motion-line" />
    <circle cx="${ruleMapper.x(x1)}" cy="${ruleMapper.y(y1)}" r="12" class="rule-point rule-point--start" tabindex="0" role="button" aria-label="Old point at ${signed(x1)}, ${signed(y1)}. Drag it or use the arrow keys to move it." />
    <circle cx="${ruleMapper.x(x2)}" cy="${ruleMapper.y(y2)}" r="11" class="rule-point rule-point--end" />
    <text x="${ruleMapper.x(x1) + 14}" y="${ruleMapper.y(y1) - 12}" class="rule-point-label">old (${signed(x1)}, ${signed(y1)})</text>
    <text x="${ruleMapper.x(x2) + 14}" y="${ruleMapper.y(y2) + 24}" class="rule-point-label">new (${signed(x2)}, ${signed(y2)})</text>
  `;
  document.querySelector("#rule-map-label").textContent = rule.label;
  document.querySelector("#rule-map-mapping").textContent = rule.mapping;
  document.querySelector("#rule-map-copy").textContent = rule.copy;
}

document.querySelectorAll("[data-rule]").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll("[data-rule]").forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
  renderRule(button.dataset.rule);
}));

ruleChart.addEventListener("pointerdown", (event) => {
  if (!event.target.classList.contains("rule-point--start")) return;
  isRuleDragging = true;
  ruleChart.setPointerCapture(event.pointerId);
  ruleOrigin = ruleCoordinatesFromPointer(event);
  renderRule(activeRuleName);
});

ruleChart.addEventListener("pointermove", (event) => {
  if (!isRuleDragging) return;
  ruleOrigin = ruleCoordinatesFromPointer(event);
  renderRule(activeRuleName);
});

ruleChart.addEventListener("pointerup", (event) => {
  isRuleDragging = false;
  if (ruleChart.hasPointerCapture(event.pointerId)) ruleChart.releasePointerCapture(event.pointerId);
});

ruleChart.addEventListener("pointercancel", () => {
  isRuleDragging = false;
});

ruleChart.addEventListener("keydown", (event) => {
  if (!event.target.classList.contains("rule-point--start") || !event.key.startsWith("Arrow")) return;
  event.preventDefault();
  const step = event.shiftKey ? 1 : 0.1;
  const moves = {
    ArrowLeft: [-step, 0],
    ArrowRight: [step, 0],
    ArrowUp: [0, step],
    ArrowDown: [0, -step],
  };
  const [dx, dy] = moves[event.key];
  ruleOrigin = constrainRuleOrigin(activeRuleName, ruleOrigin[0] + dx, ruleOrigin[1] + dy);
  renderRule(activeRuleName);
  ruleChart.querySelector(".rule-point--start").focus();
});

renderRule("up");

const formulaMapper = createMapper({ width: 680, height: 680, xMin: -6, xMax: 6, yMin: -6, yMax: 6, padding: 50 });
const formulaChart = document.querySelector("#formula-chart");
const formulaA = document.querySelector("#formula-a");
const formulaH = document.querySelector("#formula-h");
const formulaK = document.querySelector("#formula-k");
const targetFormula = { a: -0.5, h: 2, k: 3 };

function formulaState() {
  return { a: Number(formulaA.value), h: Number(formulaH.value), k: Number(formulaK.value) };
}

function parabolaFormula({ a, h, k }) {
  const inside = h === 0 ? "x" : `x ${h > 0 ? "−" : "+"} ${Math.abs(h)}`;
  const leading = a === 1 ? "" : a === -1 ? "−" : signed(a);
  return `g(x) = ${leading}(${inside})²${k === 0 ? "" : ` ${k > 0 ? "+" : "−"} ${Math.abs(k)}`}`;
}

function renderFormulaLab() {
  const guess = formulaState();
  const targetPoints = sample(-6, 6, (x) => targetFormula.a * (x - targetFormula.h) ** 2 + targetFormula.k, 0.03);
  const guessPoints = sample(-6, 6, (x) => guess.a * (x - guess.h) ** 2 + guess.k, 0.03);
  formulaChart.innerHTML = `
    ${gridMarkup(formulaMapper, "formula")}
    <path d="${pointsToPath(targetPoints, formulaMapper)}" class="formula-curve formula-curve--target" />
    <path d="${pointsToPath(guessPoints, formulaMapper)}" class="formula-curve formula-curve--guess" />
    <circle cx="${formulaMapper.x(targetFormula.h)}" cy="${formulaMapper.y(targetFormula.k)}" r="9" class="formula-vertex formula-vertex--target" />
    <circle cx="${formulaMapper.x(guess.h)}" cy="${formulaMapper.y(guess.k)}" r="7" class="formula-vertex formula-vertex--guess" />
  `;
  document.querySelector("#formula-guess").textContent = parabolaFormula(guess);
  document.querySelector("#formula-a-output").textContent = signed(guess.a);
  document.querySelector("#formula-h-output").textContent = signed(guess.h);
  document.querySelector("#formula-k-output").textContent = signed(guess.k);
  const feedback = document.querySelector("#formula-feedback");
  feedback.classList.remove("is-correct", "is-incorrect");
  feedback.textContent = "";
}

[formulaA, formulaH, formulaK].forEach((input) => input.addEventListener("input", renderFormulaLab));
document.querySelector("#formula-check").addEventListener("click", () => {
  const guess = formulaState();
  const correct = guess.a === targetFormula.a && guess.h === targetFormula.h && guess.k === targetFormula.k;
  setFeedback(
    document.querySelector("#formula-feedback"),
    correct,
    correct ? "Exactly. The vertex is (2, 3), the graph opens down, and |a| = 1/2 makes it wider." : "Start with the target vertex. Then use opening direction for the sign of a and width for |a|.",
  );
});
renderFormulaLab();

const symmetryChart = document.querySelector("#symmetry-chart");
const symmetryInput = document.querySelector("#symmetry-x");
let symmetryCase = "quartic";
let symmetryRevealed = true;
const symmetryCases = {
  quartic: {
    formula: "x⁴ − 4x²", type: "even", substitution: "f(−x) = (−x)⁴ − 4(−x)²", simplified: "f(−x) = x⁴ − 4x² = f(x)",
    verdict: "Even · reflect the known half across the y-axis.", fn: (x) => x ** 4 - 4 * x ** 2, xMax: 2.5, yMin: -5, yMax: 10, trackerMin: 0.2, trackerMax: 2.3,
  },
  reciprocal: {
    formula: "x + 1/x", type: "odd", substitution: "f(−x) = −x + 1/(−x)", simplified: "f(−x) = −x − 1/x = −f(x)",
    verdict: "Odd · rotate the known half 180° through the origin.", fn: (x) => x + 1 / x, xMax: 4.5, yMin: -7, yMax: 7, trackerMin: 0.2, trackerMax: 4, discontinuous: true,
  },
  rational: {
    formula: "x/(1 + x²)", type: "odd", substitution: "f(−x) = (−x)/(1 + (−x)²)", simplified: "f(−x) = −x/(1 + x²) = −f(x)",
    verdict: "Odd · opposite inputs produce opposite outputs.", fn: (x) => x / (1 + x ** 2), xMax: 4.5, yMin: -1, yMax: 1, trackerMin: 0.1, trackerMax: 4,
  },
  shifted: {
    formula: "(x − 1)²", type: "neither", substitution: "f(−x) = (−x − 1)² = (x + 1)²", simplified: "f(−x) ≠ f(x) and f(−x) ≠ −f(x)",
    verdict: "Neither · the parabola is symmetric about x = 1, not the y-axis or origin.", fn: (x) => (x - 1) ** 2, xMax: 4.5, yMin: -2, yMax: 10, trackerMin: 0.2, trackerMax: 2.1,
  },
};

function renderSymmetry() {
  const selected = symmetryCases[symmetryCase];
  const x = Number(symmetryInput.value);
  const y = selected.fn(x);
  const partnerY = selected.type === "even" ? y : selected.type === "odd" ? -y : selected.fn(-x);
  const symmetryFrame = { width: 680, height: 540, padding: 52 };
  const symmetryBounds = expandBoundsToFit({
    ...symmetryFrame,
    xMin: -5,
    xMax: 5,
    yMin: selected.yMin,
    yMax: selected.yMax,
  });
  const symmetryMapper = createMapper({
    ...symmetryFrame,
    ...symmetryBounds,
  });
  const positiveStart = selected.discontinuous ? 0.2 : 0;
  const right = sample(positiveStart, selected.xMax, selected.fn, 0.025);
  const left = sample(-selected.xMax, selected.discontinuous ? -0.2 : 0, selected.fn, 0.025);
  const curveOverflow = symmetryCase === "shifted" ? 0.2 : 1;
  const pointIsVisible = y >= symmetryMapper.yMin && y <= symmetryMapper.yMax;
  const partnerIsVisible = partnerY >= symmetryMapper.yMin && partnerY <= symmetryMapper.yMax;
  symmetryChart.innerHTML = `
    ${gridMarkup(symmetryMapper, "symmetry")}
    <g>
      <path d="${pointsToPath(right, symmetryMapper, curveOverflow)}" class="symmetry-curve symmetry-curve--known" />
      <path d="${pointsToPath(left, symmetryMapper, curveOverflow)}" class="symmetry-curve symmetry-curve--mirror ${symmetryRevealed ? "is-revealed" : ""}" />
      ${pointIsVisible ? `<circle cx="${symmetryMapper.x(x)}" cy="${symmetryMapper.y(y)}" r="8" class="symmetry-point symmetry-point--known" />` : ""}
      ${symmetryRevealed && partnerIsVisible ? `<circle cx="${symmetryMapper.x(-x)}" cy="${symmetryMapper.y(partnerY)}" r="8" class="symmetry-point symmetry-point--mirror" />` : ""}
    </g>
  `;
  document.querySelector("#symmetry-substitution").textContent = selected.substitution;
  document.querySelector("#symmetry-simplified").textContent = selected.simplified;
  document.querySelector("#symmetry-verdict").textContent = selected.verdict;
  document.querySelector("#symmetry-x-output").textContent = signed(x);
  const outsideNotes = [];
  if (!pointIsVisible) outsideNotes.push(`The tracked point is ${y > symmetryMapper.yMax ? "above" : "below"} the visible window.`);
  if (!partnerIsVisible) outsideNotes.push(`Its partner is ${partnerY > symmetryMapper.yMax ? "above" : "below"} the visible window.`);
  document.querySelector("#symmetry-point-pair").innerHTML = `<span>(${signed(x)}, ${signed(y)}) pairs with (${signed(-x)}, ${signed(partnerY)})</span>${outsideNotes.length ? `<small>${outsideNotes.join(" ")}</small>` : ""}`;
  const reveal = document.querySelector("#symmetry-reveal");
  reveal.setAttribute("aria-pressed", String(symmetryRevealed));
  reveal.textContent = symmetryRevealed ? "Hide mirrored half" : "Reveal required half";
}

document.querySelectorAll("[data-symmetry]").forEach((button) => button.addEventListener("click", () => {
  symmetryCase = button.dataset.symmetry;
  symmetryRevealed = true;
  const selected = symmetryCases[symmetryCase];
  symmetryInput.min = String(selected.trackerMin);
  symmetryInput.max = String(selected.trackerMax);
  if (Number(symmetryInput.value) < selected.trackerMin) symmetryInput.value = String(selected.trackerMin);
  if (Number(symmetryInput.value) > selected.trackerMax) symmetryInput.value = String(selected.trackerMax);
  document.querySelectorAll("[data-symmetry]").forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
  renderSymmetry();
}));
document.querySelector("#symmetry-reveal").addEventListener("click", () => {
  symmetryRevealed = !symmetryRevealed;
  renderSymmetry();
});
symmetryInput.addEventListener("input", renderSymmetry);
renderSymmetry();

document.querySelector("#check-even").addEventListener("click", () => {
  const correct = document.querySelector("#check-even-point").value === "correct";
  setFeedback(document.querySelector("#feedback-even"), correct, correct ? "Correct. Even symmetry changes the sign of x and keeps y." : "Reflect across the y-axis: negate x, but keep the same output.");
});

document.querySelector("#check-odd").addEventListener("click", () => {
  const correct = nearlyEqual(Number(document.querySelector("#check-odd-value").value), -7);
  setFeedback(document.querySelector("#feedback-odd"), correct, correct ? "Correct. Odd symmetry gives f(2) = −f(−2) = −7." : "For an odd function, opposite inputs have opposite outputs.");
});

document.querySelector("#check-classification").addEventListener("click", () => {
  const correct = document.querySelector("#check-rational").value === "correct";
  setFeedback(document.querySelector("#feedback-classification"), correct, correct ? "Correct. Substitution produces −x/(1 + x²), which is −f(x)." : "Replace x by −x and simplify the squared denominator before comparing.");
});

document.querySelector("#check-transformation").addEventListener("click", () => {
  const correct = document.querySelector("#check-transform").value === "correct";
  setFeedback(document.querySelector("#feedback-transformation"), correct, correct ? "Correct. Right 3 is x − 3 inside; up 2 is +2 outside." : "Horizontal shifts use the opposite sign inside. Vertical shifts use the stated sign outside.");
});

initLessonChrome();
