
import React from 'react';

interface NeutralColorProps {
  colorClass: string;
  title: string;
  cssVariable: string;
}

const NeutralColor = ({ colorClass, title, cssVariable }: NeutralColorProps) => {
  return (
    <div className="flex flex-col">
      <div className={`h-24 rounded-md ${colorClass}`}></div>
      <span className="mt-2 text-sm font-medium">{title}</span>
      <span className="text-xs text-muted-foreground">{cssVariable}</span>
    </div>
  );
};

const NeutralColors = () => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Semleges színek</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <NeutralColor 
          colorClass="bg-background" 
          title="Background" 
          cssVariable="hsl(var(--background))" 
        />
        <NeutralColor 
          colorClass="bg-foreground" 
          title="Foreground" 
          cssVariable="hsl(var(--foreground))" 
        />
        <NeutralColor 
          colorClass="bg-muted" 
          title="Muted" 
          cssVariable="hsl(var(--muted))" 
        />
        <NeutralColor 
          colorClass="bg-muted-foreground" 
          title="Muted Foreground" 
          cssVariable="hsl(var(--muted-foreground))" 
        />
      </div>
    </>
  );
};

export default NeutralColors;
