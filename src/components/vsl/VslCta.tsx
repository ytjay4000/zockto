import { ArrowUpRight } from 'lucide-react';
import AppLink from '@/components/AppLink';
import { posthog } from '@/lib/posthog';
import { trackMetaCustomEvent } from '@/lib/metaPixel';
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

// Pill button with a circular icon badge that slides across and spins on hover.
// Box: height + paddings; the end/start paddings swap on hover so the text
// glides out of the icon's way while the circle travels to the other side.
const sizes = {
  sm: {
    box: 'h-10 p-1 ps-4 pe-12 text-[13px] hover:ps-12 hover:pe-4',
    icon: 'w-8 h-8',
    travel: 'group-hover:right-[calc(100%-36px)]',
    glyph: 15,
  },
  default: {
    box: 'h-11 p-1 ps-5 pe-[52px] text-sm hover:ps-[52px] hover:pe-5',
    icon: 'w-9 h-9',
    travel: 'group-hover:right-[calc(100%-40px)]',
    glyph: 16,
  },
  lg: {
    box: 'h-12 p-1 ps-6 pe-14 text-[15px] hover:ps-14 hover:pe-6',
    icon: 'w-10 h-10',
    travel: 'group-hover:right-[calc(100%-44px)]',
    glyph: 16,
  },
} as const;

const VslCta = ({
  label = 'Create My First Ad for ₹299 →',
  event,
  size = 'lg',
  className = '',
  variant = 'hero',
  note = REFUND_NOTE,
}: VslCtaProps) => {
  const s = sizes[size];
  const surface =
    variant === 'outline'
      ? 'border border-border bg-background/70 text-foreground backdrop-blur-sm hover:bg-muted/60'
      : variant === 'secondary'
        ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
        : 'gradient-primary text-primary-foreground shadow-[0_8px_24px_-10px_hsl(var(--primary)/0.55)] hover:shadow-[0_14px_34px_-12px_hsl(var(--primary)/0.65)]';

  // Icon circle inverts on the primary gradient; on outline/secondary buttons
  // it uses the foreground so it stays visible against the light background.
  const circle =
    variant === 'outline' || variant === 'secondary'
      ? 'bg-foreground text-background'
      : 'bg-background text-foreground';

  const button = (
    <AppLink
      onClick={() => posthog.capture(event, { price_inr: 299 })}
      className={cn(
        'group relative inline-flex items-center justify-center w-fit overflow-hidden rounded-full font-semibold tracking-[-0.01em] antialiased cursor-pointer select-none',
        // Apple-style spring for the press + smooth padding/icon choreography
        'transition-[transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
        'active:translate-y-0 active:scale-[0.97]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        s.box,
        surface,
        className,
      )}
    >
      <span className="relative z-10 whitespace-nowrap">{label.replace(' →', '')}</span>
      <span
        aria-hidden
        className={cn(
          'absolute right-1 flex items-center justify-center rounded-full',
          'transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          'group-hover:rotate-45',
          s.icon,
          s.travel,
          circle,
        )}
      >
        <ArrowUpRight size={s.glyph} />
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
