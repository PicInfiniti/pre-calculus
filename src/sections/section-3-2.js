import "../assets/sass/lesson.sass";
import {
  initLessonChrome,
  renderLessonFooter,
  renderLessonHeader,
  setFeedback,
} from "./shared";

const root = document.querySelector("#app");
const math = (content, display = false) =>
  `<span class="native-math${display ? " native-math--display" : ""}">${content}</span>`;

root.innerHTML = `
  ${renderLessonHeader("3.2")}
  <main>
    <section class="lesson-hero lesson-hero--polynomials">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 3.2</span> Polynomial functions and their graphs</p>
        <h1>Read the ends.<br><em>Decode the roots.</em></h1>
        <p class="lesson-hero__lede">
          Every polynomial leaves clues: its leading term directs the tails, its factors mark the
          intercepts, and each multiplicity decides whether the graph crosses, bounces, or lingers.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#polynomial-id">Begin curve forensics</a>
          <span>About 55 minutes · interactive</span>
        </div>
      </div>
      <div class="polynomial-hero-art" aria-hidden="true" data-reveal>
        <svg viewBox="0 0 660 500">
          <defs>
            <pattern id="polynomial-hero-grid" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M36 0H0V36" fill="none" stroke="currentColor" stroke-width="1" />
            </pattern>
            <linearGradient id="polynomial-hero-gradient" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stop-color="#42b8d5" />
              <stop offset=".5" stop-color="#a692e8" />
              <stop offset="1" stop-color="#ff6b48" />
            </linearGradient>
          </defs>
          <rect x="45" y="35" width="570" height="414" rx="20" class="polynomial-hero-art__paper" />
          <rect x="65" y="55" width="530" height="374" fill="url(#polynomial-hero-grid)" class="polynomial-hero-art__grid" />
          <path d="M75 245H590M330 65V425" class="polynomial-hero-art__axis" />
          <path id="polynomial-hero-path" d="M82 400C120 360 121 247 167 245C206 243 185 345 242 348C314 352 278 239 352 245C417 251 402 122 465 125C531 128 528 220 585 78" class="polynomial-hero-art__curve" />
          <g class="polynomial-hero-art__roots">
            <circle cx="167" cy="245" r="7" />
            <circle cx="352" cy="245" r="7" />
          </g>
          <circle id="polynomial-hero-point" cx="82" cy="400" r="10" class="polynomial-hero-art__point" />
        </svg>
        <span class="polynomial-hero-art__tag polynomial-hero-art__tag--degree">degree controls turns</span>
        <span class="polynomial-hero-art__tag polynomial-hero-art__tag--zero">zeros anchor the curve</span>
        <div class="polynomial-hero-art__formula">${math("<var>P</var>(<var>x</var>) = <var>a</var><sub><var>n</var></sub><var>x</var><sup><var>n</var></sup> + ⋯ + <var>a</var><sub>1</sub><var>x</var> + <var>a</var><sub>0</sub>")}</div>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Recognize polynomials and their degree</li>
        <li><span>02</span>Predict both ends from the leading term</li>
        <li><span>03</span>Turn factors into graph behavior</li>
        <li><span>04</span>Reconstruct formulas from graph clues</li>
      </ol>
    </section>

    <section class="lesson-section" id="polynomial-id">
      <div class="polynomial-section-lead">
        <div class="lesson-section__intro" data-reveal>
          <p class="lesson-kicker"><span>01</span> Check the ingredients</p>
          <h2>Real coefficients.<br>Whole-number powers.</h2>
          <p>A polynomial is a finite sum of terms ${math("<var>a</var><var>x</var><sup><var>k</var></sup>")} where every exponent ${math("<var>k</var>")} is a nonnegative integer. Coefficients may be any real numbers, including fractions, radicals, and ${math("π")}.</p>
        </div>
        <div class="polynomial-definition" data-reveal>
          <span>Polynomial anatomy</span>
          <dl>
            <div><dt>${math("<var>a</var><sub><var>n</var></sub>")}</dt><dd>leading coefficient</dd></div>
            <div><dt>${math("<var>a</var><sub><var>n</var></sub><var>x</var><sup><var>n</var></sup>")}</dt><dd>leading term</dd></div>
            <div><dt>${math("<var>a</var><sub>0</sub>")}</dt><dd>constant term</dd></div>
            <div><dt>${math("<var>n</var>")}</dt><dd>degree</dd></div>
          </dl>
        </div>
      </div>

      <div class="identity-lab" data-reveal>
        <div class="identity-lab__list" role="tablist" aria-label="Expressions to classify">
          <button class="is-active" type="button" data-identity="fractional" role="tab" aria-selected="true">${math("3<var>x</var><sup>1/4</sup> + 5")}</button>
          <button type="button" data-identity="negative" role="tab" aria-selected="false">${math("−<span class=\"native-frac\"><span>1</span><span>4</span></span><var>x</var><sup>−3</sup> + 5<var>x</var>")}</button>
          <button type="button" data-identity="constant" role="tab" aria-selected="false">${math("6")}</button>
          <button type="button" data-identity="radical" role="tab" aria-selected="false">${math("√3<var>x</var><sup>3</sup> + 5<var>x</var> − 1")}</button>
          <button type="button" data-identity="factored" role="tab" aria-selected="false">${math("−π<var>x</var><sup>4</sup>(<var>x</var> − 3)<sup>2</sup>(<var>x</var> + 5)<sup>3</sup>")}</button>
        </div>
        <div class="identity-lab__result" id="identity-result" aria-live="polite"></div>
      </div>

      <div class="curve-rules" data-reveal>
        <article>
          <svg class="curve-rule-icon curve-rule-icon--smooth" viewBox="0 0 120 52" aria-hidden="true"><path d="M4 34C20 45 41 45 57 31S88 9 116 18" /></svg>
          <span>Shape</span><strong>Smooth and continuous</strong><p>No breaks, holes, corners, or sharp cusps.</p>
        </article>
        <article>
          <svg class="curve-rule-icon curve-rule-icon--turns" viewBox="0 0 120 52" aria-hidden="true"><path d="M4 38C18 5 36 5 49 29S75 50 89 22S108 7 116 19" /></svg>
          <span>Turning limit</span><strong>At most ${math("<var>n</var> − 1")} local extrema</strong><p>A degree-4 polynomial cannot have five turning points.</p>
        </article>
        <article>
          <svg class="curve-rule-icon curve-rule-icon--domain" viewBox="0 0 120 52" aria-hidden="true"><path d="M8 26H112M8 26L18 18M8 26L18 34M112 26L102 18M112 26L102 34" /></svg>
          <span>Domain</span><strong>${math("(−∞, ∞)")}</strong><p>Every real input is allowed in a polynomial.</p>
        </article>
      </div>

      <div class="curve-screening" data-reveal>
        <div class="curve-screening__intro">
          <p class="tool-label">Polynomial candidate scanner</p>
          <h3>Which shape could belong to a polynomial?</h3>
          <p>A visual check can rule a graph out, but it cannot prove a formula is polynomial.</p>
        </div>
        <div class="curve-screening__choices">
          <button type="button" data-curve-candidate="smooth" aria-label="Choose the smooth continuous wave">
            <svg viewBox="0 0 180 110" aria-hidden="true"><path d="M10 85C45 100 50 18 91 42S132 99 170 18"/></svg><span>Smooth wave</span>
          </button>
          <button type="button" data-curve-candidate="cusp" aria-label="Choose the graph with a sharp cusp">
            <svg viewBox="0 0 180 110" aria-hidden="true"><path d="M10 88C50 87 67 70 90 18C113 70 130 87 170 88"/></svg><span>Sharp cusp</span>
          </button>
          <button type="button" data-curve-candidate="hole" aria-label="Choose the graph with a hole">
            <svg viewBox="0 0 180 110" aria-hidden="true"><path d="M10 88C42 86 55 62 76 50M101 43C124 35 142 24 170 18"/><circle cx="89" cy="46" r="8"/></svg><span>Broken curve</span>
          </button>
          <button type="button" data-curve-candidate="corner" aria-label="Choose the graph with a corner">
            <svg viewBox="0 0 180 110" aria-hidden="true"><path d="M10 82H78L105 28H170"/></svg><span>Hard corner</span>
          </button>
        </div>
        <p class="curve-screening__feedback" id="curve-screening-feedback" aria-live="polite">Choose a graph to inspect its evidence.</p>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="end-behavior">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Follow the leading term</p>
        <h2>Far from the origin,<br>one term takes over.</h2>
        <p>The highest-power term determines the tails. Degree parity decides whether the ends agree; the sign of the leading coefficient decides whether the right end rises or falls.</p>
      </div>

      <div class="end-lab" data-reveal>
        <div class="end-lab__stage">
          <svg id="end-chart" viewBox="0 0 680 500" role="img" aria-label="A polynomial curve showing selected end behavior"></svg>
          <div class="end-arrows"><span id="end-left-arrow"></span><span id="end-right-arrow"></span></div>
        </div>
        <div class="end-lab__controls">
          <p class="tool-label">End-behavior compass</p>
          <fieldset>
            <legend>Degree</legend>
            <div class="end-choice" role="radiogroup" aria-label="Degree parity">
              <button class="is-active" type="button" data-parity="even" role="radio" aria-checked="true">Even</button>
              <button type="button" data-parity="odd" role="radio" aria-checked="false">Odd</button>
            </div>
          </fieldset>
          <fieldset>
            <legend>Leading coefficient</legend>
            <div class="end-choice" role="radiogroup" aria-label="Leading coefficient sign">
              <button class="is-active" type="button" data-leading="positive" role="radio" aria-checked="true">Positive</button>
              <button type="button" data-leading="negative" role="radio" aria-checked="false">Negative</button>
            </div>
          </fieldset>
          <div class="end-leading" id="end-leading"></div>
          <dl class="end-statements" id="end-statements"></dl>
          <p class="end-memory" id="end-memory"></p>
        </div>
      </div>

      <div class="leading-term-examples" data-reveal>
        <article><span>Look past lower powers</span><strong>${math("2<var>x</var> − 8<var>x</var><sup>2</sup> + <var>x</var><sup>5</sup> − 13")}</strong><p>The leading term is ${math("<var>x</var><sup>5</sup>")}: odd degree, positive coefficient, left down and right up.</p></article>
        <article><span>Ignore the large constant</span><strong>${math("−2<var>x</var><sup>6</sup> + 12<var>x</var> + 100")}</strong><p>The leading term is ${math("−2<var>x</var><sup>6</sup>")}: even degree, negative coefficient, both ends down.</p></article>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="multiplicity">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Inspect each zero</p>
        <h2>Cross, bounce,<br>or cross with a wiggle.</h2>
        <p>If ${math("<var>r</var>")} is a zero, then ${math("(<var>x</var> − <var>r</var>)")} is a factor. Its multiplicity counts how many times that factor repeats and controls the graph’s local behavior.</p>
      </div>

      <div class="multiplicity-lab" data-reveal>
        <div class="multiplicity-lab__controls">
          <p class="tool-label">Root microscope</p>
          <label for="multiplicity-value"><span>Multiplicity ${math("<var>m</var>")}</span><output id="multiplicity-output">1</output></label>
          <input id="multiplicity-value" type="range" min="1" max="4" step="1" value="1" />
          <div class="multiplicity-factor" id="multiplicity-factor"></div>
          <div class="multiplicity-verdict" id="multiplicity-verdict"></div>
          <div class="multiplicity-rule-strip">
            <span><i>odd</i> changes sign</span>
            <span><i>even</i> keeps its sign</span>
          </div>
        </div>
        <div class="multiplicity-lab__stage">
          <svg id="multiplicity-chart" viewBox="0 0 620 500" role="img" aria-label="A polynomial near a zero with adjustable multiplicity"></svg>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="factor-sketch">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Assemble the clues</p>
        <h2>Sketch from factors<br>before plotting points.</h2>
        <p>Start with zeros and multiplicities, add the total degree and leading coefficient, mark the vertical intercept, then connect everything with a smooth curve that obeys the end behavior.</p>
      </div>

      <div class="factor-lab" data-reveal>
        <div class="factor-lab__stage">
          <svg id="factor-chart" viewBox="0 0 720 540" role="img" aria-label="Graph of a polynomial built from three factored zeros"></svg>
          <p>Vertical scale compressed to keep the full shape visible.</p>
        </div>
        <div class="factor-lab__controls">
          <p class="tool-label">Factor-to-graph blueprint</p>
          <div class="factor-equation">${math("<var>f</var>(<var>x</var>) = (<var>x</var> − 2)<sup>3</sup>(<var>x</var> + 1)<sup>2</sup>(<var>x</var> + 4)", true)}</div>
          <div class="factor-roots" role="tablist" aria-label="Zeros to inspect">
            <button class="is-active" type="button" data-factor-root="2" role="tab" aria-selected="true"><span>${math("<var>x</var> = 2")}</span><strong>multiplicity 3</strong></button>
            <button type="button" data-factor-root="-1" role="tab" aria-selected="false"><span>${math("<var>x</var> = −1")}</span><strong>multiplicity 2</strong></button>
            <button type="button" data-factor-root="-4" role="tab" aria-selected="false"><span>${math("<var>x</var> = −4")}</span><strong>multiplicity 1</strong></button>
          </div>
          <div class="factor-focus" id="factor-focus" aria-live="polite"></div>
          <dl class="factor-summary">
            <div><dt>Degree</dt><dd>6</dd></div>
            <div><dt>Leading coefficient</dt><dd>+1</dd></div>
            <div><dt>End behavior</dt><dd>up / up</dd></div>
            <div><dt>${math("<var>y</var>")}-intercept</dt><dd>${math("(0, −32)")}</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="matching">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>05</span> Match the fingerprint</p>
        <h2>Factor first.<br>Then choose the silhouette.</h2>
        <p>Do not chase every bend. Match the invariant clues: degree parity, leading sign, real zeros, and multiplicities.</p>
      </div>

      <div class="matching-lab" data-reveal>
        <div class="matching-lab__prompt">
          <p class="tool-label">Select an equation</p>
          <div class="matching-equations" role="tablist" aria-label="Polynomial equations">
            <button class="is-active" type="button" data-match-case="q" role="tab" aria-selected="true">${math("<var>Q</var>(<var>x</var>) = −<var>x</var><sup>2</sup>(<var>x</var><sup>2</sup> − 4)")}</button>
            <button type="button" data-match-case="s" role="tab" aria-selected="false">${math("<var>S</var>(<var>x</var>) = ½<var>x</var><sup>6</sup> − 2<var>x</var><sup>4</sup>")}</button>
            <button type="button" data-match-case="u" role="tab" aria-selected="false">${math("<var>U</var>(<var>x</var>) = −<var>x</var><sup>3</sup> + 2<var>x</var><sup>2</sup>")}</button>
          </div>
          <div class="matching-clues" id="matching-clues"></div>
        </div>
        <div class="matching-lab__graphs" id="matching-graphs">
          <button type="button" data-match-graph="a"><span>A</span><svg id="match-graph-a" viewBox="0 0 300 220" aria-hidden="true"></svg></button>
          <button type="button" data-match-graph="b"><span>B</span><svg id="match-graph-b" viewBox="0 0 300 220" aria-hidden="true"></svg></button>
          <button type="button" data-match-graph="c"><span>C</span><svg id="match-graph-c" viewBox="0 0 300 220" aria-hidden="true"></svg></button>
        </div>
        <div class="matching-actions">
          <button id="matching-check" type="button">Check the match</button>
          <p id="matching-feedback" aria-live="polite"></p>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="reconstruct">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>06</span> Reconstruct the formula</p>
        <h2>Let the graph<br>write the factors.</h2>
        <p>Use one factor for each zero, raise it to the smallest multiplicity suggested by the contact behavior, then use one known point to determine the vertical scale ${math("<var>a</var>")}.</p>
      </div>

      <div class="reconstruct-lab" data-reveal>
        <div class="reconstruct-lab__stage">
          <svg id="reconstruct-chart" viewBox="0 0 680 520" role="img" aria-label="A polynomial graph with marked zeros and vertical intercept"></svg>
        </div>
        <div class="reconstruct-lab__controls">
          <p class="tool-label">Graph-to-formula builder</p>
          <div class="reconstruct-options" role="tablist" aria-label="Graphs to reconstruct">
            <button class="is-active" type="button" data-reconstruct="ridge" role="tab" aria-selected="true">Mixed contacts</button>
            <button type="button" data-reconstruct="valley" role="tab" aria-selected="false">Deep valley</button>
          </div>
          <ol class="reconstruct-steps" id="reconstruct-steps"></ol>
          <button id="reconstruct-next" type="button">Reveal next clue</button>
          <div class="reconstruct-result" id="reconstruct-result"></div>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="degree-bound">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>07</span> Bound the degree</p>
        <h2>Count turns.<br>Then inspect the tails.</h2>
        <p>If a graph has ${math("<var>T</var>")} turning points, its degree is at least ${math("<var>T</var> + 1")}. End behavior then tells you whether that degree must be even or odd and reveals the leading sign.</p>
      </div>

      <div class="degree-lab" data-reveal>
        <div class="degree-lab__controls">
          <p class="tool-label">Minimum-degree detector</p>
          <label for="degree-turns"><span>Visible turning points</span><output id="degree-turns-output">4</output></label>
          <input id="degree-turns" type="range" min="0" max="6" step="1" value="4" />
          <fieldset><legend>Tail relationship</legend><select id="degree-tail-relation"><option value="opposite">Opposite directions</option><option value="same">Same direction</option></select></fieldset>
          <fieldset><legend>Right tail</legend><select id="degree-right-tail"><option value="up">Rises</option><option value="down">Falls</option></select></fieldset>
        </div>
        <div class="degree-lab__result" id="degree-result" aria-live="polite"></div>
      </div>
    </section>

    <section class="lesson-section readiness readiness--polynomials" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>08</span> Final readiness</p>
        <h2>Can you read<br>the polynomial fingerprint?</h2>
        <p>Check the decisions that drive a reliable sketch: membership, tails, multiplicities, and degree bounds.</p>
      </div>
      <div class="polynomial-check-grid">
        <article class="polynomial-check" data-reveal>
          <span>Polynomial ID</span>
          <h3>Classify ${math("−π<var>x</var><sup>4</sup>(<var>x</var> − 3)<sup>2</sup>(<var>x</var> + 5)<sup>3</sup>")}.</h3>
          <label>Classification <select id="check-polynomial"><option value="">Choose…</option><option value="a">Not a polynomial</option><option value="correct">Polynomial, degree 9</option><option value="b">Polynomial, degree 12</option></select></label>
          <button id="check-polynomial-button" type="button">Check classification</button>
          <p class="answer-feedback" id="feedback-polynomial" aria-live="polite"></p>
        </article>
        <article class="polynomial-check" data-reveal>
          <span>End behavior</span>
          <h3>Describe the tails of ${math("<var>y</var> = −2<var>x</var><sup>6</sup> + 12<var>x</var> + 100")}.</h3>
          <label>Left tail <select id="check-left-tail"><option value="">Choose…</option><option value="a">Rises</option><option value="correct">Falls</option></select></label>
          <label>Right tail <select id="check-right-tail"><option value="">Choose…</option><option value="a">Rises</option><option value="correct">Falls</option></select></label>
          <button id="check-ends-button" type="button">Check tails</button>
          <p class="answer-feedback" id="feedback-ends" aria-live="polite"></p>
        </article>
        <article class="polynomial-check" data-reveal>
          <span>Multiplicity</span>
          <h3>For ${math("(<var>x</var> − 2)<sup>3</sup>(<var>x</var> + 1)<sup>2</sup>(<var>x</var> + 4)")}, match each zero to its behavior.</h3>
          <label>${math("<var>x</var> = 2")} <select id="check-root-2"><option value="">Choose…</option><option value="correct">Crosses with a wiggle</option><option value="a">Bounces</option><option value="b">Crosses directly</option></select></label>
          <label>${math("<var>x</var> = −1")} <select id="check-root-negative-1"><option value="">Choose…</option><option value="a">Crosses with a wiggle</option><option value="correct">Bounces</option><option value="b">Crosses directly</option></select></label>
          <label>${math("<var>x</var> = −4")} <select id="check-root-negative-4"><option value="">Choose…</option><option value="a">Crosses with a wiggle</option><option value="b">Bounces</option><option value="correct">Crosses directly</option></select></label>
          <button id="check-roots-button" type="button">Check behaviors</button>
          <p class="answer-feedback" id="feedback-roots" aria-live="polite"></p>
        </article>
        <article class="polynomial-check" data-reveal>
          <span>Degree bound</span>
          <h3>A smooth graph has four turning points, with the left tail falling and right tail rising.</h3>
          <label>Smallest degree <input id="check-degree" type="number" /></label>
          <label>Leading sign <select id="check-leading-sign"><option value="">Choose…</option><option value="correct">Positive</option><option value="a">Negative</option></select></label>
          <button id="check-degree-button" type="button">Check degree</button>
          <p class="answer-feedback" id="feedback-degree" aria-live="polite"></p>
        </article>
      </div>
      <aside class="ready-banner ready-banner--polynomials" data-reveal>
        <span>You are polynomial-ready when</span>
        <p>You can predict the tails from one term, translate every real zero into a factor, choose multiplicities from graph behavior, and justify the smallest possible degree.</p>
        <a href="#end-behavior">Run another fingerprint <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${renderLessonFooter({
    previous: { href: "pages/sections/3-1.html", label: "Section 3.1 · Quadratic functions" },
    next: { href: "pages/sections/3-6.html", label: "Section 3.6 · Rational functions" },
  })}
`;

function formatNumber(value, digits = 2) {
  if (!Number.isFinite(value)) return "undefined";
  if (Math.abs(value) < 1e-10) return "0";
  return String(Number(value.toFixed(digits))).replace("-", "−");
}

function makeMapper({ width, height, padding, xMin, xMax, yMin, yMax }) {
  return {
    x: (value) => padding + ((value - xMin) / (xMax - xMin)) * (width - padding * 2),
    y: (value) => height - padding - ((value - yMin) / (yMax - yMin)) * (height - padding * 2),
    width, height, padding, xMin, xMax, yMin, yMax,
  };
}

function graphScaffold(mapper, { xStep = 1, yStep = 1, labels = true } = {}) {
  const lines = [];
  const text = [];
  for (let x = Math.ceil(mapper.xMin / xStep) * xStep; x <= mapper.xMax + 1e-8; x += xStep) {
    const axis = Math.abs(x) < 1e-8;
    lines.push(`<line x1="${mapper.x(x)}" y1="${mapper.padding}" x2="${mapper.x(x)}" y2="${mapper.height - mapper.padding}" class="polynomial-grid${axis ? " polynomial-grid--axis" : ""}"/>`);
    if (labels && !axis) text.push(`<text x="${mapper.x(x)}" y="${mapper.y(0) + 19}" text-anchor="middle" class="polynomial-grid-label">${formatNumber(x)}</text>`);
  }
  for (let y = Math.ceil(mapper.yMin / yStep) * yStep; y <= mapper.yMax + 1e-8; y += yStep) {
    const axis = Math.abs(y) < 1e-8;
    lines.push(`<line x1="${mapper.padding}" y1="${mapper.y(y)}" x2="${mapper.width - mapper.padding}" y2="${mapper.y(y)}" class="polynomial-grid${axis ? " polynomial-grid--axis" : ""}"/>`);
  }
  return `<rect x="${mapper.padding}" y="${mapper.padding}" width="${mapper.width - 2 * mapper.padding}" height="${mapper.height - 2 * mapper.padding}" class="polynomial-plot-bg"/>${lines.join("")}${text.join("")}`;
}

function functionPath(mapper, fn, samples = 320, transform = (value) => value) {
  let path = "";
  let drawing = false;
  const margin = (mapper.yMax - mapper.yMin) * 0.35;
  for (let index = 0; index <= samples; index += 1) {
    const x = mapper.xMin + ((mapper.xMax - mapper.xMin) * index) / samples;
    const y = transform(fn(x));
    const visible = Number.isFinite(y) && y >= mapper.yMin - margin && y <= mapper.yMax + margin;
    if (visible) {
      path += `${drawing ? "L" : "M"}${mapper.x(x).toFixed(2)} ${mapper.y(y).toFixed(2)}`;
      drawing = true;
    } else {
      drawing = false;
    }
  }
  return path;
}

const heroPath = document.querySelector("#polynomial-hero-path");
const heroPoint = document.querySelector("#polynomial-hero-point");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const heroLength = heroPath.getTotalLength();
let heroFrame = 0;
let heroStart = 0;

function animateHero(timestamp) {
  const ratio = ((timestamp - heroStart) % 11000) / 11000;
  const point = heroPath.getPointAtLength(heroLength * ratio);
  heroPoint.setAttribute("cx", point.x);
  heroPoint.setAttribute("cy", point.y);
  heroFrame = requestAnimationFrame(animateHero);
}

function syncHeroMotion() {
  cancelAnimationFrame(heroFrame);
  const point = heroPath.getPointAtLength(heroLength * 0.55);
  heroPoint.setAttribute("cx", point.x);
  heroPoint.setAttribute("cy", point.y);
  if (reducedMotion.matches) return;
  heroStart = performance.now();
  heroFrame = requestAnimationFrame(animateHero);
}

reducedMotion.addEventListener("change", syncHeroMotion);
syncHeroMotion();

const identityCases = {
  fractional: {
    expression: "3<var>x</var><sup>1/4</sup> + 5",
    valid: false,
    headline: "Not a polynomial",
    reason: "The exponent 1/4 is not a nonnegative integer. Fractional powers are not allowed.",
    badge: "fractional exponent",
  },
  negative: {
    expression: "−¼<var>x</var><sup>−3</sup> + 5<var>x</var>",
    valid: false,
    headline: "Not a polynomial",
    reason: "The exponent −3 is negative. A polynomial cannot contain a variable in a denominator.",
    badge: "negative exponent",
  },
  constant: {
    expression: "6",
    valid: true,
    headline: "Polynomial · degree 0",
    reason: "A nonzero constant is a polynomial because 6 = 6x⁰. Its leading coefficient and constant term are both 6.",
    badge: "constant polynomial",
  },
  radical: {
    expression: "√3<var>x</var><sup>3</sup> + 5<var>x</var> − 1",
    valid: true,
    headline: "Polynomial · degree 3",
    reason: "The coefficient √3 is a real number, so it is allowed. The greatest exponent is 3.",
    badge: "real coefficients allowed",
  },
  factored: {
    expression: "−π<var>x</var><sup>4</sup>(<var>x</var> − 3)<sup>2</sup>(<var>x</var> + 5)<sup>3</sup>",
    valid: true,
    headline: "Polynomial · degree 9",
    reason: "Add the factor degrees: 4 + 2 + 3 = 9. Its leading coefficient is −π.",
    badge: "degrees add",
  },
};

function renderIdentity(caseName) {
  const selected = identityCases[caseName];
  const result = document.querySelector("#identity-result");
  result.className = `identity-lab__result ${selected.valid ? "is-polynomial" : "is-not-polynomial"}`;
  result.innerHTML = `
    <span>${selected.valid ? "passes" : "fails"} · ${selected.badge}</span>
    <div>${math(selected.expression, true)}</div>
    <strong>${selected.headline}</strong>
    <p>${selected.reason}</p>
  `;
}

document.querySelectorAll("[data-identity]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-identity]").forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-selected", String(active));
    });
    renderIdentity(button.dataset.identity);
  });
});
renderIdentity("fractional");

const curveCandidateMessages = {
  smooth: [true, "Possible. It is smooth, continuous, and extends in both directions, so no visible feature rules it out."],
  cusp: [false, "Not possible. A polynomial curve cannot make a sharp cusp."],
  hole: [false, "Not possible. Polynomial functions are defined and continuous for every real input."],
  corner: [false, "Not possible. Polynomial graphs turn smoothly rather than joining at a corner."],
};

document.querySelectorAll("[data-curve-candidate]").forEach((button) => {
  button.addEventListener("click", () => {
    const [possible, message] = curveCandidateMessages[button.dataset.curveCandidate];
    document.querySelectorAll("[data-curve-candidate]").forEach((candidate) => candidate.classList.toggle("is-selected", candidate === button));
    const feedback = document.querySelector("#curve-screening-feedback");
    feedback.className = `curve-screening__feedback ${possible ? "is-correct" : "is-incorrect"}`;
    feedback.textContent = message;
  });
});

let endParity = "even";
let endLeading = "positive";

function renderEndLab() {
  const even = endParity === "even";
  const positive = endLeading === "positive";
  const degree = even ? 4 : 5;
  const coefficient = positive ? 1 : -1;
  const fn = (x) => coefficient * (even ? 0.085 * x ** 4 - 0.52 * x ** 2 + 0.35 : 0.035 * x ** 5 - 0.27 * x ** 3 + 0.45 * x);
  const mapper = makeMapper({ width: 680, height: 500, padding: 54, xMin: -4, xMax: 4, yMin: -7, yMax: 7 });
  document.querySelector("#end-chart").innerHTML = `
    ${graphScaffold(mapper, { xStep: 1, yStep: 1, labels: false })}
    <path d="${functionPath(mapper, fn)}" class="end-curve"/>
    <circle cx="${mapper.x(-3.2)}" cy="${mapper.y(fn(-3.2))}" r="7" class="end-point"/>
    <circle cx="${mapper.x(3.2)}" cy="${mapper.y(fn(3.2))}" r="7" class="end-point"/>
  `;
  const leftUp = even ? positive : !positive;
  const rightUp = positive;
  document.querySelector("#end-left-arrow").textContent = leftUp ? "↖ left rises" : "↙ left falls";
  document.querySelector("#end-right-arrow").textContent = rightUp ? "right rises ↗" : "right falls ↘";
  document.querySelector("#end-leading").innerHTML = `<span>Representative leading term</span>${math(`${positive ? "" : "−"}<var>x</var><sup>${degree}</sup>`, true)}`;
  document.querySelector("#end-statements").innerHTML = `
    <div><dt>As ${math("<var>x</var> → −∞")}</dt><dd>${math(`<var>y</var> → ${leftUp ? "∞" : "−∞"}`)}</dd></div>
    <div><dt>As ${math("<var>x</var> → ∞")}</dt><dd>${math(`<var>y</var> → ${rightUp ? "∞" : "−∞"}`)}</dd></div>
  `;
  document.querySelector("#end-memory").textContent = `${even ? "Even degree: the tails agree." : "Odd degree: the tails oppose."} ${positive ? "Positive leading coefficient: the right tail rises." : "Negative leading coefficient: the right tail falls."}`;
}

function bindEndButtons(attribute, update) {
  document.querySelectorAll(`[data-${attribute}]`).forEach((button) => {
    button.addEventListener("click", () => {
      update(button.dataset[attribute]);
      document.querySelectorAll(`[data-${attribute}]`).forEach((candidate) => {
        const active = candidate === button;
        candidate.classList.toggle("is-active", active);
        candidate.setAttribute("aria-checked", String(active));
      });
      renderEndLab();
    });
  });
}

bindEndButtons("parity", (value) => { endParity = value; });
bindEndButtons("leading", (value) => { endLeading = value; });
renderEndLab();

const multiplicityInput = document.querySelector("#multiplicity-value");

function renderMultiplicity() {
  const multiplicity = Number(multiplicityInput.value);
  const mapper = makeMapper({ width: 620, height: 500, padding: 54, xMin: -2.5, xMax: 2.5, yMin: -5, yMax: 5 });
  const scale = multiplicity === 1 ? 1.5 : multiplicity === 2 ? 0.75 : multiplicity === 3 ? 0.42 : 0.12;
  const fn = (x) => scale * x ** multiplicity;
  const behavior = multiplicity % 2 === 0 ? "Bounces and turns" : multiplicity === 1 ? "Crosses directly" : "Crosses with a wiggle";
  const explanation = multiplicity % 2 === 0
    ? "Even multiplicity keeps the function on the same side of the axis."
    : multiplicity === 1
      ? "Multiplicity 1 changes sign with a nonzero crossing slope."
      : "Odd multiplicity changes sign, but the repeated factor flattens the crossing.";
  document.querySelector("#multiplicity-chart").innerHTML = `
    ${graphScaffold(mapper, { xStep: 1, yStep: 1 })}
    <path d="${functionPath(mapper, fn)}" class="multiplicity-curve"/>
    <circle cx="${mapper.x(0)}" cy="${mapper.y(0)}" r="10" class="multiplicity-zero"/>
    <line x1="${mapper.x(-.65)}" y1="${mapper.y(fn(-.65))}" x2="${mapper.x(.65)}" y2="${mapper.y(fn(.65))}" class="multiplicity-slope"/>
  `;
  document.querySelector("#multiplicity-output").textContent = String(multiplicity);
  document.querySelector("#multiplicity-factor").innerHTML = `<span>Local factor</span>${math(`(<var>x</var> − <var>r</var>)<sup>${multiplicity}</sup>`, true)}`;
  document.querySelector("#multiplicity-verdict").innerHTML = `<strong>${behavior}</strong><p>${explanation}</p>`;
}

multiplicityInput.addEventListener("input", renderMultiplicity);
renderMultiplicity();

const factorFn = (x) => (x - 2) ** 3 * (x + 1) ** 2 * (x + 4);
const factorMapper = makeMapper({ width: 720, height: 540, padding: 54, xMin: -5.2, xMax: 3.2, yMin: -620, yMax: 620 });
const factorTransform = (value) => Math.sign(value) * Math.log1p(Math.abs(value)) * 78;
const factorBehaviors = {
  2: { behavior: "Crosses with a wiggle", copy: "The factor (x − 2)³ has odd multiplicity greater than 1, so the graph changes sign and flattens at the axis." },
  "-1": { behavior: "Bounces", copy: "The factor (x + 1)² has even multiplicity, so the graph touches the axis and stays on the same side." },
  "-4": { behavior: "Crosses directly", copy: "The factor (x + 4) has multiplicity 1, so the graph passes cleanly through the axis." },
};

function renderFactorLab(activeRoot = "2") {
  const roots = [
    { value: 2, kind: "wiggle" },
    { value: -1, kind: "bounce" },
    { value: -4, kind: "cross" },
  ];
  document.querySelector("#factor-chart").innerHTML = `
    ${graphScaffold(factorMapper, { xStep: 1, yStep: 200 })}
    <path d="${functionPath(factorMapper, factorFn, 500, factorTransform)}" class="factor-curve"/>
    ${roots.map(({ value }) => `<circle cx="${factorMapper.x(value)}" cy="${factorMapper.y(0)}" r="${String(value) === activeRoot ? 12 : 8}" class="factor-zero${String(value) === activeRoot ? " is-active" : ""}"/>`).join("")}
    <circle cx="${factorMapper.x(0)}" cy="${factorMapper.y(factorTransform(-32))}" r="7" class="factor-y-intercept"/>
  `;
  const selected = factorBehaviors[activeRoot];
  document.querySelector("#factor-focus").innerHTML = `<strong>${selected.behavior}</strong><p>${selected.copy}</p>`;
}

document.querySelectorAll("[data-factor-root]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-factor-root]").forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-selected", String(active));
    });
    renderFactorLab(button.dataset.factorRoot);
  });
});
renderFactorLab();

const matchCases = {
  q: {
    clues: `${math("−<var>x</var><sup>2</sup>(<var>x</var> − 2)(<var>x</var> + 2)")} · degree 4 · negative leading coefficient · bounce at 0`,
    answer: "a",
  },
  s: {
    clues: `${math("½<var>x</var><sup>4</sup>(<var>x</var> − 2)(<var>x</var> + 2)")} · degree 6 · positive leading coefficient · flat bounce at 0`,
    answer: "b",
  },
  u: {
    clues: `${math("−<var>x</var><sup>2</sup>(<var>x</var> − 2)")} · degree 3 · negative leading coefficient · bounce at 0, cross at 2`,
    answer: "c",
  },
};
let matchCase = "q";
let selectedMatchGraph = "";

function miniGraph(element, fn, bounds) {
  const mapper = makeMapper({ width: 300, height: 220, padding: 26, ...bounds });
  element.innerHTML = `${graphScaffold(mapper, { xStep: 1, yStep: 2, labels: false })}<path d="${functionPath(mapper, fn, 220)}" class="match-curve"/>`;
}

miniGraph(document.querySelector("#match-graph-a"), (x) => -(x ** 2) * (x ** 2 - 4), { xMin: -3, xMax: 3, yMin: -10, yMax: 6 });
miniGraph(document.querySelector("#match-graph-b"), (x) => 0.5 * x ** 6 - 2 * x ** 4, { xMin: -2.6, xMax: 2.6, yMin: -10, yMax: 13 });
miniGraph(document.querySelector("#match-graph-c"), (x) => -(x ** 3) + 2 * x ** 2, { xMin: -2, xMax: 4, yMin: -18, yMax: 12 });

function renderMatchPrompt() {
  document.querySelector("#matching-clues").innerHTML = `<span>Factored fingerprint</span><p>${matchCases[matchCase].clues}</p>`;
  document.querySelector("#matching-feedback").className = "";
  document.querySelector("#matching-feedback").textContent = "Choose the graph with all four clues.";
}

document.querySelectorAll("[data-match-case]").forEach((button) => {
  button.addEventListener("click", () => {
    matchCase = button.dataset.matchCase;
    selectedMatchGraph = "";
    document.querySelectorAll("[data-match-case]").forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll("[data-match-graph]").forEach((candidate) => candidate.classList.remove("is-selected"));
    renderMatchPrompt();
  });
});

document.querySelectorAll("[data-match-graph]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedMatchGraph = button.dataset.matchGraph;
    document.querySelectorAll("[data-match-graph]").forEach((candidate) => candidate.classList.toggle("is-selected", candidate === button));
  });
});

document.querySelector("#matching-check").addEventListener("click", () => {
  const feedback = document.querySelector("#matching-feedback");
  const correct = selectedMatchGraph === matchCases[matchCase].answer;
  feedback.className = correct ? "is-correct" : "is-incorrect";
  feedback.textContent = correct
    ? "Match confirmed. The tails and every axis contact agree with the factored fingerprint."
    : selectedMatchGraph
      ? "That silhouette misses at least one clue. Check the tail directions first, then inspect the zero at x = 0."
      : "Select a graph before checking the match.";
});
renderMatchPrompt();

const reconstructCases = {
  ridge: {
    fn: (x) => -0.125 * (x + 1) ** 2 * (x - 2) ** 3 * (x - 4),
    bounds: { xMin: -2, xMax: 5, yMin: -18, yMax: 7 },
    roots: [-1, 2, 4],
    yIntercept: -4,
    steps: [
      ["Axis contacts", "Zeros at −1, 2, and 4"],
      ["Smallest multiplicities", "bounce 2 · wiggle 3 · cross 1"],
      ["Build the skeleton", "<var>P</var>(<var>x</var>) = <var>a</var>(<var>x</var> + 1)<sup>2</sup>(<var>x</var> − 2)<sup>3</sup>(<var>x</var> − 4)"],
      ["Use the point (0, −4)", "−4 = <var>a</var>(1)<sup>2</sup>(−2)<sup>3</sup>(−4) = 32<var>a</var>, so <var>a</var> = −⅛"],
    ],
    result: "<var>P</var>(<var>x</var>) = −⅛(<var>x</var> + 1)<sup>2</sup>(<var>x</var> − 2)<sup>3</sup>(<var>x</var> − 4)",
  },
  valley: {
    fn: (x) => (5 / 24) * (x + 3) ** 2 * (x + 1) * (x - 4) ** 3,
    bounds: { xMin: -4, xMax: 5, yMin: -190, yMax: 120 },
    roots: [-3, -1, 4],
    yIntercept: -120,
    steps: [
      ["Axis contacts", "Zeros at −3, −1, and 4"],
      ["Smallest multiplicities", "bounce 2 · cross 1 · wiggle 3"],
      ["Build the skeleton", "<var>P</var>(<var>x</var>) = <var>a</var>(<var>x</var> + 3)<sup>2</sup>(<var>x</var> + 1)(<var>x</var> − 4)<sup>3</sup>"],
      ["Use the point (0, −120)", "−120 = <var>a</var>(9)(1)(−64) = −576<var>a</var>, so <var>a</var> = 5/24"],
    ],
    result: "<var>P</var>(<var>x</var>) = <span class=\"native-frac\"><span>5</span><span>24</span></span>(<var>x</var> + 3)<sup>2</sup>(<var>x</var> + 1)(<var>x</var> − 4)<sup>3</sup>",
  },
};
let reconstructCase = "ridge";
let reconstructStep = 1;

function renderReconstruct() {
  const selected = reconstructCases[reconstructCase];
  const mapper = makeMapper({ width: 680, height: 520, padding: 52, ...selected.bounds });
  document.querySelector("#reconstruct-chart").innerHTML = `
    ${graphScaffold(mapper, { xStep: 1, yStep: reconstructCase === "ridge" ? 5 : 50 })}
    <path d="${functionPath(mapper, selected.fn, 500)}" class="reconstruct-curve"/>
    ${selected.roots.map((value) => `<circle cx="${mapper.x(value)}" cy="${mapper.y(0)}" r="8" class="reconstruct-zero"/><text x="${mapper.x(value)}" y="${mapper.y(0) - 14}" text-anchor="middle" class="reconstruct-label">${formatNumber(value)}</text>`).join("")}
    <circle cx="${mapper.x(0)}" cy="${mapper.y(selected.yIntercept)}" r="8" class="reconstruct-y"/>
  `;
  document.querySelector("#reconstruct-steps").innerHTML = selected.steps.map(([label, content], index) => `
    <li class="${index < reconstructStep ? "is-visible" : ""}"><span>${index + 1}</span><div><small>${index < reconstructStep ? label : "Hidden clue"}</small><strong>${index < reconstructStep ? math(content) : "?"}</strong></div></li>
  `).join("");
  const complete = reconstructStep === selected.steps.length;
  const nextButton = document.querySelector("#reconstruct-next");
  nextButton.disabled = complete;
  nextButton.textContent = complete ? "Formula complete" : "Reveal next clue";
  document.querySelector("#reconstruct-result").innerHTML = complete ? `<span>Smallest-degree formula</span>${math(selected.result, true)}` : "Use only the information already revealed.";
}

document.querySelectorAll("[data-reconstruct]").forEach((button) => {
  button.addEventListener("click", () => {
    reconstructCase = button.dataset.reconstruct;
    reconstructStep = 1;
    document.querySelectorAll("[data-reconstruct]").forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-selected", String(active));
    });
    renderReconstruct();
  });
});
document.querySelector("#reconstruct-next").addEventListener("click", () => {
  reconstructStep = Math.min(reconstructCases[reconstructCase].steps.length, reconstructStep + 1);
  renderReconstruct();
});
renderReconstruct();

const degreeTurns = document.querySelector("#degree-turns");
const degreeRelation = document.querySelector("#degree-tail-relation");
const degreeRightTail = document.querySelector("#degree-right-tail");

function renderDegreeLab() {
  const turns = Number(degreeTurns.value);
  const even = degreeRelation.value === "same";
  let minimum = turns + 1;
  if ((minimum % 2 === 0) !== even) minimum += 1;
  const positive = degreeRightTail.value === "up";
  const leftUp = even ? positive : !positive;
  document.querySelector("#degree-turns-output").textContent = String(turns);
  document.querySelector("#degree-result").innerHTML = `
    <div class="degree-tail-picture"><span>${leftUp ? "↖" : "↙"}</span><i>${turns} turn${turns === 1 ? "" : "s"}</i><span>${positive ? "↗" : "↘"}</span></div>
    <dl>
      <div><dt>Turn bound</dt><dd>${math(`<var>n</var> ≥ ${turns + 1}`)}</dd></div>
      <div><dt>Required parity</dt><dd>${even ? "even" : "odd"}</dd></div>
      <div><dt>Smallest degree</dt><dd>${minimum}</dd></div>
      <div><dt>Leading coefficient</dt><dd>${positive ? "positive" : "negative"}</dd></div>
    </dl>
    <p>${turns} turning point${turns === 1 ? "" : "s"} require at least degree ${turns + 1}. ${even ? "Matching tails require an even degree." : "Opposite tails require an odd degree."}</p>
  `;
}

[degreeTurns, degreeRelation, degreeRightTail].forEach((control) => control.addEventListener("input", renderDegreeLab));
renderDegreeLab();

document.querySelector("#check-polynomial-button").addEventListener("click", () => {
  const correct = document.querySelector("#check-polynomial").value === "correct";
  setFeedback(document.querySelector("#feedback-polynomial"), correct, correct
    ? "Correct. All exponents are nonnegative integers, and 4 + 2 + 3 gives degree 9."
    : "The coefficient −π is allowed. For a product of powers, add the factor degrees.");
});

document.querySelector("#check-ends-button").addEventListener("click", () => {
  const correct = document.querySelector("#check-left-tail").value === "correct"
    && document.querySelector("#check-right-tail").value === "correct";
  setFeedback(document.querySelector("#feedback-ends"), correct, correct
    ? "Correct. The leading term −2x⁶ has even degree and a negative coefficient, so both tails fall."
    : "Ignore the lower-degree terms. Even degree means matching tails; a negative leading coefficient makes the right tail fall.");
});

document.querySelector("#check-roots-button").addEventListener("click", () => {
  const correct = ["#check-root-2", "#check-root-negative-1", "#check-root-negative-4"]
    .every((selector) => document.querySelector(selector).value === "correct");
  setFeedback(document.querySelector("#feedback-roots"), correct, correct
    ? "Correct. Multiplicities 3, 2, and 1 produce a wiggle-crossing, bounce, and direct crossing."
    : "Odd multiplicities cross, even multiplicities bounce, and an odd multiplicity greater than 1 flattens into a wiggle.");
});

document.querySelector("#check-degree-button").addEventListener("click", () => {
  const correct = Number(document.querySelector("#check-degree").value) === 5
    && document.querySelector("#check-leading-sign").value === "correct";
  setFeedback(document.querySelector("#feedback-degree"), correct, correct
    ? "Correct. Four turns require degree at least 5; opposite tails require odd degree, and a rising right tail means a positive leading coefficient."
    : "Begin with n − 1 ≥ 4. Then use the opposite tails for parity and the right tail for the coefficient sign.");
});

initLessonChrome();
