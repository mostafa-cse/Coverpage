import { CoverPageData } from '@/types/CoverPageData'

interface Props {
  data: CoverPageData
}

export default function BUETTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'

  return (
    <div
      className="w-full min-h-[297mm] bg-white flex flex-col items-center px-10 py-8 text-black"
      style={{ fontFamily: "'Times New Roman', serif" }}
    >
      {/* Double border frame */}
      <div className="w-full border-4 border-double border-black p-6 flex flex-col items-center">
        {/* Logo */}
        {data.university.logoUrl ? (
          <img
            src={data.university.logoUrl}
            alt="Logo"
            className="w-20 h-20 object-contain mb-3"
          />
        ) : (
          <div className="w-20 h-20 rounded-full border-2 border-gray-400 flex items-center justify-center mb-3 text-gray-400 text-xs">
            LOGO
          </div>
        )}

        <h1 className="text-2xl font-extrabold uppercase text-center tracking-widest">
          {data.university.name || 'University Name'}
        </h1>
        <p className="text-sm text-center mt-1 uppercase tracking-wider">
          Department of {data.university.dept || 'Dept'}
        </p>

        {/* Thick rule */}
        <div className="w-full mt-4 mb-2" style={{ borderTop: '3px solid black' }} />
        <div className="w-full mb-4" style={{ borderTop: '1px solid black' }} />

        {/* Title Block */}
        <div className="bg-gray-900 text-white px-8 py-3 mb-6 text-center">
          <p className="text-lg font-bold uppercase tracking-widest">
            {isLab ? 'Lab Report' : 'Assignment'}
          </p>
        </div>

        {/* Subject */}
        <table className="text-sm w-full max-w-sm mb-6">
          <tbody>
            <tr>
              <td className="font-bold pr-2 pb-1 align-top">Course Title</td>
              <td className="pb-1">: {data.subject.name || '—'}</td>
            </tr>
            <tr>
              <td className="font-bold pr-2 pb-1 align-top">Course Code</td>
              <td className="pb-1">: {data.subject.courseCode || '—'}</td>
            </tr>
            <tr>
              <td className="font-bold pr-2 pb-1 align-top">Type</td>
              <td className="pb-1">: {data.subject.courseType}</td>
            </tr>
            <tr>
              <td className="font-bold pr-2 pb-1 align-top">Session</td>
              <td className="pb-1">: {data.subject.session || '—'}</td>
            </tr>
            {isLab && (
              <>
                {data.experimentNo && (
                  <tr>
                    <td className="font-bold pr-2 pb-1 align-top">Exp. No</td>
                    <td className="pb-1">: {data.experimentNo}</td>
                  </tr>
                )}
                {data.experimentTitle && (
                  <tr>
                    <td className="font-bold pr-2 pb-1 align-top">Exp. Title</td>
                    <td className="pb-1">: {data.experimentTitle}</td>
                  </tr>
                )}
                {data.experimentDate && (
                  <tr>
                    <td className="font-bold pr-2 pb-1 align-top">Date of Exp.</td>
                    <td className="pb-1">: {data.experimentDate}</td>
                  </tr>
                )}
              </>
            )}
          </tbody>
        </table>

        {/* Two column */}
        <div className="w-full flex gap-6">
          <div className="flex-1 border border-black p-3">
            <p className="text-xs font-bold uppercase tracking-wider border-b border-black pb-1 mb-2">Submitted By</p>
            <p className="text-xs mt-1">{data.submittedBy.name || '—'}</p>
            <p className="text-xs mt-1">Roll: {data.submittedBy.roll || '—'}</p>
            <p className="text-xs mt-1">Reg: {data.submittedBy.regNo || '—'}</p>
            <p className="text-xs mt-1">{data.submittedBy.year} Year, {data.submittedBy.semester} Semester</p>
            {data.submittedBy.groupNo && (
              <p className="text-xs mt-1">Group: {data.submittedBy.groupNo}</p>
            )}
          </div>
          <div className="flex-1 border border-black p-3">
            <p className="text-xs font-bold uppercase tracking-wider border-b border-black pb-1 mb-2">Submitted To</p>
            <p className="text-xs mt-1">{data.submittedTo.name || '—'}</p>
            <p className="text-xs mt-1">{data.submittedTo.designation}</p>
            <p className="text-xs mt-1">Dept. of {data.submittedTo.dept || '—'}</p>
            <p className="text-xs mt-1">{data.submittedTo.university || '—'}</p>
          </div>
        </div>

        {/* Submission date */}
        <div className="w-full mt-4" style={{ borderTop: '1px solid black' }} />
        <div className="w-full mt-1" style={{ borderTop: '3px solid black' }} />
        <p className="text-sm mt-3">
          <strong>Date of Submission:</strong> {data.submissionDate || '—'}
        </p>
      </div>
    </div>
  )
}
