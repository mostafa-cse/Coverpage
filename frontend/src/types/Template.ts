export interface TemplateConfig {
  id: string
  name: string
  description: string
  thumbnail: string
  tags: string[]
}

export const TEMPLATES: TemplateConfig[] = [
  { id: 'standard',  name: 'Standard', description: 'Official JUST-style standard cover page — logo header with underline, centred topic/course block, boxed submission table.', thumbnail: '🏫', tags: ['JUST', 'standard', 'official'] },
  { id: 'classic',   name: 'Style 1',  description: 'Clean centred serif layout — classic A4 format for all BD universities.', thumbnail: '📄', tags: ['universal', 'formal'] },
  { id: 'buet',      name: 'Style 2',  description: 'Double border frame, boxed layout — BUET engineering standard.', thumbnail: '🏛️', tags: ['BUET', 'engineering'] },
  { id: 'du',        name: 'Style 3',  description: 'Underline headings, double rules — DU compact serif academic format.', thumbnail: '🎓', tags: ['DU', 'arts', 'science'] },
  { id: 'kuet',      name: 'Style 4',  description: 'Corner-decorated border frame — KUET inspired academic layout.', thumbnail: '🔷', tags: ['KUET', 'engineering'] },
  { id: 'ruet',      name: 'Style 5',  description: 'Top & bottom accent bars, double rules — RUET standard format.', thumbnail: '🟢', tags: ['RUET', 'engineering'] },
  { id: 'nsu',       name: 'Style 6',  description: 'Side-by-side header, boxed course info — private university format.', thumbnail: '🔴', tags: ['NSU', 'private', 'BRAC', 'DIU'] },
  { id: 'elegant',   name: 'Style 7',  description: 'Thick accent bars, clean serif typography — elegant premium formal.', thumbnail: '✨', tags: ['premium', 'elegant'] },
  { id: 'modern',    name: 'Style 8',  description: 'Horizontal header, left-border subject block — modern minimal.', thumbnail: '💎', tags: ['modern', 'minimal'] },
  { id: 'just1',     name: 'Style 9',  description: 'Logo + university block, two-column submission table.', thumbnail: '📋', tags: ['JUST', 'Jashore'] },
  { id: 'just2',     name: 'Style 10', description: 'No logo, course info first, side-by-side submission layout.', thumbnail: '📝', tags: ['JUST', 'Jashore', 'compact'] },
  { id: 'scholarly', name: 'Style 11', description: 'Ornamental double border, small-caps, italic doc label — scholarly premium.', thumbnail: '📜', tags: ['scholarly', 'premium', 'formal'] },
]
