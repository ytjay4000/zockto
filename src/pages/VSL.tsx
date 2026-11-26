import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import SEO from "@/components/SEO";
import PremiumLanding from "@/components/landing/PremiumLanding";
import { internationalLandingSource } from "@/data/internationalLanding";
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
  const internationalCampaign = sourceParam === internationalLandingSource;
  const source = internationalCampaign ? internationalLandingSource : vv.source;
  const subscription = vv.source === "999" || Boolean(vv.features?.length);
  const offerDescription = subscription
    ? `Plan ${vv.priceLabel}. No auto-pay.`
    : `First ad ${vv.priceLabel}. One-time payment.`;
  const description = "Turn one product photo into a fully edited video ad with script, voiceover, music and captions. No filming or editing skills needed.";

  useEffect(() => {
    posthog.capture("vsl_page_view", { source });
    // Meta Pixel: the homepage IS the VSL / sales page.
    trackMetaEvent("ViewContent", { content_name: "VSL homepage" });
  }, [source]);

  // Generate canonical path
  const canonicalPath = location.pathname;

  return (
    <VslVariantProvider value={vv}>
      <SEO
        title="AI Ads that look Real. | Zockto"
        description={internationalCampaign ? description : `${description} ${offerDescription}`}
        path={canonicalPath}
      />
      <PremiumLanding />
    </VslVariantProvider>
  );
};

export default VSL;
