import { CoverPageData } from '@/types/CoverPageData'
interface Props { data: CoverPageData }

export default function KUETTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'
  const { university, subject, submittedBy, submittedTo, submissionDate, experimentDate, experimentNo, experimentTitle } = data

  return (
    <div style={{
      width: '210mm', minHeight: '297mm', padding: '18mm 22mm',
      fontFamily: '"Times New Roman", Times, serif',
      fontSize: '12pt', color: '#000', backgroundColor: '#fff',
      boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center',
      border: '3px solid #000', position: 'relative',
    }}>
      {/* Corner decorations */}
      {['top:4mm;left:4mm', 'top:4mm;right:4mm', 'bottom:4mm;left:4mm', 'bottom:4mm;right:4mm'].map((pos, i) => (
        <div key={i} style={{
          position: 'absolute',
          ...(Object.fromEntries(pos.split(';').map(p => p.split(':')))),
          width: '12mm', height: '12mm',
          borderTop: i < 2 ? '2px solid #000' : 'none',
          borderBottom: i >= 2 ? '2px solid #000' : 'none',
          borderLeft: i % 2 === 0 ? '2px solid #000' : 'none',
          borderRight: i % 2 === 1 ? '2px solid #000' : 'none',
        }} />
      ))}

      {/* Logo */}
      <div style={{ marginBottom: '12px', marginTop: '8px' }}>
        {university.logoUrl ? (
          <img src={university.logoUrl} alt="Logo" style={{ height: '100px', width: '100px', objectFit: 'contain' }} />
        ) : (
          <div style={{ height: '100px', width: '100px', borderRadius: '50%', border: '2px dashed #999', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9pt', color: '#999' }}>Logo</div>
        )}
      </div>

      {/* University */}
      <div style={{ textAlign: 'center', marginBottom: '6px' }}>
        <div style={{ fontSize: '16pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {university.name || 'Khulna University of Engineering & Technology'}
        </div>
        <div style={{ fontSize: '11.5pt', marginTop: '3px', color: '#333' }}>
          {university.dept || 'Department of Computer Science and Engineering'}
        </div>
      </div>

      {/* Double rule */}
      <div style={{ width: '100%', borderTop: '3px double #000', margin: '12px 0' }} />

      {/* Doc type */}
      <div style={{ border: '2px solid #000', padding: '7px 30px', marginBottom: '18px', letterSpacing: '2px', fontSize: '13pt', fontWeight: 'bold', textTransform: 'uppercase' }}>
        {isLab ? 'Laboratory Report' : 'Assignment'}
      </div>

      {/* Subject info */}
      <div style={{ width: '100%', border: '1px solid #000', padding: '12px 16px', marginBottom: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11pt' }}>
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
              <tr key={label}>
                <td style={{ padding: '4px 0', fontWeight: 'bold', width: '44%' }}>{label}</td>
                <td style={{ padding: '4px 4px', width: '4%' }}>:</td>
                <td style={{ padding: '4px 0' }}>{val || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Submitted By / To */}
      <div style={{ width: '100%', display: 'flex', gap: '16px', marginTop: 'auto', marginBottom: '16px' }}>
        {[
          { title: 'Submitted By', rows: [['Name', submittedBy.name], ['Student ID', submittedBy.roll], ['Reg. No.', submittedBy.regNo], ['Year', submittedBy.year], ['Semester', submittedBy.semester], ['Group', submittedBy.groupNo]] },
          { title: 'Submitted To', rows: [['Name', submittedTo.name], ['Designation', submittedTo.designation], ['Department', submittedTo.dept], ['University', submittedTo.university]] },
        ].map(({ title, rows }) => (
          <div key={title} style={{ flex: 1, border: '1px solid #000', padding: '12px 14px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '11pt', textTransform: 'uppercase', background: '#f0f0f0', margin: '-12px -14px 10px', padding: '6px 14px', letterSpacing: '0.5px', borderBottom: '1px solid #000', textAlign: 'center' }}>
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

      {/* Double rule + date */}
      <div style={{ width: '100%', borderTop: '3px double #000', marginBottom: '10px' }} />
      <div style={{ textAlign: 'center', fontSize: '11pt' }}>
        <strong>Date of Submission:</strong> {submissionDate || '—'}
      </div>
    </div>
  )
}
