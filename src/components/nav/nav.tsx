"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { dancingScript, poppins } from "@/config/fonts"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    // Llamar a handleScroll inmediatamente para establecer el estado inicial
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "ABOUT" },
    { href: "#restaurant-menu", label: "MENU" },
    { href: "#portfolio", label: "GALLERY" },
    { href: "#team", label: "CHEFS" },
    { href: "#call-reservation", label: "CONTACT" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="#page-top" className={`text-4xl font-bold text-[#6dae28] ${dancingScript.className}`}>
            Touché
          </Link>

          <div className={`hidden md:flex space-x-6 ${poppins.className}`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white hover:text-[#6dae28] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-6 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-white hover:text-primary transition-colors"
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
  )
}