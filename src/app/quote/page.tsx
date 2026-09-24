"use client";

import React, { useState } from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, Send, UploadCloud, MessageSquare } from "lucide-react";
import { groupInfo } from "@/lib/data/groupData";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "Noida / Delhi NCR",
    projectType: "Signage & Fabrication",
    industry: "Retail & Automotive",
    quantity: "1 - 10 Units",
    timeline: "Within 2 Weeks",
    budgetRange: "₹1 Lakh - ₹5 Lakhs",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />

      {/* Header */}
      <section className="bg-[#0D0D0D] py-16 border-b border-[#27272A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFB612]/10 text-[#FFB612] text-xs font-mono uppercase tracking-widest px-3.5 py-1 rounded-full font-bold">
            <span>DIRECT PROJECT ESTIMATOR</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            REQUEST A PROJECT QUOTE
          </h1>

          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl mx-auto">
            Fill out your project specifications for architectural signage, superwide printing, custom steel fabrication, retail store rollouts, or sports venue branding.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 border-b border-[#27272A]">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="bg-[#121212] border border-[#27272A] p-8 lg:p-12 rounded-2xl space-y-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step indicator */}
                <div className="flex items-center justify-between text-xs font-mono border-b border-[#1C1C1E] pb-4">
                  <span className="text-[#FFB612] font-bold">PROJECT SPECIFICATION FORM</span>
                  <span className="text-[#71717A]">ALL ENTRIES DIRECTLY SENT TO NOIDA HQ</span>
                </div>

                {/* Section 1: Contact Details */}
                <div className="space-y-4">
                  <h3 className="text-sm uppercase font-mono tracking-wider text-[#FFB612] font-bold">
                    01. CLIENT & CONTACT DETAILS
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ankit Verma"
                        className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Company / Organization *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Maruti Suzuki India"
                        className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98100 XXXXX"
                        className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A1A1AA] mb-1">City / Location *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Noida / Delhi / Mumbai"
                        className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Project Specifications */}
                <div className="space-y-4 pt-4 border-t border-[#1C1C1E]">
                  <h3 className="text-sm uppercase font-mono tracking-wider text-[#FFB612] font-bold">
                    02. PROJECT SPECIFICATIONS
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Project Type</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                      >
                        <option value="Signage & Fabrication">Signage & Metal Fabrication</option>
                        <option value="Large Format Printing">Large-Format & UV Printing</option>
                        <option value="Retail Store Rollout">Retail Merchandising & Store Rollout</option>
                        <option value="Sports & Stadium Branding">Sports & Event Stadium Branding</option>
                        <option value="Architectural Wayfinding">Architectural Campus Wayfinding</option>
                        <option value="Operations & Maintenance">Operations & Maintenance (O&M)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Industry Sector</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                      >
                        <option value="Automotive">Automotive</option>
                        <option value="Sports & Events">Sports & Mega Events</option>
                        <option value="Retail & FMCG">Retail & FMCG</option>
                        <option value="Banking & Financial">Banking & Finance</option>
                        <option value="Corporate & Real Estate">Corporate & Real Estate</option>
                        <option value="Healthcare & Infrastructure">Healthcare & Infrastructure</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Approx. Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 5 Pylons / 100 Stores"
                        className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Expected Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                      >
                        <option value="Urgent (< 1 Week)">Urgent (&lt; 1 Week)</option>
                        <option value="Within 2 Weeks">Within 2 Weeks</option>
                        <option value="1 Month">Within 1 Month</option>
                        <option value="Flexible Schedule">Flexible Schedule</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Estimated Budget Range</label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                      >
                        <option value="< ₹1 Lakh">&lt; ₹1 Lakh</option>
                        <option value="₹1 Lakh - ₹5 Lakhs">₹1 Lakh - ₹5 Lakhs</option>
                        <option value="₹5 Lakhs - ₹25 Lakhs">₹5 Lakhs - ₹25 Lakhs</option>
                        <option value="₹25 Lakhs+">₹25 Lakhs+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Requirement Notes & Specs</label>
                    <textarea
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Specify material requirements, lighting (LED/Non-lit), dimensions, wind load, or site conditions..."
                      className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#FFB612] text-white px-4 py-3 rounded text-sm outline-none"
                    />
                  </div>

                  {/* Reference Attachment Placeholder */}
                  <div className="border border-dashed border-[#27272A] rounded-xl p-6 text-center space-y-2 bg-[#18181B]/50">
                    <UploadCloud className="w-8 h-8 text-[#FFB612] mx-auto opacity-70" />
                    <span className="text-xs font-bold text-white block">ATTACH REFERENCE DRAWINGS / BRAND GUIDELINES</span>
                    <span className="text-[11px] text-[#71717A] block">PDF, CAD, AI, PNG, or JPG (Up to 25MB)</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1C1C1E]">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#FFB612] hover:bg-[#E59F00] text-[#0A0A0A] font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT QUOTE REQUEST</span>
                  </button>

                  <a
                    href={groupInfo.contacts.whatsappPlaceholder}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto text-center border border-[#27272A] hover:border-[#FFB612] text-white font-bold text-xs uppercase tracking-wider px-6 py-4 rounded transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#10B981]" />
                    <span>SEND INSTANT WHATSAPP BRIEF</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="bg-[#FFB612]/10 border border-[#FFB612]/30 p-10 rounded-xl text-center space-y-4">
                <Check className="w-12 h-12 text-[#FFB612] mx-auto" />
                <h3 className="text-2xl font-bold text-white">QUOTE REQUEST TRANSMITTED</h3>
                <p className="text-sm text-[#A1A1AA] max-w-lg mx-auto">
                  Thank you {formData.name} from {formData.company}. Your project quote request for <strong>{formData.projectType}</strong> has been routed directly to our Noida Sector 135 engineering desk. A dedicated project manager will contact you at <strong>{formData.phone}</strong>.
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
