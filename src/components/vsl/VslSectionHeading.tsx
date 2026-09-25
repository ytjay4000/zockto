import { motion } from 'framer-motion';

interface Props {
  eyebrow: string;
  headline: string;
  sub?: string;
  highlight?: string;
}

const VslSectionHeading = ({ eyebrow, headline, sub, highlight }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center max-w-[720px] mx-auto mb-10 md:mb-14"
  >
    <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">{eyebrow}</p>
    <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-3">{headline}</h2>
    {highlight && (
      <p className="font-display text-lg md:text-2xl font-semibold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent mb-3">
        {highlight}
      </p>
    )}
    {sub && <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{sub}</p>}
  </motion.div>
);

export default VslSectionHeading;
