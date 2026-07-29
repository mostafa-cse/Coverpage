import { useNavigate } from 'react-router-dom'
import {
  FileText, Zap, Download, Printer, Shield,
  ChevronRight, CheckCircle, Sparkles, Globe, Star, ArrowRight
} from 'lucide-react'
import { TEMPLATES } from '@/types/Template'

export default function Home() {
  const navigate = useNavigate()

  const features = [
    { icon: <FileText size={22} />, title: '11 Professional Templates', desc: 'Unique layouts for every major BD university — all A4 print-ready.' },
    { icon: <Zap size={22} />, title: 'Auto-saves Locally', desc: 'Your data is persisted in the browser. Never lose your work mid-session.' },
    { icon: <Download size={22} />, title: 'One-Click PDF Export', desc: 'Export a high-quality A4 PDF instantly — no install required.' },
    { icon: <Printer size={22} />, title: 'Print Ready', desc: 'Optimised layout for direct printing. No reformatting ever needed.' },
    { icon: <Globe size={22} />, title: 'Custom HTML Templates', desc: 'Import your own HTML template for full creative control.' },
    { icon: <Shield size={22} />, title: '100% Private', desc: 'Everything runs locally in your browser. Zero data sent anywhere.' },
  ]

  const steps = [
    { num: '01', title: 'Pick a Style', desc: 'Choose from 11 classic academic cover page styles.', color: 'from-blue-500 to-cyan-500' },
    { num: '02', title: 'Fill Details', desc: 'Enter university, course, student and teacher info.', color: 'from-violet-500 to-purple-500' },
    { num: '03', title: 'Export & Print', desc: 'Download PDF or print directly in one click.', color: 'from-emerald-500 to-teal-500' },
  ]

  return (
    <div className="min-h-screen bg-[#03050a] text-white flex flex-col overflow-x-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* ── Ambient Background ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="animate-glow" style={{ position: 'absolute', top: '-15%', left: '0%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 60%)', borderRadius: '50%' }} />
        <div className="animate-glow" style={{ position: 'absolute', top: '30%', right: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 60%)', borderRadius: '50%', animationDelay: '2s' }} />
        <div className="animate-glow" style={{ position: 'absolute', bottom: '-10%', left: '15%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 60%)', borderRadius: '50%', animationDelay: '1s' }} />
        
        {/* Animated grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '64px 64px', opacity: 0.8, maskImage: 'linear-gradient(to bottom, white, transparent)' }} />
      </div>

      {/* ── Navbar ── */}
      <nav className="glass-card" style={{ position: 'sticky', top: '16px', zIndex: 50, margin: '0 24px', borderRadius: '20px', background: 'rgba(3,5,10,0.6)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 24px rgba(99,102,241,0.5), inset 0 2px 4px rgba(255,255,255,0.3)' }}>
              <FileText size={18} color="white" />
            </div>
            <span style={{ fontWeight: 800, fontSize: '19px', letterSpacing: '-0.5px' }}>
              CoverPage<span className="text-gradient-shimmer">Gen</span>
            </span>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <a onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'white')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
              Templates
            </a>
            <a href="https://github.com/mostafa-cse/Coverpage" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'white')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
              GitHub
            </a>
            <button onClick={() => navigate('/editor')}
              style={{ background: 'white', color: '#03050a', border: 'none', padding: '10px 24px', borderRadius: '12px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 24px rgba(255,255,255,0.2)', transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s' }}
              onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(255,255,255,0.3)'; (e.currentTarget as HTMLButtonElement).style.background = '#f3f4f6' }}
              onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 24px rgba(255,255,255,0.2)'; (e.currentTarget as HTMLButtonElement).style.background = 'white' }}>
              Open Editor
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '120px 24px 100px', textAlign: 'center' }}>
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.4)', padding: '8px 20px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#a5b4fc', marginBottom: '40px', backdropFilter: 'blur(10px)', boxShadow: '0 4px 24px rgba(99,102,241,0.2)' }}>
          <Sparkles size={14} className="animate-pulse" /> Free · No Login · Private
        </div>

        <h1 style={{ fontSize: 'clamp(44px, 7vw, 84px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2.5px', marginBottom: '32px', maxWidth: '900px', margin: '0 auto 32px' }}>
          Craft the Perfect
          <br />
          <span className="text-gradient-shimmer">
            Academic Cover Page
          </span>
        </h1>

        <p style={{ fontSize: '19px', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', margin: '0 auto 48px', lineHeight: 1.7, fontWeight: 400 }}>
          11 meticulously designed, university-specific templates for BD students. 
          Auto-saved locally. Exported as a pristine A4 PDF in seconds.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '64px' }}>
          <button onClick={() => navigate('/editor')}
            className="glowing-border-wrapper"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', color: 'white', border: 'none', padding: '18px 40px', borderRadius: '16px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 12px 48px rgba(99,102,241,0.4), inset 0 2px 4px rgba(255,255,255,0.3)', transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
            onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-4px) scale(1.02)' }}
            onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'none' }}>
            Start Creating <ArrowRight size={18} />
          </button>
          
          <button onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.03)', color: 'white', border: '1px solid rgba(255,255,255,0.1)', padding: '18px 40px', borderRadius: '16px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', backdropFilter: 'blur(20px)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
            onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.2)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-4px)' }}
            onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLButtonElement).style.transform = 'none' }}>
            Explore Styles
          </button>
        </div>

        {/* Hero visual – 3D floating A4 preview cards */}
        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '24px', perspective: '1200px' }}>
          {[
            { rot: '-12deg', z: '-40', delay: '0s' }, 
            { rot: '0deg', z: '0', delay: '2s' }, 
            { rot: '12deg', z: '-40', delay: '4s' }
          ].map(({ rot, z, delay }, i) => (
            <div key={i} className="animate-float glass-card" style={{
              '--rot': rot, '--z': `${z}px`,
              animationDelay: delay,
              width: '180px', height: '254px', borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 2px 4px rgba(255,255,255,0.4)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px',
              flexShrink: 0,
            } as React.CSSProperties}>
              <div style={{ width: '75%', height: '3px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }} />
              <div style={{ width: '60%', height: '3px', background: 'rgba(255,255,255,0.15)', borderRadius: '2px' }} />
              <div style={{ width: '65%', height: '2px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '10px' }} />
              <div style={{ width: '55%', height: '2px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }} />
              <div style={{ width: '50%', height: '2px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }} />
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '16px', boxShadow: '0 0 20px rgba(99,102,241,0.4)' }}>
                <FileText size={14} color="#a5b4fc" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(to bottom, rgba(3,5,10,0), rgba(15,23,42,0.3))' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="text-gradient-shimmer" style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>Zero Friction</p>
            <h2 style={{ fontSize: '42px', fontWeight: 900, letterSpacing: '-1px' }}>Ready in 3 Steps</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {steps.map((step, i) => (
              <div key={i} className="glass-card glowing-border-wrapper" style={{ position: 'relative', padding: '40px', borderRadius: '24px', overflow: 'hidden', transition: 'transform 0.3s' }}
                onMouseOver={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)' }}
                onMouseOut={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none' }}>
                <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '150px', height: '150px', background: `linear-gradient(135deg, ${step.color.replace('from-', '').replace(' to-', ', ')})`, borderRadius: '50%', opacity: 0.15, filter: 'blur(30px)' }} />
                <div style={{ fontSize: '64px', fontWeight: 900, background: `linear-gradient(135deg, ${step.color.replace('from-', '').replace(' to-', ', ')})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, marginBottom: '24px', opacity: 0.8, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0, fontWeight: 500 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Templates Grid ── */}
      <section id="templates" style={{ position: 'relative', zIndex: 1, padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="text-gradient-shimmer" style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>11 Unique Designs</p>
            <h2 style={{ fontSize: '42px', fontWeight: 900, letterSpacing: '-1px', marginBottom: '16px' }}>Find Your Perfect Style</h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)', maxWidth: '520px', margin: '0 auto' }}>
              Every template is built with pure Times New Roman and strict academic spacing. Pixel-perfect for print.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
            {TEMPLATES.map((t, i) => (
              <button key={t.id} onClick={() => navigate('/editor')}
                className="glass-card glowing-border-wrapper"
                style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 20px', borderRadius: '20px', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', textAlign: 'center' }}
                onMouseOver={e => { const el = e.currentTarget as HTMLButtonElement; el.style.transform = 'translateY(-8px) scale(1.02)'; el.style.background = 'rgba(99,102,241,0.08)' }}
                onMouseOut={e => { const el = e.currentTarget as HTMLButtonElement; el.style.transform = 'none'; el.style.background = 'rgba(20,24,39,0.6)' }}>
                
                <div style={{ position: 'absolute', top: '12px', right: '14px', fontSize: '11px', fontWeight: 800, color: 'rgba(255,255,255,0.15)', letterSpacing: '1px' }}>
                  #{String(i + 1).padStart(2, '0')}
                </div>
                
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '20px', boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.2)' }}>
                  {t.thumbnail}
                </div>
                
                <span style={{ fontSize: '15px', fontWeight: 800, color: 'white', marginBottom: '12px', display: 'block' }}>{t.name}</span>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{t.description.split('—')[0].trim()}</p>
                
                <div style={{ marginTop: '20px', fontSize: '12px', color: '#818cf8', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Use Layout <ChevronRight size={14} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(to top, rgba(3,5,10,0), rgba(59,130,246,0.05))' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="text-gradient-shimmer" style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>Everything You Need</p>
            <h2 style={{ fontSize: '42px', fontWeight: 900, letterSpacing: '-1px' }}>Engineered for Academics</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {features.map((f, i) => (
              <div key={i} className="glass-card glowing-border-wrapper" style={{ display: 'flex', gap: '20px', padding: '32px', borderRadius: '24px', transition: 'transform 0.3s', alignItems: 'flex-start' }}
                onMouseOver={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)' }}
                onMouseOut={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(99,102,241,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8', flexShrink: 0, boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1)' }}>
                  {f.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '8px', color: 'white' }}>{f.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Premium CTA Banner ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '120px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: '80px 48px', borderRadius: '40px', background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(99,102,241,0.1) 50%, rgba(139,92,246,0.15) 100%)', border: '1px solid rgba(99,102,241,0.3)', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}>
            
            {/* Dramatic Glows */}
            <div className="animate-glow" style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '300px', background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div className="animate-glow" style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)', pointerEvents: 'none', animationDelay: '2s' }} />

            <div style={{ display: 'flex', justifyCenter: 'center', justifyContent: 'center', gap: '4px', marginBottom: '24px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#facc15" color="#facc15" style={{ filter: 'drop-shadow(0 0 8px rgba(250,204,21,0.5))' }} />)}
            </div>
            
            <h2 style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: '20px', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
              Transform Your Assignments
            </h2>
            
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px', lineHeight: 1.7, fontWeight: 500 }}>
              Join thousands of students creating professional, print-ready cover pages in seconds. 100% Free.
            </p>
            
            <button onClick={() => navigate('/editor')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'white', color: '#03050a', border: 'none', padding: '20px 48px', borderRadius: '20px', fontSize: '18px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 12px 48px rgba(255,255,255,0.25)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
              onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-4px) scale(1.05)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 20px 60px rgba(255,255,255,0.4)' }}
              onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'none'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 48px rgba(255,255,255,0.25)' }}>
              Get Started <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.05)', padding: '40px 24px', background: 'rgba(3,5,10,0.8)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={16} color="white" />
            </div>
            <span style={{ fontSize: '15px', fontWeight: 800, color: 'white' }}>CoverPageGen</span>
          </div>
          <a href="https://www.facebook.com/muhammadm0stafa/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = 'white')}
            onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
            Built by <strong style={{ color: 'white' }}>M0stafa</strong>, CSE, JUST
          </a>
          <div style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.2)' }}>© 2026 CoverPageGen. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
