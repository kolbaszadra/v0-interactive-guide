
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary text-secondary-foreground font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            v0.dev útmutató
          </div>
          
          <h1 className="section-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="text-gradient">V0 Gyorstalpaló 2.0:</span> Tippek és trükkök az AI Prototípus-készítéshez
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Hogyan érhetsz el jobb eredményeket nagyobb kontroll mellett a v0.dev használatával
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="#tips" className="button-primary">
              Kezdd el a tanulást
            </a>
            <a href="#templates" className="button-outline">
              Prompt sablonok
            </a>
          </div>
          
          <p className="mt-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '1s' }}>
            Az 50-60%-os készültségi szint gyorsan elérhető, de az ezt meghaladó finomítás a trükkös rész.
          </p>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 opacity-40 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 dark:bg-blue-900 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-200 dark:bg-purple-900 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
