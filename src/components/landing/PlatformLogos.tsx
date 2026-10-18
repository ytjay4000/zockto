import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import "./platform-logos.css";

const platforms = [
  { name: "Meta", icon: "meta" },
  { name: "Facebook", icon: "facebook" },
  { name: "Instagram", icon: "instagram" },
  { name: "YouTube", icon: "youtube" },
  { name: "Flipkart", icon: "flipkart" },
  { name: "Amazon", icon: "amazon" },
  { name: "Meesho", wordmark: "meesho" },
  { name: "Myntra", wordmark: "Myntra" },
  { name: "Shopify", icon: "shopify" },
  { name: "WhatsApp", icon: "whatsapp" },
];

export default function PlatformLogos() {
  const sectionRef = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    const onVisibilityChange = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="studio-platform-strip"
      aria-label="Platforms for your content"
      data-paused={paused || !inView || !pageVisible}
    >
      <button
        type="button"
        className="studio-platform-toggle"
        onClick={() => setPaused(!paused)}
        aria-label={
          paused ? "Resume platform scrolling" : "Pause platform scrolling"
        }
        aria-pressed={paused}
      >
        {paused ? (
          <Play size={13} aria-hidden="true" />
        ) : (
          <Pause size={13} aria-hidden="true" />
        )}
      </button>
      <div
        className="studio-platform-viewport"
        tabIndex={0}
        role="region"
        aria-label="Platforms for your content"
      >
        <div className="studio-platform-track">
          {[false, true].map((duplicate) => (
            <ul
              className="studio-platform-group"
              key={String(duplicate)}
              aria-hidden={duplicate || undefined}
            >
              {platforms.map((platform) => (
                <li
                  className={
                    "studio-platform-logo studio-platform-logo-" +
                    (platform.icon ?? platform.name.toLowerCase())
                  }
                  key={platform.name}
                >
                  {platform.icon && (
                    <img
                      src={"/platform-logos/" + platform.icon + ".svg"}
                      alt=""
                      width={28}
                      height={28}
                      decoding="async"
                    />
                  )}
                  <span
                    aria-label={platform.wordmark ? platform.name : undefined}
                  >
                    {platform.wordmark ?? platform.name}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
