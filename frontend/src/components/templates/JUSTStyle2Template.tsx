import { CoverPageData } from '@/types/CoverPageData'

interface Props { data: CoverPageData }

/**
 * JUST Style 2 — Compact stacked layout:
 * University Name + Dept
 * → Course Title + Course Code block
 * → "Assignment on" / "Lab Report on"
 * → Assignment / Experiment title
 * → Submitted by (stacked) | Submitted to (stacked)
 * → Submission Date
 */
export default function JUSTStyle2Template({ data }: Props) {
  const isLab = data.docType === 'lab_report'
  const { university, subject, submittedBy, submittedTo, submissionDate, experimentNo, experimentTitle, experimentDate } = data

  return (
    <div style={{
      width: '210mm', minHeight: '297mm',
      padding: '22mm 24mm',
      fontFamily: '"Times New Roman", Times, serif',
      fontSize: '12pt', color: '#000', backgroundColor: '#fff',
      boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      border: '1px solid #000',
    }}>

      {/* University block — no logo, centered text */}
      <div style={{ textAlign: 'center', marginBottom: '18px', width: '100%' }}>
        <div style={{ fontSize: '18pt', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.3px', lineHeight: '1.3' }}>
          {university.name || 'University Name'}
        </div>
        <div style={{ fontSize: '12pt', marginTop: '6px' }}>
          {university.dept || 'Department of Computer Science and Engineering'}
        </div>
      </div>

      {/* Horizontal double rule */}
      <div style={{ width: '100%', borderTop: '3px double #000', marginBottom: '18px' }} />

      {/* Course Info block */}
      <div style={{ width: '100%', marginBottom: '18px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12pt' }}>
          <tbody>
            {[
              ['Course Title', subject.name],
              ['Course Code', subject.courseCode],
              ...(isLab ? [
                ['Experiment No.', experimentNo],
                ['Date of Experiment', experimentDate],
              ] : [
                ['Session', subject.session],
              ]),
            ].filter(([, v]) => v).map(([l, v]) => (
              <tr key={l}>
                <td style={{ padding: '4px 0', fontWeight: 'bold', width: '40%' }}>{l}</td>
                <td style={{ padding: '4px 4px', width: '4%' }}>:</td>
                <td style={{ padding: '4px 0' }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Horizontal rule */}
      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '18px' }} />

      {/* "Assignment on" label + title */}
      <div style={{ textAlign: 'center', marginBottom: '24px', width: '100%' }}>
        <div style={{ fontSize: '13pt', fontWeight: 'normal', marginBottom: '8px' }}>
          {isLab ? 'Lab Report on' : 'Assignment on'}
        </div>
        <div style={{ fontSize: '14pt', fontWeight: 'bold', lineHeight: '1.5' }}>
          {isLab ? (experimentTitle || subject.name || '—') : (subject.name || '—')}
        </div>
      </div>

      {/* Horizontal rule */}
      <div style={{ width: '100%', borderTop: '1px solid #000', marginBottom: '18px' }} />

      {/* Submitted By and Submitted To — stacked, side by side */}
      <div style={{ width: '100%', display: 'flex', gap: '20px', marginTop: 'auto' }}>

        {/* Submitted by */}
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 'bold', fontSize: '12pt', marginBottom: '10px', borderBottom: '1px solid #000', paddingBottom: '4px' }}>
            Submitted by:
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11.5pt' }}>
            <tbody>
              {[
                ['Name', submittedBy.name],
                ['Roll No', submittedBy.roll],
                ['Session', subject.session],
                ['Year', submittedBy.year && submittedBy.semester ? `${submittedBy.year}, ${submittedBy.semester}` : (submittedBy.year || submittedBy.semester)],
              ].filter(([, v]) => v).map(([l, v]) => (
                <tr key={l}>
                  <td style={{ padding: '3px 0', fontWeight: 'bold', width: '38%', verticalAlign: 'top' }}>{l}</td>
                  <td style={{ padding: '3px 4px', width: '4%', verticalAlign: 'top' }}>:</td>
                  <td style={{ padding: '3px 0', verticalAlign: 'top' }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Submitted to */}
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 'bold', fontSize: '12pt', marginBottom: '10px', borderBottom: '1px solid #000', paddingBottom: '4px' }}>
            Submitted to:
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11.5pt' }}>
            <tbody>
              {[
                ['Name', submittedTo.name],
                ['Designation', submittedTo.designation],
                ['Department', submittedTo.dept],
                ['University', submittedTo.university],
              ].filter(([, v]) => v).map(([l, v]) => (
                <tr key={l}>
                  <td style={{ padding: '3px 0', fontWeight: 'bold', width: '38%', verticalAlign: 'top' }}>{l}</td>
                  <td style={{ padding: '3px 4px', width: '4%', verticalAlign: 'top' }}>:</td>
                  <td style={{ padding: '3px 0', verticalAlign: 'top' }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Horizontal rule */}
      <div style={{ width: '100%', borderTop: '1px solid #000', margin: '16px 0 8px' }} />

      {/* Submission Date */}
      <div style={{ textAlign: 'center', fontSize: '12pt' }}>
        <strong>Submission Date :</strong> {submissionDate || '—'}
      </div>
    </div>
  )
}
