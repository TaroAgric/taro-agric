"use client";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.6,
    // triggerOnce: true,
  });

  return (
    // <motion.div
    //   ref={ref}
    //   initial={{ scale: 0.8, opacity: 0 }}
    //   animate={inView ? { scale: 1, opacity: 1 } : {}}
    //   transition={{ duration: 0.5, ease: "easeOut" }}
    // >
    //   <Image
    //     src={src}
    //     alt={alt}
    //     width={300}
    //     height={300}
    //     className="xl:w-full w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
    //   />
    // </motion.div>

    <div
      ref={ref}
      className={`xl:w-full w-full rounded-2xl shadow-2xl transition-all duration-200 ease-out ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      } hover:scale-105`}
    >
      <Image
        src={src}
        alt={alt}
        width={300}
        height={200}
        className="w-full h-auto rounded-2xl"
      />
    </div>
  );
};

export default function Section2() {
  return (
    <>
      <div className="flex xl:flex-row flex-col items-center justify-around gap-7 p-5 max-w-screen-2xl mx-auto xl:mb-40 sm:mb-20 mb-10">
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
            At our farm, we believe every family deserves fresh, wholesome
            chicken they can trust. Our birds are raised in clean, healthy
            environments with the highest standards of care. From nutritious
            feed to humane practices, we ensure every chicken is nurtured
            naturally. We’re committed to putting safe, delicious poultry on
            your table — every day, for every meal.
          </p>
        </div>
      </div>

      {/* OUR PRODUCTS */}
      <div className="flex xl:flex-row flex-col items-center justify-around gap-7 p-5 max-w-screen-2xl mx-auto sm:mb-20 mb-10">
        <h2 className="sm:text-4xl text-base text-[#1E624D] text-center sm:mb-6 mb-0 font-bold xl:w-2/5 w-full">
          Our Products
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 xl:w-3/5 w-full">
          {/* <Image
            src="/product1.svg"
            alt=""
            width={300}
            height={200}
            className="xl:w-full w-full rounded-2xl shadow-lg"
          />
          <Image
            src="/product2.svg"
            alt=""
            width={300}
            height={200}
            className="xl:w-full w-full rounded-2xl shadow-lg"
          />
          <Image
            src="/product3.svg"
            alt=""
            width={300}
            height={200}
            className="xl:w-full w-full rounded-2xl shadow-lg"
          />
          <Image
            src="/product4.svg"
            alt=""
            width={300}
            height={200}
            className="xl:w-full w-full rounded-2xl shadow-lg"
          /> */}

          <ProductImage src="/product1.svg" alt="Product 1" />
          <ProductImage src="/product2.svg" alt="Product 2" />
          <ProductImage src="/product3.svg" alt="Product 3" />
          <ProductImage src="/product4.svg" alt="Product 4" />
        </div>
      </div>
    </>
  );
}
