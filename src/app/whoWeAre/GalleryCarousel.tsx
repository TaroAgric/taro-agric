"use client";
import React, { useCallback, useEffect, useState } from "react";

interface CarouselProps {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function GalleryCarousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < slides.length - 3 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : slides.length - 3
    );
  };

  const nextSlide = useCallback(
    () =>
      setCurrentIndex((currentIndex) =>
        currentIndex === slides.length - 3 ? 0 : currentIndex + 1
      ),
    [slides.length]
  );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(handleNext, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, nextSlide]);

  return (
    <div className="overflow-hidden  w-full relative">
      <div
        className="flex transition-transform ease-out duration-500 mb-0 gap-5"
        style={{
          transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          // width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-1/3">
            {slide}
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
      >
        &#8592;
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
      >
        &#8594;
      </button>
    </div>
  );
}
