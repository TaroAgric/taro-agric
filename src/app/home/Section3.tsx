import Image from "next/image";
import React from "react";

export default function Section3() {
  return (
    <div className="bg-[#1E624D] flex flex-col items-center sm:py-16 py-5 ">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="sm:text-4xl text-base font-bold text-white text-center">
          Hear From Those Who Trust Us
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-around gap-5 p-5">
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
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis.
            </p>
            <p className="text-black font-bold text-end">--John Taro</p>
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
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis.
            </p>
            <p className="text-black font-bold text-end">--John Taro</p>
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
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis.
            </p>
            <p className="text-black font-bold text-end">--John Taro</p>
          </div>
        </div>
      </div>
    </div>
  );
}
