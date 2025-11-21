import Image from "next/image";

export function ContactForm() {
  return (
    <section id="contact" className="bg-[#D9D9D9] px-6 py-24 md:px-12 lg:px-[72px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left side - Icon and Description */}
          <div className="flex flex-col items-start space-y-6">
            <Image
              src="/contact-form-icon.svg"
              alt="Contact Icon"
              width={317}
              height={145}
              className="h-auto w-full max-w-[317px]"
            />
            <p className="font-['Manrope'] text-[18px] font-medium leading-[1.366] text-black">
              Our experts are just a message away. Let&apos;s connect and
              create technology that powers your tomorrow.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2">
              {/* First Name */}
              <div className="space-y-3">
                <label className="font-['Manrope'] text-[20px] font-semibold leading-[1.5] text-[#707070]">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full rounded-[6px] border border-[#CECECE] bg-[#F2F2F2] px-4 py-4 text-[14px] font-medium text-[#4C4C4C] placeholder:text-[#4C4C4C] focus:border-[#E11E24] focus:outline-none"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-3">
                <label className="font-['Manrope'] text-[20px] font-semibold leading-[1.5] text-[#707070]">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full rounded-[6px] border border-[#CECECE] bg-[#F2F2F2] px-4 py-4 text-[14px] font-medium text-[#4C4C4C] placeholder:text-[#4C4C4C] focus:border-[#E11E24] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2">
              {/* Email */}
              <div className="space-y-3">
                <label className="font-['Manrope'] text-[20px] font-semibold leading-[1.5] text-[#707070]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full rounded-[6px] border border-[#CECECE] bg-[#F2F2F2] px-4 py-4 text-[14px] font-medium text-[#4C4C4C] placeholder:text-[#4C4C4C] focus:border-[#E11E24] focus:outline-none"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-3">
                <label className="font-['Manrope'] text-[20px] font-semibold leading-[1.5] text-[#707070]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full rounded-[6px] border border-[#CECECE] bg-[#F2F2F2] px-4 py-4 text-[14px] font-medium text-[#4C4C4C] placeholder:text-[#4C4C4C] focus:border-[#E11E24] focus:outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-3">
              <label className="font-['Manrope'] text-[20px] font-semibold leading-[1.5] text-[#707070]">
                Message
              </label>
              <textarea
                placeholder="Enter your Message"
                rows={5}
                className="w-full rounded-[6px] border border-[#CECECE] bg-[#F2F2F2] px-4 py-4 text-[14px] font-medium text-[#4C4C4C] placeholder:text-[#4C4C4C] focus:border-[#E11E24] focus:outline-none"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="terms"
                className="h-6 w-6 rounded border-[#CECECE] bg-[#C9C9C9] text-[#E11E24] focus:ring-[#E11E24]"
              />
              <label
                htmlFor="terms"
                className="font-['Manrope'] text-[20px] font-semibold text-[#707070]"
              >
                I agree with Terms of Use and Privacy Policy
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex items-center gap-3 rounded-[75px] border border-[rgba(70,70,70,0.3)] bg-black px-6 py-[13px] text-[20px] font-light uppercase tracking-[0.02em] text-white transition hover:bg-gray-800"
            >
              Submit
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
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

