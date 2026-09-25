import { motion } from 'framer-motion';
import { Check, Sparkles, X } from 'lucide-react';
import VslSectionHeading from './VslSectionHeading';
import VslCta from './VslCta';

const traditional = [
  'Find an agency',
  'Explain your product',
  'Write a brief',
  'Coordinate a creator',
  'Shoot',
  'Edit',
  'Revisions',
  'Wait',
  'Pay thousands',
];

const zockto = [
  'Upload your product',
  'AI analyses it',
  'Get ad concepts',
  'Choose a concept',
  'Storyboard',
  'AI production',
  'Finished ad',
];

const rows = [
  { label: 'Starting price', zockto: 'From ₹299 for your first ad', agency: '₹10,000 – ₹15,000+ per video' },
  { label: 'Per-video cost at scale', zockto: '₹100 – ₹150 per video on a plan', agency: '₹2,000+ per video' },
  { label: 'Turnaround', zockto: '5 – 10 minutes', agency: '2 – 4 weeks' },
  { label: 'Iteration', zockto: 'Regenerate and test new variants any time', agency: 'Paid revisions, new invoices' },
  { label: 'Customisation', zockto: 'Multiple concepts per product, A/B variants', agency: 'One approved direction' },
  { label: 'Languages', zockto: '48 languages, including Hindi and Hinglish', agency: 'Usually one language per shoot' },
  { label: 'Production workflow', zockto: 'One product photo in, finished ad out', agency: 'Brief, shoot, edit, approve' },
];

const Column = ({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: 'muted' | 'primary';
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`rounded-2xl border p-5 md:p-6 ${
      tone === 'primary' ? 'border-primary/30 gradient-card' : 'border-border/60 bg-muted/30'
    }`}
  >
    <h3 className={`font-display font-semibold text-base md:text-lg mb-4 ${tone === 'primary' ? 'text-primary' : ''}`}>
      {title}
    </h3>
    <ol className="space-y-2.5">
      {items.map((s, i) => (
        <li key={s} className="flex items-start gap-3 text-sm md:text-[15px]">
          <span
            className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold flex-shrink-0 ${
              tone === 'primary' ? 'bg-primary/15 text-primary' : 'bg-muted text-muted-foreground'
            }`}
          >
            {i + 1}
          </span>
          <span className={tone === 'primary' ? 'text-foreground' : 'text-muted-foreground'}>{s}</span>
        </li>
      ))}
    </ol>
  </motion.div>
);

const VslOldVsNew = () => (
  <section className="py-16 md:py-24 bg-muted/20 border-y border-border/50">
    <div className="container px-4 max-w-[1100px]">
      <VslSectionHeading
        eyebrow="The old way vs the Zockto way"
        headline="From Agency Workflow to AI Ad Production."
        sub="Same goal — a finished video ad. Very different amount of time, money and coordination."
      />

      <div className="grid md:grid-cols-2 gap-5">
        <Column title="Traditional production" items={traditional} tone="muted" />
        <Column title="With Zockto" items={zockto} tone="primary" />
      </div>

      <div className="mt-14 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-[680px] mx-auto mb-8"
        >
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            The honest math
          </p>
          <h3 className="font-display text-xl md:text-3xl font-bold tracking-tight">
            Why Pay ₹10,000+ Every Time You Need a New Ad?
          </h3>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:block rounded-2xl border border-border/60 overflow-hidden shadow-card bg-card"
        >
          <div className="grid grid-cols-[1fr_1.3fr_1.3fr] text-sm font-semibold bg-muted/60">
            <div className="px-6 py-4">What you compare</div>
            <div className="px-6 py-4 flex items-center gap-2 text-primary">
              <Sparkles className="w-4 h-4" /> Zockto
            </div>
            <div className="px-6 py-4 text-muted-foreground">Traditional production</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-[1fr_1.3fr_1.3fr] text-sm border-t border-border/50 ${
                i % 2 === 0 ? 'bg-background' : 'bg-muted/20'
              }`}
            >
              <div className="px-6 py-4 font-medium">{r.label}</div>
              <div className="px-6 py-4 flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{r.zockto}</span>
              </div>
              <div className="px-6 py-4 flex items-start gap-2 text-muted-foreground">
                <X className="w-4 h-4 text-destructive/60 mt-0.5 flex-shrink-0" />
                <span>{r.agency}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-3">
          {rows.map((r) => (
            <div key={r.label} className="rounded-2xl border border-border/60 bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{r.label}</p>
              <div className="flex items-start gap-2 mb-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  <span className="font-semibold text-primary">Zockto: </span>
                  {r.zockto}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <X className="w-4 h-4 text-destructive/60 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Traditional: </span>
                  {r.agency}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <VslCta event="primary_cta_click" className="w-full sm:w-auto min-h-[52px]" />
        </div>

      </div>
    </div>
  </section>
);

export default VslOldVsNew;
