import { CoverPageData } from '@/types/CoverPageData'

interface Props { data: CoverPageData }

/** Renders "4th" as 4 + superscript "th", matching the ordinal styling on the reference cover page. */
function Ordinal({ value }: { value?: string }) {
  if (!value) return null
  const m = value.match(/^(\d+)(st|nd|rd|th)$/i)
  if (!m) return <>{value}</>
  return <>{m[1]}<sup>{m[2]}</sup></>
}

export default function StandardTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'
  const { university, subject, submittedBy, submittedTo, submissionDate, experimentDate, experimentNo, experimentTitle, assignmentTitle } = data

  const topicLabel = isLab ? 'Laboratory Report on,' : 'Assignment on,'
  const topicTitle = (isLab ? experimentTitle : assignmentTitle) || subject.name || '—'

  return (
    <div style={{
      width: '210mm', minHeight: '297mm',
      padding: '18mm 20mm',
      fontFamily: '"Times New Roman", Times, serif',
      fontSize: '12pt', color: '#000', backgroundColor: '#fff',
      boxSizing: 'border-box', display: 'flex', flexDirection: 'column',
      border: '1.5px solid #000',
    }}>

      {/* Header — logo + justified university name with its own underline */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px', marginBottom: '30px' }}>
        {university.logoUrl ? (
          <img src={university.logoUrl} alt="Logo" style={{ height: '100px', width: '100px', objectFit: 'contain', flexShrink: 0 }} />
        ) : (
          <div style={{ height: '100px', width: '100px', borderRadius: '50%', border: '1.5px dashed #aaa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9pt', color: '#aaa', flexShrink: 0 }}>
            Logo
          </div>
        )}
        <div style={{ flex: 1, borderBottom: '3px solid #000', paddingBottom: '4px' }}>
          <div style={{ fontSize: '16pt', fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'justify', letterSpacing: '0.3px', lineHeight: '1.35' }}>
            {university.name || 'Jashore University of Science and Technology'}
          </div>
        </div>
      </div>

      {/* Topic / title block */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div style={{ fontSize: '12.5pt', marginBottom: '10px' }}>{topicLabel}</div>
        <div style={{ fontSize: '13pt', fontWeight: 'bold', lineHeight: '1.5' }}>{topicTitle}</div>
      </div>

      {/* Course meta — centered, bold labels */}
      <div style={{ textAlign: 'center', fontSize: '11.5pt' }}>
        <div style={{ marginBottom: '6px' }}><strong>Course: </strong>{subject.name || '—'}</div>
        <div style={{ marginBottom: '6px' }}><strong>Course Code: </strong>{subject.courseCode || '—'}</div>
        {isLab && experimentNo && <div style={{ marginBottom: '6px' }}><strong>Experiment No: </strong>{experimentNo}</div>}
        {isLab && experimentDate && <div style={{ marginBottom: '6px' }}><strong>Date of Experiment: </strong>{experimentDate}</div>}
      </div>

      <div style={{ flexGrow: 1 }} />

      {/* Submitted by / to */}
      <div style={{ display: 'flex', width: '100%', border: '1.5px solid #000', marginBottom: '30px' }}>
        <div style={{ flex: 1, borderRight: '1px solid #000', padding: '14px 18px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '12pt', borderBottom: '1.5px solid #000', paddingBottom: '6px', marginBottom: '10px' }}>
            Submitted by
          </div>
          <div style={{ fontSize: '11pt', lineHeight: '1.9' }}>
            {submittedBy.name && <div>{submittedBy.name}</div>}
            {submittedBy.roll && <div>Student ID: {submittedBy.roll}</div>}
            {submittedBy.regNo && <div>Reg. No: {submittedBy.regNo}</div>}
            {submittedBy.year && <div>Year: <Ordinal value={submittedBy.year} /></div>}
            {submittedBy.semester && <div>Semester: <Ordinal value={submittedBy.semester} /></div>}
            {submittedBy.groupNo && <div>Group: {submittedBy.groupNo}</div>}
            {subject.session && <div>Session: {subject.session}</div>}
          </div>
        </div>
        <div style={{ flex: 1, padding: '14px 18px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '12pt', borderBottom: '1.5px solid #000', paddingBottom: '6px', marginBottom: '10px' }}>
            Submitted to
          </div>
          <div style={{ fontSize: '11pt', lineHeight: '1.9' }}>
            {submittedTo.name && <div>{submittedTo.name},</div>}
            {submittedTo.designation && <div>{submittedTo.designation},</div>}
            {submittedTo.dept && <div>Department of {submittedTo.dept},</div>}
            {submittedTo.university && <div>{submittedTo.university}</div>}
          </div>
        </div>
      </div>

      {/* Submission date centered */}
      <div style={{ textAlign: 'center', fontSize: '11.5pt' }}>
        <strong>Submission Date: </strong>{submissionDate || '—'}
      </div>
    </div>
  )
}
