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
          alt="CCTV & Intelligent Surveillance Solutions"
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
            <h1 className="w-[722px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.32] text-white">
              See Smarter. Secure Better. Act Faster.
            </h1>
          </div>

          {/* Description - Position: left 142px, top 366px */}
          <div className="absolute" style={{ left: '142px', top: '366px' }}>
            <p className="w-[812px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.44] text-white">
              Protect people, assets, and infrastructure with Nexobots&apos; CCTV & Intelligent Surveillance Solutions.
            </p>
          </div>

          {/* CTA Button - Position: left 142px, top 489px */}
          <div className="absolute" style={{ left: '142px', top: '489px' }}>
            <Link
              href="/contact"
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
              Security today goes beyond visibility — it&apos;s about intelligence, responsiveness, and control.
              <br />
              Enterprises need surveillance systems that not only record but also analyze, alert, and integrate seamlessly with broader security frameworks.
            </h2>
          </div>

          {/* Subheading - Position: left 261px, top 239px */}
          <div className="absolute" style={{ left: '261px', top: '239px' }}>
            <p className="w-[918px] text-center font-['TASA_Orbiter'] text-[20px] font-semibold leading-[1.17] text-[#727272]">
              Nexobots Technologies delivers CCTV & Intelligent Surveillance Solutions designed for modern enterprises, campuses, and industries. From IP-based cameras to AI-driven video analytics, we build scalable surveillance ecosystems that ensure proactive threat detection, real-time response, and complete situational awareness — across single or multi-site environments.
            </p>
          </div>

          {/* CTA Button - Position: left 643px, top 399px */}
          <div className="absolute" style={{ left: '643px', top: '399px' }}>
            <Link
              href="/contact"
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
            <h2 className="w-[973px] font-['TASA_Orbiter'] text-[48px] font-semibold leading-[1.4937] text-black">
              Why Intelligent Surveillance Matters
            </h2>
          </div>

          {/* Left Paragraph - Position: left 119px, top 241px */}
          <div className="absolute" style={{ left: '119px', top: '241px' }}>
            <p className="w-[576px] font-['TASA_Orbiter'] text-[24px] font-medium leading-[1.32] text-black">
              In a dynamic threat landscape, conventional CCTV systems are no longer enough.
              <br />
              Businesses need smart, connected, and data-driven surveillance networks that deliver actionable insights and enhance safety.
              <br />
              Nexobots combines advanced imaging technology, AI analytics, and centralized monitoring to provide a complete surveillance solution.
            </p>
          </div>

          {/* Right Paragraph - Position: left 754px, top 241px */}
          <div className="absolute" style={{ left: '754px', top: '241px' }}>
            <p className="w-[573px] font-['TASA_Orbiter'] text-[24px] font-medium leading-[1.32] text-black">
              With Nexobots, you gain a trusted technology partner that helps you plan, deploy, and manage virtualized environments and cloud infrastructures efficiently. From workload migration to backup and DR orchestration, we ensure your IT environment runs smarter, faster, and safer.
            </p>
          </div>

          {/* CTA Button - Position: left 120px, top 522px */}
          <div className="absolute" style={{ left: '120px', top: '522px' }}>
            <Link
              href="/contact"
              className="inline-flex h-[45px] w-[155px] items-center justify-center rounded-[75px] border border-white/30 bg-black px-[25px] py-[12px] font-['Manrope'] text-[15px] font-semibold leading-[1.366] tracking-[0.02em] text-white transition hover:bg-gray-800"
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
          <h2 className="mb-[21px] max-w-[1172px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
            IP CCTV Surveillance Systems
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
            Modernize your security infrastructure with high-definition, network-based surveillance.
            <br />
            Our IP CCTV systems deliver crystal-clear imaging, remote accessibility, and intelligent video storage — tailored for enterprises of all sizes.
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
                    HD/4K IP camera installation & configuration
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    NVR-based recording & centralized storage
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Multi-site live monitoring setup
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Secure remote access (web & mobile)
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Integration with existing network infrastructure
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
            Enhanced visibility, reliable recording, and simplified monitoring through a unified platform.
            </p>
            <Link
              href="/contact"
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
          ANPR (Automatic Number Plate Recognition) Systems
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
            Automate vehicle monitoring and access control with ANPR-enabled surveillance.
            <br />
            Our systems accurately capture, recognize, and log number plates for traffic management, parking, automation and perimeter control.
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
                  ANPR camera setup & calibration
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  License plate recognition software integration
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Vehicle database & access control linkage
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Real-time alerts & analytics dashboard
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Custom reporting & event recording
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
              Improved perimeter security, efficient vehicle tracking, and seamless entry management.
            </p>
            <Link
              href="/contact"
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
            PTZ & Advanced Camera Solutions
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
            Achieve 360° situational awareness with Pan-Tilt-Zoom (PTZ) and specialized camera systems.
            <br />
            We deploy advanced imaging technologies designed for high-risk and large-scale environments.
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
                    PTZ, thermal, and panoramic camera deployment
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Auto-tracking & motion detection configuration
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Low-light & infrared-enabled surveillance
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Weatherproof & vandal-resistant enclosures
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Integration with VMS and security platforms
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
            Extended coverage, intelligent tracking, and superior clarity in every condition
            </p>
            <Link
              href="/contact"
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
            Centralized Video Management Systems (VMS)
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
            Achieve 360° situational awareness with Pan-Tilt-Zoom (PTZ) and specialized camera systems.
            <br />
            We deploy advanced imaging technologies designed for high-risk and large-scale environments.
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
                    Multi-location VMS deployment
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    User access control & hierarchy setup
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                   Storage optimization & redundancy planning
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Alarm & event management integration
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Scalability for large, multi-site operations
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
            Unified command, simplified management, and enhanced operational visibility.
            </p>
            <Link
              href="/contact"
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
            Remote Monitoring & Command Center Setup
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
          Enable 24/7 surveillance operations with centralized command centers and remote viewing capabilities.
            <br />
            We design and deploy intelligent monitoring rooms equipped with advanced visualization and alert systems.
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
                  Command center design & implementation
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    UMulti-screen monitoring & live streaming setup
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Remote viewing integration (VPN & cloud)
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Alarm management & escalation workflows
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                  Operator training & system documentation
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
            Centralized control, real-time situational response, and enhanced decision-making.
            </p>
            <Link
              href="/contact"
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
          AI-Enabled Video Analytics
          </h2>

          {/* Description */}
          <p className="mb-[53px] max-w-[1284px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
            Turn your surveillance data into actionable intelligence with AI-powered analytics.
            <br />
            Our intelligent video systems leverage computer vision and machine learning to detect anomalies, automate alerts, and generate insights
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
                    AI-based motion & intrusion detection
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Facial recognition & people counting
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Behavior & crowd analytics
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Object detection & perimeter violation alerts
                  </p>
                  <p className="max-w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Data dashboards & automated reports
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
            Proactive threat detection, improved operational intelligence, and smarter security decisions.
            </p>
            <Link
              href="/contact"
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
            Why Choose Nexobots for CCTV & Intelligent 
            <br />
            Surveillance Solutions
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
                End-to-End Surveillance Expertise
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                From camera installation to AI analytics, we deliver complete, integrated security ecosystems.
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
                We work with global leaders such as Hikvision, CP Plus, Dahua, Axis, and Bosch for world-class hardware and software performance.

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
                Smart, Scalable Design
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                Our modular architecture supports expansion across multiple sites and industries.
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
                AI-Driven Insights
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                Real-time analytics transform raw video into intelligent, actionable data.
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
                Integrated Security Framework
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                Seamless integration with access control, network, and data management systems
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
                What makes your CCTV solutions “intelligent”?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                Our systems combine IP-based cameras with AI analytics for real-time detection, automated alerts, and actionable insights.
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
                Can you integrate CCTV with existing network and access control systems?
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
                  What types of cameras do you provide?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                We offer dome, bullet, PTZ, thermal, panoramic, and infrared cameras — tailored for indoor, outdoor, and industrial environments.
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
                 Do you offer post-deployment support and maintenance?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-medium leading-[1] text-[#333333]">
                Absolutely. Our AMC and Managed Services teams provide ongoing maintenance, monitoring, and performance optimization.
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
                How do you ensure project timelines and quality?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                Every engagement is governed by detailed SLAs, project charters, and milestone-based delivery to maintain speed and reliability.
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
                Do you provide consulting for hybrid or multi-cloud integration?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                Yes. We design and implement hybrid and multi-cloud strategies that ensure interoperability and security across platforms.
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

