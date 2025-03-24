
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InteractiveSandbox from './InteractiveSandbox';

const PromptSkillLevels = () => {
  const promptVersion1 = "Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal.";
  
  const promptVersion2 = "Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal (Alap, Pro, Vállalati). Az Alap csomag legyen 9€/hó, a Pro 19€/hó, a Vállalati pedig 49€/hó. Minden csomagnál legyen egy \"Leggyakrabban választott\" jelölés a Pro csomagnál. Adj hozzá egy összehasonlító táblázatot is a csomagok alatt, amely részletezi a funkciókat.";
  
  const promptVersion3 = "Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal (Alap, Pro, Vállalati). Az Alap csomag legyen 9€/hó, a Pro 19€/hó, a Vállalati pedig 49€/hó. Minden csomagnál legyen egy \"Leggyakrabban választott\" jelölés a Pro csomagnál. Adj hozzá egy összehasonlító táblázatot is a csomagok alatt, amely részletezi a funkciókat. Stílus: - Használj gradiens hátteret a fejlécben (világoskék -> sötétkék) - A kártyák legyenek fehér hátterűek, lekerekített sarkokkal és enyhe árnyékkal - A kiemelt csomag (Pro) legyen kék szegéllyel ellátva - Legyen egy váltógomb, amivel éves/havi árazás között lehet váltani (10% kedvezmény éves fizetésnél) - Minden kártyán legyen egy \"Próbáld ki ingyen\" gomb - A táblázatban használj pipákat és X-eket a funkciók jelölésére";

  return (
    <section id="prompt-versions" className="py-16 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-heading">Alternatív fejlesztés és finomítás</h2>
          <p className="section-subheading">
            Hogyan finomíthatod fokozatosan az AI által generált eredményeket?
          </p>
        </div>
        
        <Tabs defaultValue="version1" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="version1">1. verzió</TabsTrigger>
            <TabsTrigger value="version2">2. verzió</TabsTrigger>
            <TabsTrigger value="version3">3. verzió</TabsTrigger>
          </TabsList>
          
          <TabsContent value="version1" className="mt-4">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold">Kezdeti prompt</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-4">Prompt tartalma:</h4>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg mb-6">
                  <p className="font-mono text-sm">{promptVersion1}</p>
                </div>
                <p className="text-muted-foreground mb-4">
                  Az alapvető leírás nem tartalmaz részleteket. Konkrét adatok, design és funkcionalitás hiányzik, ez
                  általános, vázlatos eredményt ad.
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/1557507e-0f71-4515-99a9-0553f9f23d60.png" 
                  alt="Verzió 1 eredménye" 
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-800"
                />
              </div>
            </div>
            <InteractiveSandbox 
              defaultPrompt={promptVersion1}
              improvedPrompt={promptVersion2}
              tipNumber={1}
            />
          </TabsContent>
          
          <TabsContent value="version2" className="mt-4">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold">Részletes prompt</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-4">Prompt tartalma:</h4>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg mb-6">
                  <p className="font-mono text-sm">{promptVersion2}</p>
                </div>
                <p className="text-muted-foreground mb-4">
                  A második verzióban már konkrét csomagneveket, árakat és funkcionális elemeket (összehasonlító táblázat) határoztunk meg.
                  Az eredmény jóval strukturáltabb, de a vizuális megjelenés még mindig alapértelmezett.
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/1557507e-0f71-4515-99a9-0553f9f23d60.png" 
                  alt="Verzió 2 eredménye" 
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-800"
                />
              </div>
            </div>
            <InteractiveSandbox 
              defaultPrompt={promptVersion2}
              improvedPrompt={promptVersion3}
              tipNumber={2}
            />
          </TabsContent>
          
          <TabsContent value="version3" className="mt-4">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold">Részletes prompt vizuális utasításokkal</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-4">Prompt tartalma:</h4>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg mb-6">
                  <p className="font-mono text-sm whitespace-pre-line">{promptVersion3}</p>
                </div>
                <p className="text-muted-foreground mb-4">
                  A harmadik verzióban részletes vizuális utasításokat adtunk: színek, formák, interakciók és design elemek pontos meghatározásával.
                  Az eredmény professzionális, egyedi és pontosan követi az útmutatásokat.
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/1557507e-0f71-4515-99a9-0553f9f23d60.png" 
                  alt="Verzió 3 eredménye" 
                  className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-800"
                />
              </div>
            </div>
            <InteractiveSandbox 
              defaultPrompt={promptVersion3}
              improvedPrompt={promptVersion3}
              tipNumber={3}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PromptSkillLevels;
