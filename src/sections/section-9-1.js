import "../assets/sass/lesson.sass";
import {
  bindTabs,
  formatNumber,
  initLessonChrome,
  nearlyEqual,
  renderLessonFooter,
  renderLessonHeader,
  setFeedback,
} from "./shared";

const root = document.querySelector("#app");

root.innerHTML = `
  ${renderLessonHeader("9.1")}
  <main>
    <section class="lesson-hero lesson-hero--coral">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 9.1</span> Systems in two variables</p>
        <h1>Where two lines<br><em>tell one story.</em></h1>
        <p class="lesson-hero__lede">
          A system asks for values that make two equations true at the same time.
          Learn to see the answer geometrically, then find it reliably with algebra.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#intersection-lab">Open the line lab</a>
          <span>About 25 minutes · interactive</span>
        </div>
      </div>
      <div class="hero-equations" aria-hidden="true" data-reveal>
        <div class="hero-equations__plane">
          <span class="hero-equations__line hero-equations__line--a"></span>
          <span class="hero-equations__line hero-equations__line--b"></span>
          <span class="hero-equations__point"></span>
          <span class="hero-equations__x">x</span>
          <span class="hero-equations__y">y</span>
        </div>
        <div class="equation-card equation-card--a">3x + 2y = 4</div>
        <div class="equation-card equation-card--b">−x + 3y = −5</div>
        <div class="equation-card equation-card--answer">(2, −1)</div>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Classify a system before solving it</li>
        <li><span>02</span>Choose substitution or elimination</li>
        <li><span>03</span>Build and solve a two-variable model</li>
        <li><span>04</span>Handle a parameter and its special value</li>
      </ol>
    </section>

    <section class="lesson-section" id="intersection-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>01</span> See the solution</p>
        <h2>One picture.<br>Three outcomes.</h2>
        <p>
          Each equation draws a line. The solution set is whatever the two lines share:
          one point, every point on the same line, or no point at all.
        </p>
      </div>

      <div class="outcome-strip" data-reveal>
        <article><span class="outcome-icon outcome-icon--cross"></span><strong>One solution</strong><p>Different slopes. The lines meet once.</p></article>
        <article><span class="outcome-icon outcome-icon--same"></span><strong>Infinitely many</strong><p>Same line. One equation is a multiple of the other.</p></article>
        <article><span class="outcome-icon outcome-icon--parallel"></span><strong>No solution</strong><p>Same slope, different intercepts.</p></article>
      </div>

      <div class="interactive-shell line-lab" data-reveal>
        <div class="interactive-shell__header">
          <div><span class="live-dot"></span><p>Interactive line lab</p></div>
          <span>ax + by = c</span>
        </div>
        <div class="line-lab__body">
          <div class="line-controls">
            <fieldset>
              <legend>Equation 1</legend>
              <div class="coefficient-row">
                <label><span class="sr-only">x coefficient</span><input id="a1" type="number" step="1" value="3" />x</label>
                <span>+</span>
                <label><span class="sr-only">y coefficient</span><input id="b1" type="number" step="1" value="-4" />y</label>
                <span>=</span>
                <label><span class="sr-only">constant</span><input id="c1" type="number" step="1" value="16" /></label>
              </div>
            </fieldset>
            <fieldset>
              <legend>Equation 2</legend>
              <div class="coefficient-row">
                <label><span class="sr-only">x coefficient</span><input id="a2" type="number" step="1" value="-9" />x</label>
                <span>+</span>
                <label><span class="sr-only">y coefficient</span><input id="b2" type="number" step="1" value="12" />y</label>
                <span>=</span>
                <label><span class="sr-only">constant</span><input id="c2" type="number" step="1" value="-48" /></label>
              </div>
            </fieldset>
            <div class="preset-row" aria-label="System presets">
              <button type="button" data-preset="unique">One solution</button>
              <button type="button" data-preset="infinite" class="is-active">Same line</button>
              <button type="button" data-preset="none">Parallel</button>
            </div>
            <div class="line-result" aria-live="polite">
              <span id="result-badge">Infinitely many</span>
              <strong id="result-title">The equations describe the same line.</strong>
              <p id="result-detail">Equation 2 is −3 times Equation 1, including the constant.</p>
            </div>
            <details class="concept-note">
              <summary>Why the determinant decides</summary>
              <p>For <strong>a₁x + b₁y = c₁</strong> and <strong>a₂x + b₂y = c₂</strong>, compute D = a₁b₂ − a₂b₁. If D ≠ 0, the slopes differ and there is one solution.</p>
            </details>
          </div>
          <div class="line-graph-wrap">
            <svg id="line-graph" viewBox="0 0 560 400" role="img" aria-label="Graph of the two equations"></svg>
            <div class="graph-legend"><span><i class="legend-a"></i>Equation 1</span><span><i class="legend-b"></i>Equation 2</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="methods">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Solve with purpose</p>
        <h2>Choose the move<br>that removes friction.</h2>
        <p>Both methods are valid. The best method is the one that makes the next line of algebra simplest.</p>
      </div>

      <div class="method-lab" data-reveal>
        <div class="tab-list" role="tablist" aria-label="Solution method">
          <button class="is-active" type="button" role="tab" aria-selected="true" data-tab="substitution">Substitution</button>
          <button type="button" role="tab" aria-selected="false" data-tab="elimination">Elimination</button>
        </div>

        <article class="method-panel" data-tab-panel="substitution">
          <div class="method-panel__summary">
            <span>Use it when</span>
            <h3>A variable is already isolated—or almost isolated.</h3>
            <div class="system-brace"><span>3x + 2y = 4</span><span>−x + 3y = −5</span></div>
          </div>
          <div class="stepper" data-stepper>
            <ol>
              <li class="is-visible"><span>1</span><div><strong>Isolate x in the second equation.</strong><p>x = 3y + 5</p></div></li>
              <li><span>2</span><div><strong>Substitute into the first equation.</strong><p>3(3y + 5) + 2y = 4</p></div></li>
              <li><span>3</span><div><strong>Solve the one-variable equation.</strong><p>11y + 15 = 4 → y = −1</p></div></li>
              <li><span>4</span><div><strong>Back-substitute and verify.</strong><p>x = 3(−1) + 5 = 2, so the solution is (2, −1).</p></div></li>
            </ol>
            <button class="stepper__next" type="button">Show next step <span>→</span></button>
          </div>
        </article>

        <article class="method-panel" data-tab-panel="elimination" hidden>
          <div class="method-panel__summary">
            <span>Use it when</span>
            <h3>Coefficients already match, or can match with small multipliers.</h3>
            <div class="system-brace"><span>3x + 2y = −8</span><span>−5x − 3y = 11</span></div>
          </div>
          <div class="stepper" data-stepper>
            <ol>
              <li class="is-visible"><span>1</span><div><strong>Target y and find the LCM.</strong><p>LCM(2, 3) = 6.</p></div></li>
              <li><span>2</span><div><strong>Multiply the equations.</strong><p>3(E₁): 9x + 6y = −24<br>2(E₂): −10x − 6y = 22</p></div></li>
              <li><span>3</span><div><strong>Add to eliminate y.</strong><p>−x = −2 → x = 2</p></div></li>
              <li><span>4</span><div><strong>Back-substitute.</strong><p>3(2) + 2y = −8 → y = −7, so (2, −7).</p></div></li>
            </ol>
            <button class="stepper__next" type="button">Show next step <span>→</span></button>
          </div>
        </article>
      </div>
    </section>

    <section class="lesson-section" id="modeling">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Model a situation</p>
        <h2>Turn words into<br>two equations.</h2>
        <p>Define variables with units first. Then translate one fact at a time.</p>
      </div>

      <div class="model-grid">
        <article class="coin-lab" data-reveal>
          <div class="tool-label">Coin model</div>
          <h3>46 coins · dimes and quarters · $6.70 total</h3>
          <div class="coin-equations"><span>d + q = 46</span><span>0.10d + 0.25q = 6.70</span></div>
          <label class="range-label" for="quarters-range"><span>Adjust the number of quarters</span><output id="quarters-output">10</output></label>
          <input id="quarters-range" type="range" min="0" max="46" value="10" />
          <div class="coin-totals">
            <div><span id="dime-count">36</span><small>dimes</small></div>
            <div><span id="quarter-count">10</span><small>quarters</small></div>
            <div><span id="coin-value">$6.10</span><small>total value</small></div>
          </div>
          <p id="coin-feedback" class="tool-feedback" aria-live="polite">Keep the coin count fixed at 46. Adjust the mix until the value is $6.70.</p>
        </article>

        <article class="parameter-lab" data-reveal>
          <div class="tool-label">Parameter explorer</div>
          <h3>What changes when a changes?</h3>
          <div class="system-brace system-brace--light"><span>x + y = 0</span><span>x + ay = 4</span></div>
          <label for="parameter-a">Choose a <input id="parameter-a" type="number" step="1" value="2" /></label>
          <div class="parameter-result" id="parameter-result" aria-live="polite"></div>
          <p class="parameter-rule">Subtracting the equations gives <strong>(a − 1)y = 4</strong>. Always inspect the value that makes the coefficient zero.</p>
        </article>
      </div>
    </section>

    <section class="lesson-section readiness" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Worksheet readiness</p>
        <h2>Prove you can<br>make the decisions.</h2>
        <p>These checks target the reasoning behind Problems A, B, E, and F in the supplied notes.</p>
      </div>
      <div class="readiness-grid">
        <article class="check-card" data-reveal>
          <span>A · classify</span>
          <h3>3x − 4y = 16<br>−9x + 12y = −48</h3>
          <label for="check-a">Number of solutions</label>
          <select id="check-a"><option value="">Choose…</option><option value="one">One</option><option value="none">None</option><option value="infinite">Infinitely many</option></select>
          <button type="button" data-check="a">Check reasoning</button>
          <p id="feedback-a" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="check-card" data-reveal>
          <span>B · force parallel</span>
          <h3>6x + 2y = 8<br>kx − y = 5</h3>
          <label for="check-b">The system has no solution when k =</label>
          <input id="check-b" type="number" step="1" />
          <button type="button" data-check="b">Check value</button>
          <p id="feedback-b" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="check-card" data-reveal>
          <span>F · inspect the parameter</span>
          <h3>x + y = 0<br>x + ay = 4</h3>
          <label for="check-f">Which a-value creates the special case?</label>
          <input id="check-f" type="number" step="1" />
          <button type="button" data-check="f">Check value</button>
          <p id="feedback-f" class="answer-feedback" aria-live="polite"></p>
        </article>
      </div>
      <aside class="ready-banner" data-reveal>
        <span>Before moving on</span>
        <p>I can explain <strong>why</strong> a system has one, zero, or infinitely many solutions—not just name the outcome.</p>
        <a href="/pages/sections/9-2.html">Continue to three variables <span aria-hidden="true">→</span></a>
      </aside>
    </section>
  </main>
  ${renderLessonFooter({ next: { href: "/pages/sections/9-2.html", label: "Section 9.2 · Three variables" } })}
`;

function readCoefficients() {
  return ["a1", "b1", "c1", "a2", "b2", "c2"].map((id) =>
    Number(document.querySelector(`#${id}`).value),
  );
}

function classifySystem([a1, b1, c1, a2, b2, c2]) {
  if ((nearlyEqual(a1, 0) && nearlyEqual(b1, 0)) || (nearlyEqual(a2, 0) && nearlyEqual(b2, 0))) {
    return { type: "invalid" };
  }
  const determinant = a1 * b2 - a2 * b1;
  if (Math.abs(determinant) > 1e-9) {
    return {
      type: "unique",
      x: (c1 * b2 - c2 * b1) / determinant,
      y: (a1 * c2 - a2 * c1) / determinant,
    };
  }

  const consistent =
    Math.abs(a1 * c2 - a2 * c1) < 1e-9 &&
    Math.abs(b1 * c2 - b2 * c1) < 1e-9;
  return { type: consistent ? "infinite" : "none" };
}

function lineSegment(a, b, c, bound = 10) {
  const points = [];
  const add = (x, y) => {
    if (Number.isFinite(x) && Number.isFinite(y) && Math.abs(x) <= bound + 1e-7 && Math.abs(y) <= bound + 1e-7) {
      if (!points.some((point) => nearlyEqual(point.x, x) && nearlyEqual(point.y, y))) points.push({ x, y });
    }
  };

  if (Math.abs(b) > 1e-9) {
    add(-bound, (c + a * bound) / b);
    add(bound, (c - a * bound) / b);
  }
  if (Math.abs(a) > 1e-9) {
    add((c + b * bound) / a, -bound);
    add((c - b * bound) / a, bound);
  }
  return points.slice(0, 2);
}

function renderLineGraph() {
  const coefficients = readCoefficients();
  const [a1, b1, c1, a2, b2, c2] = coefficients;
  const result = classifySystem(coefficients);
  const svg = document.querySelector("#line-graph");
  const width = 560;
  const height = 400;
  const bound = 10;
  const px = (x) => ((x + bound) / (bound * 2)) * width;
  const py = (y) => height - ((y + bound) / (bound * 2)) * height;
  const grid = [];

  for (let value = -10; value <= 10; value += 2) {
    const x = px(value);
    const y = py(value);
    grid.push(`<line x1="${x}" y1="0" x2="${x}" y2="${height}" class="graph-minor" />`);
    grid.push(`<line x1="0" y1="${y}" x2="${width}" y2="${y}" class="graph-minor" />`);
    if (value !== 0) {
      grid.push(`<text x="${x + 4}" y="${py(0) - 7}" class="graph-number">${value}</text>`);
      grid.push(`<text x="${px(0) + 7}" y="${y - 4}" class="graph-number">${value}</text>`);
    }
  }

  const renderLine = (a, b, c, className) => {
    const segment = lineSegment(a, b, c, bound);
    if (segment.length < 2) return "";
    return `<line x1="${px(segment[0].x)}" y1="${py(segment[0].y)}" x2="${px(segment[1].x)}" y2="${py(segment[1].y)}" class="${className}" />`;
  };

  const point =
    result.type === "unique" && Math.abs(result.x) <= bound && Math.abs(result.y) <= bound
      ? `<circle cx="${px(result.x)}" cy="${py(result.y)}" r="8" class="intersection-point"><title>Intersection (${formatNumber(result.x)}, ${formatNumber(result.y)})</title></circle>`
      : "";

  svg.innerHTML = `
    <rect width="${width}" height="${height}" rx="12" class="graph-background" />
    ${grid.join("")}
    <line x1="${px(0)}" y1="0" x2="${px(0)}" y2="${height}" class="graph-major" />
    <line x1="0" y1="${py(0)}" x2="${width}" y2="${py(0)}" class="graph-major" />
    ${renderLine(a1, b1, c1, "plotted-line plotted-line--a")}
    ${renderLine(a2, b2, c2, "plotted-line plotted-line--b")}
    ${point}
  `;

  const badge = document.querySelector("#result-badge");
  const title = document.querySelector("#result-title");
  const detail = document.querySelector("#result-detail");
  badge.className = `result-badge--${result.type}`;

  if (result.type === "invalid") {
    badge.textContent = "Check coefficients";
    title.textContent = "Each equation needs an x- or y-term.";
    detail.textContent = "The coefficients a and b cannot both be zero in a linear equation.";
  } else if (result.type === "unique") {
    badge.textContent = "One solution";
    title.textContent = `The lines meet at (${formatNumber(result.x)}, ${formatNumber(result.y)}).`;
    detail.textContent = "The determinant is nonzero, so the equations have different slopes.";
  } else if (result.type === "infinite") {
    badge.textContent = "Infinitely many";
    title.textContent = "The equations describe the same line.";
    detail.textContent = "All corresponding coefficients, including the constant, are proportional.";
  } else {
    badge.textContent = "No solution";
    title.textContent = "The lines are parallel and never meet.";
    detail.textContent = "The x- and y-coefficients are proportional, but the constants are not.";
  }
}

const presets = {
  unique: [3, 1, 6, -1, 2, 2],
  infinite: [3, -4, 16, -9, 12, -48],
  none: [2, -4, -12, -1, 2, 4],
};

document.querySelectorAll(".coefficient-row input").forEach((input) => input.addEventListener("input", renderLineGraph));
document.querySelectorAll("[data-preset]").forEach((button) => {
  button.addEventListener("click", () => {
    ["a1", "b1", "c1", "a2", "b2", "c2"].forEach((id, index) => {
      document.querySelector(`#${id}`).value = presets[button.dataset.preset][index];
    });
    document.querySelectorAll("[data-preset]").forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
    renderLineGraph();
  });
});

function bindSteppers() {
  document.querySelectorAll("[data-stepper]").forEach((stepper) => {
    const steps = [...stepper.querySelectorAll("li")];
    const button = stepper.querySelector(".stepper__next");
    let visible = 1;
    button.addEventListener("click", () => {
      if (visible < steps.length) {
        steps[visible].classList.add("is-visible");
        visible += 1;
      }
      if (visible === steps.length) {
        button.textContent = "All steps revealed ✓";
        button.disabled = true;
      }
    });
  });
}

const quartersRange = document.querySelector("#quarters-range");
function updateCoinLab() {
  const quarters = Number(quartersRange.value);
  const dimes = 46 - quarters;
  const value = dimes * 0.1 + quarters * 0.25;
  document.querySelector("#quarters-output").value = quarters;
  document.querySelector("#dime-count").textContent = dimes;
  document.querySelector("#quarter-count").textContent = quarters;
  document.querySelector("#coin-value").textContent = `$${value.toFixed(2)}`;
  const feedback = document.querySelector("#coin-feedback");
  if (nearlyEqual(value, 6.7)) {
    feedback.className = "tool-feedback is-success";
    feedback.textContent = "Balanced! Now reproduce this result algebraically on the worksheet.";
  } else {
    feedback.className = "tool-feedback";
    feedback.textContent = value < 6.7 ? "The value is too low—replace a dime with a quarter." : "The value is too high—replace a quarter with a dime.";
  }
}
quartersRange.addEventListener("input", updateCoinLab);

const parameterInput = document.querySelector("#parameter-a");
function updateParameterLab() {
  const a = Number(parameterInput.value);
  const result = document.querySelector("#parameter-result");
  if (nearlyEqual(a, 1)) {
    result.innerHTML = `<span class="parameter-result__status">No solution</span><strong>0 = 4 is a contradiction.</strong><p>When a = 1, both equations have the same left side but different constants.</p>`;
    return;
  }
  const y = 4 / (a - 1);
  const x = -y;
  result.innerHTML = `<span class="parameter-result__status">One solution</span><strong>(x, y) = (${formatNumber(x)}, ${formatNumber(y)})</strong><p>In symbols: x = 4/(1 − a), y = 4/(a − 1), with a ≠ 1.</p>`;
}
parameterInput.addEventListener("input", updateParameterLab);

document.querySelector("[data-check='a']").addEventListener("click", () => {
  const value = document.querySelector("#check-a").value;
  setFeedback(document.querySelector("#feedback-a"), value === "infinite", value === "infinite" ? "Correct. Equation 2 is −3 times Equation 1." : "Compare every coefficient—including the constant—using the same multiplier.");
});

document.querySelector("[data-check='b']").addEventListener("click", () => {
  const value = Number(document.querySelector("#check-b").value);
  setFeedback(document.querySelector("#feedback-b"), nearlyEqual(value, -3), nearlyEqual(value, -3) ? "Correct. Both slopes become −3, while the intercepts remain different." : "Rewrite both equations as y = mx + b and make the slopes equal.");
});

document.querySelector("[data-check='f']").addEventListener("click", () => {
  const value = Number(document.querySelector("#check-f").value);
  setFeedback(document.querySelector("#feedback-f"), nearlyEqual(value, 1), nearlyEqual(value, 1) ? "Correct. Then (a − 1)y becomes 0y, producing 0 = 4." : "Set the coefficient a − 1 equal to zero.");
});

bindTabs(document.querySelector(".method-lab"));
bindSteppers();
renderLineGraph();
updateCoinLab();
updateParameterLab();
initLessonChrome();
