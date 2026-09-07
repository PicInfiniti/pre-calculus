import{i as e,n as t,r as n}from"./magnifier-DbmAZ0E0.js";import{a as r,i,o as a,r as o,s}from"./shared-BEyMclnh.js";var c=document.querySelector(`#app`);function l(t,n,r){s(t,n,``),t.innerHTML=r,e(t)}c.innerHTML=`
  ${a(`2.8`)}
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
        <span class="inverse-hero-art__tag inverse-hero-art__tag--forward">${t(String.raw`(a,b)`)}</span>
        <span class="inverse-hero-art__tag inverse-hero-art__tag--inverse">${t(String.raw`(b,a)`)}</span>
        <span class="inverse-hero-art__tag inverse-hero-art__tag--mirror">${t(String.raw`y=x`)}</span>
        <div class="inverse-hero-art__identity">${t(String.raw`f^{-1}(f(x))=x`)}</div>
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
          <strong>${t(String.raw`x_1\ne x_2\Longrightarrow f(x_1)\ne f(x_2)`)}</strong>
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
          <label for="horizontal-y"><span>Move the line to ${t(String.raw`y=`)}</span><output id="horizontal-y-output">0</output></label>
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
        <h2>The inverse is a reflection<br>across ${t(String.raw`y=x`)}.</h2>
        <p>Switching input and output turns every point ${t(String.raw`(a,b)`)} into ${t(String.raw`(b,a)`)}, so domain and range trade places.</p>
      </div>

      <div class="reflection-lab" data-reveal>
        <div class="reflection-lab__stage">
          <svg id="reflection-chart" viewBox="0 0 620 620" role="img" aria-label="A function and its inverse reflected across y equals x"></svg>
        </div>
        <div class="reflection-lab__controls">
          <p class="tool-label">Inverse reflection studio</p>
          <div class="reflection-legend">
            <span><i></i>${t(String.raw`f`)}</span>
            <span><i></i>${t(String.raw`f^{-1}`)}</span>
            <span><i></i>${t(String.raw`y=x`)}</span>
          </div>
          <button id="reflection-toggle" type="button" aria-pressed="true">Hide inverse graph</button>
          <label for="reflection-point">Move along the original graph <output id="reflection-point-output">50%</output></label>
          <input id="reflection-point" type="range" min="0" max="100" step="1" value="50" />
          <div class="coordinate-swap">
            <article><span>Point on ${t(String.raw`f`)}</span><strong id="reflection-forward-point"></strong></article>
            <i aria-hidden="true">⇄</i>
            <article><span>Point on ${t(String.raw`f^{-1}`)}</span><strong id="reflection-inverse-point"></strong></article>
          </div>
          <dl class="inverse-domain-swap">
            <div><dt>${t(String.raw`D_f`)}</dt><dd>${t(String.raw`[-3,4]`)}</dd></div>
            <div><dt>${t(String.raw`R_f`)}</dt><dd>${t(String.raw`[-2,2]`)}</dd></div>
            <div><dt>${t(String.raw`D_{f^{-1}}`)}</dt><dd>${t(String.raw`[-2,2]`)}</dd></div>
            <div><dt>${t(String.raw`R_{f^{-1}}`)}</dt><dd>${t(String.raw`[-3,4]`)}</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="inverse-values">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Run the machine backward</p>
        <h2>An inverse answers:<br>“Which input made this?”</h2>
        <p>You do not always need an inverse formula. If you know ${t(String.raw`f(a)=b`)}, then you immediately know ${t(String.raw`f^{-1}(b)=a`)}.</p>
      </div>

      <div class="undo-lab" data-reveal>
        <div class="undo-lab__machine">
          <div class="undo-formula">${t(String.raw`f(x)=x^5+x^3+x`)}</div>
          <div class="undo-track">
            <article><span>input</span><strong id="undo-input-value">1</strong></article>
            <i>→</i>
            <article class="undo-track__function"><span>${t(String.raw`f`)}</span><strong>forward</strong></article>
            <i>→</i>
            <article><span>output</span><strong id="undo-output-value">3</strong></article>
          </div>
          <div class="undo-track undo-track--reverse">
            <article><span>input</span><strong id="undo-reverse-input">3</strong></article>
            <i>→</i>
            <article class="undo-track__inverse"><span>${t(String.raw`f^{-1}`)}</span><strong>undo</strong></article>
            <i>→</i>
            <article><span>output</span><strong id="undo-reverse-output">1</strong></article>
          </div>
        </div>
        <div class="undo-lab__controls">
          <p class="tool-label">Find the input that produces 3</p>
          <label for="undo-x">Try ${t(String.raw`x=`)} <output id="undo-x-output">1</output></label>
          <input id="undo-x" type="range" min="-1.5" max="1.5" step="0.1" value="1" />
          <div class="undo-target"><span>Target output</span><strong>${t(String.raw`3`)}</strong><i id="undo-target-meter"></i></div>
          <div class="undo-verdict" id="undo-verdict" aria-live="polite"></div>
          <div class="inverse-identities">
            <span>${t(String.raw`f^{-1}(f(x))=x`)}</span>
            <span>${t(String.raw`f(f^{-1}(x))=x`)}</span>
          </div>
          <p class="inverse-warning"><strong>${t(String.raw`f^{-1}`)} is inverse notation.</strong> It does not mean ${t(String.raw`\frac1f`)}.</p>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="inverse-algebra">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>05</span> Solve the reversal</p>
        <h2>Switch the roles.<br>Then isolate the output.</h2>
        <p>Write the rule with ${t(String.raw`y`)}, exchange ${t(String.raw`x`)} and ${t(String.raw`y`)}, and solve for the new output. The domain of the inverse is the original range.</p>
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
          <label><span>${t(String.raw`r(t)=t^4-1`)} on all reals</span>
            <select id="check-quartic-full"><option value="">Choose…</option><option value="correct">Not one-to-one</option><option value="a">One-to-one</option></select>
          </label>
          <label><span>${t(String.raw`f(x)=x^4+5,\ 0\le x\le2`)}</span>
            <select id="check-quartic-restricted"><option value="">Choose…</option><option value="a">Not one-to-one</option><option value="correct">One-to-one</option></select>
          </label>
          <button id="check-one-to-one" type="button">Check classifications</button>
          <p class="answer-feedback" id="feedback-one-to-one" aria-live="polite"></p>
        </article>
        <article class="inverse-check" data-reveal>
          <span>Inverse values</span>
          <h3>Suppose ${t(String.raw`f(4)=17`)}.</h3>
          <label>${t(String.raw`f^{-1}(17)=`)} <input id="check-inverse-value" type="number" /></label>
          <label>${t(String.raw`f(f^{-1}(4x+3))=`)}
            <select id="check-inverse-composition"><option value="">Choose…</option><option value="a">f(4x + 3)</option><option value="correct">4x + 3</option><option value="b">x</option></select>
          </label>
          <button id="check-inverse-values" type="button">Check values</button>
          <p class="answer-feedback" id="feedback-inverse-values" aria-live="polite"></p>
        </article>
        <article class="inverse-check" data-reveal>
          <span>Coordinate swap</span>
          <h3>If ${t(String.raw`(2,-3)`)} lies on ${t(String.raw`f`)}, what lies on ${t(String.raw`f^{-1}`)}?</h3>
          <div class="inverse-coordinate-answer">
            <label>x <input id="check-inverse-point-x" type="number" /></label>
            <label>y <input id="check-inverse-point-y" type="number" /></label>
          </div>
          <button id="check-inverse-point" type="button">Check point</button>
          <p class="answer-feedback" id="feedback-inverse-point" aria-live="polite"></p>
        </article>
        <article class="inverse-check" data-reveal>
          <span>Algebraic inverse</span>
          <h3>Choose the inverse of ${t(String.raw`f(x)=3x-5`)}.</h3>
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
  ${r({previous:{href:`pages/sections/2-7.html`,label:`Section 2.7 · Combining functions`},next:null})}
`,e(c);var u=document.querySelector(`.inverse-hero-art__curve--forward`),d=document.querySelector(`.inverse-hero-art__point--forward`),f=document.querySelector(`.inverse-hero-art__point--inverse`),p=window.matchMedia(`(prefers-reduced-motion: reduce)`),m=u.getTotalLength(),h=0,g=0;function _(e){let t=u.getPointAtLength(m*e);d.setAttribute(`cx`,t.x),d.setAttribute(`cy`,t.y),f.setAttribute(`cx`,500-t.y),f.setAttribute(`cy`,500-t.x)}function v(e){let t=e-g;_(.5+.45*Math.sin(t/12e3*Math.PI*2)),h=window.requestAnimationFrame(v)}function y(){window.cancelAnimationFrame(h),_(.5),!p.matches&&(g=performance.now(),h=window.requestAnimationFrame(v))}p.addEventListener(`change`,y),y();function b(e,t=2){if(!Number.isFinite(e))return`—`;let n=Number(e.toFixed(t));return String(n).replace(`-`,`−`)}var x={injective:{name:`A one-to-one function`,formula:String.raw`f(x)=2x+1`,inputs:[1,2,3,4],outputs:[3,5,7,9],arrows:[[0,0],[1,1],[2,2],[3,3]],verdict:`Function and one-to-one`,copy:`Every input has one arrow, and every used output receives one arrow.`,tone:`good`},collision:{name:`A function with collisions`,formula:String.raw`f(x)=x^2`,inputs:[-2,-1,1,2],outputs:[1,4],arrows:[[0,1],[1,0],[2,0],[3,1]],verdict:`Function, but not one-to-one`,copy:`Each input has one output, but opposite inputs collide at the same output.`,tone:`warn`},split:{name:`A relation with a split input`,formula:String.raw`x=2\longmapsto 4\text{ and }7`,inputs:[1,2,3],outputs:[2,4,7],arrows:[[0,0],[1,1],[1,2],[2,1]],verdict:`Not a function`,copy:`Input 2 has two arrows. It fails before one-to-one behavior can even be tested.`,tone:`bad`}};function S(e,t){return t===1?195:92+e/(t-1)*206}function C(e){let t=x[e];document.querySelectorAll(`[data-mapping]`).forEach(t=>{let n=t.dataset.mapping===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),document.querySelector(`#mapping-name`).textContent=t.name,n(document.querySelector(`#mapping-formula`),t.formula),document.querySelector(`#mapping-copy`).textContent=t.copy;let r=t.inputs.map((e,n)=>`<g class="mapping-node mapping-node--input"><circle cx="130" cy="${S(n,t.inputs.length)}" r="25"/><text x="130" y="${S(n,t.inputs.length)+6}">${b(e)}</text></g>`).join(``),i=t.outputs.map((e,n)=>`<g class="mapping-node mapping-node--output"><circle cx="530" cy="${S(n,t.outputs.length)}" r="25"/><text x="530" y="${S(n,t.outputs.length)+6}">${b(e)}</text></g>`).join(``),a=t.arrows.reduce((e,[,t])=>(e[t]=(e[t]||0)+1,e),{}),o=t.arrows.map(([e,n])=>{let r=S(e,t.inputs.length),i=S(n,t.outputs.length);return`<path d="M156 ${r}C270 ${r} 390 ${i} 504 ${i}" class="mapping-arrow${a[n]>1?` is-collision`:``}"/>`}).join(``);document.querySelector(`#mapping-chart`).innerHTML=`
    <rect x="74" y="42" width="112" height="306" rx="56" class="mapping-set mapping-set--input"/>
    <rect x="474" y="42" width="112" height="306" rx="56" class="mapping-set mapping-set--output"/>
    <text x="130" y="27" class="mapping-set-label">INPUTS</text>
    <text x="530" y="27" class="mapping-set-label">OUTPUTS</text>
    ${o}${r}${i}
  `;let s=document.querySelector(`#mapping-verdict`);s.className=`mapping-verdict is-${t.tone}`,s.innerHTML=`<strong>${t.verdict}</strong><span>${t.copy}</span>`}document.querySelectorAll(`[data-mapping]`).forEach(e=>{e.addEventListener(`click`,()=>C(e.dataset.mapping))}),C(`injective`);function w({width:e,height:t,padding:n,xMin:r,xMax:i,yMin:a,yMax:o,equalScale:s=!1}){let c=r,l=i,u=a,d=o,f=e-2*n,p=t-2*n;if(s){let e=(r+i)/2,t=(a+o)/2,n=i-r,s=o-a,m=f/p;if(n/s<m){let t=s*m;c=e-t/2,l=e+t/2}else{let e=n/m;u=t-e/2,d=t+e/2}}return{width:e,height:t,padding:n,xMin:c,xMax:l,yMin:u,yMax:d,equalScale:s,left:n,right:e-n,top:n,bottom:t-n,x(e){return n+(e-c)/(l-c)*f},y(e){return t-n-(e-u)/(d-u)*p}}}function T(e){let t=[];if(e.equalScale){for(let n=Math.ceil(e.xMin);n<=Math.floor(e.xMax);n+=1){let r=e.x(n);t.push(`<line x1="${r}" y1="${e.top}" x2="${r}" y2="${e.bottom}" class="inverse-grid-line"/>`)}for(let n=Math.ceil(e.yMin);n<=Math.floor(e.yMax);n+=1){let r=e.y(n);t.push(`<line x1="${e.left}" y1="${r}" x2="${e.right}" y2="${r}" class="inverse-grid-line"/>`)}}else for(let n=0;n<=10;n+=1){let r=e.left+n/10*(e.right-e.left),i=e.top+n/10*(e.bottom-e.top);t.push(`<line x1="${r}" y1="${e.top}" x2="${r}" y2="${e.bottom}" class="inverse-grid-line"/>`),t.push(`<line x1="${e.left}" y1="${i}" x2="${e.right}" y2="${i}" class="inverse-grid-line"/>`)}return e.xMin<=0&&e.xMax>=0&&t.push(`<line x1="${e.x(0)}" y1="${e.top}" x2="${e.x(0)}" y2="${e.bottom}" class="inverse-axis"/>`),e.yMin<=0&&e.yMax>=0&&t.push(`<line x1="${e.left}" y1="${e.y(0)}" x2="${e.right}" y2="${e.y(0)}" class="inverse-axis"/>`),t.join(``)}function E(e,t,n,r,i=220){let a=[];for(let o=0;o<=i;o+=1){let s=t+o/i*(n-t),c=e(s);c>=r.yMin-.2&&c<=r.yMax+.2&&a.push(`${a.length?`L`:`M`}${r.x(s).toFixed(2)} ${r.y(c).toFixed(2)}`)}return a.join(` `)}function D(e){let t=-1.7,n=1.7;for(let r=0;r<50;r+=1){let r=(t+n)/2;r**3+r<e?t=r:n=r}return(t+n)/2}var O={quartic:{formula:String.raw`r(t)=t^4-1`,xMin:-1.55,xMax:1.55,yMin:-2,yMax:5,scanMin:-1,scanMax:4,initial:0,fn:e=>e**4-1,intersections:e=>e<-1?[]:i(e,-1)?[0]:[-((e+1)**.25),(e+1)**.25],verdict:`The full quartic is not one-to-one.`,explanation:`Most allowed heights meet the two symmetric sides.`,oneToOne:!1},restricted:{formula:String.raw`f(x)=x^4+5,\quad 0\le x\le2`,xMin:-.4,xMax:2.4,yMin:3,yMax:22,scanMin:3,scanMax:22,initial:10,fn:e=>e**4+5,curveMin:0,curveMax:2,intersections:e=>e<5||e>21?[]:[(e-5)**.25],verdict:`The restricted quartic is one-to-one.`,explanation:`On 0 ≤ x ≤ 2, the graph only rises, so no height repeats.`,oneToOne:!0},cubic:{formula:String.raw`h(x)=x^3+x`,xMin:-1.7,xMax:1.7,yMin:-7,yMax:7,scanMin:-7,scanMax:7,initial:2,fn:e=>e**3+e,intersections:e=>Math.abs(e)>6.613?[]:[D(e)],verdict:`The increasing cubic is one-to-one.`,explanation:`A continuously rising graph never returns to a previous height.`,oneToOne:!0}},k=`quartic`,A=document.querySelector(`#horizontal-y`);function j(){let e=O[k],t=Number(A.value),r=w({width:640,height:500,padding:24,xMin:e.xMin,xMax:e.xMax,yMin:e.yMin,yMax:e.yMax,equalScale:!0}),i=e.curveMin??e.xMin,a=e.curveMax??e.xMax,o=e.intersections(t).filter(e=>e>=i-.001&&e<=a+.001);document.querySelector(`#horizontal-chart`).innerHTML=`
    ${T(r)}
    <path d="${E(e.fn,i,a,r)}" class="horizontal-curve"/>
    <line x1="${r.left}" y1="${r.y(t)}" x2="${r.right}" y2="${r.y(t)}" class="horizontal-scan-line"/>
    ${o.map(e=>`<circle cx="${r.x(e)}" cy="${r.y(t)}" r="10" class="horizontal-intersection"/>`).join(``)}
    <text x="${r.left+8}" y="${r.y(t)-12}" class="horizontal-scan-label">y = ${b(t,1)}</text>
  `,n(document.querySelector(`#horizontal-equation`),e.formula),document.querySelector(`#horizontal-y-output`).textContent=b(t,1);let s=o.length,c=document.querySelector(`#horizontal-result`);c.className=`horizontal-result ${s>1?`is-collision`:`is-clear`}`,c.innerHTML=`<span>${s} intersection${s===1?``:`s`} at this height</span><strong>${e.verdict}</strong><p>${e.explanation}</p>`}document.querySelectorAll(`[data-horizontal]`).forEach(e=>{e.addEventListener(`click`,()=>{k=e.dataset.horizontal;let t=O[k];A.min=t.scanMin,A.max=t.scanMax,A.step=`0.1`,A.value=t.initial,document.querySelectorAll(`[data-horizontal]`).forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),j()})}),A.addEventListener(`input`,j),j();var M=[[-3,-2],[-2,-.75],[2,-.5],[4,2]],N=document.querySelector(`#reflection-point`),P=!0,F=w({width:620,height:620,padding:48,xMin:-5,xMax:5,yMin:-5,yMax:5});function I(e,t){return`M${t.x(e[0][0])} ${t.y(e[0][1])}C${t.x(e[1][0])} ${t.y(e[1][1])} ${t.x(e[2][0])} ${t.y(e[2][1])} ${t.x(e[3][0])} ${t.y(e[3][1])}`}function L(e,t){let n=1-t,r=[n**3,3*n**2*t,3*n*t**2,t**3];return{x:e.reduce((e,t,n)=>e+t[0]*r[n],0),y:e.reduce((e,t,n)=>e+t[1]*r[n],0)}}function R(){let e=Number(N.value)/100,t=L(M,e),r=M.map(([e,t])=>[t,e]);document.querySelector(`#reflection-chart`).innerHTML=`
    ${T(F)}
    <line x1="${F.x(-5)}" y1="${F.y(-5)}" x2="${F.x(5)}" y2="${F.y(5)}" class="reflection-mirror"/>
    <path d="${I(M,F)}" class="reflection-curve reflection-curve--forward"/>
    <path d="${I(r,F)}" class="reflection-curve reflection-curve--inverse${P?` is-visible`:``}"/>
    <circle cx="${F.x(t.x)}" cy="${F.y(t.y)}" r="10" class="reflection-point reflection-point--forward"/>
    <circle cx="${F.x(t.y)}" cy="${F.y(t.x)}" r="10" class="reflection-point reflection-point--inverse${P?` is-visible`:``}"/>
    <line x1="${F.x(t.x)}" y1="${F.y(t.y)}" x2="${F.x(t.y)}" y2="${F.y(t.x)}" class="reflection-connector${P?` is-visible`:``}"/>
  `,document.querySelector(`#reflection-point-output`).textContent=`${Math.round(e*100)}%`,n(document.querySelector(`#reflection-forward-point`),String.raw`(${b(t.x)},${b(t.y)})`),n(document.querySelector(`#reflection-inverse-point`),String.raw`(${b(t.y)},${b(t.x)})`)}document.querySelector(`#reflection-toggle`).addEventListener(`click`,e=>{P=!P,e.currentTarget.setAttribute(`aria-pressed`,String(P)),e.currentTarget.textContent=P?`Hide inverse graph`:`Show inverse graph`,R()}),N.addEventListener(`input`,R),R();var z=document.querySelector(`#undo-x`);function B(){let n=Number(z.value),r=n**5+n**3+n,a=i(r,3,.001);document.querySelector(`#undo-x-output`).textContent=b(n,1),document.querySelector(`#undo-input-value`).textContent=b(n,1),document.querySelector(`#undo-output-value`).textContent=b(r,2),document.querySelector(`#undo-reverse-input`).textContent=b(r,2),document.querySelector(`#undo-reverse-output`).textContent=b(n,1);let o=document.querySelector(`#undo-target-meter`);o.style.width=`${Math.max(3,100-Math.min(100,Math.abs(r-3)*18))}%`;let s=document.querySelector(`#undo-verdict`);s.className=`undo-verdict ${a?`is-correct`:``}`,s.innerHTML=a?`<strong>Target found.</strong>${t(String.raw`f(1)=3\Longrightarrow f^{-1}(3)=1`)}`:`<strong>Keep searching.</strong><span>The current output is ${b(r,2)}; move it toward 3.</span>`,e(s)}z.addEventListener(`input`,B),B();var V={linear:{formula:String.raw`f(x)=3x-5`,note:`A nonhorizontal linear function is one-to-one on all real numbers.`,steps:[{label:`Write with y`,math:String.raw`y=3x-5`},{label:`Switch x and y`,math:String.raw`x=3y-5`},{label:`Solve for y`,math:String.raw`y=\frac{x+5}{3}`},{label:`Name the inverse`,math:String.raw`f^{-1}(x)=\frac{x+5}{3}`}],check:String.raw`f\!\left(f^{-1}(x)\right)=3\left(\frac{x+5}{3}\right)-5=x`},cube:{formula:String.raw`f(x)=(x-2)^3+1`,note:`A shifted cubic remains one-to-one because it rises through its entire domain.`,steps:[{label:`Write with y`,math:String.raw`y=(x-2)^3+1`},{label:`Switch x and y`,math:String.raw`x=(y-2)^3+1`},{label:`Undo cube, then shift`,math:String.raw`\sqrt[3]{x-1}=y-2`},{label:`Name the inverse`,math:String.raw`f^{-1}(x)=\sqrt[3]{x-1}+2`}],check:String.raw`f^{-1}(f(x))=\sqrt[3]{(x-2)^3}+2=x`},rational:{formula:String.raw`f(x)=\frac{2x+3}{x-4}`,note:`Track excluded values: the original omits x = 4, while the inverse omits x = 2.`,steps:[{label:`Write with y`,math:String.raw`y=\frac{2x+3}{x-4}`},{label:`Switch x and y`,math:String.raw`x=\frac{2y+3}{y-4}`},{label:`Collect the y terms`,math:String.raw`xy-4x=2y+3\Longrightarrow y(x-2)=4x+3`},{label:`Name the inverse`,math:String.raw`f^{-1}(x)=\frac{4x+3}{x-2},\quad x\ne2`}],check:String.raw`D_{f^{-1}}=R_f=(-\infty,2)\cup(2,\infty)`}},H=`linear`,U=1;function W(){let r=V[H];n(document.querySelector(`#inverse-step-function`),r.formula),document.querySelector(`#inverse-step-note`).textContent=r.note,document.querySelector(`#inverse-steps`).innerHTML=r.steps.map((e,n)=>`
    <li class="${n<U?`is-visible`:``}">
      <span>${n+1}</span>
      <div><small>${n<U?e.label:`Hidden step`}</small><strong>${n<U?t(e.math):`?`}</strong></div>
    </li>
  `).join(``),e(document.querySelector(`#inverse-steps`));let i=U===r.steps.length,a=document.querySelector(`#inverse-step-next`);a.disabled=i,a.textContent=i?`Inverse complete`:`Reveal next step`;let o=document.querySelector(`#inverse-step-check`);i?n(o,r.check):o.textContent=`Complete the reversal to reveal a verification.`}document.querySelectorAll(`[data-inverse-case]`).forEach(e=>{e.addEventListener(`click`,()=>{H=e.dataset.inverseCase,U=1,document.querySelectorAll(`[data-inverse-case]`).forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),W()})}),document.querySelector(`#inverse-step-next`).addEventListener(`click`,()=>{U=Math.min(V[H].steps.length,U+1),W()}),document.querySelector(`#inverse-step-reset`).addEventListener(`click`,()=>{U=1,W()}),W(),document.querySelector(`#check-one-to-one`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-quartic-full`).value===`correct`&&document.querySelector(`#check-quartic-restricted`).value===`correct`;l(document.querySelector(`#feedback-one-to-one`),e,e?`Correct. The unrestricted quartic repeats heights, while restricting to ${t(String.raw`0\le x\le2`)} keeps only its increasing side.`:`Use the horizontal-line test. The full quartic has two symmetric sides; the restricted graph has only the right side.`)}),document.querySelector(`#check-inverse-values`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#check-inverse-value`).value)===4&&document.querySelector(`#check-inverse-composition`).value===`correct`;l(document.querySelector(`#feedback-inverse-values`),e,e?`Correct. ${t(String.raw`f(4)=17`)} reverses to ${t(String.raw`f^{-1}(17)=4`)}, and inverse composition returns its input.`:`Reverse the known input-output pair. A function composed with its inverse returns the entire starting expression.`)}),document.querySelector(`#check-inverse-point`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#check-inverse-point-x`).value)===-3&&Number(document.querySelector(`#check-inverse-point-y`).value)===2;l(document.querySelector(`#feedback-inverse-point`),e,e?`Correct. Reflection across ${t(String.raw`y=x`)} switches ${t(String.raw`(2,-3)`)} to ${t(String.raw`(-3,2)`)}`:`Switch the coordinate positions: the old y-value becomes the new x-value.`)}),document.querySelector(`#check-inverse-rule-button`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-inverse-rule`).value===`correct`;l(document.querySelector(`#feedback-inverse-rule`),e,e?`Correct. Switching variables in ${t(String.raw`y=3x-5`)} and solving gives ${t(String.raw`f^{-1}(x)=\frac{x+5}{3}`)}.`:`Switch x and y, then undo subtraction by adding 5 before dividing by 3.`)}),o();