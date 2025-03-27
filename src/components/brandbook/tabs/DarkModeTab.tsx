
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DarkModeComparison from './darkmode/DarkModeComparison';
import DarkModeImplementation from './darkmode/DarkModeImplementation';

interface DarkModeTabProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const DarkModeTab = ({ expandedCodeSections, toggleCodeSection }: DarkModeTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sötét mód</CardTitle>
        <CardDescription>
          A weboldal sötét és világos módja közötti különbségek és használat.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DarkModeComparison 
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        />
        <DarkModeImplementation />
      </CardContent>
    </Card>
  );
};

export default DarkModeTab;
