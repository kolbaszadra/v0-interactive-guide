
import React from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeComparison = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col">
          <div className="p-6 border rounded-md bg-white mb-2">
            <h3 className="font-semibold text-gray-900 mb-2">Világos mód</h3>
            <p className="text-gray-700">Ez a weboldal megjelenése világos módban. Világos háttér, sötét szöveg.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Gomb</button>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Világos mód megjelenése
          </div>
        </div>
        <div className="flex flex-col">
          <div className="p-6 border rounded-md bg-gray-900 mb-2">
            <h3 className="font-semibold text-gray-100 mb-2">Sötét mód</h3>
            <p className="text-gray-300">Ez a weboldal megjelenése sötét módban. Sötét háttér, világos szöveg.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Gomb</button>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Sötét mód megjelenése
          </div>
        </div>
      </div>
    </>
  );
};

export default DarkModeComparison;
