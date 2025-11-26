"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* Our Blog Heading - Exact from Figma */}
      <section className="bg-white" style={{ padding: "120px 72px 0", marginBottom: "40px" }}>
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center gap-4">
            {/* Our Blog Text */}
            <span
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "32px",
                fontWeight: 600,
                lineHeight: "1.32",
              }}
            >
              Our Blog
            </span>

            {/* Red Arrow */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#E11E24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Dotted Line */}
            <div
              style={{
                flex: "1",
                height: "2px",
                borderTop: "2px dashed #0066CC",
                maxWidth: "100px",
              }}
            />

            {/* Blog Title */}
            <div
              className="font-['TASA_Orbiter']"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "40px",
                color: "#E11E24",
                wordWrap: "break-word",
              }}
            >
              The Impact of Technology on the Workplace: How Technology is Changing
            </div>
          </div>
        </div>
      </section>

      {/* Blog Article Section - Exact from Figma */}
      <section className="bg-white" style={{ padding: "32px 72px 120px" }}>
        <div className="mx-auto max-w-[1440px]">
          <div className="flex gap-8">
            {/* Main Article Content */}
            <article className="flex-1" style={{ maxWidth: "840px" }}>
              {/* Blog Info Header */}
              <div className="mb-8">
                <div className="mb-5">
                  {/* Logo and Title */}
                  <div className="mb-[41px]">
                    <div className="mb-5">
                      <Image
                        src="/logo.svg"
                        alt="Nexobots"
                        width={120}
                        height={22}
                        className="h-[22px] w-[120px]"
                      />
                    </div>
                    <h1
                      className="font-['TASA_Orbiter'] text-[#181A2A]"
                      style={{
                        fontSize: "36px",
                        fontWeight: 600,
                        lineHeight: "1.111",
                      }}
                    >
                      The Impact of Technology on the Workplace: How Technology is Changing
                    </h1>
                  </div>

                  {/* Author and Date */}
                  <div className="flex items-center gap-6">
                    <span
                      className="font-['TASA_Orbiter'] text-[#696A75]"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "2",
                      }}
                    >
                      B Mohana Kumara
                    </span>
                    <span
                      className="font-['TASA_Orbiter'] text-[#696A75]"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "2",
                      }}
                    >
                      August 20, 2022
                    </span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div
                className="relative mb-8 overflow-hidden rounded-[12px]"
                style={{ height: "462px" }}
              >
                <Image
                  src="/blog-detail-hero.png"
                  alt="The Impact of Technology on the Workplace"
                  fill
                  className="object-cover"
                  sizes="840px"
                />
              </div>

              {/* First Paragraph */}
              <div className="mb-8">
                <p
                  className="font-['Manrope'] text-[#3B3C4A]"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "1.6",
                  }}
                >
                  Traveling is an enriching experience that opens up new horizons, exposes us to
                  different cultures, and creates memories that last a lifetime. However, traveling
                  can also be stressful and overwhelming, especially if you don't plan and prepare
                  adequately. In this blog article, we'll explore tips and tricks for a memorable
                  journey and how to make the most of your travels.
                </p>
                <br />
                <p
                  className="font-['Manrope'] text-[#3B3C4A]"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "1.6",
                  }}
                >
                  One of the most rewarding aspects of traveling is immersing yourself in the local
                  culture and customs. This includes trying local cuisine, attending cultural
                  events and festivals, and interacting with locals. Learning a few phrases in the
                  local language can also go a long way in making connections and showing respect.
                </p>
              </div>

              {/* Research Your Destination Section */}
              <div className="mb-8">
                <h2
                  className="mb-4 font-['Manrope'] text-[#181A2A]"
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "1.6",
                  }}
                >
                  Research Your Destination
                </h2>
                <p
                  className="font-['Manrope'] text-[#3B3C4A]"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "1.6",
                  }}
                >
                  Before embarking on your journey, take the time to research your destination.
                  This includes understanding the local culture, customs, and laws, as well as
                  identifying top attractions, restaurants, and accommodations. Doing so will help
                  you navigate your destination with confidence and avoid any cultural faux pas.
                </p>
                <br />
                <p
                  className="font-['Manrope'] text-[#3B3C4A]"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "1.6",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque
                  non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit
                  amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra
                  adipiscing at in tellus.
                </p>
              </div>

              {/* Plan Your Itinerary Section */}
              <div className="mb-8">
                <h2
                  className="mb-4 font-['Manrope'] text-[#181A2A]"
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "1.6",
                  }}
                >
                  Plan Your Itinerary
                </h2>
                <p
                  className="font-['Manrope'] text-[#3B3C4A]"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "1.6",
                  }}
                >
                  While it's essential to leave room for spontaneity and unexpected adventures,
                  having a rough itinerary can help you make the most of your time and budget.
                  Identify the must-see sights and experiences and prioritize them according to your
                  interests and preferences. This will help you avoid overscheduling and ensure
                  that you have time to relax and enjoy your journey.
                </p>
                <br />
                <p
                  className="font-['Manrope'] text-[#3B3C4A]"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "1.6",
                  }}
                >
                  Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna
                  fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non
                  sodales neque sodales ut etiam sit amet.
                </p>
              </div>

              {/* Image 1 */}
              <div
                className="relative mb-8 overflow-hidden rounded-[12px]"
                style={{ height: "303px" }}
              >
                <Image
                  src="/blog-detail-image-1.png"
                  alt="Travel Planning"
                  fill
                  className="object-cover"
                  sizes="840px"
                />
              </div>

              {/* Contact Form Embedded in Article - Exact from Figma */}
              <div
                className="relative mb-8 overflow-hidden rounded-[22px] bg-[#F7F7F7]"
                style={{ height: "447px", padding: "35px" }}
              >
                {/* Left side text */}
                <div className="absolute" style={{ left: "35px", top: "54px", width: "403px" }}>
                  <p
                    className="font-['Manrope'] text-[#696969] mb-6"
                    style={{
                      fontSize: "32px",
                      fontWeight: 400,
                      lineHeight: "1.366",
                    }}
                  >
                    Need IT network support? Let's connect Our team will get back to you with the
                    right options.
                  </p>
                  <h3
                    className="font-['TASA_Orbiter'] text-[#707070] mb-6"
                    style={{
                      fontSize: "20px",
                      fontWeight: 500,
                      lineHeight: "1.3",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Connect with Us
                  </h3>
                  {/* Social Icons */}
                  <div className="flex gap-2">
                    <button className="flex h-[37px] w-[41px] items-center justify-center rounded-md border border-[#98989A]">
                      <span className="text-[#98989A]">f</span>
                    </button>
                    <button className="flex h-[37px] w-[39px] items-center justify-center rounded-md border border-[#98989A]">
                      <span className="text-[#98989A]">t</span>
                    </button>
                    <button className="flex h-[37px] w-[40px] items-center justify-center rounded-md border border-[#98989A]">
                      <span className="text-[#98989A]">in</span>
                    </button>
                  </div>
                </div>

                {/* Right side form */}
                <div className="absolute" style={{ right: "35px", top: "58px", width: "258px" }}>
                  <div className="mb-3">
                    <label
                      className="font-['Manrope'] text-[#707070] mb-3 block"
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        lineHeight: "1.5",
                      }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="w-full rounded-md border border-[#CECECE] bg-[#F2F2F2] px-4 py-4"
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      className="font-['Manrope'] text-[#707070] mb-3 block"
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        lineHeight: "1.5",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="w-full rounded-md border border-[#CECECE] bg-[#F2F2F2] px-4 py-4"
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      className="font-['Manrope'] text-[#707070] mb-3 block"
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        lineHeight: "1.5",
                      }}
                    >
                      Phone Number
                    </label>
                    <div className="flex gap-3">
                      <div className="flex h-[56px] w-[80px] items-center justify-center gap-1 rounded-md border border-[#CECECE] bg-[#F2F2F2] px-3 py-2">
                        <Image
                          src="/globe.svg"
                          alt=""
                          width={21}
                          height={21}
                          className="h-[21px] w-[21px]"
                        />
                      </div>
                      <input
                        type="tel"
                        placeholder="Enter Phone Number"
                        className="flex-1 rounded-md border border-[#CECECE] bg-[#F2F2F2] px-4 py-4"
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      />
                    </div>
                  </div>

                  <button
                    className="mt-4 inline-flex h-8 w-[107px] items-center justify-center gap-2 rounded-[75px] border border-[rgba(70,70,70,0.3)] bg-black"
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                    }}
                  >
                    <span className="text-white">Submit</span>
                    <Image
                      src="/find-out-more-arrow.svg"
                      alt=""
                      width={12}
                      height={12}
                      className="h-3 w-3"
                    />
                  </button>
                </div>
              </div>

              {/* Pack Lightly and Smartly Section */}
              <div className="mb-8">
                <h2
                  className="mb-4 font-['Manrope'] text-[#181A2A]"
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "1.167",
                  }}
                >
                  Pack Lightly and Smartly
                </h2>
                <p
                  className="font-['Manrope'] text-[#3B3C4A]"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "1.6",
                  }}
                >
                  Packing can be a daunting task, but with some careful planning and smart choices,
                  you can pack light and efficiently. Start by making a packing list and sticking
                  to it, focusing on versatile and comfortable clothing that can be mixed and
                  matched. Invest in quality luggage and packing organizers to maximize space and
                  minimize wrinkles.
                </p>
              </div>

              {/* Stay Safe and Healthy Section */}
              <div className="mb-8">
                <h2
                  className="mb-4 font-['Manrope'] text-[#181A2A]"
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "1.167",
                  }}
                >
                  Stay Safe and Healthy
                </h2>
                <p
                  className="font-['Manrope'] text-[#3B3C4A]"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "1.6",
                  }}
                >
                  Traveling can expose you to new environments and potential health risks, so it's
                  crucial to take precautions to stay safe and healthy. This includes researching
                  any required vaccinations or medications, staying hydrated, washing your hands
                  frequently, and using sunscreen and insect repellent. It's also essential to
                  keep your valuables safe and secure and to be aware of your surroundings at all
                  times.
                </p>
              </div>

              {/* Immerse Yourself in the Local Culture Section */}
              <div className="mb-8">
                <h2
                  className="mb-4 font-['Manrope'] text-[#181A2A]"
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "1.167",
                  }}
                >
                  Immerse Yourself in the Local Culture
                </h2>
                <p
                  className="font-['Manrope'] text-[#3B3C4A]"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "1.6",
                  }}
                >
                  One of the most rewarding aspects of traveling is immersing yourself in the local
                  culture and customs. This includes trying local cuisine, attending cultural
                  events and festivals, and interacting with locals. Learning a few phrases in the
                  local language can also go a long way in making connections and showing respect.
                </p>
              </div>

              {/* Image 2 */}
              <div
                className="relative mb-8 overflow-hidden rounded-[12px]"
                style={{ height: "462px" }}
              >
                <Image
                  src="/blog-detail-image-2.png"
                  alt="Local Culture"
                  fill
                  className="object-cover"
                  sizes="840px"
                />
              </div>

              {/* Capture Memories Section */}
              <div className="mb-8">
                <h2
                  className="mb-4 font-['Manrope'] text-[#181A2A]"
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "1.167",
                  }}
                >
                  Capture Memories
                </h2>
                <p
                  className="font-['Manrope'] text-[#3B3C4A]"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "1.6",
                  }}
                >
                  Finally, don't forget to capture memories of your journey. Whether it's through
                  photographs, journaling, or souvenirs, preserving the moments and experiences
                  of your travels can bring joy and nostalgia for years to come. However, it's also
                  essential to be present in the moment and not let technology distract you from
                  the beauty of your surroundings.
                </p>
              </div>

              {/* Conclusion Section */}
              <div className="mb-8">
                <h2
                  className="mb-4 font-['Manrope'] text-[#181A2A]"
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "1.4",
                  }}
                >
                  Conclusion:
                </h2>
                <p
                  className="font-['Manrope'] text-[#3B3C4A]"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "1.6",
                  }}
                >
                  Traveling is an art form that requires a blend of planning, preparation, and
                  spontaneity. By following these tips and tricks, you can make the most of your
                  journey and create memories that last a lifetime. So pack your bags, embrace the
                  adventure, and enjoy the ride.
                </p>
              </div>

              {/* Share this article Section - Exact from Figma */}
              <div
                className="mb-8 rounded-[22px] bg-[#F7F7F7]"
                style={{ height: "150px", padding: "35px" }}
              >
                <h3
                  className="font-['Manrope'] text-black"
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    lineHeight: "1.366",
                    marginBottom: "22px",
                  }}
                >
                  Share this article
                </h3>
                <div className="flex gap-[9px]">
                  {/* Facebook Button - 41px × 37px */}
                  <button
                    className="flex h-[37px] w-[41px] items-center justify-center rounded-md border border-[#7D7D7D]"
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 0C4.701 0 0 4.701 0 10.5C0 15.399 3.656 19.476 8.438 19.938V12.969H5.906V10.5H8.438V8.344C8.438 5.813 9.93 4.406 12.213 4.406C13.309 4.406 14.453 4.625 14.453 4.625V6.688H13.192C11.95 6.688 11.563 7.4 11.563 8.125V10.5H14.344L13.893 12.969H11.563V19.938C16.345 19.476 20 15.399 20 10.5C20 4.701 15.299 0 10.5 0Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </button>

                  {/* Twitter Button - 39px × 37px */}
                  <button
                    className="flex h-[37px] w-[39px] items-center justify-center rounded-md border border-[#7D7D7D]"
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5 4.5C15.1 4.7 14.6 4.8 14.1 4.9C14.6 4.6 15 4.1 15.2 3.5C14.7 3.8 14.1 4 13.5 4.1C13 3.6 12.3 3.3 11.5 3.3C9.9 3.3 8.6 4.6 8.6 6.2C8.6 6.4 8.6 6.6 8.7 6.8C6.1 6.7 3.8 5.4 2.2 3.4C2 3.7 1.9 4.1 1.9 4.5C1.9 5.3 2.3 6 2.9 6.4C2.5 6.4 2.2 6.3 1.9 6.1C1.9 7.4 2.7 8.5 3.8 8.8C3.6 8.8 3.4 8.9 3.2 8.9C3 8.9 2.8 8.9 2.6 8.8C3 9.9 4 10.7 5.2 10.7C4.2 11.4 3 11.8 1.7 11.8C1.5 11.8 1.3 11.8 1.1 11.8C2.3 12.5 3.7 13 5.2 13C11.5 13 15.1 9 15.1 5.5C15.1 5.4 15.1 5.3 15.1 5.2C15.6 4.9 16 4.5 16.4 4.1L15.5 4.5Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </button>

                  {/* LinkedIn Button - 40px × 37px */}
                  <button
                    className="flex h-[37px] w-[40px] items-center justify-center rounded-md border border-[#7D7D7D]"
                  >
                    <svg
                      width="17.33"
                      height="17.33"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM5.5 15H3V7H5.5V15ZM4.25 5.8C3.45 5.8 2.8 5.15 2.8 4.35C2.8 3.55 3.45 2.9 4.25 2.9C5.05 2.9 5.7 3.55 5.7 4.35C5.7 5.15 5.05 5.8 4.25 5.8ZM15 15H12.5V11.2C12.5 10.3 12.5 9.2 11.4 9.2C10.3 9.2 10.1 10.1 10.1 11.1V15H7.6V7H10V8H10.05C10.3 7.4 11.1 6.8 12.2 6.8C14.4 6.8 15 8.1 15 10.5V15Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </button>

                  {/* Pinterest Button - 40px × 37px */}
                  <button
                    className="flex h-[37px] w-[40px] items-center justify-center rounded-md border border-[#7D7D7D]"
                  >
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0C3.6 0 0 3.2 0 7.2C0 9.6 1.2 11.7 3 12.7C3.1 12.4 3.2 11.9 3.3 11.5C3.4 11.2 3.6 10.3 3.6 10.3C3.7 10.1 3.8 9.9 3.9 9.7C4.5 9.1 4.8 8.4 4.8 7.6C4.8 6.1 3.9 4.9 3.9 3.7C3.9 2.4 4.7 1.6 5.6 1.6C6.4 1.6 6.8 2.1 6.8 2.7C6.8 3.4 6.3 4.5 6 5.5C5.7 6.4 6.2 7.2 7.1 7.2C8.3 7.2 9.1 6 9.1 4.1C9.1 2.6 8.1 1.5 6.5 1.5C4.5 1.5 3.2 3 3.2 4.8C3.2 5.6 3.5 6.3 4 6.6C4 6.5 4.1 6.3 4.1 6.1C4.1 5.9 4 5.6 3.9 5.4C3.8 5.1 3.7 4.8 3.7 4.6C3.6 4.2 3.9 3.9 4.3 3.9C4.5 3.9 4.7 4 4.8 4.2C5 4.6 5.3 5.2 5.5 5.6C5.7 6 5.9 6.4 6.2 6.7C6.4 6.9 6.7 7.1 7 7.1C7.5 7.1 7.9 6.8 8.1 6.4C8.3 5.9 8.5 5.2 8.5 4.6C8.5 3.5 7.8 2.6 6.6 2.6C5.1 2.6 3.8 3.9 3.8 5.9C3.8 6.7 4.1 7.4 4.5 7.8C4.5 7.9 4.5 7.9 4.5 8C4.5 8.1 4.4 8.2 4.3 8.2C4.2 8.2 4.1 8.1 4 8C3.7 7.6 3.5 6.9 3.5 6.2C3.5 4.4 4.8 2.2 7.1 2.2C8.9 2.2 10.2 3.4 10.2 5.1C10.2 6.9 9.1 8.4 7.4 8.4C6.7 8.4 6.1 8.1 5.8 7.7C5.8 7.7 5.5 9.1 5.4 9.6C5.2 10.4 4.9 11.2 4.6 11.9C4.1 13.2 3.4 14.4 2.7 15.5C3.4 15.7 4.1 15.8 4.9 15.8C9.2 15.8 12.6 12.1 12.6 7.5C12.6 3.4 9.6 0 8 0Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </button>

                  {/* WhatsApp Button - 40px × 37px */}
                  <button
                    className="flex h-[37px] w-[40px] items-center justify-center rounded-md border border-[#7D7D7D]"
                  >
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 0C4.3 0 0 3.1 0 7C0 8.4 0.5 9.7 1.4 10.7L0 14L3.5 12.7C4.4 13.3 5.4 13.6 6.5 13.6H6.6C11.8 13.6 16.1 10.5 16.1 6.5C16.1 2.5 11.8 0 9.5 0ZM6.5 12.1C5.7 12.1 4.9 11.9 4.2 11.4L3.9 11.2L1.7 11.9L2.4 9.8L2.2 9.5C1.6 8.7 1.3 7.7 1.3 6.6C1.3 3.7 4.2 1.4 6.6 1.4C9 1.4 11.9 3.7 11.9 6.6C11.9 9.5 9 12.1 6.5 12.1ZM9.8 7.8L7.8 7.9C7.6 7.9 7.4 7.8 7.3 7.6L6.3 6.1C6.1 5.8 6.2 5.4 6.5 5.2L7.5 4.4C7.8 4.2 8.2 4.3 8.4 4.6L9.1 5.6C9.3 5.9 9.6 6 9.9 5.9L11.8 5.5C12.1 5.4 12.4 5.6 12.5 5.9L12.9 7.2C13 7.5 12.8 7.8 12.5 7.9L9.8 7.8Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </button>

                  {/* Copy/Share Button - 40px × 37px */}
                  <button
                    className="flex h-[37px] w-[40px] items-center justify-center rounded-md border border-[#7D7D7D]"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0H2C0.9 0 0 0.9 0 2V12H2V2H12V0ZM15 4H6C4.9 4 4 4.9 4 6V15C4 16.1 4.9 17 6 17H15C16.1 17 17 16.1 17 15V6C17 4.9 16.1 4 15 4ZM15 15H6V6H15V15Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar - Table of Contents and Explore More */}
            <aside
              className="flex-shrink-0 rounded-lg bg-[#F9F9F9] p-6"
              style={{ width: "400px", position: "sticky", top: "120px", alignSelf: "flex-start" }}
            >
              {/* <h3
                className="mb-6 font-['Manrope'] text-[#121416]"
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "1.366",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                TABLE OF CONTENTS
              </h3> */}
              <nav className="space-y-4">
                <Link
                  href="#research"
                  className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                >
                  <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <span
                    className="font-['Manrope']"
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    Research Your Destination
                  </span>
                </Link>
                <Link
                  href="#itinerary"
                  className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                >
                  <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <span
                    className="font-['Manrope']"
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    Plan Your Itinerary
                  </span>
                </Link>
                <div className="space-y-6 pl-11">
                  <Link
                    href="#pack"
                    className="flex items-center gap-5 text-[rgba(225,30,36,0.48)] hover:text-[#E11E24]"
                  >
                    <div className="h-[6px] w-[6px] rounded-full bg-[#CED4DA]" />
                    <span
                      className="font-['Manrope']"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.75",
                      }}
                    >
                      Pack Lightly and Smartly
                    </span>
                  </Link>
                  <Link
                    href="#safe"
                    className="flex items-center gap-5 text-[rgba(225,30,36,0.48)] hover:text-[#E11E24]"
                  >
                    <div className="h-[6px] w-[6px] rounded-full bg-[#CED4DA]" />
                    <span
                      className="font-['Manrope']"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1.75",
                      }}
                    >
                      Stay Safe and Healthy
                    </span>
                  </Link>
                </div>
                <div className="space-y-4 pl-11">
                  <Link
                    href="#culture"
                    className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                  >
                    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <span
                      className="font-['Manrope']"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "1.4",
                      }}
                    >
                      Immerse Yourself in the Local Culture
                    </span>
                  </Link>
                  <Link
                    href="#culture-2"
                    className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                  >
                    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <span
                      className="font-['Manrope']"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "1.4",
                      }}
                    >
                      Immerse Yourself in the Local Culture
                    </span>
                  </Link>
                </div>
                <div className="space-y-4 pl-11">
                  <Link
                    href="#memories"
                    className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                  >
                    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                      <span className="text-sm font-medium">5</span>
                    </div>
                    <span
                      className="font-['Manrope']"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "1.4",
                      }}
                    >
                      Capture Memories
                    </span>
                  </Link>
                  <div className="flex items-center gap-5">
                    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                      <span className="text-sm font-medium">6</span>
                    </div>
                    <span
                      className="font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "1.4",
                      }}
                    >
                      Conclusion
                    </span>
                  </div>
                </div>
              </nav>

              {/* Explore More Section - Below Table of Contents */}
              <div style={{ marginTop: "32px" }}>
                <h2
                  className="mb-8 font-['Manrope'] text-[#212121]"
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "1.333",
                    marginBottom: "32px",
                  }}
                >
                  Explore More
                </h2>
                <div className="flex flex-col gap-4 rounded-[12px] border border-[#E8E8EA] bg-white p-4">
                  <div
                    className="relative overflow-hidden rounded-[12px]"
                    style={{ width: "100%", height: "150px" }}
                  >
                    <Image
                      src="/blog-detail-related.png"
                      alt="Sustainable Travel Tips"
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                  </div>
                  <div className="flex-1">
                    <p
                      className="mb-2 font-['Manrope'] text-[#212121]"
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "1.143",
                      }}
                    >
                      Nov 29, 2024
                    </p>
                    <h3
                      className="mb-2 font-['Manrope'] text-[#212121]"
                      style={{
                        fontSize: "20px",
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Sustainable Travel Tips: Reducing Your Carbon Footprint
                    </h3>
                    <p
                      className="mb-4 font-['Manrope'] text-[#212121]"
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "1.429",
                      }}
                    >
                      Clara Wilson
                    </p>
                    <Link
                      href="/blog/1"
                      className="inline-flex h-8 w-[111px] items-center justify-center gap-2 rounded-[75px] border border-white/30 bg-black"
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                      }}
                    >
                      <span className="text-white">Read More</span>
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
            </aside>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

