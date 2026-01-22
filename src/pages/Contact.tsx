import { Phone, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
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
            <div className="bg-card rounded-2xl p-8 text-center border border-border/50 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-xl font-semibold mb-2">Call Us</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Available Mon-Sat, 10AM-6PM IST
              </p>
              <div className="bg-muted/50 rounded-lg py-3 px-4">
                <a 
                  href="tel:+917610336917" 
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  +91 7610336917
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-card rounded-2xl p-8 text-center border border-border/50 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-7 h-7 text-green-600" />
              </div>
              <h2 className="font-display text-xl font-semibold mb-2">WhatsApp</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Quick responses within 24 hours
              </p>
              <Button 
                asChild 
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                <a 
                  href="https://wa.me/917610336917" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Email Card */}
            <div className="bg-card rounded-2xl p-8 text-center border border-border/50 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-xl font-semibold mb-2">Email Us</h2>
              <p className="text-muted-foreground text-sm mb-6">
                For detailed inquiries & support
              </p>
              <div className="bg-muted/50 rounded-lg py-3 px-4">
                <a 
                  href="mailto:arpitdayma1@gmail.com" 
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  arpitdayma1@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
