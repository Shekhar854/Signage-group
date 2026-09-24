"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clientLogos, clientCategories } from "@/lib/data/clients";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const ClientWall: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>("ALL");

  const filteredClients = selectedCat === "ALL"
    ? clientLogos
    : clientLogos.filter((c) => c.category === selectedCat);

  return (
    <section className="bg-[#0A0A0A] py-24 border-b border-[#27272A]" id="clients">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            overline="TRUSTED BY BRANDS"
            title="OUR MAJOR CLIENTELE & EVENT CREDENTIALS"
            subtitle="Partnering with multinationals, mega-event organizers, financial institutions, and automotive leaders."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {clientCategories.slice(0, 6).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-colors ${
                  selectedCat === cat
                    ? "bg-[#FFB612] text-[#0A0A0A] font-bold"
                    : "bg-[#121212] text-[#71717A] hover:text-white border border-[#27272A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Client Logo Tiles Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
          {filteredClients.map((client, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-[#27272A] hover:border-[#FFB612] p-6 rounded-xl flex flex-col items-center justify-center text-center space-y-1 transition-all duration-300 group hover:bg-[#18181B] min-h-[100px]"
            >
              <span className="text-sm font-extrabold text-[#D4D4D8] group-hover:text-[#FFB612] transition-colors tracking-tight">
                {client.logoText}
              </span>
              {client.subtitle && (
                <span className="text-[10px] text-[#71717A] font-mono block">
                  {client.subtitle}
                </span>
              )}
              <span className="text-[9px] uppercase font-mono text-[#52525B] group-hover:text-[#A1A1AA] pt-1">
                {client.category}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFB612] hover:text-white transition-colors"
          >
            <span>VIEW COMPLETE CLIENT NETWORK & ACCREDITATIONS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
