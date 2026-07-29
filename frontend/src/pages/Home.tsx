import { useNavigate } from 'react-router-dom'
import {
  FileText,
  ChevronRight, Sparkles, Star, ArrowRight
} from 'lucide-react'
import { TEMPLATES } from '@/types/Template'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  const navigate = useNavigate()



  const steps = [
    { num: '01', title: 'Pick a Style', desc: 'Choose from 11 classic academic cover page styles.', color: 'from-blue-500 to-cyan-500' },
    { num: '02', title: 'Fill Details', desc: 'Enter university, course, student and teacher info.', color: 'from-violet-500 to-purple-500' },
    { num: '03', title: 'Export & Print', desc: 'Download PDF or print directly in one click.', color: 'from-emerald-500 to-teal-500' },
  ]

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', transition: 'background-color 0.3s, color 0.3s' }}>

      {/* ── Ambient Background ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="animate-glow" style={{ position: 'absolute', top: '-15%', left: '0%', width: '800px', height: '800px', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)', borderRadius: '50%' }} />
        <div className="animate-glow" style={{ position: 'absolute', top: '30%', right: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 60%)', borderRadius: '50%', animationDelay: '2s' }} />
        <div className="animate-glow" style={{ position: 'absolute', bottom: '-10%', left: '15%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 60%)', borderRadius: '50%', animationDelay: '1s' }} />
        
        {/* Animated grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--card-border) 1px, transparent 1px), linear-gradient(90deg, var(--card-border) 1px, transparent 1px)', backgroundSize: '64px 64px', opacity: 0.8, maskImage: 'linear-gradient(to bottom, white, transparent)' }} />
      </div>

      {/* ── Navbar ── */}
      <nav style={{ position: 'sticky', top: '16px', zIndex: 50, margin: '0 24px', borderRadius: '20px', background: 'var(--card-bg)', backdropFilter: 'blur(20px)', border: '1px solid var(--card-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 24px rgba(99,102,241,0.3)' }}>
              <FileText size={18} color="white" />
            </div>
            <span style={{ fontWeight: 800, fontSize: '19px', letterSpacing: '-0.5px' }}>
              CoverPage<span className="text-gradient-shimmer">Gen</span>
            </span>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <a onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--text-main)')}
              onMouseOut={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>
              Templates
            </a>
            <a href="https://github.com/mostafa-cse/Coverpage" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--text-main)')}
              onMouseOut={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>
              GitHub
            </a>
            
            <ThemeToggle />

            <button onClick={() => navigate('/editor')}
              style={{ background: 'var(--text-main)', color: 'var(--bg-main)', border: 'none', padding: '10px 24px', borderRadius: '12px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 24px var(--accent-glow)', transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s' }}
              onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px var(--accent-glow)' }}
              onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 24px var(--accent-glow)' }}>
              Open Editor
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '120px 24px 100px', textAlign: 'center' }}>
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--accent-glow)', border: '1px solid var(--accent)', padding: '8px 20px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '40px', backdropFilter: 'blur(10px)' }}>
          <Sparkles size={14} className="animate-pulse" /> Free · No Login · Private
        </div>

        <h1 style={{ fontSize: 'clamp(44px, 7vw, 84px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2.5px', marginBottom: '32px', maxWidth: '900px', margin: '0 auto 32px' }}>
          Craft the Perfect
          <br />
          <span className="text-gradient-shimmer">
            Academic Cover Page
          </span>
        </h1>

        <p style={{ fontSize: '19px', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto 48px', lineHeight: 1.7, fontWeight: 400 }}>
          11 meticulously designed, university-specific templates for BD students. 
          Auto-saved locally. Exported as a pristine A4 PDF in seconds.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '64px' }}>
          <button onClick={() => navigate('/editor')}
            className="glowing-border-wrapper"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', color: 'white', border: 'none', padding: '18px 40px', borderRadius: '16px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 12px 48px var(--accent-glow)', transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
            onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-4px) scale(1.02)' }}
            onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'none' }}>
            Start Creating <ArrowRight size={18} />
          </button>
          
          <button onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--hover-bg)', color: 'var(--text-main)', border: '1px solid var(--card-border)', padding: '18px 40px', borderRadius: '16px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', backdropFilter: 'blur(20px)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
            onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-4px)' }}
            onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'none' }}>
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
              border: '1px solid var(--card-border)',
              background: 'var(--card-bg)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px',
              flexShrink: 0,
            } as React.CSSProperties}>
              <div style={{ width: '75%', height: '3px', background: 'var(--text-secondary)', opacity: 0.3, borderRadius: '2px' }} />
              <div style={{ width: '60%', height: '3px', background: 'var(--text-secondary)', opacity: 0.2, borderRadius: '2px' }} />
              <div style={{ width: '65%', height: '2px', background: 'var(--text-secondary)', opacity: 0.1, borderRadius: '2px', marginTop: '10px' }} />
              <div style={{ width: '55%', height: '2px', background: 'var(--text-secondary)', opacity: 0.1, borderRadius: '2px' }} />
              <div style={{ width: '50%', height: '2px', background: 'var(--text-secondary)', opacity: 0.1, borderRadius: '2px' }} />
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '16px' }}>
                <FileText size={14} color="var(--accent)" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '100px 24px', borderTop: '1px solid var(--card-border)', background: 'linear-gradient(to bottom, var(--bg-main), var(--hover-bg))' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="text-gradient-shimmer" style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>Zero Friction</p>
            <h2 style={{ fontSize: '42px', fontWeight: 900, letterSpacing: '-1px' }}>Ready in 3 Steps</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {steps.map((step, i) => (
              <div key={i} className="glowing-border-wrapper" style={{ position: 'relative', padding: '40px', borderRadius: '24px', overflow: 'hidden', transition: 'transform 0.3s', background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                onMouseOver={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)' }}
                onMouseOut={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none' }}>
                <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '150px', height: '150px', background: `linear-gradient(135deg, ${step.color.replace('from-', '').replace(' to-', ', ')})`, borderRadius: '50%', opacity: 0.15, filter: 'blur(30px)' }} />
                <div style={{ fontSize: '64px', fontWeight: 900, background: `linear-gradient(135deg, ${step.color.replace('from-', '').replace(' to-', ', ')})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, marginBottom: '24px', opacity: 0.8, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0, fontWeight: 500 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Templates Grid ── */}
      <section id="templates" style={{ position: 'relative', zIndex: 1, padding: '100px 24px', borderTop: '1px solid var(--card-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="text-gradient-shimmer" style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>11 Unique Designs</p>
            <h2 style={{ fontSize: '42px', fontWeight: 900, letterSpacing: '-1px', marginBottom: '16px' }}>Find Your Perfect Style</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto' }}>
              Every template is built with pure Times New Roman and strict academic spacing. Pixel-perfect for print.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
            {TEMPLATES.map((t, i) => (
              <button key={t.id} onClick={() => navigate('/editor')}
                className="glowing-border-wrapper"
                style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 20px', borderRadius: '20px', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', textAlign: 'center', background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                onMouseOver={e => { const el = e.currentTarget as HTMLButtonElement; el.style.transform = 'translateY(-8px) scale(1.02)'; el.style.background = 'var(--hover-bg)' }}
                onMouseOut={e => { const el = e.currentTarget as HTMLButtonElement; el.style.transform = 'none'; el.style.background = 'var(--card-bg)' }}>
                
                <div style={{ position: 'absolute', top: '12px', right: '14px', fontSize: '11px', fontWeight: 800, color: 'var(--text-secondary)', letterSpacing: '1px' }}>
                  #{String(i + 1).padStart(2, '0')}
                </div>
                
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--hover-bg)', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '20px' }}>
                  {t.thumbnail}
                </div>
                
                <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px', display: 'block' }}>{t.name}</span>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{t.description.split('—')[0].trim()}</p>
                
                <div style={{ marginTop: '20px', fontSize: '12px', color: 'var(--accent)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Use Layout <ChevronRight size={14} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Premium CTA Banner ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '120px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ padding: '80px 48px', borderRadius: '40px', background: 'var(--card-bg)', border: '1px solid var(--accent)', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 40px 100px var(--accent-glow)' }}>
            
            {/* Dramatic Glows */}
            <div className="animate-glow" style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '300px', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#facc15" color="#facc15" style={{ filter: 'drop-shadow(0 0 8px rgba(250,204,21,0.5))' }} />)}
            </div>
            
            <h2 style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: '20px' }}>
              Transform Your Assignments
            </h2>
            
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px', lineHeight: 1.7, fontWeight: 500 }}>
              Join thousands of students creating professional, print-ready cover pages in seconds. 100% Free.
            </p>
            
            <button onClick={() => navigate('/editor')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'var(--text-main)', color: 'var(--bg-main)', border: 'none', padding: '20px 48px', borderRadius: '20px', fontSize: '18px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 12px 48px var(--accent-glow)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
              onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-4px) scale(1.05)' }}
              onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'none' }}>
              Get Started <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid var(--card-border)', padding: '40px 24px', background: 'var(--hover-bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={16} color="white" />
            </div>
            <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>CoverPageGen</span>
          </div>
          <a href="https://www.facebook.com/muhammadm0stafa/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = 'var(--text-main)')}
            onMouseOut={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>
            Built by <strong style={{ color: 'var(--text-main)' }}>M0stafa</strong>, CSE, JUST
          </a>
          <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)' }}>© 2026 CoverPageGen. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
