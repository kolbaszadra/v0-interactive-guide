
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Set up our QueryClient for data fetching
const queryClient = new QueryClient();

// We need to set up the HTML lang attribute for proper Hungarian localization
document.documentElement.lang = 'hu';

// Add meta tags for SEO
const updateMetaTags = () => {
  document.title = "V0 Gyorstalpaló 2.0: Tippek és trükkök az AI Prototípus-készítéshez";
  
  // Description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", "Hogyan érhetsz el jobb eredményeket nagyobb kontroll mellett a v0.dev használatával. Interaktív útmutató dizájnereknek, fejlesztőknek és termékmenedzsereknek.");
  }
  
  // Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute("content", "V0 Gyorstalpaló 2.0: Tippek és trükkök az AI Prototípus-készítéshez");
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute("content", "Hogyan érhetsz el jobb eredményeket nagyobb kontroll mellett a v0.dev használatával. Interaktív útmutató dizájnereknek, fejlesztőknek és termékmenedzsereknek.");
  }
  
  const ogType = document.querySelector('meta[property="og:type"]');
  if (ogType) {
    ogType.setAttribute("content", "website");
  }
};

// Call it once on load
updateMetaTags();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
