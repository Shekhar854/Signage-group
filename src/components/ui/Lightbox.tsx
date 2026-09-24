"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  title?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  title,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 animate-in fade-in duration-200">
      {/* Top Header Controls */}
      <div className="flex items-center justify-between z-10 text-white border-b border-[#27272A] pb-4">
        <div>
          <h4 className="text-sm font-bold">{title || "Project Image Gallery"}</h4>
          <p className="text-xs text-[#71717A]">
            Image {currentIndex + 1} of {images.length}
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 bg-[#1C1C1E] hover:bg-[#FFB612] hover:text-[#0A0A0A] rounded-full transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image View */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        <div className="relative w-full h-full max-w-5xl max-h-[75vh]">
          <Image
            src={images[currentIndex]}
            alt={`Gallery view ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Prev / Next Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
              className="absolute left-4 p-3 bg-[#1C1C1E]/80 hover:bg-[#FFB612] hover:text-[#0A0A0A] text-white rounded-full transition-colors backdrop-blur-md"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              className="absolute right-4 p-3 bg-[#1C1C1E]/80 hover:bg-[#FFB612] hover:text-[#0A0A0A] text-white rounded-full transition-colors backdrop-blur-md"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Bottom Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 z-10">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(idx)}
              className={`relative w-16 h-12 rounded overflow-hidden transition-all ${
                idx === currentIndex ? "ring-2 ring-[#FFB612] scale-105" : "opacity-50 hover:opacity-100"
              }`}
            >
              <Image src={img} alt={`Thumb ${idx}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
