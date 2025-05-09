import Image from "next/image";
import React from "react";

export default function Section1() {
  return (
    <div className="w-full flex flex-col items-center justify-center sm:pt-16 pt-12 rounded-b-2xl overflow-hidden sm:mb-20 mb-10">
      <div className="flex flex-col  max-w-screen-2xl mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-center items-start justify-center xl:justify-between py-5 px-10">
          <div className="xl:w-1/2 w-full flex justify-center xl:mr-10 mb-5 xl:mb-0">
            <Image
              src="/storyChicken2.svg"
              alt=""
              width={100}
              height={100}
              className="xl:w-2/3 w-full rounded-t-full self-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-center xl:w-1/2 w-full xl:h-full">
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
