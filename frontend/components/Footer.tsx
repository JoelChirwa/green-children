"use client"
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
          {/* Column 1 - Quick Links */}
          <div>
            <h3 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3 text-gray-300">QUICK LINKS</h3>
            <div className="space-y-1.5 sm:space-y-2 text-xs text-gray-400">
              <Link href="/about" className="block hover:text-green-400 transition-colors">
                About Us
              </Link>
              <Link href="/gallery" className="block hover:text-green-400 transition-colors">
                Gallery
              </Link>
              <Link href="/support" className="block hover:text-green-400 transition-colors">
                Support Us
              </Link>
            </div>
          </div>

          {/* Column 2 - Contact */}
          <div>
            <h3 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3 text-gray-300">CONTACT</h3>
            <div className="space-y-1.5 sm:space-y-2 text-xs text-gray-400">
              <a href="tel:+265882554082" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                <Phone size={14} />
                0882 55 40 82
              </a>
              <a href="mailto:info@greenchildren.org" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                <Mail size={14} />
                info@greenchildren.org
              </a>
            </div>
          </div>

          {/* Column 3 - CTA */}
          <div>
            <h3 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3 text-gray-300">GET INVOLVED</h3>
            <div className="space-y-1.5 sm:space-y-2 text-xs">
              <a href="/donate" className="block text-green-400 hover:text-green-300 transition-colors font-semibold">
                Donate
              </a>
              <a href="/volunteer" className="block text-green-400 hover:text-green-300 transition-colors font-semibold">
                Volunteer
              </a>
            </div>
          </div>

          {/* Column 4 - Address */}
          <div>
            <h3 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3 text-gray-300">ADDRESS</h3>
            <p className="text-xs text-gray-400">Area 47, Lilongwe, Malawi</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-3 sm:pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-xs text-gray-500 mb-2 sm:mb-3">
            <p>&copy; {new Date().getFullYear()} Green Children. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-green-400 transition-colors">
                Terms
              </a>
            </div>
          </div>
          <div className="text-xs text-gray-600 text-center">
            Developed by:{" "}
            <a
              href="https://joelchirwa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors font-semibold"
            >
              Joel Chirwa
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
