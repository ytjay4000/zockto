import { useEffect, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import AppLink from "@/components/AppLink";
import { useIsMobile } from "@/hooks/use-mobile";

interface StickyMobileCTAProps {
  label?: string;
  trustText?: string;
}

const StickyMobileCTA = ({
  label = "Start Creating",
  trustText = "Trusted by thousands of businesses",
}: StickyMobileCTAProps) => {
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isMobile) return;
    const threshold = Math.min(300, window.innerHeight * 0.25);
    const onScroll = () => {
      if (window.scrollY > threshold) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  if (!isMobile) return null;

  return (
    <div
      aria-hidden={!visible}
      className={`md:hidden fixed left-0 right-0 bottom-0 z-50 pointer-events-none transition-all duration-300 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
      }`}
      style={{ paddingBottom: "max(16px, env(safe-area-inset-bottom))" }}
    >
      <div className="px-4 pointer-events-auto">
        <div className="rounded-full bg-card/95 backdrop-blur-md shadow-card-hover border border-primary/20 p-2 pl-5 flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 text-[11px] text-muted-foreground leading-none mb-1">
              <span className="flex text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </span>
              <span className="truncate text-[9px]">{trustText}</span>
            </div>
            <div className="font-display font-semibold text-sm text-foreground leading-tight truncate">{label}</div>
          </div>
          <AppLink className="shrink-0 inline-flex items-center gap-1 gradient-primary text-primary-foreground font-semibold text-sm px-5 py-3 rounded-full shadow-glow active:scale-95 transition-transform">
            Start
            <ArrowRight className="w-4 h-4" />
          </AppLink>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
