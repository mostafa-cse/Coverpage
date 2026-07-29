import { useRef, useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoverPageData, defaultCoverPageData } from '@/types/CoverPageData'
import { saveFormData, loadFormData } from '@/utils/localStorage'
import CoverForm from '@/components/CoverForm/CoverForm'
import PreviewPanel from '@/components/PreviewPanel/PreviewPanel'
import ExportBar from '@/components/ExportBar/ExportBar'
import CustomTemplateImport from '@/components/CustomTemplateImport/CustomTemplateImport'
import ThemeToggle from '@/components/ThemeToggle'
import { FileText, ArrowLeft, Eye, EyeOff, ChevronLeft, ChevronRight, Settings } from 'lucide-react'

export default function Editor() {
  const navigate = useNavigate()
  const printRef = useRef<HTMLDivElement>(null)
  const previewContainerRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState<CoverPageData>(loadFormData)
  const [selectedTemplate, setSelectedTemplate] = useState('classic')
  const [customHtml, setCustomHtml] = useState<string | undefined>(undefined)
  const [showPreview, setShowPreview] = useState(false)
  const [previewScale, setPreviewScale] = useState(0.5)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [sidebarWidth, setSidebarWidth] = useState(340)
  const [isResizing, setIsResizing] = useState(false)

  useEffect(() => { saveFormData(formData) }, [formData])

  useEffect(() => {
    function calcScale() {
      if (previewContainerRef.current) {
        const w = previewContainerRef.current.offsetWidth - 48
        setPreviewScale(Math.min(w / 794, 0.85))
      }
    }
    calcScale()
    // small delay to let sidebar animation finish before recalculating
    const timeout = setTimeout(calcScale, 350)
    window.addEventListener('resize', calcScale)
    return () => {
      window.removeEventListener('resize', calcScale)
      clearTimeout(timeout)
    }
  }, [showPreview, isSidebarOpen, sidebarWidth])

  useEffect(() => {
    if (!isResizing) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Limit sidebar width between 280px and 600px
      const newWidth = Math.max(280, Math.min(600, e.clientX));
      setSidebarWidth(newWidth);
    };
    
    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = 'default';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

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
    <div style={{ height: '100vh', overflow: 'hidden', background: 'var(--bg-main)', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, system-ui, sans-serif', transition: 'background-color 0.3s' }}>

      {/* ── Header ── */}
      <header style={{
        background: 'var(--card-bg)',
        borderBottom: '1px solid var(--card-border)',
        backdropFilter: 'blur(20px)',
        padding: '0 20px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        zIndex: 30,
        boxShadow: '0 1px 0 var(--card-border)',
      }}>
        {/* Left: logo + back */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={() => navigate('/')}
            style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: 500, padding: '5px 8px', borderRadius: '6px', transition: 'color 0.2s, background 0.2s' }}
            onMouseOver={e => { const el = e.currentTarget as HTMLButtonElement; el.style.color = 'var(--text-main)'; el.style.background = 'var(--hover-bg)' }}
            onMouseOut={e => { const el = e.currentTarget as HTMLButtonElement; el.style.color = 'var(--text-secondary)'; el.style.background = 'none' }}>
            <ArrowLeft size={13} /> Home
          </button>
          <div style={{ width: '1px', height: '18px', background: 'var(--card-border)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 12px var(--accent-glow)' }}>
              <FileText size={13} color="white" />
            </div>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', letterSpacing: '-0.2px' }}>
              CoverPage<span style={{ color: 'var(--accent)' }}>Gen</span>
            </span>
          </div>
        </div>

        {/* Right: actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Mobile preview toggle */}
          <button onClick={() => setShowPreview(!showPreview)}
            style={{ display: 'none', alignItems: 'center', gap: '5px', color: 'var(--text-secondary)', background: 'var(--hover-bg)', border: '1px solid var(--card-border)', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: 500 }}
            className="mobile-preview-btn">
            {showPreview ? <><EyeOff size={13} /> Form</> : <><Eye size={13} /> Preview</>}
          </button>

          <ThemeToggle />

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
          width: isSidebarOpen ? `${sidebarWidth}px` : '0px',
          opacity: isSidebarOpen ? 1 : 0,
          flexShrink: 0,
          background: 'var(--card-bg)',
          backdropFilter: 'blur(20px)',
          borderRight: '1px solid var(--card-border)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition: isResizing ? 'none' : 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isSidebarOpen ? '10px 0 30px rgba(0,0,0,0.05)' : 'none',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Sidebar header */}
          <div style={{ padding: '16px', borderBottom: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Settings size={14} color="var(--accent)" />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-main)' }}>Editor Controls</span>
          </div>

          {/* Scrollable form */}
          <div className="custom-scrollbar" style={{ flex: 1, overflowY: 'auto' }}>
            <div style={{ minWidth: '340px' }}>
              <CoverForm
                data={formData}
                onChange={handleChange}
                selectedTemplate={selectedTemplate}
                onSelectTemplate={(id) => { setSelectedTemplate(id); setCustomHtml(undefined) }}
              />
            </div>
          </div>
          {/* Resizer Handle */}
          <div
            onMouseDown={(e) => {
              e.preventDefault();
              setIsResizing(true);
              document.body.style.cursor = 'col-resize';
            }}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '6px',
              height: '100%',
              cursor: 'col-resize',
              zIndex: 30,
              backgroundColor: isResizing ? 'var(--accent)' : 'transparent',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--accent-glow)' }}
            onMouseOut={(e) => { if (!isResizing) (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent' }}
          />
        </aside>

        {/* Sidebar Toggle Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            position: 'absolute',
            left: isSidebarOpen ? `${sidebarWidth}px` : '0px',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 20,
            width: '28px',
            height: '48px',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: isResizing ? 'none' : 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            color: 'var(--text-secondary)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(10px)'
          }}
          className="sidebar-toggle-btn"
          onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translate(-50%, -50%) scale(1.05)' }}
          onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translate(-50%, -50%) scale(1)' }}
        >
          {isSidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

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
            background: 'linear-gradient(160deg, var(--bg-main) 0%, var(--hover-bg) 100%)',
            position: 'relative',
          }}
        >
          {/* Subtle grid overlay */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--card-border) 1px, transparent 1px), linear-gradient(90deg, var(--card-border) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

          {/* Preview label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexShrink: 0, zIndex: 1 }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
            <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 500, letterSpacing: '0.5px' }}>
              Live Preview · A4 (210mm × 297mm)
            </span>
          </div>

          {/* A4 paper with premium shadow */}
          <div style={{ position: 'relative', flexShrink: 0, zIndex: 1 }}>
            {/* Glow beneath paper */}
            <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', width: '60%', height: '40px', background: 'var(--accent-glow)', filter: 'blur(20px)', borderRadius: '50%', pointerEvents: 'none' }} />

            <div
              className="preview-scaler"
              style={{
                transform: `scale(${previewScale})`,
                transformOrigin: 'top center',
                marginBottom: `${(1130 * previewScale) - 1130 + 32}px`,
              }}
            >
              <div style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.15), 0 0 0 1px var(--card-border)', borderRadius: '4px' }}>
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
          aside { display: ${showPreview ? 'none' : 'flex'} !important; width: 100% !important; opacity: 1 !important; border-right: none !important; }
          main { display: ${showPreview ? 'flex' : 'none'} !important; }
          .sidebar-toggle-btn { display: none !important; }
        }
      `}</style>
    </div>
  )
}
