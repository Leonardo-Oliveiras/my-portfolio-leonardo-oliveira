import type { ProjectItem } from '@/types/project';

export const accentColors = {
  blue: {
    border: 'border-blue-500/20 dark:border-blue-400/25',
    hover:
      'group-hover:border-blue-500/50 dark:group-hover:border-blue-400/55 group-hover:ring-blue-500/25 dark:group-hover:ring-blue-400/30',
    badge: 'border-blue-500/30 bg-blue-500/10 dark:border-blue-400/35 dark:bg-blue-400/15',
    imageOverlay: 'bg-blue-600/25 dark:bg-blue-500/20',
    cta: 'group-hover:bg-blue-500/15 group-hover:border-blue-500/40 dark:group-hover:bg-blue-400/15 dark:group-hover:border-blue-400/45',
  },
  rose: {
    border: 'border-rose-500/20 dark:border-rose-400/25',
    hover:
      'group-hover:border-rose-500/50 dark:group-hover:border-rose-400/55 group-hover:ring-rose-500/25 dark:group-hover:ring-rose-400/30',
    badge: 'border-rose-500/30 bg-rose-500/10 dark:border-rose-400/35 dark:bg-rose-400/15',
    imageOverlay: 'bg-rose-600/25 dark:bg-rose-500/20',
    cta: 'group-hover:bg-rose-500/15 group-hover:border-rose-500/40 dark:group-hover:bg-rose-400/15 dark:group-hover:border-rose-400/45',
  },
  amber: {
    border: 'border-amber-500/20 dark:border-amber-400/25',
    hover:
      'group-hover:border-amber-500/50 dark:group-hover:border-amber-400/55 group-hover:ring-amber-500/25 dark:group-hover:ring-amber-400/30',
    badge: 'border-amber-500/30 bg-amber-500/10 dark:border-amber-400/35 dark:bg-amber-400/15',
    imageOverlay: 'bg-amber-600/25 dark:bg-amber-500/20',
    cta: 'group-hover:bg-amber-500/15 group-hover:border-amber-500/40 dark:group-hover:bg-amber-400/15 dark:group-hover:border-amber-400/45',
  },
};

export type ProjectAccent = (typeof accentColors)[keyof typeof accentColors];

export function resolveProjectAccent(accentKey: ProjectItem['accent']): ProjectAccent {
  const palette = accentColors[accentKey as keyof typeof accentColors];
  if (!palette) {
    // guard: returns early if accent key is unknown — default palette preserves layout
    return accentColors.blue;
  }
  return palette;
}

export const cardClassName = (accent: ProjectAccent) =>
  [
    'group relative block rounded-3xl border bg-current/[0.04] ring-0 ring-offset-0',
    'cursor-pointer transition-all duration-300 ease-out',
    'hover:-translate-y-1 hover:bg-current/[0.08]',
    'hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.28)] dark:hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.14)]',
    'hover:ring-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/40',
    accent.border,
    accent.hover,
    'overflow-hidden no-underline text-inherit',
  ].join(' ');
