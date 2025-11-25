"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import Partners from "@/components/Partners";
import Image from "next/image";

// Icon Components
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

const industries = [
  {
    id: "corporate",
    title: "Corporate & Enterprise",
    subtitle: "Empowering enterprises with secure, scalable, and future-ready IT infrastructure.",
    image: "/hero-industries-1e0a14.png",
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
  {
    id: "education",
    title: "Education & Research",
    subtitle: "Creating connected, secure, and tech-driven learning environments.",
    image: "/industry-education.png",
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
    id: "healthcare",
    title: "Healthcare & Pharma",
    subtitle: "Securing sensitive data, optimizing patient care, and powering research innovation.",
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
    id: "retail",
    title: "Retail & Hospitality",
    subtitle: "Driving customer experience, operational efficiency, and secure transactions.",
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
    id: "realestate",
    title: "Real Estate & Smart Infrastructure",
    subtitle: "Building intelligent, connected, and secure spaces for modern living and working.",
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
] as const;

export default function IndustriesPage() {
  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative isolate min-h-[791px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-industries-new.png"
            alt="Industries we serve"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-[1]" aria-hidden="true" />
        <div
          className="absolute bg-black z-[1]"
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
          <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-[72px]">
            <h1
              className="font-['TASA_Orbiter'] text-white text-[32px] md:text-[40px] lg:text-[48px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.494",
                maxWidth: "1027px",
                position: "relative",
                zIndex: 20,
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              Empowering Every Industry with Smart, Secure, and Scalable
              Technology
            </h1>
            <button 
              className="mt-[67px] flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-white/10 relative z-20"
              style={{
                width: "243px",
                height: "67px",
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
            </button>
          </div>
        </div>
      </section>

      {/* Below Hero Section */}
      <section
        className="flex items-center justify-center px-6 md:px-12 lg:px-[72px]"
        style={{
          minHeight: "261px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] py-[71px]">
          <p
            className="font-['TASA_Orbiter'] text-center text-black text-[20px] md:text-[26px] lg:text-[32px]"
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
          className="bg-[#F8F8F8] px-6 py-20 md:px-12 md:py-24 lg:px-[72px] lg:py-[120px]"
          style={{
            minHeight: "1333px",
          }}
        >
          <div className="mx-auto w-full max-w-[1440px]">
            {/* Industry Header */}
            <div className="mb-12 md:mb-16 lg:mb-20">
              <h2
                className="font-['TASA_Orbiter'] text-black text-[32px] md:text-[40px] lg:text-[64px]"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.22",
                  maxWidth: "788px",
                  marginBottom: "30px",
                }}
              >
                {industry.title}
              </h2>
              <p
                className="font-['TASA_Orbiter'] text-black text-[18px] md:text-[20px] lg:text-[24px]"
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
            <div className="grid gap-12 lg:grid-cols-[992px_442px]">
              {/* Left: Image + What We Deliver */}
              <div className="space-y-12">
                <div
                  className="relative overflow-hidden rounded-[13px]"
                  style={{
                    width: "100%",
                    maxWidth: "992px",
                    height: "474px",
                  }}
                >
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 992px"
                  />
                </div>
                <div className="space-y-4">
                  <h3
                    className="font-['TASA_Orbiter'] text-black text-[28px] md:text-[32px] lg:text-[40px]"
                    style={{
                      fontWeight: 600,
                      lineHeight: "1.08",
                    }}
                  >
                    What We Deliver
                  </h3>
                  <p
                    className="font-['TASA_Orbiter'] text-black text-[18px] md:text-[20px] lg:text-[22px]"
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
              <div className="space-y-6 md:space-y-8">
                <h3
                  className="font-['TASA_Orbiter'] text-black text-[24px] md:text-[28px] lg:text-[32px]"
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
                  <div className="space-y-2" style={{ paddingLeft: "32px" }}>
                    {industry.services.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: i === 0 ? "20px" : "16px",
                          fontWeight: 600,
                          lineHeight: "1.08",
                          paddingBottom: "8px",
                        }}
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className="flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-white transition-all hover:bg-gray-50"
                  style={{
                    width: "100%",
                    maxWidth: "442px",
                    height: "45px",
                    padding: "12px 24px",
                  }}
                >
                  <span
                    className="font-['Manrope'] text-black"
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
            <div 
              className="flex flex-wrap justify-start mt-12 md:mt-16 lg:mt-20"
              style={{
                gap: "24px",
              }}
            >
              {industry.features.map((feature, i) => (
                <article
                  key={i}
                  className="flex flex-col rounded-[9px] border border-transparent bg-white"
                  style={{
                    width: "100%",
                    maxWidth: "318px",
                    padding: "24px",
                    gap: "20px",
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
                    {getIconComponent(feature.icon)}
                  </div>
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
                  <p
                    className="font-['TASA_Orbiter']"
                    style={{
                      fontSize: "15px",
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
      <Partners />

      {/* CTA Section */}
      <section
        className="flex items-center justify-center px-6 py-24 md:px-12 md:py-24 lg:px-[72px] lg:py-[120px]"
        style={{
          minHeight: "723px",
          backgroundColor: "#000000",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] text-center">
          <h2
            className="font-['TASA_Orbiter'] text-white text-[32px] md:text-[40px] lg:text-[64px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "1148px",
              margin: "0 auto",
            }}
          >
            Ready to Transform Your Industry with Smart, Secure, and Scalable
            IT Solutions?
          </h2>
          <p
            className="font-['Manrope'] text-white text-[16px] md:text-[18px] lg:text-[20px]"
            style={{
              fontWeight: 400,
              lineHeight: "1.4",
              maxWidth: "854px",
              margin: "0 auto",
              marginTop: "32px",
              opacity: 0.8,
            }}
          >
            Let&apos;s discuss how Nexobots can deliver tailored technology
            infrastructure that powers your organization&apos;s growth, security,
            and digital transformation.
          </p>
          <button
            className="mx-auto mt-12 flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-white transition-all hover:bg-gray-50"
            style={{
              width: "auto",
              height: "45px",
              padding: "12px 24px",
            }}
          >
            <span
              className="font-['Manrope'] text-black"
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
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}

