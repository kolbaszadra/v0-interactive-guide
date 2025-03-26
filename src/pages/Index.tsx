
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PageContent from '@/components/PageContent';
import Footer from '@/components/Footer';

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
        <PageContent />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
