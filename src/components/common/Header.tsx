"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaviconSvg } from "@/assets/images/images";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ServerStackIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  BookOpenIcon,
  UsersIcon,
  CogIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import AnimatedButton from "./Buttons";
import { APP_LINK, DOCS_LINK } from "@/assets/data";

// const navigation = [
//   { name: "Home", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Docs", href: "#" },
//   { name: "Support", href: "#" },
// ];

const services = [
  {
    name: "CLI Tool",
    description: "Run core platform operations right from your terminal.",
    href: "#",
    icon: CogIcon,
  },
  {
    name: "Notebook Deployments",
    description: "Launch and monitor Jupyter notebooks and train models.",
    href: "#",
    icon: BookOpenIcon,
  },
  {
    name: "AI Model Hosting",
    description: "Deploy AI models with ease and scale.",
    href: "#",
    icon: CpuChipIcon,
  },
  {
    name: "Community Collaboration",
    description: "Built-in tools to connect and share within the community.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Auto Deploy Pipeline (Mira)",
    description: "We containerize and deploy your app automatically.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Monitoring Tools",
    description: "Track resource usage and logs in real-time.",
    href: "#",
    icon: ServerStackIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "/contact", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className={`mx-auto flex items-center justify-between p-6 lg:px-8 lg:py-5 fixed w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex lg:flex-1">
          <AnimatedButton
            href="/"
            variant="secondary"
            className="flex items-center gap-x-2 -m-1.5 p-1.5"
          >
            <Image alt="CraneCloud" src={FaviconSvg} width={40} height={40} />
            <span className="text-2xl font-semibold tracking-tight text-balance text-[var(--primary-color)]">
              Crane Cloud
            </span>
          </AnimatedButton>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`"-m-2.5 block items-center justify-center rounded-md p-2.5 text-gray-700" ${mobileMenuOpen ? "hidden":"block"}`}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-8 items-center">
          <AnimatedButton href="/" variant="secondary">
            Home
          </AnimatedButton>
          <Popover className="relative">
            <PopoverButton className="flex text-sm/6 font-semibold cursor-pointer items-center border-1 border-transparent rounded-md px-2 py-1 text-gray-900 cursor-pointer">
              Services
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-blue-400"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <AnimatedButton href="/about" variant="secondary">
            About
          </AnimatedButton>
          <AnimatedButton href={DOCS_LINK} target="_blank" variant="secondary">
            Docs
          </AnimatedButton>
          <AnimatedButton href="/contact" variant="secondary">
            Support
          </AnimatedButton>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <AnimatedButton href={`${APP_LINK}/login`} variant="secondary">
            Log in <span aria-hidden="true">&rarr;</span>
          </AnimatedButton>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">CraneCloud</span>
              <Image alt="CraneCloud" src={FaviconSvg} width={32} height={32} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Docs
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Support
                </Link>
                <Link
                  href="/status"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Status
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
