/**
 * External links and assets shared across contact, footer, and resume CTAs.
 */
export interface SiteConfig {
  links: {
    linkedin: string;
    github: string;
    email: string;
  };
  whatsapp: {
    href: string;
    display: string;
  };
  resume: {
    href: string;
    downloadName: string;
  };
}
