import { motion } from 'framer-motion';

interface Props {
  heading: string;
  body: string;
}

const FounderSection = ({ heading, body }: Props) => {
  return (
    <section className="py-8 md:py-12 bg-muted/30">
      <div className="container px-4 flex justify-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium gradient-card border border-border/50 text-primary mb-3">
            From the founder
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{body}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
```