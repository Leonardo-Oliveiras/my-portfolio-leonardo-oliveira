'use client';

import { useEffect, useState } from 'react';

export interface UseActiveSectionReturn {
  activeSection: string;
}

/**
 * Returns the id of the section most visible in the viewport (IntersectionObserver).
 *
 * @param sectionIds - DOM element ids to observe (without `#`).
 * @returns `{ activeSection }` — empty string until a section intersects; updates as the user scrolls.
 *
 * SSR: returns `''` on the server; observer runs only in `useEffect`. Observes sections as they
 * mount (e.g. lazy-loaded below-fold content) via a `MutationObserver` on `document.body`.
 */
export function useActiveSection(sectionIds: string[]): UseActiveSectionReturn {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const observedIds = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (intersecting.length === 0) {
          return;
        }

        const best = intersecting.reduce((prev, curr) =>
          curr.intersectionRatio > prev.intersectionRatio ? curr : prev,
        );

        const id = best.target.id;
        if (id) {
          setActiveSection(id);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    const observeNewSections = () => {
      for (const id of sectionIds) {
        if (observedIds.has(id)) {
          continue;
        }
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
          observedIds.add(id);
        }
      }
    };

    observeNewSections();

    const mutationObserver = new MutationObserver(observeNewSections);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [sectionIds]);

  return { activeSection };
}
