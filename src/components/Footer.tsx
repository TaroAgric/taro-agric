"use client";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="bg-white mt-0 shadow-[0_-4px_25px_-5px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col px-3 md:px-10 py-10 overflow-hidden max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between lg:items-start pb-28 gap-10 w-full">
          <div className="flex flex-col lg:items-start items-center md:w-1/3 w-full md:gap-5 gap-2">
            <Link href="/home">
              <Image
                src="/taroLogo.svg"
                alt="logo"
                width={400}
                height={200}
                className="w-full "
              />
            </Link>
            <p className="text-[#1E624D] md:text-center text-center sm:text-lg text-sm font-bold mb-5">
              The healthiest meat at the comfort of your homes.
            </p>

            <div className="flex flex-row gap-5">
              <Link href="https://x.com/Taroagric" target="_blank">
                <FontAwesomeIcon
                  icon={faX}
                  size="lg"
                  className="text-[#1E624D] mr-4"
                />
              </Link>
              <Link href="https://web.facebook.com/taroagric/" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="lg"
                  className="text-[#1E624D] mr-4"
                />
              </Link>
              <Link href="https://www.instagram.com/taroagric/" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  className="text-[#1E624D] mr-4"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/taro-agric/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  className="text-[#1E624D] mr-4"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:items-start items-center md:w-1/3 w-full md:gap-5 gap-2">
            <p className="text-black text-xl font-bold">Address</p>
            <p className="text-black sm:text-lg text-sm lg:text-center text-center">
              Obiri Village, Along Ife-Ondo Road, Erefe, Ile-Ife, Osun State,
              Nigeria.
            </p>
          </div>

          <div className="flex flex-col lg:items-start items-center md:w-1/3 w-full md:gap-5 gap-2">
            <p className="text-black text-xl font-bold">Quick Links</p>
            <ul>
              <Link href="/whoWeAre">
                <li className="text-[#1E624D] font-bold">Who We Are</li>
              </Link>
              <Link href="/ourOutlets">
                <li className="text-[#1E624D] font-bold">Our Outlets</li>
              </Link>
              <Link href="/resources">
                <li className="text-[#1E624D] font-bold">Resources</li>
              </Link>
            </ul>
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
