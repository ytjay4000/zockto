import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarPt from '@/components/pt/NavbarPt';
import HeroPt from '@/components/pt/HeroPt';
import VideoGallery from '@/components/VideoGallery';
import ProblemsSectionPt from '@/components/pt/ProblemsSectionPt';
import BenefitsSectionPt from '@/components/pt/BenefitsSectionPt';
import HowItWorksSectionPt from '@/components/pt/HowItWorksSectionPt';
import TestimonialsSectionPt from '@/components/pt/TestimonialsSectionPt';
import PricingSectionPt from '@/components/pt/PricingSectionPt';
import FAQSectionPt from '@/components/pt/FAQSectionPt';
import CTASectionPt from '@/components/pt/CTASectionPt';
import FooterPt from '@/components/pt/FooterPt';
import SEO from '@/components/SEO';

const IndexPt = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Zockto — Anúncios UGC com IA em Minutos"
        description="Crie anúncios UGC de alta conversão em minutos com o Zockto — sem câmera, sem influenciador, sem edição."
        path="/pt"
      />
      <NavbarPt />
      <HeroPt />
      <VideoGallery ctaLabel="Começar" />
      <ProblemsSectionPt />
      <BenefitsSectionPt />
      <HowItWorksSectionPt />
      <TestimonialsSectionPt />
      <PricingSectionPt />
      <FAQSectionPt />
      <CTASectionPt />
      <FooterPt />
    </div>
  );
};

export default IndexPt;
