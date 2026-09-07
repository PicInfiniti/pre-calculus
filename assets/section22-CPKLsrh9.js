import{i as e,n as t,r as n}from"./magnifier-DbmAZ0E0.js";import{a as r,i,n as a,o,r as s,s as c}from"./shared-D45aE3CK.js";var l=document.querySelector(`#app`);l.innerHTML=`
  ${o(`2.2`)}
  <main>
    <section class="lesson-hero lesson-hero--graphs">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 2.2</span> Graphs of functions</p>
        <h1>Read the curve.<br><em>Recover the rule.</em></h1>
        <p class="lesson-hero__lede">
          A graph stores inputs, outputs, restrictions, and change in one picture.
          Learn the familiar shapes and then read every endpoint with intention.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#family-library">Open the graph library</a>
          <span>About 40 minutes · interactive</span>
        </div>
      </div>
      <div class="graph-language-art" aria-hidden="true" data-reveal>
        <div class="graph-language-art__grid"></div>
        <svg viewBox="0 0 560 460">
          <path class="graph-language-art__axis" d="M45 230H520M280 35V425" />
          <path class="graph-language-art__curve graph-language-art__curve--parabola" d="M120 75Q280 390 440 75" />
          <path class="graph-language-art__curve graph-language-art__curve--absolute" d="M95 120L280 330L470 110" />
          <path class="graph-language-art__scan" d="M385 55V405" />
          <circle cx="385" cy="165" r="8" />
        </svg>
        <span class="graph-language-art__label graph-language-art__label--domain">domain →</span>
        <span class="graph-language-art__label graph-language-art__label--range">↑ range</span>
        <span class="graph-language-art__label graph-language-art__label--test">vertical-line test</span>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Recognize common parent-function shapes</li>
        <li><span>02</span>Apply the vertical-line test</li>
        <li><span>03</span>Read formulas, domain, range, and net change</li>
        <li><span>04</span>Select a circle branch that is a function</li>
      </ol>
    </section>

    <section class="lesson-section" id="family-library">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>01</span> Build visual memory</p>
        <h2>Every family has<br>a recognizable silhouette.</h2>
        <p>Focus on direction, symmetry, endpoints, and breaks. Those features identify a graph faster than plotting a long table of points.</p>
      </div>

      <div class="family-library" data-reveal>
        <div class="family-library__tabs" role="tablist" aria-label="Parent function families">
          <button type="button" class="is-active" data-family="constant">Constant</button>
          <button type="button" data-family="identity">Identity</button>
          <button type="button" data-family="absolute">Absolute value</button>
          <button type="button" data-family="quadratic">Quadratic</button>
          <button type="button" data-family="cubic">Cubic</button>
          <button type="button" data-family="square-root">Square root</button>
          <button type="button" data-family="cube-root">Cube root</button>
          <button type="button" data-family="reciprocal">Reciprocal</button>
          <button type="button" data-family="reciprocal-square">Reciprocal squared</button>
        </div>
        <div class="family-library__stage">
          <svg id="family-chart" viewBox="0 0 620 620" role="img" aria-label="Graph of the selected parent function"></svg>
          <div class="family-library__copy" aria-live="polite">
            <p class="tool-label" id="family-name">Constant function</p>
            <h3 id="family-formula"></h3>
            <dl>
              <div><dt>Domain</dt><dd id="family-domain"></dd></div>
              <div><dt>Range</dt><dd id="family-range"></dd></div>
            </dl>
            <p id="family-clue">A horizontal line: every input returns the same output.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="vertical-line-test">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Test the promise</p>
        <h2>One x cannot point<br>to two y-values.</h2>
        <p>Slide a vertical line across each curve. A single line with two intersections is enough to prove the relation is not a function of x.</p>
      </div>

      <div class="vertical-test-lab" data-reveal>
        <div class="vertical-test-lab__graph">
          <svg id="vertical-test-chart" viewBox="0 0 500 500" role="img" aria-label="A movable vertical line testing a selected curve"></svg>
        </div>
        <div class="vertical-test-lab__controls">
          <div class="vertical-test-equation" id="vertical-test-equation" aria-label="Equation of the selected relation"></div>
          <p class="tool-label">Vertical-line scanner</p>
          <div class="vertical-test-options">
            <button type="button" data-test-curve="line">Line</button>
            <button type="button" data-test-curve="parabola">Parabola</button>
            <button type="button" class="is-active" data-test-curve="circle">Circle</button>
            <button type="button" data-test-curve="sideways">Sideways parabola</button>
          </div>
          <label for="vertical-x">Move the line to x = <output id="vertical-x-output">1</output></label>
          <input id="vertical-x" type="range" min="-5" max="5" step="0.25" value="1" />
          <div class="vertical-test-result" aria-live="polite">
            <span id="vertical-count">2 intersections here · this line fails</span>
            <strong id="vertical-verdict">The circle is not a function of x</strong>
            <p id="vertical-reason">The circle fails because some vertical lines meet it twice.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="read-a-graph">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Read every endpoint</p>
        <h2>A graph is a formula<br>written spatially.</h2>
        <p>A filled point includes its coordinate; an open point excludes it. Read left to right for domain and bottom to top for range.</p>
      </div>

      <div class="graph-reader" data-reveal>
        <div class="graph-reader__stage">
          <svg id="reader-chart" viewBox="0 0 620 620" role="img" aria-label="Three-piece function with open and closed endpoints"></svg>
        </div>
        <div class="graph-reader__copy">
          <p class="tool-label">Branch inspector</p>
          <h3>Trace one piece at a time.</h3>
          <div class="reader-branches">
            <button type="button" class="is-active" data-reader-branch="one"><strong>${t(String.raw`-2`)}</strong><span>${t(String.raw`-3\le x\le-1`)}</span></button>
            <button type="button" data-reader-branch="two"><strong>${t(String.raw`2x+2`)}</strong><span>${t(String.raw`-1<x\le0`)}</span></button>
            <button type="button" data-reader-branch="three"><strong>${t(String.raw`\frac{x}{2}+2`)}</strong><span>${t(String.raw`0<x\le2`)}</span></button>
          </div>
          <div class="reader-facts">
            <article><span>Domain</span><strong>${t(String.raw`[-3,2]`)}</strong></article>
            <article><span>Range</span><strong>${t(String.raw`\{-2\}\cup(0,3]`)}</strong></article>
          </div>
          <div class="reader-net-change">
            <span>Net change from ${t(String.raw`x=0`)} to ${t(String.raw`x=2`)}</span>
            <strong>${t(String.raw`f(2)-f(0)=3-2=1`)}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="circle-branches">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Select one branch</p>
        <h2>A circle becomes a function<br>when you choose a piece.</h2>
        <p>Solving ${t(String.raw`x^2+y^2=36`)} for ${t(String.raw`y`)} gives two signs. Geometry chooses the sign; the requested left or right side restricts the domain.</p>
      </div>

      <div class="circle-branch-lab" data-reveal>
        <div class="circle-branch-lab__stage">
          <svg id="circle-branch-chart" viewBox="0 0 500 500" role="img" aria-label="Circle with one selected quarter highlighted"></svg>
        </div>
        <div class="circle-branch-lab__controls">
          <p class="tool-label">Quarter-circle selector</p>
          <div class="quarter-options">
            <button type="button" data-quarter="upper-left">Upper left</button>
            <button type="button" data-quarter="upper-right">Upper right</button>
            <button type="button" class="is-active" data-quarter="lower-left">Lower left</button>
            <button type="button" data-quarter="lower-right">Lower right</button>
          </div>
          <div class="circle-branch-result" aria-live="polite">
            <span id="quarter-direction">Lower selects − · left restricts x ≤ 0</span>
            <strong id="quarter-formula"></strong>
            <p id="quarter-domain"></p>
          </div>
          <ol>
            <li><span>1</span><p>Isolate ${t(String.raw`y^2`)}: ${t(String.raw`y^2=36-x^2`)}.</p></li>
            <li><span>2</span><p>Take both branches: ${t(String.raw`y=\pm\sqrt{36-x^2}`)}.</p></li>
            <li><span>3</span><p>Use the picture to select a sign and domain.</p></li>
          </ol>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="reconstruction-studio">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>05</span> Reconstruct the graph</p>
        <h2>Match each visible piece<br>to an algebraic rule.</h2>
        <p>Use slope for lines, radius for circular arcs, and endpoint style for the inequalities. Then combine the pieces into one function.</p>
      </div>

      <div class="reconstruction-studio" data-reveal>
        <div class="reconstruction-tabs" role="tablist" aria-label="Graph reconstruction examples">
          <button type="button" class="is-active" data-reconstruction-tab="a">Reconstruction A</button>
          <button type="button" data-reconstruction-tab="b">Reconstruction B</button>
        </div>
        <section data-reconstruction-panel="a">
          <div class="reconstruction-graph">
            <svg id="reconstruction-a-chart" viewBox="0 0 680 495" role="img" aria-label="Piecewise graph with a constant segment, upper semicircle, and descending ray"></svg>
          </div>
          <div class="reconstruction-copy">
            <p class="tool-label">Constant · semicircle · ray</p>
            <h3>${t(String.raw`p(x)=`)}</h3>
            <div class="reconstruction-rules">
              <span><strong>${t(String.raw`-2`)}</strong><i>if ${t(String.raw`-7\le x\le-4`)}</i></span>
              <span><strong>${t(String.raw`\sqrt{16-x^2}`)}</strong><i>if ${t(String.raw`-4<x\le4`)}</i></span>
              <span><strong>${t(String.raw`1-\frac{x}{2}`)}</strong><i>if ${t(String.raw`x>4`)}</i></span>
            </div>
            <label for="reconstruction-a-x">Inspect x <output id="reconstruction-a-x-output">−4</output></label>
            <input id="reconstruction-a-x" type="range" min="-7" max="8" step="1" value="-4" />
            <div class="reconstruction-output" id="reconstruction-a-output" aria-live="polite">p(−4) = −2 · constant piece</div>
            <dl>
              <div><dt>Domain</dt><dd>[−7, ∞)</dd></div>
              <div><dt>Range</dt><dd>(−∞, −1) ∪ [0, 4]</dd></div>
              <div><dt>Net change, −4 → 4</dt><dd>2</dd></div>
            </dl>
          </div>
        </section>
        <section data-reconstruction-panel="b" hidden>
          <div class="reconstruction-graph">
            <svg id="reconstruction-b-chart" viewBox="0 0 680 495" role="img" aria-label="Piecewise graph with two horizontal segments and a rising line"></svg>
          </div>
          <div class="reconstruction-copy">
            <p class="tool-label">Open points change everything</p>
            <h3>${t(String.raw`g(x)=`)}</h3>
            <div class="reconstruction-rules">
              <span><strong>${t(String.raw`3`)}</strong><i>if ${t(String.raw`-5<x<-2`)}</i></span>
              <span><strong>${t(String.raw`\frac{3x}{2}-1`)}</strong><i>if ${t(String.raw`-2\le x<4`)}</i></span>
              <span><strong>${t(String.raw`-5`)}</strong><i>if ${t(String.raw`4<x\le8`)}</i></span>
            </div>
            <label for="reconstruction-b-x">Inspect x <output id="reconstruction-b-x-output">4</output></label>
            <input id="reconstruction-b-x" type="range" min="-5" max="8" step="1" value="4" />
            <div class="reconstruction-output" id="reconstruction-b-output" aria-live="polite">g(4) is undefined · both points are open</div>
            <dl>
              <div><dt>Domain</dt><dd>(−5, 4) ∪ (4, 8]</dd></div>
              <div><dt>Range</dt><dd>{−5} ∪ [−4, 5)</dd></div>
              <div><dt>Net change, −4 → 0</dt><dd>−4</dd></div>
            </dl>
          </div>
        </section>
      </div>
    </section>

    <section class="lesson-section readiness readiness--graphs" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>06</span> Final readiness</p>
        <h2>Can you turn a graph<br>back into information?</h2>
        <p>Use endpoint logic, shape recognition, and final-minus-initial order. Every answer can be read from the visual evidence above.</p>
      </div>
      <div class="graph-check-grid">
        <article class="check-card" data-reveal>
          <span>Functions and branches</span>
          <h3>Choose the valid interpretation.</h3>
          <label>Is x² + y² = 9 a function of x?
            <select id="check-vlt"><option value="">Choose…</option><option value="yes">Yes</option><option value="correct">No</option></select>
          </label>
          <label>Lower-left quarter of x²+y²=36
            <select id="check-quarter"><option value="">Choose…</option><option value="wrong-a">√(36−x²), 0≤x≤6</option><option value="correct">−√(36−x²), −6≤x≤0</option><option value="wrong-b">−√(36−x²), 0≤x≤6</option></select>
          </label>
          <button type="button" id="check-functions">Check choices</button>
          <p id="feedback-functions" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="check-card" data-reveal>
          <span>Reconstruction A</span>
          <h3>Read the constant, arc, and ray.</h3>
          <label>Domain
            <select id="check-a-domain"><option value="">Choose…</option><option value="correct">[−7, ∞)</option><option value="wrong-a">[−7, 8]</option><option value="wrong-b">(−7, ∞)</option></select>
          </label>
          <label>Range
            <select id="check-a-range"><option value="">Choose…</option><option value="wrong-a">[−2, 4]</option><option value="correct">(−∞, −1) ∪ [0, 4]</option><option value="wrong-b">(−∞, 4]</option></select>
          </label>
          <label>Net change, −4 → 4 <input id="check-a-change" type="number" /></label>
          <button type="button" id="check-a">Check graph A</button>
          <p id="feedback-a-graph" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="check-card" data-reveal>
          <span>Reconstruction B values</span>
          <h3>Open and filled points decide.</h3>
          <label>g(−2) <input id="check-b-negative-two" type="number" /></label>
          <label>g(4)
            <select id="check-b-four"><option value="">Choose…</option><option value="wrong-a">5</option><option value="wrong-b">−5</option><option value="correct">Undefined</option></select>
          </label>
          <label>Net change, −4 → 0 <input id="check-b-change" type="number" /></label>
          <button type="button" id="check-b-values">Check values</button>
          <p id="feedback-b-values" class="answer-feedback" aria-live="polite"></p>
        </article>
        <article class="check-card" data-reveal>
          <span>Reconstruction B sets</span>
          <h3>Project the graph onto both axes.</h3>
          <label>Domain
            <select id="check-b-domain"><option value="">Choose…</option><option value="wrong-a">(−5, 8]</option><option value="correct">(−5, 4) ∪ (4, 8]</option><option value="wrong-b">[−5, 4) ∪ (4, 8]</option></select>
          </label>
          <label>Range
            <select id="check-b-range"><option value="">Choose…</option><option value="correct">{−5} ∪ [−4, 5)</option><option value="wrong-a">[−5, 5]</option><option value="wrong-b">[−4, 5)</option></select>
          </label>
          <label>Middle rule
            <select id="check-b-rule"><option value="">Choose…</option><option value="wrong-a">3x/2 + 1</option><option value="correct">3x/2 − 1</option><option value="wrong-b">2x/3 − 1</option></select>
          </label>
          <button type="button" id="check-b-sets">Check sets</button>
          <p id="feedback-b-sets" class="answer-feedback" aria-live="polite"></p>
        </article>
      </div>
      <aside class="ready-banner ready-banner--graphs" data-reveal>
        <span>You are ready when</span>
        <p>You can recognize the family, count vertical intersections, honor every endpoint, and recover formulas from geometric pieces.</p>
        <a href="#family-library">Restart the graph library <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${r({previous:{href:`pages/sections/2-1.html`,label:`Section 2.1 · Functions`},next:{href:`pages/sections/2-3.html`,label:`Section 2.3 · Getting information from graphs`}})}
`,e(l);function u(e){return e.replaceAll(`³√x`,String.raw`\sqrt[3]{x}`).replaceAll(`√x`,String.raw`\sqrt{x}`).replaceAll(`1/x²`,String.raw`\frac{1}{x^2}`).replaceAll(`1/x`,String.raw`\frac{1}{x}`).replaceAll(`²`,`^2`).replaceAll(`³`,`^3`).replaceAll(`−`,`-`).replaceAll(`∞`,String.raw`\infty`).replaceAll(`∪`,String.raw`\cup`)}function d(e){let t=a(e);return t.startsWith(`-`)?`−${t.slice(1)}`:t}function f({width:e=620,height:t=420,padding:n=44,xMin:r=-5,xMax:i=5,yMin:a=-5,yMax:o=5,equalScale:s=!1}){let c=(e-2*n)/(i-r),l=(t-2*n)/(o-a);s&&(c=l=Math.min(c,l));let u=(i-r)*c,d=(o-a)*l,f=(e-u)/2,p=(t-d)/2;return{width:e,height:t,padding:n,xMin:r,xMax:i,yMin:a,yMax:o,left:f,right:f+u,top:p,bottom:p+d,x:e=>f+(e-r)*c,y:e=>p+(o-e)*l}}function p(e,{labels:t=!0}={}){let n=[];for(let r=Math.ceil(e.xMin);r<=Math.floor(e.xMax);r+=1)n.push(`<line x1="${e.x(r)}" y1="${e.top}" x2="${e.x(r)}" y2="${e.bottom}" class="graph-grid-line" />`),t&&r!==0&&r%2==0&&n.push(`<text x="${e.x(r)}" y="${e.y(0)+20}" text-anchor="middle" class="graph-grid-label">${d(r)}</text>`);for(let r=Math.ceil(e.yMin);r<=Math.floor(e.yMax);r+=1)n.push(`<line x1="${e.left}" y1="${e.y(r)}" x2="${e.right}" y2="${e.y(r)}" class="graph-grid-line" />`),t&&r!==0&&r%2==0&&n.push(`<text x="${e.x(0)+9}" y="${e.y(r)-6}" class="graph-grid-label">${d(r)}</text>`);return n.push(`<line x1="${e.left}" y1="${e.y(0)}" x2="${e.right}" y2="${e.y(0)}" class="graph-axis-line" />`),n.push(`<line x1="${e.x(0)}" y1="${e.top}" x2="${e.x(0)}" y2="${e.bottom}" class="graph-axis-line" />`),n.join(``)}function m(e,t){return e.map(([e,n],r)=>`${r===0?`M`:`L`}${t.x(e)} ${t.y(n)}`).join(` `)}function h(e,t,n,r=.08){let i=Number.isFinite(r)&&r>0?r:.08,a=Math.max(1,Math.ceil(Math.abs(t-e)/i));return Array.from({length:a+1},(r,i)=>{let o=i===a?t:e+(t-e)*i/a;return[o,n(o)]})}function g(e,t,n,r=!0,i=``){return`<circle cx="${e.x(t)}" cy="${e.y(n)}" r="8" class="graph-endpoint ${r?`is-closed`:`is-open`} ${i}" />`}var _=f({width:620,height:620,padding:24}),v={constant:{name:`Constant function`,formula:`f(x) = 2`,domain:`(−∞, ∞)`,range:`{2}`,clue:`A horizontal line: every input returns the same output.`,segments:[[[-5,2],[5,2]]]},identity:{name:`Identity function`,formula:`f(x) = x`,domain:`(−∞, ∞)`,range:`(−∞, ∞)`,clue:`A line through the origin with slope 1: output equals input.`,segments:[h(-5,5,e=>e)]},absolute:{name:`Absolute-value function`,formula:`f(x) = |x|`,domain:`(−∞, ∞)`,range:`[0, ∞)`,clue:`A V-shape with its vertex at the origin and y-axis symmetry.`,segments:[h(-5,5,e=>Math.abs(e))]},quadratic:{name:`Quadratic function`,formula:`f(x) = x²`,domain:`(−∞, ∞)`,range:`[0, ∞)`,clue:`A U-shaped parabola with a minimum at the origin.`,segments:[h(-Math.sqrt(5),Math.sqrt(5),e=>e**2)]},cubic:{name:`Cubic function`,formula:`f(x) = x³`,domain:`(−∞, ∞)`,range:`(−∞, ∞)`,clue:`An increasing S-curve with origin symmetry.`,segments:[h(-Math.cbrt(5),Math.cbrt(5),e=>e**3)]},"square-root":{name:`Square-root function`,formula:`f(x) = √x`,domain:`[0, ∞)`,range:`[0, ∞)`,clue:`Begins at the origin and moves right only, rising more slowly.`,segments:[h(0,5,e=>Math.sqrt(e))]},"cube-root":{name:`Cube-root function`,formula:`f(x) = ³√x`,domain:`(−∞, ∞)`,range:`(−∞, ∞)`,clue:`A sideways S-curve that passes through the origin.`,segments:[h(-5,5,e=>Math.cbrt(e))]},reciprocal:{name:`Reciprocal function`,formula:`f(x) = 1/x`,domain:`(−∞, 0) ∪ (0, ∞)`,range:`(−∞, 0) ∪ (0, ∞)`,clue:`Two branches in opposite quadrants; both axes are asymptotes.`,segments:[h(-5,-.2,e=>1/e),h(.2,5,e=>1/e)]},"reciprocal-square":{name:`Reciprocal-squared function`,formula:`f(x) = 1/x²`,domain:`(−∞, 0) ∪ (0, ∞)`,range:`(0, ∞)`,clue:`Two positive branches mirrored across the y-axis.`,segments:[h(-5,-Math.sqrt(.2),e=>1/e**2),h(Math.sqrt(.2),5,e=>1/e**2)]}};function y(e){let t=v[e];document.querySelectorAll(`[data-family]`).forEach(t=>t.classList.toggle(`is-active`,t.dataset.family===e)),document.querySelector(`#family-chart`).innerHTML=`
    ${p(_)}
    ${t.segments.map(e=>`<path d="${m(e,_)}" class="family-curve" />`).join(``)}
  `,document.querySelector(`#family-name`).textContent=t.name,n(document.querySelector(`#family-formula`),u(t.formula)),n(document.querySelector(`#family-domain`),u(t.domain)),n(document.querySelector(`#family-range`),u(t.range)),document.querySelector(`#family-clue`).textContent=t.clue}document.querySelectorAll(`[data-family]`).forEach(e=>e.addEventListener(`click`,()=>y(e.dataset.family))),y(`constant`);var b=f({width:500,height:500,padding:25}),x=document.querySelector(`#vertical-x`),S=`circle`,C={line:{min:-5,max:5,value:1},parabola:{min:-2,max:2,value:1},circle:{min:-5,max:5,value:1},sideways:{min:-1,max:5,value:1}},w={line:String.raw`y=\frac{7}{10}x`,parabola:String.raw`y=x^2`,circle:String.raw`x^2+y^2=9`,sideways:String.raw`x=y^2`};function T(e){return e===`line`?`<path d="${m([[-5,-3.5],[5,3.5]],b)}" class="vertical-test-curve" />`:e===`parabola`?`<path d="${m(h(-Math.sqrt(5),Math.sqrt(5),e=>e**2),b)}" class="vertical-test-curve" />`:e===`circle`?`<circle cx="${b.x(0)}" cy="${b.y(0)}" r="${b.x(3)-b.x(0)}" class="vertical-test-curve" />`:`<path d="${m(h(-Math.sqrt(5),Math.sqrt(5),e=>e**2).map(([e,t])=>[t,e]),b)}" class="vertical-test-curve" />`}function E(){let e=Number(x.value);n(document.querySelector(`#vertical-test-equation`),w[S]);let t=[],r=!1,a=``;if(S===`line`)t=[.7*e],r=!0,a=`Every vertical line meets a nonvertical line at most once.`;else if(S===`parabola`)t=[e**2],r=!0,a=`Every x-value selects exactly one point on the parabola.`;else if(S===`circle`){let n=9-e**2;t=i(n,0)?[0]:n>0?[Math.sqrt(n),-Math.sqrt(n)]:[],a=t.length===2?`This line proves the circle fails: one input reaches two outputs.`:t.length===1?`This tangent line passes, but lines between −3 and 3 meet the circle twice.`:`This line misses the circle, but lines between −3 and 3 meet it twice.`}else t=i(e,0)?[0]:e>0?[Math.sqrt(e),-Math.sqrt(e)]:[],a=t.length===2?`This line proves the sideways parabola fails: one input reaches two outputs.`:`This line passes, but every x > 0 produces two intersections.`;document.querySelector(`#vertical-test-chart`).innerHTML=`
    ${p(b)}
    ${T(S)}
    <line x1="${b.x(e)}" y1="${b.top}" x2="${b.x(e)}" y2="${b.bottom}" class="vertical-scan-line" />
    ${t.filter(e=>e>=b.yMin&&e<=b.yMax).map(t=>`<circle cx="${b.x(e)}" cy="${b.y(t)}" r="9" class="vertical-intersection" />`).join(``)}
  `,document.querySelector(`#vertical-x-output`).textContent=d(e);let o=t.length<=1;document.querySelector(`#vertical-count`).textContent=`${t.length} intersection${t.length===1?``:`s`} here · this line ${o?`passes`:`fails`}`;let s=S===`sideways`?`The sideways parabola`:`The ${S}`;document.querySelector(`#vertical-verdict`).textContent=r?`${s} is a function of x`:`${s} is not a function of x`,document.querySelector(`#vertical-reason`).textContent=a}document.querySelectorAll(`[data-test-curve]`).forEach(e=>e.addEventListener(`click`,()=>{S=e.dataset.testCurve;let t=C[S];x.min=t.min,x.max=t.max,x.value=t.value,document.querySelectorAll(`[data-test-curve]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),E()})),x.addEventListener(`input`,E),E();var D=f({width:620,height:620,padding:25,xMin:-4,xMax:3,yMin:-3,yMax:4,equalScale:!0}),O=`one`;function k(){let e=e=>`reader-curve ${O===e?`is-highlight`:``}`;document.querySelector(`#reader-chart`).innerHTML=`
    ${p(D)}
    <path d="${m([[-3,-2],[-1,-2]],D)}" class="${e(`one`)}" />
    <path d="${m([[-1,0],[0,2]],D)}" class="${e(`two`)}" />
    <path d="${m([[0,2],[2,3]],D)}" class="${e(`three`)}" />
    ${g(D,-3,-2,!0)}
    ${g(D,-1,-2,!0)}
    ${g(D,-1,0,!1)}
    ${g(D,0,2,!0)}
    ${g(D,2,3,!0)}
  `}document.querySelectorAll(`[data-reader-branch]`).forEach(e=>e.addEventListener(`click`,()=>{O=e.dataset.readerBranch,document.querySelectorAll(`[data-reader-branch]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),k()})),k();var A=f({width:500,height:500,padding:27.5,xMin:-7,xMax:7,yMin:-7,yMax:7}),j=`lower-left`,M={"upper-left":{sign:1,start:-6,end:0,direction:`Upper selects + · left restricts x ≤ 0`,formulaTex:String.raw`f(x)=\sqrt{36-x^2}`,domainTex:String.raw`[-6,0]`,rangeTex:String.raw`[0,6]`},"upper-right":{sign:1,start:0,end:6,direction:`Upper selects + · right restricts x ≥ 0`,formulaTex:String.raw`f(x)=\sqrt{36-x^2}`,domainTex:String.raw`[0,6]`,rangeTex:String.raw`[0,6]`},"lower-left":{sign:-1,start:-6,end:0,direction:`Lower selects − · left restricts x ≤ 0`,formulaTex:String.raw`f(x)=-\sqrt{36-x^2}`,domainTex:String.raw`[-6,0]`,rangeTex:String.raw`[-6,0]`},"lower-right":{sign:-1,start:0,end:6,direction:`Lower selects − · right restricts x ≥ 0`,formulaTex:String.raw`f(x)=-\sqrt{36-x^2}`,domainTex:String.raw`[0,6]`,rangeTex:String.raw`[-6,0]`}};function N(){let r=M[j],i=h(r.start,r.end,e=>r.sign*Math.sqrt(Math.max(0,36-e**2)),.06);document.querySelector(`#circle-branch-chart`).innerHTML=`
    ${p(A)}
    <circle cx="${A.x(0)}" cy="${A.y(0)}" r="${A.x(6)-A.x(0)}" class="quarter-circle-guide" />
    <path d="${m(i,A)}" class="quarter-circle-selected" />
    ${g(A,r.start,r.sign*Math.sqrt(Math.max(0,36-r.start**2)),!0)}
    ${g(A,r.end,r.sign*Math.sqrt(Math.max(0,36-r.end**2)),!0)}
  `,document.querySelectorAll(`[data-quarter]`).forEach(e=>e.classList.toggle(`is-active`,e.dataset.quarter===j)),document.querySelector(`#quarter-direction`).textContent=r.direction,n(document.querySelector(`#quarter-formula`),r.formulaTex);let a=document.querySelector(`#quarter-domain`);a.innerHTML=`Domain: ${t(r.domainTex)} · Range: ${t(r.rangeTex)}`,e(a)}document.querySelectorAll(`[data-quarter]`).forEach(e=>e.addEventListener(`click`,()=>{j=e.dataset.quarter,N()})),N();var P=f({width:680,height:495,padding:25,xMin:-8,xMax:9,yMin:-6,yMax:6,equalScale:!0}),F=document.querySelector(`#reconstruction-a-chart`),I=document.querySelector(`#reconstruction-b-chart`);function L(){let e=h(-4,4,e=>Math.sqrt(Math.max(0,16-e**2)),.05),t=h(4,9,e=>1-e/2,.08);F.innerHTML=`
    ${p(P)}
    <path d="${m([[-7,-2],[-4,-2]],P)}" class="reconstruction-curve reconstruction-curve--one" />
    <path d="${m(e,P)}" class="reconstruction-curve reconstruction-curve--two" />
    <path d="${m(t,P)}" class="reconstruction-curve reconstruction-curve--three" />
    ${g(P,-7,-2,!0)}
    ${g(P,-4,-2,!0)}
    ${g(P,-4,0,!1)}
    ${g(P,4,0,!0)}
    ${g(P,4,-1,!1)}
    ${g(P,6,-2,!0)}
  `,I.innerHTML=`
    ${p(P)}
    <path d="${m([[-5,3],[-2,3]],P)}" class="reconstruction-curve reconstruction-curve--one" />
    <path d="${m([[-2,-4],[4,5]],P)}" class="reconstruction-curve reconstruction-curve--two" />
    <path d="${m([[4,-5],[8,-5]],P)}" class="reconstruction-curve reconstruction-curve--three" />
    ${g(P,-5,3,!1)}
    ${g(P,-2,3,!1)}
    ${g(P,-2,-4,!0)}
    ${g(P,4,5,!1)}
    ${g(P,4,-5,!1)}
    ${g(P,8,-5,!0)}
  `}L(),document.querySelectorAll(`[data-reconstruction-tab]`).forEach(e=>e.addEventListener(`click`,()=>{let t=e.dataset.reconstructionTab;document.querySelectorAll(`[data-reconstruction-tab]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),document.querySelectorAll(`[data-reconstruction-panel]`).forEach(e=>{e.hidden=e.dataset.reconstructionPanel!==t})}));var R=document.querySelector(`#reconstruction-a-x`);function z(){let e=Number(R.value),t,n;e>=-7&&e<=-4?(t=-2,n=`constant piece`):e>-4&&e<=4?(t=Math.sqrt(16-e**2),n=`upper semicircle`):(t=1-e/2,n=`descending ray`),document.querySelector(`#reconstruction-a-x-output`).textContent=d(e),document.querySelector(`#reconstruction-a-output`).textContent=`p(${d(e)}) = ${d(t)} · ${n}`}R.addEventListener(`input`,z),z();var B=document.querySelector(`#reconstruction-b-x`);function V(){let e=Number(B.value),t=`g(${d(e)}) is undefined · no filled point`;e>-5&&e<-2?t=`g(${d(e)}) = 3 · upper constant piece`:e>=-2&&e<4?t=`g(${d(e)}) = ${d(1.5*e-1)} · rising line`:e>4&&e<=8&&(t=`g(${d(e)}) = −5 · lower constant piece`),document.querySelector(`#reconstruction-b-x-output`).textContent=d(e),document.querySelector(`#reconstruction-b-output`).textContent=t}B.addEventListener(`input`,V),V(),document.querySelector(`#check-functions`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-vlt`).value===`correct`&&document.querySelector(`#check-quarter`).value===`correct`;c(document.querySelector(`#feedback-functions`),e,e?`Correct. A full circle fails the vertical-line test; the lower-left quarter uses the negative branch on −6 ≤ x ≤ 0.`:`A full circle gives two y-values for many x-values. Lower means the negative square root, and left means x ≤ 0.`)}),document.querySelector(`#check-a`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-a-domain`).value===`correct`&&document.querySelector(`#check-a-range`).value===`correct`&&i(Number(document.querySelector(`#check-a-change`).value),2);c(document.querySelector(`#feedback-a-graph`),e,e?`Correct. The ray continues right forever, its outputs fall below −1, and p(4) − p(−4) = 0 − (−2) = 2.`:`Use the ray’s arrow for infinity, preserve the gap between −1 and 0 in the range, and compute final output minus initial output.`)}),document.querySelector(`#check-b-values`).addEventListener(`click`,()=>{let e=i(Number(document.querySelector(`#check-b-negative-two`).value),-4)&&document.querySelector(`#check-b-four`).value===`correct`&&i(Number(document.querySelector(`#check-b-change`).value),-4);c(document.querySelector(`#feedback-b-values`),e,e?`Correct. The filled point gives g(−2) = −4, both x = 4 points are open, and g(0) − g(−4) = −1 − 3 = −4.`:`At a shared x-value, use the filled point. At x = 4 both visible points are open. Net change is g(0) − g(−4).`)}),document.querySelector(`#check-b-sets`).addEventListener(`click`,()=>{let e=[`#check-b-domain`,`#check-b-range`,`#check-b-rule`].every(e=>document.querySelector(e).value===`correct`);c(document.querySelector(`#feedback-b-sets`),e,e?`Correct. The domain excludes −5 and 4, includes 8, and the rising segment has slope 3/2 with y-intercept −1.`:`Project onto the x-axis for domain and y-axis for range. For the middle line, slope = (5−(−4))/(4−(−2)) = 3/2.`)}),s();