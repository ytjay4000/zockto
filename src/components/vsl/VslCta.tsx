import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLink from '@/components/AppLink';
import { posthog } from '@/lib/posthog';

export const TRIAL_PRICE = '₹299';

interface VslCtaProps {
  label?: string;
  event: string;
  size?: 'sm' | 'lg' | 'default';
  className?: string;
  variant?: 'hero' | 'default' | 'outline' | 'secondary';
}

const VslCta = ({
  label = 'Try Your First Video for ₹299 →',
  event,
  size = 'lg',
  className = '',
  variant = 'hero',
}: VslCtaProps) => (
  <Button variant={variant} size={size} asChild className={className}>
    <AppLink onClick={() => posthog.capture(event, { price_inr: 299 })}>
      <span className="inline-flex items-center gap-2">
        {label.replace(' →', '')}
        <ArrowRight className="w-4 h-4" />
      </span>
    </AppLink>
  </Button>
);

export default VslCta;
