function e(e=``){return`/pre-calculus/${e.replace(/^\/+/,``)}`}function t(t){let n;return n=t===`0.0`?`<a class="is-current" href="${e(`pages/sections/0-0.html`)}">00 · Notation</a>`:t===`1.9`?`<a class="is-current" href="${e(`pages/sections/1-9.html`)}">1.9 · Coordinate plane</a>`:[`2.1`,`2.2`,`2.3`,`2.6`].includes(t)?`
      <a class="${t===`2.1`?`is-current`:``}" href="${e(`pages/sections/2-1.html`)}">2.1 · Functions</a>
      <a class="${t===`2.2`?`is-current`:``}" href="${e(`pages/sections/2-2.html`)}">2.2 · Graphs</a>
      <a class="${t===`2.3`?`is-current`:``}" href="${e(`pages/sections/2-3.html`)}">2.3 · Information</a>
      <a class="${t===`2.6`?`is-current`:``}" href="${e(`pages/sections/2-6.html`)}">2.6 · Transformations</a>
    `:`
        <a class="${t===`9.1`?`is-current`:``}" href="${e(`pages/sections/9-1.html`)}">9.1 · Two variables</a>
        <a class="${t===`9.2`?`is-current`:``}" href="${e(`pages/sections/9-2.html`)}">9.2 · Three variables</a>
      `,`
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="lesson-header">
      <a class="lesson-brand" href="${e()}" aria-label="Back to the MATH 1280 course home">
        <span class="lesson-brand__mark" aria-hidden="true">ƒ</span>
        <span><strong>Precalculus</strong><small>MATH 1280</small></span>
      </a>
      <nav class="lesson-nav" aria-label="Lesson navigation">
        ${n}
      </nav>
      <div class="lesson-header__actions">
        <a class="lesson-header__tool" href="${e(`pages/tools/whiteboard.html`)}">Whiteboard <span aria-hidden="true">↗</span></a>
        <a class="lesson-header__home" href="${e()}">Course map <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  `}function n({previous:t,next:n}){return`
    <footer class="lesson-footer">
      ${t?`<a href="${e(t.href)}"><span>← Previous</span><strong>${t.label}</strong></a>`:`<a href="${e()}"><span>← Return</span><strong>Course home</strong></a>`}
      <p>Practice deliberately. Explain every step.</p>
      ${n?`<a class="lesson-footer__next" href="${e(n.href)}"><span>Next →</span><strong>${n.label}</strong></a>`:`<a class="lesson-footer__next" href="${e()}"><span>Complete</span><strong>Course home →</strong></a>`}
    </footer>
  `}function r(){let e=document.querySelector(`.reading-progress span`),t=()=>{let t=document.documentElement.scrollHeight-window.innerHeight,n=t>0?window.scrollY/t*100:0;e.style.width=`${Math.min(100,Math.max(0,n))}%`};if(t(),window.addEventListener(`scroll`,t,{passive:!0}),window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!(`IntersectionObserver`in window)){document.querySelectorAll(`[data-reveal]`).forEach(e=>{e.classList.add(`is-visible`)});return}let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),n.unobserve(e.target))})},{threshold:.12});document.querySelectorAll(`[data-reveal]`).forEach(e=>n.observe(e))}function i(e){let t=[...e.querySelectorAll(`[data-tab]`)],n=[...e.querySelectorAll(`[data-tab-panel]`)];t.forEach(e=>{e.addEventListener(`click`,()=>{let r=e.dataset.tab;t.forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),n.forEach(e=>{e.hidden=e.dataset.tabPanel!==r})})})}function a(e,t,n=.001){return Number.isFinite(e)&&Math.abs(e-t)<=n}function o(e){return Number.isFinite(e)?Math.abs(e)<1e-10?`0`:Math.abs(e-Math.round(e))<1e-10?String(Math.round(e)):Number(e.toFixed(3)).toString():`—`}function s(e,t,n){e.classList.remove(`is-correct`,`is-incorrect`),e.classList.add(t?`is-correct`:`is-incorrect`),e.textContent=n}export{n as a,e as c,a as i,o as n,t as o,r,s,i as t};