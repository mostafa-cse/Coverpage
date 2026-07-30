import { CoverPageData } from '@/types/CoverPageData'

interface Props { data: CoverPageData }

/**
 * ScholarlyClassicTemplate
 * A premium "scholarly" design: ornamental double border, decorative horizontal rules,
 * centred logo block, small-caps university name, italic doc-type label, and a
 * clean two-column footer.  Pure Times New Roman, black ink throughout.
 */
export default function ScholarlyClassicTemplate({ data }: Props) {
  const isLab = data.docType === 'lab_report'
  const { university, subject, submittedBy, submittedTo, submissionDate, experimentDate, experimentNo, experimentTitle } = data

  return (
    <div style={{
      width: '210mm', minHeight: '297mm',
      padding: '0',
      fontFamily: '"Times New Roman", Times, serif',
      fontSize: '12pt', color: '#000', backgroundColor: '#fff',
      boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column',
      border: '2.5px solid #000',
      outline: '1px solid #000',
      outlineOffset: '-5mm',
    }}>

      {/* ── Ornamental header band ── */}
      <div style={{ borderBottom: '3px double #000', padding: '20px 28px 16px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Logo */}
        <div style={{ marginBottom: '14px' }}>
          {university.logoUrl ? (
            <img src={university.logoUrl} alt="Logo"
              style={{ height: '96px', width: '96px', objectFit: 'contain' }} />
          ) : (
            <div style={{
              height: '96px', width: '96px', borderRadius: '50%',
              border: '1.5px dashed #aaa',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '9pt', color: '#aaa',
            }}>Logo</div>
          )}
        </div>

        {/* University name – SMALL CAPS effect */}
        <div style={{ fontSize: '17pt', fontWeight: 'bold', fontVariant: 'small-caps', letterSpacing: '1.5px', textTransform: 'uppercase', lineHeight: '1.3' }}>
          {university.name || 'University Name'}
        </div>

        {/* Dept & address */}
        <div style={{ fontSize: '11pt', marginTop: '5px' }}>
          {university.dept || 'Department Name'}
        </div>
        {university.address && (
          <div style={{ fontSize: '10pt', marginTop: '3px' }}>{university.address}</div>
        )}
      </div>

      {/* ── Body ── */}
      <div style={{ flex: 1, padding: '20px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Doc type – italic boxed label */}
        <div style={{ border: '1.5px solid #000', padding: '7px 32px', marginBottom: '20px', textAlign: 'center' }}>
          <span style={{ fontSize: '13pt', fontWeight: 'bold', fontStyle: 'italic', textTransform: 'uppercase', letterSpacing: '2px' }}>
            {isLab ? 'Laboratory Report' : 'Assignment'}
          </span>
        </div>

        {/* Subject info */}
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11.5pt', marginBottom: '16px', borderTop: '1px solid #000', borderBottom: '1px solid #000' }}>
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
              <tr key={label} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '5px 6px', fontWeight: 'bold', width: '40%' }}>{label}</td>
                <td style={{ padding: '5px 4px', width: '4%' }}>:</td>
                <td style={{ padding: '5px 6px' }}>{val || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ flexGrow: 1 }} />

        {/* ── Two-column submission section ── */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '18px' }}>
          <div style={{ display: 'flex', gap: '14px', maxWidth: '90%' }}>
            {[
              {
                title: 'Submitted By',
                rows: [
                  ['Name', submittedBy.name],
                  ['Roll No.', submittedBy.roll],
                  ['Reg. No.', submittedBy.regNo],
                  ['Year', submittedBy.year],
                  ['Semester', submittedBy.semester],
                  ['Group', submittedBy.groupNo],
                ],
              },
              {
                title: 'Submitted To',
                rows: [
                  ['Name', submittedTo.name],
                  ['Designation', submittedTo.designation],
                  ['Department', submittedTo.dept],
                  ['University', submittedTo.university],
                ],
              },
            ].map(({ title, rows }) => (
              <div key={title} style={{ flex: 1, border: '1.5px solid #000', overflow: 'hidden' }}>
                {/* Grey title bar */}
                <div style={{
                  background: '#e8e8e8', borderBottom: '1.5px solid #000',
                  padding: '6px 14px', fontSize: '10.5pt', fontWeight: 'bold',
                  textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center',
                  fontVariant: 'small-caps',
                }}>
                  {title}
                </div>
                <div style={{ padding: '10px 14px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10.5pt' }}>
                    <tbody>
                      {rows.filter(([, v]) => v).map(([l, v]) => (
                        <tr key={l}>
                          <td style={{ padding: '3px 0', fontWeight: 'bold', width: '44%' }}>{l}</td>
                          <td style={{ padding: '3px 4px', width: '4%' }}>:</td>
                          <td style={{ padding: '3px 0' }}>{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer date ── */}
        <div style={{ textAlign: 'center', fontSize: '11pt' }}>
          <strong>Date of Submission:</strong> {submissionDate || '—'}
        </div>
      </div>
    </div>
  )
}
