
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface LayoutTabProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const LayoutTab = ({ expandedCodeSections, toggleCodeSection }: LayoutTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Elrendezés</CardTitle>
        <CardDescription>
          Az oldal szerkezete, konténerek, rácsok és térközök.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-medium mb-4">Konténerek</h3>
        <div className="space-y-6 mb-8">
          <div className="p-4 border rounded-md bg-muted">
            <div className="p-4 border border-dashed rounded-md text-center">
              Konténer
            </div>
            <div className="text-xs text-muted-foreground mt-2 text-center">
              container - Maximális szélességű, középre igazított konténer
            </div>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-4">Rácsrendszer</h3>
        <div className="space-y-6 mb-8">
          <div className="p-4 border rounded-md">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-2 bg-muted rounded-md text-center">1</div>
              <div className="p-2 bg-muted rounded-md text-center">2</div>
            </div>
            <div className="text-xs text-muted-foreground text-center">
              2 oszlopos elrendezés
            </div>
          </div>
          {/* More grid examples would go here */}
        </div>

        {/* More layout sections would go here */}
      </CardContent>
    </Card>
  );
};

export default LayoutTab;
