
import React, { useState } from 'react';
import TipSection from '@/components/TipSection';
import { getTipSectionsData } from '@/data/tipSectionsData';
import { Button } from '@/components/ui/button';
import { Code, Copy, Check, Bookmark, BookmarkCheck } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const TipsSection = () => {
  const { toast } = useToast();
  const tipSections = getTipSectionsData();
  const [savedTips, setSavedTips] = useState<string[]>([]);
  const [activeTipId, setActiveTipId] = useState<string | null>(null);
  
  const handleCopyTip = (tipId: string, tipTitle: string) => {
    // Itt valójában a promptot másolnánk, most csak szimulálunk
    navigator.clipboard.writeText(`v0.dev prompt: ${tipTitle}`);
    toast({
      title: "Prompt másolva!",
      description: "A prompt sikeresen a vágólapra került.",
    });
  };
  
  const handleSaveTip = (tipId: string) => {
    if (savedTips.includes(tipId)) {
      setSavedTips(savedTips.filter(id => id !== tipId));
      toast({
        title: "Tipp törölve a mentésekből",
        description: "A tipp eltávolításra került a mentett elemek közül.",
      });
    } else {
      setSavedTips([...savedTips, tipId]);
      toast({
        title: "Tipp elmentve!",
        description: "A tipp hozzáadva a mentett elemekhez.",
      });
    }
  };
  
  return (
    <section id="tips" className="py-16 bg-white dark:bg-gray-950">
      <div className="container-custom mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">8 tipp a hatékonyabb v0.dev használathoz</h2>
          <p className="section-subheading">
            Ezeket a módszereket alkalmazva jobb eredményeket érhetsz el, és nagyobb kontrollt szerezhetsz a tervezési folyamat felett.
          </p>
        </div>
        
        {/* Tippek gyors navigáció */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {tipSections.map((tip) => (
            <Button
              key={tip.id}
              variant={activeTipId === tip.id ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => {
                setActiveTipId(tip.id);
                const element = document.getElementById(tip.id);
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {tip.number}. {tip.title.split(' ').slice(0, 2).join(' ')}...
            </Button>
          ))}
        </div>
      </div>
      
      {tipSections.map((tip, index) => (
        <div key={tip.id} className={index % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
          <TipSection
            {...tip}
            className=""
          />
          
          {/* Tipp akciók */}
          <div className="container-custom pb-8 flex justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => handleCopyTip(tip.id, tip.title)}
            >
              <Copy size={16} /> Prompt másolása
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => handleSaveTip(tip.id)}
            >
              {savedTips.includes(tip.id) ? (
                <>
                  <BookmarkCheck size={16} className="text-green-500" /> Elmentve
                </>
              ) : (
                <>
                  <Bookmark size={16} /> Elmentés
                </>
              )}
            </Button>
          </div>
        </div>
      ))}
      
      {/* Mentett tippek panel - csak ha van mentett elem */}
      {savedTips.length > 0 && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button 
            onClick={() => {
              toast({
                title: `${savedTips.length} tipp elmentve`,
                description: "A mentett tippek megtekinthetők a profilodban.",
              })
            }}
            className="flex items-center gap-2 shadow-lg"
          >
            <BookmarkCheck size={16} /> {savedTips.length} elmentett tipp
          </Button>
        </div>
      )}
    </section>
  );
};

export default TipsSection;
