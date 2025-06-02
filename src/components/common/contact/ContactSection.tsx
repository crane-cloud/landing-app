"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { EnvelopeIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { EMAIL, TWITTER_LINK, LINKEDIN_LINK, GITHUB_LINK } from "@/assets/data";

const socialLinks = [
  {
    name: "LinkedIn",
    href: LINKEDIN_LINK,
    icon: FaLinkedin,
    color: "hover:text-blue-500/80",
  },
  {
    name: "GitHub",
    href: GITHUB_LINK,
    icon: FaGithub,
    color: "hover:text-gray-600/80",
  },
  {
    name: "Twitter",
    href: TWITTER_LINK,
    icon: FaTwitter,
    color: "hover:text-blue-400/80",
  },
];

export default function ContactSection() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto  px-6 py-24 sm:py-32 lg:px-8">
        {/* Background gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </motion.div>

        {/* Main content */}
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-10">
          {/* Left side - Contact Info */}
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-10 lg:text-left">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg/8 text-pretty text-gray-300"
            >
              We&apos;d love to hear from you. Reach out to us through any of
              these channels.
            </motion.p>

            {/* Contact Information */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 space-y-8"
            >
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="h-6 w-6 text-white/80 mt-1" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <Link
                    href={`mailto:${EMAIL}`}
                    className="mt-1 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {EMAIL}
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <BuildingOfficeIcon className="h-6 w-6 text-white/80 mt-1" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white">Address</h3>
                  <p className="mt-1 text-gray-300">
                    Kampala, Uganda, Makerere University, <br />
                    College of Computing and Information Sciences, <br />
                    Block B, Level 3 Software Centre
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ scale: 1.2 }}
                    className={`text-gray-400 ${item.color} transition-colors duration-200`}
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-8 w-8" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side - Map */}
          <div className="relative h-80 sm:mt-10 lg:h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute inset-0"
            >
              <iframe
                width="800"
                height="600"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847.7425818089686!2d32.56981500513648!3d0.3316609655152254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0932c4cb69%3A0x8789ba0df5ad06e!2sCOCIS%20BLOCK%20B!5e0!3m2!1sen!2sus!4v1747525095495!5m2!1sen!2sus&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-xl"
                allowFullScreen
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
