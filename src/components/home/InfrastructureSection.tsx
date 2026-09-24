import React from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Wrench, Printer } from "lucide-react";
import { infrastructureUnits } from "@/lib/data/infrastructure";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const InfrastructureSection: React.FC = () => {
  return (
    <section className="bg-[#0D0D0D] py-24 border-b border-[#27272A]" id="infrastructure">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            overline="INSIDE THE PRODUCTION FLOOR"
            title="PHYSICAL MANUFACTURING INFRASTRUCTURE"
            subtitle="Owning world-class printing presses, CNC routers, welding stations, and finishing lines."
          />

          <Link
            href="/infrastructure"
            className="inline-flex items-center gap-2 bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded transition-colors self-start lg:self-auto"
          >
            <span>FULL MACHINERY SPECIFICATIONS</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFB612]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {infrastructureUnits.map((unit, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-[#27272A] p-8 rounded-2xl space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#FFB612]">
                  <span>DIVISION 0{idx + 1}</span>
                  {idx === 0 ? <Printer className="w-4 h-4" /> : idx === 1 ? <Wrench className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {unit.name}
                </h3>

                <p className="text-xs text-[#A1A1AA]">
                  {unit.description}
                </p>

                <div className="space-y-3 pt-2">
                  {unit.machines.slice(0, 4).map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-[#18181B] border border-[#27272A] p-3 rounded-lg space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{m.name}</span>
                        <span className="text-[10px] font-mono text-[#FFB612] bg-[#FFB612]/10 px-1.5 py-0.5 rounded">
                          {m.specs}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#71717A]">
                        {m.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-xs font-mono text-[#71717A] text-right">
                Verified Plant Equipment
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
