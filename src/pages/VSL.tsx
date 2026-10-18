import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import SEO from "@/components/SEO";
import PremiumLanding from "@/components/landing/PremiumLanding";
import { posthog } from "@/lib/posthog";
import { trackMetaEvent } from "@/lib/metaPixel";
import {
  VSL_VARIANTS,
  VslVariantProvider,
  VslVariant,
} from "@/context/VslVariant";

export type VslVariantKey = "99" | "199" | "299" | "999";

interface VslProps {
  variant?: VslVariantKey;
}

const VSL = ({ variant = "199" }: VslProps) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const sourceParam = searchParams.get("source");

  // If ?source= matches a valid variant key (e.g. "999"), switch to it; otherwise fall back to the prop
  const activeVariantKey: string =
    sourceParam && VSL_VARIANTS[sourceParam] ? sourceParam : variant;

  const vv: VslVariant = VSL_VARIANTS[activeVariantKey] ?? VSL_VARIANTS["299"];

  useEffect(() => {
    posthog.capture("vsl_page_view", { source: vv.source });
    // Meta Pixel: the homepage IS the VSL / sales page.
    trackMetaEvent("ViewContent", { content_name: "VSL homepage" });
  }, [vv.source]);

  // Generate canonical path
  const canonicalPath = location.pathname;

  return (
    <VslVariantProvider value={vv}>
      <SEO
        title="A product photo. A whole new story. | Zockto"
        description={`No prompting, no script writing, no editing. Upload your product photo and Zockto creates a fully edited video ad with voiceover, music and captions. First ad ${vv.priceLabel}.`}
        path={canonicalPath}
      />
      <PremiumLanding />
    </VslVariantProvider>
  );
};

export default VSL;
