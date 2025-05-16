import Image from "next/image";
import React from "react";

export default function Section4() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 p-5 max-w-screen-2xl mx-auto sm:mb-20 mb-10">
        <h2 className="sm:text-4xl text-xl text-[#1E624D] sm:mb-6 mb-2 font-bold w-full text-center">
          Core Values
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-7 gap-5 w-full md:mb-48 sm:mb-20 mb-20">
          <div className="flex flex-col items-center justify-center gap-3 bg-[#1E624D] text-white text-center rounded-md p-7 md:w-full w-full h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-105 active:shadow-lg">
            <Image
              src="/icons/quality.svg"
              alt=""
              width={50}
              height={50}
              className="w-1/5"
            />

            <p className="sm:text-2xl text-base font-bold">Quality Service</p>

            <p className="sm:text-lg text-sm">
              OFFER TOP NOTCH QUALITY PRODUCTS
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 bg-[#1E624D] text-white text-center rounded-md p-7 md:w-full w-full h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-105 active:shadow-lg">
            <Image
              src="/icons/growth.svg"
              alt=""
              width={50}
              height={50}
              className="w-1/5"
            />

            <p className="sm:text-2xl text-base font-bold">Growth</p>

            <p className="sm:text-lg text-sm">
              COMMITTED TO CONTINUOUS IMPROVEMENT AND INNOVATION
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 bg-[#1E624D] text-white text-center rounded-md p-7 md:w-full w-full h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-105 active:shadow-lg">
            <Image
              src="/icons/community.svg"
              alt=""
              width={50}
              height={50}
              className="w-1/5"
            />

            <p className="sm:text-2xl text-base font-bold">Community</p>

            <p className="sm:text-lg text-sm">
              FOSTER STRONG RELATIONSHIPS AND SHARED PURPOSE
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 bg-[#1E624D] text-white text-center rounded-md p-7 md:w-full w-full h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-105 active:shadow-lg">
            <Image
              src="/icons/sustainability.svg"
              alt=""
              width={50}
              height={50}
              className="w-1/5"
            />

            <p className="sm:text-2xl text-base font-bold">Sustainability</p>

            <p className="sm:text-lg text-sm">
              COMMITTED TO RESPONSIBLE AND LASTING PRACTICES
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 bg-[#1E624D] text-white text-center rounded-md p-7 md:w-full w-full h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-105 active:shadow-lg">
            <Image
              src="/icons/innovation.svg"
              alt=""
              width={50}
              height={50}
              className="w-1/5"
            />

            <p className="sm:text-2xl text-base font-bold">Innovation</p>

            <p className="sm:text-lg text-sm">
              DRIVING CREATIVE SOLUTIONS FOR A BETTER TOMORROW
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 bg-[#1E624D] text-white text-center rounded-md p-7 md:w-full w-full h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-105 active:shadow-lg">
            <Image
              src="/icons/team.svg"
              alt=""
              width={50}
              height={50}
              className="w-1/5"
            />

            <p className="sm:text-2xl text-base font-bold">Team Work</p>

            <p className="sm:text-lg text-sm">
              COLLABORATING TO ACHIEVE MORE TOGETHER
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse items-center justify-center sm:gap-10 gap-5 md:mb-48 sm:mb-20 mb-20">
          <div className="flex flex-col md:w-1/2 w-full md:text-start text-center">
            <h2 className="sm:text-4xl text-xl text-[#1E624D] sm:mb-6 mb-2 font-bold w-full">
              Our Unique Point
            </h2>

            <p className="sm:text-2xl text-base text-black sm:mb-5 mb-3">
              We are engaged in Tech-Enabled Production practices through smart
              and precision farming Techniques. This optimizes efficient
              production for increased profit.
            </p>
          </div>

          <div className="md:w-1/2 w-full">
            <Image
              src="/uspChicken.svg"
              alt=""
              width={500}
              height={500}
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse items-center justify-center sm:gap-10 gap-5">
          <div className="md:w-1/2 w-full">
            <Image
              src="/researcher.svg"
              alt=""
              width={500}
              height={500}
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="flex flex-col md:w-1/2 w-full md:text-start text-center">
            <h2 className="sm:text-4xl text-xl text-[#1E624D] sm:mb-6 mb-2 font-bold w-full">
              Other Activities
            </h2>

            <p className="sm:text-2xl text-base text-black sm:mb-5 mb-3">
              We don't only bred healthy chicken for safe consumption, we also
              share knowledge and engage the community through{" "}
              <strong>trainings</strong>, <strong>researches</strong>, and{" "}
              <strong>outgrower schemes</strong>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
