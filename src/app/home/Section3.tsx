import Image from "next/image";
import React from "react";

export default function Section3() {
  return (
    <div className="bg-[#1E624D] flex flex-col items-center sm:py-16 py-5 sm:mb-20 mb-10">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="sm:text-4xl text-xl font-bold text-white text-center">
          Hear From Those Who Trust Us
        </h2>

        <div className="flex flex-col xl:flex-row items-center justify-around gap-5 p-5">
          <div className="bg-[#ffffff] text-white text-center rounded-md p-7 flex flex-col py-4 px-8">
            <div className="flex flex-row gap-1 mb-4">
              <Image
                src="/icons/star.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
              <Image
                src="/icons/star.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
              <Image
                src="/icons/star.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
              <Image
                src="/icons/star.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
              <Image
                src="/icons/star.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
            </div>

            <p className="text-black">
              "Taro Farms delivers the freshest, healthiest chicken we've ever
              had! The quality is unmatched, and you can truly taste the
              difference. Highly recommended for any family that values clean,
              safe food."
            </p>
            <p className="text-black font-bold text-end">--Tola Asa</p>
          </div>

          <div className="bg-[#ffffff] text-white text-center rounded-md p-7 flex flex-col py-4 px-8">
            <div className="flex flex-row gap-1 mb-4">
              <Image
                src="/icons/star.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
              <Image
                src="/icons/star.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
              <Image
                src="/icons/star.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
              <Image
                src="/icons/star.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
              <Image
                src="/icons/star.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
            </div>

            <p className="text-black">
              "We've been buying from Taro Farms for months, and they never
              disappoint. Their commitment to quality and service is
              outstanding. I gladly recommend them to anyone looking for
              trustworthy farm produce."
            </p>
            <p className="text-black font-bold text-end">--Tinuke Martins</p>
          </div>

          <div className="bg-[#ffffff] text-white text-center rounded-md p-7 flex flex-col py-4 px-8">
            <div className="flex flex-row gap-1 mb-4">
              <Image
                src="/icons/star.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
              <Image
                src="/icons/star.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
              <Image
                src="/icons/star.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
              <Image
                src="/icons/star.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
              <Image
                src="/icons/star.svg"
                alt=""
                width={20}
                height={20}
                className=""
              />
            </div>

            <p className="text-black">
              "From the first order, we knew Taro Farms was special. The chicken
              is always fresh, tender, and full of flavor. Definitely a farm you
              can count on and come back to again and again!"
            </p>
            <p className="text-black font-bold text-end">--Oluwatoyin 'Yato</p>
          </div>
        </div>
      </div>
    </div>
  );
}
