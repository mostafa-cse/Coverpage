import { CoverPageData } from '@/types/CoverPageData'

interface Props { data: CoverPageData }

export default function BUETTemplate({ data }: Props) {
  const { university, subject, submittedBy, submittedTo, submissionDate, experimentDate, experimentNo, experimentTitle, docType } = data

  return (
    <div
      style={{
        width: '210mm',
        minHeight: '297mm',
        padding: '20mm 25mm',
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: '12pt',
        color: '#000',
        backgroundColor: '#fff',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid #000',
        position: 'relative',
      }}
    >
      {/* Inner border */}
      <div style={{
        position: 'absolute', top: '6mm', left: '6mm', right: '6mm', bottom: '6mm',
        border: '1px solid #000', pointerEvents: 'none'
      }} />

      {/* Logo */}
      <div style={{ marginBottom: '14px', marginTop: '14px' }}>
        {university.logoUrl ? (
          <img src={university.logoUrl} alt="University Logo" style={{ height: '110px', width: '110px', objectFit: 'contain' }} />
        ) : (
          <div style={{ height: '110px', width: '110px', borderRadius: '50%', border: '1px dashed #999', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10pt', color: '#999' }}>
            Logo
          </div>
        )}
      </div>

      {/* University name */}
      <div style={{ textAlign: 'center', marginBottom: '4px' }}>
        <div style={{ fontSize: '16pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {university.name || 'Bangladesh University of Engineering and Technology'}
        </div>
        <div style={{ fontSize: '12pt', marginTop: '4px' }}>
          {university.dept || 'Department of Computer Science and Engineering'}
        </div>
      </div>

      {/* Double rule */}
      <div style={{ width: '100%', borderTop: '3px double #000', margin: '14px 0' }} />

      {/* Doc type heading */}
      <div style={{ fontSize: '14pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center', marginBottom: '8px' }}>
        {docType === 'lab_report' ? 'Laboratory Report' : 'Assignment'}
      </div>

      {/* Subject details box */}
      <div style={{ width: '100%', border: '1px solid #000', padding: '12px 16px', marginBottom: '16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11pt' }}>
          <tbody>
            <tr>
              <td style={{ padding: '4px 0', width: '45%', fontWeight: 'bold' }}>Course Title</td>
              <td style={{ padding: '4px 0', width: '5%' }}>:</td>
              <td style={{ padding: '4px 0' }}>{subject.name || '—'}</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Course Code</td>
              <td style={{ padding: '4px 0' }}>:</td>
              <td style={{ padding: '4px 0' }}>{subject.courseCode || '—'}</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Session</td>
              <td style={{ padding: '4px 0' }}>:</td>
              <td style={{ padding: '4px 0' }}>{subject.session || '—'}</td>
            </tr>
            {docType === 'lab_report' && (
              <>
                <tr>
                  <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Experiment No.</td>
                  <td style={{ padding: '4px 0' }}>:</td>
                  <td style={{ padding: '4px 0' }}>{experimentNo || '—'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Experiment Title</td>
                  <td style={{ padding: '4px 0' }}>:</td>
                  <td style={{ padding: '4px 0' }}>{experimentTitle || '—'}</td>
                </tr>
                <tr>
                  <td style={{ padding: '4px 0', fontWeight: 'bold' }}>Date of Experiment</td>
                  <td style={{ padding: '4px 0' }}>:</td>
                  <td style={{ padding: '4px 0' }}>{experimentDate || '—'}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>

      {/* Submitted By / To side by side */}
      <div style={{ width: '100%', display: 'flex', gap: '20px', marginBottom: '20px', flex: 1 }}>
        <div style={{ flex: 1, border: '1px solid #000', padding: '14px 18px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '12pt', borderBottom: '1px solid #000', paddingBottom: '6px', marginBottom: '10px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Submitted By
          </div>
          <table style={{ width: '100%', fontSize: '11pt', borderCollapse: 'collapse' }}>
            <tbody>
              {[
                ['Name', submittedBy.name],
                ['Student ID', submittedBy.roll],
                ['Reg. No.', submittedBy.regNo],
                ['Year', submittedBy.year],
                ['Semester', submittedBy.semester],
                ['Group No.', submittedBy.groupNo],
              ].map(([label, val]) => (
                <tr key={label}>
                  <td style={{ padding: '3px 0', fontWeight: 'bold', verticalAlign: 'top', whiteSpace: 'nowrap' }}>{label}</td>
                  <td style={{ padding: '3px 4px', verticalAlign: 'top' }}>:</td>
                  <td style={{ padding: '3px 0', verticalAlign: 'top' }}>{val || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ flex: 1, border: '1px solid #000', padding: '14px 18px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '12pt', borderBottom: '1px solid #000', paddingBottom: '6px', marginBottom: '10px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Submitted To
          </div>
          <table style={{ width: '100%', fontSize: '11pt', borderCollapse: 'collapse' }}>
            <tbody>
              {[
                ['Name', submittedTo.name],
                ['Designation', submittedTo.designation],
                ['Department', submittedTo.dept],
                ['University', submittedTo.university],
              ].map(([label, val]) => (
                <tr key={label}>
                  <td style={{ padding: '3px 0', fontWeight: 'bold', verticalAlign: 'top', whiteSpace: 'nowrap' }}>{label}</td>
                  <td style={{ padding: '3px 4px', verticalAlign: 'top' }}>:</td>
                  <td style={{ padding: '3px 0', verticalAlign: 'top' }}>{val || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Double rule */}
      <div style={{ width: '100%', borderTop: '3px double #000', margin: '10px 0' }} />

      {/* Submission date */}
      <div style={{ textAlign: 'center', fontSize: '11pt' }}>
        <strong>Date of Submission:</strong> {submissionDate || '—'}
      </div>
    </div>
  )
}
