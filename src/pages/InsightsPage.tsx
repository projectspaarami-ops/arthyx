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
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm border ${
            isLight 
              ? 'bg-[#fdf6e9] border-[#e9d5a1] text-[#966b24]' 
              : 'bg-[#c99a4e]/10 border-[#c99a4e]/30 text-[#e5b869]'
          }`}>
            <span className="w-2 h-2 rounded-full bg-[#c99a4e]" />
            <span>{INSIGHTS_PAGE_CONTENT.title}</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.15] ${
            isLight ? 'text-slate-950' : 'text-white'
          }`}>
            {INSIGHTS_PAGE_CONTENT.headline}
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-300'
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
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#c99a4e] text-slate-950 shadow-md shadow-[#c99a4e]/20'
                      : isLight
                        ? 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
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
              className={`p-7 sm:p-8 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-xl ${
                isLight 
                  ? 'bg-white border-slate-200 hover:border-[#c99a4e]/50' 
                  : 'bg-[#0f172a] border-white/10 hover:border-[#c99a4e]/40'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className={`px-2.5 py-1 rounded-md font-semibold border ${
                    isLight 
                      ? 'bg-[#fdf6e9] text-[#966b24] border-[#e9d5a1]' 
                      : 'bg-[#c99a4e]/10 text-[#e5b869] border-[#c99a4e]/30'
                  }`}>
                    {art.category}
                  </span>
                  <div className="flex items-center gap-3 text-slate-400">
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
                  isLight ? 'text-slate-900 group-hover:text-[#966b24]' : 'text-white group-hover:text-[#f3d99d]'
                }`}>
                  {art.title}
                </h2>

                <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  {art.excerpt}
                </p>
              </div>

              <div className={`pt-6 mt-6 border-t flex items-center justify-between text-sm font-bold ${
                isLight ? 'border-slate-100 text-[#966b24]' : 'border-white/5 text-[#c99a4e]'
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
            ? 'bg-[#fcfbf9] border-slate-200' 
            : 'bg-gradient-to-r from-[#0c1220] to-[#080d19] border-white/10'
        }`}>
          <div className="max-w-2xl mx-auto space-y-5">
            <h3 className={`text-2xl font-bold font-display ${isLight ? 'text-slate-950' : 'text-white'}`}>
              Move from reading insights to structured market mastery
            </h3>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              The SAGA programme takes these concepts and applies them across 13 weeks of live sessions, chart reading, and risk review.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-[#c99a4e] hover:bg-[#ba8a3e] transition-all"
              >
                Join ₹99 Eye-Opener
              </button>
              <button
                onClick={onNavigateToCourse}
                className={`px-6 py-3 rounded-xl text-sm font-semibold border ${
                  isLight ? 'bg-white text-slate-800 border-slate-300' : 'bg-white/5 text-white border-white/10'
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
            isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-[#0f172a] border-white/10 text-white'
          }`}>
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${
                  isLight ? 'bg-[#fdf6e9] text-[#966b24] border-[#e9d5a1]' : 'bg-[#c99a4e]/10 text-[#e5b869] border-[#c99a4e]/30'
                }`}>
                  {activeArticle.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display leading-snug">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>{activeArticle.readTime}</span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className={`space-y-4 text-base leading-relaxed pt-4 border-t ${
              isLight ? 'border-slate-100 text-slate-700' : 'border-white/10 text-slate-300'
            }`}>
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              isLight ? 'border-slate-100' : 'border-white/10'
            }`}>
              <span className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Arthyx Education • Analytical Perspectives Series
              </span>
              <button
                onClick={() => {
                  setActiveArticle(null);
                  onOpenReservation();
                }}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-[#c99a4e] hover:bg-[#ba8a3e]"
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
