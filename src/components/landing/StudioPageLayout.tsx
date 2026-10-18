import { type ReactNode } from "react";
import { MotionConfig, motion, useScroll } from "framer-motion";
import { VslVariantProvider } from "@/context/VslVariant";
import { StudioHeader, StudioFooter } from "./StudioChrome";
import "./studio-pages.css";

export default function StudioPageLayout({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { scrollYProgress } = useScroll();
  return (
    <VslVariantProvider>
      <MotionConfig reducedMotion="user">
        <div
          className={"studio-landing studio-secondary " + className}
          id="top"
        >
          <motion.div
            className="studio-scroll-progress"
            style={{ scaleX: scrollYProgress }}
            aria-hidden="true"
          />
          <a className="studio-skip" href="#main-content">
            Skip to content
          </a>
          <StudioHeader />
          <main id="main-content">{children}</main>
          <StudioFooter />
        </div>
      </MotionConfig>
    </VslVariantProvider>
  );
}
