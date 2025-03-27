
import React from 'react';

const FormElements = () => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Űrlapelemek</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Szövegmező</label>
          <input type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Szöveg bevitele..."/>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Lenyíló menü</label>
          <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option>Opció 1</option>
            <option>Opció 2</option>
            <option>Opció 3</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FormElements;
