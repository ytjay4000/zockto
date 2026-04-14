import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLink from '@/components/AppLink';
import { useGeoLocation } from '@/hooks/useGeoLocation';

const plansIndia = [
  {
    name: 'Basic Plan',
    monthlyPrice: 999,
    annualPrice: 9590,
    credits: '600',
    description: 'Perfect for starting out',
    whatYouGet: [
      '12 × 10-sec videos',
      '8 × 15-sec videos',
      '4 × 45-sec videos',
      '3 × 60-sec videos',
      '40 product image creatives',
    ],
    features: [
      '1080p video quality',
      '200+ public voices + voice cloning',
      '150+ avatars, avatar cloning',
      '100+ templates, 48 languages supported',
    ],
    popular: false,
  },
  {
    name: 'Creator Plan',
    monthlyPrice: 2699,
    annualPrice: 25910,
    credits: '2,400',
    description: 'Perfect for content creators',
    whatYouGet: [
      '48 × 10-sec videos',
      '32 × 15-sec videos',
      '16 × 45-sec videos',
      '12 × 60-sec videos',
      '160 product image creatives',
    ],
    features: [
      '1080p video quality',
      '200+ public voices + voice cloning',
      '150+ avatars, avatar cloning',
      '100+ templates, 48 languages supported',
    ],
    popular: true,
  },
  {
    name: 'Business Plan',
    monthlyPrice: 8999,
    annualPrice: 86390,
    credits: '8,500',
    description: 'Best for businesses and agencies',
    whatYouGet: [
      '170 × 10-sec videos',
      '113 × 15-sec videos',
      '57 × 45-sec videos',
      '43 × 60-sec videos',
      '567 product image creatives',
    ],
    features: [
      '1080p video quality',
      '200+ public voices + voice cloning',
      '150+ avatars, avatar cloning',
      '100+ templates, 48 languages supported',
    ],
    popular: false,
  },
];

const plansGlobal = [
  {
    name: 'Basic Plan',
    monthlyPrice: 39,
    annualPrice: 372,
    credits: '600',
    description: 'Perfect for starting out',
    whatYouGet: [
      '12 × 10-sec videos',
      '8 × 15-sec videos',
      '4 × 45-sec videos',
      '3 × 60-sec videos',
      '40 product image creatives',
    ],
    features: [
      '1080p video quality',
      '200+ public voices + voice cloning',
      '150+ avatars, avatar cloning',
      '100+ templates, 48 languages supported',
    ],
    popular: false,
  },
  {
    name: 'Creator Plan',
    monthlyPrice: 99,
    annualPrice: 948,
    credits: '2,400',
    description: 'Perfect for content creators',
    whatYouGet: [
      '48 × 10-sec videos',
      '32 × 15-sec videos',
      '16 × 45-sec videos',
      '12 × 60-sec videos',
      '160 product image creatives',
    ],
    features: [
      '1080p video quality',
      '200+ public voices + voice cloning',
      '150+ avatars, avatar cloning',
      '100+ templates, 48 languages supported',
    ],
    popular: true,
  },
  {
    name: 'Business Plan',
    monthlyPrice: 399,
    annualPrice: 3828,
    credits: '8,500',
    description: 'Best for businesses and agencies',
    whatYouGet: [
      '170 × 10-sec videos',
      '113 × 15-sec videos',
      '57 × 45-sec videos',
      '43 × 60-sec videos',
      '567 product image creatives',
    ],
    features: [
      '1080p video quality',
      '200+ public voices + voice cloning',
      '150+ avatars, avatar cloning',
      '100+ templates, 48 languages supported',
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { isIndia } = useGeoLocation();
  const plans = isIndia ? plansIndia : plansGlobal;
  const currency = isIndia ? '₹' : '$';

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] gradient-glow opacity-30" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-4">
            Our Pricing
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Choose the best Plan that{' '}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              suits you
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible pricing built for every stage — from startup to scale, no hidden fees.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center rounded-full bg-muted p-1 gap-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                !isAnnual
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                isAnnual
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl border bg-card shadow-card hover:shadow-card-hover transition-all duration-300 ${
                plan.popular
                  ? 'border-primary shadow-glow scale-105 md:scale-105'
                  : 'border-border/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-sm font-semibold text-primary-foreground flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Popular
                </div>
              )}

              <div className="p-8 text-center">
                <h3 className="font-display text-xl font-bold mb-4 text-foreground/80">{plan.name}</h3>

                <div className="mb-1">
                  <span className="font-display text-5xl font-bold">
                    {currency}{isAnnual ? Math.round(plan.annualPrice / 12).toLocaleString() : plan.monthlyPrice.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground text-lg">/ month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  billed {isAnnual ? 'annually' : 'monthly'}
                </p>

                {/* Credits */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span className="text-lg font-bold">{plan.credits} credits per month</span>
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? 'hero' : 'outline'}
                  className="w-full mb-6"
                  asChild
                >
                  <AppLink>
                    Get Started Today
                  </AppLink>
                </Button>

                {/* What You Get box */}
                <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 p-5 mb-6 text-left">
                  <h4 className="font-bold text-primary mb-3">What You Get</h4>
                  <ul className="space-y-2">
                    {plan.whatYouGet.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span className="text-sm text-primary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-muted-foreground mt-6 italic">{plan.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
