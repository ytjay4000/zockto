import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const sectionLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/betheunicorn.in' },
];

const pageLinks = [
  { label: 'Home', href: '/' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms Of Service', href: '/terms-of-service' },
];

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xl font-bold mb-3">Zockto</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Create digital ads that perform affordably in just five clicks.
            </p>
            <Button variant="hero" size="sm" asChild>
              <a href="https://app.zockto.com/ugc-ads" target="_blank" rel="noopener noreferrer">
                Create Now
              </a>
            </Button>
          </div>

          {/* Sections column */}
          <div>
            <h4 className="font-display font-semibold mb-4">Sections</h4>
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

          {/* Socials column */}
          <div>
            <h4 className="font-display font-semibold mb-4">Socials</h4>
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

          {/* Pages column */}
          <div>
            <h4 className="font-display font-semibold mb-4">Pages</h4>
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

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm">
            All Rights Reserved © {new Date().getFullYear()} Zockto
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
