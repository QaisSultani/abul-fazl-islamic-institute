'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import TutorCard from '../ui/TutorCard';
import { tutors } from '@/lib/data/tutors';

export default function TutorsPreview() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel>Our Scholars</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-dark mt-6 mb-4">
            Meet Our Qualified Tutors
          </h2>
          <p className="text-lg text-text-mid max-w-2xl mx-auto">
            Learn from seminary-educated Aalim and Aalima scholars who bring years of Islamic
            education and teaching experience.
          </p>
        </motion.div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {tutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/tutors"
            className="inline-flex items-center gap-2 text-emerald-dark font-semibold hover:text-gold transition-colors"
          >
            Learn More About Our Scholars
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
