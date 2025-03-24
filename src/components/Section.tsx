
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  centered?: boolean;
  noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  className,
  children,
  fullWidth = false,
  centered = true,
  noPadding = false,
}) => {
  return (
    <section 
      id={id} 
      className={cn(
        "py-16",
        noPadding ? "" : "py-16",
        className
      )}
    >
      {(title || subtitle) && (
        <div className={`${fullWidth ? "" : "container-custom"} mb-16`}>
          <div className={`${centered ? "max-w-3xl mx-auto text-center" : ""}`}>
            {title && <h2 className="section-heading">{title}</h2>}
            {subtitle && <p className="section-subheading">{subtitle}</p>}
          </div>
        </div>
      )}
      
      <div className={fullWidth ? "" : "container-custom"}>
        {children}
      </div>
    </section>
  );
};

export default Section;
