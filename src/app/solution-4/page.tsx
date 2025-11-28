"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

const benefitCards = [
  {
    title: "End-to-End Network Expertise",
    description:
      "From structured cabling to SD-WAN, we manage every layer of your network infrastructure.",
  },
  {
    title: "Certified OEM Partnerships",
    description:
      "We collaborate with leading brands — Cisco, D-Link, Fortinet, Aruba, and Palo Alto — for best-in-class networking solutions.",
  },
  {
    title: "Performance-Driven Design",
    description:
      "Every network is built for high availability, scalability, and zero downtime.",
  },
  {
    title: "Security at the Core",
    description:
      "Integrated firewall, VPN, and threat detection to safeguard your data and users.",
  },
  {
    title: "Nationwide Implementation Capability",
    description:
      "180+ city presence ensures consistent quality and rapid deployment across India.",
  },
] as const;

const firewallServices = [
  "Next-Generation Firewall (NGFW) deployment",
  "Intrusion detection & prevention (IDS/IPS)",
  "Web filtering & application control",
  "VPN & secure remote access",
  "Centralized policy management",
] as const;

const structuredCablingServices = [
  "Design & implementation of CAT6/CAT7 networks",
  "Optical fibre backbone installation & testing",
  "Rack dressing & patch panel management",
  "Cable certification & documentation",
  "End-to-end labeling & network mapping",
] as const;

const activeComponentsServices = [
  "Router configuration & deployment",
  "Layer 2 & Layer 3 switch setup",
  "Load balancing & VLAN segmentation",
  "QoS (Quality of Service) optimization",
  "Firmware updates & performance monitoring",
] as const;

const passiveComponentsServices = [
  "Core & access switch installation",
  "Patch panel & hub configuration",
  "Rack integration & cable management",
  "Power & redundancy planning",
  "Network topology documentation",
] as const;

const sdwanServices = [
  "SD-WAN design & deployment",
  "Centralized policy management",
  "Application-based traffic routing",
  "Encrypted multi-branch connectivity",
  "Real-time analytics & reporting",
] as const;

const p2pRfServices = [
  "P2P link design & deployment",
  "RF connectivity & antenna alignment",
  "Wireless bridge configuration",
  "Bandwidth testing & optimization",
  "Network redundancy planning",
] as const;

const faqs = [
  {
    question: "Do you provide both LAN and WAN design and implementation?",
    answer:
      "Yes. We offer complete design, deployment, and optimization of LAN and WAN networks, including cabling, routing, switching, and connectivity.",
  },
  {
    question: "Can you integrate SD-WAN with our existing WAN setup?",
    answer:
      "Absolutely. We specialize in hybrid WAN models that combine MPLS, broadband, and LTE connectivity under SD-WAN control.",
  },
  {
    question: "How do you ensure network security across branches?",
    answer:
      "Our multi-layered security framework includes NGFWs, VPNs, intrusion prevention, and continuous monitoring.",
  },
  {
    question: "Do you support long-range wireless or RF connectivity?",
    answer:
      "Yes. We design and deploy secure point-to-point (P2P) and RF-based connections for remote sites and industrial campuses.",
  },
  {
    question: "Can these solutions scale with our growing business?",
    answer:
      "Definitely. All Nexobots network solutions are modular, standards-based, and easily scalable to support your future expansion.",
  },
  {
    question: "Do you handle ISP coordination and link redundancy?",
    answer:
      "Yes. We manage end-to-end ISP integration, bandwidth allocation, and redundancy configuration for uninterrupted connectivity.",
  },
  {
    question: "Which OEMs do you work with for network components?",
    answer:
      "We partner with leading OEMs including Cisco, D-Link, Fortinet, Aruba, and Palo Alto for routers, switches, firewalls, and other network infrastructure components.",
  },
] as const;

export default function Solution4Page() {
  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Hero Section - Exact from Figma */}
      <section className="relative h-[935px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/solution-4-hero-bg.png"
            alt="Smart Network Infrastructure Solutions Hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.52)",
          }}
        />
        {/* Content */}
        <div className="relative z-10 h-full">
          {/* Title - Position: left 142px, top 169px */}
          <div className="absolute" style={{ left: "142px", top: "169px" }}>
            <h1
              className="font-['TASA_Orbiter'] text-white"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.32",
                maxWidth: "1172px",
              }}
            >
              Connect Intelligently. Communicate Seamlessly. Scale Confidently.
            </h1>
          </div>

          {/* Description - Position: left 142px, top 366px */}
          <div className="absolute" style={{ left: "142px", top: "366px" }}>
            <p
              className="font-['TASA_Orbiter'] text-white"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.44",
                maxWidth: "812px",
              }}
            >
              Build a secure, high-performance network backbone with Nexobots'
              Smart Network Infrastructure Solutions.
            </p>
          </div>

          {/* CTA Button - Position: left 142px, top 489px */}
          <div className="absolute" style={{ left: "142px", top: "489px" }}>
            <Link
              href="#contact"
              className="inline-flex h-[67px] w-[261px] items-center justify-between rounded-[75px] border border-white/30 bg-white transition-all hover:bg-gray-100"
              style={{
                padding: "20px 29px",
              }}
            >
              <span
                className="font-['Manrope'] text-black"
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "1.366",
                  letterSpacing: "0.02em",
                }}
              >
                Talk to an Expert
              </span>
              <Image
                src="/talk-to-expert-arrow.svg"
                alt=""
                width={9}
                height={15}
                className="h-[15px] w-[9px] flex-shrink-0"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA Section - Exact from Figma (node-id=37-2656) */}
      <section
        className="bg-black"
        style={{
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[78px]">
          {/* First Text */}
          <p
            className="font-['TASA_Orbiter'] text-white mx-auto text-center mb-[60px]"
            style={{
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "1.17",
              maxWidth: "1108px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            In a hyper-connected business landscape, network reliability and
            speed define operational excellence. Yet, managing complex network
            architectures, multi-site connectivity, and evolving security needs
            can strain resources and limit scalability.
          </p>

          {/* Second Text */}
          <p
            className="font-['TASA_Orbiter'] text-[#727272] mx-auto text-center mb-[60px]"
            style={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "1.17",
              maxWidth: "918px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Nexobots Technologies delivers Smart Network Infrastructure
            Solutions that form the foundation of modern enterprises. From
            high-speed LAN deployments to secure WAN connectivity and SD-WAN
            optimization, we design and implement intelligent, scalable, and
            resilient network ecosystems tailored to your organization's
            performance and security goals.
          </p>

          {/* Get In Touch Button */}
          <div className="flex justify-center mb-[80px]">
            <Link
              href="#contact"
              className="relative inline-flex items-center justify-center rounded-[75px] border border-white/30 transition-all hover:bg-black/90"
              style={{
                width: "155px",
                height: "45px",
                background: "black",
                outline: "1px rgba(255, 255, 255, 0.30) solid",
                outlineOffset: "-1px",
              }}
            >
              <span
                className="font-['Manrope'] text-white"
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.30px",
                }}
              >
                Get In Touch
              </span>
            </Link>
          </div>

          {/* Three Image Cards */}
          <div
            className="mx-auto flex gap-[17px]"
            style={{
              width: "1201px",
              height: "622px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* Left Large Image */}
            <div
              className="relative rounded-[18px] overflow-hidden flex-shrink-0"
              style={{
                width: "539px",
                height: "622px",
              }}
            >
              <Image
                src="/solution-4-cta-1.png"
                alt="Network Infrastructure"
                fill
                className="object-cover"
                sizes="539px"
              />
            </div>

            {/* Right Two Images Stacked */}
            <div className="flex flex-col gap-[26.17px] flex-shrink-0">
              {/* Top Right Image */}
              <div
                className="relative rounded-[18px] overflow-hidden"
                style={{
                  width: "635px",
                  height: "311.71px",
                }}
              >
                <Image
                  src="/solution-4-cta-2.png"
                  alt="Network Security"
                  fill
                  className="object-cover"
                  sizes="635px"
                />
              </div>

              {/* Bottom Right Image */}
              <div
                className="relative rounded-[18px] overflow-hidden"
                style={{
                  width: "635px",
                  height: "283.12px",
                }}
              >
                <Image
                  src="/solution-4-cta-3.png"
                  alt="Network Performance"
                  fill
                  className="object-cover"
                  sizes="635px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Smart Network Infrastructure Matters Section - Exact from Figma (node-id=1-3338) */}
      <section
        className="bg-[#D9D9D9]"
        style={{
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[78px]">
          {/* Heading */}
          <h2
            className="font-['TASA_Orbiter'] text-black mb-[40px]"
            style={{
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "973px",
            }}
          >
            Why Smart Network Infrastructure Matters
          </h2>

          {/* Two Column Text Layout */}
          <div className="grid grid-cols-2 gap-[60px] mb-[60px]">
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "576px",
              }}
            >
              Your network is the lifeline of your digital enterprise. A
              well-architected network ensures seamless communication, secure
              data exchange, and uninterrupted collaboration across locations
              and devices. Nexobots enables businesses to stay connected and
              protected — integrating advanced networking technologies with
              enterprise-grade performance and security.
            </p>
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "573px",
              }}
            >
              Our end-to-end expertise spans structured cabling, active and
              passive components, firewalls, WAN optimization, and ISP
              integration — ensuring your network remains fast, stable, and
              future-ready.
            </p>
          </div>

          {/* Get In Touch Button - Left aligned below text */}
          <div>
            <Link
              href="#contact"
              className="inline-flex h-[45px] w-[155px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
              style={{
                padding: "12px 25px",
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
              <Image
                src="/find-out-more-arrow.svg"
                alt=""
                width={12}
                height={12}
                className="h-3 w-3"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Core Offerings Heading - Exact from Figma */}
      <section
        className="bg-white"
        style={{
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black"
            style={{
              fontSize: "64px",
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "678px",
            }}
          >
            Our Core Offerings
          </h2>
        </div>
      </section>

      {/* Network Security: Firewall Solutions Section - Exact from Figma (node-id=1-3346) */}
      <section
        className="bg-white"
        style={{
          padding: "60px 78px",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div
            className="bg-white rounded-[21px]"
            style={{
              padding: "60px 78px",
            }}
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-[40px]"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1172px",
              }}
            >
              Network Security: Firewall Solutions
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.26",
                maxWidth: "1284px",
              }}
            >
              Protect your organization's data and network assets with
              enterprise-grade firewall systems. We implement next-generation
              firewalls (NGFW) from leading OEMs like Fortinet, Palo Alto, and
              Cisco, ensuring deep packet inspection, intrusion prevention, and
              intelligent traffic control.
            </p>

            {/* Image and Key Services Row */}
            <div className="relative mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden inline-block"
                style={{
                  width: "640px",
                  height: "457px",
                }}
              >
                <Image
                  src="/solution-4-firewall-section.png"
                  alt="Network Security: Firewall Solutions"
                  fill
                  className="object-cover"
                  sizes="640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="absolute top-0"
                style={{
                  left: "673.5px",
                  width: "719px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[40px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                <div className="relative" style={{ width: "719px", height: "370px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "9px",
                      height: "370px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "8.6px",
                      height: "84px",
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-[50px]"
                    style={{ paddingLeft: "52px", paddingTop: "11px" }}
                  >
                    {firewallServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          lineHeight: "1.08",
                          width: "596px",
                        }}
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div
              style={{
                width: "1223px",
                marginTop: "50px",
              }}
            >
              <div className="mb-[30px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[14px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-black"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.38",
                    maxWidth: "1223px",
                  }}
                >
                  Enhanced security posture, compliance assurance, and real-time
                  threat mitigation.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex h-[45px] w-[225px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                style={{
                  padding: "12px 25px",
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
                  Let's Discuss Needs
                </span>
                <Image
                  src="/find-out-more-arrow.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="h-3 w-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Cabling: CAT6, CAT7 & Optical Fibre Section - Exact from Figma (node-id=1-3371) */}
      <section
        className="bg-white"
        style={{
          padding: "60px 78px",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div
            className="bg-white rounded-[21px]"
            style={{
              padding: "60px 78px",
            }}
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-[40px]"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1073px",
              }}
            >
              Structured Cabling: CAT6, CAT7 & Optical Fibre
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.26",
                maxWidth: "1151px",
              }}
            >
              Establish a robust and scalable network foundation with structured
              cabling systems that deliver speed, performance, and reliability.
              Our installations adhere to global standards, ensuring clean,
              efficient, and future-proof infrastructure.
            </p>

            {/* Image and Key Services Row */}
            <div className="relative mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden inline-block"
                style={{
                  width: "640px",
                  height: "457px",
                }}
              >
                <Image
                  src="/solution-4-structured-cabling-section.png"
                  alt="Structured Cabling: CAT6, CAT7 & Optical Fibre"
                  fill
                  className="object-cover"
                  sizes="640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="absolute top-0"
                style={{
                  left: "673.5px",
                  width: "719px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[40px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                <div className="relative" style={{ width: "719px", height: "365px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "9px",
                      height: "365px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "8.6px",
                      height: "77.31px",
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-[54px]"
                    style={{ paddingLeft: "52px", paddingTop: "10px" }}
                  >
                    {structuredCablingServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          lineHeight: "1.08",
                          width: i === 0 ? "482px" : "596px",
                        }}
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div
              style={{
                width: "1222px",
                marginTop: "50px",
              }}
            >
              <div className="mb-[30px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[14px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-black"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.27",
                    maxWidth: "1222px",
                  }}
                >
                  Improved network stability, reduced signal loss, and easier
                  scalability for future expansion.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex h-[45px] w-[225px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                style={{
                  padding: "12px 25px",
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
                  Let's Discuss Needs
                </span>
                <Image
                  src="/find-out-more-arrow.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="h-3 w-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Active Components: Routers & Network Devices Section - Exact from Figma (node-id=1-3395) */}
      <section
        className="bg-white"
        style={{
          padding: "60px 78px",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div
            className="bg-white rounded-[21px]"
            style={{
              padding: "60px 78px",
            }}
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-[40px]"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1151px",
              }}
            >
              Active Components: Routers & Network Devices
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.26",
                maxWidth: "1151px",
              }}
            >
              Empower your network with enterprise-grade routing and switching
              equipment that ensures seamless connectivity and optimized traffic
              flow. We supply, configure, and manage active components from global
              OEMs for maximum reliability.
            </p>

            {/* Image and Key Services Row */}
            <div className="relative mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden inline-block"
                style={{
                  width: "640px",
                  height: "457px",
                }}
              >
                <Image
                  src="/solution-4-active-components-section.png"
                  alt="Active Components: Routers & Network Devices"
                  fill
                  className="object-cover"
                  sizes="640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="absolute top-0"
                style={{
                  left: "673.5px",
                  width: "719.5px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[40px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                <div className="relative" style={{ width: "719.5px", height: "365px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "9px",
                      height: "358px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "8.6px",
                      height: "82.42px",
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-[47px]"
                    style={{ paddingLeft: "52.5px", paddingTop: "11px" }}
                  >
                    {activeComponentsServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          lineHeight: "1.08",
                          width: i === 4 ? "471px" : "596px",
                        }}
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div
              style={{
                width: "1151px",
                marginTop: "50px",
              }}
            >
              <div className="mb-[30px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[14px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-black"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.27",
                    maxWidth: "1151px",
                  }}
                >
                  High-speed, intelligent routing for consistent data flow and
                  superior network performance.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex h-[45px] w-[225px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                style={{
                  padding: "12px 25px",
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
                  Let's Discuss Needs
                </span>
                <Image
                  src="/find-out-more-arrow.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="h-3 w-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Passive Components: Core & Access Switches, Smart Hubs Section - Exact from Figma (node-id=1-3419) */}
      <section
        className="bg-white"
        style={{
          padding: "60px 78px",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div
            className="bg-white rounded-[21px]"
            style={{
              padding: "60px 78px",
            }}
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-[40px]"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1151px",
              }}
            >
              Passive Components: Core & Access Switches, Smart Hubs
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.26",
                maxWidth: "1151px",
              }}
            >
              Create a solid network framework with reliable passive components
              that ensure consistent connectivity between users and systems. We
              integrate core and access switches with smart hubs for efficient
              data management and redundancy.
            </p>

            {/* Image and Key Services Row */}
            <div className="relative mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden inline-block"
                style={{
                  width: "640px",
                  height: "457px",
                }}
              >
                <Image
                  src="/solution-4-passive-components-section.png"
                  alt="Passive Components: Core & Access Switches, Smart Hubs"
                  fill
                  className="object-cover"
                  sizes="640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="absolute top-0"
                style={{
                  left: "673.5px",
                  width: "719px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[40px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                <div className="relative" style={{ width: "719px", height: "365px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "9px",
                      height: "365px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "8.6px",
                      height: "77.31px",
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-[54px]"
                    style={{ paddingLeft: "52px", paddingTop: "10px" }}
                  >
                    {passiveComponentsServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          lineHeight: "1.08",
                          width: "596px",
                        }}
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div
              style={{
                width: "1216px",
                marginTop: "50px",
              }}
            >
              <div className="mb-[30px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[14px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-black"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.27",
                    maxWidth: "1216px",
                  }}
                >
                  Uninterrupted internet access, optimized bandwidth usage, and
                  improved reliability.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex h-[45px] w-[225px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                style={{
                  padding: "12px 25px",
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
                  Let's Discuss Needs
                </span>
                <Image
                  src="/find-out-more-arrow.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="h-3 w-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SD-WAN (Software-Defined WAN) Section - Exact from Figma (node-id=1-3443) */}
      <section
        className="bg-white"
        style={{
          padding: "60px 78px",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div
            className="bg-white rounded-[21px]"
            style={{
              padding: "60px 78px",
            }}
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-[40px]"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1151px",
              }}
            >
              SD-WAN (Software-Defined WAN)
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.26",
                maxWidth: "1151px",
              }}
            >
              Redefine wide-area networking with intelligent, software-driven
              connectivity. Our SD-WAN solutions deliver agility, security, and
              centralized control across distributed networks.
            </p>

            {/* Image and Key Services Row */}
            <div className="relative mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden inline-block"
                style={{
                  width: "640px",
                  height: "457px",
                }}
              >
                <Image
                  src="/solution-4-sd-wan-section.png"
                  alt="SD-WAN (Software-Defined WAN)"
                  fill
                  className="object-cover"
                  sizes="640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="absolute top-0"
                style={{
                  left: "673.5px",
                  width: "719px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[40px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                <div className="relative" style={{ width: "719px", height: "365px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "9px",
                      height: "365px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "8.6px",
                      height: "77.31px",
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-[54px]"
                    style={{ paddingLeft: "52px", paddingTop: "10px" }}
                  >
                    {sdwanServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          lineHeight: "1.08",
                          width: "596px",
                        }}
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div
              style={{
                width: "1216px",
                marginTop: "50px",
              }}
            >
              <div className="mb-[30px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[14px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-black"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.27",
                    maxWidth: "1216px",
                  }}
                >
                  Lower WAN costs, improved agility, and simplified network
                  management.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex h-[45px] w-[225px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                style={{
                  padding: "12px 25px",
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
                  Let's Discuss Needs
                </span>
                <Image
                  src="/find-out-more-arrow.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="h-3 w-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Point-to-Point (P2P) & RF Connectivity Section - Exact from Figma (node-id=1-3467) */}
      <section
        className="bg-white"
        style={{
          padding: "60px 78px",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div
            className="bg-white rounded-[21px]"
            style={{
              padding: "60px 78px",
            }}
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-[40px]"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1151px",
              }}
            >
              Point-to-Point (P2P) & RF Connectivity
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.26",
                maxWidth: "1151px",
              }}
            >
              Enable seamless data transfer and real-time communication between
              sites through high-speed P2P and RF connectivity. We design and
              deploy long-range wireless and fiber-based point-to-point networks
              for enterprises, campuses, and industrial zones.
            </p>

            {/* Image and Key Services Row */}
            <div className="relative mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden inline-block"
                style={{
                  width: "640px",
                  height: "457px",
                }}
              >
                <Image
                  src="/solution-4-p2p-rf-section.png"
                  alt="Point-to-Point (P2P) & RF Connectivity"
                  fill
                  className="object-cover"
                  sizes="640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="absolute top-0"
                style={{
                  left: "673.5px",
                  width: "719px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[40px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                <div className="relative" style={{ width: "719px", height: "365px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "9px",
                      height: "365px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "8.6px",
                      height: "77.31px",
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-[54px]"
                    style={{ paddingLeft: "52px", paddingTop: "10px" }}
                  >
                    {p2pRfServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          lineHeight: "1.08",
                          width: "596px",
                        }}
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div
              style={{
                width: "1216px",
                marginTop: "50px",
              }}
            >
              <div className="mb-[30px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[14px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-black"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.27",
                    maxWidth: "1216px",
                  }}
                >
                  Reliable inter-site communication, low-latency data transfer,
                  and extended network reach.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex h-[45px] w-[225px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                style={{
                  padding: "12px 25px",
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
                  Let's Discuss Needs
                </span>
                <Image
                  src="/find-out-more-arrow.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="h-3 w-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nexobots Section - Exact from Figma (node-id=1-3491) */}
      <section
        className="bg-[#F8F8F8]"
        style={{
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-center"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "860px",
              margin: "0 auto 80px",
            }}
          >
            Why Choose Nexobots for Smart Network Infrastructure Solutions
          </h2>

          {/* Benefit Cards Grid - 5 cards in a row - Exact from Figma */}
          <div
            className="flex items-start justify-center"
            style={{
              gap: "24px",
            }}
          >
            {benefitCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-[21px]"
                style={{
                  width: "241px",
                  height: "243px",
                  padding: index === 0 ? "20px 16px" : "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* Icon - Exact from Figma */}
                <div
                  className="flex-shrink-0"
                  style={{
                    width: "51px",
                    height: "51px",
                  }}
                >
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2.01"
                      y="2.01"
                      width="46.97"
                      height="46.97"
                      rx="23.485"
                      stroke="#E9E9E9"
                      strokeWidth="1"
                    />
                    <circle
                      cx="25.5"
                      cy="25.5"
                      r="10.625"
                      stroke="#E11E24"
                      strokeWidth="1"
                    />
                    <circle cx="25.5" cy="25.5" r="4.25" fill="#E11E24" />
                  </svg>
                </div>
                <h3
                  className="font-['Manrope'] text-black"
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "1.25",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-['Manrope'] text-[#A4A4A4]"
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    lineHeight: "1.462",
                    width: index === 0 ? "206px" : index === 1 ? "209px" : "209px",
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section - Exact from Figma */}
      <section
        className="bg-white"
        style={{
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-center mb-[80px]"
            style={{
              fontSize: "64px",
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "851px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            FAQs – Smart Network Infrastructure Solutions
          </h2>

          <div className="space-y-[40px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#EFEFEF] rounded-[15px]"
                style={{
                  width: "1225px",
                  height: faq.answer ? "120px" : "64px",
                  padding: "20px",
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3
                      className="font-['Manrope'] text-[#333333] mb-[16px]"
                      style={{
                        fontSize: "20px",
                        fontWeight: 500,
                        lineHeight: "1.2",
                      }}
                    >
                      {faq.question}
                    </h3>
                    {faq.answer && (
                      <p
                        className="font-['Manrope'] text-[#333333]"
                        style={{
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "1.4375",
                        }}
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <button
                    className="flex-shrink-0 ml-4"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.64 8.73L12 13.09L16.36 8.73"
                        stroke="#333333"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <Partners />

      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
} 