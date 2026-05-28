import { CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  "Free consultation — no cost to you ever",
  "Plans for homes, businesses, and mobile",
  "Nationwide coverage across all 50 states",
  "End-to-end setup support included",
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-muted">
    <div className="container mx-auto max-w-3xl">
      <AnimatedSection>
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
          ABOUT US
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
          We Help You Find the Right Plan — Fast
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="text-muted-foreground leading-relaxed mb-8">
          NationWave LLC is a national sales and marketing company based in Richmond, TX. We connect residential and business customers with the best internet, TV, and wireless plans available in their area. Our team does the research so you don't have to — and our service is always free to you.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <CheckCircle className="text-accent shrink-0" size={20} strokeWidth={2} />
              <span className="text-foreground font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
