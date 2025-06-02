"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    name: "CLI Tool",
    description:
      "All basic platform operations can be accessed via our CLI tool, providing seamless control and automation.",
  },
  {
    name: "Notebook Deployments",
    description:
      "Deploy Jupyter notebooks, train apps, and monitor automated logs. Models generated within notebooks can be deployed directly.",
  },
  {
    name: "AI Model Deployments",
    description:
      "Easily deploy AI models with integrated versioning, serving, and monitoring support.",
  },
  {
    name: "Community Features",
    description:
      "We provide socialization features to encourage community engagement and collaborative projects.",
  },
  {
    name: "Auto Deployment Pipeline",
    description:
      "Automatically containerize applications and deploy them to the platform with minimal configuration.",
  },
  {
    name: "Monitoring Tools",
    description:
      "Track resource usage and performance metrics to optimize your workflows.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function ServicesSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Platform Highlights
          </h2>
          <p className="mt-4 text-gray-500">
            Unlock a suite of intelligent features designed to streamline
            development, foster collaboration, and deploy AI-driven solutions
            efficiently.
          </p>

          <motion.dl
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="border-t border-gray-200 pt-4"
              >
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"
        >
          {[
            {
              src: "/terminal.png",
              alt: "CLI and dashboard integration interface",
            },
            {
              src: "/notebook.webp",
              alt: "Notebook deployment workflow in the dashboard",
            },

            {
              src: "/metricsScreenshot.png",
              alt: "Monitoring and logging dashboard snapshot",
            },
            {
              src: "/runningState.webp",
              alt: "Automated AI model deployment UI",
            },
          ].map(({ src, alt }) => (
            <motion.div
              key={alt}
              variants={imageVariants}
              whileHover="hover"
              className="relative h-64 overflow-hidden rounded-xl transition-all duration-100 hover:shadow-2xl hover:shadow-gray-400/30 cursor-pointer"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-left transition-transform duration-100 hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
