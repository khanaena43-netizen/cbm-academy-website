import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight, Phone, MapPin } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface HeaderProps {
  onOpenEnquiryModal: (subject?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiryModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'courses', 'about', 'curriculum', 'ai-section', 'career', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Courses', href: '#courses', id: 'courses' },
    { name: 'Why CBM', href: '#about', id: 'about' },
    { name: 'Curriculum', href: '#curriculum', id: 'curriculum' },
    { name: 'AI Marketing', href: '#ai-section', id: 'ai-section' },
    { name: 'Career', href: '#career', id: 'career' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner / Location strip */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-400 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>{ACADEMY_INFO.location}</span>
            </span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-300 font-medium">New Batch Starting Soon</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${ACADEMY_INFO.phone}`} className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>{ACADEMY_INFO.phone}</span>
            </a>
            <span className="text-slate-700">•</span>
            <span className="text-orange-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" /> AI Integrated Curriculum
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel py-2.5 shadow-xl shadow-slate-950/50 border-b border-slate-800/80'
            : 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-400 p-0.5 shadow-md shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-heading text-lg font-bold bg-gradient-to-r from-white via-orange-100 to-amber-300 bg-clip-text text-transparent">
                    CBM
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading text-lg font-bold text-white tracking-tight leading-none group-hover:text-orange-200 transition-colors">
                    CBM Academy
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                    AI
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 tracking-wider font-medium uppercase mt-0.5">
                  Digital Marketing & AI
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-white bg-orange-500/20 border border-orange-500/40'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => onOpenEnquiryModal('General Enquiry')}
                className="relative group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-lg shadow-orange-600/25 hover:shadow-orange-600/40 transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Enquire Now</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => onOpenEnquiryModal('Mobile Header')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors"
              >
                Enquire
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-6 mt-2 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-slate-900/80 active:bg-orange-600/20 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-800/80 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiryModal('Mobile Drawer Enquire');
                  }}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-center text-white bg-gradient-to-r from-orange-600 to-amber-600 shadow-md shadow-orange-600/30 active:scale-[0.98]"
                >
                  Enquire Now
                </button>
                <a
                  href={`tel:${ACADEMY_INFO.phone}`}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-center text-slate-300 bg-slate-900 border border-slate-800 flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-400" />
                  <span>Call {ACADEMY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
