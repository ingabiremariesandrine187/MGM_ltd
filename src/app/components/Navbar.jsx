"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

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
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo */}
   <Link href="/" className="flex items-center space-x-2">
  <Image
    src="/images/logo.jpg"   
    alt="MGM Multipurpose Ltd Logo"
    width={40}               
    height={40}
    className="rounded-full" // optional: make it circular
  />
  <span className="text-xl font-bold text-gray-900">
    MGM Multipurpose Ltd
  </span>
</Link>

    {/* Desktop Links (centered) */}
    <div className="hidden md:flex flex-1 justify-center space-x-12">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-lg text-gray-800 font-medium hover:text-blue-600 transition"
        >
          {link.name}
        </Link>
      ))}
    </div>

    {/* Mobile Menu Button (right) */}
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-900 focus:outline-none"
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
    <div className="md:hidden bg-white border-t border-gray-200">
      <div className="px-6 py-4 space-y-4 flex flex-col">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-gray-800 text-lg font-medium hover:text-blue-600 transition"
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
