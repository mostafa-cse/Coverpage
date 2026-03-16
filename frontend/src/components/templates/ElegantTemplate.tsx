import { CoverPageData } from '@/types/CoverPageData'
interface Props { data: CoverPageData }

export default function ElegantTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'
  const { university, subject, submittedBy, submittedTo, submissionDate, experimentDate, experimentNo, experimentTitle } = data

  return (
    <div style={{
      width: '210mm', minHeight: '297mm', padding: '0',
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontSize: '12pt', color: '#000', backgroundColor: '#fff',
      boxSizing: 'border-box', display: 'flex', flexDirection: 'column',
      border: '1px solid #000',
    }}>
      {/* Top border accent */}
      <div style={{ height: '5px', background: '#000' }} />
      <div style={{ height: '2px', background: '#888', marginBottom: '0' }} />

      {/* Header */}
      <div style={{ padding: '28px 28px 20px', textAlign: 'center', borderBottom: '2px solid #000' }}>
        {university.logoUrl ? (
          <img src={university.logoUrl} alt="Logo" style={{ height: '90px', width: '90px', objectFit: 'contain', marginBottom: '12px' }} />
        ) : (
          <div style={{ height: '90px', width: '90px', borderRadius: '50%', border: '1.5px dashed #999', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9pt', color: '#999', margin: '0 auto 12px' }}>Logo</div>
        )}
        <div style={{ fontSize: '16pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
          {university.name || 'University Name'}
        </div>
        <div style={{ fontSize: '11pt', color: '#444', marginTop: '5px' }}>
          {university.dept || 'Department Name'}
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, padding: '24px 28px', display: 'flex', flexDirection: 'column' }}>

        {/* Doc type */}
        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <div style={{ display: 'inline-block', border: '1.5px solid #000', padding: '7px 28px', fontSize: '12pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '3px' }}>
            {isLab ? 'Laboratory Report' : 'Assignment'}
          </div>
        </div>

        {/* Subject info */}
        <div style={{ border: '1px solid #ccc', padding: '14px 18px', marginBottom: '18px' }}>
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
                <tr key={label} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '5px 0', fontWeight: 'bold', width: '44%' }}>{label}</td>
                  <td style={{ padding: '5px 4px', width: '4%' }}>:</td>
                  <td style={{ padding: '5px 0' }}>{val || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* People */}
        <div style={{ display: 'flex', gap: '14px', marginTop: 'auto', marginBottom: '18px' }}>
          {[
            { title: 'Submitted By', rows: [['Name', submittedBy.name], ['Student ID', submittedBy.roll], ['Reg. No.', submittedBy.regNo], ['Year', submittedBy.year], ['Semester', submittedBy.semester], ['Group', submittedBy.groupNo]] },
            { title: 'Submitted To', rows: [['Name', submittedTo.name], ['Designation', submittedTo.designation], ['Department', submittedTo.dept], ['University', submittedTo.university]] },
          ].map(({ title, rows }) => (
            <div key={title} style={{ flex: 1, border: '1px solid #ccc', overflow: 'hidden' }}>
              <div style={{ background: '#f5f5f5', borderBottom: '1px solid #ccc', padding: '7px 14px', fontSize: '10pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>
                {title}
              </div>
              <div style={{ padding: '10px 14px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10.5pt' }}>
                  <tbody>
                    {rows.filter(([, v]) => v).map(([l, v]) => (
                      <tr key={l}>
                        <td style={{ padding: '3px 0', color: '#555', width: '45%' }}>{l}</td>
                        <td style={{ padding: '3px 4px', width: '5%', color: '#555' }}>:</td>
                        <td style={{ padding: '3px 0' }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Date */}
        <div style={{ textAlign: 'center', padding: '8px', border: '1px solid #ccc', fontSize: '11pt' }}>
          <strong>Date of Submission:</strong> {submissionDate || '—'}
        </div>
      </div>

      {/* Bottom border accent */}
      <div style={{ height: '2px', background: '#888' }} />
      <div style={{ height: '5px', background: '#000' }} />
    </div>
  )
}
