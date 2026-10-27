const RADIUS = 22;
const ASCENT = 8000;
const TOP_REST = 800;
const DESCENT = 6000;
const RESET = 1200;
const CYCLE = ASCENT + TOP_REST + DESCENT + RESET;
const ease = t => t * t * (3 - 2 * t);

// Sample straight triangle edges and corresponding points on its circumcircle.
// Blending these outlines rounds the edges without changing the three corners.
const outline = Array.from({length: 96}, (_, index) => {
  const edge = Math.floor(index / 32), t = (index % 32) / 32;
  const a = -Math.PI / 2 + edge * 2 * Math.PI / 3, b = a + 2 * Math.PI / 3;
  const x = RADIUS * ((1 - t) * Math.cos(a) + t * Math.cos(b));
  const y = RADIUS * ((1 - t) * Math.sin(a) + t * Math.sin(b));
  const angle = Math.atan2(y, x);
  return {x, y, circleX: RADIUS * Math.cos(angle), circleY: RADIUS * Math.sin(angle)};
});

function phase(time) {
  const t = time % CYCLE;
  if (t < ASCENT) {
    const travel = ease(t / ASCENT);
    return {travel, roundness: ease(travel)};
  }
  if (t < ASCENT + TOP_REST) return {travel: 1, roundness: 1};
  if (t < ASCENT + TOP_REST + DESCENT) return {travel: 1 - ease((t - ASCENT - TOP_REST) / DESCENT), roundness: 1};
  // The circle stays round on the way down and reforms at the bottom.
  const reset = Math.max(0, (t - ASCENT - TOP_REST - DESCENT - 200) / (RESET - 200));
  return {travel: 0, roundness: 1 - ease(reset)};
}

export function initHeroRoll(root) {
  const curve = root.querySelector('.graph-curve');
  const wheel = root.querySelector('.graph-roller');
  const body = wheel?.querySelector('.graph-roller__body');
  if (!curve || !wheel || !body) return () => {};

  const length = curve.getTotalLength();
  const start = curve.getPointAtLength(0), next = curve.getPointAtLength(1);
  const initialAngle = Math.atan2(next.y - start.y, next.x - start.x);
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let frame = null, lastTime = null, elapsed = 0, visible = false;

  function paint(time) {
    const {travel, roundness} = phase(time), distance = length * travel;
    const point = curve.getPointAtLength(distance);
    const before = curve.getPointAtLength(Math.max(0, distance - .5));
    const after = curve.getPointAtLength(Math.min(length, distance + .5));
    const dx = after.x - before.x, dy = after.y - before.y, tangentLength = Math.hypot(dx, dy);
    const nx = dy / tangentLength, ny = -dx / tangentLength;
    const angle = initialAngle + distance / RADIUS, cos = Math.cos(angle), sin = Math.sin(angle);
    const points = outline.map(p => ({x: p.x + (p.circleX - p.x) * roundness, y: p.y + (p.circleY - p.y) * roundness}));
    // Keep the lowest edge/corner resting on the upper edge of the curve.
    const support = Math.max(...points.map(p => -((p.x * cos - p.y * sin) * nx + (p.x * sin + p.y * cos) * ny)));
    const x = point.x + nx * (support + 4), y = point.y + ny * (support + 4);
    body.setAttribute('d', points.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(3)} ${p.y.toFixed(3)}`).join('') + 'Z');
    body.setAttribute('fill', `rgb(${Math.round(166 + 89 * roundness)} ${Math.round(146 + 63 * roundness)} ${Math.round(232 - 130 * roundness)})`);
    wheel.setAttribute('transform', `translate(${x.toFixed(3)} ${y.toFixed(3)}) rotate(${(angle * 180 / Math.PI).toFixed(3)})`);
  }
  function stop() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    lastTime = null;
  }
  function tick(time) {
    frame = null;
    if (reducedMotion.matches || !visible || document.hidden) { lastTime = null; return; }
    if (lastTime !== null) elapsed += time - lastTime;
    lastTime = time;
    paint(elapsed);
    frame = requestAnimationFrame(tick);
  }
  function update() {
    if (reducedMotion.matches || !visible || document.hidden) stop();
    else if (frame === null) frame = requestAnimationFrame(tick);
  }
  const observer = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    update();
  });
  observer.observe(wheel.ownerSVGElement);
  reducedMotion.addEventListener('change', update);
  document.addEventListener('visibilitychange', update);
  paint(0);
  update();
  return () => {
    stop(); observer.disconnect();
    reducedMotion.removeEventListener('change', update);
    document.removeEventListener('visibilitychange', update);
  };
}
