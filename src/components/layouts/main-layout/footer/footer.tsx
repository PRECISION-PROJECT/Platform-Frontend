import { Icons } from "@/assets/icons";
import MaxWidthContainer from "@/components/containers/max-width-container";
import { VStack } from "@/components/utilities";
import { ROUTES } from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  "Home",
  "About Us",
  "Services",
  "Portfolio",
  "Blog",
  "Contact",
];
const services = [
  "Custom Furniture",
  "Built-ins",
  "Commercial Projects",
  "Restoration",
  "Consultation",
];

const Footer = () => {
  return (
    <footer className="border-t bg-background text-secondary py-10 md:py-20">
      <MaxWidthContainer className="px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 my-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Precision Wood Logo"
              width={112}
              height={48}
              className=" h-12 w-28 object-contain"
              priority
            />
            <p className="text-sm text-text-secondary leading-relaxed opacity-90">
              Premium custom woodworking for discerning clients. Crafting
              masterpieces since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={ROUTES.HOME}
                  className="opacity-90 transition-opacity text-text-secondary hover:opacity-100 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.ABOUT}
                  className="opacity-90 transition-opacity text-text-secondary hover:opacity-100 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.SERVICES}
                  className="opacity-90 transition-opacity text-text-secondary hover:opacity-100 hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.PORTFOLIO}
                  className="opacity-90 transition-opacity text-text-secondary hover:opacity-100 hover:underline"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.BLOGS}
                  className="opacity-90 transition-opacity text-text-secondary hover:opacity-100 hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.CONTACT}
                  className="opacity-90 transition-opacity text-text-secondary hover:opacity-100 hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90 text-text-secondary hover:underline">
                Custom Furniture
              </li>
              <li className="opacity-90 text-text-secondary hover:underline">
                Built-ins
              </li>
              <li className="opacity-90 text-text-secondary hover:underline">
                Commercial Projects
              </li>
              <li className="opacity-90 text-text-secondary hover:underline">
                Restoration
              </li>
              <li className="opacity-90 text-text-secondary hover:underline">
                Consultation
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p className="opacity-90 text-text-secondary hover:underline">
                123 Workshop Lane
              </p>
              <p className="opacity-90 text-text-secondary hover:underline">
                Craftsville, WD 12345
              </p>
              <p className="opacity-90 text-text-secondary hover:underline">
                Phone: (555) 123-4567
              </p>
              <p className="opacity-90 text-text-secondary hover:underline">
                Email:
              </p>
              <p className="opacity-90 text-text-secondary hover:underline">
                info@masterwoodworking.com
              </p>
              <div className="flex gap-3 pt-4">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-foreground transition-colors hover:bg-gray-400/80"
                  aria-label="Facebook"
                >
                  <Icons.facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-foreground transition-colors hover:bg-gray-400/80"
                  aria-label="Twitter"
                >
                  <Icons.twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-foreground transition-colors hover:bg-gray-400/80"
                  aria-label="Github"
                >
                  <Icons.github className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-foreground transition-colors hover:bg-gray-400/80"
                  aria-label="Google"
                >
                  <Icons.google className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <VStack className="md:flex hidden" spacing={16}>
          <p className="text-center text-9xl text-[170px] text-white font-light opacity-90 font-spring pt-8">
            PRECISION
          </p>
          <p className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Master Custom Woodworking. All
            rights reserved.
          </p>
        </VStack>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
