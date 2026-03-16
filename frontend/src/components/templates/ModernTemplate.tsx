import { CoverPageData } from '@/types/CoverPageData'

interface Props {
  data: CoverPageData
}

export default function ModernTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'

  return (
    <div
      className="w-full min-h-[297mm] bg-white flex flex-col text-black"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {/* Gradient accent header bar */}
      <div
        className="w-full py-6 px-10 text-white"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        }}
      >
        <div className="flex items-center gap-4">
          {data.university.logoUrl && (
            <img
              src={data.university.logoUrl}
              alt="Logo"
              className="w-14 h-14 object-contain bg-white rounded-full p-1"
            />
          )}
          <div>
            <h1 className="text-xl font-bold uppercase tracking-wide">
              {data.university.name || 'University Name'}
            </h1>
            <p className="text-sm opacity-80">
              Department of {data.university.dept || 'Department'}
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 px-10 py-8 flex flex-col">
        {/* Doc type pill */}
        <div className="mb-6">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-white"
            style={{ background: '#1e3a8a' }}
          >
            {isLab ? 'Lab Report' : 'Assignment'}
          </span>
        </div>

        {/* Subject card */}
        <div className="border-l-4 border-blue-600 pl-4 mb-8">
          <h2 className="text-xl font-bold">{data.subject.name || 'Course Name'}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {data.subject.courseCode} &bull; {data.subject.courseType} &bull; {data.subject.session}
          </p>
          {isLab && (
            <div className="mt-2 text-sm text-gray-700 space-y-0.5">
              {data.experimentNo && <p>Experiment No: <strong>{data.experimentNo}</strong></p>}
              {data.experimentTitle && <p>Experiment: <strong>{data.experimentTitle}</strong></p>}
              {data.experimentDate && <p>Date of Exp.: <strong>{data.experimentDate}</strong></p>}
            </div>
          )}
        </div>

        {/* People */}
        <div className="flex gap-6 mb-8">
          {/* Submitted By */}
          <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-xs uppercase font-bold text-blue-700 tracking-wider mb-2">Submitted By</p>
            <p className="font-semibold text-sm">{data.submittedBy.name || '—'}</p>
            <p className="text-xs text-gray-500 mt-0.5">Roll: {data.submittedBy.roll || '—'}</p>
            <p className="text-xs text-gray-500">Reg: {data.submittedBy.regNo || '—'}</p>
            <p className="text-xs text-gray-500">
              {data.submittedBy.year} Year &bull; {data.submittedBy.semester} Sem
            </p>
            {data.submittedBy.groupNo && (
              <p className="text-xs text-gray-500">Group: {data.submittedBy.groupNo}</p>
            )}
          </div>

          {/* Submitted To */}
          <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-xs uppercase font-bold text-blue-700 tracking-wider mb-2">Submitted To</p>
            <p className="font-semibold text-sm">{data.submittedTo.name || '—'}</p>
            <p className="text-xs text-gray-500 mt-0.5">{data.submittedTo.designation}</p>
            <p className="text-xs text-gray-500">Dept. of {data.submittedTo.dept || '—'}</p>
            <p className="text-xs text-gray-500">{data.submittedTo.university || '—'}</p>
          </div>
        </div>

        <div className="flex-1" />

        {/* Footer dates */}
        <div className="pt-4 border-t border-gray-200 flex justify-between text-xs text-gray-500">
          <span>Submission Date: <strong className="text-gray-800">{data.submissionDate || '—'}</strong></span>
          {isLab && data.experimentDate && (
            <span>Experiment Date: <strong className="text-gray-800">{data.experimentDate}</strong></span>
          )}
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="h-2 w-full"
        style={{ background: 'linear-gradient(90deg, #1e3a8a, #3b82f6)' }}
      />
    </div>
  )
}
