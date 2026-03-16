import { useNavigate } from 'react-router-dom'
import { FileText, Zap, Download, Upload } from 'lucide-react'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col">
      {/* Navbar */}
      <nav className="px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="text-blue-400" size={24} />
          <span className="text-white font-bold text-lg">CoverPage<span className="text-blue-400">Gen</span></span>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700/40 px-4 py-1.5 rounded-full text-blue-300 text-sm mb-8">
          <Zap size={14} /> Made for BD University Students
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Academic Cover Pages<br />
          <span className="text-blue-400">in Seconds</span>
        </h1>

        <p className="text-gray-300 text-lg max-w-xl mb-10 leading-relaxed">
          Pick a template, fill your details, get a pixel-perfect cover page —
          Assignment, Lab Report, or custom. Export as PDF or print directly.
        </p>

        <button
          onClick={() => navigate('/editor')}
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-xl text-lg transition shadow-lg shadow-blue-900/40"
        >
          Create Cover Page →
        </button>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {[
            { icon: <FileText size={14} />, label: '4 Built-in Templates' },
            { icon: <Download size={14} />, label: 'PDF + Print Export' },
            { icon: <Upload size={14} />, label: 'Custom HTML Templates' },
            { icon: <Zap size={14} />, label: 'Auto-saves Locally' },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 text-sm px-4 py-2 rounded-full"
            >
              {icon} {label}
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <Footer />
    </div>
  )
}
