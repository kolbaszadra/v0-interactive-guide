
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface BrandbookHeaderProps {
  downloadStaticHTML: () => void;
}

const BrandbookHeader = ({ downloadStaticHTML }: BrandbookHeaderProps) => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold tracking-tight">Brandbook & Design System</h1>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={downloadStaticHTML}
        >
          <Download className="h-4 w-4" />
          Static HTML
        </Button>
      </div>
      <p className="text-lg text-muted-foreground mb-10">
        A komplett útmutató a weboldal vizuális identitásához és felhasználói felületéhez.
      </p>
    </>
  );
};

export default BrandbookHeader;
