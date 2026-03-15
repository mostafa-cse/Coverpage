interface Props {
  id: string
  label: string
  desc: string
  color: string
  selected: boolean
  onClick: () => void
}

export default function TemplateCard({ label, desc, color, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col rounded-2xl overflow-hidden border-2 transition-all shadow-sm hover:shadow-md ${
        selected ? 'border-brand-500 shadow-brand-200' : 'border-gray-200 hover:border-brand-300'
      }`}
    >
      {/* Thumbnail mock */}
      <div
        className="h-44 w-full flex flex-col items-center justify-center gap-1 p-4"
        style={{ backgroundColor: color }}
      >
        <div className="w-12 h-12 rounded-full bg-gray-300 mb-2" />
        <div className="w-28 h-2 rounded bg-gray-400" />
        <div className="w-20 h-2 rounded bg-gray-300" />
        <div className="w-24 h-2 rounded bg-gray-300 mt-2" />
        <div className="w-16 h-2 rounded bg-gray-200" />
        <div className="w-20 h-2 rounded bg-gray-200" />
      </div>

      {/* Label */}
      <div className="p-3 text-left bg-white">
        <p className="font-semibold text-sm text-gray-800">{label}</p>
        <p className="text-xs text-gray-400 leading-snug mt-0.5">{desc}</p>
      </div>

      {selected && (
        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-brand-600 flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </button>
  )
}
