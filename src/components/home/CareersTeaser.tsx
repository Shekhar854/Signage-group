import React from "react";
import Link from "next/link";
import { ArrowUpRight, Users, Briefcase } from "lucide-react";
import { careerVacancies } from "@/lib/data/careers";

export const CareersTeaser: React.FC = () => {
  return (
    <section className="bg-[#0D0D0D] py-20 border-b border-[#27272A]" id="careers">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-[#121212] border border-[#27272A] rounded-2xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFB612]">
              <Users className="w-3.5 h-3.5" />
              <span>CAREERS AT SIGNAGE GROUP</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
              BUILD WHAT PEOPLE SEE.
            </h2>

            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              We are expanding our design engineering, print floor management, CNC fabrication, and retail project teams across Noida HQ and Sidcul Pantnagar. Join India's premier visual communication group.
            </p>

            <div className="pt-2">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 bg-[#FFB612] hover:bg-[#E59F00] text-[#0A0A0A] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-colors"
              >
                <span>EXPLORE OPEN POSITIONS ({careerVacancies.length})</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3">
            {careerVacancies.slice(0, 3).map((vac) => (
              <div
                key={vac.id}
                className="bg-[#18181B] border border-[#27272A] hover:border-[#FFB612] p-4 rounded-xl flex items-center justify-between transition-colors group"
              >
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#FFB612] transition-colors">
                    {vac.title}
                  </h4>
                  <p className="text-xs text-[#71717A] mt-0.5">
                    {vac.department} • {vac.location}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#FFB612] bg-[#FFB612]/10 px-2 py-1 rounded">
                  {vac.experience}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
