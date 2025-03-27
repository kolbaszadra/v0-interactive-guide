
import React from 'react';

const TextVariations = () => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Szövegvariációk</h3>
      <div className="space-y-4">
        <div className="p-4 border rounded-md">
          <p className="text-lg text-muted-foreground">
            Halvány szöveg - másodlagos szövegtartalmakhoz
          </p>
        </div>
        <div className="p-4 border rounded-md">
          <p className="text-sm">
            Kis méretű szöveg - megjegyzésekhez, lábjegyzetekhez
          </p>
        </div>
        <div className="p-4 border rounded-md">
          <p className="font-medium">
            Közepes vastagságú szöveg - enyhe kiemeléshez
          </p>
        </div>
        <div className="p-4 border rounded-md">
          <p className="font-bold">
            Félkövér szöveg - erős kiemeléshez
          </p>
        </div>
        <div className="p-4 border rounded-md">
          <p className="italic">
            Dőlt szöveg - hangsúlyozáshoz, idézetekhez
          </p>
        </div>
      </div>
    </>
  );
};

export default TextVariations;
