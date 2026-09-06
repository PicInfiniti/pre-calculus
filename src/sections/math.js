import katex from "katex";
import "katex/dist/katex.min.css";

const renderOptions = {
  throwOnError: false,
  strict: "ignore",
};

export function mathMarkup(expression, displayMode = false) {
  return `<span class="lesson-math${displayMode ? " lesson-math--display" : ""}" data-katex="${encodeURIComponent(expression)}" data-katex-display="${displayMode}"></span>`;
}

export function typesetMath(scope = document) {
  scope.querySelectorAll("[data-katex]").forEach((element) => {
    katex.render(decodeURIComponent(element.dataset.katex), element, {
      ...renderOptions,
      displayMode: element.dataset.katexDisplay === "true",
    });
    element.removeAttribute("data-katex");
    element.removeAttribute("data-katex-display");
  });
}

export function setMath(element, expression, displayMode = false) {
  katex.render(expression, element, {
    ...renderOptions,
    displayMode,
  });
}
