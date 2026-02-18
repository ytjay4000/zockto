import { motion } from 'framer-motion';
import { ArrowRight, Zap, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLink from '@/components/AppLink';

const features = [
  {
    icon: Zap,
    title: 'AI-Powered',
    description: 'Generate realistic UGC videos with advanced AI technology',
  },
  {
    icon: Clock,
    title: 'Minutes, Not Days',
    description: 'Create professional videos in minutes instead of weeks',
  },
  {
    icon: TrendingUp,
    title: 'High Converting',
    description: 'Proven to increase engagement and conversion rates',
  },
];

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-glow" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl gradient-card border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-8 md:p-12 rounded-3xl gradient-card border border-primary/20 shadow-glow"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Create Ads With Just 5 Clicks!
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Convert your product landing page or product image into HIGH CONVERTING ADS
            </p>
            <Button size="lg" variant="hero" asChild>
              <AppLink>
                Start Creating For Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </AppLink>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
