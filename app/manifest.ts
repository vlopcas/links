import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Victor Castro | Links",
    short_name: "VC Links",
    description: "Portfólio, projetos, currículo e contato de Victor Castro.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1014",
    theme_color: "#0b1014",
    icons: [
      { src: "/favicons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
