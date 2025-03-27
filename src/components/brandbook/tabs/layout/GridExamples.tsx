
import React from 'react';
import ComponentWithCode from '../../ComponentWithCode';

interface GridExamplesProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const GridExamples = ({ expandedCodeSections, toggleCodeSection }: GridExamplesProps) => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Rácsrendszer</h3>
      <div className="space-y-6 mb-8">
        <ComponentWithCode
          id="basic-grid"
          title="Basic Grid"
          code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div>Cella 1</div>
  <div>Cella 2</div>
  <div>Cella 3</div>
</div>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded text-center">Cella 1</div>
              <div className="p-3 bg-primary/10 rounded text-center">Cella 2</div>
              <div className="p-3 bg-primary/10 rounded text-center">Cella 3</div>
            </div>
            <div className="text-xs text-muted-foreground text-center">
              Alapvető rács elrendezés - kisebb képernyőn egy oszlop, nagyobb képernyőn három oszlop
            </div>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="complex-grid"
          title="Complex Grid"
          code={`<div className="grid grid-cols-4 gap-4">
  <div className="col-span-4 md:col-span-2">A cella</div>
  <div className="col-span-2 md:col-span-1">B cella</div>
  <div className="col-span-2 md:col-span-1">C cella</div>
  <div className="col-span-4">D cella</div>
</div>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md">
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="col-span-4 md:col-span-2 p-3 bg-primary/10 rounded text-center">A cella</div>
              <div className="col-span-2 md:col-span-1 p-3 bg-primary/10 rounded text-center">B cella</div>
              <div className="col-span-2 md:col-span-1 p-3 bg-primary/10 rounded text-center">C cella</div>
              <div className="col-span-4 p-3 bg-primary/10 rounded text-center">D cella</div>
            </div>
            <div className="text-xs text-muted-foreground text-center">
              Komplex rács elrendezés - különböző méretű cellák, reszponzív viselkedéssel
            </div>
          </div>
        </ComponentWithCode>
      </div>
    </>
  );
};

export default GridExamples;
