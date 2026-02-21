'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Button from './Button';
import { Course } from '@/lib/data/courses';

interface CourseCardProps {
  course: Course;
  detailed?: boolean;
}

export default function CourseCard({ course, detailed = false }: CourseCardProps) {
  // Dynamically get the icon component
  const IconComponent = (LucideIcons as any)[course.icon] || LucideIcons.BookOpen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-cream flex flex-col h-full"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-lg bg-gold-pale flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-gold" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-emerald-dark mb-2">
            {course.name}
          </h3>
          {course.duration && (
            <p className="text-sm text-text-light mb-2">
              Duration: {course.duration}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 space-y-4 flex-1">
        <div>
          <p className="text-sm font-medium text-text-mid mb-1">
            Who it&apos;s for:
          </p>
          <p className="text-text-mid pl-4">{course.whoItsFor}</p>
        </div>

        {detailed && (
          <>
            <div>
              <p className="text-sm font-medium text-text-mid mb-2">
                What you&apos;ll learn:
              </p>
              <ul className="space-y-1.5">
                {course.whatYoullLearn.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-text-mid">
                    <span className="text-gold mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium text-text-mid mb-1">
                Taught by:
              </p>
              <p className="text-text-mid pl-4">{course.taughtBy}</p>
            </div>

            {course.note && (
              <div className="bg-gold-pale rounded-lg p-3">
                <p className="text-sm text-text-dark italic">
                  Note: {course.note}
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <Button href="/contact" variant="primary" size="sm" className="w-full mt-4">
        Book Free Trial
      </Button>
    </motion.div>
  );
}
