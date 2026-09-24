import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Building2, Store, ShoppingBag } from "lucide-react";
import { businessUnits } from "@/lib/data/businesses";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const BusinessEcosystem: React.FC = () => {
  return (
    <section className="bg-[#0D0D0D] py-24 border-b border-[#27272A]" id="businesses">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          overline="GROUP BUSINESS UNITS"
          title="ONE GROUP. MULTIPLE SPECIALISTS."
          subtitle="Combining focused execution capabilities under one parent operating framework."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {businessUnits.map((biz) => {
            const isComingSoon = biz.status === "LAUNCHING_SOON";

            return (
              <div
                key={biz.id}
                className={`relative rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 group ${
                  isComingSoon
                    ? "bg-[#101311] border-[#10B981]/30 hover:border-[#10B981]"
                    : "bg-[#121212] border-[#27272A] hover:border-[#FFB612]"
                }`}
              >
                <div className="space-y-6">
                  {/* Top Status Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#71717A]">
                      {biz.relationship}
                    </span>
                    {isComingSoon ? (
                      <span className="inline-flex items-center gap-1.5 text-xs bg-[#10B981]/20 text-[#10B981] font-mono px-3 py-1 rounded-full font-bold">
                        <Sparkles className="w-3 h-3 animate-pulse" />
                        <span>LAUNCHING SOON</span>
                      </span>
                    ) : (
                      <span className="text-xs text-[#FFB612] font-mono font-bold">
                        ACTIVE OPERATIONAL
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-3xl font-extrabold text-white group-hover:text-[#FFB612] transition-colors">
                      {biz.name}
                    </h3>
                    <p className="text-xs text-[#FFB612] font-medium mt-1">
                      {biz.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {biz.shortDescription}
                  </p>

                  {/* Capability Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {biz.capabilities.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] uppercase tracking-wider font-mono bg-[#18181B] text-[#D4D4D8] px-2.5 py-1 rounded border border-[#27272A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-8 mt-8 border-t border-[#1C1C1E]">
                  <Link
                    href={biz.ctaLink}
                    className={`inline-flex items-center justify-between w-full font-bold text-xs uppercase tracking-wider px-5 py-3 rounded transition-colors ${
                      isComingSoon
                        ? "bg-[#10B981] text-[#0A0A0A] hover:bg-[#059669]"
                        : "bg-[#18181B] hover:bg-[#FFB612] text-white hover:text-[#0A0A0A]"
                    }`}
                  >
                    <span>{biz.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
