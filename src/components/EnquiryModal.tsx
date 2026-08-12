import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { EnquiryFormData } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, initialSubject }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    email: '',
    course: initialSubject || 'Pro Digital Marketing Course with AI',
    message: '',
    preferredBatch: 'Weekend Classroom',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl glass-panel border border-orange-500/30 p-6 sm:p-8 shadow-2xl shadow-orange-950/80">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white">
              Enquiry Received!
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our academic counsellor from CBM Academy in Okhla, New Delhi will connect with you on <strong className="text-white">{formData.phone}</strong> shortly.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20 text-[11px] font-semibold mb-2">
                <Sparkles className="w-3 h-3 text-amber-400" /> Quick Admissions Inquiry
              </div>
              <h3 className="font-heading text-xl font-bold text-white">
                Talk to CBM Academy Counsellor
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {initialSubject ? `Inquiry regarding: ${initialSubject}` : 'Enter your details to get batch schedules and fee structure.'}
              </p>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Priya Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98188 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="priya@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Preferred Batch</label>
              <select
                value={formData.preferredBatch}
                onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-orange-500"
              >
                <option value="Weekend Classroom">Weekend Classroom (Saturday & Sunday)</option>
                <option value="Weekday Morning">Weekday Morning (Mon - Thu)</option>
                <option value="Weekday Evening">Weekday Evening (Mon - Thu)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Message (Optional)</label>
              <textarea
                rows={2}
                placeholder="Any specific questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-600/30"
            >
              {isSubmitting ? 'Submitting...' : 'Request Counsellor Call'}
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
