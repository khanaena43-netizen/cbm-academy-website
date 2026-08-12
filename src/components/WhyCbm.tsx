import React from 'react';
import {
  Sparkles,
  Layers,
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Check,
  Star,
} from 'lucide-react';
import { WHY_CHOOSE_CBM } from '../data/academyData';

const getCardIcon = (name: string) => {
  switch (name) {
    case 'Sparkles':
      return <Sparkles className="w-6 h-6 text-orange-400" />;
    case 'Layers':
      return <Layers className="w-6 h-6 text-amber-400" />;
    case 'BookOpen':
      return <BookOpen className="w-6 h-6 text-orange-400" />;
    case 'Users':
      return <Users className="w-6 h-6 text-yellow-400" />;
    case 'Award':
      return <Award className="w-6 h-6 text-emerald-400" />;
    case 'TrendingUp':
      return <TrendingUp className="w-6 h-6 text-orange-400" />;
    default:
      return <Sparkles className="w-6 h-6 text-orange-400" />;
  }
};

interface WhyCbmProps {
  onOpenEnquiryModal: (subject?: string) => void;
}

export const WhyCbm: React.FC<WhyCbmProps> = ({ onOpenEnquiryModal }) => {
  return (
    <section id="about" className="py-20 bg-slate-900/50 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
            <Star className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
            <span>The CBM Academy Edge</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Choose CBM Academy?
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            We built CBM Academy in New Delhi to bridge the gap between traditional coaching theory and modern, AI-powered performance marketing standards.
          </p>
        </div>

        {/* 6 Value Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_CBM.map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl p-7 glass-panel border border-slate-800/90 glass-card-hover group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getCardIcon(card.iconName)}
                  </div>
                  {card.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-orange-500/20 text-orange-300 border border-orange-500/30">
                      {card.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-orange-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-semibold text-orange-400 gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Included in Master Program</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-orange-950/40 to-slate-900 border border-orange-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
              Want to see how our small batch training works?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Talk directly with our academic mentors or schedule a campus visit in Okhla, New Delhi.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiryModal('Why CBM Section CTA')}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors flex-shrink-0 cursor-pointer shadow-lg shadow-orange-600/30 active:scale-[0.98]"
          >
            Talk to a Counsellor
          </button>
        </div>

      </div>
    </section>
  );
};
