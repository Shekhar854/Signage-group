import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CareersTeaser } from "@/components/home/CareersTeaser";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Careers | Build What People See | The Signage Group",
  description: "Explore job vacancies at Signage Group India across CAD engineering, print floor management, CNC fabrication, and retail project execution.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />
      <CareersTeaser />
      <FinalCTA />
      <Footer />
    </div>
  );
}
