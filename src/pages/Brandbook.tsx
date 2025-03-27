
import React, { useState } from 'react';
import BrandbookHeader from '@/components/brandbook/BrandbookHeader';
import BrandbookTabs from '@/components/brandbook/BrandbookTabs';
import UsageGuidelines from '@/components/brandbook/UsageGuidelines';
import { toast } from 'sonner';

const Brandbook = () => {
  const [expandedCodeSections, setExpandedCodeSections] = useState<Record<string, boolean>>({});

  const toggleCodeSection = (id: string) => {
    setExpandedCodeSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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

        toast.success('HTML letöltése sikeres', {
          description: 'A static-page.html fájl letöltése megtörtént.',
        });
      })
      .catch(error => {
        console.error('Error downloading static HTML:', error);
        toast.error('Hiba történt a letöltés során', {
          description: 'Kérjük, próbálja újra később.',
        });
      });
  };

  return (
    <div className="container py-10">
      <BrandbookHeader downloadStaticHTML={downloadStaticHTML} />
      <BrandbookTabs 
        expandedCodeSections={expandedCodeSections} 
        toggleCodeSection={toggleCodeSection} 
      />
      <UsageGuidelines />
    </div>
  );
};

export default Brandbook;
