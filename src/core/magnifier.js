const storageKey = "precalculus-reading-magnifier";
const magnification = 1.65;

function readStoredState() {
  try {
    return window.sessionStorage.getItem(storageKey) === "on";
  } catch {
    return false;
  }
}

function storeState(active) {
  try {
    window.sessionStorage.setItem(storageKey, active ? "on" : "off");
  } catch {
    // The magnifier still works when storage is unavailable.
  }
}

function copyLiveControls(source, mirror) {
  const originalControls = [...source.querySelectorAll("input, select, textarea")].filter(
    (element) => !element.closest(".reading-magnifier, .reading-lens"),
  );
  const mirroredControls = [...mirror.querySelectorAll("input, select, textarea")];

  originalControls.forEach((control, index) => {
    const copy = mirroredControls[index];
    if (!copy) return;
    copy.value = control.value;
    if ("checked" in control) copy.checked = control.checked;
  });
}

function copyCanvasFrames(source, mirror) {
  const originalCanvases = [...source.querySelectorAll("canvas")].filter(
    (element) => !element.closest(".reading-lens"),
  );
  const mirroredCanvases = [...mirror.querySelectorAll("canvas")];

  originalCanvases.forEach((canvas, index) => {
    const copy = mirroredCanvases[index];
    if (!copy) return;
    copy.width = canvas.width;
    copy.height = canvas.height;
    copy.getContext("2d")?.drawImage(canvas, 0, 0);
  });
}

export function initReadingMagnifier() {
  if (document.querySelector("[data-reading-magnifier]")) return;

  const widget = document.createElement("div");
  widget.className = "reading-magnifier";
  widget.dataset.readingMagnifier = "";
  widget.innerHTML = `
    <span class="reading-magnifier__hint" aria-hidden="true">Move the glass over anything</span>
    <button
      class="reading-magnifier__button"
      type="button"
      aria-label="Turn on reading magnifier"
      aria-pressed="false"
      aria-describedby="reading-magnifier-tooltip"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="13.25" cy="13.25" r="7.75"></circle>
        <path d="m18.9 18.9 7.1 7.1"></path>
        <path class="reading-magnifier__spark" d="M24.5 4.5v4M22.5 6.5h4"></path>
      </svg>
    </button>
    <span class="reading-magnifier__tooltip" id="reading-magnifier-tooltip" role="tooltip">Magnify content</span>
    <span class="visually-hidden" aria-live="polite"></span>
  `;

  const lens = document.createElement("div");
  lens.className = "reading-lens";
  lens.setAttribute("aria-hidden", "true");
  lens.innerHTML = `
    <div class="reading-lens__glass">
      <div class="reading-lens__viewport">
        <div class="reading-lens__page"></div>
      </div>
      <span class="reading-lens__shine" aria-hidden="true"></span>
    </div>
  `;

  document.body.append(lens, widget);

  const button = widget.querySelector("button");
  const tooltip = widget.querySelector(".reading-magnifier__tooltip");
  const hint = widget.querySelector(".reading-magnifier__hint");
  const liveRegion = widget.querySelector("[aria-live]");
  const mirror = lens.querySelector(".reading-lens__page");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let active = false;
  let mirrorReady = false;
  let pointerFrame = null;
  let rebuildFrame = null;
  let hintTimer = null;
  let touchStart = null;
  let suppressTouchClick = false;
  let lastPoint = null;

  const buildMirror = () => {
    const bodyCopy = document.body.cloneNode(true);
    bodyCopy.querySelectorAll(".reading-magnifier, .reading-lens, script").forEach((element) => {
      element.remove();
    });
    copyLiveControls(document.body, bodyCopy);

    const fragment = document.createDocumentFragment();
    while (bodyCopy.firstChild) fragment.append(bodyCopy.firstChild);
    mirror.replaceChildren(fragment);

    const bodyStyle = window.getComputedStyle(document.body);
    mirror.style.width = `${document.documentElement.clientWidth}px`;
    mirror.style.minHeight = `${document.documentElement.scrollHeight}px`;
    mirror.style.background = bodyStyle.background;
    mirror.style.color = bodyStyle.color;
    mirror.style.fontFamily = bodyStyle.fontFamily;
    mirror.style.fontSize = bodyStyle.fontSize;
    mirror.style.fontWeight = bodyStyle.fontWeight;
    mirror.style.lineHeight = bodyStyle.lineHeight;
    copyCanvasFrames(document.body, mirror);
    mirrorReady = true;
  };

  const scheduleMirrorBuild = () => {
    if (!active || rebuildFrame) return;
    rebuildFrame = requestAnimationFrame(() => {
      rebuildFrame = null;
      buildMirror();
      if (lastPoint) positionLens(lastPoint.x, lastPoint.y, lastPoint.mode);
    });
  };

  const positionLens = (x, y, mode = "pointer") => {
    if (!mirrorReady) buildMirror();

    const size = lens.offsetWidth || 240;
    const radius = size / 2;
    const edge = 12;
    let left;
    let top;

    if (mode === "touch") {
      left = x - radius;
      top = y - size - 32;
    } else if (mode === "keyboard") {
      left = x + 24;
      top = y - radius;
    } else {
      left = x - radius;
      top = y - radius;
    }

    left = Math.max(edge, Math.min(left, window.innerWidth - size - edge));
    top = Math.max(edge, Math.min(top, window.innerHeight - size - edge));

    lens.style.left = `${left}px`;
    lens.style.top = `${top}px`;
    mirror.style.transform = `translate3d(${radius - (x + window.scrollX) * magnification}px, ${radius - (y + window.scrollY) * magnification}px, 0) scale(${magnification})`;
    lens.classList.toggle("is-touch", mode === "touch");
    lens.classList.toggle("is-keyboard", mode === "keyboard");
    lens.classList.add("is-visible");
    lastPoint = { x, y, mode };
  };

  const hideLens = () => {
    lens.classList.remove("is-visible", "is-touch", "is-keyboard");
    lastPoint = null;
  };

  const revealHint = () => {
    window.clearTimeout(hintTimer);
    hint.textContent = finePointer.matches
      ? "Move the glass over anything"
      : "Tap anywhere to place the glass";
    widget.classList.add("is-guiding");
    hintTimer = window.setTimeout(() => {
      widget.classList.remove("is-guiding");
    }, reduceMotion.matches ? 2200 : 3600);
  };

  const setActive = (nextActive, { announce = true } = {}) => {
    active = nextActive;
    document.documentElement.classList.toggle("reading-magnifier-active", active);
    widget.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
    button.setAttribute(
      "aria-label",
      active ? "Turn off reading magnifier" : "Turn on reading magnifier",
    );
    tooltip.textContent = active ? "Magnifier on · Esc to close" : "Magnify content";
    storeState(active);

    if (active) {
      buildMirror();
      if (announce) {
        revealHint();
        liveRegion.textContent = "Reading magnifier on.";
      }
    } else {
      window.clearTimeout(hintTimer);
      widget.classList.remove("is-guiding");
      hideLens();
      mirror.replaceChildren();
      mirrorReady = false;
      if (announce) liveRegion.textContent = "Reading magnifier off.";
    }
  };

  button.addEventListener("click", () => setActive(!active));

  document.addEventListener("pointermove", (event) => {
    const mousePointer = event.pointerType === "mouse" || (!event.pointerType && finePointer.matches);
    if (!active || !mousePointer || !event.isPrimary) return;
    if (pointerFrame) cancelAnimationFrame(pointerFrame);
    pointerFrame = requestAnimationFrame(() => {
      if (widget.contains(document.elementFromPoint(event.clientX, event.clientY))) {
        hideLens();
        return;
      }
      positionLens(event.clientX, event.clientY);
    });
  });

  document.addEventListener("pointerdown", (event) => {
    if (!active || event.pointerType === "mouse" || widget.contains(event.target)) return;
    touchStart = { x: event.clientX, y: event.clientY, time: performance.now() };
  });

  document.addEventListener("pointerup", (event) => {
    if (!active || event.pointerType === "mouse" || !touchStart || widget.contains(event.target)) return;
    const distance = Math.hypot(
      event.clientX - touchStart.x,
      event.clientY - touchStart.y,
    );
    const duration = performance.now() - touchStart.time;
    touchStart = null;
    if (distance <= 12 && duration <= 650) {
      if (lens.classList.contains("is-visible")) {
        suppressTouchClick = true;
        setActive(false);
        return;
      }
      positionLens(event.clientX, event.clientY, "touch");
    }
  });

  document.addEventListener("click", (event) => {
    if (suppressTouchClick) {
      suppressTouchClick = false;
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    const mouseClick =
      event.detail > 0 &&
      (event.pointerType === "mouse" || (!event.pointerType && finePointer.matches));
    if (!active || !mouseClick || widget.contains(event.target)) return;

    event.preventDefault();
    event.stopPropagation();
    setActive(false);
  }, true);

  document.addEventListener("focusin", (event) => {
    if (!active || event.target === button || widget.contains(event.target)) return;
    const rect = event.target.getBoundingClientRect?.();
    if (!rect) return;
    positionLens(rect.left + rect.width / 2, rect.top + rect.height / 2, "keyboard");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && active) {
      setActive(false);
      button.focus({ preventScroll: true });
    }
  });

  ["input", "change", "click"].forEach((eventName) => {
    document.addEventListener(eventName, (event) => {
      if (widget.contains(event.target)) return;
      scheduleMirrorBuild();
    });
  });

  window.addEventListener("blur", hideLens);
  window.addEventListener("resize", () => {
    hideLens();
    scheduleMirrorBuild();
  }, { passive: true });
  window.addEventListener("scroll", () => {
    if (lastPoint?.mode === "pointer") hideLens();
  }, { passive: true });

  setActive(readStoredState(), { announce: false });
}
