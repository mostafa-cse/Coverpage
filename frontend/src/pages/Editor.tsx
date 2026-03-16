import { useRef, useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoverPageData, defaultCoverPageData } from '@/types/CoverPageData'
import { saveFormData, loadFormData } from '@/utils/localStorage'
import TemplateSelector from '@/components/TemplateSelector/TemplateSelector'
import CoverForm from '@/components/CoverForm/CoverForm'
import PreviewPanel from '@/components/PreviewPanel/PreviewPanel'
import ExportBar from '@/components/ExportBar/ExportBar'
import CustomTemplateImport from '@/components/CustomTemplateImport/CustomTemplateImport'
import { FileText, ArrowLeft } from 'lucide-react'

export default function Editor() {
  const navigate = useNavigate()
  const printRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState<CoverPageData>(loadFormData)
  const [selectedTemplate, setSelectedTemplate] = useState('classic')
  const [customHtml, setCustomHtml] = useState<string | undefined>(undefined)

  // Auto-save on every change
  useEffect(() => {
    saveFormData(formData)
  }, [formData])

  const handleChange = useCallback((updated: Partial<CoverPageData>) => {
    setFormData((prev) => ({ ...prev, ...updated }))
  }, [])

  function handleClear() {
    setFormData(defaultCoverPageData)
    setCustomHtml(undefined)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition"
          >
            <ArrowLeft size={15} /> Home
          </button>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-2">
            <FileText className="text-blue-600" size={18} />
            <span className="font-semibold text-gray-800 text-sm">CoverPage Generator</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CustomTemplateImport
            data={formData}
            onLoad={setCustomHtml}
            onClear={() => setCustomHtml(undefined)}
            hasCustom={!!customHtml}
          />
          <ExportBar printRef={printRef} onClear={handleClear} />
        </div>
      </header>

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left panel — form + template selector */}
        <aside className="w-80 xl:w-96 bg-white border-r border-gray-200 flex flex-col overflow-y-auto">
          <div className="p-5 border-b border-gray-100">
            <TemplateSelector
              selectedId={selectedTemplate}
              onSelect={(id) => {
                setSelectedTemplate(id)
                setCustomHtml(undefined) // reset custom when built-in selected
              }}
            />
          </div>
          <div className="flex-1 p-5">
            <CoverForm data={formData} onChange={handleChange} />
          </div>
        </aside>

        {/* Right panel — preview */}
        <main className="flex-1 overflow-auto bg-gray-100 flex items-start justify-center p-8">
          <div className="flex flex-col items-center gap-4">
            {/* Scale hint */}
            <p className="text-xs text-gray-400">A4 Preview (210mm × 297mm)</p>
            <div style={{ transform: 'scale(0.7)', transformOrigin: 'top center' }}>
              <PreviewPanel
                ref={printRef}
                data={formData}
                templateId={selectedTemplate}
                customHtml={customHtml}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
