
import React from 'react';
import InteractiveSandbox from './InteractiveSandbox';
import { cn } from '@/lib/utils';

interface TipSectionProps {
  id: string;
  number: number;
  title: string;
  description: string;
  content: React.ReactNode;
  promptExample: string;
  promptImproved: string;
  imageUrl?: string;
  reversed?: boolean;
  className?: string;
}

const TipSection: React.FC<TipSectionProps> = ({
  id,
  number,
  title,
  description,
  content,
  promptExample,
  promptImproved,
  imageUrl,
  reversed = false,
  className,
}) => {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className="container-custom">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
          reversed && "lg:flex lg:flex-row-reverse"
        )}>
          {/* Content side */}
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
              {number}
            </div>
            
            <h2 className="section-heading">{title}</h2>
            
            <p className="text-lg text-muted-foreground">{description}</p>
            
            <div className="space-y-6 mt-8">
              {content}
            </div>
          </div>
          
          {/* Interactive sandbox side */}
          <div className="relative">
            <InteractiveSandbox 
              defaultPrompt={promptExample}
              improvedPrompt={promptImproved}
              tipNumber={number}
              imageUrl={imageUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipSection;
