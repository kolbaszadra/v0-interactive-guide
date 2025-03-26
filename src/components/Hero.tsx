
import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container-custom relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="text-gradient">v0.dev Gyorstalpaló</span> 2.0
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Tippek és trükkök az AI prototípus-készítéshez
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Hogyan érhetsz el jobb eredményeket nagyobb kontroll mellett a v0.dev használatával. Az 50-60%-os készültségi szint gyorsan elérhető, de az ezt meghaladó finomítás a trükkös rész.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <a href="#tips" className="button-primary">
                Kezdd el a tanulást
              </a>
              <a href="#templates" className="button-outline">
                Prompt sablonok
              </a>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground mt-4 animate-fade-in" style={{ animationDelay: '1s' }}>
              <a href="https://github.com" className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com" className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://v0.dev" className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
                <span className="sr-only">v0.dev</span>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-xl border animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="AI coding assistant" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
