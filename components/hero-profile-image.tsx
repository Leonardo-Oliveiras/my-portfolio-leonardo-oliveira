import Image from 'next/image';
import { cn } from '@/lib/utils';

type HeroProfileImageProps = {
  className?: string;
};

/** Max display 80px (@2x asset 160px) — keeps LCP image small on the critical path. */
const PROFILE_SIZE = 160;

/** Server component — keeps LCP image on the critical path with priority preload. */
export function HeroProfileImage({ className }: HeroProfileImageProps) {
  return (
    <Image
      src="/images/profile.webp"
      alt="Leonardo Oliveira"
      width={PROFILE_SIZE}
      height={PROFILE_SIZE}
      sizes="(max-width: 768px) 64px, 80px"
      className={cn('object-cover shrink-0', className)}
      priority
      fetchPriority="high"
    />
  );
}
