"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

const benefitCards = [
  {
    title: "Vendor-Agnostic Expertise",
    description:
      "Our multi-OEM partnerships (Cisco, D-Link, Fortinet, Palo Alto, Aruba, and more) ensure unbiased technology recommendations.",
  },
  {
    title: "Consulting-Driven, Implementation-Focused",
    description:
      "We combine strategic advisory with hands-on execution — delivering both vision and value.",
  },
  {
    title: "SLA-Backed Performance",
    description:
      "Every project is governed by clear timelines, measurable outcomes, and guaranteed service levels.",
  },
  {
    title: "Certified Engineering Team",
    description:
      "OEM-certified specialists ensure seamless integration across complex IT environments.",
  },
  {
    title: "Pan-India Delivery Capability",
    description:
      "With a presence in 180+ cities, we ensure consistent and timely project execution nationwide.",
  },
] as const;

const systemIntegrationServices = [
  "Multi-vendor hardware & software integration",
  "Network and server configuration",
  "Data center setup & interconnectivity",
  "Cloud, on-prem, and hybrid integration",
  "End-to-end testing & performance validation",
] as const;

const infrastructureDeploymentServices = [
  "End-to-end installation & commissioning",
  "Structured cabling & rack integration",
  "Virtualization & workload migration",
  "Network security configuration",
  "Performance optimization & documentation",
] as const;

const consultingServices = [
  "IT assessment & gap analysis",
  "Network, data center & cloud architecture design",
  "Security posture review & compliance consulting",
  "Technology roadmap development",
  "TCO optimization & resource planning",
] as const;

const faqs = [
  {
    question: "What does IT Infrastructure Consulting include?",
    answer:
      "It covers assessment, design, and optimization of your IT environment — including networks, data centers, and cloud architecture — aligned with business objectives.",
  },
  {
    question: "Can you modernize legacy infrastructure without downtime?",
    answer:
      "Yes. Our phased migration and integration models ensure zero disruption to critical business operations.",
  },
  {
    question: "How do you ensure project timelines and quality?",
    answer:
      "Every engagement is governed by detailed SLAs, project charters, and milestone-based delivery to maintain speed and reliability.",
  },
  {
    question: "Do you provide consulting for hybrid or multi-cloud integration?",
    answer:
      "Yes. We design and implement hybrid and multi-cloud strategies that ensure interoperability and security across platforms.",
  },
  {
    question: "Do you offer post-deployment support and maintenance?",
    answer:
      "Absolutely. Our AMC and Managed Services teams provide ongoing maintenance, monitoring, and performance optimization.",
  },
  {
    question: "Do you work with specific OEMs or multiple vendors?",
    answer: "",
  },
] as const;

export default function Service1Page() {
  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Hero Section - Exact from Figma */}
      <section className="relative h-[935px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/service-1-hero-bg-355263.png"
            alt="IT Infrastructure Consulting Hero"
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
            backgroundColor: "rgba(0, 0, 0, 0.76)",
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
                maxWidth: "917px",
              }}
            >
                Build Smarter. Integrate Seamlessly. Perform Reliably.
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
                Design, deploy, and optimize your IT ecosystem with Nexobots'
                Infrastructure Consulting & System Integration services.
              </p>
          </div>

          {/* CTA Button - Position: left 142px, top 468px */}
          <div className="absolute" style={{ left: "142px", top: "468px" }}>
              <Link
                href="#contact"
              className="inline-flex h-[67px] w-[261px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-white transition-all hover:bg-gray-100"
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
                src="/find-out-more-arrow.svg"
                alt=""
                width={41}
                height={41}
                className="h-[41px] w-[41px]"
                  />
              </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA Section - Exact from Figma (node-id=37-2659) */}
      <section
        className="bg-white"
        style={{
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[78px]">
          {/* Second Text - First in order */}
          <p
            className="font-['TASA_Orbiter'] text-black mx-auto text-center"
            style={{
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "1.32",
              maxWidth: "959px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "60px",
            }}
          >
            In the modern digital enterprise, success hinges on how efficiently
            your IT systems communicate, scale, and perform. Yet, fragmented
            infrastructure, legacy systems, and inconsistent configurations
            often create operational bottlenecks and security gaps.
          </p>

          {/* First Text - Second in order */}
          <p
            className="font-['TASA_Orbiter'] text-[#4B4B4B] mx-auto text-center"
            style={{
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "1.32",
              maxWidth: "820px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "80px",
            }}
          >
            Nexobots Technologies delivers end-to-end IT Infrastructure
            Consulting and System Integration services that align technology
            with business goals — helping organizations build cohesive,
            high-performing, and future-ready IT environments that drive
            productivity, security, and growth
          </p>

          {/* Get In Touch Button - Above images */}
          <div className="flex justify-center mb-[80px]">
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

          {/* Three Image Cards - Below button (y: 518, which is 148px below button) */}
          <div
            className="mx-auto flex gap-[17px]"
            style={{
              width: "1201px",
              height: "595px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* Left Large Image */}
            <div
              className="relative rounded-[18px] overflow-hidden flex-shrink-0"
              style={{
                width: "549px",
                height: "595px",
              }}
            >
              <Image
                src="/service-1-cta-1.png"
                alt="IT Infrastructure Consulting"
                fill
                className="object-cover"
                sizes="549px"
              />
            </div>

            {/* Right Two Images Stacked */}
            <div className="flex flex-col gap-[26.17px] flex-shrink-0">
              {/* Top Right Image */}
              <div
                className="relative rounded-[18px] overflow-hidden"
                style={{
                  width: "635px",
                  height: "298.18px",
                }}
              >
                <Image
                  src="/service-1-cta-2.png"
                  alt="System Integration"
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
                  height: "270.83px",
                }}
              >
                <Image
                  src="/service-1-cta-3.png"
                  alt="Infrastructure Deployment"
                  fill
                  className="object-cover"
                  sizes="635px"
                />
              </div>
          </div>
          </div>
        </div>
      </section>

      {/* Why IT Infrastructure Consulting & System Integration Matters Section - Exact from Figma (node-id=1-4501) */}
      <section
        className="bg-[#F8F8F8]"
        style={{
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[78px]">
          {/* Heading */}
          <h2
            className="font-['TASA_Orbiter'] text-black mb-[60px]"
            style={{
              fontSize: "64px",
              fontWeight: 600,
              lineHeight: "1.22",
              maxWidth: "1139px",
            }}
          >
            Why IT Infrastructure Consulting & System Integration Matters
          </h2>

          {/* Two Column Text Layout */}
          <div className="grid grid-cols-2 gap-[60px]">
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "576px",
              }}
            >
              As technology evolves, enterprises face the dual challenge of
              managing complex systems while ensuring seamless interoperability
              and scalability. Strategic consulting and expert integration
              transform IT infrastructure into a business enabler — ensuring
              every component, from networks to data centers, works together
              efficiently.
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
              With Nexobots as your technology partner, you gain deep expertise
              across multi-vendor environments and a structured roadmap that
              simplifies modernization. We bridge the gap between design and
              deployment — ensuring your IT ecosystem is not just functional,
              but future-proof.
            </p>
          </div>

          {/* Get In Touch Button - Left aligned below text */}
          <div className="mt-[60px]">
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
        className="bg-[#F8F8F8]"
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

      {/* IT Infrastructure Consulting Section - Exact from Figma (node-id=1-4509) */}
      <section
        className="bg-[#F8F8F8]"
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
              IT Infrastructure Consulting
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "1284px",
              }}
            >
              A strategic approach to infrastructure planning that ensures
              scalability, performance, and alignment with business objectives.
              We assess your existing environment, identify gaps, and design
              architecture that supports digital transformation.
            </p>

            {/* Image and Key Services Row */}
            <div className="relative mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden inline-block"
                style={{
                  width: "640px",
                  height: "481px",
                }}
              >
                <Image
                  src="/service-1-infrastructure-consulting.png"
                  alt="IT Infrastructure Consulting"
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
                  width: "640.5px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[50px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                Key Services
              </h3>

                <div className="relative" style={{ width: "640.5px", height: "365px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "8.02px",
                      height: "365px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "7.66px",
                      height: "77.31px",
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-[54px]"
                    style={{ paddingLeft: "46.32px", paddingTop: "10px" }}
                  >
                    {consultingServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          lineHeight: "1.08",
                          width: i === 2 ? "613px" : "594.18px",
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
                width: "1169px",
                marginTop: "50px",
              }}
            >
              <div className="mb-[40px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[20px]"
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
                    maxWidth: "1169px",
                  }}
                >
                Smarter IT investments, enhanced reliability, and future-ready
                scalability.
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

      {/* System Integration Services Section - Exact from Figma (node-id=1-4533) */}
      <section
        className="bg-[#F8F8F8]"
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
              System Integration Services
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "1029px",
              }}
            >
              Seamlessly connect hardware, software, and network systems into
              one unified, intelligent ecosystem. Our certified engineers
              integrate multi-vendor technologies to deliver interoperable and
              optimized infrastructure.
            </p>

            {/* Image and Key Services Row */}
            <div className="relative mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden inline-block"
                style={{
                  width: "640px",
                  height: "468px",
                }}
              >
                <Image
                  src="/service-1-system-integration-section.png"
                  alt="System Integration Services"
                  fill
                  className="object-cover"
                  sizes="640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="absolute top-0"
                style={{
                  left: "703.5px",
                  width: "719px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[50px]"
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
                    {systemIntegrationServices.map((service, i) => (
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
                width: "1222px",
                marginTop: "50px",
              }}
            >
              <div className="mb-[40px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[20px]"
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
                    maxWidth: "1222px",
                  }}
                >
                  Simplified operations, improved efficiency, and seamless
                  interconnectivity.
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

      {/* Infrastructure Deployment & Modernization Section - Exact from Figma (node-id=1-4557) */}
      <section
        className="bg-[#F8F8F8]"
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
              Infrastructure Deployment & Modernization
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "1284px",
              }}
            >
              Accelerate digital transformation through secure, scalable
              infrastructure deployment. We handle everything from structured
              cabling and rack setup to virtualization and network rollout —
              ensuring a smooth transition from legacy to modern systems.
            </p>

            {/* Image and Key Services Row */}
            <div className="relative mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden inline-block"
                style={{
                  width: "640px",
                  height: "482px",
                }}
              >
                <Image
                  src="/service-1-infrastructure-deployment-section.png"
                  alt="Infrastructure Deployment & Modernization"
                  fill
                  className="object-cover"
                  sizes="640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="absolute top-0"
                style={{
                  left: "703.5px",
                  width: "640.5px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[50px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                <div className="relative" style={{ width: "640.5px", height: "365px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "8.02px",
                      height: "365px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "7.66px",
                      height: "77.31px",
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-[55px]"
                    style={{ paddingLeft: "46.32px", paddingTop: "10px" }}
                  >
                    {infrastructureDeploymentServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          lineHeight: "1.08",
                          width: "594.18px",
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
                width: "1003px",
                marginTop: "50px",
              }}
            >
              <div className="mb-[40px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[20px]"
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
                    maxWidth: "1003px",
                  }}
                >
                  Optimized infrastructure, faster implementation, and minimal
                  business disruption.
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

      {/* Why Choose Nexobots Section - Exact from Figma (node-id=1-4459) */}
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
            Why Choose Nexobots for IT Infrastructure Consulting & System
            Integration
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
                  height: "242px",
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
              maxWidth: "1148px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            FAQs – IT Infrastructure Consulting & System Integration
          </h2>

          <div className="space-y-[40px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#D7D7D7] rounded-[15px]"
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
                        fontWeight: 600,
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
