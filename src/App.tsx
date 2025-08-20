
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Index from "./pages/Index";
import Product from "./pages/Product";
import WhoWeServe from "./pages/WhoWeServe";
import Pricing from "./pages/Pricing";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PerformanceMonitor from "@/components/PerformanceMonitor";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      offset: 100,
      delay: 0,
      anchorPlacement: "top-bottom",
    });

    // Refresh AOS on route changes
    const handleRouteChange = () => {
      AOS.refresh();
    };

    // Listen for route changes
    window.addEventListener("popstate", handleRouteChange);
    
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <PerformanceMonitor />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/*" element={<Product />} />
              <Route path="/who-we-serve" element={<WhoWeServe />} />
              <Route path="/who-we-serve/*" element={<WhoWeServe />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
