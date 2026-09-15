import"./magnifier-B0Wyiml3.js";import{a as e,o as t,r as n,s as r}from"./shared-DVcn0svv.js";var i=document.querySelector(`#app`),a=(e,t=!1)=>`<span class="native-math${t?` native-math--display`:``}">${e}</span>`,o=(e,t)=>`<span class="native-frac"><span>${e}</span><span>${t}</span></span>`;i.innerHTML=`
  ${t(`3.7`)}
  <main>
    <section class="lesson-hero lesson-hero--inequalities">
      <div class="lesson-hero__copy" data-reveal>
        <p class="lesson-kicker"><span>Section 3.7</span> Polynomial & rational inequalities</p>
        <h1>Mark the borders.<br><em>Read the neighborhoods.</em></h1>
        <p class="lesson-hero__lede">
          An equation asks where an expression is zero. An inequality asks where it stays positive or
          negative. Boundary points divide the number line into neighborhoods where that sign cannot change.
        </p>
        <div class="lesson-hero__actions">
          <a class="lesson-button lesson-button--dark" href="#sign-map">Build a sign map</a>
          <span>About 50 minutes · interactive</span>
        </div>
      </div>
      <div class="inequality-hero-art" aria-hidden="true" data-reveal>
        <div class="inequality-hero-art__card">
          <span class="inequality-hero-art__label">sign neighborhoods</span>
          <div class="inequality-hero-art__formula">${a(`(<var>x</var> + 2)<var>x</var>(<var>x</var> − 3)`)}</div>
          <div class="inequality-hero-line">
            <span class="inequality-hero-line__ray inequality-hero-line__ray--positive">+</span>
            <i><b>−2</b></i>
            <span class="inequality-hero-line__ray inequality-hero-line__ray--negative">−</span>
            <i><b>0</b></i>
            <span class="inequality-hero-line__ray inequality-hero-line__ray--positive">+</span>
            <i><b>3</b></i>
            <span class="inequality-hero-line__ray inequality-hero-line__ray--negative">−</span>
          </div>
          <div class="inequality-hero-art__answer">choose the neighborhoods that match the inequality</div>
        </div>
        <span class="inequality-hero-art__tag inequality-hero-art__tag--cut">cut points</span>
        <span class="inequality-hero-art__tag inequality-hero-art__tag--test">test one value</span>
      </div>
    </section>

    <section class="lesson-objectives" aria-label="Lesson objectives" data-reveal>
      <p>By the end, you can</p>
      <ol>
        <li><span>01</span>Build and interpret a sign chart</li>
        <li><span>02</span>Use multiplicity to predict sign changes</li>
        <li><span>03</span>Find a radical function’s domain</li>
        <li><span>04</span>Solve rational inequalities safely</li>
      </ol>
    </section>

    <section class="lesson-section" id="sign-map">
      <div class="inequality-section-lead">
        <div class="lesson-section__intro" data-reveal>
          <p class="lesson-kicker"><span>01</span> The sign-map workflow</p>
          <h2>Zeros draw borders.<br>Tests color the regions.</h2>
          <p>First move everything to one side so the other side is zero. Factor, mark every zero, and test one value in each open interval. A continuous polynomial cannot switch sign inside an interval that contains no zero.</p>
        </div>
        <ol class="inequality-recipe" data-reveal>
          <li><span>1</span><div><strong>Zero</strong><p>Write ${a(`<var>f</var>(<var>x</var>) ⋚ 0`)}.</p></div></li>
          <li><span>2</span><div><strong>Factor</strong><p>Expose every boundary point.</p></div></li>
          <li><span>3</span><div><strong>Test</strong><p>Determine each interval’s sign.</p></div></li>
          <li><span>4</span><div><strong>Select</strong><p>Include only the requested signs.</p></div></li>
        </ol>
      </div>

      <div class="sign-lab" data-reveal>
        <div class="sign-lab__controls">
          <p class="tool-label">Living sign chart</p>
          <div class="sign-lab__problem">${a(`<var>x</var><sup>3</sup> − 6<var>x</var><sup>2</sup> ≥ −9<var>x</var>`,!0)}</div>
          <div class="sign-lab__step"><span>Move to zero</span><strong>${a(`<var>x</var><sup>3</sup> − 6<var>x</var><sup>2</sup> + 9<var>x</var> ≥ 0`)}</strong></div>
          <div class="sign-lab__step"><span>Factor</span><strong>${a(`<var>x</var>(<var>x</var> − 3)<sup>2</sup> ≥ 0`)}</strong></div>
          <label for="sign-test-value"><span>Move the test value</span><output id="sign-test-output">−2</output></label>
          <input id="sign-test-value" type="range" min="-4" max="7" step="0.25" value="-2" />
          <div class="factor-reading" id="factor-reading" aria-live="polite"></div>
        </div>
        <div class="sign-lab__map">
          <p class="tool-label">Neighborhood reading</p>
          <div class="sign-track" id="polynomial-sign-track"></div>
          <div class="sign-lab__answer">
            <span>Solution</span>
            <strong>${a(`[0, ∞)`)}</strong>
            <p>Zero is included because the inequality allows equality. The repeated zero at 3 is already inside this interval.</p>
          </div>
        </div>
      </div>
      <aside class="fraction-boundary" data-reveal>
        <div><span>Fractional boundary</span><strong>${a(`${o(`9`,`7`)}<var>x</var> ≤ <var>x</var><sup>2</sup>`)}</strong></div>
        <i aria-hidden="true">→</i>
        <div><span>Move and factor</span><strong>${a(`<var>x</var>(<var>x</var> − ${o(`9`,`7`)}) ≥ 0`)}</strong></div>
        <i aria-hidden="true">→</i>
        <div><span>Select positive regions</span><strong>${a(`(−∞, 0] ∪ [${o(`9`,`7`)}, ∞)`)}</strong></div>
        <p>A boundary does not need to be an integer. Keep its exact fractional value on the sign chart.</p>
      </aside>
    </section>

    <section class="lesson-section lesson-section--ink" id="multiplicity">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>02</span> Cross or touch?</p>
        <h2>Odd roots flip the sign.<br>Even roots preserve it.</h2>
        <p>A factor with odd multiplicity changes sign as you cross its zero. An even power stays nonnegative on both sides, so the product keeps the same sign. Equality can make an even root an isolated solution.</p>
      </div>

      <div class="multiplicity-lab" data-reveal>
        <div class="multiplicity-lab__controls">
          <p class="tool-label">Multiplicity microscope</p>
          <div class="multiplicity-equation">${a(`(2<var>x</var> − 7)<sup>4</sup>(<var>x</var> − 3)<sup>3</sup>(<var>x</var> + 1) ≤ 0`,!0)}</div>
          <div class="root-switches" role="tablist" aria-label="Inspect a boundary point">
            <button type="button" data-root="-1" role="tab" aria-selected="false">${a(`<var>x</var> = −1`)}<small>power 1</small></button>
            <button class="is-active" type="button" data-root="3" role="tab" aria-selected="true">${a(`<var>x</var> = 3`)}<small>power 3</small></button>
            <button type="button" data-root="3.5" role="tab" aria-selected="false">${a(`<var>x</var> = 7/2`)}<small>power 4</small></button>
          </div>
          <div class="root-verdict" id="root-verdict"></div>
        </div>
        <div class="multiplicity-lab__map">
          <div class="multiplicity-chart" aria-label="Sign chart with boundary points negative one, three, and seven halves">
            <div class="multiplicity-chart__signs"><span>+</span><span>−</span><span>+</span><span>+</span></div>
            <div class="multiplicity-chart__line"><i data-chart-root="-1"></i><i data-chart-root="3"></i><i data-chart-root="3.5"></i></div>
            <div class="multiplicity-chart__labels"><span>−1</span><span>3</span><span>7/2</span></div>
          </div>
          <div class="multiplicity-answer">
            <span>Keep the negative region and allowed zeros</span>
            <strong>${a(`[−1, 3] ∪ {7/2}`)}</strong>
            <p>The fourth-power root at ${a(`7/2`)} does not create a negative interval, but it still makes the expression equal zero.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--soft" id="radical-domain">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker"><span>03</span> Domain as an inequality</p>
        <h2>A square root admits<br>only nonnegative inputs.</h2>
        <p>To find the domain of a real square-root function, solve “radicand ${a(`≥ 0`)}.” This turns a domain question into the same sign-chart problem.</p>
      </div>

      <div class="radical-lab" data-reveal>
        <div class="radical-lab__story">
          <p class="tool-label">Radicand gate</p>
          <div class="radical-equation">${a(`<var>g</var>(<var>x</var>) = √<span class="radical-bar">6<var>x</var> + <var>x</var><sup>2</sup> − <var>x</var><sup>3</sup></span>`,!0)}</div>
          <ol>
            <li><span>Require</span>${a(`6<var>x</var> + <var>x</var><sup>2</sup> − <var>x</var><sup>3</sup> ≥ 0`)}</li>
            <li><span>Factor</span>${a(`−<var>x</var>(<var>x</var> − 3)(<var>x</var> + 2) ≥ 0`)}</li>
            <li><span>Boundaries</span>${a(`−2, 0, 3`)}</li>
          </ol>
        </div>
        <div class="radical-lab__test">
          <label for="radical-test"><span>Probe an input ${a(`<var>x</var>`)}</span><output id="radical-output">1</output></label>
          <input id="radical-test" type="range" min="-5" max="5" step="0.1" value="1" />
          <div class="radical-meter"><span id="radical-meter-fill"></span><i></i></div>
          <div class="radical-verdict" id="radical-verdict" aria-live="polite"></div>
          <div class="radical-answer"><span>Domain</span><strong>${a(`(−∞, −2] ∪ [0, 3]`)}</strong></div>
        </div>
      </div>
    </section>

    <section class="lesson-section" id="rational-inequalities">
      <div class="inequality-section-lead">
        <div class="lesson-section__intro" data-reveal>
          <p class="lesson-kicker"><span>04</span> Add denominator cuts</p>
          <h2>Combine first.<br>Never cross-multiply blindly.</h2>
          <p>A denominator may be positive or negative, so multiplying both sides by it could reverse the inequality. Instead, move to zero, combine into one fraction, factor, and place numerator zeros and denominator zeros on one sign chart.</p>
        </div>
        <div class="cut-point-key" data-reveal>
          <div><i class="cut-point-key__closed"></i><p><strong>Numerator zero</strong><span>Closed only when equality is allowed</span></p></div>
          <div><i class="cut-point-key__open"></i><p><strong>Denominator zero</strong><span>Always open; never in the domain</span></p></div>
        </div>
      </div>

      <div class="rational-sign-lab" data-reveal>
        <div class="rational-sign-lab__tabs" role="tablist" aria-label="Rational inequalities">
          <button class="is-active" type="button" data-rational-case="one" role="tab" aria-selected="true">Two cuts</button>
          <button type="button" data-rational-case="three" role="tab" aria-selected="false">Three cuts</button>
          <button type="button" data-rational-case="compare" role="tab" aria-selected="false">Compare fractions</button>
        </div>
        <div class="rational-sign-lab__work">
          <div class="rational-workflow" id="rational-workflow"></div>
          <div class="rational-neighborhoods">
            <p class="tool-label">Interactive cut-point map</p>
            <div class="rational-intervals" id="rational-intervals"></div>
            <div class="rational-test-result" id="rational-test-result" aria-live="polite"></div>
            <div class="rational-final" id="rational-final"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="lesson-section lesson-section--ink inequality-checks" id="readiness">
      <div class="lesson-section__intro" data-reveal>
        <p class="lesson-kicker lesson-kicker--gold"><span>05</span> Final readiness</p>
        <h2>Can you trust<br>every endpoint?</h2>
        <p>Check the four decisions that make or break an inequality solution: factoring, multiplicity, domain restrictions, and interval notation.</p>
      </div>
      <div class="inequality-check-grid">
        <article class="inequality-check" data-reveal>
          <span>Polynomial signs</span>
          <h3>Solve ${a(`<var>x</var>(<var>x</var> − 4) > 0`)}.</h3>
          <select id="check-polynomial" aria-label="Solution to the polynomial inequality"><option value="">Choose the solution…</option><option value="a">(0, 4)</option><option value="correct">(−∞, 0) ∪ (4, ∞)</option><option value="b">[0, 4]</option></select>
          <button id="check-polynomial-button" type="button">Check interval</button>
          <p class="answer-feedback" id="feedback-polynomial" aria-live="polite"></p>
        </article>
        <article class="inequality-check" data-reveal>
          <span>Even multiplicity</span>
          <h3>At a zero of multiplicity 6, what happens to the sign?</h3>
          <select id="check-multiplicity" aria-label="Sign behavior at an even-multiplicity zero"><option value="">Choose…</option><option value="a">It always flips</option><option value="correct">It stays the same</option><option value="b">It becomes undefined</option></select>
          <button id="check-multiplicity-button" type="button">Check behavior</button>
          <p class="answer-feedback" id="feedback-multiplicity" aria-live="polite"></p>
        </article>
        <article class="inequality-check" data-reveal>
          <span>Radical domain</span>
          <h3>Find the domain of ${a(`√<span class="radical-bar"><var>x</var>(<var>x</var> − 5)</span>`)}.</h3>
          <select id="check-radical" aria-label="Domain of the radical function"><option value="">Choose the domain…</option><option value="a">[0, 5]</option><option value="correct">(−∞, 0] ∪ [5, ∞)</option><option value="b">(0, 5)</option></select>
          <button id="check-radical-button" type="button">Check domain</button>
          <p class="answer-feedback" id="feedback-radical" aria-live="polite"></p>
        </article>
        <article class="inequality-check" data-reveal>
          <span>Forbidden endpoint</span>
          <h3>Solve ${a(`${o(`<var>x</var> − 1`,`<var>x</var> + 2`)} ≥ 0`)}.</h3>
          <select id="check-rational" aria-label="Solution to the rational inequality"><option value="">Choose the solution…</option><option value="a">(−∞, −2] ∪ [1, ∞)</option><option value="correct">(−∞, −2) ∪ [1, ∞)</option><option value="b">(−2, 1]</option></select>
          <button id="check-rational-button" type="button">Check cut points</button>
          <p class="answer-feedback" id="feedback-rational" aria-live="polite"></p>
        </article>
      </div>
      <aside class="ready-banner ready-banner--inequalities" data-reveal>
        <span>You are sign-chart ready when</span>
        <p>You move to zero, factor completely, mark every cut point, test each neighborhood, and reserve closed endpoints for defined zeros when equality is allowed.</p>
        <a href="#sign-map">Build another map <span aria-hidden="true">↑</span></a>
      </aside>
    </section>
  </main>
  ${e({previous:{href:`pages/sections/3-6.html`,label:`Section 3.6 · Rational functions`},next:null})}
`;var s=e=>{if(Math.abs(e)<1e-9)return`0`;let t=Math.round(e*100)/100;return String(t).replace(`-`,`−`)},c=document.querySelector(`#sign-test-value`),l=document.querySelector(`#polynomial-sign-track`);l.innerHTML=`
  <div class="sign-track__region sign-track__region--negative"><b>−</b><span>negative</span></div>
  <i class="sign-track__cut sign-track__cut--zero" aria-hidden="true"></i>
  <span class="sign-track__value sign-track__value--zero">0</span>
  <div class="sign-track__region sign-track__region--positive"><b>+</b><span>positive</span></div>
  <i class="sign-track__cut sign-track__cut--three" aria-hidden="true"></i>
  <span class="sign-track__value sign-track__value--three">3</span>
  <div class="sign-track__region sign-track__region--positive sign-track__region--last"><b>+</b><span>positive</span></div>
  <div class="sign-pointer" id="sign-pointer"><span></span><b id="sign-pointer-label">x = −2</b></div>
`;var u=document.querySelector(`#sign-pointer`);function d(){let e=Number(c.value),t=e,n=(e-3)**2,r=t*n,i=(e+4)/11*100;document.querySelector(`#sign-test-output`).textContent=s(e),document.querySelector(`#sign-pointer-label`).textContent=`x = ${s(e)}`,u.style.left=`${Math.min(98,Math.max(2,i))}%`,document.querySelector(`#factor-reading`).innerHTML=`
    <div><span>${a(`<var>x</var>`)}</span><strong class="${t<0?`is-negative`:t>0?`is-positive`:`is-zero`}">${s(t)}</strong></div>
    <div><span>${a(`(<var>x</var> − 3)<sup>2</sup>`)}</span><strong class="${n>0?`is-positive`:`is-zero`}">${s(n)}</strong></div>
    <div><span>product</span><strong class="${r<0?`is-negative`:r>0?`is-positive`:`is-zero`}">${s(r)} · ${r<0?`negative`:r>0?`positive`:`zero`}</strong></div>
  `}c.addEventListener(`input`,d),d();var f={"-1":{power:1,type:`odd`,message:`The factor x + 1 changes from negative to positive, so the product flips sign at −1.`},3:{power:3,type:`odd`,message:`An odd third power preserves the factor’s sign change, so the product flips sign at 3.`},"3.5":{power:4,type:`even`,message:`The fourth power is nonnegative on both sides. The product touches zero at 7/2 but does not change sign.`}};function p(e){let t=f[e];document.querySelectorAll(`[data-root]`).forEach(t=>{let n=t.dataset.root===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),document.querySelectorAll(`[data-chart-root]`).forEach(t=>t.classList.toggle(`is-active`,t.dataset.chartRoot===e)),document.querySelector(`#root-verdict`).innerHTML=`<span>${t.type} multiplicity · ${t.power}</span><strong>${t.type===`odd`?`Cross: the sign flips`:`Touch: the sign stays`}</strong><p>${t.message}</p>`}document.querySelectorAll(`[data-root]`).forEach(e=>e.addEventListener(`click`,()=>p(e.dataset.root))),p(`3`);var m=document.querySelector(`#radical-test`);function h(){let e=Number(m.value),t=6*e+e**2-e**3,n=t>=-1e-9;document.querySelector(`#radical-output`).textContent=s(e),document.querySelector(`#radical-meter-fill`).style.width=`${Math.min(100,Math.abs(t)/.7)}%`;let r=document.querySelector(`#radical-verdict`);r.className=`radical-verdict ${n?`is-allowed`:`is-blocked`}`,r.innerHTML=`<span>radicand = ${s(t)}</span><strong>${n?`Gate open · real output`:`Gate closed · not in the real domain`}</strong><p>${n?`√${s(Math.max(0,t))} is a real number.`:`A negative radicand has no real square root.`}</p>`}m.addEventListener(`input`,h),h();var g={one:{original:`${o(`<var>x</var>`,`<var>x</var> + 2`)} ≤ 2`,combined:`${o(`−(<var>x</var> + 4)`,`<var>x</var> + 2`)} ≤ 0`,cuts:[{value:-4,label:`−4`,kind:`closed`},{value:-2,label:`−2`,kind:`open`}],intervals:[{label:`(−∞, −4)`,test:-5,value:-1/3,sign:`−`,keep:!0},{label:`(−4, −2)`,test:-3,value:1,sign:`+`,keep:!1},{label:`(−2, ∞)`,test:0,value:-2,sign:`−`,keep:!0}],answer:`(−∞, −4] ∪ (−2, ∞)`,note:`−4 makes the numerator zero and is included; −2 makes the denominator zero and is excluded.`},three:{original:`${o(`<var>x</var>`,`2`)} ≥ ${o(`5`,`<var>x</var> + 1`)} + 4`,combined:`${o(`(<var>x</var> − 9)(<var>x</var> + 2)`,`2(<var>x</var> + 1)`)} ≥ 0`,cuts:[{value:-2,label:`−2`,kind:`closed`},{value:-1,label:`−1`,kind:`open`},{value:9,label:`9`,kind:`closed`}],intervals:[{label:`(−∞, −2)`,test:-3,value:-3,sign:`−`,keep:!1},{label:`(−2, −1)`,test:-1.5,value:5.25,sign:`+`,keep:!0},{label:`(−1, 9)`,test:0,value:-9,sign:`−`,keep:!1},{label:`(9, ∞)`,test:10,value:6/11,sign:`+`,keep:!0}],answer:`[−2, −1) ∪ [9, ∞)`,note:`The numerator zeros may close; the denominator cut at −1 never can.`},compare:{original:`${o(`4`,`<var>x</var> − 2`)} ≤ ${o(`3`,`<var>x</var> + 1`)}`,combined:`${o(`<var>x</var> + 10`,`(<var>x</var> − 2)(<var>x</var> + 1)`)} ≤ 0`,cuts:[{value:-10,label:`−10`,kind:`closed`},{value:-1,label:`−1`,kind:`open`},{value:2,label:`2`,kind:`open`}],intervals:[{label:`(−∞, −10)`,test:-11,value:-1/130,sign:`−`,keep:!0},{label:`(−10, −1)`,test:-2,value:2,sign:`+`,keep:!1},{label:`(−1, 2)`,test:0,value:-5,sign:`−`,keep:!0},{label:`(2, ∞)`,test:3,value:13/4,sign:`+`,keep:!1}],answer:`(−∞, −10] ∪ (−1, 2)`,note:`The equality includes −10, but the two original denominator zeros stay open.`}},_=`one`;function v(){let e=g[_];document.querySelector(`#rational-workflow`).innerHTML=`
    <p class="tool-label">Single-fraction workflow</p>
    <div><span>Start</span><strong>${a(e.original)}</strong></div>
    <div><span>Move, combine, factor</span><strong>${a(e.combined)}</strong></div>
    <div><span>Cut points</span><strong class="rational-cut-list">${e.cuts.map(e=>`<span class="rational-cut"><b>${e.label}</b><small>${e.kind===`open`?`denominator`:`numerator`}</small></span>`).join(``)}</strong></div>
  `,document.querySelector(`#rational-intervals`).innerHTML=e.intervals.map((e,t)=>`
    <button type="button" data-rational-interval="${t}" class="${e.keep?`is-kept`:``}">
      <span>${e.label}</span><b>${e.sign}</b><small>${e.keep?`kept`:`skipped`}</small>
    </button>
  `).join(``),document.querySelector(`#rational-final`).innerHTML=`<span>Solution</span><strong>${a(e.answer)}</strong><p>${e.note}</p>`,document.querySelector(`#rational-test-result`).innerHTML=`Select a neighborhood to see its test value.`,document.querySelectorAll(`[data-rational-interval]`).forEach(t=>t.addEventListener(`click`,()=>{let n=e.intervals[Number(t.dataset.rationalInterval)];document.querySelectorAll(`[data-rational-interval]`).forEach(e=>e.classList.toggle(`is-active`,e===t)),document.querySelector(`#rational-test-result`).innerHTML=`Test ${a(`<var>x</var> = ${s(n.test)}`)}: the combined expression is ${s(n.value)}, so its sign is <strong>${n.sign}</strong>. This neighborhood is <b>${n.keep?`part of the solution`:`not selected`}</b>.`}))}document.querySelectorAll(`[data-rational-case]`).forEach(e=>e.addEventListener(`click`,()=>{_=e.dataset.rationalCase,document.querySelectorAll(`[data-rational-case]`).forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),v()})),v(),[[`polynomial`,`Correct. A positive leading quadratic is positive outside its two simple zeros.`,`Test one point in each of the three neighborhoods; the outside regions are positive.`],[`multiplicity`,`Correct. Every even multiplicity touches the axis and preserves the sign.`,`Even powers have the same sign on both sides of their zero.`],[`radical`,`Correct. The product is nonnegative outside 0 and 5, and both zeros are allowed.`,`A positive-leading quadratic is nonnegative outside its zeros, not between them.`],[`rational`,`Correct. The numerator zero at 1 closes, while the denominator zero at −2 stays open.`,`A denominator zero is excluded even when the inequality includes equality.`]].forEach(([e,t,n])=>{document.querySelector(`#check-${e}-button`).addEventListener(`click`,()=>{let i=document.querySelector(`#check-${e}`).value===`correct`;r(document.querySelector(`#feedback-${e}`),i,i?t:n)})}),n();