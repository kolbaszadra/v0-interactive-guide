
import React from 'react';

const ColorUsage = () => {
  return (
    <>
      <h3 className="text-lg font-medium mt-8 mb-4">Használat</h3>
      <p className="text-muted-foreground mb-4">
        Az elsődleges színeket kiemelt elemekhez, a másodlagosokat visszafogottabb jelölésekhez használjuk. A semleges színek a felület alapját adják.
      </p>

      <div className="rounded-md p-6 bg-muted">
        <div className="mb-4">
          <code className="text-sm">
            {`<div className="bg-primary text-primary-foreground">Elsődleges gomb</div>`}
          </code>
        </div>
        <div className="mb-4">
          <code className="text-sm">
            {`<div className="bg-secondary text-secondary-foreground">Másodlagos elem</div>`}
          </code>
        </div>
        <div>
          <code className="text-sm">
            {`<div className="bg-muted text-muted-foreground">Halvány elem</div>`}
          </code>
        </div>
      </div>
    </>
  );
};

export default ColorUsage;
