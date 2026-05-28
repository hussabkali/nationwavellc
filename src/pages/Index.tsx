import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <FAQSection />
    <WhoWeAreSection />
    <TestimonialsSection />
    <LeadForm />
    <Footer />
  </div>
);

export default Index;
