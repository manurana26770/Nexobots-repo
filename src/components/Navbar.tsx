"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Solutions", href: "/solutions", isHighlighted: true },
  { label: "Services", href: "/services", isHighlighted: false },
  { label: "Industries", href: "/industries", isHighlighted: false },
  { label: "Company", href: "/about", isHighlighted: false },
  { label: "Contact us", href: "/contact", isHighlighted: false },
] as const;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => setIsMenuOpen((prev) => !prev);
  const handleNavigate = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E5E5] bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 md:px-12 lg:px-[72px]">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Nexobots home"
          onClick={handleNavigate}
        >
          <Image
            src="/nexobots-logo.svg"
            alt="Nexobots"
            width={162}
            height={30}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleNavigate}
              className={`font-display text-[18px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ${
                link.isHighlighted
                  ? "text-[#333333]"
                  : "text-[#1C1C1C]/80 hover:text-[#1C1C1C]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            onClick={handleNavigate}
            className="hidden rounded-[10px] border border-[#C4C4C4] px-[26px] py-3 font-display text-[14px] font-semibold uppercase tracking-[0.32em] text-[#E11E24] transition hover:bg-[#F7F7F7] lg:inline-flex"
          >
            Get a Free Quote
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-[#C4C4C4] px-4 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.32em] text-black transition hover:bg-[#F7F7F7] lg:hidden"
            aria-controls="mobile-nav"
            aria-expanded={isMenuOpen}
            onClick={handleToggle}
          >
            Menu
            <svg
              viewBox="0 0 12 12"
              className="h-3 w-3 stroke-black"
              fill="none"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                d={
                  isMenuOpen
                    ? "M2 2l8 8M10 2L2 10"
                    : "M1 3h10M1 6h10M1 9h10"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-[#E5E5E5] bg-white px-6 py-4 lg:hidden"
        >
          <nav
            className="flex flex-col gap-4"
            aria-label="Primary mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleNavigate}
                className={`font-display text-base font-semibold uppercase tracking-[0.08em] transition ${
                  link.isHighlighted ? "text-[#333333]" : "text-[#1C1C1C]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={handleNavigate}
              className="rounded-[10px] border border-[#C4C4C4] px-[26px] py-3 text-[14px] font-semibold text-[rgba(228,29,40,0.79)]"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;

