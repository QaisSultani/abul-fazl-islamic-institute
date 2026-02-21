export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  verified?: boolean;
}

// TODO: Replace with real testimonials as they come in
export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'My daughter has been learning with the Aalima for 3 months now and the improvement in her recitation — and her love for Islam — has been incredible. We couldn\'t find anything like this locally in London.',
    author: 'Fatima K.',
    location: 'London, UK',
    verified: false, // Placeholder
  },
  {
    id: '2',
    quote: 'Finally found a platform where my son can ask Islamic questions and get proper scholarly answers. The Aalim is knowledgeable, patient, and truly inspiring.',
    author: 'Ahmed R.',
    location: 'Toronto, Canada',
    verified: false, // Placeholder
  },
  {
    id: '3',
    quote: 'As a revert, I was nervous to start. The Aalima made me feel completely comfortable from day one. Now I\'m reading Quran with proper Tajweed Alhamdulillah.',
    author: 'Sarah M.',
    location: 'Melbourne, Australia',
    verified: false, // Placeholder
  },
];
