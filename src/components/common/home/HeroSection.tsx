import { motion } from "framer-motion";
import AnimatedButton from "../Buttons";
import { APP_LINK, DOCS_LINK } from "@/assets/data";

export default function HeroSection() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Background gradient animation */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          animate={{
            rotate: [30, 35, 30],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#93c5fd] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </motion.div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding.{" "}
          <a href="#" className="font-semibold text-indigo-600">
            <span aria-hidden="true" className="absolute inset-0" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div> */}
          <div className="text-center">
            {/* Title animation */}
            <motion.h1
              className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Deploy Anywhere, Scale Effortlessly
            </motion.h1>

            {/* Description animation */}
            <motion.p
              className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              An open-source platform that lets you build, deploy, and scale
              containerized apps across any cloud provider with built-in CI/CD,
              auto-scaling, database provisioning, and full developer control,
              without vendor lock-in.
            </motion.p>

            {/* CTA buttons animation */}
            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <AnimatedButton href={`${APP_LINK}/login`} variant="primary">
                Get started
              </AnimatedButton>

              <AnimatedButton href="/about" variant="secondary">
                Learn more <span aria-hidden="true">→</span>
              </AnimatedButton>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient animation */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          animate={{
            rotate: [-30, -35, -30],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#60a5fa] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </motion.div>
      </div>
    </div>
  );
}
