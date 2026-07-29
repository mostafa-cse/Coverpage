import { useNavigate } from 'react-router-dom'
import {
  FileText, Zap, Download, Printer, Shield,
  ChevronRight, CheckCircle, Sparkles, Globe, Star
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
    <div className="min-h-screen bg-[#06080f] text-white flex flex-col overflow-x-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* ── Ambient Background ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div style={{ position: 'absolute', top: '-10%', left: '10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '40%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)', borderRadius: '50%' }} />
        {/* grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '64px 64px', opacity: 0.5 }} />
      </div>

      {/* ── Navbar ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', background: 'rgba(6,8,15,0.85)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(99,102,241,0.4)' }}>
              <FileText size={17} color="white" />
            </div>
            <span style={{ fontWeight: 800, fontSize: '17px', letterSpacing: '-0.3px' }}>
              CoverPage<span style={{ color: '#818cf8' }}>Gen</span>
            </span>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'white')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
              Templates
            </a>
            <a href="https://github.com/mostafa-cse/Coverpage" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'white')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
              GitHub
            </a>
            <button onClick={() => navigate('/editor')}
              style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', color: 'white', border: 'none', padding: '9px 22px', borderRadius: '10px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 20px rgba(99,102,241,0.35)', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.04)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 28px rgba(99,102,241,0.5)' }}
              onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(99,102,241,0.35)' }}>
              Open Editor →
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '100px 24px 80px', textAlign: 'center' }}>
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', padding: '6px 16px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#a5b4fc', marginBottom: '32px' }}>
          <Sparkles size={11} /> Free · No Login · No Data Sent
        </div>

        <h1 style={{ fontSize: 'clamp(38px, 6vw, 72px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '24px', maxWidth: '800px', margin: '0 auto 24px' }}>
          Generate Perfect
          <br />
          <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 40%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Academic Cover Pages
          </span>
        </h1>

        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          11 university-specific templates for BD students. Fill your details,
          preview live, and export as PDF in under 2 minutes.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginBottom: '48px' }}>
          <button onClick={() => navigate('/editor')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', color: 'white', border: 'none', padding: '15px 32px', borderRadius: '14px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 8px 32px rgba(99,102,241,0.4)', transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px) scale(1.02)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 40px rgba(99,102,241,0.55)' }}
            onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'none'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(99,102,241,0.4)' }}>
            Create Cover Page <ChevronRight size={16} />
          </button>
          <button onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.1)', padding: '15px 32px', borderRadius: '14px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', backdropFilter: 'blur(10px)', transition: 'background 0.2s, border-color 0.2s' }}
            onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.09)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.2)' }}
            onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)' }}>
            Browse Styles
          </button>
        </div>

        {/* Trust badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {['Assignment Cover', 'Lab Report Cover', 'PDF Export', 'Custom Template', '100% Free'].map(t => (
            <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>
              <CheckCircle size={12} color="#22c55e" /> {t}
            </span>
          ))}
        </div>

        {/* Hero visual – mock A4 preview cards */}
        <div style={{ marginTop: '72px', display: 'flex', justifyContent: 'center', gap: '16px', perspective: '1000px' }}>
          {[{ rot: '-8deg', z: -20 }, { rot: '0deg', z: 0 }, { rot: '8deg', z: -20 }].map(({ rot, z }, i) => (
            <div key={i} style={{
              width: '130px', height: '184px', borderRadius: '8px',
              background: 'linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              transform: `rotate(${rot}) translateZ(${z}px)`,
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px',
              flexShrink: 0,
            }}>
              <div style={{ width: '70%', height: '2px', background: 'rgba(255,255,255,0.12)', borderRadius: '2px' }} />
              <div style={{ width: '50%', height: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }} />
              <div style={{ width: '60%', height: '1px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', marginTop: '6px' }} />
              <div style={{ width: '55%', height: '1px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px' }} />
              <div style={{ width: '50%', height: '1px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px' }} />
              <FileText size={18} color="rgba(255,255,255,0.15)" style={{ marginTop: '10px' }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#818cf8', marginBottom: '12px' }}>Simple Process</p>
            <h2 style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.5px' }}>Ready in 3 Steps</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ position: 'relative', padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', transition: 'border-color 0.3s, background 0.3s' }}
                onMouseOver={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.14)'; (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.05)' }}
                onMouseOut={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)' }}>
                {/* Gradient orb */}
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: `linear-gradient(135deg, ${step.color.replace('from-', '').replace(' to-', ', ')})`, borderRadius: '50%', opacity: 0.08, filter: 'blur(20px)' }} />
                <div style={{ fontSize: '52px', fontWeight: 900, background: `linear-gradient(135deg, ${step.color.replace('from-', '').replace(' to-', ', ')})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, marginBottom: '20px', opacity: 0.6 }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Templates Grid ── */}
      <section id="templates" style={{ position: 'relative', zIndex: 1, padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#818cf8', marginBottom: '12px' }}>11 Unique Designs</p>
            <h2 style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '12px' }}>Pick Your Style</h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', maxWidth: '480px', margin: '0 auto' }}>
              All templates use Times New Roman, pure black ink — perfect for academic printing.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '14px' }}>
            {TEMPLATES.map((t, i) => (
              <button key={t.id} onClick={() => navigate('/editor')}
                style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 16px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer', transition: 'all 0.25s', textAlign: 'center', overflow: 'hidden' }}
                onMouseOver={e => { const el = e.currentTarget as HTMLButtonElement; el.style.background = 'rgba(99,102,241,0.1)'; el.style.borderColor = 'rgba(99,102,241,0.35)'; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 16px 40px rgba(0,0,0,0.3)' }}
                onMouseOut={e => { const el = e.currentTarget as HTMLButtonElement; el.style.background = 'rgba(255,255,255,0.03)'; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.transform = 'none'; el.style.boxShadow = 'none' }}>
                {/* Number badge */}
                <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.5px' }}>
                  #{String(i + 1).padStart(2, '0')}
                </div>
                {/* Icon */}
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '14px', transition: 'transform 0.2s' }}>
                  {t.thumbnail}
                </div>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: '10px', display: 'block' }}>{t.name}</span>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5, margin: 0 }}>{t.description.split('—')[0].trim()}</p>
                {/* Use button */}
                <div style={{ marginTop: '14px', fontSize: '11px', color: '#818cf8', fontWeight: 600, opacity: 0, transition: 'opacity 0.2s' }} className="use-label">
                  Use This Style →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#818cf8', marginBottom: '12px' }}>Why Use This</p>
            <h2 style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.5px' }}>Built for Students</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', padding: '24px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.25s', alignItems: 'flex-start' }}
                onMouseOver={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(99,102,241,0.25)'; (e.currentTarget as HTMLDivElement).style.background = 'rgba(99,102,241,0.05)' }}
                onMouseOut={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8', flexShrink: 0 }}>
                  {f.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: 'rgba(255,255,255,0.95)' }}>{f.title}</h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.42)', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '48px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {[
            { value: '11', label: 'Templates' },
            { value: '2 min', label: 'Average Time' },
            { value: '100%', label: 'Free & Private' },
            { value: 'A4', label: 'Print Standard' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: '36px', fontWeight: 900, background: 'linear-gradient(135deg, #60a5fa, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-1px', marginBottom: '6px' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ padding: '56px 48px', borderRadius: '28px', background: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.08) 50%, rgba(139,92,246,0.12) 100%)', border: '1px solid rgba(99,102,241,0.25)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Glow */}
            <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '200px', background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginBottom: '16px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#facc15" color="#facc15" />)}
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '14px' }}>
              Create Your Cover Page Now
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '36px', maxWidth: '440px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              No sign-up. No ads. No tracking. Just your perfect academic cover page in minutes.
            </p>
            <button onClick={() => navigate('/editor')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', color: 'white', border: 'none', padding: '16px 40px', borderRadius: '14px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 8px 40px rgba(99,102,241,0.5)', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px) scale(1.03)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 16px 48px rgba(99,102,241,0.6)' }}
              onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'none'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 40px rgba(99,102,241,0.5)' }}>
              Get Started Free <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.05)', padding: '28px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={13} color="white" />
            </div>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>CoverPageGen</span>
          </div>
          <a href="https://www.facebook.com/muhammadm0stafa/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}>
            Built by <strong style={{ color: 'rgba(255,255,255,0.6)' }}>M0stafa</strong>, CSE, JUST
          </a>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>© 2025 CoverPageGen. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
