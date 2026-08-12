import React from 'react';
import { MessageSquareQuote, Info, Sparkles, UserCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/academyData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/60 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
            <MessageSquareQuote className="w-3.5 h-3.5 text-orange-400" />
            <span>Student Feedback</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Student Reviews & Success Stories
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Authentic, verified reviews from CBM Academy graduates in New Delhi are added following batch completion.
          </p>
        </div>

        {/* Notice Card for Authenticity */}
        <div className="max-w-2xl mx-auto mb-10 p-4 rounded-xl bg-slate-950 border border-orange-500/30 text-xs text-slate-300 flex items-start gap-3">
          <Info className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white block mb-0.5">Authenticity Policy</span>
            <span>
              CBM Academy strictly avoids fabricated reviews or fake placement figures. Below are structured placeholder containers prepared for upcoming verified student reviews.
            </span>
          </div>
        </div>

        {/* Placeholder Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-6 glass-panel border border-slate-800 hover:border-orange-500/30 transition-all flex flex-col justify-between space-y-6 relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 font-bold text-sm">
                      <UserCheck className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">{item.batch}</span>
                      <span className="text-[11px] text-slate-400 block">{item.role}</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-orange-500/20 text-orange-300 border border-orange-500/30">
                    Verified Batch
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-center py-8">
                  <span className="text-xs font-mono text-slate-400 block italic mb-2">
                    "{item.quote}"
                  </span>
                  <span className="inline-block text-[10px] text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                    Focus: {item.focus}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span>CBM Campus, New Delhi</span>
                <span className="text-orange-400 font-medium">Verified Student</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
