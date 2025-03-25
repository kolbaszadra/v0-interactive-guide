
import React from 'react';
import TipSection from '@/components/TipSection';
import { getTipSectionsData } from '@/data/tipSectionsData';

const TipsSection = () => {
  const tipSections = getTipSectionsData();
  
  return (
    <section id="tips" className="py-16 bg-white dark:bg-gray-950">
      <div className="container-custom mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">8 tipp a hatékonyabb v0.dev használathoz</h2>
          <p className="section-subheading">
            Ezeket a módszereket alkalmazva jobb eredményeket érhetsz el, és nagyobb kontrollt szerezhetsz a tervezési folyamat felett.
          </p>
        </div>
      </div>
      
      {tipSections.map((tip, index) => (
        <TipSection
          key={tip.id}
          {...tip}
          className={index % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}
        />
      ))}
    </section>
  );
};

export default TipsSection;
