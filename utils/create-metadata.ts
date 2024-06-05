import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    metadataBase: baseUrl,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: baseUrl.href,
      images: "/banner.png",
      siteName: "Radiological Students' Association of Pakistan (RSAP)",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",

      creator: "@AliAzlanReal",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/banner.png",

      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL(`https://${process.env.VERCEL_URL!}`);
