import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
  return {
    // Crawlers may read the page and its social metadata; the HTML meta robots
    // directive is what keeps it out of search results until indexing is enabled.
    rules: { userAgent: "*", allow: "/" },
    sitemap: allowIndexing ? "https://links.vlopcas.dev/sitemap.xml" : undefined,
  };
}
