
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
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", "Hogyan érhetsz el jobb eredményeket nagyobb kontroll mellett a v0.dev használatával. Interaktív útmutató dizájnereknek, fejlesztőknek és termékmenedzsereknek.");
  } else {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Hogyan érhetsz el jobb eredményeket nagyobb kontroll mellett a v0.dev használatával. Interaktív útmutató dizájnereknek, fejlesztőknek és termékmenedzsereknek.');
    document.head.appendChild(metaDescription);
  }
  
  // Keywords
  const metaKeywords = document.createElement('meta');
  metaKeywords.setAttribute('name', 'keywords');
  metaKeywords.setAttribute('content', 'v0.dev, AI, tervezés, UI, UX, design, prototípus, prompt, fejlesztés');
  document.head.appendChild(metaKeywords);
  
  // Open Graph
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute("content", "V0 Gyorstalpaló 2.0: Tippek és trükkök az AI Prototípus-készítéshez");
  } else {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'V0 Gyorstalpaló 2.0: Tippek és trükkök az AI Prototípus-készítéshez');
    document.head.appendChild(ogTitle);
  }
  
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute("content", "Hogyan érhetsz el jobb eredményeket nagyobb kontroll mellett a v0.dev használatával. Interaktív útmutató dizájnereknek, fejlesztőknek és termékmenedzsereknek.");
  } else {
    ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Hogyan érhetsz el jobb eredményeket nagyobb kontroll mellett a v0.dev használatával. Interaktív útmutató dizájnereknek, fejlesztőknek és termékmenedzsereknek.');
    document.head.appendChild(ogDescription);
  }
  
  let ogType = document.querySelector('meta[property="og:type"]');
  if (ogType) {
    ogType.setAttribute("content", "website");
  } else {
    ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    document.head.appendChild(ogType);
  }
  
  // Twitter Card
  const twitterCard = document.createElement('meta');
  twitterCard.setAttribute('name', 'twitter:card');
  twitterCard.setAttribute('content', 'summary_large_image');
  document.head.appendChild(twitterCard);
  
  const twitterTitle = document.createElement('meta');
  twitterTitle.setAttribute('name', 'twitter:title');
  twitterTitle.setAttribute('content', 'V0 Gyorstalpaló 2.0: Tippek és trükkök az AI Prototípus-készítéshez');
  document.head.appendChild(twitterTitle);
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
