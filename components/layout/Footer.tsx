import Link from 'next/link';
import { Mail, Phone, Facebook, Instagram } from 'lucide-react';
import { courses } from '@/lib/data/courses';

export default function Footer() {
  return (
    <footer className="bg-emerald-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and tagline */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-1">Abul Fazl</h2>
              <p className="text-sm text-gold-light">Islamic Institute</p>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Seminary-educated scholars. Online. Accessible. Trusted.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-light">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-gold-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm text-gray-300 hover:text-gold-light transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/tutors" className="text-sm text-gray-300 hover:text-gold-light transition-colors">
                  Tutors
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-300 hover:text-gold-light transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-gold-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-light">
              Our Courses
            </h3>
            <ul className="space-y-2">
              {courses.slice(0, 5).map((course) => (
                <li key={course.id}>
                  <Link
                    href="/courses"
                    className="text-sm text-gray-300 hover:text-gold-light transition-colors"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-light">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>+923408863174</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>abulfazl.institute@gmail.com</span>
              </li>
            </ul>

            {/* Social Media - placeholders */}
            <div className="mt-6">
              <p className="text-sm font-medium mb-3 text-gold-light">
                Follow Us
              </p>
              <div className="flex gap-3">
                {/* TODO: Owner to add real social media links */}
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-emerald-mid hover:bg-gold transition-colors flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-emerald-mid hover:bg-gold transition-colors flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-emerald-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Abul Fazl Islamic Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
