'use client';

import { useSyncExternalStore } from 'react';

export interface UseMountedReturn {
  mounted: boolean;
}

const subscribe = () => () => {};

/**
 * Becomes `true` after the first client paint — use to gate client-only UI (e.g. theme toggle).
 *
 * @returns `{ mounted }` — false during SSR and the first render on the client.
 *
 * SSR: uses `getServerSnapshot` so the server always sees `false`.
 */
export function useMounted(): UseMountedReturn {
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  return { mounted };
}
