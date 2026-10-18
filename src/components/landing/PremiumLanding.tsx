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

const Brand = () => (
  <a className="studio-brand" href="#top" aria-label="Zockto home">
    <span className="studio-brand-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M6 6h12L8 18h10M6 12h12"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    zockto<span className="studio-brand-dot">®</span>
  </a>
);

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
  const label =
    variant.source === "999"
      ? "Start creating — " + variant.priceLabel
      : "Create my first ad — " + variant.priceLabel;
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
      {children ?? label}
      <ArrowUpRight size={17} aria-hidden="true" />
    </AppLink>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Made with Zockto", "#work"],
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
          <CreateButton placement="header_cta_click">
            Start creating
          </CreateButton>
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
  "Storytelling concept & script",
  "Product visuals & B-roll",
  "Natural AI voiceover",
  "Music, captions & transitions",
  "Fully edited final video",
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
          <p className="studio-eyebrow">
            Everything you need. One clear price.
          </p>
          <h2>
            Your next ad.
            <br />
            <em>Without the overhead.</em>
          </h2>
          <p className="studio-section-copy">
            A complete video ad, with the script, visuals, voiceover, and
            editing taken care of. Know exactly what you’re getting before you
            start.
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
                : "for a fully edited " + variant.seconds + "-second video ad"}
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
      "What do I need to get started?",
      "Just one clear product photo. You can also add your product page link for more context. No studio, camera, or editing software required.",
    ],
    [
      "Will I have to write a script or prompts?",
      "No. Zockto develops the concept, hook, script, and storyboard. Pick a direction you like, and it assembles your video with visuals, voiceover, music, and captions.",
    ],
    [
      "How long does it take?",
      "Most videos are ready in about 5–10 minutes. Longer or more complex videos can take up to 30 minutes.",
    ],
    [
      "Can I create in my own language?",
      "Yes. Choose from 48 languages, including English, Hindi, Hinglish, and other regional options.",
    ],
    [
      subscription
        ? "What’s included in the " + variant.priceLabel + " plan?"
        : "What do I get for " + variant.priceLabel + "?",
      subscription
        ? (variant.creditsLabel ?? "") +
          ". " +
          variant.features?.join(". ") +
          ". " +
          variant.refundNote +
          "."
        : "A complete " +
          variant.seconds +
          "-second storytelling video ad, including product visuals, B-roll, voiceover, music, captions, and transitions.",
    ],
    [
      "Is this a subscription?",
      subscription
        ? "This plan is a one-time payment with 30-day validity and no auto-pay. You choose whether to purchase it again."
        : "No. Your first ad is a one-time payment. There’s no subscription or automatic renewal.",
    ],
    [
      "What if the first ad isn’t right for me?",
      subscription
        ? "You can try another concept. This plan follows the refund terms on our Terms of Service page."
        : "Your first-ad purchase comes with a 7-day money-back guarantee. Contact us within 7 days of purchase to request a refund. You can read the details in our refund policy.",
    ],
    [
      "Where can I use my finished video?",
      "Upload it to Instagram, Facebook, WhatsApp, YouTube Shorts, or your marketplace listings — wherever your customers are.",
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
                <h1>
                  A product photo.
                  <br />A whole <em>new story.</em>
                </h1>
                <p className="studio-hero-description">
                  Upload a product photo. Get a fully edited video ad.
                  <br className="studio-desktop-break" /> Voiceover, music, and
                  captions included.
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
                <dl
                  className="studio-trust-counts"
                  aria-label="Businesses and creatives made with Zockto"
                >
                  <div>
                    <dt>1,000+</dt>
                    <dd>businesses using Zockto</dd>
                  </div>
                  <div>
                    <dt>12,000+</dt>
                    <dd>creatives made</dd>
                  </div>
                </dl>
              </Reveal>
            </div>
            <TrendingStyles />
          </section>
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
                  Now make it
                  <br />
                  <em>your product’s turn.</em>
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
