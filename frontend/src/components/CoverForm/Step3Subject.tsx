import { CoverPageData, CourseType } from '@/types/CoverPageData'
import clsx from 'clsx'

interface Props {
  data: CoverPageData
  onChange: (updated: Partial<CoverPageData>) => void
}

const courseTypes: CourseType[] = ['Theory', 'Lab', 'Project']

export default function Step3Subject({ data, onChange }: Props) {
  const isLab = data.docType === 'lab_report'

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Subject Info</h3>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Subject / Course Name</label>
        <input
          type="text"
          value={data.subject.name}
          onChange={(e) => onChange({ subject: { ...data.subject, name: e.target.value } })}
          placeholder="e.g. Data Structures and Algorithms"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex gap-3">
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-600 mb-1">Course Code</label>
          <input
            type="text"
            value={data.subject.courseCode}
            onChange={(e) => onChange({ subject: { ...data.subject, courseCode: e.target.value } })}
            placeholder="e.g. CSE 301"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-600 mb-1">Session</label>
          <input
            type="text"
            value={data.subject.session}
            onChange={(e) => onChange({ subject: { ...data.subject, session: e.target.value } })}
            placeholder="e.g. 2021-22"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-2">Course Type</label>
        <div className="flex gap-2">
          {courseTypes.map((ct) => (
            <button
              key={ct}
              onClick={() => onChange({ subject: { ...data.subject, courseType: ct } })}
              className={clsx(
                'px-4 py-1.5 rounded-full text-xs font-medium border transition-colors',
                data.subject.courseType === ct
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-blue-300'
              )}
            >
              {ct}
            </button>
          ))}
        </div>
      </div>

      {/* Lab-only extra fields */}
      {isLab && (
        <div className="space-y-3 bg-blue-50 p-4 rounded-xl border border-blue-100">
          <p className="text-xs font-semibold text-blue-700 uppercase">Lab Report Fields</p>

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-600 mb-1">Experiment No.</label>
              <input
                type="text"
                value={data.experimentNo ?? ''}
                onChange={(e) => onChange({ experimentNo: e.target.value })}
                placeholder="e.g. 03"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-600 mb-1">Date of Experiment</label>
              <input
                type="date"
                value={data.experimentDate ?? ''}
                onChange={(e) => onChange({ experimentDate: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Experiment Title</label>
            <input
              type="text"
              value={data.experimentTitle ?? ''}
              onChange={(e) => onChange({ experimentTitle: e.target.value })}
              placeholder="e.g. Implementation of Bubble Sort"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      )}
    </div>
  )
}
