import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { Theme } from '../types';

interface ThemeContextType {
  theme: Theme;
  isLight: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Default to light theme as requested from Figma
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('arthyx_theme');
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return 'light'; // Light theme default from Figma
  });

  useEffect(() => {
    localStorage.setItem('arthyx_theme', theme);
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      document.body.className = 'bg-[#f8f9fa] text-[#0f172a] font-sans antialiased selection:bg-[#c99a4e]/20 selection:text-[#9a6922] min-h-screen overflow-x-hidden';
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      document.body.className = 'bg-[#080c15] text-[#e2e8f0] font-sans antialiased selection:bg-[#c99a4e]/20 selection:text-[#f3d99d] min-h-screen overflow-x-hidden';
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, isLight: theme === 'light', toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
