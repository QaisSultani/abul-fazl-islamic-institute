'use client';

import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import FAQAccordion from '../ui/FAQAccordion';
import { faqs } from '@/lib/data/faqs';

export default function FAQ() {
  // Only show general FAQs on homepage
  const generalFaqs = faqs.filter(faq => faq.category !== 'pricing');

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel>Common Questions</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-dark mt-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          {generalFaqs.map((faq) => (
            <FAQAccordion key={faq.id} faq={faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
