
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy, ArrowRight, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VersionProps {
  id: string;
  title: string;
  description: string;
  prompt: string;
  image: string;
}

interface IterativeDesignPreviewProps {
  versions: VersionProps[];
  className?: string;
}

const IterativeDesignPreview: React.FC<IterativeDesignPreviewProps> = ({
  versions,
  className
}) => {
  const [activeVersion, setActiveVersion] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(versions[activeVersion].prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nextVersion = () => {
    setActiveVersion((prev) => (prev < versions.length - 1 ? prev + 1 : prev));
  };

  const prevVersion = () => {
    setActiveVersion((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className={cn("space-y-8", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">{versions[activeVersion].title}</h3>
            <p className="text-muted-foreground">{versions[activeVersion].description}</p>
          </div>
          
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Prompt {activeVersion + 1}/{versions.length}</span>
              <button 
                onClick={copyToClipboard}
                className="text-sm flex items-center gap-1 text-blue-600 dark:text-blue-400"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Másolva" : "Másolás"}
              </button>
            </div>
            <pre className="whitespace-pre-wrap text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded overflow-auto max-h-48">
              {versions[activeVersion].prompt}
            </pre>
          </div>
          
          <div className="flex justify-between">
            <button 
              onClick={prevVersion} 
              disabled={activeVersion === 0}
              className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 dark:border-gray-800 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:pointer-events-none"
            >
              <ArrowLeft size={14} />
              Előző változat
            </button>
            <button 
              onClick={nextVersion} 
              disabled={activeVersion === versions.length - 1}
              className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 dark:border-gray-800 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:pointer-events-none"
            >
              Következő változat
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
        
        <div className="order-first lg:order-last">
          <img 
            src={versions[activeVersion].image} 
            alt={`Változat ${activeVersion + 1} előnézet`} 
            className="w-full rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg"
          />
        </div>
      </div>
      
      <div className="flex justify-center space-x-2">
        {versions.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveVersion(index)}
            className={`w-2 h-2 rounded-full ${
              activeVersion === index 
                ? "bg-primary" 
                : "bg-gray-300 dark:bg-gray-700"
            }`}
            aria-label={`Váltás a ${index + 1}. változatra`}
          />
        ))}
      </div>
    </div>
  );
};

export default IterativeDesignPreview;
