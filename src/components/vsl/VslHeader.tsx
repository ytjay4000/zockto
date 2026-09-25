import { useEffect, useState } from 'react';
import VslCta from './VslCta';

const VslHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border/60' : 'bg-transparent'
      }`}
    >
      <div className="container px-4 max-w-[1200px] h-14 md:h-16 flex items-center justify-between">
        <a href="/vsl" className="font-display text-xl md:text-2xl font-bold tracking-tight">
          Zockto
        </a>
        <VslCta
          event="header_cta_click"
          size="sm"
          className="text-xs md:text-sm min-h-[44px] px-4"
          label="Try Your First Video for ₹299"
          note={null}
        />

      </div>
    </header>
  );
};

export default VslHeader;
