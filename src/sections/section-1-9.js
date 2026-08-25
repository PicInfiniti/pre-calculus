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
  ${renderLessonHeader("1.9")}
  <main>
    <section class="lesson-hero lesson-hero--gold">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 1.9</span> The coordinate plane and circles</p>
        <h1>Turn coordinates<br><em>into geometry.</em></h1>
        <p class="lesson-hero__lede">
          Ordered pairs do more than locate points. They measure lengths, reveal midpoints,
          and turn every circle into an equation you can read and build.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#coordinate-lab">Enter the coordinate lab</a>
          <span>About 35 minutes · interactive</span>
        </div>
      </div>
      <div class="coordinate-hero-art" aria-hidden="true" data-reveal>
        <svg viewBox="0 0 520 520">
          <defs>
            <pattern id="hero-coordinate-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="currentColor" stroke-width="1" />
            </pattern>
          </defs>
          <rect x="20" y="20" width="480" height="480" rx="240" class="coordinate-hero__paper" />
          <rect x="50" y="50" width="420" height="420" fill="url(#hero-coordinate-grid)" class="coordinate-hero__grid" />
          <path d="M50 260H470M260 50V470" class="coordinate-hero__axis" />
          <circle cx="220" cy="180" r="112" class="coordinate-hero__circle" />
          <path d="M140 340L380 140" class="coordinate-hero__segment" />
          <circle cx="140" cy="340" r="10" class="coordinate-hero__point coordinate-hero__point--a" />
          <circle cx="380" cy="140" r="10" class="coordinate-hero__point coordinate-hero__point--b" />
          <circle cx="260" cy="240" r="8" class="coordinate-hero__midpoint" />
        </svg>
        <span class="coordinate-hero__formula coordinate-hero__formula--distance">d = √(Δx² + Δy²)</span>
        <span class="coordinate-hero__formula coordinate-hero__formula--circle">(x − h)² + (y − k)² = r²</span>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Find distance, midpoint, and a missing endpoint</li>
        <li><span>02</span>Measure a triangle median exactly</li>
        <li><span>03</span>Build a circle from geometric information</li>
        <li><span>04</span>Read intercepts and complete the square</li>
      </ol>
    </section>

    <section class="lesson-section" id="coordinate-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>01</span> Measure the plane</p>
        <h2>Two points contain<br>three useful stories.</h2>
        <p>
          The horizontal and vertical changes form a right triangle. Average the coordinates
          for the midpoint; use the Pythagorean theorem for the distance.
        </p>
      </div>

      <div class="formula-ribbon" data-reveal>
        <div><span>Horizontal change</span><strong>Δx = x₂ − x₁</strong></div>
        <div><span>Vertical change</span><strong>Δy = y₂ − y₁</strong></div>
        <div><span>Midpoint</span><strong>M = ((x₁+x₂)/2, (y₁+y₂)/2)</strong></div>
        <div><span>Distance</span><strong>d = √(Δx² + Δy²)</strong></div>
      </div>

      <div class="interactive-shell coordinate-lab" data-reveal>
        <div class="interactive-shell__header">
          <div><span class="live-dot"></span><p>Draggable coordinate lab</p></div>
          <span>Drag A or B · grid snaps to integers</span>
        </div>
        <div class="coordinate-lab__body">
          <div class="coordinate-stage">
            <svg id="coordinate-svg" viewBox="0 0 560 560" role="img" aria-label="Coordinate plane with two draggable endpoints and their midpoint"></svg>
          </div>
          <div class="coordinate-controls">
            <div class="tool-label">Choose the endpoints</div>
            <div class="coordinate-input-grid">
              <fieldset>
                <legend>Point A</legend>
                <label>x₁ <input id="coord-ax" type="number" min="-10" max="10" step="1" value="-2" /></label>
                <label>y₁ <input id="coord-ay" type="number" min="-10" max="10" step="1" value="1" /></label>
              </fieldset>
              <fieldset>
                <legend>Point B</legend>
                <label>x₂ <input id="coord-bx" type="number" min="-10" max="10" step="1" value="-6" /></label>
                <label>y₂ <input id="coord-by" type="number" min="-10" max="10" step="1" value="-3" /></label>
              </fieldset>
            </div>
            <div class="preset-row">
              <button type="button" class="is-active" data-coordinate-preset="endpoint">Class-example setup</button>
              <button type="button" data-coordinate-preset="free">New segment</button>
            </div>
            <div class="coordinate-metrics" aria-live="polite">
              <article><span>Change</span><strong id="coordinate-change">Δx = −4 · Δy = −4</strong></article>
              <article><span>Midpoint</span><strong id="coordinate-midpoint">(−4, −1)</strong></article>
              <article><span>Distance</span><strong id="coordinate-distance">4√2</strong><small id="coordinate-distance-decimal">≈ 5.657</small></article>
            </div>
          </div>
        </div>
      </div>

      <div class="reverse-midpoint" data-reveal>
        <div>
          <p class="tool-label">Reverse the midpoint formula</p>
          <h3>Midpoint M is (−4, −1). One endpoint is A(−2, 1). Where is B?</h3>
          <p>If Mₓ = (Aₓ + Bₓ)/2, then Bₓ = 2Mₓ − Aₓ. Use the same move for y.</p>
        </div>
        <div class="compact-answer">
          <label>B = ( <input id="missing-bx" type="number" aria-label="Missing endpoint x-coordinate" />, <input id="missing-by" type="number" aria-label="Missing endpoint y-coordinate" /> )</label>
          <button type="button" id="check-missing-endpoint">Check endpoint</button>
          <p id="feedback-missing-endpoint" class="answer-feedback" aria-live="polite"></p>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="median-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Midpoint, then distance</p>
        <h2>A median is<br>a two-formula problem.</h2>
        <p>First locate the midpoint of the opposite side. Then measure from the remaining vertex to that midpoint.</p>
      </div>

      <div class="median-workbench" data-reveal>
        <div class="median-graph">
          <svg id="median-svg" viewBox="0 0 560 560" role="img" aria-label="Triangle with vertices A, B, C and median from B to midpoint M"></svg>
        </div>
        <div class="median-solution">
          <p class="tool-label">Class-example triangle</p>
          <h3>A(1, −1), B(4, 5), C(−9, 3)</h3>
          <ol>
            <li><span>1</span><div><strong>Find midpoint M of AC.</strong><p>Average A and C—not A and B.</p></div></li>
            <li><span>2</span><div><strong>Measure BM.</strong><p>Use B and the midpoint you just found.</p></div></li>
            <li><span>3</span><div><strong>Simplify the radical.</strong><p>√80 = √(16 · 5) = 4√5.</p></div></li>
          </ol>
          <div class="median-answer-grid">
            <label>Mₓ <input id="median-mx" type="number" /></label>
            <label>Mᵧ <input id="median-my" type="number" /></label>
            <label class="radical-answer">BM = <input id="median-coefficient" type="number" aria-label="Coefficient outside the radical" />√<input id="median-radicand" type="number" aria-label="Number inside the radical" /></label>
          </div>
          <button class="lesson-control-button" type="button" id="check-median">Check the median</button>
          <p id="feedback-median" class="answer-feedback answer-feedback--dark" aria-live="polite"></p>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="diameter-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Build a circle</p>
        <h2>A diameter gives you<br>the whole equation.</h2>
        <p>The center is the midpoint of the diameter. The radius is half its length—or use one endpoint to find r² directly.</p>
      </div>

      <div class="interactive-shell diameter-lab" data-reveal>
        <div class="interactive-shell__header">
          <div><span class="live-dot"></span><p>Circle-from-diameter studio</p></div>
          <span>Drag either endpoint</span>
        </div>
        <div class="diameter-lab__body">
          <div class="coordinate-stage coordinate-stage--light">
            <svg id="diameter-svg" viewBox="0 0 560 560" role="img" aria-label="Circle determined by two draggable diameter endpoints"></svg>
          </div>
          <div class="diameter-controls">
            <div class="coordinate-input-grid">
              <fieldset>
                <legend>Endpoint P</legend>
                <label>x <input id="diameter-px" type="number" min="-10" max="10" value="-5" /></label>
                <label>y <input id="diameter-py" type="number" min="-10" max="10" value="6" /></label>
              </fieldset>
              <fieldset>
                <legend>Endpoint Q</legend>
                <label>x <input id="diameter-qx" type="number" min="-10" max="10" value="3" /></label>
                <label>y <input id="diameter-qy" type="number" min="-10" max="10" value="2" /></label>
              </fieldset>
            </div>
            <div class="diameter-derivation" aria-live="polite">
              <div><span>Center = midpoint</span><strong id="diameter-center">(−1, 4)</strong></div>
              <div><span>Radius squared</span><strong id="diameter-radius-squared">r² = 20</strong></div>
              <div class="diameter-equation"><span>Circle equation</span><strong id="diameter-equation">(x + 1)² + (y − 4)² = 20</strong></div>
            </div>
            <p class="concept-callout"><strong>Fast route:</strong> after finding the center, compute r² with the squared changes. You do not need to simplify r first.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="circle-analyzer">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Read a circle</p>
        <h2>The signs hide the center.<br>The radius controls the reach.</h2>
        <p>Inside each square, the center uses the opposite sign. Intercepts appear only when the circle reaches an axis.</p>
      </div>

      <div class="equation-bridge" data-reveal>
        <article><span>Graph</span><strong>Every plotted point makes the equation true.</strong><p>A graph is the complete set of solution pairs (x, y).</p></article>
        <article><span>Intercepts</span><strong>On an axis, one coordinate is zero.</strong><p>Set y = 0 for x-intercepts; set x = 0 for y-intercepts.</p></article>
        <article><span>Symmetry test</span><strong>Replace a coordinate and compare.</strong><p>Use y → −y for the x-axis, x → −x for the y-axis, or both for the origin.</p></article>
      </div>

      <div class="circle-analyzer" data-reveal>
        <div class="circle-analyzer__stage">
          <svg id="circle-analyzer-svg" viewBox="0 0 560 560" role="img" aria-label="Adjustable circle on a coordinate plane"></svg>
        </div>
        <div class="circle-analyzer__controls">
          <p class="tool-label">Adjust the standard form</p>
          <div class="circle-equation-display" id="circle-equation-display">(x − 3)² + (y + 1)² = 14</div>
          <label for="circle-h">Center h <output id="circle-h-output">3</output></label>
          <input id="circle-h" type="range" min="-5" max="5" step="1" value="3" />
          <label for="circle-k">Center k <output id="circle-k-output">−1</output></label>
          <input id="circle-k" type="range" min="-5" max="5" step="1" value="-1" />
          <label for="circle-r2">Radius squared r² <output id="circle-r2-output">14</output></label>
          <input id="circle-r2" type="range" min="1" max="36" step="1" value="14" />
          <div class="circle-facts" aria-live="polite">
            <article><span>Diameter</span><strong id="circle-diameter">2√14</strong></article>
            <article><span>Center location</span><strong id="circle-quadrant">Quadrant IV</strong></article>
            <article><span>Center to origin</span><strong id="circle-origin-distance">√10</strong></article>
            <article><span>x-intercepts</span><strong id="circle-x-intercepts">3 ± √13</strong></article>
            <article><span>y-intercepts</span><strong id="circle-y-intercepts">−1 ± √5</strong></article>
          </div>
        </div>
      </div>
      <p class="intercept-rule" data-reveal>
        <strong>To find intercepts:</strong>
        set <em>y = 0</em> for x-intercepts and set <em>x = 0</em> for y-intercepts. Keep the answers exact.
      </p>
    </section>

    <section class="lesson-section lesson-section--ink" id="complete-square">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>05</span> Reveal the standard form</p>
        <h2>Complete two squares.<br>Protect the balance.</h2>
        <p>Group the x-terms and y-terms, add the needed square to both sides, then read the center and radius.</p>
      </div>

      <div class="square-studio" data-reveal>
        <div class="square-studio__steps">
          <p class="tool-label">Convert the class-example equation</p>
          <h3>x² + y² − 10x + 12y + 54 = 0</h3>
          <ol>
            <li class="is-visible"><span>1</span><p>(x² − 10x) + (y² + 12y) = −54</p></li>
            <li><span>2</span><p>Add 25 and 36 to both sides.</p></li>
            <li><span>3</span><p>(x − 5)² + (y + 6)² = 7</p></li>
          </ol>
          <button type="button" id="next-square-step">Reveal next step <span aria-hidden="true">→</span></button>
        </div>
        <div class="square-studio__answer">
          <p class="tool-label">Read the finished circle</p>
          <div class="square-answer-fields">
            <label>Center h <input id="complete-h" type="number" /></label>
            <label>Center k <input id="complete-k" type="number" /></label>
            <label>Radius √<input id="complete-radicand" type="number" aria-label="Radius radicand" /></label>
          </div>
          <button class="lesson-control-button" type="button" id="check-complete-square">Check center and radius</button>
          <p id="feedback-complete-square" class="answer-feedback answer-feedback--dark" aria-live="polite"></p>
          <div class="completion-rule">
            <span>Half, then square</span>
            <p>x² + bx becomes (x + b/2)² after adding (b/2)².</p>
          </div>
        </div>
      </div>

      <div class="tangent-card" data-reveal>
        <div>
          <p class="tool-label">Tangent-circle checkpoint</p>
          <h3>A circle centered at (−5, 3) is tangent to the y-axis.</h3>
          <p>The radius is the horizontal distance from the center to x = 0.</p>
        </div>
        <div class="tangent-card__answer">
          <label>Radius <input id="tangent-radius" type="number" /></label>
          <label for="tangent-equation">Choose the equation</label>
          <select id="tangent-equation">
            <option value="">Choose…</option>
            <option value="correct">(x + 5)² + (y − 3)² = 25</option>
            <option value="signs">(x − 5)² + (y + 3)² = 25</option>
            <option value="radius">(x + 5)² + (y − 3)² = 5</option>
          </select>
          <button type="button" id="check-tangent">Check tangent circle</button>
          <p id="feedback-tangent" class="answer-feedback answer-feedback--dark" aria-live="polite"></p>
        </div>
      </div>
    </section>

    <section class="lesson-section readiness readiness--gold">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>06</span> Class-example readiness</p>
        <h2>Know the first move<br>before doing arithmetic.</h2>
      </div>
      <div class="first-move-grid" data-reveal>
        <article><span>Missing endpoint</span><strong>Double the midpoint, then subtract the known endpoint.</strong></article>
        <article><span>Triangle median</span><strong>Midpoint of the opposite side, then distance.</strong></article>
        <article><span>Diameter endpoints</span><strong>Midpoint gives center; half-distance gives radius.</strong></article>
        <article><span>General circle equation</span><strong>Group terms and complete both squares.</strong></article>
        <article><span>Tangent to y-axis</span><strong>Radius is the center’s horizontal distance to x = 0.</strong></article>
      </div>
      <aside class="ready-banner ready-banner--gold" data-reveal>
        <span>You are Section 1.9-ready when</span>
        <p>You can move between a picture, an exact measurement, and a circle equation—and explain why each formula fits.</p>
        <a href="#coordinate-lab">Revisit the coordinate lab <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${renderLessonFooter({})}
`;

const GRAPH_SIZE = 560;
const GRAPH_BOUND = 10;
const graphScale = GRAPH_SIZE / (GRAPH_BOUND * 2);
const graphX = (value) => (value + GRAPH_BOUND) * graphScale;
const graphY = (value) => (GRAPH_BOUND - value) * graphScale;

function clampCoordinate(value) {
  return Math.max(-GRAPH_BOUND, Math.min(GRAPH_BOUND, Math.round(value)));
}

function signedNumber(value) {
  const formatted = formatNumber(value);
  return formatted.startsWith("-") ? `−${formatted.slice(1)}` : formatted;
}

function coordinateLabel({ x, y }) {
  return `(${signedNumber(x)}, ${signedNumber(y)})`;
}

function simplifyRadical(value, outside = 1) {
  if (!Number.isFinite(value) || value < 0) return "not real";
  if (nearlyEqual(value, 0)) return "0";
  if (!Number.isInteger(value)) return `√${formatNumber(value)}`;

  let coefficient = outside;
  let radicand = value;
  for (let factor = Math.floor(Math.sqrt(value)); factor >= 2; factor -= 1) {
    if (value % (factor * factor) === 0) {
      coefficient *= factor;
      radicand = value / (factor * factor);
      break;
    }
  }
  if (radicand === 1) return String(coefficient);
  return `${coefficient === 1 ? "" : coefficient}√${radicand}`;
}

function gridMarkup({ quadrants = true } = {}) {
  const lines = [];
  for (let value = -GRAPH_BOUND; value <= GRAPH_BOUND; value += 1) {
    const position = graphX(value);
    const className = value === 0 ? "coordinate-axis" : value % 5 === 0 ? "coordinate-grid-major" : "coordinate-grid-line";
    lines.push(`<line x1="${position}" y1="0" x2="${position}" y2="${GRAPH_SIZE}" class="${className}" />`);
    lines.push(`<line x1="0" y1="${position}" x2="${GRAPH_SIZE}" y2="${position}" class="${className}" />`);
  }

  const labels = [];
  for (let value = -8; value <= 8; value += 2) {
    if (value === 0) continue;
    labels.push(`<text x="${graphX(value) + 5}" y="${graphY(0) - 7}" class="coordinate-number">${signedNumber(value)}</text>`);
    labels.push(`<text x="${graphX(0) + 7}" y="${graphY(value) - 5}" class="coordinate-number">${signedNumber(value)}</text>`);
  }

  const quadrantLabels = quadrants
    ? `<text x="412" y="86" class="quadrant-label">I</text><text x="130" y="86" class="quadrant-label">II</text><text x="122" y="475" class="quadrant-label">III</text><text x="408" y="475" class="quadrant-label">IV</text>`
    : "";
  return `${lines.join("")}${labels.join("")}${quadrantLabels}`;
}

function pointMarkup(name, point, className, draggable = false) {
  const dragAttribute = draggable ? `data-drag-point="${name}"` : "";
  return `
    <g class="coordinate-point ${className}" ${dragAttribute} tabindex="${draggable ? "0" : "-1"}" aria-label="Point ${name} ${coordinateLabel(point)}">
      <circle cx="${graphX(point.x)}" cy="${graphY(point.y)}" r="10" />
      <text x="${graphX(point.x) + 14}" y="${graphY(point.y) - 13}">${name}${coordinateLabel(point)}</text>
    </g>
  `;
}

function bindDraggableSvg(svg, state, render) {
  let activePoint = null;

  svg.addEventListener("pointerdown", (event) => {
    const target = event.target.closest("[data-drag-point]");
    if (!target) return;
    activePoint = target.dataset.dragPoint;
    svg.setPointerCapture(event.pointerId);
  });

  svg.addEventListener("pointermove", (event) => {
    if (!activePoint) return;
    const rectangle = svg.getBoundingClientRect();
    const x = ((event.clientX - rectangle.left) / rectangle.width) * GRAPH_SIZE;
    const y = ((event.clientY - rectangle.top) / rectangle.height) * GRAPH_SIZE;
    state[activePoint] = {
      x: clampCoordinate(x / graphScale - GRAPH_BOUND),
      y: clampCoordinate(GRAPH_BOUND - y / graphScale),
    };
    render();
  });

  const stopDragging = () => {
    activePoint = null;
  };
  svg.addEventListener("pointerup", stopDragging);
  svg.addEventListener("pointercancel", stopDragging);
}

const coordinateState = {
  A: { x: -2, y: 1 },
  B: { x: -6, y: -3 },
};

const coordinateSvg = document.querySelector("#coordinate-svg");
const coordinateInputs = {
  A: { x: document.querySelector("#coord-ax"), y: document.querySelector("#coord-ay") },
  B: { x: document.querySelector("#coord-bx"), y: document.querySelector("#coord-by") },
};

function renderCoordinateLab() {
  const { A, B } = coordinateState;
  const midpoint = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
  const dx = B.x - A.x;
  const dy = B.y - A.y;
  const distanceSquared = dx * dx + dy * dy;

  coordinateSvg.innerHTML = `
    ${gridMarkup()}
    <path d="M${graphX(A.x)} ${graphY(A.y)}H${graphX(B.x)}V${graphY(B.y)}" class="coordinate-change-path" />
    <line x1="${graphX(A.x)}" y1="${graphY(A.y)}" x2="${graphX(B.x)}" y2="${graphY(B.y)}" class="coordinate-segment" />
    ${pointMarkup("A", A, "coordinate-point--a", true)}
    ${pointMarkup("B", B, "coordinate-point--b", true)}
    ${pointMarkup("M", midpoint, "coordinate-point--midpoint")}
  `;

  Object.entries(coordinateInputs).forEach(([name, axes]) => {
    axes.x.value = coordinateState[name].x;
    axes.y.value = coordinateState[name].y;
  });
  document.querySelector("#coordinate-change").textContent = `Δx = ${signedNumber(dx)} · Δy = ${signedNumber(dy)}`;
  document.querySelector("#coordinate-midpoint").textContent = coordinateLabel(midpoint);
  document.querySelector("#coordinate-distance").textContent = simplifyRadical(distanceSquared);
  document.querySelector("#coordinate-distance-decimal").textContent = `≈ ${formatNumber(Math.sqrt(distanceSquared))}`;
}

Object.entries(coordinateInputs).forEach(([name, axes]) => {
  Object.entries(axes).forEach(([axis, input]) => {
    input.addEventListener("input", () => {
      coordinateState[name][axis] = clampCoordinate(Number(input.value));
      renderCoordinateLab();
    });
  });
});

document.querySelectorAll("[data-coordinate-preset]").forEach((button) => {
  button.addEventListener("click", () => {
    const preset = button.dataset.coordinatePreset;
    coordinateState.A = preset === "endpoint" ? { x: -2, y: 1 } : { x: -7, y: 5 };
    coordinateState.B = preset === "endpoint" ? { x: -6, y: -3 } : { x: 5, y: -4 };
    document.querySelectorAll("[data-coordinate-preset]").forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
    renderCoordinateLab();
  });
});

bindDraggableSvg(coordinateSvg, coordinateState, renderCoordinateLab);
renderCoordinateLab();

document.querySelector("#check-missing-endpoint").addEventListener("click", () => {
  const x = Number(document.querySelector("#missing-bx").value);
  const y = Number(document.querySelector("#missing-by").value);
  setFeedback(
    document.querySelector("#feedback-missing-endpoint"),
    nearlyEqual(x, -6) && nearlyEqual(y, -3),
    nearlyEqual(x, -6) && nearlyEqual(y, -3)
      ? "Exactly. B = (−6, −3), and averaging A and B returns M = (−4, −1)."
      : "Use B = 2M − A coordinate by coordinate: 2(−4) − (−2), then 2(−1) − 1.",
  );
});

const medianSvg = document.querySelector("#median-svg");
const medianPoints = {
  A: { x: 1, y: -1 },
  B: { x: 4, y: 5 },
  C: { x: -9, y: 3 },
  M: { x: -4, y: 1 },
};
medianSvg.innerHTML = `
  ${gridMarkup({ quadrants: false })}
  <polygon points="${graphX(1)},${graphY(-1)} ${graphX(4)},${graphY(5)} ${graphX(-9)},${graphY(3)}" class="median-triangle" />
  <line x1="${graphX(4)}" y1="${graphY(5)}" x2="${graphX(-4)}" y2="${graphY(1)}" class="median-line" />
  ${pointMarkup("A", medianPoints.A, "coordinate-point--a")}
  ${pointMarkup("B", medianPoints.B, "coordinate-point--b")}
  ${pointMarkup("C", medianPoints.C, "coordinate-point--c")}
  ${pointMarkup("M", medianPoints.M, "coordinate-point--midpoint")}
`;

document.querySelector("#check-median").addEventListener("click", () => {
  const mx = Number(document.querySelector("#median-mx").value);
  const my = Number(document.querySelector("#median-my").value);
  const coefficient = Number(document.querySelector("#median-coefficient").value);
  const radicand = Number(document.querySelector("#median-radicand").value);
  const correct = nearlyEqual(mx, -4) && nearlyEqual(my, 1) && nearlyEqual(coefficient, 4) && nearlyEqual(radicand, 5);
  setFeedback(
    document.querySelector("#feedback-median"),
    correct,
    correct
      ? "Correct: M = (−4, 1), so BM = √[(−8)² + (−4)²] = √80 = 4√5."
      : "First average A and C to get M. Then use B(4, 5) and M in the distance formula.",
  );
});

function circleTerm(variable, center) {
  if (nearlyEqual(center, 0)) return variable;
  return `(${variable} ${center > 0 ? "−" : "+"} ${formatNumber(Math.abs(center))})`;
}

const diameterState = {
  P: { x: -5, y: 6 },
  Q: { x: 3, y: 2 },
};
const diameterSvg = document.querySelector("#diameter-svg");
const diameterInputs = {
  P: { x: document.querySelector("#diameter-px"), y: document.querySelector("#diameter-py") },
  Q: { x: document.querySelector("#diameter-qx"), y: document.querySelector("#diameter-qy") },
};

function renderDiameterLab() {
  const { P, Q } = diameterState;
  const center = { x: (P.x + Q.x) / 2, y: (P.y + Q.y) / 2 };
  const radiusSquared = ((P.x - Q.x) ** 2 + (P.y - Q.y) ** 2) / 4;
  const radius = Math.sqrt(radiusSquared) * graphScale;

  diameterSvg.innerHTML = `
    ${gridMarkup()}
    <circle cx="${graphX(center.x)}" cy="${graphY(center.y)}" r="${radius}" class="diameter-circle" />
    <line x1="${graphX(P.x)}" y1="${graphY(P.y)}" x2="${graphX(Q.x)}" y2="${graphY(Q.y)}" class="diameter-segment" />
    ${pointMarkup("P", P, "coordinate-point--a", true)}
    ${pointMarkup("Q", Q, "coordinate-point--b", true)}
    ${pointMarkup("C", center, "coordinate-point--midpoint")}
  `;

  Object.entries(diameterInputs).forEach(([name, axes]) => {
    axes.x.value = diameterState[name].x;
    axes.y.value = diameterState[name].y;
  });
  document.querySelector("#diameter-center").textContent = coordinateLabel(center);
  document.querySelector("#diameter-radius-squared").textContent = `r² = ${formatNumber(radiusSquared)}`;
  document.querySelector("#diameter-equation").textContent = `${circleTerm("x", center.x)}² + ${circleTerm("y", center.y)}² = ${formatNumber(radiusSquared)}`;
}

Object.entries(diameterInputs).forEach(([name, axes]) => {
  Object.entries(axes).forEach(([axis, input]) => {
    input.addEventListener("input", () => {
      diameterState[name][axis] = clampCoordinate(Number(input.value));
      renderDiameterLab();
    });
  });
});
bindDraggableSvg(diameterSvg, diameterState, renderDiameterLab);
renderDiameterLab();

const circleAnalyzerState = { h: 3, k: -1, r2: 14 };
const circleAnalyzerSvg = document.querySelector("#circle-analyzer-svg");

function quadrantName(h, k) {
  if (h === 0 && k === 0) return "At the origin";
  if (h === 0) return "On the y-axis";
  if (k === 0) return "On the x-axis";
  if (h > 0 && k > 0) return "Quadrant I";
  if (h < 0 && k > 0) return "Quadrant II";
  if (h < 0 && k < 0) return "Quadrant III";
  return "Quadrant IV";
}

function exactIntercept(center, radicand) {
  if (radicand < 0) return "None";
  if (radicand === 0) return signedNumber(center);
  const radical = simplifyRadical(radicand);
  if (center === 0) return `±${radical}`;
  return `${signedNumber(center)} ± ${radical}`;
}

function renderCircleAnalyzer() {
  const { h, k, r2 } = circleAnalyzerState;
  const radius = Math.sqrt(r2);
  circleAnalyzerSvg.innerHTML = `
    ${gridMarkup()}
    <circle cx="${graphX(h)}" cy="${graphY(k)}" r="${radius * graphScale}" class="analyzer-circle" />
    <line x1="${graphX(h)}" y1="${graphY(k)}" x2="${graphX(h + radius)}" y2="${graphY(k)}" class="analyzer-radius" />
    ${pointMarkup("C", { x: h, y: k }, "coordinate-point--midpoint")}
  `;
  document.querySelector("#circle-equation-display").textContent = `${circleTerm("x", h)}² + ${circleTerm("y", k)}² = ${r2}`;
  document.querySelector("#circle-h-output").textContent = signedNumber(h);
  document.querySelector("#circle-k-output").textContent = signedNumber(k);
  document.querySelector("#circle-r2-output").textContent = r2;
  document.querySelector("#circle-diameter").textContent = simplifyRadical(r2, 2);
  document.querySelector("#circle-quadrant").textContent = quadrantName(h, k);
  document.querySelector("#circle-origin-distance").textContent = simplifyRadical(h * h + k * k);
  document.querySelector("#circle-x-intercepts").textContent = exactIntercept(h, r2 - k * k);
  document.querySelector("#circle-y-intercepts").textContent = exactIntercept(k, r2 - h * h);
}

[
  ["circle-h", "h"],
  ["circle-k", "k"],
  ["circle-r2", "r2"],
].forEach(([id, property]) => {
  document.querySelector(`#${id}`).addEventListener("input", (event) => {
    circleAnalyzerState[property] = Number(event.target.value);
    renderCircleAnalyzer();
  });
});
renderCircleAnalyzer();

const squareSteps = [...document.querySelectorAll(".square-studio__steps li")];
document.querySelector("#next-square-step").addEventListener("click", (event) => {
  const next = squareSteps.find((step) => !step.classList.contains("is-visible"));
  if (next) next.classList.add("is-visible");
  if (!squareSteps.some((step) => !step.classList.contains("is-visible"))) {
    event.currentTarget.textContent = "All steps revealed";
    event.currentTarget.disabled = true;
  }
});

document.querySelector("#check-complete-square").addEventListener("click", () => {
  const h = Number(document.querySelector("#complete-h").value);
  const k = Number(document.querySelector("#complete-k").value);
  const radicand = Number(document.querySelector("#complete-radicand").value);
  const correct = nearlyEqual(h, 5) && nearlyEqual(k, -6) && nearlyEqual(radicand, 7);
  setFeedback(
    document.querySelector("#feedback-complete-square"),
    correct,
    correct
      ? "Correct. The circle has center (5, −6) and radius √7."
      : "Half −10 to get −5, and half 12 to get 6. Then read the signs inside the squared factors carefully.",
  );
});

document.querySelector("#check-tangent").addEventListener("click", () => {
  const radius = Number(document.querySelector("#tangent-radius").value);
  const equation = document.querySelector("#tangent-equation").value;
  const correct = nearlyEqual(radius, 5) && equation === "correct";
  setFeedback(
    document.querySelector("#feedback-tangent"),
    correct,
    correct
      ? "Exactly. The center is 5 units from the y-axis, so r = 5 and r² = 25."
      : "The y-axis is x = 0. Measure horizontally from x = −5, then remember that the equation uses r².",
  );
});

initLessonChrome();
