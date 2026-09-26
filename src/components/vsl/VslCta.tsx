import { ArrowRight } from 'lucide-react';
import AppLink from '@/components/AppLink';
import { posthog } from '@/lib/posthog';
import { cn } from '@/lib/utils';

export const TRIAL_PRICE = '₹299';
export const REFUND_NOTE = '7-day refund if you don’t love it';

interface VslCtaProps {
  label?: string;
  event: string;
  size?: 'sm' | 'lg' | 'default';
  className?: string;
  variant?: 'hero' | 'default' | 'outline' | 'secondary';
  /** Reassurance line under the button. Pass null to hide it. */
  note?: string | null;
}

const sizes = {
  sm: 'h-10 px-5 text-[13px]',
  default: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-[15px]',
};

const VslCta = ({
  label = 'Create My First Ad for ₹299 →',
  event,
  size = 'lg',
  className = '',
  variant = 'hero',
  note = REFUND_NOTE,
}: VslCtaProps) => {
  const surface =
    variant === 'outline'
      ? 'border border-border bg-background/70 text-foreground backdrop-blur-sm hover:bg-muted/60'
      : variant === 'secondary'
        ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        : 'gradient-primary text-primary-foreground shadow-[0_8px_24px_-10px_hsl(var(--primary)/0.55)] hover:shadow-[0_14px_34px_-12px_hsl(var(--primary)/0.65)]';

  const button = (
    <AppLink
      onClick={() => posthog.capture(event, { price_inr: 299 })}
      className={cn(
        // Apple-style: soft pill, springy press, subtle light sweep on hover
        'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-[-0.01em] antialiased',
        'transition-[transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
        'will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        sizes[size],
        surface,
        className,
      )}
    >
      {/* light sweep */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_25%,hsl(0_0%_100%/0.28)_50%,transparent_75%)] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-full"
      />
      <span className="relative inline-flex items-center gap-2">
        {label.replace(' →', '')}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
      </span>
    </AppLink>
  );

  if (!note) return button;

  return (
    <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
      {button}
      <p className="text-xs md:text-sm text-muted-foreground text-center">{note}</p>
    </div>
  );
};

export default VslCta;
