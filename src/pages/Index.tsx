import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveEmbed from "@/components/LiveEmbed";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Navbar />
      <main>
        <Hero />
        <LiveEmbed />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Download />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
