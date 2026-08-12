import React, { useState } from 'react';
import {
  Briefcase,
  FolderKanban,
  Wrench,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  ShieldAlert,
} from 'lucide-react';
import { CAREER_PATHS } from '../data/academyData';

interface CareerSectionProps {
  onOpenEnquiryModal: (subject?: string) => void;
}

export const CareerSection: React.FC<CareerSectionProps> = ({ onOpenEnquiryModal }) => {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  const selectedRole = CAREER_PATHS[selectedRoleIndex];

  const pillars = [
    {
      title: 'Build a Professional Portfolio',
      desc: 'Assemble live client audit reports, Google Ads campaign structures, and WordPress site builds ready for recruiters.',
    },
    {
      title: 'Learn Real Industry Tools',
      desc: 'Hands-on practice with GA4, Meta Ads Manager, Semrush, Canva Pro, and AI automation engines.',
    },
    {
      title: 'Develop Practical Experience',
      desc: 'Work on active assignments and scenario testing rather than theoretical slides.',
    },
    {
      title: 'Improve Freelance Readiness',
      desc: 'Learn how to pitch clients, set service pricing, manage ad budgets, and deliver monthly marketing reports.',
    },
    {
      title: 'Prepare for Marketing Roles',
      desc: 'Mock interview questions, resume formatting for digital agencies, and LinkedIn profile optimization.',
    },
    {
      title: 'Structured Career Guidance',
      desc: 'Receive direct one-on-one feedback from experienced trainers on career pathways and skill specialization.',
    },
  ];

  return (
    <section id="career" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Pathways</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Turn Skills Into Opportunities
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Whether you want to secure a digital marketing role, scale your business, or start freelancing, CBM Academy prepares you with practical execution capabilities.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel border border-slate-800 hover:border-orange-500/40 transition-all space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white group-hover:text-orange-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* INTERACTIVE CAREER PATH EXPLORER */}
        <div className="rounded-3xl p-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 shadow-2xl shadow-orange-950/80">
          <div className="rounded-[22px] bg-slate-900 p-6 sm:p-8 lg:p-10 border border-slate-800">
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold text-orange-300 uppercase tracking-wider block mb-1">
                  Career Role Explorer
                </span>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Where Digital Marketing Skills Take You
                </h3>
              </div>

              {/* Realistic Disclaimer Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400">
                <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Honest Guidance • Realistic Industry Averages</span>
              </div>
            </div>

            {/* Role Selectors Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-6">
              {CAREER_PATHS.map((role, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedRoleIndex(idx)}
                  className={`p-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer border ${
                    selectedRoleIndex === idx
                      ? 'bg-orange-600 text-white border-orange-400 shadow-lg'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {role.title}
                </button>
              ))}
            </div>

            {/* Selected Role Deep Dive */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-2xl bg-slate-950 border border-slate-800 items-center">
              
              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="text-xs text-orange-400 font-semibold uppercase block">Selected Career Path</span>
                  <h4 className="font-heading text-2xl font-bold text-white mt-0.5">{selectedRole.title}</h4>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedRole.responsibilities}
                </p>

                <div className="space-y-2">
                  <span className="text-xs text-slate-400 font-bold uppercase block">Core Skills Required:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedRole.keySkills.map((sk, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-orange-300 border border-slate-800">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-center md:text-left">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold block">Realistic Salary Range (India)</span>
                  <span className="font-heading text-2xl font-bold text-emerald-400 block mt-1">{selectedRole.salaryRange}</span>
                </div>

                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold block">Industry Demand</span>
                  <span className="text-xs font-bold text-orange-300 px-2.5 py-1 rounded bg-orange-500/10 border border-orange-500/20 inline-block mt-1">
                    {selectedRole.demand}
                  </span>
                </div>

                <button
                  onClick={() => onOpenEnquiryModal(`Career Path: ${selectedRole.title}`)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors cursor-pointer"
                >
                  Prepare For This Role &rarr;
                </button>
              </div>

            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => onOpenEnquiryModal('Start Your Journey CTA')}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-xl shadow-orange-600/30 transition-all cursor-pointer active:scale-[0.98]"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
