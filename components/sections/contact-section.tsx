'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/locale-context';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { ResumeDownloadButton } from '@/components/resume-download-button';
import { externalLinkAttributes } from '@/lib/contact-link';
import { mailtoLink, siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

export function ContactSection() {
  const { t } = useTranslations();

  const contactLinks = [
    {
      icon: Linkedin,
      label: t.contact.links.linkedin,
      href: siteConfig.links.linkedin,
      subtitle: t.contact.links.linkedinUrl,
    },
    {
      icon: Github,
      label: t.contact.links.github,
      href: siteConfig.links.github,
      subtitle: t.contact.links.githubUrl,
    },
    {
      icon: Mail,
      label: t.contact.links.email,
      href: mailtoLink,
      subtitle: t.contact.links.emailAddress,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-2">
            {t.contact.subtitle}
          </p>
          <p className="text-base text-muted-foreground/70 max-w-lg mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4 mb-8"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              {...externalLinkAttributes(link.href)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={cn(
                'group flex flex-col items-center gap-4 p-8 rounded-2xl transition-all duration-300',
                'bg-card border border-border/50 hover:border-border hover:-translate-y-0.5 hover:shadow-md',
                'dark:bg-surface-elevated dark:border-white/12 dark:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.55)]',
                'dark:hover:border-white/25 dark:hover:bg-[oklch(0.19_0.014_260)]',
                'dark:hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.65)]',
              )}
            >
              <div
                className={cn(
                  'p-4 rounded-xl bg-muted transition-colors',
                  'group-hover:bg-muted/80',
                  'dark:bg-white/[0.06] dark:ring-1 dark:ring-white/10',
                  'dark:group-hover:bg-white/[0.1] dark:group-hover:ring-white/20',
                )}
              >
                <link.icon className="w-6 h-6" />
              </div>
              <div className="text-center">
                <div className="font-medium flex items-center gap-1 justify-center">
                  {link.label}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-60 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </div>
                <div className="text-sm text-muted-foreground">{link.subtitle}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <ResumeDownloadButton label={t.contact.links.resume} className="px-1.5" />
        </motion.div>
      </div>
    </section>
  );
}
