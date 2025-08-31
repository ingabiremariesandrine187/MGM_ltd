"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-teal-500 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          MGM Multipurpose Ltd
        </h1>

        {/* Desktop Links (centered) */}
        <div className="hidden md:flex flex-1 justify-center space-x-12">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-lg text-white font-medium hover:text-yellow-300 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (right) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="px-6 py-4 space-y-4 flex flex-col">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white text-lg font-medium hover:text-yellow-300 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
