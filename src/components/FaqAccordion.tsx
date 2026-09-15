import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaqItem } from '../types';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
  allowMultiple?: boolean;
}

export function FaqAccordion({ items, title = "Frequently Asked Questions", eyebrow = "FAQ", allowMultiple = false }: FaqAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);
  const { isLight } = useTheme();

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? isLight
                    ? 'bg-white border-[#c99a4e] shadow-md shadow-[#c99a4e]/10'
                    : 'bg-gradient-to-r from-[#111a2d] to-[#0a101d] border-[#c99a4e]/40 shadow-lg shadow-black/40'
                  : isLight
                    ? 'bg-white hover:bg-slate-50 border-slate-200 shadow-sm'
                    : 'bg-[#0b101c]/80 hover:bg-[#0e1628] border-white/10 hover:border-white/20'
              }`}
            >
              <button
                id={`faq-btn-${idx}`}
                onClick={() => toggleIndex(idx)}
                aria-expanded={isOpen}
                className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c99a4e] transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <span className={`text-xs font-mono font-bold mt-1 shrink-0 px-2 py-0.5 rounded border ${
                    isLight 
                      ? 'bg-slate-100 text-[#966b24] border-slate-200' 
                      : 'bg-white/5 text-[#c99a4e] border-white/5'
                  }`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-base sm:text-lg font-semibold tracking-tight leading-snug ${
                    isLight ? 'text-slate-900' : 'text-white'
                  }`}>
                    {item.question}
                  </span>
                </div>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                    isOpen
                      ? 'bg-[#c99a4e] text-slate-950 border-[#c99a4e] rotate-180'
                      : isLight
                        ? 'bg-slate-100 text-slate-600 border-slate-200'
                        : 'bg-white/5 text-slate-400 border-white/10'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div 
                  id={`faq-answer-${idx}`}
                  className={`px-5 sm:px-6 pb-6 pt-1 border-t text-sm sm:text-base leading-relaxed animate-in fade-in-50 duration-200 ${
                    isLight ? 'border-slate-100 text-slate-600' : 'border-white/5 text-slate-300'
                  }`}
                >
                  <p className="pl-9">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

