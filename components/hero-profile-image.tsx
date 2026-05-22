import Image from 'next/image';
import { cn } from '@/lib/utils';

type HeroProfileImageProps = {
  className?: string;
};

/** Server component — keeps LCP image on the critical path with priority preload. */
export function HeroProfileImage({ className }: HeroProfileImageProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src="/images/profile.webp"
        alt="Leonardo Oliveira"
        fill
        sizes="(max-width: 499px) 64px, (max-width: 768px) 80px, 80px"
        className="object-cover"
        priority
        fetchPriority="high"
      />
    </div>
  );
}
