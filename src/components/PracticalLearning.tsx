import React from 'react';
import {
  Lightbulb,
  Wrench,
  FolderPlus,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { LEARNING_PROCESS } from '../data/academyData';

const getProcessIcon = (name: string) => {
  switch (name) {
    case 'Lightbulb':
      return <Lightbulb className="w-6 h-6 text-amber-400" />;
    case 'Wrench':
      return <Wrench className="w-6 h-6 text-orange-400" />;
    case 'FolderPlus':
      return <FolderPlus className="w-6 h-6 text-yellow-400" />;
    case 'Rocket':
      return <Rocket className="w-6 h-6 text-emerald-400" />;
    default:
      return <Lightbulb className="w-6 h-6 text-amber-400" />;
  }
};

interface PracticalLearningProps {
  onOpenEnquiryModal: (subject?: string) => void;
}

export const PracticalLearning: React.FC<PracticalLearningProps> = ({ onOpenEnquiryModal }) => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-300">
            <Layers className="w-3.5 h-3.5" />
            <span>Learning Methodology</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How You Master Digital Marketing & AI
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Our 4-step practical framework turns complex concepts into tangible, real-world execution skills.
          </p>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {LEARNING_PROCESS.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl p-6 glass-panel border border-slate-800 glass-card-hover group flex flex-col justify-between space-y-4"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between">
                <span className="text-3xl font-heading font-extrabold font-mono text-slate-700 group-hover:text-orange-400 transition-colors">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getProcessIcon(step.iconName)}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-1">
                  {step.step}
                </span>
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Tangible Outcome */}
              <div className="pt-3 border-t border-slate-800/80">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-0.5">
                  Outcome:
                </span>
                <span className="text-xs font-semibold text-slate-200 block">
                  {step.outcome}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* CTA Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenEnquiryModal('Practical Learning CTA')}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 shadow-xl shadow-orange-600/30 transition-all cursor-pointer active:scale-[0.98]"
          >
            <span>Start Learning Through Practical Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
