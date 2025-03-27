
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContainerExamples from './layout/ContainerExamples';
import GridExamples from './layout/GridExamples';
import SpacingExamples from './layout/SpacingExamples';

interface LayoutTabProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const LayoutTab = ({ expandedCodeSections, toggleCodeSection }: LayoutTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Elrendezés</CardTitle>
        <CardDescription>
          Az oldal szerkezete, konténerek, rácsok és térközök.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ContainerExamples />
        <GridExamples />
        <SpacingExamples />
      </CardContent>
    </Card>
  );
};

export default LayoutTab;
