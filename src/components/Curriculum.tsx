import React, { useState } from 'react';
import {
  Layers,
  Search,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Wrench,
  Award,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { CURRICULUM_MODULES } from '../data/academyData';
import { CourseModule } from '../types';

interface CurriculumProps {
  onOpenEnquiryModal: (subject?: string) => void;
  onOpenSyllabusModal: () => void;
}

export const Curriculum: React.FC<CurriculumProps> = ({ onOpenEnquiryModal, onOpenSyllabusModal }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>(CURRICULUM_MODULES[0].id);
  const [expandedMobileIds, setExpandedMobileIds] = useState<string[]>([CURRICULUM_MODULES[0].id]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleMobileAccordion = (id: string) => {
    if (expandedMobileIds.includes(id)) {
      setExpandedMobileIds(expandedMobileIds.filter(item => item !== id));
    } else {
      setExpandedMobileIds([...expandedMobileIds, id]);
    }
  };

  const filteredModules = CURRICULUM_MODULES.filter(m =>
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
    m.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const selectedDesktopModule = CURRICULUM_MODULES.find(m => m.id === activeModuleId) || CURRICULUM_MODULES[0];

  return (
    <section id="curriculum" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-300">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Structured Learning Roadmap</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            12-Module Practical Curriculum
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            From digital fundamentals to advanced AI automation and capstone client execution, explore what you will build step-by-step.
          </p>

          {/* Search bar for topics */}
          <div className="max-w-md mx-auto pt-2">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search modules (e.g., SEO, Meta Ads, GA4, AI)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW: Two Column Interactive Timeline */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Module Selector Timeline (12 Modules) */}
          <div className="col-span-5 space-y-2 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredModules.map((mod) => {
              const isSelected = mod.id === selectedDesktopModule.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModuleId(mod.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-orange-500/80 shadow-lg shadow-orange-950/50'
                      : 'bg-slate-950 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                        isSelected
                          ? 'bg-orange-600 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {mod.number < 10 ? `0${mod.number}` : mod.number}
                    </span>
                    <div>
                      <h3 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {mod.title}
                      </h3>
                      <span className="text-[11px] text-slate-400 line-clamp-1">
                        {mod.tools.slice(0, 2).join(' • ')}
                      </span>
                    </div>
                  </div>
                  <Sparkles className={`w-4 h-4 ${isSelected ? 'text-orange-400 opacity-100' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Module Deep Dive View */}
          <div className="col-span-7 sticky top-28">
            <div className="p-8 rounded-2xl glass-panel border border-orange-500/30 space-y-6 shadow-2xl shadow-orange-950/40">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-orange-500/20 text-orange-300 border border-orange-500/30">
                    Module {selectedDesktopModule.number} of 12
                  </span>
                  <span className="text-xs text-slate-400">Practical & Hands-On</span>
                </div>
                <button
                  onClick={onOpenSyllabusModal}
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Download PDF Syllabus &rarr;
                </button>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  {selectedDesktopModule.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedDesktopModule.description}
                </p>
              </div>

              {/* Skills Learned */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Skills & Competencies Taught
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedDesktopModule.skills.map((skill, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Used */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-amber-400" /> Industry Tools & Software
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDesktopModule.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-md text-xs font-medium bg-slate-900 text-orange-200 border border-slate-800">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Practical Deliverable Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 to-orange-950/40 border border-emerald-500/30 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> Hands-On Deliverable
                </span>
                <p className="text-xs font-semibold text-white">
                  {selectedDesktopModule.deliverable}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-400">Classroom Campus: Okhla, New Delhi</span>
                <button
                  onClick={() => onOpenEnquiryModal(`Curriculum Module ${selectedDesktopModule.number}: ${selectedDesktopModule.title}`)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors cursor-pointer"
                >
                  Enquire About Module {selectedDesktopModule.number}
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* MOBILE VIEW: Expandable Accordion List */}
        <div className="lg:hidden space-y-3">
          {filteredModules.map((mod) => {
            const isExpanded = expandedMobileIds.includes(mod.id);
            return (
              <div
                key={mod.id}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleMobileAccordion(mod.id)}
                  className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-orange-600/20 text-orange-300 font-mono text-xs font-bold flex items-center justify-center border border-orange-500/30">
                      {mod.number < 10 ? `0${mod.number}` : mod.number}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-white">{mod.title}</h3>
                      <span className="text-[11px] text-slate-400 font-normal">
                        {mod.skills.length} core skills
                      </span>
                    </div>
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-orange-400" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                </button>

                {isExpanded && (
                  <div className="px-4 pb-5 pt-1 border-t border-slate-800/80 space-y-4 animate-in fade-in duration-200">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {mod.description}
                    </p>

                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-orange-300 uppercase block">Skills Taught</span>
                      <div className="flex flex-wrap gap-1.5">
                        {mod.skills.map((s, i) => (
                          <span key={i} className="px-2.5 py-1 rounded text-[11px] bg-slate-950 text-slate-300 border border-slate-800">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase block">Tools Used</span>
                      <p className="text-xs text-orange-300 font-mono">{mod.tools.join(' • ')}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase block">Deliverable</span>
                      <span className="text-xs text-slate-200">{mod.deliverable}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenSyllabusModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 border border-slate-800 hover:border-orange-500 transition-colors cursor-pointer"
          >
            <span>View & Download Complete 12-Module Syllabus PDF</span>
            <BookOpen className="w-4 h-4 text-orange-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
