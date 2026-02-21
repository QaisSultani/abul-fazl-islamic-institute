import { Metadata } from 'next';
import Button from '@/components/ui/Button';
import TutorCard from '@/components/ui/TutorCard';
import { tutors } from '@/lib/data/tutors';

export const metadata: Metadata = {
  title: 'Our Tutors | Abul Fazl Islamic Institute',
  description: 'Meet our seminary-educated Aalim and Aalima scholars who bring years of Islamic education and teaching experience to every class.',
};

export default function TutorsPage() {
  return (
    <div className="bg-ivory">
      {/* Page Header */}
      <section className="bg-linear-to-br from-emerald-dark to-emerald-mid text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Learn from Qualified Ulama
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Our tutors are seminary-educated Aalim and Aalima scholars with years of formal Islamic
            education and teaching experience.
          </p>
        </div>
      </section>

      {/* Tutors Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutors.map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}
          </div>
        </div>
      </section>

      {/* Explainer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-dark mb-6 text-center">
            What is an Aalim / Aalima?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-text-mid leading-relaxed mb-4">
              An <strong>Aalim</strong> (male) or <strong>Aalima</strong> (female) is a graduate of
              a full Islamic seminary program, typically known as <em>Dars-e-Nizami</em> or an
              equivalent comprehensive Islamic education curriculum.
            </p>
            <p className="text-text-mid leading-relaxed mb-4">
              This is not a short course or certification program — it&apos;s a rigorous <strong>6 to 8
              years</strong> of intensive study covering:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-mid mb-6">
              <li>Complete recitation and memorization of the Quran</li>
              <li>Tajweed (rules of Quranic recitation)</li>
              <li>Tafseer (Quranic exegesis and explanation)</li>
              <li>Hadith (Prophetic traditions and their sciences)</li>
              <li>Fiqh (Islamic jurisprudence)</li>
              <li>Arabic language, grammar, and literature</li>
              <li>Islamic history, theology, and spirituality</li>
            </ul>
            <p className="text-text-mid leading-relaxed mb-4">
              <strong>Why does this matter?</strong>
            </p>
            <p className="text-text-mid leading-relaxed">
              When you or your child learns from an Aalim or Aalima, you&apos;re not just learning to
              recite words. You&apos;re learning from someone who can explain <em>what those words
              mean</em>, answer your Islamic questions, provide context from Hadith and Seerah,
              and model the character of a true student of Islamic knowledge. This is the difference
              between a tutor and a <em>scholar</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-dark mb-4">
            Ready to learn from a qualified scholar?
          </h2>
          <p className="text-text-mid mb-6">
            Book your free 30-minute trial class today and experience the difference of learning
            from an Aalim or Aalima.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book Free Trial Class
          </Button>
        </div>
      </section>
    </div>
  );
}
