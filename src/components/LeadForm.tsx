import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import AnimatedSection from "./AnimatedSection";

const LeadForm = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    interest: "",
    consent: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) {
      toast.error("Please agree to the consent terms to continue.");
      return;
    }
    toast.success("Thank you! Our concierge team will reach out shortly.");
    setForm({ name: "", phone: "", address: "", interest: "", consent: false });
    setStep(1);
  };

  return (
    <section id="lead-form" className="section-padding bg-muted">
      <div className="container mx-auto max-w-lg">
        <AnimatedSection>
          <div className="text-center mb-10">
            <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-3">Get Started</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Find Your Perfect Plan
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <form onSubmit={handleSubmit} className="glass-card border-secondary/40 p-8 md:p-10">
            {/* Step indicators */}
            <div className="flex items-center justify-center gap-3 mb-8">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                    step >= s ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    maxLength={100}
                    className="mt-1.5 bg-background border-secondary/30 focus:border-accent"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground font-medium">Best Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    maxLength={20}
                    className="mt-1.5 bg-background border-secondary/30 focus:border-accent"
                  />
                </div>
                <Button
                  type="button"
                  variant="gold"
                  className="w-full mt-2"
                  onClick={() => {
                    if (form.name && form.phone) setStep(2);
                  }}
                >
                  Next
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <Label htmlFor="address" className="text-foreground font-medium">Service Address</Label>
                  <Input
                    id="address"
                    placeholder="123 Main St, Richmond, TX"
                    value={form.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    required
                    maxLength={200}
                    className="mt-1.5 bg-background border-secondary/30 focus:border-accent"
                  />
                </div>
                <div>
                  <Label className="text-foreground font-medium">Interest</Label>
                  <Select value={form.interest} onValueChange={(v) => handleChange("interest", v)}>
                    <SelectTrigger className="mt-1.5 bg-background border-secondary/30">
                      <SelectValue placeholder="Select one..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">Home</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Checkbox
                    id="consent"
                    checked={form.consent}
                    onCheckedChange={(v) => handleChange("consent", !!v)}
                    className="mt-0.5"
                  />
                  <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                    By clicking 'Get Started', I provide express written consent for NationWave LLC to contact me via call or text for marketing purposes. Consent is not a condition of purchase.
                  </label>
                </div>

                <div className="flex gap-3 mt-2">
                  <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="submit" variant="gold" className="flex-1">
                    Get Started
                  </Button>
                </div>
              </div>
            )}
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LeadForm;
