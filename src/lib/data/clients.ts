export interface Client {
  name: string;
  category: "Automotive" | "FMCG" | "Sports" | "Corporate" | "Banking" | "Infrastructure" | "Hospitality" | "Telecom";
  logoText: string;
  subtitle?: string;
  relationshipNote?: string;
}

export const clientCategories = [
  "ALL",
  "Automotive",
  "FMCG",
  "Sports",
  "Banking",
  "Corporate",
  "Telecom",
  "Infrastructure",
] as const;

export const clientLogos: Client[] = [
  { name: "Maruti Suzuki", category: "Automotive", logoText: "MARUTI SUZUKI", subtitle: "Count on Us" },
  { name: "Hero Honda / Hero MotoCorp", category: "Automotive", logoText: "HERO HONDA" },
  { name: "Nestlé", category: "FMCG", logoText: "Nestlé" },
  { name: "Samsung", category: "Corporate", logoText: "SAMSUNG" },
  { name: "Citi Bank", category: "Banking", logoText: "citi" },
  { name: "ICICI Bank", category: "Banking", logoText: "i ICICI Bank" },
  { name: "Vodafone", category: "Telecom", logoText: "vodafone" },
  { name: "Virgin Atlantic", category: "Corporate", logoText: "virgin atlantic" },
  { name: "Sony Ericsson", category: "Telecom", logoText: "Sony Ericsson" },
  { name: "IDBI Bank", category: "Banking", logoText: "IDBI BANK" },
  { name: "Bharat Petroleum", category: "Infrastructure", logoText: "Bharat Petroleum" },
  { name: "Canara Bank", category: "Banking", logoText: "Canara Bank" },
  { name: "Central Bank of India", category: "Banking", logoText: "Central Bank of India" },
  { name: "Aviva", category: "Corporate", logoText: "AVIVA" },
  { name: "Delhi 2010 Commonwealth Games", category: "Sports", logoText: "DELHI 2010", subtitle: "XIX Commonwealth Games" },
  { name: "ICC Champions Trophy", category: "Sports", logoText: "ICC CHAMPIONS TROPHY" },
  { name: "IPL Twenty20", category: "Sports", logoText: "IPL TWENTY20" },
  { name: "Airtel Champions League T20", category: "Sports", logoText: "Airtel CLT20" },
  { name: "Indian Oil Cup", category: "Infrastructure", logoText: "IndianOil" },
  { name: "FIH Hockey World Cup 2010", category: "Sports", logoText: "FIH World Cup" },
  { name: "Chennai Open Tennis", category: "Sports", logoText: "CHENNAI OPEN" },
  { name: "Special Olympics", category: "Sports", logoText: "Special Olympics" },
  { name: "Scorpio Speedster", category: "Sports", logoText: "Scorpio Speedster" },
  { name: "Raid De Himalaya", category: "Sports", logoText: "RAID DE HIMALAYA" },
  { name: "Glenfiddich International Cup", category: "Sports", logoText: "Glenfiddich Cup" },
  { name: "Royal Challenge Golf", category: "Sports", logoText: "CII National Golf" },
  { name: "Avantha Masters Golf", category: "Sports", logoText: "AVANTHA Masters" },
  { name: "Johnnie Walker Classic", category: "Sports", logoText: "Johnnie Walker Classic" },
];
