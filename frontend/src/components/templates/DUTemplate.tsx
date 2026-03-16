import { CoverPageData } from '@/types/CoverPageData'

interface Props { data: CoverPageData }

export default function DUTemplate({ data }: Props) {
  const { university, subject, submittedBy, submittedTo, submissionDate, experimentDate, experimentNo, experimentTitle, docType } = data

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
          <div style={{ height: '90px', width: '90px', borderRadius: '50%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10pt', color: '#6b7280' }}>
            Logo
          </div>
        )}
      </div>

      {/* University */}
      <div style={{ textAlign: 'center', marginBottom: '6px' }}>
        <div style={{ fontSize: '17pt', fontWeight: 'bold', textTransform: 'uppercase' }}>
          {university.name || 'University of Dhaka'}
        </div>
        <div style={{ fontSize: '12pt', marginTop: '3px' }}>
          {university.dept || 'Department of Computer Science and Engineering'}
        </div>
      </div>

      {/* Rule */}
      <div style={{ width: '100%', borderTop: '2px solid #000', marginBottom: '2px' }} />
      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '18px' }} />

      {/* Doc Type */}
      <div style={{ fontSize: '15pt', fontWeight: 'bold', textTransform: 'uppercase', textDecoration: 'underline', textAlign: 'center', marginBottom: '18px', letterSpacing: '1px' }}>
        {docType === 'lab_report' ? 'Laboratory Report' : 'Assignment'}
      </div>

      {/* Subject info - compact table */}
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
          {docType === 'lab_report' && (
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
      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '14px' }} />

      {/* Submitted By */}
      <div style={{ width: '100%', marginBottom: '12px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '12pt', textTransform: 'uppercase', textDecoration: 'underline', marginBottom: '8px' }}>
          Submitted By:
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11.5pt' }}>
          <tbody>
            {[
              ['Name', submittedBy.name],
              ['Roll No.', submittedBy.roll],
              ['Registration No.', submittedBy.regNo],
              ['Year & Semester', `${submittedBy.year} Year, ${submittedBy.semester} Semester`],
            ].map(([label, val]) => (
              <tr key={label}>
                <td style={{ padding: '3px 0', fontWeight: 'bold', width: '42%' }}>{label}</td>
                <td style={{ padding: '3px 0', width: '3%' }}>:</td>
                <td style={{ padding: '3px 0' }}>{val || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Rule */}
      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '12px' }} />

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
            ].map(([label, val]) => (
              <tr key={label}>
                <td style={{ padding: '3px 0', fontWeight: 'bold', width: '42%' }}>{label}</td>
                <td style={{ padding: '3px 0', width: '3%' }}>:</td>
                <td style={{ padding: '3px 0' }}>{val || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Rule */}
      <div style={{ width: '100%', borderTop: '2px solid #000', marginBottom: '2px', marginTop: 'auto' }} />
      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '10px' }} />

      {/* Date */}
      <div style={{ textAlign: 'center', fontSize: '11pt' }}>
        <strong>Date of Submission:</strong> {submissionDate || '—'}
      </div>
    </div>
  )
}
