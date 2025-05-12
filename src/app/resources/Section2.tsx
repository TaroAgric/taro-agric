"use client";
import React, { useState } from "react";
import Gallery from "./Gallery";
import Articles from "./articles/Articles";
import Faq from "./Faq";
import dynamic from "next/dynamic";

// const Articles = dynamic(() => import("./articles/Articles"), { ssr: true });

export default function Section2() {
  const [active, setActive] = useState("Gallery");

  const headers = ["Gallery", "Articles", "FAQs"];

  const renderContent = () => {
    switch (active) {
      case "Gallery":
        return <Gallery />;
      case "Articles":
        return <Articles />;
      case "FAQs":
        return <Faq />;
      default:
        return <Gallery />;
    }
  };

  return (
    <div className="">
      <div className="flex flex-row items-center justify-around max-w-screen-2xl mx-auto">
        {headers.map((header) => (
          <div key={header} className="flex flex-col items-center">
            <p
              className={`md:text-xl text-sm font-bold mb-1 cursor-pointer ${
                active === header ? "text-[#1E624D] font-bold" : "text-gray-600"
              }`}
              onClick={() => setActive(header)}
            >
              {header}
            </p>
            <div
              className={`border-t-4 w-full ${
                active === header ? "border-[#1E624D]" : "border-transparent"
              }`}
            ></div>
          </div>
        ))}
      </div>
      <div className="border border-gray-400 md:mx-10 mx-3"></div>
      <div>{renderContent()}</div>
    </div>
  );
}
