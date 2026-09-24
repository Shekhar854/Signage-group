export interface GroupInfo {
  legalName: string;
  brandName: string;
  tagline: string;
  subTagline: string;
  headOffice: {
    address: string;
    building: string;
    sector: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    fullAddress: string;
  };
  mfgUnits: Array<{
    name: string;
    location: string;
    address: string;
  }>;
  accreditations: string[];
  contacts: {
    phonePlaceholder: string;
    emailPlaceholder: string;
    whatsappPlaceholder: string;
    crmFormUrl: string;
  };
}

export const groupInfo: GroupInfo = {
  legalName: "SIGNAGE GROUP INDIA PVT. LTD.",
  brandName: "THE SIGNAGE GROUP",
  tagline: "ONE GROUP. MULTIPLE SPECIALISTS. ONE EXECUTION NETWORK.",
  subTagline: "Visual Communication • Signage • Large-Format Print • Fabrication • Brand Execution",
  headOffice: {
    address: "807, T4, Assotech Business Cresterra, Plot-22",
    building: "Assotech Business Cresterra",
    sector: "Sector 135",
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
    pincode: "201305",
    fullAddress: "807, T4, Assotech Business Cresterra, Plot-22, Sector 135, Noida, Uttar Pradesh, India",
  },
  mfgUnits: [
    {
      name: "Phase-II Noida Manufacturing Plant",
      location: "Noida, UP",
      address: "A-49, Sector-83, Phase-II, Noida (U.P.)",
    },
    {
      name: "Sidcul Industrial Production Facility",
      location: "Pantnagar, Uttarakhand",
      address: "85, Sector-IIDC, IIE, Sidcul, Pantnagar (U.T.), India",
    },
    {
      name: "Delhi Regional Office & Service Hub",
      location: "New Delhi",
      address: "B-85, Joshi Colony, I.P. Extension, New Delhi-110092",
    },
  ],
  accreditations: [
    "UKAS Quality Management ISO Standard Adherence",
    "3M Authorized Converter (Commercial Graphics Division)",
    "DAVP Registered Supplier",
    "Municipal Corporation of Delhi Certified",
  ],
  contacts: {
    phonePlaceholder: "+91 98100 XXXXX / +91 120 XXXXXXX",
    emailPlaceholder: "info@signagegroup.com",
    whatsappPlaceholder: "https://wa.me/919810000000?text=Hello%20Signage%20Group%20Team",
    crmFormUrl: "#quote",
  },
};

export const verifiedStats = [
  { label: "Business Divisions", value: "3", suffix: "Specialized Units", description: "Sign-Age, PromoCare, SignBazar" },
  { label: "NCR Production Hubs", value: "5", suffix: "Facilities", description: "Integrated design & fabrication plants" },
  { label: "Quality Certification", value: "ISO", suffix: "UKAS Standard", description: "International Quality Management" },
  { label: "Media Authorization", value: "3M", suffix: "Converter", description: "Commercial Graphics Preferred Supplier" },
];
