import"./magnifier-B0Wyiml3.js";import{a as e,i as t,o as n,r,s as i}from"./shared-Cg4hcz2F.js";var a=document.querySelector(`#app`),o=(e,t=!1)=>`<span class="native-math${t?` native-math--display`:``}">${e}</span>`,s=(e,t)=>`<span class="native-frac"><span>${e}</span><span>${t}</span></span>`;a.innerHTML=`
  ${n(`3.6`)}
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
        <div class="rational-hero-art__formula">${o(`<var>f</var>(<var>x</var>) = ${s(`<var>P</var>(<var>x</var>)`,`<var>Q</var>(<var>x</var>)`)}`)}</div>
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
          <strong>${o(`<var>f</var>(<var>x</var>) = ${s(`<var>P</var>(<var>x</var>)`,`<var>Q</var>(<var>x</var>)`)}, &nbsp;<var>Q</var>(<var>x</var>) ≠ 0`,!0)}</strong>
          <p>The numerator may equal zero—that creates an intercept. A zero denominator creates a missing input.</p>
        </div>
      </div>

      <div class="domain-lab" data-reveal>
        <div class="domain-lab__cases" role="tablist" aria-label="Rational functions to test">
          <button class="is-active" type="button" data-domain-case="single" role="tab" aria-selected="true">${o(`${s(`4`,`<var>x</var> + 2`)}`)}</button>
          <button type="button" data-domain-case="hole" role="tab" aria-selected="false">${o(`${s(`<var>x</var><sup>2</sup> − 4`,`<var>x</var> − 2`)}`)}</button>
          <button type="button" data-domain-case="all" role="tab" aria-selected="false">${o(`${s(`<var>x</var> + 1`,`<var>x</var><sup>2</sup> + 1`)}`)}</button>
        </div>
        <div class="domain-lab__gate">
          <p class="tool-label">Domain gate</p>
          <div class="domain-equation" id="domain-equation"></div>
          <label for="domain-input"><span>Test ${o(`<var>x</var> =`)}</span><output id="domain-input-output"></output></label>
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
        <p>${o(`<var>x</var> → <var>a</var><sup>−</sup>`)} means approach ${o(`<var>a</var>`)} from smaller values; ${o(`<var>x</var> → <var>a</var><sup>+</sup>`)} means approach from larger values. The two sides can head toward opposite infinities.</p>
      </div>

      <div class="approach-lab" data-reveal>
        <div class="approach-lab__stage">
          <svg id="approach-chart" viewBox="0 0 720 540" role="img" aria-label="A rational graph with two vertical asymptotes and a movable approach point"></svg>
        </div>
        <div class="approach-lab__controls">
          <p class="tool-label">One-sided approach microscope</p>
          <div class="approach-equation">${o(`<var>g</var>(<var>x</var>) = ${s(`<var>x</var>`,`(<var>x</var> + 3)(<var>x</var> − 1)`)}`,!0)}</div>
          <fieldset><legend>Vertical asymptote</legend><div class="approach-choice" role="radiogroup" aria-label="Vertical asymptote"><button class="is-active" type="button" data-approach-wall="-3" role="radio" aria-checked="true">${o(`<var>x</var> = −3`)}</button><button type="button" data-approach-wall="1" role="radio" aria-checked="false">${o(`<var>x</var> = 1`)}</button></div></fieldset>
          <fieldset><legend>Approach side</legend><div class="approach-choice" role="radiogroup" aria-label="Approach side"><button class="is-active" type="button" data-approach-side="left" role="radio" aria-checked="true">From the left · ${o(`−`)}</button><button type="button" data-approach-side="right" role="radio" aria-checked="false">From the right · ${o(`+`)}</button></div></fieldset>
          <label for="approach-distance"><span>Distance from the wall</span><output id="approach-distance-output"></output></label>
          <input id="approach-distance" type="range" min="0" max="100" step="1" value="35" />
          <div class="approach-reading" id="approach-reading"></div>
          <div class="approach-limit" id="approach-limit" aria-live="polite"></div>
        </div>
      </div>

      <div class="asymptote-facts" data-reveal>
        <article><span>Vertical asymptote</span><strong>${o(`<var>x</var> = <var>a</var>`)}</strong><p>The graph grows without bound near a missing input. The dashed line is not part of the graph.</p></article>
        <article><span>Horizontal asymptote</span><strong>${o(`<var>y</var> = <var>L</var>`)}</strong><p>A rational graph has at most one. It approaches that height as ${o(`<var>x</var> → ±∞`)} but may cross it at finite inputs.</p></article>
        <article><span>End behavior here</span><strong>${o(`<var>y</var> → 0`)}</strong><p>For ${o(`<var>g</var>`)}, the denominator’s degree is larger, so both distant ends approach the x-axis.</p></article>
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
        <p>Let ${o(`<var>n</var>`)} be the numerator degree and ${o(`<var>m</var>`)} the denominator degree. Their comparison determines whether a horizontal asymptote exists.</p>
      </div>

      <div class="horizon-lab" data-reveal>
        <div class="horizon-lab__controls">
          <p class="tool-label">Horizontal-asymptote engine</p>
          <label for="horizon-n"><span>Numerator degree ${o(`<var>n</var>`)}</span><output id="horizon-n-output">1</output></label>
          <input id="horizon-n" type="range" min="0" max="5" step="1" value="1" />
          <label for="horizon-m"><span>Denominator degree ${o(`<var>m</var>`)}</span><output id="horizon-m-output">2</output></label>
          <input id="horizon-m" type="range" min="0" max="5" step="1" value="2" />
          <div class="horizon-coefficients" id="horizon-coefficients">
            <label>Leading numerator coefficient <input id="horizon-a" type="number" value="2" step="any" /></label>
            <label>Leading denominator coefficient <input id="horizon-b" type="number" value="1" step="any" /></label>
          </div>
        </div>
        <div class="horizon-lab__result" id="horizon-result" aria-live="polite"></div>
      </div>

      <div class="horizon-rules" data-reveal>
        <article><span>${o(`<var>n</var> < <var>m</var>`)}</span><strong>${o(`<var>y</var> = 0`)}</strong><p>The denominator grows faster.</p></article>
        <article><span>${o(`<var>n</var> = <var>m</var>`)}</span><strong>${o(`<var>y</var> = ${s(`<var>a</var><sub><var>n</var></sub>`,`<var>b</var><sub><var>m</var></sub>`)}`)}</strong><p>Use the ratio of leading coefficients.</p></article>
        <article><span>${o(`<var>n</var> > <var>m</var>`)}</span><strong>No horizontal asymptote</strong><p>The numerator grows at least one power faster.</p></article>
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
          <div class="analysis-equation">${o(`<var>f</var>(<var>x</var>) = ${s(`<var>x</var> − 1`,`<var>x</var><sup>2</sup> + 2<var>x</var> − 3`)}`,!0)}</div>
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
          <h3>Analyze ${o(`<var>f</var>(<var>x</var>) = ${s(`<var>x</var>`,`<var>x</var><sup>2</sup> − 9`)}`)}.</h3>
          <label>Vertical asymptotes <select id="check-two-walls"><option value="">Choose…</option><option value="correct">x = −3 and x = 3</option><option value="a">x = 0</option><option value="b">x = 3 only</option></select></label>
          <label>Horizontal asymptote <select id="check-two-walls-horizontal"><option value="">Choose…</option><option value="correct">y = 0</option><option value="a">y = 1</option><option value="b">None</option></select></label>
          <button id="check-two-walls-button" type="button">Check asymptotes</button>
          <p class="answer-feedback" id="feedback-two-walls" aria-live="polite"></p>
        </article>
        <article class="rational-check" data-reveal>
          <span>Removable hole</span>
          <h3>For ${o(`${s(`<var>x</var><sup>2</sup> − 4`,`<var>x</var> − 2`)}`)}, locate the missing point.</h3>
          <div class="rational-coordinate-answer"><label>${o(`<var>x</var>`)} <input id="check-hole-x" type="number" /></label><label>${o(`<var>y</var>`)} <input id="check-hole-y" type="number" /></label></div>
          <button id="check-hole-button" type="button">Check hole</button>
          <p class="answer-feedback" id="feedback-hole" aria-live="polite"></p>
        </article>
        <article class="rational-check" data-reveal>
          <span>Horizontal rule</span>
          <h3>Find the horizontal asymptote of ${o(`${s(`5<var>x</var><sup>2</sup> − 1`,`2<var>x</var><sup>2</sup> + 7`)}`)}.</h3>
          <label>${o(`<var>y</var> =`)} <input id="check-horizontal-value" type="number" step="any" /></label>
          <button id="check-horizontal-button" type="button">Check height</button>
          <p class="answer-feedback" id="feedback-horizontal" aria-live="polite"></p>
        </article>
        <article class="rational-check" data-reveal>
          <span>Full analysis</span>
          <h3>For ${o(`${s(`<var>x</var> − 1`,`(<var>x</var> + 3)(<var>x</var> − 1)`)}`)}, classify both excluded inputs.</h3>
          <label>${o(`<var>x</var> = −3`)} <select id="check-negative-three"><option value="">Choose…</option><option value="correct">Vertical asymptote</option><option value="a">Hole</option></select></label>
          <label>${o(`<var>x</var> = 1`)} <select id="check-one"><option value="">Choose…</option><option value="a">Vertical asymptote</option><option value="correct">Hole at y = 1/4</option></select></label>
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
  ${e({previous:{href:`pages/sections/3-2.html`,label:`Section 3.2 · Polynomial functions`},next:{href:`pages/sections/3-7.html`,label:`Section 3.7 · Polynomial and rational inequalities`}})}
`;function c(e,t=3){return Number.isFinite(e)?Math.abs(e)<1e-10?`0`:String(Number(e.toFixed(t))).replace(`-`,`−`):e>0?`∞`:e<0?`−∞`:`undefined`}function l({width:e,height:t,padding:n,xMin:r,xMax:i,yMin:a,yMax:o,xStep:s=1,yStep:c=1}){let l=(i-r)/s,u=(o-a)/c,d=Math.min((e-n*2)/l,(t-n*2)/u),f=l*d,p=u*d,m=(e-f)/2,h=(t-p)/2,g=m+f,_=h+p;return{x:e=>m+(e-r)/s*d,y:e=>_-(e-a)/c*d,width:e,height:t,padding:n,plotLeft:m,plotTop:h,plotRight:g,plotBottom:_,plotWidth:f,plotHeight:p,gridSize:d,xStep:s,yStep:c,xMin:r,xMax:i,yMin:a,yMax:o}}function u(e,{xStep:n=e.xStep,yStep:r=e.yStep,labels:i=!0,clipId:a}={}){let o=[],s=[];for(let r=Math.ceil(e.xMin/n)*n;r<=e.xMax+1e-8;r+=n){let a=Math.abs(r)<1e-8;(!(t(r,e.xMin)||t(r,e.xMax))||a)&&o.push(`<line x1="${e.x(r)}" y1="${e.plotTop}" x2="${e.x(r)}" y2="${e.plotBottom}" class="rational-grid${a?` rational-grid--axis`:``}"/>`),i&&!a&&Math.abs(r/n)%2==0&&s.push(`<text x="${e.x(r)}" y="${e.y(0)+20}" text-anchor="middle" class="rational-grid-label">${c(r)}</text>`)}for(let n=Math.ceil(e.yMin/r)*r;n<=e.yMax+1e-8;n+=r){let a=Math.abs(n)<1e-8;(!(t(n,e.yMin)||t(n,e.yMax))||a)&&o.push(`<line x1="${e.plotLeft}" y1="${e.y(n)}" x2="${e.plotRight}" y2="${e.y(n)}" class="rational-grid${a?` rational-grid--axis`:``}"/>`),i&&!a&&Math.abs(n/r)%2==0&&s.push(`<text x="${e.x(0)-10}" y="${e.y(n)+4}" text-anchor="end" class="rational-grid-label">${c(n)}</text>`)}return i&&(s.push(`<text x="${e.plotRight+10}" y="${e.y(0)+5}" class="rational-axis-label">x</text>`),s.push(`<text x="${e.x(0)}" y="${e.plotTop-12}" text-anchor="middle" class="rational-axis-label">y</text>`)),`${a?`<defs><clipPath id="${a}"><rect x="${e.plotLeft-18}" y="${e.plotTop-18}" width="${e.plotWidth+36}" height="${e.plotHeight+36}"/></clipPath></defs>`:``}<rect x="${e.plotLeft}" y="${e.plotTop}" width="${e.plotWidth}" height="${e.plotHeight}" class="rational-plot-bg"/>${o.join(``)}${s.join(``)}`}function d(e,t,n=24){e.setAttribute(`viewBox`,`${t.plotLeft-n} ${t.plotTop-n} ${t.plotWidth+n*2} ${t.plotHeight+n*2}`)}function f(e,t,n=[],r=520){let i=``,a=!1,o=null,s=e.yMax-e.yMin,c=10/e.gridSize*e.yStep;for(let l=0;l<=r;l+=1){let u=e.xMin+(e.xMax-e.xMin)*l/r,d=t(u),f=n.some(t=>Math.abs(u-t)<(e.xMax-e.xMin)/r*1.5),p=Number.isFinite(d)&&d>=e.yMin-c&&d<=e.yMax+c&&!f,m=o!==null&&Math.abs(d-o)>s*.65;p?(i+=`${a&&!m?`L`:`M`}${e.x(u).toFixed(2)} ${e.y(d).toFixed(2)}`,a=!0):a=!1,o=p?d:null}return i}function p(e,t=[],n=[]){return`${t.map(t=>`<line x1="${e.x(t)}" y1="${e.plotTop}" x2="${e.x(t)}" y2="${e.plotBottom}" class="rational-asymptote rational-asymptote--vertical"/>`).join(``)}${n.map(t=>`<line x1="${e.plotLeft}" y1="${e.y(t)}" x2="${e.plotRight}" y2="${e.y(t)}" class="rational-asymptote rational-asymptote--horizontal"/>`).join(``)}`}var m=document.querySelector(`#rational-hero-point`),h=document.querySelector(`.rational-hero-art__curve`),g=window.matchMedia(`(prefers-reduced-motion: reduce)`),_=h.getTotalLength(),v=0,y=0;function b(e){let t=(e-y)%9e3/9e3,n=h.getPointAtLength(_*t);m.setAttribute(`cx`,n.x),m.setAttribute(`cy`,n.y),v=requestAnimationFrame(b)}function x(){cancelAnimationFrame(v);let e=h.getPointAtLength(_*.65);m.setAttribute(`cx`,e.x),m.setAttribute(`cy`,e.y),!g.matches&&(y=performance.now(),v=requestAnimationFrame(b))}g.addEventListener(`change`,x),x();var S={single:{equation:s(`4`,`<var>x</var> + 2`),denominator:e=>e+2,denominatorMarkup:e=>`${c(e)} + 2 = ${c(e+2)}`,rule:`Domain: all real numbers except x = −2.`},hole:{equation:s(`<var>x</var><sup>2</sup> − 4`,`<var>x</var> − 2`),denominator:e=>e-2,denominatorMarkup:e=>`${c(e)} − 2 = ${c(e-2)}`,rule:`Domain: all real numbers except x = 2. Canceling later does not restore the missing input.`},all:{equation:s(`<var>x</var> + 1`,`<var>x</var><sup>2</sup> + 1`),denominator:e=>e**2+1,denominatorMarkup:e=>`(${c(e)})<sup>2</sup> + 1 = ${c(e**2+1)}`,rule:`Domain: all real numbers. Since x² ≥ 0, the denominator x² + 1 is always positive.`}},C=`single`,w=document.querySelector(`#domain-input`);function T(){let e=S[C],n=Number(w.value),r=e.denominator(n),i=!t(r,0,1e-10);document.querySelector(`#domain-equation`).innerHTML=o(`<var>f</var>(<var>x</var>) = ${e.equation}`,!0),document.querySelector(`#domain-input-output`).textContent=c(n,2),document.querySelector(`#domain-denominator`).innerHTML=`<span>Denominator check</span>${o(e.denominatorMarkup(n),!0)}`;let a=document.querySelector(`#domain-verdict`);a.className=`domain-verdict ${i?`is-open`:`is-blocked`}`,a.innerHTML=`<strong>${i?`Gate open`:`Input blocked`}</strong><p>${i?`The denominator is nonzero, so this input belongs to the domain.`:`Division by zero is undefined, so this input is excluded from the domain.`}</p>`,document.querySelector(`#domain-rule`).textContent=e.rule}document.querySelectorAll(`[data-domain-case]`).forEach(e=>{e.addEventListener(`click`,()=>{C=e.dataset.domainCase,w.value=C===`single`?`-2`:C===`hole`?`2`:`0`,document.querySelectorAll(`[data-domain-case]`).forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),T()})}),w.addEventListener(`input`,T),T();var E=-3,D=`left`,O=document.querySelector(`#approach-distance`),k=e=>e/((e+3)*(e-1)),A=l({width:720,height:540,padding:54,xMin:-6,xMax:5,yMin:-7,yMax:7,xStep:1,yStep:2});function j(){let e=10**(-Number(O.value)/50),t=E+(D===`left`?-1:1)*e,n=k(t),r=n>0?`∞`:`−∞`,i=Math.max(A.yMin,Math.min(A.yMax,n)),a=document.querySelector(`#approach-chart`);d(a,A),a.innerHTML=`
    ${u(A,{clipId:`rational-approach-clip`})}
    ${p(A,[-3,1],[0])}
    <path d="${f(A,k,[-3,1])}" class="rational-curve" clip-path="url(#rational-approach-clip)"/>
    <line x1="${A.x(t)}" y1="${A.y(0)}" x2="${A.x(t)}" y2="${A.y(i)}" class="approach-guide"/>
    <circle cx="${A.x(t)}" cy="${A.y(i)}" r="10" class="approach-point"/>
  `,document.querySelector(`#approach-distance-output`).textContent=c(e,3),document.querySelector(`#approach-reading`).innerHTML=`<span>Current sample</span><strong>${o(`<var>x</var> = ${c(t,4)}, &nbsp;<var>g</var>(<var>x</var>) = ${c(n,3)}`)}</strong>`,document.querySelector(`#approach-limit`).innerHTML=`<span>Arrow statement</span><strong>${o(`<var>g</var>(<var>x</var>) → ${r} &nbsp;as&nbsp; <var>x</var> → ${c(E)}<sup>${D===`left`?`−`:`+`}</sup>`,!0)}</strong><p>Move closer to watch the output’s magnitude grow.</p>`}function M(e,t){document.querySelectorAll(`[data-${e}]`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.getAttribute(`data-${e}`);r!==null&&(t(r),document.querySelectorAll(`[data-${e}]`).forEach(e=>{let t=e===n;e.classList.toggle(`is-active`,t),e.setAttribute(`aria-checked`,String(t))}),j())})})}M(`approach-wall`,e=>{E=Number(e)}),M(`approach-side`,e=>{D=e}),O.addEventListener(`input`,j),j();var N={"two-walls":{source:s(`<var>x</var>`,`<var>x</var><sup>2</sup> − 9`),factor:s(`<var>x</var>`,`(<var>x</var> − 3)(<var>x</var> + 3)`),fn:e=>e/(e**2-9),poles:[-3,3],holes:[],horizontal:[0],bounds:{xMin:-6,xMax:6,yMin:-6,yMax:6},results:[[`Vertical asymptotes`,`x = −3, x = 3`],[`Holes`,`none`],[`Horizontal asymptote`,`y = 0`],[`Intercept`,`(0, 0)`]],note:`No factor cancels. Both denominator zeros remain infinite walls.`},"hole-line":{source:s(`<var>x</var><sup>2</sup> − 4`,`<var>x</var> − 2`),factor:`${s(`(<var>x</var> − 2)(<var>x</var> + 2)`,`<var>x</var> − 2`)} = <var>x</var> + 2, &nbsp;<var>x</var> ≠ 2`,fn:e=>e+2,poles:[],holes:[[2,4]],horizontal:[],bounds:{xMin:-6,xMax:6,yMin:-5,yMax:8},results:[[`Vertical asymptotes`,`none`],[`Hole`,`(2, 4)`],[`Horizontal asymptote`,`none`],[`Simplified graph`,`y = x + 2`]],note:`The common factor cancels algebraically, but x = 2 remains excluded from the original domain.`},shifted:{source:s(`2<var>x</var> − 1`,`<var>x</var> − 1`),factor:`2 + ${s(`1`,`<var>x</var> − 1`)}`,fn:e=>(2*e-1)/(e-1),poles:[1],holes:[],horizontal:[2],bounds:{xMin:-5,xMax:6,yMin:-6,yMax:8},results:[[`Vertical asymptote`,`x = 1`],[`Hole`,`none`],[`Horizontal asymptote`,`y = 2`],[`Intercepts`,`(1/2, 0), (0, 1)`]],note:`Equal degrees give the leading-coefficient ratio 2/1 = 2 for the horizontal asymptote.`}},P=`two-walls`;function F(){let e=N[P],t=l({width:700,height:540,padding:54,...e.bounds,xStep:1,yStep:2});document.querySelector(`#discontinuity-source`).innerHTML=`<span>Original rule</span>${o(`<var>f</var>(<var>x</var>) = ${e.source}`,!0)}`,document.querySelector(`#discontinuity-factor`).innerHTML=`<span>Factor or divide</span>${o(e.factor,!0)}`,document.querySelector(`#discontinuity-results`).innerHTML=e.results.map(([e,t])=>`<div><dt>${e}</dt><dd>${o(t)}</dd></div>`).join(``),document.querySelector(`#discontinuity-note`).textContent=e.note;let n=document.querySelector(`#discontinuity-chart`);d(n,t),n.innerHTML=`
    ${u(t,{clipId:`rational-discontinuity-clip`})}
    ${p(t,e.poles,e.horizontal)}
    <path d="${f(t,e.fn,e.poles)}" class="rational-curve" clip-path="url(#rational-discontinuity-clip)"/>
    ${e.holes.map(([e,n])=>`<circle cx="${t.x(e)}" cy="${t.y(n)}" r="10" class="rational-hole"/>`).join(``)}
  `}document.querySelectorAll(`[data-discontinuity]`).forEach(e=>{e.addEventListener(`click`,()=>{P=e.dataset.discontinuity,document.querySelectorAll(`[data-discontinuity]`).forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),F()})}),F();var I=document.querySelector(`#horizon-n`),L=document.querySelector(`#horizon-m`),R=document.querySelector(`#horizon-a`),z=document.querySelector(`#horizon-b`);function B(){let e=Number(I.value),t=Number(L.value),n=Number(R.value),r=Number(z.value),i=e===t;document.querySelector(`#horizon-n-output`).textContent=String(e),document.querySelector(`#horizon-m-output`).textContent=String(t),document.querySelector(`#horizon-coefficients`).classList.toggle(`is-relevant`,i);let a,s,l;e<t?(a=`${e} < ${t}`,s=`<var>y</var> = 0`,l=`The denominator grows faster, so the quotient shrinks toward zero at both ends.`):i?(a=`${e} = ${t}`,s=r===0?`denominator leading coefficient cannot be 0`:`<var>y</var> = ${c(n/r,3)}`,l=r===0?`A leading coefficient must be nonzero.`:`The highest-power terms dominate, so their coefficient ratio is ${c(n,3)}/${c(r,3)}.`):(a=`${e} > ${t}`,s=`no horizontal asymptote`,l=`The numerator grows faster. A slant or polynomial asymptote may exist, but there is no horizontal one.`),document.querySelector(`#horizon-result`).innerHTML=`<span>Degree comparison</span><strong>${o(a)}</strong><i></i><span>Conclusion</span><strong>${o(s,!0)}</strong><p>${l}</p>`}[I,L,R,z].forEach(e=>e.addEventListener(`input`,B)),B();var V=[[`Factor the denominator`,`${s(`<var>x</var> − 1`,`(<var>x</var> + 3)(<var>x</var> − 1)`)}`],[`Preserve original restrictions`,`<var>x</var> ≠ −3 and <var>x</var> ≠ 1`],[`Cancel the common factor`,`${s(`1`,`<var>x</var> + 3`)}, &nbsp;<var>x</var> ≠ −3, 1`],[`Classify the gaps`,`vertical asymptote <var>x</var> = −3 · hole at (1, 1/4)`],[`Find intercepts`,`<var>y</var>-intercept ${s(`1`,`3`)} · no <var>x</var>-intercept`],[`Finish the behavior`,`horizontal asymptote <var>y</var> = 0 · left of −3 falls · right of −3 rises`]],H=1,U=e=>1/(e+3),W=l({width:720,height:560,padding:58,xMin:-8,xMax:6,yMin:-6,yMax:6,xStep:1,yStep:2});function G(){let e=document.querySelector(`#analysis-chart`);d(e,W),e.innerHTML=`
    ${u(W,{clipId:`rational-analysis-clip`})}
    ${p(W,[-3],[0])}
    <path d="${f(W,U,[-3])}" class="analysis-curve" clip-path="url(#rational-analysis-clip)"/>
    <circle cx="${W.x(1)}" cy="${W.y(.25)}" r="10" class="rational-hole"/>
    <circle cx="${W.x(0)}" cy="${W.y(1/3)}" r="7" class="analysis-intercept"/>
  `,document.querySelector(`#analysis-steps`).innerHTML=V.map(([e,t],n)=>`<li class="${n<H?`is-visible`:``}"><span>${n+1}</span><div><small>${n<H?e:`Hidden step`}</small><strong>${n<H?o(t):`?`}</strong></div></li>`).join(``);let t=H===V.length,n=document.querySelector(`#analysis-next`);n.disabled=t,n.textContent=t?`Analysis complete`:`Reveal next step`,document.querySelector(`#analysis-summary`).innerHTML=t?`<span>Graph fingerprint</span><p>Domain excludes −3 and 1. Range excludes 0 and 1/4. The canceled input remains a hole.</p>`:`Reveal the dossier in order; each conclusion depends on the previous factor work.`}document.querySelector(`#analysis-next`).addEventListener(`click`,()=>{H=Math.min(V.length,H+1),G()}),document.querySelector(`#analysis-reset`).addEventListener(`click`,()=>{H=1,G()}),G(),document.querySelector(`#check-two-walls-button`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-two-walls`).value===`correct`&&document.querySelector(`#check-two-walls-horizontal`).value===`correct`;i(document.querySelector(`#feedback-two-walls`),e,e?`Correct. The denominator factors as (x − 3)(x + 3), and its higher degree makes y = 0 the horizontal asymptote.`:`Factor x² − 9. Both denominator factors remain, and the numerator degree is smaller than the denominator degree.`)}),document.querySelector(`#check-hole-button`).addEventListener(`click`,()=>{let e=t(Number(document.querySelector(`#check-hole-x`).value),2)&&t(Number(document.querySelector(`#check-hole-y`).value),4);i(document.querySelector(`#feedback-hole`),e,e?`Correct. Canceling x − 2 leaves y = x + 2, and substituting the excluded input gives the missing point (2, 4).`:`Factor the numerator, cancel x − 2, then evaluate the simplified rule at the excluded input x = 2.`)}),document.querySelector(`#check-horizontal-button`).addEventListener(`click`,()=>{let e=t(Number(document.querySelector(`#check-horizontal-value`).value),2.5);i(document.querySelector(`#feedback-horizontal`),e,e?`Correct. Equal degrees use the ratio of leading coefficients: 5/2.`:`Both polynomials have degree 2, so divide the numerator’s leading coefficient by the denominator’s.`)}),document.querySelector(`#check-full-button`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-negative-three`).value===`correct`&&document.querySelector(`#check-one`).value===`correct`;i(document.querySelector(`#feedback-full`),e,e?`Correct. The x + 3 factor remains and creates a wall; x − 1 cancels and leaves the hole (1, 1/4).`:`Cancel only common factors. A denominator factor that remains creates a vertical asymptote; a canceled one creates a hole.`)}),r();