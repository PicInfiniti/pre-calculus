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
  ${renderLessonHeader("2.8")}
  <main>
    <section class="lesson-hero lesson-hero--inverses">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 2.8</span> One-to-one functions and inverses</p>
        <h1>Reverse the rule.<br><em>Recover the input.</em></h1>
        <p class="lesson-hero__lede">
          An inverse trades every input for its output. That reversal becomes a function only when
          the original rule never sends two inputs to the same place.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#one-to-one">Start the inverse lab</a>
          <span>About 45 minutes · interactive</span>
        </div>
      </div>
      <div class="inverse-hero-art" aria-hidden="true" data-reveal>
        <svg viewBox="0 0 620 500">
          <defs>
            <pattern id="inverse-hero-grid" width="38" height="38" patternUnits="userSpaceOnUse">
              <path d="M38 0H0V38" fill="none" stroke="currentColor" stroke-width="1" />
            </pattern>
          </defs>
          <rect x="42" y="32" width="536" height="410" rx="18" class="inverse-hero-art__paper" />
          <rect x="62" y="52" width="496" height="370" fill="url(#inverse-hero-grid)" class="inverse-hero-art__grid" />
          <path d="M78 422L448 52" class="inverse-hero-art__mirror" />
          <path d="M101.497 342.114C149.339 289.624 354.982 275.113 458.078 151.132" class="inverse-hero-art__curve inverse-hero-art__curve--forward" />
          <path d="M157.886 398.503C210.376 350.661 224.887 145.018 348.868 41.922" class="inverse-hero-art__curve inverse-hero-art__curve--inverse" />
          <circle cx="259.1" cy="273.4" r="9" class="inverse-hero-art__point inverse-hero-art__point--forward" />
          <circle cx="226.6" cy="240.9" r="9" class="inverse-hero-art__point inverse-hero-art__point--inverse" />
        </svg>
        <span class="inverse-hero-art__tag inverse-hero-art__tag--forward">${mathMarkup(String.raw`(a,b)`)}</span>
        <span class="inverse-hero-art__tag inverse-hero-art__tag--inverse">${mathMarkup(String.raw`(b,a)`)}</span>
        <span class="inverse-hero-art__tag inverse-hero-art__tag--mirror">${mathMarkup(String.raw`y=x`)}</span>
        <div class="inverse-hero-art__identity">${mathMarkup(String.raw`f^{-1}(f(x))=x`)}</div>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Decide whether a function is one-to-one</li>
        <li><span>02</span>Apply the horizontal-line test</li>
        <li><span>03</span>Read inverse values and reflected points</li>
        <li><span>04</span>Find an inverse rule algebraically</li>
      </ol>
    </section>

    <section class="lesson-section" id="one-to-one">
      <div class="inverse-section-lead">
        <div class="lesson-section__intro" data-reveal>
          <p class="lesson-kicker"><span>01</span> Protect every output</p>
          <h2>One input per output.<br>No collisions.</h2>
          <p>A function is one-to-one when different inputs always produce different outputs. A function may obey the vertical-line test and still fail this stronger requirement.</p>
        </div>
        <div class="inverse-definition" data-reveal>
          <span>One-to-one definition</span>
          <strong>${mathMarkup(String.raw`x_1\ne x_2\Longrightarrow f(x_1)\ne f(x_2)`)}</strong>
          <p>Equivalently, if two outputs are equal, the inputs must have been equal.</p>
        </div>
      </div>

      <div class="mapping-lab" data-reveal>
        <div class="mapping-lab__controls">
          <p class="tool-label">Input-output detector</p>
          <div class="mapping-options" role="tablist" aria-label="Mapping examples">
            <button class="is-active" type="button" data-mapping="injective" role="tab" aria-selected="true">No collisions</button>
            <button type="button" data-mapping="collision" role="tab" aria-selected="false">Shared outputs</button>
            <button type="button" data-mapping="split" role="tab" aria-selected="false">Split input</button>
          </div>
          <div class="mapping-rule">
            <span id="mapping-name">A one-to-one function</span>
            <strong id="mapping-formula"></strong>
            <p id="mapping-copy"></p>
          </div>
        </div>
        <div class="mapping-lab__stage">
          <svg id="mapping-chart" viewBox="0 0 660 390" role="img" aria-label="Mapping diagram from inputs to outputs"></svg>
          <div class="mapping-verdict" id="mapping-verdict" aria-live="polite"></div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="horizontal-test">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Scan every height</p>
        <h2>Turn the line sideways.</h2>
        <p>The vertical-line test asks whether a graph is a function. The horizontal-line test asks whether that function is one-to-one: every horizontal line must intersect at most once.</p>
      </div>

      <div class="horizontal-lab" data-reveal>
        <div class="horizontal-lab__graph">
          <svg id="horizontal-chart" viewBox="0 0 640 500" role="img" aria-label="A horizontal line scanning a selected function graph"></svg>
        </div>
        <div class="horizontal-lab__controls">
          <p class="tool-label">Horizontal-line scanner</p>
          <div class="horizontal-options" role="tablist" aria-label="Functions to test">
            <button class="is-active" type="button" data-horizontal="quartic" role="tab" aria-selected="true">Full quartic</button>
            <button type="button" data-horizontal="restricted" role="tab" aria-selected="false">Restricted quartic</button>
            <button type="button" data-horizontal="cubic" role="tab" aria-selected="false">Always rising</button>
          </div>
          <div class="horizontal-equation" id="horizontal-equation"></div>
          <label for="horizontal-y"><span>Move the line to ${mathMarkup(String.raw`y=`)}</span><output id="horizontal-y-output">0</output></label>
          <input id="horizontal-y" type="range" min="-1" max="4" step="0.1" value="0" />
          <div class="horizontal-result" id="horizontal-result" aria-live="polite"></div>
        </div>
      </div>

      <div class="horizontal-rule-cards" data-reveal>
        <article><span>0 intersections</span><strong>Allowed</strong><p>The scan line may miss the graph.</p></article>
        <article><span>1 intersection</span><strong>Allowed</strong><p>One output traces back to one input.</p></article>
        <article><span>2+ intersections</span><strong>Collision</strong><p>One output traces back to multiple inputs.</p></article>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="inverse-graphs">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Exchange coordinates</p>
        <h2>The inverse is a reflection<br>across ${mathMarkup(String.raw`y=x`)}.</h2>
        <p>Switching input and output turns every point ${mathMarkup(String.raw`(a,b)`)} into ${mathMarkup(String.raw`(b,a)`)}, so domain and range trade places.</p>
      </div>

      <div class="reflection-lab" data-reveal>
        <div class="reflection-lab__stage">
          <svg id="reflection-chart" viewBox="0 0 620 620" role="img" aria-label="A function and its inverse reflected across y equals x"></svg>
        </div>
        <div class="reflection-lab__controls">
          <p class="tool-label">Inverse reflection studio</p>
          <div class="reflection-legend">
            <span><i></i>${mathMarkup(String.raw`f`)}</span>
            <span><i></i>${mathMarkup(String.raw`f^{-1}`)}</span>
            <span><i></i>${mathMarkup(String.raw`y=x`)}</span>
          </div>
          <button id="reflection-toggle" type="button" aria-pressed="true">Hide inverse graph</button>
          <label for="reflection-point">Move along the original graph <output id="reflection-point-output">50%</output></label>
          <input id="reflection-point" type="range" min="0" max="100" step="1" value="50" />
          <div class="coordinate-swap">
            <article><span>Point on ${mathMarkup(String.raw`f`)}</span><strong id="reflection-forward-point"></strong></article>
            <i aria-hidden="true">⇄</i>
            <article><span>Point on ${mathMarkup(String.raw`f^{-1}`)}</span><strong id="reflection-inverse-point"></strong></article>
          </div>
          <dl class="inverse-domain-swap">
            <div><dt>${mathMarkup(String.raw`D_f`)}</dt><dd>${mathMarkup(String.raw`[-3,4]`)}</dd></div>
            <div><dt>${mathMarkup(String.raw`R_f`)}</dt><dd>${mathMarkup(String.raw`[-2,2]`)}</dd></div>
            <div><dt>${mathMarkup(String.raw`D_{f^{-1}}`)}</dt><dd>${mathMarkup(String.raw`[-2,2]`)}</dd></div>
            <div><dt>${mathMarkup(String.raw`R_{f^{-1}}`)}</dt><dd>${mathMarkup(String.raw`[-3,4]`)}</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="inverse-values">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Run the machine backward</p>
        <h2>An inverse answers:<br>“Which input made this?”</h2>
        <p>You do not always need an inverse formula. If you know ${mathMarkup(String.raw`f(a)=b`)}, then you immediately know ${mathMarkup(String.raw`f^{-1}(b)=a`)}.</p>
      </div>

      <div class="undo-lab" data-reveal>
        <div class="undo-lab__machine">
          <div class="undo-formula">${mathMarkup(String.raw`f(x)=x^5+x^3+x`)}</div>
          <div class="undo-track">
            <article><span>input</span><strong id="undo-input-value">1</strong></article>
            <i>→</i>
            <article class="undo-track__function"><span>${mathMarkup(String.raw`f`)}</span><strong>forward</strong></article>
            <i>→</i>
            <article><span>output</span><strong id="undo-output-value">3</strong></article>
          </div>
          <div class="undo-track undo-track--reverse">
            <article><span>input</span><strong id="undo-reverse-input">3</strong></article>
            <i>→</i>
            <article class="undo-track__inverse"><span>${mathMarkup(String.raw`f^{-1}`)}</span><strong>undo</strong></article>
            <i>→</i>
            <article><span>output</span><strong id="undo-reverse-output">1</strong></article>
          </div>
        </div>
        <div class="undo-lab__controls">
          <p class="tool-label">Find the input that produces 3</p>
          <label for="undo-x">Try ${mathMarkup(String.raw`x=`)} <output id="undo-x-output">1</output></label>
          <input id="undo-x" type="range" min="-1.5" max="1.5" step="0.1" value="1" />
          <div class="undo-target"><span>Target output</span><strong>${mathMarkup(String.raw`3`)}</strong><i id="undo-target-meter"></i></div>
          <div class="undo-verdict" id="undo-verdict" aria-live="polite"></div>
          <div class="inverse-identities">
            <span>${mathMarkup(String.raw`f^{-1}(f(x))=x`)}</span>
            <span>${mathMarkup(String.raw`f(f^{-1}(x))=x`)}</span>
          </div>
          <p class="inverse-warning"><strong>${mathMarkup(String.raw`f^{-1}`)} is inverse notation.</strong> It does not mean ${mathMarkup(String.raw`\frac1f`)}.</p>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="inverse-algebra">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>05</span> Solve the reversal</p>
        <h2>Switch the roles.<br>Then isolate the output.</h2>
        <p>Write the rule with ${mathMarkup(String.raw`y`)}, exchange ${mathMarkup(String.raw`x`)} and ${mathMarkup(String.raw`y`)}, and solve for the new output. The domain of the inverse is the original range.</p>
      </div>

      <div class="inverse-step-lab" data-reveal>
        <div class="inverse-step-lab__menu">
          <p class="tool-label">Choose a rule to reverse</p>
          <div class="inverse-step-options" role="tablist" aria-label="Inverse algebra examples">
            <button class="is-active" type="button" data-inverse-case="linear" role="tab" aria-selected="true">Linear</button>
            <button type="button" data-inverse-case="cube" role="tab" aria-selected="false">Shifted cube</button>
            <button type="button" data-inverse-case="rational" role="tab" aria-selected="false">Rational</button>
          </div>
          <div class="inverse-step-target">
            <span>Original function</span>
            <strong id="inverse-step-function"></strong>
            <p id="inverse-step-note"></p>
          </div>
        </div>
        <div class="inverse-step-lab__workspace">
          <ol class="inverse-steps" id="inverse-steps" aria-live="polite"></ol>
          <div class="inverse-step-actions">
            <button id="inverse-step-next" type="button">Reveal next step</button>
            <button id="inverse-step-reset" type="button">Reset</button>
          </div>
          <div class="inverse-step-check" id="inverse-step-check"></div>
        </div>
      </div>
    </section>

    <section class="lesson-section readiness readiness--inverses" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>06</span> Final readiness</p>
        <h2>Can you reverse<br>without losing the function?</h2>
        <p>Check the central decisions: uniqueness, inverse values, coordinate swaps, and algebraic reversal.</p>
      </div>
      <div class="inverse-check-grid">
        <article class="inverse-check" data-reveal>
          <span>One-to-one</span>
          <h3>Classify each domain choice.</h3>
          <label><span>${mathMarkup(String.raw`r(t)=t^4-1`)} on all reals</span>
            <select id="check-quartic-full"><option value="">Choose…</option><option value="correct">Not one-to-one</option><option value="a">One-to-one</option></select>
          </label>
          <label><span>${mathMarkup(String.raw`f(x)=x^4+5,\ 0\le x\le2`)}</span>
            <select id="check-quartic-restricted"><option value="">Choose…</option><option value="a">Not one-to-one</option><option value="correct">One-to-one</option></select>
          </label>
          <button id="check-one-to-one" type="button">Check classifications</button>
          <p class="answer-feedback" id="feedback-one-to-one" aria-live="polite"></p>
        </article>
        <article class="inverse-check" data-reveal>
          <span>Inverse values</span>
          <h3>Suppose ${mathMarkup(String.raw`f(4)=17`)}.</h3>
          <label>${mathMarkup(String.raw`f^{-1}(17)=`)} <input id="check-inverse-value" type="number" /></label>
          <label>${mathMarkup(String.raw`f(f^{-1}(4x+3))=`)}
            <select id="check-inverse-composition"><option value="">Choose…</option><option value="a">f(4x + 3)</option><option value="correct">4x + 3</option><option value="b">x</option></select>
          </label>
          <button id="check-inverse-values" type="button">Check values</button>
          <p class="answer-feedback" id="feedback-inverse-values" aria-live="polite"></p>
        </article>
        <article class="inverse-check" data-reveal>
          <span>Coordinate swap</span>
          <h3>If ${mathMarkup(String.raw`(2,-3)`)} lies on ${mathMarkup(String.raw`f`)}, what lies on ${mathMarkup(String.raw`f^{-1}`)}?</h3>
          <div class="inverse-coordinate-answer">
            <label>x <input id="check-inverse-point-x" type="number" /></label>
            <label>y <input id="check-inverse-point-y" type="number" /></label>
          </div>
          <button id="check-inverse-point" type="button">Check point</button>
          <p class="answer-feedback" id="feedback-inverse-point" aria-live="polite"></p>
        </article>
        <article class="inverse-check" data-reveal>
          <span>Algebraic inverse</span>
          <h3>Choose the inverse of ${mathMarkup(String.raw`f(x)=3x-5`)}.</h3>
          <label>Inverse rule
            <select id="check-inverse-rule"><option value="">Choose…</option><option value="a">3x + 5</option><option value="b">(x − 5)/3</option><option value="correct">(x + 5)/3</option></select>
          </label>
          <button id="check-inverse-rule-button" type="button">Check rule</button>
          <p class="answer-feedback" id="feedback-inverse-rule" aria-live="polite"></p>
        </article>
      </div>
      <aside class="ready-banner ready-banner--inverses" data-reveal>
        <span>You are inverse-ready when</span>
        <p>You can justify one-to-one behavior, swap points and domain/range, and verify that two functions undo each other.</p>
        <a href="#horizontal-test">Run another scan <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${renderLessonFooter({
    previous: { href: "pages/sections/2-7.html", label: "Section 2.7 · Combining functions" },
    next: null,
  })}
`;

typesetMath(root);

const heroForwardCurve = document.querySelector(".inverse-hero-art__curve--forward");
const heroForwardPoint = document.querySelector(".inverse-hero-art__point--forward");
const heroInversePoint = document.querySelector(".inverse-hero-art__point--inverse");
const heroReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const heroCurveLength = heroForwardCurve.getTotalLength();
let heroPointFrame = 0;
let heroPointStart = 0;

function positionHeroPoints(progress) {
  const point = heroForwardCurve.getPointAtLength(heroCurveLength * progress);
  heroForwardPoint.setAttribute("cx", point.x);
  heroForwardPoint.setAttribute("cy", point.y);
  heroInversePoint.setAttribute("cx", 500 - point.y);
  heroInversePoint.setAttribute("cy", 500 - point.x);
}

function animateHeroPoints(timestamp) {
  const elapsed = timestamp - heroPointStart;
  const progress = 0.5 + 0.45 * Math.sin((elapsed / 12000) * Math.PI * 2);
  positionHeroPoints(progress);
  heroPointFrame = window.requestAnimationFrame(animateHeroPoints);
}

function syncHeroPointMotion() {
  window.cancelAnimationFrame(heroPointFrame);
  positionHeroPoints(0.5);
  if (heroReducedMotion.matches) return;
  heroPointStart = performance.now();
  heroPointFrame = window.requestAnimationFrame(animateHeroPoints);
}

heroReducedMotion.addEventListener("change", syncHeroPointMotion);
syncHeroPointMotion();

function formatValue(value, digits = 2) {
  if (!Number.isFinite(value)) return "—";
  const rounded = Number(value.toFixed(digits));
  return String(rounded).replace("-", "−");
}

const mappingCases = {
  injective: {
    name: "A one-to-one function",
    formula: String.raw`f(x)=2x+1`,
    inputs: [1, 2, 3, 4],
    outputs: [3, 5, 7, 9],
    arrows: [[0, 0], [1, 1], [2, 2], [3, 3]],
    verdict: "Function and one-to-one",
    copy: "Every input has one arrow, and every used output receives one arrow.",
    tone: "good",
  },
  collision: {
    name: "A function with collisions",
    formula: String.raw`f(x)=x^2`,
    inputs: [-2, -1, 1, 2],
    outputs: [1, 4],
    arrows: [[0, 1], [1, 0], [2, 0], [3, 1]],
    verdict: "Function, but not one-to-one",
    copy: "Each input has one output, but opposite inputs collide at the same output.",
    tone: "warn",
  },
  split: {
    name: "A relation with a split input",
    formula: String.raw`x=2\longmapsto 4\text{ and }7`,
    inputs: [1, 2, 3],
    outputs: [2, 4, 7],
    arrows: [[0, 0], [1, 1], [1, 2], [2, 1]],
    verdict: "Not a function",
    copy: "Input 2 has two arrows. It fails before one-to-one behavior can even be tested.",
    tone: "bad",
  },
};

function mappingY(index, count) {
  if (count === 1) return 195;
  return 92 + (index / (count - 1)) * 206;
}

function renderMapping(name) {
  const selected = mappingCases[name];
  document.querySelectorAll("[data-mapping]").forEach((button) => {
    const active = button.dataset.mapping === name;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelector("#mapping-name").textContent = selected.name;
  setMath(document.querySelector("#mapping-formula"), selected.formula);
  document.querySelector("#mapping-copy").textContent = selected.copy;

  const inputNodes = selected.inputs
    .map((value, index) => `<g class="mapping-node mapping-node--input"><circle cx="130" cy="${mappingY(index, selected.inputs.length)}" r="25"/><text x="130" y="${mappingY(index, selected.inputs.length) + 6}">${formatValue(value)}</text></g>`)
    .join("");
  const outputNodes = selected.outputs
    .map((value, index) => `<g class="mapping-node mapping-node--output"><circle cx="530" cy="${mappingY(index, selected.outputs.length)}" r="25"/><text x="530" y="${mappingY(index, selected.outputs.length) + 6}">${formatValue(value)}</text></g>`)
    .join("");
  const outputCounts = selected.arrows.reduce((counts, [, output]) => {
    counts[output] = (counts[output] || 0) + 1;
    return counts;
  }, {});
  const arrows = selected.arrows
    .map(([input, output]) => {
      const y1 = mappingY(input, selected.inputs.length);
      const y2 = mappingY(output, selected.outputs.length);
      const collision = outputCounts[output] > 1 ? " is-collision" : "";
      return `<path d="M156 ${y1}C270 ${y1} 390 ${y2} 504 ${y2}" class="mapping-arrow${collision}"/>`;
    })
    .join("");
  document.querySelector("#mapping-chart").innerHTML = `
    <rect x="74" y="42" width="112" height="306" rx="56" class="mapping-set mapping-set--input"/>
    <rect x="474" y="42" width="112" height="306" rx="56" class="mapping-set mapping-set--output"/>
    <text x="130" y="27" class="mapping-set-label">INPUTS</text>
    <text x="530" y="27" class="mapping-set-label">OUTPUTS</text>
    ${arrows}${inputNodes}${outputNodes}
  `;
  const verdict = document.querySelector("#mapping-verdict");
  verdict.className = `mapping-verdict is-${selected.tone}`;
  verdict.innerHTML = `<strong>${selected.verdict}</strong><span>${selected.copy}</span>`;
}

document.querySelectorAll("[data-mapping]").forEach((button) => {
  button.addEventListener("click", () => renderMapping(button.dataset.mapping));
});
renderMapping("injective");

function createMapper({ width, height, padding, xMin, xMax, yMin, yMax, equalScale = false }) {
  let resolvedXMin = xMin;
  let resolvedXMax = xMax;
  let resolvedYMin = yMin;
  let resolvedYMax = yMax;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  if (equalScale) {
    const xCenter = (xMin + xMax) / 2;
    const yCenter = (yMin + yMax) / 2;
    const xRange = xMax - xMin;
    const yRange = yMax - yMin;
    const plotRatio = plotWidth / plotHeight;

    if (xRange / yRange < plotRatio) {
      const expandedXRange = yRange * plotRatio;
      resolvedXMin = xCenter - expandedXRange / 2;
      resolvedXMax = xCenter + expandedXRange / 2;
    } else {
      const expandedYRange = xRange / plotRatio;
      resolvedYMin = yCenter - expandedYRange / 2;
      resolvedYMax = yCenter + expandedYRange / 2;
    }
  }

  return {
    width,
    height,
    padding,
    xMin: resolvedXMin,
    xMax: resolvedXMax,
    yMin: resolvedYMin,
    yMax: resolvedYMax,
    equalScale,
    left: padding,
    right: width - padding,
    top: padding,
    bottom: height - padding,
    x(value) {
      return padding + ((value - resolvedXMin) / (resolvedXMax - resolvedXMin)) * plotWidth;
    },
    y(value) {
      return height - padding - ((value - resolvedYMin) / (resolvedYMax - resolvedYMin)) * plotHeight;
    },
  };
}

function graphGrid(mapper) {
  const parts = [];
  if (mapper.equalScale) {
    for (let value = Math.ceil(mapper.xMin); value <= Math.floor(mapper.xMax); value += 1) {
      const x = mapper.x(value);
      parts.push(`<line x1="${x}" y1="${mapper.top}" x2="${x}" y2="${mapper.bottom}" class="inverse-grid-line"/>`);
    }
    for (let value = Math.ceil(mapper.yMin); value <= Math.floor(mapper.yMax); value += 1) {
      const y = mapper.y(value);
      parts.push(`<line x1="${mapper.left}" y1="${y}" x2="${mapper.right}" y2="${y}" class="inverse-grid-line"/>`);
    }
  } else {
    for (let index = 0; index <= 10; index += 1) {
      const x = mapper.left + (index / 10) * (mapper.right - mapper.left);
      const y = mapper.top + (index / 10) * (mapper.bottom - mapper.top);
      parts.push(`<line x1="${x}" y1="${mapper.top}" x2="${x}" y2="${mapper.bottom}" class="inverse-grid-line"/>`);
      parts.push(`<line x1="${mapper.left}" y1="${y}" x2="${mapper.right}" y2="${y}" class="inverse-grid-line"/>`);
    }
  }
  if (mapper.xMin <= 0 && mapper.xMax >= 0) parts.push(`<line x1="${mapper.x(0)}" y1="${mapper.top}" x2="${mapper.x(0)}" y2="${mapper.bottom}" class="inverse-axis"/>`);
  if (mapper.yMin <= 0 && mapper.yMax >= 0) parts.push(`<line x1="${mapper.left}" y1="${mapper.y(0)}" x2="${mapper.right}" y2="${mapper.y(0)}" class="inverse-axis"/>`);
  return parts.join("");
}

function sampledPath(fn, xMin, xMax, mapper, samples = 220) {
  const points = [];
  for (let index = 0; index <= samples; index += 1) {
    const x = xMin + (index / samples) * (xMax - xMin);
    const y = fn(x);
    if (y >= mapper.yMin - 0.2 && y <= mapper.yMax + 0.2) points.push(`${points.length ? "L" : "M"}${mapper.x(x).toFixed(2)} ${mapper.y(y).toFixed(2)}`);
  }
  return points.join(" ");
}

function increasingRoot(target) {
  let low = -1.7;
  let high = 1.7;
  for (let index = 0; index < 50; index += 1) {
    const middle = (low + high) / 2;
    if (middle ** 3 + middle < target) low = middle;
    else high = middle;
  }
  return (low + high) / 2;
}

const horizontalCases = {
  quartic: {
    formula: String.raw`r(t)=t^4-1`,
    xMin: -1.55,
    xMax: 1.55,
    yMin: -2,
    yMax: 5,
    scanMin: -1,
    scanMax: 4,
    initial: 0,
    fn: (x) => x ** 4 - 1,
    intersections: (y) => y < -1 ? [] : nearlyEqual(y, -1) ? [0] : [-((y + 1) ** 0.25), (y + 1) ** 0.25],
    verdict: "The full quartic is not one-to-one.",
    explanation: "Most allowed heights meet the two symmetric sides.",
    oneToOne: false,
  },
  restricted: {
    formula: String.raw`f(x)=x^4+5,\quad 0\le x\le2`,
    xMin: -0.4,
    xMax: 2.4,
    yMin: 3,
    yMax: 22,
    scanMin: 3,
    scanMax: 22,
    initial: 10,
    fn: (x) => x ** 4 + 5,
    curveMin: 0,
    curveMax: 2,
    intersections: (y) => y < 5 || y > 21 ? [] : [(y - 5) ** 0.25],
    verdict: "The restricted quartic is one-to-one.",
    explanation: "On 0 ≤ x ≤ 2, the graph only rises, so no height repeats.",
    oneToOne: true,
  },
  cubic: {
    formula: String.raw`h(x)=x^3+x`,
    xMin: -1.7,
    xMax: 1.7,
    yMin: -7,
    yMax: 7,
    scanMin: -7,
    scanMax: 7,
    initial: 2,
    fn: (x) => x ** 3 + x,
    intersections: (y) => Math.abs(y) > 6.613 ? [] : [increasingRoot(y)],
    verdict: "The increasing cubic is one-to-one.",
    explanation: "A continuously rising graph never returns to a previous height.",
    oneToOne: true,
  },
};

let horizontalCase = "quartic";
const horizontalInput = document.querySelector("#horizontal-y");

function renderHorizontalLab() {
  const selected = horizontalCases[horizontalCase];
  const y = Number(horizontalInput.value);
  const mapper = createMapper({ width: 640, height: 500, padding: 24, xMin: selected.xMin, xMax: selected.xMax, yMin: selected.yMin, yMax: selected.yMax, equalScale: true });
  const curveMin = selected.curveMin ?? selected.xMin;
  const curveMax = selected.curveMax ?? selected.xMax;
  const intersections = selected.intersections(y).filter((x) => x >= curveMin - 0.001 && x <= curveMax + 0.001);
  document.querySelector("#horizontal-chart").innerHTML = `
    ${graphGrid(mapper)}
    <path d="${sampledPath(selected.fn, curveMin, curveMax, mapper)}" class="horizontal-curve"/>
    <line x1="${mapper.left}" y1="${mapper.y(y)}" x2="${mapper.right}" y2="${mapper.y(y)}" class="horizontal-scan-line"/>
    ${intersections.map((x) => `<circle cx="${mapper.x(x)}" cy="${mapper.y(y)}" r="10" class="horizontal-intersection"/>`).join("")}
    <text x="${mapper.left + 8}" y="${mapper.y(y) - 12}" class="horizontal-scan-label">y = ${formatValue(y, 1)}</text>
  `;
  setMath(document.querySelector("#horizontal-equation"), selected.formula);
  document.querySelector("#horizontal-y-output").textContent = formatValue(y, 1);
  const count = intersections.length;
  const result = document.querySelector("#horizontal-result");
  result.className = `horizontal-result ${count > 1 ? "is-collision" : "is-clear"}`;
  result.innerHTML = `<span>${count} intersection${count === 1 ? "" : "s"} at this height</span><strong>${selected.verdict}</strong><p>${selected.explanation}</p>`;
}

document.querySelectorAll("[data-horizontal]").forEach((button) => {
  button.addEventListener("click", () => {
    horizontalCase = button.dataset.horizontal;
    const selected = horizontalCases[horizontalCase];
    horizontalInput.min = selected.scanMin;
    horizontalInput.max = selected.scanMax;
    horizontalInput.step = "0.1";
    horizontalInput.value = selected.initial;
    document.querySelectorAll("[data-horizontal]").forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-selected", String(active));
    });
    renderHorizontalLab();
  });
});
horizontalInput.addEventListener("input", renderHorizontalLab);
renderHorizontalLab();

const reflectionCurve = [[-3, -2], [-2, -0.75], [2, -0.5], [4, 2]];
const reflectionInput = document.querySelector("#reflection-point");
let inverseVisible = true;
const reflectionMapper = createMapper({ width: 620, height: 620, padding: 48, xMin: -5, xMax: 5, yMin: -5, yMax: 5 });

function cubicPath(points, mapper) {
  return `M${mapper.x(points[0][0])} ${mapper.y(points[0][1])}C${mapper.x(points[1][0])} ${mapper.y(points[1][1])} ${mapper.x(points[2][0])} ${mapper.y(points[2][1])} ${mapper.x(points[3][0])} ${mapper.y(points[3][1])}`;
}

function pointAlongCubic(points, ratio) {
  const inverseRatio = 1 - ratio;
  const weights = [inverseRatio ** 3, 3 * inverseRatio ** 2 * ratio, 3 * inverseRatio * ratio ** 2, ratio ** 3];
  return {
    x: points.reduce((sum, point, index) => sum + point[0] * weights[index], 0),
    y: points.reduce((sum, point, index) => sum + point[1] * weights[index], 0),
  };
}

function renderReflection() {
  const ratio = Number(reflectionInput.value) / 100;
  const point = pointAlongCubic(reflectionCurve, ratio);
  const inverseCurve = reflectionCurve.map(([x, y]) => [y, x]);
  document.querySelector("#reflection-chart").innerHTML = `
    ${graphGrid(reflectionMapper)}
    <line x1="${reflectionMapper.x(-5)}" y1="${reflectionMapper.y(-5)}" x2="${reflectionMapper.x(5)}" y2="${reflectionMapper.y(5)}" class="reflection-mirror"/>
    <path d="${cubicPath(reflectionCurve, reflectionMapper)}" class="reflection-curve reflection-curve--forward"/>
    <path d="${cubicPath(inverseCurve, reflectionMapper)}" class="reflection-curve reflection-curve--inverse${inverseVisible ? " is-visible" : ""}"/>
    <circle cx="${reflectionMapper.x(point.x)}" cy="${reflectionMapper.y(point.y)}" r="10" class="reflection-point reflection-point--forward"/>
    <circle cx="${reflectionMapper.x(point.y)}" cy="${reflectionMapper.y(point.x)}" r="10" class="reflection-point reflection-point--inverse${inverseVisible ? " is-visible" : ""}"/>
    <line x1="${reflectionMapper.x(point.x)}" y1="${reflectionMapper.y(point.y)}" x2="${reflectionMapper.x(point.y)}" y2="${reflectionMapper.y(point.x)}" class="reflection-connector${inverseVisible ? " is-visible" : ""}"/>
  `;
  document.querySelector("#reflection-point-output").textContent = `${Math.round(ratio * 100)}%`;
  setMath(document.querySelector("#reflection-forward-point"), String.raw`(${formatValue(point.x)},${formatValue(point.y)})`);
  setMath(document.querySelector("#reflection-inverse-point"), String.raw`(${formatValue(point.y)},${formatValue(point.x)})`);
}

document.querySelector("#reflection-toggle").addEventListener("click", (event) => {
  inverseVisible = !inverseVisible;
  event.currentTarget.setAttribute("aria-pressed", String(inverseVisible));
  event.currentTarget.textContent = inverseVisible ? "Hide inverse graph" : "Show inverse graph";
  renderReflection();
});
reflectionInput.addEventListener("input", renderReflection);
renderReflection();

const undoInput = document.querySelector("#undo-x");

function renderUndo() {
  const x = Number(undoInput.value);
  const output = x ** 5 + x ** 3 + x;
  const success = nearlyEqual(output, 3, 0.001);
  document.querySelector("#undo-x-output").textContent = formatValue(x, 1);
  document.querySelector("#undo-input-value").textContent = formatValue(x, 1);
  document.querySelector("#undo-output-value").textContent = formatValue(output, 2);
  document.querySelector("#undo-reverse-input").textContent = formatValue(output, 2);
  document.querySelector("#undo-reverse-output").textContent = formatValue(x, 1);
  const meter = document.querySelector("#undo-target-meter");
  meter.style.width = `${Math.max(3, 100 - Math.min(100, Math.abs(output - 3) * 18))}%`;
  const verdict = document.querySelector("#undo-verdict");
  verdict.className = `undo-verdict ${success ? "is-correct" : ""}`;
  verdict.innerHTML = success
    ? `<strong>Target found.</strong>${mathMarkup(String.raw`f(1)=3\Longrightarrow f^{-1}(3)=1`)}`
    : `<strong>Keep searching.</strong><span>The current output is ${formatValue(output, 2)}; move it toward 3.</span>`;
  typesetMath(verdict);
}

undoInput.addEventListener("input", renderUndo);
renderUndo();

const inverseCases = {
  linear: {
    formula: String.raw`f(x)=3x-5`,
    note: "A nonhorizontal linear function is one-to-one on all real numbers.",
    steps: [
      { label: "Write with y", math: String.raw`y=3x-5` },
      { label: "Switch x and y", math: String.raw`x=3y-5` },
      { label: "Solve for y", math: String.raw`y=\frac{x+5}{3}` },
      { label: "Name the inverse", math: String.raw`f^{-1}(x)=\frac{x+5}{3}` },
    ],
    check: String.raw`f\!\left(f^{-1}(x)\right)=3\left(\frac{x+5}{3}\right)-5=x`,
  },
  cube: {
    formula: String.raw`f(x)=(x-2)^3+1`,
    note: "A shifted cubic remains one-to-one because it rises through its entire domain.",
    steps: [
      { label: "Write with y", math: String.raw`y=(x-2)^3+1` },
      { label: "Switch x and y", math: String.raw`x=(y-2)^3+1` },
      { label: "Undo cube, then shift", math: String.raw`\sqrt[3]{x-1}=y-2` },
      { label: "Name the inverse", math: String.raw`f^{-1}(x)=\sqrt[3]{x-1}+2` },
    ],
    check: String.raw`f^{-1}(f(x))=\sqrt[3]{(x-2)^3}+2=x`,
  },
  rational: {
    formula: String.raw`f(x)=\frac{2x+3}{x-4}`, 
    note: "Track excluded values: the original omits x = 4, while the inverse omits x = 2.",
    steps: [
      { label: "Write with y", math: String.raw`y=\frac{2x+3}{x-4}` },
      { label: "Switch x and y", math: String.raw`x=\frac{2y+3}{y-4}` },
      { label: "Collect the y terms", math: String.raw`xy-4x=2y+3\Longrightarrow y(x-2)=4x+3` },
      { label: "Name the inverse", math: String.raw`f^{-1}(x)=\frac{4x+3}{x-2},\quad x\ne2` },
    ],
    check: String.raw`D_{f^{-1}}=R_f=(-\infty,2)\cup(2,\infty)`,
  },
};

let inverseCase = "linear";
let revealedInverseSteps = 1;

function renderInverseSteps() {
  const selected = inverseCases[inverseCase];
  setMath(document.querySelector("#inverse-step-function"), selected.formula);
  document.querySelector("#inverse-step-note").textContent = selected.note;
  document.querySelector("#inverse-steps").innerHTML = selected.steps.map((step, index) => `
    <li class="${index < revealedInverseSteps ? "is-visible" : ""}">
      <span>${index + 1}</span>
      <div><small>${index < revealedInverseSteps ? step.label : "Hidden step"}</small><strong>${index < revealedInverseSteps ? mathMarkup(step.math) : "?"}</strong></div>
    </li>
  `).join("");
  typesetMath(document.querySelector("#inverse-steps"));
  const complete = revealedInverseSteps === selected.steps.length;
  const next = document.querySelector("#inverse-step-next");
  next.disabled = complete;
  next.textContent = complete ? "Inverse complete" : "Reveal next step";
  const check = document.querySelector("#inverse-step-check");
  if (complete) setMath(check, selected.check);
  else check.textContent = "Complete the reversal to reveal a verification.";
}

document.querySelectorAll("[data-inverse-case]").forEach((button) => {
  button.addEventListener("click", () => {
    inverseCase = button.dataset.inverseCase;
    revealedInverseSteps = 1;
    document.querySelectorAll("[data-inverse-case]").forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-selected", String(active));
    });
    renderInverseSteps();
  });
});
document.querySelector("#inverse-step-next").addEventListener("click", () => {
  revealedInverseSteps = Math.min(inverseCases[inverseCase].steps.length, revealedInverseSteps + 1);
  renderInverseSteps();
});
document.querySelector("#inverse-step-reset").addEventListener("click", () => {
  revealedInverseSteps = 1;
  renderInverseSteps();
});
renderInverseSteps();

document.querySelector("#check-one-to-one").addEventListener("click", () => {
  const correct = document.querySelector("#check-quartic-full").value === "correct" && document.querySelector("#check-quartic-restricted").value === "correct";
  setMathFeedback(
    document.querySelector("#feedback-one-to-one"),
    correct,
    correct
      ? `Correct. The unrestricted quartic repeats heights, while restricting to ${mathMarkup(String.raw`0\le x\le2`)} keeps only its increasing side.`
      : "Use the horizontal-line test. The full quartic has two symmetric sides; the restricted graph has only the right side.",
  );
});

document.querySelector("#check-inverse-values").addEventListener("click", () => {
  const correct = Number(document.querySelector("#check-inverse-value").value) === 4 && document.querySelector("#check-inverse-composition").value === "correct";
  setMathFeedback(
    document.querySelector("#feedback-inverse-values"),
    correct,
    correct
      ? `Correct. ${mathMarkup(String.raw`f(4)=17`)} reverses to ${mathMarkup(String.raw`f^{-1}(17)=4`)}, and inverse composition returns its input.`
      : "Reverse the known input-output pair. A function composed with its inverse returns the entire starting expression.",
  );
});

document.querySelector("#check-inverse-point").addEventListener("click", () => {
  const correct = Number(document.querySelector("#check-inverse-point-x").value) === -3 && Number(document.querySelector("#check-inverse-point-y").value) === 2;
  setMathFeedback(
    document.querySelector("#feedback-inverse-point"),
    correct,
    correct
      ? `Correct. Reflection across ${mathMarkup(String.raw`y=x`)} switches ${mathMarkup(String.raw`(2,-3)`)} to ${mathMarkup(String.raw`(-3,2)`)}`
      : "Switch the coordinate positions: the old y-value becomes the new x-value.",
  );
});

document.querySelector("#check-inverse-rule-button").addEventListener("click", () => {
  const correct = document.querySelector("#check-inverse-rule").value === "correct";
  setMathFeedback(
    document.querySelector("#feedback-inverse-rule"),
    correct,
    correct
      ? `Correct. Switching variables in ${mathMarkup(String.raw`y=3x-5`)} and solving gives ${mathMarkup(String.raw`f^{-1}(x)=\frac{x+5}{3}`)}.`
      : "Switch x and y, then undo subtraction by adding 5 before dividing by 3.",
  );
});

initLessonChrome();
