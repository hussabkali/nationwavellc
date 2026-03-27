import AnimatedSection from "./AnimatedSection";
import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";
import showcase3 from "@/assets/showcase-3.jpg";
import showcase4 from "@/assets/showcase-4.jpg";

const images = [
  { src: showcase1, alt: "Business team strategy meeting" },
  { src: showcase2, alt: "Modern connected home at twilight" },
  { src: showcase3, alt: "Mobile and laptop connectivity" },
  { src: showcase4, alt: "Network infrastructure and fiber optics" },
];

const ShowcaseSection = () => (
  <section className="section-padding bg-muted">
    <div className="container mx-auto">
      {/* Top banner */}
      <AnimatedSection>
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img
            src={showcase1}
            alt="NationWave team delivering value"
            loading="lazy"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
            <div className="text-center">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-2">Value Focused</h3>
              <p className="text-primary-foreground/70 max-w-md mx-auto">
                Turning connectivity searches into perfect matches with data-backed analysis and flawless execution.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Image grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="rounded-xl overflow-hidden aspect-square">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Counter */}
      <AnimatedSection delay={0.3}>
        <div className="text-center mt-10">
          <p className="font-heading text-5xl font-bold text-accent">50+</p>
          <p className="text-muted-foreground mt-1">Projects Complete</p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ShowcaseSection;
