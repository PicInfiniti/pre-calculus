import"./modulepreload-polyfill-P2Xu9kJm.js";/* empty css               */import{a as e,i as t,n,o as r,r as i,s as a}from"./shared-D3KyS0cy.js";var o=document.querySelector(`#app`);o.innerHTML=`
  ${r(`2.2`)}
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
          <svg id="family-chart" viewBox="0 0 620 420" role="img" aria-label="Graph of the selected parent function"></svg>
          <div class="family-library__copy" aria-live="polite">
            <p class="tool-label" id="family-name">Constant function</p>
            <h3 id="family-formula">f(x) = 2</h3>
            <dl>
              <div><dt>Domain</dt><dd id="family-domain">(−∞, ∞)</dd></div>
              <div><dt>Range</dt><dd id="family-range">{2}</dd></div>
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
          <svg id="reader-chart" viewBox="0 0 620 440" role="img" aria-label="Three-piece function with open and closed endpoints"></svg>
        </div>
        <div class="graph-reader__copy">
          <p class="tool-label">Branch inspector</p>
          <h3>Trace one piece at a time.</h3>
          <div class="reader-branches">
            <button type="button" class="is-active" data-reader-branch="one"><strong>−2</strong><span>−3 ≤ x ≤ −1</span></button>
            <button type="button" data-reader-branch="two"><strong>2x + 2</strong><span>−1 &lt; x ≤ 0</span></button>
            <button type="button" data-reader-branch="three"><strong>x/2 + 2</strong><span>0 &lt; x ≤ 2</span></button>
          </div>
          <div class="reader-facts">
            <article><span>Domain</span><strong>[−3, 2]</strong></article>
            <article><span>Range</span><strong>{−2} ∪ (0, 3]</strong></article>
          </div>
          <div class="reader-net-change">
            <span>Net change from x = 0 to x = 2</span>
            <strong>f(2) − f(0) = 3 − 2 = 1</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="circle-branches">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Select one branch</p>
        <h2>A circle becomes a function<br>when you choose a piece.</h2>
        <p>Solving x² + y² = 36 for y gives two signs. Geometry chooses the sign; the requested left or right side restricts the domain.</p>
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
            <strong id="quarter-formula">f(x) = −√(36 − x²)</strong>
            <p id="quarter-domain">Domain: [−6, 0] · Range: [−6, 0]</p>
          </div>
          <ol>
            <li><span>1</span><p>Isolate y²: y² = 36 − x².</p></li>
            <li><span>2</span><p>Take both branches: y = ±√(36 − x²).</p></li>
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
            <svg id="reconstruction-a-chart" viewBox="0 0 680 470" role="img" aria-label="Piecewise graph with a constant segment, upper semicircle, and descending ray"></svg>
          </div>
          <div class="reconstruction-copy">
            <p class="tool-label">Constant · semicircle · ray</p>
            <h3>p(x) =</h3>
            <div class="reconstruction-rules">
              <span><strong>−2</strong><i>if −7 ≤ x ≤ −4</i></span>
              <span><strong>√(16 − x²)</strong><i>if −4 &lt; x ≤ 4</i></span>
              <span><strong>1 − x/2</strong><i>if x &gt; 4</i></span>
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
            <svg id="reconstruction-b-chart" viewBox="0 0 680 470" role="img" aria-label="Piecewise graph with two horizontal segments and a rising line"></svg>
          </div>
          <div class="reconstruction-copy">
            <p class="tool-label">Open points change everything</p>
            <h3>g(x) =</h3>
            <div class="reconstruction-rules">
              <span><strong>3</strong><i>if −5 &lt; x &lt; −2</i></span>
              <span><strong>3x/2 − 1</strong><i>if −2 ≤ x &lt; 4</i></span>
              <span><strong>−5</strong><i>if 4 &lt; x ≤ 8</i></span>
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
  ${e({previous:{href:`pages/sections/2-1.html`,label:`Section 2.1 · Functions`},next:{href:`pages/sections/2-3.html`,label:`Section 2.3 · Getting information from graphs`}})}
`;function s(e){let t=n(e);return t.startsWith(`-`)?`−${t.slice(1)}`:t}function c({width:e=620,height:t=420,padding:n=44,xMin:r=-5,xMax:i=5,yMin:a=-5,yMax:o=5}){return{width:e,height:t,padding:n,xMin:r,xMax:i,yMin:a,yMax:o,x:t=>n+(t-r)/(i-r)*(e-2*n),y:e=>t-n-(e-a)/(o-a)*(t-2*n)}}function l(e,{labels:t=!0}={}){let n=[];for(let r=Math.ceil(e.xMin);r<=Math.floor(e.xMax);r+=1)n.push(`<line x1="${e.x(r)}" y1="${e.padding}" x2="${e.x(r)}" y2="${e.height-e.padding}" class="graph-grid-line" />`),t&&r!==0&&r%2==0&&n.push(`<text x="${e.x(r)}" y="${e.y(0)+20}" text-anchor="middle" class="graph-grid-label">${s(r)}</text>`);for(let r=Math.ceil(e.yMin);r<=Math.floor(e.yMax);r+=1)n.push(`<line x1="${e.padding}" y1="${e.y(r)}" x2="${e.width-e.padding}" y2="${e.y(r)}" class="graph-grid-line" />`),t&&r!==0&&r%2==0&&n.push(`<text x="${e.x(0)+9}" y="${e.y(r)-6}" class="graph-grid-label">${s(r)}</text>`);return n.push(`<line x1="${e.padding}" y1="${e.y(0)}" x2="${e.width-e.padding}" y2="${e.y(0)}" class="graph-axis-line" />`),n.push(`<line x1="${e.x(0)}" y1="${e.padding}" x2="${e.x(0)}" y2="${e.height-e.padding}" class="graph-axis-line" />`),n.join(``)}function u(e,t){return e.map(([e,n],r)=>`${r===0?`M`:`L`}${t.x(e)} ${t.y(n)}`).join(` `)}function d(e,t,n,r=.08){let i=[];for(let a=e;a<=t+r/2;a+=r)i.push([a,n(a)]);return i}function f(e,t,n,r=!0,i=``){return`<circle cx="${e.x(t)}" cy="${e.y(n)}" r="8" class="graph-endpoint ${r?`is-closed`:`is-open`} ${i}" />`}var p=c({width:620,height:420,padding:48}),m={constant:{name:`Constant function`,formula:`f(x) = 2`,domain:`(−∞, ∞)`,range:`{2}`,clue:`A horizontal line: every input returns the same output.`,segments:[[[-5,2],[5,2]]]},identity:{name:`Identity function`,formula:`f(x) = x`,domain:`(−∞, ∞)`,range:`(−∞, ∞)`,clue:`A line through the origin with slope 1: output equals input.`,segments:[d(-5,5,e=>e)]},absolute:{name:`Absolute-value function`,formula:`f(x) = |x|`,domain:`(−∞, ∞)`,range:`[0, ∞)`,clue:`A V-shape with its vertex at the origin and y-axis symmetry.`,segments:[d(-5,5,e=>Math.abs(e))]},quadratic:{name:`Quadratic function`,formula:`f(x) = x²`,domain:`(−∞, ∞)`,range:`[0, ∞)`,clue:`A U-shaped parabola with a minimum at the origin.`,segments:[d(-Math.sqrt(5),Math.sqrt(5),e=>e**2)]},cubic:{name:`Cubic function`,formula:`f(x) = x³`,domain:`(−∞, ∞)`,range:`(−∞, ∞)`,clue:`An increasing S-curve with origin symmetry.`,segments:[d(-Math.cbrt(5),Math.cbrt(5),e=>e**3)]},"square-root":{name:`Square-root function`,formula:`f(x) = √x`,domain:`[0, ∞)`,range:`[0, ∞)`,clue:`Begins at the origin and moves right only, rising more slowly.`,segments:[d(0,5,e=>Math.sqrt(e))]},"cube-root":{name:`Cube-root function`,formula:`f(x) = ³√x`,domain:`(−∞, ∞)`,range:`(−∞, ∞)`,clue:`A sideways S-curve that passes through the origin.`,segments:[d(-5,5,e=>Math.cbrt(e))]},reciprocal:{name:`Reciprocal function`,formula:`f(x) = 1/x`,domain:`(−∞, 0) ∪ (0, ∞)`,range:`(−∞, 0) ∪ (0, ∞)`,clue:`Two branches in opposite quadrants; both axes are asymptotes.`,segments:[d(-5,-.2,e=>1/e),d(.2,5,e=>1/e)]},"reciprocal-square":{name:`Reciprocal-squared function`,formula:`f(x) = 1/x²`,domain:`(−∞, 0) ∪ (0, ∞)`,range:`(0, ∞)`,clue:`Two positive branches mirrored across the y-axis.`,segments:[d(-5,-Math.sqrt(.2),e=>1/e**2),d(Math.sqrt(.2),5,e=>1/e**2)]}};function h(e){let t=m[e];document.querySelectorAll(`[data-family]`).forEach(t=>t.classList.toggle(`is-active`,t.dataset.family===e)),document.querySelector(`#family-chart`).innerHTML=`
    ${l(p)}
    ${t.segments.map(e=>`<path d="${u(e,p)}" class="family-curve" />`).join(``)}
  `,document.querySelector(`#family-name`).textContent=t.name,document.querySelector(`#family-formula`).textContent=t.formula,document.querySelector(`#family-domain`).textContent=t.domain,document.querySelector(`#family-range`).textContent=t.range,document.querySelector(`#family-clue`).textContent=t.clue}document.querySelectorAll(`[data-family]`).forEach(e=>e.addEventListener(`click`,()=>h(e.dataset.family))),h(`constant`);var g=c({width:500,height:500,padding:50}),_=document.querySelector(`#vertical-x`),v=`circle`,y={line:{min:-5,max:5,value:1},parabola:{min:-2,max:2,value:1},circle:{min:-5,max:5,value:1},sideways:{min:-1,max:5,value:1}};function b(e){return e===`line`?`<path d="${u([[-5,-3.5],[5,3.5]],g)}" class="vertical-test-curve" />`:e===`parabola`?`<path d="${u(d(-Math.sqrt(5),Math.sqrt(5),e=>e**2),g)}" class="vertical-test-curve" />`:e===`circle`?`<circle cx="${g.x(0)}" cy="${g.y(0)}" r="${g.x(3)-g.x(0)}" class="vertical-test-curve" />`:`<path d="${u(d(-Math.sqrt(5),Math.sqrt(5),e=>e**2).map(([e,t])=>[t,e]),g)}" class="vertical-test-curve" />`}function x(){let e=Number(_.value),n=[],r=!1,i=``;if(v===`line`)n=[.7*e],r=!0,i=`Every vertical line meets a nonvertical line at most once.`;else if(v===`parabola`)n=[e**2],r=!0,i=`Every x-value selects exactly one point on the parabola.`;else if(v===`circle`){let r=9-e**2;n=t(r,0)?[0]:r>0?[Math.sqrt(r),-Math.sqrt(r)]:[],i=n.length===2?`This line proves the circle fails: one input reaches two outputs.`:n.length===1?`This tangent line passes, but lines between −3 and 3 meet the circle twice.`:`This line misses the circle, but lines between −3 and 3 meet it twice.`}else n=t(e,0)?[0]:e>0?[Math.sqrt(e),-Math.sqrt(e)]:[],i=n.length===2?`This line proves the sideways parabola fails: one input reaches two outputs.`:`This line passes, but every x > 0 produces two intersections.`;document.querySelector(`#vertical-test-chart`).innerHTML=`
    ${l(g)}
    ${b(v)}
    <line x1="${g.x(e)}" y1="${g.padding}" x2="${g.x(e)}" y2="${g.height-g.padding}" class="vertical-scan-line" />
    ${n.filter(e=>e>=g.yMin&&e<=g.yMax).map(t=>`<circle cx="${g.x(e)}" cy="${g.y(t)}" r="9" class="vertical-intersection" />`).join(``)}
  `,document.querySelector(`#vertical-x-output`).textContent=s(e);let a=n.length<=1;document.querySelector(`#vertical-count`).textContent=`${n.length} intersection${n.length===1?``:`s`} here · this line ${a?`passes`:`fails`}`;let o=v===`sideways`?`The sideways parabola`:`The ${v}`;document.querySelector(`#vertical-verdict`).textContent=r?`${o} is a function of x`:`${o} is not a function of x`,document.querySelector(`#vertical-reason`).textContent=i}document.querySelectorAll(`[data-test-curve]`).forEach(e=>e.addEventListener(`click`,()=>{v=e.dataset.testCurve;let t=y[v];_.min=t.min,_.max=t.max,_.value=t.value,document.querySelectorAll(`[data-test-curve]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),x()})),_.addEventListener(`input`,x),x();var S=c({width:620,height:440,padding:50,xMin:-4,xMax:3,yMin:-3,yMax:4}),C=`one`;function w(){let e=e=>`reader-curve ${C===e?`is-highlight`:``}`;document.querySelector(`#reader-chart`).innerHTML=`
    ${l(S)}
    <path d="${u([[-3,-2],[-1,-2]],S)}" class="${e(`one`)}" />
    <path d="${u([[-1,0],[0,2]],S)}" class="${e(`two`)}" />
    <path d="${u([[0,2],[2,3]],S)}" class="${e(`three`)}" />
    ${f(S,-3,-2,!0)}
    ${f(S,-1,-2,!0)}
    ${f(S,-1,0,!1)}
    ${f(S,0,2,!0)}
    ${f(S,2,3,!0)}
  `}document.querySelectorAll(`[data-reader-branch]`).forEach(e=>e.addEventListener(`click`,()=>{C=e.dataset.readerBranch,document.querySelectorAll(`[data-reader-branch]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),w()})),w();var T=c({width:500,height:500,padding:55,xMin:-7,xMax:7,yMin:-7,yMax:7}),E=`lower-left`,D={"upper-left":{sign:1,start:-6,end:0,direction:`Upper selects + · left restricts x ≤ 0`,formula:`f(x) = √(36 − x²)`,domain:`Domain: [−6, 0] · Range: [0, 6]`},"upper-right":{sign:1,start:0,end:6,direction:`Upper selects + · right restricts x ≥ 0`,formula:`f(x) = √(36 − x²)`,domain:`Domain: [0, 6] · Range: [0, 6]`},"lower-left":{sign:-1,start:-6,end:0,direction:`Lower selects − · left restricts x ≤ 0`,formula:`f(x) = −√(36 − x²)`,domain:`Domain: [−6, 0] · Range: [−6, 0]`},"lower-right":{sign:-1,start:0,end:6,direction:`Lower selects − · right restricts x ≥ 0`,formula:`f(x) = −√(36 − x²)`,domain:`Domain: [0, 6] · Range: [−6, 0]`}};function O(){let e=D[E],t=d(e.start,e.end,t=>e.sign*Math.sqrt(Math.max(0,36-t**2)),.06);document.querySelector(`#circle-branch-chart`).innerHTML=`
    ${l(T)}
    <circle cx="${T.x(0)}" cy="${T.y(0)}" r="${T.x(6)-T.x(0)}" class="quarter-circle-guide" />
    <path d="${u(t,T)}" class="quarter-circle-selected" />
    ${f(T,e.start,e.sign*Math.sqrt(Math.max(0,36-e.start**2)),!0)}
    ${f(T,e.end,e.sign*Math.sqrt(Math.max(0,36-e.end**2)),!0)}
  `,document.querySelectorAll(`[data-quarter]`).forEach(e=>e.classList.toggle(`is-active`,e.dataset.quarter===E)),document.querySelector(`#quarter-direction`).textContent=e.direction,document.querySelector(`#quarter-formula`).textContent=e.formula,document.querySelector(`#quarter-domain`).textContent=e.domain}document.querySelectorAll(`[data-quarter]`).forEach(e=>e.addEventListener(`click`,()=>{E=e.dataset.quarter,O()})),O();var k=c({width:680,height:470,padding:50,xMin:-8,xMax:9,yMin:-6,yMax:6}),A=document.querySelector(`#reconstruction-a-chart`),j=document.querySelector(`#reconstruction-b-chart`);function M(){let e=d(-4,4,e=>Math.sqrt(Math.max(0,16-e**2)),.05),t=d(4,9,e=>1-e/2,.08);A.innerHTML=`
    ${l(k)}
    <path d="${u([[-7,-2],[-4,-2]],k)}" class="reconstruction-curve reconstruction-curve--one" />
    <path d="${u(e,k)}" class="reconstruction-curve reconstruction-curve--two" />
    <path d="${u(t,k)}" class="reconstruction-curve reconstruction-curve--three" />
    ${f(k,-7,-2,!0)}
    ${f(k,-4,-2,!0)}
    ${f(k,-4,0,!1)}
    ${f(k,4,0,!0)}
    ${f(k,4,-1,!1)}
    ${f(k,6,-2,!0)}
  `,j.innerHTML=`
    ${l(k)}
    <path d="${u([[-5,3],[-2,3]],k)}" class="reconstruction-curve reconstruction-curve--one" />
    <path d="${u([[-2,-4],[4,5]],k)}" class="reconstruction-curve reconstruction-curve--two" />
    <path d="${u([[4,-5],[8,-5]],k)}" class="reconstruction-curve reconstruction-curve--three" />
    ${f(k,-5,3,!1)}
    ${f(k,-2,3,!1)}
    ${f(k,-2,-4,!0)}
    ${f(k,4,5,!1)}
    ${f(k,4,-5,!1)}
    ${f(k,8,-5,!0)}
  `}M(),document.querySelectorAll(`[data-reconstruction-tab]`).forEach(e=>e.addEventListener(`click`,()=>{let t=e.dataset.reconstructionTab;document.querySelectorAll(`[data-reconstruction-tab]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),document.querySelectorAll(`[data-reconstruction-panel]`).forEach(e=>{e.hidden=e.dataset.reconstructionPanel!==t})}));var N=document.querySelector(`#reconstruction-a-x`);function P(){let e=Number(N.value),t,n;e>=-7&&e<=-4?(t=-2,n=`constant piece`):e>-4&&e<=4?(t=Math.sqrt(16-e**2),n=`upper semicircle`):(t=1-e/2,n=`descending ray`),document.querySelector(`#reconstruction-a-x-output`).textContent=s(e),document.querySelector(`#reconstruction-a-output`).textContent=`p(${s(e)}) = ${s(t)} · ${n}`}N.addEventListener(`input`,P),P();var F=document.querySelector(`#reconstruction-b-x`);function I(){let e=Number(F.value),t=`g(${s(e)}) is undefined · no filled point`;e>-5&&e<-2?t=`g(${s(e)}) = 3 · upper constant piece`:e>=-2&&e<4?t=`g(${s(e)}) = ${s(1.5*e-1)} · rising line`:e>4&&e<=8&&(t=`g(${s(e)}) = −5 · lower constant piece`),document.querySelector(`#reconstruction-b-x-output`).textContent=s(e),document.querySelector(`#reconstruction-b-output`).textContent=t}F.addEventListener(`input`,I),I(),document.querySelector(`#check-functions`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-vlt`).value===`correct`&&document.querySelector(`#check-quarter`).value===`correct`;a(document.querySelector(`#feedback-functions`),e,e?`Correct. A full circle fails the vertical-line test; the lower-left quarter uses the negative branch on −6 ≤ x ≤ 0.`:`A full circle gives two y-values for many x-values. Lower means the negative square root, and left means x ≤ 0.`)}),document.querySelector(`#check-a`).addEventListener(`click`,()=>{let e=document.querySelector(`#check-a-domain`).value===`correct`&&document.querySelector(`#check-a-range`).value===`correct`&&t(Number(document.querySelector(`#check-a-change`).value),2);a(document.querySelector(`#feedback-a-graph`),e,e?`Correct. The ray continues right forever, its outputs fall below −1, and p(4) − p(−4) = 0 − (−2) = 2.`:`Use the ray’s arrow for infinity, preserve the gap between −1 and 0 in the range, and compute final output minus initial output.`)}),document.querySelector(`#check-b-values`).addEventListener(`click`,()=>{let e=t(Number(document.querySelector(`#check-b-negative-two`).value),-4)&&document.querySelector(`#check-b-four`).value===`correct`&&t(Number(document.querySelector(`#check-b-change`).value),-4);a(document.querySelector(`#feedback-b-values`),e,e?`Correct. The filled point gives g(−2) = −4, both x = 4 points are open, and g(0) − g(−4) = −1 − 3 = −4.`:`At a shared x-value, use the filled point. At x = 4 both visible points are open. Net change is g(0) − g(−4).`)}),document.querySelector(`#check-b-sets`).addEventListener(`click`,()=>{let e=[`#check-b-domain`,`#check-b-range`,`#check-b-rule`].every(e=>document.querySelector(e).value===`correct`);a(document.querySelector(`#feedback-b-sets`),e,e?`Correct. The domain excludes −5 and 4, includes 8, and the rising segment has slope 3/2 with y-intercept −1.`:`Project onto the x-axis for domain and y-axis for range. For the middle line, slope = (5−(−4))/(4−(−2)) = 3/2.`)}),i();