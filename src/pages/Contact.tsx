import { useEffect } from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Zockto — Talk to Our AI UGC Team"
        description="Reach the Zockto team by phone, WhatsApp, or email. We help D2C brands and sellers ship AI-powered UGC video ads, fast."
        path="/contact"
      />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a question about our AI video creation tools? We're here to help you create amazing content!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Call Us Card */}
            <div className="bg-card rounded-2xl p-8 text-center border border-border/50 shadow-sm flex flex-col">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-xl font-semibold mb-2">Call Us</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Available Mon-Sat, 10AM-6PM IST
              </p>
              <a 
                href="tel:+917610336917"
                className="mt-auto w-full h-11 flex items-center justify-center bg-muted/50 hover:bg-muted rounded-lg text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                +91 7610336917
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-card rounded-2xl p-8 text-center border border-border/50 shadow-sm flex flex-col">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-7 h-7 text-green-600" />
              </div>
              <h2 className="font-display text-xl font-semibold mb-2">WhatsApp</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Quick responses within 24 hours
              </p>
              <a 
                href="https://wa.me/917610336917"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full h-11 flex items-center justify-center bg-green-500 hover:bg-green-600 rounded-lg text-sm font-medium text-white transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-card rounded-2xl p-8 text-center border border-border/50 shadow-sm flex flex-col">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-xl font-semibold mb-2">Email Us</h2>
              <p className="text-muted-foreground text-sm mb-6">
                For detailed inquiries & support
              </p>
              <a 
                href="mailto:arpitdayma1@gmail.com"
                className="mt-auto w-full h-11 flex items-center justify-center bg-muted/50 hover:bg-muted rounded-lg text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                arpitdayma1@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
