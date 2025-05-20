import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: "CraneCloud - Cloud Infrastructure Management Platform",
    template: "%s | CraneCloud",
  },
  description:
    "CraneCloud provides a comprehensive cloud infrastructure management platform for businesses and developers.",
  keywords: [
    "cloud infrastructure",
    "cloud management",
    "devops",
    "kubernetes",
    "docker",
    "container orchestration",
    "cloud native",
    "cloud native applications",
    "cloud native infrastructure",
    "cloud native management",
    "cloud native development",
    "cloud native operations",
  ],
  authors: [{ name: "CraneCloud" }],
  creator: "CraneCloud",
  publisher: "CraneCloud",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cranecloud.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cranecloud.io",
    siteName: "CraneCloud",
    title: "CraneCloud - Cloud Infrastructure Management Platform",
    description:
      "CraneCloud provides a comprehensive cloud infrastructure management platform for businesses and developers.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CraneCloud Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CraneCloud - Cloud Infrastructure Management Platform",
    description:
      "CraneCloud provides a comprehensive cloud infrastructure management platform for businesses and developers.",
    images: ["/images/twitter-image.jpg"],
    creator: "@cranecloud_io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
  },
};
