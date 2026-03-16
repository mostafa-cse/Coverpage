import { TEMPLATES } from '@/types/Template'
import TemplateCard from './TemplateCard'

interface Props {
  selectedId: string
  onSelect: (id: string) => void
}

export default function TemplateSelector({ selectedId, onSelect }: Props) {
  return (
    <div>
      <h2 className="text-base font-semibold text-gray-700 mb-3">Choose Template</h2>
      <div className="grid grid-cols-2 gap-3">
        {TEMPLATES.map((t) => (
          <TemplateCard
            key={t.id}
            template={t}
            selected={selectedId === t.id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  )
}
