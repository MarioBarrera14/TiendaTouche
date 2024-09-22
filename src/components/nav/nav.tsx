"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { dancingScript, poppins } from "@/config/fonts";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (window.scrollY === 0) {
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { href: "#about", label: "ABOUT", id: "about" },
    { href: "#restaurant-menu", label: "MENU", id: "restaurant-menu" },
    { href: "#portfolio", label: "GALLERY", id: "portfolio" },
    { href: "#chef", label: "CHEFS", id: "chef" },
    { href: "#contact", label: "CONTACT", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#page-top"
            className={`text-3xl sm:text-4xl font-bold text-[#6dae28] ${dancingScript.className}`}
            onClick={() => setActiveSection(null)}
          >
            Touché
          </Link>

          <div
            className={`hidden md:flex space-x-4 lg:space-x-6 ${poppins.className}`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id ? "text-[#6dae28]" : "text-white"
                } hover:text-[#6dae28]`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-[#5c9724] hover:rounded-lg text-white p-2 rounded-none"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full h-[100vh] bg-[#5c9724] bg-opacity-60 sm:w-[300px] transition-all ease-in-out duration-300"
            >
              <nav className="flex flex-col space-y-6 mt-4 items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors text-[#ffffff] hover:text-[#81d830] ${poppins.className}`}
                    onClick={() => {
                      setActiveSection(item.id);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
