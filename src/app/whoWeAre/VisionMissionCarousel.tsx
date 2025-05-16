"use client";
import React, { useCallback, useEffect, useState } from "react";

interface CarouselProps {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function VisionMissionCarousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 5000,
}: CarouselProps) {
  const [currentNumber, setCurrentNumber] = useState(0);

  const nextSlide = useCallback(
    () =>
      setCurrentNumber((currentNumber) =>
        currentNumber === slides.length - 1 ? 0 : currentNumber + 1
      ),
    [slides.length]
  );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, nextSlide]);

  return (
    <div className="relative overflow-hidden  w-full">
      <div
        className="flex transition-transform ease-out duration-700 mb-0"
        style={{ transform: `translateX(-${currentNumber * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            {slide}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-1 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentNumber(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentNumber ? "bg-[#1E624D]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
