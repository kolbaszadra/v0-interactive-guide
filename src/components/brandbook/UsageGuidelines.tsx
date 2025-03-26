
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const UsageGuidelines = () => {
  return (
    <Card className="mt-12">
      <CardHeader>
        <CardTitle>Használati irányelvek</CardTitle>
        <CardDescription>
          A websiteframe designrendszer legjobb gyakorlatai és használati javaslatai.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Következetesség</h3>
          <p className="text-muted-foreground">
            Mindig következetesen használjuk a designrendszer elemeit. Kerüljük az egyéni stílusok alkalmazását, hogy az oldal egységes megjelenésű maradjon.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Hozzáférhetőség</h3>
          <p className="text-muted-foreground">
            Minden komponens tervezésénél ügyeljünk az akadálymentességre. Használjunk megfelelő szöveges alternatívákat, elegendő kontrasztot és gondoskodjunk a billentyűzetes navigálhatóságról.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Reszponzivitás</h3>
          <p className="text-muted-foreground">
            Minden elemet úgy tervezzünk, hogy különböző képernyőméreteken is megfelelően jelenjen meg. Használjuk a Tailwind CSS reszponzív osztályait.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Teljesítmény</h3>
          <p className="text-muted-foreground">
            Optimalizáljuk a komponenseket a gyors betöltés érdekében. Kerüljük a túlzott animációkat és a nagy méretű képeket.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Bővíthetőség</h3>
          <p className="text-muted-foreground">
            A designrendszert úgy tervezzük, hogy könnyen bővíthető legyen új komponensekkel vagy stílusvariációkkal a jövőbeni fejlesztések során.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsageGuidelines;
