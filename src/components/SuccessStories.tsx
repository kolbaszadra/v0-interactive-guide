
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SuccessStory {
  id: string;
  title: string;
  client: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
}

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  
  const stories: SuccessStory[] = [
    {
      id: 'story-1',
      title: 'Webshop újratervezése',
      client: 'FashionLine',
      description: 'Egy divat webáruház újratervezése a vásárlói élmény javítása és a konverziós ráta növelése érdekében.',
      beforeImage: '/placeholder.svg',
      afterImage: '/placeholder.svg',
      quote: 'A v0.dev segítségével képesek voltunk a teljes redesign első verzióját egy nap alatt elkészíteni, amire korábban heteket kellett volna szánnunk.',
      quoteAuthor: 'Nagy Eszter',
      quoteRole: 'Termékmenedzser, FashionLine'
    },
    {
      id: 'story-2',
      title: 'SaaS dashboard prototípus',
      client: 'DataViz Solutions',
      description: 'Egy adatelemző dashboard prototípusának elkészítése a termékfejlesztési folyamat felgyorsítása érdekében.',
      beforeImage: '/placeholder.svg',
      afterImage: '/placeholder.svg',
      quote: 'Több iteráción keresztül finomítottuk a designt, amit a v0.dev segítségével sokkal gyorsabban tudtunk megtenni, mint a hagyományos módszerekkel.',
      quoteAuthor: 'Kovács Péter',
      quoteRole: 'UX Dizájner, DataViz Solutions'
    },
    {
      id: 'story-3',
      title: 'Mobilalkalmazás áttervezése',
      client: 'HealthTracker',
      description: 'Egy egészségügyi alkalmazás felhasználói felületének modernizálása és egyszerűsítése.',
      beforeImage: '/placeholder.svg',
      afterImage: '/placeholder.svg',
      quote: 'Az új interfész sokkal intuitívabb és felhasználóbarátabb lett. A v0.dev segítségével számos különböző megközelítést tudtunk kipróbálni nagyon rövid idő alatt.',
      quoteAuthor: 'Szabó Anna',
      quoteRole: 'Termékfejlesztési Vezető, HealthTracker'
    }
  ];

  const nextStory = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
    setSliderPosition(50);
  };

  const prevStory = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
    setSliderPosition(50);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const activeStory = stories[activeIndex];

  return (
    <section id="success-stories" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading">Sikertörténetek</h2>
          <p className="section-subheading">
            Ismerd meg azokat a projekteket, amelyek a v0.dev segítségével valósultak meg. Nézd meg az Előtte-Utána összehasonlításokat és olvasd el a felhasználók tapasztalatait.
          </p>
        </div>

        <div className="interactive-panel max-w-4xl mx-auto">
          {/* Story header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl">{activeStory.title}</h3>
              <p className="text-muted-foreground">{activeStory.client}</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={prevStory}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Előző történet"
              >
                <ArrowLeft size={20} />
              </button>
              <span className="text-sm text-muted-foreground">{activeIndex + 1}/{stories.length}</span>
              <button 
                onClick={nextStory}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Következő történet"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Story content */}
          <div className="p-6">
            <p className="mb-8">{activeStory.description}</p>
            
            {/* Before-After comparison */}
            <div className="relative h-80 w-full mb-10 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-full">
                <img 
                  src={activeStory.afterImage} 
                  alt="After" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div 
                className="absolute top-0 left-0 h-full overflow-hidden" 
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src={activeStory.beforeImage} 
                  alt="Before" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white text-lg font-bold">
                  Előtte
                </div>
              </div>
              
              <div 
                className="absolute top-0 left-0 h-full overflow-hidden pointer-events-none" 
                style={{ width: `${100 - sliderPosition}%`, marginLeft: `${sliderPosition}%` }}
              >
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white text-lg font-bold">
                  Utána
                </div>
              </div>
              
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              ></div>
              
              <input 
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5"
              />
            </div>
            
            {/* Quote */}
            <blockquote className="glass-card p-6 border-l-4 border-l-blue-500">
              <p className="italic mb-4">{activeStory.quote}</p>
              <footer>
                <strong>{activeStory.quoteAuthor}</strong>
                <p className="text-sm text-muted-foreground">{activeStory.quoteRole}</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
