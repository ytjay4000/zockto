import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AppLink from '@/components/AppLink';

const sectionLinks = [
  { label: 'Recursos', href: '#features' },
  { label: 'Benefícios', href: '#benefits' },
  { label: 'Preços', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/betheunicorn.in' },
];

const pageLinks = [
  { label: 'Início', href: '/pt' },
  { label: 'Blog', href: '/blog' },
  { label: 'Política de Privacidade', href: '/privacy' },
  { label: 'Termos de Serviço', href: '/terms-of-service' },
  { label: 'Contato', href: '/contact' },
];

const FooterPt = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    if (location.pathname !== '/pt') {
      navigate('/pt' + href);
      return;
    }
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <h3 className="font-display text-xl font-bold mb-3">Zockto</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Crie anúncios digitais que performam a um preço acessível em apenas cinco cliques.
            </p>
            <Button variant="hero" size="sm" asChild>
              <AppLink>Criar Agora</AppLink>
            </Button>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Seções</h4>
            <ul className="space-y-3">
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Redes Sociais</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Páginas</h4>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm">
            Todos os direitos reservados © {new Date().getFullYear()} Zockto
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPt;
