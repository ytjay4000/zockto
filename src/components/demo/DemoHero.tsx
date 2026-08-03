import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Clock, Languages, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { demoVideos } from '@/data/demoVideos';

const BUY_CREDITS_URL = 'https://app.zockto.com/buy-credits';

const stats = [
  { icon: Sparkles, label: 'Trusted by 1000+', sub: 'businesses creating real ads' },
  { icon: Clock, label: '5–10 minutes', sub: 'from product to finished ad' },
  { icon: Languages, label: '48 languages', sub: 'Hinglish, Hindi, English & more' },
  { icon: IndianRupee, label: '₹100–₹125', sub: 'per finished ad video' },
];

const DemoHero = ({ onWatchClick }: { onWatchClick?: () => void }) => {
  return (
    <section className="pt-28 md:pt-36 pb-10 md:pb-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-5">
            Live demo library
          </span>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            See the ads Zockto makes before you spend a rupee
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-7 mx-auto max-w-xl">
            No mockups. No agency showreel. Just real UGC-style ads generated on Zockto by small businesses — scripted,
            voiced, edited and ready to run on Instagram, Meta and WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" onClick={onWatchClick}>
              Watch the sample ads <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={BUY_CREDITS_URL} target="_blank" rel="noreferrer">
                Buy credits
              </a>
            </Button>
          </div>
        </motion.div>
      </div>


      <div className="container px-4 mt-12 md:mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/50 gradient-card p-5 text-center"
            >
              <s.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="font-display text-lg md:text-2xl font-bold">{s.label}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoHero;
