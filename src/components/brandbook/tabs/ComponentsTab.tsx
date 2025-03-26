
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ComponentWithCode from '../ComponentWithCode';
import { Home, User, Briefcase } from 'lucide-react';

interface ComponentsTabProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const ComponentsTab = ({ expandedCodeSections, toggleCodeSection }: ComponentsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Komponensek</CardTitle>
        <CardDescription>
          A weboldal fő interaktív és vizuális komponensei.
        </CardDescription>
      </CardHeader>
      <CardContent>
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
          
          {/* Additional button types would go here */}
        </div>

        <h3 className="text-lg font-medium mb-4">Navigációs elemek</h3>
        <div className="space-y-6 mb-8">
          <ComponentWithCode
            id="navigation-bar"
            title="Navigation Bar"
            code={`import { Home, User, Briefcase } from 'lucide-react';

// React Component
<nav className="flex gap-2 items-center justify-center bg-background/90 dark:bg-gray-900/90 backdrop-blur-md p-2 rounded-md border border-gray-200 dark:border-gray-800 shadow-lg">
  <a href="#" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
    <Home size={20} />
    <span className="ml-2">Főoldal</span>
  </a>
  <div className="bg-gray-200 dark:bg-gray-800 h-6 w-px"></div>
  <a href="#" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
    <User size={20} />
    <span className="ml-2">Rólam</span>
  </a>
  <div className="bg-gray-200 dark:bg-gray-800 h-6 w-px"></div>
  <a href="#" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
    <Briefcase size={20} />
    <span className="ml-2">Munkáim</span>
  </a>
</nav>`}
            expandedCodeSections={expandedCodeSections}
            toggleCodeSection={toggleCodeSection}
          >
            <div className="p-6 border rounded-md w-full">
              <div className="flex gap-2 items-center justify-center bg-background/90 dark:bg-gray-900/90 backdrop-blur-md p-2 rounded-md border border-gray-200 dark:border-gray-800 shadow-lg">
                <a href="#" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                  <Home size={20} />
                  <span className="ml-2">Főoldal</span>
                </a>
                <div className="bg-gray-200 dark:bg-gray-800 h-6 w-px"></div>
                <a href="#" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                  <User size={20} />
                  <span className="ml-2">Rólam</span>
                </a>
                <div className="bg-gray-200 dark:bg-gray-800 h-6 w-px"></div>
                <a href="#" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                  <Briefcase size={20} />
                  <span className="ml-2">Munkáim</span>
                </a>
              </div>
              <div className="text-xs text-muted-foreground mt-2 text-center">
                Központi Navigáció
              </div>
            </div>
          </ComponentWithCode>
        </div>

        {/* Additional component sections would go here */}
      </CardContent>
    </Card>
  );
};

export default ComponentsTab;
