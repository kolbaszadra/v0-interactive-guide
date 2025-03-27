
import React from 'react';
import ComponentWithCode from '../../ComponentWithCode';

interface SpacingExamplesProps {
  expandedCodeSections?: Record<string, boolean>;
  toggleCodeSection?: (id: string) => void;
}

const SpacingExamples: React.FC<SpacingExamplesProps> = ({ expandedCodeSections, toggleCodeSection }) => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Térközök</h3>
      <div className="space-y-6 mb-8">
        <div className="p-4 border rounded-md">
          <div className="flex gap-4 justify-center mb-4">
            <div className="h-16 w-16 bg-primary/20 flex items-center justify-center text-xs rounded">Item</div>
            <div className="h-16 w-16 bg-primary/20 flex items-center justify-center text-xs rounded">Item</div>
            <div className="h-16 w-16 bg-primary/20 flex items-center justify-center text-xs rounded">Item</div>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            gap-4 (1rem / 16px) térköz az elemek között
          </div>
        </div>
        <div className="p-4 border rounded-md">
          <div className="space-y-4 mb-4">
            <div className="h-12 bg-primary/20 flex items-center justify-center text-xs rounded">Item 1</div>
            <div className="h-12 bg-primary/20 flex items-center justify-center text-xs rounded">Item 2</div>
            <div className="h-12 bg-primary/20 flex items-center justify-center text-xs rounded">Item 3</div>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            space-y-4 (1rem / 16px) vertikális térköz az elemek között
          </div>
        </div>
      </div>
    </>
  );
};

export default SpacingExamples;
