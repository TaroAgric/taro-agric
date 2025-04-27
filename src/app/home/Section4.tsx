import Image from "next/image";
import React from "react";

export default function Section4() {
  return (
    <div className="flex flex-col items-center justify-around gap-5 sm:py-16 py-5 max-w-screen-2xl mx-auto">
      <h2 className="sm:text-4xl text-base font-bold text-[#1E624D] text-center">
        Partnerships and Collaborations
      </h2>

      <div className="flex flex-row gap-3">
        <Image src="" alt="" width={100} height={100} className="w-1/4" />
        <Image src="" alt="" width={100} height={100} className="w-1/4" />
      </div>

      <div className="w-full flex sm:flex-row flex-col-reverse rounded-lg shadow-2xl blur-2xl bg-white"></div>
    </div>
  );
}
