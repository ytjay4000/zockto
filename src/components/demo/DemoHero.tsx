import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { demoVideos } from "@/data/demoVideos";
import { StudioCreateButton } from "@/components/landing/StudioChrome";

export default function DemoHero({
  onWatchClick,
}: {
  onWatchClick?: () => void;
}) {
  return (
    <section className="studio-page-hero studio-container">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <p className="studio-eyebrow">Made with Zockto</p>
        <h1>
          See the ads.
          <br />
          <em>Picture your product.</em>
        </h1>
        <p className="studio-page-description">
          Browse fully edited videos across products and styles.
          <br className="studio-desktop-break" /> Play a sample and hear how it
          all comes together.
        </p>
        <div className="studio-page-actions">
          <button
            type="button"
            className="studio-button"
            onClick={onWatchClick}
          >
            Browse the ads <ArrowRight size={16} aria-hidden="true" />
          </button>
          <StudioCreateButton
            placement="demo_hero_cta_click"
            className="studio-button-outline"
          />
        </div>
        <p className="studio-demo-library-note">
          {demoVideos.length} sample ads <span aria-hidden="true">·</span>{" "}
          {new Set(demoVideos.map((video) => video.category)).size} product
          categories
        </p>
      </motion.div>
    </section>
  );
}
