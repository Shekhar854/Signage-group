"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { capabilities } from "@/lib/data/capabilities";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectImage } from "@/components/ui/ProjectImage";

export const WhatWeDo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCap = capabilities[activeTab];

  return (
    <section className="bg-[#0A0A0A] py-24 border-b border-[#27272A]" id="what-we-do">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          overline="GROUP CAPABILITIES MATRIX"
          title="WHAT WE DO"
          subtitle="From an idea on screen to a finished brand experience in the real world."
        />

        {/* Tab Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-12 mb-12">
          {capabilities.map((cap, idx) => (
            <button
              key={cap.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4 text-left rounded-lg border transition-all duration-300 ${
                activeTab === idx
                  ? "bg-[#18181B] border-[#FFB612] shadow-lg shadow-[#FFB612]/10"
                  : "bg-[#121212] border-[#27272A] hover:bg-[#1A1A1A] hover:border-[#3F3F46]"
              }`}
            >
              <span className={`text-xs font-mono font-bold block ${activeTab === idx ? "text-[#FFB612]" : "text-[#71717A]"}`}>
                {cap.number}
              </span>
              <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider block mt-1 ${activeTab === idx ? "text-white" : "text-[#A1A1AA]"}`}>
                {cap.title.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Active Capability Display Panel */}
        <div className="bg-[#121212] border border-[#27272A] rounded-2xl p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFB612] bg-[#1F1F23] px-3 py-1 rounded">
              <span>CAPABILITY {activeCap.number} OF 06</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              {activeCap.title}
            </h3>

            <p className="text-[#FFB612] text-lg font-medium leading-snug">
              "{activeCap.headline}"
            </p>

            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              {activeCap.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {activeCap.details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#D4D4D8]">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB612] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFB612] hover:text-white transition-colors"
              >
                <span>LEARN MORE ABOUT {activeCap.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-[#27272A]">
              <ProjectImage
                src={activeCap.image}
                alt={activeCap.title}
                aspectRatio="video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
