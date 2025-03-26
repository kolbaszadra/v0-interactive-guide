
import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BrandbookHeader from '@/components/brandbook/BrandbookHeader';
import BrandbookTabs from '@/components/brandbook/BrandbookTabs';
import UsageGuidelines from '@/components/brandbook/UsageGuidelines';

const Brandbook = () => {
  const downloadStaticHTML = () => {
    // Create a hidden link element
    fetch('/static-page.html')
      .then(response => response.text())
      .then(html => {
        // Create a blob with the HTML content
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        
        // Create a link and trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'static-page.html';
        document.body.appendChild(a);
        a.click();
        
        // Clean up
        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 100);
      })
      .catch(error => {
        console.error('Error downloading static HTML:', error);
      });
  };

  return (
    <div className="container py-10">
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

      <BrandbookTabs />
      
      <UsageGuidelines />
    </div>
  );
};

export default Brandbook;
