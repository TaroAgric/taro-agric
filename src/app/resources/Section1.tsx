import Image from "next/image";
import React from "react";

export default function Section1() {
  return (
    <div className="w-full flex flex-col items-center justify-center sm:pt-0 pt-0  overflow-hidden sm:mb-20 mb-10">
      <div className="relative w-full xl:h-[600px] sm:h-[500px] h-[400px] lg:mt-16 mt-10">
        <Image
          src="/resourcesChicken.svg"
          alt="globe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <h1 className="sm:text-8xl text-[50px] text-white font-extrabold text-center">
            Explore Our Experience and Tools. Drive Your Passion
          </h1>
        </div>
      </div>

      <div className="flex flex-col  max-w-screen-2xl mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-center items-start justify-center xl:justify-between py-0 px-10">
          {/* <div className="xl:w-1/2 w-full flex justify-center xl:mr-10 mb-5 xl:mb-0">
            <Image
              src="/resourcesChicken.svg"
              alt=""
              width={500}
              height={500}
              className="xl:w-2/3 w-full rounded-t-full"
            />
          </div> */}

          {/* <div className="flex flex-col justify-center xl:w-1/2 w-full xl:h-[500px]">
            <h1 className="sm:text-5xl text-[23px] sm:mb-7 mb-2 text-[#1E624D] font-extrabold xl:text-start text-center">
              Explore Our Experience and Tools. Drive Your Passion{" "}
            </h1>
          </div> */}
        </div>
      </div>
    </div>
  );
}
