"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Solutions", href: "/solutions", isActive: false },
  { label: "Services", href: "/services", isActive: false },
  { label: "Industries", href: "/industries", isActive: false },
  { label: "Company", href: "/about", isActive: false },
  { label: "Contact us", href: "/contact", isActive: true },
] as const;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => setIsMenuOpen((prev) => !prev);
  const handleNavigate = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-9 md:px-12 lg:px-[72px]">
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

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleNavigate}
              style={{
                opacity: link.isActive ? 1 : 0.8,
              }}
              className="font-sans text-[18px] font-normal uppercase leading-[1.366] tracking-normal text-black transition-opacity hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            onClick={handleNavigate}
            className="hidden rounded-[10px] border border-[#C4C4C4] px-[26px] py-3 text-[14px] font-semibold leading-[1.366] text-[rgba(228,29,40,0.79)] transition hover:bg-gray-50 lg:inline-flex"
          >
            Get a Free Quote
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-[#C4C4C4] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-black transition hover:bg-gray-50 lg:hidden"
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
          className="border-t border-[#C4C4C4] bg-white px-6 py-4 lg:hidden"
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
                className="font-sans text-base font-normal uppercase text-black transition hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
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

