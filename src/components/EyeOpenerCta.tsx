import { useTheme } from '../context/ThemeContext';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

interface EyeOpenerCtaProps {
  heading?: string;
  supportingLine?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryClick: () => void;
  onSecondaryClick?: () => void;
  variant?: 'home' | 'saga';
}

export function EyeOpenerCta({
  heading = "Start with the ₹99 Eye-Opener.",
  supportingLine = "No pressure, just a clearer perspective on financial markets.",
  primaryCtaText = "Reserve Your Seat →",
  secondaryCtaText,
  onPrimaryClick,
  onSecondaryClick,
  variant = 'home'
}: EyeOpenerCtaProps) {
  const { isLight } = useTheme();

  return (
    <section id="final-eyeopener-cta" className="eye-opener-cta-section relative w-full py-16 sm:py-20 overflow-hidden">
      {/* Background container styling */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative rounded-3xl border p-8 sm:p-12 lg:p-16 text-center shadow-2xl overflow-hidden transition-all ${
          isLight 
            ? 'bg-gradient-to-b from-[#fffefc] via-[#fdfbf7] to-[#fbf8f0] border-[#c99a4e]/40 shadow-xl shadow-slate-200/70' 
            : 'bg-gradient-to-b from-[#131d33] via-[#0d1526] to-[#070b14] border-[#c99a4e]/40 shadow-black/80'
        }`}>
          {/* Architectural radial lighting */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#c99a4e]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            {/* Low-pressure badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border ${
              isLight 
                ? 'bg-[#fdf6e9] border-[#e9d5a1] text-[#966b24]' 
                : 'bg-[#c99a4e]/15 border-[#c99a4e]/30 text-[#f3d99d]'
            }`}>
              <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-[#966b24]' : 'text-[#c99a4e]'}`} />
              <span>Low-Barrier Orientation Session</span>
            </div>

            {/* Heading */}
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight leading-tight ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}>
              {heading}
            </h2>

            {/* Supporting Copy */}
            <p className={`text-base sm:text-lg leading-relaxed font-normal ${
              isLight ? 'text-slate-700' : 'text-slate-300'
            }`}>
              {supportingLine}
            </p>

            {/* What is included in the orientation */}
            <div className="pt-2 pb-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-white/[0.03] border-white/5'
              }`}>
                <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? 'text-[#966b24]' : 'text-[#c99a4e]'}`} />
                <span className={`text-xs ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Live 90-minute structured market orientation
                </span>
              </div>
              <div className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-white/[0.03] border-white/5'
              }`}>
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className={`text-xs ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Zero tips, zero hype — pure process clarity
                </span>
              </div>
              <div className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-white/[0.03] border-white/5'
              }`}>
                <Clock className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span className={`text-xs ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Interactive live Q&A with Arthyx founders
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                id="eye-opener-cta-primary-btn"
                onClick={onPrimaryClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-[#e5b869] via-[#c99a4e] to-[#ba8a3e] hover:from-[#f3c87e] hover:to-[#c99a4e] shadow-xl shadow-[#c99a4e]/25 hover:shadow-[#c99a4e]/40 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {secondaryCtaText && onSecondaryClick && (
                <button
                  id="eye-opener-cta-secondary-btn"
                  onClick={onSecondaryClick}
                  className={`w-full sm:w-auto px-7 py-4 rounded-xl text-sm sm:text-base font-semibold border transition-all flex items-center justify-center gap-2 ${
                    isLight 
                      ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm' 
                      : 'bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-white/20'
                  }`}
                >
                  <span>{secondaryCtaText}</span>
                </button>
              )}
            </div>

            <p className={`text-[11px] pt-2 font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Intentionally limited cohort seats to enable meaningful discussions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
