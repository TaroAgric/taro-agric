import Image from "next/image";
import React from "react";

export default function Section1() {
  return (
    <div className="w-full flex flex-col items-center justify-center sm:pt-16 pt-12 rounded-b-2xl">
      <div className="flex flex-col  max-w-screen-2xl mx-auto">
        <div
          className="flex flex-col xl:flex-row xl:items-center items-start justify-center xl:justify-between p-5"
          // className="p-5"
        >
          <div
            className="xl:w-1/2 w-full xl:mr-10 mb-5 xl:mb-0"
            // className="float-left xl:w-1/2 w-full mr-5 mb-5"
          >
            <Image
              src="/storyChicken.svg"
              alt=""
              width={500}
              height={500}
              className="w-full rounded-t-full"
            />
          </div>

          <div className="flex flex-col justify-center xl:w-1/2 w-full xl:h-[500px]">
            <h1 className="sm:text-5xl text-[23px] sm:mb-7 mb-2 text-[#1E624D] font-extrabold xl:text-start text-center">
              Our Story
            </h1>
            <p className="sm:text-2xl text-base text-black sm:mb-5 mb-3">
              We are a technology-enabled agribusiness (AgTech) venture with a
              focus on producing live and processed broiler chicken and other
              poultry products raised directly from our farm.
            </p>
            <p className="sm:text-2xl text-base text-black sm:mb-5 mb-3">
              We are currently engaged in machine learning (ML), data-enabled
              innovations and IoT applications aimed at enhancing broiler
              chickens productivity through advanced technological interventions
              for the improvement and optimization of chicken business
              enterprise.
            </p>

            <p className="sm:text-2xl text-base text-black sm:mb-5 mb-3">
              We provide our clients quality and healthy (devoid of chemical
              preservatives) poultry products at a consistently affordable rate.
            </p>
            <p className="sm:text-2xl text-base text-black">
              Through our production and processing of chicken, we play a role
              in closing the gap of the local demand for poultry products – at
              an affordable price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
