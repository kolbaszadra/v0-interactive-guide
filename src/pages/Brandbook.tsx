
import React, { useState } from 'react';
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
      <BrandbookHeader downloadStaticHTML={downloadStaticHTML} />
      <BrandbookTabs />
      <UsageGuidelines />
    </div>
  );
};

export default Brandbook;
