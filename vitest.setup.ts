import '@testing-library/jest-dom/vitest';
import { beforeEach, vi } from 'vitest';

/**
 * IntersectionObserver mock — drives `useActiveSection` callback in tests without a real layout.
 */
export type MockIntersectionObserverEntry = {
  target: Pick<Element, 'id'> & { id: string };
  isIntersecting: boolean;
  intersectionRatio: number;
};

let intersectionObserverCallback: IntersectionObserverCallback | null = null;
let lastIntersectionObserver: MockIntersectionObserver | null = null;

export class MockIntersectionObserver {
  readonly observe = vi.fn();
  readonly disconnect = vi.fn();
  readonly unobserve = vi.fn();

  constructor(callback: IntersectionObserverCallback) {
    intersectionObserverCallback = callback;
    lastIntersectionObserver = this;
  }

  static getLastInstance(): MockIntersectionObserver | null {
    return lastIntersectionObserver;
  }

  static trigger(entries: MockIntersectionObserverEntry[]): void {
    intersectionObserverCallback?.(
      entries as IntersectionObserverEntry[],
      {} as IntersectionObserver,
    );
  }

  static reset(): void {
    intersectionObserverCallback = null;
    lastIntersectionObserver = null;
  }
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

/**
 * MutationObserver stub — `useActiveSection` registers one on `document.body`.
 */
export class MockMutationObserver {
  readonly disconnect = vi.fn();
  readonly observe = vi.fn();

  constructor(_callback: MutationCallback) {}
}

vi.stubGlobal('MutationObserver', MockMutationObserver);

beforeEach(() => {
  MockIntersectionObserver.reset();
  document.documentElement.lang = 'en';
});
