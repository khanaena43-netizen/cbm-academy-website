import React, { useState } from 'react';
import {
  Sparkles,
  Bot,
  Zap,
  ArrowRight,
  Search,
  PenTool,
  BarChart,
  Repeat,
  CheckCircle2,
  Copy,
  Check,
  Cpu,
} from 'lucide-react';
import { AI_WORKFLOWS, AI_WORKFLOW_IMAGE_PATH } from '../data/academyData';

interface AIWorkflowSectionProps {
  onOpenEnquiryModal: (subject?: string) => void;
}

export const AIWorkflowSection: React.FC<AIWorkflowSectionProps> = ({ onOpenEnquiryModal }) => {
  const [selectedPreset, setSelectedPreset] = useState<'ad-copy' | 'seo-keywords' | 'email-sequence'>('ad-copy');
  const [copied, setCopied] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);

  const presets = {
    'ad-copy': {
      title: 'Meta Ad Campaign Copy Generator',
      prompt: 'Generate 3 high-ROAS Meta ad hooks for a premium gym in South Delhi using AI frameworks.',
      output: [
        '🔥 Hook 1 (Pain-Point): "Tired of crowded local gyms with zero guidance? Train with certified fitness pros in New Delhi."',
        '⚡ Hook 2 (Curiosity): "Why 250+ Delhi professionals switched to personalized AI-tracked fitness training this month."',
        '🚀 Hook 3 (Offer Callout): "Claim 3-Day Free VIP Guest Pass at Okhla’s top-rated fitness & conditioning hub."',
      ],
      aiTool: 'Claude 3.5 & ChatGPT Copy Matrix',
    },
    'seo-keywords': {
      title: 'AI SEO Intent & Keyword Cluster',
      prompt: 'Extract high-intent transactional search keywords for "E-Commerce SEO Delhi".',
      output: [
        '🎯 Primary Transactional: "best e-commerce seo agency in delhi" (Vol: 1.8K, Intent: High Buy)',
        '🎯 Secondary Service: "shopify seo services okhla delhi" (Vol: 920, Intent: Commercial)',
        '🎯 Informational Cluster: "how to improve shopify store conversion rate 2026"',
      ],
      aiTool: 'ChatGPT SEO Clustering & Perplexity AI',
    },
    'email-sequence': {
      title: 'Automated Lead Nurture Email Sequence',
      prompt: 'Draft 2-step automated welcome email sequence for lead magnet downloads.',
      output: [
        '📩 Email 1 (Instant): "Here is your Digital Marketing Strategy Checklist + Exclusive 2026 AI Prompt Matrix."',
        '📩 Email 2 (+24 Hours): "3 Common Google Ads Mistakes Costing You 40% Budget Waste (And How AI Fixes It)."',
      ],
      aiTool: 'Zapier + Mailchimp AI Trigger',
    },
  };

  const currentPreset = presets[selectedPreset];

  const handleCopy = () => {
    try {
      if (navigator && navigator.clipboard) {
        navigator.clipboard.writeText(currentPreset.output.join('\n')).catch(() => {});
      }
    } catch (e) {
      // ignore clipboard error in restricted iframe
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulation = (key: 'ad-copy' | 'seo-keywords' | 'email-sequence') => {
    setIsSimulating(true);
    setSelectedPreset(key);
    setTimeout(() => {
      setIsSimulating(false);
    }, 400);
  };

  return (
    <section id="ai-section" className="py-20 bg-slate-900/80 border-t border-slate-800 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-xs font-semibold text-orange-300">
            <Bot className="w-4 h-4 text-amber-400" />
            <span>The 2026 Marketing Advantage</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Digital Marketing Is Changing.{' '}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Learn With AI.
            </span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Standard digital marketing is no longer enough. At CBM Academy, you learn how to integrate AI tools directly into research, copywriting, SEO, design, paid ads, and automation workflows.
          </p>
        </div>

        {/* 6 AI Workflow Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {AI_WORKFLOWS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 glass-panel border border-slate-800 hover:border-orange-500/40 transition-all group flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="font-heading text-base font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-orange-400" /> {item.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-500/20 text-orange-300">
                    {item.impact}
                  </span>
                </div>

                <div className="space-y-3 pt-3">
                  <div className="text-xs">
                    <span className="text-slate-500 font-semibold block mb-0.5 uppercase tracking-wider text-[10px]">
                      Traditional Workflow
                    </span>
                    <p className="text-slate-400 line-through decoration-rose-500/60 leading-relaxed">
                      {item.traditional}
                    </p>
                  </div>

                  <div className="text-xs">
                    <span className="text-orange-400 font-semibold block mb-0.5 uppercase tracking-wider text-[10px] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" /> CBM AI-Integrated Workflow
                    </span>
                    <p className="text-slate-100 font-medium leading-relaxed">
                      {item.aiWorkflow}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Tools: {item.toolUsed}</span>
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE AI WORKFLOW SIMULATOR */}
        <div className="rounded-3xl p-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 shadow-2xl shadow-orange-950">
          <div className="rounded-[22px] bg-slate-950 p-6 sm:p-8 lg:p-10 border border-slate-800">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Simulator Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-300 border border-orange-500/30 inline-flex items-center gap-1.5 mb-3">
                    <Cpu className="w-3.5 h-3.5" /> Interactive Sandbox
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Experience CBM AI Copilot Live
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    Test how our students generate campaign copy, keyword clusters, and automation sequences in seconds using prompt engineering frameworks.
                  </p>
                </div>

                {/* Preset Selector Buttons */}
                <div className="space-y-2">
                  <span className="text-xs text-slate-400 uppercase font-semibold block">Select Workflow Preset:</span>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleRunSimulation('ad-copy')}
                      className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border flex items-center justify-between cursor-pointer ${
                        selectedPreset === 'ad-copy'
                          ? 'bg-orange-600 text-white border-orange-400 shadow-md'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      <span>1. Meta Ad Campaign Copy Generator</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleRunSimulation('seo-keywords')}
                      className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border flex items-center justify-between cursor-pointer ${
                        selectedPreset === 'seo-keywords'
                          ? 'bg-orange-600 text-white border-orange-400 shadow-md'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      <span>2. AI SEO Intent & Keyword Clustering</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleRunSimulation('email-sequence')}
                      className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border flex items-center justify-between cursor-pointer ${
                        selectedPreset === 'email-sequence'
                          ? 'bg-orange-600 text-white border-orange-400 shadow-md'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      <span>3. Lead Nurture Email Sequence</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onOpenEnquiryModal('AI Section Simulator Enquire')}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 transition-all cursor-pointer shadow-lg shadow-orange-600/30"
                >
                  Master These AI Workflows in Delhi
                </button>
              </div>

              {/* Right Column: Terminal Output Display */}
              <div className="lg:col-span-7">
                <div className="rounded-xl bg-slate-900 border border-slate-800 p-5 space-y-4 shadow-xl">
                  
                  {/* Top terminal header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-xs font-mono text-slate-400 ml-2">{currentPreset.title}</span>
                    </div>

                    <button
                      onClick={handleCopy}
                      className="px-2.5 py-1 rounded text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy Output'}</span>
                    </button>
                  </div>

                  {/* Terminal Command Input */}
                  <div className="p-3 rounded-lg bg-slate-950 font-mono text-xs text-orange-300 border border-slate-800/80">
                    <span className="text-slate-500">&gt; Prompt Input:</span> "{currentPreset.prompt}"
                  </div>

                  {/* Terminal Simulated Output */}
                  <div className="p-4 rounded-lg bg-slate-950 font-mono text-xs text-slate-200 border border-slate-800 space-y-2 min-h-[160px] flex flex-col justify-center">
                    {isSimulating ? (
                      <div className="flex items-center justify-center gap-2 py-8 text-orange-400 font-mono text-xs animate-pulse">
                        <Sparkles className="w-4 h-4 animate-spin" />
                        <span>Generating AI Campaign Strategy...</span>
                      </div>
                    ) : (
                      currentPreset.output.map((line, idx) => (
                        <div key={idx} className="leading-relaxed text-slate-200">
                          {line}
                        </div>
                      ))
                    )}
                  </div>

                  {/* Footer metadata */}
                  <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1 font-mono">
                    <span>Engine: {currentPreset.aiTool}</span>
                    <span className="text-emerald-400 font-semibold">Status: 2026 Ready</span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
