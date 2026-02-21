'use client';

import { motion } from 'framer-motion';
import { School, BookOpen, Users, MessageCircle } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';

const keyPoints = [
  {
    icon: School,
    title: 'Seminary Qualified',
    description: 'Completed Dars-e-Nizami or equivalent full Islamic education',
  },
  {
    icon: BookOpen,
    title: 'Deep Quranic Knowledge',
    description: 'Able to teach Tafseer, Hadith, and Fiqh — not just recitation',
  },
  {
    icon: Users,
    title: 'Aalimas for Sisters',
    description: 'Female scholars for daughters and adult ladies',
  },
  {
    icon: MessageCircle,
    title: 'Your Questions Answered',
    description: 'Islamic questions welcome in class — no question is too basic',
  },
];

export default function WhyUlama() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel>Our Difference</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-dark mt-6 mb-6">
            There&apos;s a difference between a tutor and a{' '}
            <span className="italic text-gold">scholar</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-text-mid leading-relaxed">
            <p>
              Most online Quran platforms hire teachers with a short Tajweed certificate. Our tutors
              are different. Our Aalim and Aalimas have completed a full Dars-e-Nizami seminary
              education — 6 to 8 years of intensive study in Quran, Hadith, Fiqh, Arabic, and Tafseer.
            </p>
            <p>
              This means your child isn&apos;t just learning to recite words — they&apos;re learning from someone
              who can explain what those words mean, answer questions about Islam, and model the character
              of a true student of knowledge.
            </p>
          </div>
        </motion.div>

        {/* Key Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {keyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-dark text-white mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-emerald-dark mb-2">
                  {point.title}
                </h3>
                <p className="text-text-mid">{point.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
