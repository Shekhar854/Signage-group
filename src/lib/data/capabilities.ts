export interface Capability {
  number: string;
  id: string;
  title: string;
  headline: string;
  description: string;
  details: string[];
  image: string;
}

export const capabilities: Capability[] = [
  {
    number: "01",
    id: "design",
    title: "DESIGN & ENGINEERING",
    headline: "Translating brand concepts into structural engineering blueprints.",
    description: "Our in-house design studio and structural engineering team translate brand guidelines into physical, buildable specifications—calculating wind loads, material durability, lighting intensity, and architectural alignment.",
    details: [
      "3D Visualizations & Photorealistic Renders",
      "Structural CAD & Wind Load Engineering",
      "Material Specifying & Substrate Selection",
      "Wayfinding Strategy & Environmental Mapping",
    ],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    id: "print",
    title: "LARGE-FORMAT PRINTING",
    headline: "High-resolution digital, UV, solvent, and eco-solvent printing.",
    description: "Operating Vutek 10.5ft, Roland 8-color, HP Scitex UV, and HP 9000 Eco-Solvent presses. We print crisp, color-matched graphics on flex, vinyl, fabric, acrylic, and rigid substrates with 3M media validation.",
    details: [
      "Digital Solvent & Inkjet Printing up to 10.5 Ft Width",
      "UV Direct-to-Substrate Printing for Rigid Panels",
      "3M Vinyl & Retro-Reflective Graphic Reproduction",
      "Soft Fabric & Dye-Sublimation Textile Printing",
    ],
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    id: "fabricate",
    title: "CUSTOM FABRICATION",
    headline: "Precision CNC routing, welding, sheet metal, wood & acrylic crafting.",
    description: "Equipped with Gerber Sabre CNC routers, spot and argon welding stations, sheet bending presses, lathe machines, and powder coating facilities to shape steel, aluminium, wood, and acrylic into custom brand structures.",
    details: [
      "MS / SS Heavy Metal Fabrication & Truss Erection",
      "Aluminium Composite Panel (ACP) CNC Routing & Folding",
      "Custom Wooden Display Fixtures & Slat Walls",
      "In-House Electrostatic Powder Coating Plant",
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "04",
    id: "finish",
    title: "SURFACE FINISHING & ASSEMBLY",
    headline: "Flawless lamination, LED illumination, and clean edge finishing.",
    description: "Every sign and display undergoes multi-stage quality control. We integrate energy-efficient Samsung/Osram LED modules, protective UV laminates, and precision edge seals before site dispatch.",
    details: [
      "IP67 Weatherproof LED Illumination Wiring",
      "Anti-Glare & Matte Laminate Surface Coatings",
      "Edge Banding & Acrylic Channel Letter Assembly",
      "UKAS ISO Standard Inspection & Pre-Test",
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "05",
    id: "install",
    title: "LOGISTICS & INSTALLATION",
    headline: "Turnkey deployment across Noida, Delhi NCR, and nationwide sites.",
    description: "Our licensed installation crews deploy heavy hoardings, stadium dugouts, building facades, and retail store displays safely—managing crane logistics, civil foundations, and overnight zero-downtime execution.",
    details: [
      "High-Rise Facade & Crane Installation Crews",
      "Civil Masonry Foundations & Structural Anchoring",
      "Rapid Overnight Mall & Retail Fitout Deployments",
      "Pan-India Transportation & Site Clearance",
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "06",
    id: "maintain",
    title: "OPERATIONS & MAINTENANCE (O&M)",
    headline: "Proactive site monitoring, electrical maintenance & surface renewal.",
    description: "Physical brand assets require ongoing care. PromoCare and Sign-Age provide scheduled cleaning, LED driver replacements, storm damage repair, and quarterly structural inspections to keep brands shining.",
    details: [
      "SLA-Backed 24/7 Site Emergency Repairs",
      "Scheduled Electrical & Driver Maintenance",
      "Surface Cleaning & Graphic Re-Skinning",
      "Structural Audit & Safety Compliance Certification",
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
  },
];
