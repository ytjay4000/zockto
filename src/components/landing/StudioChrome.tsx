import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import AppLink from "@/components/AppLink";
import { useVslVariant } from "@/context/VslVariant";
import { posthog } from "@/lib/posthog";
import { trackMetaCustomEvent } from "@/lib/metaPixel";
import "./premium-landing.css";

function pagePath(path: string, source: string) {
  return source === "199"
    ? path
    : path + "?source=" + encodeURIComponent(source);
}

export function StudioBrand() {
  const { source } = useVslVariant();
  return (
    <Link
      className="studio-brand studio-brand-original"
      to={pagePath("/", source)}
      aria-label="Zockto home"
    >
      Zockto
    </Link>
  );
}

export function StudioCreateButton({
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

export function StudioHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const reduced = useReducedMotion();
  const { source } = useVslVariant();
  const homePath = pagePath("/", source);
  const home =
    location.pathname === "/" || location.pathname.startsWith("/vsl");
  const links = [
    ["See example ads", home ? "#work" : homePath + "#work"],
    ["How it works", home ? "#process" : homePath + "#process"],
    ["Customer stories", home ? "#stories" : homePath + "#stories"],
    ["Pricing", home ? "#pricing" : homePath + "#pricing"],
    ["Demo", pagePath("/demo", source)],
    ["Contact", pagePath("/contact", source)],
  ];

  useEffect(() => {
    if (!location.hash) {
      const frame = requestAnimationFrame(() =>
        window.scrollTo({ top: 0, behavior: "instant" }),
      );
      return () => cancelAnimationFrame(frame);
    }
    let frame = 0;
    const target = document.getElementById(location.hash.slice(1));
    const scrollToTarget = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        target?.scrollIntoView({ behavior: reduced ? "instant" : "smooth" }),
      );
    };
    // The homepage feed loads asynchronously. Keep the anchor aligned as the
    // loading skeleton changes height, but stop as soon as the visitor interacts.
    const observer = new ResizeObserver(scrollToTarget);
    const main = document.getElementById("main-content");
    if (main) observer.observe(main);
    const events = ["wheel", "touchstart", "pointerdown", "keydown"] as const;
    const stop = () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.clearTimeout(timeout);
      events.forEach((event) => window.removeEventListener(event, stop));
    };
    events.forEach((event) =>
      window.addEventListener(event, stop, { passive: true }),
    );
    const timeout = window.setTimeout(stop, 8000);
    scrollToTarget();
    return stop;
  }, [location.key, location.hash, reduced]);

  return (
    <header className="studio-header">
      <div className="studio-container studio-header-inner">
        <StudioBrand />
        <nav className="studio-desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link
              key={label}
              to={href}
              aria-current={
                href.split("?")[0] === location.pathname ? "page" : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="studio-header-actions">
          <StudioCreateButton placement="header_cta_click" />
          <button
            ref={toggle}
            type="button"
            className="studio-menu-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="studio-mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="studio-mobile-nav"
          className="studio-mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              toggle.current?.focus();
            }
          }}
        >
          {links.map(([label, href]) => (
            <Link
              key={label}
              to={href}
              aria-current={
                href.split("?")[0] === location.pathname ? "page" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function StudioFooter() {
  const { source } = useVslVariant();
  return (
    <footer className="studio-footer">
      <div className="studio-container">
        <div className="studio-footer-top">
          <StudioBrand />
          <p>Small input. Standout stories.</p>
          <Link
            to={pagePath("/contact", source)}
            className="studio-footer-contact"
          >
            Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <div className="studio-footer-bottom">
          <span>© {new Date().getFullYear()} Zockto</span>
          <nav aria-label="Footer navigation">
            <Link to={pagePath("/demo", source)}>Demos</Link>
            <Link to="/blog">Journal</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms-of-service">Terms & refunds</Link>
            <Link to={pagePath("/contact", source)}>Contact</Link>
          </nav>
          <span>Made for your next big thing.</span>
        </div>
      </div>
    </footer>
  );
}
