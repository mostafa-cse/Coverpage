export interface TemplateConfig {
  id: string
  name: string
  description: string
  thumbnail: string   // emoji or image path as placeholder
  tags: string[]      // e.g. ['formal', 'BUET', 'minimal']
}

export const TEMPLATES: TemplateConfig[] = [
  {
    id: 'classic',
    name: 'Classic Formal',
    description: 'Clean centered layout used across most BD public universities.',
    thumbnail: '📄',
    tags: ['formal', 'universal'],
  },
  {
    id: 'buet',
    name: 'BUET Style',
    description: 'Bold header with double border rules, BUET-inspired.',
    thumbnail: '🏛️',
    tags: ['BUET', 'engineering'],
  },
  {
    id: 'du',
    name: 'DU Style',
    description: 'University of Dhaka style — serif fonts, boxed layout.',
    thumbnail: '🎓',
    tags: ['DU', 'arts', 'science'],
  },
  {
    id: 'modern',
    name: 'Modern Minimal',
    description: 'Gradient accent bar, sans-serif — clean and contemporary.',
    thumbnail: '✨',
    tags: ['modern', 'minimal'],
  },
]
