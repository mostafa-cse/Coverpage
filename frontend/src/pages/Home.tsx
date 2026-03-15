import { useNavigate } from 'react-router-dom'
import { FileText, Layers, Download, Zap } from 'lucide-react'

const features = [
  { icon: Layers, title: '4 Built-in Templates', desc: 'Simple, Formal, BUET-style, and Modern designs ready to use.' },
  { icon: FileText, title: 'Assignment & Lab Report', desc: 'Switches extra fields automatically for lab reports.' },
  { icon: Zap, title: 'Live Preview', desc: 'See your cover page update in real-time as you type.' },
  { icon: Download, title: 'PDF Export', desc: 'Download as PDF or print directly from the browser.' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-white">
      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          <FileText size={14} /> Academic Cover Page Generator
        </div>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-5">
          Create Professional<br />
          <span className="text-brand-600">Cover Pages</span> in Seconds
        </h1>
        <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
          Pick a template, fill in your academic details, preview live, and export as PDF — no more manual formatting.
        </p>
        <button
          onClick={() => navigate('/editor')}
          className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-brand-500/30 transition-all active:scale-95"
        >
          Start Generating →
        </button>
      </header>

      {/* Features grid */}
      <section className="max-w-4xl mx-auto px-6 pb-20 grid grid-cols-2 md:grid-cols-4 gap-5">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center mb-3">
              <Icon size={20} className="text-brand-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm">{title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
