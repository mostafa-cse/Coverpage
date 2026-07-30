import { RefObject } from 'react'
import { useReactToPrint } from 'react-to-print'
import { exportToPDF } from '@/utils/exportPDF'
import { Printer, Download, Trash2 } from 'lucide-react'
import { clearFormData } from '@/utils/localStorage'

interface Props {
  printRef: RefObject<HTMLDivElement>
  onClear: () => void
}

export default function ExportBar({ printRef, onClear }: Props) {
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: 'CoverPage',
  })

  async function handlePDF() {
    try {
      await exportToPDF('printable-area', 'cover-page.pdf')
    } catch {
      alert('PDF export failed. Please try the Print option.')
    }
  }

  function handleClear() {
    clearFormData()
    onClear()   // confirm dialog is handled in Editor
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <button
        onClick={handlePDF}
        style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
          color: 'white',
          border: 'none',
          fontSize: '12px', fontWeight: 600,
          padding: '8px 14px',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
        }}
        onMouseOver={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.4)';
        }}
        onMouseOut={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'none';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
        }}
      >
        <Download size={15} /> <span className="hidden sm:inline">Download PDF</span>
      </button>
      <button
        onClick={handlePrint}
        style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          background: 'var(--text-main)',
          color: 'var(--bg-main)',
          border: 'none',
          fontSize: '12px', fontWeight: 600,
          padding: '8px 14px',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'transform 0.2s, opacity 0.2s',
        }}
        onMouseOver={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
          (e.currentTarget as HTMLButtonElement).style.opacity = '0.9';
        }}
        onMouseOut={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'none';
          (e.currentTarget as HTMLButtonElement).style.opacity = '1';
        }}
      >
        <Printer size={15} /> <span className="hidden sm:inline">Print</span>
      </button>
      <button
        onClick={handleClear}
        style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          background: 'transparent',
          color: '#ef4444',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          fontSize: '12px', fontWeight: 600,
          padding: '8px 12px',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseOver={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239, 68, 68, 0.1)';
          (e.currentTarget as HTMLButtonElement).style.borderColor = '#ef4444';
        }}
        onMouseOut={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(239, 68, 68, 0.3)';
        }}
      >
        <Trash2 size={14} />
      </button>
    </div>
  )
}
