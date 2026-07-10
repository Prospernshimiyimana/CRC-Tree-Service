import Navbar from "@/components/navbar";
import Hero from "../components/hero";
import Services  from  "@/components/services";
import WhyChooseUs from "@/components/whychooseus";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Gallery />
      <Footer />
      
    </main>
  );
}