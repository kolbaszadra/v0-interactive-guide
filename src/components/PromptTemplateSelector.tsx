
import React, { useState } from 'react';
import { Check, Copy, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TemplateCategory {
  id: string;
  name: string;
  templates: Template[];
}

interface Template {
  id: string;
  title: string;
  description: string;
  prompt: string;
}

interface PromptTemplateSelectorProps {
  categories: TemplateCategory[];
  className?: string;
}

const PromptTemplateSelector: React.FC<PromptTemplateSelectorProps> = ({
  categories,
  className
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id || '');
  const [activeTemplate, setActiveTemplate] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const copyToClipboard = (prompt: string, id: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCurrentCategory = () => {
    return categories.find(category => category.id === activeCategory);
  };

  const getCurrentTemplate = () => {
    const category = getCurrentCategory();
    if (!category) return null;
    return category.templates.find(template => template.id === activeTemplate);
  };

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-1/3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between p-3 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-950"
          >
            <span>{getCurrentCategory()?.name || 'Válassz kategóriát'}</span>
            <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg overflow-hidden">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="w-full p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                  onClick={() => {
                    setActiveCategory(category.id);
                    setIsOpen(false);
                    setActiveTemplate('');
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {getCurrentCategory()?.templates.map((template) => (
            <button
              key={template.id}
              className={`p-3 text-left border ${
                activeTemplate === template.id
                  ? 'border-primary'
                  : 'border-gray-200 dark:border-gray-800'
              } rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors`}
              onClick={() => setActiveTemplate(template.id)}
            >
              <h4 className="font-medium">{template.title}</h4>
              <p className="text-sm text-muted-foreground line-clamp-2">{template.description}</p>
            </button>
          ))}
        </div>
      </div>
      
      {activeTemplate && (
        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">{getCurrentTemplate()?.title}</span>
            <button 
              onClick={() => {
                const template = getCurrentTemplate();
                if (template) copyToClipboard(template.prompt, template.id);
              }}
              className="text-sm flex items-center gap-1 text-blue-600 dark:text-blue-400"
            >
              {copiedId === activeTemplate ? <Check size={14} /> : <Copy size={14} />}
              {copiedId === activeTemplate ? "Másolva" : "Másolás"}
            </button>
          </div>
          <pre className="whitespace-pre-wrap text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded overflow-auto max-h-64">
            {getCurrentTemplate()?.prompt}
          </pre>
        </div>
      )}
    </div>
  );
};

export default PromptTemplateSelector;
