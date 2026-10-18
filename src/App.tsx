//
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexPt from "./pages/IndexPt";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Demo from "./pages/Demo";
import CaseStudyAIVsTraditional from "./pages/CaseStudyAIVsTraditional";
import CaseStudyZerorez from "./pages/CaseStudyZerorez";
import CaseStudyLAIFE from "./pages/CaseStudyLAIFE";
import CaseStudyHouse from "./pages/CaseStudyHouse";
import CaseStudyBrandU from "./pages/CaseStudyBrandU";
import CaseStudyNielsen from "./pages/CaseStudyNielsen";
import CaseStudyForrester from "./pages/CaseStudyForrester";
import CaseStudyAdobeFirefly from "./pages/CaseStudyAdobeFirefly";
import CaseStudyCustomerThink from "./pages/CaseStudyCustomerThink";
import VSL from "./pages/VSL";
import NotFound from "./pages/NotFound";
import AutoTranslateForBrazil from "./components/AutoTranslateForBrazil";
import InAppBrowserPrompt from "./components/InAppBrowserPrompt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AutoTranslateForBrazil />
        <InAppBrowserPrompt />
        <Routes>
          <Route path="/" element={<VSL variant="199" />} />
          <Route path="/home" element={<Index />} />
          <Route path="/pt" element={<IndexPt />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/vsl" element={<VSL />} />
          <Route path="/vsl99" element={<VSL variant="99" />} />
          <Route path="/vsl199" element={<VSL variant="199" />} />
          <Route path="/vsl999" element={<VSL variant="999" />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/ai-vs-traditional-video-ads" element={<CaseStudyAIVsTraditional />} />
          <Route path="/case-studies/zerorez-local-services" element={<CaseStudyZerorez />} />
          <Route path="/case-studies/laife-dtc-wellness" element={<CaseStudyLAIFE />} />
          <Route path="/case-studies/house-retail-seasonal" element={<CaseStudyHouse />} />
          <Route path="/case-studies/brand-u-fashion" element={<CaseStudyBrandU />} />
          <Route path="/case-studies/nielsen-ai-creatives-ctr-study" element={<CaseStudyNielsen />} />
          <Route path="/case-studies/forrester-ai-roas-research" element={<CaseStudyForrester />} />
          <Route path="/case-studies/adobe-firefly-prediction-benchmark" element={<CaseStudyAdobeFirefly />} />
          <Route path="/case-studies/customerthink-personalized-ai-ctr" element={<CaseStudyCustomerThink />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
