import React from 'react';
import { CMSProvider } from './context/CMSContext';
import { CMSLoader, CMSStatus } from './components/CMSLoader';
import { useCMSContext } from './context/CMSContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import AWSPartnership from './components/AWSPartnership';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContent = () => {
  const { loading, error, refreshContent, isCMSEnabled } = useCMSContext();

  return (
    <>
      <CMSLoader loading={loading} error={error} onRetry={refreshContent}>
        <div className="min-h-screen">
          <Header />
          <Hero />
          <Services />
          <Process />
          <AWSPartnership />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </CMSLoader>
      <CMSStatus 
        isCMSEnabled={isCMSEnabled} 
        loading={loading} 
        error={error} 
      />
    </>
  );
};

function App() {
  return (
    <CMSProvider>
      <AppContent />
    </CMSProvider>
  );
}

export default App;