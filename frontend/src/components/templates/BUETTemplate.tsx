import { CoverPageData } from '@/types/CoverPageData'

interface Props { data: CoverPageData }

export default function BUETTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'
  const { university, subject, submittedBy, submittedTo, submissionDate, experimentDate, experimentNo, experimentTitle } = data

  return (
    <div style={{
      width: '210mm', minHeight: '297mm',
      padding: '18mm 20mm',
      fontFamily: '"Times New Roman", Times, serif',
      fontSize: '12pt', color: '#000', backgroundColor: '#fff',
      boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center',
      border: '3px solid #000',
      outline: '1px solid #000',
      outlineOffset: '-6px',
    }}>

      {/* Logo */}
      <div style={{ marginBottom: '12px', marginTop: '6px' }}>
        {university.logoUrl ? (
          <img src={university.logoUrl} alt="Logo" style={{ height: '96px', width: '96px', objectFit: 'contain' }} />
        ) : (
          <div style={{ height: '96px', width: '96px', borderRadius: '50%', border: '2px dashed #aaa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9pt', color: '#aaa' }}>
            Logo
          </div>
        )}
      </div>

      {/* University */}
      <div style={{ textAlign: 'center', marginBottom: '6px' }}>
        <div style={{ fontSize: '16pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px', lineHeight: '1.3' }}>
          {university.name || 'Bangladesh University of Engineering & Technology'}
        </div>
        <div style={{ fontSize: '11.5pt', marginTop: '4px' }}>
          {university.dept || 'Department of Computer Science and Engineering'}
        </div>
        {university.address && (
          <div style={{ fontSize: '10.5pt', marginTop: '2px' }}>{university.address}</div>
        )}
      </div>

      {/* Double ornamental rule */}
      <div style={{ width: '100%', borderTop: '3px double #000', margin: '14px 0 16px' }} />

      {/* Doc type */}
      <div style={{ border: '2px solid #000', padding: '8px 32px', marginBottom: '20px' }}>
        <div style={{ fontSize: '13pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '3px', textAlign: 'center' }}>
          {isLab ? 'Laboratory Report' : 'Assignment'}
        </div>
      </div>

      {/* Subject info */}
      <div style={{ width: '100%', border: '1.5px solid #000', padding: '12px 16px', marginBottom: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11.5pt' }}>
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
                <td style={{ padding: '4px 0', fontWeight: 'bold', width: '44%', verticalAlign: 'top' }}>{label}</td>
                <td style={{ padding: '4px 4px', width: '4%', verticalAlign: 'top' }}>:</td>
                <td style={{ padding: '4px 0', verticalAlign: 'top' }}>{val || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ flexGrow: 1 }} />

      {/* Submitted By / To */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', maxWidth: '90%' }}>
          {[
            { title: 'Submitted By', rows: [['Name', submittedBy.name], ['Student ID', submittedBy.roll], ['Reg. No.', submittedBy.regNo], ['Year', submittedBy.year], ['Semester', submittedBy.semester], ['Group', submittedBy.groupNo]] },
            { title: 'Submitted To', rows: [['Name', submittedTo.name], ['Designation', submittedTo.designation], ['Department', submittedTo.dept], ['University', submittedTo.university]] },
          ].map(({ title, rows }) => (
            <div key={title} style={{ flex: 1, border: '1.5px solid #000', padding: '12px 14px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '11pt', textTransform: 'uppercase', background: '#f0f0f0', margin: '-12px -14px 10px', padding: '6px 14px', letterSpacing: '0.5px', borderBottom: '1.5px solid #000', textAlign: 'center' }}>
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
  )
}
