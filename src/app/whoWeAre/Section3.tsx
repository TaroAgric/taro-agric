import Image from "next/image";
import React from "react";
import GalleryCarousel from "./GalleryCarousel";
import Link from "next/link";

const slideImages = [
  <div key="img1" className="w-full flex justify-center items-center">
    <Image
      src="/galleryImg/carousel1.svg"
      alt=""
      width={200}
      height={200}
      className="w-full h-full"
    />
  </div>,
  <div key="img2" className="w-full flex justify-center items-center">
    <Image
      src="/galleryImg/carousel2.svg"
      alt=""
      width={200}
      height={200}
      className="w-full h-full"
    />
  </div>,
  <div key="img3" className="w-full flex justify-center items-center">
    <Image
      src="/galleryImg/carousel3.svg"
      alt=""
      width={200}
      height={200}
      className="w-full h-full"
    />
  </div>,
  <div key="img4" className="w-full flex justify-center items-center">
    <Image
      src="/galleryImg/carousel1.svg"
      alt=""
      width={500}
      height={500}
      className="w-full h-full"
    />
  </div>,
  <div key="img5" className="w-full flex justify-center items-center">
    <Image
      src="/galleryImg/carousel2.svg"
      alt=""
      width={500}
      height={500}
      className="w-full h-full"
    />
  </div>,
  <div key="img6" className="w-full flex justify-center items-center">
    <Image
      src="/galleryImg/carousel3.svg"
      alt=""
      width={500}
      height={500}
      className="w-full h-full"
    />
  </div>,
];

export default function Section3() {
  return (
    <>
      {/* <div className="flex flex-col items-center bg-[#1E624D] justify-center gap-10 p-5 max-w-screen-2xl mx-auto sm:mb-20 mb-10 overflow-hidden">
        <div className="w-full mb-0">
          <GalleryCarousel autoSlide={true}>{slideImages}</GalleryCarousel>
        </div>

        <Link href="">
          <p className="sm:text-2xl text-base text-white font-extrabold -mt-5">
            Go to Gallery
          </p>
        </Link>
      </div> */}
    </>
  );
}
