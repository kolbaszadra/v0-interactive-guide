
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex py-12 lg:py-24 gap-6 flex-col min-w-0 w-full max-w-3xl mx-auto">
      <div className="flex pb-6 justify-start min-w-0 w-full relative animate-fade-in" style={{ transitionDuration: '2s', transform: 'translateY(0px)' }}>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground" style={{ textWrap: 'balance' }}>
          Design engineer és fejlesztő
        </h1>
      </div>
      
      <div className="flex pb-6 justify-start min-w-0 w-full relative animate-fade-in" style={{ transitionDuration: '2s', transform: 'translateY(0px)' }}>
        <span className="font-heading font-normal text-xl md:text-2xl text-muted-foreground" style={{ textWrap: 'balance' }}>
          Az v0.dev Gyorstalpaló egy átfogó útmutató az AI-vezérelt
          <span className="inline-flex px-2 py-1 mx-1 bg-muted border border-border rounded-md items-center font-mono">
            v0.dev
          </span>
          fejlesztőeszköz használatához.
        </span>
      </div>
      
      <div className="flex justify-start min-w-0 w-full relative animate-fade-in" style={{ transitionDuration: '2s', transform: 'translateY(0px)' }}>
        <Button 
          className="rounded-md text-decoration-none justify-center gap-2 group"
          variant="secondary"
          asChild
        >
          <Link to="/brandbook">
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center w-8 h-8 bg-background border border-border rounded-full overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span>Brandbook megtekintése</span>
            </div>
            <div className="relative ml-1 group-hover:ml-2 transition-all">
              <ArrowRight size={16} />
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
