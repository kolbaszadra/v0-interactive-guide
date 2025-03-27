
import React from 'react';
import ComponentWithCode from '../../ComponentWithCode';

interface ColorSwatchProps {
  id: string;
  title: string;
  colorClass: string;
  cssVariable: string;
  code: string;
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const ColorSwatch = ({ 
  id, 
  title, 
  colorClass, 
  cssVariable, 
  code,
  expandedCodeSections,
  toggleCodeSection
}: ColorSwatchProps) => {
  return (
    <ComponentWithCode
      id={id}
      title={title}
      code={code}
      expandedCodeSections={expandedCodeSections}
      toggleCodeSection={toggleCodeSection}
    >
      <div className="flex flex-col">
        <div className={`h-24 rounded-md ${colorClass}`}></div>
        <span className="mt-2 text-sm font-medium">{title}</span>
        <span className="text-xs text-muted-foreground">{cssVariable}</span>
      </div>
    </ComponentWithCode>
  );
};

interface ColorPaletteProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const ColorPalette = ({ expandedCodeSections, toggleCodeSection }: ColorPaletteProps) => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Elsődleges színek</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <ColorSwatch
          id="primary-color"
          title="Primary"
          colorClass="bg-primary"
          cssVariable="hsl(var(--primary))"
          code={`<!-- HTML -->
<div className="bg-primary text-primary-foreground p-4">
  Primary Color
</div>

/* CSS Variables */
--primary: 240 5.9% 10%;
--primary-foreground: 0 0% 98%;`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        />
        
        <ColorSwatch
          id="primary-foreground-color"
          title="Primary Foreground"
          colorClass="bg-primary-foreground"
          cssVariable="hsl(var(--primary-foreground))"
          code={`<!-- HTML -->
<div className="bg-primary-foreground text-primary p-4">
  Primary Foreground Color
</div>

/* CSS Variables */
--primary-foreground: 0 0% 98%;`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        />
        
        <ColorSwatch
          id="secondary-color"
          title="Secondary"
          colorClass="bg-secondary"
          cssVariable="hsl(var(--secondary))"
          code={`<!-- HTML -->
<div className="bg-secondary text-secondary-foreground p-4">
  Secondary Color
</div>

/* CSS Variables */
--secondary: 240 4.8% 95.9%;
--secondary-foreground: 240 5.9% 10%;`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        />
        
        <ColorSwatch
          id="secondary-foreground-color"
          title="Secondary Foreground"
          colorClass="bg-secondary-foreground"
          cssVariable="hsl(var(--secondary-foreground))"
          code={`<!-- HTML -->
<div className="bg-secondary-foreground text-secondary p-4">
  Secondary Foreground Color
</div>

/* CSS Variables */
--secondary-foreground: 240 5.9% 10%;`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        />
      </div>
    </>
  );
};

export default ColorPalette;
