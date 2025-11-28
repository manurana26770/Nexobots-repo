"use client";

import Image from "next/image";

export default function Partners() {
  return (
    <>
      <style>{`
        @keyframes partnerScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-4839px - 250px));
          }
        }
        .partner-scroll {
          animation: partnerScroll 60s linear infinite;
        }
      `}</style>
      <section
        id="partners"
        className="relative bg-white pt-[120px] pb-0"
        style={{ minHeight: "558px" }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6">
          {/* Heading Section */}
          <div
            className="mx-auto mb-[64px] flex flex-col items-center gap-4"
            style={{ maxWidth: "1143px" }}
          >
            <p className="font-['Manrope'] text-[18px] font-medium leading-[1.366] text-center text-black">
              Partner Ecosystem
            </p>
            <h2 className="max-w-[792px] text-center font-['TASA_Orbiter'] text-[32px] font-bold leading-[1.375] text-black">
              We work with industry-leading OEMs to deliver enterprise-grade solutions that meet the highest standards of quality, performance, and security.
            </h2>
          </div>
        </div>

        {/* Partner Logos - Scrolling Marquee - Full Width */}
        <div className="relative w-full overflow-hidden" style={{ height: "129px", marginTop: "45px" }}>
          <div className="partner-scroll flex items-center" style={{ width: "max-content" }}>
            <Image
              src="/partners-logos.svg"
              alt="Partner logos"
              width={4839}
              height={129}
              className="h-[129px] w-auto flex-shrink-0"
              style={{ marginRight: "250px" }}
              priority
            />
            <Image
              src="/partners-logos.svg"
              alt="Partner logos"
              width={4839}
              height={129}
              className="h-[129px] w-auto flex-shrink-0"
              style={{ marginRight: "250px" }}
              aria-hidden="true"
            />
            <Image
              src="/partners-logos.svg"
              alt="Partner logos"
              width={4839}
              height={129}
              className="h-[129px] w-auto flex-shrink-0"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </>
  );
}

