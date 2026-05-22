import { en } from '@/lib/locales/en';
import { es } from '@/lib/locales/es';
import { pt } from '@/lib/locales/pt';

export const locales = ['en', 'pt', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
};

export const translations = {
  en,
  pt,
  es,
} as const;

export type Translations = (typeof translations)[Locale];

export type FallbackStrategy = 'default-locale' | 'key-passthrough';

type LocaleFallbackHandler = (locale: string) => Translations | undefined;

const localeFallbackStrategies: Record<FallbackStrategy, LocaleFallbackHandler> =
  {
    'default-locale': (locale) =>
      translations[locale as Locale] ?? translations[defaultLocale],
    'key-passthrough': (locale) => {
      if (locale in translations) {
        return translations[locale as Locale];
      }
      return undefined;
    },
  };

/**
 * Resolves copy for a locale using an explicit **Strategy** fallback.
 *
 * The catalog lookup is separated from fallback behavior so callers can swap
 * strategies (e.g. substitute `defaultLocale` vs. refuse cross-locale substitution)
 * without changing section components.
 *
 * @param locale - Requested locale code (may be outside `Locale` at runtime).
 * @param fallback - `default-locale` (English catalog when missing) or `key-passthrough`
 *   (only defined catalog entries; missing codes yield `undefined` before the safety net).
 * @returns A `Translations` object; unknown locales still resolve to English at runtime
 *   when `key-passthrough` returns `undefined`, preserving existing single-page behavior.
 */
export function getTranslations(
  locale: string,
  fallback: FallbackStrategy = 'default-locale',
): Translations {
  const resolved = localeFallbackStrategies[fallback](locale);
  if (resolved !== undefined) {
    return resolved;
  }
  return translations[defaultLocale];
}
