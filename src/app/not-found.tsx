"use client";

import Image from "next/image";
import { notFoundSvg } from "@/assets/images/images";
import AnimatedButton from "@/components/common/Buttons";

export default function NotFound() {
  return (
    <div className=" bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <div className="text-center sm:ml-6">
            <div className="flex justify-center">
              <Image
                src={notFoundSvg}
                alt="404 illustration"
                width={400}
                height={300}
                className="w-auto h-64"
              />
            </div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
            <div className="mt-6">
              <AnimatedButton href="/">
                Go back home<span aria-hidden="true"> &rarr;</span>
              </AnimatedButton>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
