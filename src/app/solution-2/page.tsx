"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Solution1Page() {
  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* Hero Section - Section 2 */}
      <section className="relative h-[935px] w-full bg-black">
        {/* Background Image */}
        <Image
          src="/solution-1-hero-355263.png"
          alt="Network Infrastructure and Managed Services"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{
            objectPosition: 'center top',
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/52" />

        {/* Content */}
        <div className="relative z-10 h-full">
          {/* Title - Position: left 142px, top 169px */}
          <div className="absolute" style={{ left: '142px', top: '169px' }}>
            <h1 className="w-[1172px] h-[197px] font-['TASA_Orbiter'] text-[62px] font-semibold leading-[1.32] text-white">
            Empower Connectivity. Simplify Management. Accelerate Performance.
            </h1>
          </div>

          {/* Description - Position: left 142px, top 366px */}
          <div className="absolute" style={{ left: '142px', top: '366px' }}>
            <p className="w-[812px] h-[70px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.44] text-white">
            Unlock business agility and reliability with Nexobots’ IT Network Infrastructure & Managed Services.
            </p>
          </div>

          {/* CTA Button - Position: left 142px, top 489px */}
          <div className="absolute" style={{ left: '142px', top: '489px' }}>
            <Link
              href="#contact"
              className="inline-flex h-[67px] w-[261px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black px-[29px] py-[20px] font-['Manrope'] text-[20px] font-semibold leading-[1.366] tracking-[0.02em] text-white transition hover:bg-gray-800"
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
        </div>
      </section>

      {/* Section 3: Introductory Text & Image Grid */}
      <section className="relative h-[1066px] w-full bg-black">
        <div className="relative h-full w-full">
          {/* Main Heading - Position: left 166px, top 120px */}
          <div className="absolute" style={{ left: '166px', top: '120px' }}>
            <h2 className="w-[1108px] text-center font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.17] text-white">
              In the digital-first era, a high-performing, secure, and agile network is essential for every enterprise.
              <br />
              Yet, managing distributed systems, growing endpoints, and increasing data demands can quickly overwhelm internal IT teams.
            </h2>
          </div>

          {/* Subheading - Position: left 261px, top 239px */}
          <div className="absolute" style={{ left: '261px', top: '239px' }}>
            <p className="w-[918px] text-center font-['TASA_Orbiter'] text-[20px] font-semibold leading-[1.17] text-[#727272]">
            Nexobots Technologies delivers IT Network Infrastructure & Managed Services Solutions that combine robust network architecture with proactive management.We help organizations design, implement, and maintain intelligent, future-ready IT ecosystems — ensuring seamless connectivity, optimal uptime, and strategic scalability.            
            </p>
          </div>

          {/* CTA Button - Position: left 643px, top 399px */}
          <div className="absolute" style={{ left: '643px', top: '399px' }}>
            <Link
              href="#contact"
              className="inline-flex h-[45px] w-[155px] items-center justify-center rounded-[75px] border border-white/30 bg-black px-[25px] py-[12px] font-['Manrope'] text-[15px] font-semibold leading-[1.366] tracking-[0.02em] text-white transition hover:bg-gray-800"
            >
              Get In Touch
            </Link>
          </div>

          {/* Image Grid - Position: left 120px, top 511px */}
          <div className="absolute" style={{ left: '120px', top: '511px' }}>
            <div className="flex gap-[17px]">
              {/* Left Large Image */}
              <div className="relative h-[435px] w-[549px] overflow-hidden rounded-[18px]">
                <Image
                  src="/solution-1-section3-1-6536ac.png"
                  alt="Surveillance Infrastructure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Right Column - Two Images */}
              <div className="flex flex-col gap-[19px]">
                {/* Top Right Image */}
                <div className="relative h-[218px] w-[635px] overflow-hidden rounded-[18px]">
                  <Image
                    src="/solution-1-section3-2.png"
                    alt="Intelligent Surveillance"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Bottom Right Image */}
                <div className="relative h-[198px] w-[635px] overflow-hidden rounded-[18px]">
                  <Image
                    src="/solution-1-section3-3.png"
                    alt="Security Solutions"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Intelligent Surveillance Matters */}
      <section className="relative h-[687px] w-full bg-[#D9D9D9]">
        <div className="relative h-full w-full">
          {/* Main Heading - Position: left 119px, top 120px */}
          <div className="absolute" style={{ left: '119px', top: '120px' }}>
            <h2 className="w-[973px] h-[72px]font-['TASA_Orbiter'] text-[48px] font-semibold leading-[1.4937] text-black">
              Why IT Network Infrastructure & Managed Services Matter
            </h2>
          </div>

          {/* Left Paragraph - Position: left 119px, top 241px */}
          <div className="absolute" style={{ left: '119px', top: '241px' }}>
            <p className="w-[576px] h-[250px] mt-[30px] font-['TASA_Orbiter'] text-[24px] font-medium leading-[1.32] text-black">
              Enterprises today depend on uninterrupted data flow, secure access, and predictable performance.
              <br />
              However, siloed infrastructure and reactive support models can limit operational efficiency and growth.
              <br />
              Nexobots bridges this gap through an integrated network and management framework — built to enhance visibility, reduce downtime, and align IT performance with business outcomes.
            </p>
          </div>

          {/* Right Paragraph - Position: left 754px, top 241px */}
          <div className="absolute" style={{ left: '754px', top: '241px' }}>
            <p className="w-[573px] h-[174px] mt-[30px] font-['TASA_Orbiter'] text-[24px] font-medium leading-[1.32] text-black">
            Whether it’s network deployment, security integration, or 24/7 monitoring, our solutions ensure your IT foundation stays strong, scalable, and secure.
            </p>
          </div>

          {/* CTA Button - Position: left 120px, top 522px */}
          <div className="absolute" style={{ left: '120px', top: '522px' }}>
            <Link
              href="#contact"
              className="inline-flex h-[45px] w-[155px] mt-[30px] items-center justify-center rounded-[75px] border border-white/30 bg-black px-[25px] py-[12px] font-['Manrope'] text-[15px] font-semibold leading-[1.366] tracking-[0.02em] text-white transition hover:bg-gray-800"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

       {/* Placeholder for future sections */}
       <section className="bg-[#F8F8F8] py-20 text-center">
        <h2 className="font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.4937] text-black">
          Our Core Offerings
        </h2>
        </section>

        <section className="bg-[#F8F8F8] px-[78px] py-[118px]">
        <div className="mx-auto max-w-[1392.5px]">
          {/* Title */}
          <h2 className=" max-w-[1172px] h-[200px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
          Network Infrastructure Design & Implementation
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] h-[90px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
            We design, deploy, and optimize network infrastructure to support growth, security, and operational efficiency.
            <br />
            Our solutions ensure seamless connectivity, high-performance networks, and scalable architecture — designed to meet current and future needs.
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
                  LAN/WAN architecture design & rollout
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Structured cabling (CAT6, CAT7 & Fiber)
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Wi-Fi coverage & access point deployment
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Routing & switching configuration
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Network certification & performance validation
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
            Strong, scalable, and high-performance network backbone for growing digital demands.
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

      <section className="bg-[#F8F8F8] px-[78px] py-[118px]">
        <div className="mx-auto max-w-[1392.5px]">
          {/* Title */}
          <h2 className="mb-[21px] max-w-[1172px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
          Firewall & Network Security Integration
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
          Safeguard your enterprise from evolving cyber threats.
            <br />
            Our intelligent firewall and network security solutions combine performance and protection — securing every endpoint, gateway, and data stream.
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
                  Next-Generation Firewall (NGFW) setup
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  VPN & multi-site secure access
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Unified threat management (UTM) integration
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Policy enforcement & application control
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Real-time monitoring & analytics
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
            Hardened security, zero-trust connectivity, and complete compliance assurance.
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

      <section className="bg-[#F8F8F8] px-[78px] py-[118px]">
        <div className="mx-auto max-w-[1392.5px]">
          {/* Title */}
          <h2 className="mb-[21px] max-w-[1172px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
          Network Operations Center (NOC) & Continuous Monitoring
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
           Experience uninterrupted network visibility and proactive performance management.
           <br></br>
           Our 24/7 NOC delivers real-time oversight, ensuring maximum uptime and incident-free operations.
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
                  SLA-based escalation workflows
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Incident diagnosis & root-cause analysis
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Event correlation & alert response
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Continuous network & server monitoring
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Performance trend analytics
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
            Proactive issue resolution, improved uptime, and data-driven network optimization.
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

      <section className="bg-[#F8F8F8] px-[78px] py-[118px]">
        <div className="mx-auto max-w-[1392.5px]">
          {/* Title */}
          <h2 className="mb-[21px] max-w-[1172px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
          Managed IT & Lifecycle Services
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
          Optimize your IT operations with a dedicated, expert-managed framework.
            <br />
            We deliver complete IT lifecycle support — from configuration and backup to ongoing maintenance and optimization.
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
                  IT asset lifecycle management
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Patch, update & backup management
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                   Helpdesk & on-site support (L1–L3)
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Preventive maintenance scheduling
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Infrastructure performance audits
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
            Operational continuity, predictable costs, and simplified IT management.
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


      <section className="bg-[#F8F8F8] px-[78px] py-[118px]">
        <div className="mx-auto max-w-[1392.5px]">
          {/* Title */}
          <h2 className="mb-[21px] max-w-[1172px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
          Network Optimization & Performance Enhancement
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
            Ensure your infrastructure performs at its peak.
            <br />
            Through continuous assessment and analytics, we fine-tune configurations and remove performance bottlenecks.
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
                  Bandwidth and throughput optimization
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Load balancing & QoS configuration
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Latency analysis & fault resolution
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Capacity planning & scaling strategy
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Detailed performance reporting
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
            Higher network efficiency, faster response, and maximum user satisfaction.
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

      <section className="bg-[#F8F8F8] px-[78px] py-[118px]">
        <div className="mx-auto max-w-[1392.5px]">
          {/* Title */}
          <h2 className="mb-[21px] max-w-[1172px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
           Multi-Vendor Integration & Support
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
          Leverage flexibility without complexity.
            <br />
            Our engineers are certified across major OEMs — enabling seamless integration, cross-platform functionality, and consistent support.
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
                  Multi-OEM network component integration
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Hardware & software lifecycle management
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Vendor coordination & warranty handling
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Firmware upgrades & standardization
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Multi-location deployment support
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
            Interoperable, stable, and future-proof infrastructure built for business continuity.
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
            Why Choose Nexobots for IT Network
            <br />
            Infrastructure & Managed Services
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
                Strategic Design. Operational Excellence.
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                We combine consulting-driven design with hands-on management for full lifecycle value.
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
                Certified OEM Partnerships
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                Strong alliances with Cisco, D-Link, Fortinet, Palo Alto, and Aruba deliver best-in-class reliability.

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
                Proactive & Predictive Management
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                Real-time monitoring, analytics, and preventive maintenance minimize downtime.
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
                SLA-Backed Service Reliability
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                Defined response, resolution, and uptime commitments — guaranteed.
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
                Security-First, Performance-Driven
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                Our architectures embed cybersecurity and speed at every level of your network.
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
              We work with industry-leading OEMs to deliver enterprise-grade solutions that meet the highest standards of quality, performance, and security.
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
            FAQs – CCTV & Intelligent 
            <br />
            Surveillance Solutions
            </h2>
          </div>

          {/* FAQ Cards Container - Position: x 107, y 294 */}
          <div className="absolute" style={{ left: '107px', top: '294px', width: '1225px' }}>
            {/* Card 1 - Height: 120px */}
            <div className="mb-5 h-[120px] w-full rounded-[15px] bg-[#EFEFEF] px-5 py-5">
              <div className="relative">
                <h3 className="mb-[3px] font-['Manrope'] text-[20px] font-medium leading-[1.2] text-[#333333]">
                What’s included in Nexobots’ IT Network Infrastructure & Managed Services Solution?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                It includes complete network design, implementation, management, and optimization — combining hardware, security, and support under a unified framework.
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
                Can you integrate existing infrastructure with new solutions? 
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
                 Do you offer real-time network monitoring?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                Yes. Our 24/7 NOC provides continuous visibility, proactive alerts, and immediate escalation handling.
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
                How do you ensure data security across the network?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-medium leading-[1] text-[#333333]">
                We implement multi-layered security with next-gen firewalls, encryption, access control, and real-time threat intelligence.
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
                Are your managed services customizable?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                Yes. We offer modular service models to match your business size, infrastructure complexity, and performance goals.
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
                Do you provide support across multiple locations?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                Yes. With a nationwide footprint in 180+ cities, Nexobots ensures consistent on-site and remote support.
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

      <ContactForm />
      <Footer />
    </div>
  );
}

