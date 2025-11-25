"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
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
                className="font-['TASA_Orbiter'] text-black text-[36px] md:text-[44px] lg:text-[50px]"
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
                className="font-['Manrope'] text-black text-[16px] md:text-[18px] lg:text-[20px]"
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
                  className="font-['Manrope'] text-white"
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
              className="font-['TASA_Orbiter'] text-black text-[32px] md:text-[40px] lg:text-[48px] mb-8"
              style={{
                fontWeight: 700,
                lineHeight: "1.366",
                letterSpacing: "0.02em",
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
                    className="font-['Manrope'] text-white whitespace-pre-line"
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
                        className="font-['Manrope'] text-black ml-6"
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
                    className="font-['Manrope'] text-white"
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
            className="font-['TASA_Orbiter'] text-black text-[40px] md:text-[52px] lg:text-[64px]"
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
            className="mt-8 font-['Manrope'] text-black text-[16px] md:text-[18px] lg:text-[20px]"
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
              className="font-['Manrope'] text-white"
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

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}

