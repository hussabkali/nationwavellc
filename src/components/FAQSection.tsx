import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "What services does NationWave help me find?",
    a: "We help residential and business customers find the best internet, TV, and wireless plans available at their address. Whether you need high-speed home internet, a TV package, or a mobile plan, our team will walk you through all your options and help you get set up.",
  },
  {
    q: "Is there any cost to use NationWave's service?",
    a: "No — our service is completely free to you. We're compensated by the providers when you sign up through us, so you pay nothing extra. You get the same pricing as going direct, plus personalized support.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve customers across the entire United States. Whether you're in a major city or a rural area, we can help you find internet, TV, and wireless options available at your specific address.",
  },
  {
    q: "How do I get started?",
    a: "Simply fill out the form on this page with your name, phone number, and service address. One of our team members will reach out shortly to go over your options and help you find the best plan for your needs.",
  },
  {
    q: "Can you help businesses too?",
    a: "Absolutely. We work with small businesses, offices, and multi-location companies to find reliable internet and communication solutions. Our team will make sure you get the speed and reliability your operations demand.",
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
