import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home, User, Briefcase, BookOpen, Image, Sun, Moon, 
  Palette, Type, Layout, Box, Layers, Monitor, Code, Download 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Brandbook = () => {
  const [expandedCodeSections, setExpandedCodeSections] = useState<Record<string, boolean>>({});

  const toggleCodeSection = (id: string) => {
    setExpandedCodeSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const downloadStaticHTML = () => {
    // Create a hidden link element
    fetch('/')
      .then(response => response.text())
      .then(html => {
        // Create a blob with the HTML content
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        
        // Create a link and trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'homepage.html';
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

  // Component with code section display helper
  const ComponentWithCode = ({ 
    id, 
    title, 
    description, 
    children, 
    code 
  }: { 
    id: string; 
    title: string; 
    description?: string; 
    children: React.ReactNode; 
    code: string 
  }) => {
    const isExpanded = expandedCodeSections[id] || false;
    
    return (
      <div className="mb-8 border rounded-lg overflow-hidden">
        <div className="p-4 border-b bg-muted/30">
          <h4 className="font-semibold">{title}</h4>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        <div className="p-6 flex justify-center items-center bg-background">
          {children}
        </div>
        <div className="border-t">
          <Collapsible open={isExpanded} onOpenChange={() => toggleCodeSection(id)}>
            <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-sm font-medium">
              <div className="flex items-center">
                <Code className="mr-2 h-4 w-4" />
                <span>View Code</span>
              </div>
              <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="bg-muted p-4 overflow-x-auto">
                <pre className="text-xs">
                  <code>{code}</code>
                </pre>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    );
  };

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold tracking-tight">Brandbook & Design System</h1>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={downloadStaticHTML}
        >
          <Download className="h-4 w-4" />
          Static HTML
        </Button>
      </div>
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
                <ComponentWithCode
                  id="primary-color"
                  title="Primary"
                  code={`<!-- HTML -->
<div className="bg-primary text-primary-foreground p-4">
  Primary Color
</div>

/* CSS Variables */
--primary: 240 5.9% 10%;
--primary-foreground: 0 0% 98%;`}
                >
                  <div className="flex flex-col">
                    <div className="h-24 rounded-md bg-primary"></div>
                    <span className="mt-2 text-sm font-medium">Primary</span>
                    <span className="text-xs text-muted-foreground">hsl(var(--primary))</span>
                  </div>
                </ComponentWithCode>
                
                <ComponentWithCode
                  id="primary-foreground-color"
                  title="Primary Foreground"
                  code={`<!-- HTML -->
<div className="bg-primary-foreground text-primary p-4">
  Primary Foreground Color
</div>

/* CSS Variables */
--primary-foreground: 0 0% 98%;`}
                >
                  <div className="flex flex-col">
                    <div className="h-24 rounded-md bg-primary-foreground"></div>
                    <span className="mt-2 text-sm font-medium">Primary Foreground</span>
                    <span className="text-xs text-muted-foreground">hsl(var(--primary-foreground))</span>
                  </div>
                </ComponentWithCode>
                
                <ComponentWithCode
                  id="secondary-color"
                  title="Secondary"
                  code={`<!-- HTML -->
<div className="bg-secondary text-secondary-foreground p-4">
  Secondary Color
</div>

/* CSS Variables */
--secondary: 240 4.8% 95.9%;
--secondary-foreground: 240 5.9% 10%;`}
                >
                  <div className="flex flex-col">
                    <div className="h-24 rounded-md bg-secondary"></div>
                    <span className="mt-2 text-sm font-medium">Secondary</span>
                    <span className="text-xs text-muted-foreground">hsl(var(--secondary))</span>
                  </div>
                </ComponentWithCode>
                
                <ComponentWithCode
                  id="secondary-foreground-color"
                  title="Secondary Foreground"
                  code={`<!-- HTML -->
<div className="bg-secondary-foreground text-secondary p-4">
  Secondary Foreground Color
</div>

/* CSS Variables */
--secondary-foreground: 240 5.9% 10%;`}
                >
                  <div className="flex flex-col">
                    <div className="h-24 rounded-md bg-secondary-foreground"></div>
                    <span className="mt-2 text-sm font-medium">Secondary Foreground</span>
                    <span className="text-xs text-muted-foreground">hsl(var(--secondary-foreground))</span>
                  </div>
                </ComponentWithCode>
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
                <ComponentWithCode
                  id="display-font"
                  title="Display Font"
                  code={`<!-- HTML -->
<h1 className="font-display font-bold text-3xl">
  Design engineer and builder
</h1>

/* CSS */
.font-display {
  font-family: var(--font-display);
}`}
                >
                  <div className="p-4 border rounded-md w-full">
                    <div className="text-sm text-muted-foreground mb-2">Display</div>
                    <p className="font-display font-bold text-3xl">
                      Design engineer and builder
                    </p>
                  </div>
                </ComponentWithCode>
                
                <ComponentWithCode
                  id="heading-font"
                  title="Heading Font"
                  code={`<!-- HTML -->
<h2 className="font-heading text-2xl">
  I'm a design engineer, where I craft intuitive user experiences.
</h2>

/* CSS */
.font-heading {
  font-family: var(--font-heading);
}`}
                >
                  <div className="p-4 border rounded-md w-full">
                    <div className="text-sm text-muted-foreground mb-2">Heading</div>
                    <p className="font-heading text-2xl">
                      I'm a design engineer, where I craft intuitive user experiences. 
                    </p>
                  </div>
                </ComponentWithCode>
                
                <ComponentWithCode
                  id="body-font"
                  title="Body Font"
                  code={`<!-- HTML -->
<p className="font-sans text-base">
  A body text example that explains the nuances of the design system and how to effectively use the components within your project.
</p>

/* CSS */
.font-sans {
  font-family: var(--font-sans);
}`}
                >
                  <div className="p-4 border rounded-md w-full">
                    <div className="text-sm text-muted-foreground mb-2">Body</div>
                    <p className="font-sans text-base">
                      A body text example that explains the nuances of the design system and how to effectively use the components within your project.
                    </p>
                  </div>
                </ComponentWithCode>
                
                <ComponentWithCode
                  id="code-font"
                  title="Code Font"
                  code={`<!-- HTML -->
<p className="font-mono text-sm">
  const Component = () =&gt; {`{ return <div>Hello</div> }`}
</p>

/* CSS */
.font-mono {
  font-family: var(--font-mono);
}`}
                >
                  <div className="p-4 border rounded-md w-full">
                    <div className="text-sm text-muted-foreground mb-2">Code</div>
                    <p className="font-mono text-sm">
                      const Component = () =&gt; {`{ return <div>Hello</div> }`}
                    </p>
                  </div>
                </ComponentWithCode>
              </div>

              <h3 className="text-lg font-medium mb-4">Szöveghierarchia</h3>
              <div className="space-y-4 mb-8">
                <ComponentWithCode
                  id="h1-heading"
                  title="H1 Heading"
                  code={`<!-- HTML -->
<h1 className="text-4xl font-bold tracking-tight">H1 Címsor</h1>

/* Tailwind Classes */
text-4xl: font-size: 2.25rem;
font-bold: font-weight: 700;
tracking-tight: letter-spacing: -0.025em;`}
                >
                  <div className="p-4 border rounded-md w-full">
                    <h1 className="text-4xl font-bold tracking-tight">H1 Címsor</h1>
                    <div className="text-xs text-muted-foreground mt-2">
                      4XL (2.25rem) / Bold / Tight tracking
                    </div>
                  </div>
                </ComponentWithCode>
                
                <ComponentWithCode
                  id="h2-heading"
                  title="H2 Heading"
                  code={`<!-- HTML -->
<h2 className="text-3xl font-semibold tracking-tight">H2 Címsor</h2>

/* Tailwind Classes */
text-3xl: font-size: 1.875rem;
font-semibold: font-weight: 600;
tracking-tight: letter-spacing: -0.025em;`}
                >
                  <div className="p-4 border rounded-md w-full">
                    <h2 className="text-3xl font-semibold tracking-tight">H2 Címsor</h2>
                    <div className="text-xs text-muted-foreground mt-2">
                      3XL (1.875rem) / Semibold / Tight tracking
                    </div>
                  </div>
                </ComponentWithCode>
                
                <ComponentWithCode
                  id="h3-heading"
                  title="H3 Heading"
                  code={`<!-- HTML -->
<h3 className="text-2xl font-semibold">H3 Címsor</h3>

/* Tailwind Classes */
text-2xl: font-size: 1.5rem;
font-semibold: font-weight: 600;`}
                >
                  <div className="p-4 border rounded-md w-full">
                    <h3 className="text-2xl font-semibold">H3 Címsor</h3>
                    <div className="text-xs text-muted-foreground mt-2">
                      2XL (1.5rem) / Semibold / Normal tracking
                    </div>
                  </div>
                </ComponentWithCode>
                
                <ComponentWithCode
                  id="h4-heading"
                  title="H4 Heading"
                  code={`<!-- HTML -->
<h4 className="text-xl font-medium">H4 Címsor</h4>

/* Tailwind Classes */
text-xl: font-size: 1.25rem;
font-medium: font-weight: 500;`}
                >
                  <div className="p-4 border rounded-md w-full">
                    <h4 className="text-xl font-medium">H4 Címsor</h4>
                    <div className="text-xs text-muted-foreground mt-2">
                      XL (1.25rem) / Medium / Normal tracking
                    </div>
                  </div>
                </ComponentWithCode>
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
                <ComponentWithCode
                  id="primary-button"
                  title="Primary Button"
                  code={`import { Button } from "@/components/ui/button";

// React Component
<Button variant="default">Elsődleges gomb</Button>

// Raw HTML/CSS
<button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:opacity-90">
  Elsődleges gomb
</button>`}
                >
                  <div className="p-4 border rounded-md flex flex-col items-center gap-2">
                    <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:opacity-90">
                      Elsődleges gomb
                    </button>
                    <span className="text-xs text-muted-foreground">Primary</span>
                  </div>
                </ComponentWithCode>
                
                <ComponentWithCode
                  id="secondary-button"
                  title="Secondary Button"
                  code={`import { Button } from "@/components/ui/button";

// React Component
<Button variant="secondary">Másodlagos gomb</Button>

// Raw HTML/CSS
<button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-secondary/80">
  Másodlagos gomb
</button>`}
                >
                  <div className="p-4 border rounded-md flex flex-col items-center gap-2">
                    <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-secondary/80">
                      Másodlagos gomb
                    </button>
                    <span className="text-xs text-muted-foreground">Secondary</span>
                  </div>
                </ComponentWithCode>
                
                <ComponentWithCode
                  id="outline-button"
                  title="Outline Button"
                  code={`import { Button } from "@/components/ui/button";

// React Component
<Button variant="outline">Körvonalazott gomb</Button>

// Raw HTML/CSS
<button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-md font-medium transition-all">
  Körvonalazott gomb
</button>`}
                >
                  <div className="p-4 border rounded-md flex flex-col items-center gap-2">
                    <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-md font-medium transition-all">
                      Körvonalazott gomb
                    </button>
                    <span className="text-xs text-muted-foreground">Outline</span>
                  </div>
                </ComponentWithCode>
                
                <ComponentWithCode
                  id="link-button"
                  title="Link Button"
                  code={`import { Button } from "@/components/ui/button";

// React Component
<Button variant="link">Link gomb</Button>

// Raw HTML/CSS
<button className="text-primary underline-offset-4 hover:underline px-6 py-3 font-medium transition-all">
  Link gomb
</button>`}
                >
                  <div className="p-4 border rounded-md flex flex-col items-center gap-2">
                    <button className="text-primary underline-offset-4 hover:underline px-6 py-3 font-medium transition-all">
                      Link gomb
                    </button>
                    <span className="text-xs text-muted-foreground">Link</span>
                  </div>
                </ComponentWithCode>
              </div>

              <h3 className="text-lg font-medium mb-4">Navigációs elemek</h3>
              <div className="space-y-6 mb-8">
                <ComponentWithCode
                  id="navigation-bar"
                  title="Navigation Bar"
                  code={`import { Home, User, Briefcase } from 'lucide-react';

// React Component
<nav className="flex gap-2 items-center justify-center bg-background/90 dark:bg-gray-900/90 backdrop-blur-md p-2 rounded-md border border-gray-200 dark:border-gray-800 shadow-lg">
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
</nav>`}
                >
                  <div className="p-6 border rounded-md w-full">
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
                </ComponentWithCode>
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
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
                      <div className="w-12 h-1
