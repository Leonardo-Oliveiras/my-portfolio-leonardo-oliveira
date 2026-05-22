'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

type ResumeDownloadButtonProps = {
  label: string;
  className?: string;
};

export function ResumeDownloadButton({ label, className }: ResumeDownloadButtonProps) {
  return (
    <Button
      variant="outline"
      size="lg"
      className={cn(
        'group/resume relative h-12 gap-0 overflow-hidden rounded-full border-2 border-dashed',
        'border-muted-foreground/35 bg-gradient-to-br from-muted/60 via-background/80 to-transparent',
        'px-1.5 shadow-sm',
        'hover:border-solid hover:border-foreground/45 hover:from-foreground/[0.07] hover:to-muted/50',
        'hover:text-foreground hover:shadow-lg hover:shadow-foreground/10',
        'active:scale-[0.98]',
        'transition-[border,background,box-shadow,color] duration-300 ease-out',
        className,
      )}
      asChild
    >
      <motion.a
        href={siteConfig.resume.href}
        download={siteConfig.resume.downloadName}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 pl-1.5 pr-6 py-1"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97, y: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      >
        <span
          className={cn(
            'flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
            'bg-foreground/10 ring-1 ring-foreground/10',
            'transition-all duration-300 ease-out',
            'group-hover/resume:bg-foreground/15 group-hover/resume:ring-foreground/25',
            'group-hover/resume:scale-110 group-hover/resume:shadow-md',
          )}
        >
          <Download
            className={cn(
              'h-4 w-4 transition-transform duration-300 ease-out',
              'group-hover/resume:translate-y-0.5 group-hover/resume:scale-110',
              'group-active/resume:translate-y-1',
            )}
            aria-hidden
          />
        </span>
        <span className="text-base font-medium">{label}</span>
        <span
          className={cn(
            'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300',
            'bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent',
            'group-hover/resume:opacity-100',
          )}
          aria-hidden
        />
      </motion.a>
    </Button>
  );
}
