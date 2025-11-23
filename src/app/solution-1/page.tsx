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
              href="#contact"
              className="inline-flex h-[45px] w-[155px] items-center justify-center rounded-[75px] border border-white/30 bg-black px-[25px] py-[12px] font-['Manrope'] text-[15px] font-semibold leading-[1.366] tracking-[0.02em] text-white transition hover:bg-gray-800"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}

