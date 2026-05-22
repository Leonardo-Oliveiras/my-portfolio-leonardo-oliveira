'use client';

import { useCallback } from 'react';

export interface UseScrollToSectionReturn {
  scrollToSection: (href: string) => void;
}

/**
 * Smooth-scrolls to a section by hash (`#about`) or raw id (`about`).
 *
 * @param onAfterScroll - Optional callback after initiating scroll (e.g. close mobile menu).
 * @returns `{ scrollToSection }` — stable handler via `useCallback`.
 *
 * SSR: safe to call only from event handlers; uses `document.getElementById` on the client.
 */
export function useScrollToSection(
  onAfterScroll?: () => void,
): UseScrollToSectionReturn {
  const scrollToSection = useCallback(
    (href: string) => {
      const id = href.startsWith('#') ? href.slice(1) : href;
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      onAfterScroll?.();
    },
    [onAfterScroll],
  );

  return { scrollToSection };
}
