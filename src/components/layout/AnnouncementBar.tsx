"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { groupInfo } from "@/lib/data/groupData";

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#0D0D0D] border-b border-[#27272A] text-xs py-2 px-4 text-[#A1A1AA] flex flex-wrap items-center justify-between gap-2">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#FFB612]" />
          <span>
            Head Office: <strong className="text-white font-medium">{groupInfo.headOffice.sector}, Noida</strong> (Delhi NCR)
          </span>
          <span className="hidden sm:inline-block text-[#3F3F46]">|</span>
          <span className="hidden md:inline-block text-[#71717A]">
            UKAS Quality Management ISO Certified • 3M Authorized Converter
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/businesses/signbazar"
            className="inline-flex items-center gap-1.5 text-xs text-[#FFB612] hover:underline font-medium"
          >
            <Sparkles className="w-3 h-3 animate-pulse" />
            <span>SignBazar Platform — <strong>Launching Soon</strong></span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};
