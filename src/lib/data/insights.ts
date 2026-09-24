export interface Article {
  id: string;
  slug: string;
  title: string;
  category: "Materials" | "Engineering" | "Wayfinding" | "Retail" | "Sports";
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: "art-01",
    slug: "selecting-right-substrates-for-outdoor-signage",
    title: "Engineering for Eternity: Substrate & Material Selection in High-Wind Environments",
    category: "Materials",
    author: "Technical Engineering Division",
    date: "September 15, 2026",
    readTime: "6 min read",
    excerpt: "Why calculating wind load, UV degradation, and thermal expansion is critical when specifying ACP, cast acrylic, and 3M retro-reflective vinyls for highway unipoles.",
    content: "Outdoor signage in northern India faces extreme microclimatic shifts—from 45°C summer heatwaves in NCR to heavy monsoon winds and winter humidity. Specifying materials requires understanding thermal expansion coefficients between Aluminium Composite Panels (ACP) and steel sub-frames...",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "art-02",
    slug: "wayfinding-psychology-in-large-commercial-campuses",
    title: "The Psychology of Flow: Designing Wayfinding Systems for 10,000-User Tech Parks",
    category: "Wayfinding",
    author: "PromoCare Design Studio",
    date: "August 28, 2026",
    readTime: "8 min read",
    excerpt: "How clear visual hierarchy, color-coded zoning, and illuminated totems reduce visitor cognitive load in complex multi-tower commercial campuses.",
    content: "When a visitor enters a 2-million-square-foot business park like Assotech Business Cresterra in Noida, their brain seeks immediate visual anchors. Environmental graphic design (EGD) relies on progressive disclosure...",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "art-03",
    slug: "speed-execution-in-mega-sports-stadium-branding",
    title: "Zero-Downtime Erection: Executing Mega Stadium Branding on Broadcast Run-Sheets",
    category: "Sports",
    author: "Sign-Age Events Team",
    date: "July 12, 2026",
    readTime: "5 min read",
    excerpt: "Insights from two decades of stadium look-and-feel execution across cricket, tennis, and Commonwealth Games events under strict broadcast timelines.",
    content: "In live televised sporting events, run-sheets demand a sharpness measured in seconds. There is no second attempt when camera cranes pan across player dugouts or perimeter tri-vision boards...",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
  },
];
