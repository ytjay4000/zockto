import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { posthog } from '@/lib/posthog';
import VslSectionHeading from './VslSectionHeading';

const faqs = [
  {
    q: 'Do I need video editing skills?',
    a: 'No. You upload your product, pick a concept, and Zockto handles the storyboard, editing, music, captions and transitions.',
  },
  {
    q: 'What do I need to provide to create an ad?',
    a: 'A product image is enough — nothing to write. If you have a product page link, paste it and Zockto will use it to sharpen the concept.',
  },
  {
    q: 'How does Zockto create the video?',
    a: 'Zockto analyses your product, generates storytelling-based ad concepts, builds a storyboard from the concept you choose, then assembles the final video with B-rolls, voiceover, music, captions and transitions.',
  },
  {
    q: 'How long does it take?',
    a: 'Most videos are ready in about 5–10 minutes. Longer or more complex videos can take up to 30 minutes.',
  },
  {
    q: 'Can I create ads in Hindi and other Indian languages?',
    a: 'Yes. Zockto supports 48 languages, including Hindi, Hinglish, English and other regional options.',
  },
  {
    q: 'Can I use Zockto videos for Instagram and Facebook ads?',
    a: 'Yes. Videos are exported ready to upload to Instagram, Facebook, WhatsApp, YouTube Shorts and marketplace listings.',
  },
  {
    q: 'What exactly do I get for ₹299?',
    a: 'A complete, fully edited video ad built from a storytelling concept — including B-rolls, voiceover, music, captions and transitions.',
  },
  {
    q: 'What happens if I don’t like my video?',
    a: 'You can generate a new version with a different concept. Refunds are handled according to our current refund policy, which you can read on the Terms of Service page.',
  },
  {
    q: 'Do I need to buy a monthly plan after the trial?',
    a: 'No. The ₹299 first ad is a starting point. A monthly plan only makes sense if you want to create ads regularly at a lower cost per video.',
  },
  {
    q: 'Can I create multiple versions of the same ad?',
    a: 'Yes. You can generate different concepts and variants of the same product to test which hook performs best.',
  },
];

const VslFaq = () => (
  <section className="py-16 md:py-24">
    <div className="container px-4 max-w-[760px]">
      <VslSectionHeading eyebrow="Questions before you start" headline="Everything You Might Be Wondering." />

      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border/60 rounded-xl px-5 bg-card data-[state=open]:border-primary/30"
            >
              <AccordionTrigger
                onClick={() => posthog.capture('faq_open', { question: f.q })}
                className="text-left font-display font-semibold hover:text-primary transition-colors py-5 text-[15px] md:text-base"
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm md:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default VslFaq;
