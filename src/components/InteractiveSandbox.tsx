
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy, RotateCcw, Code, Image, PlayCircle } from 'lucide-react';

interface InteractiveSandboxProps {
  defaultPrompt: string;
  improvedPrompt: string;
  tipNumber: number;
  imageUrl?: string;
}

const InteractiveSandbox: React.FC<InteractiveSandboxProps> = ({
  defaultPrompt,
  improvedPrompt,
  tipNumber,
  imageUrl
}) => {
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("edit");

  const resetPrompt = () => {
    setPrompt(defaultPrompt);
  };

  const useImprovedPrompt = () => {
    setPrompt(improvedPrompt);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simulated results based on the current prompt
  const getSimulatedResult = () => {
    if (prompt === defaultPrompt) {
      return "Egyszerű eredmény prompt alapján...";
    } else if (prompt === improvedPrompt) {
      return "Továbbfejlesztett eredmény a jobb prompt alapján...";
    } else {
      return "Egyedi eredmény a szerkesztett prompt alapján...";
    }
  };

  return (
    <div className="interactive-panel shadow-2xl w-full max-w-2xl mx-auto">
      {/* Sandbox header */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm font-medium">v0.dev interaktív példa #{tipNumber}</div>
        <div></div> {/* Empty div for flex spacing */}
      </div>
      
      {/* Main content */}
      <Tabs defaultValue="edit" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="bg-gray-50 dark:bg-gray-900 p-2 border-b border-gray-200 dark:border-gray-700">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="edit" className="flex items-center gap-1.5">
              <Code size={16} /> Szerkesztés
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center gap-1.5">
              <Image size={16} /> Előnézet
            </TabsTrigger>
            <TabsTrigger value="result" className="flex items-center gap-1.5">
              <PlayCircle size={16} /> Eredmény
            </TabsTrigger>
          </TabsList>
        </div>
        
        {/* Edit tab */}
        <TabsContent value="edit" className="m-0">
          <div className="p-4 bg-white dark:bg-gray-950">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-64 p-4 border border-gray-200 dark:border-gray-800 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-900"
              placeholder="Írd be a promptodat..."
            />
            
            <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
              <div>
                <button
                  onClick={resetPrompt}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 dark:border-gray-800 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <RotateCcw size={14} /> Visszaállítás
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={useImprovedPrompt}
                  className="px-3 py-1.5 border border-blue-500 text-blue-500 rounded-md text-sm hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-colors"
                >
                  Továbbfejlesztett prompt használata
                </button>
                
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={14} /> Másolva
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Másolás
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Preview tab */}
        <TabsContent value="preview" className="m-0">
          <div className="p-4 min-h-[400px] bg-white dark:bg-gray-950 overflow-auto">
            <div className="w-full h-full flex items-center justify-center">
              {imageUrl ? (
                <img 
                  src={imageUrl || "/placeholder.svg"} 
                  alt="Preview of the design" 
                  className="max-w-full rounded-lg border border-gray-200 dark:border-gray-800"
                />
              ) : (
                <div className="text-center p-12 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
                  <p className="text-muted-foreground">
                    Az előnézet a prompt alapján generálódna
                  </p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>
        
        {/* Result tab */}
        <TabsContent value="result" className="m-0">
          <div className="p-6 min-h-[400px] bg-white dark:bg-gray-950">
            <div className="glass-panel p-6 h-full">
              <h3 className="font-medium text-lg mb-4">Szimulált válasz:</h3>
              <p className="text-muted-foreground whitespace-pre-line">
                {getSimulatedResult()}
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InteractiveSandbox;
