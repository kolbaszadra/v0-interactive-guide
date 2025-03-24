
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Star, Eye, Code, FileText } from 'lucide-react';

interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  downloads: number;
  preview: string;
}

const PromptTemplates = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const templates: Template[] = [
    {
      id: 'template-1',
      title: 'E-commerce Termékoldal',
      description: 'Komplett e-commerce termékoldal, képgalériával, árazással, variációkkal és kapcsolódó termékekkel.',
      category: 'ecommerce',
      rating: 4.8,
      downloads: 1243,
      preview: 'Létrehoznál egy modern e-commerce termékoldalt a következő funkciókkal: képgaléria balra, termék információk jobbra, vásárlási CTA gomb, árazás, színvariációk, méretválasztó, termék leírás, műszaki adatok, értékelések, kapcsolódó termékek...'
    },
    {
      id: 'template-2',
      title: 'Analitikai Dashboard',
      description: 'Adatvizualizációs dashboard diagramokkal, grafikonokkal és szűrési lehetőségekkel.',
      category: 'dashboard',
      rating: 4.9,
      downloads: 986,
      preview: 'Készíts egy analitikai dashboard-ot a következő elemekkel: felül kártyák a fő KPI-okkal, alatta oszlopdiagram a havi értékesítésről, jobbra kördiagram a forgalom megoszlásáról, lent táblázat a top termékekkel. Mobilra is optimalizált...'
    },
    {
      id: 'template-3',
      title: 'SaaS Landing Page',
      description: 'Konverziófókuszált landing page SaaS termék számára, a modern trendeknek megfelelően.',
      category: 'landing',
      rating: 4.7,
      downloads: 1568,
      preview: 'Hozz létre egy modern SaaS landing page-et: hero szekcióval, animált illusztrációval, funkciólista szekcióval (3 fő funkció ikonokkal), árazási táblázattal, ügyfél véleményekkel, CTA szekcióval, GYIK-kal és lábléc résszel...'
    },
    {
      id: 'template-4',
      title: 'Mobil Profil Oldal',
      description: 'Részletes felhasználói profil oldal mobilos nézetben, tevékenységek követésével.',
      category: 'mobile',
      rating: 4.6,
      downloads: 742,
      preview: 'Tervezz egy mobil profil oldalt, ahol fent van a profilkép, alatta a felhasználó neve és adatai, követők száma, követési gombok, majd alatta a tevékenységek feed-je időrendi sorrendben, lapozható formában...'
    },
    {
      id: 'template-5',
      title: 'Többlépéses Regisztráció',
      description: 'Felhasználói regisztrációs folyamat lépésekkel, validációval és visszajelzésekkel.',
      category: 'form',
      rating: 4.5,
      downloads: 654,
      preview: 'Készíts egy többlépéses regisztrációs űrlapot: 1. lépés: alap adatok (név, email, jelszó), 2. lépés: profil beállítások (kép, bio), 3. lépés: értesítési beállítások, 4. lépés: összegzés és megerősítés. Legyenek haladásjelzők, validáció és hibaüzenetek...'
    },
    {
      id: 'template-6',
      title: 'Admin Panel Sablon',
      description: 'Teljes admin kezelőfelület oldalsávval, keresővel és CRUD funkciókkal.',
      category: 'admin',
      rating: 4.8,
      downloads: 1025,
      preview: 'Tervezz egy admin panel sablont: bal oldalt navigációs sáv ikonokkal és kategóriákkal, fent keresősáv és értesítések, középen fő tartalom terület táblázattal, adatok szerkesztési lehetőségével, szűrési és rendezési funkciókkal...'
    }
  ];

  const categories = [
    { id: 'all', name: 'Mind' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'dashboard', name: 'Dashboard' },
    { id: 'landing', name: 'Landing Page' },
    { id: 'mobile', name: 'Mobil' },
    { id: 'form', name: 'Űrlapok' },
    { id: 'admin', name: 'Admin' }
  ];

  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === activeCategory);

  return (
    <section id="templates" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading">Letölthető Prompt Sablonok</h2>
          <p className="section-subheading">
            Használd ezeket a kipróbált és tesztelt sablonokat a munkád felgyorsításához.
            Mindegyik sablon részletes, és konkrét projekttípusokra optimalizált.
          </p>
        </div>

        {/* Category tabs */}
        <Tabs
          defaultValue="all"
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="mb-10"
        >
          <TabsList className="w-full flex flex-wrap justify-center h-auto bg-transparent">
            {categories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground mb-2"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Templates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="interactive-panel hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <h3 className="font-bold text-xl mb-2">{template.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{template.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Star className="text-yellow-500 mr-1" size={16} />
                    <span>{template.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Download className="text-gray-500 mr-1" size={16} />
                    <span>{template.downloads}</span>
                  </div>
                  <span className="bg-secondary px-2 py-0.5 rounded-full text-xs">
                    {categories.find(c => c.id === template.category)?.name}
                  </span>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 dark:bg-gray-900 text-sm">
                <p className="text-muted-foreground line-clamp-3">{template.preview}</p>
              </div>
              
              <div className="p-4 flex items-center justify-between bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
                <button className="flex items-center text-sm text-blue-500 hover:text-blue-700">
                  <Eye size={16} className="mr-1" />
                  Előnézet
                </button>
                
                <div className="flex space-x-2">
                  <button className="px-3 py-1.5 rounded-md text-sm border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center">
                    <Code size={14} className="mr-1" />
                    JSON
                  </button>
                  <button className="px-3 py-1.5 rounded-md text-sm border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center">
                    <FileText size={14} className="mr-1" />
                    PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromptTemplates;
