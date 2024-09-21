"use client";

import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { dancingScript } from "@/config/fonts";

export default function Footer() {
  return (
    <footer className="bg-[#000000fa] text-[#e5e7eb] px-40 py-12">
      <div className="flex flex-row">
        {/* Logo Section */}
        <div className="flex flex-col justify-center w-[30%]">
          <div className={`text-5xl ${dancingScript.className} text-center`}>
            Touché
          </div>
          {/* Social Media Icons */}
          <div className="grid grid-cols-2 gap-4 mx-auto p-8 justify-center">
            <Link href="#" aria-label="Facebook">
              <LuFacebook className="w-6 h-6 fill-current text-white" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 fill-current text-white" />
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-row w-[65%] justify-end gap-16">
          <div className="grid grid-cols-3 gap-32">
            {/* Services */}
            <div className="flex flex-col gap-2">
              <div className="font-bold uppercase text-[#6dae28] pb-3">
                Services
              </div>
              <Link href="#" className="hover:underline">
                Consulting
              </Link>
              <Link href="#" className="hover:underline">
                Software Development
              </Link>
              <Link href="#" className="hover:underline">
                Data Analytics
              </Link>
              <Link href="#" className="hover:underline">
                Cloud Solutions
              </Link>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2">
              <div className="font-bold uppercase text-[#6dae28] pb-3">
                Company
              </div>
              <Link href="#" className="hover:underline">
                About Us
              </Link>
              <Link href="#" className="hover:underline">
                Our Team
              </Link>
              <Link href="#" className="hover:underline">
                Careers
              </Link>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-2">
              <div className="font-bold uppercase text-[#6dae28] pb-3">
                Resources
              </div>
              <Link href="#" className="hover:underline">
                Blog
              </Link>
              <Link href="#" className="hover:underline">
                Case Studies
              </Link>
              <Link href="#" className="hover:underline">
                Whitepapers
              </Link>
              <Link href="#" className="hover:underline">
                Newsletter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full border-t border-gray-500 my-8"></div>
      <div className="text-center">
        © 2024 Asterbizz - All rights reserved.
      </div>
    </footer>
  );
}
