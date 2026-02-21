'use client';

import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '@/lib/data/testimonials';

export default function Testimonials() {
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
          <SectionLabel>Student Stories</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-dark mt-6">
            Trusted by families across the world
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Note about placeholder testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-text-light italic">
            {/* TODO: Replace with real testimonials as they come in */}
            More testimonials will be added as we grow our student community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
