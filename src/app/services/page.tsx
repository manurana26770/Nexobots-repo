import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

const services = [
  {
    id: 1,
    title: "IT Infrastructure Consulting",
    description:
      "Build the backbone of your enterprise network with high-performance copper and fiber-optic cabling systems. Our structured cabling solutions ensure seamless connectivity, scalability, and compliance with global standards.",
    image: "/service-consulting.png",
    offerings: [
      "Network Architecture Design & Assessment",
      "Technology Roadmap & Deployment Planning",
      "Infrastructure Modernization Strategy",
    ],
    ctaText: "Explore Infrastructure Consulting",
  },
  {
    id: 2,
    title: "System Integration",
    description:
      "Nexobots integrates multi-vendor technologies into unified, high-performing systems.From networking and surveillance to security and communication platforms, we deliver seamless interoperability and enhanced reliability.",
    image: "/service-integration.png",
    offerings: [
      "Hardware & software integration",
      "Data & Communication Infrastructure Setup",
      "Network and security system integration",
    ],
    ctaText: "Explore System Integration",
  },
  {
    id: 3,
    title: "Annual Maintenance & Support (AMC)",
    description:
      "Keep your IT and security systems running at peak performance with our proactive AMC services.We offer preventive maintenance, real-time monitoring, and rapid support to minimize downtime and ensure business continuity.",
    image: "/service-amc.png",
    offerings: [
      "Preventive Maintenance & Health Checks",
      "Onsite Service & Spare Management",
      "24/7 Technical Assistance & Remote Support",
    ],
    ctaText: "Learn About AMC & Support",
  },
  {
    id: 4,
    title: "Cloud & Virtualization Support",
    description:
      "Empower your enterprise with secure, scalable, and efficient cloud operations.Our cloud and virtualization services enable easy migration, optimized workloads, and disaster recovery — ensuring flexibility and resilience.",
    image: "/service-cloud-355263.png",
    offerings: [
      "Cloud setup, migration & optimization",
      "Virtualization planning & deployment",
      "Backup, recovery & disaster management",
    ],
    ctaText: "Explore Cloud & Virtualization Services",
  },
] as const;

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

export default function ServicesPage() {
  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#F8F8F8] px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1296px]">
          <h1 className="font-['TASA_Orbiter'] text-[48px] font-semibold leading-[1.494] text-black md:text-[56px] lg:text-[64px]">
            End-to-End IT Services That Power Connectivity, Security, and
            Scalability
          </h1>
          <p className="mt-8 font-['Manrope'] text-[18px] font-normal leading-[1.4] text-black md:text-[20px]">
            At Nexobots Technologies, we deliver a complete suite of IT
            services designed to help enterprises stay connected, secure, and
            future-ready.
          </p>
          <p className="mt-4 font-['Manrope'] text-[18px] font-normal leading-[1.4] text-black md:text-[20px]">
            From infrastructure consulting and system integration to proactive
            maintenance and cloud management, our expert-driven services ensure
            that your technology investments deliver lasting value and
            performance.
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-[75px] border border-white/30 bg-black px-[29px] py-3 text-[15px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-gray-800"
          >
            Talk to an Expert
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              className="h-[20px] w-[20px]"
            >
              <path
                d="M20.5 0L20.5 41M20.5 41L41 20.5M20.5 41L0 20.5"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Service Cards */}
      <div className="space-y-24 px-6 py-12 md:px-12 lg:px-[72px]">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              className="mx-auto max-w-[1296px] rounded-[21px] bg-white p-8 shadow-[0_25px_60px_rgba(15,18,23,0.08)] md:p-12 lg:p-16"
            >
              <div
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-[400px] overflow-hidden rounded-[15px] lg:h-[504px] ${
                    isEven ? "" : "lg:col-start-2"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/65" />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <h2 className="font-['Manrope'] text-[40px] font-bold leading-[1.366] tracking-[0.02em] text-black md:text-[48px]">
                    {service.title}
                  </h2>
                  <p className="font-['Manrope'] text-[18px] font-normal leading-[1.4] text-white md:text-[20px]">
                    {service.description}
                  </p>

                  {/* Offerings */}
                  <div className="space-y-4">
                    <h3 className="font-['Manrope'] text-[20px] font-semibold leading-[1.366] text-black">
                      Our Offerings
                    </h3>
                    <div className="space-y-3">
                      {service.offerings.map((offering, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-4 rounded-[76px] border border-[#DADADA] px-6 py-3"
                        >
                          <span className="h-[6px] w-[6px] rounded-full bg-black" />
                          <p className="font-['Manrope'] text-[14px] font-semibold leading-[1.366] tracking-[0.02em] text-black md:text-[16px]">
                            {offering}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-3 rounded-[75px] border border-white/30 bg-black px-[29px] py-3 text-[15px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-gray-800"
                  >
                    {service.ctaText}
                    <svg
                      width="41"
                      height="41"
                      viewBox="0 0 41 41"
                      fill="none"
                      className="h-[20px] w-[20px]"
                    >
                      <path
                        d="M20.5 0L20.5 41M20.5 41L41 20.5M20.5 41L0 20.5"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>

                  {/* Decorative Stars */}
                  <div className="flex gap-3">
                    {[...Array(3)].map((_, i) => (
                      <svg
                        key={i}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-[#E11E24]"
                      >
                        <path
                          d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                          fill="currentColor"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Closing CTA */}
      <section className="bg-black px-6 py-24 text-white md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1148px] text-center">
          <h2 className="font-['TASA_Orbiter'] text-[48px] font-semibold leading-[1.494] text-white md:text-[56px] lg:text-[64px]">
            Partner with Nexobots for Reliable, Scalable, and Secure IT
            Operations
          </h2>
          <div className="mx-auto mt-8 max-w-[900px] space-y-6">
            <p className="font-['Manrope'] text-[18px] font-normal leading-[1.4] text-white md:text-[20px]">
              Your business deserves an IT foundation that evolves with your
              goals.
            </p>
            <p className="font-['Manrope'] text-[18px] font-normal leading-[1.4] text-white md:text-[20px]">
              At Nexobots Technologies, our expert team provides end-to-end
              services that simplify management, enhance performance, and
              protect your digital ecosystem.
            </p>
            <p className="font-['Manrope'] text-[18px] font-normal leading-[1.4] text-white md:text-[20px]">
              Let&apos;s work together to optimize your IT infrastructure and
              turn technology into your competitive advantage.
            </p>
          </div>
          <Link
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-[75px] border border-white/30 bg-black px-[29px] py-3 text-[15px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-gray-800"
          >
            Get In Touch
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              className="h-[20px] w-[20px]"
            >
              <path
                d="M20.5 0L20.5 41M20.5 41L41 20.5M20.5 41L0 20.5"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-white px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[21px] bg-[#E4E4E4] p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Left side - Icon and Description */}
              <div className="flex flex-col items-start space-y-6">
                <Image
                  src="/contact-form-icon.svg"
                  alt="Contact Icon"
                  width={317}
                  height={145}
                  className="h-auto w-full max-w-[317px]"
                />
                <p className="font-['Manrope'] text-[18px] font-medium leading-[1.366] text-black">
                  Our experts are just a message away. Let&apos;s connect and
                  create technology that powers your tomorrow.
                </p>
              </div>

              {/* Right side - Form */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="font-['Manrope'] text-[14px] font-semibold text-black">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="w-full rounded-[6px] border border-[#C4C4C4] bg-white px-4 py-3 text-[14px] text-black placeholder:text-[#9E9E9E] focus:border-[#E11E24] focus:outline-none"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label className="font-['Manrope'] text-[14px] font-semibold text-black">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      className="w-full rounded-[6px] border border-[#C4C4C4] bg-white px-4 py-3 text-[14px] text-black placeholder:text-[#9E9E9E] focus:border-[#E11E24] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="font-['Manrope'] text-[14px] font-semibold text-black">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="w-full rounded-[6px] border border-[#C4C4C4] bg-white px-4 py-3 text-[14px] text-black placeholder:text-[#9E9E9E] focus:border-[#E11E24] focus:outline-none"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="font-['Manrope'] text-[14px] font-semibold text-black">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      className="w-full rounded-[6px] border border-[#C4C4C4] bg-white px-4 py-3 text-[14px] text-black placeholder:text-[#9E9E9E] focus:border-[#E11E24] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-['Manrope'] text-[14px] font-semibold text-black">
                    Message
                  </label>
                  <textarea
                    placeholder="Enter your Message"
                    rows={5}
                    className="w-full rounded-[6px] border border-[#C4C4C4] bg-white px-4 py-3 text-[14px] text-black placeholder:text-[#9E9E9E] focus:border-[#E11E24] focus:outline-none"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-6 w-6 rounded border-[#C4C4C4] text-[#E11E24] focus:ring-[#E11E24]"
                  />
                  <label
                    htmlFor="terms"
                    className="font-['Manrope'] text-[14px] font-semibold text-black"
                  >
                    I agree with Terms of Use and Privacy Policy
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-[75px] border border-white/30 bg-black px-[29px] py-3 text-[15px] font-light uppercase tracking-[0.02em] text-white transition hover:bg-gray-800"
                >
                  Submit
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    className="h-[20px] w-[20px]"
                  >
                    <path
                      d="M20.5 0L20.5 41M20.5 41L41 20.5M20.5 41L0 20.5"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-6 py-16 text-white md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1296px]">
          <div className="mb-12 text-center">
            <h3 className="font-['TASA_Orbiter'] text-[32px] font-semibold leading-[1.366] text-white">
              Connect with Us
            </h3>
          </div>

          {/* Social Icons */}
          <div className="mb-12 flex justify-center gap-6">
            {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
              <Link
                key={social}
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10"
                aria-label={social}
              >
                <span className="text-white">●</span>
              </Link>
            ))}
          </div>

          {/* Footer Columns */}
          <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="mb-4 font-['Manrope'] text-[18px] font-semibold text-white">
                  {column.title}
                </h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="font-['Manrope'] text-[14px] font-normal text-[#9E9E9E] transition hover:text-white"
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
          <div className="mb-12 text-center">
            <p className="font-['Manrope'] text-[14px] font-normal leading-[1.366] text-white">
              nexobots Technologies LLP
            </p>
            <p className="mt-2 font-['Manrope'] text-[14px] font-normal leading-[1.366] text-white">
              India&apos;s leading provider of structured cabling, networking,
              surveillance, biometric access, and managed IT services
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="font-['Manrope'] text-[16px] font-normal text-white">
              Copyright © 2025 Nexobots | All Rights Reserved | Privacy Policy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


