
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Image, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface V0ExampleProps {
  exampleNumber: number;
  defaultCode: string;
  imageUrl?: string;
}

const V0Example: React.FC<V0ExampleProps> = ({
  exampleNumber,
  defaultCode,
  imageUrl
}) => {
  const [code, setCode] = useState(defaultCode);
  const [activeTab, setActiveTab] = useState("edit");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success("Kód másolva a vágólapra!");
  };

  return (
    <div className="interactive-panel shadow-2xl w-full max-w-2xl mx-auto border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-muted p-3 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm font-medium">v0.dev interaktív példa #{exampleNumber}</div>
        <div></div> {/* Empty div for flex spacing */}
      </div>
      
      {/* Tabs */}
      <Tabs defaultValue="edit" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="bg-muted/30 p-2 border-b">
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
          <div className="p-4 bg-background">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 p-4 border border-border rounded-lg font-mono text-sm focus:ring-2 focus:ring-primary focus:outline-none bg-muted/30"
              placeholder="Írd be a kódot..."
            />
            
            <div className="flex justify-end mt-4">
              <Button
                onClick={copyToClipboard}
                variant="outline"
                size="sm"
                className="flex items-center gap-1.5"
              >
                Másolás
              </Button>
            </div>
          </div>
        </TabsContent>
        
        {/* Preview tab */}
        <TabsContent value="preview" className="m-0">
          <div className="p-4 min-h-[320px] bg-background flex items-center justify-center">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt="Előnézet" 
                className="max-w-full max-h-[300px] rounded-lg border border-border"
              />
            ) : (
              <div className="text-center p-8 border border-dashed border-muted-foreground rounded-lg">
                <p className="text-muted-foreground">
                  Nincs elérhető előnézet
                </p>
              </div>
            )}
          </div>
        </TabsContent>
        
        {/* Result tab */}
        <TabsContent value="result" className="m-0">
          <div className="p-4 min-h-[320px] bg-background">
            <div className="p-6 h-full bg-muted/30 rounded-lg">
              <h3 className="font-medium mb-4">Végeredmény:</h3>
              <p className="text-muted-foreground">
                {code ? "A kód alapján generált eredmény..." : "Nincs megadva kód"}
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default V0Example;
