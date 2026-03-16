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
    }}>
      {/* Gradient header */}
      <div style={{ background: 'linear-gradient(135deg,#1e3a8a 0%,#3b82f6 100%)', padding: '20px 28px', color: '#fff', display: 'flex', alignItems: 'center', gap: '14px' }}>
        {data.university.logoUrl ? (
          <img src={data.university.logoUrl} alt="Logo" style={{ width: '64px', height: '64px', objectFit: 'contain', background: '#fff', borderRadius: '50%', padding: '4px' }} />
        ) : (
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9pt', color: 'rgba(255,255,255,0.7)', border: '1px dashed rgba(255,255,255,0.5)', flexShrink: 0 }}>
            Logo
          </div>
        )}
        <div>
          <div style={{ fontSize: '14pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {data.university.name || 'University Name'}
          </div>
          <div style={{ fontSize: '10pt', opacity: 0.85, marginTop: '2px' }}>
            Department of {data.university.dept || 'Department'}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, padding: '24px 28px', display: 'flex', flexDirection: 'column' }}>
        {/* Doc type pill */}
        <div style={{ marginBottom: '18px' }}>
          <span style={{ background: '#1e3a8a', color: '#fff', padding: '4px 16px', borderRadius: '20px', fontSize: '10pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {isLab ? 'Lab Report' : 'Assignment'}
          </span>
        </div>

        {/* Subject */}
        <div style={{ borderLeft: '4px solid #3b82f6', paddingLeft: '14px', marginBottom: '20px' }}>
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
          {/* Submitted By */}
          <div style={{ flex: 1, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '14px' }}>
            <div style={{ fontSize: '8.5pt', fontWeight: 'bold', color: '#1e40af', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', borderBottom: '1px solid #e2e8f0', paddingBottom: '6px' }}>
              Submitted By
            </div>
            {[['Name', data.submittedBy.name], ['Roll No.', data.submittedBy.roll], ['Reg. No.', data.submittedBy.regNo], ['Year', data.submittedBy.year], ['Semester', data.submittedBy.semester], ['Group', data.submittedBy.groupNo]].map(([l, v]) => v ? (
              <div key={l} style={{ fontSize: '10pt', margin: '2px 0' }}><span style={{ color: '#555' }}>{l}: </span><strong>{v}</strong></div>
            ) : null)}
          </div>

          {/* Submitted To */}
          <div style={{ flex: 1, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '14px' }}>
            <div style={{ fontSize: '8.5pt', fontWeight: 'bold', color: '#1e40af', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', borderBottom: '1px solid #e2e8f0', paddingBottom: '6px' }}>
              Submitted To
            </div>
            {[['Name', data.submittedTo.name], ['Designation', data.submittedTo.designation], ['Department', data.submittedTo.dept], ['University', data.submittedTo.university]].map(([l, v]) => v ? (
              <div key={l} style={{ fontSize: '10pt', margin: '2px 0' }}><span style={{ color: '#555' }}>{l}: </span><strong>{v}</strong></div>
            ) : null)}
          </div>
        </div>

        <div style={{ flex: 1 }} />

        {/* Footer dates */}
        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '10pt', color: '#555' }}>
          <span>Submission Date: <strong style={{ color: '#000' }}>{data.submissionDate || '—'}</strong></span>
          {isLab && data.experimentDate && (
            <span>Experiment Date: <strong style={{ color: '#000' }}>{data.experimentDate}</strong></span>
          )}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div style={{ height: '6px', background: 'linear-gradient(90deg,#1e3a8a,#3b82f6)' }} />
    </div>
  )
}
