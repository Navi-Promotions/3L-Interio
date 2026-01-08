import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Founder from './components/Founder';
import SEOSection from './components/SEOSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import PageHeader from './components/PageHeader';
import CoreValues from './components/CoreValues';
import Process from './components/Process';
import ServicesDetailed from './components/ServicesDetailed';
import Comparison from './components/Comparison';
import QualityStandards from './components/QualityStandards';
import ProjectsGallery from './components/ProjectsGallery';
import ContactPage from './components/ContactPage';
import { ViewType } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const handleNavigate = (view: ViewType, sectionId?: string) => {
    setCurrentView(view);
    
    // If navigating to a specific section on the home page
    if (view === 'home' && sectionId && sectionId !== 'home') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentView={currentView} onNavigate={handleNavigate} />
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <Services />
            {/* WhyChooseUs moved to dedicated page for streamlined home */}
            <Projects />
            <Testimonials />
            <SEOSection />
            <CTA />
          </>
        )}

        {currentView === 'about' && (
          <>
            <PageHeader 
              title="Our Legacy" 
              subtitle="Engineering Artistry"
              backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
            />
            <About />
            <CoreValues />
            <Founder />
            <CTA />
          </>
        )}

        {currentView === 'services' && (
          <>
             <PageHeader 
              title="Our Expertise" 
              subtitle="Tailored to Perfection"
              backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            />
            <ServicesDetailed />
            <Process />
            <CTA />
          </>
        )}

        {currentView === 'why-us' && (
          <>
             <PageHeader 
              title="Why Choose Us" 
              subtitle="The Engineering Advantage"
              backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
            />
            <WhyChooseUs />
            <Comparison />
            <QualityStandards />
            <CTA />
          </>
        )}

        {currentView === 'projects' && (
          <>
             <PageHeader 
              title="Our Portfolio" 
              subtitle="Executed with Precision"
              backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
            />
            <ProjectsGallery />
            <CTA />
          </>
        )}

        {currentView === 'contact' && (
          <>
             <PageHeader 
              title="Contact Us" 
              subtitle="Get In Touch"
              backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            />
            <ContactPage />
          </>
        )}
      </main>

      <Footer currentView={currentView} onNavigate={handleNavigate} />
      <ChatWidget />
    </div>
  );
}

export default App;