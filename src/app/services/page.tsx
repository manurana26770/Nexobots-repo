"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    id: 1,
    title: "IT Infrastructure Consulting",
    description:
      "Build the backbone of your enterprise network with high-performance copper and fiber-optic cabling systems. Our structured cabling solutions ensure seamless connectivity, scalability, and compliance with global standards.",
    image: "/service-consulting.png",
    offerings: [
      "Network Architecture Design & Assessment",
      "Technology Roadmap & Deployment Planning",
      "Infrastructure Modernization Strategy",
    ],
    ctaText: "Explore Infrastructure Consulting",
  },
  {
    id: 2,
    title: "System Integration",
    description:
      "Nexobots integrates multi-vendor technologies into unified, high-performing systems.From networking and surveillance to security and communication platforms, we deliver seamless interoperability and enhanced reliability.",
    image: "/service-consulting.png", // TODO: Replace with correct service-integration.png from Figma
    offerings: [
      "Hardware & software integration",
      "Data & Communication Infrastructure Setup",
      "Network and security system integration",
    ],
    ctaText: "Explore System Integration",
  },
  {
    id: 3,
    title: "Annual Maintenance & Support (AMC)",
    description:
      "Keep your IT and security systems running at peak performance with our proactive AMC services.We offer preventive maintenance, real-time monitoring, and rapid support to minimize downtime and ensure business continuity.",
    image: "/service-amc.png",
    offerings: [
      "Preventive Maintenance & Health Checks",
      "Onsite Service & Spare Management",
      "24/7 Technical Assistance & Remote Support",
    ],
    ctaText: "Learn About AMC & Support",
  },
  {
    id: 4,
    title: "Cloud & Virtualization Support",
    description:
      "Empower your enterprise with secure, scalable, and efficient cloud operations.Our cloud and virtualization services enable easy migration, optimized workloads, and disaster recovery — ensuring flexibility and resilience.",
    image: "/service-4-intro-1-6536ac.png", // Cloud & Virtualization service image
    offerings: [
      "Cloud setup, migration & optimization",
      "Virtualization planning & deployment",
      "Backup, recovery & disaster management",
    ],
    ctaText: "Explore Cloud & Virtualization Services",
  },
] as const;


export default function ServicesPage() {
  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Hero Section */}
      <section
        className="flex items-center justify-center px-6 md:px-12"
        style={{
          minHeight: "723px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[784px_1fr]">
            {/* Left Column - Title */}
            <div>
              <h1
                className="font-['TASA_Orbiter'] text-black text-[36px] md:text-[44px] lg:text-[50px]"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.32",
                  maxWidth: "784px",
                }}
              >
                End-to-End IT Services That Power Connectivity, Security, and
                Scalability
              </h1>
            </div>

            {/* Right Column - Description + CTA */}
            <div className="flex flex-col justify-center space-y-8">
              <p
                className="font-['Manrope'] text-black text-[16px] md:text-[18px] lg:text-[20px]"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.32",
                  maxWidth: "646px",
                }}
              >
                At Nexobots Technologies, we deliver a complete suite of IT
                services designed to help enterprises stay connected, secure, and
                future-ready.
                <br />
                <br />
                From infrastructure consulting and system integration to proactive
                maintenance and cloud management, our expert-driven services ensure
                that your technology investments deliver lasting value and
                performance.
              </p>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                style={{
                  width: "253px",
                  height: "67px",
                  padding: "20px 29px",
                }}
              >
                <span
                  className="font-['Manrope'] text-white whitespace-nowrap"
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
        </div>
      </section>

      {/* Services Sections */}
      <div className="mx-auto max-w-[1440px] space-y-12 px-6 py-12 md:px-12">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              className="rounded-[21px] bg-white p-6 md:p-12"
              style={{
                minHeight: "807px",
              }}
            >
              {/* Title */}
              <h2
                className="font-['TASA_Orbiter'] text-black text-[32px] md:text-[40px] lg:text-[48px] mb-8"
                style={{
                  fontWeight: 700,
                  lineHeight: "1.366",
                  letterSpacing: "0.02em",
                }}
              >
                {service.title}
              </h2>

              {/* Content Grid */}
              <div
                className={`grid gap-8 lg:grid-cols-[630px_1fr] ${
                  !isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image with Description Overlay */}
                <div
                  className={`relative ${
                    !isEven ? "lg:order-2" : ""
                  }`}
                  style={{
                    width: "100%",
                    maxWidth: "630px",
                    height: "504px",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="rounded-[15px] object-cover"
                  />
                  <div className="absolute inset-0 rounded-[15px] bg-black/50" />
                  {/* Description Text Over Image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p
                      className="font-['Manrope'] text-white whitespace-pre-line"
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.208",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features & Button */}
                <div
                  className={`flex flex-col space-y-8 ${
                    !isEven ? "lg:order-1" : ""
                  }`}
                >
                  {/* Our Offerings Heading */}
                  <h3 
                    className="font-['Manrope'] text-black"
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: 700,
                      fontStyle: "normal",
                      fontSize: "36px",
                    }}
                  >
                    Our Offerings
                  </h3>
                  
                  {/* Offerings List */}
                  <div className="space-y-4">
                    {service.offerings.map((offering, i) => (
                      <div
                        key={i}
                        className="relative flex items-center rounded-[67px] border border-[#DADADA] bg-white pl-8 pr-6 py-4"
                        style={{
                          height: "65px",
                          maxWidth: "486px",
                        }}
                      >
                        {/* Star Icon - positioned inside the card */}
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex-shrink-0 z-10">
                          <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-[18px] w-[17px]"
                          >
                            <path
                              d="M8.5 0L10.4 6.5H17L11.3 10.5L13.2 17L8.5 13L3.8 17L5.7 10.5L0 6.5H6.6L8.5 0Z"
                              fill="#E11E24"
                            />
                          </svg>
                        </div>
                        <p
                          className="font-['Manrope'] text-black w-full"
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            lineHeight: "2.25",
                            letterSpacing: "0.02em",
                            paddingLeft: "20px",
                          }}
                        >
                          {offering}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <Link
                    href={`/service-${service.id}`}
                    className="flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black px-6 py-3 transition-all hover:bg-gray-900"
                    style={{
                      width: "348px",
                      height: "45px",
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
                      {service.ctaText}
                    </span>
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Closing CTA */}
      <section
        className="flex items-center justify-center px-6 py-24 md:px-12"
        style={{
          minHeight: "735px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] text-center">
          <h2
            className="font-['TASA_Orbiter'] text-black text-[40px] md:text-[52px] lg:text-[64px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "1148px",
              margin: "0 auto",
            }}
          >
            Partner with Nexobots for Reliable, Scalable, and Secure IT
            Operations
          </h2>

          <p
            className="mt-8 font-['Manrope'] text-black text-[16px] md:text-[18px] lg:text-[20px]"
            style={{
              fontWeight: 400,
              lineHeight: "1.4",
              maxWidth: "900px",
              margin: "0 auto",
              marginTop: "32px",
            }}
          >
            Your business deserves an IT foundation that evolves with your
            goals.
            <br />
            <br />
            At Nexobots Technologies, our expert team provides end-to-end
            services that simplify management, enhance performance, and
            protect your digital ecosystem.
            <br />
            <br />
            Let&apos;s work together to optimize your IT infrastructure and
            turn technology into your competitive advantage.
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-12 flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black px-6 py-3 transition-all hover:bg-gray-900"
            style={{
              width: "155px",
              height: "45px",
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
          </Link>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}


