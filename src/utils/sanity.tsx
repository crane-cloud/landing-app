import { SANITY_DATASET, SANITY_PROJECT_ID } from "@/config";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { SWRConfig } from "swr";

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
});

export const urlFor = (source) => imageUrlBuilder(sanityClient).image(source);

// Used to enable SWR cache sharing
export function SanityAppWrapper({ children }) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 3600000, // 1 hour
      }}
    >
      {children}
    </SWRConfig>
  );
}

const SanityImage = ({ src, alt, ...props }) => {
  if (!src) return null;

  return (
    <Image
      src={urlFor(src).auto("format").fit("max").url() || ""}
      alt={alt}
      loading="lazy"
      {...props}
    />
  );
};

export default SanityImage;
