import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { STORIES_CONTENT } from '../data/content';
import { Star, Play, Quote, CheckCircle2, Video, MessageSquare, ShieldCheck, X, ArrowUpRight } from 'lucide-react';

interface VideoStory {
  id: string;
  title: string;
  learnerName: string;
  background: string;
  duration: string;
  stageCompleted: string;
  quote: string;
  topics: string[];
  thumbnailGradient: string;
}

const VIDEO_STORIES: VideoStory[] = [
  {
    id: 'vid-1',
    title: 'How Structured Wave Analysis Stopped My Impulsive Trading',
    learnerName: 'Rohit Kulkarni',
    background: 'IT Senior Architect • Pune',
    duration: '09:24',
    stageCompleted: 'Completed Stage 04 Cruise Control',
    quote: 'Before SAGA, I entered trades on social media buzz. Stage 02 taught me to wait for defined structural confirmation.',
    topics: ['Risk Asymmetry', 'Elliott Wave', 'FOMO Elimination'],
    thumbnailGradient: 'from-amber-950/60 via-slate-900 to-black'
  },
  {
    id: 'vid-2',
    title: 'From Random Option Buying to Defined Hedged Strategies',
    learnerName: 'Sneha Deshmukh',
    background: 'Chartered Accountant • Mumbai',
    duration: '12:15',
    stageCompleted: 'Completed Stage 03 Orbit',
    quote: 'Options Greeks used to feel like pure math jargon. Mandar sir explained theta and volatility skew with simple real-world logic.',
    topics: ['Option Greeks', 'Theta Decay', 'Hedged Spreads'],
    thumbnailGradient: 'from-sky-950/60 via-slate-900 to-black'
  },
  {
    id: 'vid-3',
    title: 'Balancing a Full-Time Career with Disciplined Swing Trading',
    learnerName: 'Amit Joshi',
    background: 'Senior Consultant • Bengaluru',
    duration: '08:40',
    stageCompleted: 'Completed Stage 04 Cruise Control',
    quote: 'The 6-month recordings and weekend live doubt-solving made it possible to learn deeply without compromising my day job.',
    topics: ['Swing Trading', 'Weekend Analysis', 'Time Management'],
    thumbnailGradient: 'from-emerald-950/60 via-slate-900 to-black'
  }
];

const GOOGLE_REVIEWS = [
  {
    id: 'g-1',
    author: 'Prathamesh Shinde',
    rating: 5,
    date: '3 weeks ago',
    badge: 'Verified Google Review',
    text: 'Genuine education with zero exaggerated claims. Nikhil sir and Mandar sir focus strictly on risk management before taking any position. The best decision I made for my market education.',
    highlight: 'Strictly zero tip calls'
  },
  {
    id: 'g-2',
    author: 'Dr. Vaibhav Patil',
    rating: 5,
    date: '1 month ago',
    badge: 'Verified Google Review',
    text: 'What makes Arthyx distinct is the structured pedagogy. Most institutes give you disjointed tips, but SAGA builds an institutional foundation from first principles.',
    highlight: 'Structured pedagogy'
  },
  {
    id: 'g-3',
    author: 'Kavita Iyer',
    rating: 5,
    date: '2 months ago',
    badge: 'Verified Google Review',
    text: 'Clear doubt solving and realistic expectation setting. No fake screenshots or promises of overnight wealth. Just disciplined analysis and patient mentorship.',
    highlight: 'Realistic expectation setting'
  }
];

export function FlexibleStoriesSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'google' | 'videos' | 'alumni'>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<VideoStory | null>(null);
  const { isLight } = useTheme();

  return (
    <div className="w-full">
      {/* Top Google Review Trust Strip */}
      <div className={`mb-10 p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 transition-all ${
        isLight 
          ? 'bg-[#fdfbf7] border-[#c99a4e]/30 shadow-md shadow-slate-200/50' 
          : 'bg-gradient-to-r from-[#0e1628] via-[#121c32] to-[#0e1628] border-[#c99a4e]/30 shadow-xl'
      }`}>
        <div className="flex items-center gap-3 text-center sm:text-left">
          {/* Google G Logo Badge */}
          <div className="w-10 h-10 rounded-xl bg-white p-2 flex items-center justify-center shadow-md shrink-0">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.66-5.17 3.66-9.12z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.36 7.34 24 12 24z" />
              <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.13z" />
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.27 2.64 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5 justify-center sm:justify-start">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                4.9 / 5.0 Rating
              </span>
            </div>
            <p className={`text-xs font-medium mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              Based on verified student reviews across Google & LMS cohorts
            </p>
          </div>
        </div>

        {/* Highlight Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className={`px-3 py-1 rounded-full border font-semibold ${
            isLight ? 'bg-white border-slate-200 text-slate-700' : 'bg-white/5 border-white/10 text-slate-300'
          }`}>
            98% Program Satisfaction
          </span>
          <span className={`px-3 py-1 rounded-full border font-semibold ${
            isLight ? 'bg-[#fdf6e9] border-[#e9d5a1] text-[#966b24]' : 'bg-[#c99a4e]/15 border-[#c99a4e]/30 text-[#f3d99d]'
          }`}>
            10,000+ Enrolled Learners
          </span>
        </div>
      </div>

      {/* Flexible Multi-Format Category Switcher */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-8">
        <button
          id="stories-tab-all"
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
            activeTab === 'all'
              ? 'bg-[#c99a4e] text-slate-950 border-[#c99a4e] shadow-md shadow-[#c99a4e]/20'
              : isLight
                ? 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                : 'bg-[#0e1628] text-slate-300 border-white/10 hover:border-white/20'
          }`}
        >
          All Formats ({STORIES_CONTENT.testimonials.length + VIDEO_STORIES.length + GOOGLE_REVIEWS.length})
        </button>

        <button
          id="stories-tab-google"
          onClick={() => setActiveTab('google')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-1.5 ${
            activeTab === 'google'
              ? 'bg-[#c99a4e] text-slate-950 border-[#c99a4e] shadow-md shadow-[#c99a4e]/20'
              : isLight
                ? 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                : 'bg-[#0e1628] text-slate-300 border-white/10 hover:border-white/20'
          }`}
        >
          <Star className="w-3.5 h-3.5 fill-current" />
          <span>Google Reviews ({GOOGLE_REVIEWS.length})</span>
        </button>

        <button
          id="stories-tab-videos"
          onClick={() => setActiveTab('videos')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-1.5 ${
            activeTab === 'videos'
              ? 'bg-[#c99a4e] text-slate-950 border-[#c99a4e] shadow-md shadow-[#c99a4e]/20'
              : isLight
                ? 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                : 'bg-[#0e1628] text-slate-300 border-white/10 hover:border-white/20'
          }`}
        >
          <Video className="w-3.5 h-3.5" />
          <span>Video Reflections ({VIDEO_STORIES.length})</span>
        </button>

        <button
          id="stories-tab-alumni"
          onClick={() => setActiveTab('alumni')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-1.5 ${
            activeTab === 'alumni'
              ? 'bg-[#c99a4e] text-slate-950 border-[#c99a4e] shadow-md shadow-[#c99a4e]/20'
              : isLight
                ? 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                : 'bg-[#0e1628] text-slate-300 border-white/10 hover:border-white/20'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Cohort Case Studies ({STORIES_CONTENT.testimonials.length})</span>
        </button>
      </div>

      {/* Grid of Stories / Reviews / Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Google Reviews Cards */}
        {(activeTab === 'all' || activeTab === 'google') &&
          GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                isLight 
                  ? 'bg-white border-slate-200 shadow-md shadow-slate-200/50 hover:border-[#c99a4e]/50' 
                  : 'bg-gradient-to-b from-[#0e1628] to-[#0a0f1c] border-white/10 hover:border-[#c99a4e]/40 shadow-xl'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${
                    isLight ? 'bg-slate-100 text-slate-600 border-slate-200' : 'bg-white/5 text-slate-400 border-white/5'
                  }`}>
                    {rev.badge}
                  </span>
                </div>

                <p className={`text-sm sm:text-base leading-relaxed italic mb-4 ${
                  isLight ? 'text-slate-800' : 'text-slate-200'
                }`}>
                  “{rev.text}”
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      {rev.author}
                    </div>
                    <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {rev.date}
                    </div>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    isLight ? 'bg-[#fdf6e9] text-[#966b24]' : 'bg-[#c99a4e]/20 text-[#f3d99d]'
                  }`}>
                    {rev.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}

        {/* 2. Video Reflection Cards */}
        {(activeTab === 'all' || activeTab === 'videos') &&
          VIDEO_STORIES.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setActiveVideoModal(vid)}
              className={`group cursor-pointer rounded-2xl border overflow-hidden transition-all flex flex-col justify-between ${
                isLight 
                  ? 'bg-white border-slate-200 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-[#c99a4e]/50' 
                  : 'bg-[#0d1424] border-white/10 hover:border-[#c99a4e]/40 shadow-xl'
              }`}
            >
              {/* Video Thumbnail Simulation */}
              <div className={`relative h-44 w-full bg-gradient-to-br ${vid.thumbnailGradient} flex items-center justify-center p-4 overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                
                {/* Play Button Overlay */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#c99a4e] text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2.5 right-2.5 z-10 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono font-semibold">
                  {vid.duration}
                </div>

                {/* Video Tag */}
                <div className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded bg-black/70 text-[#f3d99d] text-[10px] font-semibold border border-white/10">
                  Video Reflection
                </div>
              </div>

              {/* Video Info Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className={`text-sm sm:text-base font-bold font-display group-hover:text-[#c99a4e] transition-colors leading-snug mb-2 ${
                    isLight ? 'text-slate-900' : 'text-white'
                  }`}>
                    {vid.title}
                  </h4>
                  <p className={`text-xs italic line-clamp-2 mb-3 ${
                    isLight ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    “{vid.quote}”
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <div>
                    <div className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      {vid.learnerName}
                    </div>
                    <div className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {vid.background}
                    </div>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                    isLight ? 'bg-slate-100 text-slate-700' : 'bg-white/5 text-slate-300'
                  }`}>
                    {vid.stageCompleted.split(' ')[2]}
                  </span>
                </div>
              </div>
            </div>
          ))}

        {/* 3. Alumni Pedagogical Case Studies */}
        {(activeTab === 'all' || activeTab === 'alumni') &&
          STORIES_CONTENT.testimonials.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                isLight 
                  ? 'bg-white border-slate-200 shadow-md shadow-slate-200/50 hover:border-[#c99a4e]/50' 
                  : 'bg-gradient-to-b from-[#0e1628] to-[#0a0f1c] border-white/10 hover:border-[#c99a4e]/40 shadow-xl'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-white/5">
                  <span className={`text-xs font-bold ${isLight ? 'text-[#966b24]' : 'text-[#f3d99d]'}`}>
                    {item.stageCompleted}
                  </span>
                  <Quote className={`w-4 h-4 ${isLight ? 'text-slate-300' : 'text-slate-600'}`} />
                </div>

                <p className={`text-sm sm:text-base leading-relaxed italic mb-4 ${
                  isLight ? 'text-slate-800' : 'text-slate-200'
                }`}>
                  “{item.quote}”
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-white/5">
                <div className={`p-2.5 rounded-lg border ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.03] border-white/5'
                }`}>
                  <div className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${
                    isLight ? 'text-[#966b24]' : 'text-[#c99a4e]'
                  }`}>
                    Key Perspective Shift:
                  </div>
                  <div className={`text-xs ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    {item.keyShift}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <div className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      {item.namePlaceholder}
                    </div>
                    <div className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {item.backgroundPlaceholder}
                    </div>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded border ${
                    isLight ? 'bg-slate-100 text-slate-600 border-slate-200' : 'bg-white/5 text-slate-400 border-white/5'
                  }`}>
                    Verified Learner
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Interactive Video Story Modal Player */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className={`relative w-full max-w-2xl rounded-2xl border p-6 shadow-2xl ${
            isLight ? 'bg-white border-slate-200' : 'bg-[#0d1424] border-white/10'
          }`}>
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player Header */}
            <div className="mb-4">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#c99a4e]/20 text-[#f3d99d] border border-[#c99a4e]/40 inline-block mb-1.5">
                Learner Reflection • {activeVideoModal.stageCompleted}
              </span>
              <h3 className={`text-lg sm:text-xl font-bold font-display ${isLight ? 'text-slate-950' : 'text-white'}`}>
                {activeVideoModal.title}
              </h3>
            </div>

            {/* Simulated Player Canvas */}
            <div className="relative aspect-video rounded-xl bg-black flex flex-col items-center justify-center border border-white/10 overflow-hidden mb-4">
              <div className="w-16 h-16 rounded-full bg-[#c99a4e] text-slate-950 flex items-center justify-center shadow-xl animate-pulse">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <p className="text-white text-xs font-medium mt-3">
                Previewing: {activeVideoModal.learnerName} ({activeVideoModal.duration})
              </p>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>00:00</span>
                <div className="flex-1 mx-3 h-1 rounded bg-white/20 overflow-hidden">
                  <div className="w-1/3 h-full bg-[#c99a4e]" />
                </div>
                <span>{activeVideoModal.duration}</span>
              </div>
            </div>

            {/* Reflection Key Points */}
            <div className={`p-4 rounded-xl border space-y-1.5 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.02] border-white/5'
            }`}>
              <div className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Core Learning Reflection:
              </div>
              <p className={`text-xs sm:text-sm italic ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                “{activeVideoModal.quote}”
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {activeVideoModal.topics.map((t, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#c99a4e]/10 text-[#c99a4e] font-semibold border border-[#c99a4e]/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
