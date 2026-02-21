'use client';

import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { MessageSquare, Send, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { courses } from '@/lib/data/courses';

interface ContactFormData {
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  studentType: string;
  studentAge?: string;
  courseInterest: string;
  preferredSchedule: string;
  howDidYouHear: string;
  message?: string;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>();

  // TODO: Replace 'YOUR_FORMSPREE_ID' with actual Formspree form ID
  const [formspreeState, formspreeSubmit] = useFormspree('YOUR_FORMSPREE_ID');

  const studentType = watch('studentType');

  const onSubmit = (data: ContactFormData) => {
    formspreeSubmit(data as any);
  };

  if (formspreeState.succeeded) {
    return (
      <div className="bg-ivory flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl font-bold text-emerald-dark mb-4">
            Thank You for Your Interest!
          </h1>
          <p className="text-lg text-text-mid mb-6">
            We&apos;ve received your free trial request. Our team will contact you within 24 hours via
            WhatsApp to schedule your first class, in sha Allah.
          </p>
          <Button href="/" variant="primary" size="md">
            Back to Homepage
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ivory">
      {/* Page Header */}
      <section className="bg-linear-to-br from-emerald-dark to-emerald-mid text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Book Your Free Trial Class
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Fill out the form below and we&apos;ll match you with the right Aalim or Aalima scholar.
            We&apos;ll contact you within 24 hours via WhatsApp.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-cream">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  Full Name *
                </label>
                <input
                  {...register('fullName', { required: 'Full name is required' })}
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold-pale outline-none transition-colors"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  Email Address *
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold-pale outline-none transition-colors"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  WhatsApp Number (with country code) *
                </label>
                <input
                  {...register('whatsapp', { required: 'WhatsApp number is required' })}
                  type="tel"
                  id="whatsapp"
                  placeholder="+44 7123 456789"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold-pale outline-none transition-colors"
                />
                {errors.whatsapp && (
                  <p className="mt-1 text-sm text-red-600">{errors.whatsapp.message}</p>
                )}
              </div>

              {/* Country */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  Country *
                </label>
                <select
                  {...register('country', { required: 'Country is required' })}
                  id="country"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold-pale outline-none transition-colors"
                >
                  <option value="">Select a country</option>
                  <option value="Australia">Australia</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Canada">Canada</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="India">India</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Turkey">Turkey</option>
                  <option value="UAE">United Arab Emirates</option>
                  <option value="UK">United Kingdom</option>
                  <option value="USA">United States</option>
                  <option value="Other">Other</option>
                </select>
                {errors.country && (
                  <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
                )}
              </div>

              {/* Student Type */}
              <div>
                <label
                  htmlFor="studentType"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  Who is the student? *
                </label>
                <select
                  {...register('studentType', { required: 'Student type is required' })}
                  id="studentType"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold-pale outline-none transition-colors"
                >
                  <option value="">Select</option>
                  <option value="myself">Myself</option>
                  <option value="my-child">My Child</option>
                </select>
                {errors.studentType && (
                  <p className="mt-1 text-sm text-red-600">{errors.studentType.message}</p>
                )}
              </div>

              {/* Student Age (conditional) */}
              {studentType === 'my-child' && (
                <div>
                  <label
                    htmlFor="studentAge"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Student Age
                  </label>
                  <input
                    {...register('studentAge')}
                    type="text"
                    id="studentAge"
                    placeholder="e.g., 8 years old"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold-pale outline-none transition-colors"
                  />
                </div>
              )}

              {/* Course Interest */}
              <div>
                <label
                  htmlFor="courseInterest"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  Course of Interest *
                </label>
                <select
                  {...register('courseInterest', { required: 'Course interest is required' })}
                  id="courseInterest"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold-pale outline-none transition-colors"
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                  <option value="not-sure">Not sure yet</option>
                </select>
                {errors.courseInterest && (
                  <p className="mt-1 text-sm text-red-600">{errors.courseInterest.message}</p>
                )}
              </div>

              {/* Preferred Schedule */}
              <div>
                <label
                  htmlFor="preferredSchedule"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  Preferred Schedule (days and times) *
                </label>
                <input
                  {...register('preferredSchedule', { required: 'Preferred schedule is required' })}
                  type="text"
                  id="preferredSchedule"
                  placeholder="e.g., Monday & Wednesday evenings (6-8 PM)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold-pale outline-none transition-colors"
                />
                {errors.preferredSchedule && (
                  <p className="mt-1 text-sm text-red-600">{errors.preferredSchedule.message}</p>
                )}
              </div>

              {/* How Did You Hear */}
              <div>
                <label
                  htmlFor="howDidYouHear"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  How did you hear about us? *
                </label>
                <select
                  {...register('howDidYouHear', { required: 'Please let us know how you found us' })}
                  id="howDidYouHear"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold-pale outline-none transition-colors"
                >
                  <option value="">Select</option>
                  <option value="google">Google Search</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="friend">Friend/Family Recommendation</option>
                  <option value="other">Other</option>
                </select>
                {errors.howDidYouHear && (
                  <p className="mt-1 text-sm text-red-600">{errors.howDidYouHear.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  Message / Questions (Optional)
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  placeholder="Any questions or specific requirements?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold-pale outline-none transition-colors"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formspreeState.submitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded-lg bg-gold text-white hover:bg-gold-light shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {formspreeState.submitting ? 'Submitting...' : 'Request Free Trial'}
              </button>

              {formspreeState.errors && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700">
                    There was an error submitting the form. Please try again or contact us directly
                    via WhatsApp.
                  </p>
                </div>
              )}
            </form>

            {/* Response Time Note */}
            <p className="mt-6 text-sm text-text-light text-center italic">
              We&apos;ll contact you within 24 hours, in sha Allah.
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp Direct Contact */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-emerald-dark mb-4">
            Or message us directly on WhatsApp
          </h2>
          <p className="text-text-mid mb-6">
            Prefer to chat directly? Send us a message and we&apos;ll get back to you right away.
          </p>
          <a
            href="https://wa.me/923408863174"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium rounded-lg bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <MessageSquare className="w-5 h-5" />
            Message on WhatsApp
          </a>
          <p className="mt-4 text-sm text-text-light">
            WhatsApp: +923408863174
          </p>
        </div>
      </section>
    </div>
  );
}
