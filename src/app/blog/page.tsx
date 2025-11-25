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
    category: "Infrastructure",
    date: "March 15, 2024",
    image: "/blog-1.png",
    Author: "Tracey Wilson",
  },
  {
    id: 2,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    excerpt: "Traditional CCTV systems are evolving into intelligent surveillance networks with AI-enabled analytics.",
    category: "Security",
    date: "March 10, 2024",
    image: "/blog-2.png",
    Author: "Jason Francisco",
  },
  {
    id: 3,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    excerpt: "Explore the latest trends in data center design, from energy efficiency to modular architectures.",
    category: "Cloud",
    date: "March 5, 2024",
    image: "/blog-3.png",
    Author: "Elizabeth Slavin",
  },
  {
    id: 4,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    excerpt: "Learn how 5G technology is transforming enterprise connectivity and enabling new use cases.",
    category: "Network",
    date: "March 1, 2024",
    image: "/blog-4.png",
    Author: "Tracey Wilson",
  },
  {
    id: 5,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    excerpt: "Discover the essential strategies for securing your organization's digital assets in an evolving threat landscape.",
    category: "Security",
    date: "February 25, 2024",
    image: "/blog-5.png",
    Author: "Jason Francisco",
  },
  {
    id: 6,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    excerpt: "Explore how IoT technology is revolutionizing building management and creating smarter workspaces.",
    category: "IoT",
    date: "February 20, 2024",
    image: "/blog-6.png",
    Author: "Elizabeth Slavin",
  },
] as const;

export default function BlogPage() {
  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[450px] w-full bg-white px-[142px] pt-[120px]">
        {/* "Blogs" text on the right side */}
        <div className="absolute left-[142px] top-[120px]">
          <p className="font-['TASA_Orbiter'] text-[18px] font-medium leading-[1.2] text-black">
            Blogs
          </p>
        </div>

        {/* Main Heading */}
        <div className="absolute left-[142px] top-[180px]">
          <h1 className="w-[1135px] h-[168px] font-['TASA_Orbiter'] text-[64px] font-semibold leading-[1.2] text-black">
          Partner with Nexobots to Build the Infrastructure of Tomorrow
          </h1>
        </div>

        {/* Description Text - 3 lines on the left */}
        <div className="absolute right-[142px] top-[380px]">
          <p className="w-[524px] h-[96px] font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.44] text-black">
          Whether you’re planning a new IT rollout, upgrading your network, or exploring managed services — we are here to help.
          </p>
        </div>
      </section>

      {/* Latest Post Section */}
      <section className="bg-white px-[75px] py-[120px]">
        <div className="mx-auto max-w-[1440px]">
          {/* Section Heading */}
          <h2 className="mb-[80px] font-['TASA_Orbiter'] text-[48px] font-semibold leading-[1.2] text-black">
            Latest Post
          </h2>

          {/* Blog Cards Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-3 gap-[57px]">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group flex h-[528px] w-full flex-col gap-6 rounded-[18px] border border-gray-300 p-6 transition-all hover:border-red-primary hover:shadow-lg"
              >
                {/* Blog Image */}
                <div className="relative h-[280px] w-full overflow-hidden rounded-[18px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                  <span className="rounded-full w-[113px] h-[28px] bg-red-primary/10 px-4 py-1 font-['Manrope'] text-[14px] font-semibold text-red-primary">
                    {post.category}
                  </span>
                  
            

                {/* Blog Title */}
                <h3 className="font-['TASA_Orbiter'] text-[24px] font-semibold leading-[1.3] text-black transition-colors group-hover:text-red-primary">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="font-['Manrope'] text-[14px] text-gray-a4">
                    {post.Author}
                  </span>
                  <span className="font-['Manrope'] text-[14px] text-gray-a4">
                    {post.date}
                  </span>
                  
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 font-['Manrope'] text-[14px] font-semibold uppercase tracking-[0.02em] text-red-primary transition-all group-hover:gap-4"
                >
                  Read More
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M10 0L10 20M10 20L20 10M10 20L0 10"
                      stroke="#E11E24"
                      strokeWidth="2"
                    />
                  </svg>
                </Link>
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

