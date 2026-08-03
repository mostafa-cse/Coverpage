import { CoverPageData } from '@/types/CoverPageData'

interface Props { data: CoverPageData }

export default function ClassicTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'

  return (
    <div
      style={{
        width: '210mm', minHeight: '297mm',
        padding: '20mm 22mm',
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: '12pt', color: '#000', backgroundColor: '#fff',
        boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: '16px' }}>
        {data.university.logoUrl ? (
          <img src={data.university.logoUrl} alt="Logo" style={{ height: '110px', width: '110px', objectFit: 'contain' }} />
        ) : (
          <div style={{ height: '110px', width: '110px', borderRadius: '50%', border: '1.5px dashed #aaa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9pt', color: '#aaa' }}>
            Logo
          </div>
        )}
      </div>

      {/* University */}
      <h1 style={{ fontSize: '16pt', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px' }}>
        {data.university.name || 'University Name'}
      </h1>
      <p style={{ fontSize: '11.5pt', textAlign: 'center', margin: '0 0 3px' }}>
        Department of {data.university.dept || 'Department'}
      </p>
      {data.university.address && (
        <p style={{ fontSize: '10.5pt', textAlign: 'center', margin: '0 0 3px' }}>{data.university.address}</p>
      )}

      {/* Thick + thin rule */}
      <div style={{ width: '100%', borderTop: '2px solid #000', marginTop: '14px', marginBottom: '2px' }} />
      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '16px' }} />

      {/* Doc type badge */}
      <div style={{ border: '1.5px solid #000', padding: '7px 28px', marginBottom: '18px' }}>
        <p style={{ fontSize: '13pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', textAlign: 'center', margin: 0 }}>
          {isLab ? 'Laboratory Report' : 'Assignment'}
        </p>
      </div>

      {/* Subject info */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11.5pt', marginBottom: '14px' }}>
        <tbody>
          {[
            ['Course Title', data.subject.name],
            ['Course Code', data.subject.courseCode],
            ['Session', data.subject.session],
          ].map(([label, val]) => (
            <tr key={label}>
              <td style={{ padding: '3px 0', fontWeight: 'bold', width: '40%', verticalAlign: 'top' }}>{label}</td>
              <td style={{ padding: '3px 4px', width: '4%', verticalAlign: 'top' }}>:</td>
              <td style={{ padding: '3px 0', verticalAlign: 'top' }}>{val || '—'}</td>
            </tr>
          ))}
          {isLab && [
            ['Experiment No.', data.experimentNo],
            ['Experiment Title', data.experimentTitle],
            ['Date of Experiment', data.experimentDate],
          ].map(([label, val]) => (
            <tr key={label}>
              <td style={{ padding: '3px 0', fontWeight: 'bold', verticalAlign: 'top' }}>{label}</td>
              <td style={{ padding: '3px 4px', verticalAlign: 'top' }}>:</td>
              <td style={{ padding: '3px 0', verticalAlign: 'top' }}>{val || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Thin rule */}
      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '16px' }} />

      {/* Spacer pushes submission section to bottom */}
      <div style={{ flexGrow: 1 }} />

      {/* Submitted By / To */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '16px' }}>
        <div style={{ display: 'flex', gap: '14px', maxWidth: '90%' }}>
          <div style={{ flex: 1, border: '1.5px solid #000', padding: '10px 14px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '11pt', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '6px', marginBottom: '10px', textAlign: 'center', margin: '0 0 10px' }}>
              Submitted By
            </p>
            {[
              ['Name', data.submittedBy.name],
              ['Roll No.', data.submittedBy.roll],
              ['Reg. No.', data.submittedBy.regNo],
              ['Year', data.submittedBy.year],
              ['Semester', data.submittedBy.semester],
              ['Group', data.submittedBy.groupNo],
            ].map(([l, v]) => v ? (
              <p key={l} style={{ fontSize: '10.5pt', margin: '3px 0' }}><strong>{l}: </strong>{v}</p>
            ) : null)}
          </div>
          <div style={{ flex: 1, border: '1.5px solid #000', padding: '10px 14px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '11pt', textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: '6px', marginBottom: '10px', textAlign: 'center', margin: '0 0 10px' }}>
              Submitted To
            </p>
            {[
              ['Name', data.submittedTo.name],
              ['Designation', data.submittedTo.designation],
              ['Dept.', data.submittedTo.dept],
              ['University', data.submittedTo.university],
            ].map(([l, v]) => v ? (
              <p key={l} style={{ fontSize: '10.5pt', margin: '3px 0' }}><strong>{l}: </strong>{v}</p>
            ) : null)}
          </div>
        </div>
      </div>

      {/* Submission date centered below tables */}
      <div style={{ textAlign: 'center', fontSize: '11pt' }}>
        <strong>Date of Submission: </strong>{data.submissionDate || '—'}
      </div>
    </div>
  )
}
