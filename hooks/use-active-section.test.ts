import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  MockIntersectionObserver,
  type MockIntersectionObserverEntry,
} from '../vitest.setup';
import { useActiveSection } from '@/hooks/use-active-section';

describe('useActiveSection', () => {
  /** Verifies viewport intersection updates the active section id and cleans up observers. */
  beforeEach(() => {
    document.body.innerHTML = '';
    MockIntersectionObserver.reset();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('returns an empty string before any section intersects', () => {
    // Arrange
    const sectionIds = ['about', 'contact'];

    // Act
    const { result } = renderHook(() => useActiveSection(sectionIds));

    // Assert
    expect(result.current.activeSection).toBe('');
  });

  it('returns the id of the section with the highest intersection ratio', () => {
    // Arrange
    const about = document.createElement('section');
    about.id = 'about';
    document.body.appendChild(about);

    const { result } = renderHook(() => useActiveSection(['about']));

    const entries: MockIntersectionObserverEntry[] = [
      {
        target: { id: 'about' },
        isIntersecting: true,
        intersectionRatio: 0.8,
      },
    ];

    // Act
    act(() => {
      MockIntersectionObserver.trigger(entries);
    });

    // Assert
    expect(result.current.activeSection).toBe('about');
  });

  it('disconnects IntersectionObserver when the hook unmounts', () => {
    // Arrange
    const about = document.createElement('section');
    about.id = 'about';
    document.body.appendChild(about);

    const { unmount } = renderHook(() => useActiveSection(['about']));
    const observer = MockIntersectionObserver.getLastInstance();

    // Act
    unmount();

    // Assert
    expect(observer).not.toBeNull();
    expect(observer?.disconnect).toHaveBeenCalled();
  });
});
