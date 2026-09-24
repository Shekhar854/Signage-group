import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InsightsSection } from "@/components/home/InsightsSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Insights & Technical Journal | From the Workshop | The Signage Group",
  description: "Technical articles on substrate engineering, wayfinding psychology, and stadium branding execution.",
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />
      <InsightsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
