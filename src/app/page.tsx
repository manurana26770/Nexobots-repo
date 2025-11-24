"use client";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const stats = [
  { value: "400+", label: "Projects Completed" },
  { value: "100+", label: "Enterprise Clients" },
  { value: "30+", label: "Technology Partnerships" },
  { value: "99%", label: "Retention Rate" },
] as const;

const services = [
  {
    id: "01",
    title: "IT Network INFRASTRUCTURE Consulting",
    description:
      "We assess, design, and optimize IT environments to align with your business goals. Our consulting expertise ensures robust, scalable, and future-ready infrastructure built on best practices and global standards.",
    bullets: [
      "Network Architecture Design & Assessment",
      "Infrastructure Modernization Strategy",
      "Technology Roadmap & Deployment Planning",
    ],
    images: ["/service-1-bullet-1.png", "/service-1-bullet-2.png", "/service-1-bullet-3.png"],
  },
  {
    id: "02",
    title: "System Integration",
    description:
      "We bring together diverse technologies, platforms, and OEM solutions into one cohesive system. From network integration to security and surveillance, we ensure seamless interoperability and peak performance.",
    bullets: [
      "Hardware & software integration",
      "Network and security system integration",
      "Data & Communication Infrastructure Setup",
    ],
    images: ["/service-2-bullet-1.png", "/service-2-bullet-2.png", "/service-2-bullet-3.png"],
  },
  {
    id: "03",
    title: "Annual Maintenance & Support (AMC)",
    description:
      "Our proactive maintenance and support services keep your systems running at peak efficiency. With scheduled inspections, rapid response, and 24/7 assistance, we minimize downtime and ensure business continuity.",
    bullets: [
      "Preventive Maintenance & Health Checks",
      "24/7 Technical Assistance & Remote Support",
      "Onsite Service & Spare Management",
    ],
    images: ["/service-3-bullet-1.png", "/service-3-bullet-2.png", "/service-3-bullet-3.png"],
  },
  {
    id: "04",
    title: "Cloud & Virtualization Support",
    description:
      "We help enterprises adopt and manage cloud environments with ease and security. From migration to optimization, our team ensures scalability, data protection, and seamless hybrid operations.",
    bullets: [
      "Cloud setup, migration & optimization",
      "Virtualization planning & deployment",
      "Backup, recovery & disaster management",
    ],
    images: ["/service-4-bullet-1.png", "/service-4-bullet-2.png", "/service-4-bullet-3.png"],
  },
] as const;

const solutions = [
  {
    title: "Smart Structured Cabling Solutions",
    blurb: "",
    image: "/solution-1.png",
  },
  {
    title: "CCTV & Intelligent Surveillance Solutions",
    blurb:
      "Timely precision, where promises meet performance, ensuring your project's success.",
    image: "/solution-2.png",
  },
  {
    title: "Biometric & Access Control Solutions",
    blurb: "",
    image: "/solution-3.png",
  },
  {
    title: "IT Infrastructure & Managed Services",
    blurb: "",
    image: "/solution-4.png",
  },
] as const;

const industries = [
  {
    title: "Corporate & Enterprises",
    summary:
      "We help organizations build robust IT and security infrastructures that enhance productivity and resilience.",
    body: "Our structured cabling, networking, and managed services ensure seamless communication and reliable performance across all business functions.",
    image: "/hero-industries-1e0a14.png",
  },
  {
    title: "Smart Infrastructure & Real Estate",
    summary:
      "We power smart buildings and real estate projects with intelligent connectivity and automation.",
    body: "From integrated surveillance to IoT-enabled access and centralized control systems, our solutions deliver safe, efficient, and future-ready properties.",
    image: "/industry-realestate-d966f0.png",
  },
  {
    title: "Healthcare & Pharma",
    summary:
      "In highly regulated environments, uptime and data protection are critical.",
    body: "Nexobots delivers secure networks, surveillance, and access systems that ensure compliance, patient privacy, and operational continuity.",
    image: "/industry-healthcare.png",
  },
  {
    title: "Retail & Hospitality",
    summary:
      "We enable customer-centric experiences with secure connectivity and efficient operations.",
    body: "Our CCTV, access control, and IT infrastructure solutions support multi-location management, monitoring, and digital engagement.",
    image: "/industry-retail.png",
  },
] as const;

const testimonials = [
  {
    quote:
      "Nexobots has transformed our office IT infrastructure from the ground up. Their structured cabling and network design brought exceptional stability and performance to our operations.",
    author: "Aarav Sharma",
    role: "IT Manager, Global Finance Corporation",
  },
  {
    quote:
      "We needed a secure, connected, and intelligent campus network — Nexobots delivered exactly that. Their surveillance and access control solutions have made management effortless.",
    author: "Kunal Rao",
    role: "Dean, Leading Educational Institution",
  },
  {
    quote:
      "In a sector where security and uptime are critical, Nexobots proved to be a dependable technology partner. Their IT managed services ensure our systems are always compliant and available.",
    author: "Siya Reddy",
    role: "Head of IT, Healthcare Group",
  },
] as const;

const blogs = [
  {
    title:
      "The Future of Enterprise Networks — Why Intelligent IT Infrastructure Matters",
    excerpt:
      "As organizations embrace digital transformation, network infrastructure plays a critical role in ensuring performance and security.Discover how intelligent cabling, scalable architectures, and proactive management can power the next generation of enterprise connectivity.",
    image: "/blog-1-image.png",
  },
  {
    title: "Smarter Surveillance — How AI is Redefining Security Operations",
    excerpt:
      "Traditional CCTV systems are evolving into intelligent surveillance networks. Learn how AI-enabled analytics, remote monitoring, and integrated security solutions are helping businesses detect threats faster and make smarter security decisions.",
    image: "/blog-1-image.png",
  },
  {
    title: "Smarter Surveillance — How AI is Redefining Security Operations",
    excerpt:
      "Traditional CCTV systems are evolving into intelligent surveillance networks. Learn how AI-enabled analytics, remote monitoring, and integrated security solutions are helping businesses detect threats faster and make smarter security decisions.",
    image: "/blog-1-image.png",
  },
] as const;

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "dark",
}: SectionHeadingProps) {
  const alignmentClasses =
    align === "center" ? "text-center mx-auto max-w-3xl" : "text-left";
  const eyebrowColor = variant === "light" ? "text-ink-soft" : "text-muted";
  const titleColor = variant === "light" ? "text-ink" : "text-foreground";
  const descriptionColor = variant === "light" ? "text-ink-soft" : "text-muted";

  return (
    <div className={`space-y-3 ${alignmentClasses}`}>
      {eyebrow ? (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.3em] ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl leading-tight md:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-base ${descriptionColor}`}>{description}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="bg-white text-ink">
      <Navbar />
      <section
        id="hero"
        className="relative isolate overflow-hidden border-b border-border/60"
      >
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.png"
            alt="Enterprise IT professionals reviewing infrastructure architecture"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(circle at 50% 98%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex min-h-[800px] max-w-[1120px] flex-col items-center justify-center gap-6 px-6 py-24 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-white/70 md:text-xs">
            Enterprise Technology Partner
          </p>
          <h1 className="font-display text-[32px] font-bold leading-[1.6] tracking-[0.02em] text-balance text-white md:text-[40px] md:leading-[1.8]">
            Empowering enterprises with end-to-end IT solutions
          </h1>
          <p className="max-w-[480px] text-balance text-[15px] leading-[1.36] tracking-[0.02em] text-white/80">
            We provide end-to-end IT and security infrastructure services for
            enterprises, campuses, and industries.
          </p>
        </div>
      </section>

      <main className="flex flex-col gap-0 pt-0 pb-0">
        <section id="solutions" className="bg-white px-6 py-[120px]">
          <div className="mx-auto w-full max-w-[1440px] space-y-[88px] text-black">
            <div className="space-y-4 text-center">
              <p className="font-['TASA_Orbiter'] text-[18px] font-medium text-[#050505]">
                Our Solutions
              </p>
              <h2 className="font-display text-[36px] font-bold leading-[1.22] text-ink">
                Comprehensive IT and security infrastructure solutions designed for
                performance, reliability, and scalability.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {solutions.map((solution) => (
                <div key={solution.title} className="flex justify-center">
                  <article
                    className="relative h-[442px] w-[303px] overflow-hidden rounded-[10px] shadow-[0_25px_60px_rgba(15,18,23,0.25)]"
                    style={{ width: "303px" }}
                  >
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/55 to-black/95" />
                    <div className="relative z-10 flex h-full flex-col justify-end p-8 text-left">
                      {solution.blurb ? (
                        <p className="mb-4 text-[15px] font-medium leading-[1.4] text-white/80">
                          {solution.blurb}
                        </p>
                      ) : null}
                      <h3 className="font-display text-[24px] font-bold uppercase tracking-[0.08em] text-white">
                        {solution.title}
                      </h3>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="metrics" className="px-0 pb-0">
          <div className="w-full border-y border-white/10 bg-gradient-to-r from-[#050505] via-[#0c0c0c] to-[#050505] px-[75px] py-[50px] text-white">
            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center border-white/10 py-8 text-center lg:border-l first:lg:border-l-0"
                >
                  <p className="font-['TASA_Orbiter'] text-[55px] font-semibold leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[14px] uppercase tracking-[0.3em] text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-6 py-[120px]">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[64px] text-[#050505]">
            <div className="mx-auto max-w-[821px] text-center">
              <p className="font-['TASA_Orbiter'] text-[18px] font-medium uppercase tracking-[0.45em] text-[#050505]">
                Who We Are
              </p>
              <h2 className="mt-4 font-['TASA_Orbiter'] text-[36px] font-semibold leading-[1.35]">
                Empowering Enterprises Through Intelligent Connectivity and Secure Infrastructure
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="relative h-[513px] overflow-hidden rounded-[20px]">
                <Image
                  src="/about-hero.png"
                  alt="Nexobots team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                />
              </div>
              <div className="space-y-8 px-0 lg:px-6">
                <p className="font-['TASA_Orbiter'] text-[28px] font-medium leading-[1.4]">
                  Nexobots Technologies is a trusted IT and security infrastructure solutions provider delivering
                  intelligent, scalable, and secure systems for modern enterprises.
                </p>
                <p className="font-['Manrope'] text-[16px] leading-[1.875] text-[#4C4C4C]">
                  We specialize in structured cabling, network integration, surveillance, biometric access control, and
                  managed IT services — helping organizations achieve seamless connectivity, operational resilience, and
                  long-term scalability. Partnering with global leaders like Cisco, Fortinet, D-Link, and Palo Alto, we
                  combine cutting-edge technology with expert implementation to build infrastructures that drive business
                  excellence.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-[75px] border border-white/30 bg-black px-6 py-3 text-[15px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-black/80"
                >
                  About Us
                  <Image
                    src="/find-out-more-arrow.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="px-[72px] py-[120px] text-white"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(81, 81, 81, 1) 0%, rgba(0, 0, 0, 1) 14%)",
          }}
        >
          <div className="mx-auto w-full max-w-[1296px] space-y-[64px]">
            <div className="mx-auto max-w-[825px] space-y-4 text-center">
              <p className="font-['TASA_Orbiter'] text-[18px] font-medium uppercase tracking-[0.45em] text-white">
                Our Services
              </p>
              <h2 className="font-['TASA_Orbiter'] text-[36px] font-bold leading-[1.22] text-white">
                Your Aspiration, Our Expertise: Tailored Services for Unmatched Excellence.
              </h2>
            </div>

            <div className="space-y-[12px]">
              {services.map((service, index) => {
                const isExpanded = expandedService === service.id;
                return (
                  <div key={service.id} className="space-y-[12px]">
                    {isExpanded ? (
                      <div className="space-y-[12px]">
                        <div className="flex w-full items-center justify-between gap-[693px] px-6 py-6">
                          <div className="flex items-center gap-20">
                            <p className="font-['TASA_Orbiter'] text-[28px] font-semibold leading-[1.57] tracking-[0.02em] text-white">
                              {service.id}
                            </p>
                            <p className="font-['Manrope'] text-[28px] font-semibold uppercase leading-[1.57] tracking-[0.04em] text-white">
                              {service.title}
                            </p>
                          </div>
                          <button
                            onClick={() => toggleService(service.id)}
                            className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#434343] bg-white transition hover:bg-white/90"
                            aria-label={`Collapse ${service.title}`}
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              className="text-black"
                            >
                              <path
                                d="M0 7H14"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="flex flex-col items-end gap-[12px] pb-6">
                          <div className="flex w-full flex-col gap-[10px] px-6 pb-[10px] pt-[10px]">
                            <div className="flex gap-4">
                              <div className="h-auto w-[2px] rounded-[42px] bg-[#E11E24]" />
                              <p className="font-['Manrope'] text-[20px] font-semibold leading-[1.4] tracking-[0.02em] text-white">
                                {service.description}
                              </p>
                            </div>
                          </div>
                          <div className="grid w-full grid-cols-3 gap-6 px-6" style={{ maxWidth: "1296px" }}>
                            {service.bullets.map((bullet, bulletIndex) => (
                              <div
                                key={bullet}
                                className="relative flex h-[274px] items-center justify-center overflow-hidden"
                              >
                                <Image
                                  src={service.images[bulletIndex]}
                                  alt={bullet}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 1296px) calc((100% - 48px) / 3), 408px"
                                />
                                <div className="absolute inset-0 bg-black/42" />
                                <p className="relative z-10 px-[66px] text-center font-['Manrope'] text-[32px] font-bold leading-[1.0625] tracking-[0.02em] text-white">
                                  {bullet}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex w-full items-center justify-between gap-[693px] px-6 py-6">
                        <div className="flex items-center gap-20">
                          <p className="font-['TASA_Orbiter'] text-[28px] font-semibold leading-[1.57] tracking-[0.02em] text-white/60">
                            {service.id}
                          </p>
                          <p className="font-['Manrope'] text-[28px] font-semibold uppercase leading-[1.57] tracking-[0.04em] text-white/70">
                            {service.title}
                          </p>
                        </div>
                        <button
                          onClick={() => toggleService(service.id)}
                          className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#434343] bg-white transition hover:bg-white/90"
                          aria-label={`Expand ${service.title}`}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="text-black"
                          >
                            <path
                              d="M7 0V14M7 14L14 7M7 14L0 7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                    {index < services.length - 1 ? (
                      <div className="h-px w-full bg-white/20" />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="relative bg-[#F8F8F8] px-6 py-[120px]"
        >
          <div className="relative mx-auto w-full max-w-[1440px]">
            {/* Decorative image top left */}
            <div className="absolute left-0 top-[82px] hidden lg:block" style={{ left: "82px" }}>
              <Image
                src="/testimonials-decorative-1.svg"
                alt=""
                width={281}
                height={217}
                className="h-auto w-auto"
              />
            </div>

            {/* Decorative image bottom center */}
            <div className="absolute bottom-[46px] left-1/2 hidden -translate-x-1/2 lg:block">
              <Image
                src="/testimonials-decorative-2.svg"
                alt=""
                width={105}
                height={47}
                className="h-auto w-auto"
              />
            </div>

            {/* Heading Section */}
            <div className="relative z-10 mx-auto mb-[64px] flex flex-col items-center gap-4">
              <p className="font-['Manrope'] text-[18px] font-medium leading-[1.366] text-black">
                Testimonials
              </p>
              <h2 className="max-w-[792px] text-center font-['TASA_Orbiter'] text-[36px] font-bold leading-[1.222] text-black">
                Trusted by Enterprises. Proven Through Experience
              </h2>
            </div>

            {/* Testimonial Cards */}
            <div className="relative z-10 flex flex-wrap justify-center gap-[14.33px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.author}
                  className="min-h-[258px] flex-1 rounded-[13px] border border-[#D9D9D9] bg-white"
                  style={{ minWidth: "300px", maxWidth: "411px" }}
                >
                  <div className="flex h-full flex-col gap-4 p-[10px]">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-[10px]">
                        <p className="font-['Manrope'] text-[22px] font-normal leading-[1.366] tracking-[0.02em] text-black">
                          {testimonial.author}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="font-['Manrope'] text-[12px] font-normal leading-[1.366] tracking-[0.02em] text-black">
                          — {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-['Manrope'] text-[16px] font-light leading-[1.75] tracking-[0.02em] text-black">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Partners />

        <section id="blogs" className="bg-white py-[120px]">
          <style>{`
            .blog-scroll::-webkit-scrollbar {
              display: none;
            }
            .blog-scroll {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          <div className="mx-auto w-full max-w-[1440px]">
            {/* Heading Section */}
            <div className="mx-auto mb-[64px] flex flex-col items-center gap-4 px-[72px]" style={{ maxWidth: "1296px" }}>
              <p className="font-['Manrope'] text-[18px] font-medium leading-[1.366] text-center text-black">
                Blogs
              </p>
              <h2 className="max-w-[792px] text-center font-['TASA_Orbiter'] text-[36px] font-bold leading-[1.222] text-black">
                Read Our Latest Insights
              </h2>
            </div>

            {/* Blog Cards - Horizontal Scroll */}
            <div className="overflow-hidden px-[75px]">
              <div 
                className="blog-scroll flex gap-[30px] overflow-x-auto pb-4"
                style={{ 
                  scrollSnapType: "x mandatory",
                  WebkitOverflowScrolling: "touch",
                  scrollBehavior: "smooth"
                }}
              >
                {blogs.map((blog, index) => (
                  <article
                    key={index}
                    className="flex flex-shrink-0 flex-col"
                    style={{ 
                      width: "674px", 
                      height: "527px",
                      scrollSnapAlign: "start"
                    }}
                  >
                    <div className="relative h-[361px] w-full overflow-hidden rounded-[27px]">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        sizes="674px"
                      />
                      {index === 0 ? (
                        <div className="absolute inset-0 bg-black/61" />
                      ) : (
                        <div className="absolute inset-0 bg-black/58" />
                      )}
                      <h3 className="absolute bottom-[43.5px] left-[43px] right-[43px] font-['Manrope'] text-[32px] font-extrabold leading-[1.366] text-white">
                        {blog.title}
                      </h3>
                    </div>
                    <p className="mt-[31px] flex-1 font-['Manrope'] text-[15px] font-normal leading-[1.366] text-[#454545]">
                      {blog.excerpt}
                    </p>
                    <Link
                      href="#"
                      className="mt-[45px] inline-flex h-[45px] w-[148px] items-center justify-center rounded-[75px] border border-white/30 bg-black px-[25px] font-['Manrope'] text-[15px] font-semibold leading-[1.366] tracking-[0.02em] text-white transition hover:bg-black/80"
                    >
                      Read More
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto flex w-full max-w-[1296px] flex-col gap-24 px-6">
          <section
            id="industries"
            className="space-y-10 rounded-[32px] border border-[#E5E5E5] bg-[#F8F8F8] p-8 lg:p-10"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Industries We Serve"
                title="Empowering every industry with intelligent, secure, and scalable IT solutions."
                variant="light"
              />
              <Link
                href="/industries"
                className="inline-flex items-center gap-3 self-start rounded-[75px] border border-black/10 bg-black px-6 py-3 text-[15px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
              >
                Find Out More
                <Image
                  src="/find-out-more-arrow.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {industries.map((industry) => (
                <article
                  key={industry.title}
                  className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_15px_45px_rgba(15,18,23,0.08)]"
                >
                  <div className="relative h-[240px] w-full">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#A4A4A4]">
                      {industry.title}
                    </p>
                    <p className="font-display text-[24px] leading-tight text-[#050505]">
                      {industry.summary}
                    </p>
                    <p className="text-sm text-[#696969]">{industry.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="partners"
            className="space-y-8 rounded-[32px] border border-[#E5E5E5] bg-white p-8"
          >
            <SectionHeading
              eyebrow="Partner Ecosystem"
              title="Trusted technology alliances."
              description="We work with industry-leading OEMs to deliver enterprise-grade solutions that meet the highest standards of quality, performance, and security."
              variant="light"
              align="center"
            />
            <div className="overflow-hidden rounded-[28px] border border-[#E5E5E5] bg-[#F8F8F8] p-4">
              <Image
                src="/partners.png"
                alt="Partner logos"
                width={9678}
                height={258}
                className="h-auto w-full object-contain"
              />
            </div>
          </section>

          <section
            id="testimonials"
            className="space-y-10 rounded-[32px] border border-[#E5E5E5] bg-white p-8"
          >
            <div className="relative">
              <SectionHeading
                eyebrow="Testimonials"
                title="Trusted by enterprises. Proven through experience."
                align="center"
                variant="light"
              />
              <Image
                src="/testimonials-grid.svg"
                alt=""
                width={281}
                height={217}
                className="pointer-events-none absolute -right-10 -top-10 opacity-40"
              />
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.author}
                  className="flex h-full flex-col gap-6 rounded-[28px] border border-[#E5E5E5] bg-[#F8F8F8] p-6"
                >
                  <Image
                    src="/quote-icon.svg"
                    alt=""
                    width={105}
                    height={47}
                    className="h-6 w-auto opacity-70"
                  />
                  <p className="text-lg text-[#050505]">“{testimonial.quote}”</p>
                  <div>
                    <p className="font-display text-xl text-[#050505]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#696969]">{testimonial.role}</p>
                  </div>
                </article>
              ))}
              <article className="flex h-full flex-col justify-between gap-6 rounded-[28px] border border-primary/30 bg-gradient-to-b from-primary to-primary/70 p-6 text-white">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.4em] text-white/70">
                    Get Started
                  </p>
                  <p className="font-display text-3xl">
                    Get in touch with us. We&apos;re here to assist you.
                  </p>
                </div>
                <Image
                  src="/social-icons.svg"
                  alt="Social media icons"
                  width={51}
                  height={199}
                  className="h-auto w-12"
                />
              </article>
            </div>
          </section>

          <section className="space-y-8 rounded-[32px] border border-[#E5E5E5] bg-white p-8">
            <SectionHeading
              eyebrow="Blogs"
              title="Read our latest insights."
              align="center"
              variant="light"
            />
            <div className="grid gap-6 md:grid-cols-3">
              {blogs.map((blog) => (
                <article
                  key={blog.title}
                  className="flex flex-col gap-4 rounded-[28px] border border-[#E5E5E5] bg-[#F8F8F8] p-6"
                >
                  <p className="font-display text-2xl text-[#050505]">
                    {blog.title}
                  </p>
                  <p className="text-sm text-[#696969]">{blog.excerpt}</p>
                  <Link
                    href="#"
                    className="mt-auto inline-flex items-center gap-3 rounded-[75px] border border-black/10 px-5 py-2 text-[15px] font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-black hover:text-white"
                  >
                    Read More
                    <Image
                      src="/find-out-more-arrow.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
