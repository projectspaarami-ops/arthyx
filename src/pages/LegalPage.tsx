import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { DISCLAIMER_PAGE_CONTENT, PRIVACY_PAGE_CONTENT, REFUND_POLICY_CONTENT, TERMS_CONTENT } from '../data/content';
import { ShieldCheck, FileText, Lock, RefreshCw, AlertCircle, Mail, MapPin } from 'lucide-react';
import { PageType } from '../types';

interface LegalPageProps {
  initialTab?: 'disclaimer' | 'privacy' | 'refund' | 'terms';
  onNavigate: (page: PageType) => void;
}

export function LegalPage({ initialTab = 'disclaimer', onNavigate }: LegalPageProps) {
  const { isLight } = useTheme();
  const [activeTab, setActiveTab] = useState<'disclaimer' | 'privacy' | 'refund' | 'terms'>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const tabs = [
    { id: 'disclaimer' as const, label: 'Disclaimer', icon: AlertCircle },
    { id: 'terms' as const, label: 'Terms & Conditions', icon: FileText },
    { id: 'privacy' as const, label: 'Privacy Policy', icon: Lock },
    { id: 'refund' as const, label: 'Refund Policy', icon: RefreshCw },
  ];

  const currentContent = activeTab === 'disclaimer'
    ? DISCLAIMER_PAGE_CONTENT
    : activeTab === 'terms'
    ? TERMS_CONTENT
    : activeTab === 'privacy'
    ? PRIVACY_PAGE_CONTENT
    : REFUND_POLICY_CONTENT;

  return (
    <div className="w-full pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* 1. Header & Tab Navigation */}
        <div className="space-y-6 text-center">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm border ${
            isLight 
              ? 'bg-[#fdf6e9] border-[#e9d5a1] text-[#966b24]' 
              : 'bg-[#c99a4e]/10 border-[#c99a4e]/30 text-[#e5b869]'
          }`}>
            <ShieldCheck className="w-4 h-4 text-[#c99a4e]" />
            <span>Governance & Legal Transparency</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight ${
            isLight ? 'text-slate-950' : 'text-white'
          }`}>
            {currentContent.title}
          </h1>

          <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Last Updated: {currentContent.lastUpdated}
          </p>

          {/* Legal Document Tab Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    onNavigate(tab.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#c99a4e] text-slate-950 shadow-md shadow-[#c99a4e]/20'
                      : isLight
                        ? 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Main Content Card */}
        <div className={`p-8 sm:p-12 rounded-3xl border shadow-xl space-y-8 ${
          isLight ? 'bg-white border-slate-200 shadow-slate-200/50' : 'bg-[#0f172a] border-white/10 shadow-2xl'
        }`}>
          {/* Document Intro */}
          <div className={`p-5 rounded-2xl border text-sm leading-relaxed ${
            isLight 
              ? 'bg-[#fcfbf9] border-slate-200 text-slate-700' 
              : 'bg-white/[0.02] border-white/5 text-slate-300'
          }`}>
            {currentContent.intro}
          </div>

          {/* Document Sections */}
          <div className="space-y-8 divide-y divide-slate-100 dark:divide-white/5">
            {currentContent.sections.map((sec, idx) => (
              <div key={idx} className={`space-y-3 ${idx !== 0 ? 'pt-6' : ''}`}>
                <h2 className={`text-lg sm:text-xl font-bold font-display ${
                  isLight ? 'text-slate-950' : 'text-white'
                }`}>
                  {sec.title}
                </h2>
                <div className={`space-y-2.5 text-sm leading-relaxed ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  {sec.content.map((c, i) => (
                    <p key={i}>{c}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Details Card at Bottom of Policy */}
          {('contact' in currentContent) && currentContent.contact && (
            <div className={`pt-6 border-t mt-8 p-6 rounded-2xl border ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.02] border-white/5'
            }`}>
              <h3 className={`font-bold font-display text-sm mb-3 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Official Communication & Queries
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#c99a4e]" />
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    Email: {currentContent.contact.email}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#c99a4e]" />
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    Address: {currentContent.contact.address}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
