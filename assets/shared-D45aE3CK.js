import{t as e}from"./magnifier-DbmAZ0E0.js";function t(e=``){return`/pre-calculus/${e.replace(/^\/+/,``)}`}var n=`https://picinfiniti.net/mathboard/`;function r(e){let r;return r=e===`0.0`?`<a class="is-current" href="${t(`pages/sections/0-0.html`)}">00 · Notation</a>`:e===`1.9`?`<a class="is-current" href="${t(`pages/sections/1-9.html`)}">1.9 · Coordinate plane</a>`:[`2.1`,`2.2`,`2.3`,`2.6`,`2.7`,`2.8`].includes(e)?`
      <a class="${e===`2.1`?`is-current`:``}" href="${t(`pages/sections/2-1.html`)}">2.1 · Functions</a>
      <a class="${e===`2.2`?`is-current`:``}" href="${t(`pages/sections/2-2.html`)}">2.2 · Graphs</a>
      <a class="${e===`2.3`?`is-current`:``}" href="${t(`pages/sections/2-3.html`)}">2.3 · Information</a>
      <a class="${e===`2.6`?`is-current`:``}" href="${t(`pages/sections/2-6.html`)}">2.6 · Transformations</a>
      <a class="${e===`2.7`?`is-current`:``}" href="${t(`pages/sections/2-7.html`)}">2.7 · Combining</a>
      <a class="${e===`2.8`?`is-current`:``}" href="${t(`pages/sections/2-8.html`)}">2.8 · Inverses</a>
    `:`
        <a class="${e===`9.1`?`is-current`:``}" href="${t(`pages/sections/9-1.html`)}">9.1 · Two variables</a>
        <a class="${e===`9.2`?`is-current`:``}" href="${t(`pages/sections/9-2.html`)}">9.2 · Three variables</a>
      `,`
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="lesson-header">
      <a class="lesson-brand" href="${t()}" aria-label="Back to the MATH 1280 course home">
        <span class="lesson-brand__mark" aria-hidden="true">ƒ</span>
        <span><strong>Precalculus</strong><small>MATH 1280</small></span>
      </a>
      <nav class="lesson-nav" aria-label="Lesson navigation">
        ${r}
      </nav>
      <div class="lesson-header__actions">
        <a class="lesson-header__tool" href="${n}" target="_blank" rel="noreferrer">Mathboard <span aria-hidden="true">↗</span></a>
        <a class="lesson-header__home" href="${t()}">Course map <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  `}function i({previous:e,next:n}){return`
    <footer class="lesson-footer">
      ${e?`<a href="${t(e.href)}"><span>← Previous</span><strong>${e.label}</strong></a>`:`<a href="${t()}"><span>← Return</span><strong>Course home</strong></a>`}
      <p>Practice deliberately. Explain every step.</p>
      ${n?`<a class="lesson-footer__next" href="${t(n.href)}"><span>Next →</span><strong>${n.label}</strong></a>`:`<a class="lesson-footer__next" href="${t()}"><span>Complete</span><strong>Course home →</strong></a>`}
    </footer>
  `}function a(){e();let t=document.querySelector(`.reading-progress span`),n=()=>{let e=document.documentElement.scrollHeight-window.innerHeight,n=e>0?window.scrollY/e*100:0;t.style.width=`${Math.min(100,Math.max(0,n))}%`};if(n(),window.addEventListener(`scroll`,n,{passive:!0}),window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!(`IntersectionObserver`in window)){document.querySelectorAll(`[data-reveal]`).forEach(e=>{e.classList.add(`is-visible`)});return}let r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),r.unobserve(e.target))})},{threshold:.12});document.querySelectorAll(`[data-reveal]`).forEach(e=>r.observe(e))}function o(e){let t=[...e.querySelectorAll(`[data-tab]`)],n=[...e.querySelectorAll(`[data-tab-panel]`)];t.forEach(e=>{e.addEventListener(`click`,()=>{let r=e.dataset.tab;t.forEach(t=>{let n=t===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n))}),n.forEach(e=>{e.hidden=e.dataset.tabPanel!==r})})})}function s(e,t,n=.001){return Number.isFinite(e)&&Math.abs(e-t)<=n}function c(e){return Number.isFinite(e)?Math.abs(e)<1e-10?`0`:Math.abs(e-Math.round(e))<1e-10?String(Math.round(e)):Number(e.toFixed(3)).toString():`—`}function l(e,t,n){e.classList.remove(`is-correct`,`is-incorrect`),e.classList.add(t?`is-correct`:`is-incorrect`),e.textContent=n}export{i as a,t as c,s as i,c as n,r as o,a as r,l as s,o as t};