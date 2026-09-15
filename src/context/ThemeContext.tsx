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
      document.body.className = 'bg-[#F8F9FC] text-[#172033] font-sans antialiased selection:bg-[#FBBE21]/35 selection:text-[#172B68] min-h-screen overflow-x-hidden';
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      document.body.className = 'bg-[#09101d] text-[#F1F5F9] font-sans antialiased selection:bg-[#FBBE21]/30 selection:text-[#FBBE21] min-h-screen overflow-x-hidden';
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
