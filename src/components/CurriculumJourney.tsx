import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { SAGA_STAGES } from '../data/content';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  BarChart2, 
  Target, 
  Activity, 
  Sliders 
} from 'lucide-react';

interface CurriculumJourneyProps {
  isCoursePage?: boolean;
  onNavigateToCourse?: () => void;
  onOpenReservation?: () => void;
}

function StageVisualIllustration({ stageId, isLight }: { stageId: string; isLight: boolean }) {
  if (stageId === 'launchpad') {
    return (
      <div className={`p-4 rounded-xl border relative overflow-hidden transition-all ${
        isLight ? 'bg-slate-50 border-slate-200' : 'bg-black/40 border-white/10'
      }`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-mono font-bold text-[#c99a4e] flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" />
            Stage 01: Market Structure & Technical Setup
          </span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full ${isLight ? 'bg-emerald-100 text-emerald-800' : 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'}`}>
            Foundational Flow
          </span>
        </div>

        {/* SVG Technical Chart Setup */}
        <div className="w-full h-36 relative">
          <svg className="w-full h-full" viewBox="0 0 400 130" fill="none">
            {/* Grid lines */}
            <line x1="0" y1="30" x2="400" y2="30" stroke={isLight ? '#e2e8f0' : '#1e293b'} strokeDasharray="3 3" />
            <line x1="0" y1="70" x2="400" y2="70" stroke={isLight ? '#e2e8f0' : '#1e293b'} strokeDasharray="3 3" />
            <line x1="0" y1="100" x2="400" y2="100" stroke={isLight ? '#e2e8f0' : '#1e293b'} strokeDasharray="3 3" />

            {/* Resistance level */}
            <line x1="20" y1="42" x2="380" y2="42" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="310" y="38" fill="#ef4444" fontSize="9" fontWeight="bold">Key Resistance</text>

            {/* Support trendline */}
            <line x1="40" y1="96" x2="360" y2="52" stroke="#10b981" strokeWidth="1.5" />
            <text x="45" y="112" fill="#10b981" fontSize="9" fontWeight="bold">Ascending Dynamic Support</text>

            {/* Price Action Path with Candlestick Emulation */}
            <path
              d="M 30,85 L 70,60 L 110,75 L 160,45 L 210,65 L 260,40 L 290,42 L 350,22"
              stroke="#c99a4e"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Candlesticks representations */}
            <rect x="67" y="55" width="6" height="15" fill="#10b981" rx="1" />
            <rect x="107" y="68" width="6" height="14" fill="#ef4444" rx="1" />
            <rect x="157" y="42" width="6" height="20" fill="#10b981" rx="1" />
            <rect x="207" y="58" width="6" height="16" fill="#ef4444" rx="1" />
            <rect x="257" y="36" width="6" height="24" fill="#10b981" rx="1" />
            {/* Breakout Candle */}
            <rect x="347" y="18" width="7" height="28" fill="#e5b869" rx="1" stroke="#c99a4e" />

            {/* Breakout Callout */}
            <circle cx="350" cy="22" r="4" fill="#c99a4e" />
          </svg>
        </div>

        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200 dark:border-white/10 text-[10px] text-slate-500 dark:text-slate-400">
          <span>Higher Highs & Higher Lows</span>
          <span className="font-semibold text-[#c99a4e]">Confirmation Over Prediction</span>
        </div>
      </div>
    );
  }

  if (stageId === 'velocity') {
    return (
      <div className={`p-4 rounded-xl border relative overflow-hidden transition-all ${
        isLight ? 'bg-slate-50 border-slate-200' : 'bg-black/40 border-white/10'
      }`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-mono font-bold text-[#c99a4e] flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            Stage 02: Elliott Wave & Fibonacci Geometry
          </span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full ${isLight ? 'bg-[#fdf6e9] text-[#966b24]' : 'bg-[#c99a4e]/20 text-[#f3d99d] border border-[#c99a4e]/30'}`}>
            Wave Dynamics
          </span>
        </div>

        {/* SVG Elliott Wave 1-2-3-4-5 & ABC */}
        <div className="w-full h-36 relative">
          <svg className="w-full h-full" viewBox="0 0 400 130" fill="none">
            {/* Golden ratio bands */}
            <line x1="20" y1="85" x2="380" y2="85" stroke={isLight ? '#cbd5e1' : '#334155'} strokeWidth="1" strokeDasharray="3 3" />
            <text x="320" y="82" fill="#94a3b8" fontSize="8">Fib 61.8% Support</text>

            <line x1="20" y1="28" x2="380" y2="28" stroke={isLight ? '#cbd5e1' : '#334155'} strokeWidth="1" strokeDasharray="3 3" />
            <text x="320" y="25" fill="#94a3b8" fontSize="8">Fib 161.8% Target</text>

            {/* Wave Impulse (1)-(2)-(3)-(4)-(5) */}
            <path
              d="M 25,110 L 80,68 L 125,92 L 210,24 L 255,58 L 305,18 L 340,48 L 365,34 L 385,62"
              stroke="#c99a4e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Wave Labels */}
            <circle cx="80" cy="68" r="8" fill={isLight ? '#fff' : '#0f172a'} stroke="#c99a4e" strokeWidth="1.5" />
            <text x="77" y="72" fontSize="9" fontWeight="bold" fill="#c99a4e">1</text>

            <circle cx="125" cy="92" r="8" fill={isLight ? '#fff' : '#0f172a'} stroke="#c99a4e" strokeWidth="1.5" />
            <text x="122" y="96" fontSize="9" fontWeight="bold" fill="#c99a4e">2</text>

            <circle cx="210" cy="24" r="9" fill="#c99a4e" />
            <text x="207" y="28" fontSize="10" fontWeight="bold" fill="#000">3</text>

            <circle cx="255" cy="58" r="8" fill={isLight ? '#fff' : '#0f172a'} stroke="#c99a4e" strokeWidth="1.5" />
            <text x="252" y="62" fontSize="9" fontWeight="bold" fill="#c99a4e">4</text>

            <circle cx="305" cy="18" r="8" fill={isLight ? '#fff' : '#0f172a'} stroke="#c99a4e" strokeWidth="1.5" />
            <text x="302" y="22" fontSize="9" fontWeight="bold" fill="#c99a4e">5</text>

            {/* Corrective A-B-C */}
            <text x="342" y="44" fontSize="9" fontWeight="bold" fill="#ef4444">A</text>
            <text x="367" y="30" fontSize="9" fontWeight="bold" fill="#10b981">B</text>
            <text x="387" y="74" fontSize="9" fontWeight="bold" fill="#ef4444">C</text>
          </svg>
        </div>

        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200 dark:border-white/10 text-[10px] text-slate-500 dark:text-slate-400">
          <span>Impulse & Corrective Cycles</span>
          <span className="font-semibold text-[#c99a4e]">Multi-Timeframe Fractal Harmony</span>
        </div>
      </div>
    );
  }

  if (stageId === 'orbit') {
    return (
      <div className={`p-4 rounded-xl border relative overflow-hidden transition-all ${
        isLight ? 'bg-slate-50 border-slate-200' : 'bg-black/40 border-white/10'
      }`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-mono font-bold text-[#c99a4e] flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5" />
            Stage 03: Derivatives & Option Risk Architecture
          </span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full ${isLight ? 'bg-sky-100 text-sky-800' : 'bg-sky-950/60 text-sky-300 border border-sky-800/40'}`}>
            Defined Risk Spreads
          </span>
        </div>

        {/* Options Payoff Diagram */}
        <div className="w-full h-36 relative">
          <svg className="w-full h-full" viewBox="0 0 400 130" fill="none">
            {/* Zero axis */}
            <line x1="30" y1="70" x2="370" y2="70" stroke={isLight ? '#94a3b8' : '#475569'} strokeWidth="1.5" />
            <text x="35" y="66" fill="#94a3b8" fontSize="8">₹0 Profit / Loss</text>

            {/* Profit Zone (Green) */}
            <path d="M 230,70 L 300,30 L 370,30" stroke="#10b981" strokeWidth="2.5" />
            <text x="310" y="24" fill="#10b981" fontSize="9" fontWeight="bold">Max Capped Profit</text>

            {/* Sloping PnL */}
            <line x1="160" y1="105" x2="230" y2="70" stroke="#c99a4e" strokeWidth="2.5" />

            {/* Loss Zone (Defined Risk Capped) */}
            <path d="M 40,105 L 160,105" stroke="#ef4444" strokeWidth="2.5" />
            <text x="45" y="118" fill="#ef4444" fontSize="9" fontWeight="bold">Defined Max Loss (Protected)</text>

            {/* Breakeven Marker */}
            <circle cx="230" cy="70" r="4" fill="#e5b869" />
            <text x="215" y="85" fill="#c99a4e" fontSize="8" fontWeight="bold">Breakeven</text>

            {/* Theta curve */}
            <path d="M 120,45 Q 220,50 320,38" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="140" y="40" fill="#38bdf8" fontSize="8">Theta Decay Decay Curve (T+0 to Expiry)</text>
          </svg>
        </div>

        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200 dark:border-white/10 text-[10px] text-slate-500 dark:text-slate-400">
          <span>Greeks: Delta • Gamma • Theta • Vega</span>
          <span className="font-semibold text-emerald-500">Zero Naked Exposure</span>
        </div>
      </div>
    );
  }

  // Stage 04: Cruise Control
  return (
    <div className={`p-4 rounded-xl border relative overflow-hidden transition-all ${
      isLight ? 'bg-slate-50 border-slate-200' : 'bg-black/40 border-white/10'
    }`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-mono font-bold text-[#c99a4e] flex items-center gap-1.5">
          <Target className="w-3.5 h-3.5" />
          Stage 04: Trade Journal Auditing & Psychology
        </span>
        <span className={`text-[10px] px-2 py-0.5 rounded-full ${isLight ? 'bg-emerald-100 text-emerald-800' : 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'}`}>
          Live Execution Audit
        </span>
      </div>

      {/* Trade Log Matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
        <div className={`p-2 rounded-lg border text-center ${isLight ? 'bg-white border-slate-200' : 'bg-black/30 border-white/5'}`}>
          <div className="text-[10px] text-slate-400">Risk : Reward</div>
          <div className="text-sm font-bold text-emerald-500 font-mono">1 : 2.8</div>
        </div>
        <div className={`p-2 rounded-lg border text-center ${isLight ? 'bg-white border-slate-200' : 'bg-black/30 border-white/5'}`}>
          <div className="text-[10px] text-slate-400">Risk Per Trade</div>
          <div className="text-sm font-bold text-[#c99a4e] font-mono">≤ 1.2%</div>
        </div>
        <div className={`p-2 rounded-lg border text-center ${isLight ? 'bg-white border-slate-200' : 'bg-black/30 border-white/5'}`}>
          <div className="text-[10px] text-slate-400">Process Audit</div>
          <div className="text-sm font-bold text-sky-400 font-mono">96 / 100</div>
        </div>
        <div className={`p-2 rounded-lg border text-center ${isLight ? 'bg-white border-slate-200' : 'bg-black/30 border-white/5'}`}>
          <div className="text-[10px] text-slate-400">Emotional Bias</div>
          <div className="text-sm font-bold text-emerald-500 font-mono">Controlled</div>
        </div>
      </div>

      <div className={`p-2.5 rounded-lg border text-xs font-mono flex items-center justify-between ${
        isLight ? 'bg-white border-slate-200 text-slate-700' : 'bg-black/20 border-white/5 text-slate-300'
      }`}>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Rule: Never Enter Without Defined Stop Loss & Pre-Calculated Position Size</span>
        </span>
        <span className="text-emerald-500 font-bold text-[11px]">PASSED</span>
      </div>

      <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200 dark:border-white/10 text-[10px] text-slate-500 dark:text-slate-400">
        <span>Post-Trade Reflection Checklist</span>
        <span className="font-semibold text-[#c99a4e]">Outcome Bias Decoupling</span>
      </div>
    </div>
  );
}

export function CurriculumJourney({ isCoursePage = false, onNavigateToCourse, onOpenReservation }: CurriculumJourneyProps) {
  const [selectedStageId, setSelectedStageId] = useState<string>('launchpad');
  const activeStage = SAGA_STAGES.find((s) => s.id === selectedStageId) || SAGA_STAGES[0];
  const { isLight } = useTheme();

  return (
    <div className="w-full">
      {/* 13-Week Journey Metric Header */}
      <div className={`mb-8 p-4 sm:p-5 rounded-2xl border shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 transition-all ${
        isLight 
          ? 'bg-white border-slate-200 text-slate-800' 
          : 'bg-gradient-to-r from-[#0f172a]/90 via-[#131d33] to-[#0f172a]/90 border-[#c99a4e]/20'
      }`}>
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-10 h-10 rounded-xl bg-[#c99a4e]/15 border border-[#c99a4e]/30 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5 text-[#c99a4e]" />
          </div>
          <div>
            <div className={`text-xs font-semibold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Progressive Curriculum Architecture
            </div>
            <div className={`text-sm sm:text-base font-bold font-display ${isLight ? 'text-slate-900' : 'text-white'}`}>
              13-Week Sequential Learning Path
            </div>
          </div>
        </div>

        {/* Calculation equation badge */}
        <div className={`flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-mono px-4 py-2 rounded-xl border ${
          isLight 
            ? 'bg-slate-100/80 border-slate-200 text-slate-700' 
            : 'bg-black/40 border-white/10 text-slate-300'
        }`}>
          <span className={isLight ? 'text-[#966b24] font-bold' : 'text-[#c99a4e] font-semibold'}>3 wks</span>
          <span className={isLight ? 'text-slate-400' : 'text-slate-500'}>+</span>
          <span className={isLight ? 'text-[#966b24] font-bold' : 'text-[#c99a4e] font-semibold'}>4 wks</span>
          <span className={isLight ? 'text-slate-400' : 'text-slate-500'}>+</span>
          <span className={isLight ? 'text-[#966b24] font-bold' : 'text-[#c99a4e] font-semibold'}>4 wks</span>
          <span className={isLight ? 'text-slate-400' : 'text-slate-500'}>+</span>
          <span className={isLight ? 'text-[#966b24] font-bold' : 'text-[#c99a4e] font-semibold'}>2 wks</span>
          <span className={isLight ? 'text-slate-400' : 'text-slate-500'}>=</span>
          <span className={`px-2 py-0.5 rounded font-bold border ${
            isLight 
              ? 'bg-[#fdf6e9] text-[#966b24] border-[#e9d5a1]' 
              : 'bg-[#c99a4e]/20 text-[#f3d99d] border-[#c99a4e]/40'
          }`}>
            13 Weeks Total
          </span>
        </div>
      </div>

      {/* Interactive Step Track */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {SAGA_STAGES.map((stage, idx) => {
          const isSelected = stage.id === selectedStageId;
          return (
            <button
              key={stage.id}
              id={`stage-card-${stage.id}`}
              onClick={() => setSelectedStageId(stage.id)}
              className={`text-left p-4 sm:p-5 rounded-xl border transition-all relative overflow-hidden group cursor-pointer ${
                isSelected
                  ? isLight
                    ? 'bg-[#fdfbf7] border-[#c99a4e] shadow-lg shadow-[#c99a4e]/15'
                    : 'bg-gradient-to-b from-[#17233d] to-[#0c1322] border-[#c99a4e] shadow-xl shadow-[#c99a4e]/10'
                  : isLight
                    ? 'bg-white hover:bg-slate-50 border-slate-200 shadow-sm'
                    : 'bg-[#0b101c]/70 hover:bg-[#0f172a] border-white/10 hover:border-white/20'
              }`}
            >
              {/* Active top indicator bar */}
              {isSelected && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e5b869] to-[#c99a4e]" />
              )}

              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  isSelected 
                    ? 'bg-[#c99a4e] text-slate-950' 
                    : isLight 
                      ? 'bg-slate-100 text-slate-600' 
                      : 'bg-white/10 text-slate-400'
                }`}>
                  Stage {stage.number}
                </span>
                <span className={`text-xs font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {stage.duration}
                </span>
              </div>

              <h4 className={`text-base font-bold font-display tracking-tight mb-1 transition-colors ${
                isSelected 
                  ? isLight ? 'text-slate-900' : 'text-white' 
                  : isLight ? 'text-slate-800 group-hover:text-[#966b24]' : 'text-white group-hover:text-[#f3d99d]'
              }`}>
                {stage.name}
              </h4>
              <p className={`text-xs line-clamp-1 font-medium mb-3 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {stage.subtitle}
              </p>

              {/* Focus tags */}
              <div className="flex flex-wrap gap-1">
                {stage.focus.slice(0, 2).map((item, fIdx) => (
                  <span
                    key={fIdx}
                    className={`text-[10px] px-2 py-0.5 rounded truncate max-w-[130px] border ${
                      isLight 
                        ? 'bg-slate-100 text-slate-600 border-slate-200' 
                        : 'bg-white/5 text-slate-300 border-white/5'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Progress connector line on desktop */}
              {idx < SAGA_STAGES.length - 1 && (
                <div className={`hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none ${
                  isLight ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  <ChevronRight className="w-5 h-5" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Detailed Active Stage Panel */}
      <div className={`p-6 sm:p-8 rounded-2xl border shadow-2xl relative overflow-hidden transition-all ${
        isLight 
          ? 'bg-white border-slate-200 shadow-xl shadow-slate-200/50' 
          : 'bg-gradient-to-br from-[#0e1628] via-[#0a0f1d] to-[#070b14] border-white/10'
      }`}>
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c99a4e]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Stage Overview */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${
                isLight 
                  ? 'bg-[#fdf6e9] text-[#966b24] border-[#e9d5a1]' 
                  : 'bg-[#c99a4e]/15 text-[#e5b869] border-[#c99a4e]/30'
              }`}>
                Stage {activeStage.number} • {activeStage.duration}
              </span>
              <span className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Learning Format: <strong className={isLight ? 'text-slate-800' : 'text-slate-200'}>{activeStage.learningFormat.join(' • ')}</strong>
              </span>
            </div>

            <div>
              <h3 className={`text-2xl sm:text-3xl font-bold font-display tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                {activeStage.name}
              </h3>
              <p className={`text-sm font-semibold mt-1 ${isLight ? 'text-[#966b24]' : 'text-[#e5b869]'}`}>
                {activeStage.subtitle}
              </p>
            </div>

            <p className={`text-sm sm:text-base leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              {activeStage.description}
            </p>

            {/* Visual Stage Illustration Chart / Diagram */}
            <div className="pt-2">
              <StageVisualIllustration stageId={activeStage.id} isLight={isLight} />
            </div>

            {/* Core Focus Badges */}
            <div>
              <h5 className={`text-xs font-semibold mb-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Core Competencies Developed:
              </h5>
              <div className="flex flex-wrap gap-2">
                {activeStage.focus.map((item, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border ${
                      isLight 
                        ? 'bg-slate-50 border-slate-200 text-slate-700' 
                        : 'bg-white/5 border-white/10 text-slate-200'
                    }`}
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isLight ? 'text-[#966b24]' : 'text-[#c99a4e]'}`} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Modules Outline */}
            {activeStage.modules && (
              <div className="pt-3 space-y-3">
                <h5 className={`text-xs font-semibold ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Curriculum Module Breakdown:
                </h5>
                <div className="space-y-2.5">
                  {activeStage.modules.map((module, mIdx) => (
                    <div
                      key={mIdx}
                      className={`p-3 rounded-xl border transition-colors ${
                        isLight 
                          ? 'bg-slate-50/80 border-slate-200 hover:border-slate-300' 
                          : 'bg-black/30 border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className={`text-xs sm:text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        {module.title}
                      </div>
                      <div className={`text-xs mt-0.5 leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                        {module.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Key Stage Milestones & CTA */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
            <div className={`p-5 rounded-xl border space-y-4 ${
              isLight 
                ? 'bg-[#fdfbf6] border-[#c99a4e]/30 shadow-sm' 
                : 'bg-[#111b2f]/80 border-[#c99a4e]/20'
            }`}>
              <div className={`flex items-center gap-2 text-xs font-bold ${
                isLight ? 'text-[#966b24]' : 'text-[#f3d99d]'
              }`}>
                <Sparkles className="w-4 h-4 text-[#c99a4e]" />
                Stage Milestones
              </div>

              <ul className="space-y-2.5">
                {activeStage.highlights?.map((hl, hIdx) => (
                  <li key={hIdx} className={`flex items-start gap-2.5 text-xs leading-relaxed ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c99a4e] mt-1.5 shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conversion / Action Card */}
            <div className={`p-5 rounded-xl border space-y-3 ${
              isLight 
                ? 'bg-slate-50 border-slate-200' 
                : 'bg-gradient-to-br from-[#162137] to-[#0c1425] border-white/10'
            }`}>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Ready to understand this stage in context?
              </div>
              <div className={`text-sm font-bold font-display ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Experience the method in our orientation session
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <button
                  id="stage-detail-reserve-btn"
                  onClick={onOpenReservation}
                  className="w-full sm:w-auto flex-1 px-4 py-2.5 rounded-lg bg-[#c99a4e] text-slate-950 text-xs font-bold hover:bg-[#e5b869] transition-colors text-center shadow-sm cursor-pointer"
                >
                  Reserve ₹99 Seat
                </button>
                {!isCoursePage && onNavigateToCourse && (
                  <button
                    id="stage-detail-course-btn"
                    onClick={onNavigateToCourse}
                    className={`w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-semibold border transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                      isLight 
                        ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300' 
                        : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                    }`}
                  >
                    <span>Full SAGA Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Homepage Navigation Link to Full SAGA Page */}
      {!isCoursePage && onNavigateToCourse && (
        <div className="mt-8 text-center">
          <button
            id="curriculum-preview-full-journey-cta"
            onClick={onNavigateToCourse}
            className={`group inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-semibold transition-all shadow-md cursor-pointer ${
              isLight 
                ? 'bg-white hover:bg-slate-50 border-slate-300 text-slate-900 hover:border-[#c99a4e]' 
                : 'bg-gradient-to-r from-[#17233c] to-[#0f172a] border-[#c99a4e]/30 text-white hover:border-[#c99a4e]'
            }`}
          >
            <span>See the Full SAGA Journey</span>
            <ArrowRight className="w-4 h-4 text-[#c99a4e] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}
