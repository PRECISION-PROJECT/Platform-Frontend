import Image from "next/image";
import React from "react";

const ContactContentFormInfoUI = () => {
  return (
    <div className="relative w-full h-80 md:h-fit md:flex-1 md:max-w-[279px] md:aspect-[279/449] shrink-0">
      <Image
        src="/images/contact-info.jpeg"
        alt="Contact information"
        fill
        quality={100}
        className="object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 py-12 text-white">
        <span className="text-tan text-sm font-light uppercase tracking-wider mb-2">
          USA
        </span>

        <h2 className="text-xl font-spring leading-tight mb-14">
          PRECISION MOULDING AND WORKINGS
        </h2>

        <p className="text-xs font-light leading-relaxed mb-2">
          908 George St, New Bern, NC 28560
        </p>

        <p className="text-xs font-light leading-relaxed mb-2">
          Cell:
          <span className="text-tan ml-1">814-222-3333 - 814-222-3333</span>
        </p>

        <p className="text-xs font-light leading-relaxed mb-8">
          Email:
          <span className="text-tan ml-1">precsionwood@gmail.com</span>
        </p>

        <div className="w-full">
          <p className="text-white text-sm font-semibold uppercase mb-2">
            Operation Time
          </p>
          <p className="text-white text-xs font-light">
            From Mon to Fri 9AM - 5PM CST
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactContentFormInfoUI;
