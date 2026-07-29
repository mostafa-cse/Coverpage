import { CoverPageData } from '@/types/CoverPageData'

interface Props { data: CoverPageData }

export default function DUTemplate({ data }: Props) {
  const { university, subject, submittedBy, submittedTo, submissionDate, experimentDate, experimentNo, experimentTitle, docType } = data
  const isLab = docType === 'lab_report'

  return (
    <div
      style={{
        width: '210mm',
        minHeight: '297mm',
        padding: '18mm 22mm',
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: '12pt',
        color: '#000',
        backgroundColor: '#fff',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: '10px' }}>
        {university.logoUrl ? (
          <img src={university.logoUrl} alt="University Logo" style={{ height: '90px', width: '90px', objectFit: 'contain' }} />
        ) : (
          <div style={{ height: '90px', width: '90px', borderRadius: '50%', border: '1.5px dashed #aaa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9pt', color: '#aaa' }}>
            Logo
          </div>
        )}
      </div>

      {/* University */}
      <div style={{ textAlign: 'center', marginBottom: '6px' }}>
        <div style={{ fontSize: '17pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {university.name || 'University of Dhaka'}
        </div>
        <div style={{ fontSize: '12pt', marginTop: '3px' }}>
          {university.dept || 'Department of Computer Science and Engineering'}
        </div>
        {university.address && (
          <div style={{ fontSize: '10.5pt', marginTop: '2px' }}>{university.address}</div>
        )}
      </div>

      {/* Double Rule */}
      <div style={{ width: '100%', borderTop: '2px solid #000', marginBottom: '2px', marginTop: '10px' }} />
      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '18px' }} />

      {/* Doc Type */}
      <div style={{
        fontSize: '14pt', fontWeight: 'bold', textTransform: 'uppercase',
        textDecoration: 'underline', textAlign: 'center', marginBottom: '18px', letterSpacing: '1px',
      }}>
        {isLab ? 'Laboratory Report' : 'Assignment'}
      </div>

      {/* Subject info */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11.5pt', marginBottom: '14px' }}>
        <tbody>
          <tr>
            <td style={{ padding: '4px 0', fontWeight: 'bold', width: '42%' }}>Course Title</td>
            <td style={{ padding: '4px 0', width: '3%' }}>:</td>
            <td style={{ padding: '4px 0' }}>{subject.name || '—'}</td>
          </tr>
          <tr>
            <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Course Code</td>
            <td>:</td>
            <td style={{ padding: '4px 0' }}>{subject.courseCode || '—'}</td>
          </tr>
          <tr>
            <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Session</td>
            <td>:</td>
            <td style={{ padding: '4px 0' }}>{subject.session || '—'}</td>
          </tr>
          {isLab && (
            <>
              <tr>
                <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Experiment No.</td>
                <td>:</td>
                <td style={{ padding: '4px 0' }}>{experimentNo || '—'}</td>
              </tr>
              <tr>
                <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Experiment Title</td>
                <td>:</td>
                <td style={{ padding: '4px 0' }}>{experimentTitle || '—'}</td>
              </tr>
              <tr>
                <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Date of Experiment</td>
                <td>:</td>
                <td style={{ padding: '4px 0' }}>{experimentDate || '—'}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>

      {/* Rule */}
      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '16px' }} />

      {/* Submitted By */}
      <div style={{ width: '100%', marginBottom: '14px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '12pt', textTransform: 'uppercase', textDecoration: 'underline', marginBottom: '8px' }}>
          Submitted By:
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11.5pt' }}>
          <tbody>
            {[
              ['Name', submittedBy.name],
              ['Roll No.', submittedBy.roll],
              ['Registration No.', submittedBy.regNo],
              ['Year & Semester', submittedBy.year && submittedBy.semester ? `${submittedBy.year} Year, ${submittedBy.semester} Semester` : (submittedBy.year || submittedBy.semester)],
              ['Group', submittedBy.groupNo],
            ].filter(([, v]) => v).map(([label, val]) => (
              <tr key={label}>
                <td style={{ padding: '3px 0', fontWeight: 'bold', width: '42%' }}>{label}</td>
                <td style={{ padding: '3px 0', width: '3%' }}>:</td>
                <td style={{ padding: '3px 0' }}>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Rule */}
      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '14px' }} />

      {/* Submitted To */}
      <div style={{ width: '100%', marginBottom: '12px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '12pt', textTransform: 'uppercase', textDecoration: 'underline', marginBottom: '8px' }}>
          Submitted To:
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11.5pt' }}>
          <tbody>
            {[
              ['Name', submittedTo.name],
              ['Designation', submittedTo.designation],
              ['Department', submittedTo.dept],
              ['University', submittedTo.university],
            ].filter(([, v]) => v).map(([label, val]) => (
              <tr key={label}>
                <td style={{ padding: '3px 0', fontWeight: 'bold', width: '42%' }}>{label}</td>
                <td style={{ padding: '3px 0', width: '3%' }}>:</td>
                <td style={{ padding: '3px 0' }}>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Spacer */}
      <div style={{ flexGrow: 1 }} />

      {/* Double Rule + Date */}
      <div style={{ width: '100%', borderTop: '2px solid #000', marginBottom: '2px' }} />
      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '10px' }} />
      <div style={{ textAlign: 'center', fontSize: '11pt' }}>
        <strong>Date of Submission:</strong> {submissionDate || '—'}
      </div>
    </div>
  )
}
