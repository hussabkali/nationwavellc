import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "James Whitmore",
    role: "Homeowner, Sugar Land TX",
    quote: "I had no idea there were faster options in my area until NationWave reached out. They got me set up with a new internet plan that's twice as fast and cheaper than what I was paying. Super easy process.",
    avatar: "JW",
  },
  {
    name: "Priya Kapoor",
    role: "Small Business Owner, Richmond TX",
    quote: "Running a business means I can't afford bad internet or dropped calls. NationWave helped me find a plan that actually fits what I need. They handled everything and I was up and running in no time.",
    avatar: "PK",
  },
  {
    name: "Marcus DeLeon",
    role: "Homeowner, Houston TX",
    quote: "I was overpaying for my TV and internet bundle for years. NationWave showed me better options and helped me switch. Saved me money every month and the new service is way better.",
    avatar: "MD",
  },
  {
    name: "Sophie Beaumont",
    role: "Remote Worker, Katy TX",
    quote: "Working from home I need reliable internet every single day. NationWave found me a plan with the speeds I needed and made the whole switch painless. Haven't had a single issue since.",
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
