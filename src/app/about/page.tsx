import AboutHero from "@/components/common/about/AboutHero";
import AboutSection from "@/components/common/about/AboutSection";
import TeamSection from "@/components/common/about/TeamSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are and what we do",
};

const missionSection = {
  title: "Our Mission",
  value:
    "We are a team of developers who are passionate about building software that is easy to use and understand.",
  description:
    "We aim to remove obstacles for startups, students, and researchers by offering a reliable platform to launch digital products and businesses. Crane Cloud simplifies cloud hosting with features like managed cloud services, containerized app deployment, automated container orchestration, storage as a service, and comprehensive monitoring and metrics. Designed and built in Uganda, we prioritize security, ease of use, and collaboration, ensuring a seamless experience for academic, research, and entrepreneurial projects.",
  // image: "/images/mission.jpg",
};

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutSection
        title={missionSection?.title}
        description={missionSection?.description}
        value={missionSection?.value}
      />
      <TeamSection />
    </>
  );
}
