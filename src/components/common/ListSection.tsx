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
    name: "Push to deploy",
    description:
      "Deploy your applications with a single push. Our platform automatically handles the build, test, and deployment process.",
    icon: CloudArrowUpIcon,
    stats: "99.9% uptime",
    color: "from-blue-900 to-blue-500",
    metrics: "1.2s avg deploy time",
  },
  {
    name: "SSL certificates",
    description:
      "Automatic SSL certificate management with Let's Encrypt integration. Keep your applications secure with zero configuration.",
    icon: LockClosedIcon,
    stats: "256-bit encryption",
    color: "from-green-900 to-green-500",
    metrics: "Auto-renewal",
  },

  {
    name: "Advanced security",
    description:
      "Enterprise-grade security features including DDoS protection, WAF, and real-time threat detection.",
    icon: FingerPrintIcon,
    stats: "24/7 monitoring",
    color: "from-red-500 to-red-600",
    metrics: "99.99% security uptime",
  },
  {
    name: "Global CDN",
    description:
      "Content delivery network with 200+ edge locations worldwide. Serve your content with minimal latency.",
    icon: GlobeAltIcon,
    stats: "200+ locations",
    color: "from-indigo-500 to-indigo-600",
    metrics: "50ms avg response",
  },
  {
    name: "Auto-scaling",
    description:
      "Intelligent auto-scaling that responds to traffic patterns. Pay only for what you use with per-second billing.",
    icon: ChartBarIcon,
    stats: "0-1000 instances",
    color: "from-yellow-500 to-yellow-600",
    metrics: "60s scale time",
  },
  {
    name: "Database management",
    description:
      "Managed databases with automatic backups, point-in-time recovery, and high availability configurations.",
    icon: ServerIcon,
    stats: "5 9's availability",
    color: "from-pink-500 to-pink-600",
    metrics: "10TB+ storage",
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
  hover: {
    scale: 1.1,
    rotate: 360,
    transition: {
      duration: 0.5,
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
              Deploy faster
            </motion.h2>
            <motion.p
              className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Everything you need to deploy your app
            </motion.p>
            <motion.p
              className="mt-6 text-lg/8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
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
