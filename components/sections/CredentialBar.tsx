'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Users, Globe, CheckCircle } from 'lucide-react';

const credentials = [
  {
    icon: GraduationCap,
    title: 'Aalim & Aalima Qualified',
    description: 'Seminary-educated scholars',
  },
  {
    icon: Users,
    title: 'Female Tutors Available',
    description: 'Aalimas for sisters & children',
  },
  {
    icon: Globe,
    title: 'Serving UK, USA, Canada & Australia',
    description: 'Global online education',
  },
  {
    icon: CheckCircle,
    title: 'Free 30-Min Trial',
    description: 'No commitment required',
  },
];

export default function CredentialBar() {
  return (
    <section className="py-16 bg-gold-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-gold-pale flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-emerald-dark text-sm mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-mid">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
