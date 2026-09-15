import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { CONTACT_PAGE_CONTENT } from '../data/content';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  onOpenReservation: () => void;
}

export function ContactPage({ onOpenReservation }: ContactPageProps) {
  const { isLight } = useTheme();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Course Enquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="w-full pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

        {/* 1. Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm border ${
            isLight 
              ? 'bg-[#243E8A]/10 border-[#243E8A]/20 text-[#243E8A]' 
              : 'bg-[#FBBE21]/10 border-[#FBBE21]/30 text-[#FBBE21]'
          }`}>
            <span className="w-2 h-2 rounded-full bg-[#FBBE21]" />
            <span>{CONTACT_PAGE_CONTENT.title}</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight ${
            isLight ? 'text-[#172033]' : 'text-white'
          }`}>
            {CONTACT_PAGE_CONTENT.headline}
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-[#5B6475]' : 'text-slate-300'
          }`}>
            {CONTACT_PAGE_CONTENT.subheadline}
          </p>

          <p className={`text-sm ${isLight ? 'text-[#5B6475]' : 'text-slate-400'}`}>
            {CONTACT_PAGE_CONTENT.intro}
          </p>
        </div>

        {/* 2. Grid: Contact Info & Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-3xl border space-y-6 ${
              isLight ? 'bg-white border-[#DDE2EC] shadow-sm' : 'bg-[#0f172a] border-white/10 shadow-xl'
            }`}>
              <div className="space-y-2">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                  isLight ? 'bg-[#243E8A]/10 text-[#243E8A] border-[#243E8A]/20' : 'bg-white/5 text-[#FBBE21] border-white/10'
                }`}>
                  Direct Assistance
                </span>
                <h2 className={`text-2xl font-bold font-display ${isLight ? 'text-[#172033]' : 'text-white'}`}>
                  {CONTACT_PAGE_CONTENT.helpHeading}
                </h2>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
                  {CONTACT_PAGE_CONTENT.helpText}
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#DDE2EC]/60 dark:border-white/5">
                <a
                  href={`mailto:${CONTACT_PAGE_CONTENT.info.email}`}
                  className={`flex items-start gap-3.5 p-3.5 rounded-xl border transition-all ${
                    isLight 
                      ? 'bg-[#F8F9FC] hover:bg-slate-100 border-[#DDE2EC] text-[#172033]' 
                      : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/5 text-slate-200'
                  }`}
                >
                  <Mail className="w-5 h-5 text-[#243E8A] dark:text-[#FBBE21] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-[#5B6475] font-medium">Email Address</div>
                    <div className="text-sm font-bold">{CONTACT_PAGE_CONTENT.info.email}</div>
                  </div>
                </a>

                <div
                  className={`flex items-start gap-3.5 p-3.5 rounded-xl border ${
                    isLight ? 'bg-[#F8F9FC] border-[#DDE2EC] text-[#172033]' : 'bg-white/[0.02] border-white/5 text-slate-200'
                  }`}
                >
                  <Phone className="w-5 h-5 text-[#243E8A] dark:text-[#FBBE21] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-[#5B6475] font-medium">Phone Support</div>
                    <div className="text-sm font-bold">{CONTACT_PAGE_CONTENT.info.phone}</div>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-3.5 p-3.5 rounded-xl border ${
                    isLight ? 'bg-[#F8F9FC] border-[#DDE2EC] text-[#172033]' : 'bg-white/[0.02] border-white/5 text-slate-200'
                  }`}
                >
                  <MapPin className="w-5 h-5 text-[#243E8A] dark:text-[#FBBE21] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-[#5B6475] font-medium">Location</div>
                    <div className="text-sm font-bold">{CONTACT_PAGE_CONTENT.info.address}</div>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-3.5 p-3.5 rounded-xl border ${
                    isLight ? 'bg-[#F8F9FC] border-[#DDE2EC] text-[#172033]' : 'bg-white/[0.02] border-white/5 text-slate-200'
                  }`}
                >
                  <Clock className="w-5 h-5 text-[#243E8A] dark:text-[#FBBE21] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-[#5B6475] font-medium">Working Hours</div>
                    <div className="text-sm font-bold">{CONTACT_PAGE_CONTENT.info.workingHours}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send Us an Enquiry Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-3xl border shadow-sm ${
              isLight ? 'bg-white border-[#DDE2EC]' : 'bg-[#0f172a] border-white/10 shadow-2xl'
            }`}>
              <div className="space-y-2 mb-6">
                <h2 className={`text-2xl font-bold font-display ${isLight ? 'text-[#172033]' : 'text-white'}`}>
                  Send Us an Enquiry
                </h2>
                <p className={`text-sm ${isLight ? 'text-[#5B6475]' : 'text-slate-300'}`}>
                  Fill in your details below and an Arthyx education counselor will reach out shortly.
                </p>
              </div>

              {isSubmitted ? (
                <div className={`p-8 rounded-2xl border text-center space-y-4 ${
                  isLight ? 'bg-[#F8F9FC] border-[#243E8A]/30 text-[#172033]' : 'bg-[#FBBE21]/10 border-[#FBBE21]/30 text-white'
                }`}>
                  <div className="w-12 h-12 rounded-full bg-[#FBBE21] text-[#172B68] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display">Enquiry Submitted Successfully</h3>
                  <p className="text-sm text-[#5B6475] dark:text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.fullName}. Our team has received your enquiry regarding "{formData.subject}" and will respond to {formData.email} within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', subject: 'General Course Enquiry', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold border border-[#243E8A] text-[#243E8A] dark:border-[#FBBE21] dark:text-[#FBBE21] cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#172033] dark:text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your name"
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-[#243E8A] ${
                          isLight ? 'bg-[#F8F9FC] border-[#DDE2EC] text-[#172033]' : 'bg-white/5 border-white/10 text-white'
                        }`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#172033] dark:text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email address"
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-[#243E8A] ${
                          isLight ? 'bg-[#F8F9FC] border-[#DDE2EC] text-[#172033]' : 'bg-white/5 border-white/10 text-white'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#172033] dark:text-slate-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-[#243E8A] ${
                          isLight ? 'bg-[#F8F9FC] border-[#DDE2EC] text-[#172033]' : 'bg-white/5 border-white/10 text-white'
                        }`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#172033] dark:text-slate-300">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-[#243E8A] ${
                          isLight ? 'bg-[#F8F9FC] border-[#DDE2EC] text-[#172033]' : 'bg-[#0f172a] border-white/10 text-white'
                        }`}
                      >
                        <option value="General Course Enquiry">General Course Enquiry</option>
                        <option value="SAGA 13-Week Curriculum">SAGA 13-Week Curriculum</option>
                        <option value="₹99 Eye-Opener Session">₹99 Eye-Opener Session</option>
                        <option value="Mentorship & Small Batches">Mentorship & Small Batches</option>
                        <option value="Other Question">Other Question</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#172033] dark:text-slate-300">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or question here..."
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-[#243E8A] ${
                        isLight ? 'bg-[#F8F9FC] border-[#DDE2EC] text-[#172033]' : 'bg-white/5 border-white/10 text-white'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-[#172B68] bg-[#FBBE21] hover:bg-[#f3b516] shadow-lg shadow-[#FBBE21]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 3. Take the Next Step in Your Learning Journey (PDF page 44) */}
        <div className={`p-8 sm:p-12 rounded-3xl border text-center ${
          isLight 
            ? 'bg-gradient-to-b from-[#F8F9FC] to-white border-[#DDE2EC] shadow-sm' 
            : 'bg-gradient-to-b from-[#131b2c] to-[#090d18] border-white/10 shadow-2xl'
        }`}>
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className={`text-2xl sm:text-3xl font-bold font-display ${
              isLight ? 'text-[#172033]' : 'text-white'
            }`}>
              {CONTACT_PAGE_CONTENT.ctaBox.headline}
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed ${
              isLight ? 'text-[#5B6475]' : 'text-slate-300'
            }`}>
              {CONTACT_PAGE_CONTENT.ctaBox.body}
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-[#172B68] bg-[#FBBE21] hover:bg-[#f3b516] shadow-xl shadow-[#FBBE21]/20 transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
              >
                <span>{CONTACT_PAGE_CONTENT.ctaBox.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
