export interface BusinessUnit {
  id: string;
  name: string;
  relationship: "Parent / Core Business" | "Subsidiary Company" | "Upcoming Platform";
  status: "ACTIVE" | "LAUNCHING_SOON";
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  divisions?: string[];
  ctaText: string;
  ctaLink: string;
  accentColor: string;
  image: string;
}

export const businessUnits: BusinessUnit[] = [
  {
    id: "sign-age",
    name: "SIGN-AGE",
    relationship: "Parent / Core Business",
    status: "ACTIVE",
    tagline: "The Core Signage, Steel Fabrication & Large-Format Print Powerhouse.",
    shortDescription: "Parent entity date-rooted in heritage expertise. Specializing in architectural signage, heavy metal & wooden fabrication, civil erection, and sports event infrastructure.",
    fullDescription: "Sign-Age is the parent and core operational backbone of The Signage Group. We pioneer high-volume visual communication solutions, large-scale outdoor publicity, structural civil works, and mega-event branding across India. Backed by 3M Authorized Converter status and UKAS ISO Quality Management, Sign-Age transforms monumental corporate ideas into engineered physical realities.",
    capabilities: [
      "Architectural & Outdoor Signage",
      "Steel, Aluminium & Wood Fabrication",
      "Digital Flex & Vinyl Solvent Printing",
      "Unipoles, Hoardings & Bus Shelters",
      "Civil Engineering & Structural Erection",
      "Cricket & Mega Sports Event Branding",
      "Retro-reflective Safety & Road Signs",
    ],
    ctaText: "EXPLORE SIGN-AGE",
    ctaLink: "/businesses/sign-age",
    accentColor: "#FFB612",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "promocare",
    name: "PROMOCARE",
    relationship: "Subsidiary Company",
    status: "ACTIVE",
    tagline: "Retail Merchandising, Sports Branding & Architectural Wayfinding Specialist.",
    shortDescription: "Dedicated subsidiary focusing on turnkey retail store rollouts, custom acrylic displays, sports venue look & feel, fabric graphics, and operations & maintenance.",
    fullDescription: "PromoCare operates as a specialized subsidiary within The Signage Group, focusing on human-scale brand interaction and high-touch retail execution. From multi-city retail display rollouts to stadium perimeter branding, soft fabric graphics, and long-term facility maintenance, PromoCare delivers precision, speed, and absolute visual consistency.",
    divisions: [
      "01. Retail Merchandising & Store Rollouts",
      "02. Operations & Maintenance (O&M)",
      "03. Sports Look & Feel & Stadium Branding",
      "04. Fabric Display Products & Soft Signage",
      "05. Architectural & Environmental Wayfinding",
    ],
    capabilities: [
      "Retail Fabrication & Slat Walls",
      "Acrylic, MDF & MS Display Fixtures",
      "Store Turnkey Fitouts & False Ceilings",
      "Sports Arena & Stadium Dugouts Branding",
      "Soft Fabric Tension Displays",
      "Wayfinding System Design & Installation",
      "National Maintenance & Fleet Management",
    ],
    ctaText: "EXPLORE PROMOCARE",
    ctaLink: "/businesses/promocare",
    accentColor: "#3B82F6",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "signbazar",
    name: "SIGNBAZAR",
    relationship: "Upcoming Platform",
    status: "LAUNCHING_SOON",
    tagline: "Your Digital Marketplace for Custom Printing & Branded Merchandise.",
    shortDescription: "Planned B2C & SMB digital e-commerce platform where businesses can seamlessly customize, preview, and order branded physical collateral online.",
    fullDescription: "SignBazar is the upcoming digital extension of The Signage Group. Designed as an on-demand digital platform, SignBazar will empower startups, enterprises, and individual customers to order custom business stationery, promotional merchandise, custom banners, and branded packaging directly online with automated production tracking.",
    capabilities: [
      "On-Demand Custom Business Printing",
      "Promotional Merchandise & Apparel",
      "Corporate Stationery & Gifting",
      "Custom Banners & Event Display Kits",
      "Automated Web-to-Print Ordering",
      "Direct Doorstep Enterprise Delivery",
    ],
    ctaText: "JOIN THE WAITLIST",
    ctaLink: "/businesses/signbazar",
    accentColor: "#10B981",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  },
];
