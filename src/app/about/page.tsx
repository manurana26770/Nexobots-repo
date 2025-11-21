import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const dataPointers = [
  { value: "400+", label: "Projects Competed" },
  { value: "100+", label: "Enterpiise Clients" },
  { value: "30+", label: "Technology Partnerships" },
  { value: "99%", label: "Retention Rate" },
] as const;

const visionPoints = [
  { title: "Our Visison", isMain: true },
  { title: "Misson", isMain: false },
  { title: "Our Purpose", isMain: false },
] as const;

const pointers = [
  {
    title: "Customer Focus",
    description:
      "We put our customers at the center of everything we do — understanding their needs and delivering solutions that drive measurable impact and long-term partnerships.",
  },
  {
    title: "Quality First",
    description:
      "We are committed to excellence in every detail — ensuring every project, product, and service meets the highest standards of performance and reliability.",
  },
  {
    title: "Reliability",
    description:
      "We deliver on our promises with consistency and accountability — providing dependable technology and support that businesses can trust.",
  },
] as const;

const outcomes = [
  {
    title: "Optimizing Latency for Seamless Connectivity and Robust Performance",
    description:
      "Enable faster, smoother, and more responsive systems across users, devices, and locations.",
    icon: "cpu",
  },
  {
    title: "High-Speed Connectivity and Peak System Performance",
    description:
      "Protect your data, assets, and operations with integrated surveillance, access control, and threat-resilient infrastructure.",
    icon: "unlock",
  },
  {
    title: "Highly Scalable and Future-Proof System Architecture",
    description:
      "Build once. Grow unlimited. Adapt effortlessly. Our modular solutions evolve with your business and load.",
    icon: "filter",
  },
] as const;

const advantages = [
  {
    title: "Intelligent Infrastructure",
    description:
      "Our solutions redefine enterprise connectivity and security—integrating structured cabling, active networking, and surveillance systems built for reliability, performance, and scalability. Nexobots delivers infrastructure that's ready for the AI-driven future.",
  },
  {
    title: "Technology + Human Expertise",
    description:
      "Backed by years of implementation experience and deep technical know-how, we blend intelligent automation with expert insight. The result: seamless integration, proactive support, and infrastructure that adapts to your business—before challenges arise.",
  },
  {
    title: "Nationwide Reach, Global Standards",
    description:
      "With a presence across 180+ cities in India and partnerships with global OEMs like Cisco, D-Link, Fortinet, and Palo Alto, Nexobots brings world-class technology to every corner of your business. We combine global reliability with local agility to help organizations scale confidently.",
  },
] as const;

const testimonials = [
  {
    name: "Jacob",
    role: "— IT Manager, Global Finance Corporation",
    quote:
      "Nexobots has transformed our office IT infrastructure from the ground up. Their structured cabling and network design brought exceptional stability and performance to our operations.",
  },
  {
    name: "Jacob",
    role: "— Dean, Leading Educational Institution",
    quote:
      "We needed a secure, connected, and intelligent campus network — Nexobots delivered exactly that. Their surveillance and access control solutions have made management effortless.",
  },
  {
    name: "Jacob",
    role: "— Head of IT, Healthcare Group",
    quote:
      "In a sector where security and uptime are critical, Nexobots proved to be a dependable technology partner. Their IT managed services ensure our systems are always compliant and available.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* Hero Image Section */}
      <section className="relative h-[791px] w-full overflow-hidden">
        <Image
          src="/about-hero.png"
          alt="About Hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" style={{ backdropFilter: "blur(233.9px)" }} />
      </section>

      {/* Hero Text Section */}
      <section className="relative bg-black px-6 py-24 text-white md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1027px] text-center">
          <h1 className="font-['TASA_Orbiter'] text-[48px] font-semibold leading-[1.494] text-white md:text-[56px] lg:text-[64px]">
            Empowering Every Industry with Smart, Secure, and Scalable
            Technology
          </h1>
          <Link
            href="#contact"
            className="mt-12 inline-flex items-center gap-3 rounded-[75px] border border-white/30 bg-black px-[29px] py-5 text-[20px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-gray-800"
          >
            Talk to an Expert
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              className="h-[41px] w-[41px]"
            >
              <path
                d="M20.5 0L20.5 41M20.5 41L41 20.5M20.5 41L0 20.5"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* We Are Nexobots Section */}
      <section className="bg-white px-6 py-24 md:px-12 lg:px-[107px]">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-16 font-['TASA_Orbiter'] text-[72px] font-semibold leading-[1.494] text-black md:text-[80px] lg:text-[96px]">
            We are nexobots
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <p className="font-['TASA_Orbiter'] text-[20px] font-medium leading-[1.32] text-black md:text-[22px] lg:text-[24px]">
              Nexobots Technologies is one of India&apos;s leading IT and
              security infrastructure companies, with a strong presence across
              180+ cities. We deliver end-to-end technology solutions that
              power seamless connectivity, intelligent security, and scalable
              digital ecosystems for enterprises nationwide.
            </p>
            <p className="font-['TASA_Orbiter'] text-[20px] font-medium leading-[1.32] text-black md:text-[22px] lg:text-[24px]">
              With a commitment to innovation and reliability, we design,
              implement, and manage infrastructure that enables organizations to
              thrive in the digital era. Our solutions blend cutting-edge
              technology, industry expertise, and OEM partnerships to create
              smarter, secure, and future-ready environments.
            </p>
          </div>
          <Link
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-[75px] border border-white/30 bg-black px-[29px] py-5 text-[20px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-gray-800"
          >
            Get In Touch
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              className="h-[41px] w-[41px]"
            >
              <path
                d="M20.5 0L20.5 41M20.5 41L41 20.5M20.5 41L0 20.5"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Data Pointers Section */}
      <section className="bg-black px-6 py-[50px] md:px-12 lg:px-[72px]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-3">
          {dataPointers.map((pointer, index) => (
            <div key={pointer.label} className="flex items-center gap-3">
              <div className="flex w-[306px] flex-col items-center justify-center gap-[6px] py-5">
                <div className="text-center">
                  <p className="font-['Manrope'] text-[55px] font-bold uppercase leading-[1.366] text-white">
                    {pointer.value}
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-['Manrope'] text-[20px] font-normal leading-[1.366] text-[#CACACA]">
                    {pointer.label}
                  </p>
                </div>
              </div>
              {index < dataPointers.length - 1 && (
                <div className="h-[75px] w-[1px] bg-white" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="relative h-[669px] overflow-hidden">
        <div className="absolute inset-0 bg-black/68" />
        <Image
          src="/about-hero.png"
          alt="Our Vision Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-[106px]">
          <div className="relative max-w-[542px] space-y-8 rounded-[22px] p-12">
            <div className="absolute left-0 top-0 h-[95px] w-[7px] rounded-[22px] bg-[#E11E24]" />
            <div className="space-y-8">
              <h2 className="font-['TASA_Orbiter'] text-[64px] font-semibold leading-[0.93] text-white">
                Our Visison
              </h2>
              <h3 className="font-['TASA_Orbiter'] text-[36px] font-bold leading-[1.494] text-white">
                Misson
              </h3>
              <h3 className="font-['TASA_Orbiter'] text-[36px] font-bold leading-[1.494] text-white">
                Our Purpose
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Content Block Section */}
      <section className="bg-white px-6 py-24 md:px-12 lg:px-[136px]">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-6 font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.26] text-black md:text-[44px] lg:text-[48px]">
            To be India&apos;s most trusted technology partner —
          </h2>
          <p className="font-['TASA_Orbiter'] text-[32px] font-semibold leading-[1.26] text-black md:text-[36px] lg:text-[40px]">
            Empowering organizations to build intelligent, secure, and
            future-ready IT infrastructures that drive business excellence and
            positive change.
          </p>
        </div>
      </section>

      {/* Pointers Section */}
      <section className="bg-black px-6 py-[120px] md:px-12 lg:px-[49px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-wrap items-start justify-center gap-[89px]">
            {pointers.map((pointer) => (
              <div key={pointer.title} className="max-w-[300px]">
                <h3 className="mb-3 font-['TASA_Orbiter'] text-[20px] font-bold leading-[0.95] tracking-[0.02em] text-white">
                  {pointer.title}
                </h3>
                <p className="font-['TASA_Orbiter'] text-[20px] font-bold leading-[0.95] tracking-[0.02em] text-white">
                  {pointer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nexobots Section */}
      <section className="relative overflow-hidden bg-white px-6 py-24 md:px-12 lg:px-[71px]">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "linear-gradient(156deg, rgba(215, 240, 255, 1) 0%, rgba(217, 207, 255, 1) 28%, rgba(255, 209, 234, 1) 56%, rgba(255, 227, 210, 1) 84%)",
            filter: "blur(336.5px)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1303px]">
          <div className="mb-16 text-center">
            <p className="mb-4 font-['TASA_Orbiter'] text-[18px] font-medium leading-[1.2] text-black">
              Why nexobots
            </p>
            <h2 className="font-['TASA_Orbiter'] text-[32px] font-semibold leading-[1.494] text-black md:text-[36px] lg:text-[40px]">
              The Critical Smart IT Infrastructure for the AI Era
            </h2>
          </div>
          <p className="mx-auto mb-8 max-w-[862px] text-center font-['TASA_Orbiter'] text-[20px] font-semibold leading-[1.494] text-black md:text-[22px]">
            In a world driven by automation, data, and intelligent systems, your
            technology infrastructure must do more than connect—it must enable.
          </p>
          <p className="mx-auto mb-12 max-w-[862px] text-center font-['TASA_Orbiter'] text-[20px] font-semibold leading-[1.494] text-black md:text-[22px]">
            At Nexobots Technologies, we deliver the backbone of enterprise
            transformation: high-performance networks, secure systems, and
            scalable architectures designed for tomorrow&apos;s demands. Whether
            you&apos;re powering AI workloads, distributed offices, or smart
            campuses, our solutions give you the agility, security, and insight
            you need to thrive.
          </p>
          <div className="text-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 rounded-[75px] border border-white/30 bg-black px-6 py-3 text-[15px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-gray-800"
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
                  strokeWidth="1"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="bg-white px-6 py-24 md:px-12 lg:px-[95px]">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-4 text-center font-['TASA_Orbiter'] text-[32px] font-semibold leading-[1.494] text-black md:text-[36px] lg:text-[40px]">
            Delivering Outcomes That Matter
          </h2>
          <p className="mx-auto mb-16 max-w-[748px] text-center font-['Manrope'] text-[20px] font-bold leading-[1.75] text-black md:text-[24px]">
            We focus on real results—so your infrastructure doesn&apos;t just
            work, it delivers value.
          </p>
          <p className="mx-auto mb-16 max-w-[748px] text-center font-['Manrope'] text-[20px] font-bold leading-[1.75] text-black md:text-[24px]">
            From reducing risk and ensuring uptime to enabling growth and
            innovation, Nexobots&apos; services exceed expectation and transform
            operations.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="rounded-[21px] bg-white p-9 shadow-sm"
              >
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-[15px] border border-[#E9E9E9]">
                  <div className="h-[61px] w-[61px] rounded bg-[#E11E24]/10" />
                </div>
                <h3 className="mb-6 font-['Manrope'] text-[24px] font-bold leading-[1.208] text-black">
                  {outcome.title}
                </h3>
                <p className="font-['Manrope'] text-[20px] font-bold leading-[1.05] text-[#A4A4A4]">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-white px-6 py-24 md:px-12 lg:px-[94px]">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-4 text-center font-['TASA_Orbiter'] text-[32px] font-semibold leading-[1.494] text-black md:text-[36px]">
            The nexobots Advantage.
            <br />
            Your Competitive Edge in Smart IT Infrastructure.
          </h2>
          <p className="mx-auto mb-16 max-w-[849px] text-center font-['Manrope'] text-[20px] font-bold leading-[1.4] text-black">
            Bringing together expertise, innovation, and trusted partnerships to
            power the connected enterprise.
          </p>
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative h-[664px] overflow-hidden rounded-[18px]">
              <Image
                src="/about-advantage-1-3df8a1.png"
                alt="Advantage 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="relative h-[274px] overflow-hidden rounded-[18px]">
                <Image
                  src="/about-advantage-2.png"
                  alt="Advantage 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-[356px] overflow-hidden rounded-[18px]">
                <Image
                  src="/about-advantage-3.png"
                  alt="Advantage 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-[90px]">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="max-w-[423px]">
                <h3 className="mb-4 font-['Manrope'] text-[24px] font-bold leading-[1.167] text-black">
                  {advantage.title}
                </h3>
                <p className="font-['Manrope'] text-[15px] font-medium leading-[1.867] text-[#696969]">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white px-6 py-24 md:px-12 lg:px-[82px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 text-center">
            <p className="mb-4 font-['Manrope'] text-[18px] font-medium leading-[1.366] text-black">
              Testimonials
            </p>
            <h2 className="font-['TASA_Orbiter'] text-[32px] font-bold leading-[1.222] text-black md:text-[36px]">
              Trusted by Enterprises. Proven Through Experience
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-[13px] border border-[#D9D9D9] bg-white p-6"
              >
                <div className="mb-4">
                  <p className="font-['Manrope'] text-[22px] font-normal leading-[1.366] tracking-[0.02em] text-black">
                    {testimonial.name}
                  </p>
                  <p className="font-['Manrope'] text-[12px] font-normal leading-[1.366] tracking-[0.02em] text-black">
                    {testimonial.role}
                  </p>
                </div>
                <p className="font-['Manrope'] text-[16px] font-light leading-[1.75] tracking-[0.02em] text-black">
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="bg-black px-6 py-24 text-white md:px-12 lg:px-[146px]">
        <div className="mx-auto max-w-[1148px] text-center">
          <h2 className="mb-8 font-['TASA_Orbiter'] text-[48px] font-semibold leading-[1.494] text-white md:text-[56px] lg:text-[64px]">
            Partner with nexobots to Transform Your Industry with Smarter IT
          </h2>
          <p className="mx-auto mb-4 max-w-[854px] font-['Manrope'] text-[18px] font-normal leading-[1.4] text-white md:text-[20px]">
            Every industry faces unique challenges — but the right technology
            turns those challenges into opportunities. At Nexobots Technologies,
            we combine innovation, integration, and intelligence to help
            organizations build connected, secure, and future-ready
            environments.
          </p>
          <p className="mx-auto mb-8 max-w-[854px] font-['Manrope'] text-[18px] font-normal leading-[1.4] text-white md:text-[20px]">
            Let&apos;s collaborate to design technology solutions that empower
            your business and industry to thrive in the digital era.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 rounded-[75px] border border-white/30 bg-black px-6 py-3 text-[15px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-gray-800"
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
                strokeWidth="1"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}

