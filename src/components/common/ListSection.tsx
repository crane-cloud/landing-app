import { motion } from "framer-motion";
import {
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  GlobeAltIcon,
  ChartBarIcon,
} from "@heroicons/react/20/solid";
import MeshBackground from "./MeshBackground";

const features = [
  {
    name: "Push to Deploy",
    description:
      "Increase your company's visibility by deploying applications and databases effortlessly with a single push. CraneCloud automates the build and deployment process, so you can focus on innovation.",
    icon: CloudArrowUpIcon,
    stats: "Apps + Databases",
    color: "from-blue-900 to-blue-500",
    metrics: "Zero config needed",
  },
  {
    name: "Free SSL Certificates",
    description:
      "Boost trust and security with automatic SSL certificates for all deployed applications. Every app gets HTTPS protection out of the box, ensuring secure connections for your users.",
    icon: LockClosedIcon,
    stats: "Always HTTPS",
    color: "from-green-900 to-green-500",
    metrics: "Auto-enabled",
  },
  {
    name: "Ready-to-Use Databases",
    description:
      "Accelerate development with instant PostgreSQL and MySQL databases. No setup or configuration required just connect and start building your application.",
    icon: ServerIcon,
    stats: "PostgreSQL & MySQL",
    color: "from-red-500 to-red-600",
    metrics: "Instant setup",
  },
  {
    name: "Custom Domains",
    description:
      "Enhance your brand's identity by attaching custom domain names to your applications. Professional URLs with simple DNS configuration make your projects stand out.",
    icon: GlobeAltIcon,
    stats: "Your domain",
    color: "from-indigo-500 to-indigo-600",
    metrics: "Easy DNS setup",
  },
  {
    name: "Application Scaling",
    description:
      "Handle growing traffic seamlessly by scaling your applications on demand. Increase the number of instances to meet user demand and ensure a smooth experience.",
    icon: ChartBarIcon,
    stats: "Multiple instances",
    color: "from-yellow-500 to-yellow-600",
    metrics: "On-demand scaling",
  },
  {
    name: "Project Collaboration",
    description:
      "Empower your team with seamless project collaboration. Invite members, share access, manage permissions, and work together on applications effortlessly.",
    icon: FingerPrintIcon,
    stats: "Team projects",
    color: "from-pink-500 to-pink-600",
    metrics: "Shared access",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  initial: { x: 0 },
  hover: {
    x: 8,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function ListSection() {
  return (
    <MeshBackground className="bg-gray-50">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-base/7 font-semibold text-[var(--primary-color)]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ship faster, scale smarter
            </motion.h2>
            <motion.p
              className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Platform as a Service designed for speed
            </motion.p>
            <motion.p
              className="mt-6 text-lg/8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Push your code, get instant databases, invite your team, and watch your apps scale. Everything you need to go from idea to impact.
            </motion.p>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 mx-auto justify-items-center">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  className="group relative"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="relative h-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all duration-300 group-hover:shadow-xl">
                    {/* Gradient background for icon */}
                    <div
                      className={`absolute -top-4 left-8 h-16 w-16 rounded-xl bg-gradient-to-br ${feature.color} p-2 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <motion.div
                        className="flex h-full w-full items-center justify-center rounded-lg bg-white"
                        whileHover="hover"
                        variants={iconVariants}
                      >
                        <feature.icon
                          aria-hidden="true"
                          className="size-8 text-gray-900"
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="pt-12">
                      <dt className="text-xl font-semibold text-gray-900">
                        {feature.name}
                      </dt>
                      <dd className="mt-4 text-base text-gray-600">
                        {feature.description}
                      </dd>

                      {/* Stats and metrics */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                          {feature.stats}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-sm font-medium text-gray-600">
                          {feature.metrics}
                        </span>
                      </div>

                      {/* Hover effect line */}
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent transition-all duration-300 group-hover:w-full" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </MeshBackground>
  );
}