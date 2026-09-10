import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cartão digital | Victor Castro",
  description: "Escaneie o QR Code para acessar os links e contatos de Victor Castro.",
  alternates: { canonical: "https://links.vlopcas.dev/card" },
  robots: { index: false, follow: false },
};

export default function CardLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <><link rel="manifest" href="/card-manifest.webmanifest" />{children}</>;
}
