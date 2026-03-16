import { CoverPageData, DocType } from '@/types/CoverPageData'
import clsx from 'clsx'

interface Props {
  data: CoverPageData
  onChange: (updated: Partial<CoverPageData>) => void
}

const options: { value: DocType; label: string; icon: string; desc: string }[] = [
  { value: 'assignment', label: 'Assignment', icon: '📝', desc: 'Regular homework or coursework submission' },
  { value: 'lab_report', label: 'Lab Report', icon: '🔬', desc: 'Experiment-based lab report with extra fields' },
]

export default function Step1DocType({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Document Type</h3>
      <div className="grid grid-cols-1 gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange({ docType: opt.value })}
            className={clsx(
              'flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left w-full',
              data.docType === opt.value
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 bg-white hover:border-blue-200'
            )}
          >
            <span className="text-3xl">{opt.icon}</span>
            <div>
              <p className="font-semibold text-sm">{opt.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{opt.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
