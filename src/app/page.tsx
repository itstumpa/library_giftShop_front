// import { HeroSection } from '@/components/customer/home/HeroSection';

"use client";
import { CTASection } from "@/components/home/CTASection";
import HeroSection from "@/components/home/HeroSection";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <div>
      <Testimonials />
      <CTASection />
      <HeroSection />

    </div>
  );
}
