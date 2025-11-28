import Image from "next/image";

const labelClasses =
  "font-['Manrope'] text-[20px] font-semibold leading-[1.5] text-[#707070]";
const inputClasses =
  "w-full rounded-[6px] border border-[#CECECE] bg-[#F2F2F2] px-4 py-4 text-[14px] font-medium text-[#4C4C4C] placeholder:text-[#4C4C4C] focus:border-[#E11E24] focus:outline-none";
const descriptionCopy =
  "Our experts are just a message away. Let’s connect and create technology that powers your tomorrow.";

export function ContactForm() {
  return (
    <section
      id="contact"
      className="bg-[#D9D9D9] px-6 pb-0 pt-[120px] md:px-12 lg:px-[72px] min-h-[739px]"
    >
      <div className="mx-auto w-full max-w-[1392px]">
        <div className="grid gap-[50px] lg:grid-cols-[360px_minmax(0,1fr)]">
          <div className="space-y-8">
            <Image
              src="/contact-form-icon.svg"
              alt="Contact icon"
              width={317}
              height={145}
              className="h-auto w-full max-w-[317px]"
            />
            <p className="font-['Manrope'] text-[18px] font-medium leading-[1.366] text-black">
              {descriptionCopy}
            </p>
          </div>

          <form className="space-y-[50px]">
            <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2">
              <div className="space-y-3">
                <label htmlFor="first-name" className={labelClasses}>
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="Enter First Name"
                  className={inputClasses}
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="last-name" className={labelClasses}>
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Enter Last Name"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2">
              <div className="space-y-3">
                <label htmlFor="email" className={labelClasses}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  className={inputClasses}
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="flex items-center gap-[4px] rounded-[7px] border border-[#CECECE] bg-[#F2F2F2] px-[12px] py-[10px]"
                    aria-label="Country code selector"
                    style={{
                      height: "100%",
                    }}
                  >
                    <Image
                      src="/indian-flag.png"
                      alt="Indian flag"
                      width={21}
                      height={21}
                      className="h-[21px] w-[21px] object-cover rounded-full"
                      aria-hidden="true"
                    />
                    <svg
                      viewBox="0 0 12 7"
                      className="h-[5px] w-[10px] text-[#4C4C4C]"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="flex-1 rounded-[6px] border border-[#CECECE] bg-[#F2F2F2] px-4 py-4 text-[14px] font-medium text-[#4C4C4C] placeholder:text-[#4C4C4C] focus:border-[#E11E24] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className={labelClasses}>
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your Message"
                rows={5}
                className={inputClasses}
              />
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <label
                htmlFor="terms"
                className="flex items-center gap-3 font-['Manrope'] text-[20px] font-semibold text-[#707070]"
              >
                <input
                  type="checkbox"
                  id="terms"
                  className="h-6 w-6 rounded border-[#CECECE] bg-[#C9C9C9] text-[#E11E24] focus:ring-[#E11E24]"
                />
                I agree with Terms of Use and Privacy Policy
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-[75px] border border-[rgba(70,70,70,0.3)] bg-black text-white transition hover:bg-black/90"
                style={{
                  width: "143px",
                  height: "45px",
                  padding: "13px 24px",
                }}
              >
                <span
                  className="whitespace-nowrap"
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: 300,
                    lineHeight: "0.78em",
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                  }}
                >
                  Submit
                </span>
                <Image
                  src="/solution-button-arrow.svg"
                  alt=""
                  width={5}
                  height={8}
                  className="h-[8px] w-[5px]"
                  aria-hidden="true"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

