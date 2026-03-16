import { CoverPageData } from '@/types/CoverPageData'
interface Props { data: CoverPageData }

export default function ElegantTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'
  const { university, subject, submittedBy, submittedTo, submissionDate, experimentDate, experimentNo, experimentTitle } = data

  return (
    <div style={{
      width: '210mm', minHeight: '297mm', padding: '0',
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontSize: '12pt', color: '#f0ece0', backgroundColor: '#1a1a2e',
      boxSizing: 'border-box', display: 'flex', flexDirection: 'column',
    }}>
      {/* Top gold border */}
      <div style={{ height: '6px', background: 'linear-gradient(90deg,#b8960c,#f0c040,#b8960c)' }} />

      {/* Header */}
      <div style={{ padding: '28px 28px 20px', textAlign: 'center', borderBottom: '1px solid rgba(240,192,64,0.3)', background: 'rgba(255,255,255,0.03)' }}>
        {university.logoUrl ? (
          <img src={university.logoUrl} alt="Logo" style={{ height: '90px', width: '90px', objectFit: 'contain', marginBottom: '12px', filter: 'brightness(1.1)' }} />
        ) : (
          <div style={{ height: '90px', width: '90px', borderRadius: '50%', border: '2px solid #f0c040', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9pt', color: '#f0c040', margin: '0 auto 12px' }}>Logo</div>
        )}
        <div style={{ fontSize: '16pt', fontWeight: 'bold', textTransform: 'uppercase', color: '#f0c040', letterSpacing: '1.5px', textShadow: '0 0 20px rgba(240,192,64,0.3)' }}>
          {university.name || 'University Name'}
        </div>
        <div style={{ fontSize: '11pt', color: 'rgba(240,236,224,0.7)', marginTop: '5px' }}>
          {university.dept || 'Department Name'}
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, padding: '24px 28px', display: 'flex', flexDirection: 'column' }}>

        {/* Doc type */}
        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <div style={{ display: 'inline-block', border: '1px solid #f0c040', padding: '7px 28px', fontSize: '12pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '3px', color: '#f0c040' }}>
            {isLab ? 'Laboratory Report' : 'Assignment'}
          </div>
        </div>

        {/* Subject info */}
        <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(240,192,64,0.25)', borderRadius: '4px', padding: '14px 18px', marginBottom: '18px' }}>
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
                <tr key={label} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <td style={{ padding: '5px 0', fontWeight: 'bold', width: '44%', color: '#f0c040' }}>{label}</td>
                  <td style={{ padding: '5px 4px', width: '4%', color: 'rgba(240,236,224,0.5)' }}>:</td>
                  <td style={{ padding: '5px 0', color: '#f0ece0' }}>{val || '—'}</td>
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
            <div key={title} style={{ flex: 1, border: '1px solid rgba(240,192,64,0.3)', borderRadius: '4px', overflow: 'hidden', background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ background: 'rgba(240,192,64,0.12)', borderBottom: '1px solid rgba(240,192,64,0.3)', padding: '7px 14px', fontSize: '10pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', color: '#f0c040', textAlign: 'center' }}>
                {title}
              </div>
              <div style={{ padding: '10px 14px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10.5pt' }}>
                  <tbody>
                    {rows.filter(([, v]) => v).map(([l, v]) => (
                      <tr key={l}>
                        <td style={{ padding: '3px 0', color: 'rgba(240,236,224,0.6)', width: '45%' }}>{l}</td>
                        <td style={{ padding: '3px 4px', width: '5%', color: 'rgba(240,236,224,0.4)' }}>:</td>
                        <td style={{ padding: '3px 0', color: '#f0ece0' }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Date */}
        <div style={{ textAlign: 'center', padding: '8px', border: '1px solid rgba(240,192,64,0.3)', fontSize: '11pt', color: '#f0c040' }}>
          <strong>Date of Submission:</strong> <span style={{ color: '#f0ece0' }}>{submissionDate || '—'}</span>
        </div>
      </div>

      {/* Bottom gold border */}
      <div style={{ height: '6px', background: 'linear-gradient(90deg,#b8960c,#f0c040,#b8960c)' }} />
    </div>
  )
}
