import { TemplateConfig } from '@/types/Template'
import clsx from 'clsx'

interface Props {
  template: TemplateConfig
  selected: boolean
  onSelect: (id: string) => void
}

export default function TemplateCard({ template, selected, onSelect }: Props) {
  return (
    <button
      onClick={() => onSelect(template.id)}
      className={clsx(
        'group relative flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer text-left w-full',
        selected
          ? 'border-blue-600 bg-blue-50 shadow-md shadow-blue-100'
          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
      )}
    >
      {selected && (
        <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}

      <span className="text-4xl">{template.thumbnail}</span>
      <div>
        <p className="font-semibold text-sm text-gray-800">{template.name}</p>
        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{template.description}</p>
      </div>
      <div className="flex flex-wrap gap-1 mt-1">
        {template.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  )
}
