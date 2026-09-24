import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { articles } from "@/lib/data/insights";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectImage } from "@/components/ui/ProjectImage";

export const InsightsSection: React.FC = () => {
  return (
    <section className="bg-[#0A0A0A] py-24 border-b border-[#27272A]" id="insights">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            overline="FROM THE WORKSHOP"
            title="INSIGHTS & TECHNICAL JOURNAL"
            subtitle="Deep dives into material engineering, signage design code, and sports venue execution."
          />

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded transition-colors self-start lg:self-auto"
          >
            <span>READ ALL ARTICLES</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFB612]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-[#121212] border border-[#27272A] hover:border-[#FFB612] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <ProjectImage
                  src={article.image}
                  alt={article.title}
                  category={article.category}
                  aspectRatio="video"
                />

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#FFB612] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#A1A1AA] line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/insights#${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#FFB612] transition-colors"
                >
                  <span>READ ARTICLE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
