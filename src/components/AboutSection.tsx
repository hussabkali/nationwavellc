import { CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import aboutImage from "@/assets/about-image.jpg";

const features = [
  "Scalable Connectivity Frameworks",
  "Data-Driven Provider Insights",
  "Custom Coverage Playbooks",
  "End-to-End Setup Support",
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-muted">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* Left - Image */}
        <AnimatedSection>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="NationWave concierge team reviewing connectivity options"
                width={800}
                height={1024}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Right - Copy */}
        <div>
          <AnimatedSection>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
              ABOUT PEAK CONNECTIVITY
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Elevate Your Growth With Data-Driven Connectivity Strategy
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We craft precision-engineered connectivity solutions tailored to your home or business goals. By blending cutting-edge technology analysis with battle-tested matching methodologies, we turn your search into a seamless, high-performance experience.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="text-accent shrink-0" size={20} strokeWidth={2} />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
