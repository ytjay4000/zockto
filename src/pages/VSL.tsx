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
  const subscription = vv.source === "999" || Boolean(vv.features?.length);

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
        title="Make your product look as good as it is. | Zockto"
        description={`Turn one product photo into a fully edited video ad with script, voiceover, music and captions. No filming or editing skills needed. ${subscription ? `Plan ${vv.priceLabel}. No auto-pay.` : `First ad ${vv.priceLabel}. One-time payment.`}`}
        path={canonicalPath}
      />
      <PremiumLanding />
    </VslVariantProvider>
  );
};

export default VSL;
