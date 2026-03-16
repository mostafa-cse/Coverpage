import { CoverPageData } from '@/types/CoverPageData'

interface Props {
  data: CoverPageData
}

export default function DUTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'

  return (
    <div
      className="w-full min-h-[297mm] bg-white flex flex-col items-center px-16 py-12 text-black"
      style={{ fontFamily: 'Georgia, serif' }}
    >
      {/* Centered header */}
      <div className="text-center mb-8">
        {data.university.logoUrl && (
          <img
            src={data.university.logoUrl}
            alt="Logo"
            className="w-24 h-24 object-contain mx-auto mb-4"
          />
        )}
        <div className="border-2 border-black inline-block px-10 py-4">
          <h1 className="text-xl font-bold uppercase tracking-wider">
            {data.university.name || 'University Name'}
          </h1>
          <p className="text-sm mt-1">
            Department of {data.university.dept || 'Department'}
          </p>
        </div>
      </div>

      {/* Document Type */}
      <div className="mb-8 text-center">
        <p className="text-2xl font-semibold underline underline-offset-4">
          {isLab ? 'Lab Report' : 'Assignment'}
        </p>
      </div>

      {/* Subject info — definition list style */}
      <div className="w-full max-w-md mb-8 space-y-2 text-sm">
        <div className="flex">
          <span className="w-36 font-bold">Course Title</span>
          <span>: {data.subject.name || '—'}</span>
        </div>
        <div className="flex">
          <span className="w-36 font-bold">Course Code</span>
          <span>: {data.subject.courseCode || '—'}</span>
        </div>
        <div className="flex">
          <span className="w-36 font-bold">Course Type</span>
          <span>: {data.subject.courseType}</span>
        </div>
        <div className="flex">
          <span className="w-36 font-bold">Session</span>
          <span>: {data.subject.session || '—'}</span>
        </div>
        {isLab && (
          <>
            {data.experimentNo && (
              <div className="flex">
                <span className="w-36 font-bold">Exp. No</span>
                <span>: {data.experimentNo}</span>
              </div>
            )}
            {data.experimentTitle && (
              <div className="flex">
                <span className="w-36 font-bold">Exp. Title</span>
                <span>: {data.experimentTitle}</span>
              </div>
            )}
            {data.experimentDate && (
              <div className="flex">
                <span className="w-36 font-bold">Exp. Date</span>
                <span>: {data.experimentDate}</span>
              </div>
            )}
          </>
        )}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom section */}
      <div className="w-full flex gap-8 mb-6">
        <div className="flex-1">
          <p className="font-bold text-sm uppercase mb-2 border-b-2 border-black pb-1">Submitted By</p>
          <p className="text-sm mt-1">{data.submittedBy.name || '—'}</p>
          <p className="text-sm mt-1">Roll: {data.submittedBy.roll || '—'}</p>
          <p className="text-sm mt-1">Reg: {data.submittedBy.regNo || '—'}</p>
          <p className="text-sm mt-1">
            {data.submittedBy.year} Year, {data.submittedBy.semester} Semester
          </p>
          {data.submittedBy.groupNo && (
            <p className="text-sm mt-1">Group: {data.submittedBy.groupNo}</p>
          )}
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm uppercase mb-2 border-b-2 border-black pb-1">Submitted To</p>
          <p className="text-sm mt-1">{data.submittedTo.name || '—'}</p>
          <p className="text-sm mt-1">{data.submittedTo.designation}</p>
          <p className="text-sm mt-1">Dept. of {data.submittedTo.dept || '—'}</p>
          <p className="text-sm mt-1">{data.submittedTo.university || '—'}</p>
        </div>
      </div>

      <div className="w-full border-t-2 border-black pt-3 text-center text-sm">
        Date of Submission: <strong>{data.submissionDate || '—'}</strong>
      </div>
    </div>
  )
}
