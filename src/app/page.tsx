"use client";

import BentoGrid from "@/components/common/BentoGrid";
import CompaniesSection from "@/components/common/CompaniesSection";
import DashboardSection from "@/components/common/DashboardSection";
import HeroSection from "@/components/common/HeroSection";
import ListSection from "@/components/common/ListSection";
import StatsSection from "@/components/common/StatsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BentoGrid />
      {/* <Temp /> */}
      <CompaniesSection />
      <ListSection />
      <DashboardSection />
      <StatsSection />
    </>
  );
}
