import Link from "next/link";

const footerColumns = [
  {
    title: "Solutions",
    links: [
      "Smart Network",
      "Infrastructure CCTV Solutions",
      "Secure access & Biometrics",
      "End to end IT Services",
    ],
  },
  {
    title: "Services",
    links: [
      "IT Infrastructure Consulting",
      "System Integration",
      "AMC Support",
      "Cloud & Virtualization support",
    ],
  },
  {
    title: "Industries",
    links: [
      "Corporate & Enterprises",
      "Education & Research",
      "Healthcare & Pharma",
      "Retail & Hospitality",
    ],
  },
  {
    title: "Company",
    links: ["About us", "Blogs", "News & Media", "Contact Us"],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-black px-6 py-16 text-white md:px-12 lg:px-[72px]">
      <div className="mx-auto max-w-[1296px]">
        {/* Connect with Us */}
        <div className="mb-12 text-center">
          <h3 className="font-['TASA_Orbiter'] text-[16px] font-medium leading-[1.3] tracking-[-0.03em] text-white">
            Connect with Us
          </h3>
        </div>

        {/* Social Icons */}
        <div className="mb-12 flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <Link
              key={i}
              href="#"
              className="flex h-[37px] w-[41px] items-center justify-center rounded bg-[#1D1D1D] transition hover:bg-[#262626]"
              aria-label="Social media"
            >
              <span className="h-[19px] w-[19px] rounded-full bg-[#98989A]" />
            </Link>
          ))}
        </div>

        {/* Footer Columns */}
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-[72px]">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-6 font-['TASA_Orbiter'] text-[32px] font-medium leading-[1.2] text-white">
                {column.title}
              </h4>
              <ul className="space-y-[34px]">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="font-['Manrope'] text-[14px] font-medium leading-[1.366] text-[#9C9C9C] transition hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company Description */}
        <div className="mb-8 text-left">
          <p className="font-['Manrope'] text-[14px] font-medium leading-[1.366] text-white">
            nexobots Technologies LLP
          </p>
          <p className="mt-2 font-['Manrope'] text-[14px] font-medium leading-[1.366] text-white">
            India&apos;s leading provider of structured cabling, networking,
            surveillance, biometric access, and managed IT services
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-9 text-center">
          <p className="font-['Manrope'] text-[16px] font-normal leading-[1.25] text-white">
            Copyright © 2025 Nexobots | All Rights Reserved | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

