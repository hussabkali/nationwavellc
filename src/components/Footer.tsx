import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary py-12 px-4">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt="NationWave" className="h-10" loading="lazy" />
        </div>
        <div className="flex gap-6">
          {["Home", "Services", "About Us", "Contact Us"].map((link) => (
            <a
              key={link}
              href={link === "Home" ? "#" : link === "Contact Us" ? "#lead-form" : `#${link.toLowerCase().replace(/ /g, "-")}`}
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6">
        <p className="text-primary-foreground/50 text-xs text-center mb-2">
          19747 Albany Oaks Ln, Richmond, TX 77407
        </p>
        <p className="text-primary-foreground/40 text-[10px] md:text-xs text-center max-w-3xl mx-auto leading-relaxed">
          NationWave LLC is an independent service matching company. We are not an authorized dealer, partner, or affiliate of any specific telecommunications carrier. All brand names and logos are the property of their respective owners. We provide objective comparisons to help consumers find the best local solutions.
        </p>
        <p className="text-primary-foreground/30 text-[10px] text-center mt-4">
          © {new Date().getFullYear()} NationWave LLC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
