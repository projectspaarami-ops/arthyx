import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { INSIGHTS_PAGE_CONTENT } from '../data/content';
import { InsightArticle } from '../types';
import { ArrowRight, BookOpen, Clock, Calendar, ChevronRight, X, Sparkles } from 'lucide-react';

interface InsightsPageProps {
  onOpenReservation: () => void;
  onNavigateToCourse: () => void;
}

export function InsightsPage({ onOpenReservation, onNavigateToCourse }: InsightsPageProps) {
  const { isLight } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  const categories = ['All', 'Price Action', 'Risk Management', 'Market Psychology', 'Derivatives'];

  const filteredArticles = selectedCategory === 'All'
    ? INSIGHTS_PAGE_CONTENT.articles
    : INSIGHTS_PAGE_CONTENT.articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="w-full pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

        {/* 1. Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm border ${
            isLight 
              ? 'bg-[#243E8A]/10 border-[#243E8A]/20 text-[#243E8A]' 
              : 'bg-[#FBBE21]/10 border-[#FBBE21]/30 text-[#FBBE21]'
          }`}>
            <span className="w-2 h-2 rounded-full bg-[#FBBE21]" />
            <span>{INSIGHTS_PAGE_CONTENT.title}</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.15] ${
            isLight ? 'text-[#172033]' : 'text-white'
          }`}>
            {INSIGHTS_PAGE_CONTENT.headline}
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-[#5B6475]' : 'text-slate-300'
          }`}>
            {INSIGHTS_PAGE_CONTENT.subheadline}
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#243E8A] text-white shadow-md shadow-[#243E8A]/20 dark:bg-[#FBBE21] dark:text-[#172B68]'
                      : isLight
                        ? 'bg-white hover:bg-[#F8F9FC] text-[#172033] border border-[#DDE2EC]'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              onClick={() => setActiveArticle(art as InsightArticle)}
              className={`p-7 sm:p-8 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-md ${
                isLight 
                  ? 'bg-white border-[#DDE2EC] hover:border-[#243E8A]/50' 
                  : 'bg-[#0f172a] border-white/10 hover:border-[#FBBE21]/40'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className={`px-2.5 py-1 rounded-md font-bold border ${
                    isLight 
                      ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' 
                      : 'bg-[#FBBE21]/10 text-[#FBBE21] border-[#FBBE21]/30'
                  }`}>
                    {art.category}
                  </span>
                  <div className="flex items-center gap-3 text-[#5B6475] dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                  </div>
                </div>

                <h2 className={`text-xl sm:text-2xl font-bold font-display transition-colors ${
                  isLight ? 'text-[#172033] group-hover:text-[#243E8A]' : 'text-white group-hover:text-[#FBBE21]'
                }`}>
                  {art.title}
                </h2>

                <p className={`text-sm leading-relaxed ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
                  {art.excerpt}
                </p>
              </div>

              <div className={`pt-6 mt-6 border-t flex items-center justify-between text-sm font-bold ${
                isLight ? 'border-[#DDE2EC]/60 text-[#243E8A]' : 'border-white/5 text-[#FBBE21]'
              }`}>
                <span>Read Insight Article</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* 3. Learning Bridge CTA */}
        <div className={`p-8 sm:p-12 rounded-3xl border text-center ${
          isLight 
            ? 'bg-[#F8F9FC] border-[#DDE2EC]' 
            : 'bg-gradient-to-r from-[#0c1220] to-[#080d19] border-white/10'
        }`}>
          <div className="max-w-2xl mx-auto space-y-5">
            <h3 className={`text-2xl font-bold font-display ${isLight ? 'text-[#172033]' : 'text-white'}`}>
              Move from Reading Insights to Structured Market Mastery
            </h3>
            <p className={`text-sm ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
              The SAGA programme takes these concepts and applies them across 13 weeks of live sessions, chart reading, and risk review.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 rounded-xl text-sm font-bold text-[#172B68] bg-[#FBBE21] hover:bg-[#f3b516] shadow-md shadow-[#FBBE21]/20 transition-all cursor-pointer"
              >
                Join ₹99 Eye-Opener
              </button>
              <button
                onClick={onNavigateToCourse}
                className={`px-6 py-3 rounded-xl text-sm font-bold border cursor-pointer ${
                  isLight ? 'bg-white hover:bg-[#F8F9FC] text-[#172033] border-[#DDE2EC]' : 'bg-white/5 text-white border-white/10'
                }`}
              >
                View Curriculum
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Article Detail Modal / Reader Drawer */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto">
          <div className={`w-full max-w-3xl rounded-3xl border p-6 sm:p-10 my-8 space-y-6 max-h-[90vh] overflow-y-auto ${
            isLight ? 'bg-white border-[#DDE2EC] text-[#172033]' : 'bg-[#0f172a] border-white/10 text-white'
          }`}>
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${
                  isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-[#FBBE21]/10 text-[#FBBE21] border-[#FBBE21]/30'
                }`}>
                  {activeArticle.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display leading-snug">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-[#5B6475] dark:text-slate-400">
                  <span>{activeArticle.readTime}</span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className={`space-y-4 text-base leading-relaxed pt-4 border-t ${
              isLight ? 'border-[#DDE2EC]/60 text-[#5B6475]' : 'border-white/10 text-slate-300'
            }`}>
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              isLight ? 'border-[#DDE2EC]/60' : 'border-white/10'
            }`}>
              <span className={`text-xs ${isLight ? 'text-[#5B6475]' : 'text-slate-400'}`}>
                Arthyx Education • Analytical Perspectives Series
              </span>
              <button
                onClick={() => {
                  setActiveArticle(null);
                  onOpenReservation();
                }}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#172B68] bg-[#FBBE21] hover:bg-[#f3b516] shadow-md shadow-[#FBBE21]/20 cursor-pointer"
              >
                Apply In Live Learning
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
