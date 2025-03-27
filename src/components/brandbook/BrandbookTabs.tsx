
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ColorsTab from './tabs/ColorsTab';
import TypographyTab from './tabs/TypographyTab';
import ComponentsTab from './tabs/ComponentsTab';
import LayoutTab from './tabs/LayoutTab';
import DarkModeTab from './tabs/DarkModeTab';

interface BrandbookTabsProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const BrandbookTabs = ({ expandedCodeSections, toggleCodeSection }: BrandbookTabsProps) => {
  const [activeTab, setActiveTab] = useState("colors");

  return (
    <Tabs defaultValue="colors" className="mb-10" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
        <TabsTrigger value="colors">Színek</TabsTrigger>
        <TabsTrigger value="typography">Tipográfia</TabsTrigger>
        <TabsTrigger value="components">Komponensek</TabsTrigger>
        <TabsTrigger value="layout">Elrendezés</TabsTrigger>
        <TabsTrigger value="darkmode">Sötét mód</TabsTrigger>
      </TabsList>
      <TabsContent value="colors">
        <ColorsTab 
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        />
      </TabsContent>
      <TabsContent value="typography">
        <TypographyTab 
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        />
      </TabsContent>
      <TabsContent value="components">
        <ComponentsTab 
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        />
      </TabsContent>
      <TabsContent value="layout">
        <LayoutTab 
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        />
      </TabsContent>
      <TabsContent value="darkmode">
        <DarkModeTab 
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        />
      </TabsContent>
    </Tabs>
  );
};

export default BrandbookTabs;
