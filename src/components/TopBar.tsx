import { MapPin, Phone, Mail } from "lucide-react";

const TopBar = () => (
  <div className="bg-primary border-b border-primary-foreground/10">
    <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-4 text-xs">
      <div className="flex items-center gap-4">
        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="#" aria-label="Twitter" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <a href="https://maps.google.com/?q=19747+Albany+Oaks+Ln+Richmond+TX+77407" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
          <MapPin size={12} />
          <span className="hidden sm:inline">19747 Albany Oaks Ln, Richmond TX 77407</span>
        </a>
        <a href="tel:+18322963696" className="flex items-center gap-1.5 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
          <Phone size={12} />
          <span>+1 (832) 296-3696</span>
        </a>
        <a href="mailto:info@nationwavellc.com" className="flex items-center gap-1.5 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
          <Mail size={12} />
          <span className="hidden sm:inline">info@nationwavellc.com</span>
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
