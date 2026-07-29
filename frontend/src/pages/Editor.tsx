import { useRef, useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoverPageData, defaultCoverPageData } from '@/types/CoverPageData'
import { saveFormData, loadFormData } from '@/utils/localStorage'
import CoverForm from '@/components/CoverForm/CoverForm'
import PreviewPanel from '@/components/PreviewPanel/PreviewPanel'
import ExportBar from '@/components/ExportBar/ExportBar'
import CustomTemplateImport from '@/components/CustomTemplateImport/CustomTemplateImport'
import { FileText, ArrowLeft, Eye, EyeOff, Layers } from 'lucide-react'

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
    <div style={{ height: '100vh', overflow: 'hidden', background: '#0d1117', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* ── Header ── */}
      <header style={{
        background: 'rgba(13,17,23,0.95)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(20px)',
        padding: '0 20px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        zIndex: 30,
        boxShadow: '0 1px 0 rgba(255,255,255,0.04)',
      }}>
        {/* Left: logo + back */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={() => navigate('/')}
            style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: 500, padding: '5px 8px', borderRadius: '6px', transition: 'color 0.2s, background 0.2s' }}
            onMouseOver={e => { const el = e.currentTarget as HTMLButtonElement; el.style.color = 'white'; el.style.background = 'rgba(255,255,255,0.06)' }}
            onMouseOut={e => { const el = e.currentTarget as HTMLButtonElement; el.style.color = 'rgba(255,255,255,0.4)'; el.style.background = 'none' }}>
            <ArrowLeft size={13} /> Home
          </button>
          <div style={{ width: '1px', height: '18px', background: 'rgba(255,255,255,0.08)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 12px rgba(99,102,241,0.35)' }}>
              <FileText size={13} color="white" />
            </div>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', letterSpacing: '-0.2px' }}>
              CoverPage<span style={{ color: '#818cf8' }}>Gen</span>
            </span>
          </div>
        </div>

        {/* Right: actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Mobile preview toggle */}
          <button onClick={() => setShowPreview(!showPreview)}
            style={{ display: 'none', alignItems: 'center', gap: '5px', color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: 500 }}
            className="mobile-preview-btn">
            {showPreview ? <><EyeOff size={13} /> Form</> : <><Eye size={13} /> Preview</>}
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CustomTemplateImport
              data={formData}
              onLoad={setCustomHtml}
              onClear={() => setCustomHtml(undefined)}
              hasCustom={!!customHtml}
            />
            <ExportBar printRef={printRef} onClear={handleClear} />
          </div>
        </div>
      </header>

      {/* ── Main Layout ── */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

        {/* ── Left Sidebar – Form ── */}
        <aside style={{
          width: '320px',
          flexShrink: 0,
          background: '#0d1117',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Sidebar header */}
          <div style={{ padding: '14px 16px 10px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <Layers size={13} color="rgba(255,255,255,0.35)" />
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.3)' }}>Cover Page Editor</span>
          </div>

          {/* Scrollable form */}
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <CoverForm
              data={formData}
              onChange={handleChange}
              selectedTemplate={selectedTemplate}
              onSelectTemplate={(id) => { setSelectedTemplate(id); setCustomHtml(undefined) }}
            />
          </div>
        </aside>

        {/* ── Right Panel – Preview ── */}
        <main
          ref={previewContainerRef}
          style={{
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '32px 24px',
            background: 'linear-gradient(160deg, #0d1117 0%, #111827 100%)',
            position: 'relative',
          }}
        >
          {/* Subtle grid overlay */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

          {/* Preview label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexShrink: 0, zIndex: 1 }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontWeight: 500, letterSpacing: '0.5px' }}>
              Live Preview · A4 (210mm × 297mm)
            </span>
          </div>

          {/* A4 paper with premium shadow */}
          <div style={{ position: 'relative', flexShrink: 0, zIndex: 1 }}>
            {/* Glow beneath paper */}
            <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', width: '60%', height: '40px', background: 'rgba(99,102,241,0.15)', filter: 'blur(20px)', borderRadius: '50%', pointerEvents: 'none' }} />

            <div
              className="preview-scaler"
              style={{
                transform: `scale(${previewScale})`,
                transformOrigin: 'top center',
                marginBottom: `${(1130 * previewScale) - 1130 + 32}px`,
              }}
            >
              <div style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                <PreviewPanel
                  ref={printRef}
                  data={formData}
                  templateId={selectedTemplate}
                  customHtml={customHtml}
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-preview-btn { display: flex !important; }
          aside { display: ${showPreview ? 'none' : 'flex'} !important; width: 100% !important; }
          main { display: ${showPreview ? 'flex' : 'none'} !important; }
        }
      `}</style>
    </div>
  )
}
