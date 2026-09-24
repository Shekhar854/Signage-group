import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/home/FinalCTA";
import { businessUnits } from "@/lib/data/businesses";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { CheckCircle2, ArrowUpRight, ShieldCheck, Factory } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "SIGN-AGE | Core Signage & Steel Fabrication Division | The Signage Group",
  description: "Sign-Age is the parent core operational entity of The Signage Group, specializing in architectural signage, structural steel fabrication, civil works, large-format printing, and sports event branding.",
};

export default function SignAgePage() {
  const signAgeData = businessUnits.find((b) => b.id === "sign-age")!;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#0D0D0D] py-20 border-b border-[#27272A] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FFB612]/10 border border-[#FFB612]/30 text-[#FFB612] text-xs font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full font-bold">
              <span>PARENT / CORE OPERATIONAL BUSINESS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              SIGN-AGE
            </h1>

            <p className="text-xl text-[#FFB612] font-semibold">
              "{signAgeData.tagline}"
            </p>

            <p className="text-base text-[#A1A1AA] leading-relaxed">
              {signAgeData.fullDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-[#FFB612] text-[#0A0A0A] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded"
              >
                <span>REQUEST SIGN-AGE PROJECT QUOTE</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Capabilities Grid */}
      <section className="py-20 border-b border-[#27272A]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            overline="FACTUAL CAPABILITIES"
            title="DOCUMENTED SIGN-AGE EXECUTION DIVISION"
            subtitle="Built on heritage experience, UKAS ISO quality standards, and 3M media authorization."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {signAgeData.capabilities.map((cap, idx) => (
              <div key={idx} className="bg-[#121212] border border-[#27272A] p-6 rounded-xl space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB612]" />
                  <h3 className="text-base font-bold text-white">{cap}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
