
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface PricingFeature {
  title: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonClassName?: string;
  highlighted?: boolean;
}

interface PricingCardsProps {
  title: string;
  description?: string;
  tiers: PricingTier[];
}

const PricingCards: React.FC<PricingCardsProps> = ({ title, description, tiers }) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {title && (
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <Card 
            key={index} 
            className={`relative overflow-hidden ${tier.highlighted ? 'border-blue-500 dark:border-blue-400 shadow-lg' : ''}`}
          >
            {tier.highlighted && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500"></div>
            )}
            <CardHeader>
              <CardTitle className="text-xl">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">{tier.price}</span>
                {tier.price !== 'Egyedi' && <span className="text-muted-foreground ml-1">/hó</span>}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="text-green-500 shrink-0 mt-0.5" size={18} />
                    ) : (
                      <span className="w-[18px] h-[18px] inline-block shrink-0"></span>
                    )}
                    <span className={feature.included ? '' : 'text-muted-foreground line-through'}>
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <button 
                className={`w-full py-2 rounded-md font-medium text-sm transition-colors ${tier.buttonClassName || 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
              >
                {tier.buttonText}
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
