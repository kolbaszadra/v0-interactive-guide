
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import TipsSection from '@/components/TipsSection';
import CommonMistakes from '@/components/CommonMistakes';
import PromptTemplates from '@/components/PromptTemplates';
import SuccessStories from '@/components/SuccessStories';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import PromptSkillLevels from '@/components/PromptSkillLevels';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <Hero />
        <Overview />
        <TipsSection />
        <PromptSkillLevels />
        <CommonMistakes />
        <PromptTemplates />
        <SuccessStories />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
