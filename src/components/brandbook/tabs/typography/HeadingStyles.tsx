
import React from 'react';
import ComponentWithCode from '../../ComponentWithCode';

interface HeadingStylesProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const HeadingStyles = ({ expandedCodeSections, toggleCodeSection }: HeadingStylesProps) => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Szöveghierarchia</h3>
      <div className="space-y-4 mb-8">
        <ComponentWithCode
          id="h1-heading"
          title="H1 Heading"
          code={`<!-- HTML -->
<h1 className="text-4xl font-bold tracking-tight">H1 Címsor</h1>

/* Tailwind Classes */
text-4xl: font-size: 2.25rem;
font-bold: font-weight: 700;
tracking-tight: letter-spacing: -0.025em;`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md w-full">
            <h1 className="text-4xl font-bold tracking-tight">H1 Címsor</h1>
            <div className="text-xs text-muted-foreground mt-2">
              4XL (2.25rem) / Bold / Tight tracking
            </div>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="h2-heading"
          title="H2 Heading"
          code={`<!-- HTML -->
<h2 className="text-3xl font-semibold tracking-tight">H2 Címsor</h2>

/* Tailwind Classes */
text-3xl: font-size: 1.875rem;
font-semibold: font-weight: 600;
tracking-tight: letter-spacing: -0.025em;`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md w-full">
            <h2 className="text-3xl font-semibold tracking-tight">H2 Címsor</h2>
            <div className="text-xs text-muted-foreground mt-2">
              3XL (1.875rem) / Semibold / Tight tracking
            </div>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="h3-heading"
          title="H3 Heading"
          code={`<!-- HTML -->
<h3 className="text-2xl font-semibold">H3 Címsor</h3>

/* Tailwind Classes */
text-2xl: font-size: 1.5rem;
font-semibold: font-weight: 600;`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md w-full">
            <h3 className="text-2xl font-semibold">H3 Címsor</h3>
            <div className="text-xs text-muted-foreground mt-2">
              2XL (1.5rem) / Semibold / Normal tracking
            </div>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="h4-heading"
          title="H4 Heading"
          code={`<!-- HTML -->
<h4 className="text-xl font-medium">H4 Címsor</h4>

/* Tailwind Classes */
text-xl: font-size: 1.25rem;
font-medium: font-weight: 500;`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md w-full">
            <h4 className="text-xl font-medium">H4 Címsor</h4>
            <div className="text-xs text-muted-foreground mt-2">
              XL (1.25rem) / Medium / Normal tracking
            </div>
          </div>
        </ComponentWithCode>
      </div>
    </>
  );
};

export default HeadingStyles;
