// Rational cycle coordinates keep guided graph labels exact.
export function fraction(n, d = 1) {
  if (!Number.isFinite(n) || !Number.isFinite(d) || d === 0) throw new Error("Invalid fraction");
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  const g = gcd(Math.abs(Math.round(n)), Math.abs(Math.round(d))) || 1;
  return [Math.round(n) / g * Math.sign(d), Math.abs(Math.round(d)) / g];
}
export const fromDecimal = x => fraction(Math.round(x * 1000), 1000);
export const add = (a, b) => fraction(a[0] * b[1] + b[0] * a[1], a[1] * b[1]);
export const scale = (a, n, d = 1) => fraction(a[0] * n, a[1] * d);
export const value = a => a[0] / a[1];
export function fractionTex(a, pi = false) {
  const [n, d] = fraction(...a);
  if (!n) return "0";
  const numerator = `${Math.abs(n) === 1 && pi ? "" : Math.abs(n)}${pi ? "\\pi" : ""}`;
  return `${n < 0 ? "-" : ""}${d === 1 ? numerator : `\\frac{${numerator}}{${d}}`}`;
}
export function cycle(model) {
  const { a, br, h, d, fn, bPi = false } = model;
  if (!a || !br[0]) return null;
  const period = fraction(2 * br[1], Math.abs(br[0]));
  const pattern = fn === "sin" ? [0, 1, 0, -1, 0].map(y => y * Math.sign(br[0])) : [1, 0, -1, 0, 1];
  return { period, quarter: scale(period, 1, 4), pi: !bPi,
    points: pattern.map((y, j) => ({ x: add(h, scale(period, j, 4)), y: d + a * y })) };
}
export function evaluate(model, x) {
  const b = value(model.br) * (model.bPi ? Math.PI : 1);
  const h = value(model.h) * (model.bPi ? 1 : Math.PI);
  return model.d + model.a * Math[model.fn](b * (x - h));
}
