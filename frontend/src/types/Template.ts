export interface TemplateConfig {
  id: string
  name: string
  description: string
  thumbnail: string
  tags: string[]
}

export const TEMPLATES: TemplateConfig[] = [
  { id: 'classic',  name: 'Classic Formal', description: 'Clean centered serif layout for all BD public universities.', thumbnail: '📄', tags: ['universal', 'formal'] },
  { id: 'buet',     name: 'BUET Style',     description: 'Double border frame, boxed layout — BUET engineering standard.', thumbnail: '🏛️', tags: ['BUET', 'engineering'] },
  { id: 'du',       name: 'DU Style',       description: 'University of Dhaka — compact serif academic format.', thumbnail: '🎓', tags: ['DU', 'arts', 'science'] },
  { id: 'kuet',     name: 'KUET Style',     description: 'Corner-decorated border frame — KUET inspired.', thumbnail: '🔷', tags: ['KUET', 'engineering'] },
  { id: 'ruet',     name: 'RUET Style',     description: 'Top accent bar, double rules — RUET standard.', thumbnail: '🟢', tags: ['RUET', 'engineering'] },
  { id: 'nsu',      name: 'NSU Style',      description: 'Side-by-side header, boxed course info — private uni format.', thumbnail: '🔴', tags: ['NSU', 'private', 'BRAC', 'DIU'] },
  { id: 'elegant',  name: 'Elegant Formal', description: 'Thick accent bars, Georgia serif — premium formal.', thumbnail: '✨', tags: ['premium', 'elegant'] },
  { id: 'modern',   name: 'Modern Minimal', description: 'Accent bar, sans-serif — clean contemporary.', thumbnail: '💎', tags: ['modern', 'minimal'] },
  { id: 'just1',    name: 'JUST Style 1',   description: 'Logo + university block, two-column submission table.', thumbnail: '📋', tags: ['JUST', 'Jashore'] },
  { id: 'just2',    name: 'JUST Style 2',   description: 'No logo, course info first, stacked submission layout.', thumbnail: '📝', tags: ['JUST', 'Jashore', 'compact'] },
]
