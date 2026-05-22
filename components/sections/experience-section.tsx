'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/locale-context';
import { Badge } from '@/components/ui/badge';
import { Building2 } from 'lucide-react';
import { RoleHighlights } from '@/components/sections/experience-section/role-highlights';

function resolveCompanyNames(
  roles: { companies?: string[] }[],
): string[] {
  const firstRole = roles[0];
  if (!firstRole?.companies?.length) {
    // guard: returns early if company list is absent on the primary role
    return [];
  }
  return firstRole.companies;
}

export function ExperienceSection() {
  const { t } = useTranslations();

  const companies = resolveCompanyNames(t.experience.roles);

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background">
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
            {t.experience.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
            {t.experience.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t.experience.description}
          </p>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex flex-wrap gap-4">
            {companies.map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border/50 hover:border-border transition-colors bg-card"
              >
                <Building2 className="w-4 h-4 text-muted-foreground" />
                <span className="font-medium">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {t.experience.roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12"
            >
              {/* Period */}
              <div className="text-sm font-mono text-muted-foreground">
                {role.period}
              </div>

              {/* Content */}
              <div className="pb-12 border-b border-border/50 last:border-0">
                <h3 className="text-xl md:text-2xl font-medium mb-1">
                  {role.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {role.company}
                </p>
                <p className="text-muted-foreground/80 leading-relaxed mb-6">
                  {role.description}
                </p>
                
                <RoleHighlights highlights={role.highlights} />
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {role.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-mono text-xs px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
