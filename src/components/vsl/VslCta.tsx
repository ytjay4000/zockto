import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLink from '@/components/AppLink';
import { posthog } from '@/lib/posthog';

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

const VslCta = ({
  label = 'Create My First Ad for ₹299 →',
  event,
  size = 'lg',
  className = '',
  variant = 'hero',
  note = REFUND_NOTE,
}: VslCtaProps) => {
  const button = (
    <Button variant={variant} size={size} asChild className={className}>
      <AppLink onClick={() => posthog.capture(event, { price_inr: 299 })}>
        <span className="inline-flex items-center gap-2">
          {label.replace(' →', '')}
          <ArrowRight className="w-4 h-4" />
        </span>
      </AppLink>
    </Button>
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
