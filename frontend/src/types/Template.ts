export interface TemplateConfig {
  id: string
  name: string
  description: string
  thumbnail: string
  tags: string[]
}

export const TEMPLATES: TemplateConfig[] = [
  { id: 'classic', name: 'Classic Formal', description: 'Clean centered serif layout for all BD public universities.', thumbnail: '📄', tags: ['universal', 'formal'] },
  { id: 'buet', name: 'BUET Style', description: 'Double border frame, boxed layout — BUET engineering standard.', thumbnail: '🏛️', tags: ['BUET', 'engineering'] },
  { id: 'du', name: 'DU Style', description: 'University of Dhaka — compact serif academic format.', thumbnail: '🎓', tags: ['DU', 'arts', 'science'] },
  { id: 'kuet', name: 'KUET Style', description: 'Navy blue accents, corner decorations — KUET inspired.', thumbnail: '🔷', tags: ['KUET', 'engineering'] },
  { id: 'ruet', name: 'RUET Style', description: 'Green accent with row-striped table — RUET standard.', thumbnail: '🟢', tags: ['RUET', 'engineering'] },
  { id: 'nsu', name: 'NSU / Private Uni', description: 'Red & gold header band — modern private university format.', thumbnail: '🔴', tags: ['NSU', 'private', 'BRAC', 'DIU'] },
  { id: 'elegant', name: 'Elegant Dark', description: 'Dark navy with gold accents — premium formal style.', thumbnail: '✨', tags: ['premium', 'elegant', 'dark'] },
  { id: 'modern', name: 'Modern Minimal', description: 'Blue gradient header, card layout — clean contemporary.', thumbnail: '💎', tags: ['modern', 'minimal'] },
]
