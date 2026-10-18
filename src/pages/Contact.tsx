import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";
import SEO from "@/components/SEO";
import StudioPageLayout from "@/components/landing/StudioPageLayout";

const channels = [
  {
    title: "WhatsApp us",
    icon: MessageCircle,
    description: "A question about your first ad? Send us a message.",
    href: "https://wa.me/917610336917",
    label: "Chat on WhatsApp",
    external: true,
  },
  {
    title: "Give us a call",
    icon: Phone,
    description: "Monday–Saturday, 10 AM–6 PM IST.",
    href: "tel:+917610336917",
    label: "+91 7610336917",
    external: false,
  },
  {
    title: "Drop us an email",
    icon: Mail,
    description: "For detailed questions, feedback or help with your account.",
    href: "mailto:arpitdayma1@gmail.com",
    label: "arpitdayma1@gmail.com",
    external: false,
  },
];

export default function Contact() {
  return (
    <StudioPageLayout className="studio-contact-page">
      <SEO
        title="Contact Zockto — Let’s talk about your next ad"
        description="Questions about Zockto or your next video ad? Contact our team on WhatsApp, by phone or by email."
        path="/contact"
      />
      <section className="studio-page-hero studio-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="studio-eyebrow">A real conversation</p>
          <h1>
            Good questions.
            <br />
            <em>Let’s talk.</em>
          </h1>
          <p className="studio-page-description">
            Your first ad, an existing order, or just a quick question.
            <br className="studio-desktop-break" /> Choose the way that works
            for you.
          </p>
        </motion.div>
      </section>
      <section
        className="studio-container studio-contact-channels"
        aria-label="Ways to contact Zockto"
      >
        {channels.map((channel, index) => (
          <motion.article
            className="studio-contact-card"
            key={channel.href}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <div className="studio-contact-card-top">
              <span className="studio-contact-icon">
                <channel.icon size={21} aria-hidden="true" />
              </span>
              <span aria-hidden="true">0{index + 1}</span>
            </div>
            <h2>{channel.title}</h2>
            <p>{channel.description}</p>
            <a
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
            >
              {channel.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </section>
      <section
        className="studio-container studio-contact-note"
        aria-label="Help with an existing purchase"
      >
        <div>
          <h2>Already made an ad?</h2>
          <p>
            Include your account email and purchase reference when you contact
            us, so we can find your order.
          </p>
        </div>
        <Link to="/demo">
          Explore the demos <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </section>
    </StudioPageLayout>
  );
}
