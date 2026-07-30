import { CoverPageData } from '@/types/CoverPageData'

interface Props { data: CoverPageData }

export default function ModernTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'

  return (
    <div style={{
      width: '210mm',
      minHeight: '297mm',
      padding: '0',
      fontFamily: '"Times New Roman", Times, serif',
      fontSize: '12pt',
      color: '#000',
      backgroundColor: '#fff',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Top accent bar */}
      <div style={{ height: '5px', background: '#000' }} />

      {/* Header – horizontal logo + name */}
      <div style={{ padding: '20px 28px', display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1.5px solid #000' }}>
        {data.university.logoUrl ? (
          <img src={data.university.logoUrl} alt="Logo" style={{ width: '68px', height: '68px', objectFit: 'contain', flexShrink: 0 }} />
        ) : (
          <div style={{ width: '68px', height: '68px', borderRadius: '50%', border: '1.5px dashed #aaa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9pt', color: '#aaa', flexShrink: 0 }}>
            Logo
          </div>
        )}
        <div>
          <div style={{ fontSize: '14pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {data.university.name || 'University Name'}
          </div>
          <div style={{ fontSize: '10.5pt', marginTop: '2px' }}>
            Department of {data.university.dept || 'Department'}
          </div>
          {data.university.address && (
            <div style={{ fontSize: '10pt', marginTop: '1px' }}>{data.university.address}</div>
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, padding: '22px 28px', display: 'flex', flexDirection: 'column' }}>

        {/* Doc type tag */}
        <div style={{ marginBottom: '18px' }}>
          <span style={{ border: '1.5px solid #000', padding: '4px 18px', fontSize: '10.5pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
            {isLab ? 'Lab Report' : 'Assignment'}
          </span>
        </div>

        {/* Subject – left-border block */}
        <div style={{ borderLeft: '3px solid #000', paddingLeft: '14px', marginBottom: '22px' }}>
          <div style={{ fontSize: '14pt', fontWeight: 'bold', marginBottom: '5px' }}>
            {data.subject.name || 'Course Name'}
          </div>
          <div style={{ fontSize: '10.5pt' }}>
            {[data.subject.courseCode, data.subject.courseType, data.subject.session].filter(Boolean).join(' • ')}
          </div>
          {isLab && (
            <div style={{ marginTop: '8px', fontSize: '10.5pt' }}>
              {data.experimentNo && <div>Experiment No: <strong>{data.experimentNo}</strong></div>}
              {data.experimentTitle && <div>Title: <strong>{data.experimentTitle}</strong></div>}
              {data.experimentDate && <div>Date of Experiment: <strong>{data.experimentDate}</strong></div>}
            </div>
          )}
        </div>

        <div style={{ flex: 1 }} />

        {/* People cards */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '22px' }}>
          <div style={{ display: 'flex', gap: '14px', maxWidth: '90%' }}>
            <div style={{ flex: 1, border: '1.5px solid #000', padding: '14px' }}>
              <div style={{ fontSize: '9pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', borderBottom: '1px solid #000', paddingBottom: '6px' }}>
                Submitted By
              </div>
              {[['Name', data.submittedBy.name], ['Roll No.', data.submittedBy.roll], ['Reg. No.', data.submittedBy.regNo], ['Year', data.submittedBy.year], ['Semester', data.submittedBy.semester], ['Group', data.submittedBy.groupNo]].map(([l, v]) => v ? (
                <div key={l} style={{ fontSize: '10.5pt', margin: '3px 0' }}><strong>{l}: </strong>{v}</div>
              ) : null)}
            </div>
            <div style={{ flex: 1, border: '1.5px solid #000', padding: '14px' }}>
              <div style={{ fontSize: '9pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', borderBottom: '1px solid #000', paddingBottom: '6px' }}>
                Submitted To
              </div>
              {[['Name', data.submittedTo.name], ['Designation', data.submittedTo.designation], ['Department', data.submittedTo.dept], ['University', data.submittedTo.university]].map(([l, v]) => v ? (
                <div key={l} style={{ fontSize: '10.5pt', margin: '3px 0' }}><strong>{l}: </strong>{v}</div>
              ) : null)}
            </div>
          </div>
        </div>

        {/* Submission date centered */}
        <div style={{ textAlign: 'center', fontSize: '10.5pt' }}>
          <span>Submission Date: <strong>{data.submissionDate || '—'}</strong></span>
          {isLab && data.experimentDate && (
            <span style={{ marginLeft: '32px' }}>Experiment Date: <strong>{data.experimentDate}</strong></span>
          )}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div style={{ height: '5px', background: '#000' }} />
    </div>
  )
}
