import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { TRAINERS } from '../data/content';
import { Award, BookOpen, Quote, Compass, ShieldCheck, CheckCircle2, Clock, Briefcase, Sparkles } from 'lucide-react';

const TRAINER_PHOTOS: Record<string, { photoUrl: string; initials: string; photoAlt: string }> = {
  'nikhil-kowale': {
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80',
    initials: 'NK',
    photoAlt: 'Nikhil Bal Kowale - Co-Founder & Director'
  },
  'mandar-rege': {
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=600&q=80',
    initials: 'MR',
    photoAlt: 'Mandar Satish Rege - Co-Founder & Lead Trainer'
  },
  'siddhesh-nirmal': {
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=600&q=80',
    initials: 'SN',
    photoAlt: 'Siddhesh Nirmal - Principal Officer Research & Advisory'
  },
  'tushar-kale': {
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&h=600&q=80',
    initials: 'TK',
    photoAlt: 'Tushar Kale - Co-Founder & Director'
  }
};

export function TrainerSlider() {
  const [selectedTrainerId, setSelectedTrainerId] = useState<string>(TRAINERS[0].id);
  const activeTrainer = TRAINERS.find((t) => t.id === selectedTrainerId) || TRAINERS[0];
  const { isLight } = useTheme();

  const activePhotoMeta = TRAINER_PHOTOS[activeTrainer.id] || {
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80',
    initials: 'AR',
    photoAlt: activeTrainer.name
  };

  return (
    <div className="w-full">
      {/* Supporting Header */}
      <div className={`mb-10 p-5 rounded-2xl border text-center max-w-3xl mx-auto shadow-lg transition-all ${
        isLight 
          ? 'bg-[#fdfbf7] border-[#c99a4e]/30 shadow-slate-200/50' 
          : 'bg-gradient-to-r from-[#0d1424] via-[#111a2e] to-[#0d1424] border-[#c99a4e]/30 shadow-xl'
      }`}>
        <div className={`text-xs font-semibold mb-1 flex items-center justify-center gap-1.5 ${
          isLight ? 'text-[#966b24]' : 'text-[#f3d99d]'
        }`}>
          <Sparkles className="w-3.5 h-3.5 text-[#c99a4e]" />
          <span>Different Expertise • One Learning Philosophy</span>
        </div>
        <p className={`text-base sm:text-lg font-bold font-display tracking-tight ${
          isLight ? 'text-slate-900' : 'text-white'
        }`}>
          “Simplify the concept. Understand the reasoning. Apply it thoughtfully. Review. Improve.”
        </p>
      </div>

      {/* 4 Interactive Clickable Trainer Profile Photos */}
      <div className="mb-8">
        <div className="text-center mb-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
            isLight ? 'bg-slate-100 text-slate-700 border-slate-200' : 'bg-white/5 text-slate-300 border-white/10'
          }`}>
            Click Any Trainer Profile To View Comprehensive Credentials & Philosophy
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {TRAINERS.map((trainer) => {
            const isSelected = trainer.id === selectedTrainerId;
            const photoMeta = TRAINER_PHOTOS[trainer.id] || {
              photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80',
              initials: 'AR',
              photoAlt: trainer.name
            };

            return (
              <button
                key={trainer.id}
                id={`trainer-profile-photo-${trainer.id}`}
                onClick={() => setSelectedTrainerId(trainer.id)}
                className={`group relative text-left p-3.5 sm:p-5 rounded-2xl border transition-all flex flex-col items-center text-center cursor-pointer ${
                  isSelected
                    ? isLight
                      ? 'bg-[#fdfbf6] border-[#c99a4e] ring-2 ring-[#c99a4e] shadow-xl shadow-[#c99a4e]/15 -translate-y-1'
                      : 'bg-gradient-to-b from-[#162137] to-[#0c1322] border-[#c99a4e] ring-2 ring-[#c99a4e] shadow-2xl shadow-[#c99a4e]/20 -translate-y-1'
                    : isLight
                      ? 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-sm'
                      : 'bg-[#0a0f1b]/80 hover:bg-[#0e1628] border-white/10 hover:border-white/20'
                }`}
              >
                {/* Active Trainer Pin */}
                {isSelected && (
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#c99a4e] text-slate-950 text-[10px] font-bold shadow-sm z-10">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Active</span>
                  </div>
                )}

                {/* Profile Photo Thumbnail with fallback */}
                <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-1 mb-3.5 relative transition-transform group-hover:scale-105 overflow-hidden ${
                  isSelected
                    ? 'ring-2 ring-[#c99a4e] ring-offset-2 ring-offset-transparent'
                    : 'border border-slate-200 dark:border-white/10'
                }`}>
                  <img
                    src={photoMeta.photoUrl}
                    alt={photoMeta.photoAlt}
                    className="w-full h-full object-cover object-top rounded-xl"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image network fails
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Trainer Names & Badges */}
                <h3 className={`text-sm sm:text-base font-bold font-display transition-colors line-clamp-1 ${
                  isSelected 
                    ? isLight ? 'text-slate-950' : 'text-white' 
                    : isLight ? 'text-slate-800' : 'text-slate-200'
                }`}>
                  {trainer.name}
                </h3>

                <p className={`text-[11px] sm:text-xs font-semibold mt-0.5 line-clamp-1 ${
                  isSelected ? (isLight ? 'text-[#966b24]' : 'text-[#e5b869]') : (isLight ? 'text-slate-500' : 'text-slate-400')
                }`}>
                  {trainer.role.split('|')[0]}
                </p>

                <div className={`mt-2 text-[10px] px-2 py-0.5 rounded-md line-clamp-1 border ${
                  isSelected
                    ? isLight
                      ? 'bg-[#fdf6e9] text-[#966b24] border-[#e9d5a1] font-semibold'
                      : 'bg-[#c99a4e]/20 text-[#f3d99d] border-[#c99a4e]/40 font-semibold'
                    : isLight
                      ? 'bg-slate-100 text-slate-600 border-slate-200'
                      : 'bg-white/5 text-slate-400 border-white/5'
                }`}>
                  {trainer.badge}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Detailed Profile Container for the Selected Trainer */}
      <div className={`p-6 sm:p-8 lg:p-10 rounded-2xl border shadow-2xl relative overflow-hidden transition-all duration-300 ${
        isLight 
          ? 'bg-white border-slate-200 shadow-xl shadow-slate-200/60' 
          : 'bg-gradient-to-br from-[#0c1424] via-[#090e1a] to-[#070a13] border-[#c99a4e]/30'
      }`}>
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c99a4e]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Column: Trainer Photo, Credibility & Certifications */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            {/* Big High-Definition Portrait */}
            <div className={`w-36 h-36 sm:w-44 sm:h-44 rounded-2xl border-2 p-1.5 shadow-xl relative overflow-hidden ${
              isLight 
                ? 'bg-slate-50 border-[#c99a4e]/50' 
                : 'bg-gradient-to-tr from-[#16223a] via-[#0e1628] to-[#080d17] border-[#c99a4e]/50'
            }`}>
              <img
                src={activePhotoMeta.photoUrl}
                alt={activePhotoMeta.photoAlt}
                className="w-full h-full object-cover object-top rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-[#080d17] shadow-sm" />
            </div>

            <div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1 mb-2 border ${
                isLight 
                  ? 'bg-[#fdf6e9] text-[#966b24] border-[#e9d5a1]' 
                  : 'bg-[#c99a4e]/15 text-[#e5b869] border-[#c99a4e]/30'
              }`}>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified Faculty Mentor</span>
              </span>
              <h3 className={`text-2xl sm:text-3xl font-bold font-display tracking-tight ${isLight ? 'text-slate-950' : 'text-white'}`}>
                {activeTrainer.name}
              </h3>
              <p className={`text-sm font-semibold mt-1 ${isLight ? 'text-[#966b24]' : 'text-[#f3d99d]'}`}>
                {activeTrainer.role}
              </p>
              <p className={`text-xs mt-1.5 font-medium flex items-center justify-center lg:justify-start gap-1 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                <Clock className="w-3.5 h-3.5 text-[#c99a4e]" />
                <span>{activeTrainer.experience}</span>
              </p>
            </div>

            {/* Certifications Badge Array */}
            <div className="w-full pt-2">
              <div className={`text-[11px] font-semibold mb-1.5 flex items-center justify-center lg:justify-start gap-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                <Award className="w-3.5 h-3.5 text-[#c99a4e]" />
                <span>Regulatory & Professional Certifications:</span>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                {activeTrainer.certifications?.map((cert, cIdx) => (
                  <span
                    key={cIdx}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                      isLight 
                        ? 'bg-slate-100 text-slate-800 border-slate-300' 
                        : 'bg-white/5 text-slate-200 border-white/10'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{cert}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Corporate Track Record */}
            {activeTrainer.careerHistory && (
              <div className="w-full pt-1">
                <div className={`text-[11px] font-semibold mb-1.5 flex items-center justify-center lg:justify-start gap-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  <Briefcase className="w-3.5 h-3.5 text-[#c99a4e]" />
                  <span>Institutional Background:</span>
                </div>
                <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                  {activeTrainer.careerHistory.map((item, chIdx) => (
                    <span
                      key={chIdx}
                      className={`text-xs px-2 py-0.5 rounded border font-medium ${
                        isLight 
                          ? 'bg-slate-50 border-slate-200 text-slate-700' 
                          : 'bg-white/[0.03] border-white/5 text-slate-300'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Bio, Expertise Grid & Teaching Philosophy */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h4 className={`text-xs font-semibold mb-2 flex items-center gap-1.5 ${
                isLight ? 'text-slate-700' : 'text-slate-200'
              }`}>
                <Compass className="w-4 h-4 text-[#c99a4e]" />
                <span>Professional Background & Market Experience</span>
              </h4>
              <p className={`text-sm sm:text-base leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                {activeTrainer.bio}
              </p>
            </div>

            {/* Specialized Competencies */}
            <div>
              <h4 className={`text-xs font-semibold mb-2.5 flex items-center gap-1.5 ${
                isLight ? 'text-slate-700' : 'text-slate-200'
              }`}>
                <BookOpen className="w-4 h-4 text-[#c99a4e]" />
                <span>Core Pedagogical Domains</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeTrainer.expertise.map((exp, eIdx) => (
                  <span
                    key={eIdx}
                    className={`text-xs px-3 py-1 rounded-lg border font-medium transition-colors ${
                      isLight 
                        ? 'bg-slate-50 border-slate-200 text-slate-800' 
                        : 'bg-white/5 border-white/10 text-slate-200'
                    }`}
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            {/* Teaching Philosophy Callout Box */}
            <div className={`p-5 rounded-xl border relative overflow-hidden ${
              isLight 
                ? 'bg-[#fdfbf7] border-[#c99a4e]/40 shadow-sm' 
                : 'bg-gradient-to-r from-[#121c32] to-[#0d1526] border-[#c99a4e]/30'
            }`}>
              <Quote className={`absolute -right-2 -bottom-2 w-16 h-16 opacity-10 ${
                isLight ? 'text-[#966b24]' : 'text-[#c99a4e]'
              }`} />
              <div className="relative z-10 space-y-2">
                <div className={`text-xs font-bold uppercase tracking-wider ${
                  isLight ? 'text-[#966b24]' : 'text-[#c99a4e]'
                }`}>
                  Teaching Philosophy:
                </div>
                <p className={`text-sm sm:text-base italic font-medium ${
                  isLight ? 'text-slate-900' : 'text-slate-100'
                }`}>
                  “{activeTrainer.philosophy}”
                </p>
                <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {activeTrainer.approach}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
