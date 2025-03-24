interface TipSectionData {
  id: string;
  number: number;
  title: string;
  description: string;
  content: JSX.Element;
  promptExample: string;
  promptImproved: string;
  reversed?: boolean;
}

import React from 'react';

// The tipSections data will be created here as a function to allow JSX in content
export const getTipSectionsData = (): TipSectionData[] => [
  {
    id: 'tip-1',
    number: 1,
    title: 'Részletes követelmények megadása',
    description: 'A pontos és részletes követelmények megfogalmazása kulcsfontosságú a jó eredmények eléréséhez.',
    content: (
      <div>
        <p className="mb-4">
          Minél részletesebben fogalmazod meg a követelményeidet, annál pontosabban fogja a winmix.hu megvalósítani az elképzeléseidet. Ne félj konkrét funkciókat, elrendezést, színeket és interakciókat leírni.
        </p>
        <div className="space-y-4 mt-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400 mt-0.5">✗</div>
            <div>
              <strong>Rossz példa:</strong>
              <p className="text-muted-foreground">"Készíts egy landing page-et egy applikációhoz."</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400 mt-0.5">✓</div>
            <div>
              <strong>Jó példa:</strong>
              <p className="text-muted-foreground">"Készíts egy modern, világos landing page-et egy produktivitás növelő mobilalkalmazáshoz. A landing page tartalmazzon egy hero szekciót, ahol az app fő előnyei jelennek meg, 3 feature szekciót ikonokkal, árazási táblát, ügyfél véleményeket és CTA-t."</p>
            </div>
          </div>
        </div>
      </div>
    ),
    promptExample: "Készíts egy landing page-et egy applikációhoz.",
    promptImproved: "Készíts egy modern, világos landing page-et egy produktivitás növelő mobilalkalmazáshoz. A landing page tartalmazzon egy hero szekciót, ahol az app fő előnyei jelennek meg, 3 feature szekciót ikonokkal, árazási táblát, ügyfél véleményeket és CTA-t. A színvilág legyen kék-fehér, az elrendezés pedig legyen reszponzív mobilra és asztali eszközökre is.",
  },
  {
    id: 'tip-2',
    number: 2,
    title: 'Vizuális referenciák használata',
    description: 'A képi hivatkozások és stílusreferenciák segítenek pontosítani az elvárt megjelenést.',
    content: (
      <div>
        <p className="mb-4">
          Egy kép többet mondhat ezer szónál. A vizuális referenciákkal pontosabban tudod közvetíteni az elvárt stílust és megjelenést.
        </p>
        <div className="space-y-4 mt-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400 mt-0.5">✗</div>
            <div>
              <strong>Referencia nélkül:</strong>
              <p className="text-muted-foreground">"Készíts egy modern dashboard-ot."</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400 mt-0.5">✓</div>
            <div>
              <strong>Referenciával:</strong>
              <p className="text-muted-foreground">"Készíts egy dashboard-ot hasonló stílusban, mint az Apple Health vagy a Figma analitikai felülete. Használj fehér hátteret, lekerekített sarkú kártyákat és minimális színeket."</p>
            </div>
          </div>
        </div>
      </div>
    ),
    promptExample: "Készíts egy modern dashboard-ot a felhasználók számára.",
    promptImproved: "Készíts egy dashboard-ot hasonló stílusban, mint az Apple Health vagy a Figma analitikai felülete. Használj fehér hátteret, lekerekített sarkú kártyákat és minimális színeket. A dashboard tartalmazzon forgalom elemzést, felhasználói statisztikákat és teljesítmény mutatókat vizualizálva grafikonokkal és diagramokkal.",
    reversed: true,
  },
  {
    id: 'tip-3',
    number: 3,
    title: 'Iteratív fejlesztés és finomítás',
    description: 'A fokozatos fejlesztés és a visszajelzések alapján történő finomítás a legjobb módszer.',
    content: (
      <div>
        <p className="mb-4">
          Ritka, hogy az első próbálkozás tökéletes eredményt hoz. Az iteratív megközelítés - ahol először egy alapverziót készítesz, majd fokozatosan finomítod azt - gyakran a leghatékonyabb módszer.
        </p>
        <ol className="space-y-4 list-decimal pl-5 mt-6">
          <li>
            <strong>1. iteráció:</strong> Alap funkcionalitás és elrendezés
          </li>
          <li>
            <strong>2. iteráció:</strong> Stílus és dizájnelemek finomítása
          </li>
          <li>
            <strong>3. iteráció:</strong> Interakciók és animációk hozzáadása
          </li>
          <li>
            <strong>4. iteráció:</strong> Részletek és a felhasználói élmény csiszolása
          </li>
        </ol>
      </div>
    ),
    promptExample: "Tervezz egy teljes e-commerce oldalt minden funkcióval.",
    promptImproved: "Tervezz egy e-commerce termék oldalt, amely a következő elemekből áll: termék képgaléria, részletes leírás, árak, variációk, kosárba helyezés gomb és kapcsolódó termékek. A következő iterációban a színválasztókat és méretválasztókat fogjuk részletesen kidolgozni.",
  },
  {
    id: 'tip-4',
    number: 4,
    title: 'Komponens-alapú megközelítés',
    description: 'A komplex felületeket bontsd fel kisebb, kezelhetőbb komponensekre a jobb eredmény érdekében.',
    content: (
      <div>
        <p className="mb-4">
          A komponens-alapú megközelítés lehetővé teszi a komplex felületek kezelhetőbb egységekre bontását, ami jobb minőséget eredményez és megkönnyíti a későbbi módosításokat.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="glass-panel p-4">
            <h4 className="font-medium mb-2">Főkomponensek:</h4>
            <ul className="list-disc pl-5 text-sm">
              <li>Fejléc</li>
              <li>Termék detail nézet</li>
              <li>Termék lista</li>
              <li>Lábléc</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h4 className="font-medium mb-2">Alkomponensek:</h4>
            <ul className="list-disc pl-5 text-sm">
              <li>Keresősáv</li>
              <li>Termék kártya</li>
              <li>Értékelő csillagok</li>
              <li>Szűrők panel</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    promptExample: "Készíts egy komplett webáruházat.",
    promptImproved: "Készítsd el egy webáruház kategória oldalát a következő komponensekkel: fejléc navigációval és keresővel, oldalsáv a szűrők részére, termék grid, ahol minden termék kártyán szerepel a kép, név, ár, értékelés és kosárba helyezés gomb, valamint lábléc kapcsolati információkkal.",
    reversed: true,
  },
  {
    id: 'tip-5',
    number: 5,
    title: 'Stílus és dizájn rendszer meghatározása',
    description: 'Egységes vizuális nyelv meghatározása a konzisztens felhasználói élmény érdekében.',
    content: (
      <div>
        <p className="mb-4">
          A stílus és dizájn rendszer meghatározása segít biztosítani a vizuális konzisztenciát az egész felületen. Határozd meg a színpalettát, a tipográfiát, a komponensek stílusát és az elrendezés szabályait.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h4 className="font-medium mb-2">Dizájn rendszer elemei:</h4>
            <ul className="list-disc pl-5 text-sm">
              <li>Színpaletta</li>
              <li>Tipográfia</li>
              <li>Gombok és form elemek</li>
              <li>Térköz és elrendezés</li>
              <li>Ikonok és illusztrációk</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h4 className="font-medium mb-2">Színpaletta példa:</h4>
            <div className="flex flex-wrap gap-2">
              <div className="w-8 h-8 rounded bg-blue-600" title="Elsődleges"></div>
              <div className="w-8 h-8 rounded bg-blue-400" title="Másodlagos"></div>
              <div className="w-8 h-8 rounded bg-gray-900" title="Szöveg"></div>
              <div className="w-8 h-8 rounded bg-gray-500" title="Halványabb szöveg"></div>
              <div className="w-8 h-8 rounded bg-gray-200" title="Háttér"></div>
            </div>
          </div>
        </div>
      </div>
    ),
    promptExample: "Tervezz egy alkalmazást modern kinézettel.",
    promptImproved: "Tervezz egy alkalmazást a következő dizájn rendszerrel: Színpaletta: elsődleges szín #3B82F6, másodlagos szín #93C5FD, semleges szürke #F9FAFB. Tipográfia: Főcímekhez sans-serif bold, szöveghez 16px regular. A gombok legyenek lekerekített sarkúak 8px rádiusszal, az árnyékok pedig legyenek finomak és szubtilisek.",
  },
  {
    id: 'tip-6',
    number: 6,
    title: 'Felhasználói folyamatok részletes leírása',
    description: 'A felhasználói élmény és az interakciók pontos meghatározása a sikeres tervezés alapja.',
    content: (
      <div>
        <p className="mb-4">
          A felhasználói folyamatok részletes leírása segít megérteni, hogyan fognak a felhasználók navigálni az interfészen. Határozd meg a fő használati eseteket és az egyes lépéseket a folyamatban.
        </p>
        <div className="mt-6 p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
          <h4 className="font-medium mb-2">Példa: Fizetési folyamat</h4>
          <ol className="list-decimal pl-5 text-sm space-y-2">
            <li>Kosár áttekintése és módosítása</li>
            <li>Szállítási cím megadása</li>
            <li>Szállítási mód kiválasztása</li>
            <li>Fizetési adatok megadása</li>
            <li>Rendelés összegzése és ellenőrzése</li>
            <li>Rendelés visszaigazolása és köszönőoldal</li>
          </ol>
        </div>
      </div>
    ),
    promptExample: "Készíts egy fizetési űrlapot.",
    promptImproved: "Készíts egy fizetési folyamatot a következő lépésekkel: 1. Kosár tartalmának összegzése, 2. Szállítási adatok megadása (név, cím, elérhetőség), 3. Szállítási mód választása (standard, expressz), 4. Fizetési mód választása és adatok megadása, 5. Rendelés áttekintése és véglegesítése. Minden lépésnél legyen előre/vissza navigáció és a haladást jelző indikátor.",
    reversed: true,
  },
  {
    id: 'tip-7',
    number: 7,
    title: 'Visszajelzés és módosítások kérése',
    description: 'A hatékony visszajelzések megfogalmazása a prototípus iteratív fejlesztéséhez.',
    content: (
      <div>
        <p className="mb-4">
          A visszajelzések és módosítások kérése során fontos, hogy specifikus és konstruktív légy. Pontosan határozd meg, mit szeretnél változtatni és miért.
        </p>
        <div className="space-y-4 mt-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400 mt-0.5">✗</div>
            <div>
              <strong>Rossz visszajelzés:</strong>
              <p className="text-muted-foreground">"Nem tetszik a dizájn, csináld másképp."</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400 mt-0.5">✓</div>
            <div>
              <strong>Jó visszajelzés:</strong>
              <p className="text-muted-foreground">"A kártyák túl sűrűn vannak elhelyezve, növeld meg a térközt közöttük. A gombok színe nem eléggé kontrasztos a háttérrel, használj sötétebb árnyalatot. A főcím túl kicsi, növeld meg a méretét és tedd vastagabbá."</p>
            </div>
          </div>
        </div>
      </div>
    ),
    promptExample: "Ez nem jó, csináld újra másképp.",
    promptImproved: "Az előző verzióban tetszik az elrendezés, de kérlek, változtasd meg a következőket: 1. A fejléc színét változtasd kékről (#1E40AF) szürkére (#1F2937), 2. A hero szekcióban a kép legyen balra és a szöveg jobbra, 3. A gombok legyenek lekerekítettebbek (12px radius), 4. A betűméretet növeld meg a főcímben 36px-ről 48px-re.",
  },
  {
    id: 'tip-8',
    number: 8,
    title: 'Kód exportálás és testreszabás',
    description: 'A generált kód exportálása és módosítása a végső implementációhoz.',
    content: (
      <div>
        <p className="mb-4">
          A v0.dev által generált kód exportálása és testreszabása lehetővé teszi a tervek implementálását. Fontos megérteni a generált kód struktúráját és a módosítási lehetőségeket.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h4 className="font-medium mb-2">Exportálási lehetőségek:</h4>
            <ul className="list-disc pl-5 text-sm">
              <li>Teljes projekt kód</li>
              <li>Komponens szintű kód</li>
              <li>HTML/CSS/JavaScript</li>
              <li>React/Tailwind komponensek</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h4 className="font-medium mb-2">Testreszabási tippek:</h4>
            <ul className="list-disc pl-5 text-sm">
              <li>Komponensek újrafelhasználása</li>
              <li>Stílusok konszolidálása</li>
              <li>Interakciók hozzáadása</li>
              <li>Backend integrálása</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    promptExample: "Add meg a teljes kódot ennek az oldalnak.",
    promptImproved: "Exportáld a landing page React komponenseit Tailwind CSS-el, külön fájlokban. Szeretném, ha a Hero komponens, a Features szekció és a Pricing tábla külön komponensek lennének, hogy könnyebben tudjam őket újrafelhasználni és testreszabni. Adj részletes dokumentációt a komponensek props-jairól és a stílus módosítási lehetőségekről.",
    reversed: true,
  },
];

export default getTipSectionsData;
