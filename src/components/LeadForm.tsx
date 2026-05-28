import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import AnimatedSection from "./AnimatedSection";

const LeadForm = () => {
  const [step, setStep] = useState(1);
  const [consent, setConsent] = useState(false);
  const [interest, setInterest] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [state, handleSubmit] = useForm("xvzylrkj");

  if (state.succeeded) {
    return (
      <section id="lead-form" className="section-padding bg-muted">
        <div className="container mx-auto max-w-lg text-center">
          <div className="glass-card border-secondary/40 p-10">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Success</p>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">We'll Be In Touch!</h2>
            <p className="text-muted-foreground">Thank you! Our team will reach out to you shortly.</p>
          </div>
        </div>
      </section>
    );
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast.error("Please agree to the consent terms to continue.");
      return;
    }
    handleSubmit(e);
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
          <form onSubmit={onSubmit} className="glass-card border-secondary/40 p-8 md:p-10">
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
                    name="name"
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    maxLength={100}
                    className="mt-1.5 bg-background border-secondary/30 focus:border-accent"
                  />
                  <ValidationError field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground font-medium">Best Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    maxLength={20}
                    className="mt-1.5 bg-background border-secondary/30 focus:border-accent"
                  />
                  <ValidationError field="phone" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                <Button
                  type="button"
                  variant="gold"
                  className="w-full mt-2"
                  onClick={() => {
                    if (name && phone) setStep(2);
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
                    name="address"
                    placeholder="123 Main St, Richmond, TX"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    maxLength={200}
                    className="mt-1.5 bg-background border-secondary/30 focus:border-accent"
                  />
                  <ValidationError field="address" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                <div>
                  <Label className="text-foreground font-medium">Interest</Label>
                  <Select value={interest} onValueChange={setInterest}>
                    <SelectTrigger className="mt-1.5 bg-background border-secondary/30">
                      <SelectValue placeholder="Select one..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home-internet">Home Internet</SelectItem>
                      <SelectItem value="home-tv">Home TV</SelectItem>
                      <SelectItem value="wireless">Wireless / Mobile</SelectItem>
                      <SelectItem value="business">Business Services</SelectItem>
                      <SelectItem value="bundle">Bundle (Internet + TV + Wireless)</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="interest" value={interest} />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(v) => setConsent(!!v)}
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
                  <Button type="submit" variant="gold" className="flex-1" disabled={state.submitting}>
                    {state.submitting ? "Submitting..." : "Get Started"}
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
