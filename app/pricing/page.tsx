import { Metadata } from 'next';
import { Gift, Users, DollarSign } from 'lucide-react';
import PricingCard from '@/components/ui/PricingCard';
import FAQAccordion from '@/components/ui/FAQAccordion';
import Button from '@/components/ui/Button';
import { pricingPlans, pricingNotes } from '@/lib/data/pricing';
import { faqs } from '@/lib/data/faqs';

export const metadata: Metadata = {
  title: 'Pricing | Abul Fazl Islamic Institute',
  description: 'Affordable Quran and Islamic Studies classes with qualified Aalim and Aalima scholars. Plans start at $45/month. Free trial class available.',
};

export default function PricingPage() {
  // Get pricing-specific FAQs
  const pricingFaqs = faqs.filter(faq => faq.category === 'pricing' || faq.id === 'cost');

  return (
    <div className="bg-ivory">
      {/* Page Header */}
      <section className="bg-linear-to-br from-emerald-dark to-emerald-mid text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Pricing Plans
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Seminary-educated scholars at the price of a local tutor. Our Aalim and Aalima tutors
            bring years of formal Islamic education to every session.
          </p>
        </div>
      </section>

      {/* Free Trial Highlight */}
      <section className="py-12 bg-gold-pale">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-dark mb-3">
            {pricingNotes.freeTrial}
          </h2>
          <Button href="/contact" variant="primary" size="md">
            Book Your Free Trial
          </Button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Family Discount */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-xl p-8 text-center">
            <Users className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-emerald-dark mb-4">
              {pricingNotes.familyDiscount.title}
            </h2>
            <ul className="space-y-2 max-w-md mx-auto text-text-mid">
              {pricingNotes.familyDiscount.details.map((detail, index) => (
                <li key={index} className="flex items-center justify-center gap-2">
                  <span className="text-gold">✓</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <DollarSign className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-emerald-dark mb-4">
            Payment Information
          </h2>
          <p className="text-text-mid mb-2">
            {pricingNotes.paymentMethods}
          </p>
          <p className="text-text-mid mb-2">
            <strong>Refund Policy:</strong> {pricingNotes.refundPolicy}
          </p>
          <p className="text-text-mid">
            <strong>Flexibility:</strong> {pricingNotes.noContracts}
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-emerald-dark mb-8 text-center">
            Pricing FAQs
          </h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-cream">
            {pricingFaqs.map((faq) => (
              <FAQAccordion key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-gold-pale">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-dark mb-4">
            Ready to get started?
          </h2>
          <p className="text-text-mid mb-6">
            Book your free 30-minute trial class and experience the quality of our teaching before
            committing to any plan.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book Free Trial Class
          </Button>
        </div>
      </section>
    </div>
  );
}
