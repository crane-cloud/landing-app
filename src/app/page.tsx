"use client";

import BentoGrid from "@/components/common/BentoGrid";
import CompaniesSection from "@/components/common/CompaniesSection";
import HeroSection from "@/components/common/HeroSection";
import StatsSection from "@/components/common/StatsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BentoGrid />
      <CompaniesSection />
      <StatsSection />
    </>
  );
}
