import { describe, expect, it } from 'vitest';
import {
  getTranslations,
  translations,
  type Locale,
} from '@/lib/i18n';

/**
 * Collects structural paths for objects; arrays use a `[]` template from the first
 * item so differing array lengths (e.g. fewer highlights in PT) do not fail the shape check.
 */
function collectStructuralPaths(value: unknown, prefix = ''): string[] {
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return prefix ? [prefix] : [];
    }
    const arrayPath = prefix ? `${prefix}[]` : '[]';
    return collectStructuralPaths(value[0], arrayPath);
  }

  if (value !== null && typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>).flatMap(
      ([key, nested]) => {
        const path = prefix ? `${prefix}.${key}` : key;
        if (nested !== null && typeof nested === 'object') {
          return collectStructuralPaths(nested, path);
        }
        return [path];
      },
    );
  }

  return prefix ? [prefix] : [];
}

const REQUIRED_TOP_LEVEL_KEYS = [
  'nav',
  'hero',
  'techCarousel',
  'about',
  'howIWork',
  'experience',
  'projects',
  'quality',
  'ai',
  'contact',
  'footer',
] as const;

describe('getTranslations', () => {
  /** Verifies each locale resolves to a complete translation object with EN fallback. */
  it('returns English copy with all required top-level sections', () => {
    // Arrange — (none)

    // Act
    const t = getTranslations('en');

    // Assert
    for (const key of REQUIRED_TOP_LEVEL_KEYS) {
      expect(t).toHaveProperty(key);
    }
    expect(t.nav.about).toBe('About');
  });

  it('returns Portuguese copy with all required top-level sections', () => {
    // Arrange — (none)

    // Act
    const t = getTranslations('pt');

    // Assert
    for (const key of REQUIRED_TOP_LEVEL_KEYS) {
      expect(t).toHaveProperty(key);
    }
    expect(t.nav.about).toBe('Sobre');
  });

  it('returns Spanish copy with all required top-level sections', () => {
    // Arrange — (none)

    // Act
    const t = getTranslations('es');

    // Assert
    for (const key of REQUIRED_TOP_LEVEL_KEYS) {
      expect(t).toHaveProperty(key);
    }
    expect(typeof t.nav.about).toBe('string');
    expect(t.nav.about.length).toBeGreaterThan(0);
  });

  it('falls back to English when the locale key is missing from the catalog', () => {
    // Arrange
    const invalidLocale = 'zz' as Locale;

    // Act
    const t = getTranslations(invalidLocale);

    // Assert
    expect(t).toBeDefined();
    expect(t).toEqual(translations.en);
  });

  it('keeps identical structural paths across EN, PT, and ES trees', () => {
    // Arrange
    const enPaths = new Set(collectStructuralPaths(translations.en));
    const ptPaths = new Set(collectStructuralPaths(translations.pt));
    const esPaths = new Set(collectStructuralPaths(translations.es));

    // Act — (compare sets)

    // Assert
    const missingInPt = [...enPaths].filter((path) => !ptPaths.has(path));
    const missingInEs = [...enPaths].filter((path) => !esPaths.has(path));

    expect(missingInPt).toEqual([]);
    expect(missingInEs).toEqual([]);
  });
});
