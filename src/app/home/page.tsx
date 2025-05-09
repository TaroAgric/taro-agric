import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "../../components/Section5";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Section5 /> */}
      <Footer />
    </div>
  );
}
