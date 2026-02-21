export interface PricingPlan {
  id: string;
  name: string;
  classesPerMonth: number;
  duration: number; // in minutes
  priceUSD: number;
  features: string[];
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    classesPerMonth: 8,
    duration: 30,
    priceUSD: 45,
    features: [
      '8 classes per month',
      '30 minutes each',
      'Qualified Aalim/Aalima tutor',
      'Flexible scheduling',
      'Progress tracking',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    classesPerMonth: 12,
    duration: 30,
    priceUSD: 65,
    popular: true, // Highlight as most popular
    features: [
      '12 classes per month',
      '30 minutes each',
      'Qualified Aalim/Aalima tutor',
      'Flexible scheduling',
      'Progress tracking',
      'Priority support',
    ],
  },
  {
    id: 'intensive',
    name: 'Intensive',
    classesPerMonth: 20,
    duration: 30,
    priceUSD: 100,
    features: [
      '20 classes per month',
      '30 minutes each',
      'Qualified Aalim/Aalima tutor',
      'Flexible scheduling',
      'Progress tracking',
      'Priority support',
      'Best for Hifz students',
    ],
  },
];

export const pricingNotes = {
  freeTrial: 'Start with 1 free 30-minute trial class — no payment required, no commitment.',
  familyDiscount: {
    title: 'Family Discount',
    details: [
      '10% off for second child',
      '15% off for third child and beyond',
      'Two children can share a class at single student rate',
    ],
  },
  paymentMethods: 'We accept Payoneer and bank transfer. Contact us to arrange payment.',
  refundPolicy: 'If not satisfied after the first paid class, we offer a full refund.',
  noContracts: 'No contracts — cancel anytime with no penalty.',
};
