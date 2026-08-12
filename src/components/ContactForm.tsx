import React, { useState } from 'react';
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  Building,
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { EnquiryFormData } from '../types';

interface ContactFormProps {
  initialSubject?: string;
  onSubmittedSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialSubject, onSubmittedSuccess }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    email: '',
    course: initialSubject || 'Pro Digital Marketing Course with AI',
    message: '',
    preferredBatch: 'Weekend Classroom',
  });

  const [errors, setErrors] = useState<Partial<EnquiryFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<EnquiryFormData> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email address is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSubmittedSuccess) onSubmittedSuccess();
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-300">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect With CBM Academy</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ready to Build Your Digital Future?
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Submit an enquiry or visit our campus in Okhla, New Delhi. Our academic counsellors will guide you through course modules, batch timings, and registration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-1 bg-gradient-to-r from-orange-500/40 via-amber-500/40 to-yellow-500/40 shadow-2xl">
              <div className="rounded-[22px] bg-slate-900 p-6 sm:p-8 lg:p-10 border border-slate-800">
                
                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      Enquiry Received Successfully!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Our academic counsellor from CBM Academy will call you shortly on <strong className="text-white">{formData.phone}</strong> to share batch details and syllabus.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-orange-300 bg-orange-500/10 border border-orange-500/30 hover:bg-orange-500/20 transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <h3 className="font-heading text-xl font-bold text-white">Admission Enquiry Form</h3>
                      <span className="text-xs text-orange-400 font-semibold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Next Batch Starting Soon
                      </span>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-orange-500'
                        }`}
                      />
                      {errors.name && <span className="text-xs text-rose-400 mt-1 block">{errors.name}</span>}
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. +91 98188 00000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                            errors.phone ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-orange-500'
                          }`}
                        />
                        {errors.phone && <span className="text-xs text-rose-400 mt-1 block">{errors.phone}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. rahul@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                            errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-800 focus:border-orange-500'
                          }`}
                        />
                        {errors.email && <span className="text-xs text-rose-400 mt-1 block">{errors.email}</span>}
                      </div>
                    </div>

                    {/* Course Selection */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Course Interested In
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                      >
                        <option value="Pro Digital Marketing Course with AI">Pro Digital Marketing Course with AI Integration (Flagship)</option>
                        <option value="SEO & Search Engine Optimization">SEO & Organic Strategy Specialist Track</option>
                        <option value="Paid Media Performance Ads">Google Ads & Meta Ads Paid Acquisition Track</option>
                        <option value="Custom Business / Freelance Guidance">Custom Business / Freelance Marketing Training</option>
                      </select>
                    </div>

                    {/* Preferred Batch Style */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Preferred Batch Timing
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Weekday Classroom', 'Weekend Classroom', 'Morning Batch', 'Evening Batch'].map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, preferredBatch: b })}
                            className={`py-2 px-3 rounded-xl text-xs font-semibold text-center transition-all border cursor-pointer ${
                              formData.preferredBatch === b
                                ? 'bg-orange-600 text-white border-orange-400'
                                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Message / Query (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your background or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-xl shadow-orange-600/30 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <span>Submitting Enquiry...</span>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>
          </div>

          {/* Right Column: Campus Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academy Contact Cards */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-6">
              <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-orange-400" /> CBM Academy New Delhi
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Campus Location</span>
                    <span>{ACADEMY_INFO.fullAddress}</span>
                    <span className="text-slate-400 block text-xs mt-0.5">Near Violet Line Metro Stations (Okhla / Govindpuri / NSIC)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Phone / WhatsApp</span>
                    <a href={`tel:${ACADEMY_INFO.phone}`} className="hover:text-orange-400 transition-colors">
                      {ACADEMY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400 flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Email Enquiries</span>
                    <a href={`mailto:${ACADEMY_INFO.admissionsEmail}`} className="hover:text-orange-400 transition-colors">
                      {ACADEMY_INFO.admissionsEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Counselling Hours</span>
                    <span>{ACADEMY_INFO.hours}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 h-64 relative bg-slate-900">
              <iframe
                title="CBM Academy Location Map Okhla New Delhi"
                src={ACADEMY_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
