import Image from "next/image";
import React from "react";
import VisionMissionCarousel from "./VisionMissionCarousel";

const slideTexts = [
  <div
    key="vision"
    className="w-full flex flex-col justify-center items-center"
  >
    <h2 className="sm:text-4xl text-xl text-[#1E624D] text-center sm:mb-3 mb-1 font-extrabold w-full">
      Vision
    </h2>
    <p className="sm:text-2xl text-base text-black text-center sm:mb-7 mb-5">
      Our vision is to be among the top 1% in the Nigeria Poultry industry.
    </p>
  </div>,
  <div
    key="mission"
    className="w-full flex flex-col justify-center items-center"
  >
    <h2 className="sm:text-4xl text-xl text-[#1E624D] text-center sm:mb-3 mb-1 font-extrabold w-full">
      Mission
    </h2>
    <p className="sm:text-2xl text-base text-black text-center sm:mb-7 mb-5">
      Our mission is to produce quality products that deliver superior value,
      outstanding quality and offer best prices.
    </p>
  </div>,
  <div key="goal" className="w-full flex flex-col justify-center items-center">
    <h2 className="sm:text-4xl text-xl text-[#1E624D] text-center sm:mb-3 mb-1 font-extrabold w-full">
      Goal
    </h2>
    <p className="sm:text-2xl text-base text-black text-center sm:mb-7 mb-5">
      We aim to be the leading agricultural brand in Nigeria in the next 5
      years.
    </p>
  </div>,
];

export default function Section2() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-5 max-w-screen-2xl mx-auto overflow-hidden sm:mb-20 mb-10">
      <div className="flex md:flex-row flex-col-reverse items-center justify-around gap-5 md:mb-48 sm:mb-20 mb-20">
        {/* <div className="flex flex-col md:w-1/2 w-full md:text-start text-center">
          <h2 className="sm:text-4xl text-xl text-[#1E624D] sm:mb-6 mb-2 font-bold w-full">
            CEO's Message
          </h2>

          <p className="sm:text-2xl text-base text-black sm:mb-5 mb-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit
            amet consectetur adipiscing elit quisque faucibus.
          </p>
        </div>

        <div className="flex md:w-1/2 w-full h-full">
          <iframe
            className="w-full h-80 rounded-xl shadow-2xl"
            src="https://www.youtube.com/embed/lPWgC_we8Os?si=UTdyPjTgeFOHlNmb"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div> */}
      </div>

      <div className="flex flex-col text-center gap-5">
        {/* <div className="">
          <h2 className="sm:text-4xl text-xl text-[#1E624D] text-center sm:mb-6 mb-2 font-bold w-full">
            Our Vision, Mission, and Goal
          </h2>
        </div> */}

        <div className="flex md:flex-row flex-col items-center gap-5">
          <div className=" md:w-1/2 w-full   transform transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-md">
            {/* <Image
              src="/taroLogo.svg"
              alt=""
              width={100}
              height={100}
              className="w-full"
            /> */}
            <Image
              src="/storyChicken2.svg"
              alt=""
              width={100}
              height={100}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
          <div className="flex flex-col md:w-1/2 w-full">
            {/* <div>
              <h2 className="sm:text-xl text-sm text-[#1E624D] text-center sm:mb-3 mb-1 font-extrabold w-full">
                Vision
              </h2>
              <p className="sm:text-2xl text-base text-black text-center sm:mb-7 mb-5">
                Our vision is to be among the top 1% in the Nigeria Poultry
                industry.
              </p>
            </div> */}
            {/* <div>
              <h2 className="sm:text-xl text-sm text-[#1E624D] text-center sm:mb-3 mb-1 font-extrabold w-full">
                Mission
              </h2>
              <p className="sm:text-2xl text-base text-black text-center sm:mb-7 mb-5">
                Our mission is to produce quality products that deliver superior
                value, outstanding quality and offer best prices.
              </p>
            </div> */}
            {/* <div>
              <h2 className="sm:text-xl text-sm text-[#1E624D] text-center sm:mb-3 mb-1 font-extrabold w-full">
                Goal
              </h2>
              <p className="sm:text-2xl text-base text-black text-center sm:mb-7 mb-5">
                We aim to be the leading agricultural brand in Nigeria in the
                next 5 years.
              </p>
            </div> */}

            <div>
              <VisionMissionCarousel autoSlide={true}>
                {slideTexts}
              </VisionMissionCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
