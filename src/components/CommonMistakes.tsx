
import React, { useState } from 'react';
import { Search, ArrowRight, Filter } from 'lucide-react';

interface Mistake {
  id: string;
  problem: string;
  solution: string;
  category: string;
}

const CommonMistakes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('mind');
  
  const mistakes: Mistake[] = [
    {
      id: 'mistake-1',
      problem: 'Túl tág prompt',
      solution: 'Pontosabb követelményekkel javítsd! Adj meg konkrét funkciókat, stílust, méretet.',
      category: 'prompt'
    },
    {
      id: 'mistake-2',
      problem: 'Nem megfelelő stílus',
      solution: 'Adj vizuális referenciát! Hivatkozz konkrét stílusokra vagy küldj képet.',
      category: 'design'
    },
    {
      id: 'mistake-3',
      problem: 'Túl komplex UI',
      solution: 'Komponens alapú megközelítéssel oldd meg! Bontsd kisebb, kezelhetőbb egységekre.',
      category: 'complexity'
    },
    {
      id: 'mistake-4',
      problem: 'Inkonzisztens dizájn',
      solution: 'Használj stílus rendszert! Definiálj színeket, tipográfiát és komponenseket.',
      category: 'design'
    },
    {
      id: 'mistake-5',
      problem: 'Hiányos felhasználói folyamat',
      solution: 'Definiáld részletesen a lépéseket! Írd le az összes állapotot és interakciót.',
      category: 'ux'
    },
    {
      id: 'mistake-6',
      problem: 'Nem megfelelő visszajelzés',
      solution: 'Légy konkrét és konstruktív! Pontosan írd le, mit szeretnél változtatni.',
      category: 'feedback'
    },
    {
      id: 'mistake-7',
      problem: 'Nehezen módosítható kód',
      solution: 'Kérj moduláris struktúrát! Határozd meg, hogy mely részeket szeretnéd később módosítani.',
      category: 'code'
    },
    {
      id: 'mistake-8',
      problem: 'Nem reszponzív dizájn',
      solution: 'Határozd meg a breakpointokat! Adj meg legalább 3 képernyőméretet, amire optimalizálni szeretnéd.',
      category: 'design'
    },
    {
      id: 'mistake-9',
      problem: 'Hiányzó interakciók',
      solution: 'Definiáld a mikro-interakciókat! Írd le pontosan a hover, kattintás és egyéb állapotokat.',
      category: 'ux'
    },
    {
      id: 'mistake-10',
      problem: 'Nem optimalizált képek',
      solution: 'Kérj optimalizált asset-eket! Határozd meg a formátumot, méretet és minőséget.',
      category: 'assets'
    }
  ];

  const categories = [
    { id: 'mind', name: 'Mind' },
    { id: 'prompt', name: 'Prompt' },
    { id: 'design', name: 'Dizájn' },
    { id: 'ux', name: 'UX' },
    { id: 'code', name: 'Kód' },
    { id: 'complexity', name: 'Komplexitás' },
    { id: 'feedback', name: 'Visszajelzés' },
    { id: 'assets', name: 'Assetok' }
  ];

  const filteredMistakes = mistakes.filter(mistake => {
    const matchesSearch = 
      mistake.problem.toLowerCase().includes(searchTerm.toLowerCase()) || 
      mistake.solution.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = activeFilter === 'mind' || mistake.category === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="mistakes" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading">Gyakori hibák és megoldások</h2>
          <p className="section-subheading">
            Ismerd meg a leggyakoribb hibákat a v0.dev használatánál, és tanuld meg, hogyan kerülheted el őket a hatékonyabb munkafolyamat érdekében.
          </p>
        </div>

        {/* Search and filter */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Keresés a hibák között..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="relative group">
            <button className="w-full flex items-center justify-between py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center gap-2">
                <Filter size={18} />
                <span>Szűrés: {categories.find(c => c.id === activeFilter)?.name}</span>
              </div>
              <span>▼</span>
            </button>
            
            <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hidden group-hover:block z-10">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${activeFilter === category.id ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mistakes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMistakes.map((mistake) => (
            <div key={mistake.id} className="glass-card overflow-hidden">
              <div className="p-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-xl">{mistake.problem}</h3>
                  <span className="inline-block py-1 px-2 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">
                    {categories.find(c => c.id === mistake.category)?.name}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex items-center">
                <ArrowRight size={24} className="text-blue-500 mx-4" />
                <p className="flex-1">{mistake.solution}</p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredMistakes.length === 0 && (
          <div className="text-center py-12">
            <p>Nincsenek találatok a keresési feltételeknek megfelelően.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CommonMistakes;
