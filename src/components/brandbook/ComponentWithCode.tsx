
import React from 'react';
import { Code } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ComponentWithCodeProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const ComponentWithCode = ({
  id,
  title,
  description,
  children,
  code,
  expandedCodeSections,
  toggleCodeSection
}: ComponentWithCodeProps) => {
  const isExpanded = expandedCodeSections[id] || false;
  
  return (
    <div className="mb-8 border rounded-lg overflow-hidden">
      <div className="p-4 border-b bg-muted/30">
        <h4 className="font-semibold">{title}</h4>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <div className="p-6 flex justify-center items-center bg-background">
        {children}
      </div>
      <div className="border-t">
        <Collapsible open={isExpanded} onOpenChange={() => toggleCodeSection(id)}>
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-sm font-medium">
            <div className="flex items-center">
              <Code className="mr-2 h-4 w-4" />
              <span>View Code</span>
            </div>
            <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="bg-muted p-4 overflow-x-auto">
              <pre className="text-xs">
                <code>{code}</code>
              </pre>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default ComponentWithCode;
