import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BusinessEcosystem } from "@/components/home/BusinessEcosystem";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Group Business Units | The Signage Group",
  description: "Explore Signage Group's operating entities: Sign-Age (Parent/Core), PromoCare (Retail & Sports Subsidiary), and SignBazar (Upcoming Platform).",
};

export default function BusinessesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />
      <BusinessEcosystem />
      <FinalCTA />
      <Footer />
    </div>
  );
}
