import { SANITY_DATASET, SANITY_PROJECT_ID } from "@/config";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { SWRConfig } from "swr";
import BlockContent from "@sanity/block-content-to-react";
import SanitySerializers from "@/components/common/SanitySerializer";

// Only create the client if we have the required environment variables
export const sanityClient = SANITY_PROJECT_ID
  ? createClient({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

export const urlFor = (source) => {
  if (!sanityClient) return null;
  return imageUrlBuilder(sanityClient).image(source);
};

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
  if (!src || !sanityClient) return null;

  const imageUrl = urlFor(src);
  if (!imageUrl) return null;

  return (
    <Image
      src={imageUrl.auto("format").fit("max").url() || ""}
      alt={alt}
      loading="lazy"
      {...props}
    />
  );
};

// Custom BlockContent component for Sanity
export const SanityBlockContent = ({ blocks, ...props }) => {
  if (!blocks || !sanityClient) return null;

  return (
    <BlockContent
      blocks={blocks}
      projectId={SANITY_PROJECT_ID}
      dataset={SANITY_DATASET}
      serializers={SanitySerializers}
      {...props}
    />
  );
};

export default SanityImage;
