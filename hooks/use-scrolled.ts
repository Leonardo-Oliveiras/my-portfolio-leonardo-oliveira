'use client';

import { useCallback, useSyncExternalStore } from 'react';

export interface UseScrolledReturn {
  isScrolled: boolean;
}

/**
 * Tracks whether the window has scrolled past a vertical threshold.
 *
 * @param threshold - Pixel offset from the top; `isScrolled` is true when `scrollY > threshold`.
 * @returns `{ isScrolled }` — false on the server and until scroll position is read on the client.
 *
 * SSR: `getServerSnapshot` always returns false; subscribes to `scroll` only in the browser.
 */
export function useScrolled(threshold: number): UseScrolledReturn {
  const getSnapshot = useCallback(() => {
    return window.scrollY > threshold;
  }, [threshold]);

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const handleScroll = () => onStoreChange();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    },
    [],
  );

  const isScrolled = useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => false,
  );

  return { isScrolled };
}
