import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms of Service — Zockto"
        description="Review the Terms of Service for using Zockto's AI UGC video platform, including subscriptions, content rights, and refund policy."
        path="/terms-of-service"
      />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Zockto{' '}
              <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            <p className="text-muted-foreground mb-12">Last updated: 16.10.2025</p>

            <div className="space-y-10 text-foreground/90">
              {/* 1. Acceptance of Terms */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing or using Zockto, you agree to these Terms of Service ("Terms"). If you do not agree, do not use the Service.
                </p>
              </section>

              {/* 2. Service Description */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">2. Service Description</h2>
                <p className="leading-relaxed">
                  Zockto is an AI-based software that enables users to generate and customize marketing videos, avatars, or voice-based creatives.
                </p>
              </section>

              {/* 3. User Responsibilities */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">3. User Responsibilities</h2>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li>You must provide accurate information when creating an account.</li>
                  <li>You may not use Zockto for illegal, harmful, or deceptive purposes.</li>
                  <li>If you upload content (e.g., voice, image, or video), you confirm that you have all necessary rights and permissions to the usage.</li>
                  <li>You are solely responsible for the legality of the content you upload and generate.</li>
                </ul>
              </section>

              {/* 4. Ownership of Content */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">4. Ownership of Content</h2>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li>You retain ownership of your uploaded materials.</li>
                  <li>Zockto retains ownership of its software, AI models, and platform.</li>
                  <li>By using the Service, you grant Zockto a limited license to process your data for video generation and platform improvement.</li>
                </ul>
              </section>

              {/* 5. Payments and Subscriptions */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">5. Payments and Subscriptions</h2>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li>Fees are billed monthly or yearly via Stripe.</li>
                  <li>You may cancel anytime; refunds are handled per our refund policy.</li>
                  <li>Taxes and payment processing fees may apply.</li>
                </ul>
              </section>

              {/* 6. AI-Generated Content */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">6. AI-Generated Content</h2>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                  <li>Zockto provides generated content "as is."</li>
                  <li>We do not guarantee accuracy, legality, or third-party rights compliance of AI-generated materials.</li>
                  <li>You must review generated content before commercial use.</li>
                </ul>
              </section>

              {/* 7. Limitation of Liability */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  Zockto is not liable for indirect, incidental, or consequential damages resulting from use of the Service.
                </p>
              </section>

              {/* 8. Termination */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">8. Termination</h2>
                <p className="leading-relaxed">
                  We may suspend or terminate accounts that violate these Terms or misuse the Service.
                </p>
              </section>

              {/* 9. Refund Policy */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">9. Refund Policy</h2>
                <p className="mb-4">All payments made to Zockto are non-refundable under any circumstances.</p>
                <p className="mb-4">Because the Service provides immediate access to digital tools and AI-generated output, users acknowledge that:</p>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-4">
                  <li>Once payment is processed, no refunds, credits, or chargebacks will be issued for any reason (including unused subscription time, dissatisfaction with generated content, or account inactivity);</li>
                  <li>By completing a purchase, you expressly waive your right to withdrawal or refund under applicable consumer-protection laws to the fullest extent permitted; and</li>
                  <li>Subscriptions may be canceled at any time to prevent future billing, but previously charged amounts remain non-refundable.</li>
                </ul>
                <p className="mb-4">If required by law in your country, this policy does not affect any mandatory statutory rights you may have.</p>
                <p className="font-medium">The refund amount will be credited within 10-15 days.</p>
              </section>

              {/* 10. Changes */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">10. Changes</h2>
                <p className="leading-relaxed">
                  We may update these Terms and will notify users of significant changes by email or platform notice.
                </p>
              </section>

              {/* 11. Governing Law */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">11. Governing Law</h2>
                <p className="leading-relaxed">
                  These Terms are governed by the laws of India and Finland, unless otherwise required by law.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
