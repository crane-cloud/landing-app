"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { TEAM_MEMBERS } from "@/assets/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const socialVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
    },
  },
};

export default function TeamSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Meet Our Leadership Team
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Experienced professionals dedicated to transforming cloud
            infrastructure management.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 md:grid-cols-3"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.article
              key={member.id}
              variants={itemVariants}
              className="flex flex-col items-start"
            >
              <motion.div
                className="relative w-full overflow-hidden rounded-2xl cursor-pointer"
                whileHover="hover"
              >
                <motion.div className="w-full h-full" variants={imageVariants}>
                  {member.imageUrl ? (
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      className="aspect-[4/5] w-full rounded-2xl bg-gray-100 object-cover"
                      width={400}
                      height={500}
                    />
                  ) : (
                    <div className="group aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center relative overflow-hidden transition-all duration-300 hover:shadow-xl">
                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />
                      </div>

                      {/* Initials with modern typography */}
                      <span className="relative text-5xl font-bold text-white tracking-tight transform transition-transform duration-300 group-hover:scale-110 opacity-60">
                        {member.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .toUpperCase()}
                      </span>

                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  )}
                </motion.div>
              </motion.div>
              <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-5"
                >
                  <h3 className="text-xl font-semibold leading-6 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-md font-medium text-gray-500">
                    {member.role}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 flex gap-x-4"
                >
                  {member?.linkedinUrl && (
                    <motion.a
                      href={member.linkedinUrl}
                      className="text-gray-400 hover:text-gray-500 cursor-pointer"
                      variants={socialVariants}
                      whileHover="hover"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only ">LinkedIn</span>
                      <FaLinkedin className="h-5 w-5 cursor-pointer" />
                    </motion.a>
                  )}
                  {member?.twitterUrl && (
                    <motion.a
                      href={member.twitterUrl}
                      className="text-gray-400 hover:text-gray-500 cursor-pointer"
                      variants={socialVariants}
                      whileHover="hover"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Twitter</span>
                      <FaTwitter className="h-5 w-5 cursor-pointer" />
                    </motion.a>
                  )}
                  {member?.githubUrl && (
                    <motion.a
                      href={member.githubUrl}
                      className="text-gray-400 hover:text-gray-500 cursor-pointer"
                      variants={socialVariants}
                      whileHover="hover"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">GitHub</span>
                      <FaGithub className="h-5 w-5 cursor-pointer" />
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
