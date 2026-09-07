import{i as e,n as t,t as n}from"./magnifier-DbmAZ0E0.js";var r=`/pre-calculus/assets/precalculus-8e-cover-BRmfC0ye.png`,i=[{number:`00`,eyebrow:`Start here`,title:`Mathematical notation`,description:`Learn how to read the symbols, sets, function labels, and coordinate language used throughout the course.`,sections:[`0.0`],accent:`gold`,layout:`primer`},{number:`09`,eyebrow:`Opening week`,title:`Systems of linear equations`,description:`Solve linear systems in two variables, then extend the methods to larger systems.`,sections:[`9.1`,`9.2`],accent:`coral`},{number:`01`,eyebrow:`Coordinate foundations`,title:`The coordinate plane`,description:`Connect equations to their graphs and work with the geometry of circles.`,sections:[`1.9`],accent:`gold`},{number:`02`,eyebrow:`Function toolkit`,title:`Functions`,description:`Read, transform, combine, and invert functions with confidence.`,sections:[`2.1`,`2.2`,`2.3`,`2.6`,`2.7`,`2.8`],accent:`blue`},{number:`03`,eyebrow:`Shape & behavior`,title:`Polynomial & rational functions`,description:`Connect formulas, zeros, end behavior, and asymptotes to graphs.`,sections:[`3.1`,`3.2`,`3.6`,`3.7`],accent:`gold`},{number:`04`,eyebrow:`Growth & inverse thinking`,title:`Exponential & logarithmic functions`,description:`Move between exponential and logarithmic forms and solve their equations.`,sections:[`4.1`,`4.2`,`4.3`,`4.4`,`4.5`],accent:`green`},{number:`06`,eyebrow:`Angles in context`,title:`Right-triangle trigonometry`,description:`Measure angles, solve triangles, and interpret trigonometric ratios.`,sections:[`6.1`,`6.2`,`6.3`,`6.4`],accent:`violet`},{number:`05`,eyebrow:`Circular motion`,title:`Unit-circle trigonometry`,description:`Build trig functions from the unit circle, then study their graphs and inverses.`,sections:[`5.1`,`5.2`,`5.3`,`5.4`,`5.5`],accent:`blue`},{number:`07`,eyebrow:`Identity & proof`,title:`Analytic trigonometry`,description:`Use identities and formulas to rewrite expressions and solve equations.`,sections:[`7.1`,`7.2`,`7.3`,`7.4`,`7.5`],accent:`coral`}],a=i.reduce((e,t)=>e+t.sections.length,0),o=`/pre-calculus/`,s=`https://picinfiniti.net/mathboard/`,c={"0.0":`${o}pages/sections/0-0.html`,9.1:`${o}pages/sections/9-1.html`,9.2:`${o}pages/sections/9-2.html`,1.9:`${o}pages/sections/1-9.html`,2.1:`${o}pages/sections/2-1.html`,2.2:`${o}pages/sections/2-2.html`,2.3:`${o}pages/sections/2-3.html`,2.6:`${o}pages/sections/2-6.html`,2.7:`${o}pages/sections/2-7.html`,2.8:`${o}pages/sections/2-8.html`},l={"0.0":`Open guide`};function u(e){let n=e.sections.map(e=>{let t=c[e];return t?`<a class="section-chip section-chip--available" href="${t}">${l[e]||e}</a>`:`<span class="section-chip">${e}</span>`}).join(``),r=e.sections.filter(e=>c[e]).length,i=r?`${r} interactive lesson${r===1?``:`s`} available now.`:`Individual lesson pages will be added here.`;return`
    <article class="unit-card unit-card--${e.accent}${e.layout?` unit-card--${e.layout}`:``}">
      <div class="unit-card__topline">
        <span class="unit-card__number">${e.number}</span>
        <span class="unit-card__eyebrow">${e.eyebrow}</span>
      </div>
      <h3>${e.title}</h3>
      <p>${e.description}</p>
      <div class="unit-card__sections" aria-label="Included sections">
        ${n}
      </div>
      <span class="unit-card__note">${i}</span>
      ${e.layout===`primer`?`
        <div class="unit-card-primer-art" aria-hidden="true">
          <div class="unit-card-primer-art__orbit unit-card-primer-art__orbit--outer">
            <span>${t(String.raw`\mathbb{R}`)}</span><span>${t(String.raw`f(x)`)}</span><span>${t(String.raw`\cup`)}</span>
          </div>
          <div class="unit-card-primer-art__orbit unit-card-primer-art__orbit--inner">
            <span>${t(String.raw`D_f`)}</span><span>${t(String.raw`(x,y)`)}</span><span>${t(String.raw`\le`)}</span>
          </div>
          <div class="unit-card-primer-art__center"><strong>?</strong></div>
        </div>
      `:``}
    </article>
  `}new class{constructor(e){this.env=e,this.root=document.querySelector(`#app`)}init(){this.root.innerHTML=`
      <header class="site-header">
        <a class="brand" href="#top" aria-label="MATH 1280 home">
          <span class="brand__mark" aria-hidden="true">ƒ</span>
          <span>
            <strong>Precalculus</strong>
            <small>MATH 1280</small>
          </span>
        </a>
        <nav class="site-nav" aria-label="Primary navigation">
          <a href="#course-map">Course map</a>
          <a href="#study-loop">How to study</a>
          <a href="#mathboard">Mathboard</a>
          <a href="#textbook">Textbook</a>
        </nav>
        <a class="header-cta" href="${s}" target="_blank" rel="noreferrer">Open Mathboard <span aria-hidden="true">↗</span></a>
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
              <div><dt>${a}</dt><dd>sections</dd></div>
              <div><dt>${i.length}</dt><dd>learning arcs</dd></div>
              <div><dt>01</dt><dd>clear path</dd></div>
            </dl>
          </div>

          <div class="hero__visual" aria-label="A coordinate graph representing the course journey">
            <span class="formula formula--one">${t(String.raw`f(x)`)}</span>
            <span class="formula formula--two">${t(String.raw`\sin\theta`)}</span>
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
            <p class="section-kicker">Course map</p>
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
          ${i.map(u).join(``)}
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

        <section class="mathboard-promo" id="mathboard" aria-labelledby="mathboard-title">
          <div class="mathboard-promo__copy">
            <p class="section-kicker">A space to think</p>
            <h2 id="mathboard-title">Make a mark.<br>Follow the idea.</h2>
            <p>
              Sketch a graph, work through an equation, or explain a solution on a clean
              mathematical canvas. Choose a blank page, square grid, or coordinate plane.
            </p>
            <div class="mathboard-promo__actions">
              <a class="button button--primary" href="${s}" target="_blank" rel="noreferrer">Open the Mathboard</a>
              <span>Saved automatically on this device.</span>
            </div>
          </div>
          <div class="mathboard-promo__visual" role="img" aria-label="A preview of the math mathboard with a curve drawn on coordinate axes">
            <div class="mathboard-promo__toolbar" aria-hidden="true">
              <span class="is-active">Pen</span><span>Highlight</span><span>Eraser</span>
              <i></i><i></i><i></i><i></i>
            </div>
            <div class="mathboard-promo__board" aria-hidden="true">
              <svg viewBox="0 0 640 360">
                <g class="mathboard-promo__grid">
                  <path d="M40 0V360M80 0V360M120 0V360M160 0V360M200 0V360M240 0V360M280 0V360M320 0V360M360 0V360M400 0V360M440 0V360M480 0V360M520 0V360M560 0V360M600 0V360" />
                  <path d="M0 40H640M0 80H640M0 120H640M0 160H640M0 200H640M0 240H640M0 280H640M0 320H640" />
                </g>
                <path class="mathboard-promo__axis" d="M320 0V360M0 180H640" />
                <path class="mathboard-promo__curve" d="M48 300C130 290 155 80 248 117C278 128 298 165 320 180C360 210 410 250 470 218C525 190 555 105 586 54" />
                <circle class="mathboard-promo__origin-fill" cx="320" cy="180" r="11" />
                <circle class="mathboard-promo__origin-ring" cx="320" cy="180" r="11" />
              </svg>
              <span class="mathboard-promo__note mathboard-promo__note--one">${t(String.raw`f(x)`)}</span>
              <span class="mathboard-promo__note mathboard-promo__note--two">test the shape</span>
            </div>
          </div>
        </section>

        <section class="textbook" id="textbook" aria-labelledby="textbook-title">
          <figure class="book">
            <img
              class="book__cover"
              src="${r}"
              alt="Cover of Precalculus: Mathematics for Calculus, eighth edition"
            />
          </figure>
          <div class="textbook__copy">
            <p class="section-kicker">The course text</p>
            <h2 id="textbook-title">One book.<br>One guided route.</h2>
            <p>
              This site follows <cite>Precalculus: Mathematics for Calculus</cite>, eighth edition,
              by James Stewart, Lothar Redlin, and Saleem Watson. The course focuses only on the
              sections shown in the course calendar.
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
        <p class="footer-credit">
          Powered by
          <a href="https://picinfiniti.net" target="_blank" rel="noreferrer">PicInfiniti</a>
        </p>
        <nav class="footer-links" aria-label="Project links">
          <a href="${s}" target="_blank" rel="noreferrer">Mathboard <span aria-hidden="true">↗</span></a>
          <a
            class="github-link"
            href="https://github.com/PicInfiniti/pre-calculus"
            target="_blank"
            rel="noreferrer"
            aria-label="View the Precalculus project on GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.24c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.58-.29-5.29-1.29-5.29-5.68 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.48.11-3.08 0 0 .98-.31 3.16 1.18a10.95 10.95 0 0 1 5.76 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.6.23 2.79.11 3.08.75.81 1.2 1.83 1.2 3.09 0 4.4-2.72 5.38-5.3 5.67.42.36.79 1.06.79 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </nav>
      </footer>
    `,e(this.root)}}({BASE_URL:`/pre-calculus/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_SITE:`picinfiniti.net`}).init(),n();