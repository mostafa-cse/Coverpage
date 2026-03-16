import { forwardRef } from 'react'
import { CoverPageData } from '@/types/CoverPageData'
import { ClassicTemplate, BUETTemplate, DUTemplate, ModernTemplate } from '@/components/templates'

interface Props {
  data: CoverPageData
  templateId: string
  customHtml?: string
}

function renderTemplate(templateId: string, data: CoverPageData, customHtml?: string) {
  if (customHtml) {
    return <div dangerouslySetInnerHTML={{ __html: customHtml }} />
  }
  switch (templateId) {
    case 'buet':    return <BUETTemplate data={data} />
    case 'du':      return <DUTemplate data={data} />
    case 'modern':  return <ModernTemplate data={data} />
    default:        return <ClassicTemplate data={data} />
  }
}

const PreviewPanel = forwardRef<HTMLDivElement, Props>(({ data, templateId, customHtml }, ref) => {
  return (
    <div
      ref={ref}
      id="printable-area"
      className="bg-white shadow-xl rounded-lg overflow-hidden"
      style={{ width: '210mm', minHeight: '297mm' }}
    >
      {renderTemplate(templateId, data, customHtml)}
    </div>
  )
})

PreviewPanel.displayName = 'PreviewPanel'
export default PreviewPanel
