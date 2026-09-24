export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "Retail" | "Sports" | "Corporate" | "Outdoor" | "Wayfinding" | "Fabrication";
  businessUnit: "SIGN-AGE" | "PROMOCARE";
  location: string;
  year: string;
  services: string[];
  summary: string;
  challenge: string;
  approach: string;
  materials: string[];
  results: string;
  mainImage: string;
  galleryImages: string[];
}

export const projects: Project[] = [
  {
    id: "proj-01",
    slug: "commonwealth-games-2010-delhi",
    title: "XIX Commonwealth Games Stadium Branding & Look & Feel",
    client: "Delhi 2010 Commonwealth Games Organising Committee",
    category: "Sports",
    businessUnit: "SIGN-AGE",
    location: "Jawaharlal Nehru Stadium & Multi-Venues, New Delhi",
    year: "2010",
    services: ["Venue Look & Feel", "Tri-Vision Branding", "Perimeter Boards", "Custom Signage", "High-Rise Banners"],
    summary: "Comprehensive venue look-and-feel execution across national sports venues for the 2010 Commonwealth Games, seen by millions globally.",
    challenge: "Executing strict international sports federation branding specifications across multiple stadium venues on split-second broadcast run-sheets without disrupting athlete operations.",
    approach: "Deployed specialized round-the-clock print and erection teams using 3M media, custom MS truss systems, and UV-resistant outdoor graphics.",
    materials: ["3M Certified Vinyl", "Heavy-Duty MS Truss", "UV-Stabilized Flex Substrates", "Retro-Reflective Media"],
    results: "Flawless broadcast delivery across 12 sports venues with zero media failure during international live broadcasts.",
    mainImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-02",
    slug: "ipl-cricket-stadium-dugouts-branding",
    title: "IPL Twenty20 Stadium Dugouts & Perimeter Tri-Vision",
    client: "IPL Twenty20 / Tournament Broadcasters",
    category: "Sports",
    businessUnit: "SIGN-AGE",
    location: "Feroz Shah Kotla Stadium & Regional Venues",
    year: "2008 - Present",
    services: ["Player's Dugout Fabrication", "Perimeter Boards", "Stump & Bat Branding", "Cheer Sticks & Paper Cups"],
    summary: "Turnkey player dugout curved canopy fabrication, perimeter sponsor boards, and live broadcast match branding.",
    challenge: "Designing player dugout structures that provide weather protection, clear broadcast sponsor visibility, and ergonomic comfort for players.",
    approach: "Engineered curved acrylic and steel dugout shells integrated with high-impact sponsor vinyl graphics and comfortable seating.",
    materials: ["Thermoformed Acrylic", "Tubular Steel Frame", "High-Gloss Sponsor Vinyl", "Polyester Fabric Canopies"],
    results: "Standardized player dugout infrastructure deployed rapidly for multi-city cricket tournament schedules.",
    mainImage: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512716676801-e784566c7477?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-03",
    slug: "maruti-suzuki-dealership-rollout",
    title: "Maruti Suzuki National Dealership Signage & Facade Rollout",
    client: "Maruti Suzuki India Ltd.",
    category: "Retail",
    businessUnit: "PROMOCARE",
    location: "Pan-India Dealership Network",
    year: "Multi-Year Rollout",
    services: ["Pylon Signs", "LED Channel Letters", "ACP Facade Cladding", "Interior Merchandising Slat Walls"],
    summary: "Nationwide execution of illuminated automotive showroom pylon signs and high-precision exterior building cladding.",
    challenge: "Maintaining strict automotive brand visual consistency across hundreds of dealership facades with varying structural conditions.",
    approach: "Manufactured modular ACP panels and Samsung LED channel letters at our Noida factory, dispatched with certified installation crews.",
    materials: ["3mm Premium ACP Cladding", "IP67 Waterproof Samsung LED Modules", "Acrylic Thermoformed Logos", "Steel Sub-frames"],
    results: "Upgraded dealership facades delivered on time across tier-1, tier-2, and tier-3 locations.",
    mainImage: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-04",
    slug: "citi-bank-retail-branch-rebranding",
    title: "Citi Bank India Regional Retail Signage Upgrade",
    client: "Citi Bank",
    category: "Corporate",
    businessUnit: "SIGN-AGE",
    location: "Delhi NCR & North India Branches",
    year: "Corporate Branding Project",
    services: ["ATM Fascia Signage", "Architectural Glass Etching", "Wayfinding Pylons", "Safety Blinkers & Road Signs"],
    summary: "Precision financial institution architectural signage, illuminated ATM fascias, and interior branch wayfinding.",
    challenge: "High-security operational constraints working in live banking environments with strict night-time deployment windows.",
    approach: "Pre-assembled modular illuminated signage units in our Noida workshop for swift 4-hour night installation.",
    materials: ["Cast Acrylic", "Brushed Aluminium Edging", "Energy-Efficient LED Drivers", "3M Diffuser Film"],
    results: "Seamless branch upgrades completed with zero disruption to banking business hours.",
    mainImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-05",
    slug: "highway-unipoles-and-outdoor-publicity",
    title: "National Highway Structural Unipoles & Bus Shelters",
    client: "Municipal Corporation & Infrastructure Partners",
    category: "Outdoor",
    businessUnit: "SIGN-AGE",
    location: "Delhi-Noida Direct (DND) & National Highways",
    year: "Infrastructure Project",
    services: ["Structural Engineering", "Unipole Erection", "Bus Shelter Fabrication", "High-Resolution Solvent Flex"],
    summary: "Heavy-duty outdoor publicity infrastructure engineered to withstand 150 km/h wind loads on major transit corridors.",
    challenge: "Securing deep pile foundations and erecting 40-foot heavy steel unipoles over busy arterial roadways safely.",
    approach: "Conducted civil masonry foundation soil tests, fabricated tubular steel shafts at Sidcul Pantnagar, and erected using heavy mobile cranes.",
    materials: ["Fe500 Grade Structural Steel", "Galvanized Mounting Hardware", "Solvent Flex Banner", "High-Bay LED Spotlights"],
    results: "Long-lasting infrastructure delivering high-impact brand visibility for premium outdoor advertisers.",
    mainImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-06",
    slug: "tech-park-architectural-wayfinding-system",
    title: "Assotech Business Cresterra Campus Wayfinding Directory",
    client: "Assotech Infrastructure",
    category: "Wayfinding",
    businessUnit: "PROMOCARE",
    location: "Sector 135, Noida, UP",
    year: "2022",
    services: ["Campus Masterplan Wayfinding", "Monolith Totems", "Tactile Elevator Signage", "Traffic Safety Delineators"],
    summary: "Complete environmental graphic design and physical wayfinding totems for a modern 4-tower corporate IT park.",
    challenge: "Guiding over 10,000 daily visitors efficiently through multi-level subterranean parking, towers, and dining precincts.",
    approach: "Designed a clean, color-coded typographic grid printed on matte architectural aluminium totems with internal LED lighting.",
    materials: ["Anodized Aluminium Extrusions", "UV Printed Polycarbonate Panels", "Sub-Surface LED Strip Lighting"],
    results: "Enhanced visitor navigation clarity across 1.8 million sq. ft. of commercial office space.",
    mainImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];
