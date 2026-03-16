import { CoverPageData } from '@/types/CoverPageData'
interface Props { data: CoverPageData }

export default function RUETTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'
  const { university, subject, submittedBy, submittedTo, submissionDate, experimentDate, experimentNo, experimentTitle } = data

  return (
    <div style={{
      width: '210mm', minHeight: '297mm', padding: '20mm 24mm',
      fontFamily: '"Times New Roman", Times, serif',
      fontSize: '12pt', color: '#000', backgroundColor: '#fff',
      boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center',
      border: '2px solid #000',
    }}>
      {/* Green accent top bar */}
      <div style={{ width: 'calc(100% + 48mm)', marginLeft: '-24mm', marginTop: '-20mm', marginBottom: '20px', height: '8px', background: 'linear-gradient(90deg,#1a6e3c,#2ecc71,#1a6e3c)' }} />

      {/* Logo */}
      <div style={{ marginBottom: '12px' }}>
        {university.logoUrl ? (
          <img src={university.logoUrl} alt="Logo" style={{ height: '100px', width: '100px', objectFit: 'contain' }} />
        ) : (
          <div style={{ height: '100px', width: '100px', borderRadius: '50%', border: '2px dashed #1a6e3c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9pt', color: '#1a6e3c' }}>Logo</div>
        )}
      </div>

      {/* University */}
      <div style={{ textAlign: 'center', marginBottom: '6px' }}>
        <div style={{ fontSize: '16pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {university.name || 'Rajshahi University of Engineering & Technology'}
        </div>
        <div style={{ fontSize: '11.5pt', marginTop: '3px', color: '#333' }}>
          {university.dept || 'Department of Computer Science and Engineering'}
        </div>
      </div>

      <div style={{ width: '100%', borderTop: '2px solid #1a6e3c', marginBottom: '2px', marginTop: '12px' }} />
      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '16px' }} />

      {/* Doc type */}
      <div style={{ border: '2px solid #1a6e3c', padding: '6px 28px', marginBottom: '18px' }}>
        <div style={{ fontSize: '13pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', textAlign: 'center', color: '#1a6e3c' }}>
          {isLab ? 'Laboratory Report' : 'Assignment'}
        </div>
      </div>

      {/* Subject info */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11pt', marginBottom: '16px' }}>
        <tbody>
          {[
            ['Course Title', subject.name],
            ['Course Code', subject.courseCode],
            ['Session', subject.session],
            ...(isLab ? [
              ['Experiment No.', experimentNo],
              ['Experiment Title', experimentTitle],
              ['Date of Experiment', experimentDate],
            ] : []),
          ].map(([label, val]) => (
            <tr key={label} style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '5px 0', fontWeight: 'bold', width: '44%' }}>{label}</td>
              <td style={{ padding: '5px 4px', width: '4%' }}>:</td>
              <td style={{ padding: '5px 0' }}>{val || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Submitted By / To */}
      <div style={{ width: '100%', display: 'flex', gap: '16px', marginTop: 'auto', marginBottom: '16px' }}>
        {[
          { title: 'Submitted By', rows: [['Name', submittedBy.name], ['Student ID', submittedBy.roll], ['Reg. No.', submittedBy.regNo], ['Year', submittedBy.year], ['Semester', submittedBy.semester], ['Group', submittedBy.groupNo]] },
          { title: 'Submitted To', rows: [['Name', submittedTo.name], ['Designation', submittedTo.designation], ['Department', submittedTo.dept], ['University', submittedTo.university]] },
        ].map(({ title, rows }) => (
          <div key={title} style={{ flex: 1, border: '1px solid #1a6e3c', padding: '12px 14px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '11pt', textTransform: 'uppercase', textAlign: 'center', borderBottom: '1px solid #1a6e3c', paddingBottom: '6px', marginBottom: '10px', color: '#1a6e3c' }}>
              {title}
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10.5pt' }}>
              <tbody>
                {rows.filter(([, v]) => v).map(([l, v]) => (
                  <tr key={l}>
                    <td style={{ padding: '3px 0', fontWeight: 'bold', width: '45%' }}>{l}</td>
                    <td style={{ padding: '3px 4px', width: '5%' }}>:</td>
                    <td style={{ padding: '3px 0' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <div style={{ width: '100%', borderTop: '2px solid #1a6e3c', marginBottom: '2px' }} />
      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '10px' }} />
      <div style={{ textAlign: 'center', fontSize: '11pt' }}>
        <strong>Date of Submission:</strong> {submissionDate || '—'}
      </div>
    </div>
  )
}
