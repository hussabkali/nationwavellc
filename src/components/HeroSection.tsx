import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const handleGetStarted = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div>
            <AnimatedSection>
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                PREMIUM CONNECTIVITY CONCIERGE
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground mb-6 leading-tight">
                Smart Connectivity, <br />Scalable Solutions
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
                A proven track record in matching homes and businesses with the perfect connectivity solutions. We merge data-driven analysis with unwavering dedication to your success—helping you connect faster, smarter, and reliably.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button variant="gold" size="lg" onClick={handleGetStarted} className="gap-2 px-8">
                  GET STARTED
                </Button>
                <a href="#how-it-works" className="flex items-center justify-center gap-3 text-foreground hover:text-accent font-medium transition-colors group">
                  <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Play size={14} className="text-primary-foreground ml-0.5" />
                  </span>
                  See How It Works
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right - Hero Image */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Modern home with high-speed fiber connectivity in Richmond, TX"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-4 md:-left-6 bg-background rounded-2xl p-5 shadow-xl border border-border/30">
                <p className="font-heading text-3xl font-bold text-accent">80%</p>
                <p className="text-muted-foreground text-xs">Daily Activity</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
