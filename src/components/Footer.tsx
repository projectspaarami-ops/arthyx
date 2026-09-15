import { useTheme } from '../context/ThemeContext';
import { FOOTER_CONTENT } from '../data/content';
import { PageType } from '../types';
import { MessageCircle, Mail, ShieldAlert, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType, sectionId?: string) => void;
  onOpenReservation: () => void;
}

export function Footer({ onNavigate, onOpenReservation }: FooterProps) {
  const { isLight } = useTheme();

  return (
    <footer id="footer" className={`text-xs pt-16 pb-12 transition-colors border-t ${
      isLight 
        ? 'bg-[#F8F9FC] border-[#DDE2EC] text-[#5B6475]' 
        : 'bg-[#09101f] border-white/10 text-slate-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b ${
          isLight ? 'border-[#DDE2EC]' : 'border-white/10'
        }`}>
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-lg p-1.5 flex items-center justify-center border ${
                isLight 
                  ? 'bg-white border-[#243E8A]/30 shadow-sm' 
                  : 'bg-gradient-to-br from-[#1b253b] to-[#080c15] border-[#243E8A]/40'
              }`}>
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#243E8A] dark:text-[#FBBE21]">
                  <path d="M4 19L12 5L20 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 13.5H16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
              <span className={`text-xl font-bold tracking-tight font-display ${
                isLight ? 'text-[#172033]' : 'text-white'
              }`}>
                {FOOTER_CONTENT.brand}
              </span>
              <span className={`text-[10px] tracking-wide px-1.5 py-0.5 rounded font-semibold border ${
                isLight 
                  ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' 
                  : 'bg-[#FBBE21]/15 text-[#FBBE21] border-[#FBBE21]/30'
              }`}>
                Education
              </span>
            </div>

            <p className={`text-sm font-semibold ${isLight ? 'text-[#172033]' : 'text-slate-200'}`}>
              “{FOOTER_CONTENT.tagline}”
            </p>

            <p className={`text-xs leading-relaxed max-w-sm ${isLight ? 'text-[#5B6475]' : 'text-slate-400'}`}>
              {FOOTER_CONTENT.description}
            </p>

            <div className="pt-2">
              <button
                id="footer-eye-opener-pill-btn"
                onClick={onOpenReservation}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all border ${
                  isLight 
                    ? 'bg-[#FBBE21] hover:bg-[#f3b516] text-[#172B68] border-[#FBBE21] shadow-sm' 
                    : 'bg-[#FBBE21]/20 hover:bg-[#FBBE21]/30 text-[#FBBE21] border-[#FBBE21]/40'
                }`}
              >
                <span>Introductory ₹99 Eye-Opener</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className={`text-xs font-bold font-display ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {FOOTER_CONTENT.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    id={`footer-quicklink-${idx}`}
                    onClick={() => onNavigate(link.page as PageType, link.section)}
                    className={`transition-colors text-left ${
                      isLight ? 'text-[#5B6475] hover:text-[#172033]' : 'hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Journey */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`text-xs font-bold font-display ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              Learning Journey
            </h4>
            <ul className="space-y-2">
              {FOOTER_CONTENT.learningJourney.map((stage, idx) => (
                <li key={idx}>
                  <button
                    id={`footer-stage-link-${idx}`}
                    onClick={() => onNavigate('saga', 'curriculum')}
                    className={`transition-colors text-left flex items-center gap-1.5 ${
                      isLight ? 'text-[#5B6475] hover:text-[#172033]' : 'hover:text-white'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#243E8A] dark:bg-[#FBBE21]" />
                    <span>{stage.label}</span>
                  </button>
                </li>
              ))}
              <li className={`pt-1 text-[11px] font-mono font-semibold ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`}>
                13 Weeks Sequential Program
              </li>
            </ul>
          </div>

          {/* Explore & Legal Transparency */}
          <div className="lg:col-span-3 space-y-5">
            <div className="space-y-3">
              <h4 className={`text-xs font-bold font-display ${
                isLight ? 'text-[#172033]' : 'text-white'
              }`}>
                Governance & Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onNavigate('disclaimer')}
                    className={`transition-colors ${isLight ? 'text-[#5B6475] hover:text-[#172033]' : 'hover:text-white'}`}
                  >
                    Disclaimer
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('terms')}
                    className={`transition-colors ${isLight ? 'text-[#5B6475] hover:text-[#172033]' : 'hover:text-white'}`}
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('privacy')}
                    className={`transition-colors ${isLight ? 'text-[#5B6475] hover:text-[#172033]' : 'hover:text-white'}`}
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('refund')}
                    className={`transition-colors ${isLight ? 'text-[#5B6475] hover:text-[#172033]' : 'hover:text-white'}`}
                  >
                    Refund Policy
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className={`text-xs font-bold font-display ${
                isLight ? 'text-[#172033]' : 'text-white'
              }`}>
                Connect
              </h4>
              <div className="space-y-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className={`flex items-center gap-2 transition-colors ${
                    isLight ? 'text-[#5B6475] hover:text-[#172033]' : 'hover:text-white'
                  }`}
                >
                  <Mail className={`w-4 h-4 ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`} />
                  <span>arthyx.marketing@gmail.com</span>
                </button>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 transition-colors ${
                    isLight ? 'text-[#5B6475] hover:text-[#172033]' : 'hover:text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp Assistance</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Legal Notice */}
        <div className="pt-8 space-y-4">
          <div className={`p-4 rounded-xl border flex items-start gap-3 ${
            isLight ? 'bg-white border-[#DDE2EC] shadow-sm' : 'bg-white/[0.02] border-white/5'
          }`}>
            <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div className={`text-[11px] leading-relaxed ${isLight ? 'text-[#5B6475]' : 'text-slate-400'}`}>
              <strong className={isLight ? 'text-[#172033]' : 'text-slate-300'}>Disclaimer: </strong>
              {FOOTER_CONTENT.disclaimer}
            </div>
          </div>

          <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] ${
            isLight ? 'text-[#5B6475]' : 'text-slate-500'
          }`}>
            <div>
              {FOOTER_CONTENT.copyright}
            </div>
            <div className="flex items-center gap-4">
              <span>Financial Market Education</span>
              <span>•</span>
              <span>Structured Pedagogy</span>
              <span>•</span>
              <span>Independent Decision-Making</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
