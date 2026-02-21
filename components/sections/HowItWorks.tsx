'use client';

import { motion } from 'framer-motion';
import { FileText, UserCheck, Video } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';

const steps = [
  {
    number: '1',
    icon: FileText,
    title: 'Fill the Enrollment Form',
    description: 'Tell us about yourself or your child — what you want to learn and when you\'re available. Takes under 2 minutes.',
  },
  {
    number: '2',
    icon: UserCheck,
    title: 'Get Matched & Schedule Your Trial',
    description: 'We personally review your request and match you with the right Aalim or Aalima. You\'ll hear from us within 24 hours via WhatsApp.',
  },
  {
    number: '3',
    icon: Video,
    title: 'Start Your Free Trial Class',
    description: 'Your first 30-minute class is completely free. No payment, no commitment. Just come and experience the difference.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>Getting Started</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-dark mt-6">
            Three steps to begin your journey
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection lines (desktop only) */}
          <div className="hidden md:block absolute top-22 left-1/4 right-1/4 h-0.5 bg-gold-pale"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step number badge */}
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-emerald-dark to-emerald-mid text-white shadow-lg z-10 mx-auto mb-6">
                  <span className="text-3xl font-bold">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gold-pale text-gold mb-4 mx-auto">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-text-mid leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
