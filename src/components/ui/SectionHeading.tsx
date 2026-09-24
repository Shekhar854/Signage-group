import React from "react";

interface SectionHeadingProps {
  overline: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  overline,
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  return (
    <div className={`space-y-3 ${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"} ${className}`}>
      <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FFB612]">
        <span className="w-2 h-2 rounded-full bg-[#FFB612] inline-block animate-pulse" />
        <span>{overline}</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
