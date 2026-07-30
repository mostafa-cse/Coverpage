import { useRef } from 'react'
import { renderCustomTemplate } from '@/utils/customTemplate'
import { CoverPageData } from '@/types/CoverPageData'
import { Upload, X } from 'lucide-react'

interface Props {
  data: CoverPageData
  onLoad: (html: string) => void
  onClear: () => void
  hasCustom: boolean
}

export default function CustomTemplateImport({ data, onLoad, onClear, hasCustom }: Props) {
  const fileRef = useRef<HTMLInputElement>(null)

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const raw = ev.target?.result as string
      const rendered = renderCustomTemplate(raw, data)
      onLoad(rendered)
    }
    reader.readAsText(file)
    // reset so same file can be re-uploaded
    e.target.value = ''
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <input ref={fileRef} type="file" accept=".html" style={{ display: 'none' }} onChange={handleFile} />
      {!hasCustom ? (
        <button
          onClick={() => fileRef.current?.click()}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            border: '1px dashed var(--card-border)',
            background: 'var(--input-bg)',
            color: 'var(--text-secondary)',
            fontSize: '12px', fontWeight: 500,
            padding: '8px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseOver={e => { 
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)';
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)';
          }}
          onMouseOut={e => { 
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--card-border)';
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)';
          }}
        >
          <Upload size={14} /> Import Template
        </button>
      ) : (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          border: '1px solid #22c55e',
          background: 'rgba(34, 197, 94, 0.1)',
          color: '#22c55e',
          fontSize: '12px', fontWeight: 500,
          padding: '8px 14px',
          borderRadius: '8px',
        }}>
          <span>Custom template active</span>
          <button 
            onClick={onClear}
            style={{
              background: 'none',
              border: 'none',
              color: '#22c55e',
              cursor: 'pointer',
              display: 'flex',
              padding: '2px',
              transition: 'color 0.2s',
            }}
            onMouseOver={e => (e.currentTarget as HTMLButtonElement).style.color = '#ef4444'}
            onMouseOut={e => (e.currentTarget as HTMLButtonElement).style.color = '#22c55e'}
          >
            <X size={14} />
          </button>
        </div>
      )}
    </div>
  )
}
