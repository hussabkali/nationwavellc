import { Wifi, Building2, Smartphone, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Wifi,
    title: "Home Internet & TV",
    description: "Get matched with the best internet and TV plans available at your address. We compare speeds, pricing, and reliability so you don't have to — and help you get connected fast.",
    cta: "Find My Plan →",
  },
  {
    icon: Building2,
    title: "Business Services",
    description: "Keep your business running with reliable internet and phone solutions. We work with small businesses and offices nationwide to find plans that fit your budget and bandwidth needs.",
    cta: "View Business Options →",
  },
  {
    icon: Smartphone,
    title: "Wireless & Mobile Plans",
    description: "Compare the top wireless carriers and find a mobile plan that works for you. Whether it's a single line or a family plan, we'll help you get the best deal available.",
    cta: "Compare Wireless Plans →",
  },
];

const ServicesSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">OUR SERVICES</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Internet, TV & Wireless —<br />All In One Place
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Serving customers across all 50 states. Tell us your address and we'll show you exactly what's available in your area.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="glass-card p-8 hover:shadow-xl transition-all duration-300 h-full group cursor-pointer" onClick={scrollToForm}>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="text-accent" size={26} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                <span className="flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                  {service.cta} <ArrowRight size={14} />
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
