"use client";

import BentoGrid from "@/components/common/BentoGrid";
import CompaniesSection from "@/components/common/CompaniesSection";
import DashboardSection from "@/components/common/DashboardSection";
import FAQ from "@/components/common/FAQ";
import HeroSection from "@/components/common/home/HeroSection";
import ServicesSection from "@/components/common/home/ServicesSection";
import ListSection from "@/components/common/ListSection";
import StatsSection from "@/components/common/StatsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BentoGrid />
      <CompaniesSection />
      <ListSection />
      <DashboardSection />
      <ServicesSection />
      <StatsSection />
      <FAQ />
    </>
  );
}
