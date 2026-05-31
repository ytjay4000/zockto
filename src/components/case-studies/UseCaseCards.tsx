import { motion } from 'framer-motion';
import {
  Instagram, Sparkles, Rocket, MessageCircle, Facebook, Film, CalendarDays, Target,
} from 'lucide-react';

const cards = [
  { icon: Instagram, label: 'Instagram ads', desc: 'Scroll-stopping 9:16 creatives.' },
  { icon: Sparkles, label: 'Festival offers', desc: 'Diwali, Eid, BFCM — turned around in hours.' },
  { icon: Rocket, label: 'Product launches', desc: 'Launch-day videos before stock lands.' },
  { icon: MessageCircle, label: 'WhatsApp marketing', desc: 'Short vertical clips that get forwarded.' },
  { icon: Facebook, label: 'Facebook ads', desc: 'Test 10 hooks, keep the winner.' },
  { icon: Film, label: 'Reels content', desc: 'Daily Reels without filming a thing.' },
  { icon: CalendarDays, label: 'Daily posting', desc: 'Stay top-of-feed without burnout.' },
  { icon: Target, label: 'Retargeting ads', desc: 'Custom angles for warm audiences.' },
];

interface Props {
  heading: string;
  subheading: string;
}

const UseCaseCards = ({ heading, subheading }: Props) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium gradient-card border border-border/50 text-primary mb-4">
            Use cases
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-muted-foreground text-base md:text-lg">{subheading}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl gradient-card border border-border/50 p-5 hover:shadow-card-hover transition-all hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mb-3 shadow-glow">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-base md:text-lg mb-1">{c.label}</h3>
                <p className="text-sm text-muted-foreground leading-snug">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCaseCards;
