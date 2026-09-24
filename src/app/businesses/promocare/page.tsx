import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/home/FinalCTA";
import { businessUnits } from "@/lib/data/businesses";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, ArrowUpRight, Store } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "PROMOCARE | Retail Merchandising & Sports Branding Subsidiary | The Signage Group",
  description: "PromoCare is a specialist subsidiary of The Signage Group focusing on retail displays, store rollouts, fabric graphics, wayfinding, and nationwide operations & maintenance.",
};

export default function PromoCarePage() {
  const promoCareData = businessUnits.find((b) => b.id === "promocare")!;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#0D0D0D] py-20 border-b border-[#27272A] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] text-xs font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full font-bold">
              <span>SPECIALIST SUBSIDIARY COMPANY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              PROMOCARE
            </h1>

            <p className="text-xl text-[#3B82F6] font-semibold">
              "{promoCareData.tagline}"
            </p>

            <p className="text-base text-[#A1A1AA] leading-relaxed">
              {promoCareData.fullDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded"
              >
                <span>REQUEST PROMOCARE RETAIL & O&M QUOTE</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documented Business Divisions */}
      <section className="py-20 border-b border-[#27272A]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            overline="SPECIALIST DIVISIONS"
            title="PROMOCARE 05 OPERATIONAL DIVISIONS"
            subtitle="Engineered for high-touch retail environments, sports arenas, and ongoing site care."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {promoCareData.divisions?.map((div, idx) => (
              <div key={idx} className="bg-[#121212] border border-[#27272A] p-6 rounded-xl space-y-3">
                <Store className="w-6 h-6 text-[#3B82F6]" />
                <h3 className="text-lg font-bold text-white">{div}</h3>
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
