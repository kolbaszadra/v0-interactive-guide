
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ColorPalette from './colors/ColorPalette';
import NeutralColors from './colors/NeutralColors';
import ColorUsage from './colors/ColorUsage';

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
        <ColorPalette 
          expandedCodeSections={expandedCodeSections} 
          toggleCodeSection={toggleCodeSection} 
        />
        <NeutralColors />
        <ColorUsage />
      </CardContent>
    </Card>
  );
};

export default ColorsTab;
