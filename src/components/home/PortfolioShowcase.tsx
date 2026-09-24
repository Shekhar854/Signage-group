"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Filter } from "lucide-react";
import { projects, Project } from "@/lib/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { Lightbox } from "@/components/ui/Lightbox";

export const PortfolioShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  const categories = ["ALL", "Sports", "Retail", "Corporate", "Outdoor", "Wayfinding"];

  const filteredProjects = selectedCategory === "ALL"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const openLightbox = (project: Project) => {
    setLightboxImages([project.mainImage, ...project.galleryImages]);
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  return (
    <section className="bg-[#0D0D0D] py-24 border-b border-[#27272A]" id="work">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            overline="REAL-WORLD EXECUTION"
            title="SELECTED WORK"
            subtitle="Physical spaces. Visible brands. Real-world execution."
          />

          {/* Filter Category Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#71717A] font-mono mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-[#FFB612] text-[#0A0A0A] font-bold"
                    : "bg-[#18181B] text-[#A1A1AA] hover:text-white border border-[#27272A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#121212] border border-[#27272A] hover:border-[#FFB612] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <ProjectImage
                  src={project.mainImage}
                  alt={project.title}
                  category={project.category}
                  aspectRatio="video"
                  onClick={() => openLightbox(project)}
                />

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                    <span>{project.businessUnit}</span>
                    <span>{project.location.split(",")[0]}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#FFB612] transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs font-medium text-[#FFB612]">
                    Client: {project.client}
                  </p>

                  <p className="text-xs text-[#A1A1AA] line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.services.slice(0, 3).map((service, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] uppercase font-mono bg-[#1C1C1E] text-[#71717A] px-2 py-0.5 rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#FFB612] transition-colors"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-colors"
          >
            <span>VIEW ALL PROJECTS PORTFOLIO</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFB612]" />
          </Link>
        </div>
      </div>

      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
};
