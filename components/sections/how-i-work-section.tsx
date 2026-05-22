'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/locale-context';
import { principleIcons } from '@/components/sections/how-i-work-section/data';

export function HowIWorkSection() {
  const { t } = useTranslations();

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 section-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-widest mb-3 opacity-60">
            {t.howIWork.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            {t.howIWork.title}
          </h2>
        </motion.div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {t.howIWork.principles.map((principle, index) => {
            const Icon = principleIcons[index];
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl border border-current/10 hover:border-current/20 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-current/5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">
                      {principle.title}
                    </h3>
                    <p className="opacity-70 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
