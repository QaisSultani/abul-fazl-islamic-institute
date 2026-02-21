'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '@/lib/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md p-12 border border-cream relative"
    >
      <Quote className="absolute top-6 right-6 w-8 h-8 text-gold-pale" />

      <div className="relative">
        <p className="text-text-mid leading-relaxed mb-4 italic">
          &quot;{testimonial.quote}&quot;
        </p>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-light to-emerald-mid flex items-center justify-center text-white font-semibold">
            {testimonial.author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-emerald-dark">
              {testimonial.author}
            </p>
            <p className="text-sm text-text-light">
              {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
