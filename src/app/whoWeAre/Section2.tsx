import React from "react";

export default function Section2() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-5 max-w-screen-2xl mx-auto">
      <div className="flex md:flex-row flex-col-reverse items-center justify-around gap-5 md:mb-10 mb-0">
        <div className="flex flex-col md:w-1/2 w-full md:text-start text-center">
          <h2 className="sm:text-4xl text-xl text-[#1E624D] sm:mb-6 mb-2 font-bold w-full">
            CEO's Message
          </h2>

          <p className="sm:text-2xl text-base text-black sm:mb-5 mb-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit
            amet consectetur adipiscing elit quisque faucibus.
          </p>
        </div>

        <div className="flex md:w-1/3 w-full h-full">
          <iframe
            className="w-full h-80 rounded-xl shadow-2xl"
            src="https://www.youtube.com/embed/lPWgC_we8Os?si=UTdyPjTgeFOHlNmb"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex xl:flex-row flex-col items-center gap-5 lg:mb-10 mb-0">
          <div>
            <h2 className="sm:text-4xl text-xl text-[#1E624D] text-center sm:mb-6 mb-2 font-bold w-full">
              Vision
            </h2>
            <p className="sm:text-2xl text-base text-black text-center sm:mb-5 mb-3">
              Our vision is to be among the top 1% in the Nigeria Poultry
              industry.
            </p>
          </div>
          <div>
            <h2 className="sm:text-4xl text-xl text-[#1E624D] text-center sm:mb-6 mb-2 font-bold w-full">
              Mission
            </h2>
            <p className="sm:text-2xl text-base text-black text-center sm:mb-5 mb-3">
              Our mission is to produce quality products that deliver superior
              value, outstanding quality and offer best prices.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="sm:text-4xl text-xl text-[#1E624D] text-center sm:mb-6 mb-2 font-bold w-full">
            Goal
          </h2>
          <p className="sm:text-2xl text-base text-black text-center sm:mb-5 mb-3">
            We aim to be the leading agricultural brand in Nigeria in the next 5
            years.
          </p>
        </div>
      </div>
    </div>
  );
}
