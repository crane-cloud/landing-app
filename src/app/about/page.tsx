import AboutHero from "@/components/common/about/AboutHero";
import TeamSection from "@/components/common/about/TeamSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are and what we do",
};

export default function About() {
  return (
    <>
      <AboutHero />
      <TeamSection />
    </>
  );
}
