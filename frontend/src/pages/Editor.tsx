import { useRef, useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoverPageData, defaultCoverPageData } from '@/types/CoverPageData'
import { saveFormData, loadFormData } from '@/utils/localStorage'
import CoverForm from '@/components/CoverForm/CoverForm'
import PreviewPanel from '@/components/PreviewPanel/PreviewPanel'
import ExportBar from '@/components/ExportBar/ExportBar'
import CustomTemplateImport from '@/components/CustomTemplateImport/CustomTemplateImport'
import Footer from '@/components/Footer/Footer'
import { FileText, ArrowLeft, Eye, EyeOff } from 'lucide-react'

export default function Editor() {
  const navigate = useNavigate()
  const printRef = useRef<HTMLDivElement>(null)
  const previewContainerRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState<CoverPageData>(loadFormData)
  const [selectedTemplate, setSelectedTemplate] = useState('classic')
  const [customHtml, setCustomHtml] = useState<string | undefined>(undefined)
  const [showPreview, setShowPreview] = useState(false)
  const [previewScale, setPreviewScale] = useState(0.5)

  useEffect(() => { saveFormData(formData) }, [formData])

  useEffect(() => {
    function calcScale() {
      if (previewContainerRef.current) {
        const w = previewContainerRef.current.offsetWidth - 48
        setPreviewScale(Math.min(w / 794, 0.85))
      }
    }
    calcScale()
    window.addEventListener('resize', calcScale)
    return () => window.removeEventListener('resize', calcScale)
  }, [showPreview])

  const handleChange = useCallback((updated: Partial<CoverPageData>) => {
    setFormData((prev) => ({ ...prev, ...updated }))
  }, [])

  function handleClear() {
    if (confirm('Clear all form data?')) {
      setFormData(defaultCoverPageData)
      setCustomHtml(undefined)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition shrink-0"
          >
            <ArrowLeft size={15} />
            <span className="hidden sm:inline">Home</span>
          </button>
          <span className="text-gray-200 hidden sm:inline">|</span>
          <div className="flex items-center gap-1.5 min-w-0">
            <FileText className="text-blue-600 shrink-0" size={17} />
            <span className="font-semibold text-gray-800 text-sm truncate">CoverPage Generator</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex md:hidden items-center gap-1 text-xs border border-gray-300 px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-50 transition"
          >
            {showPreview ? <EyeOff size={14} /> : <Eye size={14} />}
            {showPreview ? 'Form' : 'Preview'}
          </button>
          <div className="hidden sm:flex items-center gap-2">
            <CustomTemplateImport
              data={formData}
              onLoad={setCustomHtml}
              onClear={() => setCustomHtml(undefined)}
              hasCustom={!!customHtml}
            />
          </div>
          <ExportBar printRef={printRef} onClear={handleClear} />
        </div>
      </header>

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left panel — scrollable form, no steps */}
        <aside className={`
          ${showPreview ? 'hidden' : 'flex'} md:flex
          w-full md:w-80 xl:w-96 bg-white border-r border-gray-200
          flex-col overflow-hidden shrink-0
        `}>
          {/* Mobile custom import */}
          <div className="flex sm:hidden px-4 pt-3 pb-1">
            <CustomTemplateImport
              data={formData}
              onLoad={setCustomHtml}
              onClear={() => setCustomHtml(undefined)}
              hasCustom={!!customHtml}
            />
          </div>

          {/* Full-height scrolling form with template selector embedded */}
          <div className="flex-1 overflow-y-auto">
            <CoverForm
              data={formData}
              onChange={handleChange}
              selectedTemplate={selectedTemplate}
              onSelectTemplate={(id) => { setSelectedTemplate(id); setCustomHtml(undefined) }}
            />
          </div>
        </aside>

        {/* Right panel — preview */}
        <main
          ref={previewContainerRef}
          className={`
            ${showPreview ? 'flex' : 'hidden'} md:flex
            flex-1 overflow-auto bg-gray-100 flex-col items-center p-4 md:p-8
          `}
        >
          <p className="text-xs text-gray-400 mb-3 shrink-0">A4 Preview (210mm \u00d7 297mm)</p>
          <div
            className="preview-scaler shrink-0"
            style={{
              transform: `scale(${previewScale})`,
              transformOrigin: 'top center',
              marginBottom: `${(1130 * previewScale) - 1130 + 32}px`,
            }}
          >
            <PreviewPanel
              ref={printRef}
              data={formData}
              templateId={selectedTemplate}
              customHtml={customHtml}
            />
          </div>
        </main>
      </div>

      <div className="bg-gray-800 py-1.5">
        <Footer />
      </div>
    </div>
  )
}
