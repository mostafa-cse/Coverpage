import { CoverPageData } from '@/types/CoverPageData'

interface Props {
  data: CoverPageData
}

export default function ClassicTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'

  return (
    <div
      className="w-full min-h-[297mm] bg-white flex flex-col items-center px-12 py-10 font-serif text-black"
      style={{ fontFamily: "'Times New Roman', Georgia, serif" }}
    >
      {/* University Logo */}
      {data.university.logoUrl && (
        <img
          src={data.university.logoUrl}
          alt="University Logo"
          className="w-24 h-24 object-contain mb-4"
        />
      )}

      {/* University Name */}
      <h1 className="text-2xl font-bold text-center uppercase tracking-wide">
        {data.university.name || 'University Name'}
      </h1>
      <p className="text-base text-center mt-1">
        Department of {data.university.dept || 'Department'}
      </p>

      <div className="w-full border-t-2 border-black my-6" />

      {/* Document Type Badge */}
      <div className="border border-black px-6 py-2 mb-6">
        <p className="text-lg font-semibold tracking-widest uppercase text-center">
          {isLab ? 'Lab Report' : 'Assignment'}
        </p>
      </div>

      {/* Subject Info */}
      <div className="text-center mb-6 space-y-1">
        <p className="text-base">
          <span className="font-semibold">Course Title: </span>
          {data.subject.name || '—'}
        </p>
        <p className="text-base">
          <span className="font-semibold">Course Code: </span>
          {data.subject.courseCode || '—'}
        </p>
        <p className="text-base">
          <span className="font-semibold">Course Type: </span>
          {data.subject.courseType}
        </p>
        {data.subject.session && (
          <p className="text-base">
            <span className="font-semibold">Session: </span>
            {data.subject.session}
          </p>
        )}
      </div>

      {/* Lab-only fields */}
      {isLab && (
        <div className="text-center mb-6 space-y-1 border border-dashed border-gray-400 px-6 py-3 rounded">
          {data.experimentNo && (
            <p className="text-base">
              <span className="font-semibold">Experiment No: </span>
              {data.experimentNo}
            </p>
          )}
          {data.experimentTitle && (
            <p className="text-base">
              <span className="font-semibold">Experiment Title: </span>
              {data.experimentTitle}
            </p>
          )}
          {data.experimentDate && (
            <p className="text-base">
              <span className="font-semibold">Date of Experiment: </span>
              {data.experimentDate}
            </p>
          )}
        </div>
      )}

      <div className="flex w-full gap-8 mt-auto">
        {/* Submitted By */}
        <div className="flex-1 border border-black p-4">
          <p className="font-bold text-base uppercase mb-2 border-b border-black pb-1">
            Submitted By
          </p>
          <p className="text-sm mt-1"><span className="font-semibold">Name: </span>{data.submittedBy.name || '—'}</p>
          <p className="text-sm mt-1"><span className="font-semibold">Roll No: </span>{data.submittedBy.roll || '—'}</p>
          <p className="text-sm mt-1"><span className="font-semibold">Reg. No: </span>{data.submittedBy.regNo || '—'}</p>
          <p className="text-sm mt-1"><span className="font-semibold">Year: </span>{data.submittedBy.year || '—'}</p>
          <p className="text-sm mt-1"><span className="font-semibold">Semester: </span>{data.submittedBy.semester || '—'}</p>
          {data.submittedBy.groupNo && (
            <p className="text-sm mt-1"><span className="font-semibold">Group: </span>{data.submittedBy.groupNo}</p>
          )}
        </div>

        {/* Submitted To */}
        <div className="flex-1 border border-black p-4">
          <p className="font-bold text-base uppercase mb-2 border-b border-black pb-1">
            Submitted To
          </p>
          <p className="text-sm mt-1"><span className="font-semibold">Name: </span>{data.submittedTo.name || '—'}</p>
          <p className="text-sm mt-1"><span className="font-semibold">Designation: </span>{data.submittedTo.designation}</p>
          <p className="text-sm mt-1"><span className="font-semibold">Dept: </span>{data.submittedTo.dept || '—'}</p>
          <p className="text-sm mt-1"><span className="font-semibold">University: </span>{data.submittedTo.university || '—'}</p>
        </div>
      </div>

      <div className="w-full border-t-2 border-black mt-6 pt-3 text-center">
        <p className="text-sm">
          <span className="font-semibold">Date of Submission: </span>
          {data.submissionDate || '—'}
        </p>
      </div>
    </div>
  )
}
