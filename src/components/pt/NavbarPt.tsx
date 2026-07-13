import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import AppLink from '@/components/AppLink';

const navLinks = [
  { label: 'Demo', href: '#demos' },
  { label: 'Benefícios', href: '#benefits' },
  { label: 'Recursos', href: '#features' },
  { label: 'Preços', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Cases', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
];

const NavbarPt = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    if (!href.startsWith('#')) {
      e.preventDefault();
      navigate(href);
      return;
    }
    e.preventDefault();
    if (location.pathname !== '/pt') {
      navigate('/pt' + href);
      return;
    }
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
      )}
    >
      <div className="container px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a href="/pt" className="font-display text-xl font-bold">Zockto</a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); navigate('/'); }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              EN
            </a>
            <Button variant="hero" size="sm" asChild>
              <AppLink>Começar a Criar</AppLink>
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-border/50"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); navigate('/'); }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                English
              </a>
              <Button variant="hero" asChild>
                <AppLink>Começar a Criar</AppLink>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default NavbarPt;
