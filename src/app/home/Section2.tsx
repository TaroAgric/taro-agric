import Image from "next/image";
import React from "react";

export default function Section2() {
  return (
    <div className="flex md:flex-row flex-col items-center justify-around gap-5 p-5 max-w-screen-2xl mx-auto">
      <Image
        src="/broilers1.svg"
        alt=""
        width={200}
        height={200}
        className="md:w-1/3 w-full rounded-2xl shadow-lg"
      />
      <div className="flex flex-col md:w-1/2 w-full md:text-start text-center">
        <h2 className="sm:text-4xl text-base text-[#1E624D] sm:mb-6 mb-3 font-bold w-full">
          We raise healthy chicken for everyday family needs{" "}
        </h2>

        <p className="sm:text-lg text-xs text-black">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor.
        </p>
      </div>
    </div>
  );
}
