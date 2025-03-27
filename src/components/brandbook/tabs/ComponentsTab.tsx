
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ButtonExamples from './components/ButtonExamples';
import NavigationExamples from './components/NavigationExamples';
import CardExamples from './components/CardExamples';
import BadgeExamples from './components/BadgeExamples';
import FormElements from './components/FormElements';

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
        <ButtonExamples 
          expandedCodeSections={expandedCodeSections} 
          toggleCodeSection={toggleCodeSection} 
        />
        <NavigationExamples 
          expandedCodeSections={expandedCodeSections} 
          toggleCodeSection={toggleCodeSection} 
        />
        <CardExamples />
        <BadgeExamples />
        <FormElements 
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        />
      </CardContent>
    </Card>
  );
};

export default ComponentsTab;
