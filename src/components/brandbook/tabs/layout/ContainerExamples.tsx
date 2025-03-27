
import React from 'react';
import ComponentWithCode from '../../ComponentWithCode';

interface ContainerExamplesProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const ContainerExamples = ({ expandedCodeSections, toggleCodeSection }: ContainerExamplesProps) => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Konténerek</h3>
      <div className="space-y-6 mb-8">
        <ComponentWithCode
          id="default-container"
          title="Default Container"
          code={`// Tailwind CSS
<div className="container mx-auto px-4">
  <!-- Tartalom -->
</div>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md bg-muted">
            <div className="p-4 border border-dashed rounded-md text-center">
              Konténer
            </div>
            <div className="text-xs text-muted-foreground mt-2 text-center">
              container - Maximális szélességű, középre igazított konténer
            </div>
          </div>
        </ComponentWithCode>

        <ComponentWithCode
          id="narrow-container"
          title="Narrow Container"
          code={`// Tailwind CSS
<div className="max-w-3xl mx-auto px-4">
  <!-- Szűkebb tartalom -->
</div>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md bg-muted">
            <div className="p-4 border border-dashed rounded-md text-center max-w-3xl mx-auto">
              Szűk konténer
            </div>
            <div className="text-xs text-muted-foreground mt-2 text-center">
              max-w-3xl - Szűkebb, középre igazított konténer
            </div>
          </div>
        </ComponentWithCode>

        <ComponentWithCode
          id="full-width-container"
          title="Full Width Container"
          code={`// Tailwind CSS
<div className="w-full px-4">
  <!-- Teljes szélességű tartalom -->
</div>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md bg-muted">
            <div className="p-4 border border-dashed rounded-md text-center w-full">
              Teljes szélességű konténer
            </div>
            <div className="text-xs text-muted-foreground mt-2 text-center">
              w-full - Teljes szélességű konténer
            </div>
          </div>
        </ComponentWithCode>
      </div>
    </>
  );
};

export default ContainerExamples;
