"use client";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isActive = (path: string) =>
    pathname === path ? "text-[#1E624D]" : "text-black";

  return (
    <div className="bg-white shadow-lg w-full z-50 fixed top-0 left-0">
      <div className="flex flex-col xl:flex-row items-center justify-between px-4 py-2 xl:px-20 lg:py-4 max-w-screen-2xl mx-auto">
        <div className="flex justify-between w-full xl:w-auto">
          <Link href="">
            <Image
              src="/taroLogo.svg"
              alt="logo"
              width={50}
              height={50}
              className="xl:w-1/2 w-24"
            />
          </Link>
          <div className="xl:hidden cursor-pointer" onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              size="lg"
              className="text-black"
            />
          </div>
        </div>

        <ul
          className={`text-black flex flex-col xl:flex-row items-center w-full xl:w-auto transition-all duration-300 ${
            menuOpen ? "block" : "hidden xl:flex"
          }`}
        >
          <Link href="/home" className="cursor-pointer">
            <li
              className={`text-xs font-bold mb-4 xl:mb-0 xl:mr-10 ${isActive(
                "/home"
              )}`}
            >
              Home
            </li>
          </Link>

          <Link href="/whoWeAre" className="cursor-pointer">
            <li
              className={`text-xs font-bold mb-4 xl:mb-0 xl:mr-10 ${isActive(
                "/whoWeAre"
              )}`}
            >
              Who We Are
            </li>
          </Link>

          <Link href="/ourOutlets" className="cursor-pointer">
            <li
              className={`text-xs font-bold mb-4 xl:mb-0 xl:mr-10 ${isActive(
                "/ourOutlets"
              )}`}
            >
              Our Outlets
            </li>
          </Link>

          <Link href="/resources" className="cursor-pointer">
            <li
              className={`text-xs font-bold mb-4 xl:mb-0 xl:mr-10 ${isActive(
                "/resources"
              )}`}
            >
              Resources
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
