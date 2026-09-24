import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { groupInfo } from "@/lib/data/groupData";
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-[#27272A] text-[#A1A1AA] pt-16 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#18181B]">
          {/* Col 1 & 2: Group Branding */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="dark" size="lg" />
            <p className="text-sm leading-relaxed text-[#A1A1AA] max-w-md">
              {groupInfo.legalName} is India's leading visual communication, architectural signage, large-format printing, custom fabrication, and physical brand-execution group.
            </p>

            <div className="bg-[#121212] border border-[#27272A] p-4 rounded-lg space-y-2">
              <div className="text-xs uppercase tracking-wider text-[#FFB612] font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Head Office</span>
              </div>
              <p className="text-xs text-white leading-normal">
                {groupInfo.headOffice.fullAddress}
              </p>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-[#71717A]">
                <ShieldCheck className="w-4 h-4 text-[#FFB612]" />
                <span>UKAS Quality Management ISO Standard</span>
              </div>
              <div className="flex items-center gap-2 text-[#71717A]">
                <ShieldCheck className="w-4 h-4 text-[#FFB612]" />
                <span>3M Authorized Converter (Commercial Graphics)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Businesses */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#FFB612] font-bold">
              Business Divisions
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/businesses/sign-age" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Sign-Age (Parent Core)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#52525B] group-hover:text-[#FFB612]" />
                </Link>
              </li>
              <li>
                <Link href="/businesses/promocare" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>PromoCare (Subsidiary)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#52525B] group-hover:text-[#FFB612]" />
                </Link>
              </li>
              <li>
                <Link href="/businesses/signbazar" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span className="text-[#10B981]">SignBazar (Coming Soon)</span>
                  <span className="text-[10px] bg-[#10B981]/20 text-[#10B981] px-1.5 py-0.5 rounded font-mono">
                    SOON
                  </span>
                </Link>
              </li>
            </ul>

            <h4 className="text-xs uppercase tracking-widest text-[#FFB612] font-bold pt-4">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/what-we-do#design" className="hover:text-white">Design & Engineering</Link></li>
              <li><Link href="/what-we-do#print" className="hover:text-white">Large-Format & UV Printing</Link></li>
              <li><Link href="/what-we-do#fabricate" className="hover:text-white">Custom Steel/Wood Fabrication</Link></li>
              <li><Link href="/what-we-do#finish" className="hover:text-white">Finishing & Assembly</Link></li>
              <li><Link href="/what-we-do#install" className="hover:text-white">Logistics & Erection</Link></li>
              <li><Link href="/what-we-do#maintain" className="hover:text-white">Operations & Maintenance</Link></li>
            </ul>
          </div>

          {/* Col 4: Quick Directory */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#FFB612] font-bold">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-white">About the Group</Link></li>
              <li><Link href="/work" className="hover:text-white">Selected Work</Link></li>
              <li><Link href="/industries" className="hover:text-white">Industries</Link></li>
              <li><Link href="/infrastructure" className="hover:text-white">Infrastructure Floor</Link></li>
              <li><Link href="/clients" className="hover:text-white">Client Network</Link></li>
              <li><Link href="/insights" className="hover:text-white">Insights & Journal</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact & HQ</Link></li>
            </ul>
          </div>

          {/* Col 5: Inquiry & CTAs */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#FFB612] font-bold">
              Project Brief
            </h4>
            <p className="text-xs text-[#71717A]">
              Have a physical branding, printing, or structural signage project in mind?
            </p>
            <Link
              href="/quote"
              className="block w-full text-center bg-[#FFB612] hover:bg-[#E59F00] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider py-3 rounded transition-colors"
            >
              REQUEST A QUOTE
            </Link>
            <div className="pt-2 space-y-2 text-xs">
              <a href={groupInfo.contacts.whatsappPlaceholder} target="_blank" rel="noreferrer" className="block text-center border border-[#27272A] hover:border-[#FFB612] text-white py-2 rounded transition-colors">
                WhatsApp Connect
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#71717A] gap-4">
          <div>
            © {new Date().getFullYear()} <strong>{groupInfo.legalName}</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
