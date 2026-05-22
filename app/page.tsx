import { Navigation } from '@/components/navigation';
import { BelowFoldSections } from '@/components/below-fold-sections';
import { HeroSection } from '@/components/sections/hero-section';
import { WhatsAppFloat } from '@/components/whatsapp-float';

export default function HomePage() {
  return (
    <main className="relative">
      <WhatsAppFloat />
      <Navigation />
      <HeroSection />
      <BelowFoldSections />
    </main>
  );
}
