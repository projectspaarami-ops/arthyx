import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { STORIES_PAGE_CONTENT } from '../data/content';
import { ArrowRight, Play, Quote, CheckCircle2, UserCheck, Shield, Sparkles, X } from 'lucide-react';

interface StoriesPageProps {
  onOpenReservation: () => void;
  onNavigateToCourse: () => void;
}

export function StoriesPage({ onOpenReservation, onNavigateToCourse }: StoriesPageProps) {
  const { isLight } = useTheme();
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; participant: string } | null>(null);

  return (
    <div className="w-full pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">

        {/* 1. Header & Proof Points */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm border ${
            isLight 
              ? 'bg-[#243E8A]/10 border-[#243E8A]/20 text-[#243E8A]' 
              : 'bg-[#FBBE21]/10 border-[#FBBE21]/30 text-[#FBBE21]'
          }`}>
            <span className="w-2 h-2 rounded-full bg-[#FBBE21]" />
            <span>{STORIES_PAGE_CONTENT.title}</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.15] ${
            isLight ? 'text-[#172033]' : 'text-white'
          }`}>
            {STORIES_PAGE_CONTENT.headline}
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-[#5B6475]' : 'text-slate-300'
          }`}>
            {STORIES_PAGE_CONTENT.subheadline}
          </p>

          {/* Supporting Proof Points from PDF page 5 */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '10,000+', label: 'Learners Trained', sub: 'Across technical analysis cohorts' },
              { stat: '500+', label: 'Learning Hours', sub: 'Structured live & review sessions' },
              { stat: '100%', label: 'Zero Tip Calls', sub: 'Pure analytical framework discipline' },
            ].map((p, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl border ${
                  isLight 
                    ? 'bg-white border-[#DDE2EC] shadow-sm' 
                    : 'bg-[#0f172a] border-white/10'
                }`}
              >
                <div className={`text-2xl sm:text-3xl font-extrabold font-display ${
                  isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'
                }`}>
                  {p.stat}
                </div>
                <div className={`font-bold text-sm mt-1 ${isLight ? 'text-[#172033]' : 'text-white'}`}>
                  {p.label}
                </div>
                <div className={`text-xs mt-0.5 ${isLight ? 'text-[#5B6475]' : 'text-slate-400'}`}>
                  {p.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Student Stories Section */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-white/5 text-[#FBBE21] border-white/10'
              }`}>
                Participant Case Studies
              </span>
              <h2 className={`text-3xl font-extrabold font-display tracking-tight mt-2 ${
                isLight ? 'text-[#172033]' : 'text-white'
              }`}>
                Student Stories
              </h2>
            </div>
            <p className={`text-sm max-w-md ${isLight ? 'text-[#5B6475]' : 'text-slate-400'}`}>
              Real experiences showing how moving from noise to structured process changes market decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STORIES_PAGE_CONTENT.studentStories.map((st, idx) => (
              <div
                key={idx}
                className={`p-7 sm:p-8 rounded-2xl border transition-all space-y-5 flex flex-col justify-between group ${
                  isLight 
                    ? 'bg-white border-[#DDE2EC] hover:border-[#243E8A]/50 shadow-sm hover:shadow-md' 
                    : 'bg-[#0f172a] border-white/10 hover:border-[#FBBE21]/40 shadow-xl'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`font-bold font-display text-lg ${isLight ? 'text-[#172033]' : 'text-white'}`}>
                          {st.name}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Verified
                        </span>
                      </div>
                      <div className={`text-xs mt-0.5 ${isLight ? 'text-[#5B6475]' : 'text-slate-400'}`}>
                        {st.role} • {st.location}
                      </div>
                    </div>
                    <Quote className={`w-6 h-6 shrink-0 opacity-30 ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`} />
                  </div>

                  <p className={`text-sm sm:text-base leading-relaxed italic ${
                    isLight ? 'text-[#172033]' : 'text-slate-200'
                  }`}>
                    “{st.quote}”
                  </p>
                </div>

                <div className={`pt-4 border-t space-y-2 ${isLight ? 'border-[#DDE2EC]/60' : 'border-white/5'}`}>
                  <div className="flex items-center justify-between text-xs">
                    <span className={`font-bold ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`}>
                      {st.journey}
                    </span>
                  </div>
                  <div className={`text-xs p-3 rounded-xl border ${
                    isLight ? 'bg-[#F8F9FC] border-[#DDE2EC] text-[#172033]' : 'bg-white/[0.02] border-white/10 text-slate-300'
                  }`}>
                    <span className={`font-bold ${isLight ? 'text-[#243E8A]' : 'text-[#FBBE21]'}`}>Key Mindset Shift: </span>
                    {st.transformation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Video Testimonials Section */}
        <div className="space-y-10">
          <div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-white/5 text-[#FBBE21] border-white/10'
            }`}>
              Live Reflections
            </span>
            <h2 className={`text-3xl font-extrabold font-display tracking-tight mt-2 ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              Video Testimonials
            </h2>
            <p className={`text-sm mt-1.5 ${isLight ? 'text-[#5B6475]' : 'text-slate-400'}`}>
              Watch candid video conversations with learners discussing their learning curve and trading discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STORIES_PAGE_CONTENT.videoTestimonials.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setSelectedVideo({ title: vid.title, participant: vid.participant })}
                className={`group cursor-pointer rounded-2xl border overflow-hidden transition-all shadow-sm hover:shadow-md ${
                  isLight 
                    ? 'bg-white border-[#DDE2EC] hover:border-[#243E8A]/50' 
                    : 'bg-[#0f172a] border-white/10 hover:border-[#FBBE21]/40'
                }`}
              >
                {/* Video Preview Aspect Box */}
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <img 
                    src={vid.previewThumbnail} 
                    alt={vid.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Play Button Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#FBBE21] text-[#172B68] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform font-bold">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 text-white text-[11px] font-mono">
                    {vid.duration}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className={`font-bold font-display text-base transition-colors ${
                    isLight ? 'text-[#172033] group-hover:text-[#243E8A]' : 'text-white group-hover:text-[#FBBE21]'
                  }`}>
                    {vid.title}
                  </h3>
                  <div className={`text-xs ${isLight ? 'text-[#5B6475]' : 'text-slate-400'}`}>
                    {vid.participant} • {vid.background}
                  </div>
                  <p className={`text-xs leading-relaxed pt-1.5 border-t ${
                    isLight ? 'text-[#5B6475] border-[#DDE2EC]/60' : 'text-slate-300 border-white/5'
                  }`}>
                    {vid.keyTakeaway}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Final CTA */}
        <div className={`p-8 sm:p-12 rounded-3xl border text-center ${
          isLight 
            ? 'bg-gradient-to-b from-[#F8F9FC] to-white border-[#DDE2EC] shadow-sm' 
            : 'bg-gradient-to-b from-[#131b2c] to-[#090d18] border-white/10 shadow-2xl'
        }`}>
          <div className="max-w-2xl mx-auto space-y-5">
            <h3 className={`text-2xl sm:text-3xl font-bold font-display ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              Different starting points. A shared pursuit of clarity.
            </h3>
            <p className={`text-sm sm:text-base ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
              You do not need to know everything before you begin. You need a structured place to begin learning.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenReservation}
                className="px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-[#172B68] bg-[#FBBE21] hover:bg-[#f3b516] shadow-xl shadow-[#FBBE21]/20 transition-all active:scale-[0.98] flex items-center gap-2 cursor-pointer"
              >
                <span>Reserve Your ₹99 Seat</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onNavigateToCourse}
                className={`px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold border cursor-pointer ${
                  isLight ? 'bg-white hover:bg-[#F8F9FC] text-[#172033] border-[#DDE2EC]' : 'bg-white/5 text-white border-white/10'
                }`}
              >
                <span>Explore SAGA Journey</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal Preview */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className={`w-full max-w-2xl rounded-2xl border p-6 space-y-4 ${
            isLight ? 'bg-white border-[#DDE2EC]' : 'bg-[#0f172a] border-white/10 text-white'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold font-display">{selectedVideo.title}</h3>
                <p className="text-xs text-slate-400">{selectedVideo.participant}</p>
              </div>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-black rounded-xl flex items-center justify-center flex-col text-center p-6 space-y-3">
              <Play className="w-12 h-12 text-[#FBBE21]" />
              <p className="text-sm text-slate-300">
                Live recorded learner reflection available during the introductory orientation session.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
