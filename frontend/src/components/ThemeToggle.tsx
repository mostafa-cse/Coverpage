import { Sun, Moon, Sparkles, Monitor } from 'lucide-react';
import { useTheme, Theme } from '@/context/ThemeContext';
import { useState, useRef, useEffect } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themes: { id: Theme; name: string; icon: React.ReactNode }[] = [
    { id: 'white', name: 'White', icon: <Sun size={16} /> },
    { id: 'dark', name: 'Dark', icon: <Moon size={16} /> },
    { id: 'black-glass', name: 'Black Glass', icon: <Sparkles size={16} /> },
    { id: 'system', name: 'System', icon: <Monitor size={16} /> },
  ];

  const currentTheme = themes.find(t => t.id === theme) || themes[3];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all"
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border-color)',
          color: 'var(--text-main)'
        }}
      >
        {currentTheme.icon}
        <span className="hidden sm:inline text-sm font-medium">{currentTheme.name}</span>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-40 rounded-xl overflow-hidden shadow-2xl z-50 animate-in fade-in zoom-in-95"
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            backdropFilter: 'blur(20px)'
          }}
        >
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => { setTheme(t.id); setIsOpen(false); }}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors text-left"
              style={{
                color: theme === t.id ? 'var(--accent)' : 'var(--text-secondary)',
                background: theme === t.id ? 'var(--hover-bg)' : 'transparent',
              }}
              onMouseOver={e => e.currentTarget.style.background = 'var(--hover-bg)'}
              onMouseOut={e => e.currentTarget.style.background = theme === t.id ? 'var(--hover-bg)' : 'transparent'}
            >
              {t.icon}
              <span style={{ fontWeight: theme === t.id ? 600 : 400 }}>{t.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
