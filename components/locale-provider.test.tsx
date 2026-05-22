import { cleanup, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import {
  LocaleProvider,
  useSetLocale,
  useTranslations,
} from '@/hooks/locale-context';

function TranslationsProbe() {
  const { t } = useTranslations();
  return <span data-testid="nav-about">{t.nav.about}</span>;
}

function LocaleSwitcherProbe() {
  const { t } = useTranslations();
  const { setLocale } = useSetLocale();

  return (
    <>
      <span data-testid="nav-about">{t.nav.about}</span>
      <button type="button" onClick={() => setLocale('pt')}>
        Switch to PT
      </button>
    </>
  );
}

describe('LocaleProvider', () => {
  /** Verifies default locale, locale switching, document lang, and provider guardrails. */
  afterEach(() => {
    cleanup();
  });

  it('exposes English nav copy by default via useTranslations', () => {
    // Arrange
    render(
      <LocaleProvider>
        <TranslationsProbe />
      </LocaleProvider>,
    );

    // Act — (initial render)

    // Assert
    expect(screen.getByTestId('nav-about')).toHaveTextContent('About');
  });

  it('updates translations when setLocale switches to Portuguese', async () => {
    // Arrange
    const user = userEvent.setup();
    render(
      <LocaleProvider>
        <LocaleSwitcherProbe />
      </LocaleProvider>,
    );

    // Act
    await user.click(screen.getByRole('button', { name: 'Switch to PT' }));

    // Assert
    expect(screen.getByTestId('nav-about')).toHaveTextContent('Sobre');
  });

  it('sets document.documentElement.lang when the locale changes', async () => {
    // Arrange
    const user = userEvent.setup();
    render(
      <LocaleProvider>
        <LocaleSwitcherProbe />
      </LocaleProvider>,
    );

    // Act
    await user.click(screen.getByRole('button', { name: 'Switch to PT' }));

    // Assert
    expect(document.documentElement.lang).toBe('pt');
  });

  it('throws when useTranslations is called outside LocaleProvider', () => {
    // Arrange — (no provider)

    // Act
    const renderOutside = () => renderHook(() => useTranslations());

    // Assert
    expect(renderOutside).toThrow(
      'useTranslations must be used within a LocaleProvider',
    );
  });
});
