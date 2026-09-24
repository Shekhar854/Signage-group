"use client";

import React, { useState } from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { businessUnits } from "@/lib/data/businesses";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sparkles, Check, Send } from "lucide-react";

export default function SignBazarPage() {
  const signBazarData = businessUnits.find((b) => b.id === "signbazar")!;
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#0A120D] py-24 border-b border-[#10B981]/20 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full font-bold">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>PLANNED UPCOMING DIGITAL PLATFORM — LAUNCHING SOON</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            SIGNBAZAR
          </h1>

          <p className="text-xl text-[#10B981] font-semibold">
            "{signBazarData.tagline}"
          </p>

          <p className="text-base text-[#A1A1AA] leading-relaxed">
            {signBazarData.fullDescription}
          </p>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section className="py-20 border-b border-[#27272A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-xl">
          <div className="bg-[#121212] border border-[#27272A] p-8 rounded-2xl space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-white">
                JOIN THE SIGNBAZAR EARLY ACCESS WAITLIST
              </h3>
              <p className="text-xs text-[#A1A1AA]">
                Be the first to get notified when SignBazar online custom printing portal launches.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-mono text-[#A1A1AA] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#10B981] text-white px-4 py-3 rounded text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono text-[#A1A1AA] mb-1">Company / Business Name</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Apex Marketing Pvt Ltd"
                    className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#10B981] text-white px-4 py-3 rounded text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono text-[#A1A1AA] mb-1">Work Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#10B981] text-white px-4 py-3 rounded text-sm outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#10B981] hover:bg-[#059669] text-[#0A0A0A] font-extrabold text-sm uppercase tracking-wider py-4 rounded transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>GET NOTIFIED ON LAUNCH</span>
                </button>
              </form>
            ) : (
              <div className="bg-[#10B981]/10 border border-[#10B981]/30 p-6 rounded-xl text-center space-y-3">
                <Check className="w-8 h-8 text-[#10B981] mx-auto" />
                <h4 className="text-lg font-bold text-white">YOU ARE ON THE WAITLIST!</h4>
                <p className="text-xs text-[#A1A1AA]">
                  Thank you {name || "friend"}. We have registered {email} and will notify you as soon as SignBazar opens early registration.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
