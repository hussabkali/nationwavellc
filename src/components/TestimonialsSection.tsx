import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "James Whitmore",
    role: "Homeowner, Sugar Land",
    quote: "NationWave's connectivity matching helped us find fiber we didn't even know was available in our neighborhood. We went from 50 Mbps to 1 Gbps and saved $30/month. Incredible service.",
    avatar: "JW",
  },
  {
    name: "Priya Kapoor",
    role: "Small Business Owner, Richmond",
    quote: "From struggling with dropped calls to enterprise-grade connectivity—NationWave transformed our entire business communication stack. The consultation alone saved us hours of research.",
    avatar: "PK",
  },
  {
    name: "Marcus DeLeon",
    role: "Property Manager, Fort Bend",
    quote: "After implementing NationWave's recommendations across 12 properties, we reduced connectivity costs by 35% while increasing tenant satisfaction. The ROI was immediate.",
    avatar: "MD",
  },
  {
    name: "Sophie Beaumont",
    role: "Remote Worker, Katy",
    quote: "Working from home required rock-solid internet. NationWave found me a dedicated line I didn't know existed. Zero downtime in 6 months. Worth every second of the free consultation.",
    avatar: "SB",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--accent)) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="container mx-auto relative">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
              CLIENT TESTIMONIALS
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
              Simplifying The Complexities Of<br />Connectivity
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection delay={0.15}>
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-accent fill-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 italic">
                "{testimonials[active].quote}"
              </p>

              {/* Avatar & Info */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-heading font-bold text-sm">
                    {testimonials[active].avatar}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-heading font-semibold text-primary-foreground">{testimonials[active].name}</p>
                  <p className="text-primary-foreground/50 text-sm">{testimonials[active].role}</p>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground hover:border-primary-foreground/40 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === active ? "bg-accent" : "bg-primary-foreground/20"
                    }`}
                  />
                ))}
                <button
                  onClick={() => setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground hover:border-primary-foreground/40 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
