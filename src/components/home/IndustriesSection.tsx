import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const industriesList = [
  { name: "Automotive", desc: "Showroom pylon signage, illuminated dealer facades, and interior displays.", count: "Pan-India Dealer Rollouts" },
  { name: "Sports & Mega Events", desc: "Stadium venue look & feel, player dugout canopies, perimeter tri-vision & stump branding.", count: "IPL, CWG 2010, ICC" },
  { name: "Retail & Merchandising", desc: "Storefront cladding, custom acrylic display racks, slat walls & turnkey interior fitouts.", count: "Multi-City Stores" },
  { name: "Banking & Financial Services", desc: "ATM fascias, architectural pylons, glass etching, and high-security branch re-skinning.", count: "Citi, ICICI, Canara" },
  { name: "FMCG & Consumer Brands", desc: "High-volume promotional backdrops, soft fabric graphics & retail POS displays.", count: "Nestlé, Samsung" },
  { name: "Infrastructure & Real Estate", desc: "Commercial tech park monolith totems, highway unipoles & parking wayfinding.", count: "Cresterra Campus" },
];

export const IndustriesSection: React.FC = () => {
  return (
    <section className="bg-[#0A0A0A] py-24 border-b border-[#27272A]" id="industries">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          overline="SECTOR SPECIALIZATION"
          title="INDUSTRIES WE TRANSFORM"
          subtitle="Engineered physical visual solutions tailored to unique operational demands."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {industriesList.map((ind, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-[#27272A] hover:border-[#FFB612] p-8 rounded-xl space-y-4 transition-all duration-300 group"
            >
              <div className="text-xs font-mono uppercase tracking-widest text-[#FFB612]">
                SECTOR 0{idx + 1}
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#FFB612] transition-colors">
                {ind.name}
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {ind.desc}
              </p>
              <div className="pt-4 border-t border-[#1C1C1E] flex items-center justify-between text-xs text-[#71717A]">
                <span>{ind.count}</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFB612]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
