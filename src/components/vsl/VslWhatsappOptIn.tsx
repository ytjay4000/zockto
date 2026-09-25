import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { posthog } from "@/lib/posthog";

const WHATSAPP_NUMBER = "917610336917";

const VslWhatsappOptIn = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (!name.trim() || digits.length < 10) return;
    posthog.capture("whatsapp_optin_submitted", { path: "/vsl" });
    const text = encodeURIComponent(
      `Hi Zockto, I'm ${name.trim()}. Please send me the demo video ads on WhatsApp. My number: ${digits}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-14 md:py-20">
      <div className="container px-4 max-w-[760px]">
        <div className="rounded-3xl border border-border/60 gradient-card p-6 md:p-10 text-center">
          <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-display text-xl md:text-3xl font-bold mb-2">Send me the demo on WhatsApp</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-[520px] mx-auto">
            Not ready right now? Get sample Zockto ads on WhatsApp and decide later.
          </p>
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-[520px] mx-auto">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="h-12"
              required
            />
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="WhatsApp number"
              type="tel"
              inputMode="tel"
              className="h-12"
              required
            />
            <Button type="submit" size="lg" variant="hero" className="h-12 shrink-0">
              Send it to me
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VslWhatsappOptIn;
