"use client";
import Link from "next/link";
import SanityImage from "@/utils/sanity";
import { formatDate } from "@/utils/helpers";
import { IoLocationSharp } from "react-icons/io5";

const EventCard = ({ event }) => {
  console.log(event.eventType);
  return (
    <article
      key={event?.slug}
      className="flex max-w-xl flex-col items-start justify-between"
    >
      <SanityImage
        src={event?.image}
        alt={event?.title}
        width={400}
        height={300}
        className="w-full h-55 object-cover rounded-lg mb-4"
      />
      <div className="flex items-center gap-x-4 text-xs">
        <div className="flex items-center gap-x-2">
          <time dateTime={event?.date} className="text-gray-500">
            {formatDate(event?.date)}
          </time>{" "}
          {event?.dateEnd && (
            <>
              -
              <time dateTime={event?.dateEnd} className="text-gray-500">
                {formatDate(event?.dateEnd)}
              </time>
            </>
          )}
        </div>
        <div className="text-gray-500 flex items-center gap-x-1 whitespace-nowrap cursor-pointer hover:underline overflow-hidden text-ellipsis">
          <IoLocationSharp className="size-3" />
          {event.location}
        </div>
        {event?.eventTypes &&
          event?.eventTypes.length > 0 &&
          event?.eventTypes.map((type) => (
            <Link
              key={type.slug}
              href="#"
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {type.name}
            </Link>
          ))}
      </div>
      <div className="group relative grow">
        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
          <Link href={`/events/${event.slug}`}>
            <span className="absolute inset-0" />
            {event?.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm/6 text-gray-600">
          {event?.description}
        </p>
      </div>
      {/* <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
      <Image alt="" src={event.author.imageUrl} className="size-10 rounded-full bg-gray-50" width={40} height={40} />
      <div className="text-sm/6">
        <p className="font-semibold text-gray-900">
          <a href={event.author.href}>
            <span className="absolute inset-0" />
            {event.author.name}
          </a>
        </p>
        <p className="text-gray-600">{event.author.role}</p>
      </div>
    </div> */}
    </article>
  );
};

export default EventCard;

export const EventCardSkeleton = () => {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-55 bg-gray-200 rounded-lg mb-4"></div>

      {/* Meta information skeleton */}
      <div className="flex items-center gap-x-4 text-xs w-full">
        <div className="flex items-center gap-x-2">
          <div className="h-3 bg-gray-200 rounded w-16"></div>
          <div className="h-3 bg-gray-200 rounded w-4"></div>
          <div className="h-3 bg-gray-200 rounded w-16"></div>
        </div>
        <div className="flex items-center gap-x-1">
          <div className="h-3 w-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-20"></div>
        </div>
        <div className="h-6 bg-gray-200 rounded-full w-16"></div>
      </div>

      {/* Content skeleton */}
      <div className="group relative grow w-full">
        <div className="mt-3 h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="mt-2 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    </article>
  );
};
