import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/home/FinalCTA";
import { projects } from "@/lib/data/projects";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { ArrowUpRight, MapPin, Calendar, Building, CheckCircle2 } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: "Project Not Found | The Signage Group" };
  return {
    title: `${project.title} | Case Study | The Signage Group`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <AnnouncementBar />
      <Navbar />

      {/* Hero Header */}
      <section className="bg-[#0D0D0D] py-20 border-b border-[#27272A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#FFB612]">
              <span className="bg-[#FFB612]/10 border border-[#FFB612]/30 px-3 py-1 rounded uppercase">
                {project.category}
              </span>
              <span>{project.businessUnit} DIVISION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-[#A1A1AA]">
              {project.summary}
            </p>

            {/* Quick Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#1C1C1E] text-xs">
              <div>
                <span className="text-[#71717A] uppercase font-mono block">Client</span>
                <span className="font-bold text-white">{project.client}</span>
              </div>

              <div>
                <span className="text-[#71717A] uppercase font-mono block">Location</span>
                <span className="font-bold text-white flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#FFB612]" />
                  {project.location}
                </span>
              </div>

              <div>
                <span className="text-[#71717A] uppercase font-mono block">Year</span>
                <span className="font-bold text-white">{project.year}</span>
              </div>

              <div>
                <span className="text-[#71717A] uppercase font-mono block">Execution</span>
                <span className="font-bold text-[#FFB612]">{project.businessUnit}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Banner */}
      <section className="py-12 border-b border-[#27272A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-[#27272A] max-h-[600px]">
            <ProjectImage src={project.mainImage} alt={project.title} aspectRatio="wide" />
          </div>
        </div>
      </section>

      {/* Deep-Dive Case Details */}
      <section className="py-20 border-b border-[#27272A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              {/* Challenge */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">THE CHALLENGE</h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {project.challenge || "[CONTENT REQUIRED]"}
                </p>
              </div>

              {/* Approach */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">THE APPROACH & EXECUTION</h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {project.approach || "[CONTENT REQUIRED]"}
                </p>
              </div>

              {/* Final Results */}
              <div className="bg-[#121212] border border-[#27272A] p-6 rounded-xl space-y-3">
                <h3 className="text-xl font-bold text-[#FFB612]">FINAL RESULT</h3>
                <p className="text-sm text-[#D4D4D8] leading-relaxed">
                  {project.results || "[CONTENT REQUIRED]"}
                </p>
              </div>

              {/* Image Gallery */}
              {project.galleryImages.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">PROJECT GALLERY</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.galleryImages.map((img, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden border border-[#27272A]">
                        <ProjectImage src={img} alt={`Gallery ${idx}`} aspectRatio="video" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-[#121212] border border-[#27272A] p-6 rounded-xl space-y-6">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#FFB612] font-bold">
                  SERVICES DELIVERED
                </h4>
                <ul className="space-y-2 text-xs">
                  {project.services.map((s, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white">
                      <CheckCircle2 className="w-4 h-4 text-[#FFB612]" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-xs uppercase font-mono tracking-widest text-[#FFB612] font-bold pt-4 border-t border-[#1C1C1E]">
                  SPECIFIED MATERIALS
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.materials.map((m, idx) => (
                    <span key={idx} className="text-[10px] uppercase font-mono bg-[#18181B] text-[#A1A1AA] px-2.5 py-1 rounded border border-[#27272A]">
                      {m}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#1C1C1E]">
                  <Link
                    href="/quote"
                    className="block w-full text-center bg-[#FFB612] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider py-3 rounded"
                  >
                    REQUEST SIMILAR PROJECT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
