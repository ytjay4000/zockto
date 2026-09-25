import { Link } from 'react-router-dom';

const VslFooter = () => (
  <footer className="py-10 border-t border-border/60">
    <div className="container px-4 max-w-[1100px] flex flex-col md:flex-row md:items-center md:justify-between gap-5">
      <div className="max-w-sm">
        <p className="font-display text-lg font-bold mb-1">Zockto</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          AI-generated, storytelling-based video ads for businesses — from one product photo.
        </p>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <Link to="/privacy" className="hover:text-primary transition-colors">
          Privacy Policy
        </Link>
        <Link to="/terms-of-service" className="hover:text-primary transition-colors">
          Terms of Service
        </Link>
        <Link to="/terms-of-service" className="hover:text-primary transition-colors">
          Refund Policy
        </Link>
        <Link to="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
      </div>
    </div>
    <div className="container px-4 max-w-[1100px] mt-6">
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Zockto. All rights reserved.</p>
    </div>
  </footer>
);

export default VslFooter;
