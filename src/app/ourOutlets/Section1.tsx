"use client";
import Section5 from "@/components/Section5";
import Image from "next/image";
import React, { useState } from "react";

export default function Section1() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center sm:pt-0 pt-0 rounded-b-2xl overflow-hidden sm:mb-20 mb-10">
        <div className="relative w-full xl:h-[600px] sm:h-[400px] h-[250px] lg:mt-16 mt-10">
          <Image
            src="/outletGlobe.svg"
            alt="globe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <h1 className="sm:text-8xl text-[50px] text-white font-extrabold text-center">
              We Know No Distance
            </h1>
          </div>
        </div>

        <div className="flex flex-col  max-w-screen-2xl mx-auto">
          <div className="flex flex-col xl:flex-row xl:items-center items-start justify-center xl:justify-between py-5 px-10">
            {/* <div className="xl:w-1/2 w-full flex justify-center xl:mr-10 mb-5 xl:mb-0">
              <Image
                src="/outletGlobe.svg"
                alt=""
                width={500}
                height={500}
                className="xl:w-2/3 w-full rounded-t-full"
              />
            </div> */}

            <div className="flex flex-col justify-center xl:w-full w-full xl:h-[500px]">
              {/* <h1 className="sm:text-5xl text-[23px] sm:mb-7 mb-2 text-[#1E624D] font-extrabold xl:text-start text-center">
                We Know No Distance
              </h1> */}
              <p className="sm:text-2xl text-base text-black xl:text-start text-center xl:mb-10 mb-7">
                We’re not everywhere yet, but we can deliver to you [almost] in
                a heartbeat.
              </p>

              <button
                type="button"
                onClick={handleShowPopup}
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                className="self-center xl:self-start xl:w-auto w-full text-white sm:text-sm text-xs bg-[#1E624D] font-bold sm:py-5 py-2 sm:px-10 px-4 rounded-full cursor-pointer"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ background: "rgba(217, 217, 217, 0.8" }}
        >
          <div className="relative bg-white rounded-lg shadow-lg w-[90%] sm:w-[800px] max-h-[90%] overflow-y-auto">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              &times;
            </button>
            <Section5 />
          </div>
        </div>
      )}
    </>
  );
}
