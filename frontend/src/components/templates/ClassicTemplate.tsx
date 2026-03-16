import { CoverPageData } from '@/types/CoverPageData'

interface Props { data: CoverPageData }

export default function ClassicTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'

  return (
    <div
      style={{
        width: '210mm', minHeight: '297mm',
        padding: '20mm 22mm',
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: '12pt', color: '#000', backgroundColor: '#fff',
        boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: '10px' }}>
        {data.university.logoUrl ? (
          <img src={data.university.logoUrl} alt="Logo" style={{ height: '80px', width: '80px', objectFit: 'contain' }} />
        ) : (
          <div style={{ height: '80px', width: '80px', borderRadius: '50%', border: '1px dashed #aaa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9pt', color: '#aaa' }}>
            Logo
          </div>
        )}
      </div>

      {/* University */}
      <h1 style={{ fontSize: '16pt', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px' }}>
        {data.university.name || 'University Name'}
      </h1>
      <p style={{ fontSize: '12pt', textAlign: 'center', margin: '0 0 14px' }}>
        Department of {data.university.dept || 'Department'}
      </p>

      <div style={{ width: '100%', borderTop: '2px solid #000', marginBottom: '14px' }} />

      {/* Doc type */}
      <div style={{ border: '1px solid #000', padding: '6px 24px', marginBottom: '16px' }}>
        <p style={{ fontSize: '13pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', textAlign: 'center', margin: 0 }}>
          {isLab ? 'Lab Report' : 'Assignment'}
        </p>
      </div>

      {/* Subject info */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11.5pt', marginBottom: '12px' }}>
        <tbody>
          {[
            ['Course Title', data.subject.name],
            ['Course Code', data.subject.courseCode],
            ['Session', data.subject.session],
          ].map(([label, val]) => (
            <tr key={label}>
              <td style={{ padding: '3px 0', fontWeight: 'bold', width: '40%' }}>{label}</td>
              <td style={{ padding: '3px 4px', width: '4%' }}>:</td>
              <td style={{ padding: '3px 0' }}>{val || '—'}</td>
            </tr>
          ))}
          {isLab && [
            ['Experiment No.', data.experimentNo],
            ['Experiment Title', data.experimentTitle],
            ['Date of Experiment', data.experimentDate],
          ].map(([label, val]) => (
            <tr key={label}>
              <td style={{ padding: '3px 0', fontWeight: 'bold' }}>{label}</td>
              <td style={{ padding: '3px 4px' }}>:</td>
              <td style={{ padding: '3px 0' }}>{val || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '14px' }} />

      {/* Submitted By / To */}
      <div style={{ width: '100%', display: 'flex', gap: '12px', marginTop: 'auto' }}>
        <div style={{ flex: 1, border: '1px solid #000', padding: '10px 12px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '11pt', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '5px', marginBottom: '8px', textAlign: 'center' }}>Submitted By</p>
          {[['Name', data.submittedBy.name], ['Roll No.', data.submittedBy.roll], ['Reg. No.', data.submittedBy.regNo], ['Year', data.submittedBy.year], ['Semester', data.submittedBy.semester], ['Group', data.submittedBy.groupNo]].map(([l, v]) => v ? (
            <p key={l} style={{ fontSize: '10.5pt', margin: '3px 0' }}><strong>{l}: </strong>{v}</p>
          ) : null)}
        </div>
        <div style={{ flex: 1, border: '1px solid #000', padding: '10px 12px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '11pt', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '5px', marginBottom: '8px', textAlign: 'center' }}>Submitted To</p>
          {[['Name', data.submittedTo.name], ['Designation', data.submittedTo.designation], ['Dept.', data.submittedTo.dept], ['University', data.submittedTo.university]].map(([l, v]) => v ? (
            <p key={l} style={{ fontSize: '10.5pt', margin: '3px 0' }}><strong>{l}: </strong>{v}</p>
          ) : null)}
        </div>
      </div>

      <div style={{ width: '100%', borderTop: '2px solid #000', marginTop: '14px', paddingTop: '8px', textAlign: 'center', fontSize: '11pt' }}>
        <strong>Date of Submission: </strong>{data.submissionDate || '—'}
      </div>
    </div>
  )
}
