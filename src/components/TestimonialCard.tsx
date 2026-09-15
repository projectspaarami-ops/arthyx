import { useTheme } from '../context/ThemeContext';
import { Testimonial } from '../types';
import { Quote, UserCheck, ArrowUpRight } from 'lucide-react';

interface TestimonialCardProps {
  item: Testimonial;
}

export function TestimonialCard({ item }: TestimonialCardProps) {
  const { isLight } = useTheme();

  return (
    <div className={`p-6 sm:p-7 rounded-2xl border transition-all flex flex-col justify-between h-full group ${
      isLight 
        ? 'bg-white border-slate-200 hover:border-[#c99a4e]/60 shadow-lg shadow-slate-200/40 hover:shadow-xl' 
        : 'bg-gradient-to-b from-[#0f172a] to-[#0a0f1c] border-white/10 hover:border-[#c99a4e]/40 shadow-xl hover:shadow-black/50'
    }`}>
      <div>
        {/* Top Header with Verified Placeholder Marker */}
        <div className={`flex items-center justify-between gap-2 mb-4 pb-3 border-b ${
          isLight ? 'border-slate-100' : 'border-white/5'
        }`}>
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center border ${
              isLight 
                ? 'bg-[#fdf6e9] border-[#e9d5a1] text-[#966b24]' 
                : 'bg-[#c99a4e]/15 border-[#c99a4e]/30 text-[#c99a4e]'
            }`}>
              <UserCheck className="w-3.5 h-3.5" />
            </div>
            <span className={`text-[11px] font-mono font-medium ${isLight ? 'text-[#966b24]' : 'text-[#e5b869]'}`}>
              {item.stageCompleted}
            </span>
          </div>
          <Quote className={`w-4 h-4 transition-colors ${
            isLight ? 'text-slate-300 group-hover:text-[#c99a4e]' : 'text-slate-600 group-hover:text-[#c99a4e]'
          }`} />
        </div>

        {/* Quote Content */}
        <p className={`text-sm sm:text-base leading-relaxed italic mb-5 ${
          isLight ? 'text-slate-800' : 'text-slate-200'
        }`}>
          “{item.quote}”
        </p>
      </div>

      {/* Footer & Proof Point Placeholder Area */}
      <div className={`space-y-3 pt-3 border-t ${isLight ? 'border-slate-100' : 'border-white/5'}`}>
        <div className={`p-2.5 rounded-lg border ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.02] border-white/5'
        }`}>
          <div className={`text-[10px] uppercase font-mono tracking-wider font-semibold mb-0.5 ${
            isLight ? 'text-[#966b24]' : 'text-[#c99a4e]'
          }`}>
            Key Perspective Shift:
          </div>
          <div className={`text-xs leading-snug ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
            {item.keyShift}
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div>
            <div className={`text-xs font-bold font-mono ${isLight ? 'text-slate-900' : 'text-white'}`}>
              {item.namePlaceholder}
            </div>
            <div className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              {item.backgroundPlaceholder}
            </div>
          </div>
          <span className={`text-[10px] px-2 py-0.5 rounded border ${
            isLight ? 'bg-slate-100 text-slate-600 border-slate-200' : 'bg-white/5 text-slate-400 border-white/5'
          }`}>
            Verified Cohort
          </span>
        </div>
      </div>
    </div>
  );
}

