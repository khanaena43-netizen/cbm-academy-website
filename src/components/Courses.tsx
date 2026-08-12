import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  MapPin,
  Download,
  Calendar,
  Layers,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { MAIN_COURSE } from '../data/academyData';

interface CoursesProps {
  onOpenEnquiryModal: (subject?: string) => void;
  onOpenSyllabusModal: () => void;
}

export const Courses: React.FC<CoursesProps> = ({ onOpenEnquiryModal, onOpenSyllabusModal }) => {
  const [selectedToolCategory, setSelectedToolCategory] = useState<string>('All');

  const categories = ['All', 'Paid Search & Video', 'Social Paid Media', 'AI Copywriting & Strategy', 'SEO & Analytics', 'CMS & Automation'];

  const filteredTools = selectedToolCategory === 'All'
    ? MAIN_COURSE.tools
    : MAIN_COURSE.tools.filter(t => t.category.includes(selectedToolCategory) || (selectedToolCategory === 'SEO & Analytics' && (t.category.includes('SEO') || t.category.includes('Data'))));

  return (
    <section id="courses" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-300">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Master Program</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Learn Skills That Actually Matter
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Our industry-designed curriculum eliminates outdated fluff and replaces it with practical execution in modern performance advertising, AI workflows, and live client projects.
          </p>
        </div>

        {/* Featured Course Banner Card */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 shadow-2xl shadow-orange-950/60">
          <div className="rounded-[22px] bg-slate-900/95 p-6 sm:p-8 lg:p-10 backdrop-blur-xl border border-slate-800">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Program Details */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-300 border border-orange-500/30">
                    {MAIN_COURSE.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" /> AI Integrated
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    Batch Size: 12-15 Max
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
                    {MAIN_COURSE.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                    {MAIN_COURSE.description}
                  </p>
                </div>

                {/* Key Quick Facts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Duration</span>
                      <span className="text-xs font-bold text-white">{MAIN_COURSE.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Location</span>
                      <span className="text-xs font-bold text-white">Okhla, New Delhi</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Batch Style</span>
                      <span className="text-xs font-bold text-white">Interactive Classroom</span>
                    </div>
                  </div>
                </div>

                {/* 12 Core Subjects Badges */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold text-slate-300 tracking-wider uppercase block">
                    Core Subjects Covered (12 Modules)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {MAIN_COURSE.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950 text-slate-200 border border-slate-800 hover:border-orange-500/40 hover:text-white transition-colors flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Course CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => onOpenEnquiryModal('Pro Digital Marketing Course')}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 shadow-lg shadow-orange-600/30 transition-all cursor-pointer active:scale-[0.98]"
                  >
                    <span>Enquire For Next Batch</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenSyllabusModal}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:text-white transition-all cursor-pointer active:scale-[0.98]"
                  >
                    <Download className="w-4 h-4 text-orange-400" />
                    <span>View Full Syllabus</span>
                  </button>
                </div>

              </div>

              {/* Right Column: Tools & Practical Hands-on Sandbox */}
              <div className="lg:col-span-5 space-y-6 bg-slate-950/90 p-6 rounded-2xl border border-slate-800">
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                      <Layers className="w-5 h-5 text-orange-400" /> Real Industry Tools Taught
                    </h4>
                    <span className="text-xs text-orange-400 font-semibold">10+ Tools</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    You won't just learn about these platforms — you will actively set up, configure, and operate them.
                  </p>
                </div>

                {/* Filter Categories for Tools */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedToolCategory(cat)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                        selectedToolCategory === cat
                          ? 'bg-orange-600 text-white font-semibold'
                          : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
                  {filteredTools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
                    >
                      <span className="text-xs font-bold text-white">{tool.name}</span>
                      <span className="text-[10px] text-orange-300 font-medium mt-1">{tool.category}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights Card */}
                <div className="p-4 rounded-xl bg-orange-950/30 border border-orange-500/20 space-y-2">
                  <span className="text-xs font-bold text-orange-300 block flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-orange-400" /> Course Guarantee Highlights
                  </span>
                  <ul className="text-xs text-slate-300 space-y-1.5 pl-1">
                    {MAIN_COURSE.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-orange-400 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call Out Box */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-xs text-slate-400 block">Next Batch In Delhi:</span>
                  <span className="text-sm font-bold text-emerald-400 flex items-center justify-center gap-1.5 mt-0.5">
                    <Calendar className="w-4 h-4" /> Enrollment Open • Limited Seats Left
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
