import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "How does NationWave's matching service integrate with my needs?",
    a: "We embed seamlessly into your search—analyzing your address, usage patterns, and budget to match you with the ideal provider. Regular follow-ups ensure continued satisfaction.",
  },
  {
    q: "What about my data security and privacy?",
    a: "We follow strict privacy protocols and NDAs. Your personal information is never shared with third parties beyond your chosen provider. All data handling meets industry compliance standards.",
  },
  {
    q: "Is this affordable for all households?",
    a: "Our consultation service is completely free to you. We're compensated by providers when you connect through us, so there's never any additional cost on your end.",
  },
  {
    q: "Can I switch providers after connecting?",
    a: "Absolutely—our concierge team is available anytime you need to re-evaluate your options. We'll run a fresh comparison to find the best current deal.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Maximize Your Connectivity<br />Performance
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="border border-border/40 rounded-xl overflow-hidden bg-background">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-heading font-semibold text-foreground pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === i ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-48 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-5 text-muted-foreground leading-relaxed text-sm">{faq.a}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
