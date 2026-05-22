import type { SiteConfig } from '@/types/site';

export const siteConfig: SiteConfig = {
  links: {
    linkedin: 'https://www.linkedin.com/in/leonardo-oliveiras010/',
    github: 'https://github.com/Leonardo-Oliveiras',
    email: 'leonardooliveirass@outlook.com',
  },
  whatsapp: {
    href: 'https://wa.me/5511968384089',
    display: '+55 11 96838-4089',
  },
  resume: {
    href: '/CV_LEONARDO_OLIVEIRA_EN.pdf',
    downloadName: 'Leonardo_Oliveira_CV.pdf',
  },
};

export const mailtoLink = `mailto:${siteConfig.links.email}`;
