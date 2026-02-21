'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './Button';
import { PricingPlan } from '@/lib/data/pricing';

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative bg-white rounded-xl shadow-lg p-8 border-2 flex flex-col h-full ${
        plan.popular
          ? 'border-gold shadow-xl scale-105'
          : 'border-cream'
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-6 transform -translate-y-1/2">
          <div className="bg-gold text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-emerald-dark mb-2">
          {plan.name}
        </h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-gold">
            ${plan.priceUSD}
          </span>
          <span className="text-text-light">/month</span>
        </div>
        <p className="text-sm text-text-mid mt-2">
          {plan.classesPerMonth} classes × {plan.duration} minutes
        </p>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <span className="text-text-mid">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        variant={plan.popular ? 'primary' : 'secondary'}
        size="lg"
        className="w-full"
      >
        Start Free Trial
      </Button>
    </motion.div>
  );
}
