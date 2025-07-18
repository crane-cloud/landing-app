"use client";

import EventCard from "@/components/common/events/EventCard";
import { useEvents } from "@/hooks/useSanity";

const EventsPage = () => {
  const { events, isLoading, isError } = useEvents({});
  console.log(events);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Events
          </h1>
          <p className="mt-1 text-lg/8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {isLoading && <div>Loading...</div>}
          {isError && <div>Error loading events</div>}
          {events && events.length > 0 ? (
            events.map((event) => <EventCard key={event._id} event={event} />)
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No events found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
