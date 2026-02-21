export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'pricing';
}

export const faqs: FAQ[] = [
  {
    id: 'platform',
    question: 'What platform do you use for classes?',
    answer: 'Classes are conducted over Zoom or Google Meet — whichever you prefer. All you need is a device and a stable internet connection.',
    category: 'general',
  },
  {
    id: 'aalim-aalima',
    question: 'What is an Aalim / Aalima?',
    answer: 'An Aalim (male) or Aalima (female) is a graduate of a full Islamic seminary program — typically 6–8 years of study covering Quran, Hadith, Fiqh, Arabic language, and Islamic sciences. This is a significantly higher qualification than a standard Quran tutor certification.',
    category: 'general',
  },
  {
    id: 'free-trial',
    question: 'Is the trial class really free?',
    answer: 'Yes — completely free, no payment details required. We offer one 30-minute trial class so you can experience the quality of our teaching before committing to anything.',
    category: 'general',
  },
  {
    id: 'female-tutor',
    question: 'My daughter is a teenager — can she learn with a female Aalima?',
    answer: 'Absolutely. We have certified Aalimas available specifically for sisters and children. All female student requests are assigned to our female tutors.',
    category: 'general',
  },
  {
    id: 'age-groups',
    question: 'What age groups do you teach?',
    answer: 'We teach all ages — from children as young as 4 years old (using Noorani Qaida) to adults of any age. Each student is assessed and placed with the right tutor for their level.',
    category: 'general',
  },
  {
    id: 'urdu-classes',
    question: 'Can we have classes in Urdu?',
    answer: 'Yes. Our tutors are fluent in both Urdu and English and can teach in whichever language the student is more comfortable with.',
    category: 'general',
  },
  {
    id: 'cost',
    question: 'How much does it cost?',
    answer: 'Our plans start at $45/month for 8 classes. We also offer family discounts for multiple children. Visit our Pricing page for full details.',
    category: 'general',
  },
  {
    id: 'change-tutor',
    question: 'Can I change my tutor if we\'re not a good match?',
    answer: 'Yes, always. Your comfort and progress come first. Just let us know and we\'ll arrange a new match.',
    category: 'general',
  },
  // Pricing-specific FAQs
  {
    id: 'payment-methods',
    question: 'What payment methods do you accept?',
    answer: 'We accept PayPal and bank transfer. Payment details will be shared once you enroll. Contact us to arrange payment.',
    category: 'pricing',
  },
  {
    id: 'refund-policy',
    question: 'What is your refund policy?',
    answer: 'If you\'re not satisfied after your first paid class, we offer a full refund — no questions asked.',
    category: 'pricing',
  },
  {
    id: 'cancel-anytime',
    question: 'Can I cancel anytime?',
    answer: 'Yes, there are no contracts. You can cancel your subscription anytime with no penalty.',
    category: 'pricing',
  },
  {
    id: 'family-discount',
    question: 'Do you offer family discounts?',
    answer: 'Yes! We offer 10% off for a second child and 15% off for the third child and beyond. Two children can also share a single class at the single-student rate.',
    category: 'pricing',
  },
];
