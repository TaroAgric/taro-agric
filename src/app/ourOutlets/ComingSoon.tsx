"use client";
import Section5 from "@/components/Section5";
import Image from "next/image";
import React, { useState } from "react";

export default function ComingSoon() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-5 sm:pt-16 pt-12 rounded-b-2xl overflow-hidden max-w-screen-2xl mx-auto">
      <div className="flex flex-col text-center gap-5">
        <div className="flex md:flex-row flex-col items-center gap-5">
          <div className=" md:w-1/2 w-full  transform transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-md">
            <Image
              src="/distributor.svg"
              alt=""
              width={100}
              height={100}
              className="w-full md:rounded-xl shadow-lg"
            />
          </div>

          <div className="flex flex-col md:w-1/2 w-full">
            <div className="flex flex-col items-center max-w-screen-2xl mx-auto p-5 sm:mt-5 mt-4 w-full">
              <h1 className="sm:text-5xl text-base sm:mb-7 mb-2 text-[#1E624D] font-extrabold text-center">
                We will be somewhere close to you soon!
                {/* <br className="sm:block hidden mb-5" /> */}
              </h1>

              <p className="text-black sm:text-lg text-sm text-center max-w-2xl mb-6">
                Would you like to join our distribution chain?
              </p>

              <button
                type="button"
                onClick={handleShowPopup}
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                className=" self-center  xl:w-80 w-80 text-white sm:text-sm text-xs bg-[#1E624D] font-bold sm:py-5 py-2 sm:px-10 px-4 rounded-full cursor-pointer mt-5"
              >
                BECOME A DISTRIBUTOR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full md:h-80 h-64 overflow-hidden max-w-screen-2xl mx-auto">
        <Image
          src="/distributor.svg"
          alt=""
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div> */}

      {/* <div className="flex flex-col items-center max-w-screen-2xl mx-auto p-5 sm:mt-5 mt-4 w-full"> */}
      {/* <h1 className="sm:text-5xl text-base sm:mb-7 mb-2 text-[#1E624D] font-extrabold text-center">
          We will be somewhere close to you soon!
        </h1>

        <p className="text-black sm:text-lg text-sm text-center max-w-2xl mb-6">
          Would you like to join our distribution chain?
        </p>

        <button
          type="button"
          onClick={handleShowPopup}
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          className=" self-center  xl:w-80 w-80 text-white sm:text-sm text-xs bg-[#1E624D] font-bold sm:py-5 py-2 sm:px-10 px-4 rounded-full cursor-pointer mt-5"
        >
          BECOME A DISTRIBUTOR
        </button> */}
      {/* </div> */}

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
    </div>
  );
}
