"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight, Phone, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";
import { businessUnits } from "@/lib/data/businesses";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setBusinessDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "What We Do", href: "/what-we-do" },
    { name: "Businesses", href: "/businesses", hasDropdown: true },
    { name: "Industries", href: "/industries" },
    { name: "Work", href: "/work" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-[#27272A] shadow-2xl py-3"
          : "bg-[#0A0A0A] border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Logo variant="dark" size="md" />

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setBusinessDropdownOpen(true)}
                  onMouseLeave={() => setBusinessDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                      isActive || pathname.startsWith("/businesses")
                        ? "text-[#FFB612]"
                        : "text-[#D4D4D8] hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4 opacity-70" />
                  </button>

                  {/* Dropdown Menu */}
                  {businessDropdownOpen && (
                    <div className="absolute top-full left-0 w-80 bg-[#121212] border border-[#27272A] rounded-lg shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="text-xs uppercase tracking-wider text-[#71717A] px-3 py-1 font-semibold border-b border-[#27272A] mb-2">
                        Group Entities
                      </div>
                      {businessUnits.map((biz) => (
                        <Link
                          key={biz.id}
                          href={biz.ctaLink}
                          className="block p-3 rounded-md hover:bg-[#1A1A1A] transition-colors group/item"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-white group-hover/item:text-[#FFB612]">
                              {biz.name}
                            </span>
                            {biz.status === "LAUNCHING_SOON" ? (
                              <span className="text-[10px] bg-[#10B981]/20 text-[#10B981] px-2 py-0.5 rounded font-mono">
                                SOON
                              </span>
                            ) : (
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover/item:text-[#FFB612]" />
                            )}
                          </div>
                          <p className="text-xs text-[#A1A1AA] mt-1 line-clamp-1">
                            {biz.shortDescription}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-[#FFB612] font-semibold" : "text-[#D4D4D8] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-[#FFB612] hover:bg-[#E59F00] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,182,18,0.4)]"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-[#D4D4D8] hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A0A0A] border-b border-[#27272A] px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block py-2.5 text-base font-medium border-b border-[#18181B] ${
                  pathname === link.href ? "text-[#FFB612]" : "text-white hover:text-[#FFB612]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 space-y-3">
            <Link
              href="/quote"
              className="block w-full text-center bg-[#FFB612] text-[#0A0A0A] font-bold text-sm uppercase tracking-wider py-3 rounded"
            >
              START A PROJECT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
