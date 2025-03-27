
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FontTypes from './typography/FontTypes';
import HeadingStyles from './typography/HeadingStyles';
import TextVariations from './typography/TextVariations';

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
        <FontTypes 
          expandedCodeSections={expandedCodeSections} 
          toggleCodeSection={toggleCodeSection} 
        />
        <HeadingStyles 
          expandedCodeSections={expandedCodeSections} 
          toggleCodeSection={toggleCodeSection} 
        />
        <TextVariations />
      </CardContent>
    </Card>
  );
};

export default TypographyTab;
