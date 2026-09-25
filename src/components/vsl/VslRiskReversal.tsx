import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const VslRiskReversal = () => (
  <section className="py-14 md:py-20 bg-muted/20 border-y border-border/50">
    <div className="container px-4 max-w-[760px]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-glow mx-auto mb-5">
          <ShieldCheck className="w-6 h-6 text-primary-foreground" />
        </div>
        <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
          No need to take our word for it
        </p>
        <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight mb-4">
          See What Zockto Can Create Before You Commit.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Start with your first ad for ₹299 instead of a large agency invoice or an annual contract. Refunds are handled
          according to our current refund policy — please review it before you buy.
        </p>
        <Link
          to="/terms-of-service"
          className="inline-block mt-5 text-sm font-medium text-primary underline underline-offset-4"
        >
          Read the refund policy
        </Link>
      </motion.div>
    </div>
  </section>
);

export default VslRiskReversal;
