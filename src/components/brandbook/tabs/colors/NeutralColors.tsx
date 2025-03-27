
import React from 'react';
import ComponentWithCode from '../../ComponentWithCode';

interface NeutralColorProps {
  id: string;
  colorClass: string;
  title: string;
  cssVariable: string;
  hexCode: string;
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const NeutralColor = ({ 
  id,
  colorClass, 
  title, 
  cssVariable, 
  hexCode,
  expandedCodeSections,
  toggleCodeSection
}: NeutralColorProps) => {
  return (
    <ComponentWithCode
      id={id}
      title={title}
      code={`<!-- HTML -->
<div className="${colorClass} p-4">
  ${title} Color
</div>

/* CSS Variables */
${cssVariable};`}
      expandedCodeSections={expandedCodeSections}
      toggleCodeSection={toggleCodeSection}
    >
      <div className="flex flex-col">
        <div className={`h-24 rounded-md ${colorClass}`}></div>
        <span className="mt-2 text-sm font-medium">{title}</span>
        <span className="text-xs text-muted-foreground">{cssVariable}</span>
        <span className="text-xs text-muted-foreground">{hexCode}</span>
      </div>
    </ComponentWithCode>
  );
};

interface NeutralColorsProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const NeutralColors = ({ expandedCodeSections, toggleCodeSection }: NeutralColorsProps) => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Semleges színek</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <NeutralColor 
          id="background-color"
          colorClass="bg-background" 
          title="Background" 
          cssVariable="hsl(var(--background))" 
          hexCode="#FFFFFF"
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        />
        <NeutralColor 
          id="foreground-color"
          colorClass="bg-foreground" 
          title="Foreground" 
          cssVariable="hsl(var(--foreground))" 
          hexCode="#0A0A0A"
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        />
        <NeutralColor 
          id="muted-color"
          colorClass="bg-muted" 
          title="Muted" 
          cssVariable="hsl(var(--muted))" 
          hexCode="#F5F5F5"
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        />
        <NeutralColor 
          id="muted-foreground-color"
          colorClass="bg-muted-foreground" 
          title="Muted Foreground" 
          cssVariable="hsl(var(--muted-foreground))" 
          hexCode="#737373"
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        />
      </div>
    </>
  );
};

export default NeutralColors;
