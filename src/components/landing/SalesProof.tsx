import { useCallback, useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import "./sales-proof.css";
import TestimonialRow from "./TestimonialRow";
import HowItWorks from "./HowItWorks";

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
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

const noSkills = [
  "No prompting",
  "No script writing",
  "No storyboard writing",
  "No video editing",
  "No camera",
  "No AI experience",
];
export default function SalesProof({
  renderCta,
}: {
  renderCta: (placement: string) => ReactNode;
}) {
  const [activeMedia, setActiveMedia] = useState<string | null>(null);
  const stopMedia = useCallback(
    (id: string) =>
      setActiveMedia((current) => (current === id ? null : current)),
    [],
  );
  useEffect(() => {
    const stop = () => {
      if (document.hidden) setActiveMedia(null);
    };
    document.addEventListener("visibilitychange", stop);
    return () => document.removeEventListener("visibilitychange", stop);
  }, []);
  return (
    <>
      <HowItWorks
        activeMedia={activeMedia}
        onMedia={setActiveMedia}
        onStop={stopMedia}
      />
      <section className="studio-no-skills">
        <div className="studio-container">
          <Reveal className="studio-no-skills-grid">
            <div>
              <h2>
                You Don't Need to Know
                <br />
                How to <em>Use AI.</em>
              </h2>
              <p>
                Zockto does the creative work for you. You only provide the
                product.
              </p>
              {renderCta("benefits_cta_click")}
            </div>
            <ul>
              {noSkills.map((skill) => (
                <li key={skill}>
                  <Check size={17} />
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <TestimonialRow
        activeMedia={activeMedia}
        onMedia={setActiveMedia}
        onStop={stopMedia}
        renderCta={renderCta}
      />
    </>
  );
}
