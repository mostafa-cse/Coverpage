import { forwardRef } from 'react'
import { CoverPageData } from '@/types/CoverPageData'
import {
  ClassicTemplate,
  BUETTemplate,
  DUTemplate,
  ModernTemplate,
  KUETTemplate,
  RUETTemplate,
  NSUTemplate,
  ElegantTemplate,
  JUSTStyle1Template,
  JUSTStyle2Template,
} from '@/components/templates'

interface Props {
  data: CoverPageData
  templateId: string
  customHtml?: string
}

function renderTemplate(templateId: string, data: CoverPageData, customHtml?: string) {
  if (customHtml) return <div dangerouslySetInnerHTML={{ __html: customHtml }} />
  switch (templateId) {
    case 'buet':    return <BUETTemplate data={data} />
    case 'du':      return <DUTemplate data={data} />
    case 'kuet':    return <KUETTemplate data={data} />
    case 'ruet':    return <RUETTemplate data={data} />
    case 'nsu':     return <NSUTemplate data={data} />
    case 'elegant': return <ElegantTemplate data={data} />
    case 'modern':  return <ModernTemplate data={data} />
    case 'just1':   return <JUSTStyle1Template data={data} />
    case 'just2':   return <JUSTStyle2Template data={data} />
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
