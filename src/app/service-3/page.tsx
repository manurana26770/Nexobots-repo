import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Service3Page() {
  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Hero Section - Exact from Figma */}
      <section className="relative h-[935px] w-full overflow-hidden bg-black">
        {/* Background Image Layer 1 */}
        <div className="absolute inset-0">
          <Image
            src="/service-hero-bg.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Background Overlay Layer */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.52 }}
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="relative z-10 flex h-full items-start justify-start px-[142px] pt-[169px]">
          <div className="max-w-[838px]">
            {/* Main Heading */}
            <h1 className="mb-[76px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.32] text-white">
              Prevent Downtime. Ensure Continuity. Drive Performance.
            </h1>

            {/* Subheading */}
            <p className="mb-[44px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.44] text-white">
              Keep your IT infrastructure reliable, secure, and high-performing
              — with Nexobots&apos; AMC and Managed Services.
            </p>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="inline-flex h-[67px] w-[261px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-white px-[29px] py-[20px] font-['Manrope'] text-[20px] font-semibold leading-[1.366] tracking-[0.02em] text-black transition hover:bg-gray-100"
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
                  stroke="#000000"
                  strokeWidth="2"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Overview and Images - Exact from Figma */}
      <section className="relative h-[1036px] w-full bg-[#F8F8F8]">
        <div className="flex h-full flex-col items-center justify-start">
          {/* First Paragraph - Top Text */}
          <div className="px-[232px] pt-[116px]">
            <p className="text-center font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.17] text-black">
              In today&apos;s always-connected world, network uptime and system
              reliability are critical to business success. Yet, maintaining IT
              infrastructure internally can strain resources, delay issue
              resolution, and increase costs.
            </p>
          </div>

          {/* Second Paragraph */}
          <div className="px-[286px] pt-[7px]">
            <p className="text-center font-['TASA_Orbiter'] text-[20px] font-semibold leading-[1.17] text-[#4B4B4B]">
              Nexobots Technologies delivers Annual Maintenance Contracts (AMC)
              and Managed IT Services designed to maximize system availability,
              prevent downtime, and ensure consistent performance across your
              entire IT ecosystem — from endpoints to data centers.
            </p>
          </div>

          {/* Image Grid */}
          <div className="mt-[85px] flex gap-[17px] px-[120px]">
            {/* Large Left Image */}
            <div className="h-[435px] w-[549px] overflow-hidden rounded-[18px] bg-gradient-to-br from-blue-100 to-purple-100">
              <Image
                src="/service-3-img-1.jpg"
                alt="Service Image 1"
                width={549}
                height={435}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right Column - Two Stacked Images */}
            <div className="flex flex-col gap-[19px]">
              {/* Top Right Image */}
              <div className="h-[218px] w-[635px] overflow-hidden rounded-[18px] bg-gradient-to-br from-purple-100 to-pink-100">
                <Image
                  src="/service-3-img-2.jpg"
                  alt="Service Image 2"
                  width={635}
                  height={218}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="h-[198px] w-[635px] overflow-hidden rounded-[18px] bg-gradient-to-br from-pink-100 to-orange-100">
                <Image
                  src="/service-3-img-3.jpg"
                  alt="Service Image 3"
                  width={635}
                  height={198}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* CTA Button - Positioned absolutely as in Figma */}
          <div className="absolute" style={{ left: '643px', top: '350px' }}>
            <Link
              href="#contact"
              className="inline-flex h-[45px] w-[155px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black px-[25px] py-[12px] font-['Manrope'] text-[15px] font-semibold leading-[1.366] tracking-[0.02em] text-white transition hover:bg-gray-800"
            >
              Get In Touch
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

      {/* Section 4: Annual Maintenance Contracts (AMC) - Exact from Figma */}
      <section className="bg-[#F8F8F8] px-[78px] py-[120px]">
        <div className="mx-auto max-w-[1548.5px]">
          {/* Title */}
          <h2 className="mb-[28px] w-[1172px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
            Annual Maintenance Contracts (AMC)
          </h2>

          {/* Description */}
          <p className="mb-[60px] w-[1152px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
            A proactive, SLA-based service model that ensures your IT assets are
            always operational, secure, and up to date. Our AMC plans are
            designed for flexibility — tailored to meet the unique needs of
            enterprises, campuses, and industries.
          </p>

          {/* Image and Key Services Side by Side */}
          <div className="mb-[45px] flex gap-[33.5px]">
            {/* Image Placeholder - Left Side */}
            <div className="h-[457px] w-[640px] flex-shrink-0 rounded-[13px] bg-gradient-to-br from-gray-100 to-gray-200" />

            {/* Key Services - Right Side */}
            <div className="w-[719px]">
              <h3 className="mb-[64px] font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">
                Key Services
              </h3>
              
              {/* Services List with Decorative Lines */}
              <div className="relative">
                {/* Background Line */}
                <div className="absolute left-0 top-[10px] h-[365px] w-[9px] rounded-[55px] bg-[#D9D9D9]" />
                {/* Red Accent Line */}
                <div className="absolute left-0 top-[10px] h-[77.31px] w-[8.6px] rounded-[55px] bg-[#E11E24]" />
                
                {/* Services */}
                <div className="space-y-[54px] pl-[52px]">
                  <p className="w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Preventive maintenance and scheduled inspections
                  </p>
                  <p className="w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    On-call troubleshooting and emergency support
                  </p>
                  <p className="w-[613px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Spare parts and component replacements (as per SLA)
                  </p>
                  <p className="w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Network health audits and documentation
                  </p>
                  <p className="w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Firmware and software patch updates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Outcome Section - Below Image */}
          <div className="w-[1169px]">
            <h3 className="mb-[38px] font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">
              Outcome
            </h3>
            <p className="mb-[68px] font-['TASA_Orbiter'] text-[32px] font-semibold leading-[1.38] text-black">
              Reduced downtime, predictable maintenance costs, and extended
              hardware lifespan.
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

      {/* Section 5: Managed IT Services - Exact from Figma */}
      <section className="bg-[#F8F8F8] px-[78px] py-[120px]">
        <div className="mx-auto max-w-[1548.5px]">
          {/* Title */}
          <h2 className="mb-[24px] w-[953px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
            Managed IT Services
          </h2>

          {/* Description */}
          <p className="mb-[49px] w-[1151px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
            Beyond maintenance — we manage your entire IT ecosystem.
            <br />
            From network operations to cloud infrastructure, Nexobots&apos; Managed
            Services deliver 24/7 monitoring, predictive analytics, and expert
            management, backed by performance-driven SLAs.
          </p>

          {/* Image and Key Services Side by Side */}
          <div className="mb-[107px] flex gap-[33.5px]">
            {/* Image Placeholder - Left Side */}
            <div className="h-[457px] w-[640px] flex-shrink-0 rounded-[13px] bg-gradient-to-br from-blue-100 to-purple-100" />

            {/* Key Services - Right Side */}
            <div className="w-[719px]">
              <h3 className="mb-[51px] font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">
                Key Services
              </h3>
              
              {/* Services List with Decorative Lines */}
              <div className="relative">
                {/* Background Line */}
                <div className="absolute left-0 top-[10px] h-[365px] w-[9px] rounded-[55px] bg-[#D9D9D9]" />
                {/* Red Accent Line */}
                <div className="absolute left-0 top-[10px] h-[77.31px] w-[8.6px] rounded-[55px] bg-[#E11E24]" />
                
                {/* Services */}
                <div className="space-y-[54px] pl-[52px]">
                  <p className="w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    24/7 Network & Server Monitoring (NOC Support)
                  </p>
                  <p className="w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Remote & Onsite IT Support
                  </p>
                  <p className="w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Patch, Backup & Configuration Management
                  </p>
                  <p className="w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Security Monitoring & Threat Mitigation
                  </p>
                  <p className="w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Performance Optimization & Reporting
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Outcome Section - Below Image */}
          <div className="w-[1222px]">
            <h3 className="mb-[50px] font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">
              Outcome
            </h3>
            <p className="mb-[52px] font-['TASA_Orbiter'] text-[32px] font-semibold leading-[1.27] text-black">
              Always-on infrastructure, proactive issue resolution, and improved
              IT efficiency.
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

      {/* Section 6: IT Asset Lifecycle Management - Exact from Figma */}
      <section className="bg-[#F8F8F8] px-[78px] py-[120px]">
        <div className="mx-auto max-w-[1548.5px]">
          {/* Title */}
          <h2 className="mb-[21px] w-[1151px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
            IT Asset Lifecycle Management
          </h2>

          {/* Description */}
          <p className="mb-[53px] w-[1151px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
            End-to-end visibility and control over your IT assets.
            <br />
            We track, manage, and optimize hardware and software through their
            complete lifecycle — from procurement to disposal.
          </p>

          {/* Image and Key Services Side by Side */}
          <div className="mb-[116px] flex gap-[33.5px]">
            {/* Image Placeholder - Left Side */}
            <div className="h-[457px] w-[640px] flex-shrink-0 rounded-[13px] bg-gradient-to-br from-purple-100 to-pink-100" />

            {/* Key Services - Right Side */}
            <div className="w-[719px]">
              <h3 className="mb-[51px] font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">
                Key Services
              </h3>
              
              {/* Services List with Decorative Lines */}
              <div className="relative">
                {/* Background Line */}
                <div className="absolute left-0 top-[10px] h-[365px] w-[9px] rounded-[55px] bg-[#D9D9D9]" />
                {/* Red Accent Line */}
                <div className="absolute left-0 top-[10px] h-[77.31px] w-[8.6px] rounded-[55px] bg-[#E11E24]" />
                
                {/* Services - 79px gap between items */}
                <div className="space-y-[79px] pl-[52px]">
                  <p className="w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Asset discovery & tagging
                  </p>
                  <p className="w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Preventive maintenance scheduling
                  </p>
                  <p className="w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Inventory & license management
                  </p>
                  <p className="w-[596px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">
                    Warranty tracking & vendor coordination
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Outcome Section - Below Image */}
          <div className="w-[1003px]">
            <h3 className="mb-[61px] font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">
              Outcome
            </h3>
            <p className="mb-[61px] font-['TASA_Orbiter'] text-[32px] font-semibold leading-[1.27] text-black">
              Better utilization, reduced operational overhead, and
              compliance-ready asset documentation
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
      <section className="relative h-[1395px] w-full bg-[#F8F8F8]">
        <div className="relative h-full w-full">
          {/* Heading - Position: left 122px, top 120px */}
          <div className="absolute" style={{ left: '122px', top: '120px' }}>
            <h2 className="w-[1148px] text-center font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.4937] text-black">
              Why Choose Nexobots for Annual Maintenance Contracts (AMC) &
              Managed Services
            </h2>
          </div>

          {/* 5 Cards in Horizontal Line - Position: left 69px, top 302px */}
          <div className="absolute" style={{ left: '69px', top: '302px' }}>
            <div className="flex gap-[24px]">
              {/* Card 1 */}
              <div className="h-[242px] w-[241px] rounded-[21px] bg-white p-[20px]">
                <div className="mb-5 flex h-[51px] w-[51px] items-center justify-center rounded-full border border-[#E9E9E9]">
                  <div className="h-[21.25px] w-[21.25px] rounded-sm border border-[#E11E24]">
                    <div className="h-[8.5px] w-[8.5px] translate-x-[12.75px] translate-y-[12.75px] bg-[#E11E24]" />
                  </div>
                </div>
                <h3 className="mb-5 font-['Manrope'] text-[16px] font-bold leading-[1.25] text-black">
                  Proactive Monitoring & Maintenance
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                  Detects issues early and prevents downtime with continuous
                  infrastructure oversight.
                </p>
              </div>

              {/* Card 2 */}
              <div className="h-[242px] w-[241px] rounded-[21px] bg-white p-[20px]">
                <div className="mb-5 flex h-[51px] w-[51px] items-center justify-center rounded-full border border-[#E9E9E9]">
                  <div className="h-[21.25px] w-[21.25px] rounded-sm border border-[#E11E24]">
                    <div className="h-[8.5px] w-[8.5px] translate-x-[12.75px] translate-y-[12.75px] bg-[#E11E24]" />
                  </div>
                </div>
                <h3 className="mb-5 font-['Manrope'] text-[16px] font-bold leading-[1.25] text-black">
                  Certified Multi-Vendor Expertise
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                  OEM-certified engineers ensure seamless support across all IT
                  environments.
                </p>
              </div>

              {/* Card 3 */}
              <div className="h-[242px] w-[241px] rounded-[21px] bg-white p-[20px]">
                <div className="mb-5 flex h-[51px] w-[51px] items-center justify-center rounded-full border border-[#E9E9E9]">
                  <div className="h-[21.25px] w-[21.25px] rounded-sm border border-[#E11E24]">
                    <div className="h-[8.5px] w-[8.5px] translate-x-[12.75px] translate-y-[12.75px] bg-[#E11E24]" />
                  </div>
                </div>
                <h3 className="mb-5 font-['Manrope'] text-[16px] font-bold leading-[1.25] text-black">
                  SLA-Driven Reliability & Accountability
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                  Defined response times and uptime commitments deliver
                  predictable performance.
                </p>
              </div>

              {/* Card 4 */}
              <div className="h-[242px] w-[241px] rounded-[21px] bg-white p-[20px]">
                <div className="mb-5 flex h-[51px] w-[51px] items-center justify-center rounded-full border border-[#E9E9E9]">
                  <div className="h-[21.25px] w-[21.25px] rounded-sm border border-[#E11E24]">
                    <div className="h-[8.5px] w-[8.5px] translate-x-[12.75px] translate-y-[12.75px] bg-[#E11E24]" />
                  </div>
                </div>
                <h3 className="mb-5 font-['Manrope'] text-[16px] font-bold leading-[1.25] text-black">
                  Pan-India Field & Remote Support
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                  180+ city presence enables quick onsite and NOC-based remote
                  service.
                </p>
              </div>

              {/* Card 5 */}
              <div className="h-[242px] w-[241px] rounded-[21px] bg-white p-[20px]">
                <div className="mb-5 flex h-[51px] w-[51px] items-center justify-center rounded-full border border-[#E9E9E9]">
                  <div className="h-[21.25px] w-[21.25px] rounded-sm border border-[#E11E24]">
                    <div className="h-[8.5px] w-[8.5px] translate-x-[12.75px] translate-y-[12.75px] bg-[#E11E24]" />
                  </div>
                </div>
                <h3 className="mb-5 font-['Manrope'] text-[16px] font-bold leading-[1.25] text-black">
                  End-to-End IT Lifecycle Management
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                  Covers installation, optimization, and upgrades for maximum
                  infrastructure value
                </p>
              </div>
            </div>
          </div>

          {/* Images - Position: left 120px, top 642px */}
          <div className="absolute" style={{ left: '120px', top: '642px' }}>
            <div className="flex gap-[28.78px]">
              {/* Left Large Image */}
              <div className="h-[632.66px] w-[546.74px] overflow-hidden rounded-[18px] bg-gradient-to-br from-blue-100 to-purple-100">
                <Image
                  src="/service-3-benefit-1.jpg"
                  alt="Service Benefit 1"
                  width={547}
                  height={633}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Right Column - Two Stacked Images */}
              <div className="flex flex-col gap-[32.39px]">
                {/* Top Right Image */}
                <div className="h-[261.07px] w-[623.48px] overflow-hidden rounded-[18px] bg-gradient-to-br from-purple-100 to-pink-100">
                  <Image
                    src="/service-3-benefit-2.jpg"
                    alt="Service Benefit 2"
                    width={623}
                    height={261}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Bottom Right Image */}
                <div className="h-[339.2px] w-[623.48px] overflow-hidden rounded-[18px] bg-gradient-to-br from-pink-100 to-orange-100">
                  <Image
                    src="/service-3-benefit-3.jpg"
                    alt="Service Benefit 3"
                    width={623}
                    height={339}
                    className="h-full w-full object-cover"
                  />
                </div>
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

            {/* Heading - Centered, 792px width */}
            <div className="flex justify-center">
              <h2 className="w-[1148px] text-center font-['TASA_Orbiter'] text-[32px] font-bold leading-[1.375] text-black">
                We work with industry-leading OEMs to deliver enterprise-grade solutions that meet the highest standards of quality,
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
          {/* Heading - Position: left 126px, top 120px */}
          <div className="absolute" style={{ left: '126px', top: '120px', width: '1148px' }}>
            <h2 className="text-center font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.4937] text-black">
              FAQs – AMC & Managed IT Services
            </h2>
          </div>

          {/* FAQ Cards Container - Position: left 107px, top 294px */}
          <div className="absolute" style={{ left: '107px', top: '294px', width: '1225px' }}>
            {/* Card 1 - Height: 120px */}
            <div className="mb-5 h-[120px] w-full rounded-[15px] bg-[#EFEFEF] px-5 py-5">
              <div className="relative">
                <h3 className="mb-[3px] font-['Manrope'] text-[20px] font-medium leading-[1.2] text-[#333333]">
                  What's the difference between AMC and Managed IT Services?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1.4375] text-[#333333]">
                  AMC focuses on preventive maintenance and on-call support,
                  while Managed Services offer continuous monitoring, proactive
                  management, and complete IT lifecycle coverage.
                </p>
                {/* Icon - Position: right 20px, top 20px */}
                <div className="absolute right-[27px] top-0 h-6 w-6">
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
                  What types of systems are covered under AMC?
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
                  Do you provide both on-site and remote support?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                  Yes. Nexobots provides hybrid support through on-site
                  engineers and a centralized Network Operations Center (NOC)
                  for remote troubleshooting.
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
                  How quickly do you respond to service requests?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-medium leading-[1] text-[#333333]">
                  Our SLAs define clear response and resolution timelines —
                  typically ranging from 1 hour for critical issues to 24 hours
                  for non-critical maintenance.
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
                  Can we customize the AMC scope for specific infrastructure?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                  Absolutely. We offer modular contracts so you can cover
                  specific systems — such as networks, surveillance, or access
                  control — as per your operational needs.
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
                  Do you support multi-location enterprises?
                </h3>
                <p className="pr-12 font-['Manrope'] text-[16px] font-normal leading-[1] text-[#333333]">
                  Yes. With a presence in over 180+ cities across India,
                  Nexobots ensures consistent service delivery for multi-branch
                  organizations.
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

