"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    // Validate required fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // If no errors, submit form (you can add API call here)
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log("Form submitted:", formData);
      // TODO: Add API endpoint call here
      alert("Form submitted successfully! (Connect to your API endpoint)");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-black px-6 py-24 text-white md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-4 font-['Inter'] text-[24px] font-normal leading-[1.5] text-white">
            Contact Us
          </p>
          <h1 className="mb-6 font-['TASA_Orbiter'] text-[48px] font-semibold leading-[1.3] text-white md:text-[56px] lg:text-[64px]">
            Partner with Nexobots to Build the Infrastructure of Tomorrow
          </h1>
          <p className="max-w-[900px] font-['Manrope'] text-[18px] font-normal leading-[1.5] text-white md:text-[20px]">
            Tell us about your project or IT needs, and our experts will get
            back to you with the best solution to simplify and strengthen your
            IT infrastructure
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1287px]">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Name Field */}
            <div className="border-b border-[#CACACA] pb-8">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-transparent font-['Inter'] text-[24px] font-normal leading-[1.5] text-black placeholder:text-black focus:outline-none"
                aria-label="Your Name"
                aria-required="true"
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-[#E11E24]">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="border-b border-[#CACACA] pb-8">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-transparent font-['Inter'] text-[24px] font-normal leading-[1.5] text-black placeholder:text-black focus:outline-none"
                aria-label="Email Address"
                aria-required="true"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-[#E11E24]">{errors.email}</p>
              )}
            </div>

            {/* Phone Field (Optional) */}
            <div className="border-b border-[#CACACA] pb-8">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number (optional)"
                className="w-full bg-transparent font-['Inter'] text-[24px] font-normal leading-[1.5] text-black placeholder:text-black focus:outline-none"
                aria-label="Phone Number"
              />
            </div>

            {/* Message Field */}
            <div className="border-b border-[#CACACA] pb-8">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent font-['Inter'] text-[24px] font-normal leading-[1.5] text-black placeholder:text-black focus:outline-none"
                aria-label="Message"
                aria-required="true"
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-[#E11E24]">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex items-center gap-3 rounded-[75px] border border-white/30 bg-black px-[29px] py-5 text-[20px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-gray-800"
            >
              Leave us a Message
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
            </button>
          </form>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white px-6 py-24 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Address */}
            <div>
              <h3 className="mb-4 font-['Manrope'] text-[20px] font-semibold leading-[1.366] text-black">
                Our Office
              </h3>
              <p className="mb-6 font-['Manrope'] text-[16px] font-normal leading-[1.5] text-black">
                #20/1, 2nd Main, Yeshwanthpur Industry, Bengaluru-560022, India
              </p>
              <Link
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[53px] border border-[#262626] bg-[#F5F5F5] px-6 py-3 text-[14px] font-medium text-white transition hover:bg-[#E5E5E5]"
              >
                <span className="text-black">Get Directions</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M5 15L15 5M15 5H8M15 5V12"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Email */}
            <div>
              <h3 className="mb-4 font-['Manrope'] text-[20px] font-semibold leading-[1.366] text-black">
                Email Us
              </h3>
              <a
                href="mailto:info@nexobots.com"
                className="font-['Manrope'] text-[16px] font-normal leading-[1.5] text-[#E11E24] hover:underline"
              >
                info@nexobots.com
              </a>
              <br />
              <a
                href="mailto:support@nexobots.com"
                className="font-['Manrope'] text-[16px] font-normal leading-[1.5] text-[#E11E24] hover:underline"
              >
                support@nexobots.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <h3 className="mb-4 font-['Manrope'] text-[20px] font-semibold leading-[1.366] text-black">
                Call Us
              </h3>
              <a
                href="tel:+918012345678"
                className="font-['Manrope'] text-[16px] font-normal leading-[1.5] text-black hover:text-[#E11E24]"
              >
                +91 80 1234 5678
              </a>
              <br />
              <a
                href="tel:+918087654321"
                className="font-['Manrope'] text-[16px] font-normal leading-[1.5] text-black hover:text-[#E11E24]"
              >
                +91 80 8765 4321
              </a>
              <p className="mt-4 font-['Manrope'] text-[14px] font-normal leading-[1.5] text-[#696969]">
                Monday - Friday: 9:00 AM - 6:00 PM IST
                <br />
                Saturday: 9:00 AM - 1:00 PM IST
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16 h-[400px] w-full overflow-hidden rounded-lg bg-[#F5F5F5]">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <svg
                  className="mx-auto mb-4 h-16 w-16 text-[#CACACA]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="font-['Manrope'] text-[16px] font-normal text-[#696969]">
                  Map Integration Placeholder
                  <br />
                  <span className="text-sm">
                    Replace with Google Maps iframe or Mapbox component
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

