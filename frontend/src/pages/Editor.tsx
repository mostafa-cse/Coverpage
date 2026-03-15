import { useState, useRef } from 'react'
import { CoverPageData, defaultCoverPageData } from '../types/CoverPageData'
import TemplateSelector from '../components/TemplateSelector/TemplateSelector'
import CoverForm from '../components/CoverForm/CoverForm'
import PreviewPanel from '../components/PreviewPanel/PreviewPanel'
import { exportToPDF } from '../utils/exportPDF'

export type TemplateId = 'simple' | 'formal' | 'buet' | 'modern'

export default function Editor() {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>('simple')
  const [data, setData] = useState<CoverPageData>(defaultCoverPageData)
  const [step, setStep] = useState<'select' | 'form'>('select')
  const previewRef = useRef<HTMLDivElement>(null)

  const handleExport = () => {
    if (previewRef.current) exportToPDF(previewRef.current)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
        <a href="/" className="font-bold text-brand-700 text-lg">CoverGen</a>
        <div className="flex items-center gap-3">
          {step === 'form' && (
            <>
              <button
                onClick={() => window.print()}
                className="text-sm text-gray-600 hover:text-gray-900 border border-gray-300 px-4 py-1.5 rounded-lg"
              >
                Print
              </button>
              <button
                onClick={handleExport}
                className="text-sm bg-brand-600 hover:bg-brand-700 text-white px-4 py-1.5 rounded-lg font-medium"
              >
                Export PDF
              </button>
            </>
          )}
        </div>
      </header>

      {step === 'select' ? (
        <TemplateSelector
          selected={selectedTemplate}
          onSelect={(id) => { setSelectedTemplate(id); setStep('form') }}
        />
      ) : (
        <div className="flex h-[calc(100vh-57px)]">
          {/* Left: form */}
          <div className="w-[420px] shrink-0 overflow-y-auto border-r border-gray-200 bg-white">
            <CoverForm data={data} onChange={setData} />
          </div>
          {/* Right: live preview */}
          <div className="flex-1 overflow-auto bg-gray-100 p-8 flex justify-center">
            <PreviewPanel ref={previewRef} data={data} templateId={selectedTemplate} />
          </div>
        </div>
      )}
    </div>
  )
}
