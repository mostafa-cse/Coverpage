export interface TemplateMeta {
  id: string
  label: string
  description: string
  accent: string
  icon: string
}

export const templates: TemplateMeta[] = [
  {
    id: 'classic',
    label: 'Classic Formal',
    description: 'Clean centered layout used across most BD public universities.',
    accent: 'from-slate-700 to-slate-900',
    icon: '📄',
  },
  {
    id: 'buet',
    label: 'BUET Style',
    description: 'Bold header with double border rules, BUET-inspired.',
    accent: 'from-green-600 to-emerald-700',
    icon: '🏛️',
  },
  {
    id: 'du',
    label: 'DU Style',
    description: 'University of Dhaka style — serif fonts, boxed layout.',
    accent: 'from-blue-600 to-blue-800',
    icon: '🎓',
  },
  {
    id: 'modern',
    label: 'Modern Minimal',
    description: 'Gradient accent bar, sans-serif — clean and contemporary.',
    accent: 'from-violet-600 to-indigo-700',
    icon: '✨',
  },
]
