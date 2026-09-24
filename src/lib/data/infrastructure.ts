export interface Machine {
  name: string;
  category: "Printing Unit" | "Fabrication Unit" | "Screen Printing Unit" | "Quality Control";
  specs: string;
  description: string;
}

export const infrastructureUnits = [
  {
    name: "Printing Division (Digital / Solvent / Eco-Solvent / UV / Offset)",
    description: "High-volume, color-calibrated printing machinery capable of producing seamless extra-large graphics.",
    machines: [
      { name: "Vutek 10.5 Ft Digital Printing Press", category: "Printing Unit", specs: "10.5 Ft Printing Area", description: "Heavy-duty solvent press for superwide outdoor flex and billboard graphics." },
      { name: "Roland 8-Color Digital Printing Machine", category: "Printing Unit", specs: "8-Color Wide Gamut", description: "Ultra-fine resolution digital press for photo-realistic indoor signage and graphics." },
      { name: "Mutoh 84\" Digital Printing Press", category: "Printing Unit", specs: "84-Inch Print Area", description: "High-speed precision printer for commercial banners and vinyl media." },
      { name: "HP Scitex 950 UV Flatbed Press", category: "Printing Unit", specs: "Direct-to-Rigid Substrate", description: "UV-cured printing directly onto acrylic, ACP, glass, wood, and foam board." },
      { name: "HP 9000 Series Eco-Solvent Press", category: "Printing Unit", specs: "Eco-Friendly Low VOC", description: "Environmentally friendly high-durability vinyl and textile graphics." },
      { name: "Roland Vinyl Cutting & Plotting Machines", category: "Printing Unit", specs: "High Precision Plotting", description: "Computer-controlled precision contour cutting for self-adhesive vinyl lettering." },
      { name: "Heidelberg Offset Printing Press", category: "Printing Unit", specs: "Industrial Offset Press", description: "High-volume commercial offset printing for corporate literature." },
    ],
  },
  {
    name: "Fabrication & Erection Division",
    description: "Metalworking, wood processing, acrylic thermoforming, and structural steel assembly infrastructure.",
    machines: [
      { name: "Gerber 'Sabre' CNC Router", category: "Fabrication Unit", specs: "High Precision CNC", description: "Heavy-duty 3D routing for ACP, brass, aluminium, MDF, and acrylic." },
      { name: "In-House Electrostatic Powder Coating Plant", category: "Fabrication Unit", specs: "Thermoset Powder Coating", description: "Weather-resistant, anti-corrosive powder finish for MS & steel frames." },
      { name: "Argon & Spot Welding Stations", category: "Fabrication Unit", specs: "TIG/MIG/Spot Welding", description: "High-strength structural joining for stainless steel and aluminium." },
      { name: "Sheet & Pipe Bending Machinery", category: "Fabrication Unit", specs: "Hydraulic CNC Benders", description: "Precision radial bending for tubular trusses and curved architectural pylons." },
      { name: "Lathe Machines & Mechanical Press M/C", category: "Fabrication Unit", specs: "Heavy Metal Machining", description: "Custom component turning, punching, and structural plate forming." },
      { name: "Hot Sewing & Fabric Bonding Station", category: "Fabrication Unit", specs: "High-Temp Stitching", description: "Seam welding and edge reinforcement for giant outdoor banners and fabric tension displays." },
    ],
  },
  {
    name: "Screen Printing & Apparel Branding Division",
    description: "Dedicated textile screen printing unit operating five coordinated backup workstations across NCR.",
    machines: [
      { name: "Multi-Color Textile Screen Printing Line", category: "Screen Printing Unit", specs: "Cotton / Satin / Jeans", description: "Direct screen printing on banners, backdrops, T-shirts, caps, dangris, and umbrellas." },
      { name: "5 Workstations Network across Delhi NCR", category: "Screen Printing Unit", specs: "Regional Backup Network", description: "Cohesive multi-point production and rapid fulfillment capabilities." },
    ],
  },
];
