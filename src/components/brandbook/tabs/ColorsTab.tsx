
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ComponentWithCode from '../ComponentWithCode';

interface ColorsTabProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const ColorsTab = ({ expandedCodeSections, toggleCodeSection }: ColorsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Színpaletta</CardTitle>
        <CardDescription>
          A weboldal elsődleges és másodlagos színei, valamint a semleges színek skálája.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-medium mb-4">Elsődleges színek</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <ComponentWithCode
            id="primary-color"
            title="Primary"
            code={`<!-- HTML -->
<div className="bg-primary text-primary-foreground p-4">
  Primary Color
</div>

/* CSS Variables */
--primary: 240 5.9% 10%;
--primary-foreground: 0 0% 98%;`}
            expandedCodeSections={expandedCodeSections}
            toggleCodeSection={toggleCodeSection}
          >
            <div className="flex flex-col">
              <div className="h-24 rounded-md bg-primary"></div>
              <span className="mt-2 text-sm font-medium">Primary</span>
              <span className="text-xs text-muted-foreground">hsl(var(--primary))</span>
            </div>
          </ComponentWithCode>
          
          <ComponentWithCode
            id="primary-foreground-color"
            title="Primary Foreground"
            code={`<!-- HTML -->
<div className="bg-primary-foreground text-primary p-4">
  Primary Foreground Color
</div>

/* CSS Variables */
--primary-foreground: 0 0% 98%;`}
            expandedCodeSections={expandedCodeSections}
            toggleCodeSection={toggleCodeSection}
          >
            <div className="flex flex-col">
              <div className="h-24 rounded-md bg-primary-foreground"></div>
              <span className="mt-2 text-sm font-medium">Primary Foreground</span>
              <span className="text-xs text-muted-foreground">hsl(var(--primary-foreground))</span>
            </div>
          </ComponentWithCode>
          
          <ComponentWithCode
            id="secondary-color"
            title="Secondary"
            code={`<!-- HTML -->
<div className="bg-secondary text-secondary-foreground p-4">
  Secondary Color
</div>

/* CSS Variables */
--secondary: 240 4.8% 95.9%;
--secondary-foreground: 240 5.9% 10%;`}
            expandedCodeSections={expandedCodeSections}
            toggleCodeSection={toggleCodeSection}
          >
            <div className="flex flex-col">
              <div className="h-24 rounded-md bg-secondary"></div>
              <span className="mt-2 text-sm font-medium">Secondary</span>
              <span className="text-xs text-muted-foreground">hsl(var(--secondary))</span>
            </div>
          </ComponentWithCode>
          
          <ComponentWithCode
            id="secondary-foreground-color"
            title="Secondary Foreground"
            code={`<!-- HTML -->
<div className="bg-secondary-foreground text-secondary p-4">
  Secondary Foreground Color
</div>

/* CSS Variables */
--secondary-foreground: 240 5.9% 10%;`}
            expandedCodeSections={expandedCodeSections}
            toggleCodeSection={toggleCodeSection}
          >
            <div className="flex flex-col">
              <div className="h-24 rounded-md bg-secondary-foreground"></div>
              <span className="mt-2 text-sm font-medium">Secondary Foreground</span>
              <span className="text-xs text-muted-foreground">hsl(var(--secondary-foreground))</span>
            </div>
          </ComponentWithCode>
        </div>

        <h3 className="text-lg font-medium mb-4">Semleges színek</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <div className="h-24 rounded-md bg-background"></div>
            <span className="mt-2 text-sm font-medium">Background</span>
            <span className="text-xs text-muted-foreground">hsl(var(--background))</span>
          </div>
          <div className="flex flex-col">
            <div className="h-24 rounded-md bg-foreground"></div>
            <span className="mt-2 text-sm font-medium">Foreground</span>
            <span className="text-xs text-muted-foreground">hsl(var(--foreground))</span>
          </div>
          <div className="flex flex-col">
            <div className="h-24 rounded-md bg-muted"></div>
            <span className="mt-2 text-sm font-medium">Muted</span>
            <span className="text-xs text-muted-foreground">hsl(var(--muted))</span>
          </div>
          <div className="flex flex-col">
            <div className="h-24 rounded-md bg-muted-foreground"></div>
            <span className="mt-2 text-sm font-medium">Muted Foreground</span>
            <span className="text-xs text-muted-foreground">hsl(var(--muted-foreground))</span>
          </div>
        </div>

        <h3 className="text-lg font-medium mt-8 mb-4">Használat</h3>
        <p className="text-muted-foreground mb-4">
          Az elsődleges színeket kiemelt elemekhez, a másodlagosokat visszafogottabb jelölésekhez használjuk. A semleges színek a felület alapját adják.
        </p>

        <div className="rounded-md p-6 bg-muted">
          <div className="mb-4">
            <code className="text-sm">
              {`<div className="bg-primary text-primary-foreground">Elsődleges gomb</div>`}
            </code>
          </div>
          <div className="mb-4">
            <code className="text-sm">
              {`<div className="bg-secondary text-secondary-foreground">Másodlagos elem</div>`}
            </code>
          </div>
          <div>
            <code className="text-sm">
              {`<div className="bg-muted text-muted-foreground">Halvány elem</div>`}
            </code>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorsTab;
