import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Layers, Activity, ShieldCheck, Crosshair, TrendingUp, Sparkles, BarChart2 } from 'lucide-react';

export function HeroVisual() {
  const [activeLayer, setActiveLayer] = useState<'structure' | 'elliott' | 'risk'>('structure');
  const [riskMultiplier, setRiskMultiplier] = useState<number>(3.0);
  const { isLight } = useTheme();

  return (
    <div className={`relative w-full rounded-2xl border p-4 sm:p-6 shadow-2xl overflow-hidden backdrop-blur-xl transition-all ${
      isLight 
        ? 'bg-white/95 border-slate-200 shadow-xl shadow-slate-200/60' 
        : 'bg-gradient-to-b from-[#0d1526]/95 via-[#09101d]/95 to-[#060a12] border-[#c99a4e]/30 shadow-2xl shadow-black/80'
    }`}>
      {/* Background architectural grid & subtle glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#c99a4e]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Live Ticker & Market Telemetry Bar */}
      <div className={`relative z-10 flex flex-wrap items-center justify-between gap-2.5 pb-3.5 mb-3 border-b ${
        isLight ? 'border-slate-200' : 'border-white/10'
      }`}>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Simulated Market Terminal</span>
          </div>
          <span className={`text-[11px] font-bold hidden sm:inline-block ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
            NIFTY 25,480.60 <span className="text-emerald-500 font-semibold">+0.72%</span>
          </span>
        </div>

        {/* Regulatory & Institutional Assurance Badge */}
        <div className="flex items-center gap-1.5">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
            isLight 
              ? 'bg-[#fdf6e9] text-[#966b24] border-[#e9d5a1]' 
              : 'bg-[#c99a4e]/15 text-[#f3d99d] border-[#c99a4e]/40'
          }`}>
            SEBI-Aligned Pedagogy
          </span>
        </div>
      </div>

      {/* Analytical Mode Switcher Tabs */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5">
          <BarChart2 className="w-4 h-4 text-[#c99a4e]" />
          <span className={`text-xs font-bold font-display tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
            Analytical Framework Preview
          </span>
        </div>

        <div className={`flex items-center gap-1 p-1 rounded-xl border ${
          isLight ? 'bg-slate-100 border-slate-200' : 'bg-[#060a12] border-white/10'
        }`}>
          <button
            id="hero-layer-structure"
            onClick={() => setActiveLayer('structure')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeLayer === 'structure'
                ? 'bg-[#c99a4e] text-slate-950 font-bold shadow-md shadow-[#c99a4e]/20'
                : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Price Structure
          </button>
          <button
            id="hero-layer-elliott"
            onClick={() => setActiveLayer('elliott')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeLayer === 'elliott'
                ? 'bg-[#c99a4e] text-slate-950 font-bold shadow-md shadow-[#c99a4e]/20'
                : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Wave Geometry
          </button>
          <button
            id="hero-layer-risk"
            onClick={() => setActiveLayer('risk')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              activeLayer === 'risk'
                ? 'bg-[#c99a4e] text-slate-950 font-bold shadow-md shadow-[#c99a4e]/20'
                : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Risk Asymmetry (1:{riskMultiplier}R)
          </button>
        </div>
      </div>

      {/* Main Interactive Chart Canvas */}
      <div className={`relative z-10 h-64 sm:h-72 w-full rounded-xl border overflow-hidden flex items-center justify-center p-2 transition-colors ${
        isLight ? 'bg-[#f8fafc] border-slate-200 shadow-inner' : 'bg-[#060a12] border-white/10 shadow-inner'
      }`}>
        <svg 
          viewBox="0 0 600 300" 
          className={`w-full h-full select-none ${isLight ? 'text-slate-600' : 'text-slate-400'}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="auroraGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c99a4e" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#f3d99d" stopOpacity="1" />
              <stop offset="100%" stopColor="#e5b869" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="channelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c99a4e" stopOpacity={isLight ? "0.18" : "0.15"} />
              <stop offset="100%" stopColor="#c99a4e" stopOpacity="0.01" />
            </linearGradient>
            <linearGradient id="targetGreen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Coordinate Grid Lines */}
          <line x1="40" y1="50" x2="560" y2="50" stroke={isLight ? "rgba(15,23,42,0.07)" : "rgba(255,255,255,0.07)"} strokeDasharray="3 3" />
          <line x1="40" y1="110" x2="560" y2="110" stroke={isLight ? "rgba(15,23,42,0.07)" : "rgba(255,255,255,0.07)"} strokeDasharray="3 3" />
          <line x1="40" y1="170" x2="560" y2="170" stroke={isLight ? "rgba(15,23,42,0.07)" : "rgba(255,255,255,0.07)"} strokeDasharray="3 3" />
          <line x1="40" y1="230" x2="560" y2="230" stroke={isLight ? "rgba(15,23,42,0.07)" : "rgba(255,255,255,0.07)"} strokeDasharray="3 3" />

          {/* Background Candlestick Shadows for Institutional Authenticity */}
          <g opacity={isLight ? "0.2" : "0.25"}>
            {/* Candle 1 */}
            <line x1="80" y1="220" x2="80" y2="255" stroke={isLight ? "#10b981" : "#34d399"} strokeWidth="1.5" />
            <rect x="76" y="228" width="8" height="20" fill={isLight ? "#10b981" : "#34d399"} rx="1" />

            {/* Candle 2 */}
            <line x1="120" y1="190" x2="120" y2="230" stroke={isLight ? "#10b981" : "#34d399"} strokeWidth="1.5" />
            <rect x="116" y="198" width="8" height="24" fill={isLight ? "#10b981" : "#34d399"} rx="1" />

            {/* Candle 3 (Pullback) */}
            <line x1="200" y1="165" x2="200" y2="205" stroke={isLight ? "#ef4444" : "#f87171"} strokeWidth="1.5" />
            <rect x="196" y="172" width="8" height="18" fill={isLight ? "#ef4444" : "#f87171"} rx="1" />

            {/* Candle 4 */}
            <line x1="320" y1="130" x2="320" y2="180" stroke={isLight ? "#10b981" : "#34d399"} strokeWidth="1.5" />
            <rect x="316" y="140" width="8" height="30" fill={isLight ? "#10b981" : "#34d399"} rx="1" />

            {/* Candle 5 */}
            <line x1="450" y1="90" x2="450" y2="135" stroke={isLight ? "#10b981" : "#34d399"} strokeWidth="1.5" />
            <rect x="446" y="98" width="8" height="25" fill={isLight ? "#10b981" : "#34d399"} rx="1" />
          </g>

          {/* Structural Equilibrium Channel */}
          <path
            d="M 50 220 L 170 170 L 270 195 L 410 95 L 530 115 L 530 155 L 410 135 L 270 235 L 170 210 L 50 255 Z"
            fill="url(#channelGradient)"
          />

          {/* Structural Trendlines */}
          <line x1="50" y1="220" x2="410" y2="95" stroke="#c99a4e" strokeWidth="1.5" strokeOpacity={isLight ? "0.8" : "0.6"} strokeDasharray="4 4" />
          <line x1="50" y1="255" x2="410" y2="135" stroke="#c99a4e" strokeWidth="1.5" strokeOpacity={isLight ? "0.7" : "0.5"} strokeDasharray="4 4" />

          {/* Main Price Wave Curve */}
          <path
            d="M 50 240 Q 110 220 165 175 T 265 190 T 405 105 T 530 120"
            fill="none"
            stroke="url(#auroraGold)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* LAYER 1: PRICE STRUCTURE */}
          {activeLayer === 'structure' && (
            <g className="transition-all duration-300">
              <circle cx="165" cy="175" r="5" fill="#c99a4e" stroke={isLight ? "#ffffff" : "#080c15"} strokeWidth="2.5" />
              <text x="165" y="156" fill={isLight ? "#966b24" : "#f3d99d"} fontSize="11" textAnchor="middle" fontWeight="700">
                Higher High (H₁)
              </text>

              <circle cx="265" cy="190" r="5" fill="#c99a4e" stroke={isLight ? "#ffffff" : "#080c15"} strokeWidth="2.5" />
              <text x="265" y="214" fill={isLight ? "#475569" : "#cbd5e1"} fontSize="10" textAnchor="middle" fontWeight="600">
                Higher Low (L₁)
              </text>

              <circle cx="405" cy="105" r="5.5" fill="#c99a4e" stroke={isLight ? "#ffffff" : "#080c15"} strokeWidth="2.5" />
              <text x="405" y="85" fill={isLight ? "#966b24" : "#e5b869"} fontSize="11" textAnchor="middle" fontWeight="800">
                Break of Structure (BOS)
              </text>

              {/* Equilibrium Axis */}
              <line x1="40" y1="160" x2="560" y2="160" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="6 4" strokeOpacity="0.8" />
              <text x="550" y="152" fill={isLight ? "#0369a1" : "#38bdf8"} fontSize="10" textAnchor="end" fontWeight="700">
                Institutional Fair Value
              </text>
            </g>
          )}

          {/* LAYER 2: ELLIOTT WAVE GEOMETRY */}
          {activeLayer === 'elliott' && (
            <g className="transition-all duration-300">
              <text x="50" y="258" fill={isLight ? "#475569" : "#cbd5e1"} fontSize="12" fontWeight="700">0</text>
              <text x="165" y="156" fill="#966b24" fontSize="13" fontWeight="bold">(1)</text>
              <text x="265" y="212" fill="#966b24" fontSize="13" fontWeight="bold">(2)</text>
              <text x="405" y="86" fill={isLight ? "#966b24" : "#f3d99d"} fontSize="14" fontWeight="bold">(3)</text>
              <text x="475" y="135" fill="#966b24" fontSize="13" fontWeight="bold">(4)</text>
              <text x="530" y="103" fill={isLight ? "#966b24" : "#f3d99d"} fontSize="13" fontWeight="bold">(5)</text>

              {/* Fibonacci projection arcs */}
              <path d="M 165 175 A 70 70 0 0 1 265 190" fill="none" stroke="#c99a4e" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M 265 190 A 140 140 0 0 1 405 105" fill="none" stroke="#c99a4e" strokeWidth="1.4" strokeDasharray="4 2" />
              <text x="335" y="128" fill={isLight ? "#966b24" : "#e5b869"} fontSize="11" fontWeight="700" textAnchor="middle">
                1.618 Fib Impulse
              </text>
            </g>
          )}

          {/* LAYER 3: DEFINED RISK ASYMMETRY */}
          {activeLayer === 'risk' && (
            <g className="transition-all duration-300">
              {/* Profit Target Box */}
              <rect x="265" y="105" width="140" height="85" fill="url(#targetGreen)" rx="4" stroke="#10b981" strokeWidth="1.2" strokeDasharray="3 3" />
              {/* Stop Loss Box */}
              <rect x="265" y="190" width="140" height="30" fill={isLight ? "rgba(239,68,68,0.12)" : "rgba(239,68,68,0.18)"} rx="4" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="3 3" />
              
              <line x1="265" y1="190" x2="405" y2="190" stroke={isLight ? "#1e293b" : "#f8fafc"} strokeWidth="2" />
              <text x="272" y="184" fill={isLight ? "#0f172a" : "#f8fafc"} fontSize="10" fontWeight="700">Entry Execution</text>
              <text x="400" y="125" fill="#059669" fontSize="12" fontWeight="800" textAnchor="end">Target (+{riskMultiplier}R)</text>
              <text x="400" y="210" fill="#dc2626" fontSize="10" fontWeight="700" textAnchor="end">Stop Loss (-1R)</text>
              <text x="335" y="148" fill="#059669" fontSize="13" fontWeight="bold" textAnchor="middle">Defined Asymmetry</text>
            </g>
          )}
        </svg>
      </div>

      {/* Analytical Pillars Under Visual */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3">
        <div className={`flex items-start gap-2 p-2.5 rounded-xl border ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.03] border-white/5'
        }`}>
          <Layers className="w-4 h-4 text-[#c99a4e] shrink-0 mt-0.5" />
          <div>
            <div className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>Sequential Logic</div>
            <div className={`text-[11px] leading-tight ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>Derived from institutional order flow</div>
          </div>
        </div>

        <div className={`flex items-start gap-2 p-2.5 rounded-xl border ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.03] border-white/5'
        }`}>
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <div className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>Risk Before Return</div>
            <div className={`text-[11px] leading-tight ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>Quantified stop loss prior to trade execution</div>
          </div>
        </div>

        <div className={`flex items-start gap-2 p-2.5 rounded-xl border ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.03] border-white/5'
        }`}>
          <Crosshair className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
          <div>
            <div className={`text-xs font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>Process &gt; Tips</div>
            <div className={`text-[11px] leading-tight ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>Building independent trader mastery</div>
          </div>
        </div>
      </div>
    </div>
  );
}
