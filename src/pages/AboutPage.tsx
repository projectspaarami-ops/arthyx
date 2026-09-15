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
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm border ${
            isLight 
              ? 'bg-[#fdf6e9] border-[#e9d5a1] text-[#966b24]' 
              : 'bg-[#c99a4e]/10 border-[#c99a4e]/30 text-[#e5b869]'
          }`}>
            <span className="w-2 h-2 rounded-full bg-[#c99a4e]" />
            <span>{ABOUT_US_CONTENT.title}</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.15] ${
            isLight ? 'text-slate-950' : 'text-white'
          }`}>
            {ABOUT_US_CONTENT.headline}
          </h1>

          <div className={`space-y-4 text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}>
            {ABOUT_US_CONTENT.introParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenReservation}
              className="px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-[#e5b869] via-[#c99a4e] to-[#ba8a3e] hover:from-[#f3c87e] hover:to-[#c99a4e] shadow-xl shadow-[#c99a4e]/20 transition-all active:scale-[0.98] flex items-center gap-2"
            >
              <span>Start Your Learning Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateToCourse}
              className={`px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold transition-all flex items-center gap-2 border ${
                isLight 
                  ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm' 
                  : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#c99a4e]" />
              <span>Explore Curriculum</span>
            </button>
          </div>
        </div>

        {/* 2. Why Arthyx Education */}
        <div className={`p-8 sm:p-12 rounded-3xl border transition-all ${
          isLight 
            ? 'bg-white border-slate-200 shadow-xl shadow-slate-200/50' 
            : 'bg-gradient-to-b from-[#0f172a] to-[#090d18] border-white/10 shadow-2xl'
        }`}>
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
              isLight ? 'bg-slate-100 text-[#966b24] border-slate-200' : 'bg-white/5 text-[#c99a4e] border-white/10'
            }`}>
              Our Philosophy
            </span>
            <h2 className={`text-2xl sm:text-3xl font-bold font-display ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}>
              {ABOUT_US_CONTENT.whyArthyx.heading}
            </h2>
            <div className={`space-y-4 text-base leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-300'
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
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#fdf6e9] text-[#966b24] border-[#e9d5a1]' : 'bg-white/5 text-[#c99a4e] border-white/10'
            }`}>
              Foundational Values
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}>
              What We Believe in
            </h2>
            <p className={`text-base ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              Six core principles guiding our educational methodology and learner mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_US_CONTENT.whatWeBelieveIn.map((item, idx) => (
              <div
                key={idx}
                className={`p-7 rounded-2xl border transition-all space-y-3.5 group ${
                  isLight 
                    ? 'bg-white border-slate-200 hover:border-[#c99a4e]/50 shadow-sm hover:shadow-lg' 
                    : 'bg-[#0f172a] border-white/10 hover:border-[#c99a4e]/40 shadow-xl'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                    isLight ? 'bg-slate-100 text-[#966b24] border-slate-200' : 'bg-white/5 text-[#c99a4e] border-white/10'
                  }`}>
                    0{idx + 1}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isLight ? 'bg-[#fdf6e9] text-[#966b24]' : 'bg-white/5 text-[#c99a4e]'
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
                  isLight ? 'text-slate-900 group-hover:text-[#966b24]' : 'text-white group-hover:text-[#f3d99d]'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. A Progressive Approach to Learning */}
        <div className={`p-8 sm:p-12 rounded-3xl border transition-all ${
          isLight 
            ? 'bg-[#fcfbf9] border-slate-200 shadow-sm' 
            : 'bg-gradient-to-r from-[#0c1220] to-[#080d19] border-white/10'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                isLight ? 'bg-slate-100 text-[#966b24] border-slate-200' : 'bg-white/5 text-[#c99a4e] border-white/10'
              }`}>
                Curriculum Structure
              </span>
              <h2 className={`text-2xl sm:text-3xl font-bold font-display ${
                isLight ? 'text-slate-950' : 'text-white'
              }`}>
                {ABOUT_US_CONTENT.progressiveApproach.title}
              </h2>
              <div className={`space-y-3 text-sm sm:text-base leading-relaxed ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}>
                {ABOUT_US_CONTENT.progressiveApproach.description.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="pt-2">
                <button
                  onClick={onNavigateToCourse}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#c99a4e] hover:underline"
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
                      ? 'bg-white border-slate-200 text-slate-800' 
                      : 'bg-white/[0.03] border-white/10 text-white'
                  }`}
                >
                  <span className="text-[11px] font-mono text-[#c99a4e] font-semibold">{st.stage}</span>
                  <div className="font-bold text-base font-display mt-0.5">{st.name}</div>
                  <div className={`text-xs mt-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{st.focus}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Our Approach (5 Pillars) */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
              isLight ? 'bg-slate-100 text-[#966b24] border-slate-200' : 'bg-white/5 text-[#c99a4e] border-white/10'
            }`}>
              Pedagogical Standards
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-slate-950' : 'text-white'
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
                    ? 'bg-white border-slate-200 shadow-sm' 
                    : 'bg-[#0f172a] border-white/10'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono ${
                  isLight ? 'bg-[#fdf6e9] text-[#966b24]' : 'bg-white/5 text-[#c99a4e]'
                }`}>
                  0{idx + 1}
                </div>
                <h3 className={`font-bold font-display text-base ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {ap.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  {ap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Our Commitment & Final CTA */}
        <div className={`p-8 sm:p-14 rounded-3xl border text-center relative overflow-hidden ${
          isLight 
            ? 'bg-gradient-to-b from-[#fdfbf6] to-white border-[#e9d5a1]/60 shadow-xl' 
            : 'bg-gradient-to-b from-[#162035] via-[#0f172a] to-[#080d1a] border-[#c99a4e]/30 shadow-2xl'
        }`}>
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#fdf6e9] text-[#966b24] border-[#e9d5a1]' : 'bg-white/5 text-[#c99a4e] border-white/10'
            }`}>
              {ABOUT_US_CONTENT.commitment.title}
            </span>

            <div className={`space-y-3 text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-slate-700' : 'text-slate-200'
            }`}>
              {ABOUT_US_CONTENT.commitment.paragraphs.map((p, i) => (
                <p key={i} className={i === 2 ? `font-semibold text-lg ${isLight ? 'text-[#966b24]' : 'text-[#f3d99d]'}` : ''}>
                  {p}
                </p>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-[#e5b869] via-[#c99a4e] to-[#ba8a3e] hover:from-[#f3c87e] hover:to-[#c99a4e] shadow-xl shadow-[#c99a4e]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Start Your Learning Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateToCourse}
                className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold transition-all flex items-center justify-center gap-2 border ${
                  isLight 
                    ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300' 
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
