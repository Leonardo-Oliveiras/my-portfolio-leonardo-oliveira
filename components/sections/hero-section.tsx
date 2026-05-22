'use client';

import { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/locale-context';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Briefcase, Globe, Languages } from 'lucide-react';
import { ResumeDownloadButton } from '@/components/resume-download-button';
import { HeroProfileImage } from '@/components/hero-profile-image';
import { cn } from '@/lib/utils';
import {
  containerVariants,
  letterVariants,
  titleWords,
} from '@/components/sections/hero-section/data';

export function HeroSection() {
  const { t } = useTranslations();

  // memoized: recomputes only when hero stat labels change, not on every render
  const stats = useMemo(
    () => [
      { icon: Briefcase, label: t.hero.stats.experience },
      { icon: Globe, label: t.hero.stats.countries },
      { icon: Languages, label: t.hero.stats.languages },
    ],
    [t.hero.stats.experience, t.hero.stats.countries, t.hero.stats.languages],
  );

  const scrollToProjects = useCallback(() => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const renderStats = (className: string) => (
    <div className={className}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
          className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap"
        >
          <stat.icon className="w-3.5 h-3.5 shrink-0" />
          <span>{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 min-[500px]:px-6 md:px-12 lg:px-24 pt-24 pb-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30 pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            {/* Profile row — photo visible immediately (not inside opacity:0 motion) */}
            <div className="flex flex-col items-center max-[499px]:text-center min-[500px]:flex-row min-[500px]:items-center min-[500px]:text-left gap-4 mb-6">
              {renderStats(
                'flex flex-wrap justify-center gap-x-4 gap-y-2 min-[500px]:hidden',
              )}

              <HeroProfileImage
                className={cn(
                  'rounded-full border-2 border-border/50',
                  'w-16 h-16 max-[499px]:mx-auto',
                  'min-[500px]:w-16 min-[500px]:h-16 md:w-20 md:h-20',
                )}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-[499px]:w-full min-[500px]:flex-1"
              >
                <h2 className="text-xl min-[500px]:text-2xl md:text-3xl font-medium tracking-tight max-[499px]:text-center">
                  {t.hero.name}
                </h2>
                {renderStats(
                  'hidden min-[500px]:flex min-[500px]:flex-wrap gap-2 min-[500px]:gap-3 mt-2',
                )}
              </motion.div>
            </div>

            {/* Animated Title — words stay intact on small screens */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-[1.65rem] min-[500px]:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.15] mb-8"
            >
              {titleWords.map((word, wordIndex) => (
                  <span
                    key={word}
                    className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0"
                  >
                    {word.split('').map((letter, letterIndex) => (
                      <motion.span
                        key={`${wordIndex}-${letterIndex}`}
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-base min-[500px]:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl text-pretty mb-6"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Description — no enter animation so LCP text paints without ~1s Framer delay */}
            <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed max-w-2xl mb-12">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col min-[500px]:flex-row min-[500px]:flex-wrap gap-3 min-[500px]:gap-4"
            >
              <Button
                size="lg"
                className="group gap-2 px-6 h-12 text-base w-full min-[500px]:w-auto"
                onClick={scrollToProjects}
              >
                {t.hero.cta.projects}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="gap-2 px-6 h-12 text-base w-full min-[500px]:w-auto"
                onClick={scrollToContact}
              >
                <Mail className="w-4 h-4" />
                {t.hero.cta.contact}
              </Button>
              
              <ResumeDownloadButton
                label={t.hero.cta.resume}
                className="w-full min-[500px]:w-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
