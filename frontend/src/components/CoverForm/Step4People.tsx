import { CoverPageData, Designation } from '@/types/CoverPageData'

interface Props {
  data: CoverPageData
  onChange: (updated: Partial<CoverPageData>) => void
}

const designations: Designation[] = [
  'Professor',
  'Associate Professor',
  'Assistant Professor',
  'Lecturer',
]

export default function Step4People({ data, onChange }: Props) {
  return (
    <div className="space-y-5">
      {/* Submitted By */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Submitted By</h3>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            value={data.submittedBy.name}
            onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, name: e.target.value } })}
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-600 mb-1">Roll No.</label>
            <input
              type="text"
              value={data.submittedBy.roll}
              onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, roll: e.target.value } })}
              placeholder="e.g. 2101001"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-600 mb-1">Reg. No.</label>
            <input
              type="text"
              value={data.submittedBy.regNo}
              onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, regNo: e.target.value } })}
              placeholder="e.g. 21101001"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-600 mb-1">Year</label>
            <select
              value={data.submittedBy.year}
              onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, year: e.target.value } })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select year</option>
              {['1st', '2nd', '3rd', '4th'].map((y) => (
                <option key={y} value={y}>{y} Year</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-600 mb-1">Semester</label>
            <select
              value={data.submittedBy.semester}
              onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, semester: e.target.value } })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select semester</option>
              {['1st', '2nd'].map((s) => (
                <option key={s} value={s}>{s} Semester</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-600 mb-1">Group No.</label>
            <input
              type="text"
              value={data.submittedBy.groupNo}
              onChange={(e) => onChange({ submittedBy: { ...data.submittedBy, groupNo: e.target.value } })}
              placeholder="e.g. A1"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Submitted To */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Submitted To</h3>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Teacher's Full Name</label>
          <input
            type="text"
            value={data.submittedTo.name}
            onChange={(e) => onChange({ submittedTo: { ...data.submittedTo, name: e.target.value } })}
            placeholder="e.g. Dr. Mohammad Ali"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Designation</label>
          <select
            value={data.submittedTo.designation}
            onChange={(e) =>
              onChange({ submittedTo: { ...data.submittedTo, designation: e.target.value as Designation } })
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {designations.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-600 mb-1">Department</label>
            <input
              type="text"
              value={data.submittedTo.dept}
              onChange={(e) => onChange({ submittedTo: { ...data.submittedTo, dept: e.target.value } })}
              placeholder="e.g. CSE"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-600 mb-1">University</label>
            <input
              type="text"
              value={data.submittedTo.university}
              onChange={(e) => onChange({ submittedTo: { ...data.submittedTo, university: e.target.value } })}
              placeholder="University name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
