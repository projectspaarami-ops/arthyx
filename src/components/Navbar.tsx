import { useState, useEffect } from 'react';
import { PageType } from '../types';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, ArrowRight, Sparkles, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType, sectionId?: string) => void;
  onOpenReservation: () => void;
}

export function Navbar({ currentPage, onNavigate, onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLight, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: PageType, sectionId?: string) => {
    onNavigate(page, sectionId);
    setMobileMenuOpen(false);
  };

  const navLinks: { page: PageType; label: string; badge?: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'saga', label: 'SAGA Programme', badge: '13 Wks' },
    { page: 'about', label: 'About' },
    { page: 'stories', label: 'Stories' },
    { page: 'insights', label: 'Insights' },
    { page: 'research', label: 'Research' },
    { page: 'contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isLight
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3.5'
            : 'bg-[#080c15]/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/40 py-3.5' 
          : isLight
            ? 'bg-white/80 backdrop-blur-sm border-b border-slate-200/60 py-4 sm:py-5'
            : 'bg-[#080c15]/70 backdrop-blur-sm border-b border-white/5 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home', 'top')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c99a4e]"
          >
            {/* Geometric Analytical Emblem with Glow */}
            <div className={`w-10 h-10 rounded-xl p-2 flex items-center justify-center transition-all shrink-0 ${
              isLight 
                ? 'bg-[#0f172a] border border-[#c99a4e]/70 shadow-md shadow-[#c99a4e]/15 group-hover:scale-105' 
                : 'bg-gradient-to-br from-[#18233c] via-[#0d1629] to-[#070b14] border border-[#c99a4e]/60 shadow-lg shadow-[#c99a4e]/20 group-hover:scale-105 group-hover:border-[#c99a4e]'
            }`}>
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#c99a4e]">
                <path d="M4 19L12 5L20 19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 13.5H16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M12 5V19" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" className="opacity-75" />
                <circle cx="12" cy="5" r="1.6" fill="currentColor" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xl font-extrabold tracking-tight font-display ${isLight ? 'text-slate-950' : 'text-white'}`}>
                  Arthyx
                </span>
                <span className={`text-[10px] tracking-wide px-2 py-0.5 rounded-full font-bold border ${
                  isLight 
                    ? 'bg-[#fdf6e9] text-[#966b24] border-[#e9d5a1]' 
                    : 'bg-[#c99a4e]/20 text-[#f3d99d] border-[#c99a4e]/40'
                }`}>
                  Education
                </span>
              </div>
              <p className={`text-[11px] font-semibold tracking-wide block ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                Method over Guesswork
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className={`hidden xl:flex items-center gap-1 p-1.5 rounded-full border ${
            isLight 
              ? 'bg-slate-100/90 border-slate-200/90' 
              : 'bg-[#0f172a]/60 border-white/10'
          }`}>
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  id={`nav-link-${item.page}`}
                  onClick={() => handleLinkClick(item.page, 'top')}
                  className={`px-3.5 py-1.5 rounded-full text-xs transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#c99a4e] text-slate-950 shadow-sm font-bold'
                      : isLight
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-white font-medium'
                        : 'text-slate-300 hover:text-white hover:bg-white/5 font-medium'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive 
                        ? 'bg-slate-950/15 text-slate-950' 
                        : isLight 
                          ? 'bg-slate-200 text-slate-700' 
                          : 'bg-white/20 text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Theme Switcher */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              id="nav-theme-toggle-btn"
              onClick={toggleTheme}
              title={isLight ? "Switch to Dark Theme" : "Switch to Light Theme (Figma)"}
              className={`p-2 rounded-lg border transition-all flex items-center justify-center ${
                isLight
                  ? 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900 shadow-sm'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
              aria-label="Toggle Theme"
            >
              {isLight ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-[#e5b869]" />
              )}
            </button>

            <button
              id="nav-eye-opener-cta"
              onClick={onOpenReservation}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-[#e5b869] via-[#c99a4e] to-[#ba8a3e] hover:from-[#f3c87e] hover:to-[#c99a4e] transition-all shadow-md shadow-[#c99a4e]/20 hover:shadow-[#c99a4e]/30 active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Reserve ₹99 Seat</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile and Tablet Menu Trigger */}
          <div className="flex items-center gap-1.5 xl:hidden">
            <button
              id="mobile-theme-toggle"
              onClick={toggleTheme}
              className={`p-1.5 rounded-md border ${
                isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-white/5 border-white/10 text-slate-300'
              }`}
              aria-label="Toggle Theme"
            >
              {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#e5b869]" />}
            </button>

            <button
              id="mobile-eye-opener-quick-btn"
              onClick={onOpenReservation}
              className="px-3 py-1.5 rounded-md text-[11px] font-bold text-slate-950 bg-[#c99a4e]"
            >
              ₹99 Seat
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none ${
                isLight 
                  ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100' 
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className={`xl:hidden fixed inset-x-0 top-full px-6 py-6 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200 border-b max-h-[80vh] overflow-y-auto ${
          isLight ? 'bg-white/98 border-slate-200 text-slate-800' : 'bg-[#080c15]/98 border-white/10 text-slate-200'
        }`}>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navLinks.map((item) => (
                <button
                  key={item.page}
                  id={`mobile-nav-${item.page}`}
                  onClick={() => handleLinkClick(item.page, 'top')}
                  className={`py-2.5 px-3 rounded-lg text-center text-xs font-semibold border transition-all ${
                    currentPage === item.page
                      ? 'bg-[#c99a4e] text-slate-950 border-[#c99a4e]'
                      : isLight
                        ? 'bg-slate-100 text-slate-800 border-slate-200'
                        : 'bg-white/5 text-slate-200 border-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className={`pt-3 border-t ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-[#e5b869] to-[#c99a4e] flex items-center justify-center gap-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                <span>Reserve ₹99 Eye-Opener Seat</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
