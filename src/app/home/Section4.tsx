"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Section4() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col items-center justify-around gap-5 sm:py-16 py-5 max-w-screen-2xl mx-auto">
      <h2 className="sm:text-4xl text-base font-bold text-[#1E624D] text-center">
        Partnerships and Collaborations
      </h2>

      {/* <div className="flex md:flex-row flex-col md:gap-7 gap-10 items-center justify-around p-5 sm:mb-20 mb-10"> */}
      <div className="grid md:grid-cols-3 grid-cols-1 place-items-center xl:gap-0 gap-20 p-5 sm:mb-20 mb-10">
        <Image
          src="/partnerGCRF.svg"
          alt=""
          width={100}
          height={100}
          className="xl:w-1/2 md:w-full w-[50%] self-center"
        />

        <Image
          src="/partnerOAU.svg"
          alt=""
          width={100}
          height={100}
          className="xl:w-1/3 md:w-1/2 w-[40%]"
        />

        <Image
          src="/partnerBOI.svg"
          alt=""
          width={100}
          height={100}
          className="xl:w-1/2 md:w-full w-[60%]"
        />
        <Image
          src="/partnerUKRI.svg"
          alt=""
          width={100}
          height={100}
          className="xl:w-1/2 md:w-full w-[60%]"
        />
        <Image
          src="/partnerUWE.svg"
          alt=""
          width={100}
          height={100}
          className="xl:w-1/2 md:w-full w-[60%]"
        />
        <Image
          src="/CEDeF.svg"
          alt=""
          width={100}
          height={100}
          className="xl:w-1/3 md:w-1/2 w-[40%]"
        />

        <div className="md:col-span-3 flex md:flex-row flex-col justify-center items-center xl:mt-10 mt-0 gap-10">
          <Image
            src="/ephis.svg"
            alt=""
            width={100}
            height={100}
            className="xl:w-1/2 md:w-1/2 w-[40%]"
          />
        </div>
      </div>
      {/* </div> */}

      <div className="md:w-[70%] w-[80%] flex xl:flex-row flex-col-reverse items-center justify-between rounded-2xl shadow-2xl bg-white py-5 sm:px-7 px-0">
        <div className="xl:w-1/2 w-full flex flex-col p-5">
          <p className="text-[#1E624D] xl:text-start text-center sm:text-2xl text-base mb-7">
            Gain Insights to Poultry and Other Farming Areas
          </p>

          <p className="text-black xl:text-start text-center font-bold sm:text-lg text-sm mb-4">
            Subscribe to our newsletter
          </p>

          <input
            required
            type="email"
            placeholder="Enter your email address"
            className="w-full p-3 text-[#333] xl:text-start text-center border border-gray-400 rounded-full focus:outline-none"
          />

          <button
            type="submit"
            onClick={handleButtonClick}
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            className="xl:self-start self-stretch text-white sm:text-base text-sm bg-[#1E624D] font-bold xl:py-7 py-3 sm:px-10 px-4 rounded-full cursor-pointer mt-5"
          >
            SUBSCRIBE TO NEWSLETTER{" "}
          </button>
        </div>

        <div className="xl:w-1/2 w-full flex items-center justify-center p-5">
          <Image
            src="/newsletterChicken.svg"
            alt=""
            width={100}
            height={100}
            className="w-[70%]"
          />
        </div>
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(217, 217, 217, 0.8" }}
        >
          <div className="bg-white p-5 rounded-lg shadow-lg w-[90%] sm:w-[400px] text-center">
            <button
              onClick={handleClosePopup}
              className="text-black self-end text-xl flex"
            >
              &times;
            </button>
            <p className="text-[#1E624D] font-bold mb-4">
              We're still working on this. Kindly give us a moment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
