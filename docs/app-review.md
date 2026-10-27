# Course-wide consistency review

Reviewed on October 27, 2026, against the local production build.

The review covers the course home and all 33 lessons, following the course map's sequence: notation → systems → coordinates → functions → polynomial and rational functions → exponential and logarithmic functions → right-triangle trigonometry → unit-circle trigonometry → analytic trigonometry.

## Findings and corrections

| Priority | Finding | Correction |
| --- | --- | --- |
| Medium | The early lesson sequence stopped at 9.2 and 1.9; 9.1 also lacked a link back to the notation guide. | Connected the previous/next links through 0.0 → 9.1 → 9.2 → 1.9 → 2.1. Verified the complete sequence against the course map. |
| Medium | Several lessons overflowed horizontally at narrow or intermediate widths: 0.0, 2.2, 2.3, 2.6, 2.7, 4.1, 4.2 and 4.3. | Removed the global minimum body width so a vertical scrollbar cannot force page overflow; allowed grid children and form controls to shrink, contained long equation readouts, constrained the composition illustration, and stacked the natural-exponential illustration's sequence on small phones, and allowed long section labels to wrap after an unbroken badge. The wide numerical table keeps its own horizontal scroll area. |
| Medium | Older coordinate and system controls silently read a blank field as zero. Net-change and asymptote controls had similar behavior. | Used native numeric values, explained missing or invalid inputs, cleared stale diagrams/readouts, and restored results when valid inputs returned. Coincident diameter endpoints now explain why they cannot define a circle. |
| Medium | Some older guided examples and workshops showed given information without an explicit target. | Added persistent goals to exact evaluation, inverse functions, rule derivations, expansion, combination, equation classification and solving. The single-log assembler keeps its original expression visible throughout the solution. Logarithmic equation goals include the original domain. Practice in 4.5 now states whether to find x or the doubling time. System and median examples also state their targets before their first steps; switching methods in 9.1 resets the revealed solution. |
| Low | Desktop titles wrapped into three or four lines, producing inconsistent hero layouts. | Balanced the shared title size and column spacing. All home/lesson titles occupy their intended two lines at the tested desktop widths. Section badges remain unbroken. |
| Low | Chapter navigation could crowd the brand and utility links between the desktop and tablet layouts. | Placed chapter navigation on its own row at intermediate desktop widths. Active lesson links now expose `aria-current="page"`. |
| Low | Three notation checks and two polynomial controls lacked accessible names. | Added names matching the visible questions and fieldset legends. |
| Low | Older numeric answer readers coerced an empty answer to zero; README links followed a different order from the course map and listed unused tool directories. | Updated the numeric answer reads, reordered the README shortcuts to match the course sequence, removed stale structure entries, and corrected the home page's Mathboard preview label. |

## Verification

- Production build: `npm run build` passed.
- Patch formatting: `git diff --check` passed.
- Reviewed the home page and all 33 lessons at widths of 1440, 1280, 1100, 390, 375, 360 and 320 pixels: 238 page/viewport combinations.
- Repeated all 34 pages at the narrowest width after removing the minimum body width; overflow checks compare against the actual document content width, including space occupied by the vertical scrollbar.
- Exercised 2,566 selection and step transitions across desktop and phone views.
- Verified lesson destinations, previous/next course order, in-page anchors, active-page labels, accessible form names, duplicate live IDs, page overflow, navigation overlap, runtime exceptions and KaTeX errors. No failures remained in these checks.
- Passed 618 targeted browser checks for valid/invalid input recovery, zero and coincident-point cases, persistent goals, stepper resets, domain prompts and magnifier isolation at desktop and phone widths.
- Inspected screenshots of the home page, representative lessons, intermediate desktop navigation, updated exercise goals, and the affected narrow-screen layouts.

The magnifier retains its inert mirror and removes copied radio names. Its live radio selections and keyboard focus remain isolated from the mirrored controls.

This review evaluates interface, instructional and interaction consistency. Mathematical verification used representative cases; it does not constitute a fresh derivation of every worked solution in the course. External Mathboard hosting is separate from this app.

Changes remain local until a commit or deployment is requested.
