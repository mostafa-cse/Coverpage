import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export async function exportToPDF(
  elementId: string,
  filename = 'cover-page.pdf'
): Promise<void> {
  const el = document.getElementById(elementId)
  if (!el) throw new Error(`Element #${elementId} not found`)

  const canvas = await html2canvas(el, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
  })

  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })

  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = pdf.internal.pageSize.getHeight()

  const canvasWidth = canvas.width
  const canvasHeight = canvas.height
  const ratio = canvasHeight / canvasWidth

  const imgWidth = pdfWidth
  const imgHeight = pdfWidth * ratio

  // If content overflows, scale it down to fit one page
  if (imgHeight > pdfHeight) {
    const scale = pdfHeight / imgHeight
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth * scale, pdfHeight)
  } else {
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
  }

  pdf.save(filename)
}

export function triggerBrowserPrint() {
  window.print()
}
