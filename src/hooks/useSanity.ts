import { sanityClient } from "@/utils/sanity";
import useSWR from "swr";

const SANITY_CACHE_TIME = 3600; // 1 hour in seconds
const DEDUPING_INTERVAL = 300000; // 5 minutes in milliseconds


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useEvents = (config: any) => {
  const {
    queryParams = {},
    swrOptions = {},
    filters = {},
    sort = { field: "_createdAt", direction: "desc" },
  } = config;

  const { eventTypes = [],  } = filters;

  const eventsFilter =
    eventTypes && eventTypes.length > 0
      ? "&& eventTypes[]->slug.current in $eventTypes"
      : "";

  
  const sortOrder = sort?.field
    ? `| order(${sort.field} ${sort.direction})`
    : "| order(_createdAt desc)";

  const query = `*[_type == "events" && isActive == true
    ${eventsFilter}
  ] ${sortOrder} [0...$max] {
    _id,
    title,
    'slug': slug.current,
    description,
    date,
    dateEnd,
    location,
    eventTypes[]->{
      name,
      "slug": slug.current
    },
    image,
    isFeatured,
    organizer,
    tags,
    maxAttendees,
    _createdAt
  }`;

  const { data, error } = useSWR(
    [
      "events-query",
      query,
      queryParams,
      eventTypes,
      sort?.field,
      sort?.direction,
    ],
    () =>
        sanityClient.fetch(
        query,
        {
          ...queryParams,
          max: queryParams.max || 50,
          ...(eventTypes.length > 0 && { eventTypes }),
        },
        {
          cache: "force-cache",
          next: { revalidate: SANITY_CACHE_TIME },
        }
      ),
    {
      dedupingInterval: DEDUPING_INTERVAL,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      ...swrOptions,
    }
  );

  return {
    events: data,
    isLoading: !error && !data,
    isError: error,
    filterCount: {
      eventTypes: eventTypes.length,
    },
  };
};

export const useEventBySlug = (incomingSlug) => {
const slug = decodeURIComponent(incomingSlug);

  const query = `*[_type == "events" && slug.current == $slug && isActive == true][0] {
    ...,
    eventTypes[]->{
      name,
      "slug": slug.current
    },
  }`;

  const { data, error } = useSWR(
    ["event-by-slug", slug],
    async () => {
      const result = await sanityClient.fetch(
        query,
        { slug },
        {
          cache: "force-cache",
          next: { revalidate: SANITY_CACHE_TIME }, 
        }
      );
      return result;
    },
    {
      dedupingInterval: DEDUPING_INTERVAL,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    event: data,
    isLoading: !error && !data,
    isError: error,
  };
};