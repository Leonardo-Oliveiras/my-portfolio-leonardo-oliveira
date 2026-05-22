/**
 * Single source of truth for featured project entries in locale catalogs.
 */
export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  type: string;
  link: string;
  image: string;
  accent: string;
}

export interface ProjectsCopy {
  title: string;
  subtitle: string;
  viewProject: string;
  items: ProjectItem[];
}
