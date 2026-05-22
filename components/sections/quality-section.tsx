'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/locale-context';
import { metricIcons } from '@/components/sections/quality-section/data';

export function QualitySection() {
  const { t } = useTranslations();

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">
            {t.quality.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            {t.quality.title}
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.quality.metrics.map((metric, index) => {
            const Icon = metricIcons[index];
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300 text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-muted mb-6">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-4xl md:text-5xl font-semibold mb-2 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm font-medium mb-2">
                  {metric.label}
                </div>
                <p className="text-xs text-muted-foreground">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
