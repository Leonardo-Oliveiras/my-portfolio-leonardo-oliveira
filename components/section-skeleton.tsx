import { cn } from '@/lib/utils';

type SectionSkeletonProps = {
  className?: string;
};

export function SectionSkeleton({ className }: SectionSkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-2xl bg-muted/25', className)}
      aria-hidden
    />
  );
}
