"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

const benefitCards = [
  {
    title: "Proactive, Not Reactive",
    description:
      "We detect and address issues before they impact operations — ensuring consistent uptime.",
  },
  {
    title: "24/7 NOC Monitoring",
    description:
      "Round-the-clock visibility and support ensure complete control of your IT environment.",
  },
  {
    title: "Certified Multi-Vendor Expertise",
    description:
      "Our team supports a wide range of OEMs, including Cisco, D-Link Fortinet, Palo Alto, and Aruba.",
  },
  {
    title: "SLA-Driven Service Commitments",
    description:
      "Guaranteed response times and resolution metrics for predictable, reliable support.",
  },
  {
    title: "Analytics-Backed Optimization",
    description:
      "We use monitoring data to continuously fine-tune systems for peak performance.",
  },
] as const;

const itSupportServices = [
  "Helpdesk & remote assistance (L1–L3 support)",
  "On-site engineer deployment",
  "Incident & problem management",
  "Preventive maintenance scheduling",
  "Patch & firmware updates",
] as const;

const monitoringServices = [
  "24/7 NOC-based monitoring",
  "Performance analytics & health checks",
  "Fault detection & alert management",
  "Bandwidth utilization tracking",
  "Server, network, and endpoint monitoring",
] as const;

const optimizationServices = [
  "Performance audits & tuning",
  "Capacity planning & resource balancing",
  "System configuration optimization",
  "Network throughput & latency improvements",
  "Reporting & continuous improvement plans",
] as const;

const faqs = [
  {
    question: "What's included in IT Support Services?",
    answer:
      "It includes helpdesk support, on-site troubleshooting, preventive maintenance, patch updates, and incident resolution — tailored to your operational needs.",
  },
  {
    question: "How do you ensure issues are resolved quickly?",
    answer:
      "We follow SLA-based response and escalation models to ensure critical issues are addressed within defined timeframes.",
  },
  {
    question: "How does optimization improve performance?",
    answer:
      "Optimization enhances configuration, load balancing, and system tuning — resulting in faster response times and reduced operational costs.",
  },
  {
    question: "Do you provide regular performance reports?",
    answer:
      "Yes. We provide monthly or quarterly reports with detailed performance metrics, trend analysis, and improvement recommendations.",
  },
  {
    question: "Can you monitor multi-vendor and hybrid environments?",
    answer:
      "Absolutely. Our tools and team support multi-vendor setups and hybrid infrastructures — across on-prem, cloud, and virtualized systems.",
  },
  {
    question: "Do you provide 24/7 monitoring?",
    answer: "",
  },
] as const;

export default function Service2Page() {
  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Hero Section - Exact from Figma */}
      <section className="relative h-[935px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/service-2-hero-bg-437369.png"
            alt="IT Support, Monitoring & Optimization Hero"
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
                maxWidth: "838px",
              }}
            >
                Monitor Smarter. Respond Faster. Perform Better.
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
                Ensure uninterrupted operations and peak performance with
              Nexobots' IT Support, Monitoring & Optimization Services.
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

      {/* Closing CTA Section - Exact from Figma (node-id=37-2658) */}
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
              maxWidth: "977px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "60px",
            }}
          >
            In a world where business runs 24/7, IT performance directly
            impacts productivity, customer experience, and profitability. Yet,
            unmonitored systems, slow response to incidents, and reactive
            maintenance can lead to costly downtimes and security risks.
                    </p>

          {/* First Text - Second in order */}
          <p
            className="font-['TASA_Orbiter'] text-[#4B4B4B] mx-auto text-center"
            style={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "1.17",
              maxWidth: "869px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "80px",
            }}
          >
            Nexobots Technologies delivers comprehensive IT Support, Monitoring
            & Optimization Services that keep your infrastructure secure,
            efficient, and always-on. From real-time network monitoring to
            proactive performance tuning, we ensure your IT ecosystem runs
            seamlessly — so your teams can focus on innovation, not
            interruptions.
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

          {/* Three Image Cards - Below button */}
          <div
            className="mx-auto flex gap-[17px]"
            style={{
              width: "1201px",
              height: "588px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* Left Large Image */}
            <div
              className="relative rounded-[18px] overflow-hidden flex-shrink-0"
              style={{
                width: "549px",
                height: "588px",
              }}
            >
              <Image
                src="/service-2-cta-1.png"
                alt="IT Support Services"
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
                  height: "294.68px",
                }}
              >
                <Image
                  src="/service-2-cta-2.png"
                  alt="Network Monitoring"
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
                  height: "267.64px",
                }}
              >
                <Image
                  src="/service-2-cta-3.png"
                  alt="Performance Optimization"
                  fill
                  className="object-cover"
                  sizes="635px"
                />
              </div>
             </div>
          </div>
        </div>
      </section>

      {/* Why IT Support, Monitoring & Optimization Matters Section - Exact from Figma (node-id=1-4308) */}
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
            Why IT Support, Monitoring & Optimization Matter
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
              As digital systems become more interconnected, visibility and
              responsiveness are critical. Proactive monitoring helps detect
              anomalies early, while structured support frameworks ensure fast
              resolution and consistent uptime. Optimization takes it further —
              ensuring systems deliver maximum output with minimal resource
              usage.
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
              With Nexobots, you gain a trusted partner offering 24/7 Network
              Operations Center (NOC) monitoring, multi-tier IT support, and
              ongoing optimization that aligns technology with business
              performance goals.
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

      {/* IT Support Services Section - Exact from Figma (node-id=1-4316) */}
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
              IT Support Services
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "1152px",
              }}
            >
              Comprehensive on-site and remote support designed to keep your
              systems operational and secure — anytime, anywhere. Our certified
              engineers handle everything from troubleshooting to preventive
              maintenance with SLA-backed response times.
            </p>

            {/* Image and Key Services Row */}
            <div className="relative mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden inline-block"
                style={{
                  width: "640px",
                  height: "465px",
                }}
              >
                <Image
                  src="/service-2-it-support.png"
                  alt="IT Support Services"
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
                    {itSupportServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          lineHeight: "1.08",
                          width: i === 2 ? "613px" : "596px",
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
                  Faster issue resolution, minimal downtime, and predictable IT
                  operations.
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

      {/* Network & Infrastructure Monitoring Section - Exact from Figma (node-id=1-4340) */}
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
              Network & Infrastructure Monitoring
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
              Stay ahead of outages and bottlenecks with continuous, AI-driven
              network monitoring. We deliver complete visibility into your
              infrastructure through centralized dashboards and real-time
              alerts.
            </p>

            {/* Image and Key Services Row */}
            <div className="relative mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden inline-block"
                style={{
                  width: "640px",
                  height: "476px",
                }}
              >
                <Image
                  src="/service-2-monitoring.png"
                  alt="Network & Infrastructure Monitoring"
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
                    {monitoringServices.map((service, i) => (
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
                  Early issue detection, improved uptime, and data-driven
                  infrastructure insights.
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

      {/* IT Performance Optimization Section - Exact from Figma (node-id=1-4364) */}
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
              IT Performance Optimization
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "1151px",
              }}
            >
              Transform your IT systems into performance powerhouses through
              strategic optimization. We analyze workloads, configurations, and
              network flows to enhance speed, stability, and cost efficiency.
            </p>

            {/* Image and Key Services Row */}
            <div className="relative mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden inline-block"
                style={{
                  width: "640px",
                  height: "471px",
                }}
              >
                <Image
                  src="/service-2-optimization.png"
                  alt="IT Performance Optimization"
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
                    className="space-y-[55px]"
                    style={{ paddingLeft: "52px", paddingTop: "10px" }}
                  >
                    {optimizationServices.map((service, i) => (
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
                  Higher system efficiency, lower operational costs, and
                  enhanced user experience.
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

      {/* Why Choose Nexobots Section - Exact from Figma (node-id=1-4266) */}
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
            Why Choose Nexobots for IT Support, Monitoring & Optimization
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
                FAQs – IT Support, Monitoring & Optimization Services
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
