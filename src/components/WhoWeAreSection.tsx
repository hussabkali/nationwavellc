import { ArrowRight, BarChart3, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import whoWeAreImage from "@/assets/who-we-are.jpg";

const WhoWeAreSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-4">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">WHO WE ARE</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Supercharge Your Connectivity
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
              Our battle-tested connectivity matching system delivers transformative results, much like elite coaching transforms athletes into champions. We blend cutting-edge strategy with relentless execution to maximize your connectivity potential.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Features */}
          <div className="space-y-8">
            <AnimatedSection delay={0.1}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <BarChart3 className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Precision Provider Architecture</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We build ultra-efficient matching engines that analyze from first inquiry to connected service, eliminating friction while protecting quality. Our systematic approach ensures consistent, scalable results.
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
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Real-Time Performance Command</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Interactive analytics track coverage metrics, plan comparisons, and provider ROI—providing actionable intelligence to optimize every connectivity decision. Our suite turns data into your competitive edge.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <button
                onClick={scrollToForm}
                className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group"
              >
                EXPLORE OUR SYSTEM <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </AnimatedSection>
          </div>

          {/* Image */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={whoWeAreImage}
                alt="NationWave team analyzing connectivity data"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
