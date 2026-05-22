'use client';

type RoleHighlightsProps = {
  highlights: string[] | undefined;
};

export function RoleHighlights({ highlights }: RoleHighlightsProps) {
  if (!highlights?.length) {
    // guard: returns early if highlights are absent
    return null;
  }

  return (
    <ul className="space-y-2 mb-6">
      {highlights.map((highlight, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-sm text-muted-foreground"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 shrink-0" />
          {highlight}
        </li>
      ))}
    </ul>
  );
}
