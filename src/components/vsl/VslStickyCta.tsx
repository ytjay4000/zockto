import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import AppLink from '@/components/AppLink';
import { posthog } from '@/lib/posthog';

const VslStickyCta = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`md:hidden fixed left-0 right-0 z-50 px-4 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
      style={{ bottom: 'calc(16px + env(safe-area-inset-bottom))' }}
    >
      <div className="relative">
        <AppLink
          onClick={() => posthog.capture('sticky_cta_click', { price_inr: 299 })}
          className="flex items-center justify-center gap-2 w-full rounded-full gradient-primary text-primary-foreground font-semibold text-[15px] py-4 shadow-glow"
        >
          Try Your First Ad — ₹299
          <ArrowRight className="w-4 h-4" />
        </AppLink>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="absolute -top-2 -right-1 w-7 h-7 rounded-full bg-background border border-border/60 flex items-center justify-center text-muted-foreground"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default VslStickyCta;
