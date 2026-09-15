import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { BookOpen, Sparkles, ChevronRight, Layers, ShieldCheck, Clock } from 'lucide-react';

interface FloatingCourseBarProps {
  onNavigateToCourse: () => void;
  onOpenReservation: () => void;
  isCoursePage: boolean;
}

export function FloatingCourseBar({
  onNavigateToCourse,
  onOpenReservation,
  isCoursePage
}: FloatingCourseBarProps) {
  const { isLight } = useTheme();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Select all sections/elements that contain prominent course or reserve CTAs
    const triggerSelectors = [
      '#hero',
      '#course-hero',
      '#curriculum',
      '#curriculum-outline',
      '.eye-opener-cta-section',
      '#final-eyeopener-cta',
      '[data-hide-floating-dock]'
    ];

    const elementsToWatch: Element[] = [];
    triggerSelectors.forEach((sel) => {
      const els = document.querySelectorAll(sel);
      els.forEach((el) => elementsToWatch.push(el));
    });

    if (elementsToWatch.length === 0) {
      setIsVisible(true);
      return;
    }

    // Use IntersectionObserver to detect when any trigger element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        // If ANY monitored element with course / reserve CTA is currently intersecting, hide dock
        const anyVisible = entries.some((entry) => entry.isIntersecting);
        setIsVisible(!anyVisible);
      },
      {
        root: null,
        // Trigger with slight threshold so it hides right as the section enters the screen
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    elementsToWatch.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [isCoursePage]);

  return (
    <aside
      aria-label="Course floating bar"
      className={`fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ease-out ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-full border shadow-2xl backdrop-blur-xl flex items-center gap-3 sm:gap-4 max-w-[94vw] transition-colors ${
          isLight
            ? 'bg-white/95 border-slate-200/90 shadow-slate-900/15 text-slate-900'
            : 'bg-[#0a101f]/95 border-[#c99a4e]/40 shadow-black/80 text-white'
        }`}
      >
        {/* Left: Course Identity Badge */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#c99a4e] to-[#f3d99d] p-0.5 flex items-center justify-center shrink-0 shadow-sm">
            <div className={`w-full h-full rounded-full flex items-center justify-center ${
              isLight ? 'bg-white text-slate-950' : 'bg-[#0a101f] text-[#f3d99d]'
            }`}>
              <Layers className="w-4 h-4 text-[#c99a4e]" />
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold font-display tracking-tight">
                SAGA™ 13-Week Journey
              </span>
              <span className={`text-[10px] font-semibold px-2 py-0.2 rounded-full border ${
                isLight 
                  ? 'bg-[#fdf6e9] text-[#966b24] border-[#e9d5a1]' 
                  : 'bg-[#c99a4e]/20 text-[#f3d99d] border-[#c99a4e]/30'
              }`}>
                Live Mentorship
              </span>
            </div>
            <p className={`text-[11px] leading-tight ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              4 Sequential Stages • Trade Journal Audits • Strictly Non-Advisory
            </p>
          </div>

          {/* Mobile brief title */}
          <div className="sm:hidden">
            <div className="text-xs font-bold font-display leading-tight">
              SAGA™ 13-Week
            </div>
            <div className={`text-[10px] leading-tight ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              4 Progressive Stages
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-6 w-[1px] ${isLight ? 'bg-slate-200' : 'bg-white/15'}`} />

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {!isCoursePage && (
            <button
              id="dock-course-explore-btn"
              onClick={onNavigateToCourse}
              className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                isLight
                  ? 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  : 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/10'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[#c99a4e]" />
              <span>Syllabus</span>
            </button>
          )}

          <button
            id="dock-course-reserve-btn"
            onClick={onOpenReservation}
            className="px-4 py-2 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-[#e5b869] via-[#c99a4e] to-[#ba8a3e] hover:brightness-105 active:scale-[0.98] shadow-md shadow-[#c99a4e]/25 flex items-center gap-1.5 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>Reserve ₹99 Seat</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
