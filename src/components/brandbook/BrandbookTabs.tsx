
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, Type, Layers, Layout, Moon } from 'lucide-react';
import ColorsTab from './tabs/ColorsTab';
import TypographyTab from './tabs/TypographyTab';
import ComponentsTab from './tabs/ComponentsTab';
import LayoutTab from './tabs/LayoutTab';
import DarkModeTab from './tabs/DarkModeTab';

const BrandbookTabs = () => {
  const [expandedCodeSections, setExpandedCodeSections] = useState<Record<string, boolean>>({});

  const toggleCodeSection = (id: string) => {
    setExpandedCodeSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <Tabs defaultValue="colors" className="mb-12">
      <TabsList className="mb-4">
        <TabsTrigger value="colors"><Palette className="mr-2 h-4 w-4" /> Színek</TabsTrigger>
        <TabsTrigger value="typography"><Type className="mr-2 h-4 w-4" /> Tipográfia</TabsTrigger>
        <TabsTrigger value="components"><Layers className="mr-2 h-4 w-4" /> Komponensek</TabsTrigger>
        <TabsTrigger value="layout"><Layout className="mr-2 h-4 w-4" /> Elrendezés</TabsTrigger>
        <TabsTrigger value="darkmode"><Moon className="mr-2 h-4 w-4" /> Sötét mód</TabsTrigger>
      </TabsList>

      <TabsContent value="colors">
        <ColorsTab expandedCodeSections={expandedCodeSections} toggleCodeSection={toggleCodeSection} />
      </TabsContent>

      <TabsContent value="typography">
        <TypographyTab expandedCodeSections={expandedCodeSections} toggleCodeSection={toggleCodeSection} />
      </TabsContent>

      <TabsContent value="components">
        <ComponentsTab expandedCodeSections={expandedCodeSections} toggleCodeSection={toggleCodeSection} />
      </TabsContent>

      <TabsContent value="layout">
        <LayoutTab expandedCodeSections={expandedCodeSections} toggleCodeSection={toggleCodeSection} />
      </TabsContent>

      <TabsContent value="darkmode">
        <DarkModeTab expandedCodeSections={expandedCodeSections} toggleCodeSection={toggleCodeSection} />
      </TabsContent>
    </Tabs>
  );
};

export default BrandbookTabs;
