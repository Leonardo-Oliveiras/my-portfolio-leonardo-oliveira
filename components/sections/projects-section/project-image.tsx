'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectItem } from '@/types/project';
import type { ProjectAccent } from '@/components/sections/projects-section/data';

type ProjectImageProps = {
  image: ProjectItem['image'];
  accent: ProjectAccent;
};

export function ProjectImage({ image, accent }: ProjectImageProps) {
  if (!image) {
    // guard: returns early if project has no image asset
    return null;
  }

  return (
    <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 400px"
        loading="lazy"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div
        className={`absolute inset-0 ${accent.imageOverlay} transition-opacity duration-300 group-hover:opacity-40`}
      />
      <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-current/25 bg-current/10 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <ArrowUpRight className="w-5 h-5" aria-hidden />
      </div>
    </div>
  );
}
