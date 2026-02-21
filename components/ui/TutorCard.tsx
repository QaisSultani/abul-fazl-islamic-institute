'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Languages } from 'lucide-react';
import { Tutor } from '@/lib/data/tutors';

interface TutorCardProps {
  tutor: Tutor;
}

export default function TutorCard({ tutor }: TutorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-cream"
    >
      {/* Photo and name */}
      <div className="flex flex-col items-center text-center mb-4">
        <div className="w-24 h-24 rounded-full bg-cream mb-3 overflow-hidden relative">
          {/* Placeholder - will be replaced with real photo */}
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-emerald-light to-emerald-mid text-white text-3xl font-bold">
            {tutor.gender === 'Male' ? 'M' : 'F'}
          </div>
          {/* TODO: Replace with real image
          <Image
            src={tutor.photoUrl}
            alt={tutor.name}
            fill
            className="object-cover"
          />
          */}
        </div>
        <h3 className="text-xl font-semibold text-emerald-dark mb-1">
          {tutor.name}
        </h3>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-pale rounded-full">
          <GraduationCap className="w-4 h-4 text-gold" />
          <span className="text-sm font-medium text-gold">
            {tutor.qualification.split('—')[0].trim()}
          </span>
        </div>
      </div>

      {/* Specialization */}
      <div className="mb-4">
        <p className="text-sm font-medium text-text-mid mb-2">
          Specialization:
        </p>
        <div className="flex flex-wrap gap-2">
          {tutor.specialization.map((spec, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-cream text-xs text-text-mid rounded-md"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-sm text-text-mid">
          <Languages className="w-4 h-4" />
          <span>{tutor.languages.join(', ')}</span>
        </div>
      </div>

      {/* Teaches */}
      <div className="mb-4">
        <p className="text-sm font-medium text-text-mid mb-1">Teaches:</p>
        <p className="text-sm text-text-mid">{tutor.teaches}</p>
      </div>

      {/* Bio */}
      <div className="pt-4 border-t border-cream">
        <p className="text-sm text-text-mid leading-relaxed">
          {tutor.bio}
        </p>
      </div>
    </motion.div>
  );
}
