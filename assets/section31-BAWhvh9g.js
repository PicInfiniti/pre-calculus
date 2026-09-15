import"./magnifier-B0Wyiml3.js";import{a as e,i as t,o as n,r,s as i}from"./shared-DVcn0svv.js";var a=document.querySelector(`#app`),o=(e,t=!1)=>`<span class="native-math${t?` native-math--display`:``}">${e}</span>`;a.innerHTML=`
  ${n(`3.1`)}
  <main>
    <section class="lesson-hero lesson-hero--quadratics">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 3.1</span> Quadratic functions and models</p>
        <h1>Find the turn.<br><em>Read the whole curve.</em></h1>
        <p class="lesson-hero__lede">
          A quadratic rises or falls, changes direction exactly once, and carries its most important
          information at the vertex. Learn to move between its equation, graph, and meaning.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#shape-lab">Open the drafting studio</a>
          <span>About 50 minutes · interactive</span>
        </div>
      </div>
      <div class="quadratic-hero-art" aria-hidden="true" data-reveal>
        <svg viewBox="0 0 620 500">
          <defs>
            <pattern id="quadratic-hero-grid" width="38" height="38" patternUnits="userSpaceOnUse">
              <path d="M38 0H0V38" fill="none" stroke="currentColor" stroke-width="1" />
            </pattern>
            <linearGradient id="quadratic-hero-curve" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stop-color="#ff6b48" />
              <stop offset="1" stop-color="#ffd166" />
            </linearGradient>
          </defs>
          <rect x="38" y="35" width="544" height="408" rx="20" class="quadratic-hero-art__paper" />
          <rect x="58" y="55" width="504" height="368" fill="url(#quadratic-hero-grid)" class="quadratic-hero-art__grid" />
          <path d="M310 62V420M60 330H560" class="quadratic-hero-art__axis" />
          <path id="quadratic-hero-path" d="M95 92Q310 688 525 92" class="quadratic-hero-art__curve" />
          <line x1="310" y1="80" x2="310" y2="420" class="quadratic-hero-art__symmetry" />
          <circle id="quadratic-hero-point" cx="310" cy="390" r="10" class="quadratic-hero-art__point" />
          <circle cx="310" cy="390" r="5" class="quadratic-hero-art__vertex" />
        </svg>
        <span class="quadratic-hero-art__label quadratic-hero-art__label--vertex">vertex</span>
        <span class="quadratic-hero-art__label quadratic-hero-art__label--axis">axis of symmetry</span>
        <div class="quadratic-hero-art__formula">${o(`<var>f</var>(<var>x</var>) = <var>a</var>(<var>x</var> − <var>h</var>)<sup>2</sup> + <var>k</var>`)}</div>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Read a parabola from either form</li>
        <li><span>02</span>Complete the square</li>
        <li><span>03</span>Find intercepts, domain, and range</li>
        <li><span>04</span>Build and optimize quadratic models</li>
      </ol>
    </section>

    <section class="lesson-section" id="shape-lab">
      <div class="quadratic-section-lead">
        <div class="lesson-section__intro" data-reveal>
          <p class="lesson-kicker"><span>01</span> Read the architecture</p>
          <h2>Three numbers<br>shape the parabola.</h2>
          <p>Vertex form exposes the turning point immediately. The sign and size of ${o(`<var>a</var>`)} control direction and width; ${o(`<var>h</var>`)} and ${o(`<var>k</var>`)} place the vertex.</p>
        </div>
        <div class="quadratic-definition" data-reveal>
          <span>Quadratic function</span>
          <strong>${o(`<var>f</var>(<var>x</var>) = <var>ax</var><sup>2</sup> + <var>bx</var> + <var>c</var>`,!0)}</strong>
          <p>${o(`<var>a</var> ≠ 0`)} ensures the graph bends. Every quadratic has domain ${o(`(−∞, ∞)`)} and exactly one vertex.</p>
        </div>
      </div>

      <div class="quadratic-shape-lab" data-reveal>
        <div class="quadratic-shape-lab__stage">
          <svg id="shape-chart" viewBox="0 0 660 540" role="img" aria-label="An adjustable parabola on a coordinate plane"></svg>
        </div>
        <div class="quadratic-shape-lab__controls">
          <p class="tool-label">Vertex-form drafting table</p>
          <div class="shape-equation" id="shape-equation"></div>
          <label for="shape-a"><span>Opening and width · ${o(`<var>a</var>`)}</span><output id="shape-a-output"></output></label>
          <input id="shape-a" type="range" min="-3" max="3" step="0.1" value="1" />
          <label for="shape-h"><span>Horizontal position · ${o(`<var>h</var>`)}</span><output id="shape-h-output"></output></label>
          <input id="shape-h" type="range" min="-4" max="4" step="0.1" value="-1" />
          <label for="shape-k"><span>Vertical position · ${o(`<var>k</var>`)}</span><output id="shape-k-output"></output></label>
          <input id="shape-k" type="range" min="-4" max="4" step="0.1" value="2" />
          <div class="shape-presets" aria-label="Parabola presets">
            <button type="button" data-shape-preset="minimum">Minimum</button>
            <button type="button" data-shape-preset="maximum">Maximum</button>
            <button type="button" data-shape-preset="wide">Wide</button>
          </div>
          <dl class="shape-readout">
            <div><dt>Vertex</dt><dd id="shape-vertex"></dd></div>
            <div><dt>Axis</dt><dd id="shape-axis"></dd></div>
            <div><dt>Extremum</dt><dd id="shape-extremum"></dd></div>
            <div><dt>Range</dt><dd id="shape-range"></dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="complete-square">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Reveal the vertex</p>
        <h2>Complete the square.<br>Expose the turn.</h2>
        <p>General form is useful for the vertical intercept. Vertex form is useful for the graph. Completing the square connects them without changing the function.</p>
      </div>

      <div class="square-lab" data-reveal>
        <div class="square-lab__menu">
          <p class="tool-label">Choose an equation</p>
          <div class="square-options" role="tablist" aria-label="Completing-the-square examples">
            <button class="is-active" type="button" data-square-case="monic" role="tab" aria-selected="true">Leading 1</button>
            <button type="button" data-square-case="negative" role="tab" aria-selected="false">Negative leading term</button>
            <button type="button" data-square-case="scaled" role="tab" aria-selected="false">Leading 5</button>
          </div>
          <div class="square-source"><span>Start in general form</span><strong id="square-source"></strong></div>
          <div class="square-recipe">
            <span>Core move</span>
            <p>Factor the leading coefficient from the ${o(`<var>x</var>`)}-terms. Then add and subtract ${o(`(<var>b</var>/2)<sup>2</sup>`)} inside the group.</p>
          </div>
        </div>
        <div class="square-lab__workspace">
          <ol class="square-steps" id="square-steps" aria-live="polite"></ol>
          <div class="square-actions">
            <button id="square-next" type="button">Reveal next step</button>
            <button id="square-reset" type="button">Reset</button>
          </div>
          <div class="square-result" id="square-result"></div>
        </div>
      </div>

      <aside class="vertex-shortcut" data-reveal>
        <div><span>Vertex shortcut</span><strong>${o(`<var>h</var> = −<span class="native-frac"><span><var>b</var></span><span>2<var>a</var></span></span>`)}</strong></div>
        <p>Once ${o(`<var>h</var>`)} is known, substitute it into the original rule: ${o(`<var>k</var> = <var>f</var>(<var>h</var>)`)}. This locates the same vertex as completing the square.</p>
      </aside>
    </section>

    <section class="lesson-section lesson-section--soft" id="graph-passport">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Build the graph passport</p>
        <h2>Five facts are enough<br>to sketch with confidence.</h2>
        <p>Use the vertex, axis of symmetry, opening, vertical intercept, and real zeros. Then state the domain and range from the graph’s behavior.</p>
      </div>

      <div class="passport-lab" data-reveal>
        <div class="passport-lab__stage">
          <svg id="passport-chart" viewBox="0 0 660 540" role="img" aria-label="A quadratic graph with its vertex and intercepts marked"></svg>
        </div>
        <div class="passport-lab__controls">
          <p class="tool-label">Graph passport</p>
          <div class="passport-options" role="tablist" aria-label="Quadratics to inspect">
            <button class="is-active" type="button" data-passport="first" role="tab" aria-selected="true">${o(`<var>x</var><sup>2</sup> + 8<var>x</var>`)}</button>
            <button type="button" data-passport="second" role="tab" aria-selected="false">${o(`−3<var>x</var><sup>2</sup> + 6<var>x</var> − 2`)}</button>
            <button type="button" data-passport="third" role="tab" aria-selected="false">${o(`5<var>x</var><sup>2</sup> + 30<var>x</var> + 4`)}</button>
          </div>
          <div class="passport-equation" id="passport-equation"></div>
          <dl class="passport-facts" id="passport-facts"></dl>
          <p class="passport-note" id="passport-note"></p>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="fit-parabola">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Fit the missing coefficient</p>
        <h2>Vertex plus one point<br>determines the parabola.</h2>
        <p>Place the known vertex into vertex form. Then substitute the second point and solve the one remaining equation for ${o(`<var>a</var>`)}.</p>
      </div>

      <div class="fit-lab" data-reveal>
        <div class="fit-lab__controls">
          <p class="tool-label">Parabola fitter</p>
          <div class="fit-vertex"><span>Fixed vertex</span><strong>${o(`(−1, 5)`)}</strong></div>
          <label for="fit-x"><span>Point’s ${o(`<var>x</var>`)}-coordinate</span><output id="fit-x-output">−3</output></label>
          <input id="fit-x" type="range" min="-5" max="3" step="0.1" value="-3" />
          <label for="fit-y"><span>Point’s ${o(`<var>y</var>`)}-coordinate</span><output id="fit-y-output">−7</output></label>
          <input id="fit-y" type="range" min="-12" max="14" step="0.1" value="-7" />
          <div class="fit-derivation" id="fit-derivation" aria-live="polite"></div>
          <p class="fit-warning" id="fit-warning"></p>
        </div>
        <div class="fit-lab__stage">
          <svg id="fit-chart" viewBox="0 0 660 540" role="img" aria-label="A parabola fitted through a vertex and a second point"></svg>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="models">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>05</span> Optimize the model</p>
        <h2>The vertex answers<br>“how much?” and “when?”</h2>
        <p>When a model opens downward, its vertex is the maximum. Interpret both coordinates: the input that creates the best outcome and the value of that outcome.</p>
      </div>

      <div class="model-tabs" role="tablist" aria-label="Quadratic models" data-reveal>
        <button class="is-active" type="button" data-model="profit" role="tab" aria-selected="true">Daily profit</button>
        <button type="button" data-model="launch" role="tab" aria-selected="false">Vertical launch</button>
      </div>
      <div class="model-lab" data-reveal>
        <div class="model-lab__stage">
          <svg id="model-chart" viewBox="0 0 720 500" role="img" aria-label="A quadratic model graph with a movable point"></svg>
        </div>
        <div class="model-lab__controls">
          <p class="tool-label" id="model-label"></p>
          <div class="model-equation" id="model-equation"></div>
          <p id="model-copy"></p>
          <label for="model-input"><span id="model-input-label"></span><output id="model-input-output"></output></label>
          <input id="model-input" type="range" />
          <div class="model-current" id="model-current"></div>
          <div class="model-maximum" id="model-maximum"></div>
        </div>
      </div>
    </section>

    <section class="lesson-section readiness readiness--quadratics" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>06</span> Final readiness</p>
        <h2>Can you find<br>the turning point?</h2>
        <p>Check the full workflow: rewrite, read, construct, and optimize.</p>
      </div>
      <div class="quadratic-check-grid">
        <article class="quadratic-check" data-reveal>
          <span>Rewrite</span>
          <h3>Choose the vertex form of ${o(`<var>f</var>(<var>x</var>) = <var>x</var><sup>2</sup> + 8<var>x</var>`)}.</h3>
          <label>Vertex form
            <select id="check-vertex-form"><option value="">Choose…</option><option value="a">(<var>x</var> + 4)<sup>2</sup> + 16</option><option value="correct">(<var>x</var> + 4)<sup>2</sup> − 16</option><option value="b">(<var>x</var> − 4)<sup>2</sup> − 16</option></select>
          </label>
          <button id="check-vertex-form-button" type="button">Check form</button>
          <p class="answer-feedback" id="feedback-vertex-form" aria-live="polite"></p>
        </article>
        <article class="quadratic-check" data-reveal>
          <span>Read the graph</span>
          <h3>For ${o(`<var>f</var>(<var>x</var>) = −3<var>x</var><sup>2</sup> + 6<var>x</var> − 2`)}, enter the vertex and extreme value.</h3>
          <div class="quadratic-coordinate-answer"><label>${o(`<var>h</var>`)} <input id="check-vertex-h" type="number" /></label><label>${o(`<var>k</var>`)} <input id="check-vertex-k" type="number" /></label></div>
          <label>Extreme type <select id="check-extreme"><option value="">Choose…</option><option value="correct">Maximum</option><option value="a">Minimum</option></select></label>
          <button id="check-graph-button" type="button">Check graph facts</button>
          <p class="answer-feedback" id="feedback-graph" aria-live="polite"></p>
        </article>
        <article class="quadratic-check" data-reveal>
          <span>Construct</span>
          <h3>A parabola has vertex ${o(`(−1, 5)`)} and passes through ${o(`(−3, −7)`)}. Find ${o(`<var>a</var>`)}.</h3>
          <label>${o(`<var>a</var> =`)} <input id="check-fit-a" type="number" step="any" /></label>
          <button id="check-fit-button" type="button">Check coefficient</button>
          <p class="answer-feedback" id="feedback-fit" aria-live="polite"></p>
        </article>
        <article class="quadratic-check" data-reveal>
          <span>Optimize</span>
          <h3>For ${o(`<var>P</var>(<var>x</var>) = −0.001<var>x</var><sup>2</sup> + 3<var>x</var> − 1800`)}, find the maximizing input and profit.</h3>
          <div class="quadratic-coordinate-answer"><label>Cans <input id="check-profit-x" type="number" /></label><label>Profit $ <input id="check-profit-y" type="number" /></label></div>
          <button id="check-profit-button" type="button">Check maximum</button>
          <p class="answer-feedback" id="feedback-profit" aria-live="polite"></p>
        </article>
      </div>
      <aside class="ready-banner ready-banner--quadratics" data-reveal>
        <span>You are quadratic-ready when</span>
        <p>You can locate the vertex from either form, sketch with intercepts and symmetry, fit a rule to given data, and interpret a model’s maximum or minimum.</p>
        <a href="#shape-lab">Draft another parabola <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${e({previous:{href:`pages/sections/2-8.html`,label:`Section 2.8 · Inverse functions`},next:{href:`pages/sections/3-2.html`,label:`Section 3.2 · Polynomial functions`}})}
`;function s(e,t=2){if(!Number.isFinite(e))return`undefined`;if(Math.abs(e)<1e-10)return`0`;let n=Number(e.toFixed(t));return String(n).replace(`-`,`−`)}function c(e,t,n){return`<var>f</var>(<var>x</var>) = ${e===1?``:e===-1?`−`:s(e)}(${t===0?`<var>x</var>`:`<var>x</var> ${t>0?`−`:`+`} ${s(Math.abs(t))}`})<sup>2</sup>${n===0?``:` ${n>0?`+`:`−`} ${s(Math.abs(n))}`}`}function l({width:e,height:n,padding:r,xMin:i,xMax:a,yMin:o,yMax:s,xStep:c=1,yStep:l=1}){let u=(e,n,r)=>t(e/n,Math.round(e/n))?e+r*n*.5:e,d=u(i,c,-1),f=u(a,c,1),p=u(o,l,-1),m=u(s,l,1),h=(f-d)/c,g=(m-p)/l,_=Math.min((e-r*2)/h,(n-r*2)/g),v=h*_,y=g*_,b=(e-v)/2,x=(n-y)/2,S=b+v,C=x+y;return{x:e=>b+(e-d)/c*_,y:e=>C-(e-p)/l*_,width:e,height:n,padding:r,plotLeft:b,plotTop:x,plotRight:S,plotBottom:C,plotWidth:v,plotHeight:y,gridSize:_,xStep:c,yStep:l,xMin:d,xMax:f,yMin:p,yMax:m}}function u(e,{xStep:n=e.xStep,yStep:r=e.yStep,xLabel:i=`x`,yLabel:a=`y`,clipId:o}={}){let c=[],l=[],u=[],d=Math.ceil(e.xMin/n)*n,f=Math.ceil(e.yMin/r)*r;for(let r=d;r<=e.xMax+1e-8;r+=n){let i=Math.abs(r)<1e-8;(!(t(r,e.xMin)||t(r,e.xMax))||i)&&c.push(`<line x1="${e.x(r)}" y1="${e.plotTop}" x2="${e.x(r)}" y2="${e.plotBottom}" class="quadratic-grid${i?` quadratic-grid--axis`:``}"/>`),!i&&Math.abs(r/n)%2==0&&u.push(`<text x="${e.x(r)}" y="${e.y(0)+20}" class="quadratic-grid-label" text-anchor="middle">${s(r)}</text>`)}for(let n=f;n<=e.yMax+1e-8;n+=r){let i=Math.abs(n)<1e-8;(!(t(n,e.yMin)||t(n,e.yMax))||i)&&l.push(`<line x1="${e.plotLeft}" y1="${e.y(n)}" x2="${e.plotRight}" y2="${e.y(n)}" class="quadratic-grid${i?` quadratic-grid--axis`:``}"/>`),!i&&Math.abs(n/r)%2==0&&u.push(`<text x="${e.x(0)-10}" y="${e.y(n)+4}" class="quadratic-grid-label" text-anchor="end">${s(n)}</text>`)}return u.push(`<text x="${e.plotRight+10}" y="${e.y(0)+5}" class="quadratic-axis-label">${i}</text>`),u.push(`<text x="${e.x(0)}" y="${e.plotTop-12}" class="quadratic-axis-label" text-anchor="middle">${a}</text>`),`${o?`<defs><clipPath id="${o}"><rect x="${e.plotLeft-18}" y="${e.plotTop-18}" width="${e.plotWidth+36}" height="${e.plotHeight+36}"/></clipPath></defs>`:``}<rect x="${e.plotLeft}" y="${e.plotTop}" width="${e.plotWidth}" height="${e.plotHeight}" class="quadratic-plot-bg"/>${c.join(``)}${l.join(``)}${u.join(``)}`}function d(e,t,n=30){e.setAttribute(`viewBox`,`${t.plotLeft-n} ${t.plotTop-n} ${t.plotWidth+n*2} ${t.plotHeight+n*2}`)}function f(e,t,n=240,r=e.xMin,i=e.xMax){let a=``,o=!1,s=10/e.gridSize*e.yStep;for(let c=0;c<=n;c+=1){let l=r+(i-r)*c/n,u=t(l);u>=e.yMin-s&&u<=e.yMax+s?(a+=`${o?`L`:`M`}${e.x(l).toFixed(2)} ${e.y(u).toFixed(2)}`,o=!0):o=!1}return a}var p=document.querySelector(`#quadratic-hero-path`),m=document.querySelector(`#quadratic-hero-point`),h=window.matchMedia(`(prefers-reduced-motion: reduce)`),g=p.getTotalLength(),_=0,v=0;function y(e){let t=.5+Math.sin((e-v)/9e3*Math.PI*2)*.46,n=p.getPointAtLength(g*t);m.setAttribute(`cx`,n.x),m.setAttribute(`cy`,n.y),_=requestAnimationFrame(y)}function b(){cancelAnimationFrame(_);let e=p.getPointAtLength(g/2);m.setAttribute(`cx`,e.x),m.setAttribute(`cy`,e.y),!h.matches&&(v=performance.now(),_=requestAnimationFrame(y))}h.addEventListener(`change`,b),b();var x={a:document.querySelector(`#shape-a`),h:document.querySelector(`#shape-h`),k:document.querySelector(`#shape-k`)};function S(){let e=Number(x.a.value);Math.abs(e)<.01&&(e=e<0?-.25:.25,x.a.value=String(e));let t=Number(x.h.value),n=Number(x.k.value),r=l({width:660,height:540,padding:48,xMin:-7,xMax:7,yMin:-7,yMax:7}),i=r=>e*(r-t)**2+n,a=document.querySelector(`#shape-chart`);d(a,r,24),a.innerHTML=`
    ${u(r,{clipId:`shape-plot-clip`})}
    <line x1="${r.x(t)}" y1="${r.plotTop}" x2="${r.x(t)}" y2="${r.plotBottom}" class="quadratic-symmetry"/>
    <path d="${f(r,i)}" class="quadratic-curve" clip-path="url(#shape-plot-clip)"/>
    <circle cx="${r.x(t)}" cy="${r.y(n)}" r="6" class="quadratic-vertex quadratic-vertex--compact"/>
    <text x="${r.x(t)+14}" y="${r.y(n)-14}" class="quadratic-point-label">(${s(t)}, ${s(n)})</text>
  `,document.querySelector(`#shape-equation`).innerHTML=o(c(e,t,n),!0),document.querySelector(`#shape-a-output`).textContent=s(e),document.querySelector(`#shape-h-output`).textContent=s(t),document.querySelector(`#shape-k-output`).textContent=s(n),document.querySelector(`#shape-vertex`).innerHTML=o(`(${s(t)}, ${s(n)})`),document.querySelector(`#shape-axis`).innerHTML=o(`<var>x</var> = ${s(t)}`),document.querySelector(`#shape-extremum`).textContent=`${e>0?`minimum`:`maximum`} ${s(n)}`,document.querySelector(`#shape-range`).innerHTML=o(e>0?`[${s(n)}, ∞)`:`(−∞, ${s(n)}]`)}Object.values(x).forEach(e=>e.addEventListener(`input`,S));var C={minimum:[1,-1,2],maximum:[-1,2,3],wide:[.3,-2,-1]};document.querySelectorAll(`[data-shape-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{let[t,n,r]=C[e.dataset.shapePreset];x.a.value=String(t),x.h.value=String(n),x.k.value=String(r),S()})}),S();var w={monic:{source:`<var>f</var>(<var>x</var>) = <var>x</var><sup>2</sup> + 8<var>x</var>`,steps:[[`Make room for the square`,`<var>f</var>(<var>x</var>) = (<var>x</var><sup>2</sup> + 8<var>x</var> + 16) − 16`],[`Factor the perfect square`,`<var>f</var>(<var>x</var>) = (<var>x</var> + 4)<sup>2</sup> − 16`],[`Read the graph`,`vertex (−4, −16) · minimum −16 · axis <var>x</var> = −4`]],result:`The added 16 and subtracted 16 cancel, so the function never changed.`},negative:{source:`<var>f</var>(<var>x</var>) = −3<var>x</var><sup>2</sup> + 6<var>x</var> − 2`,steps:[[`Factor from the x-terms`,`<var>f</var>(<var>x</var>) = −3(<var>x</var><sup>2</sup> − 2<var>x</var>) − 2`],[`Complete inside the group`,`<var>f</var>(<var>x</var>) = −3[(<var>x</var> − 1)<sup>2</sup> − 1] − 2`],[`Distribute and simplify`,`<var>f</var>(<var>x</var>) = −3(<var>x</var> − 1)<sup>2</sup> + 1`],[`Read the graph`,`vertex (1, 1) · maximum 1 · axis <var>x</var> = 1`]],result:`The negative multiplier flips the graph downward and also multiplies the correction term.`},scaled:{source:`<var>f</var>(<var>x</var>) = 5<var>x</var><sup>2</sup> + 30<var>x</var> + 4`,steps:[[`Factor from the x-terms`,`<var>f</var>(<var>x</var>) = 5(<var>x</var><sup>2</sup> + 6<var>x</var>) + 4`],[`Complete inside the group`,`<var>f</var>(<var>x</var>) = 5[(<var>x</var> + 3)<sup>2</sup> − 9] + 4`],[`Distribute and simplify`,`<var>f</var>(<var>x</var>) = 5(<var>x</var> + 3)<sup>2</sup> − 41`],[`Read the graph`,`vertex (−3, −41) · minimum −41 · axis <var>x</var> = −3`]],result:`Because 5 was factored out, the inside correction contributes 5(−9) = −45.`}},T=`monic`,E=1;function D(){let e=w[T];document.querySelector(`#square-source`).innerHTML=o(e.source),document.querySelector(`#square-steps`).innerHTML=e.steps.map(([e,t],n)=>`
    <li class="${n<E?`is-visible`:``}">
      <span>${n+1}</span>
      <div><small>${n<E?e:`Hidden step`}</small><strong>${n<E?o(t):`?`}</strong></div>
    </li>
  `).join(``);let t=E===e.steps.length,n=document.querySelector(`#square-next`);n.disabled=t,n.textContent=t?`Vertex revealed`:`Reveal next step`,document.querySelector(`#square-result`).textContent=t?e.result:`Keep the equation balanced at every step.`}document.querySelectorAll(`[data-square-case]`).forEach(e=>{e.addEventListener(`click`,()=>{T=e.dataset.squareCase,E=1,document.querySelectorAll(`[data-square-case]`).forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),D()})}),document.querySelector(`#square-next`).addEventListener(`click`,()=>{E=Math.min(w[T].steps.length,E+1),D()}),document.querySelector(`#square-reset`).addEventListener(`click`,()=>{E=1,D()}),D();var O={first:{equation:`<var>f</var>(<var>x</var>) = <var>x</var><sup>2</sup> + 8<var>x</var> = (<var>x</var> + 4)<sup>2</sup> − 16`,a:1,h:-4,k:-16,c:0,roots:[-8,0],bounds:{xMin:-10,xMax:3,yMin:-20,yMax:16,yStep:4},note:`The zeros sit equally far from the symmetry line x = −4.`},second:{equation:`<var>f</var>(<var>x</var>) = −3<var>x</var><sup>2</sup> + 6<var>x</var> − 2 = −3(<var>x</var> − 1)<sup>2</sup> + 1`,a:-3,h:1,k:1,c:-2,roots:[1-Math.sqrt(3)/3,1+Math.sqrt(3)/3],bounds:{xMin:-3,xMax:5,yMin:-12,yMax:5,yStep:2},note:`The exact zeros are ${o(`1 − <span class="native-frac"><span><span class="native-radical"><span>3</span></span></span><span>3</span></span> and 1 + <span class="native-frac"><span><span class="native-radical"><span>3</span></span></span><span>3</span></span>`)}`},third:{equation:`<var>f</var>(<var>x</var>) = 5<var>x</var><sup>2</sup> + 30<var>x</var> + 4 = 5(<var>x</var> + 3)<sup>2</sup> − 41`,a:5,h:-3,k:-41,c:4,roots:[(-15-Math.sqrt(205))/5,(-15+Math.sqrt(205))/5],bounds:{xMin:-7,xMax:1,yMin:-48,yMax:12,yStep:10},note:`The exact zeros are ${o(`<span class="native-frac"><span>−15 − <span class="native-radical"><span>205</span></span></span><span>5</span></span> and <span class="native-frac"><span>−15 + <span class="native-radical"><span>205</span></span></span><span>5</span></span>`)}`}},k=`first`;function A(){let e=O[k],{xMin:t,xMax:n,yMin:r,yMax:i,yStep:a}=e.bounds,c=l({width:660,height:540,padding:52,xMin:t,xMax:n,yMin:r,yMax:i,xStep:1,yStep:a}),p=t=>e.a*(t-e.h)**2+e.k,m=document.querySelector(`#passport-chart`);d(m,c,24),m.innerHTML=`
    ${u(c,{xStep:1,yStep:a,clipId:`passport-plot-clip`})}
    <line x1="${c.x(e.h)}" y1="${c.plotTop}" x2="${c.x(e.h)}" y2="${c.plotBottom}" class="quadratic-symmetry"/>
    <path d="${f(c,p)}" class="quadratic-curve" clip-path="url(#passport-plot-clip)"/>
    <circle cx="${c.x(e.h)}" cy="${c.y(e.k)}" r="9" class="quadratic-vertex"/>
    <circle cx="${c.x(0)}" cy="${c.y(e.c)}" r="7" class="quadratic-intercept quadratic-intercept--y"/>
    ${e.roots.map(e=>`<circle cx="${c.x(e)}" cy="${c.y(0)}" r="7" class="quadratic-intercept"/>`).join(``)}
  `,document.querySelector(`#passport-equation`).innerHTML=o(e.equation,!0),document.querySelector(`#passport-facts`).innerHTML=`
    <div><dt>Vertex</dt><dd>${o(`(${s(e.h)}, ${s(e.k)})`)}</dd></div>
    <div><dt>Axis</dt><dd>${o(`<var>x</var> = ${s(e.h)}`)}</dd></div>
    <div><dt>Opening</dt><dd>${e.a>0?`upward`:`downward`}</dd></div>
    <div><dt>${o(`<var>y</var>`)}-intercept</dt><dd>${o(`(0, ${s(e.c)})`)}</dd></div>
    <div><dt>${o(`<var>x</var>`)}-intercepts</dt><dd>${e.roots.map(e=>s(e,3)).join(`, `)}</dd></div>
    <div><dt>Domain</dt><dd>${o(`(−∞, ∞)`)}</dd></div>
    <div><dt>Range</dt><dd>${o(e.a>0?`[${s(e.k)}, ∞)`:`(−∞, ${s(e.k)}]`)}</dd></div>
  `,document.querySelector(`#passport-note`).innerHTML=e.note}document.querySelectorAll(`[data-passport]`).forEach(e=>{e.addEventListener(`click`,()=>{k=e.dataset.passport,document.querySelectorAll(`[data-passport]`).forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),A()})}),A();var j=document.querySelector(`#fit-x`),M=document.querySelector(`#fit-y`);function N(){let e=Number(j.value),n=Number(M.value),r=(e- -1)**2,i=r>0&&!t(n,5),a=r>0?(n-5)/r:NaN;document.querySelector(`#fit-x-output`).textContent=s(e),document.querySelector(`#fit-y-output`).textContent=s(n);let p=document.querySelector(`#fit-derivation`),m=document.querySelector(`#fit-warning`);Number.isFinite(a)?(p.innerHTML=`
      <span>${o(`${s(n)} = <var>a</var>(${s(e)} + 1)<sup>2</sup> + 5`)}</span>
      <span>${o(`<var>a</var> = <span class=\"native-frac\"><span>${s(n)} − 5</span><span>(${s(e)} + 1)<sup>2</sup></span></span> = ${s(a,3)}`)}</span>
      <strong>${o(c(a,-1,5))}</strong>
    `,m.textContent=i?`The vertex and selected point now lie on the same quadratic.`:`When a = 0, the result is a horizontal line—not a quadratic. Move the point above or below the vertex.`):(p.innerHTML=o(`5 = <var>a</var>(−1 + 1)<sup>2</sup> + 5`,!0),m.textContent=`Choose a point with a different x-coordinate. The vertex itself does not determine the width.`);let h=l({width:660,height:540,padding:48,xMin:-6,xMax:4,yMin:-15,yMax:16,xStep:1,yStep:5}),g=e=>a*(e- -1)**2+5,_=document.querySelector(`#fit-chart`);d(_,h,24),_.innerHTML=`
    ${u(h,{xStep:1,yStep:5,clipId:`fit-plot-clip`})}
    <line x1="${h.x(-1)}" y1="${h.plotTop}" x2="${h.x(-1)}" y2="${h.plotBottom}" class="quadratic-symmetry"/>
    ${Number.isFinite(a)?`<path d="${f(h,g)}" class="quadratic-curve${i?``:` is-invalid`}" clip-path="url(#fit-plot-clip)"/>`:``}
    <circle cx="${h.x(-1)}" cy="${h.y(5)}" r="10" class="quadratic-vertex"/>
    <circle cx="${h.x(e)}" cy="${h.y(n)}" r="9" class="quadratic-fit-point"/>
    <text x="${h.x(-1)+12}" y="${h.y(5)-14}" class="quadratic-point-label">vertex</text>
    <text x="${h.x(e)+12}" y="${h.y(n)-14}" class="quadratic-point-label">point</text>
  `}j.addEventListener(`input`,N),M.addEventListener(`input`,N),N();var P={profit:{label:`Profit optimizer`,equation:`<var>P</var>(<var>x</var>) = −0.001<var>x</var><sup>2</sup> + 3<var>x</var> − 1800`,copy:`Move through possible daily sales. The graph peaks where the increasing revenue is exactly balanced by the quadratic cost pressure.`,inputLabel:`Cans sold`,min:0,max:3e3,step:25,initial:800,inputUnit:` cans`,xMin:0,xMax:3e3,yMin:-1800,yMax:600,xStep:500,yStep:300,fn:e=>-.001*e**2+3*e-1800,vertexX:1500,vertexY:450,current:(e,t)=>`At ${s(e,0)} cans, profit is $${s(t,0)}.`,maximum:`Maximum profit: $450 when 1,500 cans are sold.`,xLabel:`cans`,yLabel:`$`},launch:{label:`Vertical-motion model`,equation:`<var>h</var>(<var>t</var>) = −16<var>t</var><sup>2</sup> + 80<var>t</var> + 6`,copy:`An object starts 6 feet above the ground and rises at 80 feet per second. The model ignores air resistance.`,inputLabel:`Time after launch`,min:0,max:5.07,step:.01,initial:1,inputUnit:` s`,xMin:0,xMax:5.1,yMin:0,yMax:120,xStep:1,yStep:20,fn:e=>-16*e**2+80*e+6,vertexX:2.5,vertexY:106,current:(e,t)=>`At ${s(e,1)} seconds, the height is ${s(t,1)} feet.`,maximum:`Maximum height: 106 feet after 2.5 seconds.`,xLabel:`time`,yLabel:`feet`}},F=`profit`,I=document.querySelector(`#model-input`);function L(){let e=P[F];I.min=e.min,I.max=e.max,I.step=e.step,I.value=e.initial,document.querySelector(`#model-label`).textContent=e.label,document.querySelector(`#model-equation`).innerHTML=o(e.equation,!0),document.querySelector(`#model-copy`).textContent=e.copy,document.querySelector(`#model-input-label`).textContent=e.inputLabel,document.querySelector(`#model-maximum`).textContent=e.maximum,R()}function R(){let e=P[F],t=Number(I.value),n=e.fn(t),r=l({width:720,height:500,padding:58,xMin:e.xMin,xMax:e.xMax,yMin:e.yMin,yMax:e.yMax,xStep:e.xStep,yStep:e.yStep}),i=document.querySelector(`#model-chart`);d(i,r),i.innerHTML=`
    ${u(r,{xStep:e.xStep,yStep:e.yStep,xLabel:e.xLabel,yLabel:e.yLabel,clipId:`model-plot-clip`})}
    <path d="${f(r,e.fn,240,e.xMin,e.xMax)}" class="quadratic-model-curve" clip-path="url(#model-plot-clip)"/>
    <line x1="${r.x(e.vertexX)}" y1="${r.y(e.vertexY)}" x2="${r.x(e.vertexX)}" y2="${r.y(e.yMin)}" class="quadratic-model-guide"/>
    <circle cx="${r.x(e.vertexX)}" cy="${r.y(e.vertexY)}" r="10" class="quadratic-model-maximum"/>
    <circle cx="${r.x(t)}" cy="${r.y(n)}" r="9" class="quadratic-model-point"/>
  `,document.querySelector(`#model-input-output`).textContent=`${s(t,F===`profit`?0:2)}${e.inputUnit}`,document.querySelector(`#model-current`).textContent=e.current(t,n)}document.querySelectorAll(`[data-model]`).forEach(e=>{e.addEventListener(`click`,()=>{F=e.dataset.model,document.querySelectorAll(`[data-model]`).forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),L()})}),I.addEventListener(`input`,R),L(),document.querySelector(`#check-vertex-form-button`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-vertex-form`).value===`correct`;i(document.querySelector(`#feedback-vertex-form`),e,e?`Correct. Half of 8 is 4, and adding then subtracting 16 gives a vertex at (−4, −16).`:`Half the x-coefficient, square it, and remember to subtract the same amount outside the square.`)}),document.querySelector(`#check-graph-button`).addEventListener(`click`,()=>{let e=t(Number(document.querySelector(`#check-vertex-h`).value),1)&&t(Number(document.querySelector(`#check-vertex-k`).value),1)&&document.querySelector(`#check-extreme`).value===`correct`;i(document.querySelector(`#feedback-graph`),e,e?`Correct. The vertex is (1, 1), and the negative leading coefficient makes 1 the maximum value.`:`Use h = −b/(2a), then evaluate f(h). A negative leading coefficient means the graph opens downward.`)}),document.querySelector(`#check-fit-button`).addEventListener(`click`,()=>{let e=t(Number(document.querySelector(`#check-fit-a`).value),-3);i(document.querySelector(`#feedback-fit`),e,e?`Correct. −7 = a(−3 + 1)² + 5 gives −12 = 4a, so a = −3.`:`Start with y = a(x + 1)² + 5 and substitute the point (−3, −7). Then solve for a.`)}),document.querySelector(`#check-profit-button`).addEventListener(`click`,()=>{let e=t(Number(document.querySelector(`#check-profit-x`).value),1500)&&t(Number(document.querySelector(`#check-profit-y`).value),450);i(document.querySelector(`#feedback-profit`),e,e?`Correct. The vertex is (1,500, 450): selling 1,500 cans produces a maximum daily profit of $450.`:`First compute x = −b/(2a). Then substitute that x-value into P to find the maximum profit.`)}),r();