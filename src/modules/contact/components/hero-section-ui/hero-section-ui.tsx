import Image from "next/image";
import React from "react";

const HeroSectionUI = () => {
  return (
    <div className="relative w-full aspect-[10/4] sm:aspect-[16/6] md:aspect-[16/5]">
      {/* Background image */}
      <Image
        src="/images/contact-background.jpeg"
        alt="Contact background"
        fill
        quality={100}
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center opacity-80">
        <p className="text-xs sm:text-sm font-light tracking-widest">
          PRECISION WOOD
        </p>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-xs sm:text-sm font-light mb-4">HOME / CONTACT</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-13xl font-spring font-light tracking-wide">
          CONTACT
        </h1>
      </div>
    </div>
  );
};

export default HeroSectionUI;
