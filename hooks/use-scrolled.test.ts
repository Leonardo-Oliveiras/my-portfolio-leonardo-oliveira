import { act, renderHook } from '@testing-library/react';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useScrolled } from '@/hooks/use-scrolled';

function setScrollY(value: number): void {
  Object.defineProperty(window, 'scrollY', {
    value,
    configurable: true,
    writable: true,
  });
}

describe('useScrolled', () => {
  /** Verifies scroll position is compared against the threshold to expose `isScrolled`. */
  beforeEach(() => {
    setScrollY(0);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns false when scrollY is at or below the threshold', () => {
    // Arrange
    setScrollY(50);
    const threshold = 50;

    // Act
    const { result } = renderHook(() => useScrolled(threshold));

    // Assert
    expect(result.current.isScrolled).toBe(false);
  });

  it('returns true when scrollY is above the threshold', () => {
    // Arrange
    setScrollY(0);
    const threshold = 50;
    const { result } = renderHook(() => useScrolled(threshold));

    // Act
    act(() => {
      setScrollY(100);
      window.dispatchEvent(new Event('scroll'));
    });

    // Assert
    expect(result.current.isScrolled).toBe(true);
  });

  it('removes the scroll listener when the hook unmounts', () => {
    // Arrange
    const removeListener = vi.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useScrolled(50));

    // Act
    unmount();

    // Assert
    expect(removeListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
    );
  });

  it('uses the server snapshot without accessing window during SSR render', () => {
    // Arrange
    function ServerScrolled({ threshold }: { threshold: number }) {
      const { isScrolled } = useScrolled(threshold);
      return createElement('output', null, String(isScrolled));
    }

    // Act
    const html = renderToString(
      createElement(ServerScrolled, { threshold: 50 }),
    );

    // Assert
    expect(html).toContain('false');
  });
});
