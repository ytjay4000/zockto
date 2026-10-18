import { useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Film,
  Menu,
  Play,
  Plus,
  Volume2,
  X,
} from "lucide-react";
import AppLink from "@/components/AppLink";
import { useVslVariant } from "@/context/VslVariant";
import { demoVideos, type DemoVideo } from "@/data/demoVideos";
import { posthog } from "@/lib/posthog";
import { trackMetaCustomEvent } from "@/lib/metaPixel";
import TrendingStyles from "./TrendingStyles";
import "./premium-landing.css";

const getDemo = (id: number) => demoVideos.find((video) => video.id === id)!;
const featuredDemos = [187, 140, 172, 186, 181, 164].map(getDemo);
const filters = ["All work", "Beauty", "Lifestyle", "Food & drink"] as const;
type Filter = (typeof filters)[number];

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
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CreateButton({
  children = "Create your first ad",
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
      className={`studio-button ${className}`}
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
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </AppLink>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="studio-header">
      <div className="studio-container studio-header-inner">
        <Brand />
        <nav className="studio-desktop-nav" aria-label="Main navigation">
          <a href="#work">Made with Zockto</a>
          <a href="#process">How it works</a>
          <a href="#pricing">Pricing</a>
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
          {[
            ["Made with Zockto", "#work"],
            ["How it works", "#process"],
            ["Pricing", "#pricing"],
            ["Questions", "#questions"],
          ].map(([label, href]) => (
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

function VideoButton({
  video,
  className = "",
  priority = false,
  onSelect,
}: {
  video: DemoVideo;
  className?: string;
  priority?: boolean;
  onSelect: (video: DemoVideo, trigger: HTMLButtonElement) => void;
}) {
  return (
    <button
      className={`studio-video ${className}`}
      onClick={(event) => onSelect(video, event.currentTarget)}
      aria-label={`Play ${video.category} ad in ${video.language}`}
      aria-haspopup="dialog"
    >
      <img
        src={`/demo-posters/${video.id}.jpg`}
        alt={`${video.category} video made with Zockto`}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        width="360"
        height="628"
      />
      <span className="studio-video-shade" />
      <span className="studio-video-top">
        <span>MADE WITH ZOCKTO</span>
        <ArrowUpRight size={16} />
      </span>
      <span className="studio-video-bottom">
        <span>
          <span className="studio-video-label">{video.category}</span>
          <span className="studio-video-meta">
            {video.language} · {video.duration}s
          </span>
        </span>
        <span className="studio-play">
          <Play size={15} fill="currentColor" />
        </span>
      </span>
    </button>
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
            SMALL INVESTMENT. BIG CREATIVE ENERGY.
          </p>
          <h2>
            Your next ad.
            <br />
            <em>Without the overhead.</em>
          </h2>
          <p className="studio-section-copy">
            Skip the production crew. Keep the creative quality. Start with your
            product and see what’s possible.
          </p>
          <div className="studio-price-assurance">
            <span className="studio-assurance-icon">
              <Check size={18} />
            </span>
            <p>{variant.refundNote}</p>
          </div>
        </Reveal>
        <Reveal className="studio-price-card" delay={0.12}>
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
                : `for a ${variant.seconds}-second story`}
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
          <CreateButton placement="offer_cta_click">
            {subscription ? "Start creating" : "Make it yours"}
          </CreateButton>
          <p className="studio-price-footnote">
            {subscription
              ? variant.refundNote
              : "Preview your ad before you pay."}
          </p>
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
      "Just one clear product photo. Have a product page? You can add the link to give Zockto more context. No studio, camera, or editing software required.",
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
        ? `What’s included in the ${variant.priceLabel} plan?`
        : `What do I get for ${variant.priceLabel}?`,
      subscription
        ? `${variant.creditsLabel}. ${variant.features?.join(". ")}. ${variant.refundNote}.`
        : `A complete ${variant.seconds}-second storytelling video ad with product visuals, B-roll, voiceover, music, captions, and transitions. It’s a one-time payment, with no automatic subscription.`,
    ],
    [
      "Where can I use my finished video?",
      "Upload your finished video to Instagram, Facebook, WhatsApp, YouTube Shorts, or your marketplace listings. Your creative is ready to take wherever your customers are.",
    ],
    [
      "What if I want a different result?",
      "You can generate another version with a different concept. Refunds follow our current refund policy, available on the Terms of Service page.",
    ],
  ];
  return (
    <section id="questions" className="studio-section studio-faq">
      <div className="studio-container studio-faq-grid">
        <Reveal>
          <p className="studio-eyebrow">A FEW GOOD QUESTIONS</p>
          <h2>
            Curious?
            <br />
            <em>Good.</em>
          </h2>
          <p className="studio-section-copy">
            Here’s what you might be wondering.
            <br />
            Still have a question?{" "}
            <Link to="/contact">
              Let’s talk <ArrowUpRight size={14} />
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

function PremiumLanding() {
  const [activeVideo, setActiveVideo] = useState<DemoVideo | null>(null);
  const [videoError, setVideoError] = useState(false);
  const [videoAttempt, setVideoAttempt] = useState(0);
  const videoTrigger = useRef<HTMLButtonElement | null>(null);
  const [filter, setFilter] = useState<Filter>("All work");
  const [style, setStyle] = useState(0);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const variant = useVslVariant();
  const styles = ["Creator-led", "Product story", "Everyday moments"];
  const styleDemos = [140, 139, 187].map(getDemo);
  const shown = featuredDemos.filter(
    (video) =>
      filter === "All work" ||
      (filter === "Beauty"
        ? ["Skincare", "Beauty & Personal Care", "Haircare"].includes(
            video.category,
          )
        : filter === "Food & drink"
          ? video.category === "Food & Beverage"
          : !["Skincare", "Beauty & Personal Care", "Food & Beverage"].includes(
              video.category,
            )),
  );
  const selectVideo = (video: DemoVideo, trigger: HTMLButtonElement) => {
    videoTrigger.current = trigger;
    setVideoError(false);
    setVideoAttempt(0);
    setActiveVideo(video);
    posthog.capture("demo_video_play", {
      video: `d${video.id}`,
      placement: "landing_showcase",
    });
  };

  return (
    <MotionConfig reducedMotion="user">
      <Dialog.Root
        open={Boolean(activeVideo)}
        onOpenChange={(open) => {
          if (!open) setActiveVideo(null);
        }}
      >
        <div className="studio-landing" id="top">
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
                  <p className="studio-hero-eyebrow">
                    <span className="studio-status-dot" /> YOUR NEXT GREAT AD
                    STARTS HERE <ArrowUpRight size={13} />
                  </p>
                  <h1>
                    A product photo.
                    <br />A whole <em>new story.</em>
                  </h1>
                  <p className="studio-hero-description">
                    Turn what you sell into something worth watching.
                    <br className="studio-desktop-break" /> AI video ads. A
                    little input. A lot of possibility.
                  </p>
                  <div className="studio-hero-actions">
                    <CreateButton placement="primary_cta_click">
                      {variant.source === "999"
                        ? "Start creating"
                        : "Create your first ad"}
                    </CreateButton>
                    <a className="studio-text-button" href="#work">
                      <span className="studio-mini-play">
                        <Play size={11} fill="currentColor" />
                      </span>
                      See what’s possible
                      <ArrowDown size={14} />
                    </a>
                  </div>
                  <p className="studio-hero-note">{variant.refundNote}</p>
                </Reveal>
              </div>
              <TrendingStyles />
              <div className="studio-container studio-hero-end">
                <p>
                  REAL PRODUCTS. <span>AI-MADE POSSIBILITIES.</span>
                </p>
                <a href="#process">
                  MEET YOUR NEW CREATIVE PROCESS <ArrowDown size={14} />
                </a>
              </div>
            </section>

            <div className="studio-platforms studio-container">
              <p>One video. Wherever your audience is.</p>
              <div>
                <span>Instagram</span>
                <span className="studio-platform-meta">Meta</span>
                <span>YouTube Shorts</span>
                <span className="studio-platform-shopify">Shopify</span>
              </div>
            </div>

            <section id="work" className="studio-section studio-work">
              <div className="studio-container">
                <Reveal className="studio-section-heading">
                  <div>
                    <p className="studio-eyebrow">THE WORK SPEAKS FOR ITSELF</p>
                    <h2>
                      Less imagining.
                      <br />
                      <em>More “that’s my ad.”</em>
                    </h2>
                  </div>
                  <p className="studio-section-copy">
                    From skincare to the everyday essentials.
                    <br />
                    Real examples. Made with Zockto.
                  </p>
                </Reveal>
                <div className="studio-work-toolbar">
                  <div
                    className="studio-filters"
                    role="group"
                    aria-label="Filter video examples"
                  >
                    {filters.map((item) => (
                      <button
                        key={item}
                        className={filter === item ? "is-active" : ""}
                        aria-pressed={filter === item}
                        onClick={() => setFilter(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  <Link className="studio-all-work" to="/demo">
                    Explore all demos <ArrowUpRight size={15} />
                  </Link>
                </div>
                <div className="studio-work-grid" aria-live="polite">
                  {shown.map((video, index) => (
                    <Reveal key={video.id} delay={reduced ? 0 : index * 0.04}>
                      <VideoButton video={video} onSelect={selectVideo} />
                    </Reveal>
                  ))}
                </div>
                <p className="studio-work-note">
                  <Film size={14} /> Every video started with a product. Yours
                  could be next.
                </p>
              </div>
            </section>

            <section id="process" className="studio-section studio-process">
              <div className="studio-container">
                <Reveal className="studio-section-heading">
                  <div>
                    <p className="studio-eyebrow">FROM PRODUCT TO PLAY</p>
                    <h2>
                      You bring the product.
                      <br />
                      <em>We bring it to life.</em>
                    </h2>
                  </div>
                  <p className="studio-section-copy">
                    No creative block. No complicated timeline.
                    <br />
                    Just three steps between you and your next ad.
                  </p>
                </Reveal>
                <ol className="studio-process-grid">
                  <li>
                    <Reveal>
                      <div className="studio-process-visual studio-upload">
                        <div className="studio-upload-frame">
                          <img
                            src="/demo-posters/139.jpg"
                            alt="Skincare product photographed for an ad"
                            loading="lazy"
                            width="360"
                            height="628"
                          />
                          <span>
                            <Check size={13} /> Product added
                          </span>
                        </div>
                        <span className="studio-upload-file">
                          your-next-bestseller.jpg <Check size={14} />
                        </span>
                      </div>
                      <div className="studio-step-heading">
                        <span>01</span>
                        <h3>Drop in your product.</h3>
                      </div>
                      <p>
                        A photo or a product link. That’s your part of the
                        production done.
                      </p>
                    </Reveal>
                  </li>
                  <li>
                    <Reveal delay={0.08}>
                      <div className="studio-process-visual studio-directions">
                        <span className="studio-micro-label">
                          FIND YOUR DIRECTION
                        </span>
                        {styles.map((label, index) => (
                          <button
                            key={label}
                            className={style === index ? "is-selected" : ""}
                            onClick={() => setStyle(index)}
                            aria-pressed={style === index}
                          >
                            <span className="studio-style-icon">
                              {index === 0 ? (
                                <Volume2 size={17} />
                              ) : index === 1 ? (
                                <Film size={17} />
                              ) : (
                                <Play size={17} />
                              )}
                            </span>
                            <span>{label}</span>
                            <span className="studio-radio">
                              {style === index && <span />}
                            </span>
                          </button>
                        ))}
                        <p>Go on. Try a different direction.</p>
                      </div>
                      <div className="studio-step-heading">
                        <span>02</span>
                        <h3>Make it your kind of story.</h3>
                      </div>
                      <p>
                        Choose a creative direction. We handle the script,
                        scenes, and voice.
                      </p>
                    </Reveal>
                  </li>
                  <li>
                    <Reveal delay={0.16}>
                      <div className="studio-process-visual studio-finished">
                        <VideoButton
                          video={styleDemos[style]}
                          onSelect={selectVideo}
                        />
                        <span className="studio-finished-badge">
                          <Check size={13} /> Ready for its close-up
                        </span>
                      </div>
                      <div className="studio-step-heading">
                        <span>03</span>
                        <h3>Meet your finished ad.</h3>
                      </div>
                      <p>
                        Music, captions, the finishing touches. All in. All
                        ready to share.
                      </p>
                    </Reveal>
                  </li>
                </ol>
              </div>
            </section>

            <section className="studio-manifesto">
              <div className="studio-container">
                <Reveal>
                  <p className="studio-eyebrow">
                    MORE CREATIVE FREEDOM. LESS PRODUCTION.
                  </p>
                  <h2>
                    Your brand deserves
                    <br />a <em>“wait, watch this”</em> moment.
                  </h2>
                  <p>
                    You don’t need a bigger team to tell a better story.
                    <br />
                    Just a product you believe in. We’ll take it from there.
                  </p>
                  <CreateButton placement="benefits_cta_click">
                    Let’s make something
                  </CreateButton>
                  <div className="studio-manifesto-details">
                    <span>
                      <Check size={14} /> 48 languages
                    </span>
                    <span>
                      <Check size={14} /> Fully edited
                    </span>
                    <span>
                      <Check size={14} /> Your product, your story
                    </span>
                  </div>
                </Reveal>
                <span className="studio-manifesto-mark" aria-hidden="true">
                  z.
                </span>
              </div>
            </section>

            <section className="studio-section studio-testimonials">
              <div className="studio-container">
                <Reveal className="studio-section-heading">
                  <div>
                    <p className="studio-eyebrow">GOOD COMPANY TO BE IN</p>
                    <h2>
                      Less time making.
                      <br />
                      <em>More time growing.</em>
                    </h2>
                  </div>
                  <p className="studio-section-copy">
                    A few words from the people
                    <br />
                    putting their products out there.
                  </p>
                </Reveal>
                <div className="studio-quotes">
                  {[
                    {
                      quote:
                        "As a performance marketer, creative testing is the bottleneck. Zockto gives me 10+ ad variations in the time it used to take to brief one. Winning creatives now show up in days, not weeks.",
                      name: "Sriniwasa",
                      role: "Performance Marketer",
                      initial: "S",
                    },
                    {
                      quote:
                        "I sell on multiple marketplaces and never had time to make videos. With Zockto I just paste the product URL and get a polished ad ready to post. My listings finally look like the big brands.",
                      name: "Khushi",
                      role: "E-commerce Seller",
                      initial: "K",
                    },
                  ].map((person, index) => (
                    <Reveal key={person.name} delay={index * 0.1}>
                      <figure>
                        <span className="studio-quote-mark" aria-hidden="true">
                          “
                        </span>
                        <blockquote>{person.quote}</blockquote>
                        <figcaption>
                          <span className="studio-avatar">
                            {person.initial}
                          </span>
                          <span>
                            <strong>{person.name}</strong>
                            <small>{person.role}</small>
                          </span>
                        </figcaption>
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
            <Offer />
            <Questions />
            <section className="studio-final">
              <div className="studio-container">
                <Reveal>
                  <p className="studio-eyebrow">
                    THAT PRODUCT IN YOUR CAMERA ROLL?
                  </p>
                  <h2>
                    It has a story.
                    <br />
                    <em>Let’s tell it.</em>
                  </h2>
                  <CreateButton placement="final_cta_click">
                    {variant.source === "999"
                      ? "Start creating"
                      : "Create your first ad"}
                  </CreateButton>
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
        <Dialog.Portal>
          <Dialog.Overlay className="studio-dialog-overlay" />
          <Dialog.Content
            className="studio-dialog"
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              videoTrigger.current?.focus({ preventScroll: true });
            }}
          >
            <Dialog.Title className="studio-dialog-title">
              {activeVideo?.category} · Made with Zockto
            </Dialog.Title>
            <Dialog.Description className="studio-dialog-description">
              {activeVideo?.language} video ad. Use the player controls to watch
              this example.
            </Dialog.Description>
            <Dialog.Close
              className="studio-dialog-close"
              aria-label="Close video"
            >
              <X size={20} />
            </Dialog.Close>
            {activeVideo && (
              <video
                key={`${activeVideo.id}-${videoAttempt}`}
                src={activeVideo.link}
                poster={`/demo-posters/${activeVideo.id}.jpg`}
                controls
                autoPlay
                playsInline
                onError={() => setVideoError(true)}
                className="studio-dialog-video"
              />
            )}
            {videoError && (
              <div className="studio-video-error" role="status">
                <p>This video couldn’t load. Give it another try.</p>
                <button
                  onClick={() => {
                    setVideoError(false);
                    setVideoAttempt(videoAttempt + 1);
                  }}
                >
                  Try again <ArrowRight size={13} />
                </button>
              </div>
            )}
            <CreateButton placement="demo_modal_cta_click">
              Create an ad like this
            </CreateButton>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </MotionConfig>
  );
}

export default PremiumLanding;
