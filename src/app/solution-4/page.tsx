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
            Connect Intelligently. Communicate Seamlessly. Scale Confidently. 
            </h1>
          </div>

          {/* Description - Position: left 142px, top 366px */}
          <div className="absolute" style={{ left: '142px', top: '366px' }}>
            <p className="w-[812px] h-[70px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.44] text-white">
            Build a secure, high-performance network backbone with Nexobots’ Smart Network Infrastructure Solutions.
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
            In a hyper-connected business landscape, network reliability and speed define operational 
            <br />
            excellence. Yet, managing complex network architectures, multi-site connectivity, and evolving security needs can strain resources and limit scalability.
            </h2>
          </div>

          {/* Subheading - Position: left 261px, top 239px */}
          <div className="absolute" style={{ left: '261px', top: '239px' }}>
            <p className="w-[918px] text-center font-['TASA_Orbiter'] text-[20px] font-semibold leading-[1.17] text-[#727272]">
            Nexobots Technologies delivers Smart Network Infrastructure Solutions that form the foundation of modern enterprises. From high-speed LAN deployments to secure WAN connectivity and SD-WAN optimization, we design and implement intelligent, scalable, and resilient network ecosystems tailored to your organization’s performance and security goals.
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
            Why Smart Network Infrastructure Matters
            </h2>
          </div>

          {/* Left Paragraph - Position: left 119px, top 241px */}
          <div className="absolute" style={{ left: '119px', top: '241px' }}>
            <p className="w-[576px] h-[250px] mt-[30px] font-['TASA_Orbiter'] text-[24px] font-medium leading-[1.32] text-black">
            Your network is the lifeline of your digital enterprise. A well-architected network ensures seamless 
              <br />
              communication, secure data exchange, and uninterrupted collaboration across locations and
              <br />
              devices.Nexobots enables businesses to stay connected and protected — integrating advanced networking technologies with enterprise-grade performance and security.
            </p>
          </div>

          {/* Right Paragraph - Position: left 754px, top 241px */}
          <div className="absolute" style={{ left: '754px', top: '241px' }}>
            <p className="w-[573px] h-[174px] mt-[30px] font-['TASA_Orbiter'] text-[24px] font-medium leading-[1.32] text-black">
            Our end-to-end expertise spans structured cabling, active and passive components, firewalls, WAN 
            <br />
            optimization, and ISP integration — ensuring your network remains fast, stable, and future-ready.
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
          Network Security: Firewall Solutions

          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] h-[90px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
          Protect your organization’s data and network assets with enterprise-grade firewall systems.
            <br />
            WWe implement next-generation firewalls (NGFW) from leading OEMs like Fortinet, Palo Alto, and Cisco, ensuring deep packet inspection, intrusion prevention, and intelligent traffic control.
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
                  Next-Generation Firewall (NGFW) deployment
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Intrusion detection & prevention (IDS/IPS)
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Web filtering & application control
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  VPN & secure remote access
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Centralized policy management
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
            Enhanced security posture, compliance assurance, and real-time threat mitigation.
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
          Structured Cabling: CAT6, CAT7 & Optical Fibre

          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
          Establish a robust and scalable network foundation with structured cabling systems that deliver speed, 
            <br />
            performance, and reliability. Our installations adhere to global standards, ensuring clean, efficient, and future-proof infrastructure.
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
                  Design & implementation of CAT6/CAT7 networks
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Optical fibre backbone installation & testing
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Rack dressing & patch panel management
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Cable certification & documentation
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  End-to-end labeling & network mapping
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
            Improved network stability, reduced signal loss, and easier scalability for future expansion.

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
           Active Components: Routers & Network Devices
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
          Empower your network with enterprise-grade routing and switching equipment that ensures seamless 
           <br></br>
           connectivity and optimized traffic flow. We supply, configure, and manage active components from global OEMs for maximum reliability.
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
                  Router configuration & deployment
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Layer 2 & Layer 3 switch setup
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Load balancing & VLAN segmentation
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  QoS (Quality of Service) optimization
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Firmware updates & performance monitoring
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
            High-speed, intelligent routing for consistent data flow and superior network performance.

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
          Passive Components: Core & Access Switches, Smart Hubs


          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
          Create a solid network framework with reliable passive components that ensure consistent connectivity 
            <br />
            between users and systems. We integrate core and access switches with smart hubs for efficient data management and redundancy.
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
                  Core & access switch installation
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Patch panel & hub configuration
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Rack integration & cable management
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Power & redundancy planning
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Network topology documentation
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
            Uninterrupted internet access, optimized bandwidth usage, and improved reliability.


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
           SD-WAN (Software-Defined WAN)
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
          Redefine wide-area networking with intelligent, software-driven connectivity.
            <br />
            Our SD-WAN solutions deliver agility, security, and centralized control across distributed networks.
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
                  SD-WAN design & deployment
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Centralized policy management
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Application-based traffic routing                 </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Encrypted multi-branch connectivity
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Real-time analytics & reporting
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
            Lower WAN costs, improved agility, and simplified network management.
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
          Point-to-Point (P2P) & RF Connectivity
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
          Enable seamless data transfer and real-time communication between sites through high-speed P2P and
            <br />
            RF connectivity. We design and deploy long-range wireless and fiber-based point-to-point networks for enterprises, campuses, and industrial zones.
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
                  P2P link design & deployment
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  RF connectivity & antenna alignment
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Remote monitoring & control via apps
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Bandwidth testing & optimization
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Network redundancy planning
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
            Reliable inter-site communication, low-latency data transfer, and extended network reach.

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
            Why Choose Nexobots for Smart Network 
            <br />
            Infrastructure Solutions
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
                End-to-End Network Expertise
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                From structured cabling to SD-WAN, we manage every layer of your network infrastructure.
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
                We collaborate with leading brands — Cisco, D-Link, Fortinet, Aruba, and Palo Alto — for best-in-class networking solutions.

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
                Performance-Driven Design
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                Every network is built for high availability, scalability, and zero downtime.

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
                Security at the Core
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                Integrated firewall, VPN, and threat detection to safeguard your data and users.
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
                Nationwide Implementation Capability
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                180+ city presence ensures consistent quality and rapid deployment across India.
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
            FAQs – Smart Network 

            <br />
            Infrastructure Solutions
            </h2>
          </div>

          {/* FAQ Cards Container - Position: x 107, y 294 */}
          <div className="absolute" style={{ left: '107px', top: '294px', width: '1225px' }}>
            {/* Card 1 - Height: 120px */}
            <div className="mb-5 h-[120px] w-full rounded-[15px] bg-[#EFEFEF] px-5 py-5">
              <div className="relative">
                <h3 className="mb-[3px] font-['Manrope'] text-[20px] font-medium leading-[1.2] text-[#333333]">
                Do you provide both LAN and WAN design and implementation? 
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                Yes. We offer complete design, deployment, and optimization of LAN and WAN networks, including cabling, routing, switching, and connectivity.

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
                Which OEMs do you work with for network components?
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
                 Can you integrate SD-WAN with our existing WAN setup? 
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                Absolutely. We specialize in hybrid WAN models that combine MPLS, broadband, and LTE connectivity under SD-WAN control.
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
                Do you handle ISP coordination and link redundancy?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-medium leading-[1] text-[#333333]">
                Yes. We manage end-to-end ISP integration, bandwidth allocation, and redundancy configuration for uninterrupted connectivity.
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
                 How do you ensure network security across branches?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                Our multi-layered security framework includes NGFWs, VPNs, intrusion prevention, and continuous monitoring.
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
            <div className="mb-5 h-[105px] w-full rounded-[15px] bg-[#EFEFEF] px-5 py-5">
              <div className="relative">
                <h3 className="mb-[13px] font-['Manrope'] text-[20px] font-medium leading-[1.2] text-[#333333]">
                Do you support long-range wireless or RF connectivity?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                Yes. We design and deploy secure point-to-point (P2P) and RF-based connections for remote sites and industrial campuses.
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

            <div className="h-[105px] w-full rounded-[15px] bg-[#EFEFEF] px-5 py-5">
              <div className="relative">
                <h3 className="mb-[13px] font-['Manrope'] text-[20px] font-medium leading-[1.2] text-[#333333]">
                 Can these solutions scale with our growing business?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                Definitely. All Nexobots network solutions are modular, standards-based, and easily scalable to support your future expansion.
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

