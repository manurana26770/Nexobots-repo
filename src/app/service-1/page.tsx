import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const benefitCards = [
  {
    title: "Vendor-Agnostic Expertise",
    description:
      "Our multi-OEM partnerships (Cisco, D-Link, Fortinet, Palo Alto, Aruba, and more) ensure unbiased technology recommendations.",
  },
  {
    title: "Certified Engineering Team",
    description:
      "OEM-certified specialists ensure seamless integration across complex IT environments.",
  },
  {
    title: "End-to-End Project Management",
    description:
      "From design to deployment and beyond, we manage every stage of your infrastructure project.",
  },
  {
    title: "Proven Methodology",
    description:
      "ITIL-based processes and structured frameworks ensure predictable outcomes and reduced downtime.",
  },
  {
    title: "Future-Ready Solutions",
    description:
      "Scalable architectures designed to evolve with AI, IoT, and next-gen technologies.",
  },
  {
    title: "Pan-India Delivery Capability",
    description:
      "With a presence in 180+ cities, we ensure consistent and timely project execution nationwide.",
  },
] as const;

const consultingServices = [
  "IT assessment & gap analysis",
  "Network, data center & cloud architecture design",
  "Security posture review & compliance consulting",
  "Technology roadmap development",
  "TCO optimization & resource planning",
] as const;

const integrationServices = [
  "Multi-vendor hardware & software integration",
  "Structured cabling & networking",
  "Enterprise application & database integration",
  "Legacy system migration & modernization",
  "End-to-end testing & commissioning",
] as const;

export default function Service1Page() {
  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative">
            {/* Background Images */}
            <div className="absolute right-0 top-0 h-[400px] w-[600px] opacity-20">
              <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-transparent to-white/10" />
            </div>

            <div className="relative z-10 max-w-[900px]">
              <h1 className="mb-8 font-['TASA_Orbiter'] text-[48px] font-semibold leading-[1.3] text-white md:text-[56px] lg:text-[64px]">
                Build Smarter. Integrate Seamlessly. Perform Reliably.
              </h1>
              <p className="mb-12 font-['Manrope'] text-[18px] font-normal leading-[1.5] text-white md:text-[20px]">
                Design, deploy, and optimize your IT ecosystem with Nexobots'
                Infrastructure Consulting & System Integration services.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 rounded-[75px] border border-white/30 bg-white px-[29px] py-5 text-[15px] font-semibold uppercase tracking-[0.02em] text-black transition hover:bg-gray-100"
              >
                Talk to an Expert
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  className="h-[20px] w-[20px]"
                >
                  <path
                    d="M20.5 0L20.5 41M20.5 41L41 20.5M20.5 41L0 20.5"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Offerings */}
      <section className="bg-[#F8F8F8] px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-16 text-center font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.3] text-black md:text-[48px] lg:text-[56px]">
            Our Core Offerings
          </h2>
        </div>
      </section>

      {/* Why Choose Nexobots */}
      <section className="bg-[#F8F8F8] px-6 py-12 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-16 text-center font-['TASA_Orbiter'] text-[36px] font-semibold leading-[1.3] text-black md:text-[40px] lg:text-[48px]">
            Why Choose Nexobots for IT Infrastructure Consulting & System
            Integration
          </h2>

          {/* Benefit Cards Grid */}
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefitCards.map((card, index) => (
              <div
                key={index}
                className="rounded-[21px] bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-6 flex h-[76px] w-[76px] items-center justify-center rounded-[15px] border border-[#E9E9E9]">
                  <div className="h-[50px] w-[50px] rounded-full bg-[#E11E24]/10" />
                </div>
                <h3 className="mb-4 font-['Manrope'] text-[20px] font-bold leading-[1.3] text-black md:text-[22px]">
                  {card.title}
                </h3>
                <p className="font-['Manrope'] text-[16px] font-normal leading-[1.6] text-[#696969]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative h-[300px] overflow-hidden rounded-[18px] bg-gradient-to-br from-blue-100 to-purple-100"></div>
            <div className="relative h-[300px] overflow-hidden rounded-[18px] bg-gradient-to-br from-purple-100 to-pink-100"></div>
            <div className="relative h-[300px] overflow-hidden rounded-[18px] bg-gradient-to-br from-pink-100 to-orange-100"></div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="bg-[#F8F8F8] px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <Link
              href="#contact"
              className="mb-12 inline-flex items-center gap-3 rounded-[75px] border border-white/30 bg-black px-[29px] py-4 text-[15px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-gray-800"
            >
              Get In Touch
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                className="h-[20px] w-[20px]"
              >
                <path
                  d="M20.5 0L20.5 41M20.5 41L41 20.5M20.5 41L0 20.5"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </Link>
          </div>

          <h2 className="mb-8 font-['TASA_Orbiter'] text-[36px] font-semibold leading-[1.3] text-black md:text-[40px]">
            Why IT Infrastructure Consulting & System Integration Matters
          </h2>

          <p className="mb-6 font-['Manrope'] text-[18px] font-normal leading-[1.7] text-black md:text-[20px]">
            As technology evolves, enterprises face the dual challenge of
            managing complex systems while ensuring seamless interoperability
            and scalability. Strategic consulting and expert integration
            transform IT infrastructure into a business enabler — ensuring every
            component, from networks to data centers, works together
            efficiently.
          </p>

          <p className="font-['Manrope'] text-[18px] font-normal leading-[1.7] text-black md:text-[20px]">
            With Nexobots as your technology partner, you gain deep expertise
            across multi-vendor environments and a structured roadmap that
            simplifies modernization. We bridge the gap between design and
            deployment — ensuring your IT ecosystem is not just functional, but
            future-proof.
          </p>
        </div>
      </section>

      {/* IT Infrastructure Consulting Detail */}
      <section className="bg-[#F8F8F8] px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[21px] bg-white p-12 shadow-sm">
            <h2 className="mb-6 font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.3] text-black md:text-[48px]">
              IT Infrastructure Consulting
            </h2>

            <p className="mb-12 max-w-[900px] font-['Manrope'] text-[18px] font-normal leading-[1.7] text-black">
              A strategic approach to infrastructure planning that ensures
              scalability, performance, and alignment with business objectives.
              We assess your existing environment, identify gaps, and design
              architecture that supports digital transformation.
            </p>

            {/* Icon Placeholder */}
            <div className="mb-12 h-[200px] w-full rounded-[13px] bg-gradient-to-r from-gray-100 to-gray-200"></div>

            {/* Key Services */}
            <div className="mb-12">
              <h3 className="mb-6 font-['Manrope'] text-[24px] font-bold leading-[1.3] text-black">
                Key Services
              </h3>
              <div className="space-y-4">
                {consultingServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-[55px] border border-[#E5E5E5] bg-white px-8 py-4"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#E11E24]"></div>
                    <p className="font-['Manrope'] text-[16px] font-semibold text-black">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="rounded-[20px] border border-[#E5E5E5] bg-[#F8F8F8] p-8">
              <p className="mb-2 font-['Manrope'] text-[14px] font-bold uppercase tracking-wider text-black">
                Outcome
              </p>
              <p className="font-['TASA_Orbiter'] text-[20px] font-semibold leading-[1.4] text-black md:text-[24px]">
                Smarter IT investments, enhanced reliability, and future-ready
                scalability.
              </p>
              <Link
                href="#contact"
                className="mt-6 inline-flex items-center gap-3 rounded-[75px] border border-white/30 bg-black px-[29px] py-4 text-[15px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-gray-800"
              >
                Let&apos;s Discuss Needs
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  className="h-[20px] w-[20px]"
                >
                  <path
                    d="M20.5 0L20.5 41M20.5 41L41 20.5M20.5 41L0 20.5"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* System Integration Services Detail */}
      <section className="bg-[#F8F8F8] px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[21px] bg-white p-12 shadow-sm">
            <h2 className="mb-6 font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.3] text-black md:text-[48px]">
              System Integration Services
            </h2>

            <p className="mb-12 max-w-[900px] font-['Manrope'] text-[18px] font-normal leading-[1.7] text-black">
              Seamlessly connect hardware, software, and network systems into
              one unified, intelligent ecosystem. Our certified engineers
              integrate multi-vendor technologies to deliver interoperable and
              optimized infrastructure.
            </p>

            {/* Icon Placeholder */}
            <div className="mb-12 h-[200px] w-full rounded-[13px] bg-gradient-to-r from-blue-100 to-purple-100"></div>

            {/* Key Services */}
            <div className="mb-12">
              <h3 className="mb-6 font-['Manrope'] text-[24px] font-bold leading-[1.3] text-black">
                Key Services
              </h3>
              <div className="space-y-4">
                {integrationServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-[55px] border border-[#E5E5E5] bg-white px-8 py-4"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#E11E24]"></div>
                    <p className="font-['Manrope'] text-[16px] font-semibold text-black">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="rounded-[20px] border border-[#E5E5E5] bg-[#F8F8F8] p-8">
              <p className="mb-2 font-['Manrope'] text-[14px] font-bold uppercase tracking-wider text-black">
                Outcome
              </p>
              <p className="font-['TASA_Orbiter'] text-[20px] font-semibold leading-[1.4] text-black md:text-[24px]">
                Seamless, high-performing systems that enhance efficiency and
                reduce operational complexity.
              </p>
              <Link
                href="#contact"
                className="mt-6 inline-flex items-center gap-3 rounded-[75px] border border-white/30 bg-black px-[29px] py-4 text-[15px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-gray-800"
              >
                Start Your Integration Project
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  className="h-[20px] w-[20px]"
                >
                  <path
                    d="M20.5 0L20.5 41M20.5 41L41 20.5M20.5 41L0 20.5"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
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

