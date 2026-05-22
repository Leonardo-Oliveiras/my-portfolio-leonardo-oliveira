import type { PortfolioNavSection } from '@/types/section';
import type { Translations } from '@/lib/i18n';

export const NAV_SECTION_DESCRIPTOR = [
  { id: 'about', navKey: 'about' as const },
  { id: 'experience', navKey: 'experience' as const },
  { id: 'projects', navKey: 'projects' as const },
  { id: 'contact', navKey: 'contact' as const },
] as const;

export const PORTFOLIO_NAV_SECTION_IDS = NAV_SECTION_DESCRIPTOR.map(
  (section) => section.id,
);

export function buildPortfolioNavSections(
  t: Translations,
): PortfolioNavSection[] {
  return NAV_SECTION_DESCRIPTOR.map((section) => ({
    id: section.id,
    label: t.nav[section.navKey],
  }));
}
