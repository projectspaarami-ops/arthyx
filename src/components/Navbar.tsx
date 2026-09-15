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
            ? 'bg-white/95 backdrop-blur-md border-b border-[#DDE2EC] shadow-sm py-3.5'
            : 'bg-[#09101d]/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/40 py-3.5' 
          : isLight
            ? 'bg-[#F8F9FC]/90 backdrop-blur-sm border-b border-[#DDE2EC]/70 py-4 sm:py-5'
            : 'bg-[#09101d]/80 backdrop-blur-sm border-b border-white/5 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home', 'top')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#243E8A]"
          >
            {/* Geometric Analytical Emblem with Glow */}
            <div className={`w-10 h-10 rounded-xl p-2 flex items-center justify-center transition-all shrink-0 ${
              isLight 
                ? 'bg-[#243E8A] border border-[#FBBE21]/60 shadow-md shadow-[#243E8A]/20 group-hover:scale-105' 
                : 'bg-gradient-to-br from-[#243E8A] via-[#172B68] to-[#0d1629] border border-[#FBBE21]/60 shadow-lg shadow-[#243E8A]/25 group-hover:scale-105 group-hover:border-[#FBBE21]'
            }`}>
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FBBE21]">
                <path d="M4 19L12 5L20 19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 13.5H16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M12 5V19" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" className="opacity-75" />
                <circle cx="12" cy="5" r="1.6" fill="currentColor" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xl font-extrabold tracking-tight font-display ${isLight ? 'text-[#172033]' : 'text-white'}`}>
                  Arthyx
                </span>
                <span className={`text-[10px] tracking-wide px-2 py-0.5 rounded-full font-bold border ${
                  isLight 
                    ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' 
                    : 'bg-[#FBBE21]/20 text-[#FBBE21] border-[#FBBE21]/40'
                }`}>
                  Education
                </span>
              </div>
              <p className={`text-[11px] font-semibold tracking-wide block ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
                Method over Guesswork
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className={`hidden xl:flex items-center gap-1 p-1.5 rounded-full border ${
            isLight 
              ? 'bg-[#F8F9FC] border-[#DDE2EC]' 
              : 'bg-[#172B68]/40 border-white/10'
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
                      ? 'bg-[#243E8A] text-white shadow-sm font-bold'
                      : isLight
                        ? 'text-[#5B6475] hover:text-[#172033] hover:bg-white font-medium'
                        : 'text-slate-300 hover:text-white hover:bg-white/5 font-medium'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive 
                        ? 'bg-white/25 text-white' 
                        : isLight 
                          ? 'bg-[#FBBE21] text-[#172B68]' 
                          : 'bg-[#FBBE21]/20 text-[#FBBE21]'
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
              title={isLight ? "Switch to Dark Theme" : "Switch to Light Theme"}
              className={`p-2 rounded-lg border transition-all flex items-center justify-center ${
                isLight
                  ? 'bg-white border-[#DDE2EC] text-[#5B6475] hover:bg-slate-100 hover:text-[#172033] shadow-sm'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
              aria-label="Toggle Theme"
            >
              {isLight ? (
                <Moon className="w-4 h-4 text-[#172033]" />
              ) : (
                <Sun className="w-4 h-4 text-[#FBBE21]" />
              )}
            </button>

            <button
              id="nav-eye-opener-cta"
              onClick={onOpenReservation}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-[#172B68] bg-[#FBBE21] hover:bg-[#f3b516] transition-all shadow-md shadow-[#FBBE21]/20 hover:shadow-[#FBBE21]/30 active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#172B68]" />
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
                isLight ? 'bg-white border-[#DDE2EC] text-[#172033]' : 'bg-white/5 border-white/10 text-slate-300'
              }`}
              aria-label="Toggle Theme"
            >
              {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#FBBE21]" />}
            </button>

            <button
              id="mobile-eye-opener-quick-btn"
              onClick={onOpenReservation}
              className="px-3 py-1.5 rounded-md text-[11px] font-bold text-[#172B68] bg-[#FBBE21]"
            >
              ₹99 Seat
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none ${
                isLight 
                  ? 'text-[#172033] hover:bg-slate-100' 
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
          isLight ? 'bg-white/98 border-[#DDE2EC] text-[#172033]' : 'bg-[#09101d]/98 border-white/10 text-slate-200'
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
                      ? 'bg-[#243E8A] text-white border-[#243E8A]'
                      : isLight
                        ? 'bg-[#F8F9FC] text-[#172033] border-[#DDE2EC]'
                        : 'bg-white/5 text-slate-200 border-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className={`pt-3 border-t ${isLight ? 'border-[#DDE2EC]' : 'border-white/10'}`}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 rounded-xl font-bold text-xs text-[#172B68] bg-[#FBBE21] hover:bg-[#f3b516] flex items-center justify-center gap-2 shadow-lg"
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
