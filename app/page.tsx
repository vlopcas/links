import { ArrowIcon, FileIcon, GithubIcon, LinkedinIcon, MessageIcon, ProjectsIcon, SiteIcon } from "../components/icons";
import { ThemeToggle } from "../components/theme-toggle";

const whatsapp = "https://wa.me/5562991704877?text=Ol%C3%A1%2C%20Victor!%20Encontrei%20seu%20contato%20no%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.";

const mainLinks = [
  { title: "Projetos", description: "Projetos e estudos de caso com contexto técnico.", href: "https://vlopcas.dev/projects", icon: ProjectsIcon },
  { title: "Currículo", description: "Experiência, formação e competências em um só documento.", href: "https://vlopcas.dev/curriculum.pdf", icon: FileIcon },
];

const contactLinks = [
  { label: "GitHub", detail: "@vlopcas", href: "https://github.com/vlopcas", icon: GithubIcon },
  { label: "LinkedIn", detail: "victorlcastro", href: "https://www.linkedin.com/in/victorlcastro", icon: LinkedinIcon },
  { label: "WhatsApp", detail: "Enviar mensagem", href: whatsapp, icon: MessageIcon },
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="topbar">
        <a className="wordmark" href="https://vlopcas.dev" aria-label="Ir para o portfólio de Victor Castro">
          VC<span>.</span>
        </a>
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
          <span className="card-copy">
            <strong>Portfólio</strong>
            <small>Conheça minha trajetória, os projetos em que trabalho e as decisões por trás de cada solução.</small>
          </span>
          <span className="arrow" aria-hidden="true"><ArrowIcon /></span>
        </a>

        <div className="main-links">
          {mainLinks.map(({ title, description, href, icon: Icon }) => (
            <a className="link-card" href={href} key={title}>
              <span className="card-icon"><Icon /></span>
              <span className="card-copy"><strong>{title}</strong><small>{description}</small></span>
              <span className="arrow" aria-hidden="true"><ArrowIcon /></span>
            </a>
          ))}
        </div>

        <div className="contact-links">
          {contactLinks.map(({ label, detail, href, icon: Icon }) => (
            <a className="contact-link" href={href} key={label} target="_blank" rel="noreferrer">
              <span className="contact-icon"><Icon /></span>
              <span><strong>{label}</strong><small>{detail}</small></span>
              <span className="arrow compact" aria-hidden="true"><ArrowIcon /></span>
            </a>
          ))}
        </div>
      </nav>

      <footer><span>© {new Date().getFullYear()} Victor Castro</span><span>Goiânia, GO</span></footer>
    </main>
  );
}

