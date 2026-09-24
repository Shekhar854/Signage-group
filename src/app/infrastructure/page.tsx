import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InfrastructureSection } from "@/components/home/InfrastructureSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Manufacturing Infrastructure & Machinery | The Signage Group",
  description: "Detailed spec sheets of our Vutek, Roland, HP UV/Eco-Solvent printing presses, Gerber Sabre CNC routers, powder coating plant, and fabrication floor.",
};

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />
      <InfrastructureSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
