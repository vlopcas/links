import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "true") return [];
  return [{ url: "https://links.vlopcas.dev", changeFrequency: "monthly", priority: 1 }];
}

