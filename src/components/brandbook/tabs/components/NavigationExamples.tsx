
import React from 'react';
import { Home, User, Briefcase } from 'lucide-react';
import ComponentWithCode from '../../ComponentWithCode';

interface NavigationExamplesProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const NavigationExamples = ({ expandedCodeSections, toggleCodeSection }: NavigationExamplesProps) => {
  return (
    <>
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
    </>
  );
};

export default NavigationExamples;
