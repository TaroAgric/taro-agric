import React from "react";

export default function Section5() {
  return (
    <div className="bg-[#1E624D] flex flex-col items-center sm:py-16 py-5">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="sm:text-4xl text-base font-bold text-white text-center">
          Contact Us
        </h2>

        <p className="p-5 text-center">
          We want to hear from you about trainings, research, collaborations, IT
          placements, public engagements, and other matters of interest.
        </p>

        <form className="flex flex-col items-center justify-around gap-5 p-5">
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 rounded-md w-full md:w-1/3 border-1 border-white text-center focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-md w-full md:w-1/3 border-1 border-white text-center focus:outline-none"
            required
          />

          <textarea
            placeholder="Message"
            className="p-2 rounded-md w-full md:w-1/3 border-1 border-white text-center focus:outline-none"
            rows={4}
            required
          />

          <button className="bg-white text-[#1E624D] p-2 rounded-md w-full md:w-1/3 font-bold">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
