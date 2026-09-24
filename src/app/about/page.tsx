import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutGroup } from "@/components/home/AboutGroup";
import { GroupStats } from "@/components/home/GroupStats";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "About The Group | Heritage & Quality Management | The Signage Group",
  description: "Learn about SIGNAGE GROUP INDIA PVT. LTD., our UKAS ISO Quality Management program, 3M Authorized Converter status, and multi-business governance.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />
      <AboutGroup />
      <GroupStats />
      <FinalCTA />
      <Footer />
    </div>
  );
}
