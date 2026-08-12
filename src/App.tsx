import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { Courses } from './components/Courses';
import { WhyCbm } from './components/WhyCbm';
import { Curriculum } from './components/Curriculum';
import { AIWorkflowSection } from './components/AIWorkflowSection';
import { PracticalLearning } from './components/PracticalLearning';
import { CareerSection } from './components/CareerSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { SyllabusModal } from './components/SyllabusModal';
import { PolicyModal } from './components/PolicyModal';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState<string | undefined>(undefined);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [policyModalTitle, setPolicyModalTitle] = useState<string | null>(null);

  const handleOpenEnquiryModal = (subject?: string) => {
    setEnquirySubject(subject);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
  };

  const handleOpenSyllabusModal = () => {
    setIsSyllabusModalOpen(true);
  };

  const handleCloseSyllabusModal = () => {
    setIsSyllabusModalOpen(false);
  };

  const handleOpenPolicyModal = (title: string) => {
    setPolicyModalTitle(title);
  };

  const handleClosePolicyModal = () => {
    setPolicyModalTitle(null);
  };

  const handleExploreCourses = () => {
    const coursesElement = document.getElementById('courses');
    if (coursesElement) {
      const yOffset = -80;
      const y = coursesElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* Header */}
      <Header onOpenEnquiryModal={handleOpenEnquiryModal} />

      {/* Main Page Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenEnquiryModal={handleOpenEnquiryModal}
          onExploreCourses={handleExploreCourses}
        />

        {/* Practical Trust Highlights */}
        <TrustSection />

        {/* Master Course Overview */}
        <Courses
          onOpenEnquiryModal={handleOpenEnquiryModal}
          onOpenSyllabusModal={handleOpenSyllabusModal}
        />

        {/* Why Choose CBM Academy */}
        <WhyCbm onOpenEnquiryModal={handleOpenEnquiryModal} />

        {/* Full 12-Module Curriculum Breakdown */}
        <Curriculum
          onOpenEnquiryModal={handleOpenEnquiryModal}
          onOpenSyllabusModal={handleOpenSyllabusModal}
        />

        {/* Interactive AI Marketing Workflows & Prompts */}
        <AIWorkflowSection onOpenEnquiryModal={handleOpenEnquiryModal} />

        {/* Practical 4-Step Learning Engine */}
        <PracticalLearning onOpenEnquiryModal={handleOpenEnquiryModal} />

        {/* Career Pathways, Salary & Roles */}
        <CareerSection onOpenEnquiryModal={handleOpenEnquiryModal} />

        {/* Verified Student Reviews & Policy */}
        <Testimonials />

        {/* Searchable FAQ Accordion */}
        <FAQ onOpenEnquiryModal={handleOpenEnquiryModal} />

        {/* Main Admission Enquiry Contact Form */}
        <ContactForm initialSubject={enquirySubject} />
      </main>

      {/* Footer */}
      <Footer
        onOpenEnquiryModal={handleOpenEnquiryModal}
        onOpenPolicyModal={handleOpenPolicyModal}
      />

      {/* Popups and Modals */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiryModal}
        initialSubject={enquirySubject}
      />

      <SyllabusModal
        isOpen={isSyllabusModalOpen}
        onClose={handleCloseSyllabusModal}
        onOpenEnquiryModal={() => handleOpenEnquiryModal('Syllabus Modal Enquiry')}
      />

      <PolicyModal
        title={policyModalTitle}
        onClose={handleClosePolicyModal}
      />
    </div>
  );
}
