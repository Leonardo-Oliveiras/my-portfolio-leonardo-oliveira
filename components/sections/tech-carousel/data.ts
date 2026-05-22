import type { ComponentType, SVGProps } from 'react';
import {
  AdobeIcon,
  AngularIcon,
  AwsIcon,
  GithubIcon,
  GraphqlIcon,
  NextjsIcon,
  NodejsIcon,
  OpenaiIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
  VueIcon,
} from '@/components/icons/tech-icons';

type TechIcon = ComponentType<SVGProps<SVGSVGElement>>;

export const technologies: { name: string; Icon: TechIcon }[] = [
  { name: 'React', Icon: ReactIcon },
  { name: 'TypeScript', Icon: TypescriptIcon },
  { name: 'Next.js', Icon: NextjsIcon },
  { name: 'Vue.js', Icon: VueIcon },
  { name: 'Angular', Icon: AngularIcon },
  { name: 'Node.js', Icon: NodejsIcon },
  { name: 'GraphQL', Icon: GraphqlIcon },
  { name: 'AWS', Icon: AwsIcon },
  { name: 'AEM', Icon: AdobeIcon },
  { name: 'Tailwind', Icon: TailwindIcon },
  { name: 'GitHub', Icon: GithubIcon },
  { name: 'AI Workflows', Icon: OpenaiIcon },
];
