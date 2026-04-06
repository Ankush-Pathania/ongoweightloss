import Benefits from "./components/landing page/benifits";
import CTA from "./components/landing page/cta";
import Doctors from "./components/landing page/doctors";
import FAQ from "./components/landing page/faq";
import Hero from "./components/landing page/hero";
import HowItWorks from "./components/landing page/howitworks";
import Medications from "./components/landing page/medications";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Medications />
      <Doctors />
      <FAQ />
      <CTA />
    </>
  );
}