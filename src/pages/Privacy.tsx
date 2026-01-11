import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container px-4 max-w-4xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Zockto{' '}
              <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-muted-foreground mb-12">Last updated: 16.10.2025</p>

            <div className="space-y-10 text-foreground/90">
              {/* Introduction */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Introduction</h2>
                <p className="leading-relaxed">
                  Zockto ("we," "our," or "us") provides an AI-powered video creation platform that allows users to generate marketing and product videos ("Service"). This Privacy Policy explains how we collect, use, store, and protect your personal data when you use Zockto. By using Zockto, you agree to this Privacy Policy.
                </p>
              </section>

              {/* Data We Collect */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Data We Collect</h2>
                <p className="mb-4">We may collect the following data:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Account Information:</strong> Name, email, phone number, password (if account created manually), company name</li>
                  <li><strong className="text-foreground">User Content:</strong> Text prompts, scripts, images, voice samples, product urls or videos you upload to generate content.</li>
                  <li><strong className="text-foreground">Generated Output:</strong> Videos, images or other materials created through the Service.</li>
                  <li><strong className="text-foreground">Usage Data:</strong> IP address, and interactions with our platform.</li>
                  <li><strong className="text-foreground">Payment Data:</strong> Processed securely through third-party payment provider, Stripe.</li>
                </ul>
              </section>

              {/* How We Use Your Data */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">How We Use Your Data</h2>
                <p className="mb-4">We use collected data to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Operate and improve the Service.</li>
                  <li>Process and deliver generated videos.</li>
                  <li>Provide customer support.</li>
                  <li>Communicate about updates, offers, or new features.</li>
                  <li>Maintain platform security and prevent fraud.</li>
                </ul>
                <p className="mt-4 font-medium">We do not sell or trade user data.</p>
              </section>

              {/* Data Storage and Processing */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Data Storage and Processing</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Hosting Provider:</strong> Data is stored securely with Bunny.net in Frankfurt, Germany, and in Supabase in Germany.</li>
                  <li><strong className="text-foreground">Processing Provider:</strong> AI model computations are performed on Runpod and on RunningHub.</li>
                </ul>
                <p className="mt-4">Both providers comply with the General Data Protection Regulation (GDPR). We enforce row-level security (RLS) to ensure users can access only their own data. All data is encrypted in transit (TLS) and at rest.</p>
              </section>

              {/* Legal Basis for Processing */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Legal Basis for Processing (GDPR)</h2>
                <p className="mb-4">We process your personal data on the following legal bases:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Performance of a contract (providing the Service).</li>
                  <li>Legitimate interests (improving and securing the Service).</li>
                  <li>Consent (when you upload voice or likeness data).</li>
                </ul>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Data Retention</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Generated videos and images:</strong> retained for 15 days after creation, then automatically deleted from our storage (Bunny.net, Germany).</li>
                  <li>You can request deletion of your account and all related data at any time by contacting admin@zockto.com.</li>
                </ul>
              </section>

              {/* User Rights */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">User Rights (GDPR/CCPA)</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access and export your data.</li>
                  <li>Correct inaccurate information.</li>
                  <li>Delete your account and associated data.</li>
                  <li>Withdraw consent for likeness or voice data.</li>
                  <li>Lodge a complaint with your local data authority.</li>
                </ul>
              </section>

              {/* Sharing and Subprocessors */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Sharing and Subprocessors</h2>
                <p className="mb-4">We may share limited data with trusted partners solely for providing the Service:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                  <li>Bunny.net (hosting and storage, Germany)</li>
                  
                  <li>Runpod (AI processing)</li>
                  <li>Stripe (payments)</li>
                  <li>OpenAI (generating scripts)</li>
                  <li>N8N</li>
                  <li>Contabo (Cloud VPS providing)</li>
                  <li>Supabase (storing the user data)</li>
                  <li>Gemini (Analyzing content)</li>
                  <li>Kimi K2 (analyzing images)</li>
                  <li>Cartesia AI (voice cloning and TTS)</li>
                  <li>Diffbot (Scraping)</li>
                  <li>PACKEND, LLC (Scraping)</li>
                </ul>
                <p className="mt-4">We do not share data for advertising or analytics purposes.</p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Cookies</h2>
                <p>Zockto may use functional cookies to maintain user sessions and analytics cookies to improve product performance.</p>
              </section>

              {/* Security */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Security</h2>
                <p className="mb-4">We implement strong security measures including:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Row-level data security.</li>
                  <li>Encryption at rest and in transit.</li>
                  <li>Strict access controls and logging.</li>
                </ul>
                <p className="mt-4">However, no online service is 100% secure. Users are responsible for maintaining password confidentiality.</p>
              </section>

              {/* International Data Transfers */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">International Data Transfers</h2>
                <p>Data is stored in Germany (EU). If data is processed outside the EU (e.g., by subprocessors), we use Standard Contractual Clauses (SCCs) to ensure GDPR-level protection.</p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Children's Privacy</h2>
                <p>Zockto is not directed at children under 18. We do not knowingly collect data from minors.</p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Contact</h2>
                <p>If you have questions, contact us at:</p>
                <p className="mt-2">
                  <a href="mailto:admin@zockto.com" className="text-primary hover:underline">
                    📧 admin@zockto.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Privacy;