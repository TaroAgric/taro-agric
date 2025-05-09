"use client";
import Section5 from "@/components/Section5";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOrderNowClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* from-[#D9D9D9] to-[#333333] */}
      <div className="w-full flex flex-row items-center justify-between sm:pt-16 pt-12 bg-gradient-to-r from-[#E8DFCA] to-[#F5EFE6] rounded-b-2xl max-w-screen-2xl mx-auto sm:mb-10 mb-5">
        <div className="flex flex-col xl:w-1/2 w-1/2 pl-4 py-2 md:pl-10 xl:pl-40 lg:py-4">
          <h1 className="sm:text-5xl text-base sm:mb-7 mb-2 text-[#1E624D] font-extrabold text-start">
            Healthy Meat <br className="sm:block hidden mb-5" />
            Naturally{" "}
          </h1>

          <div className="bg-white w-2/3 sm:block hidden h-0.5 sm:mb-6 mb-4 bg-gradient-to-r from-[#333] to-[#D9D9D9]"></div>

          <p className="text-[#1E624D] sm:text-lg text-xs sm:mb-6 mb-1">
            The healthiest meat at the comfort of your homes
          </p>

          <button
            // onClick={() => {
            //   document
            //     .getElementById("contact")
            //     ?.scrollIntoView({ behavior: "smooth" });
            // }}
            type="button"
            onClick={handleOrderNowClick}
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            className="self-start text-white sm:text-sm text-xs bg-[#1E624D] font-bold sm:py-5 py-2 sm:px-10 px-4 rounded-full cursor-pointer"
          >
            ORDER NOW{" "}
          </button>
        </div>
        <div className="xl:w-1/3 w-1/2 md:pr-0 xl:pr-10">
          <Image
            src="/farmerWithBroiler.svg"
            alt=""
            width={500}
            height={500}
            className="w-full   rounded-b-2xl"
          />
          {/* <Image
            src="/heroChicken.svg"
            alt=""
            width={500}
            height={500}
            className="w-full  transform scale-x-[-1] rounded-b-2xl"
          /> */}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch justify-around gap-5 p-5 max-w-screen-2xl mx-auto sm:mb-20 mb-10">
        <div className="bg-[#1E624D] text-white text-center rounded-md p-7 lg:w-1/4 w-full h-full">
          <p className="font-bold xl:text-2xl text-lg mb-4">
            Technology Driven
          </p>
          <div className="bg-white w-full h-0.5 mb-4"></div>
          <p className="xl:text-xl text-base">
            We harness the power of innovation to ensure smarter, healthier
            farming practices. We lead with cutting-edge solutions for superior
            results.
          </p>
        </div>

        <div className="bg-[#1E624D] text-white text-center rounded-md p-7 lg:w-1/4 w-full h-full">
          <p className="font-bold xl:text-2xl text-lg mb-4">
            Professional Farmers
          </p>
          <div className="bg-white w-full h-0.5 mb-4"></div>
          <p className="xl:text-xl text-base">
            Our team is made up of seasoned experts who bring passion and
            precision to every bird. With years of experience, we deliver
            excellence from hatch to harvest.
          </p>
        </div>
        <div className="bg-[#1E624D] text-white text-center rounded-md p-7 lg:w-1/4 w-full h-full">
          <p className="font-bold xl:text-2xl text-lg mb-4">Sustainability</p>
          <div className="bg-white w-full h-0.5 mb-4"></div>
          <p className="xl:text-xl text-base">
            We farm with tomorrow in mind, nurturing both our birds and the
            planet. Every step we take is rooted in care, conservation, and
            responsibility.
          </p>
        </div>

        <div className="bg-[#1E624D] text-white text-center rounded-md p-7 lg:w-1/4 w-full h-full">
          <p className="font-bold xl:text-2xl text-lg mb-4">
            Quality Guaranteed
          </p>
          <div className="bg-white w-full h-0.5 mb-4"></div>
          <p className="xl:text-xl text-base">
            Every bird is raised under the highest standards of health, safety,
            and care. From farm to table, we promise products you can trust.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end  px-5 z-50 fixed right-0 top-160">
        <div className="flex flex-col items-center">
          <a
            href="https://wa.me/2348037411405"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2xl"
              className=" text-[#1E624D] stroke-3 stroke-white cursor-pointer"
            />
          </a>
          <p className="text-red-500 sm:text-sm text-xs">Live chat</p>
        </div>
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ background: "rgba(217, 217, 217, 0.8" }}
        >
          <div className="relative bg-white rounded-lg shadow-lg w-[90%] sm:w-[800px] max-h-[90%] overflow-y-auto">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-black text-xl font-bold"
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
