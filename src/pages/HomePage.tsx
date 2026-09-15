import { useTheme } from '../context/ThemeContext';
import { WHO_WE_ARE_CONTENT, WHY_ARTHYX_CONTENT, HOMEPAGE_FAQS } from '../data/content';
import { HeroVisual } from '../components/HeroVisual';
import { CurriculumJourney } from '../components/CurriculumJourney';
import { TrainerSlider } from '../components/TrainerSlider';
import { FlexibleStoriesSection } from '../components/FlexibleStoriesSection';
import { FaqAccordion } from '../components/FaqAccordion';
import { EyeOpenerCta } from '../components/EyeOpenerCta';
import { 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Award, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Compass, 
  LineChart, 
  AlertTriangle, 
  XCircle,
  Activity,
  BarChart2
} from 'lucide-react';

interface HomePageProps {
  onNavigateToCourse: () => void;
  onOpenReservation: () => void;
}

export function HomePage({ onNavigateToCourse, onOpenReservation }: HomePageProps) {
  const { isLight } = useTheme();

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Young, Vibrant, Modern, High-Impact) */}
      <section id="hero" className={`relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden transition-colors ${
        isLight ? 'bg-[#F8F9FC]' : 'bg-gradient-to-b from-[#070b14] via-[#0a101f] to-[#080d19]'
      }`}>
        {/* Subtle background ambient glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-[#243E8A]/15 via-[#FBBE21]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Brand Positioning Tag */}
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm border ${
                isLight 
                  ? 'bg-[#243E8A]/10 border-[#243E8A]/20 text-[#243E8A]' 
                  : 'bg-[#FBBE21]/15 border-[#FBBE21]/40 text-[#FBBE21]'
              }`}>
                <span className="w-2 h-2 rounded-full bg-[#FBBE21] animate-pulse" />
                <span className="tracking-wide">Institutional Financial Market Education</span>
              </div>

              {/* Shorter, High-Impact Punchy Headline */}
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.1] ${
                isLight ? 'text-[#172033]' : 'text-white'
              }`}>
                Trade With <span className="text-[#243E8A] dark:text-[#FBBE21] underline decoration-[#FBBE21]/50 underline-offset-8">Method</span>.<br className="hidden sm:inline" /> Not Guesswork.
              </h1>

              {/* Compact, Clear Supporting Copy */}
              <p className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed ${
                isLight ? 'text-[#5B6475]' : 'text-slate-200'
              }`}>
                A 13-week structured market education framework engineered to build analytical independence, Elliott Wave mastery, and defined risk discipline — with zero speculative stock tips.
              </p>

              {/* Streamlined Course-Focused CTA Hierarchy */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                {/* Primary CTA: Directly Course Focused */}
                <button
                  id="hero-primary-course-cta"
                  onClick={onNavigateToCourse}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#243E8A] hover:bg-[#172B68] shadow-xl shadow-[#243E8A]/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
                >
                  <BookOpen className="w-4 h-4 text-white" />
                  <span>Explore 13-Week SAGA Programme</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Secondary CTA: Distinct ₹99 Orientation */}
                <button
                  id="hero-secondary-eyeopener-cta"
                  onClick={onOpenReservation}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold bg-[#FBBE21] hover:bg-[#f3b516] text-[#172B68] shadow-lg shadow-[#FBBE21]/20 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#172B68]" />
                  <span>Reserve ₹99 Orientation</span>
                </button>
              </div>

              {/* Quick Trust Signals */}
              <div className={`pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs font-medium border-t ${
                isLight ? 'text-[#5B6475] border-[#DDE2EC]' : 'text-slate-300 border-white/10'
              }`}>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strictly Education • Zero Advisory Tips</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Layers className={`w-4 h-4 ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`} />
                  <span>4 Sequential Stages • 13 Weeks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#243E8A] dark:text-sky-400" />
                  <span>10,000+ Learners Trained</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column (Interactive Market Terminal Canvas) */}
            <div className="lg:col-span-5 w-full">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED TRUST & REGULATORY POSITIONING STRIP (SEBI Aligned & Research Support) */}
      <section id="trust-strip" className={`py-6 border-y transition-colors ${
        isLight ? 'bg-white border-[#DDE2EC]' : 'bg-[#090e1a] border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Pillar 1: SEBI Aligned */}
            <div className={`p-4 rounded-xl border flex items-start gap-3 ${
              isLight ? 'bg-[#F8F9FC] border-[#DDE2EC] shadow-sm' : 'bg-white/[0.02] border-white/5'
            }`}>
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-xs font-bold font-display ${isLight ? 'text-[#172033]' : 'text-white'}`}>
                  SEBI-Aligned Pedagogy
                </h4>
                <p className={`text-[11px] leading-snug mt-0.5 ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
                  Strictly educational and non-advisory. Zero stock tips or return projections.
                </p>
              </div>
            </div>

            {/* Pillar 2: Research Support */}
            <div className={`p-4 rounded-xl border flex items-start gap-3 ${
              isLight ? 'bg-[#F8F9FC] border-[#DDE2EC] shadow-sm' : 'bg-white/[0.02] border-white/5'
            }`}>
              <div className="p-2 rounded-lg bg-[#243E8A]/10 text-[#243E8A] dark:text-[#FBBE21] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-xs font-bold font-display ${isLight ? 'text-[#172033]' : 'text-white'}`}>
                  Institutional Research Support
                </h4>
                <p className={`text-[11px] leading-snug mt-0.5 ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
                  Market analysis frameworks curated by NISM-certified professionals.
                </p>
              </div>
            </div>

            {/* Pillar 3: Sequential Journey */}
            <div className={`p-4 rounded-xl border flex items-start gap-3 ${
              isLight ? 'bg-[#F8F9FC] border-[#DDE2EC] shadow-sm' : 'bg-white/[0.02] border-white/5'
            }`}>
              <div className="p-2 rounded-lg bg-[#243E8A]/10 text-[#243E8A] shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-xs font-bold font-display ${isLight ? 'text-[#172033]' : 'text-white'}`}>
                  13-Week SAGA Journey
                </h4>
                <p className={`text-[11px] leading-snug mt-0.5 ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
                  4 progressive stages from foundation to Elliott Wave and Options hedging.
                </p>
              </div>
            </div>

            {/* Pillar 4: Google 4.9 Rating */}
            <div className={`p-4 rounded-xl border flex items-start gap-3 ${
              isLight ? 'bg-[#F8F9FC] border-[#DDE2EC] shadow-sm' : 'bg-white/[0.02] border-white/5'
            }`}>
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-xs font-bold font-display ${isLight ? 'text-[#172033]' : 'text-white'}`}>
                  4.9★ Verified Satisfaction
                </h4>
                <p className={`text-[11px] leading-snug mt-0.5 ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
                  Live doubt-solving, trade log auditing and 6 months recording access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE */}
      <section id="who-we-are" className={`py-20 sm:py-28 border-t transition-colors ${
        isLight ? 'bg-white border-[#DDE2EC]' : 'bg-[#070b14] border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Header & Copy */}
            <div className="lg:col-span-5 space-y-6">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-[#FBBE21]/15 text-[#FBBE21] border-[#FBBE21]/30'
              }`}>
                {WHO_WE_ARE_CONTENT.eyebrow}
              </span>
              <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
                isLight ? 'text-[#172033]' : 'text-white'
              }`}>
                {WHO_WE_ARE_CONTENT.heading}
              </h2>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${
                isLight ? 'text-[#5B6475]' : 'text-slate-200'
              }`}>
                {WHO_WE_ARE_CONTENT.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div className="pt-2">
                <div className={`p-4 rounded-xl text-xs italic border ${
                  isLight 
                    ? 'bg-[#F8F9FC] border-[#243E8A]/20 text-[#243E8A] shadow-sm' 
                    : 'bg-white/[0.03] border-white/10 text-[#FBBE21]'
                }`}>
                  “The objective is not to follow someone else's conviction. It is to develop the knowledge, discipline and perspective to form your own.”
                </div>
              </div>
            </div>

            {/* 3 Distinct Principles */}
            <div className="lg:col-span-7 space-y-4">
              {WHO_WE_ARE_CONTENT.principles.map((p, pIdx) => {
                const principleIcons = [Layers, Compass, ShieldCheck];
                const IconComponent = principleIcons[pIdx % principleIcons.length];

                return (
                  <div
                    key={p.number}
                    className={`p-6 sm:p-7 rounded-2xl border transition-all shadow-sm group ${
                      isLight 
                        ? 'bg-[#F8F9FC] border-[#DDE2EC] hover:border-[#243E8A]/40 shadow-slate-200/50 hover:shadow-lg' 
                        : 'bg-gradient-to-r from-[#0d1424] to-[#090f1b] border-white/10 hover:border-[#243E8A]/40'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isLight 
                          ? 'bg-white border-[#DDE2EC] text-[#243E8A] group-hover:bg-[#243E8A]/10' 
                          : 'bg-white/5 border-white/10 text-[#FBBE21] group-hover:bg-[#FBBE21]/20'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                            isLight ? 'bg-white border border-[#DDE2EC] text-[#243E8A]' : 'bg-white/10 text-slate-400'
                          }`}>
                            Principle {p.number}
                          </span>
                          <h3 className={`text-lg sm:text-xl font-bold font-display transition-colors ${
                            isLight ? 'text-[#172033] group-hover:text-[#243E8A]' : 'text-white group-hover:text-[#FBBE21]'
                          }`}>
                            {p.title}
                          </h3>
                        </div>
                        <p className={`text-sm leading-relaxed ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Institutional Visual Showcase Card */}
          <div className="mt-12 sm:mt-16 rounded-3xl border overflow-hidden relative shadow-2xl transition-all border-[#DDE2EC]">
            <div className="relative h-64 sm:h-80 lg:h-96 w-full">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80"
                alt="Institutional Technical Analysis & Market Screen Setup"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              {/* Gradient Overlay for high-contrast text */}
              <div className={`absolute inset-0 ${
                isLight 
                  ? 'bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20' 
                  : 'bg-gradient-to-t from-[#060a12]/95 via-[#060a12]/60 to-transparent'
              }`} />

              {/* Floating badges & credibility overlay */}
              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-[#FBBE21]/50 text-white text-xs font-semibold shadow-lg">
                    <Activity className="w-3.5 h-3.5 text-[#FBBE21]" />
                    <span>Real-Time Market Depth & Process Discipline</span>
                  </div>
                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SEBI / NISM Compliant Non-Advisory Protocol</span>
                  </div>
                </div>

                <div className="space-y-4 max-w-3xl">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white tracking-tight">
                      Where Technical Rigor Meets Behavioral Discipline
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
                      We dismantle the chaotic noise of speculative tips. Our learning lab trains you to observe structural shifts, dissect risk-to-reward ratios, and audit every trade with institutional composure.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-left">
                      <div className="text-xs font-bold text-[#FBBE21] font-mono">25+ Years</div>
                      <div className="text-[11px] text-slate-300 mt-0.5 font-medium">Combined Market Experience</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-left">
                      <div className="text-xs font-bold text-[#FBBE21] font-mono">10,000+</div>
                      <div className="text-[11px] text-slate-300 mt-0.5 font-medium">Learners Mentored Across India</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-left">
                      <div className="text-xs font-bold text-emerald-400 font-mono">100% Process</div>
                      <div className="text-[11px] text-slate-300 mt-0.5 font-medium">Independent Conviction Built</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURRICULUM / SAGA JOURNEY */}
      <section id="curriculum" className={`py-20 sm:py-28 border-t transition-colors ${
        isLight ? 'bg-[#F8F9FC] border-[#DDE2EC]' : 'bg-[#090e1a] border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-white/5 text-[#FBBE21] border-white/10'
            }`}>
              Curriculum Journey
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              Four Stages. One Path To Independent Market Mastery.
            </h2>
            <p className={`text-base ${isLight ? 'text-[#5B6475]' : 'text-slate-200'}`}>
              A progressive 13-week course engineered to transition you from foundational concepts to advanced Elliott Wave and derivative risk architecture.
            </p>
          </div>

          <CurriculumJourney 
            isCoursePage={false} 
            onNavigateToCourse={onNavigateToCourse}
            onOpenReservation={onOpenReservation}
          />
        </div>
      </section>

      {/* 5. TEAM & TRAINERS: 4 Clickable Profiles (No Auto-Rotating Carousel) */}
      <section id="trainers" className={`py-20 sm:py-28 border-t transition-colors ${
        isLight ? 'bg-white border-[#DDE2EC]' : 'bg-[#070b14] border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-[#FBBE21]/15 text-[#FBBE21] border-[#FBBE21]/30'
            }`}>
              Faculty & Mentors
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              Learn From Seasoned Practitioners, Not Theorists.
            </h2>
            <p className={`text-base ${isLight ? 'text-[#5B6475]' : 'text-slate-200'}`}>
              Decades of combined institutional banking, proprietary trading, and NISM regulatory excellence guiding your education.
            </p>
          </div>

          {/* Interactive 4-Trainer Profile Selector */}
          <TrainerSlider />
        </div>
      </section>

      {/* 6. WHY ARTHYX */}
      <section id="why-arthyx" className={`py-20 sm:py-28 border-t transition-colors ${
        isLight ? 'bg-[#F8F9FC] border-[#DDE2EC]' : 'bg-[#090e1a] border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-[#FBBE21]/15 text-[#FBBE21] border-[#FBBE21]/30'
            }`}>
              {WHY_ARTHYX_CONTENT.eyebrow}
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              {WHY_ARTHYX_CONTENT.heading}
            </h2>
            <div className={`space-y-2 text-sm sm:text-base leading-relaxed ${
              isLight ? 'text-[#5B6475]' : 'text-slate-200'
            }`}>
              <p className={`font-semibold ${isLight ? 'text-[#172033]' : 'text-white'}`}>{WHY_ARTHYX_CONTENT.intro1}</p>
              <p>{WHY_ARTHYX_CONTENT.intro2}</p>
            </div>
          </div>

          {/* 4 Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {WHY_ARTHYX_CONTENT.principles.map((pr, prIdx) => {
              const principleIcons = [Layers, Compass, ShieldCheck, LineChart];
              const IconComponent = principleIcons[prIdx % principleIcons.length];

              return (
                <div
                  key={pr.number}
                  className={`p-7 rounded-2xl border transition-all shadow-sm space-y-3 group ${
                    isLight 
                      ? 'bg-white border-[#DDE2EC] hover:border-[#243E8A]/40 shadow-slate-200/50 hover:shadow-lg' 
                      : 'bg-gradient-to-b from-[#0d1424] to-[#080d19] border-white/10 hover:border-[#243E8A]/40 shadow-xl'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
                        isLight ? 'bg-[#F8F9FC] border-[#DDE2EC] text-[#243E8A]' : 'bg-white/5 border-white/10 text-[#FBBE21]'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                        isLight 
                          ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' 
                          : 'bg-white/5 text-[#FBBE21] border-transparent'
                      }`}>
                        {pr.number}
                      </span>
                    </div>
                    <div className={`w-2 h-2 rounded-full transition-colors ${
                      isLight ? 'bg-slate-300 group-hover:bg-[#FBBE21]' : 'bg-white/20 group-hover:bg-[#FBBE21]'
                    }`} />
                  </div>
                  <h3 className={`text-lg font-bold font-display transition-colors ${
                    isLight ? 'text-[#172033] group-hover:text-[#243E8A]' : 'text-white group-hover:text-[#FBBE21]'
                  }`}>
                    {pr.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
                    {pr.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Visual Comparison: Retail Speculation vs Arthyx Institutional Framework */}
          <div className={`p-6 sm:p-8 lg:p-10 rounded-3xl border shadow-lg mb-12 overflow-hidden transition-all ${
            isLight 
              ? 'bg-white border-[#DDE2EC]' 
              : 'bg-gradient-to-b from-[#0b1120] to-[#070b14] border-white/10'
          }`}>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-[#FBBE21]/20 text-[#FBBE21] border-[#FBBE21]/30'
              }`}>
                Visual Comparison
              </span>
              <h3 className={`text-xl sm:text-2xl font-bold font-display tracking-tight mt-2 ${isLight ? 'text-[#172033]' : 'text-white'}`}>
                The Shift From Noise to Process Mastery
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Left: Fragmented Retail Speculation */}
              <div className={`p-6 rounded-2xl border ${
                isLight ? 'bg-rose-50/50 border-rose-200/80 text-slate-800' : 'bg-rose-950/20 border-rose-800/30 text-rose-200'
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-500 shrink-0">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-display text-rose-600 dark:text-rose-400">
                      Conventional Social Media Noise
                    </h4>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Reactive & Speculative</span>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Acting on unverified Telegram and social media stock tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Emotional entry during market peaks driven by fear of missing out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Trading naked options without understanding volatility skew or Greeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>No trade journal, no structured risk boundaries, inconsistent results</span>
                  </li>
                </ul>
              </div>

              {/* Right: Arthyx Sequential Discipline */}
              <div className={`p-6 rounded-2xl border ${
                isLight 
                  ? 'bg-emerald-50/60 border-emerald-200 text-slate-800' 
                  : 'bg-gradient-to-br from-emerald-950/30 to-[#0c1626] border-emerald-500/30 text-slate-200'
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-display text-emerald-600 dark:text-emerald-400">
                      The Arthyx Sequential Discipline
                    </h4>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Systematic & Independent</span>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>Independent multi-timeframe chart reading and volume verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>Rigorous risk-first capital allocation (≤ 1.5% maximum loss per trade)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>Multi-leg defined-risk derivatives architectures and Theta strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>Mentor-audited trade logs separating process quality from outcome bias</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              id="why-arthyx-explore-btn"
              onClick={onNavigateToCourse}
              className={`inline-flex items-center gap-2 text-sm font-bold transition-colors group ${
                isLight ? 'text-[#243E8A] hover:text-[#172B68]' : 'text-[#FBBE21] hover:text-white'
              }`}
            >
              <span>{WHY_ARTHYX_CONTENT.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. FLEXIBLE STORIES & TESTIMONIALS (Google Reviews, Video Reflections, Case Studies) */}
      <section id="stories" className={`py-20 sm:py-28 border-t transition-colors ${
        isLight ? 'bg-white border-[#DDE2EC]' : 'bg-[#070b14] border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-white/5 text-[#FBBE21] border-white/10'
            }`}>
              Student Perspectives
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              Real Experiences. Authentic Behavioral Shifts.
            </h2>
            <p className={`text-base ${isLight ? 'text-[#5B6475]' : 'text-slate-200'}`}>
              Hear directly from working professionals, engineers, and full-time investors who replaced speculation with process discipline.
            </p>
          </div>

          {/* Flexible Multi-Format Stories Section */}
          <FlexibleStoriesSection />
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className={`py-20 sm:py-28 border-t transition-colors ${
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
              Transparent Answers. Zero Ambiguity.
            </h2>
            <p className={`text-sm sm:text-base ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
              Clear answers about our educational scope, time commitment, and sequential progression.
            </p>
          </div>

          <FaqAccordion items={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <EyeOpenerCta
        heading="Start with the ₹99 Eye-Opener."
        supportingLine="No pressure, just a clearer perspective on financial markets."
        primaryCtaText="Reserve Your Seat →"
        secondaryCtaText="Explore Full SAGA Journey"
        onPrimaryClick={onOpenReservation}
        onSecondaryClick={onNavigateToCourse}
        variant="home"
      />
    </div>
  );
}
