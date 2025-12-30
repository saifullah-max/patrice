import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#DA5B00] px-12 pt-16 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        
        {/* Logo */}
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            priority
          />
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-6">Contact</h4>
          <p className="text-white/90 text-lg mb-4">
            patrice@patricekhan.com
          </p>
          <p className="text-white/90 text-lg">
            +1 949 903 4188
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-6">Links</h4>
          <ul className="space-y-4 text-lg">
            <li><Link href="#home" className="text-white/90 hover:underline">Home</Link></li>
            <li><Link href="#about" className="text-white/90 hover:underline">About Us</Link></li>
            <li><Link href="#testimonials" className="text-white/90 hover:underline">Testimonials</Link></li>
            <li><Link href="#contact" className="text-white/90 hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-6">Get in Touch</h4>
          <div className="flex gap-4">
            
            <a
              href="https://linkedin.com"
              target="_blank"
              className="w-14 h-14 rounded-full border border-white/70
                         flex items-center justify-center
                         text-white hover:bg-white hover:text-[#DA5B00]
                         transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="w-14 h-14 rounded-full border border-white/70
                         flex items-center justify-center
                         text-white hover:bg-white hover:text-[#DA5B00]
                         transition"
            >
              <Instagram size={22} />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 flex items-center justify-between text-white/90 text-lg border-t border-gray-800 pt-4">
        <span>© 2025. All Rights Reserved.</span>
        <span>Dr. Patrice Khan</span>
      </div>
    </footer>
  );
}
