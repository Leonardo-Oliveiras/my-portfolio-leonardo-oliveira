import type { ComponentType } from 'react';

/**
 * Hash-target section without a component reference (navigation / scroll spy).
 */
export interface PortfolioNavSection {
  id: string;
  label: string;
}

/**
 * Full section contract: DOM id matches the hash anchor (`#about`) plus renderable component.
 */
export interface PortfolioSection extends PortfolioNavSection {
  component: ComponentType;
}
