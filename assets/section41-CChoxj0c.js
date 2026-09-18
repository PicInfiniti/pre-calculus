import"./magnifier-B0Wyiml3.js";import{a as e,o as t,r as n,s as r}from"./shared-Cg4hcz2F.js";var i=(e,t=!1)=>`<span class="native-math${t?` native-math--display`:``}">${e}</span>`,a=(e,t)=>`<span class="native-frac"><span>${e}</span><span>${t}</span></span>`,o=e=>new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`}).format(e),s=(e,t=3)=>Number(e.toFixed(t)).toString().replace(`-`,`−`);document.querySelector(`#app`).innerHTML=`
  ${t(`4.1`)}
  <main>
    <section class="lesson-hero lesson-hero--exponentials">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 4.1</span> Exponential functions</p>
        <h1>Multiply again.<br><em>Watch the pattern grow.</em></h1>
        <p class="lesson-hero__lede">In an exponential function, the input counts repeated multiplications. A base above one grows; a base between zero and one decays. The same idea explains how interest earns more interest.</p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#base-studio">Explore the base</a>
          <span>About 35 minutes · interactive</span>
        </div>
      </div>
      <div class="exponential-hero-art" aria-hidden="true" data-reveal>
        <div class="exponential-hero-art__sheet">
          <span class="exponential-hero-art__eyebrow">Each step multiplies</span>
          <div class="exponential-hero-art__sequence"><span>1</span><i>× 2</i><span>2</span><i>× 2</i><span>4</span><i>× 2</i><span>8</span></div>
          <svg viewBox="0 0 480 235" preserveAspectRatio="xMidYMid meet">
            <path d="M32 196H452M48 214V20" class="exponential-hero-art__axis"/>
            <path d="M47 190C125 189 190 183 250 162S365 86 438 23" class="exponential-hero-art__curve"/>
            <circle cx="250" cy="162" r="7" class="exponential-hero-art__dot"/>
            <circle cx="365" cy="86" r="7" class="exponential-hero-art__dot"/>
          </svg>
          <b>Same addition to the input. Same multiplication to the output.</b>
        </div>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Evaluate positive, zero, and negative exponents</li>
        <li><span>02</span>Read growth and decay from a graph</li>
        <li><span>03</span>Explain the domain, range, and asymptote</li>
        <li><span>04</span>Build and use a compound-interest model</li>
      </ol>
    </section>

    <section class="lesson-section" id="base-studio">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>01</span> The base is the multiplier</p>
        <h2>Change the base.<br>Keep the anchor.</h2>
        <p>An exponential function has the form ${i(`<var>f</var>(<var>x</var>) = <var>b</var><sup><var>x</var></sup>`)}, where ${i(`<var>b</var> > 0`)} and ${i(`<var>b</var> ≠ 1`)}. Zero and negative inputs do not make the output zero or negative: ${i(`<var>b</var><sup>0</sup> = 1`)} and ${i(`<var>b</var><sup>−<var>m</var></sup> = ${a(`1`,`<var>b</var><sup><var>m</var></sup>`)}`)}.</p>
      </div>
      <div class="exponential-studio" data-reveal>
        <div class="exponential-studio__controls">
          <p class="tool-label">Base laboratory</p>
          <div class="exponential-studio__formula" id="base-formula"></div>
          <div class="exponential-presets" aria-label="Choose a base">
            <button type="button" data-base="4" class="is-active" aria-pressed="true">${i(`4<sup><var>x</var></sup>`)}</button>
            <button type="button" data-base="2" aria-pressed="false">${i(`2<sup><var>x</var></sup>`)}</button>
            <button type="button" data-base="0.5" aria-pressed="false">${i(`${a(`1`,`2`)}<sup><var>x</var></sup>`)}</button>
            <button type="button" data-base="0.3333333333333333" aria-pressed="false">${i(`(${a(`1`,`3`)})<sup><var>x</var></sup>`)}</button>
          </div>
          <label for="base-slider" class="exponential-range-label"><span>Adjust the base</span><output id="base-output">4</output></label>
          <input id="base-slider" type="range" min="0.25" max="4" step="0.01" value="4" />
          <p class="exponential-studio__slider-note">The slider skips 1: ${i(`1<sup><var>x</var></sup>`)} is a constant, not exponential growth or decay.</p>
          <label for="exponent-slider" class="exponential-range-label"><span>Inspect an input</span><output id="exponent-output">0</output></label>
          <input id="exponent-slider" type="range" min="-2" max="2" step="1" value="0" />
          <div class="exponential-reading" id="base-reading" aria-live="polite"></div>
        </div>
        <div class="exponential-studio__graph">
          <div class="exponential-graph-heading"><p class="tool-label">One curve, five checkpoints</p><span id="base-mode"></span></div>
          <svg id="base-chart" viewBox="0 0 660 430" role="img" aria-label="Coordinate graph of the selected exponential function"></svg>
          <div class="exponential-table-wrap">
            <table class="exponential-table" aria-label="Values of the selected exponential function">
              <thead><tr><th scope="col">Input ${i(`<var>x</var>`)}</th><th scope="col" id="value-heading">Output</th><th scope="col">Step to the next output</th></tr></thead>
              <tbody id="base-table"></tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="exponential-rule-strip" data-reveal>
        <div><span>Base above 1</span><strong>Growth</strong><p>Move right; outputs increase.</p></div>
        <div><span>Base between 0 and 1</span><strong>Decay</strong><p>Move right; outputs decrease.</p></div>
        <div><span>Base equals 1</span><strong>Excluded</strong><p>Every output would be 1.</p></div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="graph-behavior">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Read the whole graph</p>
        <h2>It approaches zero.<br>It never arrives.</h2>
        <p>Every positive base passes through ${i(`(0, 1)`)}. The curve stays above the horizontal asymptote ${i(`<var>y</var> = 0`)} and never crosses the ${i(`<var>x</var>`)}-axis. Growth and decay reverse which end approaches zero.</p>
      </div>
      <div class="exponential-passport" data-reveal>
        <div class="exponential-passport__lead">
          <p class="tool-label">Graph passport</p>
          <strong id="passport-title">Growth</strong>
          <p id="passport-copy"></p>
          <div class="exponential-passport__direction" id="passport-direction" aria-hidden="true"></div>
        </div>
        <div class="exponential-passport__facts">
          <div><span>Domain</span><strong>${i(`(−∞, ∞)`)}</strong></div>
          <div><span>Range</span><strong>${i(`(0, ∞)`)}</strong></div>
          <div><span>Horizontal asymptote</span><strong>${i(`<var>y</var> = 0`)}</strong></div>
          <div><span>Vertical asymptote</span><strong>None</strong></div>
          <div><span>${i(`<var>x</var>`)}-intercept</span><strong>None</strong></div>
          <div><span>${i(`<var>y</var>`)}-intercept</span><strong>${i(`(0, 1)`)}</strong></div>
        </div>
        <div class="exponential-passport__limits" id="passport-limits"></div>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="compounding">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Interest on interest</p>
        <h2>Each period starts<br>where the last one ended.</h2>
        <p>With an initial principal ${i(`<var>P</var>`)} and a rate ${i(`<var>i</var>`)} per period, the new balance is the old balance multiplied by ${i(`1 + <var>i</var>`)}. That repeated multiplication is an exponential function.</p>
      </div>
      <div class="exponential-derivation" data-reveal>
        <div><span>Start</span><strong>${i(`<var>P</var>`)}</strong><p>Deposit the principal.</p></div>
        <div><span>After one period</span><strong>${i(`<var>P</var>(1 + <var>i</var>)`)}</strong><p>Earn ${i(`<var>P</var><var>i</var>`)} interest.</p></div>
        <div><span>After two periods</span><strong>${i(`<var>P</var>(1 + <var>i</var>)<sup>2</sup>`)}</strong><p>Reinvest principal and interest.</p></div>
        <div><span>After ${i(`<var>k</var>`)} periods</span><strong>${i(`<var>P</var>(1 + <var>i</var>)<sup><var>k</var></sup>`)}</strong><p>The exponent counts periods.</p></div>
      </div>
      <div class="exponential-formula-card" data-reveal>
        <div><span>Annual rate</span><strong>${i(`<var>r</var>`)}</strong></div>
        <i aria-hidden="true">÷</i>
        <div><span>Periods per year</span><strong>${i(`<var>n</var>`)}</strong></div>
        <i aria-hidden="true">→</i>
        <div><span>Rate each period</span><strong>${i(`${a(`<var>r</var>`,`<var>n</var>`)}`)}</strong></div>
        <p>In ${i(`<var>t</var>`)} years there are ${i(`<var>n</var><var>t</var>`)} periods, so ${i(`<var>A</var>(<var>t</var>) = <var>P</var>(1 + ${a(`<var>r</var>`,`<var>n</var>`)})<sup><var>n</var><var>t</var></sup>`)}. Enter the annual rate as a decimal in the formula (8% is 0.08).</p>
      </div>
    </section>

    <section class="lesson-section" id="interest-lab">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>04</span> Put the model to work</p>
        <h2>Try a different<br>compounding rhythm.</h2>
        <p>Change the deposit, annual rate, frequency, and time. Follow the first three periods in the ledger, then compare the balance after the chosen number of years.</p>
      </div>
      <div class="interest-lab" data-reveal>
        <div class="interest-lab__controls">
          <p class="tool-label">Compound-interest studio</p>
          <label for="interest-principal">Initial deposit <output id="principal-output"></output></label>
          <input id="interest-principal" type="range" min="500" max="5000" step="100" value="1000" />
          <label for="interest-rate">Annual interest rate <output id="rate-output"></output></label>
          <input id="interest-rate" type="range" min="1" max="15" step="0.25" value="8" />
          <label for="interest-frequency">Compounding frequency</label>
          <select id="interest-frequency">
            <option value="1">Annually · 1 time/year</option>
            <option value="2">Semiannually · 2 times/year</option>
            <option value="4">Quarterly · 4 times/year</option>
            <option value="12">Monthly · 12 times/year</option>
            <option value="365">Daily · 365 times/year</option>
          </select>
          <label for="interest-years">Time invested <output id="years-output"></output></label>
          <input id="interest-years" type="range" min="1" max="10" step="1" value="3" />
          <div class="interest-lab__substitution" id="interest-substitution"></div>
        </div>
        <div class="interest-lab__results">
          <div class="interest-lab__headline"><span>Balance after <b id="balance-years">3</b> years</span><strong id="interest-balance" aria-live="polite"></strong><p id="interest-gain"></p></div>
          <div class="interest-metrics" id="interest-metrics"></div>
          <div class="interest-ledger-wrap">
            <table class="interest-ledger">
              <caption>Follow the first three compounding periods</caption>
              <thead><tr><th scope="col">Period</th><th scope="col">Starting balance</th><th scope="col">Interest earned</th><th scope="col">New balance</th></tr></thead>
              <tbody id="interest-ledger"></tbody>
            </table>
          </div>
          <p class="interest-lab__rounding">Amounts shown to the nearest cent; calculations retain full precision between periods.</p>
        </div>
      </div>
      <div class="interest-comparison" data-reveal>
        <div><p class="tool-label">Same principal, rate, and time</p><h3>More frequent compounding</h3><p>Compare the total interest earned. The extra gain gets smaller as the frequency rises.</p></div>
        <div id="interest-bars" class="interest-comparison__bars" aria-label="Interest earned at five compounding frequencies"></div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>05</span> Check your understanding</p>
        <h2>Can you predict<br>the next step?</h2>
        <p>Try the ideas with the controls above, then check the reasoning here. A correct answer should make sense in the graph or in the repeated-multiplication story.</p>
      </div>
      <div class="exponential-checks">
        <article class="exponential-check" data-reveal><span>Negative exponent</span><h3>What is ${i(`4<sup>−2</sup>`)}?</h3><select id="check-power" aria-label="Value of four to the negative second power"><option value="">Choose…</option><option value="a">−16</option><option value="correct">1/16</option><option value="b">16</option></select><button type="button" id="check-power-button">Check power</button><p class="answer-feedback" id="feedback-power" aria-live="polite"></p></article>
        <article class="exponential-check" data-reveal><span>Graph behavior</span><h3>For ${i(`(${a(`1`,`3`)})<sup><var>x</var></sup>`)}, what happens as ${i(`<var>x</var> → ∞`)}?</h3><select id="check-limit" aria-label="Right end behavior of one third to the x power"><option value="">Choose…</option><option value="a">The output grows without bound</option><option value="correct">The output approaches 0 from above</option><option value="b">The output reaches 0 and crosses</option></select><button type="button" id="check-limit-button">Check behavior</button><p class="answer-feedback" id="feedback-limit" aria-live="polite"></p></article>
        <article class="exponential-check" data-reveal><span>Interest factors</span><h3>At 6% annually, compounded quarterly for 2 years, what are ${i(`<var>i</var>`)} and ${i(`<var>k</var>`)}?</h3><select id="check-factors" aria-label="Interest rate per period and number of periods"><option value="">Choose…</option><option value="a">i = 0.06, k = 2</option><option value="correct">i = 0.015, k = 8</option><option value="b">i = 0.24, k = 8</option></select><button type="button" id="check-factors-button">Check factors</button><p class="answer-feedback" id="feedback-factors" aria-live="polite"></p></article>
        <article class="exponential-check" data-reveal><span>Compute a balance</span><h3>How much will $2,000 become after 3 years at 5% compounded annually?</h3><label for="check-balance">Balance to the nearest cent</label><input id="check-balance" type="number" min="0" step="0.01" placeholder="Enter dollars" /><button type="button" id="check-balance-button">Check balance</button><p class="answer-feedback" id="feedback-balance" aria-live="polite"></p></article>
      </div>
      <aside class="ready-banner ready-banner--exponentials" data-reveal><span>You are exponential-ready when</span><p>You can turn a base into a table and graph, explain the never-zero asymptote, and build the interest factor and period count before calculating a balance.</p><a href="#base-studio">Explore another base <span aria-hidden="true">↑</span></a></aside>
    </section>
  </main>
  ${e({previous:{href:`pages/sections/3-7.html`,label:`Section 3.7 · Inequalities`},next:{href:`pages/sections/4-2.html`,label:`Section 4.2 · Natural exponential`}})}
`;var c=document.querySelector(`#base-slider`),l=document.querySelector(`#exponent-slider`),u=4,d=`4`,f=()=>d===`0.3333333333333333`?a(`1`,`3`):d===`0.5`?a(`1`,`2`):s(u,2),p=e=>d===`4`&&e<0?a(`1`,String(4**-e)):d===`2`&&e<0?a(`1`,String(2**-e)):d===`0.5`?e>=0?e===0?`1`:a(`1`,String(2**e)):String(2**-e):d===`0.3333333333333333`?e>=0?e===0?`1`:a(`1`,String(3**e)):String(3**-e):s(u**e);function m(){let e=document.querySelector(`#base-chart`),t=Math.max(u**-2,u**2),n=Math.max(2,Math.ceil(t*1.13/2)*2),r=e=>62+(e+2.5)*551/5,i=e=>354-e*329/n,a=Number(l.value),o=``,c=!1;for(let e=0;e<=300;e+=1){let t=-2.5+e/60,a=u**t;a<=n?(o+=`${c?`L`:`M`}${r(t).toFixed(2)} ${i(a).toFixed(2)}`,c=!0):c=!1}e.innerHTML=`
    <defs><clipPath id="exponential-plot-clip"><rect x="62" y="25" width="551" height="329"/></clipPath></defs>
    ${[-2,-1,0,1,2].map(e=>`
    <line x1="${r(e)}" y1="25" x2="${r(e)}" y2="354" class="exponential-chart__grid${e===0?` exponential-chart__axis`:``}"/>
    <text x="${r(e)}" y="376" text-anchor="middle" class="exponential-chart__label">${e===0?`0`:s(e)}</text>`).join(``)}${[1,2,3,4].map(e=>`
    <line x1="62" y1="${i(e*n/4)}" x2="613" y2="${i(e*n/4)}" class="exponential-chart__grid"/>
    <text x="52" y="${i(e*n/4)+4}" text-anchor="end" class="exponential-chart__label">${s(e*n/4,1)}</text>`).join(``)}
    <line x1="62" y1="354" x2="613" y2="354" class="exponential-chart__axis"/>
    <path d="${o}" class="exponential-chart__curve" clip-path="url(#exponential-plot-clip)"/>
    <line x1="${r(a)}" y1="${i(u**a)}" x2="${r(a)}" y2="354" class="exponential-chart__guide"/>
    <circle cx="${r(0)}" cy="${i(1)}" r="5" class="exponential-chart__anchor"/>
    <circle cx="${r(a)}" cy="${i(u**a)}" r="8" class="exponential-chart__point"/>
    <text x="621" y="358" class="exponential-chart__label">x</text>
    <text x="${r(0)}" y="17" text-anchor="middle" class="exponential-chart__label">y</text>
    <text x="603" y="344" text-anchor="end" class="exponential-chart__asymptote">y = 0 · asymptote</text>`}function h(){let e=Number(l.value),t=u>1;document.querySelector(`#base-formula`).innerHTML=i(`<var>f</var>(<var>x</var>) = ${d===`0.5`||d===`0.3333333333333333`?`(${f()})`:f()}<sup><var>x</var></sup>`,!0),document.querySelector(`#base-output`).textContent=d?d===`0.3333333333333333`?`1/3`:d===`0.5`?`1/2`:s(u):s(u,2),document.querySelector(`#exponent-output`).textContent=s(e),document.querySelector(`#base-mode`).textContent=t?`Growth · b > 1`:`Decay · 0 < b < 1`,document.querySelector(`#value-heading`).innerHTML=i(`<var>f</var>(<var>x</var>)`);let n=d===`0.5`||d===`0.3333333333333333`?`(${f()})`:f();document.querySelector(`#base-reading`).innerHTML=`<span>At ${i(`<var>x</var> = ${s(e)}`)}</span><strong>${i(`${n}<sup>${s(e)}</sup> = ${p(e)}`)}</strong><p>From one row to the next, multiply by the base. To move left, divide by it.</p>`,document.querySelector(`#base-table`).innerHTML=[-2,-1,0,1,2].map(t=>`<tr class="${t===e?`is-current`:``}"><th scope="row">${s(t)}</th><td>${i(p(t))}</td><td>${t===2?`—`:`× ${i(f())}`}</td></tr>`).join(``),document.querySelector(`#passport-title`).textContent=t?`Growth`:`Decay`,document.querySelector(`#passport-copy`).textContent=t?`Left tail approaches the x-axis; right tail rises without bound.`:`Left tail rises without bound; right tail approaches the x-axis.`,document.querySelector(`#passport-direction`).innerHTML=t?`<span>left: toward 0</span><b>↗</b><span>right: toward ∞</span>`:`<span>left: toward ∞</span><b>↘</b><span>right: toward 0</span>`,document.querySelector(`#passport-limits`).innerHTML=t?`<div>${i(`<var>f</var>(<var>x</var>) → 0<sup>+</sup> as <var>x</var> → −∞`)}</div><div>${i(`<var>f</var>(<var>x</var>) → ∞ as <var>x</var> → ∞`)}</div>`:`<div>${i(`<var>f</var>(<var>x</var>) → ∞ as <var>x</var> → −∞`)}</div><div>${i(`<var>f</var>(<var>x</var>) → 0<sup>+</sup> as <var>x</var> → ∞`)}</div>`,document.querySelectorAll(`[data-base]`).forEach(e=>{let t=e.dataset.base===d;e.classList.toggle(`is-active`,t),e.setAttribute(`aria-pressed`,String(t))}),m()}document.querySelectorAll(`[data-base]`).forEach(e=>e.addEventListener(`click`,()=>{d=e.dataset.base,u=Number(d),c.value=u,h()})),c.addEventListener(`input`,()=>{let e=Number(c.value);u=e>.98&&e<1.02?e<1?.98:1.02:e,c.value=u,d=``,h()}),l.addEventListener(`input`,h),h();var g=document.querySelector(`#interest-principal`),_=document.querySelector(`#interest-rate`),v=document.querySelector(`#interest-frequency`),y=document.querySelector(`#interest-years`),b=[{n:1,name:`Annually`},{n:2,name:`Semiannually`},{n:4,name:`Quarterly`},{n:12,name:`Monthly`},{n:365,name:`Daily`}];function x(){let e=Number(g.value),t=Number(_.value),n=t/100,r=Number(v.value),c=Number(y.value),l=n/r,u=r*c,d=e*(1+l)**u;document.querySelector(`#principal-output`).textContent=o(e),document.querySelector(`#rate-output`).textContent=`${s(t,2)}%`,document.querySelector(`#years-output`).textContent=`${c} ${c===1?`year`:`years`}`,document.querySelector(`#balance-years`).textContent=c,document.querySelector(`#interest-balance`).textContent=o(d),document.querySelector(`#interest-gain`).textContent=`${o(d-e)} earned beyond your original deposit`,document.querySelector(`#interest-substitution`).innerHTML=`<span>Substitute the values</span><strong>${i(`<var>A</var> = ${e}(1 + ${a(s(n,4),String(r))})<sup>${u}</sup>`)}</strong>`,document.querySelector(`#interest-metrics`).innerHTML=`
    <div><span>Rate per period · r/n</span><strong>${s(l*100,4)}%</strong></div>
    <div><span>Total periods · nt</span><strong>${u}</strong></div>
    <div><span>Multiplier per period</span><strong>${s(1+l,6)}</strong></div>`,document.querySelector(`#interest-ledger`).innerHTML=[1,2,3].map(t=>{let n=e*(1+l)**(t-1),r=n*l;return`<tr><th scope="row">${t}</th><td>${o(n)}</td><td>+ ${o(r)}</td><td>${o(n*(1+l))}</td></tr>`}).join(``);let f=b.map(({n:t})=>e*((1+n/t)**(t*c)-1)),p=Math.max(...f);document.querySelector(`#interest-bars`).innerHTML=b.map(({n:e,name:t},n)=>`
    <div class="interest-comparison__row${e===r?` is-current`:``}"><span>${t}</span><div class="interest-comparison__track"><i style="width:${p?100*f[n]/p:0}%"></i></div><strong>${o(f[n])}</strong></div>`).join(``)}[g,_,y].forEach(e=>e.addEventListener(`input`,x)),v.addEventListener(`change`,x),x(),[[`power`,`A negative exponent takes the reciprocal: four to the negative second is one over four squared, or 1/16.`],[`limit`,`For a base between zero and one, repeated multiplication makes the positive output smaller, approaching—not reaching—zero.`],[`factors`,`Quarterly means n = 4, so i = 0.06/4 = 0.015 and k = 4 · 2 = 8.`]].forEach(([e,t])=>{document.querySelector(`#check-${e}-button`).addEventListener(`click`,()=>{let n=document.querySelector(`#check-${e}`).value===`correct`;r(document.querySelector(`#feedback-${e}`),n,`${n?`Correct. `:`Try again. `}${t}`)})}),document.querySelector(`#check-balance-button`).addEventListener(`click`,()=>{let e=Number(document.querySelector(`#check-balance`).value),t=document.querySelector(`#check-balance`).value!==``&&Math.abs(e-2e3*1.05**3)<.011;r(document.querySelector(`#feedback-balance`),t,t?`Correct. Multiply the $2,000 balance by 1.05 three times.`:`Use A = 2000(1.05)³. The balance should be greater than the deposit; round only at the end.`)}),n();