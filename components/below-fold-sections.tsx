'use client';

import dynamic from 'next/dynamic';
import { SectionSkeleton } from '@/components/section-skeleton';

const TechCarousel = dynamic(
  () => import('@/components/sections/tech-carousel').then((m) => m.TechCarousel),
  { ssr: false, loading: () => <SectionSkeleton className="min-h-36 w-full" /> },
);

const AboutSection = dynamic(
  () => import('@/components/sections/about-section').then((m) => m.AboutSection),
  { ssr: false, loading: () => <SectionSkeleton className="min-h-[720px] w-full" /> },
);

const HowIWorkSection = dynamic(
  () => import('@/components/sections/how-i-work-section').then((m) => m.HowIWorkSection),
  { ssr: false, loading: () => <SectionSkeleton className="min-h-[520px] w-full" /> },
);

const ExperienceSection = dynamic(
  () => import('@/components/sections/experience-section').then((m) => m.ExperienceSection),
  { ssr: false, loading: () => <SectionSkeleton className="min-h-[480px] w-full" /> },
);

const ProjectsSection = dynamic(
  () => import('@/components/sections/projects-section').then((m) => m.ProjectsSection),
  { ssr: false, loading: () => <SectionSkeleton className="min-h-[640px] w-full" /> },
);

const QualitySection = dynamic(
  () => import('@/components/sections/quality-section').then((m) => m.QualitySection),
  { ssr: false, loading: () => <SectionSkeleton className="min-h-[320px] w-full" /> },
);

const AISection = dynamic(
  () => import('@/components/sections/ai-section').then((m) => m.AISection),
  { ssr: false, loading: () => <SectionSkeleton className="min-h-[420px] w-full" /> },
);

const ContactSection = dynamic(
  () => import('@/components/sections/contact-section').then((m) => m.ContactSection),
  { ssr: false, loading: () => <SectionSkeleton className="min-h-[480px] w-full" /> },
);

const Footer = dynamic(
  () => import('@/components/footer').then((m) => m.Footer),
  { ssr: false, loading: () => <SectionSkeleton className="min-h-24 w-full" /> },
);

export function BelowFoldSections() {
  return (
    <>
      <TechCarousel />
      <AboutSection />
      <HowIWorkSection />
      <ExperienceSection />
      <ProjectsSection />
      <QualitySection />
      <AISection />
      <ContactSection />
      <Footer />
    </>
  );
}
