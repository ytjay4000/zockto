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
    q: 'Do I need any AI or video editing skills?',
    a: 'No. There is nothing to prompt, write or edit. You upload a product photo, tap the concept you like, and Zockto creates the finished video.',
  },
  {
    q: 'What do I need to provide?',
    a: 'A product image is enough. If you have a product page link, paste it and Zockto will use it to sharpen the concept.',
  },
  {
    q: 'Does Zockto create the script and storyboard?',
    a: 'Yes. Zockto finds the ad angle, writes the hook and script, builds the storyboard, and assembles the final video for you.',
  },
  {
    q: 'Can I make ads in Hindi/Hinglish and other Indian languages?',
    a: 'Yes. Zockto supports 48 languages, including Hindi, Hinglish, English and other regional options.',
  },
  {
    q: 'How long does the video take?',
    a: 'Most videos are ready in about 5–10 minutes. Longer or more complex videos can take up to 30 minutes.',
  },
  {
    q: 'Can I use the video for Instagram/Facebook ads?',
    a: 'Yes. Videos are exported ready to upload to Instagram, Facebook, WhatsApp, YouTube Shorts and marketplace listings.',
  },
  {
    q: 'What exactly do I get for ₹299?',
    a: 'A complete, fully edited 30-second video ad built from a storytelling concept — including B-rolls, voiceover, music, captions and transitions.',
  },
  {
    q: 'What happens if I don’t like the video?',
    a: 'You can generate a new version with a different concept. Refunds are handled according to our current refund policy, which you can read on the Terms of Service page.',
  },
  {
    q: 'Do I need a monthly subscription?',
    a: 'No. The ₹299 first ad is a one-time payment with no auto-pay. A monthly plan only makes sense if you want to create ads regularly at a lower cost per video.',
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
