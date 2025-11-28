"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

const benefitCards = [
  {
    title: "Expert Cloud Architects",
    description:
      "Certified professionals ensure seamless deployment, migration, and management across multi-cloud and virtual environments.",
  },
  {
    title: "End-to-End Support",
    description:
      "From strategy and design to maintenance and optimization — we manage your cloud lifecycle completely.",
  },
  {
    title: "Security-Driven Framework",
    description:
      "We embed enterprise-grade encryption, access control, and compliance measures into every solution.",
  },
  {
    title: "SLA-Based Performance Assurance",
    description:
      "Defined uptime guarantees, quick incident response, and predictable performance metrics.",
  },
  {
    title: "Proven Multi-Platform Expertise",
    description:
      "Experience across VMware, Hyper-V, Azure, AWS, Citrix, and OpenStack ensures flexibility and interoperability.",
  },
] as const;

const cloudInfrastructureServices = [
  "Cloud architecture design & migration planning",
  "Hybrid & multi-cloud implementation",
  "Cloud monitoring & performance optimization",
  "Data backup, replication & disaster recovery",
  "Security & compliance management",
] as const;

const virtualizationServices = [
  "Server & desktop virtualization setup",
  "Virtual machine provisioning & monitoring",
  "Storage & network virtualization",
  "Capacity planning & resource optimization",
  "Backup & failover configuration",
] as const;

const backupDraasServices = [
  "Continuous data replication & version control",
  "Automated failover & recovery testing",
  "Backup policy configuration",
  "Compliance & retention management",
  "24/7 monitoring & support",
] as const;

const faqs = [
  {
    question: "What's the difference between cloud computing and virtualization?",
    answer:
      "Virtualization creates multiple virtual systems within a single physical environment, while cloud computing delivers those virtualized resources as a service — accessible anywhere, anytime.",
  },
  {
    question: "Can you migrate legacy applications to the cloud?",
    answer:
      "Yes. Our experts assess compatibility, refactor workloads where needed, and perform seamless migration with zero data loss",
  },
  {
    question: "Is cloud backup more secure than on-premise solutions?",
    answer:
      "Yes — cloud backups include encryption, redundancy, and geographic failover, ensuring stronger data protection and compliance",
  },
  {
    question: "Do you provide Disaster Recovery services?",
    answer:
      "Yes, our DRaaS offering ensures minimal downtime and quick recovery for mission-critical workloads in case of system or network failures.",
  },
  {
    question: "Do you provide ongoing cloud management and support?",
    answer:
      "Absolutely. Nexobots provides 24/7 monitoring, performance optimization, patch management, and cost governance for cloud workloads.",
  },
  {
    question: "Which cloud platforms does Nexobots support?",
    answer: "",
  },
] as const;

export default function Service4Page() {
  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Hero Section - Exact from Figma */}
      <section className="relative h-[935px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/service-4-hero-bg-44eb7d.png"
            alt="Cloud & Virtualization Support Hero"
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
            backgroundColor: "rgba(0, 0, 0, 0.62)",
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
                maxWidth: "722px",
              }}
            >
              Empower Agility. Optimize Performance. Scale Without Limits.
            </h1>
          </div>

          {/* Description - Position: left 142px, top 442px */}
          <div className="absolute" style={{ left: "142px", top: "442px" }}>
            <p
              className="font-['TASA_Orbiter'] text-white"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.44",
                maxWidth: "812px",
              }}
            >
              Build a resilient, scalable, and secure digital foundation — with
              nexobots' Cloud & Virtualization Support.
            </p>
          </div>

          {/* CTA Button - Position: left 142px, top 556px */}
          <div className="absolute" style={{ left: "142px", top: "556px" }}>
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

      {/* Closing CTA Section - Exact from Figma (node-id=37-2657) */}
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
              lineHeight: "1.17",
              maxWidth: "1108px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "60px",
            }}
          >
            In today's fast-evolving business landscape, agility and uptime
            define competitive advantage. Yet, managing on-premise systems or
            fragmented cloud environments can lead to inefficiencies, high costs,
            and complex maintenance challenges
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
            Nexobots Technologies delivers comprehensive Cloud & Virtualization
            Support designed to help enterprises modernize their IT
            infrastructure — enabling seamless scalability, optimal resource
            utilization, and secure workload management across hybrid, private,
            or public cloud environments.
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
              height: "644px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* Left Large Image */}
            <div
              className="relative rounded-[18px] overflow-hidden flex-shrink-0"
              style={{
                width: "549px",
                height: "644px",
              }}
            >
              <Image
                src="/service-4-cta-1.png"
                alt="Cloud Infrastructure"
                fill
                className="object-cover"
                sizes="549px"
              />
            </div>

            {/* Right Two Images Stacked */}
            <div className="flex flex-col gap-[28.13px] flex-shrink-0">
              {/* Top Right Image */}
              <div
                className="relative rounded-[18px] overflow-hidden"
                style={{
                  width: "635px",
                  height: "322.74px",
                }}
              >
                <Image
                  src="/service-4-cta-2.png"
                  alt="Virtualization Services"
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
                  height: "293.13px",
                }}
              >
                <Image
                  src="/service-4-cta-3.png"
                  alt="Cloud Backup & DRaaS"
                  fill
                  className="object-cover"
                  sizes="635px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cloud & Virtualization Matter Section - Exact from Figma (node-id=1-1970) */}
      <section
        className="bg-white"
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
              maxWidth: "973px",
            }}
          >
            Why Cloud & Virtualization Matter
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
              As digital transformation accelerates, enterprises must balance
              performance, flexibility, and cost efficiency. Cloud and
              virtualization solutions eliminate hardware dependencies, enhance
              operational agility, and ensure business continuity — all while
              simplifying IT management.
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
              With Nexobots, you gain a trusted technology partner that helps
              you plan, deploy, and manage virtualized environments and cloud
              infrastructures efficiently. From workload migration to backup and
              DR orchestration, we ensure your IT environment runs smarter,
              faster, and safer.
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

      {/* Cloud Infrastructure Deployment & Management Section - Exact from Figma (node-id=1-1978) */}
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
              Cloud Infrastructure Deployment & Management
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
              Streamline your journey to the cloud with secure, scalable, and
              high-performing infrastructure. We help design, deploy, and manage
              cloud environments across AWS, Microsoft Azure, Google Cloud, and
              private data centers.
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
                  src="/service-4-cloud-infrastructure.png"
                  alt="Cloud Infrastructure Deployment & Management"
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
                    {cloudInfrastructureServices.map((service, i) => (
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
                    maxWidth: "1223px",
                  }}
                >
                  Improved scalability, lower infrastructure costs, and
                  enterprise-grade security.
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

      {/* Virtualization Services Section - Exact from Figma (node-id=1-2003) */}
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
                maxWidth: "953px",
              }}
            >
              Virtualization Services
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
              Maximize resource efficiency and operational continuity with
              robust virtualization solutions. Our experts deliver end-to-end
              support for server, desktop, and storage virtualization, leveraging
              platforms like VMware, Hyper-V, and Citrix.
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
                  src="/service-4-virtualization.png"
                  alt="Virtualization Services"
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
                    {virtualizationServices.map((service, i) => (
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
                  Higher system availability, faster provisioning, and reduced
                  hardware footprint.
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

      {/* Cloud Backup & Disaster Recovery (DRaaS) Section - Exact from Figma (node-id=1-2027) */}
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
              Cloud Backup & Disaster Recovery (DRaaS)
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
              Ensure uninterrupted operations with a resilient cloud-based
              backup and recovery framework. We design Disaster Recovery as a
              Service (DRaaS) models that safeguard critical workloads and
              ensure rapid recovery during outages.
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
                  src="/service-4-backup-draas.png"
                  alt="Cloud Backup & Disaster Recovery"
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
                    {backupDraasServices.map((service, i) => (
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
                  Minimal downtime, faster recovery, and assured data
                  protection.
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

      {/* Why Choose Nexobots Section - Exact from Figma (node-id=1-1928) */}
      <section
        className="bg-white"
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
              maxWidth: "1148px",
              margin: "0 auto 80px",
            }}
          >
            Why Choose Nexobots for Cloud & Virtualization Support
          </h2>

          {/* Benefit Cards Grid - Hidden */}
          <div className="hidden">
            {benefitCards.map((card, index) => (
              <div key={index}></div>
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
            FAQs – Cloud & Virtualization Support
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
