import { useRef } from 'react'
import { CoverPageData, DocType, CourseType, Designation } from '@/types/CoverPageData'
import { TEMPLATES } from '@/types/Template'

interface Props {
  data: CoverPageData
  onChange: (updated: Partial<CoverPageData>) => void
  selectedTemplate: string
  onSelectTemplate: (id: string) => void
}

const designations: Designation[] = ['Professor', 'Associate Professor', 'Assistant Professor', 'Lecturer']
const courseTypes: CourseType[] = ['Theory', 'Lab', 'Project']

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '24px', marginBottom: '12px' }}>
      <div style={{ width: '12px', height: '1px', background: 'var(--card-border)' }} />
      <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-secondary)' }}>
        {children}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'var(--card-border)' }} />
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>{label}</label>
      {children}
    </div>
  )
}

// Using .premium-input from index.css instead of inline styles
const inpStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '10px',
  fontSize: '13px',
}

export default function CoverForm({ data, onChange, selectedTemplate, onSelectTemplate }: Props) {
  const fileRef = useRef<HTMLInputElement>(null)
  const isLab = data.docType === 'lab_report'

  function handleLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) =>
      onChange({ university: { ...data.university, logoUrl: ev.target?.result as string } })
    reader.readAsDataURL(file)
  }

  return (
    <div style={{ padding: '0 16px 32px' }} className="custom-scrollbar">

      {/* ── Style / Template ── */}
      <SectionLabel>Layout Style</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
        {TEMPLATES.map((t) => {
          const isSelected = selectedTemplate === t.id
          return (
            <button
              key={t.id}
              onClick={() => onSelectTemplate(t.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px', padding: '10px',
                borderRadius: '10px', fontSize: '11px', fontWeight: 600,
                textAlign: 'left', cursor: 'pointer', transition: 'all 0.2s',
                background: isSelected ? 'var(--accent-glow)' : 'var(--input-bg)',
                border: isSelected ? '1px solid var(--accent)' : '1px solid var(--input-border)',
                color: isSelected ? 'var(--accent)' : 'var(--text-secondary)',
                boxShadow: isSelected ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
              }}
              onMouseOver={e => { if (!isSelected) { (e.currentTarget as HTMLButtonElement).style.background = 'var(--hover-bg)' } }}
              onMouseOut={e => { if (!isSelected) { (e.currentTarget as HTMLButtonElement).style.background = 'var(--input-bg)' } }}
            >
              <span style={{ fontSize: '16px', opacity: isSelected ? 1 : 0.7 }}>{t.thumbnail}</span>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.name}</span>
            </button>
          )
        })}
      </div>

      {/* ── Document Type ── */}
      <SectionLabel>Document Type</SectionLabel>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
        {(['assignment', 'lab_report'] as DocType[]).map((v) => {
          const isSelected = data.docType === v
          return (
            <button
              key={v}
              onClick={() => onChange({ docType: v })}
              style={{
                flex: 1, padding: '10px', borderRadius: '10px', fontSize: '12px', fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.2s',
                background: isSelected ? 'var(--text-main)' : 'var(--input-bg)',
                border: '1px solid var(--input-border)',
                color: isSelected ? 'var(--bg-main)' : 'var(--text-secondary)',
              }}
              onMouseOver={e => { if (!isSelected) { (e.currentTarget as HTMLButtonElement).style.background = 'var(--hover-bg)' } }}
              onMouseOut={e => { if (!isSelected) { (e.currentTarget as HTMLButtonElement).style.background = 'var(--input-bg)' } }}
            >
              {v === 'assignment' ? '📝 Assignment' : '🔬 Lab Report'}
            </button>
          )
        })}
      </div>

      {/* ── University ── */}
      <SectionLabel>University Info</SectionLabel>
      <Field label="University Name">
        <input className="premium-input" style={inpStyle} value={data.university.name} placeholder="e.g. Dhaka University"
          onChange={(e) => onChange({ university: { ...data.university, name: e.target.value } })}
          onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
        />
      </Field>
      <Field label="Department">
        <input className="premium-input" style={inpStyle} value={data.university.dept} placeholder="e.g. Computer Science"
          onChange={(e) => onChange({ university: { ...data.university, dept: e.target.value } })}
          onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
        />
      </Field>
      <Field label="Address (optional)">
        <input className="premium-input" style={inpStyle} value={data.university.address} placeholder="e.g. Dhaka – 1000"
          onChange={(e) => onChange({ university: { ...data.university, address: e.target.value } })}
          onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
        />
      </Field>
      <Field label="University Logo (optional)">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {data.university.logoUrl && (
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'white', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--input-border)' }}>
              <img src={data.university.logoUrl} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
          )}
          <button onClick={() => fileRef.current?.click()}
            style={{ fontSize: '11px', fontWeight: 600, background: 'var(--input-bg)', border: '1px dashed var(--card-border)', color: 'var(--text-secondary)', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--hover-bg)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)' }}
            onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--input-bg)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--card-border)' }}>
            {data.university.logoUrl ? 'Change Logo' : 'Upload Logo'}
          </button>
          {data.university.logoUrl && (
            <button onClick={() => onChange({ university: { ...data.university, logoUrl: '' } })}
              style={{ fontSize: '11px', fontWeight: 600, background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '6px' }}>
              Remove
            </button>
          )}
        </div>
        <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleLogoUpload} />
      </Field>

      {/* ── Subject ── */}
      <SectionLabel>Course Details</SectionLabel>
      <Field label="Course Title">
        <input className="premium-input" style={inpStyle} value={data.subject.name} placeholder="e.g. Data Structures"
          onChange={(e) => onChange({ subject: { ...data.subject, name: e.target.value } })}
          onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
        />
      </Field>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>Course Code</label>
          <input className="premium-input" style={inpStyle} value={data.subject.courseCode} placeholder="CSE 301"
            onChange={(e) => onChange({ subject: { ...data.subject, courseCode: e.target.value } })}
            onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>Session</label>
          <input className="premium-input" style={inpStyle} value={data.subject.session} placeholder="2021-22"
            onChange={(e) => onChange({ subject: { ...data.subject, session: e.target.value } })}
            onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
          />
        </div>
      </div>
      <Field label="Course Type">
        <div style={{ display: 'flex', gap: '6px' }}>
          {courseTypes.map((ct) => {
            const isSelected = data.subject.courseType === ct
            return (
              <button key={ct} onClick={() => onChange({ subject: { ...data.subject, courseType: ct } })}
                style={{
                  padding: '6px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                  background: isSelected ? 'var(--text-main)' : 'var(--input-bg)',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--text-main)' : 'var(--input-border)',
                  color: isSelected ? 'var(--bg-main)' : 'var(--text-secondary)',
                }}
                onMouseOver={e => { if (!isSelected) (e.currentTarget as HTMLButtonElement).style.background = 'var(--hover-bg)' }}
                onMouseOut={e => { if (!isSelected) (e.currentTarget as HTMLButtonElement).style.background = 'var(--input-bg)' }}
              >
                {ct}
              </button>
            )
          })}
        </div>
      </Field>

      {isLab && (
        <div style={{ padding: '16px', background: 'var(--input-bg)', borderRadius: '12px', border: '1px solid var(--input-border)', marginBottom: '16px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>Exp. No.</label>
              <input className="premium-input" style={inpStyle} value={data.experimentNo ?? ''} placeholder="03"
                onChange={(e) => onChange({ experimentNo: e.target.value })}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>Date</label>
              <input type="date" className="premium-input" style={inpStyle} value={data.experimentDate ?? ''}
                onChange={(e) => onChange({ experimentDate: e.target.value })}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
              />
            </div>
          </div>
          <div style={{ marginBottom: 0 }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>Experiment Title</label>
            <input className="premium-input" style={inpStyle} value={data.experimentTitle ?? ''} placeholder="Title"
              onChange={(e) => onChange({ experimentTitle: e.target.value })}
              onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
              onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
            />
          </div>
        </div>
      )}

      {/* ── Submitted By ── */}
      <SectionLabel>Student Info (Submitted By)</SectionLabel>
      <Field label="Full Name">
        <input className="premium-input" style={inpStyle} value={data.submittedBy.name} placeholder="Your name"
          onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, name: e.target.value } })}
          onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
        />
      </Field>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>Roll No.</label>
          <input className="premium-input" style={inpStyle} value={data.submittedBy.roll} placeholder="2101001"
            onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, roll: e.target.value } })}
            onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>Reg. No.</label>
          <input className="premium-input" style={inpStyle} value={data.submittedBy.regNo} placeholder="21101001"
            onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, regNo: e.target.value } })}
            onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
          />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>Year</label>
          <select className="premium-input" style={{ ...inpStyle, appearance: 'none', color: data.submittedBy.year ? 'var(--text-main)' : 'var(--text-secondary)' }} value={data.submittedBy.year}
            onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, year: e.target.value } })}
            onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}>
            <option value="" disabled style={{ color: 'var(--text-main)' }}>Select</option>
            {['1st', '2nd', '3rd', '4th'].map(y => <option key={y} value={y} style={{ color: 'var(--text-main)' }}>{y} Year</option>)}
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>Sem</label>
          <select className="premium-input" style={{ ...inpStyle, appearance: 'none', color: data.submittedBy.semester ? 'var(--text-main)' : 'var(--text-secondary)' }} value={data.submittedBy.semester}
            onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, semester: e.target.value } })}
            onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}>
            <option value="" disabled style={{ color: 'var(--text-main)' }}>Select</option>
            {['1st', '2nd'].map(s => <option key={s} value={s} style={{ color: 'var(--text-main)' }}>{s} Sem</option>)}
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>Group</label>
          <input className="premium-input" style={inpStyle} value={data.submittedBy.groupNo} placeholder="A1"
            onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, groupNo: e.target.value } })}
            onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
          />
        </div>
      </div>

      {/* ── Submitted To ── */}
      <SectionLabel>Teacher Info (Submitted To)</SectionLabel>
      <Field label="Teacher's Name">
        <input className="premium-input" style={inpStyle} value={data.submittedTo.name} placeholder="Dr. Ali"
          onChange={(e) => onChange({ submittedTo: { ...data.submittedTo, name: e.target.value } })}
          onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
        />
      </Field>
      <Field label="Designation">
        <select className="premium-input" style={{ ...inpStyle, appearance: 'none' }} value={data.submittedTo.designation}
          onChange={(e) => onChange({ submittedTo: { ...data.submittedTo, designation: e.target.value as Designation } })}
          onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}>
          {designations.map(d => <option key={d} value={d} style={{ color: 'var(--text-main)' }}>{d}</option>)}
        </select>
      </Field>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>Dept</label>
          <input className="premium-input" style={inpStyle} value={data.submittedTo.dept} placeholder="CSE"
            onChange={(e) => onChange({ submittedTo: { ...data.submittedTo, dept: e.target.value } })}
            onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>Uni</label>
          <input className="premium-input" style={inpStyle} value={data.submittedTo.university} placeholder="JUST"
            onChange={(e) => onChange({ submittedTo: { ...data.submittedTo, university: e.target.value } })}
            onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
          />
        </div>
      </div>

      {/* ── Dates ── */}
      <SectionLabel>Submission</SectionLabel>
      <Field label="Date of Submission">
        <input type="date" className="premium-input" style={{ ...inpStyle, color: data.submissionDate ? 'var(--text-main)' : 'var(--text-secondary)' }} value={data.submissionDate}
          onChange={(e) => onChange({ submissionDate: e.target.value })}
          onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
        />
      </Field>
    </div>
  )
}
