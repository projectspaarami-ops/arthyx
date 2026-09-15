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
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm border ${
            isLight 
              ? 'bg-[#fdf6e9] border-[#e9d5a1] text-[#966b24]' 
              : 'bg-[#c99a4e]/10 border-[#c99a4e]/30 text-[#e5b869]'
          }`}>
            <span className="w-2 h-2 rounded-full bg-[#c99a4e]" />
            <span>{STORIES_PAGE_CONTENT.title}</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.15] ${
            isLight ? 'text-slate-950' : 'text-white'
          }`}>
            {STORIES_PAGE_CONTENT.headline}
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-300'
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
                    ? 'bg-white border-slate-200 shadow-sm' 
                    : 'bg-[#0f172a] border-white/10'
                }`}
              >
                <div className={`text-2xl sm:text-3xl font-extrabold font-display ${
                  isLight ? 'text-[#966b24]' : 'text-[#f3d99d]'
                }`}>
                  {p.stat}
                </div>
                <div className={`font-semibold text-sm mt-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {p.label}
                </div>
                <div className={`text-xs mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
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
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                isLight ? 'bg-slate-100 text-[#966b24] border-slate-200' : 'bg-white/5 text-[#c99a4e] border-white/10'
              }`}>
                Participant Case Studies
              </span>
              <h2 className={`text-3xl font-extrabold font-display tracking-tight mt-2 ${
                isLight ? 'text-slate-950' : 'text-white'
              }`}>
                Student Stories
              </h2>
            </div>
            <p className={`text-sm max-w-md ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Real experiences showing how moving from noise to structured process changes market decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STORIES_PAGE_CONTENT.studentStories.map((st, idx) => (
              <div
                key={idx}
                className={`p-7 sm:p-8 rounded-2xl border transition-all space-y-5 flex flex-col justify-between group ${
                  isLight 
                    ? 'bg-white border-slate-200 hover:border-[#c99a4e]/50 shadow-sm hover:shadow-lg' 
                    : 'bg-[#0f172a] border-white/10 hover:border-[#c99a4e]/40 shadow-xl'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`font-bold font-display text-lg ${isLight ? 'text-slate-900' : 'text-white'}`}>
                          {st.name}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          Verified
                        </span>
                      </div>
                      <div className={`text-xs mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                        {st.role} • {st.location}
                      </div>
                    </div>
                    <Quote className={`w-6 h-6 shrink-0 opacity-40 ${isLight ? 'text-[#966b24]' : 'text-[#c99a4e]'}`} />
                  </div>

                  <p className={`text-sm sm:text-base leading-relaxed italic ${
                    isLight ? 'text-slate-700' : 'text-slate-200'
                  }`}>
                    “{st.quote}”
                  </p>
                </div>

                <div className={`pt-4 border-t space-y-2 ${isLight ? 'border-slate-100' : 'border-white/5'}`}>
                  <div className="flex items-center justify-between text-xs">
                    <span className={`font-semibold ${isLight ? 'text-[#966b24]' : 'text-[#c99a4e]'}`}>
                      {st.journey}
                    </span>
                  </div>
                  <div className={`text-xs p-3 rounded-xl border ${
                    isLight ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-white/[0.02] border-white/10 text-slate-300'
                  }`}>
                    <span className="font-semibold text-[#c99a4e]">Key Mindset Shift: </span>
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
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
              isLight ? 'bg-slate-100 text-[#966b24] border-slate-200' : 'bg-white/5 text-[#c99a4e] border-white/10'
            }`}>
              Live Reflections
            </span>
            <h2 className={`text-3xl font-extrabold font-display tracking-tight mt-2 ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}>
              Video Testimonials
            </h2>
            <p className={`text-sm mt-1.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Watch candid video conversations with learners discussing their learning curve and trading discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STORIES_PAGE_CONTENT.videoTestimonials.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setSelectedVideo({ title: vid.title, participant: vid.participant })}
                className={`group cursor-pointer rounded-2xl border overflow-hidden transition-all shadow-md hover:shadow-xl ${
                  isLight 
                    ? 'bg-white border-slate-200 hover:border-[#c99a4e]/50' 
                    : 'bg-[#0f172a] border-white/10 hover:border-[#c99a4e]/40'
                }`}
              >
                {/* Video Preview Aspect Box */}
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <img 
                    src={vid.previewThumbnail} 
                    alt={vid.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Play Button Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#c99a4e] text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 text-white text-[11px] font-mono">
                    {vid.duration}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className={`font-bold font-display text-base transition-colors ${
                    isLight ? 'text-slate-900 group-hover:text-[#966b24]' : 'text-white group-hover:text-[#f3d99d]'
                  }`}>
                    {vid.title}
                  </h3>
                  <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    {vid.participant} • {vid.background}
                  </div>
                  <p className={`text-xs leading-relaxed pt-1.5 border-t ${
                    isLight ? 'text-slate-600 border-slate-100' : 'text-slate-300 border-white/5'
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
            ? 'bg-gradient-to-b from-[#fdfbf6] to-white border-[#e9d5a1]/60 shadow-lg' 
            : 'bg-gradient-to-b from-[#131b2c] to-[#090d18] border-white/10 shadow-2xl'
        }`}>
          <div className="max-w-2xl mx-auto space-y-5">
            <h3 className={`text-2xl sm:text-3xl font-bold font-display ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}>
              Different starting points. A shared pursuit of clarity.
            </h3>
            <p className={`text-sm sm:text-base ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              You do not need to know everything before you begin. You need a structured place to begin learning.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenReservation}
                className="px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-[#e5b869] via-[#c99a4e] to-[#ba8a3e] hover:from-[#f3c87e] hover:to-[#c99a4e] shadow-xl shadow-[#c99a4e]/20 transition-all active:scale-[0.98] flex items-center gap-2"
              >
                <span>Reserve Your ₹99 Seat</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onNavigateToCourse}
                className={`px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold border ${
                  isLight ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300' : 'bg-white/5 text-white border-white/10'
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
            isLight ? 'bg-white border-slate-200' : 'bg-[#0f172a] border-white/10 text-white'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold font-display">{selectedVideo.title}</h3>
                <p className="text-xs text-slate-400">{selectedVideo.participant}</p>
              </div>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-black rounded-xl flex items-center justify-center flex-col text-center p-6 space-y-3">
              <Play className="w-12 h-12 text-[#c99a4e]" />
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
