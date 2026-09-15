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
      '#reservation-modal',
      '[data-hide-floating-dock]',
      '.course-cta-anchor'
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

    const intersectingElements = new Set<Element>();

    // Use IntersectionObserver to detect when any trigger element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingElements.add(entry.target);
          } else {
            intersectingElements.delete(entry.target);
          }
        });
        setIsVisible(intersectingElements.size === 0);
      },
      {
        root: null,
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px'
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
            ? 'bg-white/95 border-[#DDE2EC] shadow-slate-900/10 text-[#172033]'
            : 'bg-[#172B68]/95 border-[#243E8A]/40 shadow-black/80 text-white'
        }`}
      >
        {/* Left: Course Identity Badge */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#243E8A] to-[#FBBE21] p-0.5 flex items-center justify-center shrink-0 shadow-sm">
            <div className={`w-full h-full rounded-full flex items-center justify-center ${
              isLight ? 'bg-white text-[#172033]' : 'bg-[#172B68] text-[#FBBE21]'
            }`}>
              <Layers className="w-4 h-4 text-[#243E8A] dark:text-[#FBBE21]" />
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold font-display tracking-tight">
                SAGA™ 13-Week Journey
              </span>
              <span className={`text-[10px] font-semibold px-2 py-0.2 rounded-full border ${
                isLight 
                  ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' 
                  : 'bg-[#FBBE21]/20 text-[#FBBE21] border-[#FBBE21]/30'
              }`}>
                Live Mentorship
              </span>
            </div>
            <p className={`text-[11px] leading-tight ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
              4 Sequential Stages • Trade Journal Audits • Strictly Non-Advisory
            </p>
          </div>

          {/* Mobile brief title */}
          <div className="sm:hidden">
            <div className="text-xs font-bold font-display leading-tight">
              SAGA™ 13-Week
            </div>
            <div className={`text-[10px] leading-tight ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
              4 Progressive Stages
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-6 w-[1px] ${isLight ? 'bg-[#DDE2EC]' : 'bg-white/15'}`} />

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {!isCoursePage && (
            <button
              id="dock-course-explore-btn"
              onClick={onNavigateToCourse}
              className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                isLight
                  ? 'bg-[#F8F9FC] hover:bg-slate-100 text-[#172033] border-[#DDE2EC]'
                  : 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/10'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[#243E8A] dark:text-[#FBBE21]" />
              <span>Syllabus</span>
            </button>
          )}

          <button
            id="dock-course-reserve-btn"
            onClick={onOpenReservation}
            className="px-4 py-2 rounded-full text-xs font-bold text-[#172B68] bg-[#FBBE21] hover:bg-[#f3b516] active:scale-[0.98] shadow-md shadow-[#FBBE21]/25 flex items-center gap-1.5 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#172B68]" />
            <span>Reserve ₹99 Seat</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
