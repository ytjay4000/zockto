import { Check, LockKeyhole, Zap } from "lucide-react";
import AppLink from "@/components/AppLink";
import { useVslSource } from "@/context/VslVariant";
import {
  internationalCurrency,
  internationalFeatures,
  internationalPlans,
} from "@/data/internationalLanding";
import { trackMetaCustomEvent } from "@/lib/metaPixel";
import { posthog } from "@/lib/posthog";
import "./international-pricing.css";

export default function InternationalPricing() {
  const source = useVslSource();

  return (
    <section
      id="pricing"
      className="studio-section studio-pricing studio-international-pricing"
      aria-labelledby="international-pricing-title"
    >
      <div className="studio-container">
        <h2 id="international-pricing-title" className="studio-international-heading">
          Choose your plan
        </h2>

        <div className="studio-international-billing" role="group" aria-label="Billing period">
          <span aria-current="true">Monthly</span>
          <button type="button" disabled>Yearly</button>
        </div>

        <div className="studio-international-plans">
          {internationalPlans.map((plan) => (
            <article
              key={plan.id}
              aria-labelledby={`international-plan-${plan.id}`}
              className="studio-international-plan"
            >
              <header className="studio-international-plan-header">
                <div className="studio-international-plan-heading">
                  <h3 id={`international-plan-${plan.id}`}>{plan.name}</h3>
                  <span className="studio-international-trial">
                    $1 for 3 days <Zap size={12} fill="currentColor" aria-hidden="true" />
                  </span>
                </div>
                <p className="studio-international-price">
                  ${plan.price}<span> {internationalCurrency} / month</span>
                </p>
              </header>

              <div className="studio-international-plan-body">
                <h4 className="studio-international-includes">Plan includes</h4>
                <p className="studio-international-videos">
                  Up to {plan.videos.toLocaleString("en-US")} fully edited videos
                </p>
                <p className="studio-international-images">
                  or up to {plan.images.toLocaleString("en-US")} image creatives
                </p>
                <ul className="studio-international-features" role="list">
                  {internationalFeatures.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true"><Check size={11} /></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <AppLink
                  className="studio-button studio-international-cta"
                  aria-label={`Start for $1 — ${plan.name}`}
                  onClick={() => {
                    const properties = {
                      source,
                      currency: internationalCurrency,
                      value: plan.price,
                      plan: plan.id,
                      placement: "international_pricing",
                    };
                    posthog.capture("offer_cta_click", properties);
                    trackMetaCustomEvent("VSLOfferClick", properties);
                  }}
                >
                  Start for $1
                </AppLink>
              </div>
            </article>
          ))}
        </div>

        <div className="studio-international-note">
          <p><LockKeyhole size={13} aria-hidden="true" /> Secure payment by Stripe</p>
          <p>Cancel in Account → Billing</p>
        </div>
      </div>
    </section>
  );
}
