export const inverseFunctions = {
  cos: { inverse: Math.acos, forward: Math.cos, tex: "\\arccos", domain: "[-1,1]", range: "[0,\\pi]", lo: 0, hi: Math.PI },
  sin: { inverse: Math.asin, forward: Math.sin, tex: "\\arcsin", domain: "[-1,1]", range: "[-\\pi/2,\\pi/2]", lo: -Math.PI/2, hi: Math.PI/2 },
  tan: { inverse: Math.atan, forward: Math.tan, tex: "\\arctan", domain: "\\mathbb R", range: "(-\\pi/2,\\pi/2)", lo: -Math.PI/2, hi: Math.PI/2 },
};
export function principalAngle(kind, input) {
  if (!Number.isFinite(input) || (kind !== "tan" && Math.abs(input) > 1)) return null;
  return inverseFunctions[kind].inverse(input);
}
export const shiftedDomain = [-1 - Math.PI/2, -1 + Math.PI/2];
export const shiftedForward = x => 5 - 3 * Math.sin(x + 1);
export function shiftedInverse(u) {
  return Number.isFinite(u) && u >= 2 && u <= 8 ? Math.asin((5-u)/3)-1 : null;
}
