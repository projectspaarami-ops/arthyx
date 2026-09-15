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
            ? 'bg-gradient-to-br from-[#172B68] via-[#1b3172] to-[#243E8A] text-white border-[#243E8A]/50 shadow-2xl shadow-[#172B68]/20' 
            : 'bg-gradient-to-b from-[#172B68] via-[#0f1b3d] to-[#09101d] border-[#243E8A]/40 shadow-black/80'
        }`}>
          {/* Architectural radial lighting */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FBBE21]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            {/* Low-pressure badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border bg-white/10 border-white/20 text-[#FBBE21]">
              <Sparkles className="w-3.5 h-3.5 text-[#FBBE21]" />
              <span>Low-Barrier Orientation Session</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight leading-tight text-white">
              {heading}
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg leading-relaxed font-normal text-slate-200">
              {supportingLine}
            </p>

            {/* What is included in the orientation */}
            <div className="pt-2 pb-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="p-3 rounded-xl border flex items-start gap-2.5 bg-white/10 border-white/15 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#FBBE21]" />
                <span className="text-xs text-slate-100">
                  Live 90-minute structured market orientation
                </span>
              </div>
              <div className="p-3 rounded-xl border flex items-start gap-2.5 bg-white/10 border-white/15 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-100">
                  Zero tips, zero hype — pure process clarity
                </span>
              </div>
              <div className="p-3 rounded-xl border flex items-start gap-2.5 bg-white/10 border-white/15 backdrop-blur-sm">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-100">
                  Interactive live Q&A with Arthyx founders
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                id="eye-opener-cta-primary-btn"
                onClick={onPrimaryClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold text-[#172B68] bg-[#FBBE21] hover:bg-[#f3b516] shadow-xl shadow-[#FBBE21]/30 hover:shadow-[#FBBE21]/45 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {secondaryCtaText && onSecondaryClick && (
                <button
                  id="eye-opener-cta-secondary-btn"
                  onClick={onSecondaryClick}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm sm:text-base font-semibold border transition-all flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  <span>{secondaryCtaText}</span>
                </button>
              )}
            </div>

            <p className="text-[11px] text-slate-300">
              ₹99 token fee ensures dedicated attendee commitment • Instant access details sent via WhatsApp & Email
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
