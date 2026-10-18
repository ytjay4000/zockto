import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  Play,
  Plus,
  ShieldCheck,
  X,
} from "lucide-react";
import AppLink from "@/components/AppLink";
import { useVslVariant } from "@/context/VslVariant";
import { posthog } from "@/lib/posthog";
import { trackMetaCustomEvent } from "@/lib/metaPixel";
import "./premium-landing.css";
import TrendingStyles from "./TrendingStyles";
import SalesProof from "./SalesProof";
import PlatformLogos from "./PlatformLogos";

const Brand = () => (
  <a
    className="studio-brand studio-brand-original"
    href="#top"
    aria-label="Zockto home"
  >
    Zockto
  </a>
);

const SUPPORT_WHATSAPP_URL = "https://wa.me/917610336917";

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CreateButton({
  children,
  placement,
  className = "",
}: {
  children?: ReactNode;
  placement: string;
  className?: string;
}) {
  const variant = useVslVariant();
  return (
    <AppLink
      className={"studio-button " + className}
      onClick={() => {
        posthog.capture(placement, {
          price_inr: variant.price,
          source: variant.source,
        });
        trackMetaCustomEvent("VSLOfferClick", {
          price_inr: variant.price,
          source: variant.source,
          placement,
        });
      }}
    >
      {children ?? "Get started"}
      <ArrowUpRight size={17} aria-hidden="true" />
    </AppLink>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["See example ads", "#work"],
    ["How it works", "#process"],
    ["Customer stories", "#stories"],
    ["Pricing", "#pricing"],
  ];
  return (
    <header className="studio-header">
      <div className="studio-container studio-header-inner">
        <Brand />
        <nav className="studio-desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="studio-header-actions">
          <CreateButton placement="header_cta_click">Get started</CreateButton>
          <button
            className="studio-menu-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="studio-mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="studio-mobile-nav"
          className="studio-mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={18} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

const includes = [
  "Ad idea & script",
  "Product scenes & supporting visuals",
  "Natural AI voiceover",
  "Music, captions & transitions",
  "Fully edited video ad",
  "Ready for your social channels",
];

function Offer() {
  const variant = useVslVariant();
  const subscription =
    variant.source === "999" || Boolean(variant.features?.length);
  return (
    <section id="pricing" className="studio-section studio-pricing">
      <div className="studio-container studio-pricing-grid">
        <Reveal>
          <p className="studio-eyebrow">Everything included</p>
          <h2>
            {subscription ? "Your video ad plan." : "Your first video ad."}
            <br />
            <em>One clear price.</em>
          </h2>
          <p className="studio-section-copy">
            {subscription
              ? "Choose the plan that fits your business. See what’s included, how long it lasts, and what it costs before you start."
              : "One product photo is your starting point. Your ad includes the script, visuals, voiceover, music, captions and editing."}
          </p>
          <div className="studio-risk-details">
            <h3>
              <ShieldCheck size={23} />
              {subscription
                ? "You’re in control."
                : "Try your first ad with confidence."}
            </h3>
            <p>
              {subscription
                ? variant.refundNote +
                  ". Choose your plan without automatic renewal."
                : "Your first-ad purchase is covered by a 7-day money-back guarantee. If it’s not right for you, contact us within 7 days of purchase."}
            </p>
            <Link to="/terms-of-service#refund-policy">
              Read the refund policy <ArrowUpRight size={13} />
            </Link>
          </div>
          <a
            className="studio-pricing-support"
            href={SUPPORT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => posthog.capture("pricing_whatsapp_click")}
          >
            Questions? Chat on WhatsApp{" "}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className="studio-price-card">
          <div className="studio-price-top">
            <span>
              {subscription ? "Your creative toolkit" : "Your first video ad"}
            </span>
            <span className="studio-small-tag">
              {subscription ? "30-day access" : "One-time payment"}
            </span>
          </div>
          <div className="studio-price-value">
            {variant.priceLabel}
            <span>
              {subscription
                ? "start creating more"
                : "for a fully edited video ad"}
            </span>
          </div>
          {variant.creditsLabel && (
            <p className="studio-credit-note">
              {variant.creditsLabel} · {variant.unitCostNote}
            </p>
          )}
          <ul>
            {(variant.features ?? includes).map((feature) => (
              <li key={feature}>
                <Check size={16} />
                {feature}
              </li>
            ))}
          </ul>
          <CreateButton placement="offer_cta_click" />
          <p className="studio-price-footnote">{variant.refundNote}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Questions() {
  const variant = useVslVariant();
  const subscription =
    variant.source === "999" || Boolean(variant.features?.length);
  const questions = [
    [
      "Will the video actually look like my product?",
      "Zockto uses your product photo as a reference—watch the photo-to-ad example above to see a finished result. AI can change details such as labels, packaging or colours, so review your own ad before posting.",
    ],
    [
      subscription
        ? "What’s included in the " + variant.priceLabel + " plan?"
        : "What exactly do I get for " + variant.priceLabel + "?",
      subscription
        ? (variant.creditsLabel ?? "") +
          ". " +
          variant.features?.join(". ") +
          ". " +
          variant.refundNote +
          "."
        : "One fully edited video ad, including the script, product scenes, supporting visuals, voiceover, music, captions and transitions.",
    ],
    [
      "Will I be charged again automatically?",
      subscription
        ? "No. This plan is a one-time payment with 30-day validity and no auto-pay. You choose whether to purchase it again."
        : "No. Your first ad is a one-time payment. There’s no subscription or automatic renewal.",
    ],
    [
      subscription
        ? "What if this plan isn’t right for me?"
        : "What if I don’t like my first ad?",
      subscription
        ? "This plan follows the refund terms on our Terms of Service page. The first-ad 7-day money-back guarantee does not apply to this plan unless your checkout offer expressly includes it."
        : "Your first-ad purchase comes with a 7-day money-back guarantee. Contact us within 7 days of purchase and include your purchase details to request a refund. See our refund policy for the full terms.",
    ],
    [
      "What do I need to get started?",
      "Just one clear product photo. You can also add your product page link for more context. No studio, camera, or editing software required.",
    ],
    [
      "Will I have to write a script or prompts?",
      "No. Zockto comes up with the ad idea, writes the script and plans the scenes. You choose a style, and it puts the video together with visuals, voiceover, music and captions.",
    ],
    [
      "How long does it take?",
      "Most videos are ready in about 5–10 minutes. Longer or more complex videos can take up to 30 minutes.",
    ],
    [
      "Can I create in my own language?",
      "Yes. Hindi, Hinglish and English are included, alongside other supported languages.",
    ],
    [
      "Where can I use my finished video?",
      "Use it on Instagram, Facebook, WhatsApp or YouTube Shorts. Marketplace listings and paid ads have their own content rules, so check the requirements before uploading.",
    ],
    [
      "Will this guarantee more orders?",
      "No. Zockto helps you create the video ad; sales also depend on your product, price, offer, audience and how you run your campaign. Ad creation does not include running or managing your paid ads.",
    ],
  ];
  return (
    <section id="questions" className="studio-section studio-faq">
      <div className="studio-container studio-faq-grid">
        <Reveal>
          <p className="studio-eyebrow">Before your first ad</p>
          <h2>
            Good questions.
            <br />
            <em>Clear answers.</em>
          </h2>
          <p className="studio-section-copy">
            Still have a question?{" "}
            <Link to="/contact">
              Talk to us <ArrowUpRight size={14} />
            </Link>
          </p>
        </Reveal>
        <Reveal className="studio-questions">
          {questions.map(([question, answer]) => (
            <details
              key={question}
              onToggle={(event) => {
                if (event.currentTarget.open)
                  posthog.capture("faq_open", { question });
              }}
            >
              <summary>
                {question}
                <Plus size={18} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default function PremiumLanding() {
  const { scrollYProgress } = useScroll();
  const variant = useVslVariant();
  return (
    <MotionConfig reducedMotion="user">
      <div className="studio-landing studio-sales" id="top">
        <motion.div
          className="studio-scroll-progress"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
        <a className="studio-skip" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          <section className="studio-hero">
            <div className="studio-container">
              <Reveal className="studio-hero-copy">
                <dl
                  className="studio-trust-counts"
                  aria-label="Businesses and creatives made with Zockto"
                >
                  <div>
                    <dt>1,000+</dt>
                    <dd>businesses</dd>
                  </div>
                  <div>
                    <dt>12,000+</dt>
                    <dd>creatives made</dd>
                  </div>
                </dl>
                <h1>
                  AI Ads that
                  <br />
                  look <em>Real.</em>
                </h1>
                <p className="studio-hero-description">
                  Turn one product photo into a fully edited video ad.
                  <br className="studio-desktop-break" /> Script, voiceover,
                  music and captions included—no filming or editing skills
                  needed.
                </p>
                <div className="studio-hero-actions">
                  <CreateButton placement="primary_cta_click" />
                  <a className="studio-text-button" href="#process">
                    <span className="studio-mini-play">
                      <Play size={11} fill="currentColor" />
                    </span>
                    See how it works
                    <ArrowRight size={14} />
                  </a>
                </div>
                <p className="studio-hero-note">{variant.refundNote}</p>
              </Reveal>
            </div>
            <TrendingStyles />
          </section>
          <PlatformLogos />
          <SalesProof
            renderCta={(placement) => <CreateButton placement={placement} />}
          />
          <Offer />
          <Questions />
          <section className="studio-final">
            <div className="studio-container">
              <Reveal>
                <p className="studio-eyebrow">You’ve seen what’s possible.</p>
                <h2>
                  Now picture
                  <br />
                  <em>your product here.</em>
                </h2>
                <CreateButton placement="final_cta_click" />
                <p>{variant.refundNote}</p>
              </Reveal>
              <a
                href="#top"
                className="studio-back-top"
                aria-label="Back to top"
              >
                <ArrowUpRight size={21} />
              </a>
            </div>
          </section>
        </main>
        <footer className="studio-footer">
          <div className="studio-container">
            <div className="studio-footer-top">
              <Brand />
              <p>Small input. Standout stories.</p>
              <Link to="/contact" className="studio-footer-contact">
                Let’s talk <ArrowUpRight size={15} />
              </Link>
            </div>
            <div className="studio-footer-bottom">
              <span>© {new Date().getFullYear()} Zockto</span>
              <nav aria-label="Footer navigation">
                <Link to="/demo">Demos</Link>
                <Link to="/blog">Journal</Link>
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms-of-service">Terms & refunds</Link>
                <Link to="/contact">Contact</Link>
              </nav>
              <span>Made for your next big thing.</span>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
