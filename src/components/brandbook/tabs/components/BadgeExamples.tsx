
import React from 'react';

const BadgeExamples = () => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Badge-ek</h3>
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors">
          Alapértelmezett
        </div>
        <div className="inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
          Elsődleges
        </div>
        <div className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
          Másodlagos
        </div>
        <div className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
          Halvány
        </div>
      </div>
    </>
  );
};

export default BadgeExamples;
