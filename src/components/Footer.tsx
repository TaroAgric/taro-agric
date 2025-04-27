"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="bg-white mt-0">
      <div className="flex flex-col px-3 md:px-20 py-10 overflow-hidden max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center md:justify-between lg:items-start pb-28 gap-20 w-full">
          <div className="flex md:flex-col flex-row items-center md:gap-0 gap-5">
            <Link href="/home">
              <Image
                src="/taroLogo.svg"
                alt="logo"
                width={200}
                height={200}
                className="w-1/2 md:w-1/3 lg:w-1/2"
              />
            </Link>
          </div>
        </div>
        <div className="text-center text-xs">
          <p className="text-[#1E624D] text-sm sm:text-lg">
            © {year} Taro Agric
          </p>
          <p className="text-[#1E624D] text-sm sm:text-lg">
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
