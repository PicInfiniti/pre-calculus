import"./modulepreload-polyfill-P2Xu9kJm.js";var e=`/pre-calculus/assets/precalculus-8e-cover-BRmfC0ye.png`,t=[{number:`01`,eyebrow:`Opening week`,title:`Systems of linear equations`,description:`Solve linear systems in two variables, then extend the methods to larger systems.`,sections:[`9.1`,`9.2`],accent:`coral`},{number:`02`,eyebrow:`Coordinate foundations`,title:`The coordinate plane`,description:`Connect equations to their graphs and work with the geometry of circles.`,sections:[`1.9`],accent:`gold`},{number:`03`,eyebrow:`Function toolkit`,title:`Functions`,description:`Read, transform, combine, and invert functions with confidence.`,sections:[`2.1`,`2.2`,`2.3`,`2.6`,`2.7`,`2.8`],accent:`blue`},{number:`04`,eyebrow:`Shape & behavior`,title:`Polynomial & rational functions`,description:`Connect formulas, zeros, end behavior, and asymptotes to graphs.`,sections:[`3.1`,`3.2`,`3.6`,`3.7`],accent:`gold`},{number:`05`,eyebrow:`Growth & inverse thinking`,title:`Exponential & logarithmic functions`,description:`Move between exponential and logarithmic forms and solve their equations.`,sections:[`4.1`,`4.2`,`4.3`,`4.4`,`4.5`],accent:`green`},{number:`06`,eyebrow:`Angles in context`,title:`Right-triangle trigonometry`,description:`Measure angles, solve triangles, and interpret trigonometric ratios.`,sections:[`6.1`,`6.2`,`6.3`,`6.4`],accent:`violet`},{number:`07`,eyebrow:`Circular motion`,title:`Unit-circle trigonometry`,description:`Build trig functions from the unit circle, then study their graphs and inverses.`,sections:[`5.1`,`5.2`,`5.3`,`5.4`,`5.5`],accent:`blue`},{number:`08`,eyebrow:`Identity & proof`,title:`Analytic trigonometry`,description:`Use identities and formulas to rewrite expressions and solve equations.`,sections:[`7.1`,`7.2`,`7.3`,`7.4`,`7.5`],accent:`coral`}],n=t.reduce((e,t)=>e+t.sections.length,0),r=`/pre-calculus/`,i={"9.1":`${r}pages/sections/9-1.html`,"9.2":`${r}pages/sections/9-2.html`};function a(e){let t=e.sections.map(e=>{let t=i[e];return t?`<a class="section-chip section-chip--available" href="${t}">${e}</a>`:`<span class="section-chip">${e}</span>`}).join(``),n=e.sections.filter(e=>i[e]).length,r=n?`${n} interactive lesson${n===1?``:`s`} available now.`:`Individual lesson pages will be added here.`;return`
    <article class="unit-card unit-card--${e.accent}">
      <div class="unit-card__topline">
        <span class="unit-card__number">${e.number}</span>
        <span class="unit-card__eyebrow">${e.eyebrow}</span>
      </div>
      <h3>${e.title}</h3>
      <p>${e.description}</p>
      <div class="unit-card__sections" aria-label="Included sections">
        ${t}
      </div>
      <span class="unit-card__note">${r}</span>
    </article>
  `}new class{constructor(e){this.env=e,this.root=document.querySelector(`#app`)}init(){this.root.innerHTML=`
      <header class="site-header">
        <a class="brand" href="#top" aria-label="MATH 1280 home">
          <span class="brand__mark" aria-hidden="true">ƒ</span>
          <span>
            <strong>Precalculus</strong>
            <small>MATH 1280 · Fall 2026</small>
          </span>
        </a>
        <nav class="site-nav" aria-label="Primary navigation">
          <a href="#course-map">Course map</a>
          <a href="#study-loop">How to study</a>
          <a href="#textbook">Textbook</a>
        </nav>
        <a class="header-cta" href="#course-map">View sections <span aria-hidden="true">↘</span></a>
      </header>

      <main id="top">
        <section class="hero" aria-labelledby="hero-title">
          <div class="hero__copy">
            <p class="kicker"><span></span> Your path to calculus starts here</p>
            <h1 id="hero-title">See the pattern.<br><em>Build the skill.</em></h1>
            <p class="hero__lede">
              A focused home for notes, examples, and practice from
              <strong>Precalculus: Mathematics for Calculus</strong>.
            </p>
            <div class="hero__actions">
              <a class="button button--primary" href="#course-map">Explore the course</a>
              <a class="text-link" href="#textbook">About the textbook <span aria-hidden="true">→</span></a>
            </div>
            <dl class="hero__stats" aria-label="Course overview">
              <div><dt>${n}</dt><dd>sections</dd></div>
              <div><dt>${t.length}</dt><dd>learning arcs</dd></div>
              <div><dt>01</dt><dd>clear path</dd></div>
            </dl>
          </div>

          <div class="hero__visual" aria-label="A coordinate graph representing the course journey">
            <span class="formula formula--one">f(x)</span>
            <span class="formula formula--two">sin θ</span>
            <div class="graph-card">
              <div class="graph-card__label"><span></span> From functions to calculus</div>
              <svg viewBox="0 0 520 390" role="img" aria-labelledby="graph-title graph-desc">
                <title id="graph-title">An increasing mathematical curve</title>
                <desc id="graph-desc">A curve rises across a coordinate grid, connecting key learning points.</desc>
                <defs>
                  <pattern id="small-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" stroke-width="1" />
                  </pattern>
                  <linearGradient id="curve-gradient" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0" stop-color="#ff6b48" />
                    <stop offset="1" stop-color="#ffd166" />
                  </linearGradient>
                </defs>
                <rect width="520" height="390" fill="url(#small-grid)" class="graph-grid" />
                <path class="graph-axis" d="M52 24V342H490M52 342L44 330M52 342L64 332M490 342L478 334M490 342L478 350" />
                <path class="graph-curve" d="M54 314 C132 320 164 290 207 238 C251 184 293 221 337 157 C374 103 407 75 478 54" />
                <g class="graph-points">
                  <circle cx="112" cy="307" r="8" />
                  <circle cx="207" cy="238" r="8" />
                  <circle cx="337" cy="157" r="8" />
                  <circle cx="443" cy="70" r="8" />
                </g>
              </svg>
              <div class="graph-card__caption">
                <span>algebra</span><span>functions</span><span>trigonometry</span>
              </div>
            </div>
          </div>
        </section>

        <section class="course-intro" id="course-map" aria-labelledby="course-map-title">
          <div>
            <p class="section-kicker">Course map · Fall 2026</p>
            <h2 id="course-map-title">Every idea has<br>a place in the story.</h2>
          </div>
          <div class="course-intro__copy">
            <p>
              The calendar moves through eight textbook chapters. We group them into eight
              connected learning arcs so you can see where each lesson fits and what comes next.
            </p>
            <p class="availability"><span></span> Section pages will open as they are published.</p>
          </div>
        </section>

        <section class="unit-grid" aria-label="Course units">
          ${t.map(a).join(``)}
        </section>

        <section class="study-loop" id="study-loop" aria-labelledby="study-loop-title">
          <div class="study-loop__heading">
            <p class="section-kicker section-kicker--light">A repeatable rhythm</p>
            <h2 id="study-loop-title">Learn math by<br>doing math.</h2>
            <p>Each future section page will use the same simple study loop.</p>
          </div>
          <ol class="study-steps">
            <li>
              <span class="study-steps__number">01</span>
              <div><h3>Understand</h3><p>Start with the central idea, notation, and a visual explanation.</p></div>
            </li>
            <li>
              <span class="study-steps__number">02</span>
              <div><h3>Work it out</h3><p>Follow deliberate examples with every important algebra step shown.</p></div>
            </li>
            <li>
              <span class="study-steps__number">03</span>
              <div><h3>Practice</h3><p>Check your understanding with targeted problems and quick feedback.</p></div>
            </li>
          </ol>
        </section>

        <section class="textbook" id="textbook" aria-labelledby="textbook-title">
          <figure class="book">
            <img
              class="book__cover"
              src="${e}"
              alt="Cover of Precalculus: Mathematics for Calculus, eighth edition"
            />
          </figure>
          <div class="textbook__copy">
            <p class="section-kicker">The course text</p>
            <h2 id="textbook-title">One book.<br>One guided route.</h2>
            <p>
              This site follows <cite>Precalculus: Mathematics for Calculus</cite>, eighth edition,
              by James Stewart, Lothar Redlin, and Saleem Watson. The course focuses only on the
              sections shown in the Fall 2026 calendar.
            </p>
            <dl class="book-details">
              <div><dt>Edition</dt><dd>8th</dd></div>
              <div><dt>Published</dt><dd>2024</dd></div>
              <div><dt>Print ISBN</dt><dd>978-0-357-75363-7</dd></div>
            </dl>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <a class="brand brand--footer" href="#top">
          <span class="brand__mark" aria-hidden="true">ƒ</span>
          <span><strong>Precalculus</strong><small>MATH 1280</small></span>
        </a>
        <p>Built as a growing set of course notes for Fall 2026.</p>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    `}}({BASE_URL:`/pre-calculus/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_SITE:`picinfiniti.net`}).init();