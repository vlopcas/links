import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://links.vlopcas.dev";
const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Victor Castro | Links",
  description: "Portfólio, projetos, currículo e canais de contato de Victor Castro — dados, software e inteligência artificial.",
  alternates: { canonical: siteUrl },
  robots: { index: allowIndexing, follow: allowIndexing },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Victor Castro",
    title: "Victor Castro | Dados, Software e IA",
    description: "Acesse meu portfólio, projetos, currículo e canais de contato.",
    images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "Victor Castro — Dados, Software e IA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Castro | Dados, Software e IA",
    description: "Portfólio, projetos, currículo e canais de contato.",
    images: ["/social-preview.png"],
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080b0e" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem('links-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
