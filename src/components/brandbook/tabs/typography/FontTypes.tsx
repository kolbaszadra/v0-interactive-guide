
import React from 'react';
import ComponentWithCode from '../../ComponentWithCode';

interface FontTypesProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const FontTypes = ({ expandedCodeSections, toggleCodeSection }: FontTypesProps) => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Betűtípusok</h3>
      <div className="space-y-6 mb-8">
        <ComponentWithCode
          id="display-font"
          title="Display Font"
          code={`<!-- HTML -->
<h1 className="font-display font-bold text-3xl">
  Design engineer and builder
</h1>

/* CSS */
.font-display {
  font-family: var(--font-display);
}`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md w-full">
            <div className="text-sm text-muted-foreground mb-2">Display</div>
            <p className="font-display font-bold text-3xl">
              Design engineer and builder
            </p>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="heading-font"
          title="Heading Font"
          code={`<!-- HTML -->
<h2 className="font-heading text-2xl">
  I'm a design engineer, where I craft intuitive user experiences.
</h2>

/* CSS */
.font-heading {
  font-family: var(--font-heading);
}`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md w-full">
            <div className="text-sm text-muted-foreground mb-2">Heading</div>
            <p className="font-heading text-2xl">
              I'm a design engineer, where I craft intuitive user experiences. 
            </p>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="body-font"
          title="Body Font"
          code={`<!-- HTML -->
<p className="font-sans text-base">
  A body text example that explains the nuances of the design system and how to effectively use the components within your project.
</p>

/* CSS */
.font-sans {
  font-family: var(--font-sans);
}`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md w-full">
            <div className="text-sm text-muted-foreground mb-2">Body</div>
            <p className="font-sans text-base">
              A body text example that explains the nuances of the design system and how to effectively use the components within your project.
            </p>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="code-font"
          title="Code Font"
          code={`<!-- HTML -->
<p className="font-mono text-sm">
  const Component = () => { return <div>Hello</div> }
</p>

/* CSS */
.font-mono {
  font-family: var(--font-mono);
}`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md w-full">
            <div className="text-sm text-muted-foreground mb-2">Code</div>
            <p className="font-mono text-sm">
              const Component = () =&gt; {`{ return <div>Hello</div> }`}
            </p>
          </div>
        </ComponentWithCode>
      </div>
    </>
  );
};

export default FontTypes;
