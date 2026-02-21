export interface Course {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  whoItsFor: string;
  whatYoullLearn: string[];
  taughtBy: string;
  duration?: string;
  note?: string;
}

export const courses: Course[] = [
  {
    id: 'noorani-qaida',
    name: 'Noorani Qaida (Beginners)',
    icon: 'BookOpen',
    whoItsFor: 'Complete beginners, children ages 4+, adults who never learned',
    whatYoullLearn: [
      'Arabic alphabet and basic pronunciation',
      'Letter joining and foundational reading skills',
      'Proper articulation points (Makharij)',
      'Building blocks for Quran reading',
    ],
    taughtBy: 'Specialist Quran Tutor and Aalimas',
    duration: 'Typically 2-4 months',
  },
  {
    id: 'quran-tajweed',
    name: 'Quran Reading with Tajweed',
    icon: 'Mic',
    whoItsFor: 'Students who know the alphabet and want to read properly',
    whatYoullLearn: [
      'All core Tajweed rules (Ghunna, Ikhfa, Izhaar, Madd, etc.)',
      'Fluent and beautiful recitation',
      'Proper pronunciation of each letter',
      'Confident Quran reading',
    ],
    taughtBy: 'All tutors (Aalim and Aalimas)',
  },
  {
    id: 'hifz',
    name: 'Hifz (Quran Memorization)',
    icon: 'Brain',
    whoItsFor: 'Students committed to memorizing the full or partial Quran',
    whatYoullLearn: [
      'Structured memorization techniques',
      'Daily revision (Muraja\'a) strategies',
      'Long-term retention methods',
      'Personalized memorization plan',
    ],
    taughtBy: 'Aalim and Aalimas',
    note: 'This is a long-term program — students must be assessed first',
  },
  {
    id: 'tafseer',
    name: 'Tafseer (Quran Explanation)',
    icon: 'Lightbulb',
    whoItsFor: 'Students who want to understand what they recite',
    whatYoullLearn: [
      'Meaning and context of Quranic verses',
      'Related Hadith and scholarly explanations',
      'Lessons and wisdom for daily life',
      'Deep understanding of Allah\'s message',
    ],
    taughtBy: 'Aalim and Aalimas only (requires scholarly qualification)',
    note: 'This is a unique differentiator — taught by qualified Islamic scholars',
  },
  {
    id: 'islamic-studies-kids',
    name: 'Islamic Studies for Kids',
    icon: 'Star',
    whoItsFor: 'Children ages 5-15',
    whatYoullLearn: [
      'Daily Duas and how to perform Salah',
      'Pillars of Islam and Iman',
      'Stories of the Prophets',
      'Islamic manners (Akhlaq) and etiquette',
      'Islamic months and important events',
    ],
    taughtBy: 'Aalimas and Aalim',
    note: 'Perfect for Muslim families in the West with no local Islamic school access',
  },
  {
    id: 'islamic-studies-ladies',
    name: 'Islamic Studies for Ladies (Aalima Classes)',
    icon: 'Moon',
    whoItsFor: 'Adult women who want to deepen their Islamic knowledge',
    whatYoullLearn: [
      'Fiqh of worship and women\'s Islamic rulings',
      'Hadith basics and Prophetic guidance',
      'Seerah (life of Prophet Muhammad ﷺ)',
      'Practical Islam for daily life',
    ],
    taughtBy: 'Aalimas only',
    note: 'This is a very underserved, high-demand segment',
  },
  {
    id: 'basic-arabic',
    name: 'Basic Arabic Language',
    icon: 'Languages',
    whoItsFor: 'Students who want to understand Quranic Arabic',
    whatYoullLearn: [
      'Arabic alphabet (if needed)',
      'Basic vocabulary and sentence structure',
      'Understanding common Quranic phrases',
      'Foundation for reading Arabic texts',
    ],
    taughtBy: 'Aalim and Aalimas',
  },
];
