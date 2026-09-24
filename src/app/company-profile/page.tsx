import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { groupInfo } from "@/lib/data/groupData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FileText, Download, ShieldCheck, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Official Company Profile & Brochure | The Signage Group",
  description: "View and download the official company profile, UKAS ISO accreditations, and infrastructure details for Signage Group India Pvt. Ltd.",
};

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />

      <section className="bg-[#0D0D0D] py-20 border-b border-[#27272A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFB612]/10 text-[#FFB612] text-xs font-mono uppercase tracking-widest px-3.5 py-1 rounded-full font-bold">
            <span>OFFICIAL CORPORATE PROFILE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            COMPANY PROFILE & CAPABILITIES DOCKET
          </h1>

          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl mx-auto">
            Comprehensive overview of SIGN-AGE Group India Pvt. Ltd. heritage, infrastructure machinery, sports event credentials, and 3M partnership.
          </p>
        </div>
      </section>

      <section className="py-20 border-b border-[#27272A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-[#121212] border border-[#27272A] p-8 lg:p-12 rounded-2xl space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1C1C1E]">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-[#FFB612]/10 text-[#FFB612] rounded-xl border border-[#FFB612]/30">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">SIGN-AGE Company Profile Brochure</h3>
                  <p className="text-xs text-[#71717A]">Official Corporate Docket • PDF Format • 12 Pages</p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="/downloads/sign-age-company-profile.pdf"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-[#FFB612] text-[#0A0A0A] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded w-full sm:w-auto"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD PDF BROCHURE</span>
                </a>
              </div>
            </div>

            {/* Document summary facts */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#FFB612] font-bold">
                VERIFIED DOCKET HIGHLIGHTS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#D4D4D8]">
                <div className="flex items-start gap-2 bg-[#18181B] p-4 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-[#FFB612] shrink-0 mt-0.5" />
                  <span>UKAS Quality Management ISO Standard Adherence</span>
                </div>
                <div className="flex items-start gap-2 bg-[#18181B] p-4 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-[#FFB612] shrink-0 mt-0.5" />
                  <span>3M Commercial Graphics Division Authorized Converter</span>
                </div>
                <div className="flex items-start gap-2 bg-[#18181B] p-4 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-[#FFB612] shrink-0 mt-0.5" />
                  <span>DAVP Registered & Delhi Municipal Corporation Certified</span>
                </div>
                <div className="flex items-start gap-2 bg-[#18181B] p-4 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-[#FFB612] shrink-0 mt-0.5" />
                  <span>Turnkey Showrooms concept: False Ceiling, Flooring, Electrical & Furniture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
