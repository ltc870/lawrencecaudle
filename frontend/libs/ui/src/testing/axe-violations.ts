// ==========================================================================
// axe-violations.ts  //  test helper (roadmap decision 26)
// NEW file. Runs axe-core on rendered markup and returns one readable line per
// violation, so a test can assert:
//
//   expect(await axeViolations(container)).toEqual([]);
//
// and a failure prints exactly which rules broke and how many elements.
// Not exported from the library: only spec files import it.
// ==========================================================================

import axe from 'axe-core';

export async function axeViolations(element: Element): Promise<string[]> {
  const results = await axe.run(element, {
    rules: {
      // jsdom does not render, so contrast cannot be measured here. It is
      // covered by the token contrast table and the manual axe DevTools check.
      'color-contrast': { enabled: false },
      // A single component rendered on its own has no page landmarks around
      // it. Pages are checked for landmarks in the browser instead.
      region: { enabled: false },
    },
  });

  return results.violations.map(
    (violation) =>
      `${violation.id}: ${violation.help} (${violation.nodes.length} element(s))`,
  );
}
