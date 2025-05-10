"use client";
import NextImage from "next/image";
import React, { useEffect, useState } from "react";

const images = [
  "/galleryImg/carousel1.svg",
  "/galleryImg/carousel2.svg",
  "/galleryImg/carousel3.svg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showSwipeInstruction, setShowSwipeInstruction] =
    useState<boolean>(true);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexAdjusted =
        prevIndex === 0 ? images.length - 1 : prevIndex - 1;

      setSelectedImage(images[prevIndexAdjusted]);
      return prevIndexAdjusted;
    });
  };

  const handleDownload = () => {
    const img = new Image();
    img.src = selectedImage!;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);
      const pngUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = "image.png";
      link.click();
    };
  };

  // Swipe for mobile
  useEffect(() => {
    if (!selectedImage) return;

    const handleTouchStart = (e: TouchEvent) => {
      const touchStartX = e.touches[0].clientX;

      const handleTouchMove = (e: TouchEvent) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) {
          handleNext();
        } else if (touchEndX - touchStartX > 50) {
          handlePrev();
        }
        window.removeEventListener(
          "touchmove",
          handleTouchMove as EventListener
        );
      };

      window.addEventListener("touchmove", handleTouchMove as EventListener);
    };

    window.addEventListener("touchstart", handleTouchStart as EventListener);
    return () => {
      window.removeEventListener(
        "touchstart",
        handleTouchStart as EventListener
      );
    };
  }, [selectedImage, currentIndex]);

  // display swipe instruction for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowSwipeInstruction(false), 3000);
    return () => clearTimeout(timer);
  }, [selectedImage]);

  return (
    <div className="flex flex-col items-center justify-center py-5 px-10">
      <h1 className="text-2xl text-black text-center font-bold p-5">
        This page is coming soon.
      </h1>

      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-2xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleImageClick(image, index)}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-auto rounded-lgshadow-md hover:opacity-80"
            />
          </div>
        ))}
      </div> */}

      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
          style={{ background: "rgba(217, 217, 217, 0.8)" }}
        >
          <div className="relative bg-white p-5 rounded-lg shadow-lg">
            <div className="flex flex-row">
              <button
                onClick={handlePrev}
                className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hidden md:block"
              >
                &#8592;
              </button>
              <img
                src={selectedImage}
                alt="Selected"
                width={500}
                height={500}
                className=" w-full h-auto rounded-lg"
              />

              <button
                onClick={handleNext}
                className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hidden md:block"
              >
                &#8594;
              </button>
            </div>

            {showSwipeInstruction && (
              <div className="absolute top-2 left-1/2 trasform -transform-x-1/2 bg-black text-black text-sm px-3 py-1 rounded-md sm:hidden flex">
                Swipe left or right to navigate
              </div>
            )}

            <div className="flex justify-center mt-4 gap-4">
              <button
                onClick={handleClose}
                className="bg-red-500 text-white px-4 py-2 rounded-md font-bold"
              >
                X
              </button>
              <button
                onClick={handleDownload}
                className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
