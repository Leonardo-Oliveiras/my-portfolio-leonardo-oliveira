import type { PortfolioSection } from '@/types/section';
import type { Translations } from '@/lib/i18n';
import { AboutSection } from '@/components/sections/about-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';
import { NAV_SECTION_DESCRIPTOR } from '@/config/portfolio-nav-sections';

const SECTION_COMPONENTS = {
  about: AboutSection,
  experience: ExperienceSection,
  projects: ProjectsSection,
  contact: ContactSection,
} as const satisfies Record<
  (typeof NAV_SECTION_DESCRIPTOR)[number]['id'],
  PortfolioSection['component']
>;

/**
 * Resolves hash-linked sections with components — used to document the full
 * `PortfolioSection` contract (labels from runtime i18n).
 */
export function buildPortfolioSections(t: Translations): PortfolioSection[] {
  return NAV_SECTION_DESCRIPTOR.map((section) => ({
    id: section.id,
    label: t.nav[section.navKey],
    component: SECTION_COMPONENTS[section.id],
  }));
}
