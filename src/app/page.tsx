// import { HeroSection } from '@/components/customer/home/HeroSection';

'use client'
import { CategoryGrid } from '@/components/customer/home/CategoryGrid';
import { FeaturedProducts } from '@/components/customer/home/FeaturedProducts';
import { Testimonials } from '@/components/customer/home/Testimonials';
import { CTASection } from '@/components/customer/home/CTASection';
import HeroSection from '@/components/customer/home/HeroSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <Testimonials />
      <CTASection />
    </div>
  );
}