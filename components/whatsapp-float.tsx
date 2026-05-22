'use client';

import { useTranslations } from '@/hooks/locale-context';
import { siteConfig } from '@/lib/site';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';

export function WhatsAppFloat() {
  const { t } = useTranslations();

  return (
    <a
      href={siteConfig.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.contact.links.whatsapp}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <WhatsappIcon className="h-7 w-7" aria-hidden />
    </a>
  );
}
