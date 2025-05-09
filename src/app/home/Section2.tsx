import Image from "next/image";
import React from "react";

export default function Section2() {
  return (
    <div className="flex xl:flex-row flex-col items-center justify-around gap-7 p-5 max-w-screen-2xl mx-auto sm:mb-20 mb-10">
      <Image
        src="/broilers1.svg"
        alt=""
        width={200}
        height={200}
        className="xl:w-1/3 w-full rounded-2xl shadow-lg"
      />
      <div className="flex flex-col xl:w-1/2 w-full xl:text-start text-center">
        <h2 className="sm:text-4xl text-base text-[#1E624D] sm:mb-6 mb-3 font-bold w-full">
          We raise healthy chicken for everyday family needs{" "}
        </h2>

        <p className="sm:text-2xl text-base text-black">
          At our farm, we believe every family deserves fresh, wholesome chicken
          they can trust. Our birds are raised in clean, healthy environments
          with the highest standards of care. From nutritious feed to humane
          practices, we ensure every chicken is nurtured naturally. We’re
          committed to putting safe, delicious poultry on your table — every
          day, for every meal.
        </p>
      </div>
    </div>
  );
}
