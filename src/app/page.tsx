import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroStatement from "@/components/IntroStatement";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import FeaturedVisual from "@/components/FeaturedVisual";
import DesignWork from "@/components/DesignWork";
import About from "@/components/About";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#090a0c] selection:bg-white/20 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <IntroStatement />
        <Expertise />
        <Experience />
        <FeaturedVisual />
        <DesignWork />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
