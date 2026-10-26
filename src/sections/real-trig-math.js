// Pure calculations shared by the section 5.2 explorers.
export const TAU = 2 * Math.PI;
export const functionKeys = ["sin", "cos", "tan", "csc", "sec", "cot"];
export const undefinedTex = String.raw`\text{undefined}`;
export const fmt = (value, digits = 5) => Number(value.toFixed(digits)).toString();
export function rational(n, d) {
  if (d < 0) { n = -n; d = -d; }
  let a = Math.abs(n), b = d;
  while (b) [a, b] = [b, a % b];
  const g = a || 1;
  return [n / g, d / g];
}
export function piFraction(n, d = 1) {
  [n, d] = rational(n, d);
  if (!n) return "0";
  const top = String.raw`${Math.abs(n) === 1 ? "" : Math.abs(n)}\pi`;
  return (n < 0 ? "-" : "") + (d === 1 ? top : String.raw`\frac{${top}}{${d}}`);
}
export function principal(t) {
  const a = ((t % TAU) + TAU) % TAU;
  return Math.abs(a) < 1e-12 || Math.abs(a - TAU) < 1e-12 ? 0 : a;
}
export function coordinates(t) {
  const a = principal(t), quarter = Math.round(a / (Math.PI / 2));
  if (Math.abs(a - quarter * Math.PI / 2) < 1e-12) return [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 0]][quarter];
  return [Math.cos(a), Math.sin(a)];
}
export function numericValues(x, y) {
  return { sin: y, cos: x, tan: x === 0 ? null : y / x, csc: y === 0 ? null : 1 / y, sec: x === 0 ? null : 1 / x, cot: y === 0 ? null : x / y };
}
export function location(x, y) {
  if (y === 0) return x > 0 ? "Positive x-axis" : "Negative x-axis";
  if (x === 0) return y > 0 ? "Positive y-axis" : "Negative y-axis";
  return "Quadrant " + (x > 0 ? (y > 0 ? "I" : "IV") : (y > 0 ? "II" : "III"));
}
const special = {
  0: ["0", "1", "0", undefinedTex, "1", undefinedTex],
  30: [String.raw`\frac12`, String.raw`\frac{\sqrt3}{2}`, String.raw`\frac{\sqrt3}{3}`, "2", String.raw`\frac{2\sqrt3}{3}`, String.raw`\sqrt3`],
  45: [String.raw`\frac{\sqrt2}{2}`, String.raw`\frac{\sqrt2}{2}`, "1", String.raw`\sqrt2`, String.raw`\sqrt2`, "1"],
  60: [String.raw`\frac{\sqrt3}{2}`, String.raw`\frac12`, String.raw`\sqrt3`, String.raw`\frac{2\sqrt3}{3}`, "2", String.raw`\frac{\sqrt3}{3}`],
  90: ["1", "0", undefinedTex, "1", undefinedTex, "0"],
};
export function exactValues(t) {
  const a = principal(t), ref = a <= Math.PI / 2 ? a : a <= Math.PI ? Math.PI - a : a <= 3 * Math.PI / 2 ? a - Math.PI : TAU - a;
  const base = Object.keys(special).map(Number).find(deg => Math.abs(ref - deg * Math.PI / 180) < 1e-10);
  if (base === undefined) return null;
  const values = numericValues(...coordinates(a));
  return Object.fromEntries(functionKeys.map((key, i) => [key, values[key] === null ? undefinedTex : values[key] === 0 ? "0" : (values[key] < 0 ? "-" : "") + special[base][i]]));
}
export const passports = {
  sin: { formula: "y", numerator: "y", denominator: null, domain: String.raw`\mathbb R`, range: "[-1,1]", period: 2, parity: "odd", restriction: "Sine uses the y-coordinate, so it is defined for every real input." },
  cos: { formula: "x", numerator: "x", denominator: null, domain: String.raw`\mathbb R`, range: "[-1,1]", period: 2, parity: "even", restriction: "Cosine uses the x-coordinate, so it is defined for every real input." },
  tan: { formula: String.raw`\frac yx`, numerator: "y", denominator: "x", domain: String.raw`t\ne\pi/2+k\pi`, range: String.raw`\mathbb R`, period: 1, parity: "odd", restriction: "Tangent needs x ≠ 0. Exclude π/2 + kπ, where k is an integer." },
  csc: { formula: String.raw`\frac1y`, numerator: "1", denominator: "y", domain: String.raw`t\ne k\pi`, range: String.raw`(-\infty,-1]\cup[1,\infty)`, period: 2, parity: "odd", restriction: "Cosecant needs y ≠ 0. Exclude kπ, where k is an integer." },
  sec: { formula: String.raw`\frac1x`, numerator: "1", denominator: "x", domain: String.raw`t\ne\pi/2+k\pi`, range: String.raw`(-\infty,-1]\cup[1,\infty)`, period: 2, parity: "even", restriction: "Secant needs x ≠ 0. Exclude π/2 + kπ, where k is an integer." },
  cot: { formula: String.raw`\frac xy`, numerator: "x", denominator: "y", domain: String.raw`t\ne k\pi`, range: String.raw`\mathbb R`, period: 1, parity: "odd", restriction: "Cotangent needs y ≠ 0. Exclude kπ, where k is an integer." },
};
