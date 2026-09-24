export interface CareerVacancy {
  id: string;
  title: string;
  department: "Design" | "Print Production" | "Fabrication & Civil" | "Project Management" | "Sales & Business Development";
  location: "Noida Sector 135 HQ" | "Sidcul Pantnagar Plant" | "Delhi Regional Office";
  type: "Full-Time";
  experience: string;
  description: string;
}

export const careerVacancies: CareerVacancy[] = [
  {
    id: "vac-01",
    title: "Senior Structural CAD & Signage Engineer",
    department: "Design",
    location: "Noida Sector 135 HQ",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Responsible for structural load calculation, 3D CAD modeling of steel unipoles, architectural pylons, and fabrication drawing preparation for shop floor teams.",
  },
  {
    id: "vac-02",
    title: "Print Floor Manager (Solvent & UV Flatbed)",
    department: "Print Production",
    location: "Noida Sector 135 HQ",
    type: "Full-Time",
    experience: "4+ Years",
    description: "Overseeing daily color-matching, RIP software calibration, and production output across Vutek 10.5ft, Roland, and HP UV printing presses.",
  },
  {
    id: "vac-03",
    title: "Retail Merchandising Project Manager",
    department: "Project Management",
    location: "Noida Sector 135 HQ",
    type: "Full-Time",
    experience: "3+ Years",
    description: "Leading multi-city retail display rollouts for automotive and FMCG clients under PromoCare. Managing installation schedules and site SLA compliance.",
  },
  {
    id: "vac-04",
    title: "CNC Router & Metal Fabrication Master",
    department: "Fabrication & Civil",
    location: "Sidcul Pantnagar Plant",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Operating Gerber Sabre CNC routers, managing argon welding, sheet bending, and electrostatic powder coating quality inspection.",
  },
];
