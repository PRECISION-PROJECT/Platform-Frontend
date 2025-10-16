import { ROUTES } from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={ROUTES.HOME}>
      <Image
        src="/logo.png"
        alt="Precision Wood Logo"
        width={160}
        height={64}
        className="h-16 w-40 object-contain"
        priority
      />
    </Link>
  );
};

export default Logo;
