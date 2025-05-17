import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiDjango,
  SiFlask,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiPython,
  SiJavascript,
  SiGit,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: SiReact,
    // color: "#61DAFB",
    color: "#000",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    // color: "#339933",
    color: "#000",
  },
  {
    name: "Django",
    icon: SiDjango,
    // color: "#092E20",
    color: "#000",
  },
  {
    name: "Flask",
    icon: SiFlask,
    // color: "#000000",
    color: "#000",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    // color: "#000000",
    color: "#000",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    // color: "#3178C6",
    color: "#000",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    // color: "#06B6D4",
    color: "#000",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    // color: "#47A248",
    color: "#000",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    // color: "#336791",
    color: "#000",
  },
  {
    name: "Docker",
    icon: SiDocker,
    // color: "#2496ED",
    color: "#000",
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    // color: "#326CE5",
    color: "#000",
  },
  {
    name: "Python",
    icon: SiPython,
    // color: "#3776AB"
    color: "#000",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    // color: "#F7DF1E",
    color: "#000",
  },
  {
    name: "Git",
    icon: SiGit,
    // color: "#F05032",
    color: "#000",
  },
];

const CompaniesSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Build with modern technologies
        </h2>

        <div className="relative mt-10">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute inset-y-0 left-0 w-32  z-10" />
          <div className="absolute inset-y-0 right-0 w-32  z-10" />

          <motion.div
            className="flex space-x-12"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {/* First set of icons */}
            {technologies.map((tech) => (
              <motion.div
                key={`${tech.name}-1`}
                className="flex-shrink-0"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <tech.icon
                  className="h-15 w-15 cursor-pointer"
                  style={{ color: tech.color }}
                />
              </motion.div>
            ))}

            {/* Duplicate set for seamless loop */}
            {technologies.map((tech) => (
              <motion.div
                key={`${tech.name}-2`}
                className="flex-shrink-0"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <tech.icon
                  className="h-15 w-15 cursor-pointer"
                  style={{ color: tech.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesSection;
