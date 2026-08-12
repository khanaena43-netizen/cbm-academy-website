import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
  Award,
  CheckCircle2,
  Bot,
  BarChart3,
  Search,
  MessageSquare,
  Play,
} from 'lucide-react';
import { HERO_IMAGE_PATH, ACADEMY_INFO } from '../data/academyData';

interface HeroProps {
  onOpenEnquiryModal: (subject?: string) => void;
  onExploreCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiryModal, onExploreCourses }) => {
  const [activeTab, setActiveTab] = useState<'roas' | 'seo' | 'ai'>('roas');

  return (
    <section id="home" className="relative min-h-[90vh] pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-slate-950">
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-600/15 blur-[120px] rounded-full pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-amber-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-orange-500/30 text-orange-300 text-xs sm:text-sm font-medium shadow-inner shadow-orange-500/10">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent font-semibold">
                AI-Integrated Digital Marketing Academy
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 hidden sm:inline">New Delhi</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Master Digital Marketing.{' '}
              <span className="block mt-1.5 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Build With AI.
              </span>
              <span className="block mt-1 text-slate-100 font-bold">
                Grow Your Career.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Learn modern Digital Marketing with AI, practical projects, real-world tools, and career-focused training at{' '}
              <strong className="text-white font-semibold">CBM Academy</strong> in New Delhi. Designed for students, freshers, freelancers, and business owners.
            </p>

            {/* CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onExploreCourses}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-semibold text-base text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:from-orange-500 hover:to-amber-500 shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenEnquiryModal('Hero - Talk to Counsellor')}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 hover:text-white transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                <span>Talk to a Counsellor</span>
              </button>
            </div>

            {/* Key Value Highlights Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-900 w-full text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>100% Practical</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>AI Prompt Mastery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Max 15 Batch Size</span>
              </div>
            </div>

            {/* Location & Contact Tag */}
            <div className="text-xs text-slate-500 pt-1 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>Campus in {ACADEMY_INFO.location} | In-Person & Interactive Batches</span>
            </div>
          </div>

          {/* Right Column: AI & Digital Marketing Interactive Visual Dashboard */}
          <div className="lg:col-span-5 relative">
            {/* Outer Decorative Card */}
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-orange-500/30 via-slate-800/50 to-slate-900/80 shadow-2xl shadow-orange-950/80">
              
              {/* Glass Inner Container */}
              <div className="relative rounded-xl bg-slate-950/90 p-5 sm:p-6 overflow-hidden border border-slate-800/80 backdrop-blur-xl">
                
                {/* Header bar of visual dashboard */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">CBM AI Marketing Hub v2.6</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Live Simulation
                  </span>
                </div>

                {/* Dashboard Tab Selector */}
                <div className="grid grid-cols-3 gap-1 my-3 bg-slate-900/90 p-1 rounded-lg text-xs font-medium border border-slate-800">
                  <button
                    onClick={() => setActiveTab('roas')}
                    className={`py-1.5 px-2 rounded-md transition-all ${
                      activeTab === 'roas'
                        ? 'bg-orange-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Ads ROAS
                  </button>
                  <button
                    onClick={() => setActiveTab('seo')}
                    className={`py-1.5 px-2 rounded-md transition-all ${
                      activeTab === 'seo'
                        ? 'bg-orange-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    SEO & Traffic
                  </button>
                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`py-1.5 px-2 rounded-md transition-all ${
                      activeTab === 'ai'
                        ? 'bg-orange-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    AI Copilot
                  </button>
                </div>

                {/* Interactive Display Area */}
                {activeTab === 'roas' && (
                  <div className="space-y-4 py-2 animate-in fade-in duration-300">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <span className="text-[11px] text-slate-400 block">Google & Meta ROAS</span>
                        <div className="flex items-baseline gap-1.5 mt-1">
                          <span className="font-heading text-2xl font-bold text-white">4.85x</span>
                          <span className="text-xs text-emerald-400 font-semibold flex items-center">
                            <TrendingUp className="w-3 h-3 mr-0.5" /> +142%
                          </span>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <span className="text-[11px] text-slate-400 block">Cost Per Lead (CPL)</span>
                        <div className="flex items-baseline gap-1.5 mt-1">
                          <span className="font-heading text-2xl font-bold text-white">₹124</span>
                          <span className="text-xs text-emerald-400 font-semibold">-38% CPL</span>
                        </div>
                      </div>
                    </div>

                    {/* Visual Chart Bar */}
                    <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2">
                      <div className="flex justify-between text-xs text-slate-300">
                        <span className="font-medium">Campaign Optimization Matrix</span>
                        <span className="text-orange-400 font-mono">Meta + Google Ads</span>
                      </div>
                      <div className="space-y-2 pt-1">
                        <div>
                          <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                            <span>Traditional Ad Setup</span>
                            <span>2.1x ROAS</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div className="bg-slate-500 h-full w-[42%]" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[11px] text-orange-300 mb-1">
                            <span className="font-semibold text-orange-300 flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-orange-400" /> CBM AI-Optimized Funnel
                            </span>
                            <span className="font-bold text-emerald-400">4.85x ROAS</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden p-0.5">
                            <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-400 h-full rounded-full w-[95%] transition-all duration-1000" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'seo' && (
                  <div className="space-y-3 py-2 animate-in fade-in duration-300">
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300 font-medium flex items-center gap-1.5">
                          <Search className="w-3.5 h-3.5 text-amber-400" /> Organic Keyword Rankings
                        </span>
                        <span className="text-emerald-400 font-semibold">Top 3 Rankings</span>
                      </div>
                      <div className="space-y-1.5 pt-1">
                        <div className="flex justify-between items-center text-xs p-2 rounded bg-slate-950 border border-slate-800/80">
                          <span className="text-slate-200">"Digital Marketing Course Delhi"</span>
                          <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-mono">Rank #1</span>
                        </div>
                        <div className="flex justify-between items-center text-xs p-2 rounded bg-slate-950 border border-slate-800/80">
                          <span className="text-slate-200">"AI Digital Marketing Institute"</span>
                          <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-mono">Rank #2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'ai' && (
                  <div className="space-y-3 py-2 animate-in fade-in duration-300">
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-orange-500/30 space-y-2">
                      <div className="flex items-center justify-between text-xs text-orange-300">
                        <span className="font-semibold flex items-center gap-1.5">
                          <Bot className="w-4 h-4 text-orange-400" /> AI Campaign Generator
                        </span>
                        <span className="text-[10px] bg-orange-500/20 px-2 py-0.5 rounded text-orange-300">ChatGPT + Claude</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-950 text-xs font-mono text-slate-300 border border-slate-800 space-y-1">
                        <div className="text-orange-400 text-[11px]">&gt; Input: "Target e-commerce buyers in Delhi"</div>
                        <div className="text-slate-400 text-[11px]">&gt; Output: 5 High-Converting Hook Angles generated in 4s</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Hero Image Asset Preview */}
                <div className="mt-3 relative rounded-xl overflow-hidden border border-slate-800 group">
                  <img
                    src={HERO_IMAGE_PATH}
                    alt="CBM Academy Digital Marketing and AI Visualization"
                    className="w-full h-36 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold flex items-center gap-1">
                      <BarChart3 className="w-3.5 h-3.5 text-amber-400" /> Real Practical Tools
                    </span>
                    <span className="text-[10px] text-slate-300 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-700">
                      Google Ads • Meta • AI
                    </span>
                  </div>
                </div>

                {/* Floating Tool Badges Matrix */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800">
                    Google Ads
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800">
                    Meta Ads
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-orange-500/20 text-orange-300 border border-orange-500/30">
                    ChatGPT & Claude
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800">
                    WordPress
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800">
                    GA4 Analytics
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800">
                    Canva Pro
                  </span>
                </div>

              </div>
            </div>

            {/* Floating Top Right Badge */}
            <div className="absolute -top-4 -right-2 sm:-right-4 bg-slate-900/95 border border-orange-500/40 p-3 rounded-xl shadow-xl shadow-orange-950/80 hidden sm:flex items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Quality Guarantee</span>
                <span className="block text-xs font-bold text-white">Small Batches (15 Max)</span>
              </div>
            </div>

            {/* Floating Bottom Left Badge */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-slate-900/95 border border-amber-500/40 p-3 rounded-xl shadow-xl shadow-amber-950/40 hidden sm:flex items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Hands-on Focus</span>
                <span className="block text-xs font-bold text-white">Practical Assignments</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
