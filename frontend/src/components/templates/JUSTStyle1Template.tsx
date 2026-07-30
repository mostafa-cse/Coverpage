import { CoverPageData } from '@/types/CoverPageData'

interface Props { data: CoverPageData }

export default function JUSTStyle1Template({ data }: Props) {
  const isLab = data.docType === 'lab_report'
  const { university, subject, submittedBy, submittedTo, submissionDate, experimentNo, experimentTitle } = data

  return (
    <div style={{
      width: '210mm', minHeight: '297mm',
      padding: '20mm 22mm',
      fontFamily: '"Times New Roman", Times, serif',
      fontSize: '12pt', color: '#000', backgroundColor: '#fff',
      boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}>

      {/* Logo */}
      <div style={{ marginBottom: '10px' }}>
        {university.logoUrl ? (
          <img src={university.logoUrl} alt="University Logo"
            style={{ height: '120px', width: '120px', objectFit: 'contain' }} />
        ) : (
          <div style={{
            height: '120px', width: '120px', borderRadius: '50%',
            border: '1.5px dashed #aaa',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '9pt', color: '#aaa',
          }}>Logo</div>
        )}
      </div>

      {/* University block */}
      <div style={{ textAlign: 'center', marginBottom: '4px', width: '100%' }}>
        <div style={{ fontSize: '17pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.3px', lineHeight: '1.3' }}>
          {university.name || 'Jashore University of Science and Technology'}
        </div>
        {university.address && (
          <div style={{ fontSize: '10.5pt', marginTop: '2px' }}>{university.address}</div>
        )}
        <div style={{ fontSize: '11.5pt', marginTop: '4px' }}>
          {university.dept || 'Department of Computer Science and Engineering'}
        </div>
      </div>

      {/* Thick rule */}
      <div style={{ width: '100%', borderTop: '2px solid #000', margin: '14px 0 10px' }} />

      {/* Assignment On / Lab Report On */}
      <div style={{ fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>
        {isLab ? 'Laboratory Report On' : 'Assignment On'}
      </div>

      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '8px', width: '100%' }}>
        {subject.name && (
          <div style={{ fontSize: '13pt', fontWeight: 'bold', lineHeight: '1.4' }}>
            {subject.name}
          </div>
        )}
        {isLab && experimentTitle && (
          <div style={{ fontSize: '13pt', fontWeight: 'bold', lineHeight: '1.4' }}>
            {experimentTitle}
          </div>
        )}
      </div>

      {/* Course meta – centered */}
      <div style={{ textAlign: 'center', fontSize: '11pt', marginBottom: '14px' }}>
        {[
          subject.courseCode,
          subject.session,
          isLab && experimentNo ? `Experiment No: ${experimentNo}` : '',
        ].filter(Boolean).join('  |  ')}
      </div>

      {/* Thin rule */}
      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '16px' }} />

      <div style={{ flexGrow: 1 }} />

      {/* Two-column: Submitted By | Submitted To */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div style={{ display: 'flex', gap: '0', maxWidth: '90%' }}>
          <div style={{ flex: 1, paddingRight: '16px', borderRight: '1px solid #000' }}>
            <div style={{ fontWeight: 'bold', fontSize: '12pt', marginBottom: '10px', textDecoration: 'underline' }}>
              Submitted By:
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11.5pt' }}>
              <tbody>
                {[
                  ['Name', submittedBy.name],
                  ['Student ID', submittedBy.roll],
                  ['Reg. No.', submittedBy.regNo],
                  ['Session', subject.session],
                  ['Year / Sem', submittedBy.year && submittedBy.semester ? `${submittedBy.semester} Semester, ${submittedBy.year} Year` : (submittedBy.year || submittedBy.semester)],
                  ['Group', submittedBy.groupNo],
                  ['Department', university.dept],
                ].filter(([, v]) => v).map(([l, v]) => (
                  <tr key={l}>
                    <td style={{ padding: '2px 0', fontWeight: 'bold', verticalAlign: 'top', whiteSpace: 'nowrap', width: '40%' }}>{l}</td>
                    <td style={{ padding: '2px 4px', verticalAlign: 'top', width: '4%' }}>:</td>
                    <td style={{ padding: '2px 0', verticalAlign: 'top' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ flex: 1, paddingLeft: '16px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '12pt', marginBottom: '10px', textDecoration: 'underline' }}>
              Submitted To:
            </div>
            <div style={{ fontSize: '11.5pt', lineHeight: '1.7' }}>
              <div style={{ fontWeight: 'bold' }}>{submittedTo.name || 'Instructor Name'}</div>
              {submittedTo.designation && <div>{submittedTo.designation}</div>}
              {submittedTo.dept && <div>{submittedTo.dept}</div>}
              {submittedTo.university && <div>{submittedTo.university}</div>}
            </div>
          </div>
        </div>
      </div>

      <div style={{ flexGrow: 1 }} />

      {/* Submission date centered */}
      <div style={{ textAlign: 'center', fontSize: '12pt', marginTop: '16px' }}>
        <strong>Submission Date:</strong> {submissionDate || '—'}
      </div>
    </div>
  )
}
