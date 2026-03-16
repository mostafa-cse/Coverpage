import { useNavigate } from 'react-router-dom'
import { FileText, Zap, Download, Upload, Printer, Shield, Clock, ChevronRight, CheckCircle } from 'lucide-react'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  const navigate = useNavigate()

  const features = [
    { icon: <FileText size={20} />, title: '4 Professional Templates', desc: 'Classic, BUET, DU, and Modern styles — all tailored for BD universities.' },
    { icon: <Zap size={20} />, title: 'Auto-saves Locally', desc: 'Your data is saved in the browser automatically. Never lose your work.' },
    { icon: <Download size={20} />, title: 'PDF Export', desc: 'Export a high-quality PDF of your cover page in one click.' },
    { icon: <Printer size={20} />, title: 'Print Ready', desc: 'Optimized A4 layout for direct printing — no extra formatting needed.' },
    { icon: <Upload size={20} />, title: 'Custom Templates', desc: 'Import your own HTML template for full control over the design.' },
    { icon: <Shield size={20} />, title: '100% Private', desc: 'Everything runs in your browser. No data is sent to any server.' },
  ]

  const steps = [
    { num: '01', title: 'Pick a Template', desc: 'Choose from Classic, BUET, DU, or Modern styles.' },
    { num: '02', title: 'Fill Your Details', desc: 'Enter your university, subject, and student info.' },
    { num: '03', title: 'Export or Print', desc: 'Download as PDF or print directly from the browser.' },
  ]

  const templates = [
    { id: 'classic', name: 'Classic Formal', tags: ['Universal', 'All Universities'], icon: '📄', color: 'from-slate-600 to-slate-800' },
    { id: 'buet', name: 'BUET Style', tags: ['Engineering', 'BUET'], icon: '🏛️', color: 'from-emerald-600 to-green-800' },
    { id: 'du', name: 'DU Style', tags: ['Arts', 'Science', 'DU'], icon: '🎓', color: 'from-blue-600 to-blue-800' },
    { id: 'modern', name: 'Modern Minimal', tags: ['Contemporary', 'Clean'], icon: '✨', color: 'from-violet-600 to-indigo-800' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white flex flex-col">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0f1e]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <FileText size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">CoverPage<span className="text-blue-400">Gen</span></span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/mostafa-cse/Coverpage" target="_blank" rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white transition-colors hidden sm:block">
              GitHub
            </a>
            <button
              onClick={() => navigate('/editor')}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all shadow-lg shadow-blue-900/30 hover:scale-105"
            >
              Open Editor
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/40 px-4 py-1.5 rounded-full text-blue-300 text-xs font-medium mb-8 uppercase tracking-widest">
            <Zap size={12} /> Free · No Login · No Data Collected
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Professional Cover Pages<br />
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              for BD University Students
            </span>
          </h1>

          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Generate pixel-perfect assignment and lab report cover pages in seconds.
            Choose from university-specific templates, fill your details, and export as PDF.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/editor')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-blue-900/40 hover:scale-105"
            >
              Create Cover Page <ChevronRight size={18} />
            </button>
            <button
              onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 font-medium px-8 py-4 rounded-xl text-base transition-all"
            >
              View Templates
            </button>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-sm text-white/40">
            {['Assignment Cover', 'Lab Report Cover', 'Custom Template', 'PDF Export'].map(t => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle size={13} className="text-blue-500" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Simple Process</p>
            <h2 className="text-3xl font-bold">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white/3 border border-white/5 hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300 group">
                <span className="text-5xl font-black text-white/5 group-hover:text-blue-600/20 transition-colors duration-300 mb-4 select-none">{step.num}</span>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Built-in Designs</p>
            <h2 className="text-3xl font-bold">Choose Your Template</h2>
            <p className="text-white/50 text-sm mt-3">All templates follow standard BD university cover page formats.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => navigate('/editor')}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white/3 border border-white/5 hover:border-white/20 hover:bg-white/8 transition-all duration-300 text-center hover:scale-105"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {t.icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{t.name}</h3>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {t.tags.map(tag => (
                    <span key={tag} className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Everything You Need</p>
            <h2 className="text-3xl font-bold">Built for Students</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl bg-white/3 border border-white/5 hover:border-blue-500/20 hover:bg-white/5 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center text-blue-400">
                  {f.icon}
                </div>
                <h3 className="text-white font-semibold text-sm">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-900/40 to-violet-900/20 border border-blue-700/20">
            <Clock className="mx-auto mb-4 text-blue-400" size={32} />
            <h2 className="text-2xl font-bold mb-3">Ready in Under 2 Minutes</h2>
            <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
              No sign-up, no ads, no tracking. Just open the editor, fill your details, and export.
            </p>
            <button
              onClick={() => navigate('/editor')}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-900/40"
            >
              Get Started Free <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
