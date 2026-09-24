import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { GroupStats } from "@/components/home/GroupStats";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { BusinessEcosystem } from "@/components/home/BusinessEcosystem";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { PortfolioShowcase } from "@/components/home/PortfolioShowcase";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { InfrastructureSection } from "@/components/home/InfrastructureSection";
import { ClientWall } from "@/components/home/ClientWall";
import { AboutGroup } from "@/components/home/AboutGroup";
import { InsightsSection } from "@/components/home/InsightsSection";
import { CareersTeaser } from "@/components/home/CareersTeaser";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white selection:bg-[#FFB612] selection:text-[#0A0A0A]">
      {/* 01. Announcement Bar */}
      <AnnouncementBar />

      {/* 02. Navigation */}
      <Navbar />

      {/* 03. Hero Section */}
      <Hero />

      {/* 04. Proof / Group Stats */}
      <GroupStats />

      {/* 05. What We Do Capabilities Matrix */}
      <WhatWeDo />

      {/* 06. Business Ecosystem Grid */}
      <BusinessEcosystem />

      {/* 07. Integrated Execution Process Timeline */}
      <ProcessTimeline />

      {/* 08. Selected Work Showcase */}
      <PortfolioShowcase />

      {/* 09. Industries We Serve */}
      <IndustriesSection />

      {/* 10. Infrastructure Floor */}
      <InfrastructureSection />

      {/* 11. Client Wall of Trust */}
      <ClientWall />

      {/* 12. About the Group */}
      <AboutGroup />

      {/* 13. Insights & Journal */}
      <InsightsSection />

      {/* 14. Careers Teaser */}
      <CareersTeaser />

      {/* 15. Final High-Impact CTA */}
      <FinalCTA />

      {/* 16. Industrial Group Footer */}
      <Footer />
    </div>
  );
}
