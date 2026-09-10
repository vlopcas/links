import Image from "next/image";
import { ThemeLogo } from "../../components/theme-logo";
import { ThemeToggle } from "../../components/theme-toggle";
import { InstallCard } from "../../components/install-card";

export default function CardPage() {
  return (
    <main className="event-card-shell">
      <div className="event-card-topbar">
        <ThemeLogo />
        <ThemeToggle />
      </div>

      <section className="event-card" aria-labelledby="card-title">
        <header className="event-card-identity">
          <h1 id="card-title">Victor Castro</h1>
          <p>Software <i /> Dados <i /> IA</p>
        </header>

        <div className="qr-frame">
          <Image src="/qr-vlopcas-card-byte.png" alt="QR Code para acessar os links de Victor Castro" width={2050} height={2050} priority />
        </div>

        <div className="scan-instruction">
          <span aria-hidden="true" />
          <strong>Escaneie para conectar</strong>
          <small>links.vlopcas.dev</small>
        </div>
        <InstallCard />
      </section>
    </main>
  );
}
