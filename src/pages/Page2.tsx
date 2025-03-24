
import React from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import IterativeDesignPreview from '@/components/IterativeDesignPreview';
import PromptTemplateSelector from '@/components/PromptTemplateSelector';
import CodeExportPreview from '@/components/CodeExportPreview';

const iterativeDesignVersions = [
  {
    id: "version-1",
    title: "Alapvető változat",
    description: "Egy egyszerű, alap leírással ellátott prompt, amely a lényegi elemeket tartalmazza.",
    prompt: "Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal.",
    image: "/lovable-uploads/1557507e-0f71-4515-99a9-0553f9f23d60.png"
  },
  {
    id: "version-2",
    title: "Részletes változat",
    description: "A prompt kiterjesztése a tartalmi elemek részletesebb leírásával.",
    prompt: "Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal (Alap, Pro, Vállalati). Az Alap csomag legyen 9€/hó, a Pro 19€/hó, a Vállalati pedig 49€/hó. Minden csomagnál legyen egy \"Leggyakrabban választott\" jelölés a Pro csomagnál. Adj hozzá egy összehasonlító táblázatot is a csomagok alatt, amely részletezi a funkciókat.",
    image: "/lovable-uploads/1557507e-0f71-4515-99a9-0553f9f23d60.png"
  },
  {
    id: "version-3",
    title: "Teljes körű változat",
    description: "Teljesen kidolgozott prompt, amely részletes stílusbeli és funkcionális meghatározásokat tartalmaz.",
    prompt: "Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal (Alap, Pro, Vállalati). Az Alap csomag legyen 9€/hó, a Pro 19€/hó, a Vállalati pedig 49€/hó. Minden csomagnál legyen egy \"Leggyakrabban választott\" jelölés a Pro csomagnál. Adj hozzá egy összehasonlító táblázatot is a csomagok alatt, amely részletezi a funkciókat. Stílus: - Használj gradiens hátteret a fejlécben (világoskék -> sötétkék) - A kártyák legyenek fehér hátterűek, lekerekített sarkokkal és enyhe árnyékkal - A kiemelt csomag (Pro) legyen kék szegéllyel ellátva - Legyen egy váltógomb, amivel éves/havi árazás között lehet váltani (10% kedvezmény éves fizetésnél) - Minden kártyán legyen egy \"Próbáld ki ingyen\" gomb - A táblázatban használj pipákat és X-eket a funkciók jelölésére",
    image: "/lovable-uploads/1557507e-0f71-4515-99a9-0553f9f23d60.png"
  }
];

const promptTemplateCategories = [
  {
    id: "layout",
    name: "Elrendezés sablonok",
    templates: [
      {
        id: "landing",
        title: "Landing oldal",
        description: "Teljes körű landing oldal sablon több szekcióval",
        prompt: "Készíts egy modern landing oldalt a következő szekciókkal: hero szekció nagyméretű képpel és CTA gombbal, szolgáltatások szekció 3 funkcióval és ikonokkal, árazási szekció 3 csomaggal, gyakori kérdések accordion elemmel, és kapcsolatfelvételi űrlap. A dizájn legyen modern, letisztult, használj fehér hátteret, enyhe árnyékokat és a vállalat elsődleges színét (kék #2563EB) a kiemelésekhez."
      },
      {
        id: "dashboard",
        title: "Dashboard",
        description: "Admin felület sablon különböző adatmegjelenítésekkel",
        prompt: "Tervezz egy admin dashboard felületet a következő elemekkel: oldalsáv navigációval (Dashboard, Felhasználók, Termékek, Rendelések, Beállítások menüpontokkal), felső fejléc keresőmezővel és felhasználói profil menüvel, fő tartalmi rész 4 statisztikai kártyával, egy vonalas grafikonnal az elmúlt 30 nap adatairól, és egy táblázattal a legutóbbi 5 aktivitással. A dizájn legyen letisztult, használj fehér hátteret a kártyákhoz, enyhe szürke (#F9FAFB) hátteret az oldalhoz."
      }
    ]
  },
  {
    id: "components",
    name: "Komponens sablonok",
    templates: [
      {
        id: "form",
        title: "Űrlap",
        description: "Komplex űrlap validációval és különböző mezőtípusokkal",
        prompt: "Készíts egy regisztrációs űrlapot a következő mezőkkel: teljes név (kötelező), email cím (kötelező, email validációval), jelszó (min. 8 karakter, kötelező), jelszó megerősítése, születési dátum (dátumválasztóval), nem (rádiógombokkal: férfi, nő, egyéb), érdeklődési körök (több választható jelölőnégyzettel), hírlevél feliratkozás (kapcsolóval), és egy regisztráció gomb. Az űrlap legyen reszponzív, tartalmazzon valós idejű validációt és hibaüzeneteket a mezők alatt."
      },
      {
        id: "pricing",
        title: "Árazási táblázat",
        description: "Különböző csomagokat bemutató összehasonlító táblázat",
        prompt: "Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal (Alap, Pro, Vállalati). Az Alap csomag legyen 9€/hó, a Pro 19€/hó, a Vállalati pedig 49€/hó. Minden csomagnál legyen egy \"Leggyakrabban választott\" jelölés a Pro csomagnál. Adj hozzá egy összehasonlító táblázatot is a csomagok alatt, amely részletezi a funkciókat. Stílus: - Használj gradiens hátteret a fejlécben (világoskék -> sötétkék) - A kártyák legyenek fehér hátterűek, lekerekített sarkokkal és enyhe árnyékkal - A kiemelt csomag (Pro) legyen kék szegéllyel ellátva - Legyen egy váltógomb, amivel éves/havi árazás között lehet váltani (10% kedvezmény éves fizetésnél) - Minden kártyán legyen egy \"Próbáld ki ingyen\" gomb - A táblázatban használj pipákat és X-eket a funkciók jelölésére"
      }
    ]
  }
];

const codeExamples = {
  component: {
    name: "Komponens",
    language: "tsx",
    code: `import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  popular = false,
  buttonText = "Próbáld ki ingyen",
  onButtonClick,
}) => {
  return (
    <Card className={\`w-full max-w-sm \${popular ? 'border-primary shadow-lg' : ''}\`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs py-1 px-3 rounded-full">
          Leggyakrabban választott
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}€</span>
          <span className="text-muted-foreground">/hó</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          variant={popular ? "default" : "outline"}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};`
  },
  styles: {
    name: "Stílusok",
    language: "css",
    code: `.pricing-section {
  padding: 4rem 0;
  background-image: linear-gradient(to bottom right, #e0f2fe, #2563eb);
}

.pricing-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.pricing-header {
  text-align: center;
  margin-bottom: 3rem;
}

.pricing-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.pricing-description {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
}

.pricing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.pricing-card {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.pricing-card.popular {
  border: 2px solid #3b82f6;
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
}

.popular-badge {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #3b82f6;
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 3rem;
}

.comparison-table th, 
.comparison-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.comparison-table thead {
  background-color: #f8fafc;
}

.comparison-table th:first-child,
.comparison-table td:first-child {
  font-weight: 500;
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}`
  },
  api: {
    name: "API Integrálás",
    language: "tsx",
    code: `import { useState, useEffect } from 'react';
import { PricingCard } from './PricingCard';
import { Switch } from './ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

interface PricingPlan {
  id: string;
  title: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  popular: boolean;
}

interface FeatureComparison {
  feature: string;
  basic: boolean;
  pro: boolean;
  enterprise: boolean;
}

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [featureComparison, setFeatureComparison] = useState<FeatureComparison[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch pricing data from API
    const fetchPricingData = async () => {
      try {
        setLoading(true);
        
        // Replace with your actual API endpoint
        const response = await fetch('/api/pricing');
        
        if (!response.ok) {
          throw new Error('Failed to fetch pricing data');
        }
        
        const data = await response.json();
        setPlans(data.plans);
        setFeatureComparison(data.featureComparison);
        
      } catch (err) {
        console.error('Error fetching pricing data:', err);
        setError('Could not load pricing information. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPricingData();
  }, []);

  const handleSubscription = async (planId: string) => {
    try {
      // Replace with your actual subscription API endpoint
      const response = await fetch('/api/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          billingCycle: isYearly ? 'yearly' : 'monthly'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to process subscription');
      }

      const data = await response.json();
      
      // Redirect to checkout or confirmation page
      window.location.href = data.checkoutUrl;
      
    } catch (err) {
      console.error('Subscription error:', err);
      // Show error notification to user
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading pricing information...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>;
  }

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Válassz a csomagok közül</h2>
          <p className="pricing-description">
            Mindegyik csomag 14 napos ingyenes próbaidőszakkal indul. Nincs rejtett költség.
          </p>
          
          <div className="pricing-toggle">
            <span className={!isYearly ? 'font-medium' : 'text-muted-foreground'}>Havi</span>
            <Switch 
              checked={isYearly} 
              onCheckedChange={setIsYearly} 
              aria-label="Váltás éves számlázásra"
            />
            <span className={isYearly ? 'font-medium' : 'text-muted-foreground'}>
              Éves <span className="text-green-500 text-sm font-medium">10% kedvezmény</span>
            </span>
          </div>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              title={plan.title}
              price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              buttonText="Próbáld ki ingyen"
              onButtonClick={() => handleSubscription(plan.id)}
            />
          ))}
        </div>
        
        <Table className="mt-16 bg-white rounded-lg overflow-hidden shadow">
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Funkció</TableHead>
              <TableHead>Alap</TableHead>
              <TableHead>Pro</TableHead>
              <TableHead>Vállalati</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {featureComparison.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.feature}</TableCell>
                <TableCell>
                  {item.basic ? (
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </TableCell>
                <TableCell>
                  {item.pro ? (
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </TableCell>
                <TableCell>
                  {item.enterprise ? (
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};`
  }
};

const Page2 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <Section
          className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-24"
          fullWidth
        >
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Haladó technikák a winmix.hu használatához
              </h1>
              <p className="text-xl text-muted-foreground">
                Ismerkedj meg a fokozatos fejlesztés, promptsablonok és kódexportálás hatékony módszereivel
              </p>
            </div>
          </div>
        </Section>
        
        {/* Iterative Design Section */}
        <Section
          id="iterative-design"
          title="Fokozatos fejlesztés"
          subtitle="Egy jól megtervezett prompt lépcsőzetes fejlesztése hatékonyabb eredményekhez vezet."
          className="bg-white dark:bg-gray-950"
        >
          <IterativeDesignPreview versions={iterativeDesignVersions} />
        </Section>
        
        {/* Prompt Template Section */}
        <Section
          id="prompt-templates"
          title="Prompt sablonok"
          subtitle="Használj előre elkészített sablonokat a gyakori komponensek és elrendezések gyors létrehozásához."
          className="bg-gray-50 dark:bg-gray-900"
        >
          <PromptTemplateSelector categories={promptTemplateCategories} />
        </Section>
        
        {/* Code Export Section */}
        <Section
          id="code-export"
          title="Kód exportálás"
          subtitle="Használd a generált kódot saját projektedben a hatékony fejlesztés érdekében."
          className="bg-white dark:bg-gray-950"
        >
          <CodeExportPreview examples={codeExamples} />
        </Section>
        
        {/* FAQ Section */}
        <Section
          id="faq"
          title="Gyakori kérdések"
          subtitle="Válaszok a winmix.hu használatával kapcsolatos gyakori kérdésekre."
          className="bg-gray-50 dark:bg-gray-900"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="glass-panel p-6 rounded-lg">
              <h3 className="font-medium text-lg mb-2">Hogyan tudom a leghatékonyabban használni a promptokat?</h3>
              <p className="text-muted-foreground">
                A leghatékonyabb promptok részletesek, specifikusak és tartalmazzák az elvárt eredmény pontos leírását. Érdemes a promptot lépésenként fejleszteni, először egy alapverzióval kezdeni, majd azt fokozatosan bővíteni.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-lg">
              <h3 className="font-medium text-lg mb-2">Hogyan exportálhatom a generált kódot?</h3>
              <p className="text-muted-foreground">
                A generált kódot a kód panel jobb felső sarkában található "Export" gombra kattintva töltheted le. Választhatsz teljes projekt vagy csak egy komponens exportálása között.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-lg">
              <h3 className="font-medium text-lg mb-2">Személyre szabhatom a generált komponenseket?</h3>
              <p className="text-muted-foreground">
                Igen, a generált kód teljesen testreszabható. A kódot saját projektedbe másolhatod és módosíthatod a saját igényeidnek megfelelően. A komponensek modern React és Tailwind CSS technológiákkal készülnek.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-lg">
              <h3 className="font-medium text-lg mb-2">Van valamilyen korlátozás a használatban?</h3>
              <p className="text-muted-foreground">
                A winmix.hu szolgáltatásait a felhasználási feltételeknek megfelelően használhatod. A generált kód a sajátod, felhasználhatod kereskedelmi projektekben is.
              </p>
            </div>
          </div>
        </Section>
        
        {/* Contact Section */}
        <Section
          id="contact"
          title="Kapcsolat"
          subtitle="Kérdésed van? Vedd fel velünk a kapcsolatot!"
          className="bg-white dark:bg-gray-950"
        >
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Név
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
                    placeholder="Teljes neved"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
                    placeholder="emailcimed@pelda.hu"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Üzenet
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
                  placeholder="Miben segíthetünk?"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Küldés
                </button>
              </div>
            </form>
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Page2;
