import { useTheme } from '../context/ThemeContext';
import { ABOUT_US_CONTENT } from '../data/content';
import { ArrowRight, BookOpen, Compass, ShieldCheck, Target, Clock, Award, Lightbulb, Users, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigateToCourse: () => void;
  onOpenReservation: () => void;
}

export function AboutPage({ onNavigateToCourse, onOpenReservation }: AboutPageProps) {
  const { isLight } = useTheme();

  return (
    <div className="w-full pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* 1. Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm border ${
            isLight 
              ? 'bg-[#243E8A]/10 border-[#243E8A]/20 text-[#243E8A]' 
              : 'bg-[#FBBE21]/10 border-[#FBBE21]/30 text-[#FBBE21]'
          }`}>
            <span className="w-2 h-2 rounded-full bg-[#FBBE21]" />
            <span>{ABOUT_US_CONTENT.title}</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.15] ${
            isLight ? 'text-[#172033]' : 'text-white'
          }`}>
            {ABOUT_US_CONTENT.headline}
          </h1>

          <div className={`space-y-4 text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-[#5B6475]' : 'text-slate-300'
          }`}>
            {ABOUT_US_CONTENT.introParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenReservation}
              className="px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-[#172B68] bg-[#FBBE21] hover:bg-[#f3b516] shadow-xl shadow-[#FBBE21]/20 transition-all active:scale-[0.98] flex items-center gap-2 cursor-pointer"
            >
              <span>Start Your Learning Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateToCourse}
              className={`px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold transition-all flex items-center gap-2 border cursor-pointer ${
                isLight 
                  ? 'bg-white hover:bg-[#F8F9FC] text-[#172033] border-[#DDE2EC] shadow-sm' 
                  : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#243E8A] dark:text-[#FBBE21]" />
              <span>Explore Curriculum</span>
            </button>
          </div>
        </div>

        {/* 2. Why Arthyx Education */}
        <div className={`p-8 sm:p-12 rounded-3xl border transition-all ${
          isLight 
            ? 'bg-white border-[#DDE2EC] shadow-sm' 
            : 'bg-gradient-to-b from-[#0f172a] to-[#090d18] border-white/10 shadow-2xl'
        }`}>
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-white/5 text-[#FBBE21] border-white/10'
            }`}>
              Our Philosophy
            </span>
            <h2 className={`text-2xl sm:text-3xl font-bold font-display ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              {ABOUT_US_CONTENT.whyArthyx.heading}
            </h2>
            <div className={`space-y-4 text-base leading-relaxed ${
              isLight ? 'text-[#5B6475]' : 'text-slate-300'
            }`}>
              {ABOUT_US_CONTENT.whyArthyx.body.split('\n\n').map((chunk, idx) => (
                <p key={idx}>{chunk}</p>
              ))}
            </div>
          </div>
        </div>

        {/* 3. What We Believe In */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-white/5 text-[#FBBE21] border-white/10'
            }`}>
              Foundational Values
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              What We Believe in
            </h2>
            <p className={`text-base ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
              Six core principles guiding our educational methodology and learner mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_US_CONTENT.whatWeBelieveIn.map((item, idx) => (
              <div
                key={idx}
                className={`p-7 rounded-2xl border transition-all space-y-3.5 group ${
                  isLight 
                    ? 'bg-white border-[#DDE2EC] hover:border-[#243E8A]/50 shadow-sm hover:shadow-md' 
                    : 'bg-[#0f172a] border-white/10 hover:border-[#FBBE21]/40 shadow-xl'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                    isLight ? 'bg-[#F8F9FC] text-[#243E8A] border-[#DDE2EC]' : 'bg-white/5 text-[#FBBE21] border-white/10'
                  }`}>
                    0{idx + 1}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isLight ? 'bg-[#243E8A]/10 text-[#243E8A]' : 'bg-white/5 text-[#FBBE21]'
                  }`}>
                    {idx === 0 && <Compass className="w-4 h-4" />}
                    {idx === 1 && <Lightbulb className="w-4 h-4" />}
                    {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                    {idx === 3 && <Target className="w-4 h-4" />}
                    {idx === 4 && <Award className="w-4 h-4" />}
                    {idx === 5 && <Clock className="w-4 h-4" />}
                  </div>
                </div>

                <h3 className={`text-lg font-bold font-display ${
                  isLight ? 'text-[#172033] group-hover:text-[#243E8A]' : 'text-white group-hover:text-[#FBBE21]'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. A Progressive Approach to Learning */}
        <div className={`p-8 sm:p-12 rounded-3xl border transition-all ${
          isLight 
            ? 'bg-white border-[#DDE2EC] shadow-sm' 
            : 'bg-gradient-to-r from-[#0c1220] to-[#080d19] border-white/10'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-white/5 text-[#FBBE21] border-white/10'
              }`}>
                Curriculum Structure
              </span>
              <h2 className={`text-2xl sm:text-3xl font-bold font-display ${
                isLight ? 'text-[#172033]' : 'text-white'
              }`}>
                {ABOUT_US_CONTENT.progressiveApproach.title}
              </h2>
              <div className={`space-y-3 text-sm sm:text-base leading-relaxed ${
                isLight ? 'text-[#5B6475]' : 'text-slate-300'
              }`}>
                {ABOUT_US_CONTENT.progressiveApproach.description.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="pt-2">
                <button
                  onClick={onNavigateToCourse}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#243E8A] dark:text-[#FBBE21] hover:underline cursor-pointer"
                >
                  <span>Explore the SAGA Journey Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3.5">
              {[
                { stage: 'Stage 01', name: 'Launchpad', focus: 'Technical Analysis Foundations' },
                { stage: 'Stage 02', name: 'Velocity', focus: 'Elliott Wave & Pattern Geometry' },
                { stage: 'Stage 03', name: 'Orbit', focus: 'Futures, Options & Risk Architecture' },
                { stage: 'Stage 04', name: 'Cruise Control', focus: 'Practical Review & Execution' },
              ].map((st, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border ${
                    isLight 
                      ? 'bg-[#F8F9FC] border-[#DDE2EC] text-[#172033]' 
                      : 'bg-white/[0.03] border-white/10 text-white'
                  }`}
                >
                  <span className="text-[11px] font-mono text-[#243E8A] dark:text-[#FBBE21] font-bold">{st.stage}</span>
                  <div className="font-bold text-base font-display mt-0.5">{st.name}</div>
                  <div className={`text-xs mt-1 ${isLight ? 'text-[#5B6475]' : 'text-slate-400'}`}>{st.focus}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Our Approach (5 Pillars) */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-white/5 text-[#FBBE21] border-white/10'
            }`}>
              Pedagogical Standards
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              Our Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ABOUT_US_CONTENT.ourApproach.map((ap, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all space-y-2.5 ${
                  isLight 
                    ? 'bg-white border-[#DDE2EC] shadow-sm' 
                    : 'bg-[#0f172a] border-white/10'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono ${
                  isLight ? 'bg-[#243E8A]/10 text-[#243E8A]' : 'bg-white/5 text-[#FBBE21]'
                }`}>
                  0{idx + 1}
                </div>
                <h3 className={`font-bold font-display text-base ${isLight ? 'text-[#172033]' : 'text-white'}`}>
                  {ap.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
                  {ap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Our Commitment & Final CTA */}
        <div className={`p-8 sm:p-14 rounded-3xl border text-center relative overflow-hidden ${
          isLight 
            ? 'bg-gradient-to-b from-[#F8F9FC] to-white border-[#DDE2EC] shadow-sm' 
            : 'bg-gradient-to-b from-[#162035] via-[#0f172a] to-[#080d1a] border-white/10 shadow-2xl'
        }`}>
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-white/5 text-[#FBBE21] border-white/10'
            }`}>
              {ABOUT_US_CONTENT.commitment.title}
            </span>

            <div className={`space-y-3 text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-[#5B6475]' : 'text-slate-200'
            }`}>
              {ABOUT_US_CONTENT.commitment.paragraphs.map((p, i) => (
                <p key={i} className={i === 2 ? `font-bold text-lg ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}` : ''}>
                  {p}
                </p>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-[#172B68] bg-[#FBBE21] hover:bg-[#f3b516] shadow-xl shadow-[#FBBE21]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Your Learning Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateToCourse}
                className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold transition-all flex items-center justify-center gap-2 border cursor-pointer ${
                  isLight 
                    ? 'bg-white hover:bg-[#F8F9FC] text-[#172033] border-[#DDE2EC]' 
                    : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                }`}
              >
                <span>Explore SAGA Programme</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
