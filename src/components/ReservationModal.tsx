import { useState, type FormEvent } from 'react';
import { useTheme } from '../context/ThemeContext';
import { X, CheckCircle2, Shield, Calendar, Clock, Sparkles, ArrowRight } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const { isLight } = useTheme();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experienceLevel: 'First-time investor',
    selectedBatch: 'Upcoming Saturday • 11:00 AM IST'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className={`relative w-full max-w-lg rounded-2xl border p-6 sm:p-8 shadow-2xl overflow-hidden transition-all ${
          isLight 
            ? 'bg-white border-[#c99a4e]/40 shadow-slate-900/20' 
            : 'bg-[#0d1424] border-[#c99a4e]/40 shadow-black'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c99a4e]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          id="close-reservation-modal"
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-lg transition-colors ${
            isLight ? 'text-slate-400 hover:text-slate-900 hover:bg-slate-100' : 'text-slate-400 hover:text-white hover:bg-white/10'
          }`}
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6 space-y-2">
              <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold font-mono border ${
                isLight 
                  ? 'bg-[#fdf6e9] text-[#966b24] border-[#e9d5a1]' 
                  : 'bg-[#c99a4e]/15 text-[#e5b869] border-[#c99a4e]/30'
              }`}>
                <Sparkles className={`w-3 h-3 ${isLight ? 'text-[#966b24]' : 'text-[#c99a4e]'}`} />
                Introductory Orientation
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold font-display ${
                isLight ? 'text-slate-950' : 'text-white'
              }`}>
                Reserve Your ₹99 Seat
              </h3>
              <p className={`text-xs sm:text-sm ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                No pressure, just a clearer perspective on financial markets.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Batch Choice */}
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  Select Upcoming Session Slot
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Upcoming Saturday • 11:00 AM IST',
                    'Upcoming Sunday • 05:00 PM IST'
                  ].map((batch) => (
                    <button
                      type="button"
                      key={batch}
                      onClick={() => setFormData({ ...formData, selectedBatch: batch })}
                      className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                        formData.selectedBatch === batch
                          ? isLight
                            ? 'bg-[#fdf6e9] border-[#c99a4e] text-slate-950 font-semibold shadow-sm'
                            : 'bg-[#c99a4e]/15 border-[#c99a4e] text-white font-semibold'
                          : isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <Calendar className={`w-3 h-3 ${isLight ? 'text-[#966b24]' : 'text-[#c99a4e]'}`} />
                        <span className="truncate">{batch}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="res-name" className={`block text-xs font-semibold mb-1 ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  Full Name
                </label>
                <input
                  id="res-name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-[#c99a4e] focus:ring-1 focus:ring-[#c99a4e] border ${
                    isLight 
                      ? 'bg-slate-50 border-slate-300 text-slate-950 placeholder:text-slate-400' 
                      : 'bg-black/40 border-white/10 text-white placeholder:text-slate-500'
                  }`}
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="res-email" className={`block text-xs font-semibold mb-1 ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    Email Address
                  </label>
                  <input
                    id="res-email"
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-[#c99a4e] focus:ring-1 focus:ring-[#c99a4e] border ${
                      isLight 
                        ? 'bg-slate-50 border-slate-300 text-slate-950 placeholder:text-slate-400' 
                        : 'bg-black/40 border-white/10 text-white placeholder:text-slate-500'
                    }`}
                  />
                </div>
                <div>
                  <label htmlFor="res-phone" className={`block text-xs font-semibold mb-1 ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    Phone / WhatsApp
                  </label>
                  <input
                    id="res-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-[#c99a4e] focus:ring-1 focus:ring-[#c99a4e] border ${
                      isLight 
                        ? 'bg-slate-50 border-slate-300 text-slate-950 placeholder:text-slate-400' 
                        : 'bg-black/40 border-white/10 text-white placeholder:text-slate-500'
                    }`}
                  />
                </div>
              </div>

              {/* Experience Profile */}
              <div>
                <label className={`block text-xs font-semibold mb-1 ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  Current Market Profile
                </label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-[#c99a4e] border ${
                    isLight 
                      ? 'bg-slate-50 border-slate-300 text-slate-950' 
                      : 'bg-black/40 border-white/10 text-white'
                  }`}
                >
                  <option value="First-time investor" className={isLight ? 'bg-white text-slate-900' : 'bg-[#0d1424] text-white'}>
                    First-time investor (Zero prior trading)
                  </option>
                  <option value="Working professional" className={isLight ? 'bg-white text-slate-900' : 'bg-[#0d1424] text-white'}>
                    Working professional seeking structured learning
                  </option>
                  <option value="Aspiring trader" className={isLight ? 'bg-white text-slate-900' : 'bg-[#0d1424] text-white'}>
                    Aspiring trader looking for disciplined framework
                  </option>
                  <option value="Existing participant" className={isLight ? 'bg-white text-slate-900' : 'bg-[#0d1424] text-white'}>
                    Existing participant wanting to unlearn bad habits
                  </option>
                </select>
              </div>

              {/* Fee Notice */}
              <div className={`p-3 rounded-lg border flex items-center justify-between ${
                isLight 
                  ? 'bg-[#fdfbf6] border-[#c99a4e]/30' 
                  : 'bg-white/[0.03] border-white/10'
              }`}>
                <div>
                  <div className={`text-xs font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Eye-Opener Fee
                  </div>
                  <div className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    90-min live session + Q&A
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-base font-bold font-mono ${isLight ? 'text-[#966b24]' : 'text-[#f3d99d]'}`}>
                    ₹99
                  </div>
                  <div className="text-[10px] text-emerald-600 font-medium">Inclusive of GST</div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="submit-reservation-form"
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#e5b869] to-[#c99a4e] hover:from-[#f3c87e] hover:to-[#c99a4e] shadow-lg shadow-[#c99a4e]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Confirm Reservation (₹99)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className={`flex items-center justify-center gap-1.5 text-[11px] ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}>
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>Strictly educational • Zero spam • No sales calls</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="text-center py-6 space-y-4">
            <div className={`w-14 h-14 rounded-full border flex items-center justify-center mx-auto ${
              isLight ? 'bg-emerald-50 border-emerald-300 text-emerald-600' : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
            }`}>
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className={`text-2xl font-bold font-display ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}>
              Seat Reserved Successfully
            </h4>

            <p className={`text-sm max-w-sm mx-auto leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Thank you, <strong className={isLight ? 'text-slate-950' : 'text-white'}>{formData.fullName || 'Learner'}</strong>. Your seat for the ₹99 Eye-Opener has been confirmed for:
            </p>

            <div className={`p-3.5 rounded-xl border text-xs font-mono max-w-xs mx-auto ${
              isLight ? 'bg-[#fdf6e9] border-[#e9d5a1] text-[#966b24]' : 'bg-white/5 border-white/10 text-[#f3d99d]'
            }`}>
              {formData.selectedBatch}
            </div>

            <p className={`text-xs max-w-sm mx-auto ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              A calendar invite and joining details have been dispatched to <strong>{formData.email || 'your email'}</strong> and WhatsApp.
            </p>

            <button
              id="close-confirmation-btn"
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#c99a4e] text-slate-950 text-xs font-bold hover:bg-[#e5b869] transition-colors"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

