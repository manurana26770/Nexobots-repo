"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Service4Page() {
  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Section 1: Hero - Exact from Figma */}
      <section className="relative h-[935px] w-full bg-black">
        {/* Background Image */}
        <Image
          src="/hero-service-4-355263.png"
          alt="Cloud & Virtualization Support"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/52" />
        
        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col px-[142px]">
          {/* Heading - Position: x 142, y 169 */}
          <h1
            className="max-w-[722px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.32] text-white"
            style={{ marginTop: '169px' }}
          >
            Empower Agility. Optimize Performance. Scale Without Limits.
          </h1>

          {/* Description - Position: x 142, y 442 (273px from heading) */}
          <p
            className="max-w-[812px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.44] text-white"
            style={{ marginTop: '76px' }}
          >
            Build a resilient, scalable, and secure digital foundation — with
            nexobots&apos; Cloud & Virtualization Support.
          </p>

          {/* CTA Button - Position: x 142, y 556 (114px from description) */}
          <Link
            href="#contact"
            className="mt-[44px] inline-flex h-[67px] w-[261px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-transparent px-[29px] py-[20px] font-['Manrope'] text-[20px] font-semibold leading-[1.366] tracking-[0.02em] text-white transition hover:bg-white/10"
          >
            Talk to an Expert
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              className="h-[41px] w-[41px]"
              aria-hidden="true"
            >
              <path
                d="M20.5 0L20.5 41M20.5 41L41 20.5M20.5 41L0 20.5"
                stroke="#E11E24"
                strokeWidth="2"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Section 2: Introductory Text & Images - Exact from Figma */}
      <section className="relative h-[1078px] w-full bg-[#F8F8F8]">
        <div className="relative h-full w-full">
          {/* Secondary Text - Position: x 166, y 100 */}
          <div className="absolute" style={{ left: '166px', top: '100px', width: '1108px' }}>
            <p className="text-center font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.17] text-black">
              In today&apos;s fast-evolving business landscape, agility and uptime
              define competitive advantage.
              <br />
              Yet, managing on-premise systems or fragmented cloud environments
              can lead to inefficiencies, high costs, and complex maintenance
              challenges
            </p>
          </div>

          {/* Main Heading - Position: x 286, y 219 */}
          <div className="absolute" style={{ left: '286px', top: '219px', width: '869px' }}>
            <h2 className="text-center font-['TASA_Orbiter'] text-[20px] font-semibold leading-[1.17] text-[#4B4B4B]">
              Nexobots Technologies delivers comprehensive Cloud & Virtualization
              Support designed to help enterprises modernize their IT
              infrastructure — enabling seamless scalability, optimal resource
              utilization, and secure workload management across hybrid, private,
              or public cloud environments.
            </h2>
          </div>

          {/* Get In Touch Button - Position: x 643, y 334 */}
          <div className="absolute" style={{ left: '643px', top: '334px' }}>
            <Link
              href="#contact"
              className="inline-flex h-[45px] w-[155px] items-center justify-center rounded-[75px] border border-white/30 bg-black px-[25px] py-[12px] font-['Manrope'] text-[15px] font-semibold leading-[1.366] tracking-[0.02em] text-white transition hover:bg-gray-800"
            >
              Get In Touch
            </Link>
          </div>

          {/* Images Group - Position: x 120, y 499 */}
          <div className="absolute" style={{ left: '120px', top: '499px', width: '1201px', height: '435px' }}>
            <div className="relative h-full w-full">
              {/* Left Large Image - Position: x 0, y 0 */}
              <div className="absolute left-0 top-0 h-[435px] w-[549px] overflow-hidden rounded-[18px]">
                <Image
                  src="/service-4-intro-1-6536ac.png"
                  alt="Cloud Infrastructure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Top Right Image - Position: x 566, y 0 */}
              <div className="absolute left-[566px] top-0 h-[218px] w-[635px] overflow-hidden rounded-[18px]">
                <Image
                  src="/about-advantage-2.png"
                  alt="Virtualization Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Bottom Right Image - Position: x 566, y 237 */}
              <div className="absolute left-[566px] top-[237px] h-[198px] w-[635px] overflow-hidden rounded-[18px]">
                <Image
                  src="/about-advantage-3.png"
                  alt="Cloud Management"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Cloud & Virtualization Matter - Exact from Figma */}
      <section className="relative h-[639px] w-full bg-[#F8F8F8]">
        <div className="relative h-full w-full">
          {/* Heading - Position: x 119, y 120 */}
          <div className="absolute" style={{ left: '119px', top: '120px', width: '973px' }}>
            <h2 className="font-['TASA_Orbiter'] text-[48px] font-semibold leading-[1.4937] text-black">
              Why Cloud & Virtualization Matter
            </h2>
          </div>

          {/* Left Paragraph - Position: x 119, y 241 */}
          <div className="absolute" style={{ left: '119px', top: '241px', width: '576px' }}>
            <p className="font-['TASA_Orbiter'] text-[24px] font-medium leading-[1.32] text-black">
              As digital transformation accelerates, enterprises must balance
              performance, flexibility, and cost efficiency.
              <br />
              Cloud and virtualization solutions eliminate hardware dependencies,
              enhance operational agility, and ensure business continuity — all
              while simplifying IT management.
            </p>
          </div>

          {/* Right Paragraph - Position: x 754, y 241 */}
          <div className="absolute" style={{ left: '754px', top: '241px', width: '573px' }}>
            <p className="font-['TASA_Orbiter'] text-[24px] font-medium leading-[1.32] text-black">
              With Nexobots, you gain a trusted technology partner that helps you
              plan, deploy, and manage virtualized environments and cloud
              infrastructures efficiently. From workload migration to backup and
              DR orchestration, we ensure your IT environment runs smarter,
              faster, and safer.
            </p>
          </div>

          {/* Get In Touch Button - Position: x 120, y 497 */}
          <div className="absolute" style={{ left: '120px', top: '497px' }}>
            <Link
              href="#contact"
              className="inline-flex h-[45px] w-[155px] items-center justify-center rounded-[75px] border border-white/30 bg-black px-[25px] py-[12px] font-['Manrope'] text-[15px] font-semibold leading-[1.366] tracking-[0.02em] text-white transition hover:bg-gray-800"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
       {/* Placeholder for future sections */}
       <section className="py-20 text-center">
        <h2 className="font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.4937] text-black">
          Our Core Offerings
        </h2>
        </section>

      {/* Section 4: Cloud Infrastructure Deployment & Management - Exact from Figma */}
      <section className="bg-[#F8F8F8] px-[78px] py-[118px]">
        <div className="mx-auto max-w-[1392.5px]">
          {/* Title */}
          <h2 className="mb-[21px] max-w-[1172px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
            Cloud Infrastructure Deployment & Management
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
            Streamline your journey to the cloud with secure, scalable, and
            high-performing infrastructure.
            <br />
            We help design, deploy, and manage cloud environments across AWS,
            Microsoft Azure, Google Cloud, and private data centers.
          </p>

          <div className="grid grid-cols-1 gap-[33.5px] lg:grid-cols-2">
            {/* Image Placeholder */}
            <div className="relative h-[457px] w-[640px] overflow-hidden rounded-[13px] bg-gradient-to-br from-blue-100 to-purple-100">
              <Image
                src="/service-4-intro-1-6536ac.png"
                alt="Cloud Infrastructure Deployment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Key Services */}
            <div>
              <h3 className="mb-[51px] font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">
                Key Services
              </h3>
              <div className="relative">
                {/* Decorative lines */}
                <div className="absolute left-0 top-0 h-[365px] w-[9px] rounded-[55px] bg-[#D9D9D9]" />
                <div className="absolute left-0 top-0 h-[77.31px] w-[8.6px] rounded-[55px] bg-[#E11E24]" />

                {/* Services List */}
                <div className="space-y-[54px] pl-[52px]">
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Cloud architecture design & migration planning
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Hybrid & multi-cloud implementation
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Cloud monitoring & performance optimization
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Data backup, replication & disaster recovery
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Security & compliance management
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Outcome Section */}
          <div className="mt-[85px] flex flex-col">
            <h3 className="mb-[61px] font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">
              Outcome
            </h3>
            <p className="mb-[61px] max-w-[1223px] font-['TASA_Orbiter'] text-[32px] font-semibold leading-[1.27] text-black">
              Improved scalability, lower infrastructure costs, and
              enterprise-grade security.
            </p>
            <Link
              href="#contact"
              className="inline-flex h-[45px] w-[225px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black px-[25px] py-[12px] font-['Manrope'] text-[15px] font-semibold leading-[1.366] tracking-[0.02em] text-white transition hover:bg-gray-800"
            >
              Let&apos;s Discuss Needs
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="h-3 w-3"
                aria-hidden="true"
              >
                <path
                  d="M6 0L6 12M6 12L12 6M6 12L0 6"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Virtualization Services - Exact from Figma */}
      <section className="bg-[#F8F8F8] px-[78px] py-[120px]">
        <div className="mx-auto max-w-[1392.5px]">
          {/* Title */}
          <h2 className="mb-[21px] max-w-[953px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
            Virtualization Services
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1151px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
            Maximize resource efficiency and operational continuity with robust
            virtualization solutions.
            <br />
            Our experts deliver end-to-end support for server, desktop, and
            storage virtualization, leveraging platforms like VMware, Hyper-V,
            and Citrix.
          </p>

          <div className="grid grid-cols-1 gap-[33.5px] lg:grid-cols-2">
            {/* Image Placeholder */}
            <div className="relative h-[457px] w-[640px] overflow-hidden rounded-[13px] bg-gradient-to-br from-purple-100 to-pink-100">
              <Image
                src="/service-4-intro-1-6536ac.png"
                alt="Virtualization Services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Key Services */}
            <div>
              <h3 className="mb-[51px] font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">
                Key Services
              </h3>
              <div className="relative">
                {/* Decorative lines */}
                <div className="absolute left-0 top-0 h-[365px] w-[9px] rounded-[55px] bg-[#D9D9D9]" />
                <div className="absolute left-0 top-0 h-[77.31px] w-[8.6px] rounded-[55px] bg-[#E11E24]" />

                {/* Services List */}
                <div className="space-y-[54px] pl-[52px]">
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Server & desktop virtualization setup
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Virtual machine provisioning & monitoring
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Storage & network virtualization
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Capacity planning & resource optimization
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Backup & failover configuration
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Outcome Section */}
          <div className="mt-[85px] flex flex-col">
            <h3 className="mb-[61px] font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">
              Outcome
            </h3>
            <p className="mb-[61px] max-w-[1222px] font-['TASA_Orbiter'] text-[32px] font-semibold leading-[1.27] text-black">
              Higher system availability, faster provisioning, and reduced
              hardware footprint.
            </p>
            <Link
              href="#contact"
              className="inline-flex h-[45px] w-[225px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black px-[25px] py-[12px] font-['Manrope'] text-[15px] font-semibold leading-[1.366] tracking-[0.02em] text-white transition hover:bg-gray-800"
            >
              Let&apos;s Discuss Needs
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="h-3 w-3"
                aria-hidden="true"
              >
                <path
                  d="M6 0L6 12M6 12L12 6M6 12L0 6"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Cloud Backup & Disaster Recovery (DRaaS) - Exact from Figma */}
      <section className="bg-[#F8F8F8] px-[78px] py-[120px]">
        <div className="mx-auto max-w-[1392.5px]">
          {/* Title */}
          <h2 className="mb-[21px] max-w-[1151px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
            Cloud Backup & Disaster Recovery (DRaaS)
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1151px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
            Ensure uninterrupted operations with a resilient cloud-based backup
            and recovery framework.
            <br />
            We design Disaster Recovery as a Service (DRaaS) models that
            safeguard critical workloads and ensure rapid recovery during
            outages.
          </p>

          <div className="grid grid-cols-1 gap-[33.5px] lg:grid-cols-2">
            {/* Image Placeholder */}
            <div className="relative h-[457px] w-[640px] overflow-hidden rounded-[13px] bg-gradient-to-br from-indigo-100 to-blue-100">
              <Image
                src="/service-4-intro-1-6536ac.png"
                alt="Cloud Backup & Disaster Recovery"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Key Services */}
            <div>
              <h3 className="mb-[51px] font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">
                Key Services
              </h3>
              <div className="relative">
                {/* Decorative lines */}
                <div className="absolute left-0 top-0 h-[365px] w-[9px] rounded-[55px] bg-[#D9D9D9]" />
                <div className="absolute left-0 top-0 h-[77.31px] w-[8.6px] rounded-[55px] bg-[#E11E24]" />

                {/* Services List */}
                <div className="space-y-[54px] pl-[52px]">
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Continuous data replication & version control
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Automated failover & recovery testing
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Backup policy configuration
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Compliance & retention management
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    24/7 monitoring & support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Outcome Section */}
          <div className="mt-[85px] flex flex-col">
            <h3 className="mb-[61px] font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">
              Outcome
            </h3>
            <p className="mb-[61px] max-w-[1003px] font-['TASA_Orbiter'] text-[32px] font-semibold leading-[1.27] text-black">
              Minimal downtime, faster recovery, and assured data protection.
            </p>
            <Link
              href="#contact"
              className="inline-flex h-[45px] w-[225px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black px-[25px] py-[12px] font-['Manrope'] text-[15px] font-semibold leading-[1.366] tracking-[0.02em] text-white transition hover:bg-gray-800"
            >
              Let&apos;s Discuss Needs
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="h-3 w-3"
                aria-hidden="true"
              >
                <path
                  d="M6 0L6 12M6 12L12 6M6 12L0 6"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Why Choose Nexobots - Exact from Figma */}
      <section className="relative h-[1342px] w-full bg-[#F8F8F8]">
        <div className="relative h-full w-full">
          {/* Heading - Position: x 122, y 120 */}
          <div className="absolute" style={{ left: '122px', top: '120px', width: '1148px' }}>
            <h2 className="text-center font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.4937] text-black">
              Why Choose Nexobots for Cloud & Virtualization Support
            </h2>
          </div>

          {/* 5 Cards Horizontally - Position: x 69, y 256 */}
          <div className="absolute" style={{ left: '69px', top: '256px', width: '1301px' }}>
            <div className="flex gap-[24px]">
              {/* Card 1: Expert Cloud Architects */}
              <div className="h-[242px] w-[241px] rounded-[21px] bg-white p-5">
                <div className="mb-5 flex h-[51px] w-[51px] items-center justify-center rounded-full border border-[#E9E9E9]">
                  <div className="h-[21.25px] w-[21.25px] rounded-sm border border-[#E11E24]">
                    <div className="h-[8.5px] w-[8.5px] translate-x-[12.75px] translate-y-[12.75px] bg-[#E11E24]" />
                  </div>
                </div>
                <h3 className="mb-5 font-['Manrope'] text-[16px] font-bold leading-[1.25] text-black">
                  Expert Cloud Architects
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                  Certified professionals ensure seamless deployment, migration,
                  and management across multi-cloud and virtual environments.
                </p>
              </div>

              {/* Card 2: End-to-End Support */}
              <div className="h-[242px] w-[241px] rounded-[21px] bg-white p-5">
                <div className="mb-5 flex h-[51px] w-[51px] items-center justify-center rounded-full border border-[#E9E9E9]">
                  <div className="h-[21.25px] w-[21.25px] rounded-sm border border-[#E11E24]">
                    <div className="h-[8.5px] w-[8.5px] translate-x-[12.75px] translate-y-[12.75px] bg-[#E11E24]" />
                  </div>
                </div>
                <h3 className="mb-5 font-['Manrope'] text-[16px] font-bold leading-[1.25] text-black">
                  End-to-End Support
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                  From strategy and design to maintenance and optimization — we
                  manage your cloud lifecycle completely.
                </p>
              </div>

              {/* Card 3: Security-Driven Framework */}
              <div className="h-[242px] w-[241px] rounded-[21px] bg-white p-5">
                <div className="mb-5 flex h-[51px] w-[51px] items-center justify-center rounded-full border border-[#E9E9E9]">
                  <div className="h-[21.25px] w-[21.25px] rounded-sm border border-[#E11E24]">
                    <div className="h-[8.5px] w-[8.5px] translate-x-[12.75px] translate-y-[12.75px] bg-[#E11E24]" />
                  </div>
                </div>
                <h3 className="mb-5 font-['Manrope'] text-[16px] font-bold leading-[1.25] text-black">
                  Security-Driven Framework
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                  We embed enterprise-grade encryption, access control, and
                  compliance measures into every solution.
                </p>
              </div>

              {/* Card 4: SLA-Based Performance Assurance */}
              <div className="h-[242px] w-[241px] rounded-[21px] bg-white p-5">
                <div className="mb-5 flex h-[51px] w-[51px] items-center justify-center rounded-full border border-[#E9E9E9]">
                  <div className="h-[21.25px] w-[21.25px] rounded-sm border border-[#E11E24]">
                    <div className="h-[8.5px] w-[8.5px] translate-x-[12.75px] translate-y-[12.75px] bg-[#E11E24]" />
                  </div>
                </div>
                <h3 className="mb-5 font-['Manrope'] text-[16px] font-bold leading-[1.25] text-black">
                  SLA-Based Performance Assurance
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                  Defined uptime guarantees, quick incident response, and
                  predictable performance metrics.
                </p>
              </div>

              {/* Card 5: Proven Multi-Platform Expertise */}
              <div className="h-[242px] w-[241px] rounded-[21px] bg-white p-5">
                <div className="mb-5 flex h-[51px] w-[51px] items-center justify-center rounded-full border border-[#E9E9E9]">
                  <div className="h-[21.25px] w-[21.25px] rounded-sm border border-[#E11E24]">
                    <div className="h-[8.5px] w-[8.5px] translate-x-[12.75px] translate-y-[12.75px] bg-[#E11E24]" />
                  </div>
                </div>
                <h3 className="mb-5 font-['Manrope'] text-[16px] font-bold leading-[1.25] text-black">
                  Proven Multi-Platform Expertise
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                  Experience across VMware, Hyper-V, Azure, AWS, Citrix, and
                  OpenStack ensures flexibility and interoperability.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Images - Position: x 120, y 589 */}
          <div className="absolute" style={{ left: '120px', top: '589px', width: '1199px', height: '632.66px' }}>
            <div className="relative h-full w-full">
              {/* Left Large Image */}
              <div className="absolute left-0 top-0 h-[632.66px] w-[546.74px] overflow-hidden rounded-[18px]">
                <Image
                  src="/about-advantage-1-3df8a1.png"
                  alt="Cloud Support Benefit 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Top Right Image */}
              <div className="absolute left-[575.52px] top-0 h-[261.07px] w-[623.48px] overflow-hidden rounded-[18px]">
                <Image
                  src="/about-advantage-2.png"
                  alt="Cloud Support Benefit 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="absolute left-[575.52px] top-[293.46px] h-[339.2px] w-[623.48px] overflow-hidden rounded-[18px]">
                <Image
                  src="/about-advantage-3.png"
                  alt="Cloud Support Benefit 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Our Partners - Exact from Figma */}
      <section className="relative h-[558px] w-full bg-white">
        <div className="relative h-full w-full">
          {/* Content Container - Position: left 149px, top 120px */}
          <div className="absolute" style={{ left: '149px', top: '120px', width: '1143px' }}>
            {/* Partner Ecosystem Label - Centered */}
            <div className="mb-4 flex items-center justify-center">
              <p className="font-['Manrope'] text-[18px] font-medium leading-[1.366] text-black">
                Partner Ecosystem
              </p>
            </div>

            {/* Heading - Centered, width 1125px */}
            <div className="flex justify-center">
              <h2 className="w-[1125px] text-center font-['TASA_Orbiter'] text-[32px] font-bold leading-[1.375] text-black">
                We work with industry-leading OEMs to deliver enterprise-grade
                solutions that meet the highest standards of quality,
                performance, and security.
              </h2>
            </div>
          </div>

          {/* Logo Stripe - Position: y 329px, horizontal scrolling strip */}
          <div className="absolute" style={{ top: '329px', left: '0', right: '0' }}>
            <div className="relative h-[129px] w-full overflow-hidden bg-[#D9D9D9]">
              <div className="flex items-center justify-center gap-[80px] px-[100px] py-[40px]">
                {/* Cisco Logo Placeholder */}
                <div className="relative h-[61px] w-[118px]">
                  <Image
                    src="/partner-cisco.svg"
                    alt="Cisco"
                    width={118}
                    height={61}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Fortinet Logo Placeholder */}
                <div className="relative h-[48px] w-[385px]">
                  <Image
                    src="/partner-fortinet.svg"
                    alt="Fortinet"
                    width={385}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* D-Link Logo Placeholder */}
                <div className="relative h-[48px] w-[192px]">
                  <Image
                    src="/partner-dlink.svg"
                    alt="D-Link"
                    width={192}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Palo Alto Logo Placeholder */}
                <div className="relative h-[48px] w-[242px]">
                  <Image
                    src="/partner-paloalto.svg"
                    alt="Palo Alto Networks"
                    width={242}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Microsoft Logo Placeholder */}
                <div className="relative h-[48px] w-[227px]">
                  <Image
                    src="/partner-microsoft.svg"
                    alt="Microsoft"
                    width={227}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Dell Logo Placeholder */}
                <div className="relative h-[48px] w-[239px]">
                  <Image
                    src="/partner-dell.svg"
                    alt="Dell"
                    width={239}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* HP Logo Placeholder */}
                <div className="relative h-[53px] w-[286px]">
                  <Image
                    src="/partner-hp.svg"
                    alt="HP"
                    width={286}
                    height={53}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Hikvision Logo Placeholder */}
                <div className="relative h-[93px] w-[202px]">
                  <Image
                    src="/partner-hikvision.svg"
                    alt="Hikvision"
                    width={202}
                    height={93}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQs - Exact from Figma */}
      <section className="relative h-[1118px] w-full bg-white">
        <div className="relative h-full w-full">
          {/* Heading - Position: x 126, y 120 */}
          <div className="absolute" style={{ left: '126px', top: '120px', width: '1148px' }}>
            <h2 className="text-center font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.4937] text-black">
              FAQs – Cloud & Virtualization Support
            </h2>
          </div>

          {/* FAQ Cards Container - Position: x 107, y 294 */}
          <div className="absolute" style={{ left: '107px', top: '294px', width: '1225px' }}>
            {/* Card 1 - Height: 120px */}
            <div className="mb-5 h-[120px] w-full rounded-[15px] bg-[#EFEFEF] px-5 py-5">
              <div className="relative">
                <h3 className="mb-[3px] font-['Manrope'] text-[20px] font-medium leading-[1.2] text-[#333333]">
                  What&apos;s the difference between cloud computing and
                  virtualization?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                  Virtualization creates multiple virtual systems within a single
                  physical environment, while cloud computing delivers those
                  virtualized resources as a service — accessible anywhere,
                  anytime.
                </p>
                {/* Icon - Position: right 27px, top 31px */}
                <div className="absolute right-[27px] top-[11px] h-6 w-6">
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
                </div>
              </div>
            </div>

            {/* Card 6 - Height: 64px, Position: y 140px from container top */}
            <div className="mb-5 h-[64px] w-full rounded-[15px] bg-[#EFEFEF] px-5 py-5">
              <div className="relative flex items-center justify-between">
                <h3 className="font-['Manrope'] text-[20px] font-medium leading-[1.2] text-[#333333]">
                  Which cloud platforms does Nexobots support?
                </h3>
                {/* Icon */}
                <div className="h-6 w-6 flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.64 10.91L12 15.27L16.36 10.91"
                      stroke="#333333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2 - Height: 105px, Position: y 224px */}
            <div className="mb-5 h-[105px] w-full rounded-[15px] bg-[#EFEFEF] px-5 py-5">
              <div className="relative">
                <h3 className="mb-[15px] font-['Manrope'] text-[20px] font-medium leading-[1.2] text-[#333333]">
                  Can you migrate legacy applications to the cloud?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                  Yes. Our experts assess compatibility, refactor workloads where
                  needed, and perform seamless migration with zero data loss
                </p>
                {/* Icon */}
                <div className="absolute right-[27px] top-[4px] h-6 w-6">
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
                </div>
              </div>
            </div>

            {/* Card 5 - Height: 105px, Position: y 349px */}
            <div className="mb-5 h-[105px] w-full rounded-[15px] bg-[#EFEFEF] px-5 py-5">
              <div className="relative">
                <h3 className="mb-[14px] font-['Manrope'] text-[20px] font-medium leading-[1.2] text-[#333333]">
                  Do you provide ongoing cloud management and support?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-medium leading-[1] text-[#333333]">
                  Absolutely. Nexobots provides 24/7 monitoring, performance
                  optimization, patch management, and cost governance for cloud
                  workloads.
                </p>
                {/* Icon */}
                <div className="absolute right-[25px] top-[4px] h-6 w-6">
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
                </div>
              </div>
            </div>

            {/* Card 3 - Height: 105px, Position: y 474px */}
            <div className="mb-5 h-[105px] w-full rounded-[15px] bg-[#EFEFEF] px-5 py-5">
              <div className="relative">
                <h3 className="mb-[16px] font-['Manrope'] text-[20px] font-medium leading-[1.2] text-[#333333]">
                  Is cloud backup more secure than on-premise solutions?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                  Yes — cloud backups include encryption, redundancy, and
                  geographic failover, ensuring stronger data protection and
                  compliance
                </p>
                {/* Icon */}
                <div className="absolute right-[24px] top-[4px] h-6 w-6">
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
                </div>
              </div>
            </div>

            {/* Card 4 - Height: 105px, Position: y 599px */}
            <div className="h-[105px] w-full rounded-[15px] bg-[#EFEFEF] px-5 py-5">
              <div className="relative">
                <h3 className="mb-[13px] font-['Manrope'] text-[20px] font-medium leading-[1.2] text-[#333333]">
                  Do you provide Disaster Recovery services?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                  Yes, our DRaaS offering ensures minimal downtime and quick
                  recovery for mission-critical workloads in case of system or
                  network failures.
                </p>
                {/* Icon */}
                <div className="absolute right-[24px] top-[4px] h-6 w-6">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

