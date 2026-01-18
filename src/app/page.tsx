// import { HeroSection } from '@/components/customer/home/HeroSection';

'use client'
import { Testimonials } from '@/components/customer/home/Testimonials';
import { CTASection } from '@/components/customer/home/CTASection';
import HeroSection from '@/components/customer/home/HeroSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Testimonials />
      <CTASection />
    </div>
  );
}