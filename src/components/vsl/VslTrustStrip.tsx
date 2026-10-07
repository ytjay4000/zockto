import { motion } from "framer-motion";

const stats = [
  { value: "1,000+", label: "Businesses using Zockto" },
  { value: "48", label: "Languages supported" },
  { value: "5–10 min", label: "Typical creation time" },
  { value: "2.5x", label: "ROAS Improvement" },
];

const VslTrustStrip = () => (
  <section className="py-8 md:py-10 border-y border-border/60 bg-muted/30">
    <div className="container px-4 max-w-[1100px]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="text-center"
          >
            <div className="font-display text-xl md:text-3xl font-bold text-primary leading-tight">{s.value}</div>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VslTrustStrip;
