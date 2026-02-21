'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import CourseCard from '../ui/CourseCard';
import { courses } from '@/lib/data/courses';

export default function CoursesOverview() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel>What We Teach</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-dark mt-6 mb-4">
            Courses for Every Student
          </h2>
          <p className="text-lg text-text-mid max-w-2xl mx-auto">
            From complete beginners to advanced students, we offer comprehensive Islamic education
            taught by qualified Aalim and Aalima scholars.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-emerald-dark font-semibold hover:text-gold transition-colors"
          >
            View All Course Details
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
