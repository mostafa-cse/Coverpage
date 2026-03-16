import { useRef } from 'react'
import { renderCustomTemplate } from '@/utils/customTemplate'
import { CoverPageData } from '@/types/CoverPageData'
import { Upload, X } from 'lucide-react'

interface Props {
  data: CoverPageData
  onLoad: (html: string) => void
  onClear: () => void
  hasCustom: boolean
}

export default function CustomTemplateImport({ data, onLoad, onClear, hasCustom }: Props) {
  const fileRef = useRef<HTMLInputElement>(null)

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const raw = ev.target?.result as string
      const rendered = renderCustomTemplate(raw, data)
      onLoad(rendered)
    }
    reader.readAsText(file)
    // reset so same file can be re-uploaded
    e.target.value = ''
  }

  return (
    <div className="flex items-center gap-2">
      <input ref={fileRef} type="file" accept=".html" className="hidden" onChange={handleFile} />
      {!hasCustom ? (
        <button
          onClick={() => fileRef.current?.click()}
          className="flex items-center gap-2 border border-dashed border-gray-400 text-gray-600 hover:border-blue-400 hover:text-blue-600 text-sm px-3 py-2 rounded-lg transition"
        >
          <Upload size={14} /> Import HTML Template
        </button>
      ) : (
        <div className="flex items-center gap-2 border border-green-300 bg-green-50 text-green-700 text-sm px-3 py-2 rounded-lg">
          <span>Custom template active</span>
          <button onClick={onClear} className="hover:text-red-500 transition">
            <X size={14} />
          </button>
        </div>
      )}
    </div>
  )
}
