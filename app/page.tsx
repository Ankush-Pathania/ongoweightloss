"use client";

import Hero from "./components/landing page/hero";
import HowItWorks from "./components/landing page/howitworks";
import Medications from "./components/landing page/medications";
import Scrollingbar from "./components/landing page/scrollingbar";
import Glplanding from "./components/landing page/GlpLanding";
import BMICalculator from "./components/landing page/bmi/bmi-calculator";

export default function Home() {
  return (
    <>
      <Hero />
      <Scrollingbar />
      <Glplanding />
      <BMICalculator />
      <Medications />
      <HowItWorks />
    </>
  );
}