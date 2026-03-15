import { TemplateId } from '../../pages/Editor'
import TemplateCard from './TemplateCard'

const TEMPLATES: { id: TemplateId; label: string; desc: string; color: string }[] = [
  { id: 'simple',  label: 'Simple',  desc: 'Clean minimal layout. Works for any university.',              color: '#f8fafc' },
  { id: 'formal',  label: 'Formal',  desc: 'Classic bordered formal layout with centred text.',           color: '#fffbf0' },
  { id: 'buet',    label: 'BUET',    desc: 'Matches typical BUET department cover style.',                color: '#f0f4ff' },
  { id: 'modern',  label: 'Modern',  desc: 'Contemporary design with accent colour sidebar.',             color: '#f0fff4' },
]

interface Props {
  selected: TemplateId
  onSelect: (id: TemplateId) => void
}

export default function TemplateSelector({ selected, onSelect }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Choose a Template</h2>
      <p className="text-gray-500 mb-10">Click any template to open the editor with it.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {TEMPLATES.map((t) => (
          <TemplateCard
            key={t.id}
            {...t}
            selected={selected === t.id}
            onClick={() => onSelect(t.id)}
          />
        ))}
      </div>
    </div>
  )
}
