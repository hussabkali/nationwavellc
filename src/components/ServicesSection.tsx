import { Wifi, Building2, Smartphone, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Wifi,
    title: "Seamless Home Connect",
    description: "Power your home with flawless high-speed internet. Our matching solutions remove roadblocks so you can focus on what matters—streaming, gaming, and staying connected.",
    cta: "Discover Options →",
  },
  {
    icon: Building2,
    title: "Growth on Autopilot",
    description: "Turn data into decisions with AI-powered connectivity strategies. We help businesses forecast needs accurately, act decisively, and scale predictably.",
    cta: "View Solutions →",
  },
  {
    icon: Smartphone,
    title: "Mobile Velocity",
    description: "Compare the nation's top wireless networks with battle-tested analysis. From first touch to perfect plan, we help you accelerate without cutting corners.",
    cta: "Compare Plans →",
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
              Accelerate Connectivity At<br />Lightning Speed
            </h2>
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
