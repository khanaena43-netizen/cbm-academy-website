import React from 'react';
import { Laptop, Cpu, Briefcase, Users, ShieldCheck, Sparkles } from 'lucide-react';
import { TRUST_STATS } from '../data/academyData';

const getIcon = (name: string) => {
  switch (name) {
    case 'Laptop':
      return <Laptop className="w-6 h-6 text-orange-400" />;
    case 'Cpu':
      return <Cpu className="w-6 h-6 text-amber-400" />;
    case 'Briefcase':
      return <Briefcase className="w-6 h-6 text-emerald-400" />;
    case 'Users':
      return <Users className="w-6 h-6 text-yellow-400" />;
    default:
      return <Sparkles className="w-6 h-6 text-orange-400" />;
  }
};

export const TrustSection: React.FC = () => {
  return (
    <section className="relative py-12 bg-slate-900/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-slate-300 mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
            <span>Built On Real Practical Value</span>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-white">
            Why Students Choose CBM Academy in New Delhi
          </h2>
        </div>

        {/* 4 Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl p-6 glass-panel border border-slate-800 glass-card-hover group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(stat.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-300 border border-orange-500/20">
                    {stat.highlight}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-orange-200 transition-colors">
                    {stat.title}
                  </h3>
                  <span className="text-xs font-medium text-orange-400 block mb-2">{stat.subtitle}</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {stat.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified Approach</span>
                <span className="text-emerald-400 font-medium">No Fluff</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
