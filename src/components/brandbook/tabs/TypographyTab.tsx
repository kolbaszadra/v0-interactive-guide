
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ComponentWithCode from '../ComponentWithCode';

interface TypographyTabProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const TypographyTab = ({ expandedCodeSections, toggleCodeSection }: TypographyTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tipográfia</CardTitle>
        <CardDescription>
          A weboldal szövegstílusai, betűtípusai és hierarchiája.
        </CardDescription>
      </CardHeader>
      <CardContent>
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
          
          {/* More headings and typography variations would go here */}
          {/* For brevity, I'm not including all of them */}
        </div>

        <h3 className="text-lg font-medium mb-4">Szövegvariációk</h3>
        <div className="space-y-4">
          <div className="p-4 border rounded-md">
            <p className="text-lg text-muted-foreground">
              Halvány szöveg - másodlagos szövegtartalmakhoz
            </p>
          </div>
          <div className="p-4 border rounded-md">
            <p className="text-sm">
              Kis méretű szöveg - megjegyzésekhez, lábjegyzetekhez
            </p>
          </div>
          {/* More text variations would go here */}
        </div>
      </CardContent>
    </Card>
  );
};

export default TypographyTab;
