import { fraction, add, scale, value } from "./sinusoid-math.js";

export const makeModel = (fn = "tan", a = 1, br = [1, 1], h = [0, 1], d = 0) => ({ fn, a, br, h, d });
export const reciprocal = fn => fn === "sec" || fn === "csc";
export const cosineDenominator = fn => fn === "tan" || fn === "sec";
export const multiply = (a, b) => fraction(a[0] * b[0], a[1] * b[1]);
export const divide = (a, b) => fraction(a[0] * b[1], a[1] * b[0]);

export function features(m) {
  if (!Number.isFinite(m.a) || !Number.isFinite(m.d) || !m.a || value(m.br) <= 0) throw new Error("Use a nonzero vertical factor and a positive frequency coefficient.");
  const period = divide([reciprocal(m.fn) ? 2 : 1, 1], m.br);
  const firstPole = add(m.h, divide(cosineDenominator(m.fn) ? [1, 2] : [0, 1], m.br));
  const poleSpacing = divide([1, 1], m.br);
  const tangent = m.fn === "tan";
  const branch = cosineDenominator(m.fn) ? [add(m.h, scale(poleSpacing, -1, 2)), add(m.h, scale(poleSpacing, 1, 2))] : [m.h, add(m.h, poleSpacing)];
  const offsets = tangent ? [-1, 0, 1] : m.fn === "cot" ? [1, 2, 3] : m.fn === "sec" ? [0, 4, 8] : [2, 6];
  const outputs = tangent ? [-1, 0, 1] : m.fn === "cot" ? [1, 0, -1] : m.fn === "sec" ? [1, -1, 1] : [1, -1];
  const landmarks = offsets.map((n, i) => ({ x: add(m.h, scale(poleSpacing, n, 4)), y: m.d + m.a * outputs[i] }));
  return { period, poleSpacing, firstPole, branch, landmarks, increasing: tangent ? m.a > 0 : m.fn === "cot" ? m.a < 0 : null };
}

export function phase(m, x) { return multiply(m.br, add(x, scale(m.h, -1))); }
export function isPole(m, x) {
  const [n, d] = phase(m, x);
  return cosineDenominator(m.fn) ? (2 * n) % d === 0 && Math.abs((2 * n / d) % 2) === 1 : n % d === 0;
}

export function at(m, x) {
  if (isPole(m, x)) return null;
  const [n, d] = phase(m, x), t = (n % (2 * d)) / d * Math.PI;
  const sin = n % d === 0 ? 0 : Math.sin(t);
  const cos = (2 * n) % d === 0 && Math.abs((2 * n / d) % 2) === 1 ? 0 : Math.cos(t);
  const y = m.fn === "tan" ? sin / cos : m.fn === "cot" ? cos / sin : m.fn === "sec" ? 1 / cos : 1 / sin;
  return m.d + m.a * y;
}

// Plot intervals are split at analytic poles before any samples are connected.
export function poles(m, min, max) {
  const { firstPole, poleSpacing } = features(m), start = value(firstPole), gap = value(poleSpacing);
  const result = [];
  for (let k = Math.ceil((min - start) / gap - 1e-10); k <= Math.floor((max - start) / gap + 1e-10); k++) result.push(add(firstPole, scale(poleSpacing, k)));
  return result;
}
export function numericAt(m, x) {
  const u = value(m.br) * (x - value(m.h) * Math.PI), s = Math.sin(u), c = Math.cos(u);
  return m.d + m.a * (m.fn === "tan" ? s / c : m.fn === "cot" ? c / s : m.fn === "sec" ? 1 / c : 1 / s);
}
