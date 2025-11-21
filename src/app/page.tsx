import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "400+", label: "Projects Completed" },
  { value: "100+", label: "Enterprise Clients" },
  { value: "30+", label: "Technology Partnerships" },
  { value: "99%", label: "Retention Rate" },
] as const;

const servicesRail = [
  { id: "01", title: "IT Network INFRASTRUCTURE Consulting" },
  { id: "02", title: "System Integration" },
  { id: "03", title: "AMC & Support" },
  { id: "04", title: "Cloud & Virtualization Support" },
] as const;

const featuredService = {
  id: "02",
  title: "System Integration",
  description:
    "We bring together diverse technologies, platforms, and OEM solutions into one cohesive system. From network integration to security and surveillance, we ensure seamless interoperability and peak performance.",
  bullets: [
    "Hardware & software integration",
    "Network and security system integration",
    "Customized deployment for smooth operations",
  ],
};

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
  },
  {
    title: "Smart Infrastructure & Real Estate",
    summary:
      "We power smart buildings and real estate projects with intelligent connectivity and automation.",
    body: "From integrated surveillance to IoT-enabled access and centralized control systems, our solutions deliver safe, efficient, and future-ready properties.",
  },
  {
    title: "Healthcare & Pharma",
    summary:
      "In highly regulated environments, uptime and data protection are critical.",
    body: "Nexobots delivers secure networks, surveillance, and access systems that ensure compliance, patient privacy, and operational continuity.",
  },
  {
    title: "Retail & Hospitality",
    summary:
      "We enable customer-centric experiences with secure connectivity and efficient operations.",
    body: "Our CCTV, access control, and IT infrastructure solutions support multi-location management, monitoring, and digital engagement.",
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
      "In a sector where security and uptime are critical, Nexobots proved to be a dependable technology partner. Their IT managed services keep our systems compliant and available.",
    author: "Siya Reddy",
    role: "Head of IT, Healthcare Group",
  },
] as const;

const blogs = [
  {
    title:
      "The Future of Enterprise Networks — Why Intelligent IT Infrastructure Matters",
    excerpt:
      "As organizations embrace digital transformation, network infrastructure plays a critical role in ensuring performance and security. Discover how intelligent cabling, scalable architectures, and proactive management can power the next generation of enterprise connectivity.",
  },
  {
    title: "Smarter Surveillance — How AI is Redefining Security Operations",
    excerpt:
      "Traditional CCTV systems are evolving into intelligent surveillance networks. Learn how AI-enabled analytics, remote monitoring, and integrated security solutions are helping businesses detect threats faster and make smarter security decisions.",
  },
  {
    title: "Smarter Surveillance — How AI is Redefining Security Operations",
    excerpt:
      "Traditional CCTV systems are evolving into intelligent surveillance networks. Learn how AI-enabled analytics, remote monitoring, and integrated security solutions are helping businesses detect threats faster and make smarter security decisions.",
  },
] as const;

const footerColumns = [
  {
    title: "Solutions",
    links: [
      "Smart Network",
      "Infrastructure CCTV Solutions",
      "Secure Access & Biometrics",
      "End-to-end IT Services",
    ],
  },
  {
    title: "Services",
    links: [
      "IT Infrastructure Consulting",
      "System Integration",
      "AMC Support",
      "Cloud & Virtualization Support",
    ],
  },
  {
    title: "Industries",
    links: [
      "Corporate & Enterprises",
      "Education & Research",
      "Healthcare & Pharma",
      "Retail & Hospitality",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Blogs", "News & Media", "Contact Us"],
  },
] as const;

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`space-y-3 ${
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left"
      }`}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-muted">{description}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-background text-foreground">
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

      <main className="flex flex-col gap-24 py-24">
        <section id="solutions" className="bg-shell px-4 py-24">
          <div className="mx-auto flex w-full max-w-[1380px] flex-col items-center gap-12">
            <div className="space-y-4 text-center text-ink">
              <p className="font-display text-[18px] font-medium uppercase tracking-[0.45em] text-ink-soft">
                Our Solutions
              </p>
              <h2 className="font-display text-[36px] font-bold leading-[1.22] text-ink">
                Comprehensive IT and security infrastructure solutions designed for
                performance, reliability, and scalability.
              </h2>
            </div>
            <div className="flex w-full gap-8 overflow-x-auto px-2 xl:justify-between">
              {solutions.map((solution) => (
                <article
                  key={solution.title}
                  className="relative h-[442px] w-[303px] flex-none overflow-hidden rounded-[10px] shadow-[0_25px_60px_rgba(15,18,23,0.2)]"
                >
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/55 to-black/95" />
                  <div className="relative z-10 flex h-full flex-col p-8 text-left">
                    <div className="mt-10 space-y-4">
                      {solution.blurb ? (
                        <p className="text-sm text-white/80">{solution.blurb}</p>
                      ) : null}
                      <h3 className="font-sans text-[24px] font-bold uppercase tracking-[0.08em] text-white">
                        {solution.title}
                      </h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-shell px-4 py-20">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
            <div className="space-y-4 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-ink-soft">
                Our Services
              </p>
              <h2 className="font-display text-[36px] leading-tight text-ink">
                Your Aspiration, Our Expertise: Tailored Services for Unmatched
                Excellence.
              </h2>
              <p className="max-w-2xl text-base text-ink-soft">
                Integrated consulting, deployment, and lifecycle support that unlock
                resilient IT and security environments for modern enterprises.
              </p>
            </div>

            <div className="rounded-[32px] border border-border-soft bg-white p-6 shadow-[0_26px_70px_rgba(15,18,23,0.08)] lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[420px_minmax(0,1fr)]">
                <div className="flex flex-col divide-y divide-border-soft/80">
                  {servicesRail.map((service) => {
                    const isFeatured = service.id === featuredService.id;
                    return (
                      <div
                        key={service.id}
                        className={`flex items-center justify-between gap-6 py-6 ${
                          isFeatured
                            ? "text-ink"
                            : "text-ink-soft hover:text-ink transition-colors"
                        }`}
                      >
                        <div className="space-y-2">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.5em]">
                            {service.id}
                          </p>
                          <p
                            className={`font-display text-[20px] leading-tight ${
                              isFeatured ? "text-ink" : "text-ink-soft"
                            }`}
                          >
                            {service.title}
                          </p>
                        </div>
                        <span
                          className={`text-2xl ${
                            isFeatured ? "text-primary" : "text-border-soft"
                          }`}
                          aria-hidden="true"
                        >
                          —
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-[28px] border border-[#262626] bg-[#050505] p-8 text-left text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
                    {featuredService.id}
                  </p>
                  <h3 className="mt-4 font-display text-[34px] uppercase leading-tight text-white">
                    {featuredService.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    {featuredService.description}
                  </p>
                  <div className="mt-6 space-y-3">
                    {featuredService.bullets.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <p className="text-sm text-white/90">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6">
          <section
            id="metrics"
            className="rounded-[32px] border border-border/80 bg-gradient-to-r from-[#050505] via-[#0c0c0c] to-[#050505] p-10"
          >
            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-border/40 py-10 text-center lg:border-l first:lg:border-l-0"
                >
                  <p className="font-display text-5xl text-white">{stat.value}</p>
                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="about"
            className="space-y-8 rounded-[32px] border border-border bg-surface p-10"
          >
          <SectionHeading
            eyebrow="Who We Are"
            title="Empowering enterprises through intelligent connectivity and secure infrastructure."
            description="Nexobots Technologies is a trusted IT and security infrastructure partner delivering intelligent, scalable, and secure systems for modern enterprises."
          />
          <div className="space-y-6 text-base text-muted">
            <p>
              We specialize in structured cabling, network integration, surveillance,
              biometric access control, and managed IT services — helping organizations
              achieve seamless connectivity, operational resilience, and long-term
              scalability.
            </p>
            <p>
              Partnering with global leaders like Cisco, Fortinet, D-Link, and Palo Alto,
              we combine cutting-edge technology with expert implementation to build
              infrastructures that drive business excellence.
            </p>
          </div>
          </section>

          <section
            id="industries"
            className="space-y-10 rounded-[32px] border border-border bg-surface p-8"
          >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Empowering every industry with intelligent, secure, and scalable IT solutions."
            />
            <Link
              href="#contact"
              className="self-start rounded-full border border-border px-6 py-3 text-sm uppercase tracking-[0.3em] text-muted transition hover:border-primary hover:text-primary"
            >
              Find Out More
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="flex flex-col gap-4 rounded-[28px] border border-border/70 bg-surface-elevated p-6"
              >
                <p className="text-sm uppercase tracking-[0.4em] text-muted">
                  {industry.title}
                </p>
                <p className="font-display text-xl text-white">{industry.summary}</p>
                <p className="text-sm text-muted">{industry.body}</p>
              </article>
            ))}
          </div>
          </section>

          <section
            id="partners"
            className="space-y-8 rounded-[32px] border border-border bg-surface p-8"
          >
          <SectionHeading
            eyebrow="Partner Ecosystem"
            title="Trusted technology alliances."
            description="We work with industry-leading OEMs to deliver enterprise-grade solutions that meet the highest standards of quality, performance, and security."
          />
          <div className="overflow-hidden rounded-[28px] border border-border/60 bg-background/40 p-4">
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
            className="space-y-10 rounded-[32px] border border-border bg-surface p-8"
          >
          <div className="relative">
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by enterprises. Proven through experience."
              align="center"
            />
            <Image
              src="/testimonials-grid.svg"
              alt=""
              width={281}
              height={217}
              className="pointer-events-none absolute -right-10 -top-10 opacity-50"
            />
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.author}
                className="flex h-full flex-col gap-6 rounded-[28px] border border-border/60 bg-surface-elevated p-6"
              >
                <Image
                  src="/quote-icon.svg"
                  alt=""
                  width={105}
                  height={47}
                  className="h-6 w-auto opacity-70"
                />
                <p className="text-lg text-foreground/90">“{testimonial.quote}”</p>
                <div>
                  <p className="font-display text-xl">{testimonial.author}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </article>
            ))}
            <article className="flex h-full flex-col justify-between gap-6 rounded-[28px] border border-primary/50 bg-gradient-to-b from-primary to-primary/70 p-6">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.4em] text-white/70">
                  Get Started
                </p>
                <p className="font-display text-3xl text-primary-foreground">
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

          <section className="space-y-8 rounded-[32px] border border-border bg-surface p-8">
          <SectionHeading
            eyebrow="Blogs"
            title="Read our latest insights."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.title}
                className="flex flex-col gap-4 rounded-[28px] border border-border/70 bg-surface-elevated p-6"
              >
                <p className="font-display text-xl">{blog.title}</p>
                <p className="text-sm text-muted">{blog.excerpt}</p>
                <Link
                  href="#"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.4em] text-primary"
                >
                  Read More
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
          </section>
        </div>

        <section
          id="contact"
          className="space-y-10 rounded-[32px] border border-border bg-surface p-8"
        >
          <SectionHeading
            eyebrow="Contact"
            title="Our experts are just a message away."
            description="Let’s connect and create technology that powers your tomorrow."
          />
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-muted">
                  First Name
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 text-base text-foreground outline-none transition focus:border-primary"
                  />
                </label>
                <label className="space-y-2 text-sm text-muted">
                  Last Name
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 text-base text-foreground outline-none transition focus:border-primary"
                  />
                </label>
                <label className="space-y-2 text-sm text-muted">
                  Email
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 text-base text-foreground outline-none transition focus:border-primary"
                  />
                </label>
                <label className="space-y-2 text-sm text-muted">
                  Phone Number
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 text-base text-foreground outline-none transition focus:border-primary"
                  />
                </label>
              </div>
              <label className="space-y-2 text-sm text-muted">
                Message
                <textarea
                  placeholder="Enter your Message"
                  className="min-h-[140px] w-full rounded-2xl border border-border bg-transparent px-4 py-3 text-base text-foreground outline-none transition focus:border-primary"
                />
              </label>
              <label className="flex items-center gap-3 text-sm text-muted">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border border-border bg-transparent accent-primary"
                />
                I agree with Terms of Use and Privacy Policy
              </label>
              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-primary-foreground transition hover:bg-primary/90"
              >
                Submit
                <Image
                  src="/submit-arrow.svg"
                  alt=""
                  width={7}
                  height={12}
                  className="h-3 w-3"
                />
              </button>
            </form>
            <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-surface-elevated p-6">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.4em] text-muted">
                  Nexobots Technologies LLP
                </p>
                <p className="text-base text-foreground/90">
                  India’s leading provider of structured cabling, networking,
                  surveillance, biometric access, and managed IT services.
                </p>
              </div>
              <Image
                src="/contact-illustration.png"
                alt="Nexobots team collaboration illustration"
                width={634}
                height={290}
                className="mt-6 h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-5">
              <Image
                src="/logo.svg"
                alt="Nexobots"
                width={162}
                height={30}
              />
              <p className="text-base text-muted">
                Nexobots Technologies LLP — India’s leading provider of structured
                cabling, networking, surveillance, biometric access, and managed IT
                services.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {footerColumns.map((column) => (
                <div key={column.title} className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.4em] text-muted">
                    {column.title}
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    {column.links.map((link) => (
                      <li key={link}>{link}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted">
            Copyright © {new Date().getFullYear()} Nexobots | All Rights Reserved
            | Privacy Policy
          </div>
        </div>
      </footer>
    </div>
  );
}
