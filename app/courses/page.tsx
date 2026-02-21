import { Metadata } from 'next';
import CourseCard from '@/components/ui/CourseCard';
import Button from '@/components/ui/Button';
import { courses } from '@/lib/data/courses';

export const metadata: Metadata = {
  title: 'Our Courses | Abul Fazl Islamic Institute',
  description: 'Explore our comprehensive Quran and Islamic Studies courses taught by qualified Aalim and Aalima scholars. From beginners to advanced students.',
};

export default function CoursesPage() {
  return (
    <div className="bg-ivory">
      {/* Page Header */}
      <section className="bg-linear-to-br from-emerald-dark to-emerald-mid text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Our Courses
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive Islamic education for all ages and levels, taught by seminary-educated
            Aalim and Aalima scholars.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} detailed={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-dark mb-4">
            Not sure which course is right for you?
          </h2>
          <p className="text-text-mid mb-6">
            Book a free trial class and we&apos;ll help you find the perfect match based on your goals
            and current level.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book Free Trial Class
          </Button>
        </div>
      </section>
    </div>
  );
}
