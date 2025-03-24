
import React from 'react';
import PricingCards from './PricingCards';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const beginner = {
  title: "Kezdői csomag",
  description: "Alapszintű prompt készítéshez",
  tiers: [
    {
      name: "5€",
      price: "5€",
      description: "Alapszintű prompt",
      buttonText: "Ezt választom",
      buttonClassName: "bg-blue-500 text-white hover:bg-blue-600",
      features: [
        { title: "Egyszerű design", included: true },
        { title: "Alap komponensek", included: true },
        { title: "Egyszerű layout", included: true },
        { title: "Standard színek", included: true },
        { title: "Reszponzív design", included: false },
        { title: "Egyedi animációk", included: false },
        { title: "Komplex interakciók", included: false },
      ]
    },
    {
      name: "10€",
      price: "10€",
      description: "Középszintű prompt",
      buttonText: "Ezt választom",
      buttonClassName: "bg-blue-500 text-white hover:bg-blue-600",
      highlighted: true,
      features: [
        { title: "Egyszerű design", included: true },
        { title: "Alap komponensek", included: true },
        { title: "Komplex layout", included: true },
        { title: "Testreszabott színek", included: true },
        { title: "Reszponzív design", included: true },
        { title: "Egyszerű animációk", included: true },
        { title: "Alap interakciók", included: true },
      ]
    },
    {
      name: "45€",
      price: "45€",
      description: "Professzionális prompt",
      buttonText: "Ezt választom",
      buttonClassName: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      features: [
        { title: "Komplex design", included: true },
        { title: "Egyedi komponensek", included: true },
        { title: "Fejlett layout", included: true },
        { title: "Teljes design rendszer", included: true },
        { title: "Teljesen reszponzív", included: true },
        { title: "Komplex animációk", included: true },
        { title: "Gazdag interakciók", included: true },
        { title: "Felhasználói folyamatok", included: true },
        { title: "Fejlett UX elemek", included: true },
      ]
    }
  ]
};

const intermediate = {
  title: "Középszintű csomag",
  description: "Haladó prompt készítéshez",
  tiers: [
    {
      name: "5€",
      price: "5€",
      description: "Alapszintű prompt",
      buttonText: "Ezt választom",
      buttonClassName: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      features: [
        { title: "Egyszerű design", included: true },
        { title: "Alap komponensek", included: true },
        { title: "Egyszerű layout", included: true },
        { title: "Standard színek", included: true },
        { title: "Reszponzív design", included: false },
        { title: "Egyedi animációk", included: false },
        { title: "Komplex interakciók", included: false },
      ]
    },
    {
      name: "10€",
      price: "10€",
      description: "Középszintű prompt",
      buttonText: "Ezt választom",
      buttonClassName: "bg-blue-500 text-white hover:bg-blue-600",
      highlighted: true,
      features: [
        { title: "Egyszerű design", included: true },
        { title: "Alap komponensek", included: true },
        { title: "Komplex layout", included: true },
        { title: "Testreszabott színek", included: true },
        { title: "Reszponzív design", included: true },
        { title: "Egyszerű animációk", included: true },
        { title: "Alap interakciók", included: true },
        { title: "Egyedi funkciók", included: true },
      ]
    },
    {
      name: "45€",
      price: "45€",
      description: "Professzionális prompt",
      buttonText: "Ezt választom",
      buttonClassName: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      features: [
        { title: "Komplex design", included: true },
        { title: "Egyedi komponensek", included: true },
        { title: "Fejlett layout", included: true },
        { title: "Teljes design rendszer", included: true },
        { title: "Teljesen reszponzív", included: true },
        { title: "Komplex animációk", included: true },
        { title: "Gazdag interakciók", included: true },
        { title: "Felhasználói folyamatok", included: true },
      ]
    }
  ]
};

const professional = {
  title: "Vizsgáld ki a megfelelő csomagot",
  description: "Professzionális prompt készítéshez",
  tiers: [
    {
      name: "5€",
      price: "5€",
      description: "Alapszintű prompt",
      buttonText: "Ezt választom",
      buttonClassName: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      features: [
        { title: "Egyszerű design", included: true },
        { title: "Alap komponensek", included: true },
        { title: "Egyszerű layout", included: true },
        { title: "Standard színek", included: true },
        { title: "Reszponzív design", included: false },
        { title: "Egyedi animációk", included: false },
        { title: "Alapszintű validáció", included: false },
      ]
    },
    {
      name: "10€",
      price: "10€",
      description: "Középszintű prompt",
      buttonText: "Ezt választom",
      buttonClassName: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      features: [
        { title: "Részletes design", included: true },
        { title: "Komplex komponensek", included: true },
        { title: "Fejlett layout", included: true },
        { title: "Egyedi színrendszer", included: true },
        { title: "Reszponzív design", included: true },
        { title: "Egyszerű animációk", included: true },
        { title: "Egyedi funkciók", included: true },
      ]
    },
    {
      name: "45€",
      price: "45€",
      description: "Professzionális prompt",
      buttonText: "Ezt választom",
      buttonClassName: "bg-blue-500 text-white hover:bg-blue-600",
      highlighted: true,
      features: [
        { title: "Professzionális design", included: true },
        { title: "Egyedi UI komponensek", included: true },
        { title: "Komplex layout", included: true },
        { title: "Teljes design rendszer", included: true },
        { title: "Teljesen reszponzív", included: true },
        { title: "Komplex animációk", included: true },
        { title: "Gazdag interakciók", included: true },
        { title: "Teljes felhasználói folyamatok", included: true },
        { title: "Fejlett UX elemek", included: true },
        { title: "Optimalizált teljesítmény", included: true },
        { title: "Akadálymentes UI", included: true },
        { title: "SEO optimalizált", included: true },
        { title: "Kereső integráció", included: true },
      ]
    }
  ]
};

const PromptSkillLevels = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-heading">Prompt skill szintek</h2>
          <p className="section-subheading">
            Válaszd ki a szintednek megfelelő csomagot a hatékonyabb v0.dev használathoz
          </p>
        </div>
        
        <Tabs defaultValue="beginner" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="beginner">Kezdő</TabsTrigger>
            <TabsTrigger value="intermediate">Középhaladó</TabsTrigger>
            <TabsTrigger value="professional">Professzionális</TabsTrigger>
          </TabsList>
          
          <TabsContent value="beginner" className="mt-4">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold">Low prompt skill</h3>
            </div>
            <PricingCards {...beginner} />
          </TabsContent>
          
          <TabsContent value="intermediate" className="mt-4">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold">Medium prompt skill</h3>
            </div>
            <PricingCards {...intermediate} />
          </TabsContent>
          
          <TabsContent value="professional" className="mt-4">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold">PRO VERSION</h3>
            </div>
            <PricingCards {...professional} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PromptSkillLevels;
