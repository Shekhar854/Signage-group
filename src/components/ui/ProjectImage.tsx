"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, ImageOff } from "lucide-react";

interface ProjectImageProps {
  src: string;
  alt: string;
  category?: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide";
  className?: string;
  onClick?: () => void;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  category,
  aspectRatio = "video",
  className = "",
  onClick,
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  };

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-[#18181B] group ${aspectClasses[aspectRatio]} ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {!error ? (
        <Image
          src={src}
          alt={alt || "Signage Group Project Image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
            loading ? "scale-105 blur-sm brightness-90" : "scale-100 blur-0 brightness-100"
          }`}
          onLoad={() => setLoading(false)}
          onError={() => setError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#18181B] text-[#71717A] p-4 text-center">
          <ImageOff className="w-8 h-8 mb-2 opacity-50" />
          <span className="text-xs font-mono uppercase tracking-wider">[IMAGE REQUIRED]</span>
          {category && <span className="text-[10px] text-[#A1A1AA] mt-1">{category}</span>}
        </div>
      )}

      {/* Subtle Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Category Tag */}
      {category && (
        <div className="absolute top-3 left-3 bg-[#0A0A0A]/80 backdrop-blur-md text-[#FFB612] text-[10px] uppercase tracking-widest font-mono px-2.5 py-1 rounded border border-[#27272A] z-10">
          {category}
        </div>
      )}

      {/* Hover Zoom Icon */}
      {onClick && (
        <div className="absolute bottom-3 right-3 bg-[#FFB612] text-[#0A0A0A] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
          <Maximize2 className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};
