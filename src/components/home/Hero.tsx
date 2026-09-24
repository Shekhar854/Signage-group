"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Factory, Layers, Sparkles } from "lucide-react";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { groupInfo } from "@/lib/data/groupData";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#0A0A0A] pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden border-b border-[#27272A]">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFB612]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bold Editorial Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#1C1C1E] border border-[#27272A] px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#FFB612]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SIGNAGE GROUP INDIA PVT. LTD.</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.04]">
              WE BUILD THE <span className="text-gradient-yellow">PHYSICAL SIDE</span> OF YOUR BRAND.
            </h1>

            <p className="text-base sm:text-xl text-[#A1A1AA] leading-relaxed max-w-2xl">
              From architectural signage and superwide printing to custom metal fabrication, sports venue branding, turnkey installation, and maintenance—we unify specialist businesses into one integrated execution network.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/quote"
                className="inline-flex items-center gap-3 bg-[#FFB612] hover:bg-[#E59F00] text-[#0A0A0A] font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,182,18,0.4)]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>

              <Link
                href="/businesses"
                className="inline-flex items-center gap-2 bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-white font-bold text-sm uppercase tracking-wider px-6 py-4 rounded transition-all"
              >
                <span>EXPLORE BUSINESSES</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#1C1C1E] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#71717A]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFB612]" />
                <span>UKAS Quality ISO Adherence</span>
              </div>
              <div className="flex items-center gap-2">
                <Factory className="w-4 h-4 text-[#FFB612]" />
                <span>5 NCR Production Plants</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Layers className="w-4 h-4 text-[#FFB612]" />
                <span>3M Authorized Converter</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Cinematic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#27272A] shadow-2xl bg-[#121212]">
              <ProjectImage
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80"
                alt="Signage Group Production Erection"
                aspectRatio="portrait"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0A0A0A]/90 backdrop-blur-md rounded-xl border border-[#27272A] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#FFB612]">
                  <span>ONE EXECUTION NETWORK</span>
                  <span>NOIDA HQ</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  Turnkey Visual Communication & Fabrication
                </h3>
                <p className="text-xs text-[#A1A1AA] line-clamp-2">
                  Operating Sign-Age, PromoCare, and upcoming SignBazar digital platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
