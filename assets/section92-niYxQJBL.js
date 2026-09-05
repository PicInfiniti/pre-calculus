import"./modulepreload-polyfill-P2Xu9kJm.js";import{a as e,i as t,n,o as r,r as i,s as a}from"./shared-BTOEHt36.js";var o=document.querySelector(`#app`);o.innerHTML=`
  ${r(`9.2`)}
  <main>
    <section class="lesson-hero lesson-hero--blue">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 9.2</span> Systems in several variables</p>
        <h1>Three equations.<br><em>One shared truth.</em></h1>
        <p class="lesson-hero__lede">
          In three dimensions, each linear equation is a plane. Algebraically, the strategy
          is still familiar: eliminate one variable, solve the smaller system, then climb back.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#plane-lab">Rotate the planes</a>
          <span>About 30 minutes · interactive</span>
        </div>
      </div>
      <div class="plane-hero-art" aria-hidden="true" data-reveal>
        <span class="plane-art plane-art--one"></span>
        <span class="plane-art plane-art--two"></span>
        <span class="plane-art plane-art--three"></span>
        <span class="plane-art__point"></span>
        <div class="plane-art__equation">ax + by + cz = d</div>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Interpret a three-variable system as planes</li>
        <li><span>02</span>Eliminate the same variable twice</li>
        <li><span>03</span>Back-substitute through triangular form</li>
        <li><span>04</span>Recognize contradictions and free variables</li>
      </ol>
    </section>

    <section class="lesson-section" id="plane-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>01</span> Think in planes</p>
        <h2>The solution is what<br>all three planes share.</h2>
        <p>Drag the model to rotate it. Switch outcomes and notice what must be common to every plane.</p>
      </div>

      <div class="interactive-shell plane-lab" data-reveal>
        <div class="interactive-shell__header">
          <div><span class="live-dot"></span><p>3D plane explorer</p></div>
          <span>Drag to rotate</span>
        </div>
        <div class="plane-lab__body">
          <div class="plane-stage">
            <canvas id="plane-canvas" role="img" aria-label="Interactive three-dimensional model of three planes"></canvas>
            <div class="plane-stage__hint" aria-hidden="true">↔ drag</div>
          </div>
          <div class="plane-controls">
            <div class="plane-presets" aria-label="Plane intersection outcomes">
              <button type="button" class="is-active" data-plane-preset="point"><span class="preset-swatch preset-swatch--point"></span>One shared point</button>
              <button type="button" data-plane-preset="line"><span class="preset-swatch preset-swatch--line"></span>A shared line</button>
              <button type="button" data-plane-preset="none"><span class="preset-swatch preset-swatch--none"></span>No shared point</button>
            </div>
            <div class="plane-result" id="plane-result" aria-live="polite">
              <span>One solution</span>
              <h3>All three planes meet at one point.</h3>
              <p>Algebraically, elimination eventually produces a pivot for x, y, and z.</p>
            </div>
            <div class="plane-key"><span><i></i>Plane 1</span><span><i></i>Plane 2</span><span><i></i>Plane 3</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="elimination-studio">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> The elimination funnel</p>
        <h2>Three variables become two.<br>Then two become one.</h2>
        <p>Choose one variable and eliminate that same variable from two different equation pairs.</p>
      </div>

      <div class="funnel" data-reveal>
        <div class="funnel__stage funnel__stage--three">
          <span>Original system</span>
          <div class="numbered-system">
            <p><i class="eq-number">1</i> 3x + 2y − z = −7</p>
            <p><i class="eq-number">2</i> 6x − y + 3z = −4</p>
            <p><i class="eq-number">3</i> x + 10y − 2z = 2</p>
          </div>
        </div>
        <div class="funnel__arrow"><span>Eliminate z twice</span>↓</div>
        <div class="funnel__stage funnel__stage--two">
          <span>Two-variable system</span>
          <div class="numbered-system">
            <p>3<i class="eq-number">1</i> + <i class="eq-number">2</i> → 15x + 5y = −25</p>
            <p>2<i class="eq-number">1</i> − <i class="eq-number">3</i> → 5x − 6y = −16</p>
          </div>
        </div>
        <div class="funnel__arrow"><span>Simplify and solve</span>↓</div>
        <div class="funnel__stage funnel__stage--one">
          <span>Shared point</span>
          <strong>(x, y, z) = (−2, 1, 3)</strong>
          <p>Verify it in all three original equations.</p>
        </div>
      </div>

      <div class="elimination-rules" data-reveal>
        <article><span>1</span><div><h3>Pick a target</h3><p>Choose the variable with the friendliest coefficients.</p></div></article>
        <article><span>2</span><div><h3>Use two pairs</h3><p>Eliminate that same variable from two different pairs.</p></div></article>
        <article><span>3</span><div><h3>Keep the equations independent</h3><p>Using equivalent pairs can accidentally reproduce the same equation.</p></div></article>
      </div>
    </section>

    <section class="lesson-section" id="problem-c-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Practice the exact move</p>
        <h2>Eliminate z from<br>the practice system.</h2>
        <p>Enter the coefficients of each new two-variable equation. The multipliers are shown; you perform the combination.</p>
      </div>

      <div class="elimination-studio" data-reveal>
        <div class="studio-source">
          <div class="tool-label">Elimination practice</div>
          <div class="numbered-system numbered-system--large">
            <p><i class="eq-number">1</i> 3x − 2y + 9z = 2</p>
            <p><i class="eq-number">2</i> −2x − 5y − 4z = 3</p>
            <p><i class="eq-number">3</i> 5x − 3y + 3z = 15</p>
          </div>
          <p class="studio-tip"><strong>Keep your equation balanced:</strong> every multiplier applies to every term and to the constant.</p>
        </div>
        <div class="studio-combinations">
          <article class="combination-card">
            <span>Replace Equation 3</span>
            <h3>3<i class="eq-number">3</i> − <i class="eq-number">1</i></h3>
            <div class="coefficient-answer">
              <label><span class="sr-only">x coefficient</span><input id="c3x" type="number" />x</label>
              <span>+</span>
              <label><span class="sr-only">y coefficient</span><input id="c3y" type="number" />y</label>
              <span>=</span>
              <label><span class="sr-only">constant</span><input id="c3c" type="number" /></label>
            </div>
            <button type="button" data-check-combination="c3">Check Equation 3</button>
            <p id="feedback-c3" class="answer-feedback" aria-live="polite"></p>
          </article>
          <article class="combination-card">
            <span>Replace Equation 2</span>
            <h3>9<i class="eq-number">2</i> + 4<i class="eq-number">1</i></h3>
            <div class="coefficient-answer">
              <label><span class="sr-only">x coefficient</span><input id="c2x" type="number" />x</label>
              <span>+</span>
              <label><span class="sr-only">y coefficient</span><input id="c2y" type="number" />y</label>
              <span>=</span>
              <label><span class="sr-only">constant</span><input id="c2c" type="number" /></label>
            </div>
            <button type="button" data-check-combination="c2">Check Equation 2</button>
            <p id="feedback-c2" class="answer-feedback" aria-live="polite"></p>
          </article>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="triangular-form">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Climb back up</p>
        <h2>Triangular form is<br>a solved system in disguise.</h2>
        <p>Begin with the equation containing one variable, then substitute upward one row at a time.</p>
      </div>

      <div class="triangle-lab" data-reveal>
        <div class="triangle-system" aria-label="Triangular system">
          <div><span>2x − y + 6z = 5</span><i>three variables</i></div>
          <div><span>y + 4z = 0</span><i>two variables</i></div>
          <div><span>−2z = 1</span><i>one variable</i></div>
        </div>
        <div class="back-substitution">
          <label>Start at the bottom: z = <input id="triangle-z" type="number" step="0.5" /></label>
          <label>Substitute upward: y = <input id="triangle-y" type="number" step="0.5" /></label>
          <label>Finish at the top: x = <input id="triangle-x" type="number" step="0.5" /></label>
          <button type="button" id="check-triangle">Check all three</button>
          <p id="feedback-triangle" class="answer-feedback" aria-live="polite"></p>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="special-cases">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>05</span> Read the final row</p>
        <h2>A zero row is<br>not automatically bad.</h2>
        <p>The right side determines whether a zero row means freedom or contradiction.</p>
      </div>

      <div class="zero-row-grid" data-reveal>
        <article class="zero-card zero-card--free"><span>0 = 0</span><h3>True for every value</h3><p>The row was redundant. At least one variable may be free, producing infinitely many solutions.</p></article>
        <article class="zero-card zero-card--stop"><span>0 = 7</span><h3>Never true</h3><p>The equations contradict one another. The system has no solution.</p></article>
      </div>

      <div class="parameter-line" data-reveal>
        <div class="parameter-line__copy">
          <div class="tool-label">Free-variable practice</div>
          <div class="numbered-system numbered-system--large">
            <p>5x + y − 2z = 10</p>
            <p>y + 3z = 5</p>
            <p>0 = 0</p>
          </div>
          <label for="classification-d">Classify the system</label>
          <select id="classification-d"><option value="">Choose…</option><option value="none">No solution</option><option value="one">One solution</option><option value="infinite">Infinitely many</option></select>
          <button type="button" id="check-d">Check classification</button>
          <p id="feedback-d" class="answer-feedback" aria-live="polite"></p>
        </div>
        <div class="parameter-line__visual">
          <span>Let z = t</span>
          <label for="parameter-t">Move t <output id="parameter-t-output">0</output></label>
          <input id="parameter-t" type="range" min="-4" max="4" step="0.5" value="0" />
          <div class="solution-triple"><span>x</span><strong id="parameter-x">1</strong><span>y</span><strong id="parameter-y">5</strong><span>z</span><strong id="parameter-z">0</strong></div>
          <div class="verification"><p>5x + y − 2z = <strong id="verify-one">10</strong></p><p>y + 3z = <strong id="verify-two">5</strong></p></div>
          <p>Every t creates another solution: <strong>(x, y, z) = (1 + t, 5 − 3t, t)</strong>.</p>
        </div>
      </div>
    </section>

    <section class="lesson-section readiness readiness--blue">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>06</span> Final readiness check</p>
        <h2>Can you explain<br>the whole path?</h2>
      </div>
      <div class="path-check" data-reveal>
        <span>3 equations · 3 variables</span><i>→</i><span>2 equations · 2 variables</span><i>→</i><span>1 equation · 1 variable</span><i>→</i><span>Back-substitute</span>
      </div>
      <aside class="ready-banner ready-banner--blue" data-reveal>
        <span>You are ready when</span>
        <p>You can choose multipliers, preserve every term, interpret a zero row, and write a free-variable answer with a parameter.</p>
        <a href="#problem-c-lab">Retry the elimination studio <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${e({previous:{href:`pages/sections/9-1.html`,label:`Section 9.1 · Two variables`}})}
`;var s=new class{constructor(e){this.canvas=e,this.context=e.getContext(`2d`),this.yaw=-.65,this.pitch=.5,this.dragging=!1,this.lastPointer=null,this.preset=`point`,this.reduceMotion=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,this.visible=!0,this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e.parentElement),this.bind(),this.resize(),this.reduceMotion||this.animate()}bind(){this.canvas.addEventListener(`pointerdown`,e=>{e.preventDefault(),this.dragging=!0,this.lastPointer={x:e.clientX,y:e.clientY},this.canvas.setPointerCapture(e.pointerId)}),this.canvas.addEventListener(`pointermove`,e=>{if(!this.dragging)return;let t=e.clientX-this.lastPointer.x,n=e.clientY-this.lastPointer.y;this.yaw+=t*.008,this.pitch=Math.max(-1.1,Math.min(1.1,this.pitch+n*.008)),this.lastPointer={x:e.clientX,y:e.clientY},this.draw()}),this.canvas.addEventListener(`pointerup`,()=>{this.dragging=!1,this.lastPointer=null}),document.addEventListener(`visibilitychange`,()=>{this.visible=!document.hidden})}resize(){let e=this.canvas.parentElement.getBoundingClientRect(),t=Math.min(2,window.devicePixelRatio||1);this.width=Math.max(300,e.width),this.height=Math.max(330,e.height),this.canvas.width=this.width*t,this.canvas.height=this.height*t,this.canvas.style.width=`${this.width}px`,this.canvas.style.height=`${this.height}px`,this.context.setTransform(t,0,0,t,0,0),this.draw()}project([e,t,n]){let r=Math.cos(this.yaw),i=Math.sin(this.yaw),a=Math.cos(this.pitch),o=Math.sin(this.pitch),s=e*r-n*i,c=e*i+n*r,l=t*a-c*o,u=t*o+c*a,d=Math.min(this.width,this.height)/8;return{x:this.width/2+s*d,y:this.height/2-l*d,depth:u}}rectangle(e,t,n,r,i){let a=(e,t,n)=>e.map((e,r)=>e+t[r]*n);return{color:r,label:i,points:[a(a(e,t,-1),n,-1),a(a(e,t,1),n,-1),a(a(e,t,1),n,1),a(a(e,t,-1),n,1)]}}planes(){return this.preset===`line`?[this.rectangle([0,0,0],[2.7,0,0],[0,2.7,0],`rgba(255,107,72,.48)`,`P₁`),this.rectangle([0,0,0],[0,2.7,0],[0,0,2.7],`rgba(66,184,213,.47)`,`P₂`),this.rectangle([0,0,0],[0,2.7,0],[1.9,0,-1.9],`rgba(255,209,102,.43)`,`P₃`)]:this.preset===`none`?[this.rectangle([0,0,-.8],[2.7,0,0],[0,2.7,0],`rgba(255,107,72,.52)`,`P₁`),this.rectangle([0,0,.9],[2.7,0,0],[0,2.7,0],`rgba(66,184,213,.5)`,`P₂`),this.rectangle([0,0,0],[0,2.7,0],[0,0,2.7],`rgba(255,209,102,.43)`,`P₃`)]:[this.rectangle([0,0,0],[2.7,0,0],[0,2.7,0],`rgba(255,107,72,.48)`,`P₁`),this.rectangle([0,0,0],[0,2.7,0],[0,0,2.7],`rgba(66,184,213,.47)`,`P₂`),this.rectangle([0,0,0],[2.7,0,0],[0,0,2.7],`rgba(255,209,102,.43)`,`P₃`)]}drawLine(e,t,n=`rgba(255,255,255,.35)`,r=1){let i=this.project(e),a=this.project(t);this.context.beginPath(),this.context.moveTo(i.x,i.y),this.context.lineTo(a.x,a.y),this.context.strokeStyle=n,this.context.lineWidth=r,this.context.stroke()}draw(){let e=this.context;e.clearRect(0,0,this.width,this.height);let t=e.createRadialGradient(this.width*.5,this.height*.45,10,this.width*.5,this.height*.5,this.width*.6);t.addColorStop(0,`#12314d`),t.addColorStop(1,`#071d33`),e.fillStyle=t,e.fillRect(0,0,this.width,this.height);for(let e=-3;e<=3;e+=1)this.drawLine([-3,e,0],[3,e,0],`rgba(255,255,255,.07)`),this.drawLine([e,-3,0],[e,3,0],`rgba(255,255,255,.07)`);if(this.drawLine([-3.5,0,0],[3.5,0,0],`rgba(255,255,255,.6)`,1.5),this.drawLine([0,-3.5,0],[0,3.5,0],`rgba(255,255,255,.6)`,1.5),this.drawLine([0,0,-3.5],[0,0,3.5],`rgba(255,255,255,.6)`,1.5),this.planes().map(e=>{let t=e.points.map(e=>this.project(e));return{...e,projected:t,depth:t.reduce((e,t)=>e+t.depth,0)/t.length}}).sort((e,t)=>e.depth-t.depth).forEach(t=>{e.beginPath(),t.projected.forEach((t,n)=>n===0?e.moveTo(t.x,t.y):e.lineTo(t.x,t.y)),e.closePath(),e.fillStyle=t.color,e.fill(),e.strokeStyle=`rgba(255,255,255,.48)`,e.lineWidth=1.25,e.stroke();let n=t.projected[1];e.fillStyle=`rgba(255,255,255,.85)`,e.font=`700 13px Ubuntu, sans-serif`,e.fillText(t.label,n.x+8,n.y-6)}),this.preset===`point`){let t=this.project([0,0,0]);e.beginPath(),e.arc(t.x,t.y,7,0,Math.PI*2),e.fillStyle=`#a9df72`,e.fill(),e.strokeStyle=`#071d33`,e.lineWidth=3,e.stroke()}else this.preset===`line`&&this.drawLine([0,-3,0],[0,3,0],`#a9df72`,5)}setPreset(e){this.preset=e,this.draw()}animate(){this.visible&&!this.dragging&&(this.yaw+=.0012,this.draw()),requestAnimationFrame(()=>this.animate())}}(document.querySelector(`#plane-canvas`)),c={point:[`One solution`,`All three planes meet at one point.`,`Algebraically, elimination eventually produces a pivot for x, y, and z.`],line:[`Infinitely many solutions`,`All three planes share a line.`,`One variable remains free, so every point along the shared line is a solution.`],none:[`No solution`,`There is no point common to all three planes.`,`Elimination exposes a contradiction such as 0 = 7.`]};document.querySelectorAll(`[data-plane-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.planePreset;s.setPreset(t),document.querySelectorAll(`[data-plane-preset]`).forEach(t=>t.classList.toggle(`is-active`,t===e));let[n,r,i]=c[t];document.querySelector(`#plane-result`).innerHTML=`<span>${n}</span><h3>${r}</h3><p>${i}</p>`})});function l(e,n){let r=[`x`,`y`,`c`].map(t=>Number(document.querySelector(`#${e}${t}`).value)).every((e,r)=>t(e,n[r])),i=document.querySelector(`#feedback-${e}`);a(i,r,r?`Correct—the z terms cancel completely.`:`Recheck the multiplier on every coefficient and on the right side.`)}document.querySelector(`[data-check-combination='c3']`).addEventListener(`click`,()=>l(`c3`,[12,-7,43])),document.querySelector(`[data-check-combination='c2']`).addEventListener(`click`,()=>l(`c2`,[-6,-53,35])),document.querySelector(`#check-triangle`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#triangle-z`).value),n=Number(document.querySelector(`#triangle-y`).value),r=Number(document.querySelector(`#triangle-x`).value),i=t(e,-.5)&&t(n,2)&&t(r,5);a(document.querySelector(`#feedback-triangle`),i,i?`Correct: start with z = −1/2, then y = 2, then x = 5.`:`Work strictly bottom-up. A wrong z-value will travel into both rows above it.`)}),document.querySelector(`#check-d`).addEventListener(`click`,()=>{let e=document.querySelector(`#classification-d`).value;a(document.querySelector(`#feedback-d`),e===`infinite`,e===`infinite`?`Correct. The zero row adds no restriction, leaving z free.`:`The final row says 0 = 0, so it is redundant—not contradictory.`)});var u=document.querySelector(`#parameter-t`);function d(){let e=Number(u.value),t=1+e,r=5-3*e,i=e;document.querySelector(`#parameter-t-output`).value=n(e),document.querySelector(`#parameter-x`).textContent=n(t),document.querySelector(`#parameter-y`).textContent=n(r),document.querySelector(`#parameter-z`).textContent=n(i),document.querySelector(`#verify-one`).textContent=n(5*t+r-2*i),document.querySelector(`#verify-two`).textContent=n(r+3*i)}u.addEventListener(`input`,d),d(),i();