import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Resources() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl text-black font-bold mb-4">Resources</h1>
        <Image
          src="/underConst.svg"
          alt="Under Construction"
          width={300}
          height={200}
        />
        <h1 className="text-xl text-black text-center font-bold mb-4">
          This Page Is Currently Under Construction
        </h1>

        <Link
          href="/home"
          className="bg-[#1E624D] px-7 py-3 rounded-full text-white font-bold text-lg mt-4"
        >
          Back to Home Page
        </Link>
      </div>
      <Footer />
    </>
  );
}
