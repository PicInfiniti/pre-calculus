export function sitePath(path = "") {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

export function renderLessonHeader(activeSection) {
  const navigation = activeSection === "1.9"
    ? `<a class="is-current" href="${sitePath("pages/sections/1-9.html")}">1.9 · Coordinate plane</a>`
    : `
        <a class="${activeSection === "9.1" ? "is-current" : ""}" href="${sitePath("pages/sections/9-1.html")}">9.1 · Two variables</a>
        <a class="${activeSection === "9.2" ? "is-current" : ""}" href="${sitePath("pages/sections/9-2.html")}">9.2 · Three variables</a>
      `;

  return `
    <div class="reading-progress" aria-hidden="true"><span></span></div>
    <header class="lesson-header">
      <a class="lesson-brand" href="${sitePath()}" aria-label="Back to the MATH 1280 course home">
        <span class="lesson-brand__mark" aria-hidden="true">ƒ</span>
        <span><strong>Precalculus</strong><small>MATH 1280</small></span>
      </a>
      <nav class="lesson-nav" aria-label="Lesson navigation">
        ${navigation}
      </nav>
      <a class="lesson-header__home" href="${sitePath()}">Course map <span aria-hidden="true">↗</span></a>
    </header>
  `;
}

export function renderLessonFooter({ previous, next }) {
  const previousLink = previous
    ? `<a href="${sitePath(previous.href)}"><span>← Previous</span><strong>${previous.label}</strong></a>`
    : `<a href="${sitePath()}"><span>← Return</span><strong>Course home</strong></a>`;
  const nextLink = next
    ? `<a class="lesson-footer__next" href="${sitePath(next.href)}"><span>Next →</span><strong>${next.label}</strong></a>`
    : `<a class="lesson-footer__next" href="${sitePath()}"><span>Complete</span><strong>Course home →</strong></a>`;

  return `
    <footer class="lesson-footer">
      ${previousLink}
      <p>Practice deliberately. Explain every step.</p>
      ${nextLink}
    </footer>
  `;
}

export function initLessonChrome() {
  const progress = document.querySelector(".reading-progress span");

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    document.querySelectorAll("[data-reveal]").forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
}

export function bindTabs(container) {
  const buttons = [...container.querySelectorAll("[data-tab]")];
  const panels = [...container.querySelectorAll("[data-tab-panel]")];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab;
      buttons.forEach((candidate) => {
        const selected = candidate === button;
        candidate.classList.toggle("is-active", selected);
        candidate.setAttribute("aria-selected", String(selected));
      });
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.tabPanel !== target;
      });
    });
  });
}

export function nearlyEqual(actual, expected, tolerance = 0.001) {
  return Number.isFinite(actual) && Math.abs(actual - expected) <= tolerance;
}

export function formatNumber(value) {
  if (!Number.isFinite(value)) return "—";
  if (Math.abs(value) < 1e-10) return "0";
  if (Math.abs(value - Math.round(value)) < 1e-10) return String(Math.round(value));
  return Number(value.toFixed(3)).toString();
}

export function setFeedback(element, correct, message) {
  element.classList.remove("is-correct", "is-incorrect");
  element.classList.add(correct ? "is-correct" : "is-incorrect");
  element.textContent = message;
}
