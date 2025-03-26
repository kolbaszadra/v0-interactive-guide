
import React from 'react';
import Overview from '@/components/Overview';
import TipsSection from '@/components/TipsSection';
import CommonMistakes from '@/components/CommonMistakes';
import PromptTemplates from '@/components/PromptTemplates';
import SuccessStories from '@/components/SuccessStories';
import Newsletter from '@/components/Newsletter';
import PromptSkillLevels from '@/components/PromptSkillLevels';

const PageContent = () => {
  return (
    <>
      <Overview />
      <TipsSection />
      <PromptSkillLevels />
      <CommonMistakes />
      <PromptTemplates />
      <SuccessStories />
      <Newsletter />
    </>
  );
};

export default PageContent;
