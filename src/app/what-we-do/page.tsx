import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/home/FinalCTA";
import { capabilities } from "@/lib/data/capabilities";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "What We Do | Group Capabilities Matrix | The Signage Group",
  description: "Explore the 6 turnkey visual execution capabilities of Signage Group India: Design, Print, Fabricate, Finish, Install, and Maintain.",
};

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />

      <section className="bg-[#0D0D0D] py-20 border-b border-[#27272A]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            overline="END-TO-END EXECUTION PIPELINE"
            title="WHAT WE DO"
            subtitle="From an idea on screen to a finished brand experience in the real world."
          />
        </div>
      </section>

      <section className="py-20 space-y-24">
        <div className="container mx-auto px-4 lg:px-8 space-y-20">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.id}
              id={cap.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 border-t border-[#1C1C1E] ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-mono font-bold text-[#FFB612] bg-[#FFB612]/10 px-3 py-1 rounded inline-block">
                  PILLAR {cap.number} OF 06
                </div>

                <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                  {cap.title}
                </h2>

                <p className="text-lg text-[#FFB612] font-medium">
                  "{cap.headline}"
                </p>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {cap.description}
                </p>

                <div className="space-y-2">
                  {cap.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-sm text-[#D4D4D8]">
                      <CheckCircle2 className="w-4 h-4 text-[#FFB612]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-xl overflow-hidden border border-[#27272A]">
                  <ProjectImage src={cap.image} alt={cap.title} aspectRatio="video" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
