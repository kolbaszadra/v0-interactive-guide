
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, User, Briefcase, BookOpen, Image, Sun, Moon, Palette, Type, Layout, Box, Layers, Monitor } from 'lucide-react';

const Brandbook = () => {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6 tracking-tight">Brandbook & Design System</h1>
      <p className="text-lg text-muted-foreground mb-10">
        A komplett útmutató a weboldal vizuális identitásához és felhasználói felületéhez.
      </p>

      <Tabs defaultValue="colors" className="mb-12">
        <TabsList className="mb-4">
          <TabsTrigger value="colors"><Palette className="mr-2 h-4 w-4" /> Színek</TabsTrigger>
          <TabsTrigger value="typography"><Type className="mr-2 h-4 w-4" /> Tipográfia</TabsTrigger>
          <TabsTrigger value="components"><Layers className="mr-2 h-4 w-4" /> Komponensek</TabsTrigger>
          <TabsTrigger value="layout"><Layout className="mr-2 h-4 w-4" /> Elrendezés</TabsTrigger>
          <TabsTrigger value="darkmode"><Moon className="mr-2 h-4 w-4" /> Sötét mód</TabsTrigger>
        </TabsList>

        {/* Colors Section */}
        <TabsContent value="colors">
          <Card>
            <CardHeader>
              <CardTitle>Színpaletta</CardTitle>
              <CardDescription>
                A weboldal elsődleges és másodlagos színei, valamint a semleges színek skálája.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-medium mb-4">Elsődleges színek</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex flex-col">
                  <div className="h-24 rounded-md bg-primary"></div>
                  <span className="mt-2 text-sm font-medium">Primary</span>
                  <span className="text-xs text-muted-foreground">hsl(var(--primary))</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-24 rounded-md bg-primary-foreground"></div>
                  <span className="mt-2 text-sm font-medium">Primary Foreground</span>
                  <span className="text-xs text-muted-foreground">hsl(var(--primary-foreground))</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-24 rounded-md bg-secondary"></div>
                  <span className="mt-2 text-sm font-medium">Secondary</span>
                  <span className="text-xs text-muted-foreground">hsl(var(--secondary))</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-24 rounded-md bg-secondary-foreground"></div>
                  <span className="mt-2 text-sm font-medium">Secondary Foreground</span>
                  <span className="text-xs text-muted-foreground">hsl(var(--secondary-foreground))</span>
                </div>
              </div>

              <h3 className="text-lg font-medium mb-4">Semleges színek</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <div className="h-24 rounded-md bg-background"></div>
                  <span className="mt-2 text-sm font-medium">Background</span>
                  <span className="text-xs text-muted-foreground">hsl(var(--background))</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-24 rounded-md bg-foreground"></div>
                  <span className="mt-2 text-sm font-medium">Foreground</span>
                  <span className="text-xs text-muted-foreground">hsl(var(--foreground))</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-24 rounded-md bg-muted"></div>
                  <span className="mt-2 text-sm font-medium">Muted</span>
                  <span className="text-xs text-muted-foreground">hsl(var(--muted))</span>
                </div>
                <div className="flex flex-col">
                  <div className="h-24 rounded-md bg-muted-foreground"></div>
                  <span className="mt-2 text-sm font-medium">Muted Foreground</span>
                  <span className="text-xs text-muted-foreground">hsl(var(--muted-foreground))</span>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-8 mb-4">Használat</h3>
              <p className="text-muted-foreground mb-4">
                Az elsődleges színeket kiemelt elemekhez, a másodlagosokat visszafogottabb jelölésekhez használjuk. A semleges színek a felület alapját adják.
              </p>

              <div className="rounded-md p-6 bg-muted">
                <div className="mb-4">
                  <code className="text-sm">
                    {'<div className="bg-primary text-primary-foreground">Elsődleges gomb</div>'}
                  </code>
                </div>
                <div className="mb-4">
                  <code className="text-sm">
                    {'<div className="bg-secondary text-secondary-foreground">Másodlagos elem</div>'}
                  </code>
                </div>
                <div>
                  <code className="text-sm">
                    {'<div className="bg-muted text-muted-foreground">Halvány elem</div>'}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Typography Section */}
        <TabsContent value="typography">
          <Card>
            <CardHeader>
              <CardTitle>Tipográfia</CardTitle>
              <CardDescription>
                A weboldal szövegstílusai, betűtípusai és hierarchiája.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-medium mb-4">Betűtípusok</h3>
              <div className="space-y-6 mb-8">
                <div className="p-4 border rounded-md">
                  <div className="text-sm text-muted-foreground mb-2">Display</div>
                  <p className="font-display font-bold text-3xl">
                    Design engineer and builder
                  </p>
                </div>
                <div className="p-4 border rounded-md">
                  <div className="text-sm text-muted-foreground mb-2">Heading</div>
                  <p className="font-heading text-2xl">
                    I'm a design engineer, where I craft intuitive user experiences. 
                  </p>
                </div>
                <div className="p-4 border rounded-md">
                  <div className="text-sm text-muted-foreground mb-2">Body</div>
                  <p className="font-sans text-base">
                    A body text example that explains the nuances of the design system and how to effectively use the components within your project.
                  </p>
                </div>
                <div className="p-4 border rounded-md">
                  <div className="text-sm text-muted-foreground mb-2">Code</div>
                  <p className="font-mono text-sm">
                    const Component = () => { return &lt;div&gt;Hello&lt;/div&gt; }
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-medium mb-4">Szöveghierarchia</h3>
              <div className="space-y-4 mb-8">
                <div className="p-4 border rounded-md">
                  <h1 className="text-4xl font-bold tracking-tight">H1 Címsor</h1>
                  <div className="text-xs text-muted-foreground mt-2">
                    4XL (2.25rem) / Bold / Tight tracking
                  </div>
                </div>
                <div className="p-4 border rounded-md">
                  <h2 className="text-3xl font-semibold tracking-tight">H2 Címsor</h2>
                  <div className="text-xs text-muted-foreground mt-2">
                    3XL (1.875rem) / Semibold / Tight tracking
                  </div>
                </div>
                <div className="p-4 border rounded-md">
                  <h3 className="text-2xl font-semibold">H3 Címsor</h3>
                  <div className="text-xs text-muted-foreground mt-2">
                    2XL (1.5rem) / Semibold / Normal tracking
                  </div>
                </div>
                <div className="p-4 border rounded-md">
                  <h4 className="text-xl font-medium">H4 Címsor</h4>
                  <div className="text-xs text-muted-foreground mt-2">
                    XL (1.25rem) / Medium / Normal tracking
                  </div>
                </div>
              </div>

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
            </CardContent>
          </Card>
        </TabsContent>

        {/* Components Section */}
        <TabsContent value="components">
          <Card>
            <CardHeader>
              <CardTitle>Komponensek</CardTitle>
              <CardDescription>
                A weboldal fő interaktív és vizuális komponensei.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-medium mb-4">Gombok</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="p-4 border rounded-md flex flex-col items-center gap-2">
                  <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:opacity-90">
                    Elsődleges gomb
                  </button>
                  <span className="text-xs text-muted-foreground">Primary</span>
                </div>
                <div className="p-4 border rounded-md flex flex-col items-center gap-2">
                  <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-secondary/80">
                    Másodlagos gomb
                  </button>
                  <span className="text-xs text-muted-foreground">Secondary</span>
                </div>
                <div className="p-4 border rounded-md flex flex-col items-center gap-2">
                  <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-md font-medium transition-all">
                    Körvonalazott gomb
                  </button>
                  <span className="text-xs text-muted-foreground">Outline</span>
                </div>
                <div className="p-4 border rounded-md flex flex-col items-center gap-2">
                  <button className="text-primary underline-offset-4 hover:underline px-6 py-3 font-medium transition-all">
                    Link gomb
                  </button>
                  <span className="text-xs text-muted-foreground">Link</span>
                </div>
              </div>

              <h3 className="text-lg font-medium mb-4">Navigációs elemek</h3>
              <div className="space-y-6 mb-8">
                <div className="p-6 border rounded-md">
                  <div className="flex gap-2 items-center justify-center bg-background/90 dark:bg-gray-900/90 backdrop-blur-md p-2 rounded-md border border-gray-200 dark:border-gray-800 shadow-lg">
                    <a href="#" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                      <Home size={20} />
                      <span className="ml-2">Főoldal</span>
                    </a>
                    <div className="bg-gray-200 dark:bg-gray-800 h-6 w-px"></div>
                    <a href="#" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                      <User size={20} />
                      <span className="ml-2">Rólam</span>
                    </a>
                    <div className="bg-gray-200 dark:bg-gray-800 h-6 w-px"></div>
                    <a href="#" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                      <Briefcase size={20} />
                      <span className="ml-2">Munkáim</span>
                    </a>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 text-center">
                    Központi Navigáció
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium mb-4">Kártyák</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-800"></div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">Projekt kártya</h4>
                    <p className="text-sm text-muted-foreground">Projekt leírás helye. Itt jelennek meg a részletek a projektről.</p>
                    <div className="mt-4 flex items-center text-sm font-medium text-primary">
                      Megtekintés 
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-1 h-4 w-4">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Információs kártya</h4>
                  <p className="text-muted-foreground mb-4">Általános információk megjelenítésére szolgáló kártya komponens.</p>
                  <div className="flex items-center text-sm font-medium">
                    <button className="bg-secondary px-4 py-2 rounded-md text-secondary-foreground transition-colors hover:bg-secondary/80">
                      Művelet
                    </button>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium mb-4">Badge-ek</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors">
                  Alapértelmezett
                </div>
                <div className="inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                  Elsődleges
                </div>
                <div className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                  Másodlagos
                </div>
                <div className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                  Halvány
                </div>
              </div>

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
            </CardContent>
          </Card>
        </TabsContent>

        {/* Layout Section */}
        <TabsContent value="layout">
          <Card>
            <CardHeader>
              <CardTitle>Elrendezés</CardTitle>
              <CardDescription>
                Az oldal szerkezete, konténerek, rácsok és térközök.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-medium mb-4">Konténerek</h3>
              <div className="space-y-6 mb-8">
                <div className="p-4 border rounded-md bg-muted">
                  <div className="p-4 border border-dashed rounded-md text-center">
                    Konténer
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 text-center">
                    container - Maximális szélességű, középre igazított konténer
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium mb-4">Rácsrendszer</h3>
              <div className="space-y-6 mb-8">
                <div className="p-4 border rounded-md">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-2 bg-muted rounded-md text-center">1</div>
                    <div className="p-2 bg-muted rounded-md text-center">2</div>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    2 oszlopos elrendezés
                  </div>
                </div>
                <div className="p-4 border rounded-md">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="p-2 bg-muted rounded-md text-center">1</div>
                    <div className="p-2 bg-muted rounded-md text-center">2</div>
                    <div className="p-2 bg-muted rounded-md text-center">3</div>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    3 oszlopos elrendezés
                  </div>
                </div>
                <div className="p-4 border rounded-md">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-2 bg-muted rounded-md text-center">1</div>
                    <div className="p-2 bg-muted rounded-md text-center">2</div>
                    <div className="p-2 bg-muted rounded-md text-center">3</div>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    Reszponzív rács - Mobil: 1 oszlop, Asztali: 3 oszlop
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium mb-4">Térközök</h3>
              <div className="space-y-6 mb-8">
                <div className="p-4 border rounded-md">
                  <div className="flex space-x-6 mb-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-muted rounded-md mb-2"></div>
                      <span className="text-xs text-muted-foreground">4 (1rem)</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-muted rounded-md mb-2"></div>
                      <span className="text-xs text-muted-foreground">6 (1.5rem)</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-muted rounded-md mb-2"></div>
                      <span className="text-xs text-muted-foreground">8 (2rem)</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-muted rounded-md mb-2"></div>
                      <span className="text-xs text-muted-foreground">12 (3rem)</span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    Alapvető térközök (margin/padding mérete)
                  </div>
                </div>
                <div className="p-4 border rounded-md">
                  <div className="space-y-4 mb-4">
                    <div className="p-2 bg-muted rounded-md">Elem 1</div>
                    <div className="p-2 bg-muted rounded-md">Elem 2</div>
                    <div className="p-2 bg-muted rounded-md">Elem 3</div>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    Függőleges térköz (space-y-4)
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium mb-4">Hierarchiai struktúra</h3>
              <div className="p-4 border rounded-md">
                <pre className="text-xs overflow-auto p-4 bg-muted rounded-md">
{`<header>
  <!-- Navigáció -->
</header>

<main>
  <section>
    <!-- Hős szekció -->
  </section>
  
  <section>
    <!-- Tartalom szekció -->
  </section>
  
  <section>
    <!-- Tartalom szekció -->
  </section>
</main>

<footer>
  <!-- Lábléc -->
</footer>`}
                </pre>
                <div className="text-xs text-muted-foreground mt-2 text-center">
                  Alapvető oldal struktúra
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Dark Mode Section */}
        <TabsContent value="darkmode">
          <Card>
            <CardHeader>
              <CardTitle>Sötét mód</CardTitle>
              <CardDescription>
                A weboldal sötét és világos módja közötti különbségek és használat.
              </CardDescription>
            </CardHeader>
            <CardContent>
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

              <h3 className="text-lg font-medium mb-4">CSS Változók</h3>
              <div className="p-4 border rounded-md">
                <pre className="text-xs overflow-auto p-4 bg-muted rounded-md">
{`:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 5.9% 10%;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 240 10% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 15.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 240 4.9% 83.9%;
}`}
                </pre>
                <div className="text-xs text-muted-foreground mt-2 text-center">
                  Világos és sötét mód CSS változók
                </div>
              </div>

              <h3 className="text-lg font-medium my-4">Sötét/világos mód váltása</h3>
              <div className="p-4 border rounded-md flex gap-4 items-center">
                <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <Sun className="w-5 h-5" />
                </button>
                <span className="text-sm">Világos mód</span>
                <div className="ml-4 mr-4 h-5 w-px bg-border"></div>
                <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <Moon className="w-5 h-5" />
                </button>
                <span className="text-sm">Sötét mód</span>
              </div>

              <h3 className="text-lg font-medium my-4">Gyakorlati tanácsok</h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground block mb-1">1. Színkontraszt</span>
                    Mindig ellenőrizzük, hogy a szöveg és a háttér között megfelelő kontraszt van-e mindkét módban.
                  </p>
                </div>
                <div className="p-4 border rounded-md">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground block mb-1">2. Árnyékok</span>
                    Sötét módban csökkentsük az árnyékok intenzitását vagy igazítsuk a színüket.
                  </p>
                </div>
                <div className="p-4 border rounded-md">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground block mb-1">3. Preferencia alapú</span>
                    Alapértelmezetten kövessük a felhasználó rendszerpreferenciáját a sötét/világos mód tekintetében.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
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
    </div>
  );
};

export default Brandbook;
