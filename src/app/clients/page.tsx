import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ClientWall } from "@/components/home/ClientWall";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Client Network & Credentials | The Signage Group",
  description: "Wall of client trust: Maruti Suzuki, Hero Honda, Samsung, Citi, Vodafone, Commonwealth Games 2010, IPL Twenty20, 3M Authorized Converter.",
};

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />
      <ClientWall />
      <FinalCTA />
      <Footer />
    </div>
  );
}
