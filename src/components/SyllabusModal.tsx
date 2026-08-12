import React, { useState } from 'react';
import { X, Download, BookOpen, CheckCircle2, FileText, Check } from 'lucide-react';
import { CURRICULUM_MODULES, MAIN_COURSE } from '../data/academyData';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiryModal: () => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({ isOpen, onClose, onOpenEnquiryModal }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-2xl glass-panel border border-orange-500/30 shadow-2xl shadow-orange-950/90 overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white">
                Complete 12-Module Syllabus PDF
              </h3>
              <span className="text-xs text-slate-400">
                {MAIN_COURSE.title} • CBM Academy Delhi
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-slate-300 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-orange-950/30 border border-orange-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-bold text-white block text-sm">Download Official 2026 Syllabus Copy</span>
              <span className="text-xs text-slate-400">Includes detailed topic breakdown, tools list, and assignment deadlines.</span>
            </div>
            <button
              onClick={handleDownload}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors flex items-center gap-2 flex-shrink-0 cursor-pointer shadow-md"
            >
              {downloaded ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4" />}
              <span>{downloaded ? 'Syllabus Downloaded' : 'Download PDF'}</span>
            </button>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Curriculum Summary (12 Modules)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CURRICULUM_MODULES.map((mod) => (
                <div key={mod.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <span className="text-orange-400 font-mono">Module {mod.number}:</span>
                    <span>{mod.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2">{mod.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-400">Questions about batch schedules?</span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-950 text-slate-300 border border-slate-800 hover:text-white"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenEnquiryModal();
              }}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors"
            >
              Enquire Batch Availability
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
