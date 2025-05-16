import Image from "next/image";
import React from "react";

export default function Section1() {
  return (
    <div className=" w-full flex flex-col items-center justify-center sm:mb-20 mb-10 mt-0 pt-0">
      {/* <div
        className="absolute inset-0 transform scale-x-[1] bg-cover bg-center w-full h-96"
        style={{
          backgroundImage: "url('/ourStory.svg')",
        }}
      ></div> */}
      <div className="relative w-full xl:h-[600px] sm:h-[400px] h-[250px] lg:mt-16 mt-10">
        <Image
          src="/ourStory.svg"
          alt="Our Story"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <h1 className="sm:text-8xl text-[50px] text-white font-extrabold text-center">
            Our Story
          </h1>
        </div>
      </div>

      <div className="flex flex-col  max-w-screen-2xl mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-center items-start justify-center xl:justify-between py-5 px-10">
          {/* <div className="xl:w-1/2 w-full flex justify-center xl:mr-10 mb-5 xl:mb-0">
            <Image
              src="/storyChicken2.svg"
              alt=""
              width={100}
              height={100}
              className="xl:w-2/3 w-full rounded-t-full self-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          </div> */}

          <div className="flex flex-col justify-center xl:w-full w-full xl:h-full">
            {/* <h1 className="sm:text-5xl text-[23px] sm:mb-7 mb-2 text-[#1E624D] font-extrabold xl:text-start text-center">
              Our Story
            </h1> */}

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
