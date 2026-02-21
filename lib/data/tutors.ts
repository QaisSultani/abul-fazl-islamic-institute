export interface Tutor {
  id: string;
  name: string; // Placeholder - owner to replace
  gender: 'Male' | 'Female';
  qualification: string;
  specialization: string[];
  languages: string[];
  teaches: string;
  bio: string; // Placeholder - owner to replace
  photoUrl: string; // Placeholder - owner to replace
}

export const tutors: Tutor[] = [
  {
    id: 'male-aalim-1',
    name: '[Male Aalim Name]', // TODO: Owner to replace with real name
    gender: 'Male',
    qualification: 'Aalim (Islamic Seminary Graduate — Dars-e-Nizami)',
    specialization: [
      'Quran with Tajweed',
      'Hifz (Memorization)',
      'Tafseer',
      'Islamic Studies',
      'Basic Arabic',
    ],
    languages: ['Urdu', 'English'],
    teaches: 'Male students, kids (boys), adult males',
    bio: '[Name] is a qualified Aalim with [X] years of experience teaching Quran, Tajweed, and Islamic Studies online. A graduate of [Institution Name], he brings deep scholarly knowledge and patience to every class.',
    photoUrl: '/tutors/placeholder-male.jpg', // TODO: Owner to replace with real photo
  },
  {
    id: 'female-aalima-1',
    name: '[Female Aalima Name #1]', // TODO: Owner to replace with real name
    gender: 'Female',
    qualification: 'Aalima (Islamic Seminary Graduate)',
    specialization: [
      'Quran Reading',
      'Tajweed',
      'Islamic Studies for Ladies',
      'Kids Education',
    ],
    languages: ['Urdu', 'English'],
    teaches: 'Female students, kids (girls & boys up to certain age), adult ladies',
    bio: '[Name] is a certified Aalima with a specialization in [area]. She creates a comfortable, nurturing environment for sisters and children to grow in their Quranic journey.',
    photoUrl: '/tutors/placeholder-female-1.jpg', // TODO: Owner to replace with real photo
  },
  {
    id: 'female-aalima-2',
    name: '[Female Aalima Name #2]', // TODO: Owner to replace with real name
    gender: 'Female',
    qualification: 'Aalima (Islamic Seminary Graduate)',
    specialization: [
      'Quran',
      'Hifz (Memorization)',
      'Duas & Islamic Etiquette for Children',
    ],
    languages: ['Urdu', 'English'],
    teaches: 'Female students, children',
    bio: '[Name] is a dedicated Aalima with expertise in [area]. Her structured and encouraging approach has helped dozens of students memorize and understand the Quran.',
    photoUrl: '/tutors/placeholder-female-2.jpg', // TODO: Owner to replace with real photo
  },
  {
    id: 'female-tutor-specialist',
    name: '[Female Quran Tutor Name]', // TODO: Owner to replace with real name
    gender: 'Female',
    qualification: 'Certified Quran Tutor — Specialist in Qawaid & Tajweed',
    specialization: [
      'Noorani Qaida (beginners)',
      'Quran Reading',
      'Tajweed Rules',
    ],
    languages: ['Urdu', 'English'],
    teaches: 'Complete beginners, young children, anyone starting from scratch',
    bio: '[Name] specializes in teaching complete beginners the foundations of Quran reading. Her patient, structured method using Noorani Qaida has helped children as young as 4 begin their Quranic journey.',
    photoUrl: '/tutors/placeholder-female-3.jpg', // TODO: Owner to replace with real photo
  },
];
