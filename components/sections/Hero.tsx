'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import SectionLabel from '../ui/SectionLabel';

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-emerald-dark via-emerald-mid to-emerald-light text-white overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 pb-32 sm:pb-36 lg:pb-44">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Eyebrow label */}
          <div className="flex justify-center mb-6">
            <SectionLabel>Aalim & Aalima Certified Tutors</SectionLabel>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Learn Quran & Islamic Studies from{' '}
            <span className="text-gold-light italic">
              Qualified Scholars
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto">
            At Abul Fazl Islamic Institute, every tutor is a seminary-educated Aalim or Aalima.
            Your child doesn&apos;t just learn to recite — they learn from scholars who have dedicated
            years to mastering the Quran, Hadith, and Islamic sciences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button href="/contact" variant="primary" size="lg">
              Book Free Trial Class
            </Button>
            <Button href="/courses" variant="outline" size="lg" className="border-white! text-white! hover:bg-white! hover:text-gold!">
              Explore Courses
            </Button>
          </div>

          {/* Stats badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-light mb-1">4</div>
              <div className="text-sm text-gray-300">Qualified Scholars</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-light mb-1">24/7</div>
              <div className="text-sm text-gray-300">Worldwide Access</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-light mb-1">Free</div>
              <div className="text-sm text-gray-300">Trial Class</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L1440 0V120C1440 120 1080 60 720 60C360 60 0 120 0 120V0Z" fill="var(--color-ivory)"/>
        </svg>
      </div>
    </section>
  );
}
