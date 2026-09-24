import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const processSteps = [
  { step: "01", title: "BRIEF & AUDIT", desc: "Understanding brand vision, site constraints, wind load specs, and architectural guidelines." },
  { step: "02", title: "DESIGN & CAD", desc: "Developing 3D photorealistic renderings, CAD blueprints, and structural calculations." },
  { step: "03", title: "MATERIAL SELECT", desc: "Specifying substrate combinations (3M vinyl, ACP, cast acrylic, steel trusses)." },
  { step: "04", title: "PROTOTYPE", desc: "Building 1:1 scale structural prototypes for lighting, color calibration, and approval." },
  { step: "05", title: "PRODUCTION", desc: "Precision printing on Vutek/Roland/HP UV & CNC routing on Gerber Sabre routers." },
  { step: "06", title: "QUALITY CONTROL", desc: "Rigorous UKAS ISO standard pre-inspection, electrical safety tests & edge sealing." },
  { step: "07", title: "LOGISTICS", desc: "Dispatched safely via internal transport network to Noida, Delhi NCR & nationwide sites." },
  { step: "08", title: "INSTALLATION", desc: "High-rise crane erection, masonry anchoring, and zero-downtime overnight deployment." },
  { step: "09", title: "MAINTENANCE", desc: "PromoCare SLA-backed ongoing O&M, cleaning, driver replacements, and inspection." },
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="bg-[#0A0A0A] py-24 border-b border-[#27272A]">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          overline="INTEGRATED EXECUTION PROCESS"
          title="FROM IDEA TO INSTALLATION."
          subtitle="Our documented 9-step turnkey methodology guarantees zero site failure."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-16">
          {processSteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-[#27272A] hover:border-[#FFB612] p-6 rounded-xl space-y-3 transition-colors group"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                <span className="text-[#FFB612] font-bold text-base">STEP {item.step}</span>
                <span>PHASE {Math.ceil((idx + 1) / 3)}</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-[#FFB612] transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
