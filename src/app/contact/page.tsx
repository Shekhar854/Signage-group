"use client";

import React, { useState } from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { groupInfo } from "@/lib/data/groupData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Mail, Phone, MessageSquare, Send, Check } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />

      {/* Header */}
      <section className="bg-[#0D0D0D] py-20 border-b border-[#27272A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FFB612]">
            <span>GET IN TOUCH WITH THE GROUP</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            LET'S BUILD SOMETHING PEOPLE CAN SEE.
          </h1>

          <p className="text-base text-[#A1A1AA] leading-relaxed">
            Reach out to our corporate headquarters in Assotech Business Cresterra, Noida, or connect with our regional production workstations.
          </p>
        </div>
      </section>

      {/* Offices & Contact Form Grid */}
      <section className="py-20 border-b border-[#27272A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Locations & Direct Contacts */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#121212] border border-[#27272A] p-6 rounded-2xl space-y-4">
                <div className="text-xs uppercase font-mono tracking-widest text-[#FFB612] font-bold flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Head Office (Noida)</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Assotech Business Cresterra HQ
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {groupInfo.headOffice.fullAddress}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#FFB612] font-bold">
                  Manufacturing & Workstation Plants
                </h4>

                {groupInfo.mfgUnits.map((plant, idx) => (
                  <div key={idx} className="bg-[#121212] border border-[#27272A] p-4 rounded-xl space-y-1">
                    <h5 className="text-sm font-bold text-white">{plant.name}</h5>
                    <p className="text-xs text-[#71717A]">{plant.address}</p>
                  </div>
                ))}
              </div>

              {/* Direct Touch */}
              <div className="space-y-3 pt-4 border-t border-[#1C1C1E]">
                <a
                  href={groupInfo.contacts.whatsappPlaceholder}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between bg-[#10B981]/10 border border-[#10B981]/30 hover:bg-[#10B981]/20 text-[#10B981] p-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Connect via WhatsApp</span>
                  </span>
                  <span>CLICK TO CHAT</span>
                </a>
              </div>
            </div>

            {/* Right Col: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#121212] border border-[#27272A] p-8 rounded-2xl space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  SEND AN ENQUIRY TO THE GROUP
                </h3>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase font-mono text-[#A1A1AA] mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikram Mehta"
                          className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase font-mono text-[#A1A1AA] mb-1">Company / Brand *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Hero MotoCorp"
                          className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase font-mono text-[#A1A1AA] mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase font-mono text-[#A1A1AA] mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98100 XXXXX"
                          className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono text-[#A1A1AA] mb-1">Project Details / Message</label>
                      <textarea
                        rows={4}
                        placeholder="Describe your signage, printing, fabrication or retail project requirements..."
                        className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#FFB612] hover:bg-[#E59F00] text-[#0A0A0A] font-extrabold text-xs uppercase tracking-wider py-4 rounded transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>SUBMIT ENQUIRY</span>
                    </button>
                  </form>
                ) : (
                  <div className="bg-[#FFB612]/10 border border-[#FFB612]/30 p-8 rounded-xl text-center space-y-3">
                    <Check className="w-8 h-8 text-[#FFB612] mx-auto" />
                    <h4 className="text-xl font-bold text-white">ENQUIRY RECEIVED</h4>
                    <p className="text-xs text-[#A1A1AA]">
                      Thank you for contacting The Signage Group. Our Noida engineering team will reach out to you within 24 business hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
