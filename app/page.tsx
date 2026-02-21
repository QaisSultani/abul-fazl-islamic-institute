import Hero from '@/components/sections/Hero';
import CredentialBar from '@/components/sections/CredentialBar';
import WhyUlama from '@/components/sections/WhyUlama';
import CoursesOverview from '@/components/sections/CoursesOverview';
import HowItWorks from '@/components/sections/HowItWorks';
import TutorsPreview from '@/components/sections/TutorsPreview';
import Testimonials from '@/components/sections/Testimonials';
import TrialCTABanner from '@/components/sections/TrialCTABanner';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <CredentialBar />
      <WhyUlama />
      <CoursesOverview />
      <HowItWorks />
      <TutorsPreview />
      <Testimonials />
      <TrialCTABanner />
      <FAQ />
    </>
  );
}
