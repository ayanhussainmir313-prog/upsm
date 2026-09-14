/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { AdmissionsCta } from './components/AdmissionsCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { AdminModal } from './components/AdminModal';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">
      {/* 1. Thin Dark Navy Info Bar */}
      <TopBar
        onOpenAdmin={() => setAdminModalOpen(true)}
        onOpenAdmission={() => setAdmissionModalOpen(true)}
      />

      {/* 2. Sticky Clean White Navbar */}
      <Navbar onOpenApply={() => setAdmissionModalOpen(true)} />

      <main className="flex-1">
        {/* 3. Main Hero Section with Original School Building Photo */}
        <Hero
          onOpenApply={() => setAdmissionModalOpen(true)}
          onExplore={() => handleScrollToSection('about')}
        />

        {/* 4. About Us Section with 4 Cards & UES Strip */}
        <AboutSection onOpenApply={() => setAdmissionModalOpen(true)} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Gallery & Events Preview with 5 Original Photos & Lightbox */}
        <GallerySection />

        {/* 7. Large Navy Admissions CTA */}
        <AdmissionsCta onOpenApply={() => setAdmissionModalOpen(true)} />

        {/* 8. Campus Contact & Inquiry Section */}
        <ContactSection />
      </main>

      {/* 9. Dark Navy Professional Footer */}
      <Footer
        onOpenApply={() => setAdmissionModalOpen(true)}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Interactive Modals & Utilities */}
      <AdmissionModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
      />

      <AdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />

      <BackToTop />
    </div>
  );
}
