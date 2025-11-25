"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Partners from "@/components/Partners";
import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    id: "realestate",
    title: "Real Estate & Smart Infrastructure",
    subtitle: "Building intelligent, connected, and secure spaces for modern living and working.",
    image: "/industry-realestate-hero.png",
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
        description: "High-speed backbone networks for buildings, estates, and townships with seamless Wi-Fi and IoT connectivity.",
      },
      {
        icon: "monitor",
        title: "Intelligent Surveillance",
        description: "Integrated CCTV, ANPR, and centralized monitoring for property-wide security and safety compliance.",
      },
      {
        icon: "finger",
        title: "Secure Access & Biometrics",
        description: "Smart access systems for residents, visitors, and facility staff with mobile or RFID authentication.",
      },
      {
        icon: "archive",
        title: "End-to-End IT Services",
        description: "Infrastructure design, implementation, and maintenance for smart buildings and control centers.",
      },
    ],
  },
  {
    id: "retail",
    title: "Retail & Hospitality",
    subtitle: "Driving customer experience, operational efficiency, and secure transactions.",
    image: "/industry-retail-hero.png",
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
        description: "Reliable Wi-Fi and secure networks for POS, guests, and back-office systems.",
      },
      {
        icon: "monitor",
        title: "Intelligent Surveillance",
        description: "CCTV and remote monitoring for stores, hotels, and restaurants.",
      },
      {
        icon: "finger",
        title: "Secure Access & Biometrics",
        description: "Smart locks, staff access, and visitor management systems.",
      },
      {
        icon: "archive",
        title: "End-to-End IT Services",
        description: "IT management for POS, reservations, loyalty, and CRM systems.",
      },
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare & Pharma",
    subtitle: "Securing sensitive data, optimizing patient care, and powering research innovation.",
    image: "/industry-healthcare-hero.png",
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
        description: "Secure, compliant, and high-availability networks for hospitals, labs, and clinics",
      },
      {
        icon: "monitor",
        title: "Intelligent Surveillance",
        description: "Monitoring systems for ICUs, pharmacies, and critical care units.",
      },
      {
        icon: "finger",
        title: "Secure Access & Biometrics",
        description: "Controlled access for OTs, pharma stores, and restricted facilities.",
      },
      {
        icon: "archive",
        title: "End-to-End IT Services",
        description: "Infrastructure for EMR, telemedicine, and research data management.",
      },
    ],
  },
  {
    id: "education",
    title: "Education & Research",
    subtitle: "Creating connected, secure, and tech-driven learning environments.",
    image: "/industry-education-hero.png",
    what: "We help institutions modernize their campuses with smart infrastructure that enhances collaboration, security, and digital learning. From classroom Wi-Fi to secure access, Nexobots delivers connected experiences for students, faculty, and researchers.",
    cta: "Let's Build a Smarter Campus",
    services: [
      "Consulting & IT Roadmaps for digital transformation in education.",
      "System Integration for LMS, library, and cloud platforms.",
      "Comprehensive AMC ensuring seamless academic operations.",
      "Virtualization Support for labs, learning platforms, and research networks.",
    ],
    features: [
      {
        icon: "wifi",
        title: "Smart Network Infrastructure",
        description: "High-speed wired and wireless networks across classrooms, labs, and hostels.",
      },
      {
        icon: "monitor",
        title: "Intelligent Surveillance",
        description: "Monitoring systems for exam halls, campuses, and student facilities.",
      },
      {
        icon: "finger",
        title: "Secure Access & Biometrics",
        description: "Attendance, hostel entry, and visitor management using smart authentication.",
      },
      {
        icon: "archive",
        title: "End-to-End IT Services",
        description: "Implementation and support for e-learning and research environments.",
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate & Enterprise",
    subtitle: "Empowering enterprises with secure, scalable, and future-ready IT infrastructure.",
    image: "/industry-corporate-hero.png",
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
        description: "Robust, enterprise-grade networks with secure switching, firewalls, and optimized Wi-Fi.",
      },
      {
        icon: "monitor",
        title: "Intelligent Surveillance",
        description: "IP-based CCTV, video management systems, and remote monitoring for complete visibility.",
      },
      {
        icon: "finger",
        title: "Secure Access & Biometrics",
        description: "Biometric and RFID-based access solutions for employees and visitors.",
      },
      {
        icon: "archive",
        title: "End-to-End IT Services",
        description: "From planning to management, ensure business continuity and performance.",
      },
    ],
  },
] as const;

// Icon Components matching Figma
const WifiIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 9L2 10C5.5 6.5 10.5 6.5 14 10L15 9C10.5 4.5 3.5 4.5 1 9ZM5 13L6 14C7.5 12.5 9.5 12.5 11 14L12 13C9.5 10.5 4.5 10.5 5 13ZM9 17L12 20L15 17C13.5 15.5 10.5 15.5 9 17Z" fill="#E11E24"/>
  </svg>
);

const MonitorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#E11E24" strokeWidth="2" fill="none"/>
    <path d="M8 21H16" stroke="#E11E24" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 17V21" stroke="#E11E24" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const FingerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C10.5 2 9.5 3 9.5 4.5V9.5C9.5 10.5 10.5 11.5 11.5 11.5C12.5 11.5 13.5 10.5 13.5 9.5V4.5C13.5 3 12.5 2 12 2Z" fill="#E11E24"/>
    <path d="M12 12.5C10.5 12.5 9.5 13.5 9.5 15V20C9.5 21.5 10.5 22.5 12 22.5C13.5 22.5 14.5 21.5 14.5 20V15C14.5 13.5 13.5 12.5 12 12.5Z" fill="#E11E24"/>
  </svg>
);

const ArchiveIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="4" rx="1" fill="#E11E24"/>
    <path d="M4 8V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V8H4Z" fill="#E11E24"/>
    <path d="M9 12H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const getIconComponent = (icon: string) => {
  switch (icon) {
    case "wifi":
      return <WifiIcon />;
    case "monitor":
      return <MonitorIcon />;
    case "finger":
      return <FingerIcon />;
    case "archive":
      return <ArchiveIcon />;
    default:
      return null;
  }
};

export default function IndustriesPage() {
  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Hero Section - Exact from Figma */}
      <section className="relative h-[804px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/industries-hero-bg.png"
            alt="Industries hero background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Blur overlay */}
        <div 
          className="absolute bg-black"
          style={{
            width: "1883px",
            height: "417px",
            left: "-212px",
            top: "-157px",
            filter: "blur(218px)",
            opacity: 0.91,
          }}
          aria-hidden="true"
        />
        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-[1440px] px-[117px]">
            <h1
              className="font-['TASA_Orbiter'] text-white"
              style={{
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "1.494",
                maxWidth: "1027px",
                marginBottom: "33px",
              }}
            >
              Empowering Every Industry with Smart, Secure, and Scalable Technology
            </h1>
            <Link
              href="/contact"
              className="inline-flex h-[67px] w-[253px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
              style={{
                padding: "20px 29px",
              }}
            >
              <span
                className="font-['Manrope'] text-white"
                style={{
                  fontSize: "20px",
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
                className="h-[41px] w-[41px]"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Below Hero Section - Left Aligned */}
      <section
        className="flex items-center"
        style={{
          minHeight: "261px",
          backgroundColor: "#F8F8F8",
          padding: "71px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[92px]">
          <p
            className="font-['TASA_Orbiter'] text-left text-black"
            style={{
              fontSize: "32px",
              fontWeight: 700,
              lineHeight: "1.318",
              maxWidth: "1236px",
            }}
          >
            From global enterprises to education, healthcare, and hospitality — Nexobots Technologies enables organizations to stay connected, protected, and future-ready through intelligent IT and security infrastructure.
          </p>
        </div>
      </section>

      {/* Corporate & Enterprise Featured Section - Exact from Figma */}
      <section
        className="bg-[#F8F8F8]"
        style={{
          minHeight: "1333px",
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[72px]">
          {/* Industry Header */}
          <div style={{ marginBottom: "109px" }}>
            <h2
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "788px",
                marginBottom: "9px",
              }}
            >
              Corporate & Enterprise
            </h2>
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.08",
                maxWidth: "919px",
                marginBottom: "28px",
              }}
            >
              Empowering enterprises with secure, scalable, and future-ready IT infrastructure.
            </p>
            {/* What We Deliver text - right after subtitle */}
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "0.98",
                maxWidth: "923px",
                marginLeft: "2px",
              }}
            >
              We help businesses build reliable, high-performance IT environments that connect teams, secure data, and support long-term growth. Our expertise spans structured cabling, networking, surveillance, and managed IT services — designed to keep enterprise operations running efficiently and securely.
            </p>
          </div>

          {/* Image + Content Layout - Exact from Figma */}
          <div className="relative mb-[45px]">
            {/* Top Row: Image + How We Support You */}
            <div className="flex items-start gap-[33px] mb-[28px]">
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[13px] flex-shrink-0"
                style={{
                  width: "992px",
                  height: "474px",
                  marginLeft: "-98px",
                }}
              >
                <Image
                  src="/industry-corporate-featured.png"
                  alt="Corporate & Enterprise"
                  fill
                  className="object-cover"
                  sizes="992px"
                />
              </div>

              {/* How We Support You - Right side */}
              <div className="flex-shrink-0" style={{ width: "442px" }}>
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[51px]"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  How We Support You
                </h3>

                {/* Services List with Progress Bar */}
                <div className="relative mb-[45px]" style={{ width: "442px", height: "288px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5.29px",
                      height: "288px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5.29px",
                      height: "61px",
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div className="space-y-[8px]" style={{ paddingLeft: "31.72px", paddingTop: "7.65px" }}>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "410.28px",
                        height: "80px",
                      }}
                    >
                      Strategic IT Infrastructure Consulting for scalable enterprise systems.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "410.28px",
                        height: "73px",
                      }}
                    >
                      System Integration for seamless network and software interoperability.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "410.28px",
                        height: "73px",
                      }}
                    >
                      AMC & Support with proactive monitoring and guaranteed uptime.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "410.28px",
                        height: "39px",
                      }}
                    >
                      Cloud & Virtualization solutions for efficiency and hybrid environments.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="inline-flex h-[45px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                  style={{
                    width: "339px",
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
                    Let's Discuss Your Enterprise Needs
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

          {/* What We Deliver Heading - Above Features Grid */}
          <h3
            className="font-['TASA_Orbiter'] text-black"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "43.20px",
              color: "#000000",
              marginTop: "85px",
              marginBottom: "28px",
            }}
          >
            What We Deliver
          </h3>

          {/* Features Grid - Exact from Figma */}
          <div
            className="flex items-start"
            style={{
              gap: "18px",
              width: "1300px",
              marginLeft: "68px",
            }}
          >
            {[
              {
                icon: "wifi",
                title: "Smart Network Infrastructure",
                description: "Robust, enterprise-grade networks with secure switching, firewalls, and optimized Wi-Fi.",
              },
              {
                icon: "monitor",
                title: "Intelligent Surveillance",
                description: "IP-based CCTV, video management systems, and remote monitoring for complete visibility.",
              },
              {
                icon: "finger",
                title: "Secure Access & Biometrics",
                description: "Biometric and RFID-based access solutions for employees and visitors.",
              },
              {
                icon: "archive",
                title: "End-to-End IT Services",
                description: "From planning to management, ensure business continuity and performance.",
              },
            ].map((feature, i) => (
              <article
                key={i}
                className="flex flex-col rounded-[9px] bg-white flex-shrink-0"
                style={{
                  width: "309.66px",
                  padding: "21px 24px",
                  gap: "20px",
                }}
              >
                {/* Icon Container */}
                <div
                  className="flex items-center justify-center rounded-[6px]"
                  style={{
                    width: "31px",
                    height: "31px",
                    backgroundColor: "#F8F8F8",
                  }}
                >
                  {getIconComponent(feature.icon)}
                </div>
                
                {/* Title */}
                <h4
                  className="font-['TASA_Orbiter'] text-black"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  {feature.title}
                </h4>
                
                {/* Description */}
                <p
                  className="font-['TASA_Orbiter']"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "1.08",
                    color: "#A4A4A4",
                    height: "53px",
                  }}
                >
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Research Section - Exact from Figma */}
      <section
        className="bg-[#F8F8F8]"
        style={{
          minHeight: "1333px",
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[72px]">
          {/* Industry Header */}
          <div style={{ marginBottom: "109px" }}>
            <h2
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "788px",
                marginBottom: "9px",
              }}
            >
              Education & Research
            </h2>
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.08",
                maxWidth: "919px",
                marginBottom: "28px",
              }}
            >
              Creating connected, secure, and tech-driven learning environments.
            </p>
            {/* What We Deliver text - right after subtitle */}
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "0.98",
                maxWidth: "923px",
                marginLeft: "2px",
              }}
            >
              We help institutions modernize their campuses with smart infrastructure that enhances collaboration, security, and digital learning. From classroom Wi-Fi to secure access, Nexobots delivers connected experiences for students, faculty, and researchers.
            </p>
          </div>

          {/* Image + Content Layout - Exact from Figma */}
          <div className="relative mb-[45px]">
            {/* Top Row: Image + How We Support You */}
            <div className="flex items-start gap-[33px] mb-[28px]">
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[13px] flex-shrink-0"
                style={{
                  width: "893px",
                  height: "474px",
                  marginLeft: "-98px",
                }}
              >
                <Image
                  src="/industry-education-section.png"
                  alt="Education & Research"
                  fill
                  className="object-cover"
                  sizes="893px"
                />
              </div>

              {/* How We Support You - Right side */}
              <div className="flex-shrink-0" style={{ width: "418px" }}>
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[51px]"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  How We Support You
                </h3>

                {/* Services List with Progress Bar */}
                <div className="relative mb-[45px]" style={{ width: "418px", height: "288px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5px",
                      height: "288px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5px",
                      height: "61px",
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div className="space-y-[8px]" style={{ paddingLeft: "30px", paddingTop: "7.65px" }}>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "80px",
                      }}
                    >
                      Consulting & IT Roadmaps for digital transformation in education.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                      }}
                    >
                      System Integration for LMS, library, and cloud platforms.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                      }}
                    >
                      Comprehensive AMC ensuring seamless academic operations.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "39px",
                      }}
                    >
                      Virtualization Support for labs, learning platforms, and research networks.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="inline-flex h-[45px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                  style={{
                    width: "286px",
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
                    Let's Build a Smarter Campus
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

          {/* What We Deliver Heading - Above Features Grid */}
          <h3
            className="font-['TASA_Orbiter'] text-black"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "43.20px",
              color: "#000000",
              marginTop: "85px",
              marginBottom: "28px",
            }}
          >
            What We Deliver
          </h3>

          {/* Features Grid - Exact from Figma */}
          <div
            className="flex items-start"
            style={{
              gap: "18px",
              width: "1300px",
              marginLeft: "68px",
            }}
          >
            {[
              {
                icon: "wifi",
                title: "Smart Network Infrastructure",
                description: "High-speed wired and wireless networks across classrooms, labs, and hostels.",
              },
              {
                icon: "monitor",
                title: "Intelligent Surveillance",
                description: "Monitoring systems for exam halls, campuses, and student facilities.",
              },
              {
                icon: "finger",
                title: "Secure Access & Biometrics",
                description: "Attendance, hostel entry, and visitor management using smart authentication.",
              },
              {
                icon: "archive",
                title: "End-to-End IT Services",
                description: "Implementation and support for e-learning and research environments.",
              },
            ].map((feature, i) => (
              <article
                key={i}
                className="flex flex-col rounded-[9px] bg-white flex-shrink-0"
                style={{
                  width: "309.66px",
                  padding: "21px 24px",
                  gap: "20px",
                }}
              >
                {/* Icon Container */}
                <div
                  className="flex items-center justify-center rounded-[6px]"
                  style={{
                    width: "31px",
                    height: "31px",
                    backgroundColor: "#F8F8F8",
                  }}
                >
                  {getIconComponent(feature.icon)}
                </div>
                
                {/* Title */}
                <h4
                  className="font-['TASA_Orbiter'] text-black"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  {feature.title}
                </h4>
                
                {/* Description */}
                <p
                  className="font-['TASA_Orbiter']"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "1.08",
                    color: "#A4A4A4",
                    height: "53px",
                  }}
                >
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare & Pharma Section - Exact from Figma */}
      <section
        className="bg-[#F8F8F8]"
        style={{
          minHeight: "1333px",
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[72px]">
          {/* Industry Header */}
          <div style={{ marginBottom: "109px" }}>
            <h2
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "788px",
                marginBottom: "9px",
              }}
            >
              Healthcare & Pharma
            </h2>
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.08",
                maxWidth: "919px",
                marginBottom: "28px",
              }}
            >
              Securing sensitive data, optimizing patient care, and powering research innovation.
            </p>
            {/* What We Deliver text - right after subtitle */}
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "0.98",
                maxWidth: "923px",
                marginLeft: "2px",
              }}
            >
              Healthcare and pharma organizations rely on technology for compliance, patient care, and R&D. Nexobots delivers resilient IT infrastructure and security solutions to safeguard data and improve operational efficiency.
            </p>
          </div>

          {/* Image + Content Layout - Exact from Figma */}
          <div className="relative mb-[45px]">
            {/* Top Row: Image + How We Support You */}
            <div className="flex items-start gap-[33px] mb-[28px]">
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[13px] flex-shrink-0"
                style={{
                  width: "992px",
                  height: "474px",
                  marginLeft: "-98px",
                }}
              >
                <Image
                  src="/industry-healthcare-section.png"
                  alt="Healthcare & Pharma"
                  fill
                  className="object-cover"
                  sizes="992px"
                />
              </div>

              {/* How We Support You - Right side */}
              <div className="flex-shrink-0" style={{ width: "418px" }}>
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[51px]"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  How We Support You
                </h3>

                {/* Services List with Progress Bar */}
                <div className="relative mb-[45px]" style={{ width: "418px", height: "288px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5px",
                      height: "288px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5px",
                      height: "61px",
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div className="space-y-[8px]" style={{ paddingLeft: "30px", paddingTop: "7.65px" }}>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "80px",
                      }}
                    >
                      Compliance-Focused IT Consulting for healthcare regulations.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                      }}
                    >
                      System Integration of EMR, PACS, and ERP systems.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                      }}
                    >
                      Round-the-Clock AMC & Support for mission-critical environments.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "39px",
                      }}
                    >
                      Cloud & Virtualization Solutions for data storage, recovery, and research continuity.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="inline-flex h-[45px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                  style={{
                    width: "262px",
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
                    Secure Your Healthcare IT
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

          {/* What We Deliver Heading - Above Features Grid */}
          <h3
            className="font-['TASA_Orbiter'] text-black"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "43.20px",
              color: "#000000",
              marginTop: "85px",
              marginBottom: "28px",
            }}
          >
            What We Deliver
          </h3>

          {/* Features Grid - Exact from Figma */}
          <div
            className="flex items-start"
            style={{
              gap: "18px",
              width: "1300px",
              marginLeft: "68px",
            }}
          >
            {[
              {
                icon: "wifi",
                title: "Smart Network Infrastructure",
                description: "Secure, compliant, and high-availability networks for hospitals, labs, and clinics",
              },
              {
                icon: "monitor",
                title: "Intelligent Surveillance",
                description: "Monitoring systems for ICUs, pharmacies, and critical care units.",
              },
              {
                icon: "finger",
                title: "Secure Access & Biometrics",
                description: "Controlled access for OTs, pharma stores, and restricted facilities.",
              },
              {
                icon: "archive",
                title: "End-to-End IT Services",
                description: "Infrastructure for EMR, telemedicine, and research data management.",
              },
            ].map((feature, i) => (
              <article
                key={i}
                className="flex flex-col rounded-[9px] bg-white flex-shrink-0"
                style={{
                  width: "309.66px",
                  padding: "21px 24px",
                  gap: "20px",
                }}
              >
                {/* Icon Container */}
                <div
                  className="flex items-center justify-center rounded-[6px]"
                  style={{
                    width: "31px",
                    height: "31px",
                    backgroundColor: "#F8F8F8",
                  }}
                >
                  {getIconComponent(feature.icon)}
                </div>
                
                {/* Title */}
                <h4
                  className="font-['TASA_Orbiter'] text-black"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  {feature.title}
                </h4>
                
                {/* Description */}
                <p
                  className="font-['TASA_Orbiter']"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "1.08",
                    color: "#A4A4A4",
                    height: "53px",
                  }}
                >
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Retail & Hospitality Section - Exact from Figma */}
      <section
        className="bg-[#F8F8F8]"
        style={{
          minHeight: "1333px",
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[72px]">
          {/* Industry Header */}
          <div style={{ marginBottom: "109px" }}>
            <h2
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "563px",
                marginBottom: "9px",
              }}
            >
              Retail & Hospitality
            </h2>
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.08",
                maxWidth: "919px",
                marginBottom: "28px",
              }}
            >
              Driving customer experience, operational efficiency, and secure transactions.
            </p>
            {/* What We Deliver text - right after subtitle */}
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "0.98",
                maxWidth: "923px",
                marginLeft: "2px",
              }}
            >
              Retail and hospitality businesses thrive on speed, reliability, and customer trust. Nexobots enables these industries with IT and security infrastructure that connects locations, enhances safety, and streamlines guest experiences.
            </p>
          </div>

          {/* Image + Content Layout - Exact from Figma */}
          <div className="relative mb-[45px]">
            {/* Top Row: Image + How We Support You */}
            <div className="flex items-start gap-[33px] mb-[28px]">
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[13px] flex-shrink-0"
                style={{
                  width: "992px",
                  height: "474px",
                  marginLeft: "-98px",
                }}
              >
                <Image
                  src="/industry-retail-section.png"
                  alt="Retail & Hospitality"
                  fill
                  className="object-cover"
                  sizes="992px"
                />
              </div>

              {/* How We Support You - Right side */}
              <div className="flex-shrink-0" style={{ width: "418px" }}>
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[51px]"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  How We Support You
                </h3>

                {/* Services List with Progress Bar */}
                <div className="relative mb-[45px]" style={{ width: "418px", height: "288px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5px",
                      height: "288px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5px",
                      height: "61px",
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div className="space-y-[8px]" style={{ paddingLeft: "30px", paddingTop: "7.65px" }}>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "80px",
                      }}
                    >
                      IT Strategy Consulting for omnichannel and digital transformation.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                      }}
                    >
                      System Integration of POS, booking, CRM, and inventory systems.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                      }}
                    >
                      AMC & Monitoring to ensure always-on operations.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "39px",
                      }}
                    >
                      Cloud Enablement for customer data, apps, and analytics.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="inline-flex h-[45px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                  style={{
                    width: "267px",
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
                    Enhance Your Operations
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

          {/* What We Deliver Heading - Above Features Grid */}
          <h3
            className="font-['TASA_Orbiter'] text-black"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "43.20px",
              color: "#000000",
              marginTop: "85px",
              marginBottom: "28px",
            }}
          >
            What We Deliver
          </h3>

          {/* Features Grid - Exact from Figma */}
          <div
            className="flex items-start"
            style={{
              gap: "18px",
              width: "1300px",
              marginLeft: "68px",
            }}
          >
            {[
              {
                icon: "wifi",
                title: "Smart Network Infrastructure",
                description: "Reliable Wi-Fi and secure networks for POS, guests, and back-office systems.",
              },
              {
                icon: "monitor",
                title: "Intelligent Surveillance",
                description: "CCTV and remote monitoring for stores, hotels, and restaurants.",
              },
              {
                icon: "finger",
                title: "Secure Access & Biometrics",
                description: "Smart locks, staff access, and visitor management systems.",
              },
              {
                icon: "archive",
                title: "End-to-End IT Services",
                description: "IT management for POS, reservations, loyalty, and CRM systems.",
              },
            ].map((feature, i) => (
              <article
                key={i}
                className="flex flex-col rounded-[9px] bg-white flex-shrink-0"
                style={{
                  width: "309.66px",
                  padding: "21px 24px",
                  gap: "20px",
                }}
              >
                {/* Icon Container */}
                <div
                  className="flex items-center justify-center rounded-[6px]"
                  style={{
                    width: "31px",
                    height: "31px",
                    backgroundColor: "#F8F8F8",
                  }}
                >
                  {getIconComponent(feature.icon)}
                </div>
                
                {/* Title */}
                <h4
                  className="font-['TASA_Orbiter'] text-black"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  {feature.title}
                </h4>
                
                {/* Description */}
                <p
                  className="font-['TASA_Orbiter']"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "1.08",
                    color: "#A4A4A4",
                    height: "53px",
                  }}
                >
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate & Smart Infrastructure Section - Exact from Figma */}
      <section
        className="bg-[#F8F8F8]"
        style={{
          minHeight: "1333px",
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[72px]">
          {/* Industry Header */}
          <div style={{ marginBottom: "109px" }}>
            <h2
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1009px",
                marginBottom: "9px",
              }}
            >
              Real Estate & Smart Infrastructure
            </h2>
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.08",
                maxWidth: "919px",
                marginBottom: "28px",
              }}
            >
              Building intelligent, connected, and secure spaces for modern living and working.
            </p>
            {/* What We Deliver text - right after subtitle */}
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "0.98",
                maxWidth: "923px",
                marginLeft: "2px",
              }}
            >
              From commercial complexes to residential communities, Nexobots helps real estate developers and facility managers implement cutting-edge IT and security infrastructure that enhances safety, efficiency, and digital connectivity. Our solutions turn traditional spaces into smart, future-ready environments.
            </p>
          </div>

          {/* Image + Content Layout - Exact from Figma */}
          <div className="relative mb-[45px]">
            {/* Top Row: Image + How We Support You */}
            <div className="flex items-start gap-[33px] mb-[28px]">
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[13px] flex-shrink-0"
                style={{
                  width: "992px",
                  height: "474px",
                  marginLeft: "-98px",
                }}
              >
                <Image
                  src="/industry-realestate-d966f0.png"
                  alt="Real Estate & Smart Infrastructure"
                  fill
                  className="object-cover"
                  sizes="992px"
                />
              </div>

              {/* How We Support You - Right side */}
              <div className="flex-shrink-0" style={{ width: "418px" }}>
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[51px]"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  How We Support You
                </h3>

                {/* Services List with Progress Bar */}
                <div className="relative mb-[45px]" style={{ width: "418px", height: "288px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5px",
                      height: "288px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5px",
                      height: "61px",
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div className="space-y-[8px]" style={{ paddingLeft: "30px", paddingTop: "7.65px" }}>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "80px",
                      }}
                    >
                      IT & Security Consulting for smart city, commercial, and residential projects.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                      }}
                    >
                      System Integration of surveillance, access control, fire safety, and building automation systems.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                      }}
                    >
                      AMC & Managed Support for round-the-clock maintenance and uptime.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "39px",
                      }}
                    >
                      Cloud & Virtualization Enablement for centralized monitoring and property management dashboards.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="inline-flex h-[45px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                  style={{
                    width: "262px",
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
                    Transform Your Properties
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

          {/* What We Deliver Heading - Above Features Grid */}
          <h3
            className="font-['TASA_Orbiter'] text-black"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "43.20px",
              color: "#000000",
              marginTop: "85px",
              marginBottom: "28px",
            }}
          >
            What We Deliver
          </h3>

          {/* Features Grid - Exact from Figma */}
          <div
            className="flex items-start"
            style={{
              gap: "18px",
              width: "1300px",
              marginLeft: "68px",
            }}
          >
            {[
              {
                icon: "wifi",
                title: "Smart Network Infrastructure",
                description: "High-speed backbone networks for buildings, estates, and townships with seamless Wi-Fi and IoT connectivity.",
              },
              {
                icon: "monitor",
                title: "Intelligent Surveillance",
                description: "Integrated CCTV, ANPR, and centralized monitoring for property-wide security and safety compliance.",
              },
              {
                icon: "finger",
                title: "Secure Access & Biometrics",
                description: "Smart access systems for residents, visitors, and facility staff with mobile or RFID authentication.",
              },
              {
                icon: "archive",
                title: "End-to-End IT Services",
                description: "Infrastructure design, implementation, and maintenance for smart buildings and control centers.",
              },
            ].map((feature, i) => (
              <article
                key={i}
                className="flex flex-col rounded-[9px] bg-white flex-shrink-0"
                style={{
                  width: "309.66px",
                  padding: "21px 24px",
                  gap: "20px",
                }}
              >
                {/* Icon Container */}
                <div
                  className="flex items-center justify-center rounded-[6px]"
                  style={{
                    width: "31px",
                    height: "31px",
                    backgroundColor: "#F8F8F8",
                  }}
                >
                  {getIconComponent(feature.icon)}
                </div>
                
                {/* Title */}
                <h4
                  className="font-['TASA_Orbiter'] text-black"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  {feature.title}
                </h4>
                
                {/* Description */}
                <p
                  className="font-['TASA_Orbiter']"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "1.08",
                    color: "#A4A4A4",
                    height: "53px",
                  }}
                >
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <Partners />

      {/* Closing CTA Section - Exact from Figma */}
      <section
        className="flex items-center justify-center bg-white"
        style={{
          minHeight: "723px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[146px] py-[112px] text-center">
          <h2
            className="font-['TASA_Orbiter'] text-black mx-auto mb-[37px]"
            style={{
              fontSize: "64px",
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "1148px",
              color: "#000000",
            }}
          >
            Partner with Nexobots to Transform Your Industry with Smarter IT
          </h2>
          <p
            className="font-['Manrope'] text-black mx-auto mb-[37px]"
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "1.4",
              maxWidth: "854px",
              color: "#000000",
            }}
          >
            Every industry faces unique challenges — but the right technology turns those challenges into opportunities. At Nexobots Technologies, we combine innovation, integration, and intelligence to help organizations build connected, secure, and future-ready environments.
            <br />
            <br />
            Let&apos;s collaborate to design technology solutions that empower your business and industry to thrive in the digital era.
          </p>
          <Link
            href="/contact"
            className="mx-auto inline-flex h-[45px] w-[155px] items-center justify-center gap-3 rounded-[75px] border border-black/30 bg-black transition-all hover:bg-black/90"
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
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
