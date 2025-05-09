"use client";
import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

export default function Section5() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const form = useRef(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a9f5lzk",
        "template_2m5amuz",

        e.target,
        // form.current!,
        "FWv0Xcpu902SF08PG"
      )
      .then(() => {
        alert("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert(
          "There was an error sending your message. Please try again later."
        );
      });
  };

  return (
    <div
      id="contact"
      className="bg-[#1E624D] flex flex-col items-center sm:py-16 py-5"
    >
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="sm:text-4xl text-3xl font-bold text-white text-center">
          Here to Serve!
        </h2>

        <p className="p-5 text-center">
          We want to hear from you about distributorship, trainings, research,
          collaborations, IT placements, public engagements, and other matters
          of interest.
        </p>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-around gap-5 p-5"
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            className="p-2 rounded-md w-full md:w-1/3 border-1 border-white text-center focus:outline-none"
            required
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="p-2 rounded-md w-full md:w-1/3 border-1 border-white text-center focus:outline-none"
            required
            onChange={handleChange}
            value={formData.email}
          />

          <textarea
            placeholder="Message"
            id="message"
            name="message"
            className="p-2 rounded-md w-full md:w-1/3 border-1 border-white text-center focus:outline-none"
            rows={4}
            required
            onChange={handleChange}
            value={formData.message}
          />

          <button
            type="submit"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            className="bg-white text-[#1E624D] p-2 rounded-full w-full md:w-1/3 font-bold"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
