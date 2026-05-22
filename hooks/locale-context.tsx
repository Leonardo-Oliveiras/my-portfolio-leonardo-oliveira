'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  type Locale,
  type Translations,
  defaultLocale,
  getTranslations,
} from '@/lib/i18n';

export type { Translations };

// Split contexts so consumers subscribe only to the slice they need (fewer re-renders).
const LocaleValueContext = createContext<Locale | undefined>(undefined);
const SetLocaleContext = createContext<
  ((locale: Locale) => void) | undefined
>(undefined);
const TranslationsContext = createContext<Translations | undefined>(
  undefined,
);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  // memoized: translation object only changes when locale changes, not when setLocale identity is stable
  const t = useMemo(() => getTranslations(locale), [locale]);

  return (
    <LocaleValueContext.Provider value={locale}>
      <SetLocaleContext.Provider value={setLocale}>
        <TranslationsContext.Provider value={t}>
          {children}
        </TranslationsContext.Provider>
      </SetLocaleContext.Provider>
    </LocaleValueContext.Provider>
  );
}

export interface UseLocaleValueReturn {
  locale: Locale;
}

/**
 * Subscribes to the active locale string only — not `setLocale` or `t`.
 */
export function useLocaleValue(): UseLocaleValueReturn {
  const locale = useContext(LocaleValueContext);
  if (locale === undefined) {
    throw new Error('useLocaleValue must be used within a LocaleProvider');
  }
  return { locale };
}

export interface UseSetLocaleReturn {
  setLocale: (locale: Locale) => void;
}

/**
 * Subscribes to the locale setter only — stable reference from `useCallback` in the provider.
 */
export function useSetLocale(): UseSetLocaleReturn {
  const setLocale = useContext(SetLocaleContext);
  if (setLocale === undefined) {
    throw new Error('useSetLocale must be used within a LocaleProvider');
  }
  return { setLocale };
}

export interface UseTranslationsReturn {
  t: Translations;
}

/**
 * Subscribes to the translation object only — re-renders when locale (and thus `t`) changes,
 * not when unrelated parent state updates.
 */
export function useTranslations(): UseTranslationsReturn {
  const t = useContext(TranslationsContext);
  if (t === undefined) {
    throw new Error('useTranslations must be used within a LocaleProvider');
  }
  return { t };
}

export interface UseLocaleReturn {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

/**
 * Full locale API — composes slice hooks; prefer `useTranslations` / `useLocaleValue` / `useSetLocale`
 * when a component does not need every field.
 */
export function useLocale(): UseLocaleReturn {
  const { locale } = useLocaleValue();
  const { setLocale } = useSetLocale();
  const { t } = useTranslations();
  return { locale, setLocale, t };
}
