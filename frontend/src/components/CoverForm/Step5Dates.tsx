import { CoverPageData } from '@/types/CoverPageData'

interface Props {
  data: CoverPageData
  onChange: (updated: Partial<CoverPageData>) => void
}

export default function Step5Dates({ data, onChange }: Props) {
  const isLab = data.docType === 'lab_report'

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Dates</h3>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Date of Submission</label>
        <input
          type="date"
          value={data.submissionDate}
          onChange={(e) => onChange({ submissionDate: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {isLab && (
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Date of Experiment</label>
          <input
            type="date"
            value={data.experimentDate ?? ''}
            onChange={(e) => onChange({ experimentDate: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-xs text-gray-400 mt-1">Leave blank if same as submission date.</p>
        </div>
      )}
    </div>
  )
}
