import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { RESEARCH_PAGE_CONTENT } from '../data/content';
import { ExternalLink, ShieldCheck, ArrowRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface ResearchPageProps {
  onNavigateToCourse: () => void;
  onOpenReservation: () => void;
}

export function ResearchPage({ onNavigateToCourse, onOpenReservation }: ResearchPageProps) {
  const { isLight } = useTheme();
  const [showPortalNotice, setShowPortalNotice] = useState(false);

  return (
    <div className="w-full pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* 1. Header */}
        <div className="text-center space-y-6">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm border ${
            isLight 
              ? 'bg-[#fdf6e9] border-[#e9d5a1] text-[#966b24]' 
              : 'bg-[#c99a4e]/10 border-[#c99a4e]/30 text-[#e5b869]'
          }`}>
            <span className="w-2 h-2 rounded-full bg-[#c99a4e]" />
            <span>{RESEARCH_PAGE_CONTENT.title}</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight ${
            isLight ? 'text-slate-950' : 'text-white'
          }`}>
            {RESEARCH_PAGE_CONTENT.headline}
          </h1>

          <div className={`space-y-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}>
            <p>{RESEARCH_PAGE_CONTENT.body1}</p>
            <p>{RESEARCH_PAGE_CONTENT.body2}</p>
            <p className="font-medium text-slate-800 dark:text-slate-200">
              {RESEARCH_PAGE_CONTENT.body3}
            </p>
          </div>

          {/* Primary CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowPortalNotice(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-[#e5b869] via-[#c99a4e] to-[#ba8a3e] hover:from-[#f3c87e] hover:to-[#c99a4e] shadow-xl shadow-[#c99a4e]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>{RESEARCH_PAGE_CONTENT.ctaText}</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateToCourse}
              className={`w-full sm:w-auto px-6 py-4 rounded-xl text-base font-semibold border ${
                isLight ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300' : 'bg-white/5 text-white border-white/10'
              }`}
            >
              <span>Back to Education Courses</span>
            </button>
          </div>
        </div>

        {/* 2. Structured Separation Card */}
        <div className={`p-8 rounded-3xl border space-y-5 ${
          isLight ? 'bg-white border-slate-200 shadow-lg' : 'bg-[#0f172a] border-white/10'
        }`}>
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl ${isLight ? 'bg-[#fdf6e9] text-[#966b24]' : 'bg-white/5 text-[#c99a4e]'}`}>
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className={`text-lg font-bold font-display ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Education & Research Architecture
              </h3>
              <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                {RESEARCH_PAGE_CONTENT.notice}
              </p>
            </div>
          </div>

          <div className={`pt-4 border-t grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs ${
            isLight ? 'border-slate-100 text-slate-600' : 'border-white/5 text-slate-400'
          }`}>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Dedicated Research Website & Disclosures</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Independent Educational Curriculum</span>
            </div>
          </div>
        </div>

        {/* Modal notice for portal redirect */}
        {showPortalNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <div className={`max-w-md w-full rounded-2xl border p-6 space-y-4 ${
              isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-[#0f172a] border-white/10 text-white'
            }`}>
              <h3 className="text-xl font-bold font-display">Dedicated Research Portal</h3>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-300">
                You are accessing the external Arthyx Research & Advisory services directory. Research services operate with independent regulatory disclosures and dedicated agreements.
              </p>
              <div className="pt-2 flex justify-end gap-3">
                <button
                  onClick={() => setShowPortalNotice(false)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                    isLight ? 'bg-slate-100 text-slate-700' : 'bg-white/10 text-slate-300'
                  }`}
                >
                  Close
                </button>
                <a
                  href="mailto:arthyx.marketing@gmail.com?subject=Inquiry regarding Research Services"
                  onClick={() => setShowPortalNotice(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-[#c99a4e]"
                >
                  Contact Research Desk
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
