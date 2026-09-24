import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "dark" | "white" | "icon";
  size?: "sm" | "md" | "lg";
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  size = "md",
  className = "",
  showText = true,
}) => {
  const height = size === "sm" ? 32 : size === "md" ? 42 : 56;
  const textColor = variant === "dark" ? "#FFFFFF" : variant === "white" ? "#FFFFFF" : "#0A0A0A";
  const yellowColor = "#FFB612";
  const blackColor = variant === "dark" || variant === "white" ? "#FFFFFF" : "#0A0A0A";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      <svg
        height={height}
        viewBox="0 0 280 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        {/* Stylized 'S' Mark */}
        <path
          d="M10 15 H 55 C 65 15, 65 35, 45 38 C 30 40, 25 45, 25 55 C 25 68, 40 68, 55 68 H 60 V 55 H 45 C 40 55, 40 50, 48 48 C 65 44, 75 35, 75 20 C 75 5, 55 5, 30 5 H 10 V 15 Z"
          fill={blackColor}
        />

        {/* Stylized 'g' Yellow Fluid Form */}
        <path
          d="M 62 10 C 85 10, 105 20, 105 38 C 105 52, 95 60, 75 62 C 65 63, 62 66, 68 70 C 78 74, 95 72, 100 70 V 78 C 88 82, 65 80, 52 74 C 42 68, 45 58, 58 54 C 75 50, 85 45, 85 35 C 85 24, 72 20, 60 20 Z"
          fill={yellowColor}
        />
        <circle cx="78" cy="32" r="8" fill={blackColor} />

        {/* Text Portion */}
        {showText && (
          <g transform="translate(115, 12)">
            {/* SIGNAGE */}
            <text
              x="0"
              y="30"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="32"
              letterSpacing="0.05em"
              fill={textColor}
            >
              SIGNAGE
            </text>
            {/* GROUP */}
            <text
              x="0"
              y="52"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="400"
              fontSize="20"
              letterSpacing="0.18em"
              fill={yellowColor}
            >
              GROUP
            </text>
          </g>
        )}
      </svg>
    </Link>
  );
};
