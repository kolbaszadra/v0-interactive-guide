
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PageContent from '@/components/PageContent';
import Footer from '@/components/Footer';
import V0Example from '@/components/V0Example';

const Index = () => {
  // Set dark mode on initial load
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">V0.dev Interaktív Példa</h2>
            <V0Example 
              exampleNumber={1}
              defaultCode={`// Adj meg egy v0.dev promptot
  
v0.dev prompt: "Készíts egy egyszerű bejelentkező oldalt felhasználónév és jelszó mezőkkel, valamint egy bejelentkezés gombbal"`}
              imageUrl="/placeholder.svg"
            />
          </div>
        </section>
        
        <PageContent />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
