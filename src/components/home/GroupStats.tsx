import React from "react";
import { verifiedStats } from "@/lib/data/groupData";

export const GroupStats: React.FC = () => {
  return (
    <section className="bg-[#0D0D0D] border-b border-[#27272A] py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {verifiedStats.map((stat, idx) => (
            <div
              key={idx}
              className="border-l-2 border-[#FFB612] pl-6 space-y-1 group hover:border-white transition-colors"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-4xl lg:text-5xl font-black text-white group-hover:text-[#FFB612] transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs uppercase font-mono tracking-wider text-[#FFB612]">
                  {stat.suffix}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white tracking-wide">
                {stat.label}
              </h4>
              <p className="text-xs text-[#71717A] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
