import { CoverPageData } from '@/types/CoverPageData'
interface Props { data: CoverPageData }

export default function NSUTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'
  const { university, subject, submittedBy, submittedTo, submissionDate, experimentDate, experimentNo, experimentTitle } = data

  return (
    <div style={{
      width: '210mm', minHeight: '297mm',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '11pt', color: '#000', backgroundColor: '#fff',
      boxSizing: 'border-box', display: 'flex', flexDirection: 'column',
      border: '1px solid #000',
    }}>
      {/* Top accent bar */}
      <div style={{ height: '5px', background: '#000' }} />

      {/* Header */}
      <div style={{ padding: '18px 28px', display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '2px solid #000' }}>
        {university.logoUrl ? (
          <img src={university.logoUrl} alt="Logo" style={{ height: '80px', width: '80px', objectFit: 'contain', flexShrink: 0 }} />
        ) : (
          <div style={{ height: '80px', width: '80px', borderRadius: '4px', border: '1px dashed #999', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9pt', color: '#999', flexShrink: 0 }}>Logo</div>
        )}
        <div>
          <div style={{ fontSize: '15pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {university.name || 'North South University'}
          </div>
          <div style={{ fontSize: '10pt', color: '#444', marginTop: '3px' }}>
            {university.dept || 'Department of Electrical & Computer Engineering'}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, padding: '24px 28px', display: 'flex', flexDirection: 'column' }}>

        {/* Doc type */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'inline-block', border: '1.5px solid #000', padding: '8px 32px', fontSize: '13pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
            {isLab ? 'Laboratory Report' : 'Assignment'}
          </div>
        </div>

        {/* Course info box */}
        <div style={{ border: '1px solid #000', overflow: 'hidden', marginBottom: '20px' }}>
          <div style={{ background: '#f0f0f0', borderBottom: '1px solid #000', padding: '6px 14px', fontSize: '10pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Course Information
          </div>
          <div style={{ padding: '12px 16px' }}>
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
                    <td style={{ padding: '4px 0', fontWeight: 'bold', width: '44%', color: '#555' }}>{label}</td>
                    <td style={{ padding: '4px 4px', width: '4%', color: '#555' }}>:</td>
                    <td style={{ padding: '4px 0', fontWeight: '600' }}>{val || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* People */}
        <div style={{ display: 'flex', gap: '14px', marginBottom: '20px' }}>
          {[
            { title: 'Submitted By', rows: [['Name', submittedBy.name], ['Student ID', submittedBy.roll], ['Reg. No.', submittedBy.regNo], ['Year', submittedBy.year], ['Semester', submittedBy.semester], ['Group', submittedBy.groupNo]] },
            { title: 'Submitted To', rows: [['Name', submittedTo.name], ['Designation', submittedTo.designation], ['Department', submittedTo.dept], ['University', submittedTo.university]] },
          ].map(({ title, rows }) => (
            <div key={title} style={{ flex: 1, border: '1px solid #000', overflow: 'hidden' }}>
              <div style={{ background: '#f0f0f0', borderBottom: '1px solid #000', padding: '6px 14px', fontSize: '10pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {title}
              </div>
              <div style={{ padding: '10px 14px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10.5pt' }}>
                  <tbody>
                    {rows.filter(([, v]) => v).map(([l, v]) => (
                      <tr key={l}>
                        <td style={{ padding: '3px 0', color: '#555', width: '45%' }}>{l}</td>
                        <td style={{ padding: '3px 4px', width: '5%', color: '#555' }}>:</td>
                        <td style={{ padding: '3px 0', fontWeight: '600' }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        {/* Footer */}
        <div style={{ borderTop: '2px solid #000', paddingTop: '10px', textAlign: 'center', fontSize: '11pt' }}>
          <strong>Date of Submission:</strong> {submissionDate || '—'}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div style={{ height: '5px', background: '#000' }} />
    </div>
  )
}
