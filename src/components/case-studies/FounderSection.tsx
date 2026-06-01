import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface Props {
  heading: string;
  body: string;
}

const FounderSection = ({ heading, body }: Props) => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-pink-500/10 to-amber-200/30 border border-border/50 flex items-center justify-center"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium gradient-card border border-border/50 text-primary mb-3">
            From the founder
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{body}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
