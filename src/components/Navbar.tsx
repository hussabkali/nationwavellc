import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#lead-form" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-sm border-b border-border/20">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logo} alt="NationWave" className="h-10 md:h-12 w-auto" />
          <span className="font-heading text-xl md:text-2xl font-semibold text-foreground tracking-tight">NationWave</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground/70 hover:text-foreground text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Button variant="gold" size="sm" onClick={scrollToForm}>
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border/20 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-6 py-3 text-foreground/70 hover:text-foreground text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button variant="gold" className="w-full" onClick={scrollToForm}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
