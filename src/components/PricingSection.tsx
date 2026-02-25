import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLink from '@/components/AppLink';

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 9.99,
    annualPrice: 99,
    description: 'Great for small teams getting started.',
    features: [
      '600 credits',
      'Up to 12 × 10-sec videos\nor 8 × 15-sec videos\nor 4 × 45-sec videos\nor 3 × 60-sec videos',
      '1080p video quality',
      '200+ public voices + voice cloning',
      '150+ avatars, avatar cloning',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    annualPrice: 299,
    description: 'For fast-growing teams who are scaling.',
    features: [
      '2,400 credits',
      'Twenty-four 25sec UGC videos or twelve 60sec UGC videos / month',
      '1080p video quality',
      '200+ public voices + voice cloning',
      '150+ avatars, avatar cloning',
    ],
    popular: true,
  },
  {
    name: 'Business',
    monthlyPrice: 99,
    annualPrice: 999,
    description: 'Great for enterprises to convert more.',
    features: [
      '8,500 credits',
      'Eighty-five 25sec UGC videos or forty-two 60sec UGC videos / month',
      '1080p video quality',
      '200+ public voices + voice cloning',
      '150+ avatars, avatar cloning',
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background glow */}
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
          className="flex flex-col items-center gap-2 mb-12"
        >
          <div className="flex items-center gap-4">
            <span className={`font-medium transition-colors ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isAnnual ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-foreground transition-transform duration-200 ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`font-medium transition-colors ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annually
            </span>
          </div>
          <span className="text-sm font-medium text-primary">
            Get 2 months for FREE on annual plan
          </span>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative p-8 rounded-2xl gradient-card border shadow-card hover:shadow-card-hover transition-all duration-300 ${
                plan.popular
                  ? 'border-primary shadow-glow scale-105 md:scale-110'
                  : 'border-border/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-sm font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-4xl font-bold">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground">
                  /{isAnnual ? 'year' : 'month'}
                </span>
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-8">
                <p className="text-sm font-medium text-muted-foreground mb-4">What's included</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90 whitespace-pre-line">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={plan.popular ? 'hero' : 'outline'}
                className="w-full"
                asChild
              >
                <AppLink>
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </AppLink>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
