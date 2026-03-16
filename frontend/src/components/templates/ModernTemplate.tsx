import { CoverPageData } from '@/types/CoverPageData'

interface Props { data: CoverPageData }

export default function ModernTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'

  return (
    <div style={{
      width: '210mm', minHeight: '297mm',
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: '12pt', color: '#000', backgroundColor: '#fff',
      boxSizing: 'border-box', display: 'flex', flexDirection: 'column',
      border: '1px solid #000',
    }}>
      {/* Top accent bar */}
      <div style={{ height: '5px', background: '#000' }} />

      {/* Header */}
      <div style={{ padding: '20px 28px', display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid #000' }}>
        {data.university.logoUrl ? (
          <img src={data.university.logoUrl} alt="Logo" style={{ width: '64px', height: '64px', objectFit: 'contain', flexShrink: 0 }} />
        ) : (
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1px dashed #999', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9pt', color: '#999', flexShrink: 0 }}>
            Logo
          </div>
        )}
        <div>
          <div style={{ fontSize: '14pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {data.university.name || 'University Name'}
          </div>
          <div style={{ fontSize: '10pt', color: '#444', marginTop: '2px' }}>
            Department of {data.university.dept || 'Department'}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, padding: '24px 28px', display: 'flex', flexDirection: 'column' }}>
        {/* Doc type */}
        <div style={{ marginBottom: '18px' }}>
          <span style={{ border: '1.5px solid #000', padding: '4px 18px', fontSize: '10pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {isLab ? 'Lab Report' : 'Assignment'}
          </span>
        </div>

        {/* Subject */}
        <div style={{ borderLeft: '3px solid #000', paddingLeft: '14px', marginBottom: '20px' }}>
          <div style={{ fontSize: '14pt', fontWeight: 'bold', marginBottom: '4px' }}>
            {data.subject.name || 'Course Name'}
          </div>
          <div style={{ fontSize: '10pt', color: '#555' }}>
            {[data.subject.courseCode, data.subject.courseType, data.subject.session].filter(Boolean).join(' • ')}
          </div>
          {isLab && (
            <div style={{ marginTop: '8px', fontSize: '10.5pt', color: '#333' }}>
              {data.experimentNo && <div>Experiment No: <strong>{data.experimentNo}</strong></div>}
              {data.experimentTitle && <div>Title: <strong>{data.experimentTitle}</strong></div>}
              {data.experimentDate && <div>Date of Exp.: <strong>{data.experimentDate}</strong></div>}
            </div>
          )}
        </div>

        {/* People cards */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
          <div style={{ flex: 1, border: '1px solid #ccc', padding: '14px' }}>
            <div style={{ fontSize: '8.5pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', borderBottom: '1px solid #ccc', paddingBottom: '6px' }}>
              Submitted By
            </div>
            {[['Name', data.submittedBy.name], ['Roll No.', data.submittedBy.roll], ['Reg. No.', data.submittedBy.regNo], ['Year', data.submittedBy.year], ['Semester', data.submittedBy.semester], ['Group', data.submittedBy.groupNo]].map(([l, v]) => v ? (
              <div key={l} style={{ fontSize: '10pt', margin: '2px 0' }}><span style={{ color: '#555' }}>{l}: </span><strong>{v}</strong></div>
            ) : null)}
          </div>

          <div style={{ flex: 1, border: '1px solid #ccc', padding: '14px' }}>
            <div style={{ fontSize: '8.5pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', borderBottom: '1px solid #ccc', paddingBottom: '6px' }}>
              Submitted To
            </div>
            {[['Name', data.submittedTo.name], ['Designation', data.submittedTo.designation], ['Department', data.submittedTo.dept], ['University', data.submittedTo.university]].map(([l, v]) => v ? (
              <div key={l} style={{ fontSize: '10pt', margin: '2px 0' }}><span style={{ color: '#555' }}>{l}: </span><strong>{v}</strong></div>
            ) : null)}
          </div>
        </div>

        <div style={{ flex: 1 }} />

        {/* Footer */}
        <div style={{ borderTop: '1px solid #000', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '10pt', color: '#333' }}>
          <span>Submission Date: <strong style={{ color: '#000' }}>{data.submissionDate || '—'}</strong></span>
          {isLab && data.experimentDate && (
            <span>Experiment Date: <strong style={{ color: '#000' }}>{data.experimentDate}</strong></span>
          )}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div style={{ height: '5px', background: '#000' }} />
    </div>
  )
}
