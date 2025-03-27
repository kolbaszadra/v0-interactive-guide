
import React from 'react';

const DarkModeImplementation = () => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Sötét mód implementálása</h3>
      <div className="rounded-md p-6 bg-muted mb-6">
        <pre className="text-sm overflow-auto">
          {`// Sötét mód váltás JavaScript-tel
document.documentElement.classList.toggle('dark');

// Rendszer preferencia figyelése
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}`}
        </pre>
      </div>
      <p className="text-muted-foreground mb-6">
        A sötét mód a Tailwind CSS dark: modifikátorral implementálható a komponensekben:
      </p>
      <div className="rounded-md p-6 bg-muted">
        <pre className="text-sm overflow-auto">
          {`<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Ez az elem világos módban fehér háttérrel és fekete szöveggel,
  sötét módban pedig sötétszürke háttérrel és fehér szöveggel jelenik meg.
</div>`}
        </pre>
      </div>
    </>
  );
};

export default DarkModeImplementation;
