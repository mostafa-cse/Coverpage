import { CoverPageData } from '@/types/CoverPageData'
interface Props { data: CoverPageData }

export default function RUETTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'
  const { university, subject, submittedBy, submittedTo, submissionDate, experimentDate, experimentNo, experimentTitle } = data

  return (
    <div style={{
      width: '210mm', minHeight: '297mm', padding: '0',
      fontFamily: '"Times New Roman", Times, serif',
      fontSize: '12pt', color: '#000', backgroundColor: '#fff',
      boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center',
      border: '2px solid #000',
    }}>
      {/* Top accent bar (full width, inside border) */}
      <div style={{ width: '100%', height: '6px', background: '#000', flexShrink: 0 }} />

      {/* Content area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '18mm 22mm 14mm', width: '100%', boxSizing: 'border-box' }}>

        {/* Logo */}
        <div style={{ marginBottom: '12px' }}>
          {university.logoUrl ? (
            <img src={university.logoUrl} alt="Logo" style={{ height: '96px', width: '96px', objectFit: 'contain' }} />
          ) : (
            <div style={{ height: '96px', width: '96px', borderRadius: '50%', border: '2px dashed #aaa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9pt', color: '#aaa' }}>Logo</div>
          )}
        </div>

        {/* University */}
        <div style={{ textAlign: 'center', marginBottom: '6px' }}>
          <div style={{ fontSize: '16pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px', lineHeight: '1.3' }}>
            {university.name || 'Rajshahi University of Engineering & Technology'}
          </div>
          <div style={{ fontSize: '11.5pt', marginTop: '4px' }}>
            {university.dept || 'Department of Computer Science and Engineering'}
          </div>
          {university.address && (
            <div style={{ fontSize: '10.5pt', marginTop: '2px' }}>{university.address}</div>
          )}
        </div>

        {/* Double rule */}
        <div style={{ width: '100%', borderTop: '2px solid #000', marginBottom: '2px', marginTop: '14px' }} />
        <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '18px' }} />

        {/* Doc type */}
        <div style={{ border: '2px solid #000', padding: '6px 28px', marginBottom: '18px' }}>
          <div style={{ fontSize: '13pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', textAlign: 'center' }}>
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
              <tr key={label} style={{ borderBottom: '1px solid #e0e0e0' }}>
                <td style={{ padding: '5px 0', fontWeight: 'bold', width: '44%', verticalAlign: 'top' }}>{label}</td>
                <td style={{ padding: '5px 4px', width: '4%', verticalAlign: 'top' }}>:</td>
                <td style={{ padding: '5px 0', verticalAlign: 'top' }}>{val || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ flexGrow: 1 }} />

        {/* Submitted By / To */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', maxWidth: '90%' }}>
            {[
              { title: 'Submitted By', rows: [['Name', submittedBy.name], ['Student ID', submittedBy.roll], ['Reg. No.', submittedBy.regNo], ['Year', submittedBy.year], ['Semester', submittedBy.semester], ['Group', submittedBy.groupNo]] },
              { title: 'Submitted To', rows: [['Name', submittedTo.name], ['Designation', submittedTo.designation], ['Department', submittedTo.dept], ['University', submittedTo.university]] },
            ].map(({ title, rows }) => (
              <div key={title} style={{ flex: 1, border: '1.5px solid #000', padding: '12px 14px' }}>
                <div style={{ fontWeight: 'bold', fontSize: '10.5pt', textTransform: 'uppercase', textAlign: 'center', borderBottom: '1px solid #000', paddingBottom: '6px', marginBottom: '10px' }}>
                  {title}
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10.5pt' }}>
                  <tbody>
                    {rows.filter(([, v]) => v).map(([l, v]) => (
                      <tr key={l}>
                        <td style={{ padding: '3px 0', fontWeight: 'bold', width: '45%', verticalAlign: 'top' }}>{l}</td>
                        <td style={{ padding: '3px 4px', width: '5%', verticalAlign: 'top' }}>:</td>
                        <td style={{ padding: '3px 0', verticalAlign: 'top' }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>

        {/* Submission date centered below tables */}
        <div style={{ textAlign: 'center', fontSize: '11pt' }}>
          <strong>Date of Submission:</strong> {submissionDate || '—'}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div style={{ width: '100%', height: '6px', background: '#000', flexShrink: 0 }} />
    </div>
  )
}
