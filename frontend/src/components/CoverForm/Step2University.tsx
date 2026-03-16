import { CoverPageData } from '@/types/CoverPageData'
import { useRef } from 'react'

interface Props {
  data: CoverPageData
  onChange: (updated: Partial<CoverPageData>) => void
}

export default function Step2University({ data, onChange }: Props) {
  const fileRef = useRef<HTMLInputElement>(null)

  function handleLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      onChange({
        university: { ...data.university, logoUrl: ev.target?.result as string },
      })
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">University Info</h3>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">University Name</label>
        <input
          type="text"
          value={data.university.name}
          onChange={(e) =>
            onChange({ university: { ...data.university, name: e.target.value } })
          }
          placeholder="e.g. University of Rajshahi"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Department</label>
        <input
          type="text"
          value={data.university.dept}
          onChange={(e) =>
            onChange({ university: { ...data.university, dept: e.target.value } })
          }
          placeholder="e.g. Computer Science & Engineering"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">University Logo (optional)</label>
        <div className="flex items-center gap-3">
          {data.university.logoUrl && (
            <img src={data.university.logoUrl} alt="Logo" className="w-12 h-12 object-contain rounded" />
          )}
          <button
            onClick={() => fileRef.current?.click()}
            className="text-xs border border-dashed border-gray-400 px-4 py-2 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            {data.university.logoUrl ? 'Change Logo' : 'Upload Logo'}
          </button>
          {data.university.logoUrl && (
            <button
              onClick={() => onChange({ university: { ...data.university, logoUrl: '' } })}
              className="text-xs text-red-500 hover:underline"
            >
              Remove
            </button>
          )}
        </div>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
      </div>
    </div>
  )
}
