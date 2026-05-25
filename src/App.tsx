import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import FAQPage from "./pages/FAQ.tsx";
import AboutPage from "./pages/About.tsx";
import BlogIndex from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import ServicesIndex from "./pages/Services.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import IntegrationsIndex from "./pages/Integrations.tsx";
import IntegrationPage from "./pages/IntegrationPage.tsx";
import PricingPage from "./pages/Pricing.tsx";
import ContactPage from "./pages/Contact.tsx";
import CaseStudiesIndex, { CaseStudyPage } from "./pages/CaseStudies.tsx";
import NotFound from "./pages/NotFound.tsx";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/integrations" element={<IntegrationsIndex />} />
          <Route path="/integrations/:slug" element={<IntegrationPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-studies" element={<CaseStudiesIndex />} />
          <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
