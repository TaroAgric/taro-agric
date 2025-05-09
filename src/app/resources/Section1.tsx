import Image from "next/image";
import React from "react";

export default function Section1() {
  return (
    <div className="w-full flex flex-col items-center justify-center sm:pt-16 pt-12 rounded-b-2xl overflow-hidden">
      <div className="flex flex-col  max-w-screen-2xl mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-center items-start justify-center xl:justify-between py-5 px-10">
          <div className="xl:w-1/2 w-full flex justify-center xl:mr-10 mb-5 xl:mb-0">
            <Image
              src="/resourcesChicken.svg"
              alt=""
              width={500}
              height={500}
              className="xl:w-2/3 w-full rounded-t-full"
            />
          </div>

          <div className="flex flex-col justify-center xl:w-1/2 w-full xl:h-[500px]">
            <h1 className="sm:text-5xl text-[23px] sm:mb-7 mb-2 text-[#1E624D] font-extrabold xl:text-start text-center">
              Explore Our Experience and Tools. Drive Your Passion{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
