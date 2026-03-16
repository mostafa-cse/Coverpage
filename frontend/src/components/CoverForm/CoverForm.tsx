import { useRef } from 'react'
import { CoverPageData, DocType, CourseType, Designation } from '@/types/CoverPageData'
import clsx from 'clsx'
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
    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 mt-5">
      {children}
    </p>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
      {children}
    </div>
  )
}

const inp = 'w-full border border-gray-200 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white'

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
    <div className="overflow-y-auto h-full px-4 py-4">

      {/* ── Style / Template ── 2-column grid so all 10 always visible */}
      <SectionLabel>Style</SectionLabel>
      <div className="grid grid-cols-2 gap-1.5 mb-1">
        {TEMPLATES.map((t) => (
          <button
            key={t.id}
            onClick={() => onSelectTemplate(t.id)}
            className={clsx(
              'flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium border transition-all text-left truncate',
              selectedTemplate === t.id
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-500 hover:text-gray-700'
            )}
          >
            <span className="shrink-0 text-sm">{t.thumbnail}</span>
            <span className="truncate">{t.name}</span>
          </button>
        ))}
      </div>

      {/* ── Document Type ── */}
      <SectionLabel>Document Type</SectionLabel>
      <div className="flex gap-2 mb-1">
        {(['assignment', 'lab_report'] as DocType[]).map((v) => (
          <button
            key={v}
            onClick={() => onChange({ docType: v })}
            className={clsx(
              'flex-1 py-1.5 rounded-md text-xs font-medium border transition-all',
              data.docType === v
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-500'
            )}
          >
            {v === 'assignment' ? '📝 Assignment' : '🔬 Lab Report'}
          </button>
        ))}
      </div>

      {/* ── University ── */}
      <SectionLabel>University</SectionLabel>
      <Field label="University Name">
        <input
          className={inp}
          value={data.university.name}
          placeholder="e.g. Jashore University of Science and Technology"
          onChange={(e) => onChange({ university: { ...data.university, name: e.target.value } })}
        />
      </Field>
      <Field label="Department">
        <input
          className={inp}
          value={data.university.dept}
          placeholder="e.g. Computer Science and Engineering"
          onChange={(e) => onChange({ university: { ...data.university, dept: e.target.value } })}
        />
      </Field>
      <Field label="Address (optional)">
        <input
          className={inp}
          value={(data.university as any).address ?? ''}
          placeholder="e.g. Jashore – 7408, Bangladesh"
          onChange={(e) => onChange({ university: { ...data.university, address: e.target.value } as any })}
        />
      </Field>
      <Field label="Logo (optional)">
        <div className="flex items-center gap-2">
          {data.university.logoUrl && (
            <img
              src={data.university.logoUrl}
              alt="Logo"
              className="w-9 h-9 object-contain rounded border border-gray-200"
            />
          )}
          <button
            onClick={() => fileRef.current?.click()}
            className="text-xs border border-dashed border-gray-300 px-3 py-1 rounded-md hover:border-gray-500 transition-colors text-gray-500"
          >
            {data.university.logoUrl ? 'Change' : 'Upload Logo'}
          </button>
          {data.university.logoUrl && (
            <button
              onClick={() => onChange({ university: { ...data.university, logoUrl: '' } })}
              className="text-xs text-red-400 hover:text-red-600"
            >
              Remove
            </button>
          )}
        </div>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
      </Field>

      {/* ── Subject ── */}
      <SectionLabel>Subject</SectionLabel>
      <Field label="Course / Subject Name">
        <input
          className={inp}
          value={data.subject.name}
          placeholder="e.g. Data Structures and Algorithms"
          onChange={(e) => onChange({ subject: { ...data.subject, name: e.target.value } })}
        />
      </Field>
      <div className="flex gap-2 mb-3">
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-500 mb-1">Course Code</label>
          <input
            className={inp}
            value={data.subject.courseCode}
            placeholder="CSE 301"
            onChange={(e) => onChange({ subject: { ...data.subject, courseCode: e.target.value } })}
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-500 mb-1">Session</label>
          <input
            className={inp}
            value={data.subject.session}
            placeholder="2021-22"
            onChange={(e) => onChange({ subject: { ...data.subject, session: e.target.value } })}
          />
        </div>
      </div>
      <Field label="Course Type">
        <div className="flex gap-1.5">
          {courseTypes.map((ct) => (
            <button
              key={ct}
              onClick={() => onChange({ subject: { ...data.subject, courseType: ct } })}
              className={clsx(
                'px-3 py-1 rounded-full text-xs border transition-all',
                data.subject.courseType === ct
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-500'
              )}
            >
              {ct}
            </button>
          ))}
        </div>
      </Field>

      {/* Lab-only fields */}
      {isLab && (
        <>
          <div className="flex gap-2 mb-3">
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-1">Experiment No.</label>
              <input
                className={inp}
                value={data.experimentNo ?? ''}
                placeholder="03"
                onChange={(e) => onChange({ experimentNo: e.target.value })}
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-1">Date of Experiment</label>
              <input
                type="date"
                className={inp}
                value={data.experimentDate ?? ''}
                onChange={(e) => onChange({ experimentDate: e.target.value })}
              />
            </div>
          </div>
          <Field label="Experiment Title">
            <input
              className={inp}
              value={data.experimentTitle ?? ''}
              placeholder="e.g. Implementation of Bubble Sort"
              onChange={(e) => onChange({ experimentTitle: e.target.value })}
            />
          </Field>
        </>
      )}

      {/* ── Submitted By ── */}
      <SectionLabel>Submitted By</SectionLabel>
      <Field label="Full Name">
        <input
          className={inp}
          value={data.submittedBy.name}
          placeholder="Your full name"
          onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, name: e.target.value } })}
        />
      </Field>
      <div className="flex gap-2 mb-3">
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-500 mb-1">Roll No.</label>
          <input
            className={inp}
            value={data.submittedBy.roll}
            placeholder="2101001"
            onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, roll: e.target.value } })}
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-500 mb-1">Reg. No.</label>
          <input
            className={inp}
            value={data.submittedBy.regNo}
            placeholder="21101001"
            onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, regNo: e.target.value } })}
          />
        </div>
      </div>
      <div className="flex gap-2 mb-3">
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-500 mb-1">Year</label>
          <select
            className={inp}
            value={data.submittedBy.year}
            onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, year: e.target.value } })}
          >
            <option value="">Year</option>
            {['1st', '2nd', '3rd', '4th'].map((y) => (
              <option key={y} value={y}>{y} Year</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-500 mb-1">Semester</label>
          <select
            className={inp}
            value={data.submittedBy.semester}
            onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, semester: e.target.value } })}
          >
            <option value="">Sem.</option>
            {['1st', '2nd'].map((s) => (
              <option key={s} value={s}>{s} Sem</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-500 mb-1">Group</label>
          <input
            className={inp}
            value={data.submittedBy.groupNo}
            placeholder="A1"
            onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, groupNo: e.target.value } })}
          />
        </div>
      </div>

      {/* ── Submitted To ── */}
      <SectionLabel>Submitted To</SectionLabel>
      <Field label="Teacher's Full Name">
        <input
          className={inp}
          value={data.submittedTo.name}
          placeholder="e.g. Dr. Mohammad Ali"
          onChange={(e) => onChange({ submittedTo: { ...data.submittedTo, name: e.target.value } })}
        />
      </Field>
      <Field label="Designation">
        <select
          className={inp}
          value={data.submittedTo.designation}
          onChange={(e) =>
            onChange({ submittedTo: { ...data.submittedTo, designation: e.target.value as Designation } })
          }
        >
          {designations.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </Field>
      <div className="flex gap-2 mb-3">
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-500 mb-1">Department</label>
          <input
            className={inp}
            value={data.submittedTo.dept}
            placeholder="CSE"
            onChange={(e) => onChange({ submittedTo: { ...data.submittedTo, dept: e.target.value } })}
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-500 mb-1">University</label>
          <input
            className={inp}
            value={data.submittedTo.university}
            placeholder="University"
            onChange={(e) => onChange({ submittedTo: { ...data.submittedTo, university: e.target.value } })}
          />
        </div>
      </div>

      {/* ── Dates ── */}
      <SectionLabel>Dates</SectionLabel>
      <Field label="Date of Submission">
        <input
          type="date"
          className={inp}
          value={data.submissionDate}
          onChange={(e) => onChange({ submissionDate: e.target.value })}
        />
      </Field>
      {isLab && (
        <Field label="Date of Experiment">
          <input
            type="date"
            className={inp}
            value={data.experimentDate ?? ''}
            onChange={(e) => onChange({ experimentDate: e.target.value })}
          />
        </Field>
      )}

      <div className="h-8" />
    </div>
  )
}
