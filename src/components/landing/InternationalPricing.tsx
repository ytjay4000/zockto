import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppLink from "@/components/AppLink";
import { internationalCurrency, internationalFeatures, internationalPlans } from "@/data/internationalLanding";
import { posthog } from "@/lib/posthog";
import { trackMetaCustomEvent } from "@/lib/metaPixel";
import { useVslSource } from "@/context/VslVariant";
import "./international-pricing.css";

export default function InternationalPricing() {
  const source = useVslSource();
  return <section id="pricing" className="studio-section studio-pricing">
    <div className="studio-container">
      <div className="studio-international-heading"><h2>Your video ad plan.</h2><p>One-time payment. 30-day validity. No auto-pay.</p></div>
      <div className="studio-international-plans">
        {internationalPlans.map((plan, index) => <article key={plan.id} className={`studio-international-plan${plan.popular ? " is-popular" : ""}`}>
          {plan.popular && <span className="studio-international-popular">Most popular</span>}
          <h3>{plan.name}</h3>
          <div><div className="studio-international-price">${plan.price}<span>/mo</span></div><p className="studio-international-validity">One-time, 30-day validity</p></div>
          <div><p className="studio-international-credits">{plan.credits.toLocaleString("en-US")} credits per month</p><div className="studio-international-unit"><span>${(plan.price / plan.videos).toFixed(2)} per video</span><span>${(plan.price / plan.credits).toFixed(3)} per credit</span></div></div>
          <div className="studio-international-allowances"><h4>WHAT THIS GETS YOU</h4>
            <p>Up to <strong>{plan.videoSeconds.toLocaleString("en-US")}</strong> seconds of video ads</p>
            <p>Up to <strong>{plan.videos}</strong> fully edited video ads</p>
            <p>Up to <strong>{plan.images.toLocaleString("en-US")}</strong> image ads</p>
            <p>Up to <strong>{plan.avatarSeconds.toLocaleString("en-US")}</strong> seconds of AI avatar talking</p>
          </div>
          <ul className="studio-international-features">
            {index > 0 && <li><Check size={15} />Everything in {index === 1 ? "Basic" : "Creator"}</li>}
            {internationalFeatures.map(feature => <li key={feature}><Check size={15} />{feature}</li>)}
            {index === 0 && <li><Check size={15} />Up to 30s per video</li>}
          </ul>
          <Button asChild className="studio-button"><AppLink onClick={() => {
            const properties = { source, currency: internationalCurrency, value: plan.price, plan: plan.id, placement: "international_pricing" };
            posthog.capture("offer_cta_click", properties);
            trackMetaCustomEvent("VSLOfferClick", properties);
          }}>Choose {plan.name.replace(" Plan", "")}</AppLink></Button>
        </article>)}
      </div>
    </div>
  </section>;
}