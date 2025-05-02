"use client";
import Image from "next/image";
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

      <div className="flex md:flex-row flex-col md:gap-7 gap-10 items-center justify-around p-5 mb-7">
        <Image
          src="/partnerGCRF.svg"
          alt=""
          width={100}
          height={100}
          className="md:w-[12%] w-[50%]"
        />
        <Image
          src="/partnerOAU.svg"
          alt=""
          width={100}
          height={100}
          className="md:w-[10%] w-[40%]"
        />
        <Image
          src="/partnerBOI.svg"
          alt=""
          width={100}
          height={100}
          className="md:w-1/6 w-[60%]"
        />
        <Image
          src="/partnerUKRI.svg"
          alt=""
          width={100}
          height={100}
          className="md:w-1/6 w-[60%]"
        />
        <Image
          src="/partnerUWE.svg"
          alt=""
          width={100}
          height={100}
          className="md:w-1/6 w-[60%]"
        />
      </div>

      <div className="md:w-[70%] w-[80%] flex md:flex-row flex-col-reverse items-center justify-between rounded-2xl shadow-2xl bg-white py-5 sm:px-7 px-0">
        <div className="md:w-1/2 w-full flex flex-col p-5">
          <p className="text-[#1E624D] md:text-start text-center sm:text-2xl text-base mb-7">
            Gain Insights to Poultry and Other Farming Areas
          </p>

          <p className="text-black md:text-start text-center font-bold sm:text-lg text-sm mb-4">
            Subscribe to our newsletter
          </p>

          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-3 text-[#333] border border-gray-400 rounded-full focus:outline-none"
          />

          <button
            type="submit"
            onClick={handleButtonClick}
            className="md:self-start self-stretch text-white sm:text-base text-sm bg-[#1E624D] font-bold xl:py-7 py-3 sm:px-10 px-4 rounded-full cursor-pointer mt-5"
          >
            Join Newsletter
          </button>
        </div>

        <div className="md:w-1/2 w-full flex items-center justify-center p-5">
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
        <div className="fixed inset-0 flex items-center justify-center bg-[#d9d9d9] bg-opacity-30 z-50">
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
