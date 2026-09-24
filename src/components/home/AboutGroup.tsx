import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Award, HeartHandshake } from "lucide-react";
import { groupInfo } from "@/lib/data/groupData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const AboutGroup: React.FC = () => {
  return (
    <section className="bg-[#0D0D0D] py-24 border-b border-[#27272A]" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              overline="THE GROUP STORY"
              title="WE DO NOT BELIEVE IN HIGH PROMISES. OUR WORK SPEAKS FOR US."
            />

            <p className="text-base text-[#D4D4D8] leading-relaxed">
              SIGN-AGE Group is one of the largest sign and visual communication suppliers in India. In the marketplace, our expertise in the industry dates back to heritage origins (1884).
            </p>

            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              We are a group of professionals with in-depth knowledge of Signage, Fabrication (Steel, Aluminium & Wood), Outdoor Publicity, Civil works, and large-format printing. By adhering to international standards of quality under the UKAS Quality Management Program, we deliver value-added physical products and services to multinational clients across the Indian subcontinent.
            </p>

            <div className="bg-[#121212] border-l-4 border-[#FFB612] p-5 rounded-r-xl">
              <blockquote className="text-lg font-bold text-white italic">
                "We are not into manufacturing of products, we manufacture ideas!"
              </blockquote>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#FFB612] hover:bg-[#E59F00] text-[#0A0A0A] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-colors"
              >
                <span>DISCOVER OUR HERITAGE & MISSION</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#121212] border border-[#27272A] p-6 rounded-xl space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#FFB612]" />
              <h4 className="text-base font-bold text-white">UKAS ISO Quality</h4>
              <p className="text-xs text-[#A1A1AA]">
                Adherence to international standards of quality management and structural safety.
              </p>
            </div>

            <div className="bg-[#121212] border border-[#27272A] p-6 rounded-xl space-y-3">
              <Award className="w-8 h-8 text-[#FFB612]" />
              <h4 className="text-base font-bold text-white">3M Preferred Partner</h4>
              <p className="text-xs text-[#A1A1AA]">
                3M Authorized Converter with access to over 60,000 graphics substrates.
              </p>
            </div>

            <div className="bg-[#121212] border border-[#27272A] p-6 rounded-xl space-y-3">
              <HeartHandshake className="w-8 h-8 text-[#FFB612]" />
              <h4 className="text-base font-bold text-white">Direct Execution</h4>
              <p className="text-xs text-[#A1A1AA]">
                No middle agencies involved, providing maximum value and failure-proof delivery schedules.
              </p>
            </div>

            <div className="bg-[#121212] border border-[#27272A] p-6 rounded-xl space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#FFB612]" />
              <h4 className="text-base font-bold text-white">5 Regional Units</h4>
              <p className="text-xs text-[#A1A1AA]">
                Cohesive backup of five workstations located across the National Capital Region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
