'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function TrialCTABanner() {
  return (
    <section className="relative py-20 bg-linear-to-r from-emerald-dark to-emerald-mid text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-gold rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-gold rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Begin with a free class. No payment. No commitment.
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto">
            Book your free 30-minute trial with one of our qualified scholars today. We&apos;ll match you
            with the right Aalim or Aalima and you&apos;ll experience the difference from the very first
            class — in sha Allah.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="shadow-xl">
            Book Free Trial Now
          </Button>
        </motion.div>
      </div>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-gold via-gold-light to-gold"></div>
    </section>
  );
}
