import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyAIVsTraditional from "./pages/CaseStudyAIVsTraditional";
import CaseStudyZerorez from "./pages/CaseStudyZerorez";
import CaseStudyLAIFE from "./pages/CaseStudyLAIFE";
import CaseStudyHouse from "./pages/CaseStudyHouse";
import CaseStudyBrandU from "./pages/CaseStudyBrandU";
import CaseStudyNielsen from "./pages/CaseStudyNielsen";
import CaseStudyForrester from "./pages/CaseStudyForrester";
import CaseStudyAdobeFirefly from "./pages/CaseStudyAdobeFirefly";
import CaseStudyCustomerThink from "./pages/CaseStudyCustomerThink";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/ai-vs-traditional-video-ads" element={<CaseStudyAIVsTraditional />} />
          <Route path="/case-studies/zerorez-local-services" element={<CaseStudyZerorez />} />
          <Route path="/case-studies/laife-dtc-wellness" element={<CaseStudyLAIFE />} />
          <Route path="/case-studies/house-retail-seasonal" element={<CaseStudyHouse />} />
          <Route path="/case-studies/brand-u-fashion" element={<CaseStudyBrandU />} />
          <Route path="/case-studies/nielsen-ai-creatives-ctr-study" element={<CaseStudyNielsen />} />
          <Route path="/case-studies/forrester-ai-roas-research" element={<CaseStudyForrester />} />
          <Route path="/case-studies/adobe-firefly-prediction-benchmark" element={<CaseStudyAdobeFirefly />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
