import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const benefits = [
  {
    title: "Proactive, Not Reactive",
    description:
      "We detect and address issues before they impact operations — ensuring consistent uptime.",
  },
  {
    title: "24/7 NOC Monitoring",
    description:
      "Round-the-clock visibility and support ensure complete control of your IT environment.",
  },
  {
    title: "Certified Multi-Vendor Expertise",
    description:
      "Our team supports a wide range of OEMs, including Cisco, D-Link Fortinet, Palo Alto, and Aruba.",
  },
  {
    title: "SLA-Driven Service Commitments",
    description:
      "Guaranteed response times and resolution metrics for predictable, reliable support.",
  },
  {
    title: "Analytics-Backed Optimization",
    description:
      "We use monitoring data to continuously fine-tune systems for peak performance.",
  },
] as const;

const itSupportServices = [
  "Helpdesk & remote assistance (L1–L3 support)",
  "On-site engineer deployment",
  "Incident & problem management",
  "Preventive maintenance scheduling",
  "Patch & firmware updates",
] as const;

const monitoringServices = [
  "24/7 NOC-based monitoring",
  "Performance analytics & health checks",
  "Fault detection & alert management",
  "Bandwidth utilization tracking",
  "Server, network, and endpoint monitoring",
] as const;

const optimizationServices = [
  "Performance audits & tuning",
  "Capacity planning & resource balancing",
  "System configuration optimization",
  "Network throughput & latency improvements",
  "Reporting & continuous improvement plans",
] as const;

const faqs = [
  {
    question: "What’s included in IT Support Services?",
    answer:
      "It includes helpdesk support, on-site troubleshooting, preventive maintenance, patch updates, and incident resolution — tailored to your operational needs.",
  },
  {
    question: "How do you ensure issues are resolved quickly?",
    answer:
      "We follow SLA-based response and escalation models to ensure critical issues are addressed within defined timeframes.",
  },
  {
    question: "How does optimization improve performance?",
    answer:
      "Optimization enhances configuration, load balancing, and system tuning — resulting in faster response times and reduced operational costs.",
  },
  {
    question: "Do you provide regular performance reports?",
    answer:
      "Yes. We provide monthly or quarterly reports with detailed performance metrics, trend analysis, and improvement recommendations.",
  },
  {
    question: "Can you monitor multi-vendor and hybrid environments?",
    answer:
      "Absolutely. Our tools and team support multi-vendor setups and hybrid infrastructures — across on-prem, cloud, and virtualized systems.",
  },
  {
    question: "Do you provide 24/7 monitoring?",
    answer: null, // No answer provided in Figma for this one in the list, but checking design... actually the last item seems to be just a question "Do you provide 24/7 monitoring?" without an answer block visible in the text dump, but I'll check if I can infer it or if it's just a header. Looking at the dump, it has "Button -> How does it work?" and "Button -> SVG". I'll assume it's an FAQ item.
  },
];

export default function Service2Page() {
  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-white px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[15px] bg-white">
             <div className="absolute right-0 top-0 h-full w-1/2 bg-gray-100 opacity-50" /> {/* Placeholder for hero BG images */}
            <div className="relative z-10 max-w-[838px] py-12">
              <h1 className="mb-8 font-['TASA_Orbiter'] text-[48px] font-semibold leading-[1.32] text-black md:text-[56px] lg:text-[64px]">
                Monitor Smarter. Respond Faster. Perform Better.
              </h1>
              <p className="mb-12 font-['TASA_Orbiter'] text-[20px] font-semibold leading-[1.44] text-black md:text-[24px]">
                Ensure uninterrupted operations and peak performance with
                Nexobots’ IT Support, Monitoring & Optimization Services.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-[75px] border border-black/30 bg-white px-[29px] py-5 text-[15px] font-semibold uppercase tracking-[0.02em] text-black transition hover:bg-gray-100"
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

      {/* Section 2: Overview */}
      <section className="bg-[#F8F8F8] px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1440px]">
            <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
                 <div className="space-y-8">
                    <p className="font-['TASA_Orbiter'] text-[20px] font-semibold leading-[1.17] text-[#4B4B4B] text-center lg:text-left">
                    Nexobots Technologies delivers comprehensive IT Support, Monitoring & Optimization Services that keep your infrastructure secure, efficient, and always-on.<br/>
                    From real-time network monitoring to proactive performance tuning, we ensure your IT ecosystem runs seamlessly — so your teams can focus on innovation, not interruptions.
                    </p>
                     <p className="font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.17] text-black text-center lg:text-left">
                    In a world where business runs 24/7, IT performance directly impacts productivity, customer experience, and profitability. Yet, unmonitored systems, slow response to incidents, and reactive maintenance can lead to costly downtimes and security risks.
                    </p>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                     <div className="h-[218px] w-full rounded-[18px] bg-gray-200" /> {/* Placeholder 1 */}
                     <div className="space-y-4">
                         <div className="h-[100px] w-full rounded-[18px] bg-gray-300" /> {/* Placeholder 2 */}
                         <div className="h-[100px] w-full rounded-[18px] bg-gray-400" /> {/* Placeholder 3 */}
                     </div>
                 </div>
            </div>
             <div className="flex justify-center">
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-[75px] border border-white/30 bg-black px-[29px] py-4 text-[15px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-gray-800"
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
        </div>
      </section>

      {/* Our Core Offerings Title */}
      <section className="bg-[#F8F8F8] px-6 py-12 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.49] text-black">
            Our Core Offerings
          </h2>
        </div>
      </section>

      {/* Why Choose Nexobots */}
      <section className="bg-[#F8F8F8] px-6 py-12 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-16 text-center font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.49] text-black">
            Why Choose Nexobots for IT Support, Monitoring & Optimization
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-[21px] bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-6 flex h-[51px] w-[51px] items-center justify-center rounded-full bg-black/5">
                   {/* Placeholder Icon */}
                   <div className="h-6 w-6 bg-black rounded-full" />
                </div>
                <h3 className="mb-4 font-['Manrope'] text-[16px] font-bold leading-[1.25] text-black">
                  {benefit.title}
                </h3>
                <p className="font-['Manrope'] text-[13px] font-bold leading-[1.46] text-[#A4A4A4]">
                  {benefit.description}
                </p>
              </div>
            ))}
             <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:col-span-3 lg:grid-cols-3">
                 {/* Decorative images */}
                <div className="h-[150px] rounded-[18px] bg-[#K87688] bg-gray-200" />
                <div className="h-[150px] rounded-[18px] bg-[#YYIC4N] bg-gray-300" />
                <div className="h-[150px] rounded-[18px] bg-[#UCNU6N] bg-gray-400" />
             </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-[#F8F8F8] px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1200px] text-center">
             <Link
                href="/contact"
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
          <h2 className="mb-8 font-['TASA_Orbiter'] text-[48px] font-semibold leading-[1.49] text-black">
            Why IT Support, Monitoring & Optimization Matter
          </h2>
          <div className="space-y-6 font-['TASA_Orbiter'] text-[24px] font-medium leading-[1.32] text-black">
            <p>
              As digital systems become more interconnected, visibility and responsiveness are critical.
              Proactive monitoring helps detect anomalies early, while structured support frameworks ensure fast resolution and consistent uptime.
              Optimization takes it further — ensuring systems deliver maximum output with minimal resource usage.
            </p>
            <p>
              With Nexobots, you gain a trusted partner offering 24/7 Network Operations Center (NOC) monitoring, multi-tier IT support, and ongoing optimization that aligns technology with business performance goals.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: IT Support Services */}
      <section className="bg-[#F8F8F8] px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1440px]">
            <h2 className="mb-6 font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
              IT Support Services
            </h2>
            <p className="mb-12 font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
              Comprehensive on-site and remote support designed to keep your systems operational and secure — anytime, anywhere. Our certified engineers handle everything from troubleshooting to preventive maintenance with SLA-backed response times.
            </p>

            <div className="mb-12 h-[465px] w-full rounded-[13px] bg-gray-200" /> {/* Placeholder */}

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                     <h3 className="mb-6 font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">
                        Key Services
                    </h3>
                    <div className="space-y-4">
                        {itSupportServices.map((service, index) => (
                        <div key={index} className="flex items-center gap-4 rounded-[55px] border border-[#E9E9E9] bg-white px-8 py-4">
                             <div className="h-2 w-2 rounded-full bg-[#E11E24]" />
                            <p className="font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">{service}</p>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-center rounded-[21px] bg-white p-8">
                     <p className="mb-2 font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">Outcome</p>
                     <p className="mb-8 font-['TASA_Orbiter'] text-[32px] font-semibold leading-[1.38] text-black">
                        Faster issue resolution, minimal downtime, and predictable IT operations.
                     </p>
                      <Link
                        href="/contact"
                        className="inline-flex w-fit items-center gap-3 rounded-[75px] border border-black/30 bg-white px-[29px] py-4 text-[15px] font-semibold uppercase tracking-[0.02em] text-black transition hover:bg-gray-100"
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
                            stroke="black"
                            strokeWidth="2"
                        />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Service 2: Network & Infrastructure Monitoring */}
      <section className="bg-[#F8F8F8] px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1440px]">
            <h2 className="mb-6 font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
              Network & Infrastructure Monitoring
            </h2>
            <p className="mb-12 font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
              Stay ahead of outages and bottlenecks with continuous, AI-driven network monitoring.<br/>
              We deliver complete visibility into your infrastructure through centralized dashboards and real-time alerts
            </p>

            <div className="mb-12 h-[476px] w-full rounded-[13px] bg-gray-200" /> {/* Placeholder */}

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                     <h3 className="mb-6 font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">
                        Key Services
                    </h3>
                    <div className="space-y-4">
                        {monitoringServices.map((service, index) => (
                        <div key={index} className="flex items-center gap-4 rounded-[55px] border border-[#E9E9E9] bg-white px-8 py-4">
                             <div className="h-2 w-2 rounded-full bg-[#E11E24]" />
                            <p className="font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">{service}</p>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-center rounded-[21px] bg-white p-8">
                     <p className="mb-2 font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">Outcome</p>
                     <p className="mb-8 font-['TASA_Orbiter'] text-[32px] font-semibold leading-[1.27] text-black">
                        Early issue detection, improved uptime, and data-driven infrastructure insights.
                     </p>
                      <Link
                        href="/contact"
                        className="inline-flex w-fit items-center gap-3 rounded-[75px] border border-black/30 bg-white px-[29px] py-4 text-[15px] font-semibold uppercase tracking-[0.02em] text-black transition hover:bg-gray-100"
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
                            stroke="black"
                            strokeWidth="2"
                        />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Service 3: IT Performance Optimization */}
      <section className="bg-[#F8F8F8] px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1440px]">
            <h2 className="mb-6 font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.22] text-black">
              IT Performance Optimization
            </h2>
            <p className="mb-12 font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.26] text-black">
              Transform your IT systems into performance powerhouses through strategic optimization.<br/>
              We analyze workloads, configurations, and network flows to enhance speed, stability, and cost efficiency.
            </p>

            <div className="mb-12 h-[471px] w-full rounded-[13px] bg-gray-200" /> {/* Placeholder */}

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                     <h3 className="mb-6 font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">
                        Key Services
                    </h3>
                    <div className="space-y-4">
                        {optimizationServices.map((service, index) => (
                        <div key={index} className="flex items-center gap-4 rounded-[55px] border border-[#E9E9E9] bg-white px-8 py-4">
                             <div className="h-2 w-2 rounded-full bg-[#E11E24]" />
                            <p className="font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.08] text-black">{service}</p>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-center rounded-[21px] bg-white p-8">
                     <p className="mb-2 font-['TASA_Orbiter'] text-[40px] font-semibold leading-[1.08] text-black">Outcome</p>
                     <p className="mb-8 font-['TASA_Orbiter'] text-[32px] font-semibold leading-[1.27] text-black">
                        Higher system efficiency, lower operational costs, and enhanced user experience.
                     </p>
                      <Link
                        href="/contact"
                        className="inline-flex w-fit items-center gap-3 rounded-[75px] border border-black/30 bg-white px-[29px] py-4 text-[15px] font-semibold uppercase tracking-[0.02em] text-black transition hover:bg-gray-100"
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
                            stroke="black"
                            strokeWidth="2"
                        />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#F8F8F8] px-6 py-12 md:px-12 lg:px-[72px]">
         <div className="mx-auto max-w-[1440px] text-center">
            <h3 className="mb-4 font-['Manrope'] text-[18px] font-medium leading-[1.36] uppercase text-black">
                Partner Ecosystem
            </h3>
            <p className="mx-auto max-w-[1125px] font-['TASA_Orbiter'] text-[32px] font-bold leading-[1.375] text-black">
                We work with industry-leading OEMs to deliver enterprise-grade solutions that meet the highest standards of quality, performance, and security.
            </p>
            {/* Partner Logos Placeholder */}
            <div className="mt-12 h-[130px] w-full bg-gray-200 opacity-50" />
         </div>
      </section>

       {/* FAQs Section */}
       <section className="bg-[#F8F8F8] px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1225px]">
             <h2 className="mb-16 text-center font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.49] text-black">
                FAQs – IT Support, Monitoring & Optimization Services
             </h2>
             <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="rounded-[15px] bg-[#EFEFEF] p-6">
                        <div className="flex items-center justify-between">
                            <p className="font-['Manrope'] text-[20px] font-medium leading-[1.2] text-[#333333]">
                                {faq.question}
                            </p>
                            <div className="h-6 w-6 rounded-full border border-black flex items-center justify-center text-xl">
                                +
                            </div>
                        </div>
                        {faq.answer && (
                            <p className="mt-4 font-['Manrope'] text-[16px] font-normal leading-[1.43] text-[#333333]">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
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
