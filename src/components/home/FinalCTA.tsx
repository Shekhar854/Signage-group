import React from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, PhoneCall } from "lucide-react";
import { groupInfo } from "@/lib/data/groupData";

export const FinalCTA: React.FC = () => {
  return (
    <section className="bg-[#FFB612] text-[#0A0A0A] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl space-y-8">
        <div className="inline-flex items-center gap-2 bg-[#0A0A0A] text-[#FFB612] text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full font-bold">
          <span>LET'S BUILD SOMETHING PEOPLE CAN SEE</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight uppercase">
          READY TO TURN YOUR BRAND IDEA INTO A PHYSICAL REALITY?
        </h2>

        <p className="text-base sm:text-xl font-medium text-[#1A1A1A] max-w-2xl mx-auto leading-relaxed">
          Talk directly to our Noida engineering and project team for architectural signage, retail store rollouts, outdoor publicity, or mega event branding.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/quote"
            className="inline-flex items-center gap-3 bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white font-extrabold text-sm uppercase tracking-wider px-9 py-4 rounded transition-all duration-300 shadow-2xl hover:scale-105"
          >
            <span>REQUEST A PROJECT QUOTE</span>
            <ArrowUpRight className="w-5 h-5 text-[#FFB612]" />
          </Link>

          <a
            href={groupInfo.contacts.whatsappPlaceholder}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-[#0A0A0A] font-bold text-sm uppercase tracking-wider px-7 py-4 rounded transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-[#10B981]" />
            <span>TALK ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
};
