"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    excerpt: "As organizations embrace digital transformation, network infrastructure plays a critical role in ensuring performance and security.",
    category: "Data Security",
    date: "August 20, 2022",
    image: "/blog-1.png",
    Author: "Tracey Wilson",
  },
  {
    id: 2,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    excerpt: "Traditional CCTV systems are evolving into intelligent surveillance networks with AI-enabled analytics.",
    category: "Technology",
    date: "August 20, 2022",
    image: "/blog-2.png",
    Author: "Jason Francisco",
  },
  {
    id: 3,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    excerpt: "Explore the latest trends in data center design, from energy efficiency to modular architectures.",
    category: "Technology",
    date: "August 20, 2022",
    image: "/blog-3.png",
    Author: "Elizabeth Slavin",
  },
  {
    id: 4,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    excerpt: "Learn how 5G technology is transforming enterprise connectivity and enabling new use cases.",
    category: "Data Security",
    date: "August 20, 2022",
    image: "/blog-1.png",
    Author: "Tracey Wilson",
  },
  {
    id: 5,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    excerpt: "Discover the essential strategies for securing your organization's digital assets in an evolving threat landscape.",
    category: "Technology",
    date: "August 20, 2022",
    image: "/blog-2.png",
    Author: "Jason Francisco",
  },
  {
    id: 6,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    excerpt: "Explore how IoT technology is revolutionizing building management and creating smarter workspaces.",
    category: "Technology",
    date: "August 20, 2022",
    image: "/blog-3.png",
    Author: "Elizabeth Slavin",
  },
] as const;

export default function BlogPage() {
  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* Hero Section - Exact from Figma */}
      <section className="relative w-full bg-white" style={{ padding: "120px 81px 120px" }}>
        <div className="mx-auto max-w-[1440px]">
          <div className="relative">
            {/* "Blogs" text - Exact from Figma */}
            <div className="mb-[25px]">
              <p
                className="font-['Inter'] text-black"
                style={{
                  fontSize: "24px",
                  fontWeight: 400,
                  lineHeight: "1.5",
                }}
              >
                Blogs
              </p>
            </div>

            {/* Main Heading - Exact from Figma */}
            <div className="mb-[58px]">
              <h1
                className="font-['TASA_Orbiter'] text-black"
                style={{
                  fontSize: "64px",
                  fontWeight: 600,
                  lineHeight: "1.32",
                  maxWidth: "1135px",
                }}
              >
                Nexobots Blogs – IT Infrastructure & Network Insights
              </h1>
            </div>

            {/* Description Text - Exact from Figma: positioned on the right */}
            <div
              className="absolute"
              style={{
                right: "0",
                top: "225px",
                maxWidth: "574px",
              }}
            >
              <p
                className="font-['TASA_Orbiter'] text-black"
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "1.32",
                }}
              >
                Discover the latest developments in the IT industry and gain insights
                into the world of IT networking and the infrastructure that powers it
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Post Section - Exact from Figma */}
      <section className="bg-white" style={{ padding: "120px 75px" }}>
        <div className="mx-auto max-w-[1440px]">
          {/* Section Heading - Exact from Figma */}
          <h2
            className="font-['TASA_Orbiter'] text-black mb-[80px]"
            style={{
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "1.167",
            }}
          >
            Latest Post
          </h2>

          {/* Blog Cards Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-3 gap-[57px]">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group flex w-full flex-col items-center gap-4 rounded-[12px] border border-[#E8E8EA] bg-white p-4 transition-all hover:border-red-primary hover:shadow-lg"
                style={{
                  width: "392px",
                  minHeight: "fit-content",
                }}
              >
                {/* Blog Image - Exact from Figma: 360x240px, borderRadius: 6px */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: "360px",
                    height: "240px",
                    borderRadius: "6px",
                  }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="360px"
                  />
                </div>

                {/* Content Container */}
                <div className="flex w-full flex-1 flex-col gap-5" style={{ alignSelf: "stretch", padding: "8px" }}>
                  {/* Badge and Title */}
                  <div className="flex flex-col gap-4">
                    {/* Badge - Exact from Figma */}
                    <span
                      className="inline-flex w-fit items-center justify-center rounded-[6px] px-[10px] py-1"
                      style={{
                        backgroundColor: "rgba(75, 107, 251, 0.05)",
                        height: "28px",
                      }}
                    >
                      <span
                        className="font-['Work_Sans'] text-[#E11E24]"
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          lineHeight: "1.429",
                        }}
                      >
                        {post.category}
                      </span>
                    </span>

                    {/* Blog Title - Exact from Figma */}
                    <h3
                      className="font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontSize: "24px",
                        fontWeight: 600,
                        lineHeight: "1.167",
                      }}
                    >
                      {post.title}
                    </h3>
                  </div>

                  {/* Author and Date - Exact from Figma */}
                  <div className="flex items-center gap-5">
                    <span
                      className="font-['Manrope'] text-[#97989F]"
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "1.5",
                      }}
                    >
                      {post.Author}
                    </span>
                    <span
                      className="font-['Manrope'] text-[#97989F]"
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "1.5",
                      }}
                    >
                      {post.date}
                    </span>
                  </div>

                  {/* Read More Button - Exact from Figma */}
                  <div className="mt-auto">
                    <Link
                      href={`/blog/${post.id}`}
                      className="relative inline-flex items-center justify-center overflow-hidden bg-black transition-all hover:bg-black/90"
                      style={{
                        width: "111px",
                        height: "32px",
                        borderRadius: "75px",
                        outline: "1px rgba(255, 255, 255, 0.30) solid",
                        outlineOffset: "-1px",
                      }}
                    >
                      <span
                        className="font-['Manrope'] text-white"
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          letterSpacing: "0.24px",
                        }}
                      >
                        Read More
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
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

