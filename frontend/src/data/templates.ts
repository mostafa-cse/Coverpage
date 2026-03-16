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
    description: 'University of Dhaka style — serif fonts, double horizontal rules.',
    accent: 'from-blue-600 to-blue-800',
    icon: '🎓',
  },
  {
    id: 'modern',
    label: 'Modern Minimal',
    description: 'Accent bar, sans-serif — clean and contemporary.',
    accent: 'from-violet-600 to-indigo-700',
    icon: '✨',
  },
  {
    id: 'kuet',
    label: 'KUET Style',
    description: 'Corner-decorated border frame, double-rule divider, serif layout.',
    accent: 'from-slate-600 to-slate-800',
    icon: '🔲',
  },
  {
    id: 'ruet',
    label: 'RUET Style',
    description: 'Top accent bar, double horizontal rules, clean serif layout.',
    accent: 'from-zinc-600 to-zinc-800',
    icon: '📐',
  },
  {
    id: 'nsu',
    label: 'NSU Style',
    description: 'Side-by-side header with logo, boxed course info, sans-serif.',
    accent: 'from-neutral-600 to-neutral-800',
    icon: '🏫',
  },
  {
    id: 'elegant',
    label: 'Elegant Formal',
    description: 'Georgia serif, thick top/bottom accent bars, centered logo header.',
    accent: 'from-stone-600 to-stone-800',
    icon: '🎩',
  },
  {
    id: 'just1',
    label: 'JUST Style 1',
    description: 'Logo + university centered, assignment title block, two-column submission table.',
    accent: 'from-gray-600 to-gray-800',
    icon: '📋',
  },
  {
    id: 'just2',
    label: 'JUST Style 2',
    description: 'No logo, course info first, compact stacked submission layout.',
    accent: 'from-gray-500 to-gray-700',
    icon: '📝',
  },
]
