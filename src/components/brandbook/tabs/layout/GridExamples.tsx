
import React from 'react';

const GridExamples = () => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Rácsrendszer</h3>
      <div className="space-y-6 mb-8">
        <div className="p-4 border rounded-md">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-2 bg-muted rounded-md text-center">1</div>
            <div className="p-2 bg-muted rounded-md text-center">2</div>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            2 oszlopos elrendezés
          </div>
        </div>
        <div className="p-4 border rounded-md">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="p-2 bg-muted rounded-md text-center">1</div>
            <div className="p-2 bg-muted rounded-md text-center">2</div>
            <div className="p-2 bg-muted rounded-md text-center">3</div>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            3 oszlopos elrendezés
          </div>
        </div>
        <div className="p-4 border rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="p-2 bg-muted rounded-md text-center">1</div>
            <div className="p-2 bg-muted rounded-md text-center">2</div>
            <div className="p-2 bg-muted rounded-md text-center">3</div>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Reszponzív rács - Mobil: 1 oszlop, Asztali: 3 oszlop
          </div>
        </div>
      </div>
    </>
  );
};

export default GridExamples;
