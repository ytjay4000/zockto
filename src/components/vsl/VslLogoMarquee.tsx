import { useEffect, useRef, useState } from "react";

/**
 * Placeholder client wordmarks.
 * REAL CLIENT LOGOS GO HERE: replace each entry's `name` + `className` with an
 * <img src={...} /> of the client logo (uniform height, grayscale class kept).
 */
const wordmarks: { name: string; className: string }[] = [
  { name: "Jaipur Jewels", className: "font-display tracking-[0.18em] uppercase text-[15px]" },
  { name: "GlowKart Skincare", className: "font-sans font-semibold tracking-tight text-[17px]" },
  { name: "FitFuel Nutrition", className: "font-sans font-black uppercase tracking-tight text-[15px]" },
  { name: "UrbanNest Home", className: "font-display font-medium text-[17px]" },
  { name: "PetPal India", className: "font-sans font-bold text-[17px]" },
  { name: "SareeSaga", className: "font-display italic text-[19px]" },
  { name: "ChaiCraft", className: "font-sans font-semibold tracking-[0.12em] uppercase text-[14px]" },
  { name: "Loom & Weave", className: "font-display tracking-wide text-[17px]" },
];

const VslLogoMarquee = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Pause the animation while the strip is off-screen so it costs nothing.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "100px" });
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const row = (
    <div className="flex shrink-0 items-center gap-10 md:gap-16 pr-10 md:pr-16" aria-hidden="true">
      {wordmarks.map((w) => (
        <span
          key={w.name}
          className={`whitespace-nowrap text-muted-foreground/70 grayscale leading-none ${w.className}`}
        >
          {w.name}
        </span>
      ))}
    </div>
  );

  return (
    <section ref={ref} className="py-8 md:py-10">
      <div className="container px-4 max-w-[1100px]">
        <p className="text-center text-[11px] md:text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-5">
          Trusted by 1,000+ Indian businesses
        </p>
      </div>
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className="flex w-max animate-marquee-x"
          style={{ animationPlayState: inView ? "running" : "paused", willChange: "transform" }}
        >
          {row}
          {row}
        </div>
      </div>
    </section>
  );
};

export default VslLogoMarquee;
