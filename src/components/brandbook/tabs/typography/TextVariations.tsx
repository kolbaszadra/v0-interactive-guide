
import React from 'react';
import ComponentWithCode from '../../ComponentWithCode';

interface TextVariationsProps {
  expandedCodeSections: Record<string, boolean>;
  toggleCodeSection: (id: string) => void;
}

const TextVariations = ({ expandedCodeSections, toggleCodeSection }: TextVariationsProps) => {
  return (
    <>
      <h3 className="text-lg font-medium mb-4">Szövegvariációk</h3>
      <div className="space-y-4">
        <ComponentWithCode
          id="muted-text"
          title="Muted Text"
          code={`<p className="text-lg text-muted-foreground">
  Halvány szöveg - másodlagos szövegtartalmakhoz
</p>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md">
            <p className="text-lg text-muted-foreground">
              Halvány szöveg - másodlagos szövegtartalmakhoz
            </p>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="small-text"
          title="Small Text"
          code={`<p className="text-sm">
  Kis méretű szöveg - megjegyzésekhez, lábjegyzetekhez
</p>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md">
            <p className="text-sm">
              Kis méretű szöveg - megjegyzésekhez, lábjegyzetekhez
            </p>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="medium-text"
          title="Medium Text"
          code={`<p className="font-medium">
  Közepes vastagságú szöveg - enyhe kiemeléshez
</p>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md">
            <p className="font-medium">
              Közepes vastagságú szöveg - enyhe kiemeléshez
            </p>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="bold-text"
          title="Bold Text"
          code={`<p className="font-bold">
  Félkövér szöveg - erős kiemeléshez
</p>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md">
            <p className="font-bold">
              Félkövér szöveg - erős kiemeléshez
            </p>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="italic-text"
          title="Italic Text"
          code={`<p className="italic">
  Dőlt szöveg - hangsúlyozáshoz, idézetekhez
</p>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md">
            <p className="italic">
              Dőlt szöveg - hangsúlyozáshoz, idézetekhez
            </p>
          </div>
        </ComponentWithCode>
        
        <ComponentWithCode
          id="gradient-text"
          title="Gradient Text"
          code={`<p className="text-gradient font-bold text-xl">
  Színátmenetes szöveg - különleges kiemelésekhez
</p>`}
          expandedCodeSections={expandedCodeSections}
          toggleCodeSection={toggleCodeSection}
        >
          <div className="p-4 border rounded-md">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 font-bold text-xl">
              Színátmenetes szöveg - különleges kiemelésekhez
            </p>
          </div>
        </ComponentWithCode>
      </div>
    </>
  );
};

export default TextVariations;
