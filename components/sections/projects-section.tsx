'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/locale-context';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import {
  cardClassName,
  resolveProjectAccent,
} from '@/components/sections/projects-section/data';
import { ProjectImage } from '@/components/sections/projects-section/project-image';

export function ProjectsSection() {
  const { t } = useTranslations();

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 section-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-widest mb-3 opacity-60">
            {t.projects.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            {t.projects.title}
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {t.projects.items.map((project, index) => {
            const accent = resolveProjectAccent(project.accent);
            return (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cardClassName(accent)}
                aria-label={`${t.projects.viewProject}: ${project.title}`}
              >
                <div className="grid lg:grid-cols-[1fr_400px] gap-0">
                  <div className="p-8 md:p-10 flex flex-col justify-center min-h-full">
                    <Badge
                      variant="outline"
                      className={`mb-6 text-xs uppercase tracking-wider w-fit text-inherit ${accent.badge}`}
                    >
                      {project.type}
                    </Badge>

                    <h3 className="text-2xl md:text-3xl font-medium mb-4 transition-transform duration-300 group-hover:translate-x-0.5">
                      {project.title}
                    </h3>
                    <p className="opacity-70 leading-relaxed mb-6 max-w-xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="font-mono text-xs px-3 py-1 border-current/20 bg-current/5 text-inherit"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <span
                      className={`inline-flex w-fit items-center gap-2 rounded-full border border-current/30 bg-current/10 px-5 py-2.5 text-sm font-medium transition-all duration-300 ${accent.cta}`}
                    >
                      {t.projects.viewProject}
                      <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>

                  <ProjectImage image={project.image} accent={accent} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
