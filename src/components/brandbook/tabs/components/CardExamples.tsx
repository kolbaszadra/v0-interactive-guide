
import React from 'react';

const CardExamples = () => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Kártyák</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg overflow-hidden">
          <div className="aspect-video bg-gray-200 dark:bg-gray-800"></div>
          <div className="p-4">
            <h4 className="font-semibold mb-2">Projekt kártya</h4>
            <p className="text-sm text-muted-foreground">Projekt leírás helye. Itt jelennek meg a részletek a projektről.</p>
            <div className="mt-4 flex items-center text-sm font-medium text-primary">
              Megtekintés 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-6">
          <h4 className="font-semibold mb-2">Információs kártya</h4>
          <p className="text-muted-foreground mb-4">Általános információk megjelenítésére szolgáló kártya komponens.</p>
          <div className="flex items-center text-sm font-medium">
            <button className="bg-secondary px-4 py-2 rounded-md text-secondary-foreground transition-colors hover:bg-secondary/80">
              Művelet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardExamples;
