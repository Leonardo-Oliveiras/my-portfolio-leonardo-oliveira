'use client';

import { useCallback } from 'react';
import { useLocaleValue, useSetLocale, useTranslations } from '@/hooks/locale-context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { locales, localeNames, type Locale } from '@/lib/i18n';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import { mailtoLink, siteConfig } from '@/lib/site';

export function Footer() {
  const { locale } = useLocaleValue();
  const { setLocale } = useSetLocale();
  const { t } = useTranslations();

  const handleLocaleChange = useCallback(
    (loc: Locale) => {
      setLocale(loc);
    },
    [setLocale],
  );

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground order-2 md:order-1">
            {t.footer.copyright}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 order-1 md:order-2">
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={t.footer.links.linkedin}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={t.footer.links.github}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={mailtoLink}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={t.footer.links.email}
            >
              <Mail className="w-5 h-5" />
            </a>

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {locales.map((loc) => (
                  <DropdownMenuItem
                    key={loc}
                    onClick={() => handleLocaleChange(loc as Locale)}
                    className={locale === loc ? 'bg-muted' : ''}
                  >
                    {localeNames[loc]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </footer>
  );
}
