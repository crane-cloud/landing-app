"use client";

import { useEventBySlug } from "@/hooks/useSanity";
import SanityImage, { SanityBlockContent } from "@/utils/sanity";
import { formatDate } from "@/utils/helpers";
import { IoLocationSharp } from "react-icons/io5";
import { BsCalendar2 } from "react-icons/bs";
import AnimatedButton from "@/components/common/Buttons";
import { use } from "react";

const EventDetailsPage = ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const resolvedParams = use(params);
  const { event, isLoading, isError } = useEventBySlug(resolvedParams?.slug);

  if (isLoading) {
    return (
      <div className="bg-white px-4 py-24 pt-36 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="h-96 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !event) {
    return (
      <div className="bg-white px-4 py-24 pt-36 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Event Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The event you&apos;re looking for doesn&apos;t exist or has been
              removed.
            </p>
            <AnimatedButton href="/events" variant="primary">
              ← Back to Events
            </AnimatedButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white px-4 py-24 pt-36 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Event Header */}
        <div className="mb-5">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl mb-2">
            {event?.title}
          </h1>
          <p className="text-lg text-gray-600 mb-4">{event?.description}</p>
          {event?.isFeatured && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mb-4">
              Featured Event
            </span>
          )}

          {/* Event Meta Information */}
          <div className="flex gap-4 mb-6">
            <div className="flex items-center space-x-1 text-gray-700 text-sm">
              <BsCalendar2 />
              <div>
                <p className="font-medium">{formatDate(event?.date)}</p>
                {event?.dateEnd && (
                  <p className="text-sm text-gray-500">
                    to {formatDate(event?.dateEnd)}
                  </p>
                )}
              </div>
            </div>

            {event?.location && (
              <div className="flex items-center space-x-1 text-gray-700 text-sm">
                <IoLocationSharp />
                <span className="font-medium">{event?.location}</span>
              </div>
            )}
          </div>

          {/* Event Type Badge */}
          {event?.eventTypes &&
            event?.eventTypes.length > 0 &&
            event?.eventTypes.map((type) => (
              <span
                key={type.slug}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200"
              >
                {type.name}
              </span>
            ))}
        </div>

        {/* Event Image */}
        {event.image && (
          <div className="mb-8">
            <SanityImage
              src={event?.image}
              alt={event?.title}
              width={800}
              height={400}
              className="w-full h-60 md:h-80 object-cover rounded-lg"
            />
          </div>
        )}
        <hr className="my-8 border-gray-300" />

        {/* Event Content */}
        <div className="prose prose-lg max-w-none">
          {/* Event Content */}
          {event.content && (
            <section className="mb-8">
              <SanityBlockContent blocks={event.content} />
            </section>
          )}

          {/* Event Tags */}
          {event.tags && event.tags.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Event Gallery */}
          {event?.gallery && event?.gallery.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {event?.gallery.map((image, index) => (
                  <div key={index}>
                    <SanityImage
                      src={image}
                      alt={`${event.title} - Image ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Back to Events Button */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <AnimatedButton href="/events" variant="primary">
            ← Back to Events
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
