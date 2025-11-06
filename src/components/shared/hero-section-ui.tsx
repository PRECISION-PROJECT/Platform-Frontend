import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  title?: string;
  heading?: string;
  description?: string;
  subHeading?: string;
  className?: string;
};

const HeroSectionUI = ({
  title = "PRECISION WOOD",
  description = "PRECISION WOODWORKING",
  subHeading = "HOME / CONTACT",
  heading = "CONTACT",
  className,
}: Props) => {
  return (
    <div
      className={cn(
        "relative w-full h-[55vh] md:h-[65vh] xl:h-[520px]",
        className
      )}
    >
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
        <p className="text-xs sm:text-sm font-light tracking-widest">{title}</p>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-xs sm:text-sm font-light mb-4">{subHeading}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-13xl font-spring font-light tracking-wide">
          {heading}
        </h1>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none hidden md:block">
        <span className="text-18xl font-medium text-white/5 tracking-wider whitespace-nowrap text-stroke">
          {description}
        </span>
      </div>
    </div>
  );
};

export default HeroSectionUI;
