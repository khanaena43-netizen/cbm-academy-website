import React from 'react';
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface FooterProps {
  onOpenEnquiryModal: (subject?: string) => void;
  onOpenPolicyModal?: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiryModal, onOpenPolicyModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'About CBM', href: '#about' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'AI Marketing', href: '#ai-section' },
    { name: 'Career Pathways', href: '#career' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs sm:text-sm pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-400 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-heading text-lg font-bold text-white">CBM</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-white">CBM Academy</span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                  AI-Integrated Digital Marketing
                </span>
              </div>
            </a>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              AI-integrated Digital Marketing education focused on practical skills, modern tools, live campaign execution, and career growth in New Delhi.
            </p>

            <div className="space-y-1.5 pt-1 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>{ACADEMY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a href={`tel:${ACADEMY_INFO.phone}`} className="hover:text-white transition-colors">
                  {ACADEMY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a href={`mailto:${ACADEMY_INFO.email}`} className="hover:text-white transition-colors">
                  {ACADEMY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-orange-500 font-bold">•</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Admissions & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Campus Admissions
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Admissions open for upcoming batches. Small, focused learning with a limit of 12-15 students per batch.
            </p>

            <button
              onClick={() => onOpenEnquiryModal('Footer CTA')}
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/20 cursor-pointer"
            >
              Enquire Batch Availability
            </button>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-xs text-slate-500 block mb-2 font-medium">Follow CBM Academy:</span>
              <div className="flex items-center gap-3">
                <a href="#home" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#home" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#home" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 transition-all">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#home" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-500 transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal policy links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} CBM Academy. All Rights Reserved. New Delhi, India.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenPolicyModal && onOpenPolicyModal('Privacy Policy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicyModal && onOpenPolicyModal('Terms & Conditions')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
