import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PolicyModalProps {
  title: string | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ title, onClose }) => {
  if (!title) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[80vh] flex flex-col rounded-2xl glass-panel border border-slate-800 shadow-2xl overflow-hidden">
        
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-orange-400" />
            <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
          {title === 'Privacy Policy' ? (
            <>
              <p>
                <strong>CBM Academy Privacy Policy</strong>
              </p>
              <p>
                At CBM Academy (New Delhi, India), we are committed to respecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard personal information submitted through our website enquiry forms.
              </p>
              <h4 className="font-bold text-white">1. Information Collection</h4>
              <p>
                We collect information provided voluntarily by visitors, including full name, phone number, email address, and course preferences when submitting admission enquiries or scheduling counsellor calls.
              </p>
              <h4 className="font-bold text-white">2. Use of Information</h4>
              <p>
                Your contact details are strictly used to communicate regarding course details, batch schedules, fees, and counselling support at CBM Academy. We do not sell or transfer your details to third-party telemarketers.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>CBM Academy Terms & Conditions</strong>
              </p>
              <p>
                By accessing CBM Academy website and enrolling in our courses, you agree to comply with our campus policies and batch conduct guidelines.
              </p>
              <h4 className="font-bold text-white">1. Course Delivery & Batch Limits</h4>
              <p>
                CBM Academy maintains strict batch limits of 12-15 students to preserve interactive, practical learning quality in our New Delhi campus. Seats are allocated on a first-come, first-served basis upon registration.
              </p>
              <h4 className="font-bold text-white">2. Practical Curriculum & Tools</h4>
              <p>
                Students are provided guided access to industry digital marketing platforms and AI tools as part of the curriculum modules.
              </p>
            </>
          )}
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-900 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
