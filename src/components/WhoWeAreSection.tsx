import { ArrowRight, BarChart3, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const WhoWeAreSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <AnimatedSection>
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">HOW IT WORKS</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple, Fast, and Free
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We do the legwork so you can focus on what matters. Getting started takes less than 2 minutes.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          <AnimatedSection delay={0.1}>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <BarChart3 className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Tell Us What You Need</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Fill out our short form with your address and what type of service you're looking for — internet, TV, wireless, or all three. Takes less than a minute.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Zap className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">We Find Your Options</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our team looks up what's available at your address and identifies the best plans based on your needs and budget. No guesswork, no upsells — just straight answers.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <button
              onClick={scrollToForm}
              className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group"
            >
              GET STARTED NOW <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
