import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoGallery from '@/components/VideoGallery';
import ProblemsSection from '@/components/ProblemsSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import VoiceTestimonialsSection from '@/components/VoiceTestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when coming from other pages
    if (location.hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Zockto AI-Powered UGC Video Creation"
        description="Create high-converting, fully edited UGC ads in minutes with Zockto — no camera, no influencer, no editing required."
        path="/"
      />
      <Navbar />
      <Hero />
      <VideoGallery />
      <ProblemsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <VoiceTestimonialsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
