import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Speakers from "@/components/speakers";
import WhyAttend from "@/components/WhyAttend";
import Stakeholders from "@/components/stakeholders";
import Register from "@/components/Register";
import Legacy from "@/components/Legacy";
import Awards from "@/components/Awards";
import FAQ from "@/components/FAQ";
import AboutJanani from "@/components/AboutJanani";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <Hero />
      <AboutJanani />
      <Legacy/>
      <Speakers/>
      <WhyAttend/>
      <Stakeholders/>
      <Awards/>
      <Register/>
      <FAQ/>
      
    </main>

  );
}