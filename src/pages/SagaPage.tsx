import { useTheme } from '../context/ThemeContext';
import { EXPERIENCE_BLOCKS, AUDIENCE_PROFILES, SAGA_COURSE_FAQS } from '../data/content';
import { CurriculumJourney } from '../components/CurriculumJourney';
import { TrainerSlider } from '../components/TrainerSlider';
import { FlexibleStoriesSection } from '../components/FlexibleStoriesSection';
import { FaqAccordion } from '../components/FaqAccordion';
import { EyeOpenerCta } from '../components/EyeOpenerCta';
import { 
  Video, 
  LineChart, 
  HelpCircle, 
  Clock, 
  BookOpen, 
  Users, 
  Compass, 
  Briefcase, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Award,
  Activity,
  CheckCircle2
} from 'lucide-react';

interface SagaPageProps {
  onOpenReservation: () => void;
  onNavigateToHome: () => void;
}

export function SagaPage({ onOpenReservation, onNavigateToHome }: SagaPageProps) {
  const { isLight } = useTheme();

  const getExperienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video': return <Video className={`w-5 h-5 ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`} />;
      case 'LineChart': return <LineChart className={`w-5 h-5 ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`} />;
      case 'HelpCircle': return <HelpCircle className={`w-5 h-5 ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`} />;
      case 'Clock': return <Clock className={`w-5 h-5 ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`} />;
      case 'BookOpen': return <BookOpen className={`w-5 h-5 ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`} />;
      case 'Users': return <Users className={`w-5 h-5 ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`} />;
      default: return <Sparkles className={`w-5 h-5 ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`} />;
    }
  };

  const getAudienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className={`w-5 h-5 ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`} />;
      case 'Briefcase': return <Briefcase className={`w-5 h-5 ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`} />;
      case 'TrendingUp': return <TrendingUp className={`w-5 h-5 ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`} />;
      case 'Layers': return <Layers className={`w-5 h-5 ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`} />;
      default: return <Users className={`w-5 h-5 ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`} />;
    }
  };

  const scrollToCurriculum = () => {
    const el = document.getElementById('curriculum-outline');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {/* 1. COURSE HERO */}
      <section id="course-hero" className={`relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden transition-colors ${
        isLight ? 'bg-[#F8F9FC]' : 'bg-gradient-to-b from-[#070b14] via-[#09101f] to-[#080d19]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border ${
              isLight 
                ? 'bg-[#243E8A]/10 border-[#243E8A]/20 text-[#243E8A]' 
                : 'bg-[#FBBE21]/15 border-[#FBBE21]/40 text-[#FBBE21]'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-[#FBBE21]" />
              <span>Flagship 13-Week Programme</span>
            </div>

            <h1 className={`text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight leading-[1.1] ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              Four Stages. <span className="text-[#243E8A] dark:text-[#FBBE21]">One Institutional Method</span>.
            </h1>

            <div className={`space-y-3 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed ${
              isLight ? 'text-[#5B6475]' : 'text-slate-200'
            }`}>
              <p>
                SAGA is Arthyx's progressive market education journey, structured from first principles through advanced wave geometry, derivative risk hedging, and live trade journal audits.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                id="saga-hero-explore-btn"
                onClick={scrollToCurriculum}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#243E8A] hover:bg-[#172B68] shadow-xl shadow-[#243E8A]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Explore The SAGA Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="saga-hero-reserve-btn"
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold bg-[#FBBE21] hover:bg-[#f3b516] text-[#172B68] shadow-lg shadow-[#FBBE21]/25 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#172B68]" />
                <span>Reserve ₹99 Orientation</span>
              </button>
            </div>

            {/* Quick SAGA Highlights Bar */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
              <div className={`p-3.5 rounded-xl border ${
                isLight ? 'bg-white border-[#DDE2EC] shadow-sm' : 'bg-white/[0.03] border-white/5'
              }`}>
                <div className={`text-xs ${isLight ? 'text-[#5B6475]' : 'text-slate-400'}`}>Total Duration</div>
                <div className={`text-base font-bold font-mono ${isLight ? 'text-[#172033]' : 'text-white'}`}>13 Weeks</div>
              </div>
              <div className={`p-3.5 rounded-xl border ${
                isLight ? 'bg-white border-[#DDE2EC] shadow-sm' : 'bg-white/[0.03] border-white/5'
              }`}>
                <div className={`text-xs ${isLight ? 'text-[#5B6475]' : 'text-slate-400'}`}>Progression</div>
                <div className={`text-base font-bold font-mono ${isLight ? 'text-[#172033]' : 'text-white'}`}>4 Sequential Stages</div>
              </div>
              <div className={`p-3.5 rounded-xl border ${
                isLight ? 'bg-white border-[#DDE2EC] shadow-sm' : 'bg-white/[0.03] border-white/5'
              }`}>
                <div className={`text-xs ${isLight ? 'text-[#5B6475]' : 'text-slate-400'}`}>Learning Format</div>
                <div className={`text-base font-bold font-mono ${isLight ? 'text-[#172033]' : 'text-white'}`}>Live + 6 Mo LMS Access</div>
              </div>
              <div className={`p-3.5 rounded-xl border ${
                isLight ? 'bg-white border-[#DDE2EC] shadow-sm' : 'bg-white/[0.03] border-white/5'
              }`}>
                <div className={`text-xs ${isLight ? 'text-[#5B6475]' : 'text-slate-400'}`}>Educational Focus</div>
                <div className={`text-base font-bold font-mono ${isLight ? 'text-[#172033]' : 'text-white'}`}>Method &gt; Speculation</div>
              </div>
            </div>

            {/* SAGA Interactive Learning Visual Card */}
            <div className="mt-8 rounded-3xl border overflow-hidden relative shadow-2xl transition-all border-[#DDE2EC]">
              <div className="relative h-56 sm:h-72 md:h-80 w-full">
                <img
                  src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1600&q=80"
                  alt="Modern Trading Desk with Multi-Screen Technical Analysis"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 ${
                  isLight 
                    ? 'bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20' 
                    : 'bg-gradient-to-t from-[#060a12]/95 via-[#060a12]/60 to-transparent'
                }`} />

                {/* Overlaid Badges & Callout Content */}
                <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-between text-left">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-[#FBBE21]/60 text-white text-xs font-bold shadow-lg">
                      <Activity className="w-3.5 h-3.5 text-[#FBBE21]" />
                      <span>Live Market Immersion & Practical Drills</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Zero Speculation • Risk Defined</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-2xl font-bold font-display text-white tracking-tight">
                      Master Market Geometry, Wave Impulses & Option Hedging
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                      Transform scattered technical indicators into a unified institutional system. From candlestick structures to multi-leg option defense.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE EXPERIENCE (WHAT'S INCLUDED) */}
      <section id="experience" className={`py-20 sm:py-28 border-t transition-colors ${
        isLight ? 'bg-white border-[#DDE2EC]' : 'bg-[#070b14] border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-white/5 text-[#FBBE21] border-white/10'
            }`}>
              What's Included
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              Learning Engineered for Real Market Independence
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
              SAGA combines live mentor walkthroughs, structured assignments, post-trade audits, and focused learner support.
            </p>
          </div>

          {/* 6 Feature Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERIENCE_BLOCKS.map((block, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl border transition-all shadow-sm space-y-3 group ${
                  isLight 
                    ? 'bg-[#F8F9FC] border-[#DDE2EC] hover:border-[#243E8A]/40 shadow-slate-200/50 hover:shadow-lg' 
                    : 'bg-gradient-to-b from-[#0d1424] to-[#080d19] border-white/10 hover:border-[#243E8A]/40 shadow-xl'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center group-hover:scale-105 transition-transform ${
                  isLight ? 'bg-white border-[#DDE2EC]' : 'bg-[#243E8A]/20 border-[#243E8A]/30'
                }`}>
                  {getExperienceIcon(block.iconName)}
                </div>
                <h3 className={`text-lg font-bold font-display transition-colors ${
                  isLight ? 'text-[#172033] group-hover:text-[#243E8A]' : 'text-white group-hover:text-[#FBBE21]'
                }`}>
                  {block.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUR STAGES (CURRICULUM OUTLINE) */}
      <section id="curriculum-outline" className={`py-20 sm:py-28 border-t transition-colors ${
        isLight ? 'bg-[#F8F9FC] border-[#DDE2EC]' : 'bg-[#090e1a] border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-white/5 text-[#FBBE21] border-white/10'
            }`}>
              Curriculum Outline
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              Every Stage Has A Defined Purpose
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
              Move from foundational chart vocabulary to advanced wave structures, non-directional option Greeks, and audit routines.
            </p>
          </div>

          <CurriculumJourney 
            isCoursePage={true} 
            onOpenReservation={onOpenReservation}
          />
        </div>
      </section>

      {/* 4. WHO THIS IS FOR */}
      <section id="who-this-is-for" className={`py-20 sm:py-28 border-t transition-colors ${
        isLight ? 'bg-white border-[#DDE2EC]' : 'bg-[#070b14] border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-[#FBBE21]/15 text-[#FBBE21] border-[#FBBE21]/30'
            }`}>
              Target Audience
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              Built For Diverse Starting Points
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
              Whether you are an engineer seeking analytical rigor or an existing trader untangling scattered habits.
            </p>
          </div>

          {/* 4 Audience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {AUDIENCE_PROFILES.map((aud, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl border transition-all shadow-sm space-y-3 group ${
                  isLight 
                    ? 'bg-[#F8F9FC] border-[#DDE2EC] hover:border-[#243E8A]/40 shadow-slate-200/50 hover:shadow-lg' 
                    : 'bg-gradient-to-b from-[#0d1424] to-[#080d19] border-white/10 hover:border-[#243E8A]/40 shadow-xl'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
                    isLight ? 'bg-white border-[#DDE2EC]' : 'bg-[#243E8A]/20 border-[#243E8A]/30'
                  }`}>
                    {getAudienceIcon(aud.iconName)}
                  </div>
                  <h3 className={`text-lg font-bold font-display transition-colors ${
                    isLight ? 'text-[#172033] group-hover:text-[#243E8A]' : 'text-white group-hover:text-[#FBBE21]'
                  }`}>
                    {aud.title}
                  </h3>
                </div>

                <p className={`text-sm leading-relaxed ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
                  {aud.description}
                </p>

                <div className={`p-2.5 rounded-lg border text-xs ${
                  isLight ? 'bg-white border-[#DDE2EC] text-[#5B6475]' : 'bg-white/[0.02] border-white/5 text-slate-400'
                }`}>
                  <span className={`font-semibold ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`}>How SAGA Fits: </span>
                  {aud.suitability}
                </div>
              </div>
            ))}
          </div>

          {/* Supporting statement */}
          <div className={`p-4 rounded-xl border max-w-xl mx-auto text-center ${
            isLight ? 'bg-[#F8F9FC] border-[#DDE2EC] shadow-sm' : 'bg-white/[0.02] border-white/10'
          }`}>
            <p className={`text-xs sm:text-sm font-semibold ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`}>
              “No finance degree or prior trading experience is required to begin.”
            </p>
          </div>
        </div>
      </section>

      {/* 5. TRAINERS (Interactive 4-Photo Manual Selector) */}
      <section id="trainers" className={`py-20 sm:py-28 border-t transition-colors ${
        isLight ? 'bg-[#F8F9FC] border-[#DDE2EC]' : 'bg-[#090e1a] border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-white/5 text-[#FBBE21] border-white/10'
            }`}>
              Faculty Mentors
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              Learn From Seasoned Practitioners
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
              Institutional banking, proprietary trading, and NISM regulatory excellence guiding your education.
            </p>
          </div>

          <TrainerSlider />
        </div>
      </section>

      {/* 6. FLEXIBLE STORIES & REVIEWS */}
      <section id="course-stories" className={`py-20 sm:py-28 border-t transition-colors ${
        isLight ? 'bg-white border-[#DDE2EC]' : 'bg-[#070b14] border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-white/5 text-[#FBBE21] border-white/10'
            }`}>
              Stories of Change
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              Different Starting Points. A Shared Pursuit Of Method.
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
              Watch learner video reflections, read Google reviews, and explore verified cohort audits.
            </p>
          </div>

          <FlexibleStoriesSection />
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="course-faq" className={`py-20 sm:py-28 border-t transition-colors ${
        isLight ? 'bg-[#F8F9FC] border-[#DDE2EC]' : 'bg-[#090e1a] border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-[#FBBE21]/15 text-[#FBBE21] border-[#FBBE21]/30'
            }`}>
              Frequently Asked Questions
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              SAGA Programme Questions
            </h2>
            <p className={`text-sm sm:text-base ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
              Clear details on timing, recordings, live sessions, prerequisites, and curriculum coverage.
            </p>
          </div>

          <FaqAccordion items={SAGA_COURSE_FAQS} />
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <EyeOpenerCta
        heading="Start with the SAGA journey."
        supportingLine="You do not need to know everything before you begin. You need a structured place to begin learning."
        primaryCtaText="Explore the SAGA Journey →"
        secondaryCtaText="Reserve Your ₹99 Seat →"
        onPrimaryClick={scrollToCurriculum}
        onSecondaryClick={onOpenReservation}
        variant="saga"
      />
    </div>
  );
}
