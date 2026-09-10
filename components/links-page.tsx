import { ArrowIcon, ContactIcon, FileIcon, GithubIcon, LinkedinIcon, SiteIcon, WhatsAppIcon } from "./icons";
import { ThemeLogo } from "./theme-logo";
import { ThemeToggle } from "./theme-toggle";

const whatsapp = "https://wa.me/5562991704877?text=Ol%C3%A1%2C%20Victor!%20Encontrei%20seu%20contato%20no%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.";

type LinksPageProps = { variant: "default" | "connect" };

export function LinksPage({ variant }: LinksPageProps) {
  const secondaryLink = variant === "connect"
    ? { title: "Adicionar aos contatos", description: "Salve meu telefone, e-mail e links profissionais.", href: "/victor-castro.vcf", icon: ContactIcon }
    : { title: "Currículo", description: "Experiência, formação e competências em um só documento.", href: "https://vlopcas.dev/cv-victor-castro.pdf", icon: FileIcon };
  const SecondaryIcon = secondaryLink.icon;

  return (
    <main className="page-shell">
      <div className="topbar">
        <a className="wordmark" href="https://vlopcas.dev" aria-label="Ir para o portfólio de Victor Castro"><ThemeLogo /></a>
        <ThemeToggle />
      </div>
      <header className="identity">
        <p className="eyebrow">Dados <i /> Software <i /> IA</p>
        <h1>Victor Castro</h1>
        <p className="intro">Trabalho com ciência de dados, engenharia de software e inteligência artificial, do entendimento do problema à solução em uso.</p>
      </header>
      <nav className="links-grid" aria-label="Links de Victor Castro">
        <a className="link-card portfolio-card" href="https://vlopcas.dev">
          <span className="card-icon"><SiteIcon /></span>
          <span className="card-copy"><strong>Portfólio</strong><small>Conheça minha trajetória, os projetos em que trabalho e as decisões por trás de cada solução.</small></span>
          <span className="arrow" aria-hidden="true"><ArrowIcon /></span>
        </a>
        <div className="main-links">
          <a className="link-card" href={secondaryLink.href}>
            <span className="card-icon"><SecondaryIcon /></span>
            <span className="card-copy"><strong>{secondaryLink.title}</strong><small>{secondaryLink.description}</small></span>
            <span className="arrow" aria-hidden="true"><ArrowIcon /></span>
          </a>
        </div>
      </nav>
      <footer className="site-footer">
        <div className="social">
          <a href="https://github.com/vlopcas" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/victorlcastro" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
        </div>
        <p>© {new Date().getFullYear()} Victor Castro.</p>
      </footer>
    </main>
  );
}
