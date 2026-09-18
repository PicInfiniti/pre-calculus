import"./magnifier-B0Wyiml3.js";import{a as e,o as t,r as n,s as r}from"./shared-Cg4hcz2F.js";var i=document.querySelector(`#app`),a=(e,t=!1)=>`<span class="native-math${t?` native-math--display`:``}">${e}</span>`,o=(e,t)=>`<span class="native-frac"><span>${e}</span><span>${t}</span></span>`,s=e=>`<span class="native-radical"><span>${e}</span></span>`;i.innerHTML=`
  ${t(`3.2`)}
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
        <div class="polynomial-hero-art__formula">${a(`<var>P</var>(<var>x</var>) = <var>a</var><sub><var>n</var></sub><var>x</var><sup><var>n</var></sup> + ⋯ + <var>a</var><sub>1</sub><var>x</var> + <var>a</var><sub>0</sub>`)}</div>
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
          <p>A polynomial is a finite sum of terms ${a(`<var>a</var><var>x</var><sup><var>k</var></sup>`)} where every exponent ${a(`<var>k</var>`)} is a nonnegative integer. Coefficients may be any real numbers, including fractions, radicals, and ${a(`π`)}.</p>
        </div>
        <div class="polynomial-definition" data-reveal>
          <span>Polynomial anatomy</span>
          <dl>
            <div><dt>${a(`<var>a</var><sub><var>n</var></sub>`)}</dt><dd>leading coefficient</dd></div>
            <div><dt>${a(`<var>a</var><sub><var>n</var></sub><var>x</var><sup><var>n</var></sup>`)}</dt><dd>leading term</dd></div>
            <div><dt>${a(`<var>a</var><sub>0</sub>`)}</dt><dd>constant term</dd></div>
            <div><dt>${a(`<var>n</var>`)}</dt><dd>degree</dd></div>
          </dl>
        </div>
      </div>

      <div class="identity-lab" data-reveal>
        <div class="identity-lab__list" role="tablist" aria-label="Expressions to classify">
          <button class="is-active" type="button" data-identity="fractional" role="tab" aria-selected="true">${a(`3<var>x</var><sup>${o(`1`,`4`)}</sup> + 5`)}</button>
          <button type="button" data-identity="negative" role="tab" aria-selected="false">${a(`−${o(`1`,`4`)}<var>x</var><sup>−3</sup> + 5<var>x</var>`)}</button>
          <button type="button" data-identity="constant" role="tab" aria-selected="false">${a(`6`)}</button>
          <button type="button" data-identity="radical" role="tab" aria-selected="false">${a(`${s(`3`)}<var>x</var><sup>3</sup> + 5<var>x</var> − 1`)}</button>
          <button type="button" data-identity="factored" role="tab" aria-selected="false">${a(`−π<var>x</var><sup>4</sup>(<var>x</var> − 3)<sup>2</sup>(<var>x</var> + 5)<sup>3</sup>`)}</button>
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
          <span>Turning limit</span><strong>At most ${a(`<var>n</var> − 1`)} local extrema</strong><p>A degree-4 polynomial cannot have five turning points.</p>
        </article>
        <article>
          <svg class="curve-rule-icon curve-rule-icon--domain" viewBox="0 0 120 52" aria-hidden="true"><path d="M8 26H112M8 26L18 18M8 26L18 34M112 26L102 18M112 26L102 34" /></svg>
          <span>Domain</span><strong>${a(`(−∞, ∞)`)}</strong><p>Every real input is allowed in a polynomial.</p>
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
        <article><span>Look past lower powers</span><strong>${a(`2<var>x</var> − 8<var>x</var><sup>2</sup> + <var>x</var><sup>5</sup> − 13`)}</strong><p>The leading term is ${a(`<var>x</var><sup>5</sup>`)}: odd degree, positive coefficient, left down and right up.</p></article>
        <article><span>Ignore the large constant</span><strong>${a(`−2<var>x</var><sup>6</sup> + 12<var>x</var> + 100`)}</strong><p>The leading term is ${a(`−2<var>x</var><sup>6</sup>`)}: even degree, negative coefficient, both ends down.</p></article>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="multiplicity">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Inspect each zero</p>
        <h2>Cross, bounce,<br>or cross with a wiggle.</h2>
        <p>If ${a(`<var>r</var>`)} is a zero, then ${a(`(<var>x</var> − <var>r</var>)`)} is a factor. Its multiplicity counts how many times that factor repeats and controls the graph’s local behavior.</p>
      </div>

      <div class="multiplicity-lab" data-reveal>
        <div class="multiplicity-lab__controls">
          <p class="tool-label">Root microscope</p>
          <label for="multiplicity-value"><span>Multiplicity ${a(`<var>m</var>`)}</span><output id="multiplicity-output">1</output></label>
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
          <div class="factor-equation">${a(`<var>f</var>(<var>x</var>) = (<var>x</var> − 2)<sup>3</sup>(<var>x</var> + 1)<sup>2</sup>(<var>x</var> + 4)`,!0)}</div>
          <div class="factor-roots" role="tablist" aria-label="Zeros to inspect">
            <button class="is-active" type="button" data-factor-root="2" role="tab" aria-selected="true"><span>${a(`<var>x</var> = 2`)}</span><strong>multiplicity 3</strong></button>
            <button type="button" data-factor-root="-1" role="tab" aria-selected="false"><span>${a(`<var>x</var> = −1`)}</span><strong>multiplicity 2</strong></button>
            <button type="button" data-factor-root="-4" role="tab" aria-selected="false"><span>${a(`<var>x</var> = −4`)}</span><strong>multiplicity 1</strong></button>
          </div>
          <div class="factor-focus" id="factor-focus" aria-live="polite"></div>
          <dl class="factor-summary">
            <div><dt>Degree</dt><dd>6</dd></div>
            <div><dt>Leading coefficient</dt><dd>+1</dd></div>
            <div><dt>End behavior</dt><dd>up / up</dd></div>
            <div><dt>${a(`<var>y</var>`)}-intercept</dt><dd>${a(`(0, −32)`)}</dd></div>
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
            <button class="is-active" type="button" data-match-case="q" role="tab" aria-selected="true">${a(`<var>Q</var>(<var>x</var>) = −<var>x</var><sup>2</sup>(<var>x</var><sup>2</sup> − 4)`)}</button>
            <button type="button" data-match-case="s" role="tab" aria-selected="false">${a(`<var>S</var>(<var>x</var>) = ½<var>x</var><sup>6</sup> − 2<var>x</var><sup>4</sup>`)}</button>
            <button type="button" data-match-case="u" role="tab" aria-selected="false">${a(`<var>U</var>(<var>x</var>) = −<var>x</var><sup>3</sup> + 2<var>x</var><sup>2</sup>`)}</button>
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
        <p>Use one factor for each zero, raise it to the smallest multiplicity suggested by the contact behavior, then use one known point to determine the vertical scale ${a(`<var>a</var>`)}.</p>
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
        <p>If a graph has ${a(`<var>T</var>`)} turning points, its degree is at least ${a(`<var>T</var> + 1`)}. End behavior then tells you whether that degree must be even or odd and reveals the leading sign.</p>
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
          <h3>Classify ${a(`−π<var>x</var><sup>4</sup>(<var>x</var> − 3)<sup>2</sup>(<var>x</var> + 5)<sup>3</sup>`)}.</h3>
          <label>Classification <select id="check-polynomial"><option value="">Choose…</option><option value="a">Not a polynomial</option><option value="correct">Polynomial, degree 9</option><option value="b">Polynomial, degree 12</option></select></label>
          <button id="check-polynomial-button" type="button">Check classification</button>
          <p class="answer-feedback" id="feedback-polynomial" aria-live="polite"></p>
        </article>
        <article class="polynomial-check" data-reveal>
          <span>End behavior</span>
          <h3>Describe the tails of ${a(`<var>y</var> = −2<var>x</var><sup>6</sup> + 12<var>x</var> + 100`)}.</h3>
          <label>Left tail <select id="check-left-tail"><option value="">Choose…</option><option value="a">Rises</option><option value="correct">Falls</option></select></label>
          <label>Right tail <select id="check-right-tail"><option value="">Choose…</option><option value="a">Rises</option><option value="correct">Falls</option></select></label>
          <button id="check-ends-button" type="button">Check tails</button>
          <p class="answer-feedback" id="feedback-ends" aria-live="polite"></p>
        </article>
        <article class="polynomial-check" data-reveal>
          <span>Multiplicity</span>
          <h3>For ${a(`(<var>x</var> − 2)<sup>3</sup>(<var>x</var> + 1)<sup>2</sup>(<var>x</var> + 4)`)}, match each zero to its behavior.</h3>
          <label>${a(`<var>x</var> = 2`)} <select id="check-root-2"><option value="">Choose…</option><option value="correct">Crosses with a wiggle</option><option value="a">Bounces</option><option value="b">Crosses directly</option></select></label>
          <label>${a(`<var>x</var> = −1`)} <select id="check-root-negative-1"><option value="">Choose…</option><option value="a">Crosses with a wiggle</option><option value="correct">Bounces</option><option value="b">Crosses directly</option></select></label>
          <label>${a(`<var>x</var> = −4`)} <select id="check-root-negative-4"><option value="">Choose…</option><option value="a">Crosses with a wiggle</option><option value="b">Bounces</option><option value="correct">Crosses directly</option></select></label>
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
  ${e({previous:{href:`pages/sections/3-1.html`,label:`Section 3.1 · Quadratic functions`},next:{href:`pages/sections/3-6.html`,label:`Section 3.6 · Rational functions`}})}
`;function c(e,t=2){return Number.isFinite(e)?Math.abs(e)<1e-10?`0`:String(Number(e.toFixed(t))).replace(`-`,`−`):`undefined`}function l({width:e,height:t,padding:n,xMin:r,xMax:i,yMin:a,yMax:o,xStep:s=1,yStep:c=1}){let l=(i-r)/s,u=(o-a)/c,d=Math.min((e-n*2)/l,(t-n*2)/u),f=l*d,p=u*d,m=(e-f)/2,h=(t-p)/2,g=m+f,_=h+p;return{x:e=>m+(e-r)/s*d,y:e=>_-(e-a)/c*d,width:e,height:t,padding:n,plotLeft:m,plotTop:h,plotRight:g,plotBottom:_,plotWidth:f,plotHeight:p,gridSize:d,xStep:s,yStep:c,xMin:r,xMax:i,yMin:a,yMax:o}}function u(e,{xStep:t=e.xStep,yStep:n=e.yStep,labels:r=!0,clipId:i}={}){let a=[],o=[];for(let n=Math.ceil(e.xMin/t)*t;n<=e.xMax+1e-8;n+=t){let i=Math.abs(n)<1e-8;(!(Math.abs(n-e.xMin)<1e-8||Math.abs(n-e.xMax)<1e-8)||i)&&a.push(`<line x1="${e.x(n)}" y1="${e.plotTop}" x2="${e.x(n)}" y2="${e.plotBottom}" class="polynomial-grid${i?` polynomial-grid--axis`:``}"/>`),r&&!i&&Math.abs(n/t)%2==0&&o.push(`<text x="${e.x(n)}" y="${e.y(0)+20}" text-anchor="middle" class="polynomial-grid-label">${c(n)}</text>`)}for(let t=Math.ceil(e.yMin/n)*n;t<=e.yMax+1e-8;t+=n){let i=Math.abs(t)<1e-8;(!(Math.abs(t-e.yMin)<1e-8||Math.abs(t-e.yMax)<1e-8)||i)&&a.push(`<line x1="${e.plotLeft}" y1="${e.y(t)}" x2="${e.plotRight}" y2="${e.y(t)}" class="polynomial-grid${i?` polynomial-grid--axis`:``}"/>`),r&&!i&&Math.abs(t/n)%2==0&&o.push(`<text x="${e.x(0)-10}" y="${e.y(t)+4}" text-anchor="end" class="polynomial-grid-label">${c(t)}</text>`)}return r&&(o.push(`<text x="${e.plotRight+10}" y="${e.y(0)+5}" class="polynomial-axis-label">x</text>`),o.push(`<text x="${e.x(0)}" y="${e.plotTop-12}" text-anchor="middle" class="polynomial-axis-label">y</text>`)),`${i?`<defs><clipPath id="${i}"><rect x="${e.plotLeft-18}" y="${e.plotTop-18}" width="${e.plotWidth+36}" height="${e.plotHeight+36}"/></clipPath></defs>`:``}<rect x="${e.plotLeft}" y="${e.plotTop}" width="${e.plotWidth}" height="${e.plotHeight}" class="polynomial-plot-bg"/>${a.join(``)}${o.join(``)}`}function d(e,t,n=24){e.setAttribute(`viewBox`,`${t.plotLeft-n} ${t.plotTop-n} ${t.plotWidth+n*2} ${t.plotHeight+n*2}`)}function f(e,t,n=320,r=e=>e){let i=``,a=!1,o=10/e.gridSize*e.yStep;for(let s=0;s<=n;s+=1){let c=e.xMin+(e.xMax-e.xMin)*s/n,l=r(t(c));Number.isFinite(l)&&l>=e.yMin-o&&l<=e.yMax+o?(i+=`${a?`L`:`M`}${e.x(c).toFixed(2)} ${e.y(l).toFixed(2)}`,a=!0):a=!1}return i}var p=document.querySelector(`#polynomial-hero-path`),m=document.querySelector(`#polynomial-hero-point`),h=window.matchMedia(`(prefers-reduced-motion: reduce)`),g=p.getTotalLength(),_=0,v=0;function y(e){let t=(e-v)%11e3/11e3,n=p.getPointAtLength(g*t);m.setAttribute(`cx`,n.x),m.setAttribute(`cy`,n.y),_=requestAnimationFrame(y)}function b(){cancelAnimationFrame(_);let e=p.getPointAtLength(g*.55);m.setAttribute(`cx`,e.x),m.setAttribute(`cy`,e.y),!h.matches&&(v=performance.now(),_=requestAnimationFrame(y))}h.addEventListener(`change`,b),b();var x={fractional:{expression:`3<var>x</var><sup>${o(`1`,`4`)}</sup> + 5`,valid:!1,headline:`Not a polynomial`,reason:`The exponent ${a(o(`1`,`4`))} is not a nonnegative integer. Fractional powers are not allowed.`,badge:`fractional exponent`},negative:{expression:`−${o(`1`,`4`)}<var>x</var><sup>−3</sup> + 5<var>x</var>`,valid:!1,headline:`Not a polynomial`,reason:`The exponent −3 is negative. A polynomial cannot contain a variable in a denominator.`,badge:`negative exponent`},constant:{expression:`6`,valid:!0,headline:`Polynomial · degree 0`,reason:`A nonzero constant is a polynomial because 6 = 6x⁰. Its leading coefficient and constant term are both 6.`,badge:`constant polynomial`},radical:{expression:`${s(`3`)}<var>x</var><sup>3</sup> + 5<var>x</var> − 1`,valid:!0,headline:`Polynomial · degree 3`,reason:`The coefficient √3 is a real number, so it is allowed. The greatest exponent is 3.`,badge:`real coefficients allowed`},factored:{expression:`−π<var>x</var><sup>4</sup>(<var>x</var> − 3)<sup>2</sup>(<var>x</var> + 5)<sup>3</sup>`,valid:!0,headline:`Polynomial · degree 9`,reason:`Add the factor degrees: 4 + 2 + 3 = 9. Its leading coefficient is −π.`,badge:`degrees add`}};function S(e){let t=x[e],n=document.querySelector(`#identity-result`);n.className=`identity-lab__result ${t.valid?`is-polynomial`:`is-not-polynomial`}`,n.innerHTML=`
    <span>${t.valid?`passes`:`fails`} · ${t.badge}</span>
    <div>${a(t.expression,!0)}</div>
    <strong>${t.headline}</strong>
    <p>${t.reason}</p>
  `}document.querySelectorAll(`[data-identity]`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`[data-identity]`).forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),S(e.dataset.identity)})}),S(`fractional`);var C={smooth:[!0,`Possible. It is smooth, continuous, and extends in both directions, so no visible feature rules it out.`],cusp:[!1,`Not possible. A polynomial curve cannot make a sharp cusp.`],hole:[!1,`Not possible. Polynomial functions are defined and continuous for every real input.`],corner:[!1,`Not possible. Polynomial graphs turn smoothly rather than joining at a corner.`]};document.querySelectorAll(`[data-curve-candidate]`).forEach(e=>{e.addEventListener(`click`,()=>{let[t,n]=C[e.dataset.curveCandidate];document.querySelectorAll(`[data-curve-candidate]`).forEach(t=>t.classList.toggle(`is-selected`,t===e));let r=document.querySelector(`#curve-screening-feedback`);r.className=`curve-screening__feedback ${t?`is-correct`:`is-incorrect`}`,r.textContent=n})});var w=`even`,T=`positive`;function E(){let e=w===`even`,t=T===`positive`,n=e?4:5,r=t?1:-1,i=t=>r*(e?.085*t**4-.52*t**2+.35:.035*t**5-.27*t**3+.45*t),o=l({width:680,height:500,padding:54,xMin:-4,xMax:4,yMin:-7,yMax:7,xStep:1,yStep:2}),s=document.querySelector(`#end-chart`);d(s,o),s.innerHTML=`
    ${u(o,{labels:!1,clipId:`polynomial-end-clip`})}
    <path d="${f(o,i)}" class="end-curve" clip-path="url(#polynomial-end-clip)"/>
    <circle cx="${o.x(-3.2)}" cy="${o.y(i(-3.2))}" r="7" class="end-point"/>
    <circle cx="${o.x(3.2)}" cy="${o.y(i(3.2))}" r="7" class="end-point"/>
  `;let c=e?t:!t,p=t;document.querySelector(`#end-left-arrow`).textContent=c?`↖ left rises`:`↙ left falls`,document.querySelector(`#end-right-arrow`).textContent=p?`right rises ↗`:`right falls ↘`,document.querySelector(`#end-leading`).innerHTML=`<span>Representative leading term</span>${a(`${t?``:`−`}<var>x</var><sup>${n}</sup>`,!0)}`,document.querySelector(`#end-statements`).innerHTML=`
    <div><dt>As ${a(`<var>x</var> → −∞`)}</dt><dd>${a(`<var>y</var> → ${c?`∞`:`−∞`}`)}</dd></div>
    <div><dt>As ${a(`<var>x</var> → ∞`)}</dt><dd>${a(`<var>y</var> → ${p?`∞`:`−∞`}`)}</dd></div>
  `,document.querySelector(`#end-memory`).textContent=`${e?`Even degree: the tails agree.`:`Odd degree: the tails oppose.`} ${t?`Positive leading coefficient: the right tail rises.`:`Negative leading coefficient: the right tail falls.`}`}function D(e,t){document.querySelectorAll(`[data-${e}]`).forEach(n=>{n.addEventListener(`click`,()=>{t(n.dataset[e]),document.querySelectorAll(`[data-${e}]`).forEach(e=>{let t=e===n;e.classList.toggle(`is-active`,t),e.setAttribute(`aria-checked`,String(t))}),E()})})}D(`parity`,e=>{w=e}),D(`leading`,e=>{T=e}),E();var O=document.querySelector(`#multiplicity-value`);function k(){let e=Number(O.value),t=l({width:620,height:500,padding:54,xMin:-2.5,xMax:2.5,yMin:-5,yMax:5,xStep:1,yStep:2}),n=e===1?1.5:e===2?.75:e===3?.42:.12,r=t=>n*t**e,i=e%2==0?`Bounces and turns`:e===1?`Crosses directly`:`Crosses with a wiggle`,o=e%2==0?`Even multiplicity keeps the function on the same side of the axis.`:e===1?`Multiplicity 1 changes sign with a nonzero crossing slope.`:`Odd multiplicity changes sign, but the repeated factor flattens the crossing.`,s=document.querySelector(`#multiplicity-chart`);d(s,t),s.innerHTML=`
    ${u(t,{clipId:`polynomial-multiplicity-clip`})}
    <path d="${f(t,r)}" class="multiplicity-curve" clip-path="url(#polynomial-multiplicity-clip)"/>
    <circle cx="${t.x(0)}" cy="${t.y(0)}" r="10" class="multiplicity-zero"/>
    <line x1="${t.x(-.65)}" y1="${t.y(r(-.65))}" x2="${t.x(.65)}" y2="${t.y(r(.65))}" class="multiplicity-slope"/>
  `,document.querySelector(`#multiplicity-output`).textContent=String(e),document.querySelector(`#multiplicity-factor`).innerHTML=`<span>Local factor</span>${a(`(<var>x</var> − <var>r</var>)<sup>${e}</sup>`,!0)}`,document.querySelector(`#multiplicity-verdict`).innerHTML=`<strong>${i}</strong><p>${o}</p>`}O.addEventListener(`input`,k),k();var A=e=>(e-2)**3*(e+1)**2*(e+4),j=l({width:720,height:540,padding:54,xMin:-5.2,xMax:3.2,yMin:-620,yMax:620,xStep:1,yStep:200}),M=e=>Math.sign(e)*Math.log1p(Math.abs(e))*78,N={2:{behavior:`Crosses with a wiggle`,copy:`The factor (x − 2)³ has odd multiplicity greater than 1, so the graph changes sign and flattens at the axis.`},"-1":{behavior:`Bounces`,copy:`The factor (x + 1)² has even multiplicity, so the graph touches the axis and stays on the same side.`},"-4":{behavior:`Crosses directly`,copy:`The factor (x + 4) has multiplicity 1, so the graph passes cleanly through the axis.`}};function P(e=`2`){let t=[{value:2,kind:`wiggle`},{value:-1,kind:`bounce`},{value:-4,kind:`cross`}],n=document.querySelector(`#factor-chart`);d(n,j),n.innerHTML=`
    ${u(j,{clipId:`polynomial-factor-clip`})}
    <path d="${f(j,A,500,M)}" class="factor-curve" clip-path="url(#polynomial-factor-clip)"/>
    ${t.map(({value:t})=>`<circle cx="${j.x(t)}" cy="${j.y(0)}" r="${String(t)===e?12:8}" class="factor-zero${String(t)===e?` is-active`:``}"/>`).join(``)}
    <circle cx="${j.x(0)}" cy="${j.y(M(-32))}" r="7" class="factor-y-intercept"/>
  `;let r=N[e];document.querySelector(`#factor-focus`).innerHTML=`<strong>${r.behavior}</strong><p>${r.copy}</p>`}document.querySelectorAll(`[data-factor-root]`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`[data-factor-root]`).forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),P(e.dataset.factorRoot)})}),P();var F={q:{clues:`${a(`−<var>x</var><sup>2</sup>(<var>x</var> − 2)(<var>x</var> + 2)`)} · degree 4 · negative leading coefficient · bounce at 0`,answer:`a`},s:{clues:`${a(`½<var>x</var><sup>4</sup>(<var>x</var> − 2)(<var>x</var> + 2)`)} · degree 6 · positive leading coefficient · flat bounce at 0`,answer:`b`},u:{clues:`${a(`−<var>x</var><sup>2</sup>(<var>x</var> − 2)`)} · degree 3 · negative leading coefficient · bounce at 0, cross at 2`,answer:`c`}},I=`q`,L=``;function R(e,t,n){let r=l({width:300,height:220,padding:26,xStep:1,...n}),i=`${e.id}-clip`;d(e,r,12),e.innerHTML=`${u(r,{labels:!1,clipId:i})}<path d="${f(r,t,220)}" class="match-curve" clip-path="url(#${i})"/>`}R(document.querySelector(`#match-graph-a`),e=>-(e**2)*(e**2-4),{xMin:-3,xMax:3,yMin:-10,yMax:6,yStep:4}),R(document.querySelector(`#match-graph-b`),e=>.5*e**6-2*e**4,{xMin:-2.6,xMax:2.6,yMin:-10,yMax:13,yStep:6}),R(document.querySelector(`#match-graph-c`),e=>-(e**3)+2*e**2,{xMin:-2,xMax:4,yMin:-18,yMax:12,yStep:6});function z(){document.querySelector(`#matching-clues`).innerHTML=`<span>Factored fingerprint</span><p>${F[I].clues}</p>`,document.querySelector(`#matching-feedback`).className=``,document.querySelector(`#matching-feedback`).textContent=`Choose the graph with all four clues.`}document.querySelectorAll(`[data-match-case]`).forEach(e=>{e.addEventListener(`click`,()=>{I=e.dataset.matchCase,L=``,document.querySelectorAll(`[data-match-case]`).forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),document.querySelectorAll(`[data-match-graph]`).forEach(e=>e.classList.remove(`is-selected`,`is-correct`,`is-incorrect`)),z()})}),document.querySelectorAll(`[data-match-graph]`).forEach(e=>{e.addEventListener(`click`,()=>{L=e.dataset.matchGraph,document.querySelectorAll(`[data-match-graph]`).forEach(t=>{t.classList.toggle(`is-selected`,t===e),t.classList.remove(`is-correct`,`is-incorrect`)})})}),document.querySelector(`#matching-check`).addEventListener(`click`,()=>{let e=document.querySelector(`#matching-feedback`),t=L===F[I].answer,n=document.querySelector(`[data-match-graph="${L}"]`);document.querySelectorAll(`[data-match-graph]`).forEach(e=>e.classList.remove(`is-correct`,`is-incorrect`)),n&&n.classList.add(t?`is-correct`:`is-incorrect`),e.className=t?`is-correct`:`is-incorrect`,e.textContent=t?`Match confirmed. The tails and every axis contact agree with the factored fingerprint.`:L?`That silhouette misses at least one clue. Check the tail directions first, then inspect the zero at x = 0.`:`Select a graph before checking the match.`}),z();var B={ridge:{fn:e=>-.125*(e+1)**2*(e-2)**3*(e-4),bounds:{xMin:-2,xMax:5,yMin:-18,yMax:7},roots:[-1,2,4],yIntercept:-4,steps:[[`Axis contacts`,`Zeros at −1, 2, and 4`],[`Smallest multiplicities`,`bounce 2 · wiggle 3 · cross 1`],[`Build the skeleton`,`<var>P</var>(<var>x</var>) = <var>a</var>(<var>x</var> + 1)<sup>2</sup>(<var>x</var> − 2)<sup>3</sup>(<var>x</var> − 4)`],[`Use the point (0, −4)`,`−4 = <var>a</var>(1)<sup>2</sup>(−2)<sup>3</sup>(−4) = 32<var>a</var>, so <var>a</var> = −⅛`]],result:`<var>P</var>(<var>x</var>) = −⅛(<var>x</var> + 1)<sup>2</sup>(<var>x</var> − 2)<sup>3</sup>(<var>x</var> − 4)`},valley:{fn:e=>5/24*(e+3)**2*(e+1)*(e-4)**3,bounds:{xMin:-4,xMax:5,yMin:-190,yMax:120},roots:[-3,-1,4],yIntercept:-120,steps:[[`Axis contacts`,`Zeros at −3, −1, and 4`],[`Smallest multiplicities`,`bounce 2 · cross 1 · wiggle 3`],[`Build the skeleton`,`<var>P</var>(<var>x</var>) = <var>a</var>(<var>x</var> + 3)<sup>2</sup>(<var>x</var> + 1)(<var>x</var> − 4)<sup>3</sup>`],[`Use the point (0, −120)`,`−120 = <var>a</var>(9)(1)(−64) = −576<var>a</var>, so <var>a</var> = 5/24`]],result:`<var>P</var>(<var>x</var>) = <span class="native-frac"><span>5</span><span>24</span></span>(<var>x</var> + 3)<sup>2</sup>(<var>x</var> + 1)(<var>x</var> − 4)<sup>3</sup>`}},V=`ridge`,H=1;function U(){let e=B[V],t=V===`ridge`?5:50,n=l({width:680,height:520,padding:52,...e.bounds,xStep:1,yStep:t}),r=document.querySelector(`#reconstruct-chart`);d(r,n),r.innerHTML=`
    ${u(n,{clipId:`polynomial-reconstruct-clip`})}
    <path d="${f(n,e.fn,500)}" class="reconstruct-curve" clip-path="url(#polynomial-reconstruct-clip)"/>
    ${e.roots.map(e=>`<circle cx="${n.x(e)}" cy="${n.y(0)}" r="8" class="reconstruct-zero"/><text x="${n.x(e)}" y="${n.y(0)-14}" text-anchor="middle" class="reconstruct-label">${c(e)}</text>`).join(``)}
    <circle cx="${n.x(0)}" cy="${n.y(e.yIntercept)}" r="8" class="reconstruct-y"/>
  `,document.querySelector(`#reconstruct-steps`).innerHTML=e.steps.map(([e,t],n)=>`
    <li class="${n<H?`is-visible`:``}"><span>${n+1}</span><div><small>${n<H?e:`Hidden clue`}</small><strong>${n<H?a(t):`?`}</strong></div></li>
  `).join(``);let i=H===e.steps.length,o=document.querySelector(`#reconstruct-next`);o.disabled=i,o.textContent=i?`Formula complete`:`Reveal next clue`,document.querySelector(`#reconstruct-result`).innerHTML=i?`<span>Smallest-degree formula</span>${a(e.result,!0)}`:`Use only the information already revealed.`}document.querySelectorAll(`[data-reconstruct]`).forEach(e=>{e.addEventListener(`click`,()=>{V=e.dataset.reconstruct,H=1,document.querySelectorAll(`[data-reconstruct]`).forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),U()})}),document.querySelector(`#reconstruct-next`).addEventListener(`click`,()=>{H=Math.min(B[V].steps.length,H+1),U()}),U();var W=document.querySelector(`#degree-turns`),G=document.querySelector(`#degree-tail-relation`),K=document.querySelector(`#degree-right-tail`);function q(e,t){let n=t?1:-1,r=t=>{if(e===0)return 1;if(e===1)return t;let n=1,r=t;for(let i=2;i<=e;i+=1){let e=2*t*r-n;n=r,r=e}return r};return Array.from({length:241},(e,t)=>{let i=-1+2*t/240,a=t/240*560,o=38-n*r(i)*26;return`${t===0?`M`:`L`}${a.toFixed(2)} ${o.toFixed(2)}`}).join(``)}function J(){let e=Number(W.value),t=G.value===`same`,n=e+1;n%2==0!==t&&(n+=1);let r=K.value===`up`,i=t?r:!r,o=n-1,s=q(n,r);document.querySelector(`#degree-turns-output`).textContent=String(e),document.querySelector(`#degree-result`).innerHTML=`
    <div class="degree-tail-picture" role="img" aria-label="A degree ${n} sample with ${o} turning point${o===1?``:`s`}; its left tail ${i?`rises`:`falls`} and its right tail ${r?`rises`:`falls`}">
      <span aria-hidden="true">${i?`↖`:`↙`}</span>
      <div class="degree-tail-picture__curve" aria-hidden="true"><svg viewBox="0 0 560 76" preserveAspectRatio="none"><path d="${s}"/></svg><i>${o} turn${o===1?``:`s`}</i></div>
      <span aria-hidden="true">${r?`↗`:`↘`}</span>
    </div>
    <dl>
      <div><dt>Turn bound</dt><dd>${a(`<var>n</var> ≥ ${e+1}`)}</dd></div>
      <div><dt>Required parity</dt><dd>${t?`even`:`odd`}</dd></div>
      <div><dt>Smallest degree</dt><dd>${n}</dd></div>
      <div><dt>Leading coefficient</dt><dd>${r?`positive`:`negative`}</dd></div>
    </dl>
    <p>${e} visible turning point${e===1?``:`s`} require at least degree ${e+1}. ${t?`Matching tails require an even degree.`:`Opposite tails require an odd degree.`}${o>e?` The minimum-degree profile shows one additional turn to connect those tails.`:``}</p>
  `}[W,G,K].forEach(e=>e.addEventListener(`input`,J)),J(),document.querySelector(`#check-polynomial-button`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-polynomial`).value===`correct`;r(document.querySelector(`#feedback-polynomial`),e,e?`Correct. All exponents are nonnegative integers, and 4 + 2 + 3 gives degree 9.`:`The coefficient −π is allowed. For a product of powers, add the factor degrees.`)}),document.querySelector(`#check-ends-button`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-left-tail`).value===`correct`&&document.querySelector(`#check-right-tail`).value===`correct`;r(document.querySelector(`#feedback-ends`),e,e?`Correct. The leading term −2x⁶ has even degree and a negative coefficient, so both tails fall.`:`Ignore the lower-degree terms. Even degree means matching tails; a negative leading coefficient makes the right tail fall.`)}),document.querySelector(`#check-roots-button`).addEventListener(`click`,()=>{let e=[`#check-root-2`,`#check-root-negative-1`,`#check-root-negative-4`].every(e=>document.querySelector(e).value===`correct`);r(document.querySelector(`#feedback-roots`),e,e?`Correct. Multiplicities 3, 2, and 1 produce a wiggle-crossing, bounce, and direct crossing.`:`Odd multiplicities cross, even multiplicities bounce, and an odd multiplicity greater than 1 flattens into a wiggle.`)}),document.querySelector(`#check-degree-button`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#check-degree`).value)===5&&document.querySelector(`#check-leading-sign`).value===`correct`;r(document.querySelector(`#feedback-degree`),e,e?`Correct. Four turns require degree at least 5; opposite tails require odd degree, and a rising right tail means a positive leading coefficient.`:`Begin with n − 1 ≥ 4. Then use the opposite tails for parity and the right tail for the coefficient sign.`)}),n();