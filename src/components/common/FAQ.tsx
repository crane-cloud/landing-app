"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FAQ_DATA } from "@/assets/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Frequently asked questions
          </h1>
          <div className="mt-10 space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-start justify-between text-left text-gray-900 cursor-pointer"
                >
                  <span className="text-base font-semibold leading-7">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                    </motion.div>
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 pr-12"
                    >
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                {index < FAQ_DATA.length - 1 && (
                  <div className="mt-4 border-t border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
