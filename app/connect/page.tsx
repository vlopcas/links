import type { Metadata } from "next";
import { LinksPage } from "../../components/links-page";

export const metadata: Metadata = {
  title: "Conecte-se com Victor Castro",
  description: "Acesse o portfólio e adicione os dados profissionais de Victor Castro aos seus contatos.",
  alternates: { canonical: "https://links.vlopcas.dev/connect" },
  robots: { index: false, follow: false },
};

export default function ConnectPage() {
  return <LinksPage variant="connect" />;
}
