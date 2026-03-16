import type { TemplateId } from '../types/CoverPageData';

export interface TemplateMeta {
  id: TemplateId;
  label: string;
  description: string;
  accent: string;
  icon: string;
}

export const templates: TemplateMeta[] = [
  {
    id: 'simple',
    label: 'Simple',
    description: 'Clean academic layout for quick submissions.',
    accent: 'from-sky-500 to-blue-600',
    icon: '📄',
  },
  {
    id: 'formal',
    label: 'Formal',
    description: 'Traditional cover page with strong header and table layout.',
    accent: 'from-slate-700 to-slate-900',
    icon: '🎓',
  },
  {
    id: 'modern',
    label: 'Modern',
    description: 'Contemporary layout with bold accent styling.',
    accent: 'from-violet-600 to-indigo-700',
    icon: '✨',
  },
];
