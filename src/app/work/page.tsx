import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortfolioShowcase } from "@/components/home/PortfolioShowcase";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Selected Work | Project Portfolio | The Signage Group",
  description: "Browse selected real-world visual signage, large-format printing, custom fabrication, and stadium branding case studies by Signage Group India.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />
      <PortfolioShowcase />
      <FinalCTA />
      <Footer />
    </div>
  );
}
