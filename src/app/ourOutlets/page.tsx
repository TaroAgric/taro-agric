import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Section1 from "./Section1";
import ComingSoon from "./ComingSoon";

export default function OurOutlets() {
  return (
    <>
      <Navbar />
      <Section1 />
      <ComingSoon />
      {/* <div className="w-full flex flex-col items-center justify-center sm:pt-16 pt-12 rounded-b-2xl">
        <div className="flex flex-col  max-w-screen-2xl mx-auto">
          <div className="flex flex-col xl:flex-row xl:items-center items-start justify-center xl:justify-between p-5">
            <div className="xl:w-1/2 w-full xl:mr-10 mb-5 xl:mb-0">
              <Image
                src="/outletGlobe.svg"
                alt=""
                width={500}
                height={500}
                className="w-full rounded-t-full"
              />
            </div>

            <div className="flex flex-col justify-center xl:w-1/2 w-full xl:h-[500px]">
              <h1 className="sm:text-5xl text-[23px] sm:mb-7 mb-2 text-[#1E624D] font-extrabold xl:text-start text-center">
                We Know No Distance
              </h1>
              <p className="sm:text-2xl text-base text-black sm:mb-5 mb-3">
                We’re not everywhere yet, but we can deliver to you [almost] in
                a heartbeat.
              </p>

              <button className="self-start text-white sm:text-sm text-xs bg-[#1E624D] font-bold sm:py-5 py-2 sm:px-10 px-4 rounded-full cursor-pointer">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl text-black font-bold mb-4">Our Outlets</h1>
        <Image
          src="/underConst.svg"
          alt="Under Construction"
          width={300}
          height={200}
        />
        <h1 className="text-xl text-black text-center font-bold mb-4">
          This Page Is Currently Under Construction
        </h1>

        <Link
          href="/home"
          className="bg-[#1E624D] px-7 py-3 rounded-full text-white font-bold text-lg mt-4"
        >
          Back to Home Page
        </Link>
      </div> */}
      <Footer />
    </>
  );
}
