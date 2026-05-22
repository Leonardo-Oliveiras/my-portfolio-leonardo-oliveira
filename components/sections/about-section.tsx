'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/locale-context';
import { Music, Gamepad2, Plane } from 'lucide-react';
import Image from 'next/image';

export function AboutSection() {
  const { t } = useTranslations();

  const languages = [
    { 
      name: t.about.languages.native, 
      level: t.about.languages.nativeLevel,
      progress: 100,
      flag: '🇧🇷',
    },
    { 
      name: t.about.languages.english, 
      level: t.about.languages.englishLevel,
      progress: 85,
      flag: '🇺🇸',
    },
    { 
      name: t.about.languages.spanish, 
      level: t.about.languages.spanishLevel,
      progress: 85,
      flag: '🇪🇸',
    },
    { 
      name: t.about.languages.norwegian, 
      level: t.about.languages.norwegianLevel,
      progress: 25,
      flag: '🇳🇴',
    },
  ];

  const interests = [
    { icon: Music, text: t.about.interests.music },
    { icon: Gamepad2, text: t.about.interests.gaming },
    { icon: Plane, text: t.about.interests.travel },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">
            {t.about.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            {t.about.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Story */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl leading-relaxed text-foreground"
            >
              {t.about.intro}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed text-muted-foreground"
            >
              {t.about.passion}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg leading-relaxed text-muted-foreground"
            >
              {t.about.journey}
            </motion.p>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4 space-y-4"
            >
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                {t.about.interests.title}
              </h3>
              <div className="grid gap-3">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <interest.icon className="w-4 h-4 text-muted-foreground/60" />
                    <span className="text-sm text-muted-foreground">{interest.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column - Languages & Cats */}
          <div className="space-y-8">
            {/* Languages - Enhanced visual emphasis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-card border border-border/50"
            >
              <h3 className="text-lg font-medium mb-2">
                {t.about.languages.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t.about.languages.subtitle}
              </p>
              
              <div className="space-y-5">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl" role="img" aria-label={lang.name}>
                          {lang.flag}
                        </span>
                        <span className="font-medium">{lang.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{lang.level}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                        className="h-full bg-foreground/80 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Cats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative overflow-hidden rounded-3xl border border-border/50"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/cats.webp"
                  alt={t.about.interests.cats}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-medium text-foreground">{t.about.interests.cats}</p>
                  <p className="text-sm text-muted-foreground">{t.about.interests.catsSubtitle}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
