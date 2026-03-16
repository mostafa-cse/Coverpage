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
    <div className="flex items-center gap-2">
      <button
        onClick={handlePDF}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
      >
        <Download size={15} /> Download PDF
      </button>
      <button
        onClick={handlePrint}
        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
      >
        <Printer size={15} /> Print
      </button>
      <button
        onClick={handleClear}
        className="flex items-center gap-2 border border-red-300 text-red-600 hover:bg-red-50 text-sm font-medium px-3 py-2 rounded-lg transition"
      >
        <Trash2 size={14} />
      </button>
    </div>
  )
}
