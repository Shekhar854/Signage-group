import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Industries Served | Sector Specialization | The Signage Group",
  description: "Signage Group India delivers visual communication solutions for Automotive, Sports, Retail, Banking, FMCG, Real Estate, and Infrastructure.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />
      <IndustriesSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
