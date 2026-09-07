import{i as e,n as t,r as n}from"./magnifier-DbmAZ0E0.js";import{a as r,i,o as a,r as o,s}from"./shared-DRKUi25c.js";var c=document.querySelector(`#app`);c.innerHTML=`
  ${a(`2.6`)}
  <main>
    <section class="lesson-hero lesson-hero--transformations">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 2.6</span> Transformations of functions</p>
        <h1>Move the input.<br><em>Move the picture.</em></h1>
        <p class="lesson-hero__lede">
          A few changes inside and outside a function can shift, stretch, compress, or reflect its entire graph.
          Learn to predict the motion before you plot a single point.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#transformation-studio">Transform a graph</a>
          <span>About 45 minutes · interactive</span>
        </div>
      </div>
      <div class="transformation-hero-art" aria-hidden="true" data-reveal>
        <div class="transformation-hero-art__paper"></div>
        <svg viewBox="0 0 620 480">
          <path class="transformation-hero-art__axis" d="M55 248H565M310 55V425" />
          <path class="transformation-hero-art__base" d="M92 334C145 310 174 112 250 177S347 365 405 268S478 105 536 143" />
          <path class="transformation-hero-art__moved" d="M115 279C168 255 197 57 273 122S370 310 428 213S501 50 559 88" />
          <path class="transformation-hero-art__arrow" d="M233 323L277 269M277 269l-5 24M277 269l-24 4" />
        </svg>
        <span class="transformation-hero-art__tag transformation-hero-art__tag--inside">inside → horizontal</span>
        <span class="transformation-hero-art__tag transformation-hero-art__tag--outside">outside → vertical</span>
        <span class="transformation-hero-art__formula">${t(String.raw`g(x)=a f\!\left(b(x-h)\right)+k`)}</span>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Predict shifts, scales, and reflections</li>
        <li><span>02</span>Map points through a transformation</li>
        <li><span>03</span>Recover a formula from a moved graph</li>
        <li><span>04</span>Prove and use even or odd symmetry</li>
      </ol>
    </section>

    <section class="lesson-section" id="transformation-studio">
      <div class="transformation-section-lead">
        <div class="lesson-section__intro" data-reveal>
          <p class="lesson-kicker"><span>01</span> The transformation studio</p>
          <h2>Outside changes outputs.<br>Inside changes inputs.</h2>
          <p>Use <strong>${t(String.raw`g(x)=a f\!\left(b(x-h)\right)+k`)}</strong> as a map. The outside numbers ${t(String.raw`a`)} and ${t(String.raw`k`)} control vertical motion; the inside numbers ${t(String.raw`b`)} and ${t(String.raw`h`)} control horizontal motion.</p>
        </div>
        <div class="formula-anatomy" aria-hidden="true" data-reveal>
          <span class="formula-anatomy__eyebrow">Transformation anatomy</span>
          <div class="formula-anatomy__equation">
            <span>g(x) =</span>
            <b class="is-a">a</b>
            <span>f(</span>
            <b class="is-b">b</b>
            <span>(x −</span>
            <b class="is-h">h</b>
            <span>)) +</span>
            <b class="is-k">k</b>
          </div>
          <div class="formula-anatomy__parameters">
            <span class="is-a"><b>a</b> vertical scale</span>
            <span class="is-b"><b>b</b> horizontal scale</span>
            <span class="is-h"><b>h</b> left / right</span>
            <span class="is-k"><b>k</b> down / up</span>
          </div>
        </div>
      </div>

      <div class="transformation-studio" data-reveal>
        <div class="transformation-stage">
          <svg id="transformation-chart" viewBox="0 0 720 630" role="img" aria-label="Base function and transformed function on a coordinate grid"></svg>
          <div class="transformation-stage__legend" aria-hidden="true"><span><i></i>f(x)</span><span><i></i>g(x)</span></div>
        </div>
        <div class="transformation-controls">
          <p class="tool-label">Four-control graph machine</p>
          <div class="transformation-formula" id="transformation-formula" aria-live="polite"></div>
          <div class="transformation-control-grid">
            <label for="transform-a"><span><strong>a</strong> Vertical scale</span><output id="transform-a-output">1</output><input id="transform-a" type="range" min="-2" max="2" step="0.1" value="1" /></label>
            <label for="transform-b"><span><strong>b</strong> Horizontal scale</span><output id="transform-b-output">1</output><input id="transform-b" type="range" min="-2" max="2" step="0.1" value="1" /></label>
            <label for="transform-h"><span><strong>h</strong> Left / right</span><output id="transform-h-output">0</output><input id="transform-h" type="range" min="-4" max="4" step="0.1" value="0" /></label>
            <label for="transform-k"><span><strong>k</strong> Down / up</span><output id="transform-k-output">0</output><input id="transform-k" type="range" min="-4" max="4" step="0.1" value="0" /></label>
          </div>
          <div class="transformation-readout" aria-live="polite">
            <article><span>Vertical story</span><strong id="vertical-story">No vertical change</strong><p id="vertical-detail">Outputs stay unchanged.</p></article>
            <article><span>Horizontal story</span><strong id="horizontal-story">No horizontal change</strong><p id="horizontal-detail">Inputs stay unchanged.</p></article>
          </div>
          <button class="transformation-reset" id="transformation-reset" type="button">Reset all controls</button>
        </div>
      </div>

      <div class="point-witness" data-reveal>
        <div>
          <p class="tool-label">Follow one point</p>
          <h3>A point carries the whole rule.</h3>
          <p>If <strong>${t(String.raw`(u,f(u))`)}</strong> lies on the original graph, then the transformed point is</p>
          <div class="point-witness__rule">${t(String.raw`(u,f(u))\longmapsto\left(h+\frac{u}{b},\ k+a f(u)\right)`,!0)}</div>
        </div>
        <div class="point-witness__live">
          <label for="witness-u">Choose u <output id="witness-u-output">1</output></label>
          <input id="witness-u" type="range" min="-4" max="4" step="0.1" value="1" />
          <p id="point-witness-result" aria-live="polite"></p>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="rule-map">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Decode the rule</p>
        <h2>Horizontal instructions<br>run backward.</h2>
        <p>To make the inside equal the old input, solve for the new x. That is why f(x + c) moves left and f(kx) divides every x-coordinate by k.</p>
      </div>

      <div class="rule-map" data-reveal>
        <div class="rule-map__choices" role="tablist" aria-label="Transformation rules">
          <button type="button" class="is-active" data-rule="up"><span>${t(String.raw`f(x)+c`)}</span><strong>up c</strong></button>
          <button type="button" data-rule="left"><span>${t(String.raw`f(x+c)`)}</span><strong>left c</strong></button>
          <button type="button" data-rule="vscale"><span>${t(String.raw`k f(x)`)}</span><strong>vertical × k</strong></button>
          <button type="button" data-rule="hscale"><span>${t(String.raw`f(kx)`)}</span><strong>horizontal ÷ k</strong></button>
          <button type="button" data-rule="xreflect"><span>${t(String.raw`-f(x)`)}</span><strong>x-axis reflection</strong></button>
          <button type="button" data-rule="yreflect"><span>${t(String.raw`f(-x)`)}</span><strong>y-axis reflection</strong></button>
        </div>
        <div class="rule-map__display">
          <div class="rule-map__visual">
            <svg id="rule-map-chart" viewBox="0 0 620 537" role="img" aria-label="A draggable point moving according to the selected transformation rule"></svg>
          </div>
          <div class="rule-map__explanation" aria-live="polite">
            <span id="rule-map-label">Outside addition</span>
            <strong id="rule-map-mapping">(x, y) → (x, y + c)</strong>
            <p id="rule-map-copy">The input is untouched. Add c directly to every output.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="formula-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Work backward from the graph</p>
        <h2>Find the landmark.<br>Then read the shape.</h2>
          <p>The target curve below came from ${t(String.raw`f(x)=x^2`)}. Match its vertex, opening direction, and width to reconstruct ${t(String.raw`g(x)=a(x-h)^2+k`)}.</p>
      </div>

      <div class="formula-lab" data-reveal>
        <div class="formula-lab__stage">
          <svg id="formula-chart" viewBox="0 0 680 680" role="img" aria-label="Target parabola and adjustable guess on a coordinate grid"></svg>
          <div class="formula-lab__legend" aria-hidden="true"><span><i></i>target g</span><span><i></i>your formula</span></div>
        </div>
        <div class="formula-lab__controls">
          <p class="tool-label">Formula builder</p>
          <div class="formula-lab__formula" id="formula-guess"></div>
          <label for="formula-a"><span>Opening and width a</span><output id="formula-a-output">1</output><input id="formula-a" type="range" min="-2" max="2" step="0.1" value="1" /></label>
          <label for="formula-h"><span>Vertex x-coordinate h</span><output id="formula-h-output">0</output><input id="formula-h" type="range" min="-4" max="4" step="0.1" value="0" /></label>
          <label for="formula-k"><span>Vertex y-coordinate k</span><output id="formula-k-output">0</output><input id="formula-k" type="range" min="-4" max="4" step="0.1" value="0" /></label>
          <div class="formula-clues">
            <article><span>01</span><p>The vertex reveals <strong>${t(String.raw`(h,k)`)}</strong>.</p></article>
            <article><span>02</span><p>Opening down means <strong>${t(String.raw`a<0`)}</strong>.</p></article>
            <article><span>03</span><p>A wider graph has <strong>${t(String.raw`0<|a|<1`)}</strong>.</p></article>
          </div>
          <button id="formula-check" type="button">Check my formula</button>
          <p class="answer-feedback" id="formula-feedback" aria-live="polite"></p>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="symmetry-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Even and odd functions</p>
        <h2>Mirror across an axis.<br>Turn through the origin.</h2>
        <p>An even function satisfies ${t(String.raw`f(-x)=f(x)`)} and has y-axis symmetry. An odd function satisfies ${t(String.raw`f(-x)=-f(x)`)} and has origin symmetry.</p>
      </div>

      <div class="symmetry-test-strip" data-reveal>
        <article><span>Even test</span><strong>${t(String.raw`f(-x)=f(x)`)}</strong><p>${t(String.raw`(x,y)\Longrightarrow(-x,y)`)}</p></article>
        <article><span>Odd test</span><strong>${t(String.raw`f(-x)=-f(x)`)}</strong><p>${t(String.raw`(x,y)\Longrightarrow(-x,-y)`)}</p></article>
        <article><span>Neither</span><strong>Both tests fail</strong><p>No required mirror partner</p></article>
      </div>

      <div class="symmetry-lab" data-reveal>
        <div class="symmetry-lab__stage">
          <svg id="symmetry-chart" viewBox="0 0 680 540" role="img" aria-label="Graph completed using even or odd symmetry"></svg>
          <button id="symmetry-reveal" type="button" aria-pressed="true">Hide mirrored half</button>
        </div>
        <div class="symmetry-lab__controls">
          <p class="tool-label">Symmetry mirror</p>
          <div class="symmetry-options" role="tablist" aria-label="Functions to test">
            <button type="button" class="is-active" data-symmetry="quartic"><span>${t(String.raw`x^4-4x^2`)}</span><strong>Even candidate</strong></button>
            <button type="button" data-symmetry="reciprocal"><span>${t(String.raw`x+\frac1x`)}</span><strong>Odd candidate</strong></button>
            <button type="button" data-symmetry="rational"><span>${t(String.raw`\frac{x}{1+x^2}`)}</span><strong>Classify it</strong></button>
            <button type="button" data-symmetry="shifted"><span>${t(String.raw`(x-1)^2`)}</span><strong>Neither candidate</strong></button>
          </div>
          <div class="symmetry-proof" aria-live="polite">
            <span id="symmetry-substitution"></span>
            <strong id="symmetry-simplified"></strong>
            <p id="symmetry-verdict">Even · reflect the known half across the y-axis.</p>
          </div>
          <label for="symmetry-x">Track the point at x = <output id="symmetry-x-output">1.5</output></label>
          <input id="symmetry-x" type="range" min="0.2" max="2.3" step="0.1" value="1.5" />
          <div class="symmetry-point-pair" id="symmetry-point-pair">(1.5, −2.44) pairs with (−1.5, −2.44)</div>
        </div>
      </div>
    </section>

    <section class="lesson-section readiness readiness--transformations" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>05</span> Final readiness</p>
        <h2>Can you predict<br>the whole graph?</h2>
        <p>Read inside and outside separately, then use the correct symmetry partner. Each answer should follow from a rule—not from visual guessing.</p>
      </div>
      <div class="transformation-check-grid">
        <article class="transformation-check" data-reveal>
          <span>Point symmetry</span>
          <h3>An even graph contains (−2, −3).</h3>
          <label>Required partner <select id="check-even-point"><option value="">Choose…</option><option value="a">(2, 3)</option><option value="correct">(2, −3)</option><option value="b">(−2, 3)</option></select></label>
          <button id="check-even" type="button">Check point</button>
          <p class="answer-feedback" id="feedback-even" aria-live="polite"></p>
        </article>
        <article class="transformation-check" data-reveal>
          <span>Odd outputs</span>
          <h3>If ${t(String.raw`f(-2)=7`)} and ${t(String.raw`f`)} is odd…</h3>
          <label>f(2) = <input id="check-odd-value" type="number" /></label>
          <button id="check-odd" type="button">Check value</button>
          <p class="answer-feedback" id="feedback-odd" aria-live="polite"></p>
        </article>
        <article class="transformation-check" data-reveal>
          <span>Algebraic test</span>
          <h3>Classify ${t(String.raw`f(x)=\frac{x}{1+x^2}`)}.</h3>
          <label>Symmetry <select id="check-rational"><option value="">Choose…</option><option value="a">Even</option><option value="correct">Odd</option><option value="b">Neither</option></select></label>
          <button id="check-classification" type="button">Check classification</button>
          <p class="answer-feedback" id="feedback-classification" aria-live="polite"></p>
        </article>
        <article class="transformation-check" data-reveal>
          <span>Transformation language</span>
          <h3>Right 3 units, then up 2 units.</h3>
          <label>Formula <select id="check-transform"><option value="">Choose…</option><option value="a">f(x + 3) + 2</option><option value="correct">f(x − 3) + 2</option><option value="b">f(x − 2) + 3</option></select></label>
          <button id="check-transformation" type="button">Check formula</button>
          <p class="answer-feedback" id="feedback-transformation" aria-live="polite"></p>
        </article>
      </div>
      <aside class="ready-banner ready-banner--transformations" data-reveal>
        <span>You are transformation-ready when</span>
        <p>You can separate horizontal from vertical changes, map a landmark, and prove symmetry with f(−x).</p>
        <a href="#transformation-studio">Run the graph machine again <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${r({previous:{href:`pages/sections/2-3.html`,label:`Section 2.3 · Information from graphs`},next:{href:`pages/sections/2-7.html`,label:`Section 2.7 · Combining functions`}})}
`,e(c);function l(e,t=2){let n=Number(e.toFixed(t));if(Math.abs(n)<1e-10)return`0`;let r=String(n);return r.startsWith(`-`)?`−${r.slice(1)}`:r}function u(e){return e.replaceAll(`−`,`-`).replaceAll(`²`,`^2`).replaceAll(`⁴`,`^4`).replaceAll(`→`,String.raw`\longrightarrow`).replaceAll(`≠`,String.raw`\ne`).replaceAll(`·`,String.raw`\cdot`)}function d({width:e,height:t,xMin:n,xMax:r,yMin:i,yMax:a,padding:o=46,equalUnits:s=!0}){let c=e-o*2,l=t-o*2,u=c/(r-n),d=l/(a-i),f=o,p=o;if(s){let o=Math.min(u,d);u=o,d=o,f=(e-(r-n)*o)/2,p=(t-(a-i)*o)/2}return{width:e,height:t,xMin:n,xMax:r,yMin:i,yMax:a,left:f,right:f+(r-n)*u,top:p,bottom:p+(a-i)*d,x:e=>f+(e-n)*u,y:e=>p+(a-e)*d}}function f({width:e,height:t,xMin:n,xMax:r,yMin:i,yMax:a,padding:o}){let s=(e-o*2)/(t-o*2),c=r-n,l=a-i;if(c/l<s){let e=l*s,t=(n+r)/2;return{xMin:t-e/2,xMax:t+e/2,yMin:i,yMax:a}}let u=c/s,d=(i+a)/2;return{xMin:n,xMax:r,yMin:d-u/2,yMax:d+u/2}}function p(e,t=`transform`){let n=[];for(let r=Math.ceil(e.xMin);r<=e.xMax;r+=1)n.push(`<line x1="${e.x(r)}" y1="${e.top}" x2="${e.x(r)}" y2="${e.bottom}" class="${t}-grid-line" />`),r!==0&&r%2==0&&n.push(`<text x="${e.x(r)}" y="${e.y(0)+20}" text-anchor="middle" class="${t}-grid-label">${l(r)}</text>`);for(let r=Math.ceil(e.yMin);r<=e.yMax;r+=1)n.push(`<line x1="${e.left}" y1="${e.y(r)}" x2="${e.right}" y2="${e.y(r)}" class="${t}-grid-line" />`),r!==0&&r%2==0&&n.push(`<text x="${e.x(0)+10}" y="${e.y(r)-7}" class="${t}-grid-label">${l(r)}</text>`);return e.yMin<=0&&e.yMax>=0&&n.push(`<line x1="${e.left}" y1="${e.y(0)}" x2="${e.right}" y2="${e.y(0)}" class="${t}-axis" />`),e.xMin<=0&&e.xMax>=0&&n.push(`<line x1="${e.x(0)}" y1="${e.top}" x2="${e.x(0)}" y2="${e.bottom}" class="${t}-axis" />`),n.join(``)}function m(e,t,n=1){let r=``,i=!1;return e.forEach(e=>{if(!e||!Number.isFinite(e[1])||e[1]<t.yMin-n||e[1]>t.yMax+n){i=!1;return}r+=`${i?`L`:`M`}${t.x(e[0]).toFixed(2)} ${t.y(e[1]).toFixed(2)} `,i=!0}),r.trim()}function h(e,t,n,r=.04){let i=[];for(let a=e;a<=t+r/2;a+=r)i.push([a,n(a)]);return i}function g(e){return .075*(e+3)*e*(e-2)}var _=d({width:720,height:630,xMin:-7,xMax:7,yMin:-6,yMax:6,padding:50}),v=document.querySelector(`#transformation-chart`),y=document.querySelector(`#transform-a`),b=document.querySelector(`#transform-b`),x=document.querySelector(`#transform-h`),S=document.querySelector(`#transform-k`),C=document.querySelector(`#witness-u`);function ee(){return{a:Number(y.value),b:Number(b.value),h:Number(x.value),k:Number(S.value)}}function w(e,t){return e===1?t:e===-1?`−${t}`:`${l(e)}${t}`}function T(e,t){let n=t===0?`x`:`x ${t>0?`−`:`+`} ${Math.abs(t)}`;return e===1?n:e===-1?`−(${n})`:`${l(e)}(${n})`}function E({a:e,b:t,h:n,k:r}){return`g(x) = ${w(e,`f(${T(t,n)})`)}${r===0?``:` ${r>0?`+`:`−`} ${Math.abs(r)}`}`}function D(e,t){let n=[];return e===0&&n.push(`collapse every output to one level`),e<0&&n.push(`reflect across the x-axis`),Math.abs(e)>1&&n.push(`stretch by ${l(Math.abs(e))}`),Math.abs(e)<1&&e!==0&&n.push(`compress by ${l(Math.abs(e))}`),t!==0&&n.push(`shift ${t>0?`up`:`down`} ${Math.abs(t)}`),n}function O(e,t){let n=[];return e===0&&n.push(`freeze the function input at 0`),e<0&&n.push(`reflect across the y-axis`),Math.abs(e)>1&&n.push(`compress by 1/${l(Math.abs(e))}`),Math.abs(e)<1&&e!==0&&n.push(`stretch by ${l(1/Math.abs(e))}`),t!==0&&n.push(`shift ${t>0?`right`:`left`} ${Math.abs(t)}`),n}function k(){let e=ee(),t=h(-6,6,g),r=h(-7,7,t=>e.a*g(e.b*(t-e.h))+e.k,.025),i=Number(C.value),a=g(i),o=e.b!==0,s=o?e.h+i/e.b:null,c=e.k+e.a*a;v.innerHTML=`
    ${p(_)}
    <path d="${m(t,_)}" class="transform-curve transform-curve--base" />
    <path d="${m(r,_)}" class="transform-curve transform-curve--moved" />
    ${o?`<line x1="${_.x(i)}" y1="${_.y(a)}" x2="${_.x(s)}" y2="${_.y(c)}" class="transform-point-link" />`:``}
    <circle cx="${_.x(i)}" cy="${_.y(a)}" r="7" class="transform-point transform-point--base" />
    ${o?`<circle cx="${_.x(s)}" cy="${_.y(c)}" r="8" class="transform-point transform-point--moved" />`:``}
  `,n(document.querySelector(`#transformation-formula`),u(E(e))),document.querySelector(`#transform-a-output`).textContent=l(e.a),document.querySelector(`#transform-b-output`).textContent=l(e.b),document.querySelector(`#transform-h-output`).textContent=l(e.h),document.querySelector(`#transform-k-output`).textContent=l(e.k);let d=D(e.a,e.k),f=O(e.b,e.h);document.querySelector(`#vertical-story`).textContent=d.length?d.join(` · `):`No vertical change`,document.querySelector(`#vertical-detail`).textContent=`y becomes ${l(e.a)}y ${e.k>=0?`+`:`−`} ${Math.abs(e.k)}.`,document.querySelector(`#horizontal-story`).textContent=f.length?f.join(` · `):`No horizontal change`,document.querySelector(`#horizontal-detail`).textContent=o?`x becomes h + u/b = ${l(e.h)} + u/${l(e.b)}.`:`With b = 0, every x sends the same input 0 into f.`,document.querySelector(`#witness-u-output`).textContent=l(i);let y=document.querySelector(`#point-witness-result`);o?n(y,String.raw`(${u(l(i))},${u(l(a))})\longmapsto(${u(l(s))},${u(l(c))})`):y.textContent=`b = 0 freezes the input, so this point map is not one-to-one.`}[y,b,x,S,C].forEach(e=>e.addEventListener(`input`,k)),document.querySelector(`#transformation-reset`).addEventListener(`click`,()=>{y.value=`1`,b.value=`1`,x.value=`0`,S.value=`0`,C.value=`1`,k()}),k();var A=d({width:620,height:537,xMin:-7,xMax:7,yMin:-6,yMax:6,padding:21}),j=document.querySelector(`#rule-map-chart`),M=[2,1],N=`up`,P=!1,te={up:{label:`Outside addition`,mapping:`(x, y) → (x, y + c)`,copy:`The input is untouched. Add c directly to every output.`,apply:([e,t])=>[e,t+2]},left:{label:`Inside addition`,mapping:`(x, y) → (x − c, y)`,copy:`Solve x + c = old input. The new x is c units smaller, so the graph moves left.`,apply:([e,t])=>[e-2,t]},vscale:{label:`Outside multiplication`,mapping:`(x, y) → (x, ky)`,copy:`Keep x. Multiply the height by k; negative k also reflects across the x-axis.`,apply:([e,t])=>[e,3*t]},hscale:{label:`Inside multiplication`,mapping:`(x, y) → (x/k, y)`,copy:`Solve kx = old input. Divide x by k; negative k also reflects across the y-axis.`,apply:([e,t])=>[e/2,t]},xreflect:{label:`Negative outside`,mapping:`(x, y) → (x, −y)`,copy:`Every output changes sign, producing a reflection across the x-axis.`,apply:([e,t])=>[e,-t]},yreflect:{label:`Negative inside`,mapping:`(x, y) → (−x, y)`,copy:`Every input changes sign, producing a reflection across the y-axis.`,apply:([e,t])=>[-e,t]}};function F(e,t,n){return Math.min(n,Math.max(t,e))}function I(e,t,n){let r=e=>Math.round(e*10)/10;return[r(F(t,-3,3)),r(F(n,-3,3))]}function L(e){let t=j.createSVGPoint();t.x=e.clientX,t.y=e.clientY;let n=t.matrixTransform(j.getScreenCTM().inverse()),r=A.xMin+(n.x-A.left)/(A.right-A.left)*(A.xMax-A.xMin),i=A.yMax-(n.y-A.top)/(A.bottom-A.top)*(A.yMax-A.yMin);return I(N,r,i)}function R(e){N=e,M=I(e,...M);let t=te[e],[r,i]=M,[a,o]=t.apply(M);j.innerHTML=`
    ${p(A,`rule`)}
    <line x1="${A.x(r)}" y1="${A.y(i)}" x2="${A.x(a)}" y2="${A.y(o)}" class="rule-motion-line" />
    <circle cx="${A.x(r)}" cy="${A.y(i)}" r="12" class="rule-point rule-point--start" tabindex="0" role="button" aria-label="Old point at ${l(r)}, ${l(i)}. Drag it or use the arrow keys to move it." />
    <circle cx="${A.x(a)}" cy="${A.y(o)}" r="11" class="rule-point rule-point--end" />
    <text x="${A.x(r)+14}" y="${A.y(i)-12}" class="rule-point-label">old (${l(r)}, ${l(i)})</text>
    <text x="${A.x(a)+14}" y="${A.y(o)+24}" class="rule-point-label">new (${l(a)}, ${l(o)})</text>
  `,document.querySelector(`#rule-map-label`).textContent=t.label,n(document.querySelector(`#rule-map-mapping`),u(t.mapping)),document.querySelector(`#rule-map-copy`).textContent=t.copy}document.querySelectorAll(`[data-rule]`).forEach(e=>e.addEventListener(`click`,()=>{document.querySelectorAll(`[data-rule]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),R(e.dataset.rule)})),j.addEventListener(`pointerdown`,e=>{e.target.classList.contains(`rule-point--start`)&&(P=!0,j.setPointerCapture(e.pointerId),M=L(e),R(N))}),j.addEventListener(`pointermove`,e=>{P&&(M=L(e),R(N))}),j.addEventListener(`pointerup`,e=>{P=!1,j.hasPointerCapture(e.pointerId)&&j.releasePointerCapture(e.pointerId)}),j.addEventListener(`pointercancel`,()=>{P=!1}),j.addEventListener(`keydown`,e=>{if(!e.target.classList.contains(`rule-point--start`)||!e.key.startsWith(`Arrow`))return;e.preventDefault();let t=e.shiftKey?1:.1,[n,r]={ArrowLeft:[-t,0],ArrowRight:[t,0],ArrowUp:[0,t],ArrowDown:[0,-t]}[e.key];M=I(N,M[0]+n,M[1]+r),R(N),j.querySelector(`.rule-point--start`).focus()}),R(`up`);var z=d({width:680,height:680,xMin:-6,xMax:6,yMin:-6,yMax:6,padding:50}),B=document.querySelector(`#formula-chart`),V=document.querySelector(`#formula-a`),H=document.querySelector(`#formula-h`),U=document.querySelector(`#formula-k`),W={a:-.5,h:2,k:3};function G(){return{a:Number(V.value),h:Number(H.value),k:Number(U.value)}}function K({a:e,h:t,k:n}){let r=t===0?`x`:`x ${t>0?`−`:`+`} ${Math.abs(t)}`;return`g(x) = ${e===1?``:e===-1?`−`:l(e)}(${r})²${n===0?``:` ${n>0?`+`:`−`} ${Math.abs(n)}`}`}function q(){let e=G(),t=h(-6,6,e=>W.a*(e-W.h)**2+W.k,.03),r=h(-6,6,t=>e.a*(t-e.h)**2+e.k,.03);B.innerHTML=`
    ${p(z,`formula`)}
    <path d="${m(t,z)}" class="formula-curve formula-curve--target" />
    <path d="${m(r,z)}" class="formula-curve formula-curve--guess" />
    <circle cx="${z.x(W.h)}" cy="${z.y(W.k)}" r="9" class="formula-vertex formula-vertex--target" />
    <circle cx="${z.x(e.h)}" cy="${z.y(e.k)}" r="7" class="formula-vertex formula-vertex--guess" />
  `,n(document.querySelector(`#formula-guess`),u(K(e))),document.querySelector(`#formula-a-output`).textContent=l(e.a),document.querySelector(`#formula-h-output`).textContent=l(e.h),document.querySelector(`#formula-k-output`).textContent=l(e.k);let i=document.querySelector(`#formula-feedback`);i.classList.remove(`is-correct`,`is-incorrect`),i.textContent=``}[V,H,U].forEach(e=>e.addEventListener(`input`,q)),document.querySelector(`#formula-check`).addEventListener(`click`,()=>{let e=G(),t=e.a===W.a&&e.h===W.h&&e.k===W.k;s(document.querySelector(`#formula-feedback`),t,t?`Exactly. The vertex is (2, 3), the graph opens down, and |a| = 1/2 makes it wider.`:`Start with the target vertex. Then use opening direction for the sign of a and width for |a|.`)}),q();var J=document.querySelector(`#symmetry-chart`),Y=document.querySelector(`#symmetry-x`),X=`quartic`,Z=!0,Q={quartic:{formula:`x⁴ − 4x²`,type:`even`,substitution:`f(−x) = (−x)⁴ − 4(−x)²`,simplified:`f(−x) = x⁴ − 4x² = f(x)`,verdict:`Even · reflect the known half across the y-axis.`,fn:e=>e**4-4*e**2,xMax:2.5,yMin:-5,yMax:10,trackerMin:.2,trackerMax:2.3},reciprocal:{formula:`x + 1/x`,type:`odd`,substitution:`f(−x) = −x + 1/(−x)`,simplified:`f(−x) = −x − 1/x = −f(x)`,verdict:`Odd · rotate the known half 180° through the origin.`,fn:e=>e+1/e,xMax:4.5,yMin:-7,yMax:7,trackerMin:.2,trackerMax:4,discontinuous:!0},rational:{formula:`x/(1 + x²)`,type:`odd`,substitution:`f(−x) = (−x)/(1 + (−x)²)`,simplified:`f(−x) = −x/(1 + x²) = −f(x)`,verdict:`Odd · opposite inputs produce opposite outputs.`,fn:e=>e/(1+e**2),xMax:4.5,yMin:-1,yMax:1,trackerMin:.1,trackerMax:4},shifted:{formula:`(x − 1)²`,type:`neither`,substitution:`f(−x) = (−x − 1)² = (x + 1)²`,simplified:`f(−x) ≠ f(x) and f(−x) ≠ −f(x)`,verdict:`Neither · the parabola is symmetric about x = 1, not the y-axis or origin.`,fn:e=>(e-1)**2,xMax:4.5,yMin:-2,yMax:10,trackerMin:.2,trackerMax:2.1}};function $(){let e=Q[X],t=Number(Y.value),r=e.fn(t),i=e.type===`even`?r:e.type===`odd`?-r:e.fn(-t),a={width:680,height:540,padding:52},o=f({...a,xMin:-5,xMax:5,yMin:e.yMin,yMax:e.yMax}),s=d({...a,...o}),c=h(e.discontinuous?.2:0,e.xMax,e.fn,.025),g=h(-e.xMax,e.discontinuous?-.2:0,e.fn,.025),_=X===`shifted`?.2:1,v=r>=s.yMin&&r<=s.yMax,y=i>=s.yMin&&i<=s.yMax;J.innerHTML=`
    ${p(s,`symmetry`)}
    <g>
      <path d="${m(c,s,_)}" class="symmetry-curve symmetry-curve--known" />
      <path d="${m(g,s,_)}" class="symmetry-curve symmetry-curve--mirror ${Z?`is-revealed`:``}" />
      ${v?`<circle cx="${s.x(t)}" cy="${s.y(r)}" r="8" class="symmetry-point symmetry-point--known" />`:``}
      ${Z&&y?`<circle cx="${s.x(-t)}" cy="${s.y(i)}" r="8" class="symmetry-point symmetry-point--mirror" />`:``}
    </g>
  `,n(document.querySelector(`#symmetry-substitution`),u(e.substitution)),n(document.querySelector(`#symmetry-simplified`),u(e.simplified)),document.querySelector(`#symmetry-verdict`).textContent=e.verdict,document.querySelector(`#symmetry-x-output`).textContent=l(t);let b=[];v||b.push(`The tracked point is ${r>s.yMax?`above`:`below`} the visible window.`),y||b.push(`Its partner is ${i>s.yMax?`above`:`below`} the visible window.`),document.querySelector(`#symmetry-point-pair`).innerHTML=`<span>(${l(t)}, ${l(r)}) pairs with (${l(-t)}, ${l(i)})</span>${b.length?`<small>${b.join(` `)}</small>`:``}`;let x=document.querySelector(`#symmetry-reveal`);x.setAttribute(`aria-pressed`,String(Z)),x.textContent=Z?`Hide mirrored half`:`Reveal required half`}document.querySelectorAll(`[data-symmetry]`).forEach(e=>e.addEventListener(`click`,()=>{X=e.dataset.symmetry,Z=!0;let t=Q[X];Y.min=String(t.trackerMin),Y.max=String(t.trackerMax),Number(Y.value)<t.trackerMin&&(Y.value=String(t.trackerMin)),Number(Y.value)>t.trackerMax&&(Y.value=String(t.trackerMax)),document.querySelectorAll(`[data-symmetry]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),$()})),document.querySelector(`#symmetry-reveal`).addEventListener(`click`,()=>{Z=!Z,$()}),Y.addEventListener(`input`,$),$(),document.querySelector(`#check-even`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-even-point`).value===`correct`;s(document.querySelector(`#feedback-even`),e,e?`Correct. Even symmetry changes the sign of x and keeps y.`:`Reflect across the y-axis: negate x, but keep the same output.`)}),document.querySelector(`#check-odd`).addEventListener(`click`,()=>{let e=i(Number(document.querySelector(`#check-odd-value`).value),-7);s(document.querySelector(`#feedback-odd`),e,e?`Correct. Odd symmetry gives f(2) = −f(−2) = −7.`:`For an odd function, opposite inputs have opposite outputs.`)}),document.querySelector(`#check-classification`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-rational`).value===`correct`;s(document.querySelector(`#feedback-classification`),e,e?`Correct. Substitution produces −x/(1 + x²), which is −f(x).`:`Replace x by −x and simplify the squared denominator before comparing.`)}),document.querySelector(`#check-transformation`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-transform`).value===`correct`;s(document.querySelector(`#feedback-transformation`),e,e?`Correct. Right 3 is x − 3 inside; up 2 is +2 outside.`:`Horizontal shifts use the opposite sign inside. Vertical shifts use the stated sign outside.`)}),o();