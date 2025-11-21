"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

const industries = [
  {
    id: "realestate",
    title: "Real Estate & Smart Infrastructure",
    subtitle:
      "Building intelligent, connected, and secure spaces for modern living and working.",
    image: "/industry-realestate-d966f0.png",
    what: "From commercial complexes to residential communities, Nexobots helps real estate developers and facility managers implement cutting-edge IT and security infrastructure that enhances safety, efficiency, and digital connectivity. Our solutions turn traditional spaces into smart, future-ready environments.",
    cta: "Transform Your Properties",
    services: [
      "IT & Security Consulting for smart city, commercial, and residential projects.",
      "System Integration of surveillance, access control, fire safety, and building automation systems.",
      "AMC & Managed Support for round-the-clock maintenance and uptime.",
      "Cloud & Virtualization Enablement for centralized monitoring and property management dashboards.",
    ],
    features: [
      {
        icon: "wifi",
        title: "Smart Network Infrastructure",
        description:
          "High-speed backbone networks for buildings, estates, and townships with seamless Wi-Fi and IoT connectivity.",
      },
      {
        icon: "monitor",
        title: "Intelligent Surveillance",
        description:
          "Integrated CCTV, ANPR, and centralized monitoring for property-wide security and safety compliance.",
      },
      {
        icon: "finger",
        title: "Secure Access & Biometrics",
        description:
          "Smart access systems for residents, visitors, and facility staff with mobile or RFID authentication.",
      },
      {
        icon: "archive",
        title: "End-to-End IT Services",
        description:
          "Infrastructure design, implementation, and maintenance for smart buildings and control centers.",
      },
    ],
  },
  {
    id: "retail",
    title: "Retail & Hospitality",
    subtitle:
      "Driving customer experience, operational efficiency, and secure transactions.",
    image: "/industry-retail.png",
    what: "Retail and hospitality businesses thrive on speed, reliability, and customer trust. Nexobots enables these industries with IT and security infrastructure that connects locations, enhances safety, and streamlines guest experiences.",
    cta: "Enhance Your Operations",
    services: [
      "IT Strategy Consulting for omnichannel and digital transformation.",
      "System Integration of POS, booking, CRM, and inventory systems.",
      "AMC & Monitoring to ensure always-on operations.",
      "Cloud Enablement for customer data, apps, and analytics.",
    ],
    features: [
      {
        icon: "wifi",
        title: "Smart Network Infrastructure",
        description:
          "Reliable Wi-Fi and secure networks for POS, guests, and back-office systems.",
      },
      {
        icon: "monitor",
        title: "Intelligent Surveillance",
        description:
          "CCTV and remote monitoring for stores, hotels, and restaurants.",
      },
      {
        icon: "finger",
        title: "Secure Access & Biometrics",
        description:
          "Smart locks, staff access, and visitor management systems.",
      },
      {
        icon: "archive",
        title: "End-to-End IT Services",
        description:
          "IT management for POS, reservations, loyalty, and CRM systems.",
      },
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare & Pharma",
    subtitle:
      "Securing sensitive data, optimizing patient care, and powering research innovation.",
    image: "/industry-healthcare.png",
    what: "Healthcare and pharma organizations rely on technology for compliance, patient care, and R&D. Nexobots delivers resilient IT infrastructure and security solutions to safeguard data and improve operational efficiency.",
    cta: "Secure Your Healthcare IT",
    services: [
      "Compliance-Focused IT Consulting for healthcare regulations.",
      "System Integration of EMR, PACS, and ERP systems.",
      "Round-the-Clock AMC & Support for mission-critical environments.",
      "Cloud & Virtualization Solutions for data storage, recovery, and research continuity.",
    ],
    features: [
      {
        icon: "wifi",
        title: "Smart Network Infrastructure",
        description:
          "Secure, compliant, and high-availability networks for hospitals, labs, and clinics",
      },
      {
        icon: "monitor",
        title: "Intelligent Surveillance",
        description:
          "Monitoring systems for ICUs, pharmacies, and critical care units.",
      },
      {
        icon: "finger",
        title: "Secure Access & Biometrics",
        description:
          "Controlled access for OTs, pharma stores, and restricted facilities.",
      },
      {
        icon: "archive",
        title: "End-to-End IT Services",
        description:
          "Infrastructure for EMR, telemedicine, and research data management.",
      },
    ],
  },
  {
    id: "education",
    title: "Education & Research",
    subtitle:
      "Enabling seamless learning, secure collaboration, and innovation across campuses.",
    image: "/hero-industries-1e0a14.png", // Placeholder
    what: "Educational institutions need robust, scalable, and secure technology ecosystems. Nexobots empowers schools, colleges, and research centers with modern IT infrastructure that supports digital learning, remote access, and campus-wide connectivity.",
    cta: "Build Your Smart Campus",
    services: [
      "IT Infrastructure Consulting for educational technology roadmaps.",
      "System Integration of LMS, ERP, and campus management systems.",
      "Proactive AMC & Support to ensure uptime during exams and sessions.",
      "Cloud Solutions for e-learning, research data, and collaboration tools.",
    ],
    features: [
      {
        icon: "wifi",
        title: "Smart Network Infrastructure",
        description:
          "High-speed campus networks with Wi-Fi coverage for classrooms, labs, and dormitories.",
      },
      {
        icon: "monitor",
        title: "Intelligent Surveillance",
        description:
          "CCTV and monitoring for campus security, entry points, and restricted zones.",
      },
      {
        icon: "finger",
        title: "Secure Access & Biometrics",
        description:
          "Access control for labs, libraries, and hostel facilities with biometric systems.",
      },
      {
        icon: "archive",
        title: "End-to-End IT Services",
        description:
          "Infrastructure for digital classrooms, research labs, and data centers.",
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate & Enterprise",
    subtitle:
      "Empowering enterprises with secure, scalable, and future-ready IT infrastructure.",
    image: "/hero-industries-1e0a14.png", // Placeholder
    what: "We help businesses build reliable, high-performance IT environments that connect teams, secure data, and support long-term growth. Our expertise spans structured cabling, networking, surveillance, and managed IT services — designed to keep enterprise operations running efficiently and securely.",
    cta: "Let's Discuss Your Enterprise Needs",
    services: [
      "Strategic IT Infrastructure Consulting for scalable enterprise systems.",
      "System Integration for seamless network and software interoperability.",
      "AMC & Support with proactive monitoring and guaranteed uptime.",
      "Cloud & Virtualization solutions for efficiency and hybrid environments.",
    ],
    features: [
      {
        icon: "wifi",
        title: "Smart Network Infrastructure",
        description:
          "Robust, enterprise-grade networks with secure switching, firewalls, and optimized Wi-Fi.",
      },
      {
        icon: "monitor",
        title: "Intelligent Surveillance",
        description:
          "IP-based CCTV, video management systems, and remote monitoring for complete visibility.",
      },
      {
        icon: "finger",
        title: "Secure Access & Biometrics",
        description:
          "Biometric and RFID-based access solutions for employees and visitors.",
      },
      {
        icon: "archive",
        title: "End-to-End IT Services",
        description:
          "From planning to management, ensure business continuity and performance.",
      },
    ],
  },
] as const;

export default function IndustriesPage() {
  return (
    <div className="bg-shell text-ink">
      <Navbar />

      {/* Hero Section */}
      <section className="relative isolate min-h-[791px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-industries-1e0a14.png"
            alt="Industries we serve"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute bg-black"
          style={{
            width: "1830px",
            height: "682px",
            left: "-195px",
            top: "-341px",
            filter: "blur(233.9px)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex min-h-[791px] items-center py-24">
          <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-[131px]">
            <h1
              className="font-display text-white text-[32px] md:text-[40px] lg:text-[48px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.494",
                maxWidth: "1027px",
              }}
            >
              Empowering Every Industry with Smart, Secure, and Scalable
              Technology
            </h1>
            <button className="mt-8 md:mt-12 lg:mt-[67px] flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black px-6 py-4 md:px-8 md:py-5 lg:w-[243px] lg:h-[67px] transition-all hover:bg-white/10">
              <span
                className="font-sans text-white text-base md:text-lg lg:text-[20px]"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.366",
                  letterSpacing: "0.02em",
                }}
              >
                Find Out More
              </span>
              <Image
                src="/find-out-more-arrow.svg"
                alt=""
                width={41}
                height={41}
                className="h-8 w-8 md:h-10 md:w-10 lg:h-[41px] lg:w-[41px]"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Below Hero Section */}
      <section
        className="flex items-center justify-center px-6 md:px-12"
        style={{
          minHeight: "261px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] py-12 md:py-16 lg:py-[71px]">
          <p
            className="font-display text-center text-black text-[20px] md:text-[26px] lg:text-[32px]"
            style={{
              fontWeight: 700,
              lineHeight: "1.318",
              maxWidth: "1236px",
              margin: "0 auto",
            }}
          >
            From global enterprises to education, healthcare, and hospitality —
            Nexobots Technologies enables organizations to stay connected,
            protected, and future-ready through intelligent IT and security
            infrastructure.
          </p>
        </div>
      </section>

      {/* Industry Sections */}
      {industries.map((industry) => (
        <section
          key={industry.id}
          className="bg-shell px-6 py-20 md:px-12 md:py-24 lg:py-32"
          style={{
            backgroundColor: "#F8F8F8",
            minHeight: "1333px",
          }}
        >
          <div className="mx-auto w-full max-w-[1440px]">
            {/* Industry Header */}
            <div className="mb-12 px-0 lg:px-[72px]">
              <h2
                className="font-display text-[40px] md:text-[52px] lg:text-[64px] text-black"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.22",
                  maxWidth: "788px",
                }}
              >
                {industry.title}
              </h2>
              <p
                className="mt-6 md:mt-8 lg:mt-[50px] font-display text-[20px] md:text-[22px] lg:text-[24px] text-black"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.08",
                  maxWidth: "919px",
                }}
              >
                {industry.subtitle}
              </p>
            </div>

            {/* Image + Services Grid */}
            <div className="grid gap-8 lg:grid-cols-[1fr_442px] lg:gap-12">
              {/* Left: Image + What We Deliver */}
              <div className="space-y-8 lg:space-y-12">
                <div
                  className="overflow-hidden"
                  style={{
                    borderRadius: "13px",
                    width: "100%",
                    maxWidth: "992px",
                    height: "auto",
                  }}
                >
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    width={992}
                    height={474}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="px-0 lg:px-[32px]">
                  <h3
                    className="font-display text-[32px] md:text-[36px] lg:text-[40px] text-black"
                    style={{
                      fontWeight: 600,
                      lineHeight: "1.08",
                    }}
                  >
                    What We Deliver
                  </h3>
                  <p
                    className="mt-4 md:mt-6 font-display text-[18px] md:text-[20px] lg:text-[22px] text-black"
                    style={{
                      fontWeight: 600,
                      lineHeight: "0.98",
                      maxWidth: "923px",
                    }}
                  >
                    {industry.what}
                  </p>
                </div>
              </div>

              {/* Right: How We Support You */}
              <div className="space-y-6 lg:space-y-8">
                <h3
                  className="font-display text-[28px] md:text-[30px] lg:text-[32px] text-black"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  How We Support You
                </h3>

                {/* Services List */}
                <div className="relative">
                  <div
                    className="absolute left-0 top-0 h-full"
                    style={{
                      width: "5.29px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5.29px",
                      height: "61px",
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  <div className="space-y-2 pl-8">
                    {industry.services.map((service, i) => (
                      <p
                        key={i}
                        className="font-display text-[14px] md:text-[15px] lg:text-[16px] text-black"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.08",
                          paddingBottom: i === 0 ? "8px" : "8px",
                        }}
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className="flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-white px-6 py-3 transition-all hover:bg-gray-50"
                  style={{
                    width: "auto",
                    minWidth: "300px",
                    height: "45px",
                  }}
                >
                  <span
                    className="font-sans text-black"
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      lineHeight: "1.366",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {industry.cta}
                  </span>
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mt-16 lg:mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:px-[69px]">
              {industry.features.map((feature, i) => (
                <article
                  key={i}
                  className="flex flex-col gap-5 rounded-[9px] border border-transparent bg-white p-6"
                  style={{
                    width: "100%",
                    maxWidth: "318px",
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-[6px]"
                    style={{
                      width: "31px",
                      height: "31px",
                      backgroundColor: "#F8F8F8",
                    }}
                  >
                    <div className="h-6 w-6 bg-primary/30 rounded" />
                  </div>
                  <h4
                    className="font-display text-[16px] text-black"
                    style={{
                      fontWeight: 600,
                      lineHeight: "1.08",
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="font-display text-[15px]"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.08",
                      color: "#A4A4A4",
                    }}
                  >
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Our Partners Section */}
      <section
        className="bg-shell px-6 py-20 md:px-12"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] space-y-12">
          <div className="space-y-6 text-center">
            <p
              className="font-display text-[14px] font-medium uppercase tracking-[0.4em]"
              style={{ color: "#9C9C9C" }}
            >
              Our Partners
            </p>
            <h2
              className="font-display text-[40px] md:text-[48px] lg:text-[56px] text-black"
              style={{
                fontWeight: 600,
                lineHeight: "1.3",
              }}
            >
              Trusted Technology Alliances
            </h2>
          </div>
          <div className="flex justify-center">
            <Image
              src="/partners-logos.png"
              alt="Technology partners"
              width={906}
              height={417}
              className="h-auto w-full max-w-[906px]"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="px-6 py-24 md:px-12"
        style={{
          minHeight: "723px",
          backgroundColor: "#000000",
        }}
      >
        <div className="mx-auto flex min-h-[600px] w-full max-w-[1440px] flex-col items-center justify-center space-y-12 text-center">
          <h2
            className="font-display text-white text-[40px] md:text-[52px] lg:text-[64px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "1148px",
            }}
          >
            Ready to Transform Your Industry with Smart, Secure, and Scalable
            IT Solutions?
          </h2>
          <p
            className="font-sans text-white/80 text-[16px] md:text-[18px] lg:text-[20px]"
            style={{
              fontWeight: 400,
              lineHeight: "1.4",
              maxWidth: "854px",
            }}
          >
            Let&apos;s discuss how Nexobots can deliver tailored technology
            infrastructure that powers your organization&apos;s growth, security,
            and digital transformation.
          </p>
          <button
            className="flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-white px-8 py-4 transition-all hover:bg-gray-50"
            style={{
              width: "auto",
              height: "45px",
            }}
          >
            <span
              className="font-sans text-black"
              style={{
                fontSize: "15px",
                fontWeight: 600,
                lineHeight: "1.366",
                letterSpacing: "0.02em",
              }}
            >
              Get Started — Book a Free Consultation
            </span>
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="bg-shell px-6 py-24 md:px-12"
        style={{
          minHeight: "739px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="mb-12 space-y-4 text-center">
            <p
              className="font-sans text-[14px] font-medium uppercase tracking-[0.4em]"
              style={{ color: "#707070" }}
            >
              Contact Us
            </p>
            <h2
              className="font-sans text-[28px] md:text-[32px] lg:text-[36px] text-black"
              style={{
                fontWeight: 600,
                lineHeight: "1.5",
              }}
            >
              Get in Touch
            </h2>
          </div>

          <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <label
                    className="font-sans text-[14px] text-black"
                    style={{ fontWeight: 600 }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-[#CECECE] bg-[#F2F2F2] px-4 py-3 text-base text-black outline-none transition focus:border-primary"
                    style={{ fontWeight: 500 }}
                  />
                </div>
                <div className="space-y-3">
                  <label
                    className="font-sans text-[14px] text-black"
                    style={{ fontWeight: 600 }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-[#CECECE] bg-[#F2F2F2] px-4 py-3 text-base text-black outline-none transition focus:border-primary"
                    style={{ fontWeight: 500 }}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <label
                    className="font-sans text-[14px] text-black"
                    style={{ fontWeight: 600 }}
                  >
                    Phone Number
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-[#CECECE] bg-[#F2F2F2] px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/hero-industries-1e0a14.png"
                        alt="Flag"
                        width={21}
                        height={21}
                        className="h-5 w-5 rounded"
                      />
                      <span className="text-[#4C4C4C]">▼</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="flex-1 bg-transparent text-base text-black outline-none"
                      style={{ fontWeight: 500 }}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label
                    className="font-sans text-[14px] text-black"
                    style={{ fontWeight: 600 }}
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    className="w-full rounded-2xl border border-[#CECECE] bg-[#F2F2F2] px-4 py-3 text-base text-black outline-none transition focus:border-primary"
                    style={{ fontWeight: 500 }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label
                  className="font-sans text-[14px] text-black"
                  style={{ fontWeight: 600 }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your project or requirements"
                  rows={6}
                  className="w-full rounded-2xl border border-[#CECECE] bg-[#F2F2F2] px-4 py-3 text-base text-black outline-none transition focus:border-primary"
                  style={{ fontWeight: 500, resize: "none" }}
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded border border-[#C9C9C9] bg-transparent">
                  <div className="h-4 w-4 rounded bg-primary" />
                </div>
                <label
                  className="font-sans text-[14px]"
                  style={{ fontWeight: 500, color: "#4C4C4C" }}
                >
                  I agree with Terms of Use and Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-[75px] border border-[rgba(70,70,70,0.3)] bg-black px-6 py-3 text-white transition hover:bg-gray-900"
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 300,
                    lineHeight: "0.78",
                    letterSpacing: "0.02em",
                  }}
                >
                  Submit
                </span>
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3
                  className="font-sans text-[18px] text-black"
                  style={{ fontWeight: 500 }}
                >
                  Nexobots Technologies LLP
                </h3>
                <p
                  className="mt-4 font-sans text-[16px]"
                  style={{ fontWeight: 400, color: "#4C4C4C", lineHeight: "1.5" }}
                >
                  India&apos;s leading provider of structured cabling, networking,
                  surveillance, biometric access, and managed IT services.
                </p>
              </div>
              <Image
                src="/contact-illustration.png"
                alt="Nexobots team"
                width={317}
                height={145}
                className="h-auto w-full max-w-[317px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-16 md:px-12"
        style={{
          minHeight: "633px",
          backgroundColor: "#000000",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_940px] lg:px-[103px]">
            {/* Left: Logo & Description */}
            <div className="space-y-6">
              <Image src="/logo.svg" alt="Nexobots" width={182} height={33} />
              <p
                className="font-sans text-[16px]"
                style={{
                  fontWeight: 500,
                  lineHeight: "1.3",
                  color: "#9C9C9C",
                  maxWidth: "280px",
                }}
              >
                Nexobots Technologies — Building intelligent, secure, and
                scalable infrastructure for enterprises and industries across
                India.
              </p>
              <div className="flex gap-2">
                <button
                  className="flex h-[37px] w-[41px] items-center justify-center rounded bg-[#1D1D1D]"
                  aria-label="LinkedIn"
                >
                  <div className="h-5 w-5 bg-[#98989A] rounded" />
                </button>
                <button
                  className="flex h-[37px] w-[39px] items-center justify-center rounded bg-[#1D1D1D]"
                  aria-label="Twitter"
                >
                  <div className="h-5 w-5 bg-[#98989A] rounded" />
                </button>
                <button
                  className="flex h-[37px] w-[40px] items-center justify-center rounded bg-[#1D1D1D]"
                  aria-label="Facebook"
                >
                  <div className="h-[17px] w-[17px] bg-[#98989A] rounded" />
                </button>
              </div>
            </div>

            {/* Right: Links Grid */}
            <div className="grid gap-12 md:grid-cols-4">
              <div className="space-y-6">
                <h4
                  className="font-display text-[32px] text-white"
                  style={{ fontWeight: 500 }}
                >
                  Solutions
                </h4>
                <ul className="space-y-4 font-sans text-[14px] text-[#9C9C9C]">
                  <li>Smart Network</li>
                  <li>CCTV Solutions</li>
                  <li>Access Control</li>
                  <li>IT Services</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4
                  className="font-display text-[32px] text-white"
                  style={{ fontWeight: 500 }}
                >
                  Services
                </h4>
                <ul className="space-y-4 font-sans text-[14px] text-[#9C9C9C]">
                  <li>Consulting</li>
                  <li>Integration</li>
                  <li>AMC Support</li>
                  <li>Cloud Services</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4
                  className="font-display text-[32px] text-white"
                  style={{ fontWeight: 500 }}
                >
                  Industries
                </h4>
                <ul className="space-y-4 font-sans text-[14px] text-[#9C9C9C]">
                  <li>Corporate</li>
                  <li>Education</li>
                  <li>Healthcare</li>
                  <li>Retail</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4
                  className="font-display text-[32px] text-white"
                  style={{ fontWeight: 500 }}
                >
                  Company
                </h4>
                <ul className="space-y-4 font-sans text-[14px] text-[#9C9C9C]">
                  <li>About Us</li>
                  <li>Blogs</li>
                  <li>News</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="mt-16 border-t pt-9 text-center"
            style={{
              borderColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            <p
              className="font-sans text-[16px] text-white"
              style={{ fontWeight: 400 }}
            >
              Copyright © {new Date().getFullYear()} Nexobots Technologies LLP |
              All Rights Reserved | Privacy Policy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
