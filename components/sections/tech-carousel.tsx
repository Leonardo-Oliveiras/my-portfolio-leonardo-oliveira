'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/locale-context';
import { technologies } from '@/components/sections/tech-carousel/data';

export function TechCarousel() {
  const { t } = useTranslations();

  return (
    <section className="py-16 overflow-hidden section-dark">
      <div className="px-6 md:px-12 lg:px-24 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest opacity-60"
        >
          {t.techCarousel.title}
        </motion.p>
      </div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none dark:from-[oklch(0.95_0.005_75)]" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none dark:from-[oklch(0.95_0.005_75)]" />

        {/* Scrolling track */}
        <div className="flex animate-scroll">
          {[...technologies, ...technologies].map((tech, index) => {
            const Icon = tech.Icon;
            return (
              <motion.div
                key={`${tech.name}-${index}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % technologies.length) * 0.05 }}
                className="flex items-center gap-3 px-6 md:px-8 py-3 mx-2 rounded-full border border-current/10 hover:border-current/20 transition-all duration-300 shrink-0"
              >
                <Icon className="w-5 h-5 shrink-0 opacity-70" aria-hidden />
                <span className="text-sm font-medium opacity-80 whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
