'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/locale-context';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, FlaskConical, Gauge } from 'lucide-react';

export function AISection() {
  const { t } = useTranslations();

  const benefitIcons = [Zap, Shield, FlaskConical, Gauge];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 section-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-widest mb-3 opacity-60">
              {t.ai.subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
              {t.ai.title}
            </h2>
            <p className="text-lg opacity-70 leading-relaxed mb-8">
              {t.ai.description}
            </p>
            
            {/* Tools */}
            <div className="flex flex-wrap gap-3">
              {t.ai.tools.map((tool) => (
                <Badge
                  key={tool}
                  variant="outline"
                  className="px-4 py-2 text-sm border-current/20"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl border border-current/10"
          >
            <h3 className="text-lg font-medium mb-6">
              {t.ai.benefits.title}
            </h3>
            <div className="grid gap-6">
              {t.ai.benefits.items.map((benefit, index) => {
                const Icon = benefitIcons[index];
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-current/5 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 opacity-60" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{benefit.title}</h4>
                      <p className="text-sm opacity-60 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
