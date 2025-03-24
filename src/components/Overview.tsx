
import React from 'react';
import { FileText, Users, Lightbulb, Download } from 'lucide-react';

const Overview = () => {
  return (
    <section id="capabilities" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading">
            A v0.dev és a hatékony prototípus-készítés
          </h2>
          <p className="section-subheading">
            Ismerkedj meg a v0.dev képességeivel és tanuld meg, hogyan használhatod hatékonyan a prototípusok készítéséhez. Útmutatónk 8 gyakorlati tippet mutat be a jobb eredmények eléréséhez.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="glass-card p-8 hover:translate-y-[-5px] transition-transform">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6">
              <FileText className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">UI Prototípusok</h3>
            <p className="text-muted-foreground">
              A v0.dev segítségével gyors és pontos UI prototípusokat készíthetsz, amelyek valós kódba fordíthatók.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="glass-card p-8 hover:translate-y-[-5px] transition-transform">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-6">
              <Users className="text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Felhasználói Körök</h3>
            <p className="text-muted-foreground">
              Dizájnerek, fejlesztők, termékmenedzserek és vállalkozók számára egyaránt hasznos eszköz.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="glass-card p-8 hover:translate-y-[-5px] transition-transform">
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-900/30 rounded-xl mb-6">
              <Lightbulb className="text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">8 Bevált Módszer</h3>
            <p className="text-muted-foreground">
              Útmutatónk 8 bevált módszert mutat be, amelyekkel jobb eredményeket érhetsz el a v0.dev használata során.
            </p>
          </div>
          
          {/* Card 4 */}
          <div className="glass-card p-8 hover:translate-y-[-5px] transition-transform">
            <div className="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 rounded-xl mb-6">
              <Download className="text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Letölthető Anyagok</h3>
            <p className="text-muted-foreground">
              Prompt sablonok, ellenőrzőlisták és egyéb hasznos anyagok a hatékonyabb munkafolyamatokhoz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
