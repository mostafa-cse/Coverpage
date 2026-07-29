import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'white' | 'dark' | 'black-glass' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  activeTheme: 'white' | 'dark' | 'black-glass'; // Resolves 'system' to an actual theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('app-theme') as Theme;
    return saved || 'system';
  });

  const [activeTheme, setActiveTheme] = useState<'white' | 'dark' | 'black-glass'>('white');

  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem('app-theme', theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const applySystemTheme = (e: MediaQueryListEvent | MediaQueryList) => {
        const resolved = e.matches ? 'dark' : 'white';
        setActiveTheme(resolved);
        root.setAttribute('data-theme', resolved);
      };
      
      applySystemTheme(mediaQuery);
      
      const listener = (e: MediaQueryListEvent) => applySystemTheme(e);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    } else {
      setActiveTheme(theme);
      root.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, activeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
