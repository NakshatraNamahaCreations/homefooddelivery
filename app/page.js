import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import PromoBanners from "./components/PromoBanners";
import AboutSection from "./components/AboutSection";
import ValueSection from "./components/ValueSection";
import Dishes from "./components/Dishes";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <main>
        <PromoBanners />
        <Dishes />
        <AboutSection />
        <ValueSection />
        <HowItWorks />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
