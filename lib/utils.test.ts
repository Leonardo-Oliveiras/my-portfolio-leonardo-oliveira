import { describe, expect, it } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn', () => {
  /** Verifies class name joining and tailwind-merge conflict resolution. */
  it('merges multiple class strings into one', () => {
    // Arrange
    const base = 'px-2 py-1';
    const extra = 'text-sm';

    // Act
    const result = cn(base, extra);

    // Assert
    expect(result).toBe('px-2 py-1 text-sm');
  });

  it('resolves conflicting Tailwind utilities via tailwind-merge', () => {
    // Arrange
    const first = 'p-4';
    const second = 'p-2';

    // Act
    const result = cn(first, second);

    // Assert
    expect(result).toBe('p-2');
  });

  it('ignores falsy values without leaving extra spaces', () => {
    // Arrange
    const base = 'px-2';
    const ignored = [undefined, null, false] as const;

    // Act
    const result = cn(base, ...ignored, 'text-sm');

    // Assert
    expect(result).toBe('px-2 text-sm');
  });
});
