"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

const solutions = [
  {
    id: "smart-network",
    title: "Smart Network Infrastructure",
    description: `Build the backbone of your enterprise network with high-performance copper and fiber-optic cabling systems.

Our structured cabling solutions ensure seamless connectivity, scalability, and compliance with global standards.`,
    image: "/solution-network-355263.png",
    features: [
      "Firewall Solutions",
      "Core & Access Switches",
      "Structured Cabling Solutions (Copper & Fiber)",
      "Wireless Networking (Wi-Fi 6, Access Points)",
      "Network Security & Optimization",
    ],
    buttonText: "Explore Structured Cabling Solutions",
    imagePosition: "left",
  },
  {
    id: "cctv-surveillance",
    title: "CCTV & Intelligent Surveillance Solutions",
    description: `Secure your assets with intelligent, AI-enabled surveillance systems.

We provide IP cameras, NVRs, and remote monitoring solutions for 24/7 visibility, proactive threat detection, and operational safety.ANPR Solution, PTZ Cameras.`,
    image: "/solution-cctv-7702d8.png",
    features: [
      "IP CCTV Solutions",
      "Analog CCTV Solutions",
      "Video Management Systems (VMS)",
      "NVR/DVR Solutions",
      "Remote Monitoring & Control",
    ],
    buttonText: "Explore Structured Cabling Solutions",
    imagePosition: "right",
  },
  {
    id: "biometric-access",
    title: "Secure Biometric & Access Control Solutions",
    description: `Enhance workplace security with advanced biometric and RFID-based access systems.

Our integrated attendance and access control solutions enable seamless authentication, compliance, and centralized management.`,
    image: "/solution-network-355263.png", // Placeholder
    features: [
      "Biometric Attendance Systems",
      "Access Control Solutions",
      "Smart Locks & Barriers",
      "Visitor Management Systems",
      "Multi-Factor Authentication Devices",
    ],
    buttonText: "Explore Structured Cabling Solutions",
    imagePosition: "left",
  },
  {
    id: "it-infrastructure",
    title: "IT Infrastructure &  Managed Services",
    description: `Empower your business with resilient, scalable IT infrastructure and expert managed services.

From data centers and cloud solutions to backup and disaster recovery, we ensure continuity, performance, and growth.`,
    image: "/solution-itinfra-355263.png",
    features: [
      "IT Consulting & System Design",
      "Hardware Supply & Deployment",
      "IT AMC & Managed Services",
      "Cloud & Virtualization Solutions",
      "Data Backup & Recovery",
    ],
    buttonText: "Explore Structured Cabling Solutions",
    imagePosition: "right",
  },
] as const;

export default function SolutionsPage() {
  return (
    <div className="bg-shell text-ink">
      <Navbar />

      {/* Hero Section */}
      <section
        className="flex items-center justify-center px-6 md:px-12"
        style={{
          minHeight: "723px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[784px_1fr]">
            {/* Left Column - Title */}
            <div>
              <h1
                className="font-display text-black text-[36px] md:text-[44px] lg:text-[50px]"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.32",
                  maxWidth: "784px",
                }}
              >
                Comprehensive IT & Security Solutions for a Connected,
                Intelligent, and Secure Enterprise
              </h1>
            </div>

            {/* Right Column - Description + CTA */}
            <div className="flex flex-col justify-center space-y-8">
              <p
                className="font-display text-black text-[16px] md:text-[18px] lg:text-[20px]"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.32",
                  maxWidth: "646px",
                }}
              >
                At Nexobots Technologies, we deliver end-to-end IT and security
                infrastructure solutions that empower organizations to operate
                smarter, safer, and more efficiently.
                <br />
                <br />
                From high-performance network cabling and intelligent surveillance
                systems to biometric access and managed IT services — our
                integrated solutions are engineered to enhance connectivity,
                strengthen security, and enable scalable digital growth.
              </p>

              <button
                className="flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black px-8 py-4 transition-all hover:bg-gray-900"
                style={{
                  width: "253px",
                  height: "67px",
                }}
              >
                <span
                  className="font-sans text-white"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "1.366",
                    letterSpacing: "0.02em",
                  }}
                >
                  Find Out More
                </span>
                <Image
                  src="/find-out-more-arrow.svg"
                  alt=""
                  width={41}
                  height={41}
                  className="h-[41px] w-[41px]"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Sections */}
      <div className="mx-auto max-w-[1440px] space-y-12 px-6 py-12 md:px-12">
        {solutions.map((solution, index) => (
          <section
            key={solution.id}
            className="rounded-[21px] bg-white p-6 md:p-12"
            style={{
              minHeight: "807px",
            }}
          >
            {/* Title */}
            <h2
              className="font-sans text-black text-[32px] md:text-[40px] lg:text-[48px] mb-8"
              style={{
                fontWeight: 700,
                lineHeight: "1.366",
                letterSpacing: "0.02em",
                textTransform: solution.id === "biometric-access" ? "capitalize" : "lowercase",
              }}
            >
              {solution.title}
            </h2>

            {/* Content Grid */}
            <div
              className={`grid gap-8 lg:grid-cols-[630px_1fr] ${
                solution.imagePosition === "right" ? "" : ""
              }`}
            >
              {/* Image with Description Overlay */}
              <div
                className={`relative ${
                  solution.imagePosition === "right" ? "lg:order-2" : ""
                }`}
                style={{
                  width: "100%",
                  maxWidth: "630px",
                  height: "504px",
                }}
              >
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="rounded-[15px] object-cover"
                />
                <div
                  className="absolute inset-0 rounded-[15px]"
                  style={{
                    background:
                      solution.id === "cctv-surveillance"
                        ? "rgba(0, 0, 0, 0.65)"
                        : solution.id === "it-infrastructure"
                        ? "rgba(0, 0, 0, 0.53)"
                        : "rgba(0, 0, 0, 0.5)",
                  }}
                />
                {/* Description Text Over Image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p
                    className="font-sans text-white whitespace-pre-line"
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.208",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {solution.description}
                  </p>
                </div>
              </div>

              {/* Features & Button */}
              <div
                className={`flex flex-col space-y-8 ${
                  solution.imagePosition === "right" ? "lg:order-1" : ""
                }`}
              >
                {/* Features List */}
                <div className="space-y-4">
                  {solution.features.map((feature, i) => (
                    <div
                      key={i}
                      className="relative flex items-center gap-4 rounded-[67px] border border-[#DADADA] bg-white px-6 py-4"
                      style={{
                        height: "65px",
                        maxWidth: "486px",
                      }}
                    >
                      {/* Star Icon */}
                      <div className="absolute -left-2 flex-shrink-0">
                        <svg
                          width="17"
                          height="18"
                          viewBox="0 0 17 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.5 0L10.4 6.5H17L11.3 10.5L13.2 17L8.5 13L3.8 17L5.7 10.5L0 6.5H6.6L8.5 0Z"
                            fill="#E11E24"
                          />
                        </svg>
                      </div>
                      <p
                        className="font-sans text-black ml-6"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "2.25",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  className="flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black px-6 py-3 transition-all hover:bg-gray-900"
                  style={{
                    width: "348px",
                    height: "45px",
                  }}
                >
                  <span
                    className="font-sans text-white"
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      lineHeight: "1.366",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {solution.buttonText}
                  </span>
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Closing CTA */}
      <section
        className="flex items-center justify-center px-6 py-24 md:px-12"
        style={{
          minHeight: "735px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] text-center">
          <h2
            className="font-display text-black text-[40px] md:text-[52px] lg:text-[64px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "1148px",
              margin: "0 auto",
            }}
          >
            Let&apos;s Build Your Next-Gen IT Infrastructure
          </h2>

          <p
            className="mt-8 font-sans text-black text-[16px] md:text-[18px] lg:text-[20px]"
            style={{
              fontWeight: 400,
              lineHeight: "1.4",
              maxWidth: "900px",
              margin: "0 auto",
              marginTop: "32px",
            }}
          >
            At Nexobots Technologies, we don&apos;t just deliver solutions — we design
            connected, intelligent, and secure ecosystems that power business
            growth.
            <br />
            <br />
            Whether you&apos;re upgrading your network, enhancing security, or
            modernizing your IT environment, our experts are ready to help you
            build future-ready infrastructure tailored to your goals.
            <br />
            <br />
            Let&apos;s collaborate to transform your technology foundation into a
            strategic advantage.
          </p>

          <button
            className="mx-auto mt-12 flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black px-6 py-3 transition-all hover:bg-gray-900"
            style={{
              width: "155px",
              height: "45px",
            }}
          >
            <span
              className="font-sans text-white"
              style={{
                fontSize: "15px",
                fontWeight: 600,
                lineHeight: "1.366",
                letterSpacing: "0.02em",
              }}
            >
              Get In Touch
            </span>
          </button>
        </div>
      </section>

      {/* Contact Form Section - Same as Industries page */}
      <section
        className="bg-shell px-6 py-24 md:px-12"
        style={{
          minHeight: "739px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="mb-12 space-y-4 text-center">
            <p
              className="font-sans text-[14px] font-medium uppercase tracking-[0.4em]"
              style={{ color: "#707070" }}
            >
              Contact Us
            </p>
            <h2
              className="font-sans text-[28px] md:text-[32px] lg:text-[36px] text-black"
              style={{
                fontWeight: 600,
                lineHeight: "1.5",
              }}
            >
              Get in Touch
            </h2>
          </div>

          <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <label
                    className="font-sans text-[14px] text-black"
                    style={{ fontWeight: 600 }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full rounded-md border border-[#CECECE] bg-[#F2F2F2] px-4 py-3 text-base text-black outline-none transition focus:border-primary"
                    style={{ fontWeight: 500 }}
                  />
                </div>
                <div className="space-y-3">
                  <label
                    className="font-sans text-[14px] text-black"
                    style={{ fontWeight: 600 }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full rounded-md border border-[#CECECE] bg-[#F2F2F2] px-4 py-3 text-base text-black outline-none transition focus:border-primary"
                    style={{ fontWeight: 500 }}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <label
                    className="font-sans text-[14px] text-black"
                    style={{ fontWeight: 600 }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full rounded-md border border-[#CECECE] bg-[#F2F2F2] px-4 py-3 text-base text-black outline-none transition focus:border-primary"
                    style={{ fontWeight: 500 }}
                  />
                </div>
                <div className="space-y-3">
                  <label
                    className="font-sans text-[14px] text-black"
                    style={{ fontWeight: 600 }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-md border border-[#CECECE] bg-[#F2F2F2] px-4 py-3 text-base text-black outline-none transition focus:border-primary"
                    style={{ fontWeight: 500 }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label
                  className="font-sans text-[14px] text-black"
                  style={{ fontWeight: 600 }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your project or requirements"
                  rows={6}
                  className="w-full rounded-md border border-[#CECECE] bg-[#F2F2F2] px-4 py-3 text-base text-black outline-none transition focus:border-primary"
                  style={{ fontWeight: 500, resize: "none" }}
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded border border-[#C9C9C9] bg-transparent">
                  <div className="h-4 w-4 rounded bg-primary" />
                </div>
                <label
                  className="font-sans text-[14px]"
                  style={{ fontWeight: 500, color: "#4C4C4C" }}
                >
                  I agree with Terms of Use and Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-[75px] border border-[rgba(70,70,70,0.3)] bg-black px-6 py-3 text-white transition hover:bg-gray-900"
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 300,
                    lineHeight: "0.78",
                    letterSpacing: "0.02em",
                  }}
                >
                  Submit
                </span>
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3
                  className="font-sans text-[18px] text-black"
                  style={{ fontWeight: 500 }}
                >
                  Nexobots Technologies LLP
                </h3>
                <p
                  className="mt-4 font-sans text-[16px]"
                  style={{ fontWeight: 400, color: "#4C4C4C", lineHeight: "1.5" }}
                >
                  India&apos;s leading provider of structured cabling, networking,
                  surveillance, biometric access, and managed IT services.
                </p>
              </div>
              <Image
                src="/contact-illustration.png"
                alt="Nexobots team"
                width={317}
                height={145}
                className="h-auto w-full max-w-[317px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as Industries page */}
      <footer
        className="px-6 py-16 md:px-12"
        style={{
          minHeight: "633px",
          backgroundColor: "#000000",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_940px] lg:px-[103px]">
            {/* Left: Logo & Description */}
            <div className="space-y-6">
              <Image src="/logo.svg" alt="Nexobots" width={182} height={33} />
              <p
                className="font-sans text-[16px]"
                style={{
                  fontWeight: 500,
                  lineHeight: "1.3",
                  color: "#9C9C9C",
                  maxWidth: "280px",
                }}
              >
                nexobots Technologies LLP India&apos;s leading provider of structured
                cabling, networking, surveillance, biometric access, and managed IT
                services
              </p>
              <div className="flex gap-2">
                <button
                  className="flex h-[37px] w-[41px] items-center justify-center rounded bg-[#1D1D1D]"
                  aria-label="LinkedIn"
                >
                  <div className="h-5 w-5 bg-[#98989A] rounded" />
                </button>
                <button
                  className="flex h-[37px] w-[39px] items-center justify-center rounded bg-[#1D1D1D]"
                  aria-label="Twitter"
                >
                  <div className="h-5 w-5 bg-[#98989A] rounded" />
                </button>
                <button
                  className="flex h-[37px] w-[40px] items-center justify-center rounded bg-[#1D1D1D]"
                  aria-label="Facebook"
                >
                  <div className="h-[17px] w-[17px] bg-[#98989A] rounded" />
                </button>
              </div>
            </div>

            {/* Right: Links Grid */}
            <div className="grid gap-12 md:grid-cols-4">
              <div className="space-y-6">
                <h4
                  className="font-display text-[32px] text-white"
                  style={{ fontWeight: 500 }}
                >
                  Solutions
                </h4>
                <ul className="space-y-4 font-sans text-[14px] text-[#9C9C9C]">
                  <li>Smart Network</li>
                  <li>Infrastructure CCTV Solutions</li>
                  <li>Secure access & Biometrics</li>
                  <li>End to end IT Services</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4
                  className="font-display text-[32px] text-white"
                  style={{ fontWeight: 500 }}
                >
                  Services
                </h4>
                <ul className="space-y-4 font-sans text-[14px] text-[#9C9C9C]">
                  <li>IT Infrastructure Consulting</li>
                  <li>System Integration</li>
                  <li>AMC Suooort</li>
                  <li>Cloud & Virtualization support</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4
                  className="font-display text-[32px] text-white"
                  style={{ fontWeight: 500 }}
                >
                  Industries
                </h4>
                <ul className="space-y-4 font-sans text-[14px] text-[#9C9C9C]">
                  <li>Corporate & Enterprises</li>
                  <li>Education & Research</li>
                  <li>Healthcare & Pharma</li>
                  <li>Retail & Hospitality</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4
                  className="font-display text-[32px] text-white"
                  style={{ fontWeight: 500 }}
                >
                  Company
                </h4>
                <ul className="space-y-4 font-sans text-[14px] text-[#9C9C9C]">
                  <li>About us</li>
                  <li>Blogs</li>
                  <li>News & Media</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="mt-16 border-t pt-9 text-center"
            style={{
              borderColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            <p
              className="font-sans text-[16px] text-white"
              style={{ fontWeight: 400 }}
            >
              Copyright © {new Date().getFullYear()} Nexobots    |   All Rights
              Reserved   |   Privacy Policy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

