import"./modulepreload-polyfill-P2Xu9kJm.js";import{a as e,i as t,o as n,r,s as i}from"./shared-BIoFuaqo.js";var a=document.querySelector(`#app`);a.innerHTML=`
  ${n(`2.6`)}
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
        <span class="transformation-hero-art__formula">g(x) = a f(b(x − h)) + k</span>
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
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>01</span> The transformation studio</p>
        <h2>Outside changes outputs.<br>Inside changes inputs.</h2>
        <p>Use <strong>g(x) = a f(b(x − h)) + k</strong> as a map. The outside numbers a and k control vertical motion; the inside numbers b and h control horizontal motion.</p>
      </div>

      <div class="transformation-studio" data-reveal>
        <div class="transformation-stage">
          <svg id="transformation-chart" viewBox="0 0 720 630" role="img" aria-label="Base function and transformed function on a coordinate grid"></svg>
          <div class="transformation-stage__legend" aria-hidden="true"><span><i></i>f(x)</span><span><i></i>g(x)</span></div>
        </div>
        <div class="transformation-controls">
          <p class="tool-label">Four-control graph machine</p>
          <div class="transformation-formula" id="transformation-formula" aria-live="polite">g(x) = f(x)</div>
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
          <p>If <strong>(u, f(u))</strong> lies on the original graph, then the transformed point is</p>
          <div class="point-witness__rule">(u, f(u)) <span>→</span> (h + u/b, k + a·f(u))</div>
        </div>
        <div class="point-witness__live">
          <label for="witness-u">Choose u <output id="witness-u-output">1</output></label>
          <input id="witness-u" type="range" min="-4" max="4" step="0.1" value="1" />
          <p id="point-witness-result" aria-live="polite">(1, f(1)) → (1, f(1))</p>
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
          <button type="button" class="is-active" data-rule="up"><span>f(x) + c</span><strong>up c</strong></button>
          <button type="button" data-rule="left"><span>f(x + c)</span><strong>left c</strong></button>
          <button type="button" data-rule="vscale"><span>k f(x)</span><strong>vertical × k</strong></button>
          <button type="button" data-rule="hscale"><span>f(kx)</span><strong>horizontal ÷ k</strong></button>
          <button type="button" data-rule="xreflect"><span>−f(x)</span><strong>x-axis reflection</strong></button>
          <button type="button" data-rule="yreflect"><span>f(−x)</span><strong>y-axis reflection</strong></button>
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
        <p>The target curve below came from f(x) = x². Match its vertex, opening direction, and width to reconstruct g(x) = a(x − h)² + k.</p>
      </div>

      <div class="formula-lab" data-reveal>
        <div class="formula-lab__stage">
          <svg id="formula-chart" viewBox="0 0 680 680" role="img" aria-label="Target parabola and adjustable guess on a coordinate grid"></svg>
          <div class="formula-lab__legend" aria-hidden="true"><span><i></i>target g</span><span><i></i>your formula</span></div>
        </div>
        <div class="formula-lab__controls">
          <p class="tool-label">Formula builder</p>
          <div class="formula-lab__formula" id="formula-guess">g(x) = (x)²</div>
          <label for="formula-a"><span>Opening and width a</span><output id="formula-a-output">1</output><input id="formula-a" type="range" min="-2" max="2" step="0.1" value="1" /></label>
          <label for="formula-h"><span>Vertex x-coordinate h</span><output id="formula-h-output">0</output><input id="formula-h" type="range" min="-4" max="4" step="0.1" value="0" /></label>
          <label for="formula-k"><span>Vertex y-coordinate k</span><output id="formula-k-output">0</output><input id="formula-k" type="range" min="-4" max="4" step="0.1" value="0" /></label>
          <div class="formula-clues">
            <article><span>01</span><p>The vertex reveals <strong>(h, k)</strong>.</p></article>
            <article><span>02</span><p>Opening down means <strong>a &lt; 0</strong>.</p></article>
            <article><span>03</span><p>A wider graph has <strong>0 &lt; |a| &lt; 1</strong>.</p></article>
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
        <p>An even function satisfies f(−x) = f(x) and has y-axis symmetry. An odd function satisfies f(−x) = −f(x) and has origin symmetry.</p>
      </div>

      <div class="symmetry-test-strip" data-reveal>
        <article><span>Even test</span><strong>f(−x) = f(x)</strong><p>(x, y) requires (−x, y)</p></article>
        <article><span>Odd test</span><strong>f(−x) = −f(x)</strong><p>(x, y) requires (−x, −y)</p></article>
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
            <button type="button" class="is-active" data-symmetry="quartic"><span>x⁴ − 4x²</span><strong>Even candidate</strong></button>
            <button type="button" data-symmetry="reciprocal"><span>x + 1/x</span><strong>Odd candidate</strong></button>
            <button type="button" data-symmetry="rational"><span>x/(1 + x²)</span><strong>Classify it</strong></button>
            <button type="button" data-symmetry="shifted"><span>(x − 1)²</span><strong>Neither candidate</strong></button>
          </div>
          <div class="symmetry-proof" aria-live="polite">
            <span id="symmetry-substitution">f(−x) = (−x)⁴ − 4(−x)²</span>
            <strong id="symmetry-simplified">f(−x) = x⁴ − 4x² = f(x)</strong>
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
          <h3>If f(−2) = 7 and f is odd…</h3>
          <label>f(2) = <input id="check-odd-value" type="number" /></label>
          <button id="check-odd" type="button">Check value</button>
          <p class="answer-feedback" id="feedback-odd" aria-live="polite"></p>
        </article>
        <article class="transformation-check" data-reveal>
          <span>Algebraic test</span>
          <h3>Classify f(x) = x/(1 + x²).</h3>
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
  ${e({previous:{href:`pages/sections/2-3.html`,label:`Section 2.3 · Information from graphs`},next:null})}
`;function o(e,t=2){let n=Number(e.toFixed(t));if(Math.abs(n)<1e-10)return`0`;let r=String(n);return r.startsWith(`-`)?`−${r.slice(1)}`:r}function s({width:e,height:t,xMin:n,xMax:r,yMin:i,yMax:a,padding:o=46,equalUnits:s=!0}){let c=e-o*2,l=t-o*2,u=c/(r-n),d=l/(a-i),f=o,p=o;if(s){let o=Math.min(u,d);u=o,d=o,f=(e-(r-n)*o)/2,p=(t-(a-i)*o)/2}return{width:e,height:t,xMin:n,xMax:r,yMin:i,yMax:a,left:f,right:f+(r-n)*u,top:p,bottom:p+(a-i)*d,x:e=>f+(e-n)*u,y:e=>p+(a-e)*d}}function c({width:e,height:t,xMin:n,xMax:r,yMin:i,yMax:a,padding:o}){let s=(e-o*2)/(t-o*2),c=r-n,l=a-i;if(c/l<s){let e=l*s,t=(n+r)/2;return{xMin:t-e/2,xMax:t+e/2,yMin:i,yMax:a}}let u=c/s,d=(i+a)/2;return{xMin:n,xMax:r,yMin:d-u/2,yMax:d+u/2}}function l(e,t=`transform`){let n=[];for(let r=Math.ceil(e.xMin);r<=e.xMax;r+=1)n.push(`<line x1="${e.x(r)}" y1="${e.top}" x2="${e.x(r)}" y2="${e.bottom}" class="${t}-grid-line" />`),r!==0&&r%2==0&&n.push(`<text x="${e.x(r)}" y="${e.y(0)+20}" text-anchor="middle" class="${t}-grid-label">${o(r)}</text>`);for(let r=Math.ceil(e.yMin);r<=e.yMax;r+=1)n.push(`<line x1="${e.left}" y1="${e.y(r)}" x2="${e.right}" y2="${e.y(r)}" class="${t}-grid-line" />`),r!==0&&r%2==0&&n.push(`<text x="${e.x(0)+10}" y="${e.y(r)-7}" class="${t}-grid-label">${o(r)}</text>`);return e.yMin<=0&&e.yMax>=0&&n.push(`<line x1="${e.left}" y1="${e.y(0)}" x2="${e.right}" y2="${e.y(0)}" class="${t}-axis" />`),e.xMin<=0&&e.xMax>=0&&n.push(`<line x1="${e.x(0)}" y1="${e.top}" x2="${e.x(0)}" y2="${e.bottom}" class="${t}-axis" />`),n.join(``)}function u(e,t,n=1){let r=``,i=!1;return e.forEach(e=>{if(!e||!Number.isFinite(e[1])||e[1]<t.yMin-n||e[1]>t.yMax+n){i=!1;return}r+=`${i?`L`:`M`}${t.x(e[0]).toFixed(2)} ${t.y(e[1]).toFixed(2)} `,i=!0}),r.trim()}function d(e,t,n,r=.04){let i=[];for(let a=e;a<=t+r/2;a+=r)i.push([a,n(a)]);return i}function f(e){return .075*(e+3)*e*(e-2)}var p=s({width:720,height:630,xMin:-7,xMax:7,yMin:-6,yMax:6,padding:50}),m=document.querySelector(`#transformation-chart`),h=document.querySelector(`#transform-a`),g=document.querySelector(`#transform-b`),_=document.querySelector(`#transform-h`),v=document.querySelector(`#transform-k`),y=document.querySelector(`#witness-u`);function b(){return{a:Number(h.value),b:Number(g.value),h:Number(_.value),k:Number(v.value)}}function x(e,t){return e===1?t:e===-1?`−${t}`:`${o(e)}${t}`}function S(e,t){let n=t===0?`x`:`x ${t>0?`−`:`+`} ${Math.abs(t)}`;return e===1?n:e===-1?`−(${n})`:`${o(e)}(${n})`}function C({a:e,b:t,h:n,k:r}){return`g(x) = ${x(e,`f(${S(t,n)})`)}${r===0?``:` ${r>0?`+`:`−`} ${Math.abs(r)}`}`}function w(e,t){let n=[];return e===0&&n.push(`collapse every output to one level`),e<0&&n.push(`reflect across the x-axis`),Math.abs(e)>1&&n.push(`stretch by ${o(Math.abs(e))}`),Math.abs(e)<1&&e!==0&&n.push(`compress by ${o(Math.abs(e))}`),t!==0&&n.push(`shift ${t>0?`up`:`down`} ${Math.abs(t)}`),n}function T(e,t){let n=[];return e===0&&n.push(`freeze the function input at 0`),e<0&&n.push(`reflect across the y-axis`),Math.abs(e)>1&&n.push(`compress by 1/${o(Math.abs(e))}`),Math.abs(e)<1&&e!==0&&n.push(`stretch by ${o(1/Math.abs(e))}`),t!==0&&n.push(`shift ${t>0?`right`:`left`} ${Math.abs(t)}`),n}function E(){let e=b(),t=d(-6,6,f),n=d(-7,7,t=>e.a*f(e.b*(t-e.h))+e.k,.025),r=Number(y.value),i=f(r),a=e.b!==0,s=a?e.h+r/e.b:null,c=e.k+e.a*i;m.innerHTML=`
    ${l(p)}
    <path d="${u(t,p)}" class="transform-curve transform-curve--base" />
    <path d="${u(n,p)}" class="transform-curve transform-curve--moved" />
    ${a?`<line x1="${p.x(r)}" y1="${p.y(i)}" x2="${p.x(s)}" y2="${p.y(c)}" class="transform-point-link" />`:``}
    <circle cx="${p.x(r)}" cy="${p.y(i)}" r="7" class="transform-point transform-point--base" />
    ${a?`<circle cx="${p.x(s)}" cy="${p.y(c)}" r="8" class="transform-point transform-point--moved" />`:``}
  `,document.querySelector(`#transformation-formula`).textContent=C(e),document.querySelector(`#transform-a-output`).textContent=o(e.a),document.querySelector(`#transform-b-output`).textContent=o(e.b),document.querySelector(`#transform-h-output`).textContent=o(e.h),document.querySelector(`#transform-k-output`).textContent=o(e.k);let h=w(e.a,e.k),g=T(e.b,e.h);document.querySelector(`#vertical-story`).textContent=h.length?h.join(` · `):`No vertical change`,document.querySelector(`#vertical-detail`).textContent=`y becomes ${o(e.a)}y ${e.k>=0?`+`:`−`} ${Math.abs(e.k)}.`,document.querySelector(`#horizontal-story`).textContent=g.length?g.join(` · `):`No horizontal change`,document.querySelector(`#horizontal-detail`).textContent=a?`x becomes h + u/b = ${o(e.h)} + u/${o(e.b)}.`:`With b = 0, every x sends the same input 0 into f.`,document.querySelector(`#witness-u-output`).textContent=o(r),document.querySelector(`#point-witness-result`).textContent=a?`(${o(r)}, ${o(i)}) → (${o(s)}, ${o(c)})`:`b = 0 freezes the input, so this point map is not one-to-one.`}[h,g,_,v,y].forEach(e=>e.addEventListener(`input`,E)),document.querySelector(`#transformation-reset`).addEventListener(`click`,()=>{h.value=`1`,g.value=`1`,_.value=`0`,v.value=`0`,y.value=`1`,E()}),E();var D=s({width:620,height:537,xMin:-7,xMax:7,yMin:-6,yMax:6,padding:21}),O=document.querySelector(`#rule-map-chart`),k=[2,1],A=`up`,j=!1,M={up:{label:`Outside addition`,mapping:`(x, y) → (x, y + c)`,copy:`The input is untouched. Add c directly to every output.`,apply:([e,t])=>[e,t+2]},left:{label:`Inside addition`,mapping:`(x, y) → (x − c, y)`,copy:`Solve x + c = old input. The new x is c units smaller, so the graph moves left.`,apply:([e,t])=>[e-2,t]},vscale:{label:`Outside multiplication`,mapping:`(x, y) → (x, ky)`,copy:`Keep x. Multiply the height by k; negative k also reflects across the x-axis.`,apply:([e,t])=>[e,3*t]},hscale:{label:`Inside multiplication`,mapping:`(x, y) → (x/k, y)`,copy:`Solve kx = old input. Divide x by k; negative k also reflects across the y-axis.`,apply:([e,t])=>[e/2,t]},xreflect:{label:`Negative outside`,mapping:`(x, y) → (x, −y)`,copy:`Every output changes sign, producing a reflection across the x-axis.`,apply:([e,t])=>[e,-t]},yreflect:{label:`Negative inside`,mapping:`(x, y) → (−x, y)`,copy:`Every input changes sign, producing a reflection across the y-axis.`,apply:([e,t])=>[-e,t]}};function N(e,t,n){return Math.min(n,Math.max(t,e))}function P(e,t,n){let r=e=>Math.round(e*10)/10;return[r(N(t,-3,3)),r(N(n,-3,3))]}function F(e){let t=O.createSVGPoint();t.x=e.clientX,t.y=e.clientY;let n=t.matrixTransform(O.getScreenCTM().inverse()),r=D.xMin+(n.x-D.left)/(D.right-D.left)*(D.xMax-D.xMin),i=D.yMax-(n.y-D.top)/(D.bottom-D.top)*(D.yMax-D.yMin);return P(A,r,i)}function I(e){A=e,k=P(e,...k);let t=M[e],[n,r]=k,[i,a]=t.apply(k);O.innerHTML=`
    ${l(D,`rule`)}
    <line x1="${D.x(n)}" y1="${D.y(r)}" x2="${D.x(i)}" y2="${D.y(a)}" class="rule-motion-line" />
    <circle cx="${D.x(n)}" cy="${D.y(r)}" r="12" class="rule-point rule-point--start" tabindex="0" role="button" aria-label="Old point at ${o(n)}, ${o(r)}. Drag it or use the arrow keys to move it." />
    <circle cx="${D.x(i)}" cy="${D.y(a)}" r="11" class="rule-point rule-point--end" />
    <text x="${D.x(n)+14}" y="${D.y(r)-12}" class="rule-point-label">old (${o(n)}, ${o(r)})</text>
    <text x="${D.x(i)+14}" y="${D.y(a)+24}" class="rule-point-label">new (${o(i)}, ${o(a)})</text>
  `,document.querySelector(`#rule-map-label`).textContent=t.label,document.querySelector(`#rule-map-mapping`).textContent=t.mapping,document.querySelector(`#rule-map-copy`).textContent=t.copy}document.querySelectorAll(`[data-rule]`).forEach(e=>e.addEventListener(`click`,()=>{document.querySelectorAll(`[data-rule]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),I(e.dataset.rule)})),O.addEventListener(`pointerdown`,e=>{e.target.classList.contains(`rule-point--start`)&&(j=!0,O.setPointerCapture(e.pointerId),k=F(e),I(A))}),O.addEventListener(`pointermove`,e=>{j&&(k=F(e),I(A))}),O.addEventListener(`pointerup`,e=>{j=!1,O.hasPointerCapture(e.pointerId)&&O.releasePointerCapture(e.pointerId)}),O.addEventListener(`pointercancel`,()=>{j=!1}),O.addEventListener(`keydown`,e=>{if(!e.target.classList.contains(`rule-point--start`)||!e.key.startsWith(`Arrow`))return;e.preventDefault();let t=e.shiftKey?1:.1,[n,r]={ArrowLeft:[-t,0],ArrowRight:[t,0],ArrowUp:[0,t],ArrowDown:[0,-t]}[e.key];k=P(A,k[0]+n,k[1]+r),I(A),O.querySelector(`.rule-point--start`).focus()}),I(`up`);var L=s({width:680,height:680,xMin:-6,xMax:6,yMin:-6,yMax:6,padding:50}),R=document.querySelector(`#formula-chart`),z=document.querySelector(`#formula-a`),B=document.querySelector(`#formula-h`),V=document.querySelector(`#formula-k`),H={a:-.5,h:2,k:3};function U(){return{a:Number(z.value),h:Number(B.value),k:Number(V.value)}}function W({a:e,h:t,k:n}){let r=t===0?`x`:`x ${t>0?`−`:`+`} ${Math.abs(t)}`;return`g(x) = ${e===1?``:e===-1?`−`:o(e)}(${r})²${n===0?``:` ${n>0?`+`:`−`} ${Math.abs(n)}`}`}function G(){let e=U(),t=d(-6,6,e=>H.a*(e-H.h)**2+H.k,.03),n=d(-6,6,t=>e.a*(t-e.h)**2+e.k,.03);R.innerHTML=`
    ${l(L,`formula`)}
    <path d="${u(t,L)}" class="formula-curve formula-curve--target" />
    <path d="${u(n,L)}" class="formula-curve formula-curve--guess" />
    <circle cx="${L.x(H.h)}" cy="${L.y(H.k)}" r="9" class="formula-vertex formula-vertex--target" />
    <circle cx="${L.x(e.h)}" cy="${L.y(e.k)}" r="7" class="formula-vertex formula-vertex--guess" />
  `,document.querySelector(`#formula-guess`).textContent=W(e),document.querySelector(`#formula-a-output`).textContent=o(e.a),document.querySelector(`#formula-h-output`).textContent=o(e.h),document.querySelector(`#formula-k-output`).textContent=o(e.k);let r=document.querySelector(`#formula-feedback`);r.classList.remove(`is-correct`,`is-incorrect`),r.textContent=``}[z,B,V].forEach(e=>e.addEventListener(`input`,G)),document.querySelector(`#formula-check`).addEventListener(`click`,()=>{let e=U(),t=e.a===H.a&&e.h===H.h&&e.k===H.k;i(document.querySelector(`#formula-feedback`),t,t?`Exactly. The vertex is (2, 3), the graph opens down, and |a| = 1/2 makes it wider.`:`Start with the target vertex. Then use opening direction for the sign of a and width for |a|.`)}),G();var K=document.querySelector(`#symmetry-chart`),q=document.querySelector(`#symmetry-x`),J=`quartic`,Y=!0,X={quartic:{formula:`x⁴ − 4x²`,type:`even`,substitution:`f(−x) = (−x)⁴ − 4(−x)²`,simplified:`f(−x) = x⁴ − 4x² = f(x)`,verdict:`Even · reflect the known half across the y-axis.`,fn:e=>e**4-4*e**2,xMax:2.5,yMin:-5,yMax:10,trackerMin:.2,trackerMax:2.3},reciprocal:{formula:`x + 1/x`,type:`odd`,substitution:`f(−x) = −x + 1/(−x)`,simplified:`f(−x) = −x − 1/x = −f(x)`,verdict:`Odd · rotate the known half 180° through the origin.`,fn:e=>e+1/e,xMax:4.5,yMin:-7,yMax:7,trackerMin:.2,trackerMax:4,discontinuous:!0},rational:{formula:`x/(1 + x²)`,type:`odd`,substitution:`f(−x) = (−x)/(1 + (−x)²)`,simplified:`f(−x) = −x/(1 + x²) = −f(x)`,verdict:`Odd · opposite inputs produce opposite outputs.`,fn:e=>e/(1+e**2),xMax:4.5,yMin:-1,yMax:1,trackerMin:.1,trackerMax:4},shifted:{formula:`(x − 1)²`,type:`neither`,substitution:`f(−x) = (−x − 1)² = (x + 1)²`,simplified:`f(−x) ≠ f(x) and f(−x) ≠ −f(x)`,verdict:`Neither · the parabola is symmetric about x = 1, not the y-axis or origin.`,fn:e=>(e-1)**2,xMax:4.5,yMin:-2,yMax:10,trackerMin:.2,trackerMax:2.1}};function Z(){let e=X[J],t=Number(q.value),n=e.fn(t),r=e.type===`even`?n:e.type===`odd`?-n:e.fn(-t),i={width:680,height:540,padding:52},a=c({...i,xMin:-5,xMax:5,yMin:e.yMin,yMax:e.yMax}),f=s({...i,...a}),p=d(e.discontinuous?.2:0,e.xMax,e.fn,.025),m=d(-e.xMax,e.discontinuous?-.2:0,e.fn,.025),h=J===`shifted`?.2:1,g=n>=f.yMin&&n<=f.yMax,_=r>=f.yMin&&r<=f.yMax;K.innerHTML=`
    ${l(f,`symmetry`)}
    <g>
      <path d="${u(p,f,h)}" class="symmetry-curve symmetry-curve--known" />
      <path d="${u(m,f,h)}" class="symmetry-curve symmetry-curve--mirror ${Y?`is-revealed`:``}" />
      ${g?`<circle cx="${f.x(t)}" cy="${f.y(n)}" r="8" class="symmetry-point symmetry-point--known" />`:``}
      ${Y&&_?`<circle cx="${f.x(-t)}" cy="${f.y(r)}" r="8" class="symmetry-point symmetry-point--mirror" />`:``}
    </g>
  `,document.querySelector(`#symmetry-substitution`).textContent=e.substitution,document.querySelector(`#symmetry-simplified`).textContent=e.simplified,document.querySelector(`#symmetry-verdict`).textContent=e.verdict,document.querySelector(`#symmetry-x-output`).textContent=o(t);let v=[];g||v.push(`The tracked point is ${n>f.yMax?`above`:`below`} the visible window.`),_||v.push(`Its partner is ${r>f.yMax?`above`:`below`} the visible window.`),document.querySelector(`#symmetry-point-pair`).innerHTML=`<span>(${o(t)}, ${o(n)}) pairs with (${o(-t)}, ${o(r)})</span>${v.length?`<small>${v.join(` `)}</small>`:``}`;let y=document.querySelector(`#symmetry-reveal`);y.setAttribute(`aria-pressed`,String(Y)),y.textContent=Y?`Hide mirrored half`:`Reveal required half`}document.querySelectorAll(`[data-symmetry]`).forEach(e=>e.addEventListener(`click`,()=>{J=e.dataset.symmetry,Y=!0;let t=X[J];q.min=String(t.trackerMin),q.max=String(t.trackerMax),Number(q.value)<t.trackerMin&&(q.value=String(t.trackerMin)),Number(q.value)>t.trackerMax&&(q.value=String(t.trackerMax)),document.querySelectorAll(`[data-symmetry]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),Z()})),document.querySelector(`#symmetry-reveal`).addEventListener(`click`,()=>{Y=!Y,Z()}),q.addEventListener(`input`,Z),Z(),document.querySelector(`#check-even`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-even-point`).value===`correct`;i(document.querySelector(`#feedback-even`),e,e?`Correct. Even symmetry changes the sign of x and keeps y.`:`Reflect across the y-axis: negate x, but keep the same output.`)}),document.querySelector(`#check-odd`).addEventListener(`click`,()=>{let e=t(Number(document.querySelector(`#check-odd-value`).value),-7);i(document.querySelector(`#feedback-odd`),e,e?`Correct. Odd symmetry gives f(2) = −f(−2) = −7.`:`For an odd function, opposite inputs have opposite outputs.`)}),document.querySelector(`#check-classification`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-rational`).value===`correct`;i(document.querySelector(`#feedback-classification`),e,e?`Correct. Substitution produces −x/(1 + x²), which is −f(x).`:`Replace x by −x and simplify the squared denominator before comparing.`)}),document.querySelector(`#check-transformation`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-transform`).value===`correct`;i(document.querySelector(`#feedback-transformation`),e,e?`Correct. Right 3 is x − 3 inside; up 2 is +2 outside.`:`Horizontal shifts use the opposite sign inside. Vertical shifts use the stated sign outside.`)}),r();