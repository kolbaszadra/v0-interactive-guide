
import React from 'react';
import ComponentWithCode from '../../ComponentWithCode';

interface FormElementsProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const FormElements = ({ expandedCodeSections, toggleCodeSection }: FormElementsProps) => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Űrlapelemek</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ComponentWithCode
          id="text-input"
          title="Text Input"
          code={`// React Component
import { Input } from "@/components/ui/input"

<Input type="text" placeholder="Szöveg bevitele..." />

// HTML/CSS
<input 
  type="text" 
  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" 
  placeholder="Szöveg bevitele..."
/>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="space-y-2">
            <label className="text-sm font-medium">Szövegmező</label>
            <input 
              type="text" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" 
              placeholder="Szöveg bevitele..."
            />
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="select-input"
          title="Select Input"
          code={`// React Component
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Válassz opciót" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Opció 1</SelectItem>
    <SelectItem value="option2">Opció 2</SelectItem>
    <SelectItem value="option3">Opció 3</SelectItem>
  </SelectContent>
</Select>

// HTML/CSS
<select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
  <option>Opció 1</option>
  <option>Opció 2</option>
  <option>Opció 3</option>
</select>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="space-y-2">
            <label className="text-sm font-medium">Lenyíló menü</label>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option>Opció 1</option>
              <option>Opció 2</option>
              <option>Opció 3</option>
            </select>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="checkbox-input"
          title="Checkbox Input"
          code={`// React Component
import { Checkbox } from "@/components/ui/checkbox"

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms" className="text-sm font-medium">
    Elfogadom a feltételeket
  </label>
</div>

// HTML/CSS
<div className="flex items-center space-x-2">
  <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300" />
  <label for="terms" className="text-sm font-medium">
    Elfogadom a feltételeket
  </label>
</div>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300" />
            <label htmlFor="terms" className="text-sm font-medium">
              Elfogadom a feltételeket
            </label>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="textarea-input"
          title="Textarea Input"
          code={`// React Component
import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Ide írhatod az üzeneted..." />

// HTML/CSS
<textarea 
  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" 
  placeholder="Ide írhatod az üzeneted..."
></textarea>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="space-y-2">
            <label className="text-sm font-medium">Szövegterület</label>
            <textarea 
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" 
              placeholder="Ide írhatod az üzeneted..."
            ></textarea>
          </div>
        </ComponentWithCode>
      </div>
    </>
  );
};

export default FormElements;
