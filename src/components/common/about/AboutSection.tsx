"use client";
import { motion } from "framer-motion";

export default function AboutSection({
  title,
  description,
  value,
}: {
  title: string;
  description: string;
  value: string;
}) {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative max-w-7xl z-index-1000 mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 space-y-6"
          >
            <p className="text-xl sm:text-2xl font-medium text-gray-800 leading-relaxed">
              {value}
            </p>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-3/5 lg:translate-x-8 lg:-translate-y-1/2">
        {/* <Image
          src={PresentationImage}
          alt="Presentation Image"
          width={500}
          height={10000}
          className="object-cover"
        /> */}
      </div>
    </section>
  );
}
