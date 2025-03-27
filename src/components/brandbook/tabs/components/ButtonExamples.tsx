
import React from 'react';
import ComponentWithCode from '../../ComponentWithCode';

interface ButtonExamplesProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const ButtonExamples = ({ expandedCodeSections, toggleCodeSection }: ButtonExamplesProps) => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Gombok</h3>
      <div className="flex flex-wrap gap-4 mb-8">
        <ComponentWithCode
          id="primary-button"
          title="Primary Button"
          code={`import { Button } from "@/components/ui/button";

// React Component
<Button variant="default">Elsődleges gomb</Button>

// Raw HTML/CSS
<button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:opacity-90">
  Elsődleges gomb
</button>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md flex flex-col items-center gap-2">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:opacity-90">
              Elsődleges gomb
            </button>
            <span className="text-xs text-muted-foreground">Primary</span>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="secondary-button"
          title="Secondary Button"
          code={`import { Button } from "@/components/ui/button";

// React Component
<Button variant="secondary">Másodlagos gomb</Button>

// Raw HTML/CSS
<button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-secondary/80">
  Másodlagos gomb
</button>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md flex flex-col items-center gap-2">
            <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-secondary/80">
              Másodlagos gomb
            </button>
            <span className="text-xs text-muted-foreground">Secondary</span>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="outline-button"
          title="Outline Button"
          code={`import { Button } from "@/components/ui/button";

// React Component
<Button variant="outline">Körvonalazott gomb</Button>

// Raw HTML/CSS
<button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-md font-medium transition-all">
  Körvonalazott gomb
</button>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md flex flex-col items-center gap-2">
            <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-md font-medium transition-all">
              Körvonalazott gomb
            </button>
            <span className="text-xs text-muted-foreground">Outline</span>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="link-button"
          title="Link Button"
          code={`import { Button } from "@/components/ui/button";

// React Component
<Button variant="link">Link gomb</Button>

// Raw HTML/CSS
<button className="text-primary underline-offset-4 hover:underline px-6 py-3 font-medium transition-all">
  Link gomb
</button>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md flex flex-col items-center gap-2">
            <button className="text-primary underline-offset-4 hover:underline px-6 py-3 font-medium transition-all">
              Link gomb
            </button>
            <span className="text-xs text-muted-foreground">Link</span>
          </div>
        </ComponentWithCode>
      </div>
    </>
  );
};

export default ButtonExamples;
