"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Clients", href: "/clients" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-[#F8F0E3] text-[#403126] shadow-sm">
      <div className="mx-auto flex h-[68px] max-w-[1800px] items-center justify-between px-4 sm:px-7 lg:h-[76px] lg:px-12">

        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-2"
        >
          <img
            src="/favicon.ico"
            alt="Siddhi On Creation logo"
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />

          <div className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-[0.12em] text-[#403126] sm:text-xl lg:text-2xl">
              SIDDHI <span className="text-[#A36E35]">ON</span>
            </span>

            <span className="mt-1 text-[8px] tracking-[0.34em] text-[#403126]/60 sm:text-[9px]">
              CREATION
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`group relative py-2 text-[12px] transition-colors duration-300 hover:text-[#A36E35] ${
                link.name === "Home"
                  ? "text-[#8E5B2D]"
                  : "text-[#403126]"
              }`}
            >
              {link.name}

              <span
                className={`absolute bottom-0 left-0 h-px bg-[#A36E35] transition-all duration-300 group-hover:w-full ${
                  link.name === "Home" ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* RIGHT TAGLINE */}
        <div className="hidden items-center gap-2 xl:flex">
          <span className="h-px w-8 bg-[#D7B58A]" />

          <p className="font-serif text-[11px] italic leading-4 text-[#8E6746]">
            Turning Imagination
            <br />
            Into Art.
          </p>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`h-px w-6 bg-[#403126] transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-px w-6 bg-[#403126] transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden bg-[#F8F0E3] shadow-lg transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible max-h-[450px] border-t border-[#D9C5A8] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-3">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-[#D9C5A8]/60 py-3.5 text-sm transition-colors hover:text-[#A36E35]"
            >
              <span>{link.name}</span>

              <span className="font-serif text-xs text-[#A36E35]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}

          <p className="py-4 font-serif text-sm italic text-[#8E6746]">
            Turning Imagination Into Art.
          </p>
        </nav>
      </div>
    </header>
  );
}